import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { setTimeout as pause } from 'node:timers/promises';
import { ManualRecordings } from '../backend/manual.ts';
import { ChromeConnection } from '../backend/chrome.ts';

process.env.PLAYWRIGHT_BROWSERS_PATH ??= resolve('.runtime/browsers');
const { chromium } = await import('playwright');

async function until<T>(check: () => Promise<T>) {
  for (let i = 0; i < 65; i++) {
    const value = await check();
    if (value) return value;
    await pause(100);
  }
  throw new Error('等待录制状态超时');
}

test('真实浏览器仅采集所选标签页，记录快速点击、导航、资源和离线画面', async () => {
  await mkdir('.runtime', { recursive: true });
  const tmp = await mkdtemp(resolve('.runtime/manual-test-'));
  const profile = join(tmp, 'profile');
  const server = createServer((request, response) => {
    const path = new URL(request.url!, 'http://fixture.test').pathname;
    if (path.endsWith('.css')) {
      response.writeHead(200, { 'Content-Type': 'text/css' }).end('h1{color:rgb(17,34,51)}'); return;
    }
    if (path === '/private-json') {
      response.writeHead(200, { 'Content-Type': 'application/json' }).end('{"secret":"private-marker"}'); return;
    }
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }).end(path !== '/' ?
      '<h1>详情页</h1><a href="/">返回</a>' :
      '<h1>受控网页</h1><input value="form-marker"><button id="step">切换</button><a href="/details?token=page-marker">详情</a>' +
      '<button id="menu" aria-expanded="false" onclick="this.setAttribute(\'aria-expanded\',\'true\');document.querySelector(\'#menu-items\').hidden=false">菜单</button>' +
      '<ul id="menu-items" hidden><li>菜单已展开</li></ul>' +
      '<button role="tab" aria-selected="false" onclick="this.setAttribute(\'aria-selected\',\'true\')">标签页</button>' +
      '<button onclick="document.querySelector(\'dialog\').showModal()">显示弹窗</button><dialog>录制弹窗<button onclick="this.parentNode.close()">关闭弹窗</button></dialog>' +
      '<script>document.querySelector("#step").onclick=()=>{history.pushState({},"","/spa");document.querySelector("h1").textContent="已切换";' +
      'const link=document.createElement("link");link.rel="stylesheet";link.href="/captured.css?credential=request-marker";document.head.append(link);fetch("/private-json");};</script>');
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const port = (server.address() as { port: number }).port;
  const origin = 'http://127.0.0.1:' + port;
  const verify = async () => ({ address: '127.0.0.1', family: 4 });
  let browser: Awaited<ReturnType<typeof chromium.launchPersistentContext>> | undefined;
  let offline: Awaited<ReturnType<typeof chromium.launch>> | undefined;
  const connection = new ChromeConnection();
  const recorder = new ManualRecordings(join(tmp, 'records'), verify, connection);
  const saved = process.env.WEBSITE_CAPTURE_CHROME_PORT_FILE;
  try {
    browser = await chromium.launchPersistentContext(profile, {
      args: ['--remote-debugging-port=0', '--no-proxy-server']
    });
    process.env.WEBSITE_CAPTURE_CHROME_PORT_FILE = join(profile, 'DevToolsActivePort');
    await until(() => readFile(process.env.WEBSITE_CAPTURE_CHROME_PORT_FILE!, 'utf8').catch(() => ''));
    await recorder.init();
    const page = await browser.newPage();
    const response = await page.goto(origin);
    assert.equal(await page.locator('#step').count(), 1, JSON.stringify({ status: response?.status(), url: page.url(), html: (await page.content()).slice(0, 400) }));
    const other = await browser.newPage();
    await other.goto(origin + '/other');
    assert.equal((await recorder.status()).connected, false);
    let connects = 0;
    const connect = connection.connect.bind(connection);
    connection.connect = () => { if (!connection.connected) connects++; return connect(); };
    const connected = await recorder.connect();
    const target = connected.tabs.find(tab => tab.url === origin + '/')!;
    assert.ok(target);
    const id = await recorder.start(target.id);
    const loaded = await recorder.read(id);
    assert.ok(loaded?.steps[0].snapshot);
    await other.evaluate(() => fetch('/other-tab.css'));
    await page.reload();
    assert.equal(await page.locator('#step').count(), 1, await page.locator('body').innerText());
    for (const name of ['菜单', '标签页', '显示弹窗', '关闭弹窗']) {
      const before = (await recorder.read(id))!.steps.length;
      await page.getByText(name, { exact: true }).click();
      await until(async () => (await recorder.read(id))?.steps.slice(before).find(step => step.kind === 'click' && step.snapshot));
    }
    await page.locator('#step').dblclick({ delay: 60, timeout: 4000 });
    await until(async () => (await recorder.read(id))?.steps.some(step => step.to.endsWith('/spa') && step.snapshot));
    await until(async () => (await recorder.read(id))?.resources.some(item => item.url.endsWith('/captured.css') && item.file));
    await page.getByRole('link', { name: '详情' }).click({ timeout: 4000 });
    await until(async () => (await recorder.read(id))?.steps.some(step => step.to.endsWith('/details') && step.snapshot));
    await recorder.stop();
    await recorder.connect();
    assert.equal(connects, 1);
    const record = (await recorder.read(id))!;
    assert.equal(record.status, 'done');
    assert.ok(record.steps.filter(step => step.kind === 'click').length >= 3);
    assert.ok(record.steps.some(step => step.element?.includes('button:nth-of-type')));
    assert.ok(record.steps.some(step => step.screenshot));
    assert.ok(record.steps.some(step => step.reason?.includes('连续操作')));
    assert.ok(record.resources.some(item => item.url.endsWith('/captured.css') && item.step !== null && item.file));
    assert.ok(record.resources.some(item => item.url.endsWith('/private-json') && !item.file));
    assert.doesNotMatch(JSON.stringify(record), /other-tab|request-marker|page-marker|private-marker/);
    let html = '';
    for await (const chunk of recorder.preview(record)) html += chunk;
    assert.doesNotMatch(html, /form-marker|page-marker|private-marker/);
    const preview = join(tmp, 'index.html');
    await writeFile(preview, html);
    offline = await chromium.launch();
    const copy = await (await offline.newContext({ offline: true })).newPage();
    const external: string[] = [];
    copy.on('request', request => { if (/^https?:/.test(request.url())) external.push(request.url()); });
    await copy.goto(pathToFileURL(preview).href);
    const step = record.steps.find(item => item.snapshot && item.to.endsWith('/spa'))!;
    await copy.getByLabel('已采集页面').selectOption(String(step.id));
    const heading = copy.frameLocator('iframe').getByRole('heading', { name: '已切换' });
    assert.equal(await heading.evaluate(node => getComputedStyle(node).color), 'rgb(17, 34, 51)');
    assert.deepEqual(external, []);
    const second = await recorder.start(target.id);
    await page.goto('http://localhost:' + port + '/');
    const ended = await until(async () => {
      const item = await recorder.read(second);
      return item?.status === 'interrupted' ? item : undefined;
    });
    assert.match(ended.reason ?? '', /离开/);
    await page.goto(origin);
    const third = await recorder.start(target.id);
    await page.close();
    await until(async () => (await recorder.read(third))?.status === 'interrupted');
    const fourth = await recorder.start((await recorder.status()).tabs.find(tab => tab.url.endsWith('/other'))!.id);
    connection.close();
    await until(async () => !(await recorder.status()).connected);
    await until(async () => (await recorder.read(fourth))?.status === 'interrupted');
    assert.equal(connects, 1);
    assert.equal((await recorder.connect()).connected, true);
    assert.equal(connects, 2);
  } finally {
    await recorder.close();
    await offline?.close();
    await browser?.close().catch(() => {});
    await new Promise<void>(done => server.close(() => done()));
    await rm(tmp, { recursive: true, force: true });
    if (saved === undefined) delete process.env.WEBSITE_CAPTURE_CHROME_PORT_FILE;
    else process.env.WEBSITE_CAPTURE_CHROME_PORT_FILE = saved;
  }
});
