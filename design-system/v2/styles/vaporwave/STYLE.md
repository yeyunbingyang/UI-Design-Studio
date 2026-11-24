# Vaporwave / Synthwave — 霓虹复古

> A3.2 原创示范草案；基于用户提供的风格描述重新组织。外部出处与许可待审核，资源标记为候选，不代表正式入库。预览为独立静态实现，不是通用 20 维解析器。

## 1. Style Overview
1980 年代数字怀旧、粉青双色重影、紫色深夜画布、CRT 网格与扫描纹理。默认深色。强调复古电子界面，而非现代灰色极简。

## 2. Colors
| 色板 | 值 | 角色 |
|---|---|---|
| pink | #ff71ce | 主强调 |
| cyan | #01cdfe | 次强调 |
| midnight | #0d0221 | 画布 |
| mint | #05ffa1 | 成功 |
| violet | #b967ff | 边框 |
| sunlight | #fffb96 | 警示与焦点 |
正文 #f8efff，次要文字 #c7b5df；透明表面须按实际合成背景验证对比度。

## 3. Typography
本地等宽字体栈，显示 52px、标题 36px、正文 13px、标签 12px；标签字距 .24em，正文行高 1.6。移动端缩小展示标题；中文使用系统回退。

## 4. Spacing & Layout
8px 基础尺度，8/16/24/32/48/64/96；4px 圆角，1px 描边，控件高度目标 40px。页面组织详见第十节。

## 5. Components
Neon Button、Glitch Card、Grid Floor、Chrome-inspired Text、Status Strip；附输入框、下拉框、柱状图、导航、加载与错误反馈。独立预览展示可操作的按钮、表单与加载状态；不是完整生产组件库。

## 6. Do's and Don'ts
使用粉青双重影、深紫背景、清晰焦点、克制扫描线；不以颜色独自表达状态，不遮挡正文，不使用不可关闭的快速闪烁。减少动态效果时禁用位移与动画。禁止未经许可复制外部品牌资产。

## 7. Surfaces
底层 #0d0221，面板 #20113bdb，12px 背景模糊；浮层需保持独立边界及足够不透明度。预览未实现独立弹窗层。

## 8. Elevation
柔和阴影 0 12px 32px #0006；粉青各 2px 重影属于 Effects 而非 Shadow。静态重影与时间变化独立。

## 9. Imagery
CSS 生成几何条纹落日、网格；无需第三方图片。线性图标为示例字符，不声称使用外部图标库。

## 10. Layout
最大 1200px，侧栏 + 12 列 Bento 内容，768px 以下单列；导航移动端换行。示范数据固定。

## 11. Agent Prompt Guide
按 preset.json 读取 20 个维度，使用深色语义映射，保留业务逻辑；应用粉青双重影与 CRT 背景，不将风格规则强制覆盖用户锁定维度。组件须实现 hover/active/focus-visible/disabled/loading/error，遵循 reduced-motion。禁止将候选资源宣称为已验证。

## 12. Similar Brands
比较赛博朋克（更强调工业与高对比）、Y2K（更强调银色与塑料质感）、Synthwave（更强调落日和透视网格）。此处是风格方向比较，不是品牌资产引用。

## 13. Quick Start
打开 preview.html，无需依赖。theme.css 为独立样式；tokens.json 为三级变量示例；preset.json 引用 resources.json 中的 20 个资源。HTML 内嵌 CSS 是静态快照，后续由解析器统一生成。浅色模式、通用混搭、完整组件及浏览器 QA 尚待实现。
