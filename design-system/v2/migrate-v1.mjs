// Pure migration of the actual A2 index-based export; no file writes.
export const dimensions = [["style",["minimal","glass","linear","soft","brutal","tech","vaporwave","bauhaus"]],["theme",["light","dark","system"]],["color",["business-blue","morandi","gray","purple","warm","cyan","neon"]],["typography",["sans","serif","mono"]],["spacing",["base-8","base-4","base-12"]],["radius",["small","large","medium","square"]],["border",["subtle","solid","none","dashed"]],["background",["solid","radial","grid","scanlines","noise"]],["surface",["solid","glass","paper","metal"]],["shadow",["none","soft","hard","inset"]],["effects",["none","glow","dual","blur"]],["imagery",["none","gradient","geometric","photo","illustration","3d"]],["icons",["outline","filled","none","duotone"]],["layout",["sidebar","top","three-column","bento","split"]],["navigation",["text","icon","top","dock"]],["density",["standard","compact","comfortable"]],["components",["solid","outline","pill"]],["visualization",["bars","table","kanban","timeline"]],["interaction",["standard","restrained","expressive"]],["motion",["none","transition","spring","glitch"]]];
const old={layout:['sidebar','top','three-column','bento','split'],navigation:['text','icon','top','dock'],style:['minimal','glass','linear','soft','brutal','tech'],color:['business-blue','morandi','gray','purple','warm','cyan'],typography:['sans','serif','mono'],components:['solid','outline','pill'],material:['flat','glass','soft','hard'],icons:['outline','filled','none'],density:['standard','compact','comfortable'],visualization:['bars','table','kanban','timeline'],motion:['none','transition','spring'],assets:['none','gradient','geometric']};
export function migrateV1(input){
 if(!input||input.schemaVersion!==1||typeof input.name!=='string'||!input.name.trim()||input.name.length>80||!input.selections||!Array.isArray(input.locked))throw Error('Invalid v1 preset');
 for(const [k,v] of Object.entries(old)){const i=input.selections[k];if(!Number.isInteger(i)||i<0||i>=v.length)throw Error('Invalid v1 selection: '+k)}
 if(input.locked.some(k=>!Object.hasOwn(old,k)))throw Error('Invalid v1 lock');
 const original=JSON.parse(JSON.stringify(input)), x=Object.fromEntries(Object.entries(old).map(([k,v])=>[k,v[input.selections[k]]]));
 const values=Object.fromEntries(dimensions.map(([k,v])=>[k,v[0]]));
 for(const k of ['layout','navigation','style','color','typography','components','icons','density','visualization','motion'])values[k]=x[k];
 values.theme=['linear','tech'].includes(x.style)?'dark':'light';
 values.spacing='base-8';
 values.radius={flat:'small',glass:'large',soft:'medium',hard:'square'}[x.material];
 values.border=x.material==='hard'?'solid':'subtle';
 values.surface=x.material==='glass'?'glass':'solid';
 values.shadow=x.material==='hard'?'hard':x.material==='soft'?'soft':x.style==='soft'?'inset':'none';
 values.effects='none';values.background=x.style==='glass'?'radial':'solid';values.imagery=x.assets;values.interaction=x.motion==='none'?'restrained':'standard';
 const split={style:['style','theme'],material:['radius','border','surface','shadow','effects'],density:['spacing','density'],motion:['interaction','motion'],assets:['background','imagery']};
 const warnings=['Migration maps legacy visual intent, not pixel-identical rendering. New options use explicit defaults; original snapshot retained.','Legacy density padding (16/9/24px) and mixed style/material rules require renderer parity review.'];
 if(Object.keys(input).some(k=>!['schemaVersion','name','selections','locked'].includes(k))||Object.keys(input.selections).some(k=>!Object.hasOwn(old,k)))warnings.push('Unknown fields retained in original snapshot; manual mapping required.');
 return {schemaVersion:2,name:input.name,selections:Object.fromEntries(dimensions.map(([k])=>[k,{id:k+'.'+values[k],version:'1.0.0'}])),lockedDimensions:[...new Set(input.locked.flatMap(k=>split[k]||[k]))],overrides:{},migration:{sourceVersion:1,original,warnings}};
}
export function validatePreset(p){
 const errors=[];if(!p||p.schemaVersion!==2)return ['schemaVersion must be 2'];
 if(typeof p.name!=='string'||!p.name.trim()||p.name.length>80)errors.push('Invalid name');
 const keys=dimensions.map(d=>d[0]);
 if(!p.selections||Object.keys(p.selections).length!==keys.length)errors.push('Expected 20 selections');
 for(const [k,opts] of dimensions){const r=p.selections?.[k];if(!r||!opts.some(o=>r.id===k+'.'+o)||r.version!=='1.0.0')errors.push('Unknown resource: '+k)}
 if(!Array.isArray(p.lockedDimensions)||new Set(p.lockedDimensions).size!==p.lockedDimensions.length||p.lockedDimensions.some(k=>!keys.includes(k)))errors.push('Invalid locks');
 if(!p.overrides||typeof p.overrides!=='object'||Array.isArray(p.overrides))errors.push('Invalid overrides');
 return errors;
}
