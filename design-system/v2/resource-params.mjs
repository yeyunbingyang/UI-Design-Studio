// A3.4: explicit data registry; only validated scalar parameters reach CSS.
export function indexResources(registry,catalog){
 if(registry?.schemaVersion!==2||!Array.isArray(registry.resources))throw Error('Invalid registry');
 const allowed=new Set(catalog.dimensions.flatMap(d=>d.resources.map(r=>r.id+'@'+r.version))), index=new Map();
 for(const r of registry.resources){const key=r.id+'@'+r.version;if(!allowed.has(key)||index.has(key)||r.dimensionId!==r.id.split('.')[0]||!r.parameters||typeof r.parameters!=='object'||Array.isArray(r.parameters))throw Error('Invalid resource: '+key);index.set(key,r)}
 if(index.size!==allowed.size)throw Error('Incomplete registry');return index;
}
export function resourceParameters(preset,index){
 return Object.fromEntries(Object.entries(preset.selections).map(([k,v])=>{const r=index.get(v.id+'@'+v.version);if(!r||r.dimensionId!==k)throw Error('Missing resource: '+v.id);return [k,r.parameters]}));
}
export const number=(v,min,max,name)=>{if(typeof v!=='number'||!Number.isFinite(v)||v<min||v>max)throw Error('Invalid '+name);return v};
export const hex=(v,name)=>{if(typeof v!=='string'||!/^#[0-9a-f]{6}$/i.test(v))throw Error('Invalid '+name);return v};
export function validateParameters(q){
 const c=q.color,t=q.typography;
 for(const k of ['primary','secondary','darkCanvas','lightCanvas'])hex(c[k],'color.'+k);
 number(q.radius.px,0,40,'radius');number(q.spacing.base,2,24,'spacing');number(q.density.gapScale,1,4,'density');number(q.density.controlHeight,24,72,'controlHeight');
 if(!['system-ui','Georgia','Consolas'].includes(t.family))throw Error('Invalid font family');
 number(t.body,10,24,'body');number(t.lineHeight,1.2,2.2,'lineHeight');number(q.border.width,0,6,'border');
 for(const [group,key,min,max] of [['background','size',2,128],['surface','opacity',0.2,1],['surface','blur',0,32],['shadow','offsetY',0,32],['shadow','offset',0,16],['shadow','blur',0,64],['effects','offset',0,8],['effects','blur',0,32],['motion','duration',0,2000],['motion','offset',0,8]])if(q[group][key]!==undefined)number(q[group][key],min,max,group+'.'+key);
 return q;
}
