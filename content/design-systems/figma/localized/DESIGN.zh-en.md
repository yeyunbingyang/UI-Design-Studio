# Figma · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。



<details>
<summary>英文原文</summary>

<!-- source:body -->


<!-- source:end -->

</details>

## 概览

Figma's marketing canvas is, at the system level, an editor-clean black-and-white frame. The chrome — top nav, body type, footer, primary CTA — is monochrome. Headlines are oversized `{typography.display-xl}` set in `figmaSans` with aggressive negative tracking, body copy hovers around weight 320–340 of the same variable family, and small mono `{typography.eyebrow}` and `{typography.caption}` labels (figmaMono, all-caps, positive tracking) act as section markers. Every CTA is a pill — `{rounded.pill}` — and the primary action across the entire site is the same black `{components.button-primary}` paired with the same white `{components.button-secondary}`.

What makes the design unique is what happens **between** those monochrome bookends: the page repeatedly drops into oversized pastel **color-block sections** — lime, lavender, cream, mint, pink, coral, and a deep navy — that span the full content width with `{rounded.lg}` corners and `{spacing.xxl}` interior padding. These blocks are where the storytelling lives. They aren't accents tucked into a card; they take over a whole viewport's worth of vertical space, like a designer arranging giant sticky notes on a clean wall. FigJam is the most pastel-saturated, the home page rotates through the full set, and the pricing page ends with a lime FAQ panel — same vocabulary, different rhythm per route.

This is a system built on contrast: the monochrome chrome makes the color blocks feel intentional rather than decorative, and the color blocks make the monochrome chrome feel like editorial paper rather than enterprise SaaS. Density is generous, line-heights are tight on display sizes, and the interface never reaches for shadows or gradients to do the work that color blocks and confident typography already do.

**关键特征 :**
- 单色系统核心 : `{colors.primary}` (黑色)和(黑色) `{colors.canvas}` (白色) 携带每条CTA,每条身体线,每条脚链.
- 超大小的贴面 **颜色块块** (`{colors.block-lime}`, `{colors.block-lilac}`, `{colors.block-cream}`, `{colors.block-mint}`, `{colors.block-pink}`, `{colors.block-coral}`, `{colors.block-navy}`)定义每个长形页面的叙事节奏.
- 胶囊形是唯一的按钮形状—— `{rounded.pill}` 用于文本 CTA, `{rounded.full}` 图标按钮。没有方形按钮。
- `figmaSans` 异常细重增量时使用的可变型号(320, 330, 340, 450, 480, 540)——类型系统读作一个单声调,灵活而非多重的家族.
- 紧负 letter-spacing 显示大小( R)-1.72px 时 间 86px, -0.96px 时 间 64px) 创建自信的社论cadence.
- `figmaMono` 用于分类标签、眉毛和标题——总是大写、正跟踪——以旗下分类,而不与显示类型竞争。
- Color-block page rhythm (home): white hero → marquee strip → white feature → lime systems block → navy ship-products block → coral developer block → white template grid → white footer.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Overview

Figma's marketing canvas is, at the system level, an editor-clean black-and-white frame. The chrome — top nav, body type, footer, primary CTA — is monochrome. Headlines are oversized `{typography.display-xl}` set in `figmaSans` with aggressive negative tracking, body copy hovers around weight 320–340 of the same variable family, and small mono `{typography.eyebrow}` and `{typography.caption}` labels (figmaMono, all-caps, positive tracking) act as section markers. Every CTA is a pill — `{rounded.pill}` — and the primary action across the entire site is the same black `{components.button-primary}` paired with the same white `{components.button-secondary}`.

What makes the design unique is what happens **between** those monochrome bookends: the page repeatedly drops into oversized pastel **color-block sections** — lime, lavender, cream, mint, pink, coral, and a deep navy — that span the full content width with `{rounded.lg}` corners and `{spacing.xxl}` interior padding. These blocks are where the storytelling lives. They aren't accents tucked into a card; they take over a whole viewport's worth of vertical space, like a designer arranging giant sticky notes on a clean wall. FigJam is the most pastel-saturated, the home page rotates through the full set, and the pricing page ends with a lime FAQ panel — same vocabulary, different rhythm per route.

This is a system built on contrast: the monochrome chrome makes the color blocks feel intentional rather than decorative, and the color blocks make the monochrome chrome feel like editorial paper rather than enterprise SaaS. Density is generous, line-heights are tight on display sizes, and the interface never reaches for shadows or gradients to do the work that color blocks and confident typography already do.

**Key Characteristics:**
- Monochrome system core: `{colors.primary}` (black) and `{colors.canvas}` (white) carry every CTA, every body line, every footer link.
- Oversized pastel **color-block sections** (`{colors.block-lime}`, `{colors.block-lilac}`, `{colors.block-cream}`, `{colors.block-mint}`, `{colors.block-pink}`, `{colors.block-coral}`, `{colors.block-navy}`) define the narrative rhythm of every long-form page.
- Pill is the only button shape — `{rounded.pill}` for text CTAs, `{rounded.full}` for icon buttons. No square buttons anywhere.
- `figmaSans` variable typeface used at unusually fine weight increments (320, 330, 340, 450, 480, 540) — the type system reads as a single voice that flexes rather than a multi-weight family.
- Tight negative letter-spacing on display sizes (-1.72px at 86px, -0.96px at 64px) creates a confident editorial cadence.
- `figmaMono` reserved for category labels, eyebrows, and captions — always uppercase, positive tracking — to flag taxonomy without competing with display type.
- Color-block page rhythm (home): white hero → marquee strip → white feature → lime systems block → navy ship-products block → coral developer block → white template grid → white footer.


<!-- source:end -->

</details>

## 配色

> Source pages: figma.com (home), /design/, /figjam/brainstorming-tool/, /pricing/, /contact/.

### 品牌和 强调色
- **黑色** ({colors.primary}:系统主线,每条主线CTA,每条头条,每条身体线,马奎条,暗段的反面页面底色.
- **白色** ({colors.on-primary}:黑色表面反文本;还有作为次级胶囊形按钮前缘的页面底色颜色(`{components.button-secondary}`).
- **红衣倡议** ({colors.accent-magenta}: 单饱和的CTA粉红色预留用于宣传内线按钮——例如出现在丁香"拯救你的位点"的"释放笔记"横幅上,很少使用;它不是一节颜色.

### 表面
- **页面底色** ({colors.canvas}:默认页面背景和每张白卡的正文.
- **反向画廊** ({colors.inverse-canvas}:页脚,马奎条,以及"船产品"风格的故事部分的子集.
- **表面软** ({colors.surface-soft}: 用于图标按钮,模板卡片,以及坐在白页面底色上时的特征插图牌的off-white 砖块背景.
- **细边线** ({colors.hairline}): 1px 框中,在窗体输入、定价卡和表格分割符上设置边框。
- **Hairline Soft** ({colors.hairline-soft}): Even subtler dividers — comparison-table row separators and footer column rules.
- **屏蔽莱姆** ({colors.block-lime}: 签名 **系统/FAQ/联系形式** 颜色块 家用回转 定价 联系
- **块状立体** ({colors.block-lilac}首屏挡住 `/design/`; 也内置的 Release Notes promotion 横幅.
- **块状凝胶** ({colors.block-cream}:柔软温暖的背景——FigJam首屏条,模板-网格部分.
- **块状薄荷** ({colors.block-mint}: 图片Jam 贴面部分.
- **块粉红色** ({colors.block-pink}: 图片Jam 贴面部分.
- **块珊瑚** ({colors.block-coral}:"船产品"珊瑚故事封面 家.
- **海军** ({colors.block-navy}:深Indigo故事块——只在脚上方出现暗色表面.

### 文本
- **Ink** ({colors.ink}): All headline, body, and caption type on light surfaces. There is no softer mid-gray text role on marketing — body copy is always black at weight 320–340, and weight (not opacity) carries the hierarchy.
- **反向墨水** ({colors.inverse-ink}: 打开 inverse-canvas 表面(脚步、马奎条、海军颜色块)。
- **反向软** ({colors.on-inverse-soft}: 白色, 使用时间为 ~16% 透明度 circular 图标按钮表面对暗段(按键捕获底色;在渲染时应用透明)。

### 语义
- **成功绿色** ({colors.semantic-success}): Comparison-table 价格上的检查标记。 用作格言填充, 而不是表面 。
- **重叠 Scrim** ({colors.overlay-scrim}: 黑色, 使用于 ~60% 模式/视频覆盖表面后面的不透明(按键捕获底物;在渲染时应用不透明).


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Colors

> Source pages: figma.com (home), /design/, /figjam/brainstorming-tool/, /pricing/, /contact/.

### Brand & Accent
- **Black** ({colors.primary}): The system primary. Every primary CTA, every headline, every body line, the marquee strip, the inverse canvas of dark sections.
- **White** ({colors.on-primary}): Inverse text on black surfaces; also the canvas color used as the foreground of secondary pill buttons (`{components.button-secondary}`).
- **Magenta Promo** ({colors.accent-magenta}): A single saturated CTA pink reserved for promotional inline buttons — appears, for example, on the lilac "Save your spot" Release Notes banner. Use scarcely; it is not a section color.

### Surface
- **Canvas** ({colors.canvas}): Default page background and the body of every white card.
- **Inverse Canvas** ({colors.inverse-canvas}): Footer, marquee strip, and a subset of "ship products"-style story sections.
- **Surface Soft** ({colors.surface-soft}): Off-white tile background used for icon buttons, template cards, and feature illustration tiles when they sit on the white canvas.
- **Hairline** ({colors.hairline}): 1px borders on form inputs, pricing cards, and table dividers.
- **Hairline Soft** ({colors.hairline-soft}): Even subtler dividers — comparison-table row separators and footer column rules.
- **Block Lime** ({colors.block-lime}): The signature **systems / FAQ / contact-form** color block. Recurs across home, pricing, contact.
- **Block Lilac** ({colors.block-lilac}): Hero block on `/design/`; also the inline Release Notes promo banner.
- **Block Cream** ({colors.block-cream}): Soft warm background — FigJam hero strip, template-grid section.
- **Block Mint** ({colors.block-mint}): FigJam pastel section.
- **Block Pink** ({colors.block-pink}): FigJam pastel section.
- **Block Coral** ({colors.block-coral}): "Ship products" coral story block on home.
- **Block Navy** ({colors.block-navy}): Deep indigo story block — only place dark surfaces appear above the footer.

### Text
- **Ink** ({colors.ink}): All headline, body, and caption type on light surfaces. There is no softer mid-gray text role on marketing — body copy is always black at weight 320–340, and weight (not opacity) carries the hierarchy.
- **Inverse Ink** ({colors.inverse-ink}): Type on inverse-canvas surfaces (footer, marquee strip, navy color block).
- **On-Inverse Soft** ({colors.on-inverse-soft}): White used at ~16% opacity for circular icon-button surfaces against dark sections (token captures the base color; the translucency is applied at render time).

### Semantic
- **Success Green** ({colors.semantic-success}): Comparison-table checkmarks on pricing. Used as a glyph fill, not a surface.
- **Overlay Scrim** ({colors.overlay-scrim}): Black used at ~60% opacity behind modal / video-overlay surfaces (token captures the base; opacity applied at render time).


<!-- source:end -->

</details>

## 字体排版

### 字体家族

- **figmaSans** — Figma专有变量类型面; 倒叠 `figmaSans Fallback, SF Pro Display, system-ui, helvetica`. 变式权重轴在异常细小的增量下进行(320, 330, 340, 450, 480, 540, 700)——设计系统读作单一语音调制而非步重家族.
- **figmaMono** ——专有 monospace; 倒计时 `figmaMono Fallback, SF Mono, menlo`。只用于眉毛标签和标题,总是大写为正 letter-spacing.

打开类型 `kern` 每一个角色都启用。

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 86px | 340 | 1.00 | -1.72px | 首屏头条新闻(家,FigJam) |
| `{typography.display-lg}` | 64px | 340 | 1.10 | -0.96px | 打开区域头条 |
| `{typography.headline}` | 26px | 540 | 1.35 | -0.26px | 颜色块内的故事块标题 |
| `{typography.subhead}` | 26px | 340 | 1.35 | -0.26px | 长式介绍段落,以近标尺为准 |
| `{typography.card-title}` | 24px | 700 | 1.45 | 0 | Pricing-tier 标题、特征卡片标题 |
| `{typography.body-lg}` | 20px | 330 | 1.40 | -0.14px | 首屏的首字母复制,联系表标签 |
| `{typography.body}` | 18px | 320 | 1.45 | -0.26px | 默认正文 |
| `{typography.body-sm}` | 16px | 330 | 1.45 | -0.14px | 纸牌正文,页脚链接列表 |
| `{typography.link}` | 20px | 480 | 1.40 | -0.10px | 内在链接强调 |
| `{typography.button}` | 20px | 480 | 1.40 | -0.10px | 初等和中等所有避孕药按钮 |
| `{typography.eyebrow}` | 18px | 400 | 1.30 | 0.54px | figmaMono uppercase section eyebrows |
| `{typography.caption}` | 12px | 400 | 1.00 | 0.60px | figmaMono uppercase captions, footer column heads |

### 原则

- **字重,不是体积,在体型复制上带有等级.** A 20px 加权时的段落 330 坐在旁边 20px 链接在字重 480 眼睛读着强调,没有改变规模。
- **负数 letter-spacing 大小的天平。** Display-xl 牵引 -1.72px; 仅取子标题 -0.26px。身体复制保持接近零。结果是编辑感显示类型,而不牺牲体型的可读性。
- **Mono is taxonomy, not body.** figmaMono is reserved for eyebrows and captions — never used to set a paragraph.
- **紧线高架展示,宽度高体.** 显示运行的大小 1.00–1.10; 运行 1.40–1.45。对比表明,头条是图形,体型是供阅读的。

### Note on Font Substitutes

If implementing without access to figmaSans / figmaMono, suitable open-source substitutes are **Inter** (or **Geist**) for the sans, and **JetBrains Mono** (or **Geist Mono**) for the mono. Inter at variable weights closely matches the fine-grained weight axis figmaSans uses; expect to manually adjust line-heights down by ~0.02 to compensate for Inter's slightly taller x-height.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Typography

### Font Family

- **figmaSans** — Figma's proprietary variable typeface; fallback stack `figmaSans Fallback, SF Pro Display, system-ui, helvetica`. Variable weight axis is exercised at unusually fine increments (320, 330, 340, 450, 480, 540, 700) — the design system reads as a single voice modulating rather than a stepped weight family.
- **figmaMono** — Proprietary monospace; fallback `figmaMono Fallback, SF Mono, menlo`. Used exclusively for eyebrow labels and captions, always uppercase with positive letter-spacing.

OpenType `kern` is enabled across every role.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 86px | 340 | 1.00 | -1.72px | Hero headlines (home, FigJam) |
| `{typography.display-lg}` | 64px | 340 | 1.10 | -0.96px | Section opener headlines |
| `{typography.headline}` | 26px | 540 | 1.35 | -0.26px | Story-block titles inside color blocks |
| `{typography.subhead}` | 26px | 340 | 1.35 | -0.26px | Long-form intro paragraphs that sit at near-headline scale |
| `{typography.card-title}` | 24px | 700 | 1.45 | 0 | Pricing-tier titles, feature card titles |
| `{typography.body-lg}` | 20px | 330 | 1.40 | -0.14px | Lead body copy on hero, contact form labels |
| `{typography.body}` | 18px | 320 | 1.45 | -0.26px | Default body |
| `{typography.body-sm}` | 16px | 330 | 1.45 | -0.14px | Card body, footer link list |
| `{typography.link}` | 20px | 480 | 1.40 | -0.10px | Inline link emphasis |
| `{typography.button}` | 20px | 480 | 1.40 | -0.10px | All pill buttons, primary and secondary |
| `{typography.eyebrow}` | 18px | 400 | 1.30 | 0.54px | figmaMono uppercase section eyebrows |
| `{typography.caption}` | 12px | 400 | 1.00 | 0.60px | figmaMono uppercase captions, footer column heads |

### Principles

- **Weight, not size, carries hierarchy on body copy.** A 20px paragraph at weight 330 sits next to a 20px link at weight 480 — the eye reads emphasis without scale change.
- **Negative letter-spacing scales with size.** Display-xl pulls -1.72px; subhead pulls only -0.26px. Body copy stays near-zero. The result is editorial-feeling display type without sacrificing readability at body size.
- **Mono is taxonomy, not body.** figmaMono is reserved for eyebrows and captions — never used to set a paragraph.
- **Tight line-heights on display, generous on body.** Display sizes run 1.00–1.10; body runs 1.40–1.45. The contrast reinforces that headlines are graphics and body copy is for reading.

### Note on Font Substitutes

If implementing without access to figmaSans / figmaMono, suitable open-source substitutes are **Inter** (or **Geist**) for the sans, and **JetBrains Mono** (or **Geist Mono**) for the mono. Inter at variable weights closely matches the fine-grained weight axis figmaSans uses; expect to manually adjust line-heights down by ~0.02 to compensate for Inter's slightly taller x-height.


<!-- source:end -->

</details>

## 布局

### 间距系统

- **基地单位**: 8px.
- **托肯斯(前题)**: `{spacing.hair}` 1px · `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- 内部科 padding: `{spacing.xxl}` (48px)在色块区.
- 纸牌内部 padding: `{spacing.lg}` (24px),在定价卡和模板牌上.
- 格式输入 padding: `{spacing.sm}` 12px 垂直 ・ 14px 水平。
- 按钮 padding: `{spacing.xs}` 8px 垂直 ・ `{spacing.lg}` 24px 水平的胶囊形按钮(不对称) `8px 18px 10px` 提取于 `button-secondary` 将这种类型的胶囊形光学地压在胶囊形里。
- 通用节奏常数 : `{spacing.section}` (96px——主要内容部分之间纵向差距贯穿全家,定价,以及FigJam页面.

### 网格容器( C)

- 最大内容宽度左右 1280px (一个明显的断点),有侧沟,其规模来自 `{spacing.xxl}` 桌面上下至 `{spacing.lg}` 手机上,我刚从电话里找到的
- 桌面定价比较和FigJam模板画廊上的三列和四列网格.
- 颜色块块断柱网格——它们横跨内容宽度,四舍五入内满血 `{rounded.lg}` 角,然后在内部放置一个标题+体的单一编辑栏.

### 白空间哲学

White space is used to make the color blocks feel deliberate. Between every colored panel and the next, the page returns to white canvas with `{spacing.section}` of breathing room. Inside a color block, the type itself is given generous side margins (often more than 1/4 of the block's width on each side) so the panel reads as a poster, not a wall of copy.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Layout

### Spacing System

- **Base unit**: 8px.
- **Tokens (front matter)**: `{spacing.hair}` 1px · `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- Section interior padding: `{spacing.xxl}` (48px) on color-block sections.
- Card interior padding: `{spacing.lg}` (24px) on pricing cards and template tiles.
- Form input padding: `{spacing.sm}` 12px vertical · 14px horizontal.
- Button padding: `{spacing.xs}` 8px vertical · `{spacing.lg}` 24px horizontal for pill buttons (the asymmetric `8px 18px 10px` extracted on `button-secondary` nudges the type optically inside the pill).
- Universal rhythm constant: `{spacing.section}` (96px) — the vertical gap between major content sections holds across home, pricing, and FigJam pages.

### Grid & Container

- Max content width sits around 1280px (one of the explicit breakpoints), with side gutters that scale from `{spacing.xxl}` on desktop down to `{spacing.lg}` on mobile.
- Three- and four-column grids on the desktop pricing comparison and FigJam template galleries.
- Color-block sections break the column grid — they span content width with full bleed inside the rounded `{rounded.lg}` corners, then place a single editorial column of headline + body inside.

### Whitespace Philosophy

White space is used to make the color blocks feel deliberate. Between every colored panel and the next, the page returns to white canvas with `{spacing.section}` of breathing room. Inside a color block, the type itself is given generous side margins (often more than 1/4 of the block's width on each side) so the panel reads as a poster, not a wall of copy.


<!-- source:end -->

</details>

## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for color-block sections, inverse-canvas footer, hero |
| 1 (电线) | 1px `{colors.hairline}` 边框 `{colors.canvas}` | 定价卡、窗体输入、比较表单元格 |
| 2 (软高) | 暗影 : 0 4px 16px rgba(0,0,0,0.06) | 浮动模板牌、 下拉菜单 |
| 3 (模式) | 更强的阴影 + `{colors.overlay-scrim}` 后面( E) | 视频/ 图像灯盒覆盖 |

Figma营销系统通过设计是影子灯光——颜色块代替了传统的高地. Figma 使用饱和背景面板。这使得罕见的实际阴影(例如浮式模板卡盘盘旋在奶油部分)感到像值得注意的例外。

### 装饰性深度

- **颜色块** 表示主深度设备。从白帆到石灰/薰衣草/奶油的改变是节间断。
- **Sticky-note style component thumbnails** in FigJam — slightly off-axis pastel rectangles arranged like notes on a board — read as collage, not card-stack.
- **嵌入式产品 UI 模拟** (Figma 设计面板,FigJam页面底色片段)作为颜色块上的平面组成出现;其内部阴影微妙,留在模拟中.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for color-block sections, inverse-canvas footer, hero |
| 1 (hairline) | 1px `{colors.hairline}` border on `{colors.canvas}` | Pricing cards, form inputs, comparison table cells |
| 2 (soft elevation) | Subtle drop shadow approx 0 4px 16px rgba(0,0,0,0.06) | Floating template tiles, dropdown menus |
| 3 (modal) | Stronger shadow + `{colors.overlay-scrim}` behind | Video / image lightbox overlays |

Figma's marketing system is shadow-light by design — the color blocks substitute for traditional elevation. Where most SaaS sites use a shadowed white card to draw attention, Figma uses a saturated background panel. This makes the rare actual shadow (e.g., a floating template card hovering over a cream section) feel like an exception worth noticing.

### Decorative Depth

- **Color-block sections** are the primary depth device. The change from white canvas to lime / lavender / cream is the section break.
- **Sticky-note style component thumbnails** in FigJam — slightly off-axis pastel rectangles arranged like notes on a board — read as collage, not card-stack.
- **Embedded product UI mocks** (Figma Design panels, FigJam canvas snippets) appear as flat compositions on color blocks; their internal shadows are subtle and stay within the mock.


<!-- source:end -->

</details>

## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 2px | 锁定/ 链接装饰角 |
| `{rounded.sm}` | 6px | Small chips, sub-nav tabs |
| `{rounded.md}` | 8px | 窗体输入、 列表项目、 图像框架 |
| `{rounded.lg}` | 24px | 定价卡、彩色块、大型图像容器 |
| `{rounded.xl}` | 32px | 首屏特写板,超大点名 |
| `{rounded.pill}` | 50px | All text CTAs (primary, secondary, tab toggles) |
| `{rounded.full}` | 9999px | Circular 图标按钮, comparison-table 检查标记格片 |

### 摄影和图像几何

- 图像帧使用 `{rounded.md}` (8px)——慷慨到足以感觉友好,保守到足以读作编辑.
- 家网格上的模板缩略图 `{rounded.md}` 瓷砖 `{spacing.md}` 内部粘贴在嵌入式预览周围 。
- 图片 Jam 粘贴符号组件缩略图 `{rounded.sm}` 模仿真实的角落 sticky 纸。
- 市场表面没有出现阿凡达圈子—— Figma营销避免了人格化.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Anchor / link decoration corners |
| `{rounded.sm}` | 6px | Small chips, sub-nav tabs |
| `{rounded.md}` | 8px | Form inputs, list items, image frames |
| `{rounded.lg}` | 24px | Pricing cards, color-block sections, large image containers |
| `{rounded.xl}` | 32px | Hero feature panels, oversized callouts |
| `{rounded.pill}` | 50px | All text CTAs (primary, secondary, tab toggles) |
| `{rounded.full}` | 9999px | Circular icon buttons, comparison-table checkmark glyphs |

### Photography & Illustration Geometry

- Image frames use `{rounded.md}` (8px) — generous enough to feel friendly, conservative enough to read as editorial.
- Template thumbnails on the home grid sit in `{rounded.md}` tiles with `{spacing.md}` interior padding around the embedded preview.
- FigJam pastel sticky-note component thumbnails preserve a small `{rounded.sm}` corner that mimics actual sticky paper.
- No avatar circles appear in marketing surfaces — Figma's marketing avoids personification.


<!-- source:end -->

</details>

## 组件

### 按钮

**`button-primary`** ——黑色"免费开始"胶囊形出现于顶部导航,每个首屏,每个关闭的CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 10px 20px, rounded `{rounded.pill}`.
- 国家住在这里 `button-primary-pressed` (相同的表面;现场依靠微尺度而不是暗化的填充).

**`button-secondary`** ——黑文本白丸,用于三级导航动作("接触销售"),并作为初级药的视觉对应物.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button}`, padding 8px 18px 10px (asymmetric vertical to optically center the type), rounded `{rounded.pill}`. No border.

**`button-tertiary-text`** —— 纯文本链接在顶部导航和脚部内作为按键命中目标样式.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.link}`, rounded `{rounded.full}` (hit target only), padding `{spacing.xs}` `{spacing.sm}`.

**`button-icon-circular`** — 40px circular 图标按钮,用于旋转木马控制、社会链接和光面的内线动作。
- Background `{colors.surface-soft}`, text `{colors.ink}`, rounded `{rounded.full}`, size 40px.

**`button-icon-circular-inverse`** - 相同的形状, 使用在 inverse-canvas / 暗色块.
- Background `{colors.on-inverse-soft}` (translucent white), text `{colors.inverse-ink}`, rounded `{rounded.full}`, size 40px.

**`button-magenta-promo`** ——饱和粉色胶囊形只使用在促销表面如丁香"拯救你的斑点""释放说明"横幅中. Release for points where reserved for explocation professional species. Figma产品团队希望CTA能用已经彩色的面板弹出.
- Background `{colors.accent-magenta}`, text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.pill}`, padding 10px 18px.

### 定价标签

**`pricing-tab-default`** + **`pricing-tab-selected`** ——开机/专业/组织/企业之间的避孕环切换器 `/pricing/`.
- Default: `{colors.canvas}` background, `{colors.ink}` text, rounded `{rounded.pill}`.
- Selected: `{colors.primary}` background, `{colors.on-primary}` text — exactly the same surface as `button-primary`, which makes the selected tab feel like an active CTA, not a passive state.

### 输入表单( F)

**`text-input`** + **`text-input-focused`** - 表格字段在 `/contact/` 并定价座席计数梯。
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 12px 14px.
- 焦态保留了相同的表面——焦态通过环来传递,而不是通过填充变化来传递.

### 纸牌和集装箱

**`pricing-card`** - 每一级 `/pricing/`.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. Stroked with `{colors.hairline}` rather than shadowed.

**`pricing-card-feature-row`** ——比较表内单行.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`. Row separator is `{colors.hairline-soft}`.

**`template-card`** ——家庭"探索人们正在制造的东西"网格和FigJam模板画廊中的缩略图砖.
- Background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.md}`, padding `{spacing.md}`.

**`feature-illustration-tile`** 更大的成分瓦,它持有产品UI模拟或粘贴图示。
- Background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.eyebrow}`, rounded `{rounded.md}`, padding `{spacing.lg}`.

### 颜色- 块块( 签名)

定义的表面 Figma营销,每个都是全内容的宽面板 `{rounded.lg}` 转角和 `{spacing.xxl}` 内部垫装。 备选:

**`color-block-section`** ——"系统"故事(家)的石灰地,定价FAQ,以及接触表.
- Background `{colors.block-lime}`, text `{colors.ink}`, type `{typography.subhead}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`.

**`color-block-section-lilac`** - 薰衣草地用于: `/design/` 首屏和FigJam突出章节。
- Background `{colors.block-lilac}`, otherwise identical structure.

**`color-block-section-navy`** ——为家用"飞船产品"故事块深挖的Indigo地面,唯一反向的彩块表面在脚上方.
- Background `{colors.block-navy}`, text `{colors.inverse-ink}`, otherwise identical structure.

(奶油、薄荷、粉红色和珊瑚块的变种 都跟随着它们各自的形状) `{colors.block-*}` (表层。 )

### 宣传旗舰

**`promo-banner-lilac`** ——"发布说明"/"拯救你的位置"内含的横幅,浮在接触表上方.
- Background `{colors.block-lilac}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.md}`, padding `{spacing.md}` `{spacing.lg}`. Carries a `button-magenta-promo` on the right edge.

### 导航

**`top-nav`** — Sticky 白色条带标志,主导航链接,登录链接,以及右安居 `button-secondary` ("接触销售")+ `button-primary` ("免费开始")对对.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, height 56px.
- 移动:将主连接坍塌成汉堡包,打开一个完整的canvas覆盖;两片胶囊形CTA仍然在酒吧中可见.

**`marquee-strip`** ——在通过客户标识以白色滚动的导航下直接显示细黑丝带.
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, type `{typography.body-sm}`, height 36px.

### Comparison Glyphs

**`comparison-checkmark`** ——定价比较矩阵中采用的绿色检查.
- Background `{colors.canvas}`, glyph color `{colors.semantic-success}`, rounded `{rounded.full}`, size 16px.

### Footer

**`footer`** ——用字签在白帆上加宽网格的深色链接 "Figma" 置于左上方的显示字重。
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.caption}` for column headings and small links, padding `{spacing.section}` top/bottom · `{spacing.xl}` sides.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Components

### Buttons

**`button-primary`** — The black "Get started for free" pill that appears in the top nav, every hero, and every closing CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 10px 20px, rounded `{rounded.pill}`.
- Pressed state lives in `button-primary-pressed` (same surface; the live site relies on micro-scale rather than a darkened fill).

**`button-secondary`** — White pill with black text. Used for tertiary navigation actions ("Contact sales") and as the visual counterpart to the primary pill.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button}`, padding 8px 18px 10px (asymmetric vertical to optically center the type), rounded `{rounded.pill}`. No border.

**`button-tertiary-text`** — Plain text link styled as a button hit target inside top nav and footer.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.link}`, rounded `{rounded.full}` (hit target only), padding `{spacing.xs}` `{spacing.sm}`.

**`button-icon-circular`** — 40px circular icon button used for carousel controls, social links, and inline actions on light surfaces.
- Background `{colors.surface-soft}`, text `{colors.ink}`, rounded `{rounded.full}`, size 40px.

**`button-icon-circular-inverse`** — Same shape, used on inverse-canvas / dark color blocks.
- Background `{colors.on-inverse-soft}` (translucent white), text `{colors.inverse-ink}`, rounded `{rounded.full}`, size 40px.

**`button-magenta-promo`** — Saturated pink pill used only inside promotional surfaces such as the lilac "Save your spot" Release Notes banner. Reserved for moments where Figma's product team wants the CTA to pop against an already-colored panel.
- Background `{colors.accent-magenta}`, text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.pill}`, padding 10px 18px.

### Pricing Tabs

**`pricing-tab-default`** + **`pricing-tab-selected`** — The pill-toggle that switches between Starter / Professional / Organization / Enterprise on `/pricing/`.
- Default: `{colors.canvas}` background, `{colors.ink}` text, rounded `{rounded.pill}`.
- Selected: `{colors.primary}` background, `{colors.on-primary}` text — exactly the same surface as `button-primary`, which makes the selected tab feel like an active CTA, not a passive state.

### Inputs & Forms

**`text-input`** + **`text-input-focused`** — Form fields on `/contact/` and pricing seat-count steppers.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 12px 14px.
- Focused state retains the same surface — focus is communicated via ring, not via fill change.

### Cards & Containers

**`pricing-card`** — Each tier on `/pricing/`.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. Stroked with `{colors.hairline}` rather than shadowed.

**`pricing-card-feature-row`** — Single row inside the comparison table.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`. Row separator is `{colors.hairline-soft}`.

**`template-card`** — Thumbnail tile in the home "Explore what people are making" grid and the FigJam template gallery.
- Background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.md}`, padding `{spacing.md}`.

**`feature-illustration-tile`** — Larger composition tile that holds a product UI mock or pastel illustration.
- Background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.eyebrow}`, rounded `{rounded.md}`, padding `{spacing.lg}`.

### Color-Block Sections (signature)

The defining surface of Figma's marketing. Each is a full-content-width panel with `{rounded.lg}` corners and `{spacing.xxl}` interior padding. Variants:

**`color-block-section`** — lime ground for "systems" stories (home), pricing FAQ, and the contact form.
- Background `{colors.block-lime}`, text `{colors.ink}`, type `{typography.subhead}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`.

**`color-block-section-lilac`** — lavender ground for `/design/` hero and FigJam highlight sections.
- Background `{colors.block-lilac}`, otherwise identical structure.

**`color-block-section-navy`** — deep indigo ground for the home "Ship products" story block. The only inverse color-block surface above the footer.
- Background `{colors.block-navy}`, text `{colors.inverse-ink}`, otherwise identical structure.

(Cream, mint, pink, and coral block variants follow the same shape with their respective `{colors.block-*}` surface.)

### Promo Banner

**`promo-banner-lilac`** — The Release Notes / "Save your spot" inline banner that floats above the contact form.
- Background `{colors.block-lilac}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.md}`, padding `{spacing.md}` `{spacing.lg}`. Carries a `button-magenta-promo` on the right edge.

### Navigation

**`top-nav`** — Sticky white bar with logo, primary nav links, sign-in link, and the right-anchored `button-secondary` ("Contact sales") + `button-primary` ("Get started for free") pair.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, height 56px.
- Mobile: collapses primary links into a hamburger that opens a full-canvas overlay; the two pill CTAs remain visible on the bar.

**`marquee-strip`** — Thin black ribbon directly under the nav that scrolls through customer logos in white.
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, type `{typography.body-sm}`, height 36px.

### Comparison Glyphs

**`comparison-checkmark`** — Green check used in the pricing comparison matrix.
- Background `{colors.canvas}`, glyph color `{colors.semantic-success}`, rounded `{rounded.full}`, size 16px.

### Footer

**`footer`** — Dense link grid on white canvas with the wordmark "Figma" set in display weight at the top-left.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.caption}` for column headings and small links, padding `{spacing.section}` top/bottom · `{spacing.xl}` sides.


<!-- source:end -->

</details>

## 设计建议与禁忌

### 执行

- Reserve `{colors.primary}` for genuine primary CTAs and selected states (e.g., `pricing-tab-selected`). Don't use it as a decorative accent.
- 介绍故事部分时,请选择 **单曲** 颜色块从 `{colors.block-*}` 并让其覆盖全内容宽度 `{rounded.lg}` 转角和 `{spacing.xxl}` 内部铺设.
- Keep type in `figmaSans` at variable weights — pick from 320, 330, 340, 480, 540, 700 to express hierarchy. Avoid intermediate weights outside this set.
- 使用 `figmaMono` 仅用于眉毛和标题,总是大写,有记录的正数 letter-spacing.
- 将每颗CTA作为胶囊形(`{rounded.pill}`)和每个图标按钮作为圆(`{rounded.full}`).
- Allow the page to **return to white canvas** between every two color blocks so each block reads as deliberate.
- Pair `button-primary` and `button-secondary` whenever a section needs both a primary action and a sales / secondary action — the black-and-white pair is the brand signature.

### Don't

- Don't introduce mid-gray text. Body hierarchy comes from `figmaSans` weight, not from opacity.
- Don't add drop shadows to color-block sections — the color is the depth device.
- 记录外不要引入新的强调色颜色 `{colors.block-*}` 调色板和 `{colors.accent-magenta}`添加,例如饱和品牌橙会打破系统.
- 在一个单一的视点内可见的颜色块不要合并到一个以上的区域—— Figma时间的间隔总是让白帆把它们分开
- Don't square off CTAs. Square buttons read as a different brand.
- Don't put `figmaMono` in body copy — it's a taxonomy tool, not a reading typeface.
- Don't replace the `pricing-tab-selected` black fill with a colored tab; the brand pattern is "selected = primary surface".


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Do's and Don'ts

### Do

- Reserve `{colors.primary}` for genuine primary CTAs and selected states (e.g., `pricing-tab-selected`). Don't use it as a decorative accent.
- When introducing a story section, choose **one** color block from the `{colors.block-*}` family and let it span full content width with `{rounded.lg}` corners and `{spacing.xxl}` interior padding.
- Keep type in `figmaSans` at variable weights — pick from 320, 330, 340, 480, 540, 700 to express hierarchy. Avoid intermediate weights outside this set.
- Use `figmaMono` only for eyebrows and captions, always uppercase, with the documented positive letter-spacing.
- Compose every CTA as a pill (`{rounded.pill}`) and every icon button as a circle (`{rounded.full}`).
- Allow the page to **return to white canvas** between every two color blocks so each block reads as deliberate.
- Pair `button-primary` and `button-secondary` whenever a section needs both a primary action and a sales / secondary action — the black-and-white pair is the brand signature.

### Don't

- Don't introduce mid-gray text. Body hierarchy comes from `figmaSans` weight, not from opacity.
- Don't add drop shadows to color-block sections — the color is the depth device.
- Don't introduce new accent colors outside the documented `{colors.block-*}` palette and `{colors.accent-magenta}`. Adding, e.g., a saturated brand orange would break the system.
- Don't combine more than one color block visible inside a single viewport — Figma's pacing always lets the white canvas separate them.
- Don't square off CTAs. Square buttons read as a different brand.
- Don't put `figmaMono` in body copy — it's a taxonomy tool, not a reading typeface.
- Don't replace the `pricing-tab-selected` black fill with a colored tab; the brand pattern is "selected = primary surface".


<!-- source:end -->

</details>

## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 4k | 1920px | 最大内容宽度维持在 1280px; 沟槽扩展 |
| Desktop-XL | 1440px | Default desktop layout |
| 桌面 | 1400px | 比较表列宽度常态化 |
| 桌面 S 软件 | 1280px | 定价 4- 维持上层电网 |
| Tablet | 960px | Pricing collapses 4-up → 2-up; nav becomes hamburger |
| 移动L | 768px | 颜色块块变成全血(边缘没有圆角) |
| Mobile | 560px | Display-xl reduces from 86px to ~48px; pill CTAs go full-width |
| Mobile-XS | 559px | Two-column footer collapses to single column |

### 触控区域

- 胶囊形按钮( Name`button-primary`, `button-secondary`保持最低限度 44px 跨所有视点的自带高度——通过组合实现 `{typography.button}` 20px line-height 与文件的垂直粘贴。
- Circular 图标按钮(`button-icon-circular`)是(或)是(或)是(或)是(或)是(或)是(或)是(或)是(或)是(或)是(或)是(或)是(或)是(或)是(或)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是)是(或是(或是)是(或是)是)是(或是)是(或是)是(或是(或是)是(或是)是(或是( 40px 并成长为 44px 触摸视点
- 格式输入最小水龙头目标 `/contact/` 谓 48px 高点

### 折叠战略

- **导航**: 桌面水平导航, 右侧两片胶囊形会倒塌到下面的汉堡包上方 960px. 两种胶囊形(`Contact sales`, `Get started for free`上方栏保持可见 560px 并堆放在下面的覆盖处。
- **Pricing tier grid**: 4-up → 2-up at 960px → 1-up below 768px. The pill toggle stays horizontal and scrolls horizontally if needed below 560px.
- **颜色块**: 以上(单位:千美元) 768px 区域保存 `{spacing.xxl}` 以圆形圆圆圆的圆圆的圆圆为显示, 768px 角被移除 街区流血到 观光港边缘 以达到海报效果。
- **比较表**: 下图 960px 矩阵会倒塌成每层手风琴 以避免水平卷轴。

### 图像行为

- Product UI mocks inside color blocks scale proportionally and never crop. Below 768px they shrink rather than reflow.
- 家网格中的模板缩略图使用懒惰加载和动画在滚动上.
- 粘着音符风格的FigJam缩略图保持了它们轻微的离轴旋转跨断点——旋转是一个品牌信号,而不是只用于桌面的繁荣.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| 4k | 1920px | Max content width holds at 1280px; gutters expand |
| Desktop-XL | 1440px | Default desktop layout |
| Desktop | 1400px | Comparison table column widths normalize |
| Desktop-S | 1280px | Pricing 4-up tier grid maintained |
| Tablet | 960px | Pricing collapses 4-up → 2-up; nav becomes hamburger |
| Mobile-L | 768px | Color-block sections become full-bleed (no rounded corners on edges) |
| Mobile | 560px | Display-xl reduces from 86px to ~48px; pill CTAs go full-width |
| Mobile-XS | 559px | Two-column footer collapses to single column |

### Touch Targets

- Pill buttons (`button-primary`, `button-secondary`) maintain a minimum 44px tap height across all viewports — achieved by combining `{typography.button}` 20px line-height with the documented vertical padding.
- Circular icon buttons (`button-icon-circular`) are 40px on desktop and grow to 44px on touch viewports.
- Form input minimum tap target on `/contact/` is 48px high.

### Collapsing Strategy

- **Nav**: desktop horizontal nav with two right-anchored pills collapses to a hamburger overlay below 960px. The two pills (`Contact sales`, `Get started for free`) stay visible on the bar above 560px and stack in the overlay below.
- **Pricing tier grid**: 4-up → 2-up at 960px → 1-up below 768px. The pill toggle stays horizontal and scrolls horizontally if needed below 560px.
- **Color-block sections**: above 768px the section keeps `{spacing.xxl}` of canvas around it so the rounded corners read; below 768px the corners are removed and the block bleeds to viewport edge for a poster effect.
- **Comparison table**: below 960px the matrix collapses into per-tier accordions to avoid horizontal scroll.

### Image Behavior

- Product UI mocks inside color blocks scale proportionally and never crop. Below 768px they shrink rather than reflow.
- Template thumbnails in the home grid use lazy loading and animate in on scroll.
- Sticky-note style FigJam thumbnails maintain their slight off-axis rotation across breakpoints — the rotation is a brand signal, not a desktop-only flourish.


<!-- source:end -->

</details>

## 迭代指南

1. Focus on ONE component at a time and reference it by its `components:` token name (e.g., `{components.button-primary}`, `{components.color-block-section}`).
2. When introducing a new section, decide **first** which `{colors.block-*}` token it sits on; the surface choice is the most consequential decision.
3. 默认体型为 `{typography.body}`; 联系范围 `{typography.subhead}` 或 减 减 `{typography.headline}` 只在颜色块内。
4. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 自动发出警告。
5. 添加新的变体作为单独的组件条目( Q)`-pressed`, `-selected`)——不要用散文埋没.
6. Keep `{colors.primary}` scarce. If two `button-primary` instances appear in the same viewport, the section is doing too much — neutralize one to `button-secondary`.
7. 处理 `{colors.accent-magenta}` 当作一发子弹 color: one promo CTA per page, never two.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Iteration Guide

1. Focus on ONE component at a time and reference it by its `components:` token name (e.g., `{components.button-primary}`, `{components.color-block-section}`).
2. When introducing a new section, decide **first** which `{colors.block-*}` token it sits on; the surface choice is the most consequential decision.
3. Default body type to `{typography.body}`; reach for `{typography.subhead}` or `{typography.headline}` only inside a color block.
4. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
5. Add new variants as separate component entries (`-pressed`, `-selected`) — do not bury them in prose.
6. Keep `{colors.primary}` scarce. If two `button-primary` instances appear in the same viewport, the section is doing too much — neutralize one to `button-secondary`.
7. Treat `{colors.accent-magenta}` as a single-shot color: one promo CTA per page, never two.


<!-- source:end -->

</details>

## 已知缺口

- 准确的贴面六进制值 `{colors.block-*}` 是从截图像素中衍生出来的; 生产源可能使用没有通过 CSS 变量曝光的命名符号。 将记录的六进制值视为忠实近似值, 而不是精确的品牌规格 。
- 暗模式没有被记录,因为营销网站没有运送暗主题——最接近的模拟是海军的色块(英语:`color-block-section-navy`和 和 数据 inverse-canvas 脚足.
- Form-field 错误和校验样式无法在 `/contact/` 输入有细边线边框, 并四舍五入 `{rounded.md}` 角; 错误处理没有文件记录 。
- 动画 marquee-strip 并且显示颜色块的动画没有记录(按不互动政策)。

<details>
<summary>英文原文</summary>

<!-- source:body -->
## Known Gaps

- The exact pastel hex values of `{colors.block-*}` are derived from screenshot pixels; the production source likely uses named tokens that aren't exposed via CSS variables. Treat the documented hex values as faithful approximations rather than exact brand specs.
- Dark mode is not documented because the marketing site does not ship a dark theme — the closest analog is the navy color-block (`color-block-section-navy`) and the inverse-canvas footer.
- Form-field error and validation styling is not visible on `/contact/` because no error states render in the static screenshot. Inputs have hairline borders and rounded `{rounded.md}` corners; error treatment is not documented.
- The animated marquee-strip and color-block reveal animations are not documented (per the no-interaction policy).

<!-- source:end -->

</details>

## 设计词元原值

一种自信的黑白编辑框架被超大,手工剪贴的彩色块打断。 营销布布是严格的单一色调。 figmaSans 变种,纯白色表面,纯黑色墨水,丸形的CTA——而每个故事部分将页面降为饱和的石灰,薰衣草,奶油,薄荷或粉红色面板,其读法像一个 sticky 结果是设计系统既能感觉到技术,又能令人高兴——这是一份严肃工作的工具,由喜欢颜色的人制作。

```yaml
---
version: alpha
name: Figma-design-analysis
description: "A confident black-and-white editorial frame interrupted by oversized, hand-cut pastel color blocks. The marketing canvas is rigorously monochrome — figmaSans variable type, pure white surfaces, pure black ink, pill-shaped CTAs — while each story section drops the page into a saturated lime, lavender, cream, mint, or pink panel that reads like a sticky note placed on a clean desk. The result is a design system that feels both technical and joyful — a tool for serious work, made by people who like color."

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#000000"
  canvas: "#ffffff"
  inverse-canvas: "#000000"
  inverse-ink: "#ffffff"
  on-inverse-soft: "#ffffff"
  hairline: "#e6e6e6"
  hairline-soft: "#f1f1f1"
  surface-soft: "#f7f7f5"
  block-lime: "#dceeb1"
  block-lilac: "#c5b0f4"
  block-cream: "#f4ecd6"
  block-pink: "#efd4d4"
  block-mint: "#c8e6cd"
  block-coral: "#f3c9b6"
  block-navy: "#1f1d3d"
  accent-magenta: "#ff3d8b"
  semantic-success: "#1ea64a"
  overlay-scrim: "#000000"

typography:
  display-xl:
    fontFamily: figmaSans
    fontSize: 86px
    fontWeight: 340
    lineHeight: 1.00
    letterSpacing: -1.72px
    fontFeature: kern
  display-lg:
    fontFamily: figmaSans
    fontSize: 64px
    fontWeight: 340
    lineHeight: 1.10
    letterSpacing: -0.96px
    fontFeature: kern
  headline:
    fontFamily: figmaSans
    fontSize: 26px
    fontWeight: 540
    lineHeight: 1.35
    letterSpacing: -0.26px
    fontFeature: kern
  subhead:
    fontFamily: figmaSans
    fontSize: 26px
    fontWeight: 340
    lineHeight: 1.35
    letterSpacing: -0.26px
    fontFeature: kern
  card-title:
    fontFamily: figmaSans
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0
    fontFeature: kern
  body-lg:
    fontFamily: figmaSans
    fontSize: 20px
    fontWeight: 330
    lineHeight: 1.40
    letterSpacing: -0.14px
    fontFeature: kern
  body:
    fontFamily: figmaSans
    fontSize: 18px
    fontWeight: 320
    lineHeight: 1.45
    letterSpacing: -0.26px
    fontFeature: kern
  body-sm:
    fontFamily: figmaSans
    fontSize: 16px
    fontWeight: 330
    lineHeight: 1.45
    letterSpacing: -0.14px
    fontFeature: kern
  link:
    fontFamily: figmaSans
    fontSize: 20px
    fontWeight: 480
    lineHeight: 1.40
    letterSpacing: -0.10px
    fontFeature: kern
  button:
    fontFamily: figmaSans
    fontSize: 20px
    fontWeight: 480
    lineHeight: 1.40
    letterSpacing: -0.10px
    fontFeature: kern
  eyebrow:
    fontFamily: figmaMono
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0.54px
    fontFeature: kern
  caption:
    fontFamily: figmaMono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0.60px
    fontFeature: kern

rounded:
  xs: 2px
  sm: 6px
  md: 8px
  lg: 24px
  xl: 32px
  pill: 50px
  full: 9999px

spacing:
  hair: 1px
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  button-primary-pressed:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 18px 10px
  button-tertiary-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.link}"
    rounded: "{rounded.full}"
    padding: 8px 12px
  button-icon-circular:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    size: 40px
  button-icon-circular-inverse:
    backgroundColor: "{colors.on-inverse-soft}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    size: 40px
  button-magenta-promo:
    backgroundColor: "{colors.accent-magenta}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 18px
  pricing-tab-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 18px
  pricing-tab-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 18px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px 14px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px 14px
  pricing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-card-feature-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
  color-block-section:
    backgroundColor: "{colors.block-lime}"
    textColor: "{colors.ink}"
    typography: "{typography.subhead}"
    rounded: "{rounded.lg}"
    padding: 48px
  color-block-section-lilac:
    backgroundColor: "{colors.block-lilac}"
    textColor: "{colors.ink}"
    typography: "{typography.subhead}"
    rounded: "{rounded.lg}"
    padding: 48px
  color-block-section-navy:
    backgroundColor: "{colors.block-navy}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.subhead}"
    rounded: "{rounded.lg}"
    padding: 48px
  promo-banner-lilac:
    backgroundColor: "{colors.block-lilac}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  template-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 16px
  feature-illustration-tile:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.md}"
    padding: 24px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 56px
  marquee-strip:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 36px
  comparison-checkmark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.semantic-success}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    size: 16px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 32px
---
```
