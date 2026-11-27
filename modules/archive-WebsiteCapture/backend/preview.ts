import { parse, serialize, type DefaultTreeAdapterTypes } from 'parse5';
import postcss from 'postcss';
import valueParser from 'postcss-value-parser';
import { webUrl } from './network.ts';
import { canonical } from './discovery.ts';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { contentType } from 'mime-types';

type Node = DefaultTreeAdapterTypes.Node;
type Element = DefaultTreeAdapterTypes.Element;
const omit = new Set(['script', 'noscript', 'iframe', 'frame', 'frameset', 'object', 'embed', 'base', 'meta', 'template',
  'portal', 'fencedframe', 'animate', 'animatetransform', 'animatemotion', 'set', 'discard', 'foreignobject']);
const removeAttributes = new Set(['srcdoc', 'srcset', 'imagesrcset', 'imagesizes', 'ping', 'action', 'formaction',
  'target', 'download', 'autofocus', 'integrity', 'crossorigin', 'background', 'manifest', 'usemap', 'longdesc',
  'cite', 'data-capture-link', 'attributionsrc', 'lowsrc', 'dynsrc', 'codebase', 'archive', 'profile', 'icon']);
const offlinePolicy = "default-src 'none'; img-src 'self' file: data:; style-src 'self' file: 'unsafe-inline'; font-src 'self' file: data:; form-action 'none'; base-uri 'none'";
export const previewPolicy = offlinePolicy.replaceAll(' file:', '') + '; sandbox';

function rewriteUrl(input: string, base: string, assets: Map<string, string>, prefix: string) {
  const value = input.trim();
  if (value.startsWith('#') || /^data:(?:image\/(?:png|jpeg|gif|webp|avif|x-icon)|font\/(?:woff2?|ttf|otf));base64,[\w+/=]+$/i.test(value)) return value;
  try {
    const url = webUrl(value, base);
    const name = assets.get(url.href);
    if (name) return prefix + name;
  } catch { /* 该链接没有可用的离线资源。 */ }
  return undefined;
}

export function rewriteCss(css: string, base: string, assets: Map<string, string>, prefix: string, inline = false): string {
  try {
    const root = postcss.parse(inline ? 'x{' + css + '}' : css);
    const safeValue = (value: string) => {
      const parsed = valueParser(value);
      parsed.walk(node => {
        if (node.type !== 'function') return undefined;
        const name = node.value.toLowerCase();
        if (name === 'url' || name === 'src') {
          const input = node.nodes.filter(item => item.type !== 'space' && item.type !== 'comment');
          const replacement = input.length === 1 ? rewriteUrl(input[0].value, base, assets, prefix) : undefined;
          node.value = 'url';
          node.nodes = [{ type: 'string', quote: '"', value: replacement ?? 'data:,', sourceIndex: 0, sourceEndIndex: 0 }];
          return false;
        }
        if (name === 'image-set' || name === '-webkit-image-set' || name === 'image') {
          for (const item of node.nodes) {
            if (item.type === 'string') item.value = rewriteUrl(item.value, base, assets, prefix) ?? 'data:,';
          }
        }
        return undefined;
      });
      return parsed.toString();
    };
    root.walkComments(comment => { comment.remove(); });
    root.walkDecls(declaration => { declaration.value = safeValue(declaration.value); });
    root.walkAtRules(rule => {
      if (rule.name.toLowerCase() === 'charset') { rule.remove(); return; }
      if (rule.name.toLowerCase() !== 'import') return;
      const parsed = valueParser(rule.params);
      const first = parsed.nodes.find(node => node.type !== 'space' && node.type !== 'comment');
      const url = first?.type === 'string' ? first.value :
        first?.type === 'function' && first.value.toLowerCase() === 'url' ? first.nodes[0]?.value : undefined;
      const replacement = url && rewriteUrl(url, base, assets, prefix);
      if (!replacement || !replacement.endsWith('.css') || !first) { rule.remove(); return; }
      rule.params = '"' + replacement + '"' + rule.params.slice(first.sourceEndIndex);
    });
    const result = root.toString();
    return inline ? result.slice(result.indexOf('{') + 1, result.lastIndexOf('}')) : result;
  } catch {
    return '';
  }
}

function element(node: Node): node is Element { return 'tagName' in node; }

export function buildPreview(html: string, pageUrl: string, assets: Map<string, string>, stripLinkQuery = false) {
  const doc = parse(html);
  const links = new Set<string>();
  let base = pageUrl;
  const htmlNode = doc.childNodes.find(element);
  const head = htmlNode?.childNodes.find((node): node is Element => element(node) && node.tagName === 'head');
  const originalBase = head?.childNodes.find((node): node is Element => element(node) && node.tagName === 'base');
  const originalHref = originalBase?.attrs.find(attr => attr.name === 'href')?.value;
  if (originalHref) {
    try { base = webUrl(originalHref, pageUrl).href; } catch { /* 使用文档地址。 */ }
  }
  function clean(parent: DefaultTreeAdapterTypes.ParentNode) {
    parent.childNodes = parent.childNodes.filter(node => {
      if (!element(node)) return node.nodeName !== '#comment';
      const tag = node.tagName.toLowerCase();
      const attr = (name: string) => node.attrs.find(item => item.name === name)?.value;
      if (omit.has(tag) || (tag === 'link' && attr('rel')?.toLowerCase() !== 'stylesheet')) return false;
      node.attrs = node.attrs.filter(item => {
        const name = item.name.toLowerCase();
        if (name.startsWith('on') || removeAttributes.has(name)) return false;
        if (name === 'style') item.value = rewriteCss(item.value, base, assets, 'assets/', true);
        if (name === 'href' && (tag === 'a' || tag === 'area')) return false;
        if (['src', 'href', 'poster'].includes(name)) {
          const local = rewriteUrl(item.value, base, assets, 'assets/');
          if (!local) return false;
          item.value = local;
        }
        if (['fill', 'stroke', 'filter', 'clip-path', 'mask', 'cursor', 'marker-start', 'marker-mid', 'marker-end'].includes(name) &&
          item.value.includes('(')) item.value = rewriteCss(name + ':' + item.value, base, assets, 'assets/', true).slice(name.length + 1);
        return true;
      });
      if (tag === 'style') {
        for (const child of node.childNodes) {
          if ('value' in child) child.value = rewriteCss(child.value, base, assets, 'assets/').replaceAll(/<\/style/gi, '<\\/style');
        }
      }
      clean(node);
      return tag !== 'link' || node.attrs.some(item => item.name === 'href');
    });
  }
  // 保存可重写的站内链接。来自原站的同名属性在清理时丢弃。
  function gather(parent: DefaultTreeAdapterTypes.ParentNode, destinations: Map<Element, string>) {
    for (const node of parent.childNodes) {
      if (!element(node)) continue;
      if (node.tagName === 'a' || node.tagName === 'area') {
        const href = node.attrs.find(attr => attr.name === 'href')?.value.trim();
        if (href) {
          try {
            const target = new URL(href, base);
            const url = webUrl(target.href);
            if (stripLinkQuery) url.search = '';
            if (href.startsWith('#')) destinations.set(node, href);
            else if (url.origin === new URL(pageUrl).origin) {
              links.add(url.href);
              destinations.set(node, url.href + target.hash);
            }
          } catch { /* 丢弃非网页链接。 */ }
        }
      }
      gather(node, destinations);
    }
  }
  const destinations = new Map<Element, string>();
  gather(doc, destinations);
  clean(doc);
  for (const [node, target] of destinations) node.attrs.push({ name: 'data-capture-link', value: target });
  return { html: '<!doctype html>' + serialize(doc).replace(/^<!doctype html>/i, ''), links: [...links] };
}

export function renderPreview(template: string, pages: ReadonlyMap<string, number>, embedded?: ReadonlyMap<string, string>) {
  const doc = parse(template);
  const html = doc.childNodes.find(element);
  const head = html?.childNodes.find((node): node is Element => element(node) && node.tagName === 'head');
  const policy = parse('<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="' +
    (embedded ? "default-src 'none'; img-src data:; font-src data:; style-src data: 'unsafe-inline'; form-action 'none'; base-uri 'none'" : offlinePolicy) + '">');
  const policyHead = policy.childNodes.find(element)?.childNodes.find((node): node is Element => element(node) && node.tagName === 'head');
  if (head && policyHead) head.childNodes.unshift(...policyHead.childNodes);
  function links(parent: DefaultTreeAdapterTypes.ParentNode) {
    // 旧档案仍可能包含按启用脚本模式解析的回退内容。禁用脚本的预览会重新解释它。
    parent.childNodes = parent.childNodes.filter(node => !element(node) || node.tagName !== 'noscript');
    for (const node of parent.childNodes) {
      if (!element(node)) continue;
      const link = node.attrs.find(attr => attr.name === 'data-capture-link');
      if (link) {
        const hashIndex = link.value.indexOf('#');
        const url = hashIndex < 0 ? link.value : link.value.slice(0, hashIndex);
        const hash = hashIndex < 0 ? '' : link.value.slice(hashIndex);
        const id = pages.get(url) ?? (url ? pages.get(canonical(url).href) : undefined);
        node.attrs = node.attrs.filter(attr => attr !== link);
        if (id || !url) node.attrs.push({ name: 'href', value: id ? (embedded ? '#page-' + id : '../' + id + '/index.html') + hash : hash });
        else if (embedded) {
          node.attrs.push({ name: 'aria-disabled', value: 'true' }, { name: 'title', value: '此页面尚未采集' });
        }
      }
      if (embedded) {
        const inline = (value: string) => value.replace(/assets\/([a-f0-9]{32}\.[a-z0-9]+)/g, (_match, name) => embedded.get(name) ?? 'data:,');
        for (const attr of node.attrs) {
          if (['src', 'href', 'poster', 'style', 'fill', 'stroke', 'filter', 'clip-path', 'mask', 'cursor', 'marker-start', 'marker-mid', 'marker-end'].includes(attr.name)) attr.value = inline(attr.value);
        }
        if (node.tagName === 'style') for (const child of node.childNodes) {
          if ('value' in child) child.value = inline(child.value);
        }
      }
      links(node);
    }
  }
  links(doc);
  return serialize(doc);
}

export async function embeddedAssets(folder: string) {
  const files = new Map<string, Buffer>();
  for (const name of await readdir(folder)) {
    if (/^[a-f0-9]{32}\.[a-z0-9]+$/.test(name)) files.set(name, await readFile(join(folder, name)));
  }
  const output = new Map<string, string>();
  function encode(name: string, visiting = new Set<string>()): string {
    if (visiting.has(name)) return 'data:,';
    const existing = output.get(name);
    if (existing) return existing;
    const file = files.get(name);
    if (!file) return 'data:,';
    const next = new Set(visiting).add(name);
    const data = name.endsWith('.css') ? Buffer.from(file.toString('utf8')
      .replace(/(["'])([a-f0-9]{32}\.[a-z0-9]+)\1/g, (_match, quote, child) => quote + encode(child, next) + quote)) : file;
    const uri = 'data:' + (contentType(name) || 'application/octet-stream') + ';base64,' + data.toString('base64');
    output.set(name, uri);
    return uri;
  }
  for (const name of files.keys()) encode(name);
  return output;
}

type PreviewPage = { id: number; title: string; html: string; states?: { label: string; html: string }[] };

export const sitePreviewHead = `<!doctype html><html lang="zh-CN"><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>站点离线预览</title>
<style>body{margin:0;height:100vh;display:flex;flex-direction:column;font:14px system-ui;background:#fff}nav{display:flex;gap:.6em;align-items:center;padding:.5em .8em;background:#edf1f6}select{min-width:0;max-width:75%;font:inherit}iframe{flex:1;width:100%;border:0;min-height:0}</style>
<nav><label for="pages">已采集页面</label><select id="pages"></select><span id="states" hidden><label for="state">页面状态</label> <select id="state"></select></span></nav>
<iframe title="站点页面" sandbox="allow-same-origin"></iframe>`;

export function sitePreviewPage({ id, title, html, states }: PreviewPage) {
  const label = title.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  const content = JSON.stringify({ html, states }).replaceAll('<', '\\u003c');
  return '<script type="application/json" data-page="' + id + '" data-title="' + label + '">' + content + '</script>';
}

export const sitePreviewFoot = `
<script>
const pages=[...document.querySelectorAll('script[data-page]')];
const frame=document.querySelector('iframe');
const select=document.querySelector('#pages');
const stateSelect=document.querySelector('#state');
const statesControl=document.querySelector('#states');
let current;
for(const page of pages)select.add(new Option(page.dataset.title,page.dataset.page));
let loaded;
let archive;
function route(){
  const match=/^#page-(\\d+)(?:-state-(\\d+))?(#.*)?$/.exec(location.hash);
  const entry=pages.find(item=>item.dataset.page===match?.[1])||pages[0];
  if(!entry)return;
  if(loaded!==entry){loaded=entry;archive=JSON.parse(entry.textContent);}
  const page=archive;
  const id=entry.dataset.page;
  const state=page.states?.[Number(match?.[2])-1];
  const routeKey='page-'+id+(state?'-state-'+match[2]:'');
  const hash=match?.[3];
  if(current!==routeKey){
    current=routeKey;
    select.value=id;
    statesControl.hidden=!page.states?.length;
    stateSelect.replaceChildren(new Option('默认画面','0'));
    (page.states||[]).forEach((item,index)=>stateSelect.add(new Option(item.label,index+1)));
    stateSelect.value=state?match[2]:'0';
    frame.srcdoc=state?.html||page.html;
  }
  else scrollToAnchor(hash);
}
function scrollToAnchor(hash){
  if(!hash)return;
  let id;
  try{id=decodeURIComponent(hash.slice(1));}catch{return;}
  const doc=frame.contentDocument;
  (doc?.getElementById(id)||doc?.getElementsByName(id)[0])?.scrollIntoView();
}
frame.addEventListener('load',()=>{
  frame.contentDocument?.addEventListener('click',event=>{
    const link=event.target.closest?.('a[href],area[href]');
    const href=link?.getAttribute('href');
    if(!href?.startsWith('#'))return;
    event.preventDefault();
    location.hash=href.startsWith('#page-')&&/^#page-\\d+(?:#|$)/.test(href)?href:'#'+current+href;
  });
  scrollToAnchor(/^#page-\\d+(?:-state-\\d+)?(#.*)$/.exec(location.hash)?.[1]);
});
select.addEventListener('change',()=>location.hash='#page-'+select.value);
stateSelect.addEventListener('change',()=>location.hash='#page-'+select.value+(stateSelect.value==='0'?'':'-state-'+stateSelect.value));
addEventListener('hashchange',route);
route();
</script></html>`;

export function sitePreview(pages: PreviewPage[]) {
  return sitePreviewHead + pages.map(sitePreviewPage).join('') + sitePreviewFoot;
}
