import {test,expect} from '@playwright/test';
test('application shell routing and style handoff',async({page})=>{
 await page.goto('/app/');await expect(page.locator('#main h1')).toHaveText('设计工作台');
 await page.locator('#nav').getByRole('link',{name:'完整风格库'}).click();
 await expect(page.locator('#main article')).toHaveCount(30);
 await page.getByRole('textbox',{name:'搜索风格'}).fill('vapor-crt');await expect(page.locator('#main article')).toHaveCount(1);
 await page.getByRole('link',{name:'查看风格详情'}).click();
 await expect(page.locator('#main h1')).toHaveText('CRT 终端');
 await expect(page.frameLocator('iframe.preview').locator('h1')).toHaveText('设计工作台');
 await page.getByRole('button',{name:'加入组合器'}).click();
 await expect(page.locator('#native-output')).toBeVisible();
 const p=JSON.parse(await page.locator('#native-output').inputValue()).preset;expect(p.selections.background.id).toBe('background.scanlines');
});
test('resource routes and mobile navigation',async({page})=>{
 await page.setViewportSize({width:375,height:900});await page.goto('/app/#color-system');
 await expect(page.locator('#main h1')).toHaveText('色彩系统');
 await expect(page.locator('#main article').first()).toBeVisible();
 await page.locator('#menu').click();await page.locator('#nav').getByRole('link',{name:'表面与视觉效果'}).click();
 await expect(page.locator('#main h1')).toHaveText('表面与视觉效果');await expect(page.locator('#menu')).toHaveAttribute('aria-expanded','false');
 await page.goto('/app/#projects');await expect(page.locator('#main h1')).toHaveText('项目管理');
});

test('native composer preserves draft across routes and refresh',async({page})=>{
 await page.goto('/app/#composer');await expect(page.locator('#native-output')).toBeVisible();
 await expect(page.locator('.native-dim-group')).toHaveCount(12);
 await page.getByLabel('资源选项',{exact:true}).selectOption('color.warm');
 await page.getByLabel('锁定当前维度').check();
 await page.locator('#nav').getByRole('link',{name:'完整风格库'}).click();
 await page.locator('#nav').getByRole('link',{name:'设计组合器'}).click();
 let p=JSON.parse(await page.locator('#native-output').inputValue()).preset;
 expect(p.selections.color.id).toBe('color.warm');expect(p.lockedDimensions).toContain('color');
 await page.reload();await expect(page.locator('#native-output')).toBeVisible();
 p=JSON.parse(await page.locator('#native-output').inputValue()).preset;expect(p.selections.color.id).toBe('color.warm');
 await expect(page.locator('iframe.composer')).toHaveCount(0);
 await expect(page.locator('iframe[title="当前预览"]')).toHaveAttribute('sandbox','allow-scripts');
});
