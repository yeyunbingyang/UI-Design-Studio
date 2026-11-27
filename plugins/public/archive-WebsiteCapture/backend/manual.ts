import { createHash, randomUUID } from 'node:crypto';
import { mkdir, readFile, readdir, rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { extension } from 'mime-types';
import { ChromeConnection } from './chrome.ts';
import { displayUrl, publicAddress, webUrl } from './network.ts';
import { buildPreview, embeddedAssets, renderPreview, rewriteCss, sitePreviewHead, sitePreviewPage, sitePreviewFoot } from './preview.ts';

const world = 'ToolOrbitWebsiteCapture';
const binding = '__toolorbit_record_click';
const mask = 'input,textarea,select,[contenteditable],iframe,frame,object,embed';
const kinds = new Set(['Stylesheet', 'Script', 'Image', 'Font']);
const idPattern = /^[a-f0-9-]{36}$/;
const observe = `(() => {
  if (self !== top || globalThis.__toolorbitCleanup) return;
  const handle = event => {
    if (!event.isTrusted) return;
    const node = event.target instanceof Element ? event.target.closest('button,a,summary,[role],input,select,textarea') || event.target : null;
    if (!node) return;
    const tag = node.localName;
    const role = node.getAttribute('role');
    const label = ['button','tab','link','menuitem','checkbox','radio','switch'].includes(role) ? role : tag;
    const path = [];
    for (let element = node; element && path.length < 4; element = element.parentElement) {
      let index = 1;
      for (let sibling = element.previousElementSibling; sibling; sibling = sibling.previousElementSibling) {
        if (sibling.localName === element.localName) index++;
      }
      path.unshift(element.localName + ':nth-of-type(' + index + ')');
    }
    globalThis.${binding}(JSON.stringify({ label, element: path.join(' > '), route: location.origin + location.pathname }));
  };
  addEventListener('click', handle, true);
  globalThis.__toolorbitCleanup = () => removeEventListener('click', handle, true);
})()`;

type Target = { targetId: string; type: string; url: string; title: string };
type Step = { id: number; time: number; kind: 'start' | 'click' | 'navigation'; label: string; from: string; to: string;
  element?: string; snapshot?: boolean; screenshot?: boolean; reason?: string };
type Resource = { url: string; kind: string; step: number | null; status?: number; file?: string; reason?: string };
type Manifest = { id: string; url: string; created: string; status: 'recording' | 'done' | 'interrupted';
  reason?: string; steps: Step[]; resources: Resource[] };
type Pending = { url: string; row: Resource; mime?: string; eligible: boolean };
type Saved = { url: string; name: string; kind: string };
type Active = {
  session: string; origin: string; frame: string; current: string; click?: Step; record: Manifest;
  contexts: Set<number>; requests: Map<string, Pending>; assets: Map<string, Saved>; files: Set<string>;
  frames: Map<number, { html: string; url: string }>; writes: Set<Promise<void>>;
  origins: Map<string, Promise<boolean>>;
  bytes: number; snapshotBytes: number; template?: string; timer?: NodeJS.Timeout; deadline?: NodeJS.Timeout;
  wanted?: Step; capture?: Promise<void>; checkpoint: Promise<void>; closing?: Promise<void>;
};

function candidate(address: string) {
  try {
    const url = webUrl(address);
    if (['localhost', 'tauri.localhost'].includes(url.hostname) || url.hostname.endsWith('.localhost')) return null;
    return url;
  } catch { return null; }
}

export class ManualRecordings {
  private active?: Active;
  private starting = false;
  private closed = false;
  private root: string;
  private validate: typeof publicAddress;
  private chrome: ChromeConnection;
  constructor(root: string, validate = publicAddress, chrome = new ChromeConnection()) {
    this.root = root;
    this.validate = validate;
    this.chrome = chrome;
    this.chrome.on('message', message => this.event(message));
    this.chrome.on('disconnect', () => { void this.stop('Chrome 连接已断开').catch(() => {}); });
  }

  async init() {
    await mkdir(this.root, { recursive: true });
    for (const id of await readdir(this.root)) {
      if (!idPattern.test(id)) continue;
      const record = await this.read(id);
      if (record?.status === 'recording') {
        record.status = 'interrupted';
        record.reason = '上次服务退出，已保留写入磁盘的记录';
        await this.save(record);
      }
    }
  }
  directory(id: string) {
    if (!idPattern.test(id)) throw new Error('无效录制记录');
    return join(this.root, id);
  }
  async read(id: string): Promise<Manifest | undefined> {
    if (this.active?.record.id === id) return this.active.record;
    return readFile(join(this.directory(id), 'timeline.json'), 'utf8')
      .then(value => JSON.parse(value) as Manifest, () => undefined);
  }
  async list() {
    const names = (await readdir(this.root)).filter(id => idPattern.test(id));
    const records = await Promise.all(names.map(id => this.read(id)));
    return records.filter(record => record !== undefined).map(record => ({
      id: record.id, url: record.url, created: record.created, status: record.status, count: record.steps.length,
      screenshots: record.steps.filter(step => step.screenshot).length
    })).sort((a, b) => b.created.localeCompare(a.created));
  }
  private async save(record: Manifest) {
    const directory = this.directory(record.id);
    const temporary = join(directory, 'timeline.tmp');
    await writeFile(temporary, JSON.stringify(record, null, 2));
    await rename(temporary, join(directory, 'timeline.json'));
  }
  private checkpoint(active: Active) {
    active.checkpoint = active.checkpoint.catch(() => {}).then(() => this.save(active.record));
    void active.checkpoint.catch(() => { active.record.reason = '保存时间线失败'; });
  }

  async connect() {
    if (this.closed) throw new Error('录制服务正在退出');
    await this.chrome.connect();
    if (this.closed) {
      this.chrome.close();
      throw new Error('录制服务正在退出');
    }
    return this.status();
  }
  private async targets(): Promise<Target[]> {
    if (!this.chrome.connected) return [];
    return (await this.chrome.send('Target.getTargets')).targetInfos.filter((target: Target) =>
      target.type === 'page' && candidate(target.url));
  }
  async status() {
    const targets = await this.targets().catch(() => []);
    return { connected: Boolean(this.chrome.connected), active: this.active?.record.id ?? null,
      tabs: targets.map(target => ({ id: target.targetId, url: displayUrl(target.url), title: target.title.slice(0, 150) })) };
  }

  async start(targetId: string) {
    if (this.closed) throw new Error('录制服务正在退出');
    if (this.active || this.starting) throw new Error('已有录制正在进行');
    this.starting = true;
    let active: Active | undefined;
    let session: string | undefined;
    try {
      const target = (await this.targets()).find(tab => tab.targetId === targetId);
      const url = target && candidate(target.url);
      if (!url) throw new Error('请先连接 Chrome 并选中公开网页');
      await this.validate(url);
      const attached = await this.chrome.send('Target.attachToTarget', { targetId, flatten: true });
      session = attached.sessionId;
      const tree = await this.chrome.send('Page.getFrameTree', {}, session);
      const frame = tree.frameTree.frame;
      if (this.closed) throw new Error('录制服务正在退出');
      if (new URL(frame.url).origin !== url.origin) throw new Error('开始前标签页已切换站点');
      const now = Date.now();
      const start: Step = { id: 1, time: now, kind: 'start', label: '录制开始', from: displayUrl(frame.url), to: displayUrl(frame.url) };
      const record: Manifest = { id: randomUUID(), url: start.from, created: new Date(now).toISOString(), status: 'recording',
        steps: [start], resources: [] };
      const directory = this.directory(record.id);
      await mkdir(join(directory, 'original'), { recursive: true });
      await mkdir(join(directory, 'assets'), { recursive: true });
      if (this.closed) throw new Error('录制服务正在退出');
      active = { session: session!, origin: url.origin, frame: frame.id, current: start.to, record,
        contexts: new Set(), requests: new Map(), assets: new Map(), files: new Set(), frames: new Map(), writes: new Set(),
        origins: new Map([[url.origin, Promise.resolve(true)]]),
        bytes: 0, snapshotBytes: 0, checkpoint: Promise.resolve() };
      this.active = active;
      this.checkpoint(active);
      await this.send(active, 'Page.enable');
      await this.send(active, 'Runtime.enable');
      await this.send(active, 'Runtime.addBinding', { name: binding, executionContextName: world });
      active.template = (await this.send(active, 'Page.addScriptToEvaluateOnNewDocument', { worldName: world, source: observe })).identifier;
      await this.send(active, 'Network.enable', { maxTotalBufferSize: 20 * 1024 * 1024, maxResourceBufferSize: 4 * 1024 * 1024 });
      const context = await this.send(active, 'Page.createIsolatedWorld', { frameId: active.frame, worldName: world });
      await this.evaluate(active, context.executionContextId, observe);
      await this.snapshot(active, start);
      if (this.active !== active || active.closing) throw new Error('开始时标签页已离开录制范围');
      active.deadline = setTimeout(() => { void this.stop('达到 30 分钟录制时限').catch(() => {}); }, 30 * 60 * 1000);
      return record.id;
    } catch (error) {
      if (active) await this.stop('录制初始化未完成').catch(() => {});
      else if (session) await this.chrome.send('Target.detachFromTarget', { sessionId: session }).catch(() => {});
      throw error;
    } finally { this.starting = false; }
  }
  private send(active: Active, method: string, params: object = {}) { return this.chrome.send(method, params, active.session); }
  private evaluate(active: Active, contextId: number, expression: string) {
    return this.send(active, 'Runtime.evaluate', { contextId, expression, returnByValue: true })
      .then(result => { if (result.exceptionDetails) throw new Error('页面读取失败'); return result.result?.value; });
  }

  private event(message: { sessionId?: string; method?: string; params?: any }) {
    const active = this.active;
    if (!active || active.closing) return;
    const info = message.params ?? {};
    if (message.method === 'Target.detachedFromTarget' && info.sessionId === active.session) {
      void this.stop('标签页已关闭或调试会话已断开').catch(() => {});
      return;
    }
    if (message.sessionId !== active.session) return;
    switch (message.method) {
      case 'Runtime.executionContextCreated':
        if (info.context.name === world && info.context.auxData?.frameId === active.frame) active.contexts.add(info.context.id);
        break;
      case 'Runtime.executionContextDestroyed':
        active.contexts.delete(info.executionContextId);
        break;
      case 'Runtime.executionContextsCleared':
        active.contexts.clear();
        break;
      case 'Runtime.bindingCalled':
        if (info.name === binding && active.contexts.has(info.executionContextId)) this.clicked(active, info.payload);
        break;
      case 'Page.frameNavigated':
        if (!info.frame.parentId) { active.frame = info.frame.id; this.navigate(active, info.frame.url); }
        break;
      case 'Page.navigatedWithinDocument':
        if (active.frame === info.frameId) this.navigate(active, info.url);
        break;
      case 'Network.requestWillBeSent':
        this.request(active, info);
        break;
      case 'Network.responseReceived': {
        const item = active.requests.get(info.requestId);
        if (!item) break;
        item.row.status = info.response.status;
        item.mime = info.response.mimeType;
        item.eligible &&= info.response.status >= 200 && info.response.status < 300 &&
          /^(?:text\/(?:css|javascript)|(?:image|font)\/|application\/(?:javascript|x-javascript|font-|x-font-|vnd\.ms-fontobject))/.test(item.mime ?? '');
        break;
      }
      case 'Network.loadingFinished':
      case 'Network.loadingFailed': {
        const item = active.requests.get(info.requestId);
        if (!item) break;
        active.requests.delete(info.requestId);
        const task = this.resource(active, info.requestId, item, info.encodedDataLength, message.method === 'Network.loadingFailed');
        active.writes.add(task);
        void task.finally(() => { active.writes.delete(task); this.checkpoint(active); }).catch(() => {});
        break;
      }
    }
  }

  private clicked(active: Active, payload: string) {
    if (typeof payload !== 'string' || payload.length > 8192) return;
    try {
      const data = JSON.parse(payload);
      if (new URL(data.route).origin !== active.origin || typeof data.label !== 'string' || !/^[a-z-]{1,32}$/.test(data.label)) return;
      const element = typeof data.element === 'string' && data.element.length <= 250 &&
        /^(?:[a-z0-9-]+:nth-of-type\(\d+\))(?: > [a-z0-9-]+:nth-of-type\(\d+\)){0,3}$/.test(data.element) ? data.element : undefined;
      const step = this.append(active, 'click', data.label, displayUrl(data.route), displayUrl(data.route), element);
      if (step) active.click = step;
    } catch { /* 忽略非预期的绑定消息。 */ }
  }
  private navigate(active: Active, address: string) {
    const target = candidate(address);
    if (!target || target.origin !== active.origin) { void this.stop('标签页离开所选站点，录制已结束').catch(() => {}); return; }
    const next = displayUrl(target);
    if (active.click && Date.now() - active.click.time < 2500) active.click.to = next;
    if (next !== active.current) this.append(active, 'navigation', '页面跳转', active.current, next);
    else if (active.wanted) this.schedule(active, active.wanted);
    else this.append(active, 'navigation', '刷新或页内跳转', active.current, next);
    active.current = next;
  }
  private append(active: Active, kind: Step['kind'], label: string, from: string, to: string, element?: string) {
    if (active.record.steps.length >= 200) {
      void this.stop('达到 200 步录制上限').catch(() => {});
      return undefined;
    }
    const prior = active.wanted;
    if (prior && !prior.snapshot) prior.reason = '连续操作，未取得独立画面';
    const step: Step = { id: active.record.steps.length + 1, kind, label, from, to, element, time: Date.now() };
    active.record.steps.push(step);
    this.checkpoint(active);
    this.schedule(active, step);
    return step;
  }
  private schedule(active: Active, step: Step) {
    clearTimeout(active.timer);
    active.wanted = step;
    active.timer = setTimeout(() => {
      const previous = active.capture ?? Promise.resolve();
      active.capture = previous.catch(() => {}).then(async () => {
        if (active.wanted !== step || active.closing) return;
        await this.snapshot(active, step);
        if (active.wanted === step) active.wanted = undefined;
      });
      void active.capture.catch(() => {});
    }, 650);
  }

  private request(active: Active, info: any) {
    if (info.frameId !== active.frame || active.record.resources.length >= 3000) return;
    const url = candidate(info.request.url);
    const document = candidate(info.documentURL);
    if (!url || document?.origin !== active.origin) return;
    const now = Number.isFinite(info.wallTime) ? info.wallTime * 1000 : Date.now();
    const click = active.click;
    const step = click && now >= click.time - 150 && now - click.time < 2000 ? click.id : null;
    const row: Resource = { url: displayUrl(url), kind: info.type ?? 'Other', step };
    if (info.redirectResponse) {
      const previous = active.requests.get(info.requestId);
      if (previous) { previous.row.status = info.redirectResponse.status; previous.row.reason = '重定向'; }
    }
    active.record.resources.push(row);
    active.requests.set(info.requestId, { url: url.href, row, eligible: info.request.method === 'GET' && kinds.has(row.kind) });
  }
  private async resource(active: Active, requestId: string, item: Pending, length: number, failed: boolean) {
    const { row } = item;
    if (failed) { row.reason = '浏览器请求失败'; return; }
    if (!item.eligible) { row.reason = '仅记录请求信息'; return; }
    if (length > 4 * 1024 * 1024 || active.bytes >= 64 * 1024 * 1024) { row.reason = '达到资源录制上限'; return; }
    try {
      const address = webUrl(item.url);
      let allowed = active.origins.get(address.origin);
      if (!allowed) {
        allowed = this.validate(address).then(() => true, () => false);
        active.origins.set(address.origin, allowed);
      }
      if (!await allowed) { row.reason = '非公网来源，仅记录请求信息'; return; }
      const data = await this.send(active, 'Network.getResponseBody', { requestId });
      const bytes = Buffer.from(data.body, data.base64Encoded ? 'base64' : 'utf8');
      const ext = row.kind === 'Stylesheet' ? 'css' : row.kind === 'Script' ? 'js' : extension(item.mime ?? '') || 'bin';
      const name = createHash('sha256').update(bytes).digest('hex').slice(0, 32) + '.' + ext;
      if (bytes.length > 4 * 1024 * 1024 || (!active.files.has(name) && active.bytes + bytes.length > 64 * 1024 * 1024)) {
        row.reason = '达到资源录制上限'; return;
      }
      if (!active.files.has(name)) { active.bytes += bytes.length; active.files.add(name); }
      await writeFile(join(this.directory(active.record.id), 'original', name), bytes);
      active.assets.set(item.url, { url: item.url, name, kind: row.kind });
      row.file = 'original/' + name;
    } catch { row.reason = '浏览器未保留可读取的响应内容'; }
  }

  private async snapshot(active: Active, step: Step) {
    if (active.frames.size >= 40 || active.snapshotBytes >= 32 * 1024 * 1024) {
      step.reason = '达到画面录制上限'; this.checkpoint(active); return;
    }
    const directory = this.directory(active.record.id);
    let context: number | undefined;
    try {
      context = (await this.send(active, 'Page.createIsolatedWorld', { frameId: active.frame, worldName: world })).executionContextId;
      const data = await this.evaluate(active, context!, `(() => {
        if (self !== top || location.origin !== ${JSON.stringify(active.origin)}) return null;
        const clone = document.documentElement.cloneNode(true);
        const copies = clone.querySelectorAll('img');
        document.querySelectorAll('img').forEach((image, index) => {
          if (image.currentSrc) copies[index]?.setAttribute('src', image.currentSrc);
        });
        clone.querySelectorAll(${JSON.stringify(mask + ',form')}).forEach(node => node.remove());
        const html = clone.outerHTML;
        return html.length > 3000000 ? null : { html, url: location.href };
      })()`);
      if (!data || active.closing || (active.wanted && active.wanted !== step && step.kind !== 'start')) {
        step.reason ??= '页面变化过快或未取得可保存画面'; return;
      }
      const size = Buffer.byteLength(data.html);
      if (active.snapshotBytes + size > 32 * 1024 * 1024) { step.reason = '达到画面录制上限'; return; }
      active.snapshotBytes += size;
      active.frames.set(step.id, data);
      step.to = displayUrl(data.url);
      await writeFile(join(directory, 'step-' + step.id + '.html'), buildPreview(data.html, data.url, new Map(), true).html);
      step.snapshot = true;
      const masked = await this.evaluate(active, context!, `(() => {
        if (location.origin !== ${JSON.stringify(active.origin)}) return false;
        const style = document.createElement('style');
        style.id = '__toolorbit_capture_mask';
        style.textContent = ${JSON.stringify(mask + '{visibility:hidden!important}')};
        document.documentElement.append(style);
        globalThis.__toolorbitMask = style;
        return [...document.querySelectorAll(${JSON.stringify(mask)})].every(node => getComputedStyle(node).visibility === 'hidden' || !node.getClientRects().length);
      })()`);
      if (!masked) { step.reason = '表单区域无法屏蔽，已省略截图'; return; }
      const image = await this.send(active, 'Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
      const same = await this.evaluate(active, context!, `location.origin === ${JSON.stringify(active.origin)}`);
      if (same && !active.closing && (!active.wanted || active.wanted === step || step.kind === 'start')) {
        const bytes = Buffer.from(image.data, 'base64');
        if (bytes.length <= 4 * 1024 * 1024) {
          await writeFile(join(directory, 'step-' + step.id + '.png'), bytes);
          step.screenshot = true;
        } else step.reason = '截图超过大小上限';
      } else step.reason ??= '连续操作，未取得独立截图';
    } catch { step.reason ??= '页面切换或浏览器未能返回画面'; }
    finally {
      if (context) await this.evaluate(active, context, 'globalThis.__toolorbitMask?.remove()').catch(() => {});
      this.checkpoint(active);
    }
  }

  stop(reason?: string) {
    const active = this.active;
    if (!active) return Promise.resolve();
    active.closing ??= this.finish(active, reason);
    return active.closing;
  }
  get activeId() { return this.active?.record.id; }
  private async finish(active: Active, reason?: string) {
    clearTimeout(active.timer);
    clearTimeout(active.deadline);
    const target = active.wanted;
    if (target && !target.snapshot) target.reason ??= '结束时页面尚未稳定';
    try {
      await active.capture?.catch(() => {});
      await Promise.allSettled(active.writes);
      for (const item of active.requests.values()) item.row.reason ??= '结束录制时请求尚未完成';
      if (this.chrome.connected) {
        for (const context of active.contexts) await this.evaluate(active, context, 'globalThis.__toolorbitCleanup?.();globalThis.__toolorbitMask?.remove()').catch(() => {});
        if (active.template) await this.send(active, 'Page.removeScriptToEvaluateOnNewDocument', { identifier: active.template }).catch(() => {});
        await this.send(active, 'Runtime.removeBinding', { name: binding }).catch(() => {});
        await this.chrome.send('Target.detachFromTarget', { sessionId: active.session }).catch(() => {});
      }
      const directory = this.directory(active.record.id);
      const saved = new Map([...active.assets.values()].filter(item => item.kind !== 'Script').map(item => [item.url, item.name]));
      const processed = new Set<string>();
      for (const asset of active.assets.values()) {
        if (asset.kind === 'Script' || processed.has(asset.name)) continue;
        const content = await readFile(join(directory, 'original', asset.name));
        await writeFile(join(directory, 'assets', asset.name), asset.kind === 'Stylesheet' ?
          rewriteCss(content.toString('utf8'), asset.url, saved, '') : content);
        processed.add(asset.name);
      }
      for (const [id, frame] of active.frames) {
        const html = buildPreview(frame.html, frame.url, saved, true).html;
        await writeFile(join(directory, 'step-' + id + '.html'), html);
      }
      active.record.status = reason ? 'interrupted' : 'done';
      active.record.reason = reason;
    } catch {
      active.record.status = 'interrupted';
      active.record.reason = '整理录制资源失败，已保留已有文件';
    } finally {
      this.checkpoint(active);
      try { await active.checkpoint; } finally { this.active = undefined; }
    }
  }

  async *preview(record: Manifest) {
    const directory = this.directory(record.id);
    const assets = await embeddedAssets(join(directory, 'assets'));
    const links = new Map(record.steps.filter(step => step.snapshot).map(step => [step.to, step.id]));
    yield sitePreviewHead;
    for (const step of record.steps) {
      if (!step.snapshot) continue;
      const template = await readFile(join(directory, 'step-' + step.id + '.html'), 'utf8');
      yield sitePreviewPage({ id: step.id, title: step.id + ' · ' + step.label + ' · ' + step.to,
        html: renderPreview(template, links, assets) });
    }
    yield sitePreviewFoot;
  }

  async close() {
    this.closed = true;
    try { await this.stop('插件服务已退出'); } finally { this.chrome.close(); }
  }
}
