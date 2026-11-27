# Supabase · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。



<details>
<summary>英文原文</summary>

<!-- source:body -->


<!-- source:end -->

</details>

## 概览

Supabase设计语言的设计要清晰得多 营销表面就坐着 `{colors.canvas}` 纯白文本,文本以 `{colors.ink}` (`#171717` 整个系统唯一的一致的色调事件是 **绿宝石初等** (`{colors.primary}` — `#3ecf8e`) ——作为填充的CTA,偶尔强调色点,签名突出字标记中的颜色。其他的都是来自校准的灰色梯度。 `#ededed` hairline-cool 改为: `#171717` 墨水,用薄黑白的印刷技术做大部分视觉作品.

字型运行 **Circular** 字重 500 用于显示和 400 显示层使用紧的负数 letter-spacing (-1.92px 时 间 64px),将圆形的人文主义字母表拉入编辑密度中,没有大气梯度,没有全血摄影,没有暗黑的canvas营销轨迹——品牌承诺白化.

产品本身作为复合UI截图出现在每一页:仪表板表,SQL编辑器,查询构建器,日志流。这些截图是品牌的论据。它们坐在里面 `{rounded.lg}` 12px 装有细微的容器 1px 发条,经常安排 2- 上或放在首屏乐队上面的浮游"被打的窗帘"的构成中

**关键特征 :**
- 单翡翠初等( 4)`{colors.primary}` `#3ecf8e`)作为唯一染色体事件;其他一切都是单色的.
- 白页面底色营销轨道, 带有灰度等级 `{colors.hairline-cool}` 改为: `{colors.ink}`.
- Custom humanist sans display tier at weight 500 with negative letter-spacing of -1.92px to -0.42px.
- Composited product UI screenshots (dashboard, SQL editor, log stream) are the dominant decorative element — never photography, never illustrations.
- 紧紧 6px / 8px 按钮 radi ——平方形,技术型,从未出现过丸形.
- 深处的代码块 `{colors.canvas-night}` (`#1c1c1c`与 monospace 内置代码;品牌的开发者DNA在每个片段中可见.
- 定价级别使用深反转 `{colors.canvas-night}` 具有特色的等级,而不是绿色的等级——绿色是留给按钮和点强调色的.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Overview

Supabase's design language is engineered for clarity above all else. The marketing surfaces sit on `{colors.canvas}` (pure white), with text rendered in `{colors.ink}` (`#171717` — near-black, never pure black). Across the entire system the only consistent chromatic event is the **emerald green primary** (`{colors.primary}` — `#3ecf8e`) — used as the filled CTA, occasional accent dot, and the signature highlight color in the wordmark. Everything else is a calibrated grey ladder from `#ededed` hairline-cool to `#171717` ink, with thin black-on-white typography doing most of the visual work.

Typography runs **Circular** at weight 500 for display and 400 for body. The display tier uses tight negative letter-spacing (-1.92px at 64px) to pull the rounded humanist letterforms into editorial density. There's no atmospheric gradient, no full-bleed photography, no dark-canvas marketing track — the brand commits to white.

The product itself appears as composited UI screenshots on every page: dashboard tables, SQL editors, query builders, log streams. These screenshots are the brand's argument. They sit inside `{rounded.lg}` 12px containers with subtle 1px hairlines, often arranged 2-up or in a floating "stacked panes" composition above the hero band.

**Key Characteristics:**
- Single emerald primary (`{colors.primary}` `#3ecf8e`) as the only chromatic event; everything else is monochrome.
- White canvas marketing track with greyscale hierarchy from `{colors.hairline-cool}` to `{colors.ink}`.
- Custom humanist sans display tier at weight 500 with negative letter-spacing of -1.92px to -0.42px.
- Composited product UI screenshots (dashboard, SQL editor, log stream) are the dominant decorative element — never photography, never illustrations.
- Tight 6px / 8px button radii — square-ish, technical, never pill-shaped.
- Code blocks rendered in deep `{colors.canvas-night}` (`#1c1c1c`) with monospace inline code; the brand's developer DNA is visible in every snippet.
- Pricing tiers use a dark inverted `{colors.canvas-night}` featured tier, not a green one — the green is reserved for buttons and dot accents.


<!-- source:end -->

</details>

## 配色

> **Source pages:** home (`/`), `/database`, `/partners/integrations`, `/partners/integrations/powersync`, `/solutions/ai-builders`, `/pricing`.

### 品牌和 强调色
- **翡翠** (`{colors.primary}` — `#3ecf8e`:签名的CTA颜色. 填充按钮背景,品牌字号强调色,点指标.
- **翡翠深处** (`{colors.primary-deep}` — `#24b47e`:按下一级升降机.
- **翡翠软** (`{colors.primary-soft}` — `#4ade80`:图音和产品UI中使用的轻度翡翠.
- **紫色铜色** (`{colors.accent-purple}` — `#6b01c2`:整合标志和图表点中使用的罕见强调色;从不扣.
- **紫色仙乐** (`{colors.accent-violet}` — `#644fc1`: 副强调色与强调色紫色相同的角色.
- **黄褐色** (`{colors.accent-yellow}` — `#ffdb13`:仅图强调色/状态指标.
- **粉红/ 红褐色/ 印地哥/ 番茄**: 保留用于集成标志和稀有图表亮点,绝不作为系统颜色.

### 表面
- **页面底色** (`{colors.canvas}` — `#ffffff`: 默认页面背景.
- **软画帘** (`{colors.canvas-soft}` — `#fafafa`: 用于交替的节带的短线线条。
- **风景之夜** (`{colors.canvas-night}` — `#1c1c1c`:深近黑色,用于代码块,仪表板模型,特色定价等级.
- **夜幕轻柔** (`{colors.canvas-night-soft}` — `#202020`:为巢状铬而略升黑.
- **细边线** (`{colors.hairline}` — `#dfdfdf`): 1px 纸牌和桌子上的边框。
- **发条坚固** (`{colors.hairline-strong}` — `#c7c7c7`: 稍暗的边框用于强调.
- **发条酷** (`{colors.hairline-cool}` — `#ededed`) / **发条酷 2** (`#efefef`) / **发条酷 3** (`#d4d4d4`:品牌灰色梯形用于精细的铬工作.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — `#171717`:默认的体文字,近黑,从不纯.
- **墨水中学** (`{colors.ink-secondary}` — `#212121`: 稍凉近黑,以体力为重.
- **墨水哑声** (`{colors.ink-mute}` — `#707070`: 副文本和助手副本.
- **Ink Mute 2** (`{colors.ink-mute-2}` — `#9a9a9a`): Tertiary text.
- **墨水风云** (`{colors.ink-faint}` — `#b2b2b2`: 已禁用/占位符文本。
- **小学** (`{colors.on-primary}` — `#171717`:翡翠初填上文字——近黑而非白色,按钮读作带有暗型的"升"表面,而非彩色芯片.
- **黑暗时** (`{colors.on-dark}` — `#ffffff`: 打开文本 canvas-night 表面, 显示


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Colors

> **Source pages:** home (`/`), `/database`, `/partners/integrations`, `/partners/integrations/powersync`, `/solutions/ai-builders`, `/pricing`.

### Brand & Accent
- **Emerald** (`{colors.primary}` — `#3ecf8e`): The signature CTA color. Filled-button background, brand wordmark accent, dot indicator.
- **Emerald Deep** (`{colors.primary-deep}` — `#24b47e`): Pressed-state lift of the primary.
- **Emerald Soft** (`{colors.primary-soft}` — `#4ade80`): Lighter emerald used in chart accents and product UI.
- **Accent Purple** (`{colors.accent-purple}` — `#6b01c2`): Rare accent used in integration logos and chart points; never a button.
- **Accent Violet** (`{colors.accent-violet}` — `#644fc1`): Secondary accent in the same role as accent purple.
- **Accent Yellow** (`{colors.accent-yellow}` — `#ffdb13`): Chart accent / status indicator only.
- **Accent Pink / Crimson / Indigo / Tomato**: Reserved for integration logos and rare chart highlights, never as system colors.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Default page background.
- **Canvas Soft** (`{colors.canvas-soft}` — `#fafafa`): Barely-tinted off-white for alternating section bands.
- **Canvas Night** (`{colors.canvas-night}` — `#1c1c1c`): Deep near-black used in code blocks, dashboard mockups, featured pricing tier.
- **Canvas Night Soft** (`{colors.canvas-night-soft}` — `#202020`): Slightly lifted dark for nested chrome.
- **Hairline** (`{colors.hairline}` — `#dfdfdf`): 1px borders on cards and tables.
- **Hairline Strong** (`{colors.hairline-strong}` — `#c7c7c7`): Slightly darker border for emphasis.
- **Hairline Cool** (`{colors.hairline-cool}` — `#ededed`) / **Hairline Cool 2** (`#efefef`) / **Hairline Cool 3** (`#d4d4d4`): The brand's grey ladder for fine chrome work.

### Text
- **Ink** (`{colors.ink}` — `#171717`): Default body text. Near-black, never pure.
- **Ink Secondary** (`{colors.ink-secondary}` — `#212121`): Slightly cooler near-black for body emphasis.
- **Ink Mute** (`{colors.ink-mute}` — `#707070`): Secondary text and helper copy.
- **Ink Mute 2** (`{colors.ink-mute-2}` — `#9a9a9a`): Tertiary text.
- **Ink Faint** (`{colors.ink-faint}` — `#b2b2b2`): Disabled / placeholder text.
- **On Primary** (`{colors.on-primary}` — `#171717`): Text on the emerald primary fill — near-black, not white. The button reads as a "lit" surface with dark type, not a colored chip.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): Text on canvas-night surfaces.


<!-- source:end -->

</details>

## 字体排版

### 字体家族

显示和UI级是 **Circular** 由Lineto制作的专有几何人文主义的圣歌。 `'Helvetica Neue', Helvetica, Arial`.

For maximum brand fidelity when Circular isn't licensed, use **Inter** (open-source via Google Fonts) at weight 500 for display with `letter-spacing: -1.92px` at 64px. Inter is the closest open-source analogue to Circular's geometric humanist character.

代码块使用 **系统单体** (`ui-monospace`,与 Menlo / Monaco / Consolas 倒计时).

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 64px | 500 | 1.1 | -1.92px | 首屏头条 |
| `{typography.display-xl}` | 48px | 500 | 1.1 | -1.44px | 打开区域器 |
| `{typography.display-lg}` | 36px | 500 | 1.15 | -0.72px | 分节/定价等级 |
| `{typography.display-md}` | 28px | 500 | 1.2 | -0.42px | 牌名标题 |
| `{typography.heading-lg}` | 22px | 500 | 1.2 | 0 | 缩进标题 |
| `{typography.heading-md}` | 18px | 500 | 1.4 | 0 | 款次标题 |
| `{typography.body-lg}` | 18px | 400 | 1.55 | 0 | 营销机构牵头 |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 默认 UI 天体 |
| `{typography.button-md}` | 14px | 500 | 1.0 | 0 | 按钮标签 |
| `{typography.caption}` | 13px | 400 | 1.45 | 0 | 帮助者,脚注 |
| `{typography.micro}` | 12px | 400 | 1.45 | 0 | 胶囊形标签,精细打印 |
| `{typography.code}` | 14px | 400 | 1.5 | 0 | 代码块内容 |

### 原则
- **字重 500 横跨显示。** 中量级读作是工程设计,而不是装饰.
- **显示中负追踪 。** -1.92px 时 间 64px 按比例缩小——将圆形的人文主义字母格式收紧成编辑密度.
- **单曲为代码.** 系统单家庭(Menlo / Monaco)——无专有单网福特.

### Note on Font Substitutes
Circular is proprietary. Use **Inter** at weight 500 with `letter-spacing: -1.92px` for display tiers. **Geist Sans** (open-source from Vercel) is another close alternative for both display and body. Avoid Helvetica defaults — they're heavier and lack the geometric warmth.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Typography

### Font Family

The display and UI tier is **Circular** — a proprietary geometric humanist sans by Lineto. Fallback chain: `'Helvetica Neue', Helvetica, Arial`.

For maximum brand fidelity when Circular isn't licensed, use **Inter** (open-source via Google Fonts) at weight 500 for display with `letter-spacing: -1.92px` at 64px. Inter is the closest open-source analogue to Circular's geometric humanist character.

Code blocks use **system mono** (`ui-monospace`, with Menlo / Monaco / Consolas fallbacks).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 64px | 500 | 1.1 | -1.92px | Hero headline |
| `{typography.display-xl}` | 48px | 500 | 1.1 | -1.44px | Section opener |
| `{typography.display-lg}` | 36px | 500 | 1.15 | -0.72px | Sub-section / pricing tier |
| `{typography.display-md}` | 28px | 500 | 1.2 | -0.42px | Card title |
| `{typography.heading-lg}` | 22px | 500 | 1.2 | 0 | Compact heading |
| `{typography.heading-md}` | 18px | 500 | 1.4 | 0 | Section sub-heading |
| `{typography.body-lg}` | 18px | 400 | 1.55 | 0 | Marketing body lead |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default UI body |
| `{typography.button-md}` | 14px | 500 | 1.0 | 0 | Button label |
| `{typography.caption}` | 13px | 400 | 1.45 | 0 | Helper, footnote |
| `{typography.micro}` | 12px | 400 | 1.45 | 0 | Pill label, fine print |
| `{typography.code}` | 14px | 400 | 1.5 | 0 | Code block content |

### Principles
- **Weight 500 across display.** Mid-weight reads as engineered, not decorative.
- **Negative tracking on display.** -1.92px at 64px scaling proportionally down — tightens the rounded humanist letterforms into editorial density.
- **Mono for code.** System mono families (Menlo / Monaco) — no proprietary mono webfont.

### Note on Font Substitutes
Circular is proprietary. Use **Inter** at weight 500 with `letter-spacing: -1.92px` for display tiers. **Geist Sans** (open-source from Vercel) is another close alternative for both display and body. Avoid Helvetica defaults — they're heavier and lack the geometric warmth.


<!-- source:end -->

</details>

## 布局

### 间距系统
- **基地单位**: 8px (与 2 / 4 / 12 工作需要的子脚趾).
- **脚本**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px.
- **分区编栏**: 64–96px 市场营销表面。
- **Card internal padding**: 32px on feature/pricing cards.

### 网格容器( C)
- 销售页面中心a ~1280px 容器没有边缘血浆;该品牌将内容保留在盒子内。
- Pricing collapses 4-up → 2-up → 1-up at 1024 / 768 breakpoints.
- 产品 UI 模拟堆栈 2- 在同一容器内作为重叠的窗体上方或制成。

### 白空间哲学
品牌用大方的 64–96px 部分加固,不带大气梯度填充空间——白色页面底色是设计。复合产品UI模型将部分拆解,而不需要装饰。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Layout

### Spacing System
- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens for fine work).
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px.
- **Section padding**: 64–96px on marketing surfaces.
- **Card internal padding**: 32px on feature/pricing cards.

### Grid & Container
- Marketing pages center in a ~1280px container with no edge-bleed; the brand keeps content inside the box.
- Pricing collapses 4-up → 2-up → 1-up at 1024 / 768 breakpoints.
- Product UI mockups stack 2-up or render as overlapping panes inside the same container.

### Whitespace Philosophy
The brand uses generous 64–96px section padding without atmospheric gradients filling the space — the white canvas is the design. The composited product UI mockups break up sections without requiring decoration.


<!-- source:end -->

</details>

## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 | 平缓 1px 细边线 | 默认牌 |
| 1 | `box-shadow: 0 1px 3px rgba(0,0,0,0.06)` | 底卡提携 |
| 2 | `box-shadow: 0 8px 24px rgba(0,0,0,0.08)` | 浮动复合 UI 模型 |
| 3 | `box-shadow: 0 16px 48px rgba(0,0,0,0.12)` | 深海潮汐叠加 |

### 装饰性深度
The brand's depth is **product UI mockups** rather than gradients. Stacked dashboard / SQL editor / log panes composite together with subtle Level 2 shadows to suggest spatial hierarchy.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat, 1px hairline | Default cards |
| 1 | `box-shadow: 0 1px 3px rgba(0,0,0,0.06)` | Subtle card lift |
| 2 | `box-shadow: 0 8px 24px rgba(0,0,0,0.08)` | Floating composited UI mockups |
| 3 | `box-shadow: 0 16px 48px rgba(0,0,0,0.12)` | Modal overlays, deep elevation |

### Decorative Depth
The brand's depth is **product UI mockups** rather than gradients. Stacked dashboard / SQL editor / log panes composite together with subtle Level 2 shadows to suggest spatial hierarchy.


<!-- source:end -->

</details>

## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | 格式输入、 发条标签 |
| `{rounded.sm}` | 6px | 按钮(品牌的签名按钮半径),代码块 |
| `{rounded.md}` | 8px | 压缩卡、 提示 |
| `{rounded.lg}` | 12px | 定价卡、特征卡、产品模型 |
| `{rounded.xl}` | 16px | 大型容器铬模块对话框 |
| `{rounded.full}` | 9999px | 药牌、假人 |

### 摄影几何
The brand uses minimal photography. Customer logo strips display wordmarks at uniform height (~24–32px) in greyscale; case-study cards (rare) use 4:3 photos inset in `{rounded.lg}` containers.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Form inputs, hairline tags |
| `{rounded.sm}` | 6px | Buttons (the brand's signature button radius), code blocks |
| `{rounded.md}` | 8px | Compact cards, alerts |
| `{rounded.lg}` | 12px | Pricing cards, feature cards, product mockups |
| `{rounded.xl}` | 16px | Modal dialogs, large container chrome |
| `{rounded.full}` | 9999px | Pill tags, avatars |

### Photography Geometry
The brand uses minimal photography. Customer logo strips display wordmarks at uniform height (~24–32px) in greyscale; case-study cards (rare) use 4:3 photos inset in `{rounded.lg}` containers.


<!-- source:end -->

</details>

## 组件

### 按钮

**`button-primary-green`** - 签署CTA。
- Background `{colors.primary}`, text `{colors.on-primary}` (near-black, NOT white), type `{typography.button-md}`, padding `{spacing.sm} {spacing.lg}` (8px 16px), rounded `{rounded.sm}` 6px.
- Pressed state `button-primary-green-pressed` shifts to `{colors.primary-deep}`.

**`button-secondary-outline`** ——概述白色上的替代方案.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-strong}` border, same shape.

**`button-on-dark`** 用于暗表面/ code-block 反恐行动
- Background `{colors.canvas-night}`, text `{colors.on-dark}`, same shape.

**`button-link`** ——只使用文本的内置按钮.
- Transparent 文本, 文本 `{colors.ink}` 交付 `{typography.button-md}`不准贴垫,在悬浮上贴上细微的下划线

### 纸牌和集装箱

**`card-feature-light`** ——特色卡白色.
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}` 12px, 1px `{colors.hairline}` border.

**`card-pricing`** ——标准定价等级.
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`, 1px `{colors.hairline}` border. Title in `{typography.heading-lg}`, price in `{typography.display-md}`, body in `{typography.body-md}`, CTA `button-primary-green` pinned bottom.

**`card-pricing-featured`** 反向的黑暗的层次。
- Background `{colors.canvas-night}`, text `{colors.on-dark}`, otherwise identical structure.

**`card-feature-dark`** ——带有深黑填充的特征卡.
- Background `{colors.canvas-night}`, text `{colors.on-dark}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`. Used for code-heavy feature explanations.

**`code-block`** - 密码片段容器
- Background `{colors.canvas-night}`, text `{colors.on-dark}` rendered in `{typography.code}`. Padding `{spacing.lg}` 16px, rounded `{rounded.sm}` 6px.

### 输入表单( F)

**`text-input`** ——标准表单输入.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (8px 12px), rounded `{rounded.sm}` 6px, 1px `{colors.hairline}` border.

### 导航

**`nav-bar-light`** ——顶端导航横跨站点.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.xl}`. Logo on the left, primary nav center, "Sign In" link + filled `button-primary-green` on the right.

### 胶囊形、标签和芯片

**`pill-tag-green`** ——小绿胶囊形用于"新"或特色指标.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.micro}`, padding `{spacing.xxs} {spacing.sm}`, rounded `{rounded.full}`.

**`pill-tag-soft`** ——中性胶囊形在光面上.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, otherwise same shape.

### 签名组件

**复合产品UI 杂包** ——多层仪表板/SQL编辑器/日志窗格复合材料,含微妙的等级 2 阴影。产品是品牌的论据;模型总是坐在白色的页面底色上,没有周围的装饰。

**`link-on-light`** ——内置机身副本链接.
- 文本 `{colors.ink}` 交付 `{typography.body-md}` 以一根横线为柱子。

**`footer-light`** ——全站页脚.
- Background `{colors.canvas}`, text `{colors.ink-mute}`, type `{typography.caption}`, padding `{spacing.huge} {spacing.xl}` (64px 24px). Holds 4–5 columns of link groups, social icons, and a small legal row.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Components

### Buttons

**`button-primary-green`** — the signature CTA.
- Background `{colors.primary}`, text `{colors.on-primary}` (near-black, NOT white), type `{typography.button-md}`, padding `{spacing.sm} {spacing.lg}` (8px 16px), rounded `{rounded.sm}` 6px.
- Pressed state `button-primary-green-pressed` shifts to `{colors.primary-deep}`.

**`button-secondary-outline`** — outline alternative on white.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-strong}` border, same shape.

**`button-on-dark`** — used on dark surfaces / code-block CTAs.
- Background `{colors.canvas-night}`, text `{colors.on-dark}`, same shape.

**`button-link`** — text-only inline button.
- Transparent background, text `{colors.ink}` rendered in `{typography.button-md}`, no padding, with a subtle underline on hover.

### Cards & Containers

**`card-feature-light`** — feature card on white.
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}` 12px, 1px `{colors.hairline}` border.

**`card-pricing`** — standard pricing tier.
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`, 1px `{colors.hairline}` border. Title in `{typography.heading-lg}`, price in `{typography.display-md}`, body in `{typography.body-md}`, CTA `button-primary-green` pinned bottom.

**`card-pricing-featured`** — inverted dark featured tier.
- Background `{colors.canvas-night}`, text `{colors.on-dark}`, otherwise identical structure.

**`card-feature-dark`** — feature card with deep dark fill.
- Background `{colors.canvas-night}`, text `{colors.on-dark}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`. Used for code-heavy feature explanations.

**`code-block`** — code snippet container.
- Background `{colors.canvas-night}`, text `{colors.on-dark}` rendered in `{typography.code}`. Padding `{spacing.lg}` 16px, rounded `{rounded.sm}` 6px.

### Inputs & Forms

**`text-input`** — standard form input.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (8px 12px), rounded `{rounded.sm}` 6px, 1px `{colors.hairline}` border.

### Navigation

**`nav-bar-light`** — top nav across the site.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.xl}`. Logo on the left, primary nav center, "Sign In" link + filled `button-primary-green` on the right.

### Pills, Tags, and Chips

**`pill-tag-green`** — small green pill used for "new" or featured indicators.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.micro}`, padding `{spacing.xxs} {spacing.sm}`, rounded `{rounded.full}`.

**`pill-tag-soft`** — neutral pill on light surfaces.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, otherwise same shape.

### Signature Components

**Composited Product UI Mockups** — multi-layer dashboard / SQL editor / log pane composites with subtle Level 2 shadows. The product is the brand's argument; mockups always sit on white canvas with no surrounding decoration.

**`link-on-light`** — inline links in body copy.
- Text `{colors.ink}` rendered in `{typography.body-md}` with a persistent underline.

**`footer-light`** — site-wide footer.
- Background `{colors.canvas}`, text `{colors.ink-mute}`, type `{typography.caption}`, padding `{spacing.huge} {spacing.xl}` (64px 24px). Holds 4–5 columns of link groups, social icons, and a small legal row.


<!-- source:end -->

</details>

## 设计建议与禁忌

### 执行
- 准备金 `{colors.primary}` 填充的CTA和单词标记强调色的翡翠——它应该看起来比较节制。
- 显示字重级 500 负数 letter-spacing ——工程紧凑是品牌的一部分.
- 使用 `{rounded.sm}` 6px 扣子的形状是平方的萝卜 从来不是胶囊形
- 内部的复合产品UI模型 `{rounded.lg}` 带有微妙级的容器 2 阴.
- Use near-black `{colors.ink}` on the emerald button (not white) — the green reads as "lit" with dark type, which is the brand's idiosyncratic choice.
- Apply system mono for every code block.

### Don't
- Don't introduce additional accent colors as system colors — purples, yellows, and pinks belong inside chart points and integration logos only.
- Don't bump display weight above 500 — the brand's calibrated mid-weight breaks at 600+.
- Don't use pill-shaped buttons; the brand's button radius is square-ish 6px.
- 翡翠按钮上不要使用白文字——品牌特意使用绿色的近黑文字.
- Don't add atmospheric gradients to hero bands — the white canvas is the design.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Do's and Don'ts

### Do
- Reserve `{colors.primary}` emerald for filled CTAs and the wordmark accent — it should appear sparingly.
- Render display tiers at weight 500 with negative letter-spacing — the engineered tightness is part of the brand.
- Use `{rounded.sm}` 6px for buttons — square-ish radii, never pill-shaped.
- Composite product UI mockups inside `{rounded.lg}` containers with subtle Level 2 shadows.
- Use near-black `{colors.ink}` on the emerald button (not white) — the green reads as "lit" with dark type, which is the brand's idiosyncratic choice.
- Apply system mono for every code block.

### Don't
- Don't introduce additional accent colors as system colors — purples, yellows, and pinks belong inside chart points and integration logos only.
- Don't bump display weight above 500 — the brand's calibrated mid-weight breaks at 600+.
- Don't use pill-shaped buttons; the brand's button radius is square-ish 6px.
- Don't use white text on the emerald button — the brand specifically uses near-black on green.
- Don't add atmospheric gradients to hero bands — the white canvas is the design.


<!-- source:end -->

</details>

## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 宽 | ≥ 1440px | 集装箱全宽;产品模型全尺寸 |
| Desktop | 1024–1440px | Default content max-width; pricing 4-up |
| 平板 | 768–1023px | 定价 2- 上; 模拟简化为单个面板 |
| 手机 | < 768px | 定价 1- 上; 汉堡导航; 显示滴 64 → 36px |

### 触控区域
- 按钮被击中 ≥ 36×36px 移动; 垂直加载天平,以保持WCAG AA的最小值。
- 窗体字段不变 36px 最低身高。

### 折叠战略
- 显示阶梯级 64 → 48 → 36 → 28 → 22px.
- 产品UI模型简化为移动上单一的主面板.
- Pricing tiers stair-step 4-up → 2-up → 1-up; dark featured tier always distinguished.

### 图像行为
产品 UI 模型使用 `srcset` 与桌面/移动作物;移动作物侧重于最可操作的内部面板.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | Full container width; product mockups at full scale |
| Desktop | 1024–1440px | Default content max-width; pricing 4-up |
| Tablet | 768–1023px | Pricing 2-up; mockups simplify to single panel |
| Mobile | < 768px | Pricing 1-up; hamburger nav; display drops 64 → 36px |

### Touch Targets
- Buttons hit ≥ 36×36px on mobile; vertical padding scales up to maintain WCAG AA minimum.
- Form fields stay at 36px minimum height.

### Collapsing Strategy
- Display tiers stair-step 64 → 48 → 36 → 28 → 22px.
- Product UI mockups simplify to a single primary panel on mobile.
- Pricing tiers stair-step 4-up → 2-up → 1-up; dark featured tier always distinguished.

### Image Behavior
Product UI mockups use `srcset` with desktop / mobile crops; mobile crops focus on the most actionable inner panel.


<!-- source:end -->

</details>

## 迭代指南

1. 一次集中关注一个组件.
2. 参考组件名称和符号直接 。
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后。
4. 默认正文为 `{typography.body-md}`; 使用 `{typography.code}` 任何开发者 的片断。
5. 保持翡翠稀缺;每个景点一个填充的绿色按钮.
6. 白帆承诺是不可谈判的——增加大气背景打破品牌.

<details>
<summary>英文原文</summary>

<!-- source:body -->
## Iteration Guide

1. Focus on ONE component at a time.
2. Reference component names and tokens directly.
3. Run `npx @google/design.md lint DESIGN.md` after edits.
4. Default body to `{typography.body-md}`; use `{typography.code}` for any developer-facing snippet.
5. Keep emerald scarce; one filled green button per viewport.
6. The white-canvas commitment is non-negotiable — adding atmospheric backdrops breaks the brand.

<!-- source:end -->

</details>

## 设计词元原值

An inspired interpretation of Supabase's design language — an open-source database platform built on a clean white-and-near-black system with a single signature emerald-green CTA, a custom humanist sans display tier, and dense product UI mockups composited above the hero. The brand reads as quietly technical: minimal chrome, a near-monochrome palette, and the green primary acting as the only chromatic event on the page.

```yaml
---
version: alpha
name: Supabase-design-analysis
description: An inspired interpretation of Supabase's design language — an open-source database platform built on a clean white-and-near-black system with a single signature emerald-green CTA, a custom humanist sans display tier, and dense product UI mockups composited above the hero. The brand reads as quietly technical: minimal chrome, a near-monochrome palette, and the green primary acting as the only chromatic event on the page.

colors:
  primary: "#3ecf8e"
  primary-deep: "#24b47e"
  primary-soft: "#4ade80"
  ink: "#171717"
  ink-secondary: "#212121"
  ink-mute: "#707070"
  ink-mute-2: "#9a9a9a"
  ink-faint: "#b2b2b2"
  on-primary: "#171717"
  on-dark: "#ffffff"
  canvas: "#ffffff"
  canvas-soft: "#fafafa"
  canvas-night: "#1c1c1c"
  canvas-night-soft: "#202020"
  hairline: "#dfdfdf"
  hairline-strong: "#c7c7c7"
  hairline-cool: "#ededed"
  hairline-cool-2: "#efefef"
  hairline-cool-3: "#d4d4d4"
  accent-purple: "#6b01c2"
  accent-violet: "#644fc1"
  accent-purple-soft: "#eddbf9"
  accent-yellow: "#ffdb13"
  accent-tomato: "#ff2201"
  accent-pink: "#c7007e"
  accent-indigo: "#054cff"
  accent-crimson: "#e2005a"

typography:
  display-xxl:
    fontFamily: "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.92px
  display-xl:
    fontFamily: "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.44px
  display-lg:
    fontFamily: "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.72px
  display-md:
    fontFamily: "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.42px
  heading-lg:
    fontFamily: "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  heading-md:
    fontFamily: "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button-md:
    fontFamily: "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  micro:
    fontFamily: "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  code:
    fontFamily: "ui-monospace, Menlo, Monaco, Consolas, 'Liberation Mono', monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  huge: 64px

components:
  button-primary-green:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-primary-green-pressed:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-secondary-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-on-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  card-feature-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pricing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pricing-featured:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-feature-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  code-block:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code}"
    rounded: "{rounded.sm}"
    padding: 16px
  pill-tag-green:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: 2px 8px
  pill-tag-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: 2px 8px
  nav-bar-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  link-on-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  footer-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 24px
---
```
