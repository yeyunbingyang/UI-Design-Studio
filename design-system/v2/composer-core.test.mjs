import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {defaults,resolve,resolveTokens,applyPreset,css,renderPage,unsupported} from './composer-core.mjs';
const read=p=>JSON.parse(readFileSync(new URL(p,import.meta.url)));
const catalog=read('./catalog.json'),vapor=read('./styles/vaporwave/preset.json'),base=defaults(catalog);
assert.equal(Object.keys(base.selections).length,20);
const r=resolve(vapor);assert.equal(r.tokens['semantic.color.primary'],'#ff71ce');assert.equal(r.tokens['component.card.radius'],'4px');
assert.match(renderPage(r),/设计工作台/);assert.match(css(r),/#ff71ce/);
const locked=structuredClone(vapor);locked.lockedDimensions=['color'];locked.overrides.primary='#123456';const applied=applyPreset(locked,base);assert.equal(applied.selections.color.id,'color.neon');assert.equal(applied.overrides.primary,'#123456');
assert.throws(()=>resolveTokens({a:'{b}',b:'{a}'}),/cycle/);assert.throws(()=>resolveTokens({a:'{missing}'}),/Missing/);
let count=0;for(const d of catalog.dimensions)for(const x of d.resources){const p=structuredClone(vapor);p.selections[d.id]={id:x.id,version:x.version};if(unsupported.has(x.id)){assert.throws(()=>resolve(p),/尚未实现/);continue}assert.ok(renderPage(resolve(p)).includes('设计工作台'));count++}
console.log('Renderer smoke tests:',count,'candidate options; unsupported options rejected');
