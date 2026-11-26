# Bugatti · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。



<details>
<summary>英文原文</summary>

<!-- source:body -->


<!-- source:end -->

</details>

## 概览

Bugatti's marketing surface is the most austere interface in luxury automotive: a near-pure black canvas (`{colors.canvas}` — #000000) holding white uppercase **letterspaced** display type and full-bleed automotive photography. The system has no accent color, no surface card decoration, no shadows, no gradients, no chrome — only **photography, typography, and the brand wordmark**. Every other luxury auto site in this category (BMW M, Aston Martin, Lamborghini) uses some form of accent color or signature element; Bugatti uses nothing. The empty space, the photograph, and the precisely-tracked Bugatti Display headline ARE the brand.

系统运行 **3 个定制 Bugatti 类型面**: **Bugatti Display** (播放头条新闻, "BUGATTI" 字印,所有盖子都有宽度跟踪, " **Bugatti Text Regular** (正文段落,a) serif 文本面值),以及 **Bugatti Monospace** (按钮标签、导航、标题、日期——任何精确和机器感觉有问题的地方) 拆分是故意的,是不可破解的:永远不要使用 Bugatti 按钮中的文字, 永远不要使用 Bugatti Monospace 在一个段落中。

Display sizes use weight 400 (regular) — never bold. Visual emphasis comes from **size and tracking**, not weight. Letter-spacing on the wordmark is 6px; on display headlines 2-4px; on uppercase labels 2-2.5px. Tight tracking is a brand violation. The wide spacing creates the "engineered precision" feel that no other luxury maker matches.

**关键特征 :**
- 纯黑页面底色( E)`{colors.canvas}` — #000000),带有白色类型。系统没有灯光模式。
- Three custom Bugatti typefaces: **Display** (uppercase headlines + wordmark), **Text Regular** (body serif), **Monospace** (buttons, captions, nav).
- All display headlines are UPPERCASE with wide letter-spacing (2-4px). Body copy stays sentence-case at standard tracking.
- No accent color. The only non-monochrome color anywhere on the site is `{colors.link}` (#c3d9f3) — a desaturated ice-blue used on inline anchor links, and even that appears rarely.
- Buttons are pill-shaped (`{rounded.pill}`) with **transparent background** and a 1px white outline. Bugatti is the only luxury-auto brand whose primary CTA is fully transparent.
- Photography is the only depth element. No drop shadows. No gradients. No card surfaces. Surface cards are `{colors.surface-card}` (#141414) at most — a barely-different-from-black tone.
- 节奏很慷慨... `{spacing.section}` (120px)在主要乐队之间,比大多数营销网站更长,因为 Bugatti页面大多是文本密度最小的摄影.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Overview

Bugatti's marketing surface is the most austere interface in luxury automotive: a near-pure black canvas (`{colors.canvas}` — #000000) holding white uppercase **letterspaced** display type and full-bleed automotive photography. The system has no accent color, no surface card decoration, no shadows, no gradients, no chrome — only **photography, typography, and the brand wordmark**. Every other luxury auto site in this category (BMW M, Aston Martin, Lamborghini) uses some form of accent color or signature element; Bugatti uses nothing. The empty space, the photograph, and the precisely-tracked Bugatti Display headline ARE the brand.

The system runs **three custom Bugatti typefaces**: **Bugatti Display** (display headlines, the "BUGATTI" wordmark, all caps with wide tracking), **Bugatti Text Regular** (body paragraphs, a serif text face), and **Bugatti Monospace** (button labels, navigation, captions, dates — anywhere precision and machined feel matters). The split is deliberate and unbreakable: never use Bugatti Text in a button, never use Bugatti Monospace in a paragraph.

Display sizes use weight 400 (regular) — never bold. Visual emphasis comes from **size and tracking**, not weight. Letter-spacing on the wordmark is 6px; on display headlines 2-4px; on uppercase labels 2-2.5px. Tight tracking is a brand violation. The wide spacing creates the "engineered precision" feel that no other luxury maker matches.

**Key Characteristics:**
- Pure black canvas (`{colors.canvas}` — #000000) with white type. The system does not have a light mode.
- Three custom Bugatti typefaces: **Display** (uppercase headlines + wordmark), **Text Regular** (body serif), **Monospace** (buttons, captions, nav).
- All display headlines are UPPERCASE with wide letter-spacing (2-4px). Body copy stays sentence-case at standard tracking.
- No accent color. The only non-monochrome color anywhere on the site is `{colors.link}` (#c3d9f3) — a desaturated ice-blue used on inline anchor links, and even that appears rarely.
- Buttons are pill-shaped (`{rounded.pill}`) with **transparent background** and a 1px white outline. Bugatti is the only luxury-auto brand whose primary CTA is fully transparent.
- Photography is the only depth element. No drop shadows. No gradients. No card surfaces. Surface cards are `{colors.surface-card}` (#141414) at most — a barely-different-from-black tone.
- Section rhythm is generous — `{spacing.section}` (120px) between major bands, longer than most marketing sites because Bugatti's pages are mostly photography with minimal text density.


<!-- source:end -->

</details>

## 配色

### 品牌和 强调色
- **主要** (`{colors.primary}` — #ffffff:单色品牌 白色类型和白色CTA在黑色页面底色上的轮廓.
- **链接** (`{colors.link}` — #c3d9f3:系统中唯一的非单色色——一种在内置锚链上使用的脱饱和冰蓝色,很少在焦态上使用. Bugatti'品牌纪律如此严谨,以至于这个单一的符文本质上是黑白之外的全部色谱词汇.

### 表面
- **页面底色** (`{colors.canvas}` — #000000: 默认的页面层横跨每个表面。纯黑色。
- **表面软** (`{colors.surface-soft}` — #0d0d0d:一个几乎不区分的与黑色的基调,用于光谱表行和密集的数据部分.
- **表面卡片** (`{colors.surface-card}` — #141414:卡(职业呼唤,新闻室文章容器,偶尔内容卡),甚至卡片表面都保持近黑——没有对比跳.
- **地面升华** (`{colors.surface-elevated}` — #1f1f1f:离黑色更远一步,用于稀密页面上的嵌入卡片.
- **Hairline** (`{colors.hairline}` — #262626): The 1px divider tone. Visible but quiet. Used on table rows, between body sections, around card outlines.
- **发条坚固** (`{colors.hairline-strong}` — #3a3a3a:输入字段下方使用的更重的分线(输入字段没有边框——只有下划线细边线).

### 文本
- **墨水/ 暗色时** (`{colors.on-dark}` — #ffffff: 暗页面底色上所有头条和主文本.
- **Body** (`{colors.body}` — #cccccc): Default running-text color (slightly cooler than pure white). Used in body paragraphs.
- **Body Strong** (`{colors.body-strong}` — #e6e6e6): Emphasized body / lead paragraph.
- **静音** (`{colors.muted}` — #999999:页脚链接,日期,标题,二级元数据. Dembrandt的频率分析证实这是调色板-2 (数) 6,中度自信).
- **静音软体** (`{colors.muted-soft}` — #666666: 二级哑音,用于非常二级文本(法律上不可声明,版权线).

### 语义
- **警告** (`{colors.warning}` — #d4a017: 技术预警点名(规格、召回通知),几乎从未出现在市场表面。
- **成功** (`{colors.success}` — #5fa657: 订单确认状态(在营销页面上只见).


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #ffffff): The single brand color. White type and white CTA outlines on the black canvas.
- **Link** (`{colors.link}` — #c3d9f3): The only non-monochrome color in the system — a desaturated ice-blue used on inline anchor links and rarely on focus states. Bugatti's brand discipline is so tight that this single token is essentially the entire chromatic vocabulary outside black-and-white.

### Surface
- **Canvas** (`{colors.canvas}` — #000000): The default page floor across every surface. Pure black.
- **Surface Soft** (`{colors.surface-soft}` — #0d0d0d): A barely-different-from-black tone used for spec table rows and dense data sections.
- **Surface Card** (`{colors.surface-card}` — #141414): Cards (career callout, newsroom article container, occasional content cards). Even card surfaces stay nearly-black — no contrast jump.
- **Surface Elevated** (`{colors.surface-elevated}` — #1f1f1f): One step further from black, used for nested cards on rare dense pages.
- **Hairline** (`{colors.hairline}` — #262626): The 1px divider tone. Visible but quiet. Used on table rows, between body sections, around card outlines.
- **Hairline Strong** (`{colors.hairline-strong}` — #3a3a3a): A heavier divider used on the underside of input fields (input fields have no border — only an underline hairline).

### Text
- **Ink / On Dark** (`{colors.on-dark}` — #ffffff): All headline and primary text on dark canvas.
- **Body** (`{colors.body}` — #cccccc): Default running-text color (slightly cooler than pure white). Used in body paragraphs.
- **Body Strong** (`{colors.body-strong}` — #e6e6e6): Emphasized body / lead paragraph.
- **Muted** (`{colors.muted}` — #999999): Footer links, dates, captions, secondary metadata. Dembrandt's frequency analysis confirms this as palette-2 (count 6, medium confidence).
- **Muted Soft** (`{colors.muted-soft}` — #666666): A second-tier muted for very-secondary text (legal disclaimer, copyright line).

### Semantic
- **Warning** (`{colors.warning}` — #d4a017): Reserved for technical-warning callouts (specifications, recall notices). Almost never appears on marketing surfaces.
- **Success** (`{colors.success}` — #5fa657): Order confirmation states (rare on marketing pages).


<!-- source:end -->

</details>

## 字体排版

### 字体家族
系统运行 **3 个定制 Bugatti 类型面** 作为一种刚性三重性:
1. **Bugatti Display** ——所有显示头条(h)1, h2, h3),该词 "BUGATTI" 字签,模型名牌。大写,宽轨。任何视觉强调的默认值。
2. **Bugatti Text Regular** — A serif 文本面额完全用于运行的正文副本、引文段落、模型描述。 letter-spacing.
3. **Bugatti Monospace** 按钮标签、导航、标题、日期、单空格精度上下文。总是大写与 2-2.5px 追踪。

拆分是功能性的,而且 absolute. Bugatti Display 按钮中断开“机器精度”的声音; Bugatti Monospace 在一个段落中打破“工程优雅”的声音; Bugatti 按钮中的文字是不可想象的。

倒背堆栈走 `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` 资源 Bugatti Display, `Garamond, "Times New Roman", serif` 资源 Bugatti Text Regular,以及 `ui-monospace, "SF Mono", "Cascadia Mono", monospace` 资源 Bugatti Monospace.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 1.1 | 4px | Hero h1 ("THE BUGATTI F.K.P. HOMMAGE", "TOURBILLON") — Bugatti Display, uppercase, wide-tracked |
| `{typography.display-lg}` | 48px | 400 | 1.15 | 3px | 科长 -- -- Bugatti Display,大写 |
| `{typography.display-md}` | 32px | 400 | 1.2 | 2px | 子节标题,型号名称 - Bugatti Display |
| `{typography.display-sm}` | 24px | 400 | 1.3 | 1.5px | 牌名 - Bugatti Display |
| `{typography.wordmark}` | 14px | 400 | 1.0 | 6px | The "BUGATTI" brand wordmark in the top nav — Bugatti Display, the widest tracking in the system |
| `{typography.title-md}` | 20px | 400 | 1.3 | 1px | 职业清单标题,介绍段落- Bugatti Display |
| `{typography.title-sm}` | 16px | 400 | 1.3 | 1.5px | 中级头条,点名卡 |
| `{typography.caption-uppercase}` | 11px | 400 | 1.4 | 2px | 图片标题,元数据,"EXPLORE OUR OPPORTITIES" - Bugatti Monospace,大写 |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 默认体 —— Bugatti Text Regular (a serif 面部,句子大小写,没有跟踪 |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | 页脚身体, fine-print 法律 - 法律上 Bugatti Text Regular |
| `{typography.button}` | 14px | 400 | 1.0 | 2.5px | All button labels — Bugatti Monospace, uppercase, 2.5px tracking |
| `{typography.nav-link}` | 12px | 400 | 1.4 | 2px | Top-nav 菜单项目 (“ MENU” 、 “ Store” ) - Bugatti Monospace |

### 原则
系统从未使用粗字重量。 Bugatti 类型面设定为字重 400 (定期)视觉重点来自:
1. **大小** — 64px 首屏对 16px 身体是一个 4× 等级
2. **Letter-spacing** — 6px 单词标记对 0px 体型
3. **Case** — Uppercase display vs sentence-case body
4. **家庭对比** 显示文本正则对齐 Monospace

开始字重 700 任何地方都会打破"最现代的工程"的感觉和制造 Bugatti 读起来就像通用奢侈品模板。

The serif Bugatti Text Regular sets the brand apart from the all-sans luxury crowd (BMW, Aston Martin, Lamborghini all use sans-serif body type). Bugatti's serif body voice signals literary, considered, slow-reading prose — which is the brand's editorial philosophy.

### Note on Font Substitutes
If Bugatti Display, Bugatti Text Regular, and Bugatti Monospace are unavailable, the closest open-source substitutes are:
- **Bugatti Display** → **Saira Condensed** (variable, weight 400) at +0.05em letter-spacing
- **Bugatti Text Regular** → **Cormorant Garamond** (regular) or **EB Garamond**
- **Bugatti Monospace** → **JetBrains Mono** 或 减 减 **IBM 普莱克斯·莫诺** (正常字重)

替代保留了三家分家,这比准确的型面匹配更重要.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Typography

### Font Family
The system runs **three custom Bugatti typefaces** as a rigid trinity:
1. **Bugatti Display** — All display headlines (h1, h2, h3), the "BUGATTI" wordmark, model name plates. Uppercase, wide-tracked. The default for any visual emphasis.
2. **Bugatti Text Regular** — A serif text face used exclusively for running body copy, lead paragraphs, model descriptions. Standard sentence-case, no letter-spacing.
3. **Bugatti Monospace** — Button labels, navigation, captions, dates, monospace-precision contexts. Always uppercase with 2-2.5px tracking.

The split is functional and absolute. Bugatti Display in a button breaks the "machined precision" voice; Bugatti Monospace in a paragraph breaks the "engineered elegance" voice; Bugatti Text in a button is unthinkable.

The fallback stack walks `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for Bugatti Display, `Garamond, "Times New Roman", serif` for Bugatti Text Regular, and `ui-monospace, "SF Mono", "Cascadia Mono", monospace` for Bugatti Monospace.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 1.1 | 4px | Hero h1 ("THE BUGATTI F.K.P. HOMMAGE", "TOURBILLON") — Bugatti Display, uppercase, wide-tracked |
| `{typography.display-lg}` | 48px | 400 | 1.15 | 3px | Section heads — Bugatti Display, uppercase |
| `{typography.display-md}` | 32px | 400 | 1.2 | 2px | Sub-section heads, model names — Bugatti Display |
| `{typography.display-sm}` | 24px | 400 | 1.3 | 1.5px | Card titles — Bugatti Display |
| `{typography.wordmark}` | 14px | 400 | 1.0 | 6px | The "BUGATTI" brand wordmark in the top nav — Bugatti Display, the widest tracking in the system |
| `{typography.title-md}` | 20px | 400 | 1.3 | 1px | Career listing titles, intro paragraphs — Bugatti Display |
| `{typography.title-sm}` | 16px | 400 | 1.3 | 1.5px | Mid-tier headlines, callout cards |
| `{typography.caption-uppercase}` | 11px | 400 | 1.4 | 2px | Photo captions, metadata, "EXPLORE OUR OPPORTUNITIES" — Bugatti Monospace, uppercase |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body — Bugatti Text Regular (a serif face), sentence case, no tracking |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print legal — Bugatti Text Regular |
| `{typography.button}` | 14px | 400 | 1.0 | 2.5px | All button labels — Bugatti Monospace, uppercase, 2.5px tracking |
| `{typography.nav-link}` | 12px | 400 | 1.4 | 2px | Top-nav menu items ("MENU", "STORE") — Bugatti Monospace |

### Principles
The system NEVER uses bold weight. Every Bugatti typeface is set at weight 400 (regular). Visual emphasis comes from:
1. **Size** — 64px hero vs 16px body is a 4× hierarchy
2. **Letter-spacing** — 6px wordmark vs 0px body
3. **Case** — Uppercase display vs sentence-case body
4. **Family contrast** — Display vs Text Regular vs Monospace

Going to weight 700 anywhere would break the "modest engineering" feel and make Bugatti read like a generic luxury template.

The serif Bugatti Text Regular sets the brand apart from the all-sans luxury crowd (BMW, Aston Martin, Lamborghini all use sans-serif body type). Bugatti's serif body voice signals literary, considered, slow-reading prose — which is the brand's editorial philosophy.

### Note on Font Substitutes
If Bugatti Display, Bugatti Text Regular, and Bugatti Monospace are unavailable, the closest open-source substitutes are:
- **Bugatti Display** → **Saira Condensed** (variable, weight 400) at +0.05em letter-spacing
- **Bugatti Text Regular** → **Cormorant Garamond** (regular) or **EB Garamond**
- **Bugatti Monospace** → **JetBrains Mono** or **IBM Plex Mono** (regular weight)

The substitution preserves the three-family split, which is more important than exact typeface match.


<!-- source:end -->

</details>

## 布局

### 间距系统
- **基部单位:** 4px.
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 40px · `{spacing.xxl}` 64px · `{spacing.section}` 120px.
- **Section padding:** `{spacing.section}` (120px) — longer than most marketing sites because Bugatti's bands are mostly photography with minimal text. The empty space frames the cars.
- **Card internal padding:** `{spacing.lg}` (24px) for newsroom and content cards; `{spacing.md}` (16px) for the career callout card; `{spacing.xxl}` (64px) inside hero photo bands.
- **Gutters:** `{spacing.xl}` (40px) between cards in 2-up grids — wider than typical because Bugatti's grids are sparse.

### 网格容器( C)
- **最大内容 width:** ~1280px centered. Hero photo bands bleed full-width with no max.
- **编辑机构:** 单身 12-柱状网格; 图片带是全血。
- **Newsroom layout:** 2-up article grid at desktop, 1-up at tablet+mobile.
- **职业名单:** 单列为 80px 排行间距。

### 白空间哲学
Bugatti uses whitespace more aggressively than any luxury-auto competitor. The homepage hero is mostly photography + huge whitespace + a single sentence + a single button. The empty black space below the photograph is intentional — it lets the car breathe. Compressing the whitespace to "fit more content" breaks the brand's fundamental contract: that less is more.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 40px · `{spacing.xxl}` 64px · `{spacing.section}` 120px.
- **Section padding:** `{spacing.section}` (120px) — longer than most marketing sites because Bugatti's bands are mostly photography with minimal text. The empty space frames the cars.
- **Card internal padding:** `{spacing.lg}` (24px) for newsroom and content cards; `{spacing.md}` (16px) for the career callout card; `{spacing.xxl}` (64px) inside hero photo bands.
- **Gutters:** `{spacing.xl}` (40px) between cards in 2-up grids — wider than typical because Bugatti's grids are sparse.

### Grid & Container
- **Max content width:** ~1280px centered. Hero photo bands bleed full-width with no max.
- **Editorial body:** Single 12-column grid; photo bands are full-bleed.
- **Newsroom layout:** 2-up article grid at desktop, 1-up at tablet+mobile.
- **Career listings:** Single column with 80px row spacing.

### Whitespace Philosophy
Bugatti uses whitespace more aggressively than any luxury-auto competitor. The homepage hero is mostly photography + huge whitespace + a single sentence + a single button. The empty black space below the photograph is intentional — it lets the car breathe. Compressing the whitespace to "fit more content" breaks the brand's fundamental contract: that less is more.


<!-- source:end -->

</details>

## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | No shadow, no border | Body, top nav, footer, photo bands |
| 软细边线 | 1px `{colors.hairline}` 边框 | 区域分隔符,表格行 |
| Card surface | `{colors.surface-card}` background — no shadow | Career callout, newsroom article container |
| 摄影深度 | 具有边缘到边缘作物的全血摄影 | 首屏乐队,模型展示——通过主题+镜头进行深度,而不是铬 |

系统使用无阴影,无玻璃形态,无梯度. 深度完全来自摄影(照明,镜头,主题框架),以及黑色页面底色和最小线的对比. `{colors.surface-card}`.

### 装饰性深度
- None. Bugatti is the only luxury-auto brand without a single decorative element. There is no stripe, no badge, no heritage emblem on the marketing site outside the wordmark itself.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body, top nav, footer, photo bands |
| Soft hairline | 1px `{colors.hairline}` border | Section dividers, table rows |
| Card surface | `{colors.surface-card}` background — no shadow | Career callout, newsroom article container |
| Photographic depth | Full-bleed photography with edge-to-edge crop | Hero bands, model showcases — depth via subject + lens, not chrome |

The system uses no shadows, no glassmorphism, no gradients. Depth comes entirely from photography (lighting, lens, subject framing) and from the contrast between black canvas and minimally-elevated `{colors.surface-card}`.

### Decorative Depth
- None. Bugatti is the only luxury-auto brand without a single decorative element. There is no stripe, no badge, no heritage emblem on the marketing site outside the wordmark itself.


<!-- source:end -->

</details>

## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | All cards, photo containers, inputs, spec cells — the dominant radius |
| `{rounded.pill}` | 9999px | All buttons (the only rounded element in the system) |
| `{rounded.full}` | 9999px / 50% | Circular 图标按钮, 浮雕表面 |

半径等级是二进制:除按键外,其他所有东西都是长方形的,都是胶囊形。没有 4px,没有 8px,没有 12px 两者之间,它们会感觉"设计"而不是"工程".

### 摄影几何
Hero photography fills full-width with no rounding. Photo cards inside grids retain `{rounded.none}` (0px) corners, edge-to-edge images. Model detail shots use 16:9 or wider cinema-aspect ratios. Newsroom thumbnails use 16:9 with 0px corners. There are no avatars or rounded photo crops anywhere on the marketing site.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | All cards, photo containers, inputs, spec cells — the dominant radius |
| `{rounded.pill}` | 9999px | All buttons (the only rounded element in the system) |
| `{rounded.full}` | 9999px / 50% | Circular icon buttons, avatar surfaces |

The radius hierarchy is binary: rectangular for everything except buttons, which are pills. No 4px, no 8px, no 12px in between — those would feel "designed" rather than "engineered."

### Photography Geometry
Hero photography fills full-width with no rounding. Photo cards inside grids retain `{rounded.none}` (0px) corners, edge-to-edge images. Model detail shots use 16:9 or wider cinema-aspect ratios. Newsroom thumbnails use 16:9 with 0px corners. There are no avatars or rounded photo crops anywhere on the marketing site.


<!-- source:end -->

</details>

## 组件

### 顶端导航

**`top-nav`** — A 56px- 全部都说 transparent 导航栏覆盖在每个页面顶端的首屏照片上。没有填充,没有边框。卡莉丝“MENU”位于左侧,中间是 **wordmark-display** ("BUGATTI" , 以 14px Bugatti Display 与 6px ),然后用一个小袋图标右侧“STORE”。 `{typography.nav-link}` (Bugatti Monospace, 12px, 2px 跟踪,大写。

**`wordmark-display`** — The "BUGATTI" wordmark itself. Bugatti Display at 14px, weight 400, 6px letter-spacing. The widest tracking in the system. Centered in the nav bar at every breakpoint.

### 按钮

**`button-primary`** — The signature primary CTA. Background **transparent**, text `{colors.on-dark}` (white), 1px white outline, rounded `{rounded.pill}` (9999px), padding 14px × 32px, height 44px. Type `{typography.button}` — Bugatti Monospace, uppercase, 14px, 2.5px tracking. The transparent fill is unique to Bugatti — every other luxury-auto brand uses a filled or outlined-with-text-shift button. Bugatti's transparent pill IS the button.

**`button-icon`** — Circular icon buttons (carousel arrows, share, language switcher). 40 × 40px, transparent background, white outline 1px, rounded `{rounded.full}`. Same outline-only treatment as the primary button.

**`text-link`** ——内置体链接于 `{colors.link}` (#c3d9f3,系统唯一的非色素颜色。默认下划线。类型继承 `{typography.body-md}` (Bugatti Text Regular, serif).

### 纸牌和集装箱

**`hero-photo-band`** ——全宽黑色带带全流汽车摄影. the h.1 输入 `{typography.display-xl}` 坐在顶部的照片上 中间对齐 经常用小的 Bugatti Monospace 标题( 4)`{typography.caption-uppercase}`) 标题下方和单曲 `{component.button-primary}` 垂直粘贴 96px-200px 视照片高度而定。

**`career-callout-card`** — A small right-aligned card that floats over the hero photo on the homepage with a recruiting prompt ("Are you ready for a new adventure?"). Background `{colors.surface-card}`, rounded `{rounded.none}` (0px), padding `{spacing.md}` (16px), width 320px. Carries a small thumbnail at top, body line, and a `{typography.caption-uppercase}` link ("EXPLORE OUR OPPORTUNITIES").

**`model-photo-card`** — Used in model showcases (Tourbillon page, model lineup grid). Background `{colors.canvas}` (no card surface — just photo on black), rounded `{rounded.none}`. Top: 16:9 or 21:9 hero shot of the model. Below: model name in `{typography.display-md}` (32px Bugatti Display, 2px tracking), short specs line in `{typography.caption-uppercase}` (11px Bugatti Monospace), a `{component.text-link}` ("DISCOVER").

**`newsroom-article-card`** — Used on the newsroom page (newsroom.bugatti.com). Background `{colors.canvas}` with hairline border, rounded `{rounded.none}`, padding `{spacing.lg}` (24px). Carries a 16:9 thumbnail, a `{component.date-pill}` ("12. NOVEMBER 2025"), a `{typography.title-md}` headline, and a body excerpt in `{typography.body-md}` (Bugatti Text Regular serif).

**`career-listing-row`** — Each row of the careers page job listing. Transparent background, padding 24px vertical, hairline divider between rows. Job title in `{typography.title-md}` (Bugatti Display 20px) at left; location + department in `{typography.caption-uppercase}` at right; chevron arrow (→) at far right.

**`spec-cell`** ——车辆技术谱显示在模型细节页(Tourbilon engine specs)上. Transparent 带有带细边线的单元格间分隔符的背景(不是卡片内的单元格间)。 `{typography.title-md}` 顶部和标签 `{typography.caption-uppercase}` 铺垫 24px 垂直键。

### 输入表单( F)

**`text-input`** — Standard text input on dark canvas. Background **transparent**, text `{colors.on-dark}`, 1px hairline-strong bottom border only (no top, left, right border), padding 12px × 0px, height 44px. Type `{typography.body-md}` (Bugatti Text Regular). Placeholder in `{colors.muted}`. Focus thickens the bottom border to white.

### 标记说明( C)

**`caption-overlay`** ——图片覆盖标题(如"HOORING The OYRON及其VISIONARION CREATOR"). . . . `{typography.caption-uppercase}` (Bugatti Monospace, 11px, 2px 追踪,白色。

**`category-tag`** + **`date-pill`** - 两者均构成 transparent 内嵌标签 `{typography.caption-uppercase}`颜色 `{colors.muted}`中,没有背景填充,也没有边框。“tag”是类型本身。

### 中导/页脚

**`cta-band-photo`** — A pre-footer "Discover Bugatti" band with full-bleed photography of a Bugatti car at speed and a centered headline in `{typography.display-md}` + a `{component.button-primary}` below. Vertical padding 80px. Inherits the editorial gravity of the hero through full-bleed photography.

**`footer`** — Black footer that closes every page. Background `{colors.canvas}`, text `{colors.muted}`. 4-column link list at desktop covering Bugatti / Models / Heritage / Connect. Vertical padding 64px. Bottom row carries the copyright line in `{typography.body-sm}` (Bugatti Text Regular). The wordmark sits center-aligned at the very bottom. The footer never inverts.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Components

### Top Navigation

**`top-nav`** — A 56px-tall transparent nav bar overlaid on the hero photo at the top of every page. No fill, no border. Carries "MENU" at left, the centered **wordmark-display** ("BUGATTI" in 14px Bugatti Display with 6px tracking), and "STORE" at right with a small bag icon. All labels in `{typography.nav-link}` (Bugatti Monospace, 12px, 2px tracking, uppercase).

**`wordmark-display`** — The "BUGATTI" wordmark itself. Bugatti Display at 14px, weight 400, 6px letter-spacing. The widest tracking in the system. Centered in the nav bar at every breakpoint.

### Buttons

**`button-primary`** — The signature primary CTA. Background **transparent**, text `{colors.on-dark}` (white), 1px white outline, rounded `{rounded.pill}` (9999px), padding 14px × 32px, height 44px. Type `{typography.button}` — Bugatti Monospace, uppercase, 14px, 2.5px tracking. The transparent fill is unique to Bugatti — every other luxury-auto brand uses a filled or outlined-with-text-shift button. Bugatti's transparent pill IS the button.

**`button-icon`** — Circular icon buttons (carousel arrows, share, language switcher). 40 × 40px, transparent background, white outline 1px, rounded `{rounded.full}`. Same outline-only treatment as the primary button.

**`text-link`** — Inline body links in `{colors.link}` (#c3d9f3, the only non-monochrome color in the system). Underlined by default. Type inherits `{typography.body-md}` (Bugatti Text Regular, serif).

### Cards & Containers

**`hero-photo-band`** — Full-width black band with full-bleed automotive photography. The h1 in `{typography.display-xl}` sits center-aligned over the photo near the top, often paired with a small Bugatti Monospace caption (`{typography.caption-uppercase}`) below the headline and a single `{component.button-primary}` further down. Vertical padding 96px-200px depending on photo height.

**`career-callout-card`** — A small right-aligned card that floats over the hero photo on the homepage with a recruiting prompt ("Are you ready for a new adventure?"). Background `{colors.surface-card}`, rounded `{rounded.none}` (0px), padding `{spacing.md}` (16px), width 320px. Carries a small thumbnail at top, body line, and a `{typography.caption-uppercase}` link ("EXPLORE OUR OPPORTUNITIES").

**`model-photo-card`** — Used in model showcases (Tourbillon page, model lineup grid). Background `{colors.canvas}` (no card surface — just photo on black), rounded `{rounded.none}`. Top: 16:9 or 21:9 hero shot of the model. Below: model name in `{typography.display-md}` (32px Bugatti Display, 2px tracking), short specs line in `{typography.caption-uppercase}` (11px Bugatti Monospace), a `{component.text-link}` ("DISCOVER").

**`newsroom-article-card`** — Used on the newsroom page (newsroom.bugatti.com). Background `{colors.canvas}` with hairline border, rounded `{rounded.none}`, padding `{spacing.lg}` (24px). Carries a 16:9 thumbnail, a `{component.date-pill}` ("12. NOVEMBER 2025"), a `{typography.title-md}` headline, and a body excerpt in `{typography.body-md}` (Bugatti Text Regular serif).

**`career-listing-row`** — Each row of the careers page job listing. Transparent background, padding 24px vertical, hairline divider between rows. Job title in `{typography.title-md}` (Bugatti Display 20px) at left; location + department in `{typography.caption-uppercase}` at right; chevron arrow (→) at far right.

**`spec-cell`** — Vehicle technical-spec display on model-detail pages (Tourbillon engine specs). Transparent background with hairline dividers between cells (not between cells inside a card). Each spec shows a value in `{typography.title-md}` at top and a label in `{typography.caption-uppercase}` below. Padding 24px vertical.

### Inputs & Forms

**`text-input`** — Standard text input on dark canvas. Background **transparent**, text `{colors.on-dark}`, 1px hairline-strong bottom border only (no top, left, right border), padding 12px × 0px, height 44px. Type `{typography.body-md}` (Bugatti Text Regular). Placeholder in `{colors.muted}`. Focus thickens the bottom border to white.

### Tags & Captions

**`caption-overlay`** — Photo-overlay caption (e.g., "HONORING THE OEYRON AND ITS VISIONARY CREATOR"). Centered or left-aligned over photography in `{typography.caption-uppercase}` (Bugatti Monospace, 11px, 2px tracking, white).

**`category-tag`** + **`date-pill`** — Both render as transparent inline labels in `{typography.caption-uppercase}`, color `{colors.muted}`. No background fill, no border. The "tag" is the type itself.

### CTA / Footer

**`cta-band-photo`** — A pre-footer "Discover Bugatti" band with full-bleed photography of a Bugatti car at speed and a centered headline in `{typography.display-md}` + a `{component.button-primary}` below. Vertical padding 80px. Inherits the editorial gravity of the hero through full-bleed photography.

**`footer`** — Black footer that closes every page. Background `{colors.canvas}`, text `{colors.muted}`. 4-column link list at desktop covering Bugatti / Models / Heritage / Connect. Vertical padding 64px. Bottom row carries the copyright line in `{typography.body-sm}` (Bugatti Text Regular). The wordmark sits center-aligned at the very bottom. The footer never inverts.


<!-- source:end -->

</details>

## 设计建议与禁忌

### 执行
- 锁定每个页,并配有全血的汽车摄影。汽车是品牌辨识度;铬完全脱落。
- 保留 UPPERCASE 中显示的所有标题 Bugatti Display 与 2-4px letter-spacing。字签会得到 6px.
- Use Bugatti Display for headlines, Bugatti Text Regular (serif!) for body, Bugatti Monospace for buttons + captions + nav. The trinity is unbreakable.
- 保留 `{component.button-primary}` transparent 含a 1px 白色轮廓。 transparent 药是品牌按钮。
- 使用重 400 到处都是,粗体打破了品牌声音——系统没有大胆的字重角色.
- 使用 `{spacing.section}` (120px)主要编辑乐队之间,白空间是品牌的一部分.
- 准备金 `{colors.link}` (#c3d9f3),仅用于内置锚链路,是系统唯一的非单色颜色.

### Don't
- 外面别带强调色颜色 `{colors.link}`. Bugatti品牌学科是全单色+摄影。 brand-blue 或 减 减 brand-red 解除合同。
- Don't bold any type. The system has no bold weight — every typeface stays at 400.
- Don't fill primary buttons. Transparent + outline only. A solid white button reads as off-brand.
- 区间间不要压缩白空间 120px 节奏是编辑节奏的一部分.
- Don't use rounded corners outside buttons. Cards, photos, inputs all stay at 0px. Rounded cards read as consumer-tech, not luxury-engineered.
- Don't tighten letter-spacing on display headlines. 2-4px tracking on Bugatti Display is non-negotiable.
- Don't use Bugatti Display in a button (use Bugatti Monospace) or Bugatti Monospace in a paragraph (use Bugatti Text Regular). The trinity split is the brand voice.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Do's and Don'ts

### Do
- Anchor every page with full-bleed automotive photography. The cars are the brand voltage; chrome backs off entirely.
- Keep all display headlines in UPPERCASE Bugatti Display with 2-4px letter-spacing. The wordmark gets 6px.
- Use Bugatti Display for headlines, Bugatti Text Regular (serif!) for body, Bugatti Monospace for buttons + captions + nav. The trinity is unbreakable.
- Keep `{component.button-primary}` transparent with a 1px white outline. The transparent pill IS the brand button.
- Use weight 400 everywhere. Bold breaks the brand voice — the system has no bold weight role.
- Use `{spacing.section}` (120px) between major editorial bands. The whitespace is part of the brand.
- Reserve `{colors.link}` (#c3d9f3) for inline anchor links only. It's the system's only non-monochrome color.

### Don't
- Don't introduce any accent color outside `{colors.link}`. Bugatti's brand discipline is total monochrome + photography. Adding a brand-blue or brand-red breaks the contract.
- Don't bold any type. The system has no bold weight — every typeface stays at 400.
- Don't fill primary buttons. Transparent + outline only. A solid white button reads as off-brand.
- Don't compress whitespace between sections. The 120px rhythm is part of the editorial pacing.
- Don't use rounded corners outside buttons. Cards, photos, inputs all stay at 0px. Rounded cards read as consumer-tech, not luxury-engineered.
- Don't tighten letter-spacing on display headlines. 2-4px tracking on Bugatti Display is non-negotiable.
- Don't use Bugatti Display in a button (use Bugatti Monospace) or Bugatti Monospace in a paragraph (use Bugatti Text Regular). The trinity split is the brand voice.


<!-- source:end -->

</details>

## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 768px | 汉堡导航;首屏h1 64→32px; 职业点名卡隐藏; 图片带保持全血; footer 4 科罗尔 – 1 |
| 平板 | 768–1024px | 顶端导航保持最小(MENU+字号+STORE); 2- 新闻室网格;职业排全宽 |
| Desktop | 1024–1440px | Full minimal top-nav; 2-up newsroom grid; spec tables 4-up |
| 宽 | > 1440px | 与呼吸室较多的桌面相同; 最大内容 1280px |

### 触控区域
- `{component.button-primary}` 最少实现 44 × 44px (比对WCAG AA).
- `{component.button-icon}` 完全就是这个意思 40 × 40px.
- `{component.text-input}` 高度为 44px.
- 职业上市行 24px 垂直粘贴; 有效的水龙头区域会合 44px+ 与周围间隔。

### 折叠战略
- Top nav stays minimal at all breakpoints (MENU label + wordmark + STORE label). On mobile the labels hide behind a hamburger but the wordmark stays centered.
- 首屏摄影在每个断点都保持全血,照片作物调整——桌面上更宽的作物,移动上垂直的作物.
- The career callout card on the homepage hides at < 768px (it's a desktop-only floating element).
- 2- 新闻室的网格崩溃到 1- 上边 < 768px.
- 光谱单元格从 4- 最多为 2- 最多为 1-up;无论列数多少,数值都保持相同的显示大小。

### 图像行为
- 首屏摄影作物反应敏捷——桌面上更宽的作物,移动上垂直的作物. Bugatti 汽车总是以运动或角显示(从未显示过平面图)。
- 保留新闻室缩略图 16:9 比率和 0px 转角


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→32px; career callout card hides; photo bands stay full-bleed; footer 4 cols → 1 |
| Tablet | 768–1024px | Top nav stays minimal (MENU + wordmark + STORE); 2-up newsroom grid; career rows full-width |
| Desktop | 1024–1440px | Full minimal top-nav; 2-up newsroom grid; spec tables 4-up |
| Wide | > 1440px | Same as desktop with more breathing room; max content 1280px |

### Touch Targets
- `{component.button-primary}` renders at minimum 44 × 44px (matches WCAG AAA).
- `{component.button-icon}` is exactly 40 × 40px.
- `{component.text-input}` height is 44px.
- Career listing rows have 24px vertical padding; effective tap area meets 44px+ with surrounding spacing.

### Collapsing Strategy
- Top nav stays minimal at all breakpoints (MENU label + wordmark + STORE label). On mobile the labels hide behind a hamburger but the wordmark stays centered.
- Hero photography stays full-bleed at every breakpoint. Photo crops adjust — wider crops at desktop, vertical crops on mobile.
- The career callout card on the homepage hides at < 768px (it's a desktop-only floating element).
- 2-up newsroom grid collapses to 1-up at < 768px.
- Spec cells reflow from 4-up to 2-up to 1-up; values stay at the same display size regardless of column count.

### Image Behavior
- Hero photography crops responsively — wider crops at desktop, vertical crops on mobile. Bugatti cars are always shown in motion or at-angle (never flat profiles).
- Newsroom thumbnails retain 16:9 ratio and 0px corners.


<!-- source:end -->

</details>

## 迭代指南

1. 一次关注一个组件。请参考其 YAML 密钥( Q)`{component.hero-photo-band}`, `{component.career-callout-card}`).
2. New components default to `{rounded.none}` (0px). Only `{component.button-primary}` and `{component.button-icon}` use pill / full radius.
3. 备选案文作为单独的条目在 `components:`.
4. 使用 `{token.refs}` 到处都是,从不内含六分法。
5. 文档永远不要徘徊。 默认和主动状态/ 已显示状态 。
6. Display headlines stay UPPERCASE Bugatti Display 400 with 2-4px tracking. Body stays sentence-case Bugatti Text Regular (serif). Button labels stay Bugatti Monospace 2.5px tracking. The trinity does not blur.
7. When in doubt about emphasis: bigger photography before bigger type.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key (`{component.hero-photo-band}`, `{component.career-callout-card}`).
2. New components default to `{rounded.none}` (0px). Only `{component.button-primary}` and `{component.button-icon}` use pill / full radius.
3. Variants live as separate entries in `components:`.
4. Use `{token.refs}` everywhere — never inline hex.
5. Never document hover. Default and Active/Pressed states only.
6. Display headlines stay UPPERCASE Bugatti Display 400 with 2-4px tracking. Body stays sentence-case Bugatti Text Regular (serif). Button labels stay Bugatti Monospace 2.5px tracking. The trinity does not blur.
7. When in doubt about emphasis: bigger photography before bigger type.


<!-- source:end -->

</details>

## 已知缺口

- The dembrandt frequency analyzer captured only 3 colors at root level (`#000000`, `#999999`, `#c3d9f3`). The white text (#ffffff) and dark surface tones (`#0d0d0d`, `#141414`, `#1f1f1f`) were inferred from screenshot — Bugatti's pages are so monochrome that the frequency-based analyzer didn't surface body text or surface tones as distinct palette entries.
- The three Bugatti typefaces (Display, Text Regular, Monospace) are licensed to Bugatti and not available as web fonts publicly. Substitutes are documented in the typography section.
- 动画和过渡时间(图片木马过渡,悬浮-阅读菜单,配置动画)不在范围.
- 格式验证状态超出下划线 `{component.text-input}` 不被提取——错误/成功状态是从一般标准推断出来的,而不是从分析过的表面推断出来的。
- 配置器表面(车辆建置页,带有自定义的油漆/内部拾取器)没有在分析的URL集中;其监视网格、定制控制以及价格汇总卡没有在此记录。
- 德语新闻室(新闻室.bugatticom/de)与英语共享系统. Bugatti.com表面——没有观察到设计-系统级别差异,只有语言本地化.
- 实际的Tourbillon页面作为被捕获截图中一个稀少的最小页面提供,暗示要么懒惰内容,要么是交互式的配置器风格UI,在静态截图中并不完全渲染;引擎-光谱布局由一般奢侈自发图案记录下来,被捕获的光谱细胞符记述.

<details>
<summary>英文原文</summary>

<!-- source:body -->
## Known Gaps

- The dembrandt frequency analyzer captured only 3 colors at root level (`#000000`, `#999999`, `#c3d9f3`). The white text (#ffffff) and dark surface tones (`#0d0d0d`, `#141414`, `#1f1f1f`) were inferred from screenshot — Bugatti's pages are so monochrome that the frequency-based analyzer didn't surface body text or surface tones as distinct palette entries.
- The three Bugatti typefaces (Display, Text Regular, Monospace) are licensed to Bugatti and not available as web fonts publicly. Substitutes are documented in the typography section.
- Animation and transition timings (photo carousel transitions, hover-reveal of menu, configurator animations) are not in scope.
- Form validation states beyond the underline-only `{component.text-input}` are not extracted — error / success states are inferred from general standards, not from the analyzed surfaces.
- The configurator surface (vehicle build pages with custom paint / interior pickers) was not in the analyzed URL set; its swatch grid, customization controls, and price-summary card are not documented here.
- The German-language newsroom (newsroom.bugatti.com/de) shares the system with the English Bugatti.com surfaces — no design-system-level differences observed, only language localization.
- The actual Tourbillon page rendered as a sparse minimal page in the captured screenshot, suggesting either lazy-loaded content or an interactive configurator-style UI that doesn't render fully in static screenshots; engine-spec layout is documented from general luxury-auto patterns informed by the captured spec cell tokens.

<!-- source:end -->

</details>

## 设计词元原值

An austere luxury-automotive interface that uses near-pure black canvas, white uppercase letterspaced display, and full-bleed automotive photography as the only voltage. The system runs three custom Bugatti typefaces — Bugatti Display, Bugatti Text Regular, and Bugatti Monospace — and combines them at modest weights with wide tracking to feel European-engineered, hyper-minimal, and quietly expensive. There is no accent color, no decorative element, no chrome — only photography, typography, and the brand wordmark.

```yaml
---
version: alpha
name: Bugatti-design-analysis
description: An austere luxury-automotive interface that uses near-pure black canvas, white uppercase letterspaced display, and full-bleed automotive photography as the only voltage. The system runs three custom Bugatti typefaces — Bugatti Display, Bugatti Text Regular, and Bugatti Monospace — and combines them at modest weights with wide tracking to feel European-engineered, hyper-minimal, and quietly expensive. There is no accent color, no decorative element, no chrome — only photography, typography, and the brand wordmark.

colors:
  primary: "#ffffff"
  ink: "#ffffff"
  body: "#cccccc"
  body-strong: "#e6e6e6"
  muted: "#999999"
  muted-soft: "#666666"
  hairline: "#262626"
  hairline-strong: "#3a3a3a"
  canvas: "#000000"
  surface-soft: "#0d0d0d"
  surface-card: "#141414"
  surface-elevated: "#1f1f1f"
  on-primary: "#000000"
  on-dark: "#ffffff"
  on-photo: "#ffffff"
  link: "#c3d9f3"
  warning: "#d4a017"
  success: "#5fa657"

typography:
  display-xl:
    fontFamily: "Bugatti Display, sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 4px
  display-lg:
    fontFamily: "Bugatti Display, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 3px
  display-md:
    fontFamily: "Bugatti Display, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 2px
  display-sm:
    fontFamily: "Bugatti Display, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 1.5px
  wordmark:
    fontFamily: "Bugatti Display, serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 6px
  title-md:
    fontFamily: "Bugatti Display, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 1px
  title-sm:
    fontFamily: "Bugatti Display, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 1.5px
  caption-uppercase:
    fontFamily: "Bugatti Monospace, ui-monospace, monospace"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 2px
  body-md:
    fontFamily: "Bugatti Text Regular, serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Bugatti Text Regular, serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Bugatti Monospace, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 2.5px
  nav-link:
    fontFamily: "Bugatti Monospace, ui-monospace, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 2px

rounded:
  none: 0px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  section: 120px

components:
  button-primary:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 32px
    height: 44px
  button-icon:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    size: 40px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.link}"
    typography: "{typography.button}"
  top-nav:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 56px
  wordmark-display:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.wordmark}"
  hero-photo-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px
  caption-overlay:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-uppercase}"
  career-callout-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 16px
    width: 320px
  model-photo-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
  newsroom-article-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: 24px
  career-listing-row:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    padding: 24px 0
  text-input:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 12px 0
    height: 44px
  spec-cell:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    padding: 24px 0
  date-pill:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.caption-uppercase}"
  category-tag:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.caption-uppercase}"
  cta-band-photo:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    padding: 80px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: 64px
---
```
