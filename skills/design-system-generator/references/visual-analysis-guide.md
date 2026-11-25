# Visual Analysis Guide / 视觉分析指南

## 1. Evidence inventory / 证据清单

List every supplied screenshot, URL, source directory, component file, style file and existing specification. Record what each item can and cannot prove.

列出所有截图、URL、源码目录、组件文件、样式文件和已有规范，并说明每项资料能够证明和不能证明的内容。

## 2. Analyze from macro to micro / 从整体到局部

1. Product context: product category, audience, tasks, platform.
2. Visual identity: tone, contrast, brand motifs, visual hierarchy.
3. Page composition: regions, grid, content width, scroll behavior.
4. Foundations: colors, typography, spacing, sizing, radius, border.
5. Surfaces: canvas, cards, overlays, elevation, effects.
6. Components: anatomy, variants, content density and visible states.
7. Assets: icons, images, illustrations, charts and their provenance.

1. 产品背景：产品类别、用户、任务和平台。
2. 视觉识别：气质、对比度、品牌元素和视觉层级。
3. 页面构成：区域、网格、内容宽度和滚动行为。
4. 基础体系：颜色、字体、间距、尺寸、圆角和边框。
5. 表面体系：画布、卡片、浮层、层级和特效。
6. 组件：结构、变体、信息密度和可见状态。
7. 素材：图标、图片、插画、图表及其来源。

## 3. Screenshot-only analysis / 仅截图分析

- Describe what is visibly present; do not claim DOM structure, CSS variables, exact font files or real breakpoints.
- Estimate dimensions only when useful and label them approximate.
- Infer likely hierarchy from alignment, repetition, contrast and grouping.
- Request additional views only if a missing view materially changes the specification.
- A screenshot of a static state cannot prove hover, focus, keyboard, loading or error behavior.

- 只描述画面中可见的内容；不得声称已知 DOM 结构、CSS 变量、精确字体文件或真实断点。
- 只有在有帮助时才估算尺寸，并标记为近似值。
- 根据对齐、重复、对比和分组推断层级。
- 只有当缺失视图会实质影响规范时，才请求补充截图。
- 静态截图不能证明 hover、focus、键盘、加载或错误行为。

## 4. Source-code analysis / 源码分析

- Inspect existing tokens, CSS variables, theme files, component props, variants and state logic.
- Prefer runtime/computed values when they are available in supplied artifacts; distinguish declared values from values actually used.
- Trace component styles to semantic tokens where possible.
- Identify duplicated values and conflicting rules.
- Do not execute untrusted project scripts simply to inspect design.

- 检查现有 Token、CSS 变量、主题文件、组件 Props、变体和状态逻辑。
- 若资料中存在运行时/计算样式，优先采用；区分声明值与实际使用值。
- 尽可能将组件样式追溯到语义 Token。
- 识别重复值和冲突规则。
- 不得仅为检查设计而执行不可信项目脚本。

## 5. Normalize patterns / 归纳重复模式

Group repeated values into scales and semantic roles. Keep one-off exceptions documented as exceptions rather than polluting the core token scale. Identify shared components by repeated anatomy and behavior, not merely visual resemblance.

将重复数值归并为尺度和语义角色。单次例外应单独记录，不应污染核心 Token 尺度。识别共用组件时，应依据重复的结构和行为，而不仅是外观相似。

## 6. Output / 输出

Produce:
- visual identity summary;
- token tables with source/provenance;
- layout and navigation rules;
- component inventory and variants;
- evidence gaps and unresolved questions.

输出视觉识别摘要、带来源的 Token 表、布局与导航规则、组件清单与变体，以及证据缺口和待决问题。
