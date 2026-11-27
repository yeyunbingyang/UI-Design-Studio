import { lookup } from 'node:dns/promises';
import { request as http } from 'node:http';
import { request as https } from 'node:https';
import { createBrotliDecompress, createGunzip, createInflate } from 'node:zlib';
import ipaddr from 'ipaddr.js';

const maxBytes = 8 * 1024 * 1024;
const forwardedHeaders = ['accept', 'accept-language', 'user-agent', 'origin', 'referer', 'cookie', 'sec-fetch-mode', 'sec-fetch-site', 'sec-fetch-dest'];
export type RemoteResponse = { url: URL; status: number; headers: Record<string, string>; body: Buffer };
type Resolver = (host: string) => Promise<{ address: string; family: number }[]>;
const syntheticRange = ipaddr.IPv4.parse('198.18.0.0');
const dnsCache = new Map<string, { until: number; addresses: ReturnType<Resolver> }>();

export function webUrl(input: string, base?: string) {
  const url = new URL(input, base);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) {
    throw new Error('请输入不含凭据的 HTTP 或 HTTPS 地址');
  }
  url.hash = '';
  return url;
}

export function displayUrl(url: string | URL) {
  try {
    const parsed = webUrl(String(url));
    return parsed.origin + parsed.pathname;
  } catch {
    return '';
  }
}

export function isPublicAddress(address: string) {
  const ip = ipaddr.process(address);
  return ip.range() === 'unicast' && (ip.kind() === 'ipv4' ||
    (ip as ipaddr.IPv6).match(ipaddr.IPv6.parse('2000::'), 3));
}

export async function resolveSystemAddress(host: string, system: Resolver = name => lookup(name, { all: true }), retry: Resolver = resolveOverHttps) {
  const addresses = await system(host);
  const publicDomain = /\.[a-z][a-z0-9-]*\.?$/i.test(host) &&
    !/\.(?:local|localdomain|localhost|internal|lan|home\.arpa|test|example|invalid|onion|alt)\.?$/i.test(host);
  // 某些代理的系统 DNS 返回保留网段内的虚拟地址。仅在整组地址都属于该区间时查询真实地址。
  if (publicDomain && addresses.length && addresses.every(item =>
    item.family === 4 && ipaddr.IPv4.parse(item.address).match(syntheticRange, 15))) {
    return retry(host);
  }
  return addresses;
}

export async function publicAddress(url: URL, resolve: Resolver = resolveSystemAddress) {
  const hostname = url.hostname.replace(/^\[|\]$/g, '');
  const addresses = ipaddr.isValid(hostname)
    ? [{ address: hostname, family: ipaddr.parse(hostname).kind() === 'ipv4' ? 4 : 6 }]
    : await resolve(hostname);
  if (!addresses.length || addresses.some(item => !isPublicAddress(item.address))) {
    throw new Error('已拦截非公网地址');
  }
  return addresses[0];
}

function resolveOverHttps(host: string): ReturnType<Resolver> {
  const cached = dnsCache.get(host);
  if (cached && cached.until > Date.now()) return cached.addresses;
  const endpoint = new URL('https://cloudflare-dns.com/dns-query');
  endpoint.searchParams.set('name', host);
  endpoint.searchParams.set('type', 'A');
  const addresses = fetchRemote(endpoint, 'GET', { accept: 'application/dns-json' }, AbortSignal.timeout(7000), async url => {
    if (url.origin !== endpoint.origin) throw new Error('HTTPS DNS 返回了外部跳转');
    return { address: '1.1.1.1', family: 4 };
  }).then(response => {
    if (response.status !== 200) throw new Error('HTTPS DNS 查询失败');
    const reply: { Status: number; Answer?: { type: number; data: string }[] } = JSON.parse(response.body.toString('utf8'));
    return reply.Status === 0 ? (reply.Answer ?? []).filter(record => record.type === 1 && ipaddr.IPv4.isValid(record.data))
      .map(record => ({ address: record.data, family: 4 })) : [];
  }).catch(() => {
    // 无法确认公网地址时，保留原有的拒绝行为。
    return [];
  });
  if (dnsCache.size >= 128) dnsCache.delete(dnsCache.keys().next().value!);
  dnsCache.set(host, { until: Date.now() + 10_000, addresses });
  return addresses;
}

export async function fetchRemote(
  start: URL, method: string, headers: Record<string, string>, signal: AbortSignal,
  resolve = publicAddress, allowTarget?: (url: URL) => void | Promise<void>
): Promise<RemoteResponse> {
  let url = start;
  const outgoing = Object.fromEntries(forwardedHeaders.flatMap(key => headers[key] ? [[key, headers[key]]] : []));
  for (let hop = 0; hop <= 5; hop++) {
    const target = url;
    await allowTarget?.(target);
    const address = await resolve(target);
    signal.throwIfAborted();
    const result = await new Promise<RemoteResponse>((done, fail) => {
      const request = (target.protocol === 'https:' ? https : http)(target, {
        method, signal, headers: { ...outgoing, 'accept-encoding': 'identity' }, agent: false,
        family: address.family,
        lookup: (_hostname, _options, callback) => callback(null, address.address, address.family)
      }, async response => {
        const status = response.statusCode ?? 502;
        const responseHeaders: Record<string, string> = {};
        for (const [name, value] of Object.entries(response.headers)) {
          if (value !== undefined && !['content-length', 'content-encoding', 'transfer-encoding', 'connection',
            'alt-svc', 'clear-site-data', 'refresh'].includes(name)) {
            responseHeaders[name] = Array.isArray(value) ? value.join('\n') : value;
          }
        }
        if ([301, 302, 303, 307, 308].includes(status) && responseHeaders.location) {
          response.destroy();
          done({ url: target, status, headers: responseHeaders, body: Buffer.alloc(0) });
          return;
        }
        if (Number(response.headers['content-length']) > maxBytes || /^video\/|^audio\//i.test(responseHeaders['content-type'] ?? '')) {
          response.destroy();
          fail(new Error('媒体或资源超出首版采集范围'));
          return;
        }
        const encoding = response.headers['content-encoding'];
        const decoder = encoding === 'gzip' ? createGunzip() : encoding === 'br' ? createBrotliDecompress() :
          encoding === 'deflate' ? createInflate() : null;
        if (decoder) response.on('error', error => decoder.destroy(error));
        const stream = decoder ? response.pipe(decoder) : response;
        const chunks: Buffer[] = [];
        let size = 0;
        try {
          for await (const chunk of stream) {
            size += chunk.length;
            if (size > maxBytes) throw new Error('资源超过 8 MiB');
            chunks.push(chunk);
          }
          done({ url: target, status, headers: responseHeaders, body: Buffer.concat(chunks) });
        } catch (error) {
          response.destroy();
          fail(error);
        }
      });
      request.setTimeout(10_000, () => request.destroy(new Error('资源下载超时')));
      request.on('error', fail);
      request.end();
    });
    if (![301, 302, 303, 307, 308].includes(result.status) || !result.headers.location) return result;
    url = webUrl(result.headers.location, String(url));
    if (target.origin !== url.origin) {
      delete outgoing.cookie;
      delete outgoing.referer;
    }
  }
  throw new Error('重定向次数超过限制');
}
