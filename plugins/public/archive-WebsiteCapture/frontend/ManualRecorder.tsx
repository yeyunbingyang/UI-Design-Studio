import { useEffect, useState } from 'react';

type Tab = { id: string; url: string; title: string };
type BrowserState = { connected: boolean; active: string | null; tabs: Tab[] };
type Row = { id: string; url: string; created: string; status: 'recording' | 'done' | 'interrupted'; count: number };
type Resource = { url: string; kind: string; step: number | null; status?: number; file?: string; reason?: string };
type Step = { id: number; time: number; label: string; kind: 'start' | 'click' | 'navigation'; from: string; to: string;
  element?: string; screenshot?: boolean; snapshot?: boolean; reason?: string };
type Detail = { status: Row['status']; reason?: string; steps: Step[]; resources: Resource[] };
const states = { recording: '录制中', done: '已结束', interrupted: '已中断' };

async function request<T>(path: string, input?: object, signal?: AbortSignal): Promise<T> {
  const response = await fetch(path, input ? {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Website-Capture': '1' }, body: JSON.stringify(input), signal
  } : { signal });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error ?? '录制服务请求失败');
  return result;
}

function Resources({ items }: { items: Resource[] }) {
  if (!items.length) return null;
  return <details><summary>{items.length} 项请求 · {items.filter(item => item.file).length} 项已保存</summary>
    <ul className="resources">{items.map((item, index) => <li key={index}>
      {item.kind} · {item.url} · {item.status ?? '等待响应'} · {item.file ? '已保存' : item.reason ?? '等待处理'}
    </li>)}</ul>
  </details>;
}

export function ManualRecorder() {
  const [browser, setBrowser] = useState<BrowserState>();
  const [records, setRecords] = useState<Row[]>([]);
  const [tab, setTab] = useState('');
  const [selected, setSelected] = useState('');
  const [detail, setDetail] = useState<Detail>();
  const [preview, setPreview] = useState<number>();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [revision, refresh] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let timer: number;
    const signal = controller.signal;
    async function poll() {
      try {
        const [status, list, item] = await Promise.all([
          request<BrowserState>('/api/recording/browser', undefined, signal),
          request<Row[]>('/api/recordings', undefined, signal),
          selected ? request<Detail>('/api/recordings/' + selected, undefined, signal) : undefined
        ]);
        if (signal.aborted) return;
        setBrowser(status);
        setRecords(list);
        setDetail(item);
        if (!selected && (status.active || list[0])) setSelected(status.active || list[0].id);
      } catch {
        if (!signal.aborted) setBrowser(undefined);
      } finally {
        if (!signal.aborted) timer = window.setTimeout(poll, 1500);
      }
    }
    void poll();
    return () => { controller.abort(); window.clearTimeout(timer); };
  }, [selected, revision]);

  async function action(work: () => Promise<void>) {
    setBusy(true);
    setError('');
    try { await work(); refresh(value => value + 1); }
    catch (failure) { setError(failure instanceof Error ? failure.message : '录制操作失败'); }
    finally { setBusy(false); }
  }

  const archive = '/api/recordings/' + selected;
  const complete = detail && detail.status !== 'recording' && detail.steps.some(step => step.snapshot);
  const byStep = new Map<number | null, Resource[]>();
  for (const item of detail?.resources ?? []) {
    const group = byStep.get(item.step) ?? [];
    group.push(item);
    byStep.set(item.step, group);
  }

  return <>
    <section className="capture" aria-label="手动录制">
      <div className="actions">
        <button type="button" disabled={busy || browser?.connected} onClick={() => void action(async () => {
          setBrowser(await request<BrowserState>('/api/recording/connect', {}));
        })}>{browser?.connected ? 'Chrome 已连接' : '连接 Chrome'}</button>
        <label>目标标签页 <select value={tab} disabled={!browser?.connected || busy || Boolean(browser.active)} onChange={event => setTab(event.target.value)}>
          <option value="">选择公开网页</option>
          {browser?.tabs.map(item => <option key={item.id} value={item.id}>{item.title || item.url} · {item.url}</option>)}
        </select></label>
        {browser?.active ? <button type="button" disabled={busy} onClick={() => void action(async () => {
          await request('/api/recordings/' + browser.active + '/stop', {});
        })}>停止录制</button> : <button className="primary" type="button" disabled={busy || !browser?.tabs.some(item => item.id === tab)} onClick={() => void action(async () => {
          const record = await request<{ id: string }>('/api/recordings', { targetId: tab });
          setSelected(record.id); setDetail(undefined); setPreview(undefined);
        })}>开始录制</button>}
      </div>
      <p className="summary">{browser?.active ? '正在录制所选 Chrome 标签页。请回到该页点击或导航。' :
        '仅录制选定标签页中的公开网页。可在开始录制后手动刷新，以补采首屏资源。'}</p>
      {!browser?.connected && <p className="summary">在 Chrome 打开 <code>chrome://inspect/#remote-debugging</code>，启用本机调试并允许连接。</p>}
      {error && <p className="notice error" role="alert">{error}</p>}
    </section>
    <div className="workspace">
      <nav aria-label="录制记录"><h2>录制记录</h2>
        {records.map(record => <button className="task" key={record.id} type="button" aria-current={selected === record.id ? 'true' : undefined}
          onClick={() => { if (selected !== record.id) { setSelected(record.id); setDetail(undefined); setPreview(undefined); } }}>
          <strong title={record.url}>{record.url}</strong><span>{states[record.status]} · {record.count} 步</span>
        </button>)}
      </nav>
      <section className="detail" aria-label="录制时间线">
        <div className="detail-top"><h2>录制时间线</h2>{complete && <div className="actions">
          <button onClick={() => setPreview(preview === undefined ? detail.steps.find(step => step.snapshot)?.id : undefined)}>{preview === undefined ? '打开预览' : '关闭预览'}</button>
          <a className="button" href={archive + '/preview?download=1'}>下载 HTML</a>
          <a className="button" href={archive + '/zip'}>导出 ZIP</a>
        </div>}</div>
        {detail?.reason && <p className="notice">{detail.reason}</p>}
        {complete && preview !== undefined && <div className="viewer"><iframe title="录制离线预览" src={archive + '/preview#page-' + preview} /></div>}
        {byStep.has(null) && <section><h3 className="map-title">初始与后台请求</h3><Resources items={byStep.get(null) ?? []} /></section>}
        <ol className="pages">{detail?.steps.map(step => <li key={step.id}>
          <div className="page-row"><div className="page-info"><strong>{step.id} · {step.kind === 'click' ? '点击 ' : ''}{step.label}</strong>
            <p>{new Date(step.time).toLocaleTimeString()} · {step.from}{step.to !== step.from && ' → ' + step.to}</p></div>
            {complete && step.snapshot && <button className="quiet" onClick={() => setPreview(step.id)}>查看画面</button>}
          </div>
          {step.element && <p className="muted"><code>{step.element}</code></p>}
          {step.reason && <p className="muted">{step.reason}</p>}
          {step.screenshot && <details><summary>截图</summary><img className="recording-shot" loading="lazy" alt={'步骤 ' + step.id + ' 截图'} src={archive + '/step-' + step.id + '.png'} /></details>}
          <Resources items={byStep.get(step.id) ?? []} />
        </li>)}</ol>
      </section>
    </div>
  </>;
}
