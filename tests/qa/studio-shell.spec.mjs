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
 const f=page.frameLocator('iframe.composer');await expect(f.locator('#status')).toHaveText('20 维配置已解析');
 const p=JSON.parse(await f.locator('#output').inputValue()).preset;expect(p.selections.background.id).toBe('background.scanlines');
});
test('resource routes and mobile navigation',async({page})=>{
 await page.setViewportSize({width:375,height:900});await page.goto('/app/#foundations');
 await expect(page.locator('#main h1')).toHaveText('基础设计库');
 await expect(page.locator('#main article').first()).toBeVisible();
 await page.locator('#menu').click();await page.locator('#nav').getByRole('link',{name:'视觉效果库'}).click();
 await expect(page.locator('#main h1')).toHaveText('视觉效果库');await expect(page.locator('#menu')).toHaveAttribute('aria-expanded','false');
 await page.goto('/app/#projects');await expect(page.locator('#main h1')).toHaveText('项目管理');
});
