import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
const library=JSON.parse(readFileSync(new URL('../../design-system/v2/style-library.json',import.meta.url)));
async function ready(page){await page.goto('/prototype/v2/');await expect(page.locator('#status')).toHaveText('20 维配置已解析');await expect(page.locator('#styleCards article')).toHaveCount(30)}
for(const width of [375,768,1440]){
 test.describe('viewport '+width,()=>{
  test.use({viewport:{width,height:900}});
  for(const [index,style] of library.styles.entries())test('render '+style.id,async({page},info)=>{
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   await ready(page);await page.locator('#preset').selectOption(String(index));await page.locator('#apply').click();
   await page.locator('#device').selectOption(String(width));
   const frame=page.frameLocator('#preview');
   await expect(frame.locator('h1')).toHaveText('设计工作台');
   await expect(frame.locator('.stats')).toContainText('256');
   await expect.poll(()=>frame.locator('body').evaluate(el=>el.scrollWidth<=window.innerWidth+1)).toBe(true);
   await expect(page.locator('#styleDoc')).toHaveValue(/Quick Start/);
   await page.locator('#preview').screenshot({path:info.outputPath(style.id+'-'+width+'.png')});
   expect(errors).toEqual([]);
  });
 });
}
test('search, favorite, independent preview',async({page})=>{
 await ready(page);const before=await page.locator('#output').inputValue();
 await page.locator('#styleSearch').fill('vapor-crt');await expect(page.locator('#styleCards article')).toHaveCount(1);
 await page.locator('#styleCards').getByRole('button',{name:'收藏',exact:true}).click();
 await page.locator('#favoriteOnly').check();await expect(page.locator('#styleCards article')).toHaveCount(1);
 await page.locator('#styleCards').getByRole('button',{name:'独立预览'}).click();
 await expect(page.frameLocator('#libraryPreview').locator('h1')).toHaveText('设计工作台');
 expect(await page.locator('#output').inputValue()).toBe(before);
});
test('lock, undo, redo and JSON roundtrip',async({page})=>{
 await ready(page);await page.locator('#dims button').filter({hasText:'色彩 / color'}).click();
 await page.locator('#lock').check();const before=JSON.parse(await page.locator('#output').inputValue()).preset.selections.color;
 await page.locator('#preset').selectOption('0');await page.locator('#apply').click();
 expect(JSON.parse(await page.locator('#output').inputValue()).preset.selections.color).toEqual(before);
 await page.locator('#undo').click();await page.locator('#redo').click();
 const preset=JSON.parse(await page.locator('#output').inputValue()).preset;
 const pending=page.waitForEvent('download');await page.locator('#json').click();const file=await pending;
 const exported=JSON.parse(readFileSync(await file.path(),'utf8'));expect(exported).toEqual(preset);
 await page.locator('#file').setInputFiles({name:'preset.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(exported))});
 expect(JSON.parse(await page.locator('#output').inputValue()).preset).toEqual(preset);
});
test('component form validation, loading and reduced motion',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await ready(page);
 const f=page.frameLocator('#preview');await f.locator('#form button').click();await expect(f.locator('#error')).toHaveText('请输入名称');
 await expect(f.locator('#name')).toHaveAttribute('aria-invalid','true');
 await f.locator('#name').fill('示例');await f.locator('#name').press('Enter');await expect(f.locator('#status')).toContainText('示例保存');await expect(f.locator('#error')).toHaveText('');await expect(f.locator('#name')).toHaveAttribute('aria-invalid','false');
 await f.locator('#load').click();await expect(f.locator('#load')).toBeDisabled();await expect(f.locator('#status')).toHaveText('完成');await expect(f.locator('#load')).toBeEnabled();
 const transition=await f.locator('#load').evaluate(el=>getComputedStyle(el).transitionDuration);expect(transition).toBe('0s');
 await expect(page.locator('#preview')).toHaveAttribute('sandbox','allow-scripts');
});
