import {copy,applyPreset} from '../../design-system/v2/composer-core.mjs';
export function createStore(initial,validate,{storage=null,key='uds-native-draft-v2'}={}){
 let current=copy(initial),past=[],future=[],listeners=new Set(),storageError=false;
 try{const raw=storage?.getItem(key);if(raw){const p=JSON.parse(raw);validate(p);current=copy(p)}}catch{storageError=true}
 function publish(){try{storage?.setItem(key,JSON.stringify(current))}catch{storageError=true}for(const fn of listeners)fn()}
 function edit(fn){const next=copy(current);fn(next);validate(next);if(JSON.stringify(next)===JSON.stringify(current))return false;past.push(current);if(past.length>100)past.shift();current=next;future=[];publish();return true}
 return {get:()=>copy(current),edit,apply:p=>edit(n=>Object.assign(n,applyPreset(n,p))),replace:p=>edit(n=>{for(const k of Object.keys(n))delete n[k];Object.assign(n,copy(p))}),undo(){if(!past.length)return;future.push(current);current=past.pop();publish()},redo(){if(!future.length)return;past.push(current);current=future.pop();publish()},canUndo:()=>past.length>0,canRedo:()=>future.length>0,storageError:()=>storageError,subscribe(fn){listeners.add(fn);return()=>listeners.delete(fn)}}
}
