import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { mkdir, mkdtemp, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { setTimeout } from 'node:timers/promises';
import type { CaptureResult } from '../backend/capture.ts';
import { fetchRemote, isPublicAddress, publicAddress, resolveSystemAddress, webUrl } from '../backend/network.ts';
import { buildPreview, embeddedAssets, renderPreview, rewriteCss, sitePreview } from '../backend/preview.ts';
import { readPolicy } from '../backend/discovery.ts';

process.env.PLAYWRIGHT_BROWSERS_PATH ??= join(import.meta.dirname, '..', '.runtime', 'browsers');
const { chromium } = await import('playwright');
const { capturePage, openBrowser } = await import('../backend/capture.ts');
const { Jobs } = await import('../backend/jobs.ts');
const runtime = join(import.meta.dirname, '..', '.runtime');
await mkdir(runtime, { recursive: true });

test('公开地址校验覆盖本机、私网、保留地址和混合 DNS 结果', async () => {
  for (const ip of ['127.0.0.1', '10.1.2.3', '169.254.169.254', '100.64.1.1', '::1', '::ffff:127.0.0.1', '2001:db8::1'])
    assert.equal(isPublicAddress(ip), false, ip);
  assert.equal(isPublicAddress('8.8.8.8'), true);
  assert.equal(isPublicAddress('2606:4700::1111'), true);
  await assert.rejects(publicAddress(webUrl('http://127.1')), /非公网/);
  await assert.rejects(publicAddress(webUrl('https://fixture.test'), async () => [
    { address: '8.8.8.8', family: 4 }, { address: '192.168.1.1', family: 4 }
  ]), /非公网/);
});

test('静态预览提供本地资源和站内链接，清除活动内容', () => {
  const assets = new Map([['https://fixture.test/test.css', 'abc.css'], ['https://fixture.test/p.png', 'picture.png']]);
  const result = buildPreview('<head><meta http-equiv="refresh" content="0;url=https://other.test"><link rel="stylesheet" href="test.css"></head><body><script>alert(1)</script><img src="p.png" onerror="alert(1)"><a href="/next#part" ping="https://other.test">下一页</a><iframe src="https://other.test"></iframe></body>', 'https://fixture.test/', assets);
  const html = renderPreview(result.html, new Map([['https://fixture.test/next', 2]]));
  assert.deepEqual(result.links, ['https://fixture.test/next']);
  assert.match(html, /assets\/picture\.png/);
  assert.match(html, /\.\.\/2\/index\.html#part/);
  assert.doesNotMatch(html, /other\.test|<script|onerror|<iframe/);
  assert.match(rewriteCss('a{background:image-set("p.png" 1x,"https://other.test/a.png" 2x)}', 'https://fixture.test/', assets, ''), /"picture\.png" 1x,"data:," 2x/);
});

test('仅对公开域名的合成地址执行 HTTPS DNS 查询，并继续拒绝非公网结果', async () => {
  const synthetic = async () => [{ address: '198.18.0.31', family: 4 }];
  const forbidden = async () => [{ address: '10.0.0.8', family: 4 }];
  let calls = 0;
  const resolve = async () => { calls++; return [{ address: '8.8.8.8', family: 4 }]; };
  assert.equal((await publicAddress(webUrl('https://public.com'), host => resolveSystemAddress(host, synthetic, resolve))).address, '8.8.8.8');
  await assert.rejects(publicAddress(webUrl('https://internal.test'), host => resolveSystemAddress(host, synthetic, resolve)), /非公网/);
  await assert.rejects(publicAddress(webUrl('https://public.com'), host => resolveSystemAddress(host, synthetic, forbidden)), /非公网/);
  assert.equal(calls, 1);
});

test('浏览器采集动态内容、跨域懒加载，拦截指向私网的重定向并离线打开', async t => {
  const font = await readFile(join(process.env.WINDIR ?? 'C:/Windows', 'Fonts', 'arial.ttf'));
  const img = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRfkAAAAASUVORK5CYII=', 'base64');
  const fixture = createServer((request, response) => {
    if (request.url === '/pixel.png') {
      response.writeHead(200, { 'Content-Type': 'image/png' }).end(img); return;
    }
    if (request.url === '/blocked') {
      response.writeHead(302, { Location: 'http://127.0.0.1/private?token=hidden' }).end(); return;
    }
    if (request.url === '/theme.css') {
      response.writeHead(200, { 'Content-Type': 'text/css' }).end('@font-face{font-family:Fixture;src:url(/type.ttf)} h1{font-family:Fixture;color:rgb(30,40,50)}'); return;
    }
    if (request.url === '/type.ttf') {
      response.writeHead(200, { 'Content-Type': 'font/ttf' }).end(font); return;
    }
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }).end(`<!doctype html><title>测试档案</title>
      <link rel="stylesheet" href="/theme.css"><script src="/slow.js" async></script><h1>初始内容</h1><script>setTimeout(()=>document.querySelector("h1").textContent="动态内容", 550);
      addEventListener("scroll",()=>{document.querySelector("#lazy").src="http://assets.fixture.test:$PORT/pixel.png";},{once:true});</script>
      <details><summary id="open">打开折叠</summary><p>录制状态</p></details><img src="/blocked"><div style="height:1600px"></div><img id="lazy"><a href="/page?q=1#section">第二页</a><a href="/page?q=1">重复</a>`.replace('$PORT', String((fixture.address() as {port:number}).port)));
  });
  fixture.listen(0, '127.0.0.1');
  await once(fixture, 'listening');
  t.after(() => new Promise<void>(done => fixture.close(() => done())));
  const tmp = await mkdtemp(join(runtime, 'test-capture-'));
  t.after(() => rm(tmp, { recursive: true, force: true }));
  const port = (fixture.address() as { port: number }).port;
  const running = await openBrowser();
  let result: CaptureResult;
  try {
    result = await capturePage(running.context, 'http://fixture.test:' + port + '/', tmp, new AbortController().signal,
      async (url, method, headers, signal, _resolve, guard) => {
        if (url.pathname === '/slow.js') { await setTimeout(950); throw new Error('资源下载超时'); }
        return fetchRemote(url, method, headers, signal, target =>
        publicAddress(target).catch(error => {
          if (['fixture.test', 'assets.fixture.test'].includes(target.hostname)) return { address: '127.0.0.1', family: 4 };
          throw error;
        }), guard);
      }, undefined, { recipes: [{ label: '折叠区已展开', kind: 'details', selector: '#open' }] });
  } finally { await running.close(); }
  assert.equal(result.title, '测试档案');
  assert.deepEqual(result.links, ['http://fixture.test:' + port + '/page?q=1']);
  assert.ok(result.entries.some(entry => entry.url.includes('assets.fixture.test') && entry.file));
  assert.ok(result.entries.some(entry => entry.reason?.includes('非公网')));
  assert.ok(result.entries.some(entry => entry.kind === 'script' && entry.code === 'timeout'));
  assert.equal(result.evidence?.quality, 'partial');
  assert.deepEqual(result.evidence?.states[0].visuals.map(view => [view.width, typeof view.ratio]), [[1440, 'number'], [390, 'number']]);
  const state = result.evidence?.states[1];
  assert.ok(state?.template);
  const report = JSON.parse(await readFile(join(tmp, 'evidence.json'), 'utf8'));
  assert.ok(report.analyses[0].nodes.some((node: {tag: string; text?: string}) => node.tag === 'h1' && node.text === '动态内容'));
  const template = await readFile(join(tmp, 'preview.html'), 'utf8');
  const { writeFile } = await import('node:fs/promises');
  await writeFile(join(tmp, 'index.html'), renderPreview(template, new Map()));
  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({ offline: true });
    const page = await context.newPage();
    const { pathToFileURL } = await import('node:url');
    await page.goto(pathToFileURL(join(tmp, 'index.html')).href);
    assert.equal(await page.locator('h1').textContent(), '动态内容');
    assert.equal(await page.locator('h1').evaluate(node => getComputedStyle(node).color), 'rgb(30, 40, 50)');
    assert.deepEqual(await page.evaluate(async () => { await document.fonts.ready; return [...document.fonts].map(item => item.status); }), ['loaded']);
    assert.equal(await page.locator('#lazy').evaluate(node => (node as HTMLImageElement).naturalWidth), 1);
    const allPages = new Map(result.links.map(url => [url, 2]));
    const archive = sitePreview([
      { id: 1, title: '首页', html: renderPreview(template.replace('</head>', '<noscript><link rel="stylesheet" href="https://external.test/fallback.css"></noscript></head>'), allPages, await embeddedAssets(join(tmp, 'assets'))),
        states: [{ label: state.label, html: renderPreview(await readFile(join(tmp, state.template), 'utf8'), allPages, await embeddedAssets(join(tmp, 'assets'))) }] },
      { id: 2, title: '第二页', html: renderPreview(buildPreview('<h1 id="section">第二页</h1>', result.links[0], new Map()).html, allPages, new Map()) }
    ]);
    const standalone = join(tmp, 'website.html');
    await writeFile(standalone, archive);
    const external: string[] = [];
    page.on('request', request => { if (/^https?:/.test(request.url())) external.push(request.url()); });
    await page.goto(pathToFileURL(standalone).href);
    const frame = page.frameLocator('iframe');
    assert.equal(await frame.locator('h1').textContent(), '动态内容');
    assert.equal(await frame.locator('h1').evaluate(node => getComputedStyle(node).color), 'rgb(30, 40, 50)');
    assert.deepEqual(await frame.locator('h1').evaluate(async node => {
      await node.ownerDocument.fonts.ready;
      return [...node.ownerDocument.fonts].map(item => item.status);
    }), ['loaded']);
    assert.equal(await frame.locator('#lazy').evaluate(node => (node as HTMLImageElement).naturalWidth), 1);
    await frame.getByRole('link', { name: '第二页' }).click();
    await page.waitForURL('**#page-2#section');
    await frame.getByRole('heading', { name: '第二页' }).waitFor();
    await page.goBack();
    await frame.getByRole('heading', { name: '动态内容' }).waitFor();
    await page.getByLabel('页面状态').selectOption({ label: '折叠区已展开' });
    await frame.getByText('录制状态').waitFor({ state: 'visible' });
    assert.deepEqual(external, []);
  } finally { await browser.close(); }
});

test('站点扫描发现 XML、去重分页、限制来源和并发，重采失败保留原产物', async t => {
  const directory = await mkdtemp(join(runtime, 'test-scan-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const origin = 'https://fixture.test';
  const factory = (async () => ({ context: null, async close() {} })) as unknown as typeof openBrowser;
  const policy: typeof readPolicy = (url, signal) => readPolicy(url, signal, async (target, _method, _headers, _signal, _resolve, guard) => {
    await guard?.(target);
    const body = target.pathname === '/robots.txt' ? 'User-agent: *\nDisallow: /denied\nSitemap: ' + origin + '/index.xml' :
      target.pathname === '/index.xml' ? '<sitemapindex><sitemap><loc>' + origin + '/pages.xml</loc></sitemap></sitemapindex>' :
      target.pathname === '/pages.xml' ? '<urlset><url><loc>' + origin + '/from-map</loc></url><url><loc>https://outside.test/page</loc></url></urlset>' : '';
    return { url: target, body: Buffer.from(body), status: body ? 200 : 404, headers: {} };
  });
  let running = 0;
  let peak = 0;
  let bad = false;
  const visited: string[] = [];
  const capture: typeof capturePage = async (_context, url, _directory, _signal, _remote, scope) => {
    if (scope) assert.equal(scope, origin);
    const path = new URL(url).pathname;
    if (path === '/' && bad) throw new Error('模拟重采失败');
    running++;
    peak = Math.max(peak, running);
    visited.push(url);
    await setTimeout(30);
    running--;
    return { finalUrl: url, title: path, entries: [], evidence: { quality: 'partial', readiness: ['测试'], states: [] },
      links: path === '/' ? ['/article?page=1', '/article?page=2&utm_source=mail', '/article?utm_source=feed&page=2#anchor', '/denied'].map(link => origin + link) :
        path === '/from-map' ? [origin + '/deep'] : [] };
  };
  const jobs = new Jobs(join(directory, 'scan.sqlite3'), directory, factory, capture, policy);
  const id = jobs.create(webUrl(origin), 'scan', { seeds: ['/manual'], maxPages: 6, maxDepth: 1 });
  const wait = async () => {
    for (let i = 0; i < 100 && jobs.get(id)?.status === 'running'; i++) await setTimeout(20);
    assert.equal(jobs.get(id)?.status, 'done');
  };
  try {
    await wait();
    const page = jobs.pages(id)[0];
    assert.equal(peak, 2);
    assert.equal(visited.filter(url => url.endsWith('/article?page=2')).length, 1);
    assert.ok(!visited.some(url => /denied|outside|\/deep/.test(url)));
    const detail = jobs.detail(jobs.get(id)!);
    assert.equal(detail.partial, 5);
    assert.equal(detail.excluded, 1);
    assert.equal(detail.budget, 1);
    assert.equal(detail.pages.find(row => row.url.endsWith('/manual'))?.source, '手动路径');
    assert.equal(detail.pages.find(row => row.url.endsWith('/from-map'))?.source, '站点地图');
    bad = true;
    assert.equal(jobs.retry(id, page.id), true);
    assert.equal(jobs.pages(id)[0].folder, page.folder);
    await wait();
    assert.equal(jobs.pages(id)[0].folder, page.folder);
    assert.match(jobs.pages(id)[0].error ?? '', /模拟重采失败/);
  } finally { await jobs.close(); }
});

test('保存队列进度，重启后继续，并只重试失败页', async t => {
  const directory = await mkdtemp(join(runtime, 'test-queue-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const db = join(directory, 'test.sqlite3');
  const factory = (async () => ({ context: null, async close() {} })) as unknown as typeof openBrowser;
  let gate!: () => void;
  const entered = new Promise<void>(done => { gate = done; });
  const attempts: string[] = [];
  let interrupted = false;
  let failOnce = true;
  const capture: typeof capturePage = async (_context, url, _path, signal) => {
    const path = new URL(url).pathname;
    attempts.push(path);
    if (path === '/1' && !interrupted) {
      gate();
      await setTimeout(10_000, undefined, { signal });
    }
    if (path === '/2' && failOnce) { failOnce = false; throw new Error('测试失败'); }
    const links = path === '/' ? ['/1', '/2', '/1'] :
      path === '/1' ? ['/3', '/4', '/5', '/6', '/7', '/8', '/9', '/10', '/11'] :
      path === '/3' ? ['/third-level'] : [];
    return { finalUrl: url, title: path, entries: [], links: [...new Set(links)].map(link => new URL(link, url).href) };
  };
  const first = new Jobs(db, directory, factory, capture);
  const id = first.create(webUrl('https://fixture.test'), 'site');
  await entered;
  await first.close();
  interrupted = true;
  const second = new Jobs(db, directory, factory, capture);
  try {
    assert.equal(second.get(id)?.status, 'interrupted');
    assert.equal(second.pages(id).filter(page => page.status === 'done').length, 1);
    assert.equal(second.retry(id), true);
    for (let i = 0; second.get(id)?.status === 'running' && i < 100; i++) await setTimeout(20);
    const problems = second.pages(id).filter(page => page.status === 'failed');
    assert.equal(problems.length, 1);
    assert.equal(second.pages(id).length, 10);
    assert.equal(second.retry(id, problems[0].id), true);
    for (let i = 0; second.get(id)?.status === 'running' && i < 100; i++) await setTimeout(20);
    assert.equal(second.pages(id).filter(page => page.status === 'done').length, 10);
    assert.equal(attempts.filter(path => path === '/').length, 1);
    assert.equal(attempts.includes('/third-level'), false);
  } finally { await second.close(); }
});
