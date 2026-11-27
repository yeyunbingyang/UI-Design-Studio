# VoltAgent · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。




<details>
<summary>英文原文</summary>

<!-- source:body -->



<!-- source:end -->

</details>

## 概览

Voltagent 是一个为开发者建造的AI代理工程平台,品牌穿戴观众骄傲:一个近乎黑色的 `{colors.canvas}` (`#101010`页面背景为运行边对边,没有光模对等,单电绿强调色(英语:`{colors.primary}` `#00d992`),为CTA,状态胶囊形,品牌闪电胶片,以及一个对句子的排字系统预留. Inter 与 SF Mono 用于内置代码和命令片段。整个页面读取像被擦磨过的文档,决定也出售一些东西。

装饰系统是受约束的,没有梯度网格,没有大气背景,没有插图套件,相反,该品牌使用小的打印瞬间——绿色代码芯片(英语:Green Code cop (film)).`npx voltagent ...`), a 3-px 简介的特征卡坐落在同一个近黑色页面底色上,一个绿色的细边线划分符,在区段段间进行标记——以此来标记其身份。结果是一个页面,它感觉被设计:每张卡都有细边线边框,每张片段都有复制到剪贴板按钮,每个度量器都是用数字渲染的 monospace.

类型保持冷静,首屏的展示坐在 60 px 常重,为 `-0.65 px` 跟踪——不是广告牌头条,更像是文件H1。本节标题下调至 36 px / 24 px 的字重。 16 px Inter 时 间 line-height 1.65 用于识别长形的devs期望的类型。大写眉毛很常见。 `EVERYTHING YOU NEED` 样式单盖标签在区头条上方——它们使用 Inter 字重 600 广泛正跟踪(`2.52 px` 时 间 14 px).

**关键特征 :**
- 单声带的绿色强调色 `{colors.primary}` (`#00d992`)携带每枚CTA,每枚状态胶囊形,以及品牌的闪电标志,没有第二强调色.
- 暗页面底色( N)`{colors.canvas}` `#101010`)是唯一的页面表面——没有光电模式的节奏;整个网站读作一个连续的黑暗表面,由断裂的. feature-card 边框。
- 细边线边框特征卡( Q)`{colors.hairline}` `#3d3a39`, 1 px 固态)是品牌的主要染色体——无阴影,无填充,只是精确的细边线矩形.
- 签名 dashed-border 强调色( 单调)`1px dashed rgba(79, 93, 117, 0.4)`)作为静静的节奏提示出现在各节之间——该品牌唯一的装饰线.
- Inter + SF Mono 配对可以承担每个打印角色。 SF Mono 用于代码块、内置命令片段和公制计数器。
- 扣子很紧 6 px 圆形矩形(不是胶囊形);只有内嵌状态标记使用 9999 px 满胶囊形.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Overview

Voltagent is an AI agent engineering platform built for developers, and the brand wears that audience proudly: a near-black `{colors.canvas}` (`#101010`) page background that runs edge-to-edge with no light-mode counterpart, a single electric-green accent (`{colors.primary}` `#00d992`) reserved for CTAs, status pills, and the brand lightning glyph, and a typography system that pairs sentence-case Inter with SF Mono for inline code and command snippets. The whole page reads like polished documentation that decided to also sell something.

The decorative system is restrained. There is no gradient mesh, no atmospheric backdrop, no illustration suite. Instead, the brand uses small typographic moments — a green code chip (`npx voltagent ...`), a 3-px outlined feature card sitting against the same near-black canvas, a green hairline divider between section bands — to mark its identity. The result is a page that feels engineered: every card has a hairline border, every snippet has a copy-to-clipboard button, every metric is rendered in a numeric monospace.

Type stays calm. Hero display sits at 60 px in regular weight with `-0.65 px` tracking — not a billboard headline, more like a documentation H1. Section headings step down to 36 px / 24 px in similar weights. Body copy is 16 px Inter at line-height 1.65 for the kind of legibility long-form devs expect. Uppercase eyebrows are common — `EVERYTHING YOU NEED` style mono-cap labels above section headlines — and they use Inter at weight 600 with wide positive tracking (`2.52 px` at 14 px).

**Key Characteristics:**
- A single electric-green accent `{colors.primary}` (`#00d992`) carries every CTA, every status pill, and the brand's lightning logo. No second accent.
- Dark canvas (`{colors.canvas}` `#101010`) is the only page surface — there is no light-mode rhythm; the entire site reads as one continuous dark surface broken by feature-card boundaries.
- Hairline-bordered feature cards (`{colors.hairline}` `#3d3a39`, 1 px solid) are the brand's primary chrome — no shadows, no fills, just precise hairline rectangles.
- A signature dashed-border accent (`1px dashed rgba(79, 93, 117, 0.4)`) appears between sections as a quiet rhythm cue — the brand's only ornamental line.
- Inter + SF Mono pair carries every typographic role. SF Mono is reserved for code blocks, inline command snippets, and metric counters.
- Buttons are tight 6 px rounded rectangles (not pills); only inline status tags use the 9999 px full pill.


<!-- source:end -->

</details>

## 配色

### 品牌和 强调色
- **Electric Green** (`{colors.primary}` — `#00d992`): The single brand accent. Every primary CTA, every status pill, every "live" indicator, the brand's lightning glyph itself. Reserved.
- **初等软体** (`{colors.primary-soft}` — `#2fd6a1`: 内部使用稍稍稍微变哑的绿色 button-ghost 变体和工具提示/焦点指标。
- **初等深处** (`{colors.primary-deep}` — `#10b981`:身体副本中用于内含链接颜色的较深绿色.

### 表面
- **页面底色** (`{colors.canvas}` — `#101010`:默认的近黑页背景,是品牌营销系统中唯一的表面模式.
- **软画帘** (`{colors.canvas-soft}` — `#1a1a1a`:一个在代码块内使用的略轻的暗填充,并形成输入,以在视觉上与页面底色区分。
- **细边线** (`{colors.hairline}` — `#3d3a39`): 1 px 固态边框——特色卡,按钮,行间划分器,品牌通用"尖端"色彩.
- **柔软的细边线** (`{colors.hairline-soft}` — `#b8b3b0`:稀有地区使用的较轻的分块锡 on-light 二级环境。

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — `#f2f2f2`: 暗布上的默认文本颜色——略为脱白,以减少对比强度.
- **墨水坚固** (`{colors.ink-strong}` — `#ffffff`:纯白文字,用于首屏头条和高强调的拷贝.
- **体质** (`{colors.body}` — `#bdbdbd`: 副文本——支持副本,正文段落为长式部分.
- **静音** (`{colors.mute}` — `#8b949e`: 低优先级 on-dark 文本 – 标题、精细打印、页脚第二行。
- **屏幕文字软** (`{colors.canvas-text-soft}` — `#f5f6f7`: 内部代码模型用来保持代码颜色,仅比周围的车体文本略凉.

### 语义
The brand doesn't surface a separate error / warning palette in its public marketing pages — the underlying Docusaurus default semantic palette exists in the design system but is reserved for in-product / docs contexts. Validation cues on the marketing surface use the primary green for success and a muted body grey for missing states.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Colors

### Brand & Accent
- **Electric Green** (`{colors.primary}` — `#00d992`): The single brand accent. Every primary CTA, every status pill, every "live" indicator, the brand's lightning glyph itself. Reserved.
- **Primary Soft** (`{colors.primary-soft}` — `#2fd6a1`): A slightly more muted green used inside button-ghost variants and tooltip / focus indicators.
- **Primary Deep** (`{colors.primary-deep}` — `#10b981`): The darker green used for inline link colour in body copy.

### Surface
- **Canvas** (`{colors.canvas}` — `#101010`): The default near-black page background. The only surface mode in the brand's marketing system.
- **Canvas Soft** (`{colors.canvas-soft}` — `#1a1a1a`): A slightly lighter dark fill used inside code blocks and form inputs to mark them visually distinct against the canvas.
- **Hairline** (`{colors.hairline}` — `#3d3a39`): 1 px solid borders — feature cards, buttons, dividers between rows. The brand's universal "edge" colour.
- **Hairline Soft** (`{colors.hairline-soft}` — `#b8b3b0`): A lighter divider tint used in rare on-light secondary contexts.

### Text
- **Ink** (`{colors.ink}` — `#f2f2f2`): Default text colour on the dark canvas — slightly off-white to reduce contrast strain.
- **Ink Strong** (`{colors.ink-strong}` — `#ffffff`): Pure-white text for hero headlines and high-emphasis copy.
- **Body** (`{colors.body}` — `#bdbdbd`): Secondary text — supporting copy, body paragraphs in long-form sections.
- **Mute** (`{colors.mute}` — `#8b949e`): Lowest-priority on-dark text — captions, fine print, footer secondary lines.
- **Canvas Text Soft** (`{colors.canvas-text-soft}` — `#f5f6f7`): Used inside code mockups to keep code colour just slightly cooler than the surrounding body text.

### Semantic
The brand doesn't surface a separate error / warning palette in its public marketing pages — the underlying Docusaurus default semantic palette exists in the design system but is reserved for in-product / docs contexts. Validation cues on the marketing surface use the primary green for success and a muted body grey for missing states.


<!-- source:end -->

</details>

## 字体排版

### 字体家族
有两个面孔 携带系统:
1. **Inter** 用于每个显示、身体、按钮和链接角色。重量 400 / 500 / 600 / 700 工作集。带有 OpenType 特性的用户 `"calt"` 财务报告和已审计财务报表 `"rlig"` 启用横跨页面,所以是几何 Inter 结扎和背景替代的转换正确。
2. **SF Mono** (`SFMono-Regular` 与 Menlo / Monaco / Consolas / Liberation Mono 倒置)),用于内置代码,命令片段,终端模型,以及品牌的数位计数器. 400 / 549 / 550 / 700 —— 不寻常的 549 / 550 子粗重使单体具有"比普通的稍重"的强调声音.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 400 | 60px | -0.65px | 首屏头条("AI代理工程平台"). |
| `{typography.display-lg}` | 36px | 400 | 40px | -0.9px | 科头条. |
| `{typography.display-md}` | 24px | 700 | 32px | -0.6px | 分节 / card-title 显示。 |
| `{typography.display-sm}` | 20px | 600 | 28px | 0 | 密集网格中的卡片标题. |
| `{typography.eyebrow-mono}` | 14px | 600 | 20px | 2.52px | 上层的眉毛标签("你需要的一切"). |
| `{typography.eyebrow-uppercase}` | 18px | 600 | 28px | 0.45px | Larger uppercase eyebrows above hero subsections. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | 领头段落。 |
| `{typography.body-md}` | 16px | 400 | 26px | 0 | 默认正文段落. |
| `{typography.body-md-strong}` | 16px | 600 | 24px | 0 | 粗体内内脏. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | 身次第身. 师曰. |
| `{typography.body-sm-strong}` | 14px | 600 | 23px | 0 | 粗体标题/ 丸- 标签 。 |
| `{typography.caption}` | 12px | 400 | 16px | 0 | 精进印. |
| `{typography.caption-strong}` | 12px | 500 | 16px | 0 | 粗体标题。 |
| `{typography.code}` | 13px | 400 | 18px | 0 | 代码块, 内置命令片段 。 |
| `{typography.code-strong}` | 13px | 550 | 16px | 0 | Emphasised inline code (the SF Mono "almost-bold" weight). |
| `{typography.button-md}` | 16px | 600 | 24px | 0 | 扣子标签. |

### 原则
- **Inter 常设 60 px 显示** 与AI营销的呼喊倾向相对应,
- **双面对比带技术语音.** Inter 说明; SF Mono 任何可以在终端输入的
- **Uppercase eyebrow with tracking is the brand's signature label style.** `2.52 px` at 14 px is the documented value.

### Note on Font Substitutes
- **Sans** — *Inter* is the brand's actual face; substitute is the brand itself when self-hosting is not available.
- **单声道** — *SF Mono* 谓 Apple- 系统; *JetBrains Mono* 或 减 减 *Geist Mono* 是最好的免费替代品。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Typography

### Font Family
Two faces carry the system:
1. **Inter** for every display, body, button, and link role. Weights 400 / 500 / 600 / 700 are the working set. Used with OpenType features `"calt"` and `"rlig"` enabled across the page so the geometric Inter ligatures and contextual alternates render correctly.
2. **SF Mono** (`SFMono-Regular` with Menlo / Monaco / Consolas / Liberation Mono fallbacks) for inline code, command snippets, terminal mockups, and the brand's numeric counters. Weights 400 / 549 / 550 / 700 are present — the unusual 549 / 550 sub-bold weight gives the mono a "slightly heavier than regular" voice for emphasis.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 400 | 60px | -0.65px | Hero headline ("AI Agent Engineering Platform"). |
| `{typography.display-lg}` | 36px | 400 | 40px | -0.9px | Section headlines. |
| `{typography.display-md}` | 24px | 700 | 32px | -0.6px | Sub-section / card-title displays. |
| `{typography.display-sm}` | 20px | 600 | 28px | 0 | Card titles in dense grids. |
| `{typography.eyebrow-mono}` | 14px | 600 | 20px | 2.52px | UPPERCASE eyebrow tags ("EVERYTHING YOU NEED"). |
| `{typography.eyebrow-uppercase}` | 18px | 600 | 28px | 0.45px | Larger uppercase eyebrows above hero subsections. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraphs. |
| `{typography.body-md}` | 16px | 400 | 26px | 0 | Default body paragraph. |
| `{typography.body-md-strong}` | 16px | 600 | 24px | 0 | Bolded inline body. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body. |
| `{typography.body-sm-strong}` | 14px | 600 | 23px | 0 | Bold caption / pill-tag labels. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Fine print. |
| `{typography.caption-strong}` | 12px | 500 | 16px | 0 | Bold caption. |
| `{typography.code}` | 13px | 400 | 18px | 0 | Code blocks, inline command snippets. |
| `{typography.code-strong}` | 13px | 550 | 16px | 0 | Emphasised inline code (the SF Mono "almost-bold" weight). |
| `{typography.button-md}` | 16px | 600 | 24px | 0 | Button labels. |

### Principles
- **Inter regular at 60 px display** is the brand's calming counter to AI marketing's tendency to shout. The light tracking and modest weight read like documentation.
- **Two-face contrast carries the technical voice.** Inter for narrative; SF Mono for anything that could be typed at a terminal.
- **Uppercase eyebrow with tracking is the brand's signature label style.** `2.52 px` at 14 px is the documented value.

### Note on Font Substitutes
- **Sans** — *Inter* is the brand's actual face; substitute is the brand itself when self-hosting is not available.
- **Mono** — *SF Mono* is Apple-system; *JetBrains Mono* or *Geist Mono* are the best free substitutes.


<!-- source:end -->

</details>

## 布局

### 间距系统
- **Base unit**: 4 px; small 5 / 6.4 px values appear inside code-mockup line-height compensation.
- **脚本**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px · `{spacing.4xl}` 40 px · `{spacing.5xl}` 48 px · `{spacing.6xl}` 64 px.
- **分区编栏**: 首屏+ 使用内容带 `{spacing.5xl}` 48 px 上下两层
- **纸牌内部贴纸**: 特征卡坐落于 `{spacing.2xl}` 24 px.

### 网格容器( C)
- 大约在销售集装箱中心 1200 – 1400 px; 内容保持颜色的边缘对边缘, 与水平沟槽的颜色相交 `{spacing.3xl}` 。在桌面上。
- Feature-card grids: 2-up to 3-up at desktop, 1-up at mobile.

### 反应战略

#### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 768px | 首屏们 60→32 px; 牌类 1- 上; 航海汉堡。 |
| 平板 | 768–1023px | 纸牌 2- 上;导航保持水平。 |
| 桌面 | ≥ 1024px | 满 3- 上卡网格 - 上卡网格 - Up card grades. |

#### 触控区域
Buttons render at ~44 px tall (12 px vertical padding + 24 px line-height). Meet WCAG AAA at all breakpoints.

#### 折叠战略
移动时的 Nav 崩溃到汉堡; 菜单覆盖保持相同的绿色 CTA 固定在底部 。 Feature-card 网格降为 1-上;首屏打字机平流

#### 图像行为
代码编辑模型制作成具有复制到剪贴板的平价的图像卡片,品牌营销表面没有摄影.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Layout

### Spacing System
- **Base unit**: 4 px; small 5 / 6.4 px values appear inside code-mockup line-height compensation.
- **Tokens**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px · `{spacing.4xl}` 40 px · `{spacing.5xl}` 48 px · `{spacing.6xl}` 64 px.
- **Section padding**: hero + content bands use `{spacing.5xl}` 48 px top/bottom.
- **Card interior padding**: feature cards sit at `{spacing.2xl}` 24 px.

### Grid & Container
- Marketing container centres at roughly 1200 – 1400 px; content stays edge-to-edge in colour with horizontal gutters of `{spacing.3xl}` on desktop.
- Feature-card grids: 2-up to 3-up at desktop, 1-up at mobile.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hero 60→32 px; cards 1-up; nav hamburger. |
| Tablet | 768–1023px | Cards 2-up; nav stays horizontal. |
| Desktop | ≥ 1024px | Full 3-up card grids. |

#### Touch Targets
Buttons render at ~44 px tall (12 px vertical padding + 24 px line-height). Meet WCAG AAA at all breakpoints.

#### Collapsing Strategy
Nav collapses to hamburger at mobile; the menu overlay keeps the same green CTA pinned at the bottom. Feature-card grids drop to 1-up; hero typography scales fluidly.

#### Image Behavior
Code-editor mockups render as image-like cards with copy-to-clipboard affordances. No photography in the brand's marketing surface.


<!-- source:end -->

</details>

## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed bands. |
| 职等 1 —— 细边线 | 1 px 固态 `{colors.hairline}` 边框 `{colors.canvas}`. | 默认每个功能卡和按钮 。 |
| 职等 2 - 插座 Glow( 插座) | `0 0 15px rgba(92, 88, 85, 0.2)` 微妙的外光光线。 | 爱心/特色卡片. |
| 职等 3 - 模具堆栈 | `0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(148,163,184,0.1) inset` 重投+内置环. | 模块/对话框表面为产品 。 |

### 装饰性深度
- 深色页面底色上的细边线卡——该品牌唯一的真实提升模式.
- A 2 px 固态 `{colors.primary}` 绿色边框偶尔会在卡片上标注"特质"或"活跃"状态.
- A 1 px 破损 `rgba(79, 93, 117, 0.4)` 分音器在节段间坐落,作为静静的节奏提示.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed bands. |
| Level 1 — Hairline | 1 px solid `{colors.hairline}` border on `{colors.canvas}`. | Default for every feature card and button. |
| Level 2 — Inset Glow | `0 0 15px rgba(92, 88, 85, 0.2)` subtle outer glow. | Hovering / featured cards. |
| Level 3 — Modal Stack | `0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(148,163,184,0.1) inset` heavy drop + inset ring. | Modal / dialog surfaces in-product. |

### Decorative Depth
- Hairline cards on dark canvas — the brand's only true elevation mode.
- A 2 px solid `{colors.primary}` green border occasionally marks "featured" or "active" status on a card.
- A 1 px dashed `rgba(79, 93, 117, 0.4)` divider sits between section bands as a quiet rhythm cue.


<!-- source:end -->

</details>

## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 满血乐队. |
| `{rounded.xs}` | 4px | 内线胶囊形 密码内线芯片 |
| `{rounded.sm}` | 6px | 默认按钮和输入半径 。 |
| `{rounded.md}` | 8px | 红外线 code-block 铬。 |
| `{rounded.pill}` | 9999px | 内置状态标记("Live","Beta"). |
| `{rounded.full}` | 9999px | Circular 图标容器。 |


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands. |
| `{rounded.xs}` | 4px | Smallest inline pills, code inline chips. |
| `{rounded.sm}` | 6px | Default button and input radius. |
| `{rounded.md}` | 8px | Card chrome, code-block chrome. |
| `{rounded.pill}` | 9999px | Inline status tags ("Live", "Beta"). |
| `{rounded.full}` | 9999px | Circular icon containers. |


<!-- source:end -->

</details>

## 组件

### 按钮

**`button-primary`** -电绿的CTA
- Background `{colors.primary}`, text `{colors.on-primary}` (near-black), label `{typography.button-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}` 6 px.

**`button-outline-on-dark`** - 电话 hairline-on-dark 二级按钮。
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, same typography / padding / shape.

**`button-ghost-green`** ——只用绿色标签的文字,用于第三产业行动.
- Background `{colors.canvas}`, text `{colors.primary-soft}`, no border.

**`button-pill-tag`** ——分类标签/状态标签的内置胶囊形.
- Background `{colors.canvas}`, text `{colors.ink}`, hairline border, body in `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}` 9999 px.

### 纸牌和集装箱

**`card-feature`** ——默认特征卡.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, padding `{spacing.2xl}`, shape `{rounded.md}` 8 px. The brand's most-repeated card chrome.

**`card-feature-emphasized`** - 一张牌是同一张 3 px 细边线边界以强调.
- 与 `card-feature` 与 3 px 固态 `{colors.hairline}`.

**`code-mockup`** ——暗码编辑卡,带有复制到剪贴板的付息能力.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, body in `{typography.code}` (SF Mono 13 px), padding `{spacing.xl}`, shape `{rounded.md}`.

**`code-inline-chip`** ——内置指令片段药.
- Background `{colors.canvas-soft}`, text `{colors.canvas-text-soft}`, body in `{typography.code}`, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.sm}`.

### 输入表单( F)

**`text-input`** ——暗面的标准文本输入.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, body in `{typography.body-sm}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}` 6 px.

### 导航

**`nav-bar`** - 电话 sticky 黑暗时的顶端导航
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.3xl}`.

**`nav-link`** ——在nav中链接项目.
- 文本 `{colors.body}`,设置在 `{typography.body-sm}`.

**`footer`** 黑暗脚步乐队。
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.4xl} {spacing.3xl}`. Body in `{typography.body-sm}`.

### 签名组件

**`hero-band`** 黑暗首屏乐队与 60-px (英语). Inter 头条.
- Background `{colors.canvas}`, text `{colors.ink}` (with the headline at `{colors.ink-strong}` white), padding `{spacing.5xl} {spacing.3xl}`. Headline in `{typography.display-xl}` (60 px / weight 400 / `-0.65 px` tracking). Eyebrow above headline in `{typography.eyebrow-mono}` (uppercase, tracked).

**`content-band`** ——标准内容带托管功能网格.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.3xl}`. Section headline in `{typography.display-lg}`.

**`green-divider-band`** ——一个薄绿色的光线带,偶尔会分离主要部分.
- Background `{colors.canvas}`, 2 px solid `{colors.primary}` top/bottom border. The brand's only chromatic divider.

### 实例(说明性)

> 自动生成的工具包-模拟演示表面(`scripts/derive-examples-block.mjs`。每个 `ex-*` 条目参考: 下游消费者的品牌原始产品(`/preview-design`, `/generate-kit`) 重新皮肤相同 10 表面一致。 `TO_FILL` 标记表示缺失原始人——在LLM判断传中解析.

**`ex-pricing-tier`** ——默认定价等级卡。 feature-card 带品牌的铬 canvas-soft 表面。
- 属性 : `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** ——地貌/高亮的层次——极性-浮点表面(暗色填充+光线文字在光线模式下,浅色填充+暗色文字在暗线模式下).
- 属性 : `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** ——什么是包含的汇总卡——重新用于SaaS/B2B纵横(NOT为字形产品画廊).
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** ——订阅摘要——重新用于SaaS/B2B(每件加件的行项目,而非字面车).
- 属性 : `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** ——App Shell 实例中的侧边栏导航行. Active State 使用品牌主标.
- 属性 : `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- 属性 : `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** ——签入/签入卡. 复用. feature-card 铬 text-input 原始人在里面,他们都在里面
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** ——模度对话框表面——与 feature-card 以高的阴影盟誓,
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** ——空状态插图框架.
- 属性 : `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** ——通知表面. feature-card 形状 + 中阴影。
- 属性 : `backgroundColor`, `rounded`, `padding`, `typography`



<details>
<summary>英文原文</summary>

<!-- source:body -->
## Components

### Buttons

**`button-primary`** — the electric-green CTA.
- Background `{colors.primary}`, text `{colors.on-primary}` (near-black), label `{typography.button-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}` 6 px.

**`button-outline-on-dark`** — the hairline-on-dark secondary button.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, same typography / padding / shape.

**`button-ghost-green`** — text-only with green label, for tertiary actions.
- Background `{colors.canvas}`, text `{colors.primary-soft}`, no border.

**`button-pill-tag`** — the inline pill for category tags / status labels.
- Background `{colors.canvas}`, text `{colors.ink}`, hairline border, body in `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}` 9999 px.

### Cards & Containers

**`card-feature`** — the default feature card.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, padding `{spacing.2xl}`, shape `{rounded.md}` 8 px. The brand's most-repeated card chrome.

**`card-feature-emphasized`** — the same card with a 3 px hairline border for emphasis.
- Same chrome as `card-feature` with 3 px solid `{colors.hairline}`.

**`code-mockup`** — the dark code-editor card with copy-to-clipboard affordance.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, body in `{typography.code}` (SF Mono 13 px), padding `{spacing.xl}`, shape `{rounded.md}`.

**`code-inline-chip`** — the inline command snippet pill.
- Background `{colors.canvas-soft}`, text `{colors.canvas-text-soft}`, body in `{typography.code}`, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.sm}`.

### Inputs & Forms

**`text-input`** — the standard text input on dark.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, body in `{typography.body-sm}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}` 6 px.

### Navigation

**`nav-bar`** — the sticky top nav on dark.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.3xl}`.

**`nav-link`** — link items in nav.
- Text `{colors.body}`, set in `{typography.body-sm}`.

**`footer`** — the dark footer band.
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.4xl} {spacing.3xl}`. Body in `{typography.body-sm}`.

### Signature Components

**`hero-band`** — the dark hero band with the 60-px Inter headline.
- Background `{colors.canvas}`, text `{colors.ink}` (with the headline at `{colors.ink-strong}` white), padding `{spacing.5xl} {spacing.3xl}`. Headline in `{typography.display-xl}` (60 px / weight 400 / `-0.65 px` tracking). Eyebrow above headline in `{typography.eyebrow-mono}` (uppercase, tracked).

**`content-band`** — the standard content band hosting feature grids.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.3xl}`. Section headline in `{typography.display-lg}`.

**`green-divider-band`** — a thin green-glow band that occasionally separates major sections.
- Background `{colors.canvas}`, 2 px solid `{colors.primary}` top/bottom border. The brand's only chromatic divider.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces (`scripts/derive-examples-block.mjs`). Each `ex-*` entry references brand-native primitives so downstream consumers (`/preview-design`, `/generate-kit`) re-skin the same 10 surfaces consistently. `TO_FILL` markers indicate missing primitives — resolve in the LLM judgment pass.

**`ex-pricing-tier`** — Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** — What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** — Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** — Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — same chrome as feature-card with elevated shadow.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — Empty-state illustration frame.
- Properties: `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast notification surface — feature-card shape + medium shadow.
- Properties: `backgroundColor`, `rounded`, `padding`, `typography`



<!-- source:end -->

</details>

## 设计建议与禁忌

### 执行
- 准备金 `{colors.primary}` (`#00d992`),每一次主CTA,闪电标志glyph,以及活状态指标,绿色是品牌的重力中心.
- 使用黑暗 `{colors.canvas}` (`#101010`)作为唯一的页面表面。没有光度-模式节奏。
- 以纸牌构建牌 1 px `{colors.hairline}` 暗处的毛线是品牌的升空系统
- Pair Inter (sentence-case) with SF Mono (inline code, command snippets). Every uppercase moment uses Inter at weight 600 with `2.52 px` tracking — not a separate mono.
- 使用 `{rounded.sm}` 6 px 按钮, `{rounded.md}` 8 px 给卡片, `{rounded.pill}` 9999 px 仅用于内置状态标记。

### Don't
- Don't introduce a light-mode counterpart. The brand is dark-canvas only.
- Don't use the primary green as a body-text fill. It's CTA-only.
- Don't drop a soft drop-shadow on cards. The brand uses hairlines + occasional glow, never material shadows.
- Don't render the hero headline in heavy weight (700+). The brand's display is intentionally calm at weight 400.
- Don't replace Inter or SF Mono with a different family — both faces are part of the brand's voice and pairing.

<details>
<summary>英文原文</summary>

<!-- source:body -->
## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#00d992`) for every primary CTA, the lightning logo glyph, and live-status indicators. The green is the brand's centre of gravity.
- Use the dark `{colors.canvas}` (`#101010`) as the only page surface. There is no light-mode rhythm.
- Build cards with 1 px `{colors.hairline}` borders, not shadows. Hairlines on dark IS the brand's elevation system.
- Pair Inter (sentence-case) with SF Mono (inline code, command snippets). Every uppercase moment uses Inter at weight 600 with `2.52 px` tracking — not a separate mono.
- Use `{rounded.sm}` 6 px for buttons, `{rounded.md}` 8 px for cards, `{rounded.pill}` 9999 px only for inline status tags.

### Don't
- Don't introduce a light-mode counterpart. The brand is dark-canvas only.
- Don't use the primary green as a body-text fill. It's CTA-only.
- Don't drop a soft drop-shadow on cards. The brand uses hairlines + occasional glow, never material shadows.
- Don't render the hero headline in heavy weight (700+). The brand's display is intentionally calm at weight 400.
- Don't replace Inter or SF Mono with a different family — both faces are part of the brand's voice and pairing.

<!-- source:end -->

</details>

## 设计词元原值

启发人们理解 Voltagent'设计语言——一个开发者聚焦的AI代理工程平台,其表面是无情的近黑页面底色,只被单一的电绿品牌强调色,首屏内部的代码编辑模型打破,以及精准的网格黑特征卡,读起来像一个装扮成营销的文献网站.

```yaml
---
version: alpha
name: Voltagent-design-analysis
description: An inspired interpretation of Voltagent's design language — a developer-focused AI agent engineering platform whose surface is an unrelenting near-black canvas broken only by a single electric-green brand accent, code-editor mockups inside the hero, and a precise grid of dark feature cards that read like a documentation site dressed as marketing.

colors:
  primary: "#00d992"
  primary-soft: "#2fd6a1"
  primary-deep: "#10b981"
  on-primary: "#101010"
  ink: "#f2f2f2"
  ink-strong: "#ffffff"
  body: "#bdbdbd"
  mute: "#8b949e"
  hairline: "#3d3a39"
  hairline-soft: "#b8b3b0"
  canvas: "#101010"
  canvas-soft: "#1a1a1a"
  canvas-text-soft: "#f5f6f7"

typography:
  display-xl:
    fontFamily: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif
    fontSize: 60px
    fontWeight: 400
    lineHeight: 60px
    letterSpacing: -0.65px
  display-lg:
    fontFamily: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: -0.9px
  display-md:
    fontFamily: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: -0.6px
  display-sm:
    fontFamily: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
  eyebrow-mono:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 2.52px
  eyebrow-uppercase:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: 0.45px
  body-lg:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
  body-md-strong:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 23px
  caption:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-strong:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  code:
    fontFamily: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
  code-strong:
    fontFamily: SFMono-Regular, Menlo, Monaco, Consolas, monospace
    fontSize: 13px
    fontWeight: 550
    lineHeight: 16px
  button-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 40px
  5xl: 48px
  6xl: 64px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md} {spacing.3xl}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  button-outline-on-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  button-ghost-green:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-soft}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  button-pill-tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  text-input:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  card-feature-emphasized:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  code-mockup:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  code-inline-chip:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.canvas-text-soft}"
    typography: "{typography.code}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.3xl}"
  content-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.3xl}"
  green-divider-band:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.primary}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.3xl}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.md} {spacing.lg}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---
```
