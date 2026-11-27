import type { BrowserContext, Page } from 'playwright';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { renderPreview } from './preview.ts';
import { setTimeout as delay } from 'node:timers/promises';

export type Recipe = { label: string; selector: string; kind: 'menu' | 'tab' | 'details' | 'dialog' };
export type Visual = { width: number; height: number; original?: string; local?: string; diff?: string; ratio?: number; reason?: string };
export type StateEvidence = { label: string; template?: string; reason?: string; visuals: Visual[] };
export type Evidence = { readiness: string[]; quality: 'complete' | 'partial'; states: StateEvidence[] };
export const viewports = [{ width: 1440, height: 900 }, { width: 390, height: 844 }];

export async function viewportImage(page: Page, timeout = 2500): Promise<Buffer | null> {
  const image = await page.screenshot({ timeout, animations: 'disabled' }).catch(() => null);
  if (image || page.isClosed()) return image;
  const session = await page.context().newCDPSession(page).catch(() => null);
  if (!session) return null;
  try {
    const fallback = await Promise.race([
      session.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false }).catch(() => null),
      delay(1300, null, { ref: false })
    ]);
    return fallback ? Buffer.from(fallback.data, 'base64') : null;
  } finally { void session.detach().catch(() => {}); }
}

export async function snapshot(page: Page) {
  return page.evaluate(() => {
    const selector = 'h1,h2,h3,h4,h5,h6,header,main,nav,aside,footer,section,button,img,[role]';
    const nodes = Array.from(document.querySelectorAll(selector)).slice(0, 250).map(node => {
      const css = getComputedStyle(node);
      const rect = node.getBoundingClientRect();
      return { tag: node.localName, role: node.getAttribute('role'), id: node.id.slice(0, 120),
        text: node.textContent?.trim().slice(0, 120), width: rect.width, height: rect.height,
        visible: Boolean(rect.width && rect.height && css.visibility === 'visible' && css.opacity !== '0'),
        font: css.fontFamily, fontSize: css.fontSize, color: css.color, background: css.backgroundColor };
    });
    const copy = document.documentElement.cloneNode(true) as HTMLElement;
    const images = copy.querySelectorAll('img');
    document.querySelectorAll('img').forEach((img, index) => {
      if (img.currentSrc) images[index]?.setAttribute('src', img.currentSrc);
    });
    const overlays = copy.querySelectorAll<HTMLElement>('[popover],dialog');
    document.querySelectorAll<HTMLElement>('[popover],dialog').forEach((node, index) => {
      if (!node.matches(':popover-open,:modal')) return;
      const target = overlays[index];
      const rect = node.getBoundingClientRect();
      if (!target || !rect.width || !rect.height) return;
      target.removeAttribute('popover');
      target.setAttribute('data-capture-overlay', '');
      Object.assign(target.style, { position: 'fixed', inset: 'auto', margin: '0',
        left: rect.x + 'px', top: rect.y + 'px', width: rect.width + 'px', maxWidth: 'none',
        height: rect.height + 'px', maxHeight: 'none', boxSizing: 'border-box', zIndex: '2147483647' });
    });
    return { html: copy.outerHTML, dom: document.documentElement.outerHTML, analysis: { nodes, special: { iframe: document.querySelectorAll('iframe').length,
      canvas: document.querySelectorAll('canvas').length }, styles: Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel=stylesheet]'))
      .slice(0, 250).map(link => link.href) } };
  });
}

export async function recordAction(page: Page, recipe: Recipe) {
  if (recipe.selector.includes('>>') ||
    !await page.evaluate(selector => { try { document.querySelector(selector); return true; } catch { return false; } }, recipe.selector)) {
    throw new Error('选择器必须使用有效 CSS 语法');
  }
  const element = page.locator('css=' + recipe.selector);
  const allowed = await element.evaluate((node, kind) => {
    const role = node.getAttribute('role');
    if (node.closest('a,form,[contenteditable]')) return false;
    if (kind === 'details') return node.matches('details > summary') ||
      (node.matches('button,[role=button]') && node.hasAttribute('aria-controls') && node.hasAttribute('aria-expanded'));
    if (kind === 'tab') return role === 'tab';
    if (!node.matches('button,[role=button]')) return false;
    return kind === 'menu' ? node.hasAttribute('aria-expanded') || node.hasAttribute('aria-haspopup') :
      node.getAttribute('aria-haspopup') === 'dialog' || node.hasAttribute('popovertarget') || node.hasAttribute('aria-controls');
  }, recipe.kind, { timeout: 1200 });
  if (!allowed) throw new Error('所选元素与交互类型不匹配');
  const signal = () => page.evaluate(selector => {
    const node = document.querySelector(selector);
    if (!node) return '';
    const target = document.getElementById(node.getAttribute('aria-controls') ?? node.getAttribute('popovertarget') ?? '');
    return JSON.stringify([node.getAttribute('aria-expanded'), node.getAttribute('aria-selected'),
      node.closest('details')?.open, target?.hidden, target?.getClientRects().length,
      document.querySelectorAll('dialog[open],:popover-open').length, document.body?.innerText.slice(0, 32000)]);
  }, recipe.selector);
  const before = await signal();
  await element.click({ timeout: 1200 });
  for (let attempt = 0; attempt < 8; attempt++) {
    if (await signal() !== before) return;
    await page.waitForTimeout(100);
  }
  throw new Error('点击后未观察到页面状态变化');
}

export async function compareViewport(context: BrowserContext, directory: string, prefix: string, template: string,
  assets: Map<string, string>, size: typeof viewports[number], original: Buffer | null, signal: AbortSignal): Promise<Visual> {
  if (!original) return { ...size, reason: '原站截图未生成' };
  if (signal.aborted) return { ...size, reason: '视觉验证已中断' };
  const originalName = prefix + '-original.png';
  await writeFile(join(directory, originalName), original);
  const page = await context.newPage();
  try {
    await page.setViewportSize(size);
    await page.route('**/*', route => route.abort());
    await page.setContent(renderPreview(template, new Map(), assets), { waitUntil: 'load', timeout: 3500 });
    const local = await viewportImage(page);
    if (!local) return { ...size, original: originalName, reason: '离线截图未生成' };
    const a = PNG.sync.read(original);
    const b = PNG.sync.read(local);
    const diff = new PNG({ width: size.width, height: size.height });
    const count = pixelmatch(a.data, b.data, diff.data, size.width, size.height, { threshold: 0.1 });
    const localName = prefix + '-local.png';
    const diffName = prefix + '-diff.png';
    await Promise.all([writeFile(join(directory, localName), local), writeFile(join(directory, diffName), PNG.sync.write(diff))]);
    const uniform = a.data.every((value, index) => value === a.data[index % 4]);
    return { ...size, original: originalName, local: localName, diff: diffName, ratio: count / (size.width * size.height),
      ...(uniform ? { reason: '原站截图为单色画面，请结合页面诊断判断' } : {}) };
  } catch {
    return { ...size, original: originalName, reason: '离线截图或差异计算失败' };
  } finally { await page.close().catch(() => {}); }
}
