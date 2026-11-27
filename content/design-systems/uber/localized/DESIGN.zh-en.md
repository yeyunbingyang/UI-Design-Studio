# Uber · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。




<details>
<summary>英文原文</summary>

<!-- source:body -->



<!-- source:end -->

</details>

## 概览

Uber is a transportation-and-delivery super-app — ride, eats, freight, the whole urban logistics layer — and the brand's web surface signals that scale through restraint: no third colour, no accent palette, no illustration that fights the headline. The page is structurally a black-and-white duet, where black `{colors.primary}` is the conversion anchor (every CTA pill, every nav login button, the footer fill) and `{colors.canvas}` white carries everything else. The only consistent decoration is a body of editorial 4:3 illustrations — riders, drivers, parking lots, cars-on-highway — that ground the marketing without leaking accent colour into the system.

Type is the second decisive voice. Two custom faces carry every page: `UberMove` at weight 700 for headlines (32 – 52 px display sizes with tight 1.22 – 1.25 line-height, never letter-spaced), and `UberMoveText` at weights 400 / 500 for body, button, and link. The pairing reads as engineering-grade — no italic, no decorative weight, no tracking flourish. Headlines are sentence-case; eyebrows are uppercase only when used as the section eyebrow ("WHY BECOME"); buttons are sentence-case.

单形状符号是避孕药。每轮交互元素回合到 `{rounded.pill}` 999 px ——初级CTA,二级CTA,微妙灰色胶囊形,白色浮药,类芯片,app-download徽章. Cards and round. `{rounded.xl}` 16 px; 更大的"去买" 2026" 年度秀卡使用相同的 16 px 形状,仅标量。首屏骑行请求表上的标签切换使用非形状 `{rounded.pill-tab}` 36 px 几乎不漏,故意比犬科更紧 999 px 胶囊形.

**关键特征 :**
- 一种双色的 CTA 等级: 黑色 `{colors.primary}` 初级转化目标避孕药;白色 `{colors.canvas}` 二级避孕药(有时带有软滴影),细微灰色 `{colors.canvas-soft}` 胶囊形用于三级或芯片变种.
- 胶囊形是单一的标志形状—— `{rounded.pill}` 999 px 上,除标签切换(`{rounded.pill-tab}` 36 px)和较大的产品卡(`{rounded.xl}` 16 px).
- Every headline is sentence-case in `{typography.display-xl}` / `{typography.display-xxl}` weight 700; no all-caps display.
- 编辑 4:3 骑手/驾驶员/汽车的插图是唯一一致的装饰系统;没有梯度,没有大气背景,没有不是卡片提示的阴影.
- A signature alternating-band rhythm: white feature card → black promo card (with white text and white CTA) → white feature card → black footer. The black bands are NOT hero-only; they appear mid-page as promo callouts.
- 首屏身上的签名骑行请求表卡:皮针输入+目的地输入+日期/时间芯片+黑色"见价"胶囊形,全部堆在a内 `{rounded.xl}` 暗影卡片(原变种).


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Overview

Uber is a transportation-and-delivery super-app — ride, eats, freight, the whole urban logistics layer — and the brand's web surface signals that scale through restraint: no third colour, no accent palette, no illustration that fights the headline. The page is structurally a black-and-white duet, where black `{colors.primary}` is the conversion anchor (every CTA pill, every nav login button, the footer fill) and `{colors.canvas}` white carries everything else. The only consistent decoration is a body of editorial 4:3 illustrations — riders, drivers, parking lots, cars-on-highway — that ground the marketing without leaking accent colour into the system.

Type is the second decisive voice. Two custom faces carry every page: `UberMove` at weight 700 for headlines (32 – 52 px display sizes with tight 1.22 – 1.25 line-height, never letter-spaced), and `UberMoveText` at weights 400 / 500 for body, button, and link. The pairing reads as engineering-grade — no italic, no decorative weight, no tracking flourish. Headlines are sentence-case; eyebrows are uppercase only when used as the section eyebrow ("WHY BECOME"); buttons are sentence-case.

The single shape signature is the pill. Every interactive element rounds to `{rounded.pill}` 999 px — primary CTA, secondary CTA, subtle gray pill, white floating pill, category chip, app-download badge. Cards and surfaces round to `{rounded.xl}` 16 px; the larger "Go Get 2026" annual-showcase card uses the same 16 px shape, just at scale. The tab-toggle on the hero ride-request form uses an off-shape `{rounded.pill-tab}` 36 px — barely-pill, deliberately tighter than the canonical 999 px pill.

**Key Characteristics:**
- A two-colour CTA hierarchy: black `{colors.primary}` pill for primary conversion targets; white `{colors.canvas}` pill (sometimes with a soft drop shadow) for secondary; subtle gray `{colors.canvas-soft}` pill for tertiary or chip variants.
- The pill is the single signature shape — `{rounded.pill}` 999 px on every interactive element except the tab-toggle (`{rounded.pill-tab}` 36 px) and the larger product cards (`{rounded.xl}` 16 px).
- Every headline is sentence-case in `{typography.display-xl}` / `{typography.display-xxl}` weight 700; no all-caps display.
- Editorial 4:3 illustrations of riders / drivers / cars are the only consistent decorative system; no gradients, no atmospheric backdrops, no shadows that aren't card-elevation hints.
- A signature alternating-band rhythm: white feature card → black promo card (with white text and white CTA) → white feature card → black footer. The black bands are NOT hero-only; they appear mid-page as promo callouts.
- A signature ride-request form card on the hero: pickup pin input + destination input + date/time chip + black "See prices" pill, all stacked inside a `{rounded.xl}` shadowed card.


<!-- source:end -->

</details>

## 配色

### 品牌和 强调色
- **墨黑笔** (`{colors.primary}` — `#000000`:品牌是唯一的转换颜色,每一颗初级CTA丸,页脚填充,每个暗色宣传带,每个导航登录按钮,系统没有二级强调色.
- **表面按下** (`{colors.surface-pressed}` — `#e2e2e2`:按态填充白丸——一种软灰色,只在活性/按态中使用.
- **Black Elevated** (`{colors.black-elevated}` — `#282828`): A near-black used on hover for the translucent white tab-toggle pill. Documented as a system colour because it appears on a recurring brand control.

### 表面
- **页面底色** (`{colors.canvas}` — `#ffffff`: 默认的页面背景.
- **软画帘** (`{colors.canvas-soft}` — `#efefef`: 类芯片的软灰色填充,骑行-求车卡内方的成形-输入行,以及微妙的胶囊形按钮.
- **软罐头** (`{colors.canvas-softer}` — `#f3f3f3`:一种稍轻的灰色,用作白色表面的嵌入式填充物.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — `#000000`:光表面的每一个标题和身体段落.
- **Body** (`{colors.body}` — `#5e5e5e`): Secondary text — captions, sub-headings, supporting copy.
- **细边线中间** (`{colors.hairline-mid}` — `#4b4b4b`:一种中格用于页脚内侧的哑联文本和面包屑风格的导航.
- **静音** (`{colors.mute}` — `#afafaf`:最轻的文本角色——占位符文本,精细印刷,低优先级元数据.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text on `{colors.ink}` surfaces (footer, dark promo bands).

### 语义
The brand does not maintain a separate error / success / warning palette in its public marketing surface. Validation cues come from the primary black or from the brand's editorial illustrations. The `#0000ee` link colour is the system's only chromatic — it's the browser-default link blue, appearing in body-copy inline links inside legal / footer text.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Colors

### Brand & Accent
- **Ink Black** (`{colors.primary}` — `#000000`): The brand's only conversion colour. Every primary CTA pill, the footer fill, every dark promo band, every nav login button. The system has no secondary accent.
- **Surface Pressed** (`{colors.surface-pressed}` — `#e2e2e2`): The pressed-state fill for white pills — a soft grey that's used only in active / pressed states.
- **Black Elevated** (`{colors.black-elevated}` — `#282828`): A near-black used on hover for the translucent white tab-toggle pill. Documented as a system colour because it appears on a recurring brand control.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): The default page background.
- **Canvas Soft** (`{colors.canvas-soft}` — `#efefef`): The soft gray fill for category chips, form-input rows inside the ride-request card, and subtle pill buttons.
- **Canvas Softer** (`{colors.canvas-softer}` — `#f3f3f3`): A slightly lighter gray used as a nested-input fill on white surfaces.

### Text
- **Ink** (`{colors.ink}` — `#000000`): Every heading and body paragraph on light surfaces.
- **Body** (`{colors.body}` — `#5e5e5e`): Secondary text — captions, sub-headings, supporting copy.
- **Hairline Mid** (`{colors.hairline-mid}` — `#4b4b4b`): A mid-gray used for muted link text inside footer columns and breadcrumb-style nav.
- **Mute** (`{colors.mute}` — `#afafaf`): The lightest text role — placeholder text, fine print, low-priority metadata.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text on `{colors.ink}` surfaces (footer, dark promo bands).

### Semantic
The brand does not maintain a separate error / success / warning palette in its public marketing surface. Validation cues come from the primary black or from the brand's editorial illustrations. The `#0000ee` link colour is the system's only chromatic — it's the browser-default link blue, appearing in body-copy inline links inside legal / footer text.


<!-- source:end -->

</details>

## 字体排版

### 字体家族
Two custom faces carry the entire system:

1. **A custom geometric display sans** (extracted as `UberMove`) for every headline. Weight 700 only; no italic; no tracking variation. Sizes range from `display-sm` 20 px up to `display-xxl` 52 px on the hero. Line-heights tighten to 1.22 – 1.25 at display sizes for a poured-on-the-page look.
2. **A custom text sans** (extracted as `UberMoveText`) for body, button, link, and small headings. Weights 400 and 500 are the working pair. Used at 12 – 18 px; 24 px maximum for ride-request form labels. Tracking is always neutral.

两人面孔共享家族DNA,但绝不重合角色——显示面孔从未带身体段落;文字面孔从未带首屏头条.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 使用 |
|---|---|---|---|---|
| `{typography.display-xxl}` | 52px | 700 | 64px | 首屏头条("随身携带" Uber","想什么时候开车". |
| `{typography.display-xl}` | 36px | 700 | 44px | 页面部分头条("后期计划","安全,简化"). |
| `{typography.display-lg}` | 32px | 700 | 40px | Promo-card 头条。 |
| `{typography.display-md}` | 24px | 700 | 32px | 牌名,插图宣传头条. |
| `{typography.display-sm}` | 20px | 700 | 28px | 副卡标题。 |
| `{typography.body-lg}` | 18px | 500 | 24px | 领带段落和更大的身体。 |
| `{typography.body-md}` | 16px | 400 | 24px | 默认段落正文. |
| `{typography.body-md-strong}` | 16px | 500 | 20px | 粗体内衬体和大多数按钮标签. |
| `{typography.body-sm}` | 14px | 400 | 20px | 说明,二级元数据。 |
| `{typography.body-sm-strong}` | 14px | 500 | 16px | 粗体标题/ 芯片标签 。 |
| `{typography.caption}` | 12px | 400 | 20px | 精细的指纹,页脚的副线。 |
| `{typography.button-large}` | 18px | 500 | 24px | 骑行请求表内有大圆形按钮. |
| `{typography.button-md}` | 16px | 500 | 20px | 默认按钮标签 。 |

### 原则
- **Sentence-case is the voice.** No all-caps headlines. Eyebrow tags ("WHY BECOME") are the rare exception.
- **Weight 700 is for headlines; weight 500 is for buttons and emphasis.** Don't promote button labels to 700.
- **追踪没有繁荣。** 显示面部从不显示字母间距,正反两面.
- **两人面相,两人角色.** UberMove 用于展示; UberMoveText 永远不要穿过溪流

### Note on Font Substitutes
两种面孔是专有的,开源替代品:
- **显示色素** — *Inter* 字重 700 与 `font-feature-settings: "ss01"` 启用的来得最近 。 *Geist* 字重 700 也是第二好的选择。
- **Text sans** — *Inter* weights 400 / 500 match the geometric width and x-height. *Plus Jakarta Sans* is a softer alternative if the brand wants a less neutral feel.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Typography

### Font Family
Two custom faces carry the entire system:

1. **A custom geometric display sans** (extracted as `UberMove`) for every headline. Weight 700 only; no italic; no tracking variation. Sizes range from `display-sm` 20 px up to `display-xxl` 52 px on the hero. Line-heights tighten to 1.22 – 1.25 at display sizes for a poured-on-the-page look.
2. **A custom text sans** (extracted as `UberMoveText`) for body, button, link, and small headings. Weights 400 and 500 are the working pair. Used at 12 – 18 px; 24 px maximum for ride-request form labels. Tracking is always neutral.

The two faces share a family DNA but never overlap roles — the display face never carries a body paragraph; the text face never carries a hero headline.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xxl}` | 52px | 700 | 64px | Hero headline ("Go anywhere with Uber", "Drive when you want"). |
| `{typography.display-xl}` | 36px | 700 | 44px | Page section headlines ("Plan for later", "Safety, simplified"). |
| `{typography.display-lg}` | 32px | 700 | 40px | Promo-card headlines. |
| `{typography.display-md}` | 24px | 700 | 32px | Card titles, illustrated-promo headlines. |
| `{typography.display-sm}` | 20px | 700 | 28px | Sub-card headings. |
| `{typography.body-lg}` | 18px | 500 | 24px | Lead paragraphs and larger body. |
| `{typography.body-md}` | 16px | 400 | 24px | Default paragraph body. |
| `{typography.body-md-strong}` | 16px | 500 | 20px | Bolded inline body and most button labels. |
| `{typography.body-sm}` | 14px | 400 | 20px | Captions, secondary metadata. |
| `{typography.body-sm-strong}` | 14px | 500 | 16px | Bold caption / chip labels. |
| `{typography.caption}` | 12px | 400 | 20px | Fine print, footer secondary lines. |
| `{typography.button-large}` | 18px | 500 | 24px | Large rounded buttons inside the ride-request form. |
| `{typography.button-md}` | 16px | 500 | 20px | Default button label. |

### Principles
- **Sentence-case is the voice.** No all-caps headlines. Eyebrow tags ("WHY BECOME") are the rare exception.
- **Weight 700 is for headlines; weight 500 is for buttons and emphasis.** Don't promote button labels to 700.
- **No tracking flourish.** The display face is never letter-spaced, positive or negative.
- **Two faces, two roles.** UberMove for display; UberMoveText for everything else. Never cross the streams.

### Note on Font Substitutes
The two faces are proprietary. Open-source substitutes:
- **Display sans** — *Inter* weight 700 with `font-feature-settings: "ss01"` enabled comes closest. *Geist* weight 700 is the second-best option.
- **Text sans** — *Inter* weights 400 / 500 match the geometric width and x-height. *Plus Jakarta Sans* is a softer alternative if the brand wants a less neutral feel.


<!-- source:end -->

</details>

## 布局

### 间距系统
- **基地单位**: 4 px。大多数捕获值是 4 和几个 6-px 子倍数( 双倍数)10, 14) 内扣垫.
- **脚本**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px.
- **分区编栏**: 营销乐队坐在那里 `{spacing.3xl}` 32 px 上/下加紧的页和 `{spacing.3xl} {spacing.3xl}` 用于首屏乐队; 宣传卡套入 `{spacing.2xl}` 24 px.
- **纸牌内部贴纸**: 内容卡坐落于 `{spacing.2xl}` 24 px; 骑行请求表使用 `{spacing.lg}` 16 px 保持形式紧凑。
- **内含空档**:按钮行,类芯片行,应用存储胶囊形行使用 `{spacing.md}` 12 px 兄弟姐妹之间。

### 网格容器( C)
- **最大宽度**: ~1200 px 容器; 以水平沟槽为中心 `{spacing.3xl}` 32 px 桌面上, `{spacing.lg}` 16 px 手机上,我刚从电话里找到的
- **列图案**:
  - Promo-card rows: 2-up at desktop (image left + content right, alternating sides), 1-up at mobile.
  - 分类芯片:水平弹性带包.
  - FAQ列:全宽单列.
  - App-download pills: 2-up at desktop (Rider + Driver), 1-up at mobile.

### 白空间哲学
Card-to-card spacing carries the rhythm — between two stacked promo cards there's roughly a full `{spacing.3xl}` 32 px gutter; inside a card the headline / paragraph / CTA stack is tight (`{spacing.sm}` 8 px between siblings). The black promo bands and the footer have no internal hairlines — content sits on flat ink with white text.

### 反应战略

#### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 600px | 导航崩溃到汉堡包; 促销卡堆; 骑行请求表成为全宽的 。 |
| 移动全长 | 600–767px | 与 Mobile 相同;芯片行启用水平滚动 。 |
| 平板 | 768–1119px | 2- 上方宽度的上方促销网格;导航一直水平保持到 ≥ 1120 px. |
| Desktop | 1120–1135px | Full nav row visible; promo cards 2-up. |
| 桌面全长 | ≥ 1136px | 集装箱盖,在 ~1200 px; 乐队在内容中心时保持边缘对边缘。 |

#### 触控区域
The pill `button-primary` renders at ~44 px tall (10 px vertical padding + 24 px label line-height); the larger `button-large-rounded` at ~56 px. Both meet WCAG AAA at all breakpoints. Category chips inflate to ≥ 44 px tall through extra padding on touch viewports.

#### 折叠战略
- **Nav**: full link row + Help / Log in / Sign up pills at desktop. Collapses to logo + hamburger at mobile; menu overlays full-screen with the same link list stacked.
- **Ride-request form card**: at desktop, the form sits inside a max-490-px `{rounded.xl}` card with shadow. At mobile, full-width with edge-to-edge.
- **Promo cards**: at desktop, image-left + content-right (or alternating). At mobile, image always above content.
- **年度展示卡**: 平面从 a 。 2:3 桌面框架为 a 4:3 移动帧; 日期文本大小按比例调整.

#### 图像行为
- **编辑插图**: 4:3 或 减 减 16:9 硬尖矩形; 从未裁剪成圆形, 从未倾斜过。 外观保存 。
- **摄影**: 相同——平方形或景观;内框 `{rounded.xl}` 硬币卡。
- **地图在骑行请求流中**:在卡片内满血;圆角跟随母卡.
- **标记栏**: SVG 矢量,单色,一致高度.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Layout

### Spacing System
- **Base unit**: 4 px. Most captured values are multiples of 4 with a few 6-px sub-multiples (10, 14) inside button padding.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 6 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px.
- **Section padding**: marketing bands sit at `{spacing.3xl}` 32 px top/bottom on tighter pages and `{spacing.3xl} {spacing.3xl}` for hero bands; promo cards inset at `{spacing.2xl}` 24 px.
- **Card interior padding**: content cards sit at `{spacing.2xl}` 24 px; the ride-request form uses `{spacing.lg}` 16 px to keep the form compact.
- **Inline gap**: button rows, category chip rows, app-store pill rows use `{spacing.md}` 12 px between siblings.

### Grid & Container
- **Max width**: ~1200 px container; centred with horizontal gutters of `{spacing.3xl}` 32 px on desktop, `{spacing.lg}` 16 px on mobile.
- **Column patterns**:
  - Promo-card rows: 2-up at desktop (image left + content right, alternating sides), 1-up at mobile.
  - Category chips: horizontal flex with wrap.
  - FAQ rows: full-width single-column.
  - App-download pills: 2-up at desktop (Rider + Driver), 1-up at mobile.

### Whitespace Philosophy
Card-to-card spacing carries the rhythm — between two stacked promo cards there's roughly a full `{spacing.3xl}` 32 px gutter; inside a card the headline / paragraph / CTA stack is tight (`{spacing.sm}` 8 px between siblings). The black promo bands and the footer have no internal hairlines — content sits on flat ink with white text.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Nav collapses to hamburger; promo cards stack; ride-request form becomes full-width. |
| Mobile-Large | 600–767px | Same as Mobile; chip rows enable horizontal scroll. |
| Tablet | 768–1119px | 2-up promo grid at upper widths; nav stays horizontal until ≥ 1120 px. |
| Desktop | 1120–1135px | Full nav row visible; promo cards 2-up. |
| Desktop-Large | ≥ 1136px | Container caps at ~1200 px; bands stay edge-to-edge while content centres. |

#### Touch Targets
The pill `button-primary` renders at ~44 px tall (10 px vertical padding + 24 px label line-height); the larger `button-large-rounded` at ~56 px. Both meet WCAG AAA at all breakpoints. Category chips inflate to ≥ 44 px tall through extra padding on touch viewports.

#### Collapsing Strategy
- **Nav**: full link row + Help / Log in / Sign up pills at desktop. Collapses to logo + hamburger at mobile; menu overlays full-screen with the same link list stacked.
- **Ride-request form card**: at desktop, the form sits inside a max-490-px `{rounded.xl}` card with shadow. At mobile, full-width with edge-to-edge.
- **Promo cards**: at desktop, image-left + content-right (or alternating). At mobile, image always above content.
- **Annual showcase card**: scales from a 2:3 desktop frame to a 4:3 mobile frame; date text resizes proportionally.

#### Image Behavior
- **Editorial illustrations**: 4:3 or 16:9 hard-edge rectangles; never cropped to a circle, never tilted. Aspect preserved.
- **Photography**: same — square or landscape; framed inside `{rounded.xl}` card chrome.
- **Maps in ride-request flow**: full-bleed inside a card; rounded corners follow the parent card.
- **Logo bar**: SVG vector, monochrome, consistent height.


<!-- source:end -->

</details>

## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default — most cards and surfaces lean on hairline-of-canvas contrast. |
| 职等 1 - 低音滴水( 低音滴水) | `rgba(0, 0, 0, 0.12) 0px 4px 16px 0px` | Card-elevated 光带上的宣传卡周围的帧。 |
| 职等 2 - 牌投弃 | `rgba(0, 0, 0, 0.16) 0px 4px 16px 0px` | 首屏身上的骑行-要求表卡;带有嵌入式的大内容卡. |
| 职等 3 - 枕头浮点 | `rgba(0, 0, 0, 0.16) 0px 2px 8px 0px` | 浮白丸扣(即浮过首屏摄影的扣). |

### 装饰性深度
- **极性- 飞跃深度的黑色带**:该品牌使用纯黑色 `{colors.primary}` 中页带以打破白话对白的节奏。极性移就是深度提示。
- **Editorial illustrations as in-card depth**: every promo card has a single 4:3 illustration as its left or right column. The illustration's visual weight is part of the card's elevation read.
- **胶囊形几何为微深**: `{rounded.pill}` 999 px 在不同按钮高度应用时,会形成一叠成堆的嵌套胶囊形,它们读作视觉结构。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default — most cards and surfaces lean on hairline-of-canvas contrast. |
| Level 1 — Subtle Drop | `rgba(0, 0, 0, 0.12) 0px 4px 16px 0px` | Card-elevated frames around promo cards on light bands. |
| Level 2 — Card Drop | `rgba(0, 0, 0, 0.16) 0px 4px 16px 0px` | The ride-request form card on the hero; large content cards with embedded forms. |
| Level 3 — Pill Float | `rgba(0, 0, 0, 0.16) 0px 2px 8px 0px` | The floating white pill button (the one that floats over hero photography). |

### Decorative Depth
- **Black bands as polarity-flip depth**: the brand uses pure black `{colors.primary}` mid-page bands to break the white-on-white rhythm. The polarity shift IS the depth cue.
- **Editorial illustrations as in-card depth**: every promo card has a single 4:3 illustration as its left or right column. The illustration's visual weight is part of the card's elevation read.
- **Pill geometry as micro-depth**: `{rounded.pill}` 999 px applied at varying button heights creates a stack of nested pills that reads as visual hierarchy.


<!-- source:end -->

</details>

## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 满血首屏乐队,足足填满,原始图像边缘. |
| `{rounded.md}` | 8px | 乘车申请卡内输入窗体字段. |
| `{rounded.lg}` | 12px | 较小的二级卡铬。 |
| `{rounded.xl}` | 16px | 冠卡半径——宣传卡,内容卡,骑行-求票表卡,年度亮相卡,大圆形按钮. |
| `{rounded.pill}` | 999px | 品牌的签名交互形状——每个胶囊形按钮,类芯片,app-download pill,图标按钮. |
| `{rounded.pill-tab}` | 36px | 首屏身上的半透明-白色标签切换胶囊形(Ride / Drive). |
| `{rounded.full}` | 9999px | 与《公约》第22条 `{rounded.pill}` 资源 circular 图标容器。 |

### 摄影几何
- **编辑插图**: 4:3 宣传卡内景; 16:9 用于全宽显示框。
- **司机/骑手肖像**: 4:5 肖像裁剪; 由 `{rounded.xl}` 16 px 硬币卡。
- **年度展示图像**: 2:3 桌面上的肖像画,缩放到 4:3 移动时。图像填充卡片;头条覆盖底片。
- **标记栏**: 一致的单色 SVG 向量 ~24 px 身高,高点
- **Avatars** (where used): square or `{rounded.full}` circle, never `{rounded.lg}` rounded-square.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed hero bands, footer fill, raw image edges. |
| `{rounded.md}` | 8px | Form-input fields inside the ride-request card. |
| `{rounded.lg}` | 12px | Smaller secondary card chrome. |
| `{rounded.xl}` | 16px | Canonical card radius — promo cards, content cards, ride-request form card, annual-showcase card, large rounded buttons. |
| `{rounded.pill}` | 999px | The brand's signature interactive shape — every pill button, category chip, app-download pill, icon button. |
| `{rounded.pill-tab}` | 36px | The translucent-white tab-toggle pill on the hero (Ride / Drive). |
| `{rounded.full}` | 9999px | Identical effect to `{rounded.pill}` for circular icon containers. |

### Photography Geometry
- **Editorial illustrations**: 4:3 landscape inside promo cards; 16:9 for full-width showcase frames.
- **Driver / rider portraits**: 4:5 portrait crop; framed by `{rounded.xl}` 16 px card chrome.
- **Annual showcase image**: 2:3 portrait at desktop, scaling to 4:3 at mobile. The image fills the card; the headline overlays the bottom.
- **Logo bar**: monochrome SVG vectors at consistent ~24 px height.
- **Avatars** (where used): square or `{rounded.full}` circle, never `{rounded.lg}` rounded-square.


<!-- source:end -->

</details>

## 组件

### 按钮

**`button-primary`** ——"犬黑丸",品牌转换目标.
- Background `{colors.primary}`, text `{colors.on-primary}`, label set in `{typography.button-md}`, padding `{spacing.md} {spacing.md}`, shape `{rounded.pill}` 999 px.

**`button-secondary`** ——白丸与黑丸为配方.
- Background `{colors.canvas}`, text `{colors.ink}`, same label and padding as `button-primary`, shape `{rounded.pill}`.

**`button-subtle`** ——用于第三代动作的灰色二级胶囊形内卡(如"更多学习"/"使用储备").
- Background `{colors.canvas-soft}` (`#efefef`), text `{colors.ink}`, label in `{typography.button-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.pill}`.

**`button-floating`** ——白色胶囊形,带有细微的滴影,浮在黑暗或照片表面.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md}`, shape `{rounded.pill}`. Carries a Level 3 pill-float shadow.

**`button-large-rounded`** ——骑行请求流内使用的更大的黑色呼叫动作("是的,帮帮我").
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-large}`, padding `{spacing.lg} {spacing.xl}`, shape `{rounded.xl}` 16 px (not pill — the only black CTA that breaks the pill rule, used in the larger form context).

**`button-tab-translucent`** ——首屏骑行请求表(Ride/Drive)上的标签切换.
- Background `{colors.canvas}`, text `{colors.ink}`, label in `{typography.body-md-strong}`, shape `{rounded.pill-tab}` 36 px (off-shape, deliberately tighter than the canonical 999 px pill).

### 纸牌和集装箱

**`card-content`** ——舟山内容卡.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl}`, shape `{rounded.xl}` 16 px. No shadow on the default state.

**`card-elevated`** ——带有关卡的内容卡 1 微妙的滴水。
- Background `{colors.canvas}`, text `{colors.ink}`, same padding + shape as `card-content`. Shadow at Level 1.

**`card-soft-tinted`** ——页面内用作分区的灰色丁卡(如"日后计划"呼号).
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.2xl}`, shape `{rounded.xl}`.

**`promo-card-illustrated`** - 电话 2- 柱子宣传卡 一边有插画 另一边有复制品
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl}`, shape `{rounded.xl}`. Headline in `{typography.display-md}` or larger.

**`promo-card-on-dark`** ——极性飞扬的黑色宣传卡.
- Background `{colors.ink}`, text `{colors.on-dark}`, padding `{spacing.2xl}`, shape `{rounded.xl}`. Used for the "Drive with Uber" mid-page band.

**`request-form-card`** 首屏骑马的要求 形成铬。
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg}`, shape `{rounded.xl}`. Carries Level 2 card drop shadow.

**`request-form-input-row`** ——请求格式卡内每栏.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.lg}`, shape `{rounded.md}` 8 px. Hosts an icon + label + value.

**`showcase-image-card`** — the giant "GO•GET 2026" annual showcase card.
- Background `{colors.ink}`, text `{colors.on-dark}` overlay, padding `{spacing.3xl}`, shape `{rounded.xl}`. Display-xxl headline overlays the bottom of the image.

### 输入表单( F)

**`text-input`** ——文体文字输入.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, body in `{typography.body-md}`, padding `{spacing.lg}`, shape `{rounded.md}` 8 px.

**`text-input-on-soft`** ——在白卡上嵌入的输入(略轻的填充).
- Background `{colors.canvas-softer}`, otherwise identical to `text-input`.

### 导航

**`nav-bar`** - 电话 sticky 顶级导航
- Background `{colors.canvas}` on light pages, switches to `{colors.ink}` on the rare dark page (e.g., Uber Eats hero). Padding `{spacing.lg} {spacing.3xl}`.

**`nav-link`** —— 内侧的链接行 `nav-bar`.
- 文本 `{colors.ink}`,设置在 `{typography.body-md-strong}` 500 字重。

**`footer`** ——深黑脚步乐队.
- Background `{colors.primary}` (the brand's only true black surface), text `{colors.on-dark}`, padding `{spacing.3xl} {spacing.3xl}`. Body in `{typography.body-sm}`; column eyebrows in `{typography.body-md-strong}`.

### 签名组件

**`hero-band-light`** ——白首屏带骑行求证.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.3xl}`. Headline in `{typography.display-xxl}` (52 px / 700) on the left; `request-form-card` on the right.

**`hero-band-dark`** ——罕见的黑人首屏(曾被使用于 Uber 吃吃吃Drive登陆).
- Background `{colors.ink}`, text `{colors.on-dark}`, padding `{spacing.3xl} {spacing.3xl}`. Same display-xxl headline scale; CTA inverts to `button-secondary` white pill.

**`category-button`** ——水平-滚动类行("Reserve / lefts / Teens / group rids").
- Background `{colors.canvas-soft}`, text `{colors.ink}`, label in `{typography.body-sm-strong}`, padding `{spacing.sm} {spacing.lg}`, shape `{rounded.pill}`. An icon precedes the label.

**`faq-row`** - 法克手风琴项目
- Background `{colors.canvas}`, text `{colors.ink}`, question in `{typography.body-md-strong}`, padding `{spacing.lg}` 0. No card chrome — hairline dividers between rows.

**`app-download-pill`** ——"下载骑手应用"/"下载驾驶员应用"胶囊形.
- Background `{colors.ink}`, text `{colors.on-dark}`, label in `{typography.body-md-strong}`, padding `{spacing.md} {spacing.xl}`, shape `{rounded.pill}`.

**`icon-button-circular`** ——导航及乘务请求卡内使用的圆形图标容器.
- Background `{colors.canvas-soft}`, dark icon, shape `{rounded.full}`. No label.

### 链接

**`link-blue`** —— 法律/页脚精细印刷内部的系统默认浏览器-蓝链接.
- 文本 `{colors.link}` (`#0000ee`),体内 `{typography.body-md}`.

**`link-on-dark`** ——暗带内部的白色链接.
- 文本 `{colors.on-dark}`,身体在 `{typography.body-md}`.

**`link-mute`** ——音响的灰色链接在页脚柱内.
- 文本 `{colors.hairline-mid}`,身体在 `{typography.body-md}`.

**`link-mute-soft`** ——最轻的灰色链接,用于暗面低优先级的二级文本.
- 文本 `{colors.mute}`,身体在 `{typography.body-md}`.

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

**`button-primary`** — the canonical black pill, the brand's conversion target.
- Background `{colors.primary}`, text `{colors.on-primary}`, label set in `{typography.button-md}`, padding `{spacing.md} {spacing.md}`, shape `{rounded.pill}` 999 px.

**`button-secondary`** — the white pill paired with the black primary.
- Background `{colors.canvas}`, text `{colors.ink}`, same label and padding as `button-primary`, shape `{rounded.pill}`.

**`button-subtle`** — the gray secondary pill used for tertiary actions inside cards (e.g., "Learn more" / "Use Reserve").
- Background `{colors.canvas-soft}` (`#efefef`), text `{colors.ink}`, label in `{typography.button-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.pill}`.

**`button-floating`** — the white pill with a subtle drop-shadow that floats over a dark or photographic surface.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md}`, shape `{rounded.pill}`. Carries a Level 3 pill-float shadow.

**`button-large-rounded`** — the bigger black call-to-action used inside the ride-request flow ("Yes, help me").
- Background `{colors.primary}`, text `{colors.on-primary}`, label in `{typography.button-large}`, padding `{spacing.lg} {spacing.xl}`, shape `{rounded.xl}` 16 px (not pill — the only black CTA that breaks the pill rule, used in the larger form context).

**`button-tab-translucent`** — the tab-toggle on the hero ride-request form (Ride / Drive).
- Background `{colors.canvas}`, text `{colors.ink}`, label in `{typography.body-md-strong}`, shape `{rounded.pill-tab}` 36 px (off-shape, deliberately tighter than the canonical 999 px pill).

### Cards & Containers

**`card-content`** — the canonical content card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl}`, shape `{rounded.xl}` 16 px. No shadow on the default state.

**`card-elevated`** — the content card with Level 1 subtle drop.
- Background `{colors.canvas}`, text `{colors.ink}`, same padding + shape as `card-content`. Shadow at Level 1.

**`card-soft-tinted`** — the gray-tinted card used as a sub-region inside the page (e.g., "Plan for later" callout).
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.2xl}`, shape `{rounded.xl}`.

**`promo-card-illustrated`** — the 2-column promo card with illustration on one side and copy on the other.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl}`, shape `{rounded.xl}`. Headline in `{typography.display-md}` or larger.

**`promo-card-on-dark`** — the polarity-flipped promo card in black.
- Background `{colors.ink}`, text `{colors.on-dark}`, padding `{spacing.2xl}`, shape `{rounded.xl}`. Used for the "Drive with Uber" mid-page band.

**`request-form-card`** — the hero ride-request form chrome.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg}`, shape `{rounded.xl}`. Carries Level 2 card drop shadow.

**`request-form-input-row`** — the per-field row inside the request-form card.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.lg}`, shape `{rounded.md}` 8 px. Hosts an icon + label + value.

**`showcase-image-card`** — the giant "GO•GET 2026" annual showcase card.
- Background `{colors.ink}`, text `{colors.on-dark}` overlay, padding `{spacing.3xl}`, shape `{rounded.xl}`. Display-xxl headline overlays the bottom of the image.

### Inputs & Forms

**`text-input`** — the canonical text input.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, body in `{typography.body-md}`, padding `{spacing.lg}`, shape `{rounded.md}` 8 px.

**`text-input-on-soft`** — the nested input on a white card (slightly lighter fill).
- Background `{colors.canvas-softer}`, otherwise identical to `text-input`.

### Navigation

**`nav-bar`** — the sticky top nav.
- Background `{colors.canvas}` on light pages, switches to `{colors.ink}` on the rare dark page (e.g., Uber Eats hero). Padding `{spacing.lg} {spacing.3xl}`.

**`nav-link`** — the link row inside `nav-bar`.
- Text `{colors.ink}`, set in `{typography.body-md-strong}` 500 weight.

**`footer`** — the deep-black footer band.
- Background `{colors.primary}` (the brand's only true black surface), text `{colors.on-dark}`, padding `{spacing.3xl} {spacing.3xl}`. Body in `{typography.body-sm}`; column eyebrows in `{typography.body-md-strong}`.

### Signature Components

**`hero-band-light`** — the white hero with the ride-request card.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.3xl}`. Headline in `{typography.display-xxl}` (52 px / 700) on the left; `request-form-card` on the right.

**`hero-band-dark`** — the rare black hero (used on Uber Eats and Drive landing).
- Background `{colors.ink}`, text `{colors.on-dark}`, padding `{spacing.3xl} {spacing.3xl}`. Same display-xxl headline scale; CTA inverts to `button-secondary` white pill.

**`category-button`** — the horizontal-scroll category row ("Reserve / Rentals / Teens / Group rides").
- Background `{colors.canvas-soft}`, text `{colors.ink}`, label in `{typography.body-sm-strong}`, padding `{spacing.sm} {spacing.lg}`, shape `{rounded.pill}`. An icon precedes the label.

**`faq-row`** — the FAQ accordion item.
- Background `{colors.canvas}`, text `{colors.ink}`, question in `{typography.body-md-strong}`, padding `{spacing.lg}` 0. No card chrome — hairline dividers between rows.

**`app-download-pill`** — the "Download the Rider app" / "Download the Driver app" pill.
- Background `{colors.ink}`, text `{colors.on-dark}`, label in `{typography.body-md-strong}`, padding `{spacing.md} {spacing.xl}`, shape `{rounded.pill}`.

**`icon-button-circular`** — the round icon container used in the nav and inside the ride-request card.
- Background `{colors.canvas-soft}`, dark icon, shape `{rounded.full}`. No label.

### Links

**`link-blue`** — the system-default browser-blue link inside legal / footer fine print.
- Text `{colors.link}` (`#0000ee`), body in `{typography.body-md}`.

**`link-on-dark`** — the white link inside dark bands.
- Text `{colors.on-dark}`, body in `{typography.body-md}`.

**`link-mute`** — the muted gray link inside footer columns.
- Text `{colors.hairline-mid}`, body in `{typography.body-md}`.

**`link-mute-soft`** — the lightest gray link, used for low-priority secondary text on dark surfaces.
- Text `{colors.mute}`, body in `{typography.body-md}`.

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
- 准备金 `{colors.primary}` (`#000000`),每粒初级CTA胶囊形,每个可见的景点各一个黑胶囊形是品牌的整个转换故事.
- 使用 `{rounded.pill}` 999 px 。每张牌子上都有按键、芯片、应用胶囊形。胶囊形是品牌的几何符号。
- 显示牌 `{rounded.xl}` 16 px ——宣传卡,内容卡,乘务要求表卡,年度秀卡均共享此半径.
- 设置每个标题 `{typography.display-*}` 字重 700 显示面部的图像不会复制尸体。
- 使用极性飞腾的黑色促导带中段来断开白白调节奏。极性移就是深度提示 。
- 锁定每张带有 4:3 编辑插图;从不使用通用股票图像.

### Don't
- Don't introduce a second brand accent colour (orange, blue, green). The brand's entire UI is black-and-white plus grayscale; new accents flatten the system.
- Don't render the primary CTA as a `{rounded.xl}` rectangle except inside the larger ride-request flow (where `button-large-rounded` is the documented exception).
- Don't use all-caps display headlines. Sentence-case is the voice; uppercase is restricted to rare eyebrow tags.
- Don't drop a soft drop-shadow on every card. The brand uses Level 0 flat as the default; shadow is reserved for the floating pill and the ride-request form.
- Don't reduce the brand to its illustration system alone. The pill geometry + black/white duet carries the brand even without illustrations.
- Don't tighten or loosen letter-spacing on the display face. The brand never letter-spaces; default tracking is part of the voice.
- Don't use `{rounded.full}` 9999 px for square cards — the pill 999 px and full 9999 px effects are identical for interactive elements, but cards stay at `{rounded.xl}` 16 px.

<details>
<summary>英文原文</summary>

<!-- source:body -->
## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#000000`) for every primary CTA pill. One black pill per visible viewport is the brand's whole conversion story.
- Use `{rounded.pill}` 999 px on every interactive element (buttons, chips, app pills). The pill IS the brand's geometric signature.
- Render cards in `{rounded.xl}` 16 px — promo cards, content cards, the ride-request form card, the annual-showcase card all share this radius.
- Set every headline in `{typography.display-*}` weight 700 in sentence-case. The display face never carries body copy.
- Use polarity-flipped black promo bands mid-page to break up white-on-white rhythm. The polarity shift IS the depth cue.
- Anchor every promo card with a 4:3 editorial illustration; never use generic stock imagery.

### Don't
- Don't introduce a second brand accent colour (orange, blue, green). The brand's entire UI is black-and-white plus grayscale; new accents flatten the system.
- Don't render the primary CTA as a `{rounded.xl}` rectangle except inside the larger ride-request flow (where `button-large-rounded` is the documented exception).
- Don't use all-caps display headlines. Sentence-case is the voice; uppercase is restricted to rare eyebrow tags.
- Don't drop a soft drop-shadow on every card. The brand uses Level 0 flat as the default; shadow is reserved for the floating pill and the ride-request form.
- Don't reduce the brand to its illustration system alone. The pill geometry + black/white duet carries the brand even without illustrations.
- Don't tighten or loosen letter-spacing on the display face. The brand never letter-spaces; default tracking is part of the voice.
- Don't use `{rounded.full}` 9999 px for square cards — the pill 999 px and full 9999 px effects are identical for interactive elements, but cards stay at `{rounded.xl}` 16 px.

<!-- source:end -->

</details>

## 设计词元原值

启发人们理解 Uber设计语言——一种运输与交付的超级应用品牌,其网络表面为黑白二重唱,由定制几何显示色素所框,以单一的签名丸形状(radius)为重音. 999px),仅通过编辑来装饰 4:3 显示骑手、驾驶员和城市对象的插图。

```yaml
---
version: alpha
name: Uber-design-analysis
description: An inspired interpretation of Uber's design language — a transportation-and-delivery super-app brand whose web surface is a black-and-white duet, framed by a custom geometric display sans, accented by a single signature pill shape (radius 999px) on every interactive element, and decorated only by editorial 4:3 illustrations of riders, drivers, and city objects.

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#000000"
  body: "#5e5e5e"
  mute: "#afafaf"
  hairline-mid: "#4b4b4b"
  canvas: "#ffffff"
  canvas-soft: "#efefef"
  canvas-softer: "#f3f3f3"
  surface-pressed: "#e2e2e2"
  link: "#0000ee"
  on-dark: "#ffffff"
  black-elevated: "#282828"

typography:
  display-xxl:
    fontFamily: UberMove, UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 52px
    fontWeight: 700
    lineHeight: 64px
  display-xl:
    fontFamily: UberMove, UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 36px
    fontWeight: 700
    lineHeight: 44px
  display-lg:
    fontFamily: UberMove, UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 32px
    fontWeight: 700
    lineHeight: 40px
  display-md:
    fontFamily: UberMove, UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
  display-sm:
    fontFamily: UberMove, UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 20px
    fontWeight: 700
    lineHeight: 28px
  body-lg:
    fontFamily: UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 24px
  body-md:
    fontFamily: UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20px
  body-sm:
    fontFamily: UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 16px
  caption:
    fontFamily: UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20px
  button-large:
    fontFamily: UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 24px
  button-md:
    fontFamily: UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20px

rounded:
  none: 0px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 999px
  pill-tab: 36px
  full: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    padding: "{spacing.lg} {spacing.3xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.md}"
  button-subtle:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.lg}"
  button-floating:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md}"
  button-large-rounded:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-large}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg} {spacing.xl}"
  button-tab-translucent:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.pill-tab}"
  text-input:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  text-input-on-soft:
    backgroundColor: "{colors.canvas-softer}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  card-content:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.2xl}"
  card-elevated:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.2xl}"
  card-soft-tinted:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.2xl}"
  promo-card-illustrated:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.2xl}"
  promo-card-on-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.2xl}"
  request-form-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  request-form-input-row:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  category-button:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  faq-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    padding: "{spacing.lg} 0"
  app-download-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  hero-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xxl}"
    padding: "{spacing.3xl} {spacing.3xl}"
  hero-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xxl}"
    padding: "{spacing.3xl} {spacing.3xl}"
  showcase-image-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xxl}"
    rounded: "{rounded.xl}"
    padding: "{spacing.3xl}"
  link-blue:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  link-on-dark:
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
  link-mute:
    textColor: "{colors.hairline-mid}"
    typography: "{typography.body-md}"
  link-mute-soft:
    textColor: "{colors.mute}"
    typography: "{typography.body-md}"
  icon-button-circular:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.3xl}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default tier card. Mirrors card-content chrome with canvas-soft surface and a faint border."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.surface-pressed}"
    rounded: "{rounded.xl}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to ink with white text."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.2xl}"
  ex-product-selector:
    description: "Plan picker — re-purposed for the brand's Ride / Eats / Reserve tier picker. Uses category-button pills inside the frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.2xl}"
  ex-cart-drawer:
    description: "Subscription summary — line items per add-on (NOT a literal e-commerce cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.2xl}"
    item-divider: "{colors.surface-pressed}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses brand primary as a left-edge indicator bar."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses body-sm-strong 500 weight; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.body-sm-strong}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.md} {spacing.lg}"
    rowBorder: "{colors.surface-pressed}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Mirrors card-content chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.xl}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as card-content with Level 2 drop shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame. Generous padding on canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.xl}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — flat-cornered card-content chrome with Level 2 drop shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---
```
