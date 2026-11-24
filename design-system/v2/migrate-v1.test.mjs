import assert from 'node:assert/strict';
import {migrateV1,validatePreset} from './migrate-v1.mjs';
const keys=['layout','navigation','style','color','typography','components','material','icons','density','visualization','motion','assets'];
const presets=[[0,0,0,0,0,0,0,0,1,1,1,0],[0,0,0,2,0,1,0,0,2,3,1,0],[3,1,1,3,0,2,1,0,0,0,1,1],[2,0,2,3,2,0,0,0,1,1,0,0],[4,2,4,4,1,1,3,1,2,2,0,2],[0,1,5,5,2,0,0,0,1,0,1,2]];
for(const values of presets){
 const v1={schemaVersion:1,name:'Test',selections:Object.fromEntries(keys.map((k,i)=>[k,values[i]])),locked:['material','density','style']};
 const before=JSON.stringify(v1),v2=migrateV1(v1);
 assert.deepEqual(validatePreset(v2),[]);assert.equal(Object.keys(v2.selections).length,20);assert.equal(JSON.stringify(v1),before);
 assert.deepEqual(v2.migration.original,v1);assert.ok(v2.lockedDimensions.includes('radius'));assert.ok(v2.lockedDimensions.includes('theme'));
 assert.deepEqual(migrateV1(v1),v2);
}
assert.throws(()=>migrateV1({schemaVersion:1}),/Invalid/);
const invalid={schemaVersion:1,name:'Invalid',selections:Object.fromEntries(keys.map(k=>[k,0])),locked:[]};invalid.selections.color=99;
assert.throws(()=>migrateV1(invalid),/color/);
console.log('Six legacy presets, preservation, determinism, locks and rejection: PASS');
