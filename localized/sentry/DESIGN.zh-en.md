# Sentry · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。



<details>
<summary>英文原文</summary>

<!-- source:body -->


<!-- source:end -->

</details>

## 概览

Sentry设计语言读起来像一个戴着皮夹克的调试控制台,家和产品表面坐落在近黑紫色的午夜(英语:Beat violet mister)上.`{colors.surface-canvas-dark}` / `{colors.surface-night}`),以星域纹理和浮标式的吉祥物——宇航员,怪物,交通锥——为主,刺穿了可观察性产品的严重性. 头条运行在一个块状的专有展示的桑斯中,其中最重要的关键词被石灰绿色的突出芯片包裹(S.`{colors.accent-lime}`),仿佛复制件本身被一个开发者重新排入了自己的控制台输出.

The palette is deliberately narrow: deep midnight as the dominant canvas, electric lime as the primary attention-grabber, hot pink (`{colors.accent-pink}`) as a secondary punctuation, and a violet-mid (`{colors.accent-violet-mid}`) for tag chips and hairline strokes. White appears in two roles — as text on dark, and as the canvas for pricing, contact, and content-heavy pages where developers need to scan dense tables. The "single primary CTA" is visually inverted depending on context: filled black-violet (`{colors.primary}`) with white type on light surfaces, or filled white with dark type on dark surfaces. The button always reads as the strongest UI affordance regardless of polarity.

字典在三个家庭之间划清界限:一个用于首屏和开区者的定制显示语(春基,近凝,略为玩弄), Rubik 用于每个UI文本角色(身体、标题、眉毛盖、按钮标签),以及 Monaco 代码。按钮和眉毛几乎总是用大写来运行 0.2px 追踪升降机,以给他们控制台输出的快感。

**关键特征 :**
- 双极页面底色系统:深紫色午夜(日语:`{colors.surface-canvas-dark}`用于营销首屏和产品专题页,白色(`{colors.surface-canvas-light}`),用于定价,接触,以及密集的参考内容——系统从未试图模糊两者.
- 闪光关键字突出显示( Name`{colors.accent-lime}`)作为排版设备处理,而不是彩色的表——它将显示头条内的单词包起来,在读取流上起到语法突出的作用.
- 粘贴图解系统:用手绘图解的浮游吉祥物字符,出现在节节交叉处,从不内置卡片——它们创造密集的信息块之间的节奏和个性.
- Uppercase eyebrow + button caps in `{typography.button-cap}` and `{typography.eyebrow}`, with a consistent 0.2px tracking lift, give the brand its "developer console" cadence.
- Single-primary CTA hierarchy: every page has one filled button reading either `{colors.primary}` on light or `{colors.on-primary}` on dark; outlined and ghost variants are downgraded.
- 纸牌表面跟随页面底色:暗片段嵌入暗片(`{colors.ink-deep}` 轻小的发条 轻小的发条 白牌 `{colors.hairline-cloud}` 边框 —— 铬保持一致性,只有极性翻转。
- 奶油白色层的定价-页色节奏,带有一个暗反的"特质"层(`{colors.surface-night}`),避免了典型的强调色边框特征模式.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Overview

Sentry's design language reads like a debugging console wearing a leather jacket. The home and product surfaces sit on a near-black violet midnight (`{colors.surface-canvas-dark}` / `{colors.surface-night}`), strewn with starfield textures and floating sticker-style mascots — astronauts, monsters, traffic cones — that puncture the seriousness of an observability product. Headlines run in a chunky proprietary display sans where the most important keywords are wrapped in lime-green highlight chips (`{colors.accent-lime}`), as if the copy itself has been marked up by a developer redlining their own console output.

The palette is deliberately narrow: deep midnight as the dominant canvas, electric lime as the primary attention-grabber, hot pink (`{colors.accent-pink}`) as a secondary punctuation, and a violet-mid (`{colors.accent-violet-mid}`) for tag chips and hairline strokes. White appears in two roles — as text on dark, and as the canvas for pricing, contact, and content-heavy pages where developers need to scan dense tables. The "single primary CTA" is visually inverted depending on context: filled black-violet (`{colors.primary}`) with white type on light surfaces, or filled white with dark type on dark surfaces. The button always reads as the strongest UI affordance regardless of polarity.

Typography splits cleanly between three families: a custom display sans for hero and section openers (chunky, near-condensed, slightly playful), Rubik for every UI text role (body, captions, eyebrow caps, button labels), and Monaco for code. Buttons and eyebrows almost always run in uppercase with a 0.2px tracking lift to give them the snap of console output.

**Key Characteristics:**
- Two-polarity canvas system: deep violet midnight (`{colors.surface-canvas-dark}`) for marketing hero and product feature pages, white (`{colors.surface-canvas-light}`) for pricing, contact, and dense reference content — the system never tries to blur the two.
- Lime keyword highlight (`{colors.accent-lime}`) treated as a typographic device, not a color swatch — it wraps single words inside the display headline to act as a syntax highlight on the reading flow.
- Sticker illustration system: floating mascot characters with hand-drawn outlines, appearing at section junctions, never inside cards — they create rhythm and personality between dense info blocks.
- Uppercase eyebrow + button caps in `{typography.button-cap}` and `{typography.eyebrow}`, with a consistent 0.2px tracking lift, give the brand its "developer console" cadence.
- Single-primary CTA hierarchy: every page has one filled button reading either `{colors.primary}` on light or `{colors.on-primary}` on dark; outlined and ghost variants are downgraded.
- Card surfaces follow the canvas: dark sections nest dark cards (`{colors.ink-deep}` with subtle hairline) and light sections nest white cards with `{colors.hairline-cloud}` borders — chrome stays consistent, only the polarity flips.
- A pricing-page color rhythm of cream-white tiers with one dark inverted "featured" tier (`{colors.surface-night}`), avoiding the typical accent-bordered featured pattern.


<!-- source:end -->

</details>

## 配色

> **Source pages:** home (`/welcome/`), product/error-monitoring, contact/enterprise, pricing.

### 品牌和 强调色
- **午夜紫罗兰** (`{colors.primary}` — `#150f23`:系统的主要动作颜色和最深的表面音调。用于在光面上填充的主按钮, code-block 和最强的黑牌
- **墨水紫罗兰** (`{colors.ink-deep}` — `#1f1633`:从初级稍稍提升,这是营销首屏页面底色和光面默认的体文字颜色——一个单一的词元做双重义务作为背景和墨水.
- **Electric Lime** (`{colors.accent-lime}` — `#c2ef4e`): The signature highlight color. Wrapped around individual headline keywords as a syntax-highlight chip (`{rounded.xs}` corner, no padding-y, 12px padding-x). Also used as the squiggly footer divider stroke. Never a button background.
- **热粉色** (`{colors.accent-pink}` — `#fa7faa`: 贴图,图点,以及支撑强调色所使用的二级标点颜色——从不按按钮,从不按体型排列类型.
- **Violet Link** (`{colors.accent-violet}` — `#6a5fc1`): Inline link color when emphasis is needed beyond underline.
- **Deep Violet** (`{colors.accent-violet-deep}` — `#422082`): The select-dropdown fill on contact forms; also used on spotlight cards inside dark sections.
- **中紫罗兰** (`{colors.accent-violet-mid}` — `#79628c`: 标记芯片填充和在暗表面晕音.

### 表面
- **暗黑的画像** (`{colors.surface-canvas-dark}` — `#1f1633`:首屏,产品,和特征页背景. 载承最深的大气字重.
- **夜 间** (`{colors.surface-night}` — `#150f23`:暗布上的卡片,代码块,以及"特质"定价等级.
- **浅色画像** (`{colors.surface-canvas-light}` — `#ffffff`:定价,接触,以及密集参考页背景.
- **Surface Press Light** (`{colors.surface-press-light}` — `#f0f0f0`) and **Press Stronger** (`{colors.surface-press-stronger}` — `#efefef`): The pressed/active fill of inverted buttons on dark surfaces.
- **发条紫色** (`{colors.hairline-violet}` — `#362d59`): 1px 暗卡上的边框。
- **发条酷** (`{colors.hairline-cool}` — `#cfcfdb`): 1px 边框,在文本输入和窗体字段上。
- **细边线云** (`{colors.hairline-cloud}` — `#e5e7eb`): Pricing-table 分词和 pricing-card 光帆上的边框。

### 文本
- **小学** (`{colors.on-primary}` — `#ffffff`:所有暗布上的文字,所有CTA标签在填充的暗按钮上.
- **墨水( 墨水 )** (`{colors.ink}` — `#1f1633`:光帆上的机身文字;与暗页面底色相同的六进制,重新定位为类型.
- **墨水出版社** (`{colors.ink-press}` — `#1a1a1a`: 预留了按下/主动状态的倒置按钮.
- **黑暗的静音** (`{colors.on-dark-muted}` — `rgba(255,255,255,0.72)`: 暗页面底色上的副文本,标题,和表单元格值.
- **On Dark Faint** (`{colors.on-dark-faint}` — `rgba(255,255,255,0.18)`): Translucent surface-on-dark — used for ghost button fills and dimmed nav items.

### 语义
- **焦点环** (`{colors.ring-focus}` — `rgba(59,130,246,0.5)`:半透明蓝焦环——系统中唯一的蓝色,保留用于键盘聚焦于形式字段.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Colors

> **Source pages:** home (`/welcome/`), product/error-monitoring, contact/enterprise, pricing.

### Brand & Accent
- **Midnight Violet** (`{colors.primary}` — `#150f23`): The system's primary action color and the deepest surface tone. Used for filled primary buttons on light surfaces, code-block backgrounds, and the strongest dark cards.
- **Ink Violet** (`{colors.ink-deep}` — `#1f1633`): Slightly lifted from primary, this is the marketing hero canvas and the default body-text color on light surfaces — a single token doing double duty as background and ink.
- **Electric Lime** (`{colors.accent-lime}` — `#c2ef4e`): The signature highlight color. Wrapped around individual headline keywords as a syntax-highlight chip (`{rounded.xs}` corner, no padding-y, 12px padding-x). Also used as the squiggly footer divider stroke. Never a button background.
- **Hot Pink** (`{colors.accent-pink}` — `#fa7faa`): Secondary punctuation color used for sticker outlines, chart points, and supporting accents — never on buttons, never on type at body size.
- **Violet Link** (`{colors.accent-violet}` — `#6a5fc1`): Inline link color when emphasis is needed beyond underline.
- **Deep Violet** (`{colors.accent-violet-deep}` — `#422082`): The select-dropdown fill on contact forms; also used on spotlight cards inside dark sections.
- **Mid Violet** (`{colors.accent-violet-mid}` — `#79628c`): Tag-chip fill and faint accent on dark surfaces.

### Surface
- **Dark Canvas** (`{colors.surface-canvas-dark}` — `#1f1633`): Hero, product, and feature-page background. Carries the deepest atmospheric weight.
- **Night** (`{colors.surface-night}` — `#150f23`): Cards on dark canvas, code blocks, and the "featured" pricing tier.
- **Light Canvas** (`{colors.surface-canvas-light}` — `#ffffff`): Pricing, contact, and dense-reference page background.
- **Surface Press Light** (`{colors.surface-press-light}` — `#f0f0f0`) and **Press Stronger** (`{colors.surface-press-stronger}` — `#efefef`): The pressed/active fill of inverted buttons on dark surfaces.
- **Hairline Violet** (`{colors.hairline-violet}` — `#362d59`): 1px borders on dark cards.
- **Hairline Cool** (`{colors.hairline-cool}` — `#cfcfdb`): 1px borders on text inputs and form fields.
- **Hairline Cloud** (`{colors.hairline-cloud}` — `#e5e7eb`): Pricing-table dividers and pricing-card borders on light canvas.

### Text
- **On Primary** (`{colors.on-primary}` — `#ffffff`): All text on dark canvas, all CTA labels on filled dark buttons.
- **Ink** (`{colors.ink}` — `#1f1633`): Body text on light canvas; identical hex to the dark canvas, repurposed as type.
- **Ink Press** (`{colors.ink-press}` — `#1a1a1a`): Reserved for the pressed/active state of inverted buttons.
- **On Dark Muted** (`{colors.on-dark-muted}` — `rgba(255,255,255,0.72)`): Secondary text, captions, and table cell values on dark canvas.
- **On Dark Faint** (`{colors.on-dark-faint}` — `rgba(255,255,255,0.18)`): Translucent surface-on-dark — used for ghost button fills and dimmed nav items.

### Semantic
- **Focus Ring** (`{colors.ring-focus}` — `rgba(59,130,246,0.5)`): Translucent blue focus ring — the only blue in the system, reserved for keyboard focus on form fields.


<!-- source:end -->

</details>

## 字体排版

### 字体家族

显示层是一个专有的几何色素的色素,其比例粗糙、接近凝固,具有略微具有颠覆性的个性(闭合孔径、光学压力字母表)。 **Rubik** 重度的视觉连续。

用户界面等级是: **Rubik** ——Google字体上的开源希伯来语/拉丁语sans——系统回落(`-apple-system, system-ui, Segoe UI, Helvetica, Arial`). Rubik 处理每个身体、标题、按钮和眉毛角色。

代码层是 **Monaco** 与 Menlo 财务报告和已审计财务报表 Ubuntu Mono 倒置——用于代码块,安装片段,以及内置的符号.

### 等级

| 调试                           | 大小 | 字重 | 线条高度 | 字母间距 | 使用                                                                                |
| ------------------------------- | ---- | ------ | ----------- | -------------- | ---------------------------------------------------------------------------------- |
| `{typography.display-hero}`     | 88px | 700    | 1.2         | 0              | 营销首屏头条(单行)                                 |
| `{typography.display-large}`    | 60px | 500    | 1.1         | 0              | 暗面打开区域                                                   |
| `{typography.heading-xl}`       | 30px | 500    | 1.2         | 0              | 浅表面的页标题(如"各种大小的dev团队定价计划") .   |
| `{typography.heading-lg}`       | 27px | 500    | 1.25        | 0              | 分节标题,大牌标题                                            |
| `{typography.heading-md}`       | 24px | 500    | 1.25        | 0              | 纸牌标题,页内标题                                              |
| `{typography.heading-sm}`       | 20px | 600    | 1.25        | 0              | 缩写卡片标题,列表组标题                                               |
| `{typography.body-lg}`          | 16px | 400    | 2.0         | 0              | 营销-分段体——首屏子文字中所使用的气动双线引变体 |
| `{typography.body-strong}`      | 16px | 600    | 1.5         | 0              | Emphasized body run, lead sentence                                                 |
| `{typography.body-md}`          | 16px | 500    | 1.5         | 0              | 默认 UI 机构、 表格单元格、 窗体标签                                          |
| `{typography.eyebrow}`          | 15px | 500    | 1.4         | 0              | Section eyebrow above large headings, all-caps                                     |
| `{typography.button-cap}`       | 14px | 700    | 1.14        | 0.2px          | Filled button labels (uppercase)                                                   |
| `{typography.button-cap-light}` | 14px | 500    | 1.29        | 0.2px          | Ghost / outline button labels (uppercase)                                          |
| `{typography.caption}`          | 14px | 400    | 1.43        | 0              | 页脚、 精细打印、 帮助复制                                               |
| `{typography.micro-cap}`        | 10px | 600    | 1.8         | 0.25px         | 状态标签、徽章文本、微眉浏览                                           |
| `{typography.code}`             | 16px | 400    | 1.5         | 0              | 代码块内容                                                                 |
| `{typography.code-strong}`      | 16px | 700    | 1.5         | 0              | 突出显示的代码关键字                                                           |

### 原则
- **Two leading worlds.** Marketing copy uses 2.0 line-height on `{typography.body-lg}` — extremely airy, generous breathing room. Functional UI copy uses 1.5 line-height on `{typography.body-md}` — denser, closer to console output. The choice is deliberate: marketing reads like prose, the product reads like a log.
- **Caps with tracking.** All button labels and eyebrows are uppercase with 0.2px tracking. This is the brand's typographic signature — a console-prompt cadence applied to UI affordances.
- **头条作为语法.** 首屏显示是结构化的,所以可以将一个单一的关键字包裹在一个 `{colors.accent-lime}` 突出显示芯片而不干扰读取顺序。将石灰芯片作为甘油级装饰,而不是单独的组件。

### Note on Font Substitutes
Rubik 是在 Google 字体上的开源,是除首屏显示以外的所有事项的安全默认。对于专有显示系统,合适的开源替代是 **空间格罗特斯克** (重力较重) **阿尔基沃** (半凝聚重量),或 **圣胡博特会** 轴重为重的轴线,均带有相同的圆块近凝固的硅胶。 line-height 下调 0.05 以大尺寸的面孔更紧凑


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Typography

### Font Family

The display tier is a proprietary geometric sans with chunky, near-condensed proportions and a slightly subversive personality (closing apertures, optical-stress letterforms). When unavailable, fall back to **Rubik** at heavier weights for visual continuity.

The UI tier is **Rubik** — an open-source Hebrew/Latin sans on Google Fonts — with system fallbacks (`-apple-system, system-ui, Segoe UI, Helvetica, Arial`). Rubik handles every body, caption, button, and eyebrow role.

The code tier is **Monaco** with Menlo and Ubuntu Mono fallbacks — used in code blocks, install snippets, and inline tokens.

### Hierarchy

| Token                           | Size | Weight | Line Height | Letter Spacing | Use                                                                                |
| ------------------------------- | ---- | ------ | ----------- | -------------- | ---------------------------------------------------------------------------------- |
| `{typography.display-hero}`     | 88px | 700    | 1.2         | 0              | Marketing hero headline (single line of attention)                                 |
| `{typography.display-large}`    | 60px | 500    | 1.1         | 0              | Section openers on dark surfaces                                                   |
| `{typography.heading-xl}`       | 30px | 500    | 1.2         | 0              | Page titles on light surfaces (e.g., "Pricing plans for dev teams of all sizes")   |
| `{typography.heading-lg}`       | 27px | 500    | 1.25        | 0              | Sub-section headings, large card titles                                            |
| `{typography.heading-md}`       | 24px | 500    | 1.25        | 0              | Card titles, in-page section headings                                              |
| `{typography.heading-sm}`       | 20px | 600    | 1.25        | 0              | Compact card title, list-group title                                               |
| `{typography.body-lg}`          | 16px | 400    | 2.0         | 0              | Marketing-paragraph body — the airy, two-line-leading variant used in hero subtext |
| `{typography.body-strong}`      | 16px | 600    | 1.5         | 0              | Emphasized body run, lead sentence                                                 |
| `{typography.body-md}`          | 16px | 500    | 1.5         | 0              | Default UI body, table cells, form labels                                          |
| `{typography.eyebrow}`          | 15px | 500    | 1.4         | 0              | Section eyebrow above large headings, all-caps                                     |
| `{typography.button-cap}`       | 14px | 700    | 1.14        | 0.2px          | Filled button labels (uppercase)                                                   |
| `{typography.button-cap-light}` | 14px | 500    | 1.29        | 0.2px          | Ghost / outline button labels (uppercase)                                          |
| `{typography.caption}`          | 14px | 400    | 1.43        | 0              | Footer text, fine print, helper copy                                               |
| `{typography.micro-cap}`        | 10px | 600    | 1.8         | 0.25px         | Status labels, badge text, micro-eyebrow                                           |
| `{typography.code}`             | 16px | 400    | 1.5         | 0              | Code block content                                                                 |
| `{typography.code-strong}`      | 16px | 700    | 1.5         | 0              | Highlighted code keyword                                                           |

### Principles
- **Two leading worlds.** Marketing copy uses 2.0 line-height on `{typography.body-lg}` — extremely airy, generous breathing room. Functional UI copy uses 1.5 line-height on `{typography.body-md}` — denser, closer to console output. The choice is deliberate: marketing reads like prose, the product reads like a log.
- **Caps with tracking.** All button labels and eyebrows are uppercase with 0.2px tracking. This is the brand's typographic signature — a console-prompt cadence applied to UI affordances.
- **Headlines as syntax.** The hero display is structured so a single keyword can be wrapped in a `{colors.accent-lime}` highlight chip without disrupting the reading order. Treat the lime chip as a glyph-level decoration, not a separate component.

### Note on Font Substitutes
Rubik is open-source on Google Fonts and is the safe default for everything except the hero display. For the proprietary display sans, suitable open substitutes are **Space Grotesk** (heavier weights), **Archivo** (semi-condensed weights), or **Hubot Sans** with optical-size axis at heavier ends — all carry the same chunky, near-condensed silhouette. Adjust line-height down by 0.05 when substituting, since the proprietary face has tighter leading at large sizes.


<!-- source:end -->

</details>

## 布局

### 间距系统
- **基地单位**: 8px
- **脚本**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.section}` 96px
- **分区编栏**: `{spacing.section}` 96px 介于桌面上的主要页面段之间,崩溃为 `{spacing.xxl}` 32px–48px 手机上,我刚从电话里找到的
- **Card internal padding**: `{spacing.xxl}` 32px on pricing cards and large feature cards; `{spacing.lg}` 16px on compact tag/badge groups.
- **窗体字段编解**: `{spacing.sm}` 8px 垂直, 显示 `{spacing.md}` 12px 水平 - 匹配 text-input 直接表示符号。

### 网格容器( C)
- 销售页使用宽厚的中央集装箱,外侧沟槽宽;最大宽度围绕 1152px (提取的断点之一),内容在内部有弹性,横跨 12 概念栏。
- 定价分为 a 4- 桌面上的一级牌行,崩溃到 2- 中宽度和 1- 移动。
- 联系表使用 2- 单光扫描面板内的柱形场布局(第一/最后名称并列).
- 断点楼梯 1440 → 1152 → 992 → 768 → 640 → 576 ——见应变行为.

### 白空间哲学
The dark canvas absorbs whitespace differently from light. On dark surfaces the brand stretches `{spacing.section}` generously between bands so floating mascots and starfield textures have room to breathe. On light surfaces (pricing, contact) the whitespace tightens — content density takes priority because users are scanning, comparing, and acting. Rule of thumb: hero and feature surfaces are spacious, transactional surfaces are dense.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Layout

### Spacing System
- **Base unit**: 8px
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.section}` 96px
- **Section padding**: `{spacing.section}` 96px between major page bands on desktop, collapsing to `{spacing.xxl}` 32px–48px on mobile.
- **Card internal padding**: `{spacing.xxl}` 32px on pricing cards and large feature cards; `{spacing.lg}` 16px on compact tag/badge groups.
- **Form field padding**: `{spacing.sm}` 8px vertical, `{spacing.md}` 12px horizontal — matches the text-input token directly.

### Grid & Container
- Marketing pages use a wide centered container with generous outer gutters; max width sits around 1152px (one of the extracted breakpoints), with content inside flexing across 12 conceptual columns.
- Pricing splits into a 4-tier card row at desktop, collapsing to 2-up at mid widths and 1-up on mobile.
- The contact form uses a 2-column field layout (first/last name side-by-side) inside a single light-canvas panel.
- Breakpoints stair-step at 1440 → 1152 → 992 → 768 → 640 → 576 — see Responsive Behavior.

### Whitespace Philosophy
The dark canvas absorbs whitespace differently from light. On dark surfaces the brand stretches `{spacing.section}` generously between bands so floating mascots and starfield textures have room to breathe. On light surfaces (pricing, contact) the whitespace tightens — content density takes priority because users are scanning, comparing, and acting. Rule of thumb: hero and feature surfaces are spacious, transactional surfaces are dense.


<!-- source:end -->

</details>

## 层次与阴影

| 职等 | 治疗                                                                      | 使用                                                                                                                                   |
| ----- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | 平地画画,无影                                                      | 默认表面、 暗色或光线                                                                                                        |
| 1     | `box-shadow: rgba(0,0,0,0.08) 0 2px 8px 0`                                     | 暗布上的反向按钮( 亮度填充从暗表面升起)                                                                 |
| 2     | `box-shadow: rgba(0,0,0,0.1) 0 10px 15px -3px, rgba(0,0,0,0.1) 0 4px 6px -4px` | 轻页面底色上的浮牌, 模式                                                                                                |
| 3     | `box-shadow: rgb(21,15,35) 0 0 8px 6px`                                        | Glow halo around primary CTA on dark hero — the dark color itself becomes the shadow, creating a vignette of canvas around the button |
| 4     | `box-shadow: rgba(0,0,0,0.18) 0 0.5rem 1.5rem`                                 | 暗布上按倒数按钮                                                                                                |

### 装饰性深度
Sentry's depth doesn't come from drop shadows — it comes from the **starfield texture** on the hero canvas (subtle white-on-violet pinpricks at low opacity), the **floating sticker mascots** (drawn with hand-rendered outlines and saturated fills, layered above the canvas with no shadow), and the **lime squiggly divider** above the footer. These illustrative elements do the work that shadow stacks do in flatter design systems — they tell the eye where one section ends and another begins.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Elevation & Depth

| Level | Treatment                                                                      | Use                                                                                                                                   |
| ----- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | Flat on canvas, no shadow                                                      | Default surface, dark or light                                                                                                        |
| 1     | `box-shadow: rgba(0,0,0,0.08) 0 2px 8px 0`                                     | Inverted buttons on dark canvas (light fill lifting off dark surface)                                                                 |
| 2     | `box-shadow: rgba(0,0,0,0.1) 0 10px 15px -3px, rgba(0,0,0,0.1) 0 4px 6px -4px` | Floating cards on light canvas, modals                                                                                                |
| 3     | `box-shadow: rgb(21,15,35) 0 0 8px 6px`                                        | Glow halo around primary CTA on dark hero — the dark color itself becomes the shadow, creating a vignette of canvas around the button |
| 4     | `box-shadow: rgba(0,0,0,0.18) 0 0.5rem 1.5rem`                                 | Pressed inverted button on dark canvas                                                                                                |

### Decorative Depth
Sentry's depth doesn't come from drop shadows — it comes from the **starfield texture** on the hero canvas (subtle white-on-violet pinpricks at low opacity), the **floating sticker mascots** (drawn with hand-rendered outlines and saturated fills, layered above the canvas with no shadow), and the **lime squiggly divider** above the footer. These illustrative elements do the work that shadow stacks do in flatter design systems — they tell the eye where one section ends and another begins.


<!-- source:end -->

</details>

## 形状

### 圆角刻度

| 调试            | 数值  | 使用                                                         |
| ---------------- | ------ | ----------------------------------------------------------- |
| `{rounded.xs}`   | 4px    | 徽章、状态胶囊形、 石灰关键词突出芯片          |
| `{rounded.sm}`   | 6px    | 文本输入, 搜索框                                   |
| `{rounded.md}`   | 8px    | 初键和倒置按钮, 代码块, 选择下拉 |
| `{rounded.lg}`   | 10px   | 通用潜水器,容器块                              |
| `{rounded.xl}`   | 12px   | 定价卡、特征卡、导航胶囊形、铬        |
| `{rounded.xxl}`  | 18px   | 图像容器,大型首屏插图                  |
| `{rounded.full}` | 9999px | 幻象们, circular 图标按钮                              |

### 摄影几何
网站不使用传统摄影——它使用 **插图标签和产品 UI 截图** 产品 UI 模拟器位于内部 `{rounded.xxl}` 18px 容器,常常略微倾斜,与没有边框的暗色页面底色相对. 粘贴吉祥物根本没有容器——它们直接被铺在页面底色上,常常是重叠的段边界来断网. Avatar处理(在客户-logo条形中)是简单的灰度字标,而不是照片.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Shapes

### Border Radius Scale

| Token            | Value  | Use                                                         |
| ---------------- | ------ | ----------------------------------------------------------- |
| `{rounded.xs}`   | 4px    | Badges, status pills, lime keyword highlight chips          |
| `{rounded.sm}`   | 6px    | Text inputs, search boxes                                   |
| `{rounded.md}`   | 8px    | Primary and inverted buttons, code blocks, select dropdowns |
| `{rounded.lg}`   | 10px   | Generic divs, container blocks                              |
| `{rounded.xl}`   | 12px   | Pricing cards, feature cards, navigation pill chrome        |
| `{rounded.xxl}`  | 18px   | Image containers, large hero illustrations                  |
| `{rounded.full}` | 9999px | Avatars, circular icon buttons                              |

### Photography Geometry
The site doesn't use traditional photography — it uses **illustrated stickers and product UI screenshots** in roughly equivalent geometric roles. Product UI mocks sit inside `{rounded.xxl}` 18px containers, often tilted slightly off-axis, against the dark canvas with no border. Sticker mascots have no container at all — they are layered directly on canvas, often overlapping section boundaries to break the grid. Avatar treatments (in customer-logo strips) are simple greyscale wordmarks, not photos.


<!-- source:end -->

</details>

## 组件

> **No hover states documented.** Every spec below shows only Default and Pressed/Active states. Variants are formal entries in the front-matter `components:` block.

### 按钮

**`button-primary`** ——主要的CTA跨越光面.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-cap}` (uppercase, 14px / 700, 0.2px tracking), padding `{spacing.md} {spacing.lg}` (12px 16px), rounded `{rounded.md}`. On dark hero surfaces, add the level-3 glow halo for emphasis.
- Pressed state lives in `button-primary-pressed`: background flips to `{colors.surface-press-stronger}`, text to `{colors.ink-press}`. The button effectively swaps polarities on press.

**`button-inverted`** ——暗布上占支配地位的CTA;视觉上相同的等级,极性飞跃.
- Background `{colors.on-primary}` (white), text `{colors.ink-deep}`, same `{typography.button-cap}`, rounded `{rounded.md}`.
- Pressed in `button-inverted-pressed`: background drops to `{colors.surface-press-light}`, text to `{colors.ink-press}`.

**`button-ghost-on-dark`** ——在暗色页面底色上进行二级CTA(如"Get Demo"在"Get Started"之外).
- 透明填充 `{colors.on-dark-faint}`文本中,请输入 `{colors.on-primary}`类型 `{typography.button-cap}`, 编译 `{spacing.sm}` (8px),四舍五入 `{rounded.xl}`。半透明填充可以让页面底色纹理显示。

**`button-violet-token`** ——胶囊形形标签/类别按钮,在产品导航中使用内含.
- Background `{colors.accent-violet-mid}`, text `{colors.on-primary}`, type `{typography.button-cap-light}`, padding `{spacing.sm} {spacing.lg}` (8px 16px), rounded `{rounded.xl}`, 1px hairline border in a slightly deeper violet.

**`button-disabled`**
- Background `{colors.hairline-cloud}`, text `{colors.on-dark-muted}`, otherwise identical to `button-primary`.

### 纸牌和集装箱

**`card-pricing`** ——定价页上的标准等级卡.
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, padding `{spacing.xxl}` 32px, rounded `{rounded.xl}` 12px, 1px `{colors.hairline-cloud}` border. Headline at top in `{typography.heading-md}`, price in `{typography.display-large}`, feature list in `{typography.body-md}`, primary CTA pinned to the bottom of the card.

**`card-pricing-featured`** ——暗反转的"特异性"级(.Sentry 以商业层次作为特色层次)。
- Background `{colors.surface-night}`, text `{colors.on-primary}`, otherwise identical structure to `card-pricing`. The inversion (rather than an accent-bordered light card) is the brand's distinctive choice — the featured tier reads as the brand's voice, not as a marketing decoration.

**`card-feature-dark`** 大型 feature-band 暗面的卡片,用来锁定产品特性解释.
- Background `{colors.ink-deep}`, text `{colors.on-primary}`, padding `{spacing.xxl}` 32px, rounded `{rounded.xxl}` 18px. Often holds a UI mock plus a 27px headline plus 16px body.

**`card-spotlight-violet`** 强调色特征卡,带有更深的紫色填充,用于 "Sentry-只有"能力带"
- Background `{colors.accent-violet-deep}`, text `{colors.on-primary}`, padding `{spacing.xxl}`, rounded `{rounded.xxl}`. The deep violet reads as a feature highlight without breaking out of the brand's purple family.

**`code-block`** ——代码/安装片段.
- Background `{colors.surface-night}`, text `{colors.on-primary}` rendered in `{typography.code}`. Padding `{spacing.lg}` 16px, rounded `{rounded.md}`. On dark canvas the code block is barely lifted from canvas — only the slightly deeper fill differentiates it.

### 输入表单( F)

**`text-input`** ——联系表第一/最后/电子邮件/etc字段。
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (8px 12px), rounded `{rounded.sm}` 6px, 1px `{colors.hairline-cool}` border.
- Focus state in `text-input-focused`: same fill, but adds an inset shadow `rgba(0,0,0,0.15) 0 2px 10px inset` to suggest depth pressed inward.

**`select-violet`** ——暗接触面板内使用的下拉变体.
- Background `{colors.accent-violet-deep}`, text `{colors.on-primary}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.lg}`, rounded `{rounded.md}`. Distinctive because it doesn't mimic a plain text input — it reads as a deliberate brand surface.

### 导航

**`nav-bar-light`** ——标准顶端导航横跨光页(定价,联系,docs).
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, type `{typography.body-md}`. Logo wordmark on the left at ~145×32px, primary nav items mid-bar with dropdown carets, and a `Get Demo` ghost + `Get Started` filled `button-primary` pair on the right. Padding `{spacing.lg} {spacing.xl}` (16px 24px).

**顶部导航( 暗变体)** ——主页使用;结构相同但倒置极性,坐上 `{colors.surface-canvas-dark}`。右侧按钮变为 `button-inverted`.

**移动导航** 倒塌在汉堡夹下方 768px 断点;滴滴的护手成为全宽手风琴物品.

### 胶囊形、徽章和突出芯片

**`pill-neutral-dark`** ——小状态/ 暗面类胶囊形.
- Background `{colors.surface-night}`, text `{colors.on-primary}`, type `{typography.caption}` 12px, padding `{spacing.xs} {spacing.sm}` (4px 8px), rounded `{rounded.xs}` 4px.

**`chip-lime-keyword`** ——签名内含突出显示在首屏显示头条内包裹单词.
- Background `{colors.accent-lime}`, text `{colors.ink-deep}`, type matches the surrounding `{typography.display-hero}`, rounded `{rounded.xs}` 4px, padding `0 {spacing.md}` (12px horizontal, 0 vertical so the chip hugs the cap-height).

### 签名组件

**粘贴吉祥物层** ——用手递的轮廓和饱和图绘制的插图人物(宇航员,漫画怪物,交通锥,调试浮雕). `{colors.accent-pink}` / `{colors.accent-lime}` 填充。吉祥物被放在区块交叉口,往往重叠区块边界,由 30–40% 具有装饰性的区块标记和品牌人格载体——从不装在牌内,从不装扣。

**Lime Squiggly Footer Divider** — a hand-drawn `{colors.accent-lime}` squiggle line, ~3px stroke, sitting above the footer at full container width. Replaces what would otherwise be a 1px hairline divider with a personality-laden flourish.

**星野首屏纹理** ——在非常低的不透明度下,在首屏页面底色上覆盖着一个微弱的白色紫色的披针形图案,在暗色页面底色上添加大气深度,没有明显的装饰,执行时作为背景图像,而不是重复CSS.

**窗口- 剪辑 UI 模拟器** ——产品 UI 截图框中 `{rounded.xxl}` 容器,经常倾斜 ±2–3 离轴度, 将重叠的段落边界定位在暗色特征页上。 铬本身只是一个圆形图像, 带有微妙的细边线; 内容是实际产品 UI 。

**`link-on-dark`** — inline links in body copy on dark surfaces. Default text is `{colors.on-primary}` rendered in `{typography.body-md}` with a persistent underline; the underline is the entire affordance, no color change. Sits flush in copy with no padding, no rounded corners beyond the inherited `{rounded.xs}`.

**`link-on-light`** 光面上身体复制的内置链接。形状合同与 `link-on-dark`,但文本为 `{colors.ink-deep}`. 使用跨定价、接触和文档表面。

**`footer-light`** ——轻扫描模板上全站页脚(定价,联系人,文件).
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, type `{typography.caption}`, padding `{spacing.xxl} {spacing.xl}` (32px 24px). Topped by the lime squiggly divider — see Signature Components. Holds three to four columns of link groups, social icons in a horizontal strip at the bottom right, and a small legal/copyright row at the very bottom in `{typography.caption}`.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Components

> **No hover states documented.** Every spec below shows only Default and Pressed/Active states. Variants are formal entries in the front-matter `components:` block.

### Buttons

**`button-primary`** — the dominant CTA across light surfaces.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-cap}` (uppercase, 14px / 700, 0.2px tracking), padding `{spacing.md} {spacing.lg}` (12px 16px), rounded `{rounded.md}`. On dark hero surfaces, add the level-3 glow halo for emphasis.
- Pressed state lives in `button-primary-pressed`: background flips to `{colors.surface-press-stronger}`, text to `{colors.ink-press}`. The button effectively swaps polarities on press.

**`button-inverted`** — the dominant CTA on dark canvas; visually identical hierarchy, polarity-flipped.
- Background `{colors.on-primary}` (white), text `{colors.ink-deep}`, same `{typography.button-cap}`, rounded `{rounded.md}`.
- Pressed in `button-inverted-pressed`: background drops to `{colors.surface-press-light}`, text to `{colors.ink-press}`.

**`button-ghost-on-dark`** — secondary CTA on dark canvas (e.g., "Get Demo" beside "Get Started").
- Translucent fill `{colors.on-dark-faint}`, text `{colors.on-primary}`, type `{typography.button-cap}`, padding `{spacing.sm}` (8px), rounded `{rounded.xl}`. The translucent fill lets the canvas texture show through.

**`button-violet-token`** — pill-shaped tag/category button used inline in product navs.
- Background `{colors.accent-violet-mid}`, text `{colors.on-primary}`, type `{typography.button-cap-light}`, padding `{spacing.sm} {spacing.lg}` (8px 16px), rounded `{rounded.xl}`, 1px hairline border in a slightly deeper violet.

**`button-disabled`**
- Background `{colors.hairline-cloud}`, text `{colors.on-dark-muted}`, otherwise identical to `button-primary`.

### Cards & Containers

**`card-pricing`** — the standard tier card on the pricing page.
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, padding `{spacing.xxl}` 32px, rounded `{rounded.xl}` 12px, 1px `{colors.hairline-cloud}` border. Headline at top in `{typography.heading-md}`, price in `{typography.display-large}`, feature list in `{typography.body-md}`, primary CTA pinned to the bottom of the card.

**`card-pricing-featured`** — the dark inverted "featured" tier (Sentry uses the Business tier as the featured one).
- Background `{colors.surface-night}`, text `{colors.on-primary}`, otherwise identical structure to `card-pricing`. The inversion (rather than an accent-bordered light card) is the brand's distinctive choice — the featured tier reads as the brand's voice, not as a marketing decoration.

**`card-feature-dark`** — large feature-band card on dark surfaces, used to anchor product feature explanations.
- Background `{colors.ink-deep}`, text `{colors.on-primary}`, padding `{spacing.xxl}` 32px, rounded `{rounded.xxl}` 18px. Often holds a UI mock plus a 27px headline plus 16px body.

**`card-spotlight-violet`** — accent feature card with deeper violet fill, used for "Sentry-only" capability bands.
- Background `{colors.accent-violet-deep}`, text `{colors.on-primary}`, padding `{spacing.xxl}`, rounded `{rounded.xxl}`. The deep violet reads as a feature highlight without breaking out of the brand's purple family.

**`code-block`** — code/install snippets.
- Background `{colors.surface-night}`, text `{colors.on-primary}` rendered in `{typography.code}`. Padding `{spacing.lg}` 16px, rounded `{rounded.md}`. On dark canvas the code block is barely lifted from canvas — only the slightly deeper fill differentiates it.

### Inputs & Forms

**`text-input`** — the contact-form first/last/email/etc. fields.
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (8px 12px), rounded `{rounded.sm}` 6px, 1px `{colors.hairline-cool}` border.
- Focus state in `text-input-focused`: same fill, but adds an inset shadow `rgba(0,0,0,0.15) 0 2px 10px inset` to suggest depth pressed inward.

**`select-violet`** — the dropdown variant used inside dark contact panels.
- Background `{colors.accent-violet-deep}`, text `{colors.on-primary}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.lg}`, rounded `{rounded.md}`. Distinctive because it doesn't mimic a plain text input — it reads as a deliberate brand surface.

### Navigation

**`nav-bar-light`** — the standard top nav across light pages (pricing, contact, docs).
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, type `{typography.body-md}`. Logo wordmark on the left at ~145×32px, primary nav items mid-bar with dropdown carets, and a `Get Demo` ghost + `Get Started` filled `button-primary` pair on the right. Padding `{spacing.lg} {spacing.xl}` (16px 24px).

**Top Nav (dark variant)** — used on the home page; same structure but inverted polarity, sitting on `{colors.surface-canvas-dark}`. The right-side button becomes `button-inverted`.

**Mobile nav** — collapses to a hamburger toggle below the 768px breakpoint; dropdown carets become full-width accordion items.

### Pills, Badges, and Highlight Chips

**`pill-neutral-dark`** — small status / category pill on dark surfaces.
- Background `{colors.surface-night}`, text `{colors.on-primary}`, type `{typography.caption}` 12px, padding `{spacing.xs} {spacing.sm}` (4px 8px), rounded `{rounded.xs}` 4px.

**`chip-lime-keyword`** — the signature inline highlight wrapping single words inside the hero display headline.
- Background `{colors.accent-lime}`, text `{colors.ink-deep}`, type matches the surrounding `{typography.display-hero}`, rounded `{rounded.xs}` 4px, padding `0 {spacing.md}` (12px horizontal, 0 vertical so the chip hugs the cap-height).

### Signature Components

**Sticker Mascot Layer** — illustrated characters (astronauts, cartoon monsters, traffic cones, debugging avatars) drawn with hand-rendered outlines and saturated `{colors.accent-pink}` / `{colors.accent-lime}` fills. Mascots are placed at section junctions, often overlapping section boundaries by 30–40% of their height, with no container or shadow. They function as decorative section markers and brand personality carriers — never inside cards, never as buttons.

**Lime Squiggly Footer Divider** — a hand-drawn `{colors.accent-lime}` squiggle line, ~3px stroke, sitting above the footer at full container width. Replaces what would otherwise be a 1px hairline divider with a personality-laden flourish.

**Starfield Hero Texture** — a faint white-on-violet pinprick pattern overlaid on the hero canvas at very low opacity. Adds atmospheric depth to the dark canvas without visible decoration. Implemented as a background image, not as repeating CSS.

**Window-Chrome UI Mock** — product UI screenshots framed in `{rounded.xxl}` containers, often tilted ±2–3 degrees off axis, positioned overlapping section boundaries on the dark feature pages. The chrome itself is just a rounded image with a subtle hairline; the content is the actual product UI.

**`link-on-dark`** — inline links in body copy on dark surfaces. Default text is `{colors.on-primary}` rendered in `{typography.body-md}` with a persistent underline; the underline is the entire affordance, no color change. Sits flush in copy with no padding, no rounded corners beyond the inherited `{rounded.xs}`.

**`link-on-light`** — inline links in body copy on light surfaces. Same shape contract as `link-on-dark`, but text is `{colors.ink-deep}`. Used across pricing, contact, and docs surfaces.

**`footer-light`** — site-wide footer on the light-canvas template (pricing, contact, docs).
- Background `{colors.surface-canvas-light}`, text `{colors.ink-deep}`, type `{typography.caption}`, padding `{spacing.xxl} {spacing.xl}` (32px 24px). Topped by the lime squiggly divider — see Signature Components. Holds three to four columns of link groups, social icons in a horizontal strip at the bottom right, and a small legal/copyright row at the very bottom in `{typography.caption}`.


<!-- source:end -->

</details>

## 设计建议与禁忌

### 执行
- Reserve `{colors.accent-lime}` for keyword-highlight chips inside display headlines and the footer squiggle divider — never use it as a button background, never as body text.
- Pair every `button-primary` with `{typography.button-cap}` in uppercase with 0.2px tracking — the cadence is part of the brand, not a stylistic option.
- 处理暗页面底色( T) (`{colors.surface-canvas-dark}`)和浅布(`{colors.surface-canvas-light}`)作为两个完整的世界——让一个自己销售/版面,另一个自己交易版面,没有半量度.
- 使用贴纸吉祥物来突破分区界限——让它们重叠,倾斜,漂浮;在卡片内部束缚它们会排出它们的个性.
- 使用 `card-pricing-featured` (暗反向级),而不是对标价栏设置强调色边框的轻度级.
- 默认正文 line-height 改为: 1.5 函数界面表面和 2.0 市场营销表面的区别是故意的。

### Don't
- Don't introduce additional accent colors beyond `{colors.accent-lime}` and `{colors.accent-pink}` — adding teal, orange, or yellow dilutes the violet-and-lime signature.
- Don't apply drop shadows to cards on dark canvas — depth comes from texture and illustration, not from light-on-dark shadows that would muddy the violet.
- Don't use `{typography.display-hero}` (88px) for anything except the marketing hero — even sub-pages cap at `{typography.display-large}` (60px).
- Don't put body text in `{colors.accent-lime}` — it's a chip color, not a type color, and breaks contrast at body sizes.
- Don't soften the `{colors.primary}` button to a brand-violet — the near-black is the point; it reads as the most authoritative action regardless of canvas polarity.
- Don't put illustrated mascots inside cards or constrained containers — their job is to break grid, not occupy it.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Do's and Don'ts

### Do
- Reserve `{colors.accent-lime}` for keyword-highlight chips inside display headlines and the footer squiggle divider — never use it as a button background, never as body text.
- Pair every `button-primary` with `{typography.button-cap}` in uppercase with 0.2px tracking — the cadence is part of the brand, not a stylistic option.
- Treat the dark canvas (`{colors.surface-canvas-dark}`) and light canvas (`{colors.surface-canvas-light}`) as two complete worlds — let one own marketing/feature pages and the other own transactional pages, with no half-measures.
- Use sticker mascots to break section boundaries — let them overlap, tilt, and float; constraining them inside cards drains their personality.
- Use `card-pricing-featured` (dark inverted tier) instead of an accent-bordered light tier for the featured pricing column.
- Default body line-height to 1.5 on functional UI surfaces and 2.0 on marketing surfaces — the difference is intentional.

### Don't
- Don't introduce additional accent colors beyond `{colors.accent-lime}` and `{colors.accent-pink}` — adding teal, orange, or yellow dilutes the violet-and-lime signature.
- Don't apply drop shadows to cards on dark canvas — depth comes from texture and illustration, not from light-on-dark shadows that would muddy the violet.
- Don't use `{typography.display-hero}` (88px) for anything except the marketing hero — even sub-pages cap at `{typography.display-large}` (60px).
- Don't put body text in `{colors.accent-lime}` — it's a chip color, not a type color, and breaks contrast at body sizes.
- Don't soften the `{colors.primary}` button to a brand-violet — the near-black is the point; it reads as the most authoritative action regardless of canvas polarity.
- Don't put illustrated mascots inside cards or constrained containers — their job is to break grid, not occupy it.


<!-- source:end -->

</details>

## 响应式规则

### 断点

| 名称         | 宽度       | 密钥更改                                                                              |
| ------------ | ----------- | ---------------------------------------------------------------------------------------- |
| 4K / 宽    | ≥ 1440px    | 满 4- 等级定价行,首屏插画全比例坐在标题旁边            |
| Desktop      | 1152–1440px | Default content max-width sits at 1152px, all 4-tier patterns hold                       |
| 笔记本       | 992–1151px  | 定价崩溃到 2- 上行,导航保持水平                                   |
| 平板       | 768–991px   | 2- 柱状特征网格崩溃到 1-up; 导航仍然水平,但压缩             |
| 大型移动 | 640–767px   | 汉堡导航出现; 首屏显示滴滴从 88px 改为: ~56px                             |
| 手机       | 576–639px   | 单列所有; 分区粘贴崩溃从 96px 改为: 32–48px                 |
| 小型移动 | 1–575px     | 压缩模式;贴子吉祥物大小下降或完全隐藏以保留内容优先级 |

### 触控区域
- Primary buttons hit a minimum 44×44px on mobile (12px vertical padding × 16px font + line-height = ~44px). Maintains WCAG AAA touch-target spec.
- 导航中的药牌和徽章以及特征表面都留在上面 32×32px 即使在小的移动断点上,它们也会扩大,而不是缩小。
- 窗体字段停留在 44px 移动联系页面的最低高度。

### 折叠战略
- **首屏显示头条** 滴滴从 88px → 60px → 48px 穿过断点楼梯;石灰关键字芯片保留了每一步的垫和角半径.
- **Pricing tiers** stair-step from 4-up → 2-up → 1-up. The featured dark tier always remains visually distinguished — it never loses its inversion at any breakpoint.
- **贴纸吉祥物** 逐渐取消强调:在桌面上,它们与区段边界重叠;在平板板上,它们转向在区段编版内线;在小型移动中,大多数是隐藏在 `display: none` 以保持内容可扫描。
- **顶端导航** 倒塌到下面的汉堡包 768px; 下拉菜单使用与页面相同的页面底色极性(暗对首屏,轻对定价).
- **Code blocks** preserve 16px Monaco at every breakpoint — they never scale down — but switch to horizontal scroll on overflow rather than wrap.

### 图像行为
- 产品UI按比例模拟规模;在小型移动中,它们常常锚定在一边缘,有水平溢出,而不是缩小到不可见度.
- Sticker mascots scale by 50–70% at mobile breakpoints, preserving their personality but ceding screen space to content.
- 石灰脚将SVG的宽度缩放到容器,同时保持中风宽度的视觉上的一致性。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Responsive Behavior

### Breakpoints

| Name         | Width       | Key Changes                                                                              |
| ------------ | ----------- | ---------------------------------------------------------------------------------------- |
| 4K / Wide    | ≥ 1440px    | Full 4-tier pricing row, hero illustration sits beside headline at full scale            |
| Desktop      | 1152–1440px | Default content max-width sits at 1152px, all 4-tier patterns hold                       |
| Laptop       | 992–1151px  | Pricing collapses to 2-up rows, nav remains horizontal                                   |
| Tablet       | 768–991px   | 2-column feature grids collapse to 1-up; nav still horizontal but compresses             |
| Mobile Large | 640–767px   | Hamburger nav appears; hero display drops from 88px to ~56px                             |
| Mobile       | 576–639px   | Single-column everything; section padding collapses from 96px to 32–48px                 |
| Small Mobile | 1–575px     | Compact mode; sticker mascots drop in size or hide entirely to preserve content priority |

### Touch Targets
- Primary buttons hit a minimum 44×44px on mobile (12px vertical padding × 16px font + line-height = ~44px). Maintains WCAG AAA touch-target spec.
- Pill tags and badges in nav and feature surfaces stay above 32×32px even at small mobile breakpoints; they enlarge if necessary rather than shrink.
- Form fields stay at the 44px minimum height on mobile contact pages.

### Collapsing Strategy
- **Hero display headline** drops from 88px → 60px → 48px across the breakpoint stair; the lime keyword chip preserves padding and corner radius at every step.
- **Pricing tiers** stair-step from 4-up → 2-up → 1-up. The featured dark tier always remains visually distinguished — it never loses its inversion at any breakpoint.
- **Sticker mascots** are progressively de-emphasized: at desktop they overlap section boundaries; at tablet they shift to inline within section padding; at small mobile most are hidden via `display: none` to keep the content scan-able.
- **Top nav** collapses to a hamburger below 768px; the dropdown menu uses the same canvas polarity as the page (dark on hero, light on pricing).
- **Code blocks** preserve 16px Monaco at every breakpoint — they never scale down — but switch to horizontal scroll on overflow rather than wrap.

### Image Behavior
- Product UI mocks scale proportionally; on small mobile they often anchor to one edge with horizontal overflow rather than shrink to illegibility.
- Sticker mascots scale by 50–70% at mobile breakpoints, preserving their personality but ceding screen space to content.
- The lime footer squiggle scales the SVG to container width while keeping stroke width visually consistent.


<!-- source:end -->

</details>

## 迭代指南

1. 一次关注一个组件,不要重建系统——扩展.
2. 直接引用组件名称和符号( Q)`{colors.accent-lime}`, `{button-primary}-pressed`, `{rounded.xxl}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 自动发出警告。
4. 添加新的变体作为单独的组件条目( Q)`-pressed`, `-disabled`, `-focused`()——不要把他们埋在传言里.
5. 默认为 `{typography.body-md}` 用于产品UI体和 `{typography.body-lg}` ——主要区别在于有意和负载。
6. 保留 `{colors.accent-lime}` 稀有——每个景点有一个石灰元素,签名之所以有效,只是因为它是罕见的.
7. When polarizing a new surface, choose one canvas (`{colors.surface-canvas-dark}` or `{colors.surface-canvas-light}`) and commit to it; don't blend the two on a single page band.

<details>
<summary>英文原文</summary>

<!-- source:body -->
## Iteration Guide

1. Focus on ONE component at a time. Don't rebuild the system — extend it.
2. Reference component names and tokens directly (`{colors.accent-lime}`, `{button-primary}-pressed`, `{rounded.xxl}`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
4. Add new variants as separate component entries (`-pressed`, `-disabled`, `-focused`) — do not bury them inside prose.
5. Default to `{typography.body-md}` for product UI body and `{typography.body-lg}` for marketing prose — the leading difference is intentional and load-bearing.
6. Keep `{colors.accent-lime}` scarce — one lime element per viewport. The signature only works because it's rare.
7. When polarizing a new surface, choose one canvas (`{colors.surface-canvas-dark}` or `{colors.surface-canvas-light}`) and commit to it; don't blend the two on a single page band.

<!-- source:end -->

</details>

## 设计词元原值

启发人们理解 Sentry设计语言——一个开发者工具品牌,它建立在深紫紫色的午夜页面底色上,电动石灰强调色,以及略具颠覆性的人物形象. 系统将定制的显示sans(chunky,玩耍,近凝固)与开口配对. Rubik 用户界面复制和 Monaco 代码,然后靠暗光定价表面,贴纸式吉祥物,以及单色CTA等级,其中黑紫色按钮读作主要作用,以对抗极性或极性。

```yaml
---
version: alpha
name: Sentry-design-analysis
description: An inspired interpretation of Sentry's design language — a developer-tools brand built on a deep purple-violet midnight canvas, electric lime accents, and a slightly subversive illustrated personality. The system pairs a custom display sans (chunky, playful, near-condensed) with the open Rubik family for UI copy and Monaco for code, then leans on dark-on-light pricing surfaces, sticker-style mascots, and a single-color CTA hierarchy where black-violet buttons read as the primary action against either polarity.

colors:
  primary: "#150f23"
  ink-deep: "#1f1633"
  on-primary: "#ffffff"
  accent-lime: "#c2ef4e"
  accent-pink: "#fa7faa"
  accent-violet: "#6a5fc1"
  accent-violet-deep: "#422082"
  accent-violet-mid: "#79628c"
  surface-canvas-dark: "#1f1633"
  surface-canvas-light: "#ffffff"
  surface-night: "#150f23"
  surface-press-light: "#f0f0f0"
  surface-press-stronger: "#efefef"
  hairline-violet: "#362d59"
  hairline-cool: "#cfcfdb"
  hairline-cloud: "#e5e7eb"
  ink: "#1f1633"
  ink-press: "#1a1a1a"
  on-dark-muted: "#bdb8c0"
  on-dark-faint: "#3f3849"
  ring-focus: "#9dc1f5"

typography:
  display-hero:
    fontFamily: "Sentry Display, Rubik, system-ui, sans-serif"
    fontSize: 88px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  display-large:
    fontFamily: "Sentry Display, Rubik, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 0
  heading-xl:
    fontFamily: "Rubik, -apple-system, system-ui, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  heading-lg:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 27px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  heading-md:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  heading-sm:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0
  body-strong:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  eyebrow:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button-cap:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: 0.2px
  button-cap-light:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0.2px
  caption:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  micro-cap:
    fontFamily: "Rubik, -apple-system, system-ui, sans-serif"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.8
    letterSpacing: 0.25px
  code:
    fontFamily: "Monaco, Menlo, Ubuntu Mono, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  code-strong:
    fontFamily: "Monaco, Menlo, Ubuntu Mono, monospace"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  xxl: 18px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-primary-pressed:
    backgroundColor: "{colors.surface-press-stronger}"
    textColor: "{colors.ink-press}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-inverted:
    backgroundColor: "{colors.on-primary}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-inverted-pressed:
    backgroundColor: "{colors.surface-press-light}"
    textColor: "{colors.ink-press}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-ghost-on-dark:
    backgroundColor: "{colors.on-dark-faint}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.xl}"
    padding: 8px
  button-violet-token:
    backgroundColor: "{colors.accent-violet-mid}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cap-light}"
    rounded: "{rounded.xl}"
    padding: 8px 16px
  button-disabled:
    backgroundColor: "{colors.hairline-cloud}"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  pill-neutral-dark:
    backgroundColor: "{colors.surface-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 4px 8px
  chip-lime-keyword:
    backgroundColor: "{colors.accent-lime}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.display-hero}"
    rounded: "{rounded.xs}"
    padding: 0 12px
  text-input:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  text-input-focused:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  select-violet:
    backgroundColor: "{colors.accent-violet-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  card-pricing:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-pricing-featured:
    backgroundColor: "{colors.surface-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-feature-dark:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xxl}"
    padding: 32px
  card-spotlight-violet:
    backgroundColor: "{colors.accent-violet-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xxl}"
    padding: 32px
  code-block:
    backgroundColor: "{colors.surface-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: 16px
  link-on-dark:
    backgroundColor: "{colors.surface-canvas-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  link-on-light:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  nav-bar-light:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  footer-light:
    backgroundColor: "{colors.surface-canvas-light}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 32px 24px
---
```
