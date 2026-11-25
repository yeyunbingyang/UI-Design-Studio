import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const readJson=async path=>JSON.parse(await readFile(new URL(path,import.meta.url),'utf8'));

test('12 design domains map every canonical dimension exactly once',async()=>{
  const domains=await readJson('../../design-system/v2/domains.json');
  const catalog=await readJson('../../design-system/v2/catalog.json');
  assert.equal(domains.domains.length,12);
  const canonical=catalog.dimensions.map(d=>d.id);
  const mapped=domains.domains.flatMap(d=>d.dimensions);
  assert.equal(mapped.length,20);
  assert.equal(new Set(mapped).size,mapped.length,'dimension mapping must not contain duplicates');
  assert.deepEqual([...mapped].sort(),[...canonical].sort(),'every catalog dimension must be mapped and no unknown dimension may be introduced');
});

test('domain metadata does not replace canonical dimension IDs',async()=>{
  const domains=await readJson('../../design-system/v2/domains.json');
  assert.equal(domains.compatibility.canonicalDimensionIds,'unchanged');
  assert.equal(domains.compatibility.presetsAndResources,'no-id-migration-required');
  assert.ok(domains.invariants.some(rule=>rule.includes('not replace canonical dimension IDs')));
});
