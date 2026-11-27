import { DatabaseSync } from 'node:sqlite';
import { randomUUID } from 'node:crypto';
import { join } from 'node:path';
import { mkdir, realpath, rm } from 'node:fs/promises';
import { capturePage, openBrowser, type CaptureResult } from './capture.ts';
import { displayUrl, webUrl } from './network.ts';
import { canonical, mapLimit, readPolicy, scanDepth, scanLimit } from './discovery.ts';
import type { Evidence, Recipe } from './evidence.ts';

type Status = 'queued' | 'running' | 'done' | 'failed' | 'interrupted';
type PageStatus = Exclude<Status, 'interrupted'> | 'excluded' | 'budget';
type Job = { id: string; url: string; mode: 'single' | 'site' | 'scan'; status: Status; created: string; error: string | null;
  options: string; discovery: string | null };
type Page = {
  id: number; job_id: string; url: string; depth: number; status: PageStatus; final_url: string | null;
  folder: string | null; title: string | null; error: string | null; entries: string | null;
  evidence: string | null; source: string;
};
type JobOptions = { seeds?: string[]; recipes?: Recipe[]; maxPages?: number; maxDepth?: number };
type Policy = Awaited<ReturnType<typeof readPolicy>>;

export class Jobs {
  private db: DatabaseSync;
  private stopController = new AbortController();
  private running: Promise<void> | undefined;
  readonly output: string;
  private browserFactory: typeof openBrowser;
  private capture: typeof capturePage;
  private policy: typeof readPolicy;
  constructor(dbPath: string, output: string, browserFactory = openBrowser, capture = capturePage, policy = readPolicy) {
    this.output = output;
    this.browserFactory = browserFactory;
    this.capture = capture;
    this.policy = policy;
    this.db = new DatabaseSync(dbPath);
    this.db.exec(`
      PRAGMA journal_mode = WAL;
      PRAGMA foreign_keys = ON;
      PRAGMA busy_timeout = 3000;
      CREATE TABLE IF NOT EXISTS owner (slot INTEGER PRIMARY KEY CHECK(slot=1), pid INTEGER NOT NULL);
      CREATE TABLE IF NOT EXISTS jobs (
        id TEXT PRIMARY KEY, url TEXT NOT NULL, mode TEXT NOT NULL, status TEXT NOT NULL,
        created TEXT NOT NULL, error TEXT
      );
      CREATE TABLE IF NOT EXISTS pages (
        id INTEGER PRIMARY KEY, job_id TEXT NOT NULL REFERENCES jobs(id),
        url TEXT NOT NULL, depth INTEGER NOT NULL, status TEXT NOT NULL,
        final_url TEXT, folder TEXT, title TEXT, error TEXT, entries TEXT, UNIQUE(job_id, url)
      );
      CREATE TABLE IF NOT EXISTS links (
        page_id INTEGER NOT NULL REFERENCES pages(id), destination TEXT NOT NULL, PRIMARY KEY(page_id,destination)
      );
    `);
    try {
      this.transaction(() => {
        const existing = this.db.prepare('SELECT pid FROM owner WHERE slot=1').get() as { pid: number } | undefined;
        if (existing) {
          let active = true;
          try { process.kill(existing.pid, 0); } catch (error) { active = (error as NodeJS.ErrnoException).code !== 'ESRCH'; }
          if (active) throw new Error('同一数据目录已有网页采集服务运行');
        }
        this.db.prepare('INSERT OR REPLACE INTO owner (slot,pid) VALUES (1,?)').run(process.pid);
        const add = (table: 'jobs' | 'pages', column: string, declaration: string) => {
          if (!this.db.prepare('PRAGMA table_info(' + table + ')').all().some(field => field.name === column)) {
            this.db.exec('ALTER TABLE ' + table + ' ADD COLUMN ' + column + ' ' + declaration);
          }
        };
        add('jobs', 'options', "TEXT NOT NULL DEFAULT '{}'");
        add('jobs', 'discovery', 'TEXT');
        add('pages', 'evidence', 'TEXT');
        add('pages', 'source', "TEXT NOT NULL DEFAULT '历史记录'");
        this.db.exec("UPDATE pages SET status='queued' WHERE status='running'; UPDATE jobs SET status='interrupted' WHERE status IN ('running','queued')");
      });
    } catch (error) {
      this.db.close();
      throw error;
    }
  }

  private transaction(action: () => void) {
    this.db.exec('BEGIN IMMEDIATE');
    try { action(); this.db.exec('COMMIT'); }
    catch (error) { this.db.exec('ROLLBACK'); throw error; }
  }

  get(id: string) { return this.db.prepare('SELECT * FROM jobs WHERE id=?').get(id) as Job | undefined; }
  pages(id: string) { return this.db.prepare('SELECT * FROM pages WHERE job_id=? ORDER BY id').all(id) as Page[]; }
  list() {
    return (this.db.prepare('SELECT * FROM jobs ORDER BY created DESC,rowid DESC').all() as Job[]).map(job => this.summary(job));
  }
  private summary(job: Job) {
    const pages = this.pages(job.id);
    const archived = pages.filter(page => page.folder);
    return { id: job.id, mode: job.mode, status: job.status, created: job.created, error: job.error,
      discovery: job.discovery, url: displayUrl(job.url), total: pages.length, done: archived.length,
      complete: archived.filter(page => this.quality(page) === 'complete').length,
      partial: archived.filter(page => this.quality(page) === 'partial').length,
      unverified: archived.filter(page => this.quality(page) === 'unverified').length,
      pending: pages.filter(page => ['queued','running'].includes(page.status)).length,
      excluded: pages.filter(page => page.status === 'excluded').length,
      budget: pages.filter(page => page.status === 'budget').length,
      failed: pages.filter(page => page.status === 'failed').length };
  }
  private quality(page: Page) {
    if (!page.folder) return null;
    if (page.evidence) return (JSON.parse(page.evidence) as Evidence).quality;
    const entries = page.entries ? JSON.parse(page.entries) as CaptureResult['entries'] : [];
    return entries.some(entry => ['document', 'script', 'stylesheet', 'font', 'image', 'screenshot'].includes(entry.kind)
      && entry.reason && !entry.reason.startsWith('仅记录')) ? 'partial' : 'unverified';
  }
  detail(job: Job) {
    const edges = this.db.prepare('SELECT links.page_id, links.destination FROM links JOIN pages ON pages.id=links.page_id WHERE pages.job_id=? ORDER BY links.rowid')
      .all(job.id) as { page_id: number; destination: string }[];
    const outgoing = new Map<number, string[]>();
    for (const edge of edges) {
      let urls = outgoing.get(edge.page_id);
      if (!urls) { urls = []; outgoing.set(edge.page_id, urls); }
      urls.push(displayUrl(edge.destination));
    }
    return { ...this.summary(job), pages: this.pages(job.id).map(page => ({
      id: page.id, url: displayUrl(page.final_url ?? page.url), depth: page.depth, status: page.status,
      title: page.title, error: page.error, entries: page.entries ? JSON.parse(page.entries) as CaptureResult['entries'] : [],
      archived: Boolean(page.folder), quality: this.quality(page), version: page.folder, source: page.source,
      alias: page.final_url && page.final_url !== page.url ? displayUrl(page.url) : null,
      evidence: page.evidence ? JSON.parse(page.evidence) as Evidence : null,
      links: outgoing.get(page.id) ?? []
    })) };
  }

  create(url: URL, mode: Job['mode'], options: JobOptions = {}) {
    if (this.stopController.signal.aborted) throw new Error('服务正在退出');
    const id = randomUUID();
    this.transaction(() => {
      this.db.prepare("INSERT INTO jobs (id,url,mode,status,created,options) VALUES (?,?,?,'queued',?,?)")
        .run(id, url.href, mode, new Date().toISOString(), JSON.stringify(options));
      this.db.prepare("INSERT INTO pages (job_id,url,depth,status,source) VALUES (?,?,0,'queued','入口')").run(id, url.href);
    });
    this.kick();
    return id;
  }

  retry(id: string, pageId?: number) {
    const job = this.get(id);
    if (this.stopController.signal.aborted || !job || ['queued', 'running'].includes(job.status)) return false;
    const pages = this.pages(id);
    if (pageId !== undefined ? !pages.some(page => page.id === pageId && (page.status === 'failed' ||
      (page.status === 'done' && this.quality(page) !== 'complete'))) :
      job.status !== 'interrupted' && !pages.some(page => page.status === 'failed')) return false;
    this.transaction(() => {
      if (pageId !== undefined) this.db.prepare("UPDATE pages SET status='queued', error=NULL WHERE id=? AND job_id=?").run(pageId, id);
      else if (job.status !== 'interrupted') this.db.prepare("UPDATE pages SET status='queued', error=NULL WHERE job_id=? AND status='failed'").run(id);
      this.db.prepare("UPDATE jobs SET status='queued',error=NULL WHERE id=?").run(id);
    });
    this.kick();
    return true;
  }

  private kick() {
    if (this.running || this.stopController.signal.aborted) return;
    this.running = this.run().catch(error => {
      console.error('[任务] 队列运行失败', error instanceof Error ? error.name : '');
    }).finally(() => {
      this.running = undefined;
      if (!this.stopController.signal.aborted && this.db.prepare("SELECT 1 FROM jobs WHERE status='queued'").get()) this.kick();
    });
  }

  private async run() {
    const signal = this.stopController.signal;
    let job: Job | undefined;
    while (!signal.aborted && (job = this.db.prepare("SELECT * FROM jobs WHERE status='queued' ORDER BY rowid LIMIT 1").get() as Job | undefined)) {
      this.db.prepare("UPDATE jobs SET status='running' WHERE id=?").run(job.id);
      let browser: Awaited<ReturnType<typeof openBrowser>> | undefined;
      try {
        browser = await this.browserFactory();
        await this.runJob(job, browser.context, signal);
      } catch (error) {
        if (!signal.aborted) {
          const message = browser ? '任务执行失败' : '无法启动采集浏览器，请检查运行环境';
          this.transaction(() => {
            this.db.prepare("UPDATE pages SET status=CASE WHEN folder IS NULL THEN 'failed' ELSE 'done' END,error=? WHERE job_id=? AND status IN ('queued','running')").run(message, job!.id);
            this.db.prepare('UPDATE jobs SET error=? WHERE id=?').run(message, job!.id);
          });
          console.error('[任务] ' + message, error instanceof Error ? error.name : '');
        }
      } finally {
        if (browser) await browser.close().catch(() => {});
        const status = signal.aborted ? 'interrupted' : this.pages(job.id).some(item => item.folder) ? 'done' : 'failed';
        this.db.prepare('UPDATE jobs SET status=? WHERE id=?').run(status, job.id);
      }
    }
  }

  private async runJob(job: Job, context: Awaited<ReturnType<typeof openBrowser>>['context'], signal: AbortSignal) {
    const options = JSON.parse(job.options) as JobOptions;
    const policies = new Map<string, Promise<Policy>>();
    const policy = (url: URL) => {
      let found = policies.get(url.origin);
      if (!found) { found = this.policy(url.origin, signal); policies.set(url.origin, found); }
      return found;
    };
    const allowed = job.mode === 'scan' ? async (url: URL) => {
      const result = await policy(url);
      if (!result.allowed(url.href)) throw new Error(result.warning || '站点爬取规则禁止访问');
    } : undefined;
    const root = this.pages(job.id)[0];
    if (root.status === 'queued') await this.runPage(job, root, context, signal, options, allowed);
    const currentRoot = this.pages(job.id)[0];
    if (job.mode === 'scan' && currentRoot.folder && !job.discovery && !signal.aborted) {
      const origin = canonical(currentRoot.final_url ?? currentRoot.url).origin;
      const rules = await policy(new URL(origin));
      const found = rules.warning ? { urls: [], limited: true } : await rules.sitemaps();
      signal.throwIfAborted();
      this.transaction(() => {
        const outgoing = this.db.prepare('SELECT destination FROM links WHERE page_id=? ORDER BY rowid').all(currentRoot.id) as { destination: string }[];
        this.addCandidates(job, currentRoot, (options.seeds ?? []).map(url => canonical(url, origin).href), '手动路径');
        this.addCandidates(job, currentRoot, outgoing.map(link => link.destination), '链接');
        this.addCandidates(job, currentRoot, found.urls, '站点地图');
        this.db.prepare('UPDATE jobs SET discovery=? WHERE id=?').run(
          rules.warning ?? (found.limited ? '站点地图读取不完整' : '站点地图发现已结束'), job.id);
      });
    }
    while (!signal.aborted) {
      const pages = this.pages(job.id).filter(page => page.status === 'queued').sort((a, b) => a.depth - b.depth || a.id - b.id);
      if (!pages.length) break;
      const batch = pages.filter(page => page.depth === pages[0].depth).slice(0, job.mode === 'scan' ? 2 : 1);
      await Promise.all(batch.map(page => this.runPage(job, page, context, signal, options, allowed)));
    }
  }

  private addCandidates(job: Job, page: Page, urls: string[], source: string) {
    const scan = job.mode === 'scan';
    const options = JSON.parse(job.options) as JobOptions;
    const existing = this.pages(job.id);
    const known = new Set(existing.flatMap(item => [item.url, item.final_url].filter(Boolean).map(url =>
      scan ? canonical(url!).href : url!)));
    const scope = canonical(page.final_url ?? page.url).origin;
    const insert = this.db.prepare('INSERT INTO pages (job_id,url,depth,status,source,error) VALUES (?,?,?,?,?,?)');
    const edges = this.db.prepare('INSERT OR IGNORE INTO links (page_id,destination) VALUES (?,?)');
    const depth = source === '链接' ? page.depth + 1 : 1;
    let count = existing.length;
    let admitted = existing.filter(item => item.status !== 'budget').length;
    for (const candidate of urls.slice(0, mapLimit)) {
      const url = scan ? canonical(candidate) : webUrl(candidate);
      if (url.origin !== scope) continue;
      if (source === '链接') edges.run(page.id, url.href);
      if (known.has(url.href) || count >= (scan ? mapLimit : 10)) continue;
      if (!scan && depth > 2) continue;
      const reason = depth > (options.maxDepth ?? scanDepth) ? '达到链接深度上限' :
        admitted >= (options.maxPages ?? scanLimit) ? '达到扫描页数上限' : null;
      insert.run(job.id, url.href, depth, reason ? 'budget' : 'queued', source, reason);
      known.add(url.href);
      count++;
      if (!reason) admitted++;
    }
  }

  private async runPage(job: Job, page: Page, context: Awaited<ReturnType<typeof openBrowser>>['context'], signal: AbortSignal,
    options: JobOptions, allowDocument?: (url: URL) => Promise<void>) {
    const folder = page.id + '-' + randomUUID();
    const directory = join(this.output, job.id, folder);
    this.db.prepare("UPDATE pages SET status='running' WHERE id=?").run(page.id);
    let created = false;
    try {
      await allowDocument?.(webUrl(page.url));
      if (/^c:/i.test(await realpath(this.output))) throw new Error('采集目录须位于非 C 盘');
      await mkdir(directory, { recursive: true });
      created = true;
      const root = this.pages(job.id)[0];
      const scope = page.depth ? webUrl(root.final_url ?? root.url).origin : undefined;
      const result = await this.capture(context, page.url, directory, signal, undefined, scope,
        { recipes: page.depth === 0 ? options.recipes : undefined, allowDocument });
      signal.throwIfAborted();
      this.transaction(() => {
        this.db.prepare("UPDATE pages SET status='done',final_url=?,folder=?,title=?,entries=?,evidence=?,error=NULL WHERE id=?")
          .run(result.finalUrl, folder, result.title.slice(0, 300), JSON.stringify(result.entries),
            result.evidence ? JSON.stringify(result.evidence) : null, page.id);
        if (job.mode === 'single') return;
        const adopted = { ...page, final_url: result.finalUrl };
        if (job.mode === 'scan' && result.finalUrl !== page.url) {
          this.db.prepare("UPDATE pages SET status='excluded',error='重定向别名已采集' WHERE job_id=? AND url=? AND status='queued' AND folder IS NULL")
            .run(job.id, canonical(result.finalUrl).href);
        }
        if (job.mode === 'scan' && page.depth === 0 && !job.discovery) {
          const edge = this.db.prepare('INSERT OR IGNORE INTO links (page_id,destination) VALUES (?,?)');
          for (const url of result.links.slice(0, mapLimit)) edge.run(page.id, canonical(url).href);
        } else this.addCandidates(job, adopted, result.links, '链接');
      });
    } catch (error) {
      if (created) await rm(directory, { force: true, recursive: true }).catch(() => {});
      const message = error instanceof Error && /^[\p{L}\p{N}\s（）():-]{1,100}$/u.test(error.message) && /[\u4e00-\u9fff]/.test(error.message)
        ? error.message : '页面采集失败';
      const status = signal.aborted ? 'queued' : page.folder ? 'done' :
        /规则|采集站点之外/.test(message) ? 'excluded' : 'failed';
      this.db.prepare('UPDATE pages SET status=?,error=? WHERE id=?').run(status, signal.aborted ? null : message, page.id);
    }
  }

  async close() {
    this.stopController.abort();
    await this.running;
    this.transaction(() => {
      this.db.exec("UPDATE jobs SET status='interrupted' WHERE status IN ('queued','running')");
      this.db.prepare('DELETE FROM owner WHERE slot=1 AND pid=?').run(process.pid);
    });
    this.db.close();
  }
}
