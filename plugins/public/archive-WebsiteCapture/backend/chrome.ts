import { EventEmitter } from 'node:events';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

type Reply = { id?: number; sessionId?: string; method?: string; params?: any; error?: object; result?: any };

export async function chromeEndpoint() {
  const file = process.env.WEBSITE_CAPTURE_CHROME_PORT_FILE ||
    join(process.env.LOCALAPPDATA ?? '', 'Google', 'Chrome', 'User Data', 'DevToolsActivePort');
  try {
    const [port, path] = (await readFile(file, 'utf8')).trim().split(/\r?\n/);
    if (!/^\d{4,5}$/.test(port) || Number(port) < 1024 || Number(port) > 65535 ||
      !/^\/devtools\/browser\/[a-z0-9-]+$/i.test(path)) throw new Error();
    return 'ws://127.0.0.1:' + port + path;
  } catch {
    throw new Error('未检测到 Chrome 调试会话。请在 Chrome 的远程调试页面开启本机调试，并允许此次连接。');
  }
}

export class ChromeConnection extends EventEmitter {
  private socket?: WebSocket;
  private connecting?: Promise<void>;
  private nextId = 0;
  private ready = false;
  private pending = new Map<number, (result?: Reply) => void>();

  get connected() { return this.ready && this.socket?.readyState === WebSocket.OPEN; }

  connect() {
    if (this.connected) return Promise.resolve();
    if (this.connecting) return this.connecting;
    this.connecting = this.open().finally(() => { this.connecting = undefined; });
    return this.connecting;
  }

  private async open() {
    const endpoint = await chromeEndpoint();
    const socket = new WebSocket(endpoint);
    this.socket = socket;
    socket.addEventListener('message', event => {
      if (this.socket !== socket || typeof event.data !== 'string') return;
      let reply: Reply;
      try { reply = JSON.parse(event.data); } catch { return; }
      if (reply.id) this.pending.get(reply.id)?.(reply);
      else if (reply.method) this.emit('message', reply);
    });
    socket.addEventListener('close', () => {
      if (this.socket !== socket) return;
      this.socket = undefined;
      this.ready = false;
      for (const finish of this.pending.values()) finish();
      this.emit('disconnect');
    });
    try {
      await new Promise<void>((resolve, reject) => {
        const timer = setTimeout(reject, 12000);
        const finish = (ok: boolean) => { clearTimeout(timer); if (ok) resolve(); else reject(); };
        socket.addEventListener('open', () => finish(true), { once: true });
        socket.addEventListener('error', () => finish(false), { once: true });
        socket.addEventListener('close', () => finish(false), { once: true });
      });
      const version = await this.send('Browser.getVersion');
      if (!/^(Chrome|Chromium|HeadlessChrome)\//.test(String(version.product))) throw new Error();
      this.ready = true;
    } catch {
      socket.close();
      throw new Error('Chrome 调试连接失败，请确认 Chrome 已允许本机连接后再重试。');
    }
  }

  send(method: string, params: object = {}, sessionId?: string): Promise<any> {
    const socket = this.socket;
    if (socket?.readyState !== WebSocket.OPEN) return Promise.reject(new Error('Chrome 连接已断开'));
    const id = ++this.nextId;
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => this.pending.get(id)?.(), 5000);
      const finish = (reply?: Reply) => {
        clearTimeout(timeout);
        this.pending.delete(id);
        if (!reply || reply.error) reject(new Error('Chrome 命令无法完成'));
        else resolve(reply.result ?? {});
      };
      this.pending.set(id, finish);
      try { socket.send(JSON.stringify({ id, method, params, sessionId })); }
      catch { finish(); }
    });
  }

  close() { this.socket?.close(); }
}
