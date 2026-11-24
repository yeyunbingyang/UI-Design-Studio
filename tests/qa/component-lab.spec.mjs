import {test,expect} from '@playwright/test';
test('component lab states, interaction and export',async({page})=>{
 await page.goto('/app/#lab');await expect(page.locator('.lab-list button')).toHaveCount(20);
 const f=page.frameLocator('iframe[title="组件预览"]');
 await page.getByLabel('组件状态').selectOption('disabled');await expect(f.getByRole('button')).toBeDisabled();
 await page.getByLabel('组件状态').selectOption('default');await f.getByRole('button').click();await expect(f.getByRole('status')).toHaveText('操作完成');
 await page.getByLabel('搜索组件').fill('input');await page.locator('.lab-list button').click();
 await page.getByLabel('组件状态').selectOption('error');await expect(f.locator('input')).toHaveAttribute('aria-invalid','true');
 await page.getByLabel('代码类型').selectOption('css');await expect(page.getByLabel('组件代码')).toHaveValue(/--accent:/);
 const pending=page.waitForEvent('download');await page.getByRole('button',{name:'导出独立 HTML'}).click();expect((await pending).suggestedFilename()).toBe('input.html');
});
test('component lab uses shared composer draft without changing it',async({page})=>{
 await page.goto('/app/#composer');await expect(page.locator('#native-output')).toBeVisible();
 await page.getByLabel('资源选项',{exact:true}).selectOption('color.warm');
 await page.locator('#nav').getByRole('link',{name:'组件实验室'}).click();
 await page.getByLabel('代码类型').selectOption('css');await expect(page.getByLabel('组件代码')).toHaveValue(/#9c642e/);
 await page.getByLabel('预览风格').selectOption('vapor-classic');await expect(page.getByLabel('组件代码')).toHaveValue(/#ff71ce/);
 await page.locator('#nav').getByRole('link',{name:'设计组合器'}).click();expect(JSON.parse(await page.locator('#native-output').inputValue()).preset.selections.color.id).toBe('color.warm');
});
