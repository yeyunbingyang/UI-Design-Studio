# Notion · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Notion looks like a well-organized desk in good daylight. The dominant surface is not pure white but a warm, paper-soft off-white — `{colors.canvas-soft}` (#f6f5f4) — that takes the clinical edge off the screen and makes long pages feel like a document rather than an app. Type is set in `NotionInter` (a tuned Inter) in near-black `{colors.ink}` at large, tightly-tracked weights, so headlines read as confident statements with very little letter-spacing slack at display sizes (`{typography.display-1}` pulls −2.125px of tracking at 64px). The whole system whispers in greys and blacks, then says exactly one thing in colour: a single, dependable blue, `{colors.primary}` (#0075de), reserved almost entirely for the primary call-to-action and inline links.

Against that quiet chrome, Notion lets a **playful multi-colour sticker palette** carry all of the brand's personality — purple, pink, orange, teal, green and sky-blue appear as small illustrated blocks, app-icon stickers, and category dots scattered through the marketing pages. These colours never structure the layout or paint a CTA; they decorate. The discipline is deliberate: the interface stays monochrome-plus-blue so the content (and the cheerful illustrations) can breathe. The one exception to the bright daylight is the homepage hero, which inverts into a deep indigo "night" band (`{colors.secondary}`) with white type and glowing sticker constellations — a single dark island in an otherwise light document.

Surfaces are defined by hairlines and the faintest layered shadows rather than heavy elevation. Cards round at a friendly 12px (`{rounded.lg}`), the marketing CTAs are fully-pill-shaped (`{rounded.full}`), and utility buttons round at a tighter 8px (`{rounded.md}`). Nothing is loud; the brand's character comes from restraint plus one well-placed splash of joy.

**关键特征 :**
- 温暖的纸质软页面底色 `{colors.canvas-soft}` 纯白的,永远不要临床
- 近黑线 `{colors.ink}` `NotionInter` 类型,在显示大小时带有紧的负跟踪(`{typography.display-1}`)
- 完全是一个结构强调色—— Notion 蓝色 `{colors.primary}` ——专为CTA和链接保留.
- 装饰性唯一多色贴纸调色板(`{colors.accent-purple}`, `{colors.accent-pink}`, `{colors.accent-orange}`, `{colors.accent-teal}`, `{colors.accent-green}`, `{colors.accent-sky}`)增加个性,而从未画结构
- 胶囊形形的销售CTAs(`{rounded.full}`)与 8px 工具按钮( $`{rounded.md}`)
- 由细边线加几乎有层的阴影,而不是沉重的滴影
- A single dark indigo hero "night" band (`{colors.secondary}`) inverting the otherwise daylight page rhythm


## 配色

> Source pages analysed: the Notion home page plus Pricing, Enterprise, Product (AI), Product (Agents), and Startups. Every secondary page resolved to the same core palette — Notion runs one tightly-scoped system across the marketing site.

### 品牌和 强调色
- **Notion 蓝色** (`{colors.primary}` — #0075de: 单结构强调色。初级 CTA 填充("Get") Notion ),内置链接颜色,活动塔布和焦点信号。这是唯一一种能描绘动作的颜色。
- **Pressed Blue** (`{colors.primary-active}` — #005bab): the darker press state of the primary CTA.
- **深渊** (`{colors.secondary}` — #213183:黑暗首屏"夜"乐队背景及其贴星座场;深处 brand-blue 用于全血反转的节.

剩余颜色表单 Notion's **装饰性贴纸调色板** ——它们仅作为插图块,应用贴和分类点出现,从未作为CTA或结构填充: .
- **贴纸天空** (`{colors.accent-sky}` — #62aef0)
- **粘贴紫色** (`{colors.accent-purple}` — #d6b6f6) / **深紫色** (`{colors.accent-purple-deep}` — #391c57)
- **贴纸粉红色** (`{colors.accent-pink}` — #ff64c8)
- **贴纸橙色** (`{colors.accent-orange}` — #dd5b00) / **深橙色** (`{colors.accent-orange-deep}` — #793400)
- **贴纸 Teal** (`{colors.accent-teal}` — #2a9d99)
- **贴纸绿色** (`{colors.accent-green}` — #1aae39)
- **贴纸 布朗** (`{colors.accent-brown}` — #523410)

### 表面
- **白色** (`{colors.canvas}` / `{colors.surface}` — #ffffff:卡片和面板表面,导航栏,形成字段.
- **温暖纸** (`{colors.canvas-soft}` — #f6f5f4:签名页页面底色和页脚乐队——一个温暖的离白,使整个网站像文件一样平静.
- **Hairline** (`{colors.hairline}` — #e6e6e6): 1px card borders and dividers, a black-at-10%-on-white blend kept solid for token reuse.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — #000000:主要标题和正文(交 ~95% α代表一个柔软的真黑.
- **温暖的炭** (`{colors.ink-secondary}` — #31302e: 次级体型复制和页脚文本.
- **石头** (`{colors.ink-muted}` — #615d59: 支持/ 哑音复制.
- **灰尘** (`{colors.ink-faint}` — #a39e98: 标题,元数据,占位符文本.

### 语义
Notion'营销表面不会暴露系统铬中的专用错误/成功调色板——状态由贴纸调色板(如. `{colors.accent-green}` 而不是单独的语义坡道。


## 字体排版

### 字体家族
The entire system is set in **`NotionInter`** — Notion's tuned cut of Inter — with a fallback stack of `Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial`. A single family carries everything from 64px display headlines to 12px eyebrows; there is no serif, no monospace display face. OpenType `lnum` (lining numerals) and `locl` features are enabled on body and heading roles.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-1}` | 64px | 700 | 1.0 | −2.125px | 首屏头条("见夜班"). |
| `{typography.display-2}` | 54px | 700 | 1.04 | −1.875px | Large section headlines |
| `{typography.heading-1}` | 40px | 700 | 1.1 | −1px | 节头条("计划和特点"). |
| `{typography.heading-2}` | 26px | 700 | 1.23 | −0.625px | 分节标题 |
| `{typography.heading-3}` | 22px | 700 | 1.27 | −0.25px | 牌名标题 |
| `{typography.title}` | 20px | 600 | 1.4 | −0.125px | 特征标题、挂图 |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 默认复制 |
| `{typography.body-sm}` | 15px | 400 | 1.33 | 0 | 深奥的体型,桌排,导航 |
| `{typography.button}` | 16px | 500 | 1.5 | 0 | 按钮标签 |
| `{typography.caption}` | 14px | 400 | 1.43 | 0 | 说明、脚注 |
| `{typography.eyebrow}` | 12px | 600 | 1.33 | +0.125px | 胶囊形徽章,小标签 |

### 原则
Notion's type voice is **tight, heavy, and quiet-confident**. Headlines lean on weight 700 and aggressive negative tracking (more negative the larger the size) so display copy feels set, not stretched. Body copy stays at a comfortable 1.5 line-height for document readability. The contrast between a heavy 700 headline and a calm 400 body is the primary expressive lever — there is no decorative typography, only a clear hierarchy.

### Note on Font Substitutes
`NotionInter` 是一个开源的专有调制 **Inter** 家庭——替代 Inter 直接 大约 Notion显示紧凑度, 应用负数 letter-spacing 上表中的数值明确(Inter 默认跟踪时,读取的比 `NotionInter`).


## 布局

### 间距系统
- **基地单位**: 8px.
- **托肯斯(前题)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 28px · `{spacing.xxl}` 32px.
- 纸牌内部铺设土地 `{spacing.lg}` (24px); 工具按钮使用紧 4px/14px; 窗体字段页 `{spacing.xxs}`- 比例 6px。区域间隙堆叠更大的步骤。

### 网格容器( C)
Content is centred in a wide max-width column (~1080–1300px on desktop per the extracted breakpoints) with generous outer gutters. Feature sections alternate between full-width text blocks and 2-up / 3-up card grids; the pricing page widens to a 4-column plan table. The dark hero spans full-bleed edge to edge while body sections respect the centred container.

### 白空间哲学
Whitespace is the primary grouping device. Sections are separated by large vertical gaps rather than rules, and cards sit on the warm canvas with quiet hairlines instead of heavy frames. The effect is document-like: airy, scannable, and never crowded.

### 反应战略

#### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 宽 | 1440px+ | 完整的多柱网格,最宽的容器 |
| 桌面 | 1080–1300px | 标准集装箱, 3- 上卡网格 |
| 平板 | 768–840px | 网格崩溃到 2- 上,导航开始凝固 |
| 手机 | ≤600px | 单柱堆栈、汉堡导航、全宽式CTA |

#### 触控区域
胶囊形CTAs(`button-primary`, `button-secondary`)和工具按钮(`button-utility`携带舒适的水龙头垫板;瞄准 44×44px 移动时最小命中区, 即使在标签收缩时仍保留垂直的贴板 。

#### 折叠战略
The top nav condenses to a hamburger below the tablet breakpoint; multi-column card grids collapse to a single stacked column; the pricing plan table reflows from 4 side-by-side columns into stacked plan cards. Section padding tightens but the warm-canvas rhythm is preserved.

#### 图像行为
产品截图和插图 `{rounded.lg}` 框和缩放在网格单元格中。粘贴图是小型固定规模的装饰资产,可重流,但不会收缩。


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | Hairline border `{colors.hairline}`, no shadow | Default cards on the warm canvas |
| 1 - 软 | 层状微阴影 : `rgba(0,0,0,0.01) 0 0.175px 1.041px`, `0.02 0 0.8px 2.925px`, `0.027 0 2.025px 7.847px`, `0.04 0 4px 18px` | 提高特性卡, 浮动按钮 |
| 2 - 高调 | 深一点 5- 停止堆栈结束 `rgba(0,0,0,0.05) 0 23px 52px` | 摩尔,波波, 黑暗首屏身上的白色胶囊形 |

Notion高程哲学是 **几乎没...**: 阴影是由许多近透明层所建,因此表面感觉轻轻地从纸上抬起而不是剧烈地掉下来。大多数卡片只依靠细边线。

### 装饰性深度
品牌的真正深度提示是 **插图**黑暗的无敌首屏`{colors.secondary}`)使用发光的贴纸和星场来创造点亮的夜景感,特色片段在平原表面上层的小彩色的app-icon贴纸来增加玩法维度. 彩色封装的插图瓦(purple,粉红色,橙色,teal headers on otherheld-white cards)提供视觉节奏.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | Form fields, small tags, inline chips |
| `{rounded.sm}` | 5px | 菜单项目、列表行、状态胶囊形 |
| `{rounded.md}` | 8px | 工具 / 导航按钮, 较小的卡片 |
| `{rounded.lg}` | 12px | 特色卡片、插图框、内容牌 |
| `{rounded.xl}` | 16px | Large containers, image wells |
| `{rounded.full}` | 9999px | 销售胶囊形 密码 徽章 circular 图标按钮 |

### 摄影几何
Product screenshots are framed in rounded `{rounded.lg}` / `{rounded.xl}` wells, typically full-bleed within their container with a hairline edge. Illustration tiles use colour-blocked header bands above white card bodies. Avatars and app-icon stickers are small, sometimes fully circular (`{rounded.full}`). There is no heavy art-direction crop — images scale within their rounded frame.


## 组件

> **No hover states documented.** Every spec below documents Default and Active/Pressed states only. Variants live as separate `components:` front-matter entries and are described in their own sub-blocks.

### 导航

**`nav-bar`** ——顶级导航
- 白色表面 `{colors.canvas}`, `{colors.ink}` 链接文本在 `{typography.body-sm}`, 编译 `{spacing.md}`。坐着像一个瘦子 sticky 栏; 左字标记, 中心产品/解决方案菜单链接, 右“ 日志” 文本链接加 a `button-utility` "去,我爱她" Notion 免费的CTA 凝结在平板断点下面的汉堡包上

### 按钮

**`button-primary`** ——初级CTA("Get") . Notion 免费)
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, fully pill-shaped `{rounded.full}`. The single blue action on any page.
- 国家住在这里 `button-primary-pressed` (背景情况) `{colors.primary-active}`); 营销按钮也应用了一个简况 `scale(0.9)` 压变。

**`button-primary-pressed`**
- Background `{colors.primary-active}`, text `{colors.on-primary}` — the depressed state of the primary CTA.

**`button-secondary`** ——二级CTA("请示演示").
- White surface `{colors.surface}`, text `{colors.ink}`, type `{typography.button}`, pill `{rounded.full}`, carried by the soft Level-1 shadow. Pairs beside `button-primary` in the hero.

**`button-utility`** —— 导航/ 计划选择按钮
- 白色表面 `{colors.surface}`文本中,请输入 `{colors.ink}`类型 `{typography.button}`,收紧 `{rounded.md}` (8px), 贴 `4px 14px`, 1px `{colors.hairline}` 边框。用于导航CTA和定价计划选择的按钮,其中的营销胶囊形太大。

**`button-icon-circular`** - 木马/媒体控制
- Circular `{rounded.full}` 半透明控制 `rgba(0,0,0,0.05)` 补足和 `{colors.on-primary}` glyph,用于幻灯片和播放/暂停控制;应用 a `scale(0.9)` 压变。

### 纸牌和集装箱

**`feature-card`** 内容/特征卡
- 白色表面 `{colors.surface}`, `{colors.ink}` 文本, 单词 `{typography.body-md}`,四舍五入 `{rounded.lg}` (12px), 贴 `{spacing.lg}` (24px),工作马的营销卡;经常被贴纸调色板上的彩色密闭插图带所顶住。默认高程是平的(只有线条).

**`feature-card-elevated`** ——提高特色卡.
- 与 `feature-card` 和柔软的级别...1 浮在页面底色上方的卡片(检验、浮产品面板)的分层阴影。

**`pricing-plan-card`** ——定价计划栏
- 白色表面 `{colors.surface}`, `{colors.ink}` 文本, 单词 `{typography.body-sm}`,四舍五入 `{rounded.md}` (8px), 贴 `{spacing.lg}`。列出计划价格和特征清单的边栏,并附有 `button-utility` 选择动作。

**`pricing-plan-card-featured`** ——重点计划栏.
- 温暖 `{colors.canvas-soft}` 填满将建议等级从白人兄弟姐妹身上抬起,相同 `{rounded.md}` 形状和贴垫。用表面的锡而不是用彩色的边框来区分。

### 输入表单( F)

**`text-input`** — Text / number field
- White surface `{colors.surface}`, `{colors.ink}` text, `{typography.body-sm}`, 1px `rgb(221,221,221)` border, rounded `{rounded.xs}` (4px), padding `6px`. Square-ish corners deliberately tighter than the pill CTAs. Focus adds the soft Level-1 shadow.

### 签名组件

**`hero-band`** -黑暗的"夜晚"首屏 -黑暗的"夜晚"首屏 - 黑暗的"夜晚"首屏 - Dark "night" hero
- Full-bleed deep indigo `{colors.secondary}` band carrying `{typography.display-1}` white headline, sticker-constellation field, and a `button-primary` + `button-secondary` CTA pair. The single inverted dark island in an otherwise daylight page.

**`badge-pill`** ——眉毛/类胶囊形
- 白色表面 `{colors.surface}`, `{colors.primary}` 文本, 单词 `{typography.eyebrow}` (12px / 600),全胶囊形 `{rounded.full}`, 编译 `4px 8px`,小标签如"留有组织"的标价眉毛和分类标签.

**`footer`** ——站点页脚
- 温暖 `{colors.canvas-soft}` 乐队, `{colors.ink-secondary}` 链接文本在 `{typography.caption}`, 编译 `{spacing.xxl}`。多栏链接目录关闭每个页面。

### 实例(说明性)

> 奇幻怪兽的演示表面,每个 `ex-*` 条目参考: 下游消费者的品牌原始产品(`/preview-design`, `/generate-kit`) 重新皮肤相同 10 表面一致。

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



## 设计建议与禁忌

### 执行
- 准备金 `{colors.primary}` 用于主要行动、内在链接和主动/焦点信号——无装饰。
- 保持页面的温暖 `{colors.canvas-soft}` 页面底色; 使用纯白色 `{colors.surface}` 用于卡片和字段创建温和的图形/地面。
- Let the sticker palette (`{colors.accent-pink}`, `{colors.accent-teal}`, `{colors.accent-orange}`, …) live only in illustrations, icon tiles and category dots.
- 设置重头条 `{typography.display-1}`/`{typography.heading-1}` 明确适用了负面追踪。
- Use pill `{rounded.full}` for marketing CTAs and tighter `{rounded.md}` for nav/utility buttons — the contrast is intentional.
- 定义表面 `{colors.hairline}` 和那不远处的,1 影子而不是沉重的滴影。
- 保留深渊的indigo `{colors.secondary}` "夜"治疗单首屏瞬间,不重复乐队.

### Don't
- Don't paint a CTA or structural fill in any sticker-palette colour — those are decoration only.
- Don't introduce a second structural accent alongside `{colors.primary}`.
- Don't put pill `{rounded.full}` radii on form fields — inputs stay tight at `{rounded.xs}` (4px).
- Don't drop heavy shadows; Notion's elevation is many near-transparent layers, never a hard cast.
- Don't set body copy in a heavy weight — keep 400 for readability and let weight 700 belong to headlines.
- Don't place type on pure clinical white for full pages; the warm `{colors.canvas-soft}` is core to the brand calm.

## 设计词元原值

分析 Notion设计语言——一种建立在一种不白的布料上,近乎黑色的温和的纸质凸轮生产力系统. Inter 类型,以及一个单一的自信蓝色,被一个玩耍的多彩贴纸调色板所凸现,在铬保持安静时,它能做所有个性的工作。

```yaml
---
version: alpha
name: Notion Analysis
description: An analysis of Notion's design language — a warm, paper-calm productivity system built on an off-white canvas, near-black Inter type, and a single confident blue, punctuated by a playful multi-color sticker palette that does all the personality work while the chrome stays quiet.

colors:
  primary: "#0075de"
  primary-active: "#005bab"
  secondary: "#213183"
  on-primary: "#ffffff"
  canvas: "#ffffff"
  canvas-soft: "#f6f5f4"
  surface: "#ffffff"
  ink: "#000000"
  ink-secondary: "#31302e"
  ink-muted: "#615d59"
  ink-faint: "#a39e98"
  hairline: "#e6e6e6"
  accent-sky: "#62aef0"
  accent-purple: "#d6b6f6"
  accent-purple-deep: "#391c57"
  accent-pink: "#ff64c8"
  accent-orange: "#dd5b00"
  accent-orange-deep: "#793400"
  accent-teal: "#2a9d99"
  accent-green: "#1aae39"
  accent-brown: "#523410"

typography:
  display-1:
    fontFamily: NotionInter
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -2.125px
  display-2:
    fontFamily: NotionInter
    fontSize: 54px
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: -1.875px
  heading-1:
    fontFamily: NotionInter
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  heading-2:
    fontFamily: NotionInter
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.23
    letterSpacing: -0.625px
  heading-3:
    fontFamily: NotionInter
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.27
    letterSpacing: -0.25px
  title:
    fontFamily: NotionInter
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.125px
  body-md:
    fontFamily: NotionInter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: NotionInter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  button:
    fontFamily: NotionInter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: NotionInter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  eyebrow:
    fontFamily: NotionInter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0.125px

rounded:
  xs: 4px
  sm: 5px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 28px
  xxl: 32px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: 16px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
  button-primary-pressed:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
  button-utility:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 4px 14px
  button-icon-circular:
    backgroundColor: "rgba(0, 0, 0, 0.05)"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  badge-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: 4px 8px
  feature-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card-elevated:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-plan-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 24px
  pricing-plan-card-featured:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 24px
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 6px
  hero-band:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-1}"
    padding: 32px
  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.caption}"
    padding: 32px

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---
```
