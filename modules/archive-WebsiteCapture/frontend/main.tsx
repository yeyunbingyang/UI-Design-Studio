import { useEffect, useRef, useState, type FormEvent } from 'react';
import { createRoot } from 'react-dom/client';
import { ManualRecorder } from './ManualRecorder.tsx';
import './styles.css';

type Status = 'queued' | 'running' | 'done' | 'failed' | 'interrupted' | 'excluded' | 'budget';
type Entry = { url: string; kind: string; status?: number; file?: string; reason?: string };
type Visual = { width: number; height: number; original?: string; local?: string; diff?: string; ratio?: number; reason?: string };
type StateEvidence = { label: string; reason?: string; visuals: Visual[] };
type Evidence = { readiness: string[]; states: StateEvidence[] };
type Analysis = { analyses: { state: string; width: number; height: number; nodes: { tag: string; text?: string; font: string;
  fontSize: string; color: string; width: number; height: number; visible: boolean }[];
  styles: { url: string; local: string | null }[]; special: { iframe: number; canvas: number } }[]; missing: Entry[] };
type Quality = 'complete' | 'partial' | 'unverified';
type Page = { id: number; url: string; depth: number; title: string | null; status: Status; error: string | null; entries: Entry[];
  archived: boolean; quality: Quality | null; version: string | null; source: string; alias: string | null; evidence: Evidence | null; links: string[] };
type Mode = 'single' | 'site' | 'scan';
type Recipe = { label: string; selector: string; kind: 'menu' | 'tab' | 'details' | 'dialog' };
type Task = { id: string; url: string; mode: Mode; status: Status; total: number; done: number; failed: number; created: string; error: string | null;
  discovery: string | null; complete: number; partial: number; unverified: number; pending: number; excluded: number; budget: number };
type Detail = Task & { pages: Page[] };
const labels: Record<Status, string> = { queued: '等待采集', running: '正在采集', done: '采集结束', failed: '失败', interrupted: '已中断',
  excluded: '规则排除', budget: '超出预算' };
const qualityLabels: Record<Quality, string> = { complete: '完整', partial: '部分采集', unverified: '未验证' };
const types: Record<string, string> = { document: '网页', stylesheet: '样式', script: '脚本', image: '图片', font: '字体',
  media: '媒体', fetch: '接口', xhr: '接口', screenshot: '截图' };

async function api<T>(path: string, data?: object, signal?: AbortSignal): Promise<T> {
  const response = await fetch(path, data === undefined ? { signal } : {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Website-Capture': '1' },
    body: JSON.stringify(data), signal
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error ?? '操作失败');
  return payload;
}

function PageEvidence({ path, version, evidence }: { path: string; version: string | null; evidence: Evidence }) {
  const [analysis, setAnalysis] = useState<Analysis>();
  const [error, setError] = useState('');
  const [selected, setSelected] = useState('0');
  const suffix = '?v=' + version;
  const state = evidence.states[Number(selected)] ?? evidence.states[0];
  return <div className="evidence">
    {evidence.readiness.map(message => <p key={message}>{message}</p>)}
    <label>验证状态 <select value={selected} onChange={event => setSelected(event.target.value)}>
      {evidence.states.map((item, index) => <option key={index} value={index}>{item.label}</option>)}
    </select></label>
    {state?.reason && <p>{state.reason}</p>}
    {state?.visuals.map(view => <section key={view.width} className="comparison">
      <h4>{view.width} × {view.height} {view.ratio !== undefined && ' · 差异 ' + (view.ratio * 100).toFixed(2) + '%'}</h4>
      {view.reason && <p>{view.reason}</p>}
      <div>{([['原站', view.original], ['离线', view.local], ['差异', view.diff]] as const).map(([label, name]) => name &&
        <figure key={name}><figcaption>{label}</figcaption><img loading="lazy" alt={label + '截图'} src={path + name + suffix} /></figure>)}</div>
    </section>)}
    <button type="button" onClick={() => void api<Analysis>(path + 'evidence.json' + suffix).then(setAnalysis, () => setError('无法读取页面分析'))}>载入 DOM/CSS 分析</button>
    <a className="button" href={path + 'evidence.json' + suffix} download>下载分析 JSON</a>
    {error && <p role="alert">{error}</p>}
    {analysis?.analyses.filter(item => item.state === state?.label).map(item => <details key={item.width}>
      <summary>{item.width} × {item.height} · {item.nodes.length} 个元素 · {item.styles.length} 个样式表</summary>
      <p>iframe {item.special.iframe} · Canvas {item.special.canvas} · {analysis.missing.length} 项样式或素材缺失</p>
      <ul className="resources">{item.styles.map(style => <li key={style.url}>{style.url} · {style.local || '未保存'}</li>)}</ul>
      <ul className="resources">{item.nodes.map((node, index) => <li key={index}>
        {node.tag} · {node.text || '无文本'} · {Math.round(node.width)} × {Math.round(node.height)} · {node.visible ? '可见' : '隐藏'} · {node.font} {node.fontSize} · {node.color}
      </li>)}</ul>
    </details>)}
  </div>;
}

function App() {
  const [url, setUrl] = useState('');
  const [mode, setMode] = useState<Mode>('single');
  const [manual, setManual] = useState(false);
  const [seeds, setSeeds] = useState('');
  const [maxPages, setMaxPages] = useState(100);
  const [maxDepth, setMaxDepth] = useState(4);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [inspect, setInspect] = useState<number>();
  const [mapPage, setMapPage] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selected, setSelected] = useState('');
  const [detail, setDetail] = useState<Detail>();
  const [preview, setPreview] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  const [busy, setBusy] = useState(false);
  const [offline, setOffline] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [error, setError] = useState('');
  const [revision, refresh] = useState(0);

  useEffect(() => {
    if (stopped) return;
    const controller = new AbortController();
    let timer: number;
    async function poll() {
      try {
        const [list, current] = await Promise.all([
          api<Task[]>('/api/jobs', undefined, controller.signal),
          selected ? api<Detail>('/api/jobs/' + selected, undefined, controller.signal) : undefined
        ]);
        if (controller.signal.aborted) return;
        setTasks(list);
        setDetail(current);
        setOffline(false);
        if (!selected && list[0]) setSelected(list[0].id);
        timer = window.setTimeout(poll, list.some(task => ['queued', 'running'].includes(task.status)) ? 900 : 3000);
      } catch {
        if (controller.signal.aborted) return;
        setOffline(true);
        timer = window.setTimeout(poll, 3000);
      }
    }
    void poll();
    return () => { controller.abort(); window.clearTimeout(timer); };
  }, [selected, stopped, revision]);

  async function action(work: () => Promise<void>) {
    setError('');
    setBusy(true);
    try { await work(); }
    catch (failure) { setError(failure instanceof Error ? failure.message : '操作失败'); }
    finally { setBusy(false); }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void action(async () => {
      const result = await api<{ id: string }>('/api/jobs', { url: url.trim(), mode,
        seeds: mode === 'scan' ? seeds.split(/\r?\n/).map(item => item.trim()).filter(Boolean) : [], recipes,
        ...(mode === 'scan' ? { maxPages, maxDepth } : {}) });
      setSelected(result.id);
      setPreview(mode !== 'single');
      setInspect(undefined);
      setMapPage(0);
      setUrl('');
      refresh(value => value + 1);
    });
  }
  function retry(path: string) {
    void action(async () => {
      await api(path, {});
      refresh(value => value + 1);
    });
  }
  const current = detail?.id === selected ? detail : undefined;
  const active = current && ['queued', 'running'].includes(current.status);
  const archivePath = current?.done ? '/api/jobs/' + selected + '/preview' : '';
  const completed = current?.pages.filter(page => page.archived).map(page => page.version).join(',') ?? '';
  useEffect(() => {
    const viewer = frame.current;
    if (!preview || !viewer || !archivePath) return;
    const hash = viewer.contentWindow?.location.hash ?? '';
    viewer.src = archivePath + '?version=' + encodeURIComponent(completed) + hash;
  }, [archivePath, completed, preview]);

  return <main>
    <header className="top">
      <div className="identity"><span className="mark" aria-hidden="true"><i /><i /><i /></span><div><p>ToolOrbit</p><h1>网页采集</h1></div></div>
      <button className="quiet exit" disabled={stopped || busy || offline} onClick={() => void action(async () => {
        await api('/api/shutdown', {});
        setStopped(true);
      })}>退出服务</button>
    </header>
    {!stopped && <div className="actions recording-modes" role="group" aria-label="采集模式">
      <button aria-pressed={!manual} onClick={() => setManual(false)}>自动采集</button>
      <button aria-pressed={manual} onClick={() => setManual(true)}>手动录制</button>
    </div>}
    {stopped ? <p role="status" className="notice">服务已停止。可从 ToolOrbit 或综合菜单重新打开。</p> : manual ? <ManualRecorder /> : <>
      <form className="capture" onSubmit={submit}>
        <label htmlFor="url">网页地址</label>
        <div className="input-row">
          <input id="url" type="url" placeholder="https://example.com" required maxLength={2048} value={url} onChange={event => setUrl(event.target.value)} />
          <button className="primary" disabled={busy || offline}>开始采集 <span aria-hidden="true">↗</span></button>
        </div>
        <label className="mode">采集范围 <select value={mode} onChange={event => setMode(event.target.value as Mode)}>
          <option value="single">单页</option><option value="site">同站快速采集 · 10 页 / 2 层</option>
          <option value="scan">站点扫描 · 100 页 / 4 层</option>
        </select></label>
        {mode === 'scan' && <>
          <div className="recipe">
            <label>页数上限 <input type="number" min={1} max={100} required value={maxPages || ''} onChange={event => setMaxPages(Number(event.target.value))} /></label>
            <label>链接深度 <input type="number" min={1} max={4} required value={maxDepth || ''} onChange={event => setMaxDepth(Number(event.target.value))} /></label>
          </div>
          <label className="seed-input">补充同源路径（每行一条）
            <textarea value={seeds} maxLength={5000} onChange={event => setSeeds(event.target.value)} placeholder="/docs/overview" />
          </label>
        </>}
        <details className="capture-options"><summary>录制入口页状态</summary>
          <p>按顺序执行所选操作，最多 3 步。每一步保存当时的页面画面。</p>
          {recipes.map((recipe, index) => <div className="recipe" key={index}>
            <input required aria-label={'状态名称 ' + (index + 1)} maxLength={80} placeholder="状态名称" value={recipe.label}
              onChange={event => setRecipes(items => items.map((item, i) => i === index ? { ...item, label: event.target.value } : item))} />
            <select aria-label={'交互类型 ' + (index + 1)} value={recipe.kind}
              onChange={event => setRecipes(items => items.map((item, i) => i === index ? { ...item, kind: event.target.value as Recipe['kind'] } : item))}>
              <option value="menu">菜单</option><option value="tab">标签页</option><option value="details">折叠区</option><option value="dialog">弹窗</option>
            </select>
            <input required aria-label={'CSS 选择器 ' + (index + 1)} maxLength={250} placeholder="CSS 选择器，如 #open-menu" value={recipe.selector}
              onChange={event => setRecipes(items => items.map((item, i) => i === index ? { ...item, selector: event.target.value } : item))} />
            <button type="button" onClick={() => setRecipes(items => items.filter((_, i) => i !== index))}>移除</button>
          </div>)}
          <button type="button" disabled={recipes.length >= 3} onClick={() => setRecipes(items => [...items, { label: '', selector: '', kind: 'menu' }])}>添加状态</button>
        </details>
      </form>
      {offline && <p role="status" className="notice">本机服务连接中断，正在重连。</p>}
      {error && <p role="alert" className="notice error">{error}</p>}
      <div className="workspace">
        <nav aria-label="采集任务">
          <h2>任务记录 <small>{tasks.length}</small></h2>
          {tasks.length === 0 ? <p className="muted empty">提交网址后，任务会显示在这里。</p> : tasks.map(task =>
            <button className="task" type="button" key={task.id} aria-current={selected === task.id ? 'true' : undefined} onClick={() => {
              setSelected(task.id);
              setPreview(false);
              setInspect(undefined);
              setMapPage(0);
            }}>
              <strong title={task.url}>{task.url}</strong>
              <span><span className={'state ' + task.status}>{labels[task.status]}</span>{task.done}/{task.total} 页</span>
            </button>
          )}
        </nav>
        <section className="detail" aria-label="任务详情" aria-busy={Boolean(selected && !current)}>
          {!current ? <div className="placeholder"><span aria-hidden="true">⌗</span><h2>{selected ? '正在读取任务' : '等待第一个采集任务'}</h2></div> : <>
            <div className="detail-top">
              <div><p className={'state ' + current.status}>{labels[current.status]}</p><h2 title={current.url}>{current.url}</h2></div>
              <div className="actions">
                {archivePath && <button aria-expanded={preview} onClick={() => setPreview(value => !value)}>{preview ? '关闭预览' : '站点预览'}</button>}
                {archivePath && <a className="button" href={archivePath + '?download=1'}>下载 HTML ↓</a>}
                {!active && (current.status === 'interrupted' || current.failed > 0) && <button disabled={busy} onClick={() => retry('/api/jobs/' + current.id + '/resume')}>
                  {current.status === 'interrupted' ? '继续任务' : '重试失败页'}
                </button>}
                {current.done > 0 && <a className="button" href={'/api/jobs/' + current.id + '/zip'}>导出 ZIP ↓</a>}
              </div>
            </div>
            {current.error && <p className="notice error">{current.error}</p>}
            <p className="summary">发现 {current.total} · 完整 {current.complete} · 部分 {current.partial} · 未验证 {current.unverified} · 失败 {current.failed} · 待采 {current.pending} · 排除 {current.excluded} · 超限 {current.budget}</p>
            {current.discovery && <p className="summary">{current.discovery}</p>}
            <progress aria-label="页面采集进度" max={current.total} value={current.total - current.pending} />
            {preview && archivePath && <section className="viewer">
              <div><h3>站点离线预览</h3>{window.top === window.self && <a href={archivePath} target="_blank" rel="noreferrer">新窗口打开 ↗</a>}</div>
              <iframe ref={frame} title="离线网页预览" />
            </section>}
            <h3 className="map-title">页面地图</h3>
            {current.pages.length > 50 && <div className="actions">
              <button disabled={mapPage === 0} onClick={() => setMapPage(value => value - 1)}>上一组</button>
              <span>{mapPage * 50 + 1}–{Math.min((mapPage + 1) * 50, current.pages.length)} / {current.pages.length}</span>
              <button disabled={(mapPage + 1) * 50 >= current.pages.length} onClick={() => setMapPage(value => value + 1)}>下一组</button>
            </div>}
            <ul className="pages">{current.pages.slice(mapPage * 50, (mapPage + 1) * 50).map(page => {
              const saved = page.entries.filter(entry => entry.file).length;
              const warnings = page.entries.filter(entry => entry.reason && !entry.reason.startsWith('仅记录')).length;
              return <li key={page.id}>
                <div className="page-row">
                  <div className="page-info"><strong>{page.title || page.url}</strong><p>{page.url} · {page.source} · 深度 {page.depth}</p></div>
                  <span className={'state ' + page.status}>{page.status === 'done' && page.quality ? qualityLabels[page.quality] : labels[page.status]}</span>
                  {page.evidence && <button className="quiet" aria-expanded={inspect === page.id} onClick={() => setInspect(inspect === page.id ? undefined : page.id)}>验证与分析</button>}
                  {!active && (page.status === 'failed' || page.status === 'done' && page.quality !== 'complete') &&
                    <button className="quiet" disabled={busy} onClick={() => retry('/api/jobs/' + current.id + '/pages/' + page.id + '/retry')}>重采</button>}
                </div>
                {page.error && <p className="page-error">{page.error}</p>}
                {page.alias && <p className="muted">入口别名 {page.alias}</p>}
                {page.links.length > 0 && <details><summary>发现 {page.links.length} 个站内链接</summary>
                  <ul className="resources">{page.links.map((link, index) => <li key={index}>{link}</li>)}</ul></details>}
                {inspect === page.id && page.evidence && <PageEvidence key={page.version} version={page.version} evidence={page.evidence}
                  path={'/api/jobs/' + current.id + '/pages/' + page.id + '/evidence/'} />}
                {page.entries.length > 0 && <details><summary>{saved} 项已保存 · {warnings} 项未取得</summary>
                  <ul className="resources">{page.entries.map((entry, index) => <li key={index}>
                    {types[entry.kind] ?? entry.kind} · {entry.url || '内部资源'} · {entry.reason ?? (entry.file ? '已保存' : '已记录')}
                  </li>)}</ul>
                </details>}
              </li>;
            })}</ul>
          </>}
        </section>
      </div>
    </>}
  </main>;
}

createRoot(document.getElementById('root')!).render(<App />);
