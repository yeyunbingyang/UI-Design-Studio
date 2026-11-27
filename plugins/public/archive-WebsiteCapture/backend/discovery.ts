import robotsParser from 'robots-parser';
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import { fetchRemote, webUrl } from './network.ts';

const agent = 'WebsiteCapture';
const parser = new XMLParser({ parseTagValue: false, ignoreDeclaration: true });
export const scanLimit = 100;
export const scanDepth = 4;
export const mapLimit = 5000;

export function canonical(input: string, base?: string) {
  const url = webUrl(input, base);
  for (const name of [...url.searchParams.keys()]) {
    if (/^(utm_.+|gclid|fbclid|msclkid)$/i.test(name)) url.searchParams.delete(name);
  }
  return url;
}

export async function readPolicy(origin: string, signal: AbortSignal, request = fetchRemote) {
  const url = new URL('/robots.txt', origin);
  const guard = (target: URL) => {
    if (target.origin !== origin) throw new Error('发现请求已跳出站点范围');
  };
  let content = '';
  let warning: string | undefined;
  try {
    const response = await request(url, 'GET', { 'user-agent': agent }, AbortSignal.any([signal, AbortSignal.timeout(6000)]), undefined, guard);
    if (response.status >= 500 || response.status === 429 || response.status === 401 || response.status === 403) {
      warning = '站点爬取规则暂不可用';
    } else if (response.status === 200) content = response.body.toString('utf8').slice(0, 512 * 1024);
  } catch { warning = '站点爬取规则暂不可用'; }
  signal.throwIfAborted();
  const rules = robotsParser(url.href, content);
  return {
    warning,
    allowed: (address: string) => !warning && rules.isAllowed(address, agent) !== false,
    async sitemaps() {
      const found = new Set<string>();
      const seen = new Set<string>();
      let skipped = false;
      const queue = [...rules.getSitemaps(), '/sitemap.xml'];
      const deadline = AbortSignal.any([signal, AbortSignal.timeout(20_000)]);
      while (queue.length && seen.size < 16 && found.size < mapLimit && !deadline.aborted) {
        try {
          const next = canonical(queue.shift()!, origin);
          if (next.origin !== origin || seen.has(next.href) || !rules.isAllowed(next.href, agent)) continue;
          seen.add(next.href);
          const response = await request(next, 'GET', { 'user-agent': agent }, deadline, undefined, guard);
          if (response.status === 404 || response.status === 410) continue;
          if (response.status !== 200) { skipped = true; continue; }
          const source = response.body.toString('utf8');
          if (source.length > 2_000_000 || /<!DOCTYPE/i.test(source) || XMLValidator.validate(source) !== true) {
            skipped = true;
            continue;
          }
          const xml = parser.parse(source);
          const rows = xml.urlset?.url ?? xml.sitemapindex?.sitemap;
          for (const row of Array.isArray(rows) ? rows : rows ? [rows] : []) {
            if (typeof row.loc !== 'string') continue;
            try {
              const entry = canonical(row.loc, origin);
              if (entry.origin !== origin) continue;
              if (xml.urlset) found.add(entry.href);
              else if (queue.length < 128) queue.push(entry.href);
              if (found.size >= mapLimit) break;
            } catch { /* 跳过无效站点地图项。 */ }
          }
        } catch { skipped = true; }
      }
      return { urls: [...found], limited: skipped || queue.length > 0 || found.size >= mapLimit };
    }
  };
}
