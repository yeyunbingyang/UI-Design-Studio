// Generated from the same resolved snapshot as CSS and preview.
import {css,renderPage} from './composer-core.mjs';
const safe=s=>String(s).replace(/[\r\n]/g,' ').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\|/g,'\\|');
export function agentPrompt(p,r){return ['Implement the selected design without changing business behavior. Use the resolved tokens and honor locks.','方案: '+safe(p.name),...Object.entries(p.selections).map(([k,v])=>k+': '+v.id+'@'+v.version),'Resolved tokens: '+JSON.stringify(r.tokens),'Parameters: '+JSON.stringify(r.parameters||{}),'Overrides: '+JSON.stringify(p.overrides),'Provide keyboard focus, error/loading/disabled states, responsive layout and reduced motion. Candidate resources require review.'].join('\n')}
export function styleSections(p,r){
 const s=r.selections,t=r.tokens,q=r.parameters||{},select=(...ks)=>ks.map(k=>k+': '+safe(p.selections[k].id)+'@'+p.selections[k].version).join('；');
 return [
 ['Style Overview','风格定位：'+select('style','theme')+'；实际主题：'+(r.dark?'dark':'light')+'。此为组合方案生成规范，不是外部品牌指南。'],
 ['Colors',select('color')+'\n\n'+Object.entries(t).filter(([k])=>k.startsWith('semantic.color.')).map(([k,v])=>'- '+k+': '+v).join('\n')],
 ['Typography',select('typography')+'；参数：'+JSON.stringify(q.typography||{})],
 ['Spacing & Layout',select('spacing','density','radius','border')+'；实际间距 '+t['semantic.spacing.gap']+'，圆角 '+t['semantic.radius.panel']+'。'],
 ['Components',select('components','visualization','interaction','motion')+'。按钮、表单、卡片、示例图表；检查 hover、active、focus-visible、disabled、loading、error。'],
 ["Do's and Don'ts",'保持业务数据与语义 Tokens；不覆盖锁定维度，不以颜色单独传达状态，不把候选资源称作已验收。\n'+(r.diagnostics||[]).map(x=>'- '+safe(x)).join('\n')],
 ['Surfaces',select('background','surface')+'；参数：'+JSON.stringify({background:q.background,surface:q.surface})],
 ['Elevation',select('shadow','effects')+'；参数：'+JSON.stringify({shadow:q.shadow,effects:q.effects})],
 ['Imagery',select('imagery','icons')+'；仅使用已支持的内置示例；外部素材须审核授权。'],
 ['Layout',select('layout','navigation')+'；验证 375/768/1440px，避免非预期横向滚动。'],
 ['Agent Prompt Guide',agentPrompt(p,r)],
 ['Similar Brands','未提供经核验的相似品牌；可按资源组合比较风格，不自动编造品牌关联。'],
 ['Quick Start','导出 preview.html、theme.css、design-preset.json、design-tokens.json；浏览器打开独立 HTML。\nCSS Variables:\n'+Object.entries(t).filter(([k])=>k.startsWith('semantic.')).map(([k,v])=>'- --'+k.replaceAll('.','-')+': '+v).join('\n')]
 ]}
export function styleMarkdown(p,r){return '# '+safe(p.name)+' — 自动生成设计规范\n\n> 原型生成；完整视觉 QA 与授权待审核。\n\n'+styleSections(p,r).map(([title,body],i)=>'## '+(i+1)+'. '+title+'\n\n'+body).join('\n\n')+'\n'}
export function designPackage(p,r){return {schemaVersion:2,preset:p,tokens:r.tree,resolved:r.tokens,parameters:r.parameters,provenance:r.provenance,css:css(r),html:renderPage(r),markdown:styleMarkdown(p,r),prompt:agentPrompt(p,r),diagnostics:r.diagnostics,resourceManifest:Object.values(p.selections)}}
