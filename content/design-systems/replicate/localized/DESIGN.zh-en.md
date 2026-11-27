# Replicate · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。



<details>
<summary>英文原文</summary>

<!-- source:body -->


<!-- source:end -->

</details>

## 概览

Replicate 是一个开发工具平台, 里面有艺术zine的灵魂。 Name
公共营销表面坐落在暖奶油布上(`{colors.canvas}` —
`#f9f7f3`而不是典型AI的白色或近黑色默认
并且,单一的决定会把其他一切都体现:
摄影读作编辑,代号井读作印刷的拉引号,
品牌橙色( 3)`{colors.primary}` — `#ea2804`感觉像一个邮票
而不是通知。

排版是负载式装饰. **rb-freigeist-neue** — a
粗重、略微凝固的杂乱无章的物体——在尺寸上出现,最多 128px 首屏的战斗
带子,紧紧的 `lineHeight: 1.0` 和负 letter-spacing 能够
multi-line headlines pack into geometric blocks. The companion family,
**basier-square**,在“元数据”中,注意身体、按钮标签和元数据。
14–18px 范围。 **JetBrains Mono** 携带每个代码,命令,和
例:三户,三职,无重叠.

默认的奶油页面底色之间的页节奏周期, 粗体全血橙色
首屏乐队,还有 `{colors.surface-dark}` (`#202020`) 区域,主机为:
密码故事——"如何运作"的走过。曲线是故意的,而且
软度:每个交互式表面(按钮、输入、标记、变形符)使用
`{rounded.full}`,而内容卡和代码井则升级到 `{rounded.md}`
或 减 减 `{rounded.lg}`上面没有尖角 Replicate;系统读取
以友好的精确度为标准。

**关键特征 :**
- 暖奶油页面底色( Name`{colors.canvas}` — `#f9f7f3`)取代典型的白色背景,配对为 `{colors.surface-bone}` 用来换套卡的
- 热橙色( 3, 4, 5, 5, 5, 5, 5)`{colors.primary}` — `#ea2804`)是保留给主CTA,首屏乐队,以及内置链接颜色. Never decorative.
- 显示标题运行大范围... `{typography.display-xxl}` 时 间 128px 首屏乐队和 `{typography.display-xl}` 时 间 72px 打开区域的人——紧凑 `lineHeight: 1.0` 和负 letter-spacing.
- Three-family typography stack: `rb-freigeist-neue` for display, `basier-square` for UI/body, `jetbrains-mono` for code.
- Every interactive element is fully rounded (`{rounded.full}` 9999px) — buttons, inputs, badges, avatars — while content cards step to `{rounded.md}` 10px.
- 暗码井( 暗码井 )`{colors.surface-dark}` ) 坐在奶油页面底色内作为全血读取表面,模仿印刷拉动引号.
- 节奏:奶油 橙色首屏 奶油 暗暗的密码-故事乐队 奶油 黑色脚步手.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Overview

Replicate is a developer-tools platform with the soul of an art zine. The
public marketing surfaces sit on a warm cream canvas (`{colors.canvas}` —
`#f9f7f3`) rather than the white-or-near-black default of typical AI
infrastructure sites, and that single decision colours everything else:
photography reads as editorial, code wells read as printed pull-quotes, and
the brand orange (`{colors.primary}` — `#ea2804`) feels like a stamp rather
than a notification.

The typography is the load-bearing decoration. **rb-freigeist-neue** — a
heavy, slightly condensed grotesque — appears at sizes up to 128px in hero
bands, with a tight `lineHeight: 1.0` and negative letter-spacing that lets
multi-line headlines pack into geometric blocks. The companion family,
**basier-square**, takes care of body, button labels, and metadata in the
14–18px range. **JetBrains Mono** carries every code well, command, and
example. Three families, three jobs, no overlap.

Page rhythm cycles between a default cream canvas, a bold full-bleed orange
hero band, and a `{colors.surface-dark}` (`#202020`) section that hosts the
code stories — the "how it works" walkthrough. Curves are intentional and
soft: every interactive surface (buttons, inputs, tags, avatars) uses
`{rounded.full}`, while content cards and code wells step up to `{rounded.md}`
or `{rounded.lg}`. There are no sharp corners on Replicate; the system reads
as friendly precision.

**Key Characteristics:**
- A warm cream canvas (`{colors.canvas}` — `#f9f7f3`) replaces the typical white background, paired with `{colors.surface-bone}` for inset cards.
- Hot orange (`{colors.primary}` — `#ea2804`) is reserved for the primary CTA, the hero band, and inline link colour. Never decorative.
- Display headlines run massive — `{typography.display-xxl}` at 128px in hero bands and `{typography.display-xl}` at 72px on section openers — with tight `lineHeight: 1.0` and negative letter-spacing.
- Three-family typography stack: `rb-freigeist-neue` for display, `basier-square` for UI/body, `jetbrains-mono` for code.
- Every interactive element is fully rounded (`{rounded.full}` 9999px) — buttons, inputs, badges, avatars — while content cards step to `{rounded.md}` 10px.
- Dark code wells (`{colors.surface-dark}` background) sit inside the cream canvas as full-bleed reading surfaces, mimicking print pull-quotes.
- Section rhythm: cream → orange hero → cream → dark code-story band → cream → black footer.


<!-- source:end -->

</details>

## 配色

### 品牌和 强调色
- **Replicate 橙色** (`{colors.primary}` — `#ea2804`:品牌强调色,保留了主CTA,首屏乐队背景,以及内含链接色彩. 将邮票当作——每个景点最多一个橙色元素.
- **橙色按键** (`{colors.primary-deep}` — `#c01f00`: 活动/压力状态 `{colors.primary}` —— 已经使用 `{component.button-primary-pressed}`.
- **首屏的光辉** (`{colors.hero-glow}` — `#ff6a3d`:首屏副本后面的射线大气网中出现的较轻的橙色.
- **粉红首屏** (`{colors.hero-pink}` — `#f4a8a0`: 一种温暖的粉红色洗涤,在首屏乐队向奶油过渡之前,可以软化其底部边缘.
- **On-Primary** (`{colors.on-primary}` — `#ffffff`: 标签颜色, 上方 `{colors.primary}` 表面, 显示

### 表面
- **页面底色** (`{colors.canvas}` — `#f9f7f3`:默认的页背景. 温暖的奶油,永远不纯白色.
- **表面骨头** (`{colors.surface-bone}` — `#f3f0e8`:半步深奶油,用于套卡组和特征带.
- **表面卡片** (`{colors.surface-card}` — `#ffffff`:纯白用于单个的型号卡,搜索输入,和定价等级——唯一出现白色的地方.
- **表面暗色( T)** (`{colors.surface-dark}` — `#202020`:代码井,特色定价等级,以及"如何工作"的走行乐队.
- **地表深处** (`{colors.surface-deep}` — `#000000`:页脚页面底色和套装 code-tab 内侧脱光 `{component.code-block}`.
- **细边线** (`{colors.hairline}` — `rgba(32,32,32,0.12)`: 低相位调 1px 奶油表面的分化器。
- **发条坚固** (`{colors.hairline-strong}` — `#202020`:按钮大纲,焦点输入,以及结构分隔符.

### 文本
- **Ink** (`{colors.ink}` — `#202020`): primary text colour. Notably warmer than `#000000`, matching the cream canvas.
- **体质** (`{colors.body}` — `#3a3a3a`:长式体型复制品,墨水会觉得太重 18px+线长.
- **木炭矿** (`{colors.charcoal}` — `#575757`: 标题,元数据,二级导航.
- **静音** (`{colors.mute}` — `#646464`: 支持文本和不活跃标签.
- **灰尘** (`{colors.ash}` — `#8d8d8d`:第三版文本,占位符副本.
- **石头** (`{colors.stone}` — `#bbbbbb`: 已禁用前景,中性图标大纲.
- **On-Dark** (`{colors.on-dark}` — `#fcfcfc`): primary text on `{colors.surface-dark}` and `{colors.surface-deep}`.
- **On-Dark 静音** (`{colors.on-dark-mute}` — `rgba(252,252,252,0.72)`: 暗区中的二次文字;保留非白的感受,而不纯白的流行.

### 语义
- **成功** (`{colors.badge-success}` — `#2b9a66`:在模片上内置成功徽章和"运行"状态胶囊形.
- **链接** (`{colors.link}` — `#ea2804`:内置链接颜色——与主橙色相同,有意将链接拉入品牌强调色.
- **焦点环** (`{colors.ring-focus}` — `rgba(59,130,246,0.5)`: 交互式元素上的默认焦点环.
- **GitHub 暗色( 暗色)** (`{colors.github-dark}` — `#24292e`: 计数器 GitHub- 品牌按钮表面( 切换品牌与目的匹配) GitHub自己的纪念物


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Colors

### Brand & Accent
- **Replicate Orange** (`{colors.primary}` — `#ea2804`): the brand accent. Reserved for the primary CTA, hero band background, and inline link colour. Treat as a stamp — one orange element per viewport at most.
- **Orange Pressed** (`{colors.primary-deep}` — `#c01f00`): the active/pressed state of `{colors.primary}` — used on `{component.button-primary-pressed}`.
- **Hero Glow** (`{colors.hero-glow}` — `#ff6a3d`): the lighter orange that appears in the radial atmospheric mesh behind the hero copy.
- **Hero Pink** (`{colors.hero-pink}` — `#f4a8a0`): a warm pink wash that softens the bottom edge of the hero band before it transitions to cream.
- **On-Primary** (`{colors.on-primary}` — `#ffffff`): label colour on top of `{colors.primary}` surfaces.

### Surface
- **Canvas** (`{colors.canvas}` — `#f9f7f3`): the default page background. Warm cream, never pure white.
- **Surface Bone** (`{colors.surface-bone}` — `#f3f0e8`): a half-step deeper cream used for inset card groups and feature bands.
- **Surface Card** (`{colors.surface-card}` — `#ffffff`): pure white for individual model cards, search inputs, and pricing tiers — the only place white appears.
- **Surface Dark** (`{colors.surface-dark}` — `#202020`): code wells, featured pricing tier, and the "how it works" walkthrough band.
- **Surface Deep** (`{colors.surface-deep}` — `#000000`): footer canvas and the inset code-tab strip inside `{component.code-block}`.
- **Hairline** (`{colors.hairline}` — `rgba(32,32,32,0.12)`): low-contrast 1px dividers on cream surfaces.
- **Hairline Strong** (`{colors.hairline-strong}` — `#202020`): button outlines, focused inputs, and structural separators.

### Text
- **Ink** (`{colors.ink}` — `#202020`): primary text colour. Notably warmer than `#000000`, matching the cream canvas.
- **Body** (`{colors.body}` — `#3a3a3a`): long-form body copy where ink would feel too heavy at 18px+ line lengths.
- **Charcoal** (`{colors.charcoal}` — `#575757`): captions, metadata, secondary nav.
- **Mute** (`{colors.mute}` — `#646464`): supporting text and inactive labels.
- **Ash** (`{colors.ash}` — `#8d8d8d`): tertiary text, placeholder copy.
- **Stone** (`{colors.stone}` — `#bbbbbb`): disabled foreground, neutral icon outlines.
- **On-Dark** (`{colors.on-dark}` — `#fcfcfc`): primary text on `{colors.surface-dark}` and `{colors.surface-deep}`.
- **On-Dark Mute** (`{colors.on-dark-mute}` — `rgba(252,252,252,0.72)`): secondary text in dark regions; preserves the off-white feel without pure white pop.

### Semantic
- **Success** (`{colors.badge-success}` — `#2b9a66`): inline success badges and "running" status pills on model cards.
- **Link** (`{colors.link}` — `#ea2804`): inline link colour — same as primary orange, intentionally pulling links into the brand accent.
- **Focus Ring** (`{colors.ring-focus}` — `rgba(59,130,246,0.5)`): the default focus ring on interactive elements.
- **GitHub Dark** (`{colors.github-dark}` — `#24292e`): the GitHub-branded button surface (kept off-brand-on-purpose to match GitHub's own tokens).


<!-- source:end -->

</details>

## 字体排版

### 字体家族

Replicate 故意三家一家人堆积起来:

- **rb-freigeist-neue** ——所有显示大小的专有重型杂耍(30px+),通过紧身的体裁来传递编辑-杂志人格. `lineHeight: 1.0` 和负 letter-spacing.
- **basier-square** ——专有的人文主义者. sans-serif 用于身体、按钮标签、标题和元数据。
- **jetbrains-mono** ——开源. monospace 每一个代码井和内含命令中使用。

When proprietary families cannot be licensed, **Bricolage Grotesque** or **Migra** are credible substitutes for rb-freigeist-neue, and **Geist** or **Inter** can stand in for basier-square. JetBrains Mono is open-source and should always be used directly.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 128px | 700 | 1.0 | -3px | 单首屏"跑AI"/"想象你能建什么"头条,每页一页. |
| `{typography.display-xl}` | 72px | 700 | 1.0 | -1.8px | 区域打开器( “如何工作” ), “比例表” Replicate"). |
| `{typography.display-lg}` | 48px | 700 | 1.0 | -1px | 分节标题,定价等级名称. |
| `{typography.display-md}` | 30px | 600 | 1.2 | -0.5px | 特色卡片标题. |
| `{typography.heading-lg}` | 38.4px | 600 | 0.83 | -0.5px | 紧紧的 basier-square 头条,用于定价和企业首屏。 |
| `{typography.heading-md}` | 24px | 600 | 1.33 | -0.35px | 牌名,型号细节头. |
| `{typography.heading-sm}` | 20px | 600 | 1.4 | -0.3px | 列表章节头目. |
| `{typography.subtitle}` | 18px | 600 | 1.56 | 0 | 显示部分中段落的首字母。 |
| `{typography.body-lg}` | 18px | 400 | 1.56 | 0 | 市场传言. |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 默认身体. |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | 说明,元数据。 |
| `{typography.button-md}` | 16px | 600 | 1.0 | 0 | 默认按钮标签 。 |
| `{typography.button-sm}` | 14px | 600 | 1.0 | 0 | 压缩按钮标签, sub-nav 胶囊形。 |
| `{typography.caption}` | 12px | 400 | 1.33 | 0 | 页脚披露,版权. |
| `{typography.caption-tight}` | 14px | 600 | 1.43 | -0.35px | 定价级行中使用的插图小标题 。 |
| `{typography.code-md}` | 14px | 400 | 1.43 | 0 | 代码块和内置代码. |
| `{typography.code-sm}` | 11px | 400 | 1.5 | 0 | Code-tab 标签和小内含符号。 |

### 原则
- 显示大小控件 `lineHeight: 1.0` (或 减 减 ) 0.83 打开 `{typography.heading-lg}`)所以多行堆栈读作单排字块.
- 负数 letter-spacing 规模较大的比额表——更大类型更紧凑(-3px 时 间 128px 下至( 下至) -0.3px 时 间 20px。身体类型保持 0.
- Body weight sits at 400 across `{typography.body-lg}` and `{typography.body-md}` — never bumped to 500 for emphasis. Emphasis comes from family change (basier-square → rb-freigeist-neue) rather than weight.
- 代码从未设置在 basier-square,即使规模较小—— JetBrains Mono 携带每个字面命令,每个模型弹壳,每个API呼叫.

### Note on Font Substitutes

When the proprietary families are unavailable, clamp display `lineHeight` to 1.0 explicitly and apply a -3% letter-spacing on display-xxl / display-xl to match the original tightness. Substitutes typically render with looser tracking by default.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Typography

### Font Family

Replicate ships a deliberate three-family stack:

- **rb-freigeist-neue** — proprietary heavy grotesque used for all display sizes (30px+). Carries the editorial-magazine personality through tight `lineHeight: 1.0` and negative letter-spacing.
- **basier-square** — proprietary humanist sans-serif used for body, button labels, captions, and metadata.
- **jetbrains-mono** — open-source monospace used in every code well and inline command.

When proprietary families cannot be licensed, **Bricolage Grotesque** or **Migra** are credible substitutes for rb-freigeist-neue, and **Geist** or **Inter** can stand in for basier-square. JetBrains Mono is open-source and should always be used directly.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 128px | 700 | 1.0 | -3px | The single hero "Run AI" / "Imagine what you can build" headline. One per page. |
| `{typography.display-xl}` | 72px | 700 | 1.0 | -1.8px | Section openers ("How it works", "Scale on Replicate"). |
| `{typography.display-lg}` | 48px | 700 | 1.0 | -1px | Sub-section titles, pricing tier names. |
| `{typography.display-md}` | 30px | 600 | 1.2 | -0.5px | Feature card titles. |
| `{typography.heading-lg}` | 38.4px | 600 | 0.83 | -0.5px | Tightly-stacked basier-square headlines, used in pricing and enterprise hero. |
| `{typography.heading-md}` | 24px | 600 | 1.33 | -0.35px | Card titles, model detail headers. |
| `{typography.heading-sm}` | 20px | 600 | 1.4 | -0.3px | List section headers. |
| `{typography.subtitle}` | 18px | 600 | 1.56 | 0 | Lead paragraphs in display sections. |
| `{typography.body-lg}` | 18px | 400 | 1.56 | 0 | Marketing prose. |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body. |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | Captions, metadata. |
| `{typography.button-md}` | 16px | 600 | 1.0 | 0 | Default button label. |
| `{typography.button-sm}` | 14px | 600 | 1.0 | 0 | Compact button label, sub-nav pills. |
| `{typography.caption}` | 12px | 400 | 1.33 | 0 | Footer disclosure, copyright. |
| `{typography.caption-tight}` | 14px | 600 | 1.43 | -0.35px | Emphatic small caption used in pricing tier rows. |
| `{typography.code-md}` | 14px | 400 | 1.43 | 0 | Code blocks and inline code. |
| `{typography.code-sm}` | 11px | 400 | 1.5 | 0 | Code-tab labels and small inline tokens. |

### Principles
- Display sizes hold `lineHeight: 1.0` (or 0.83 on `{typography.heading-lg}`) so multi-line stacks read as single typographic blocks.
- Negative letter-spacing scales with size — bigger types tighten more (-3px at 128px down to -0.3px at 20px). Body type stays at 0.
- Body weight sits at 400 across `{typography.body-lg}` and `{typography.body-md}` — never bumped to 500 for emphasis. Emphasis comes from family change (basier-square → rb-freigeist-neue) rather than weight.
- Code is never set in basier-square, even at small sizes — JetBrains Mono carries every literal command, every model slug, every API call.

### Note on Font Substitutes

When the proprietary families are unavailable, clamp display `lineHeight` to 1.0 explicitly and apply a -3% letter-spacing on display-xxl / display-xl to match the original tightness. Substitutes typically render with looser tracking by default.


<!-- source:end -->

</details>

## 布局

### 间距系统
- **基地单位**: 4px,在工作规模上, 4 / 8 / 16.
- **脚本**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 48px · `{spacing.section}` 96px · `{spacing.band}` 160px.
- Section padding: `{spacing.section}` (96px) vertical between full-width bands; `{spacing.band}` (160px) when a band needs extra editorial breathing room (the hero, the closing "Imagine what you can build" stripe).
- Card internal padding: `{spacing.lg}` (16px) on `{component.model-card}`, `{spacing.xxl}` (32px) on `{component.pricing-tier}`.

### 网格容器( C)
- **最大内容宽度** ≈ 1280px 身体部分, 1440px 首屏乐队的血流满面
- **Model grid** on collections: 4 columns at desktop, 3 at tablet large, 2 at tablet, 1 at mobile.
- **定价**: 3- 以桌面为中心的水平网格,垂直地向下叠加 1024px; 中间的翻转到 `{component.pricing-tier-featured}` (暗反)作为建议选项。
- **代码-故事部分**: a 2- 上拆分 - 叙事副本左,代码右,倒叠到堆叠 < 1024px.

### 白空间哲学
- Whitespace on cream is generous and editorial — sections breathe at 96px and key bands open at 160px so the typography can scale up without feeling cramped.
- Inside cards, the system tightens to 16–32px so model thumbnails, statuses, and metadata sit in a compact list-of-cards rhythm.
- 细边线 `{colors.hairline}` 隔层罩取代奶油表面的阴影;在暗表面, `{colors.divider-dark}` 承担着同等的角色。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Layout

### Spacing System
- **Base unit**: 4px, with the working scale on multiples of 4 / 8 / 16.
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 48px · `{spacing.section}` 96px · `{spacing.band}` 160px.
- Section padding: `{spacing.section}` (96px) vertical between full-width bands; `{spacing.band}` (160px) when a band needs extra editorial breathing room (the hero, the closing "Imagine what you can build" stripe).
- Card internal padding: `{spacing.lg}` (16px) on `{component.model-card}`, `{spacing.xxl}` (32px) on `{component.pricing-tier}`.

### Grid & Container
- **Max content width** ≈ 1280px on body sections, 1440px on hero bands which run full-bleed.
- **Model grid** on collections: 4 columns at desktop, 3 at tablet large, 2 at tablet, 1 at mobile.
- **Pricing**: 3-tier grid centred at desktop, stacking vertically below 1024px; the centre tier flips to `{component.pricing-tier-featured}` (dark inversion) as the recommended option.
- **Code-story sections**: a 2-up split — narrative copy left, code well right — collapsing to stacked at < 1024px.

### Whitespace Philosophy
- Whitespace on cream is generous and editorial — sections breathe at 96px and key bands open at 160px so the typography can scale up without feeling cramped.
- Inside cards, the system tightens to 16–32px so model thumbnails, statuses, and metadata sit in a compact list-of-cards rhythm.
- Hairline `{colors.hairline}` dividers replace shadow on cream surfaces; on dark surfaces, `{colors.divider-dark}` carries the equivalent role.


<!-- source:end -->

</details>

## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — flat | No shadow, no border | Default cream canvas, full-bleed bands. |
| 1 ——纲要. | 1px 固态 `{colors.hairline}` 或 减 减 `{colors.hairline-strong}` | 模具牌,定价等级,收藏牌. |
| 2 ——骨质陷落. | 表面颜色变换为 `{colors.surface-bone}` 内置 a `{colors.canvas}` 带 | 特色组装箱,"如何工作"走过. |
| 3 ——暗反转. | 换牌到 `{colors.surface-dark}` 抗奶油药 | 密码井,特色定价等级, " 等级表 Replicate" 首屏卡片,"首屏卡片","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡","首屏卡",",","首屏卡","首屏卡",",","贺卡","贺卡",",","贺卡","贺卡","贺卡",","贺卡",",",",",",""",",",""""""."."". |
| 4 软滴水 | `0 8px 24px rgba(32,32,32,0.08)` | 漫游模式缩略图(仅可视化——不交互状态记录). |

Drop shadows exist in the extracted tokens but are restrained — used sparingly to lift photography thumbnails one step off the cream canvas. The dominant elevation language is colour-blocking.

### 装饰性深度
- **首屏大气网** —— 支持家首屏的橙色对平克梯度是一个层状的射线网: `{colors.primary}` 核心资源 + `{colors.hero-glow}` 中间站 —— `{colors.hero-pink}` 外洗,只准备给首屏乐队
- **代码-故事暗带** ——"如何工作"一节使用. `{colors.surface-dark}` 满身血迹,单条细边线 `{colors.divider-dark}` 将叙述性副本和代码分开。
- **Contributor mosaic** — the home page features a horizontally-scrolling band of circular avatars (`{component.contributor-avatar}`) over a textured cream canvas; this is the only place avatars appear at the brand level.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — flat | No shadow, no border | Default cream canvas, full-bleed bands. |
| 1 — outline | 1px solid `{colors.hairline}` or `{colors.hairline-strong}` | Model cards, pricing tiers, collection tiles. |
| 2 — bone inset | Surface colour shift to `{colors.surface-bone}` inside a `{colors.canvas}` band | Feature group containers, "How it works" walkthrough. |
| 3 — dark inversion | Card swaps to `{colors.surface-dark}` against cream | Code wells, featured pricing tier, "Scale on Replicate" hero card. |
| 4 — soft drop | `0 8px 24px rgba(32,32,32,0.08)` | Hover-anchored model thumbnails (visual only — not interaction-state-documented). |

Drop shadows exist in the extracted tokens but are restrained — used sparingly to lift photography thumbnails one step off the cream canvas. The dominant elevation language is colour-blocking.

### Decorative Depth
- **Hero atmospheric mesh** — the orange-to-pink gradient backing the home hero is a layered radial mesh: `{colors.primary}` core → `{colors.hero-glow}` mid-stop → `{colors.hero-pink}` outer wash. Reserved for the home hero band only.
- **Code-story dark band** — the "How it works" section uses `{colors.surface-dark}` full-bleed with a single hairline `{colors.divider-dark}` separating narrative copy and code well.
- **Contributor mosaic** — the home page features a horizontally-scrolling band of circular avatars (`{component.contributor-avatar}`) over a textured cream canvas; this is the only place avatars appear at the brand level.


<!-- source:end -->

</details>

## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 首屏乐队,全血科,脚步. |
| `{rounded.xs}` | 4px | 代码标签,代码井内嵌标签. |
| `{rounded.sm}` | 6px | 中射线呼叫,小内置芯片。 |
| `{rounded.md}` | 10px | 模具牌,收藏牌,密码井. |
| `{rounded.lg}` | 16px | 定价等级,较大的特色卡. |
| `{rounded.full}` | 9999px | 扣子 投入 徽章 假象 丸. |

### 摄影几何
- 模型缩略图:平方 (S)1:1与 `{rounded.md}` 角落,满血的图像到卡片边缘。
- 首屏实例产出 : 4:3 或 减 减 16:9 与 `{rounded.md}` 转角
- 贡献者: circular (`{rounded.full}`), 40px 回家的时候 32px 中,在卡元数据中。
- 首屏乐队使用一个有条理的黑-ink插图("工作台的铁匠")作为其摄影站——保存在橙色乐队内部而不是涂在奶油上.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Hero bands, full-bleed sections, footer. |
| `{rounded.xs}` | 4px | Code tabs, inline tags inside code wells. |
| `{rounded.sm}` | 6px | Mid-radius callouts, small inset chips. |
| `{rounded.md}` | 10px | Model cards, collection tiles, code wells. |
| `{rounded.lg}` | 16px | Pricing tiers, larger feature cards. |
| `{rounded.full}` | 9999px | Buttons, inputs, badges, avatars, pills. |

### Photography Geometry
- Model thumbnails: square (1:1) with `{rounded.md}` corners, full-bleed image to the card edge.
- Hero example outputs: 4:3 or 16:9 with `{rounded.md}` corners.
- Contributor avatars: circular (`{rounded.full}`), 40px on home, 32px in card metadata.
- The hero band uses a stylised black-ink illustration (the "tinkerer at the workbench") as its photography stand-in — kept inside the orange band rather than overlaid on cream.


<!-- source:end -->

</details>

## 组件

### 按钮

**`button-primary`** ——橙色CTA
- Background `{colors.primary}`, label `{colors.on-primary}`, type `{typography.button-md}`, padding `12px 24px`, `rounded: {rounded.full}`, height 44px.
- 页面上最重要的单一动作(例如: "Sign in with at 3, 3, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 7, 6, 6, 6, 7, 7, 7, 7, 6, 7, , 7, 6, GitHub","试一模".
- 国家住在这里 `button-primary-pressed` (背景情况) `{colors.primary-deep}`).

**`button-dark`** - 深层CTA
- Background `{colors.surface-dark}`, label `{colors.on-dark}`, type `{typography.button-md}`, `rounded: {rounded.full}`.
- Equal-weight secondary action paired with `{component.button-primary}`, or the primary action on cream when orange would be too loud.

**`button-outline`** - 概述的《反恐协定》
- Background `{colors.surface-card}`, label `{colors.ink}`, 1px solid `{colors.hairline-strong}`, type `{typography.button-md}`, `rounded: {rounded.full}`.
- 三级动作;与主/暗并列出现,用于"View docs","读更多".

**`button-ghost`** —— 内置按钮
- Background `{colors.canvas}`, label `{colors.ink}`, no border, type `{typography.button-md}`, `rounded: {rounded.full}`, padding `8px 16px`.
- 分牌内置动作,并随体型副本内置.

**`button-icon`** — icon button
- Background `{colors.surface-card}`, label `{colors.ink}`, 1px solid `{colors.hairline}`, `rounded: {rounded.full}`, 36×36px circular.
- 木马箭头,复制到剪贴板 GitHub 链接图标。

### 纸牌和集装箱

**`model-card`** ——型号上市卡.
- Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-md}`, `rounded: {rounded.md}`, padding `{spacing.lg}` (16px).
- 上方为平方缩略图, 模式所有者+名称在其中 `{typography.body-sm}`,单行描述 `{colors.charcoal}`状态胶囊形 `{component.badge-status}` 左下为上.

**`collection-tile`** —— 样板收藏.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.heading-md}`, `rounded: {rounded.md}`, padding `{spacing.xl}` (24px).
- 奶油加热砖 里面的 `{colors.surface-bone}` 带,用于浏览模型类别。

**`pricing-tier`** ——定价等级卡.
- Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}` (32px).
- 3- 上网格; 等级名称 单位 `{typography.display-lg}` ("自由","Pro","企业"),价格在 `{typography.display-md}`.

**`pricing-tier-featured`** 特色定价等级
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}`.
- 中层翻转为暗反转,以标记"推荐".

**`code-block`** - 代码很好
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, type `{typography.code-md}`, `rounded: {rounded.md}`, padding `{spacing.xl}` (24px).
- 使用标签条在顶端 `{component.code-tab}` 用于语言间切换(Python, Node.js, cURL, HTTP).

**`code-tab`** ——代码标签芯片
- Background `{colors.surface-deep}`, text `{colors.on-dark-mute}`, type `{typography.code-sm}`, `rounded: {rounded.xs}`, padding `6px 12px`.
- 活动制表符转换文本颜色为 `{colors.on-dark}` 并添加一个 2px 下划线 `{colors.primary}`.

**`hero-band`** ——满血首屏.
- Background `{colors.hero-warm}` with the atmospheric mesh detailed in Elevation, text `{colors.on-dark}`, type `{typography.display-xxl}` for the title.
- 只在主页上使用;第二页开放,加奶油+ `{typography.display-xl}`.

### 输入表单( F)

**`text-input`** ——默认输入
- Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-md}`, 1px solid `{colors.hairline}`, `rounded: {rounded.full}`, padding `12px 20px`, height 44px.
- 胶囊形形状搜索和电子邮件字段。焦点状态添加了 a `{colors.ring-focus}` 3px 戒指,你给我打电话

### 导航

**`nav-bar`** ——顶端导航(桌面).
- Background `{colors.canvas}`, type `{typography.button-sm}`, height 60px, single hairline `{colors.hairline}` bottom border.
- 左:字标记标志. 中:顶级导航("Exploctre","Pricing","Docs","Blog"). 右: GitHub 图标+“签名”链接+ `{component.button-primary}`.

**`nav-bar`** (移动)
- 同样的高度 60px,将中心导航崩溃成汉堡图标。Logo 留在左侧,登录的 CTA 留在右侧。

**`sub-nav-pill`** — sub-nav 芯片
- 胶囊形设置在内容上方的横向行(如"All","Featured","Image generation","Audio"), `{component.sub-nav-pill}` 造型风格.

### 签名组件

**`badge-status`** ——模范状态徽章.
- Background `{colors.badge-success}`, label `{colors.on-dark}`, type `{typography.caption}`, `rounded: {rounded.full}`, padding `4px 10px`.
- 被安插在模片左下角,以表示"运行"或"部署".

**`badge-tag`** 中性标记
- Background `{colors.canvas}`, label `{colors.ink}`, 1px solid `{colors.hairline}`, type `{typography.caption}`, `rounded: {rounded.full}`, padding `4px 10px`.
- 能力标记("文本对图像","视频","音频")在模版卡上.

**`contributor-avatar`** ——社区贡献者.
- Background `{colors.surface-card}` placeholder behind 1:1 photography, `rounded: {rounded.full}`, 40×40px (32px in metadata contexts).
- 用于主页贡献的马赛克.

**`footer`** ——全球页脚
- Background `{colors.surface-deep}`, text `{colors.on-dark}`, type `{typography.body-sm}`, `rounded: {rounded.none}`, padding `64px 32px`.
- Multi-column quick-links grid above a copyright row separated by `{colors.divider-dark}`.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Components

### Buttons

**`button-primary`** — orange CTA
- Background `{colors.primary}`, label `{colors.on-primary}`, type `{typography.button-md}`, padding `12px 24px`, `rounded: {rounded.full}`, height 44px.
- The single most important action on a page (e.g. "Sign in with GitHub", "Try a model").
- Pressed state lives in `button-primary-pressed` (background `{colors.primary-deep}`).

**`button-dark`** — dark CTA
- Background `{colors.surface-dark}`, label `{colors.on-dark}`, type `{typography.button-md}`, `rounded: {rounded.full}`.
- Equal-weight secondary action paired with `{component.button-primary}`, or the primary action on cream when orange would be too loud.

**`button-outline`** — outlined CTA
- Background `{colors.surface-card}`, label `{colors.ink}`, 1px solid `{colors.hairline-strong}`, type `{typography.button-md}`, `rounded: {rounded.full}`.
- Tertiary action; appears alongside primary/dark for "View docs", "Read more".

**`button-ghost`** — inline button
- Background `{colors.canvas}`, label `{colors.ink}`, no border, type `{typography.button-md}`, `rounded: {rounded.full}`, padding `8px 16px`.
- Sub-actions inside cards and inline with body copy.

**`button-icon`** — icon button
- Background `{colors.surface-card}`, label `{colors.ink}`, 1px solid `{colors.hairline}`, `rounded: {rounded.full}`, 36×36px circular.
- Carousel arrows, copy-to-clipboard, GitHub link icon.

### Cards & Containers

**`model-card`** — model listing card
- Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-md}`, `rounded: {rounded.md}`, padding `{spacing.lg}` (16px).
- Square thumbnail on top, model owner + name beneath in `{typography.body-sm}`, single-line description in `{colors.charcoal}`, status pill `{component.badge-status}` bottom-left.

**`collection-tile`** — collection-of-models tile
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.heading-md}`, `rounded: {rounded.md}`, padding `{spacing.xl}` (24px).
- Cream-on-cream tile inside a `{colors.surface-bone}` band, used for browsing model categories.

**`pricing-tier`** — pricing tier card
- Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}` (32px).
- 3-up grid; tier name in `{typography.display-lg}` ("Free", "Pro", "Enterprise"), price in `{typography.display-md}`.

**`pricing-tier-featured`** — featured pricing tier
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}`.
- Centre tier flipped to dark inversion to mark "recommended".

**`code-block`** — code well
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, type `{typography.code-md}`, `rounded: {rounded.md}`, padding `{spacing.xl}` (24px).
- Tab strip on top using `{component.code-tab}` for switching between languages (Python, Node.js, cURL, HTTP).

**`code-tab`** — code tab chip
- Background `{colors.surface-deep}`, text `{colors.on-dark-mute}`, type `{typography.code-sm}`, `rounded: {rounded.xs}`, padding `6px 12px`.
- Active tab swaps text colour to `{colors.on-dark}` and adds a 2px bottom underline in `{colors.primary}`.

**`hero-band`** — full-bleed hero
- Background `{colors.hero-warm}` with the atmospheric mesh detailed in Elevation, text `{colors.on-dark}`, type `{typography.display-xxl}` for the title.
- Used only on the home page; secondary pages open with cream + `{typography.display-xl}`.

### Inputs & Forms

**`text-input`** — default input
- Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-md}`, 1px solid `{colors.hairline}`, `rounded: {rounded.full}`, padding `12px 20px`, height 44px.
- Pill-shaped search and email fields. Focus state adds a `{colors.ring-focus}` 3px ring.

### Navigation

**`nav-bar`** — top nav (desktop)
- Background `{colors.canvas}`, type `{typography.button-sm}`, height 60px, single hairline `{colors.hairline}` bottom border.
- Left: wordmark logo. Centre: top-level nav ("Explore", "Pricing", "Docs", "Blog"). Right: GitHub icon + "Sign in" link + `{component.button-primary}`.

**`nav-bar`** (mobile)
- Same height 60px, collapses centre nav into a hamburger icon. Logo stays left, sign-in CTA stays right.

**`sub-nav-pill`** — sub-nav chip
- Pill chips set in a horizontal row above content (e.g. "All", "Featured", "Image generation", "Audio"), `{component.sub-nav-pill}` styling.

### Signature Components

**`badge-status`** — model status badge
- Background `{colors.badge-success}`, label `{colors.on-dark}`, type `{typography.caption}`, `rounded: {rounded.full}`, padding `4px 10px`.
- Anchored on the bottom-left of model cards to indicate "running" or "deployed".

**`badge-tag`** — neutral tag
- Background `{colors.canvas}`, label `{colors.ink}`, 1px solid `{colors.hairline}`, type `{typography.caption}`, `rounded: {rounded.full}`, padding `4px 10px`.
- Capability tags ("text-to-image", "video", "audio") on model cards.

**`contributor-avatar`** — community contributor
- Background `{colors.surface-card}` placeholder behind 1:1 photography, `rounded: {rounded.full}`, 40×40px (32px in metadata contexts).
- Used in the home-page contributor mosaic.

**`footer`** — global footer
- Background `{colors.surface-deep}`, text `{colors.on-dark}`, type `{typography.body-sm}`, `rounded: {rounded.none}`, padding `64px 32px`.
- Multi-column quick-links grid above a copyright row separated by `{colors.divider-dark}`.


<!-- source:end -->

</details>

## 设计建议与禁忌

### 执行
- 使用 `{colors.canvas}` (尖叫)作为默认的页面背景. White () (S)`{colors.surface-card}`)只出现在个人卡片,输入,以及首屏插图背景.
- 准备金 `{colors.primary}` 给主力CTA,家庭首屏乐队, 和内线链接—— 三个角色,没有别的。
- 设定每个交互式元素为 `{rounded.full}` ——扣子,输入物,徽章,假象,丸.
- Step content cards up to `{rounded.md}` (10px) or `{rounded.lg}` (16px) — never sharp corners.
- Open hero bands with `{typography.display-xxl}` (128px) and `{typography.display-xl}` (72px) at `lineHeight: 1.0` with negative letter-spacing.
- 使用 `rb-freigeist-neue` 用于所有显示, `basier-square` 给UI/身体, `jetbrains-mono` 保持车道的严格
- Render code in `{component.code-block}` with a `{colors.surface-dark}` background — code is print, not an inline grey box.
- 与平面摄影 `{rounded.md}` 角和满血的作物 内卡。

### Don't
- 页面级别上不要用纯白色来代替奶油,品牌温度来自 `{colors.canvas}`.
- Don't introduce a secondary brand colour. Orange is the only accent; semantic green and focus blue are functional, not decorative.
- Don't loosen display `lineHeight` past 1.0. Tight stacking is structural.
- Don't bump body weight to 500 for emphasis — change family (`basier-square` → `rb-freigeist-neue`) instead.
- 不许申请 `{rounded.full}` 。 弹簧形的卡片会打破节奏。
- Don't put code in a light grey box. Code wells are always `{colors.surface-dark}` or `{colors.surface-deep}`.
- Don't use orange on body text or large surfaces — it loses its stamp quality immediately.
- Don't add drop shadows on cream surfaces. Elevation is colour-blocking; shadows are reserved for floating thumbnails.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Do's and Don'ts

### Do
- Use `{colors.canvas}` (cream) as the default page background. White (`{colors.surface-card}`) appears only on individual cards, inputs, and the hero illustration backdrop.
- Reserve `{colors.primary}` for the primary CTA, the home hero band, and inline links — three roles, nothing else.
- Set every interactive element to `{rounded.full}` — buttons, inputs, badges, avatars, pills.
- Step content cards up to `{rounded.md}` (10px) or `{rounded.lg}` (16px) — never sharp corners.
- Open hero bands with `{typography.display-xxl}` (128px) and `{typography.display-xl}` (72px) at `lineHeight: 1.0` with negative letter-spacing.
- Use `rb-freigeist-neue` for all display, `basier-square` for UI/body, `jetbrains-mono` for code. Keep the lanes strict.
- Render code in `{component.code-block}` with a `{colors.surface-dark}` background — code is print, not an inline grey box.
- Pair photography with `{rounded.md}` corners and full-bleed crop inside cards.

### Don't
- Don't replace cream with pure white at the page level. The brand temperature comes from `{colors.canvas}`.
- Don't introduce a secondary brand colour. Orange is the only accent; semantic green and focus blue are functional, not decorative.
- Don't loosen display `lineHeight` past 1.0. Tight stacking is structural.
- Don't bump body weight to 500 for emphasis — change family (`basier-square` → `rb-freigeist-neue`) instead.
- Don't apply `{rounded.full}` to content cards. Pill-shaped cards break the rhythm.
- Don't put code in a light grey box. Code wells are always `{colors.surface-dark}` or `{colors.surface-deep}`.
- Don't use orange on body text or large surfaces — it loses its stamp quality immediately.
- Don't add drop shadows on cream surfaces. Elevation is colour-blocking; shadows are reserved for floating thumbnails.


<!-- source:end -->

</details>

## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Desktop XL | ≥ 1440px | Full max-width 1280 body, hero band runs full-bleed, 4-up model grid. |
| 桌面 | 1280–1439px | 容器缩水; 垫装 `{spacing.xl}` (24px) 侧. |
| 块状大 | 1024–1279px | 模型网格 3-上,代码 - 故事分裂仍然存在 2- 起来 |
| 平板 | 768–1023px | 模型网格 2-上,代码层堆栈(顶部为说明式,下面为代码),定价层堆栈垂直排列. |
| 大型移动 | 426–767px | 模型网格 1- 上边 480px+,导航崩溃到汉堡,首屏 `{typography.display-xxl}` 夹子到 64px. |
| Mobile | ≤ 425px | All grids 1-up, hero clamps to 48px, section padding `{spacing.section}` collapses to 64px. |

### 触控区域
- 最少所有按钮 44px 移动高; 默认值 `{component.button-primary}` 谓 44px 高高的——舒适地清除了WCAG AA.
- `{component.button-icon}` (36px) 被撞到(或) 44px 移动通过增加的垫。
- `{component.sub-nav-pill}` 留在原点 36px 并成长到 40px 移动时通过垂直加载调整。

### 折叠战略
- 顶级导航崩溃到汉堡 < 1024px; 字号和 `{component.button-primary}` 保持锚定。
- 首屏们 `{typography.display-xxl}` 夹子 : 128px → 96px → 64px → 48px 穿过断点梯子
- 定价 3- 垂直的上网格堆栈 < 1024px 与突出的层次 剩下的中心设置。
- Code-story splits switch from side-by-side to stacked at < 1024px, code well always second.
- Sub-nav 胶囊形从包装行转换为水平滚动扶轮, 位置为 < 768px.

### 图像行为
- Model thumbnails serve at 1.5× and 2× DPR; below 768px the system swaps to a 600×600 export instead of 1200×1200.
- 首屏大气网是作为CSS梯度——没有资产成本,没有断点变化——而成的.
- Code-block 内容软地包裹在 < 1024px (没有水平滚动);长线断开后加续行标记.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop XL | ≥ 1440px | Full max-width 1280 body, hero band runs full-bleed, 4-up model grid. |
| Desktop | 1280–1439px | Container shrinks; padding `{spacing.xl}` (24px) sides. |
| Tablet Large | 1024–1279px | Model grid 3-up, code-story splits remain 2-up. |
| Tablet | 768–1023px | Model grid 2-up, code-story stacks (narrative on top, code below), pricing stacks vertically. |
| Mobile Large | 426–767px | Model grid 1-up at 480px+, nav collapses to hamburger, hero `{typography.display-xxl}` clamps to 64px. |
| Mobile | ≤ 425px | All grids 1-up, hero clamps to 48px, section padding `{spacing.section}` collapses to 64px. |

### Touch Targets
- All buttons ship at minimum 44px tall on mobile; default `{component.button-primary}` is 44px tall — comfortably clearing WCAG AAA.
- `{component.button-icon}` (36px) is bumped to 44px on mobile via increased padding.
- `{component.sub-nav-pill}` stays at 36px on desktop and grows to 40px on mobile via vertical padding adjustment.

### Collapsing Strategy
- Top-level nav collapses to hamburger at < 1024px; the wordmark and `{component.button-primary}` stay anchored.
- Hero `{typography.display-xxl}` clamps: 128px → 96px → 64px → 48px across the breakpoint ladder.
- Pricing 3-up grid stacks vertically at < 1024px with the featured tier remaining centre-stacked.
- Code-story splits switch from side-by-side to stacked at < 1024px, code well always second.
- Sub-nav pills convert from a wrap row to a horizontal scroll-rail at < 768px.

### Image Behavior
- Model thumbnails serve at 1.5× and 2× DPR; below 768px the system swaps to a 600×600 export instead of 1200×1200.
- Hero atmospheric mesh is rendered as a CSS gradient — no asset cost, no breakpoint variation.
- Code-block contents wrap softly at < 1024px (no horizontal scroll); long lines break with a continuation marker.


<!-- source:end -->

</details>

## 迭代指南

1. 一次关注一个组件。大多数互动要素共享 `{rounded.full}` 编辑 `{colors.canvas}` / `{colors.surface-card}` 双——只表示角色特定符号( 双) 。`{colors.primary}`, `{component.code-block}`)变体之间的移位.
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component.button-primary-pressed}`, `{rounded.lg}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后; 孤箱警告会抓住未使用的条目。
4. 添加新的变体作为单独的条目( Q) :`-pressed`, `-disabled`, `-featured`)——不要用散文埋没.
5. 默认体型为 `{typography.body-md}`; 联系范围 `{typography.subtitle}` 只在首屏字幕上发的
6. 保留 `{colors.primary}` 稀有——如果每个视图中出现一个以上的橙色元素,则询问是否应该降到 `{colors.surface-dark}` 换成是的


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Iteration Guide

1. Focus on ONE component at a time. Most interactive elements share `{rounded.full}` and the `{colors.canvas}` / `{colors.surface-card}` pair — only the role-specific tokens (`{colors.primary}`, `{component.code-block}`) shift between variants.
2. Reference component names and tokens directly (`{colors.primary}`, `{component.button-primary-pressed}`, `{rounded.lg}`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits; orphaned-tokens warnings will catch unused entries.
4. Add new variants as separate entries (`-pressed`, `-disabled`, `-featured`) — do not bury them in prose.
5. Default body type to `{typography.body-md}`; reach for `{typography.subtitle}` only on hero subtitles.
6. Keep `{colors.primary}` scarce — if more than one orange element appears per viewport, ask whether one should drop to `{colors.surface-dark}` instead.


<!-- source:end -->

</details>

## 已知缺口

- Active/pressed visual states are documented for `button-primary-pressed` only; other components rely on the focus-ring (`{colors.ring-focus}`) for interactive feedback, which is not extracted as a per-component variant.
- 模型游乐场 / try-this-model 交互式表面(登录功能) 超出范围;只有公共营销页面底色被记录.
- 达什板 / 计费 / API 密钥管理表面不提取——那些活在认证后.
- 家庭首屏插图("工作台的工匠")被视为装饰艺术,而不是系统组件;复制需要标语插图而不是标语.

<details>
<summary>英文原文</summary>

<!-- source:body -->
## Known Gaps

- Active/pressed visual states are documented for `button-primary-pressed` only; other components rely on the focus-ring (`{colors.ring-focus}`) for interactive feedback, which is not extracted as a per-component variant.
- The model playground / try-this-model interactive surfaces (logged-in feature) are out of scope; only the public marketing canvas is documented.
- Dashboard / billing / API key management surfaces are not extracted — those live behind authentication.
- The home hero illustration ("the tinkerer at the workbench") is treated as decorative artwork, not a system component; replicating it requires bespoke illustration rather than tokens.

<!-- source:end -->

</details>

## 设计词元原值

Replicate's marketing surfaces pair the warm-cream developer-tools aesthetic of an indie ML playground with a confident hot-orange brand accent and a signature display typeface (rb-freigeist-neue) sized aggressively large at 72px+. The system reads as "AI lab notebook crossed with print magazine": cream and bone surfaces, dark ink type, monospace code wells, irregular hand-drawn-feeling diagrams, and a rich orange used scarcely on the most consequential CTA. Photography of contributors and example outputs is square-ish with mid-radius corners; everything else is borderless or hairline.

```yaml
---
version: alpha
name: Replicate-design-analysis
description: |
  Replicate's marketing surfaces pair the warm-cream developer-tools aesthetic
  of an indie ML playground with a confident hot-orange brand accent and a
  signature display typeface (rb-freigeist-neue) sized aggressively large at
  72px+. The system reads as "AI lab notebook crossed with print magazine":
  cream and bone surfaces, dark ink type, monospace code wells, irregular
  hand-drawn-feeling diagrams, and a rich orange used scarcely on the most
  consequential CTA. Photography of contributors and example outputs is
  square-ish with mid-radius corners; everything else is borderless or hairline.

colors:
  primary: "#ea2804"
  primary-deep: "#c01f00"
  on-primary: "#ffffff"
  ink: "#202020"
  body: "#3a3a3a"
  charcoal: "#575757"
  mute: "#646464"
  ash: "#8d8d8d"
  stone: "#bbbbbb"
  on-dark: "#fcfcfc"
  on-dark-mute: "rgba(252,252,252,0.72)"
  canvas: "#f9f7f3"
  surface-bone: "#f3f0e8"
  surface-card: "#ffffff"
  surface-dark: "#202020"
  surface-deep: "#000000"
  hairline: "rgba(32,32,32,0.12)"
  hairline-strong: "#202020"
  divider-dark: "rgba(255,255,255,0.2)"
  hero-warm: "#ea2804"
  hero-glow: "#ff6a3d"
  hero-pink: "#f4a8a0"
  badge-success: "#2b9a66"
  link: "#ea2804"
  ring-focus: "rgba(59,130,246,0.5)"
  github-dark: "#24292e"

typography:
  display-xxl:
    fontFamily: rb-freigeist-neue
    fontSize: 128px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -3px
  display-xl:
    fontFamily: rb-freigeist-neue
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1.8px
  display-lg:
    fontFamily: rb-freigeist-neue
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1px
  display-md:
    fontFamily: rb-freigeist-neue
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.5px
  heading-lg:
    fontFamily: basier-square
    fontSize: 38.4px
    fontWeight: 600
    lineHeight: 0.83
    letterSpacing: -0.5px
  heading-md:
    fontFamily: basier-square
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: -0.35px
  heading-sm:
    fontFamily: basier-square
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.3px
  subtitle:
    fontFamily: rb-freigeist-neue
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.56
    letterSpacing: 0
  body-lg:
    fontFamily: basier-square
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  body-md:
    fontFamily: basier-square
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: basier-square
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  button-md:
    fontFamily: basier-square
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  button-sm:
    fontFamily: basier-square
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: basier-square
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  caption-tight:
    fontFamily: basier-square
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: -0.35px
  code-md:
    fontFamily: jetbrains-mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  code-sm:
    fontFamily: jetbrains-mono
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 10px
  lg: 16px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  xxxl: 48px
  section: 96px
  band: 160px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
    height: 44px
  button-primary-pressed:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
  button-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
    height: 44px
  button-outline:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 11px 23px
    height: 44px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 8px 16px
    height: 36px
  button-icon:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 12px 20px
    height: 44px
  hero-band:
    backgroundColor: "{colors.hero-warm}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 96px 32px
  model-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px
  collection-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.md}"
    padding: 24px
  pricing-tier:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  code-block:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code-md}"
    rounded: "{rounded.md}"
    padding: 24px
  code-tab:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.on-dark-mute}"
    typography: "{typography.code-sm}"
    rounded: "{rounded.xs}"
    padding: 6px 12px
  badge-status:
    backgroundColor: "{colors.badge-success}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  badge-tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.none}"
    height: 60px
  sub-nav-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  contributor-avatar:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  footer:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 64px 32px
---
```
