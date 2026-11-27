import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, realpath, stat } from 'node:fs/promises';
import { once } from 'node:events';
import { basename, join, resolve } from 'node:path';
import { Zip, ZipPassThrough } from 'fflate';
import { contentType } from 'mime-types';
import { Jobs } from './jobs.ts';
import { displayUrl, webUrl } from './network.ts';
import { canonical, scanDepth, scanLimit } from './discovery.ts';
import type { Evidence, Recipe } from './evidence.ts';
import { embeddedAssets, previewPolicy, renderPreview, sitePreviewHead, sitePreviewPage, sitePreviewFoot } from './preview.ts';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { ManualRecordings } from './manual.ts';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, '.runtime', 'dist');
const idPattern = '[a-f0-9-]{36}';
const filename = '[a-f0-9]{32}\\.[a-z0-9]+';
const port = Number(process.argv[2] ?? 28717);
const host = '127.0.0.1';

function json(response: ServerResponse, status: number, payload: unknown) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify(payload));
}

async function sendFile(response: ServerResponse, path: string, type?: string) {
  const info = await stat(path);
  if (!info.isFile()) throw new Error('文件不存在');
  response.writeHead(200, { 'Content-Type': type || contentType(path) || 'application/octet-stream', 'Content-Length': info.size });
  const stream = createReadStream(path);
  response.once('close', () => stream.destroy());
  stream.on('error', () => response.destroy());
  stream.pipe(response);
}

async function body(request: IncomingMessage) {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 8192) throw new Error('请求太大');
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

const ready = (pages: ReturnType<Jobs['pages']>) => pages.filter(page => page.folder);
const links = (pages: ReturnType<typeof ready>) =>
  new Map(pages.flatMap(page => [canonical(page.url).href, canonical(page.final_url ?? page.url).href,
    page.url, page.final_url ?? page.url].map(url => [url, page.id] as const)));

async function* combined(jobs: Jobs, id: string, pages: ReturnType<typeof ready>) {
  const destinations = links(pages);
  yield sitePreviewHead;
  for (const page of pages) {
    const directory = join(jobs.output, id, page.folder!);
    const template = await readFile(join(directory, 'preview.html'), 'utf8');
    const assets = await embeddedAssets(join(directory, 'assets'));
    const recorded = page.evidence ? (JSON.parse(page.evidence) as Evidence).states : [];
    const states = [];
    for (const state of recorded) {
      if (!state.template) continue;
      states.push({ label: state.label, html: renderPreview(await readFile(join(directory, state.template), 'utf8'), destinations, assets) });
    }
    yield sitePreviewPage({ id: page.id, title: page.title || displayUrl(page.url), html: renderPreview(template, destinations, assets), states });
  }
  yield sitePreviewFoot;
}

function zipResponse(response: ServerResponse, filename: string) {
  response.writeHead(200, { 'Content-Type': 'application/zip', 'Content-Disposition': 'attachment; filename="' + filename + '"' });
  const zip = new Zip((error, data, final) => {
    if (error) response.destroy(error);
    else if (final) response.end(data);
    else response.write(data);
  });
  response.once('close', () => zip.terminate());
  async function push(entry: ZipPassThrough, data: Uint8Array, final: boolean) {
    if (response.destroyed) throw new Error('下载已关闭');
    entry.push(data, final);
    if (response.writableNeedDrain) {
      await new Promise<void>((done, reject) => {
        const onClose = () => { response.off('drain', onDrain); reject(new Error('下载已关闭')); };
        const onDrain = () => { response.off('close', onClose); done(); };
        response.once('close', onClose);
        response.once('drain', onDrain);
      });
    }
  }
  async function add(name: string, text: string) {
    const entry = new ZipPassThrough(name);
    zip.add(entry);
    await push(entry, Buffer.from(text), true);
  }
  async function file(name: string, path: string) {
    const entry = new ZipPassThrough(name);
    zip.add(entry);
    for await (const chunk of createReadStream(path)) await push(entry, chunk as Buffer, false);
    await push(entry, new Uint8Array(), true);
  }
  async function text(name: string, chunks: AsyncIterable<string>) {
    const entry = new ZipPassThrough(name);
    zip.add(entry);
    for await (const chunk of chunks) await push(entry, Buffer.from(chunk), false);
    await push(entry, new Uint8Array(), true);
  }
  async function folder(prefix: string, path: string) {
    for (const item of await readdir(path, { withFileTypes: true })) {
      if (item.isDirectory()) await folder(prefix + item.name + '/', join(path, item.name));
      else if (item.isFile()) await file(prefix + item.name, join(path, item.name));
    }
  }
  return { add, file, folder, text, end: () => zip.end() };
}

async function download(response: ServerResponse, job: NonNullable<ReturnType<Jobs['get']>>, jobs: Jobs) {
  const pages = ready(jobs.pages(job.id));
  const detail = jobs.detail(job);
  if (!pages.length) return json(response, 409, { error: '暂无可导出的页面' });
  const zip = zipResponse(response, 'website-' + job.id + '.zip');
  await zip.text('index.html', combined(jobs, job.id, pages));
  await zip.add('manifest.json', JSON.stringify({ ...detail, preview: 'index.html', pages: detail.pages.map(page => ({
    ...page, preview: page.archived ? 'index.html#page-' + page.id : undefined,
    entries: page.entries.map(entry => ({ ...entry, file: entry.file ? 'pages/' + page.id + '/' + entry.file : undefined }))
  })) }, null, 2));
  for (const page of pages) {
    const directory = join(jobs.output, job.id, page.folder!);
    const prefix = 'pages/' + page.id + '/';
    await zip.folder(prefix + 'original/', join(directory, 'original'));
    for (const name of await readdir(directory)) {
      if (/^(?:evidence\.json|screenshot\.png|state-\d+-\d+-(original|local|diff)\.png)$/.test(name)) {
        await zip.file(prefix + name, join(directory, name));
      }
    }
  }
  zip.end();
}

async function main() {
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('无效监听端口');
  const outputPath = join(root, 'data', 'downloads');
  const dbPath = resolve(process.env.TOOLORBIT_PLUGIN_DATA_DIR || join(root, 'data'));
  await mkdir(outputPath, { recursive: true });
  const output = await realpath(outputPath);
  if (/^c:/i.test(output)) throw new Error('采集目录须位于非 C 盘');
  await mkdir(dbPath, { recursive: true });
  const origin = 'http://' + host + ':' + port;
  let jobs: Jobs;
  const manualScope = createHash('sha256').update((await realpath(dbPath)).toLowerCase()).digest('hex').slice(0, 20);
  const recordings = new ManualRecordings(join(output, 'manual', manualScope));
  let exiting = false;
  const server = createServer((request, response) => {
    const timestamp = Date.now();
    const path = (request.url ?? '/').split('?')[0];
    response.on('finish', () => console.log(new Date().toISOString(), request.method, path.replace(/[^\x21-\x7e]/g, ''), response.statusCode, Date.now() - timestamp + 'ms'));
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Referrer-Policy', 'no-referrer');
    void route(request, response, path).catch(error => {
      if (response.headersSent) response.destroy();
      else if ((error as NodeJS.ErrnoException).code === 'ENOENT') json(response, 404, { error: '找不到文件' });
      else if (error instanceof SyntaxError) json(response, 400, { error: '请求格式错误' });
      else {
        console.error('[服务] 请求执行失败', error instanceof Error ? error.name : '');
        json(response, 500, { error: '操作失败，请检查本机服务日志' });
      }
    });
  });

  async function shutdown() {
    if (exiting) return;
    exiting = true;
    server.close();
    const cutoff = setTimeout(() => server.closeAllConnections(), 1500);
    cutoff.unref();
    try { await Promise.all([jobs.close(), recordings.close()]); console.log('[退出] 网页采集服务已停止'); }
    catch { process.exitCode = 1; }
  }

  async function route(request: IncomingMessage, response: ServerResponse, path: string) {
    const method = request.method;
    if (!jobs || exiting) return json(response, 503, { error: '服务正在启动或退出' });
    if (request.headers.host !== host + ':' + port) return json(response, 403, { error: '无效服务地址' });
    if (method === 'POST' && (
      request.headers['x-website-capture'] !== '1' ||
      (request.headers.origin !== undefined && request.headers.origin !== origin)
    )) return json(response, 403, { error: '无效操作来源' });
    if (method === 'GET' && path === '/api/health') return json(response, 200, { id: 'archive-website-capture', pid: process.pid });
    if (method === 'POST' && path === '/api/shutdown') {
      json(response, 200, { ok: true });
      void shutdown();
      return;
    }
    if (method === 'GET' && path === '/api/recording/browser') return json(response, 200, await recordings.status());
    if (method === 'GET' && path === '/api/recordings') return json(response, 200, await recordings.list());
    if (method === 'POST' && (path === '/api/recording/connect' || path === '/api/recordings')) {
      try {
        if (path.endsWith('/connect')) return json(response, 200, await recordings.connect());
        const input = await body(request);
        if (typeof input?.targetId !== 'string' || !/^[a-z0-9-]{1,80}$/i.test(input.targetId)) {
          return json(response, 400, { error: '请选择要录制的标签页' });
        }
        return json(response, 201, { id: await recordings.start(input.targetId) });
      } catch (error) {
        const message = error instanceof Error && /[\u4e00-\u9fff]/.test(error.message) ? error.message : '无法开始录制，请检查 Chrome 连接';
        return json(response, 409, { error: message });
      }
    }
    const recording = new RegExp('^/api/recordings/(' + idPattern + ')(?:/(stop|preview|zip|step-[1-9]\\d*\\.png))?$').exec(path);
    if (recording) {
      const [, id, action] = recording;
      const record = await recordings.read(id);
      if (!record) return json(response, 404, { error: '找不到录制记录' });
      if (method === 'GET' && !action) return json(response, 200, record);
      if (method === 'POST' && action === 'stop') {
        if (recordings.activeId !== id) return json(response, 409, { error: '该录制已经结束' });
        await recordings.stop();
        return json(response, 200, { ok: true });
      }
      if (method === 'GET' && action?.endsWith('.png')) return sendFile(response, join(recordings.directory(id), action), 'image/png');
      if (method === 'GET' && (action === 'preview' || action === 'zip')) {
        if (!record.steps.some(step => step.snapshot) || record.status === 'recording') {
          return json(response, 409, { error: '暂无已结束的录制画面' });
        }
        if (action === 'preview') {
          response.setHeader('Content-Type', 'text/html; charset=utf-8');
          response.setHeader('Cache-Control', 'no-store');
          if (new URL(request.url!, origin).searchParams.has('download')) {
            response.setHeader('Content-Disposition', 'attachment; filename="recording.html"');
          }
          await pipeline(Readable.from(recordings.preview(record)), response);
        } else {
          const zip = zipResponse(response, 'recording-' + id + '.zip');
          await zip.text('index.html', recordings.preview(record));
          await zip.add('timeline.json', JSON.stringify(record, null, 2));
          await zip.folder('original/', join(recordings.directory(id), 'original'));
          for (const step of record.steps.filter(step => step.screenshot)) {
            const name = 'step-' + step.id + '.png';
            await zip.file(name, join(recordings.directory(id), name));
          }
          zip.end();
        }
        return;
      }
    }
    if (path === '/api/jobs' && method === 'GET') return json(response, 200, jobs.list());
    if (path === '/api/jobs' && method === 'POST') {
      const input = await body(request);
      if (!input || typeof input.url !== 'string' || input.url.length > 2048 || !['site', 'single', 'scan'].includes(input.mode)) {
        return json(response, 400, { error: '请输入网址并选择采集模式' });
      }
      let url: URL;
      try { url = webUrl(input.url.trim()); }
      catch { return json(response, 400, { error: '请输入有效的 HTTP 或 HTTPS 地址' }); }
      const recipes = input.recipes ?? [];
      const seeds = input.seeds ?? [];
      if (!Array.isArray(recipes) || recipes.length > 3 || recipes.some(value =>
        !value || typeof value.label !== 'string' || !value.label.trim() || value.label.length > 80 ||
        typeof value.selector !== 'string' || !value.selector.trim() || value.selector.length > 250 ||
        !['menu', 'tab', 'details', 'dialog'].includes(value.kind))) {
        return json(response, 400, { error: '最多录制 3 个交互，请检查名称、选择器和类型' });
      }
      if (!Array.isArray(seeds) || seeds.length > 20 || seeds.some(seed => typeof seed !== 'string' ||
        seed.length > 2048 || !seed.startsWith('/') || seed.startsWith('//') || seed.includes('\\'))) {
        return json(response, 400, { error: '补充路径必须以单个斜线开头，最多 20 条' });
      }
      const maxPages = input.maxPages ?? scanLimit;
      const maxDepth = input.maxDepth ?? scanDepth;
      if (!Number.isInteger(maxPages) || maxPages < 1 || maxPages > scanLimit ||
        !Number.isInteger(maxDepth) || maxDepth < 1 || maxDepth > scanDepth) {
        return json(response, 400, { error: '扫描预算须在 1–100 页、1–4 层内' });
      }
      return json(response, 201, { id: jobs.create(input.mode === 'scan' ? canonical(url.href) : url, input.mode,
        { seeds, maxPages, maxDepth, recipes: recipes.map(({ label, selector, kind }: Recipe) => ({ label: label.trim(), selector: selector.trim(), kind })) }) });
    }
    const evidenceRoute = new RegExp('^/api/jobs/(' + idPattern + ')/pages/([1-9]\\d*)/evidence/(evidence\\.json|state-[0-3]-(1440|390)-(original|local|diff)\\.png)$').exec(path);
    if (method === 'GET' && evidenceRoute) {
      const [, id, pageId, name] = evidenceRoute;
      const page = jobs.pages(id).find(item => item.id === Number(pageId));
      if (!page?.folder || !page.evidence) return json(response, 404, { error: '该页面没有验证记录' });
      response.setHeader('Cache-Control', 'no-store');
      return sendFile(response, join(output, id, page.folder, name));
    }
    const jobRoute = new RegExp('^/api/jobs/(' + idPattern + ')(?:/(zip|preview|resume|pages/([1-9]\\d*)/retry))?$').exec(path);
    if (jobRoute) {
      const [, id, action, pageId] = jobRoute;
      const job = jobs.get(id);
      if (!job) return json(response, 404, { error: '找不到任务' });
      if (method === 'GET' && !action) return json(response, 200, jobs.detail(job));
      if (method === 'GET' && action === 'zip') return download(response, job, jobs);
      if (method === 'GET' && action === 'preview') {
        const pages = ready(jobs.pages(id));
        if (!pages.length) return json(response, 409, { error: '暂无已采集页面' });
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.setHeader('Cache-Control', 'no-store');
        if (new URL(request.url!, origin).searchParams.has('download')) {
          response.setHeader('Content-Disposition', 'attachment; filename="website-preview.html"');
        }
        await pipeline(Readable.from(combined(jobs, id, pages)), response);
        return;
      }
      if (method === 'POST' && (action === 'resume' || pageId)) {
        return jobs.retry(id, pageId ? Number(pageId) : undefined)
          ? json(response, 202, { ok: true }) : json(response, 409, { error: '当前任务没有可继续或重试的页面' });
      }
    }
    const preview = new RegExp('^/previews/(' + idPattern + ')/pages/([1-9]\\d*)/(index\\.html|screenshot\\.png|assets/(' + filename + '))$').exec(path);
    if (method === 'GET' && preview) {
      const [, id, pageId, file, asset] = preview;
      const pages = ready(jobs.pages(id));
      const page = pages.find(item => item.id === Number(pageId));
      if (!page || !page.folder) return json(response, 404, { error: '找不到已采集页面' });
      const directory = join(output, id, page.folder);
      response.setHeader('Content-Security-Policy', previewPolicy);
      if (file === 'index.html') {
        const html = renderPreview(await readFile(join(directory, 'preview.html'), 'utf8'), links(pages));
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(html);
      } else {
        // 仅开放图片、字体和样式，为独立导航的资源同样附带隔离策略。
        const type = asset ? contentType(asset) || 'application/octet-stream' : 'image/png';
        if (!/^(?:image\/|font\/|application\/(?:font-|vnd\.ms-fontobject)|text\/css)/.test(type)) {
          return json(response, 404, { error: '此资源仅可在导出包中查看' });
        }
        if (/^(?:font\/|application\/)/.test(type)) response.setHeader('Access-Control-Allow-Origin', '*');
        await sendFile(response, join(directory, file), type);
      }
      return;
    }
    if (method === 'GET' && path === '/') {
      response.setHeader('Cache-Control', 'no-store');
      return sendFile(response, join(dist, 'index.html'));
    }
    if (method === 'GET' && /^\/assets\/[\w.-]+\.(?:js|css)$/.test(path)) {
      return sendFile(response, join(dist, 'assets', basename(path)));
    }
    return json(response, 404, { error: '找不到该页面' });
  }

  server.listen(port, host);
  try { await once(server, 'listening'); }
  catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'EADDRINUSE') { process.exitCode = 98; return; }
    throw error;
  }
  try {
    jobs = new Jobs(join(dbPath, 'website-capture.sqlite3'), output);
    await recordings.init();
  }
  catch (error) { server.close(); throw error; }
  process.on('SIGINT', () => void shutdown());
  process.on('SIGTERM', () => void shutdown());
  console.log('[就绪] ' + origin + '/');
}

void main().catch(error => {
  console.error('[启动] ' + (error instanceof Error && /[\u4e00-\u9fff]/.test(error.message) ? error.message : '无法初始化网页采集服务'));
  process.exitCode = 1;
});
