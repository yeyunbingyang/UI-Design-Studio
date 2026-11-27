import { createHash } from 'node:crypto';
import { createServer } from 'node:net';
import { join } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium, type Browser, type BrowserContext, type Route } from 'playwright';
import { extension } from 'mime-types';
import { fetchRemote, displayUrl, webUrl } from './network.ts';
import { buildPreview, embeddedAssets, rewriteCss } from './preview.ts';
import { compareViewport, recordAction, snapshot, viewportImage, viewports, type Evidence, type Recipe } from './evidence.ts';

const pageBudget = 24 * 1024 * 1024;
const resourceLimit = 250;
const kinds = new Set(['document', 'stylesheet', 'script', 'image', 'font']);
const previewKinds = new Set(['stylesheet', 'image', 'font']);

export type Entry = { url: string; kind: string; status?: number; file?: string; reason?: string;
  code?: 'timeout' | 'blocked' | 'http' | 'budget' | 'network' | 'metadata' };
export type CaptureResult = { finalUrl: string; title: string; links: string[]; entries: Entry[]; evidence?: Evidence };
type CaptureOptions = { recipes?: Recipe[]; allowDocument?: (url: URL) => void | Promise<void> };
type Asset = { name: string; url: string; body: Buffer; kind: string };
type Context = { browser: Browser; context: BrowserContext; close: () => Promise<void> };

export async function openBrowser(): Promise<Context> {
  const deny = createServer(socket => socket.destroy());
  await new Promise<void>((resolve, reject) => {
    deny.once('error', reject);
    deny.listen(0, '127.0.0.1', resolve);
  });
  let browser: Browser | undefined;
  try {
    const address = deny.address();
    if (!address || typeof address === 'string') throw new Error('浏览器隔离代理启动失败');
    browser = await chromium.launch({
      chromiumSandbox: true,
      proxy: { server: 'http://127.0.0.1:' + address.port, bypass: '<-loopback>' },
      args: ['--disable-quic', '--force-webrtc-ip-handling-policy=disable_non_proxied_udp']
    });
    const context = await browser.newContext({ serviceWorkers: 'block', acceptDownloads: false, viewport: { width: 1440, height: 900 } });
    await context.routeWebSocket('**/*', socket => socket.close());
    const runningBrowser = browser;
    return { browser: runningBrowser, context, close: async () => {
      try { await runningBrowser.close(); } finally { deny.close(); }
    } };
  } catch (error) {
    try { await browser?.close(); } finally { deny.close(); }
    throw error;
  }
}

export async function capturePage(
  context: BrowserContext, input: string, directory: string, serverSignal: AbortSignal,
  requestRemote = fetchRemote, allowedOrigin?: string, options: CaptureOptions = {}
): Promise<CaptureResult> {
  const page = await context.newPage();
  const controller = new AbortController();
  const signal = AbortSignal.any([controller.signal, serverSignal, AbortSignal.timeout(43_000)]);
  const hardLimit = AbortSignal.any([serverSignal, AbortSignal.timeout(55_000)]);
  const entries: Entry[] = [];
  const assets = new Map<string, Asset>();
  const localAssets = new Map<string, string>();
  const inflight = new Set<Promise<void>>();
  const readiness: string[] = [];
  let critical = 0;
  let lastCritical = Date.now();
  let bytes = 0;
  let requests = 0;
  let frozen = false;
  let originalDocument: Buffer | undefined;
  let finalUrl = input;
  let documentError: string | undefined;

  const intercept = async (route: Route) => {
    const request = route.request();
    const kind = request.resourceType();
    const url = request.url();
    const entry: Entry = { url: displayUrl(url), kind };
    let primary = false;
    try {
      if (frozen || signal.aborted) return await route.abort();
      if (++requests > resourceLimit) {
        if (requests === resourceLimit + 1) entries.push({ url: entry.url, kind, reason: '页面请求数量超过上限', code: 'budget' });
        return await route.abort();
      }
      entries.push(entry);
      primary = kind === 'document' && request.isNavigationRequest() &&
        request.frame() === page.mainFrame() && !originalDocument && url === input;
      const method = request.method();
      if (!['GET', 'HEAD'].includes(method) || ['media', 'eventsource', 'ping'].includes(kind) ||
        (kind === 'document' && !primary)) throw new Error('此类请求未执行');
      if (bytes >= pageBudget) throw new Error('页面资源总量超过 24 MiB');
      const guard = primary ? async (target: URL) => {
        if (allowedOrigin && target.origin !== allowedOrigin) throw new Error('页面已跳转到采集站点之外');
        await options.allowDocument?.(target);
      } : undefined;
      const response = await requestRemote(webUrl(url), method, await request.allHeaders(), signal, undefined, guard);
      entry.status = response.status;
      if (primary && (response.status >= 400 || !/^(text\/html|application\/xhtml\+xml)\b/i.test(response.headers['content-type'] ?? ''))) {
        throw new Error(response.status >= 400 ? '网页返回 HTTP ' + response.status : '目标响应不是 HTML 页面');
      }
      if (primary && allowedOrigin && response.url.origin !== allowedOrigin) throw new Error('页面已跳转到采集站点之外');
      if (bytes + response.body.length > pageBudget) throw new Error('页面资源总量超过 24 MiB');
      bytes += response.body.length;
      let body = response.body;
      const headers = { ...response.headers };
      if (primary) {
        originalDocument = body;
        finalUrl = response.url.href;
        entry.file = 'original/document.html';
        if (finalUrl !== input && /^text\/html\s*(?:;\s*charset\s*=\s*["']?utf-8\b|$)/i.test(headers['content-type'] ?? '')) {
          const escaped = finalUrl.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
          const source = body.toString('utf8');
          const base = '<base href="' + escaped + '">';
          const head = /<head\b[^>]*>/i;
          body = Buffer.from(head.test(source) ? source.replace(head, match => match + base) : base + source);
        }
      } else if (kinds.has(kind) && response.status >= 200 && response.status < 300 && method === 'GET') {
        const mime = (headers['content-type'] ?? '').split(';')[0].trim().toLowerCase();
        const ext = kind === 'stylesheet' ? 'css' : kind === 'script' ? 'js' : extension(mime) || 'bin';
        const name = createHash('sha256').update(response.url.href).update(body).digest('hex').slice(0, 32) + '.' + ext;
        const asset = { name, url: response.url.href, body, kind };
        assets.set(name, asset);
        if (previewKinds.has(kind)) {
          localAssets.set(url, name);
          localAssets.set(asset.url, name);
        }
        entry.file = 'original/assets/' + name;
      } else {
        entry.reason = response.status >= 400 ? 'HTTP ' + response.status : '仅记录请求结果';
        entry.code = response.status >= 400 ? 'http' : 'metadata';
      }
      await route.fulfill({ status: response.status, headers, body });
    } catch (error) {
      const reason = error instanceof Error && /[\u4e00-\u9fff]/.test(error.message) ? error.message :
        signal.aborted ? '采集已停止或超时' : '资源连接失败';
      entry.reason = reason;
      entry.code = /超时|停止/.test(reason) ? 'timeout' : /超出|超过|上限/.test(reason) ? 'budget' :
        /HTTP/.test(reason) ? 'http' : /拦截|未执行|范围|站点之外|规则/.test(reason) ? 'blocked' : 'network';
      if (primary) documentError = reason;
      await route.abort().catch(() => {});
    }
  };

  const handle = (route: Route) => {
    const important = ['document', 'script', 'stylesheet', 'fetch', 'xhr', 'font'].includes(route.request().resourceType());
    if (important) { critical++; lastCritical = Date.now(); }
    const work = intercept(route);
    inflight.add(work);
    const finish = () => {
      inflight.delete(work);
      if (important) { critical--; lastCritical = Date.now(); }
    };
    void work.then(finish, finish);
    return work;
  };
  // 上下文默认代理拒绝所有网络连接。只有此页面的拦截处理器可以转发请求。
  await page.route('**/*', handle);
  const closeOnAbort = () => { void page.close().catch(() => {}); };
  hardLimit.addEventListener('abort', closeOnAbort, { once: true });
  async function settle(timeout: number) {
    const end = Date.now() + timeout;
    return page.evaluate(() => {
      let changed = performance.now();
      const scope = window as Window & { captureQuiet?: () => boolean; captureObserver?: MutationObserver };
      scope.captureObserver?.disconnect();
      const observer = new MutationObserver(() => { changed = performance.now(); });
      observer.observe(document, { subtree: true, attributes: true, childList: true, characterData: true });
      scope.captureObserver = observer;
      scope.captureQuiet = () => performance.now() - changed >= 650;
    }).then(async () => {
      while (!hardLimit.aborted && Date.now() < end) {
        const quiet = await page.evaluate(() => (window as Window & { captureQuiet?: () => boolean }).captureQuiet?.());
        if (quiet && critical === 0 && Date.now() - lastCritical >= 450) return true;
        await page.waitForTimeout(100);
      }
      return false;
    });
  }
  try {
    try {
      await page.goto(input, { waitUntil: 'commit', timeout: 25_000 });
    } catch (error) {
      if (!originalDocument || documentError || hardLimit.aborted) throw error;
      readiness.push('导航未在时限内确认');
    }
    if (!originalDocument || documentError) throw new Error(documentError ?? '未捕获 HTML 文档');
    const shots: { label: string; reason?: string; views: { data: Awaited<ReturnType<typeof snapshot>>;
      size: typeof viewports[number]; original: Buffer | null }[] }[] = [];
    let originalDom: string | undefined;
    let title = '';
    try {
      if (!await page.locator('body').waitFor({ state: 'attached', timeout: 8500 }).then(() => true, () => false)) {
        readiness.push('未在时限内找到主体');
      }
      if (!await settle(5000)) readiness.push('动态内容或关键请求未稳定');
      for (let i = 0; i < 8; i++) {
        const atBottom = await page.evaluate(() => {
          window.scrollBy(0, Math.round(innerHeight * 0.85));
          return scrollY + innerHeight >= document.documentElement.scrollHeight - 2;
        });
        await page.waitForTimeout(220);
        if (atBottom && await page.evaluate(() => scrollY + innerHeight >= document.documentElement.scrollHeight - 2)) break;
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      if (!await settle(4000)) readiness.push('滚动后动态内容或关键请求未稳定');
      async function record(label: string, recipe?: Recipe) {
        const state: typeof shots[number] = { label, views: [] };
        shots.push(state);
        if (recipe) {
          if (signal.aborted) { state.reason = '状态录制已超时'; return; }
          try {
            await recordAction(page, recipe);
            if (!await settle(1400)) state.reason = '交互后动态内容未稳定';
          } catch (error) {
            state.reason = error instanceof Error && ['所选元素与交互类型不匹配', '点击后未观察到页面状态变化', '选择器必须使用有效 CSS 语法']
              .includes(error.message) ? error.message : '交互元素不可用或操作超时';
            return;
          }
        }
        for (const size of viewports) {
          if (hardLimit.aborted || (signal.aborted && state.views.length > 0)) break;
          await page.setViewportSize(size);
          await page.evaluate(() => window.scrollTo(0, 0));
          if (size.width !== 1440 && !await settle(1300) && !readiness.includes('移动视口的资源未稳定')) {
            readiness.push('移动视口的资源未稳定');
          }
          const fontReady = await page.evaluate(() => Promise.race([
            document.fonts.ready.then(() => true), new Promise<boolean>(done => setTimeout(() => done(false), 650))
          ]));
          if (!fontReady && !readiness.includes('字体未在时限内就绪')) readiness.push('字体未在时限内就绪');
          const data = await snapshot(page);
          if (Buffer.byteLength(data.html) > 8 * 1024 * 1024) throw new Error('渲染后的 DOM 超过 8 MiB');
          const original = await viewportImage(page);
          state.views.push({ size, data, original });
        }
        if (!hardLimit.aborted && !signal.aborted) await page.setViewportSize(viewports[0]);
      }
      originalDom = await page.content();
      if (Buffer.byteLength(originalDom) > 8 * 1024 * 1024) throw new Error('渲染后的 DOM 超过 8 MiB');
      title = await page.title();
      await record('默认画面').catch(error => {
        if (!shots[0]?.views.length || serverSignal.aborted) throw error;
        readiness.push('部分视口未在时限内保存');
      });
      let interrupted = false;
      for (const recipe of options.recipes ?? []) {
        if (interrupted || hardLimit.aborted) {
          shots.push({ label: recipe.label, views: [], reason: '前序状态未取得，未执行本步骤' });
          continue;
        }
        await record(recipe.label, recipe).catch(() => { shots.at(-1)!.reason = '状态快照未在时限内保存'; });
        interrupted = Boolean(shots.at(-1)?.reason && !shots.at(-1)?.views.length);
      }
    } catch (error) {
      serverSignal.throwIfAborted();
      if (!hardLimit.aborted && !signal.aborted) throw error;
      readiness.push('浏览器采集达到时限');
    }
    if (!shots[0]?.views.length) {
      const html = originalDom ?? originalDocument.toString('utf8');
      readiness.push('未取得完整渲染 DOM，使用可用文档');
      shots[0] = { label: '默认画面', reason: '仅保留可用文档', views: [{ size: viewports[0], original: null,
        data: { html, dom: html, analysis: { nodes: [], special: { iframe: 0, canvas: 0 }, styles: [] } } }] };
    }
    const first = shots[0].views[0];
    if (signal.aborted) readiness.push('采集达到页面时限');
    frozen = true;
    // 关闭页面会让仍在等待浏览器的请求结束，再写入稳定的采集结果。
    await page.close();
    controller.abort();
    await Promise.allSettled(inflight);
    serverSignal.throwIfAborted();

    const preview = buildPreview(first.data.html, finalUrl, localAssets);
    await Promise.all([
      mkdir(join(directory, 'original', 'assets'), { recursive: true }),
      mkdir(join(directory, 'assets'), { recursive: true })
    ]);
    await writeFile(join(directory, 'original', 'document.html'), originalDocument);
    if (originalDom) await writeFile(join(directory, 'original', 'dom.html'), originalDom);
    await writeFile(join(directory, 'preview.html'), preview.html);
    if (first.original) await writeFile(join(directory, 'screenshot.png'), first.original);
    else entries.push({ kind: 'screenshot', url: displayUrl(finalUrl), reason: '截图未生成', code: 'timeout' });
    for (const asset of assets.values()) {
      await writeFile(join(directory, 'original', 'assets', asset.name), asset.body);
      if (previewKinds.has(asset.kind)) {
        const body = asset.kind === 'stylesheet'
          ? rewriteCss(asset.body.toString('utf8'), asset.url, localAssets, '') : asset.body;
        await writeFile(join(directory, 'assets', asset.name), body);
      }
    }
    const embedded = await embeddedAssets(join(directory, 'assets'));
    const evidence: Evidence = { readiness, quality: 'complete', states: [] };
    const analyses = [];
    const discovered = new Set(preview.links);
    for (const [index, state] of shots.entries()) {
      const row: Evidence['states'][number] = { label: state.label, reason: state.reason, visuals: [] };
      evidence.states.push(row);
      for (const view of state.views) {
        const prefix = 'state-' + index + '-' + view.size.width;
        const template = buildPreview(view.data.html, finalUrl, localAssets);
        await writeFile(join(directory, 'original', prefix + '.html'), view.data.dom);
        if (view.size.width === 1440 && index > 0) {
          row.template = 'state-' + index + '.html';
          await writeFile(join(directory, row.template), template.html);
        }
        template.links.forEach(link => discovered.add(link));
        analyses.push({ state: state.label, ...view.size, ...view.data.analysis,
          styles: view.data.analysis.styles.map(url => ({ url: displayUrl(url), local: localAssets.get(url) ?? null })) });
        row.visuals.push(await compareViewport(context, directory, prefix, template.html, embedded, view.size, view.original, hardLimit));
      }
      if (row.visuals.length < viewports.length && !row.reason) row.reason = '部分视口未取得快照';
    }
    evidence.quality = readiness.length || evidence.states.some(state => state.reason || state.visuals.some(view => view.reason)) ||
      entries.some(entry => (kinds.has(entry.kind) || ['fetch', 'xhr'].includes(entry.kind)) && entry.code && entry.code !== 'metadata')
      ? 'partial' : 'complete';
    await writeFile(join(directory, 'evidence.json'), JSON.stringify({ ...evidence, analyses,
      missing: entries.filter(entry => previewKinds.has(entry.kind) && !entry.file) }));
    return { finalUrl, title, links: [...discovered], entries, evidence };
  } catch (error) {
    if (documentError) throw new Error(documentError, { cause: error });
    if (signal.aborted) throw new Error('采集已停止或超时', { cause: error });
    throw new Error('网页渲染失败', { cause: error });
  } finally {
    controller.abort();
    hardLimit.removeEventListener('abort', closeOnAbort);
    await page.close().catch(() => {});
    await Promise.allSettled(inflight);
  }
}
