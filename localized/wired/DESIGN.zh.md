# WIRED · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Wired 页面是编辑产品:白帆画,品牌专有的严格黑字印 `WiredDisplay` (高,窄,高的紧凑) serif 使用时间 64 px),以及堆叠的故事卡片,读作印刷杂志网格,移植到屏幕上. )没有大气梯度,没有装饰性铬,没有色调的强调色——该品牌除了黑白二重奏之外的唯一颜色是小的. `{colors.link}` (`#057dbc`)用于长式文章中的内含体链接.

Type carries the entire identity. Three families ladder the system: `WiredDisplay` (the proprietary high-contrast serif) for hero / section headlines; `BreveText` (a humanist serif) for long-form body and bylines; and `Apercu` (a humanist sans) for metadata, captions, eyebrow tags, and buttons. The pairing is editorial-grade: serifs for narrative, sans for navigation and structural labels.

按钮是方形的,品牌使用 `{rounded.none}` 0 px 整个UI的角——通讯签名,登录表格,"多读"的CTA都渲染成尖锐的矩形. circular 形状是 `button-icon-circular` 社会分担的支付费用没有软的滴影;该品牌在必要时使用细边线边界进行提升。

**关键特征 :**
- 严格的黑白二重奏,除了内线连结蓝色外,没有色调 `{colors.link}`品牌读作印刷杂志.
- Three-face typographic system — `WiredDisplay` serif for display, `BreveText` serif for body, `Apercu` sans for metadata and buttons.
- 平方按钮( S)`{rounded.none}`)——品牌在互动元素上从未软化角.
- 杂志式的故事 grid: large feature card at top, two-up secondary, then a vertical stack of bylined story rows separated by `{colors.hairline}` 1 px 分数。
- 品牌唯一标志性的装饰动作是 **桅头乐队** ——一个带有以字签为中心的细黑色条,没有其他装饰.
- A near-black `{colors.ink}` (`#000000`) footer band, no graphics, just text columns and the wordmark repeating.


## 配色

### 品牌和 强调色
- **墨黑笔** (`{colors.primary}` — `#000000`:品牌仅"accent",用于文字标记,头条,CTA,页脚填充,纯黑色,从未软化.

### 表面
- **页面底色** (`{colors.canvas}` — `#ffffff`: 默认的页面背景.
- **软画帘** (`{colors.canvas-soft}` — `#f5f5f5`: 用于评论区段背景和搜索结果行悬浮状态的稀有锡(不是主页节奏).
- **细边线** (`{colors.hairline}` — `#e0e0e0`): 1 px 故事行之间的分词,品牌只有"线".

### 文本
- **Ink** (`{colors.ink}` — `#000000`): Every headline, every body paragraph in BreveText.
- **墨水软** (`{colors.ink-soft}` — `#1a1a1a`:一种近黑变体,用于 caption-strong /页脚链接强调.
- **体质** (`{colors.body}` — `#757575`:二级元数据——旁线,时间戳,辅助体线.

### 语义
The brand operates with one inline link colour and no separate error / success / warning palette in its marketing surface. Validation cues on form pages use the ink black + body grey hierarchy.

- **链接** (`{colors.link}` — `#057dbc`:内置体链接蓝色. 仅使用在长形文章体副本内,从未在UI按钮或导航上使用.


## 字体排版

### 字体家族
三个家庭在系统上排队:
1. **WiredDisplay** ——专有高矮高低的高低相间 serif 专用于显示头条( Q)64 px 中,缩放为 26 px 子Display),该品牌最能识别的打字签名.
2. **BreveText** ——专有的人文主义者. serif 用于长形体、副线和编辑标题。 16 – 19 px line-height 1.45 – 1.50 以适应阅读密度。
3. **Apercu** 用于导航、按钮标签、眉毛、元数据、和标题的人文主义的圣言。 400 / 700.

Inter 被装入为嵌入式工具表面(注释部分,账户页)的第四个倒置面,但不出现在主营销/文章表面。

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-hero}` | 64px | 400 | 59.5px | -0.5px | 封面-故事头条. |
| `{typography.display-lg}` | 48px | 400 | 50.4px | -0.4px | Major section / feature headlines. |
| `{typography.display-md}` | 32px | 400 | 35.2px | -0.3px | Story-card 大型变种. |
| `{typography.display-sm}` | 26px | 400 | 28px | 0 | 长式文章中的子播放标题 。 |
| `{typography.display-xs}` | 20px | 700 | 24px | -0.28px | 桑斯语( S)Apercu) 显示分类点名的微头。 |
| `{typography.body-serif-lg}` | 19px | 400 | 27.93px | 0.108px | 一条的首款(第1款)BreveText). |
| `{typography.body-serif-md}` | 16px | 400 | 24px | 0.09px | 默认文章正文( E)BreveText). |
| `{typography.body-md}` | 17px | 400 | 20px | 0 | 桑斯身体( 3)Apercu)用于导航/元数据. |
| `{typography.body-md-strong}` | 17px | 700 | 22px | -0.144px | 粗体桑香(变种). |
| `{typography.body-sm}` | 14px | 400 | 18px | 0.4px | 二级圣体. |
| `{typography.body-sm-strong}` | 14px | 700 | 18px | 0.4px | 粗体标题 / nav-link. |
| `{typography.byline}` | 12.73px | 700 | 28px | 0.108px | 条子下行( Q)BreveText). |
| `{typography.caption}` | 12px | 400 | 16px | 0 | 精细的指纹,图像标题。 |
| `{typography.button-md}` | 16px | 700 | 20px | 0.3px | 扣子标签. |

### 原则
- **Serif 用于叙事, 用于结构。** 电话 serif 面部从未带有按钮标签或导航文本;面部从未带有文章体。
- **Display weight 400** — the proprietary WiredDisplay reads as elegant by virtue of its thin-tall-narrow design at default weight, not via weight 700+.
- **Bylines use BreveText weight 700 with relaxed line-height 2.2.** The vertical breathing is part of the editorial signature.

### Note on Font Substitutes
三个专有面孔没有确切的替代品。 最佳开源近似 :
- **WiredDisplay** — *播放集显示* 字重 400 大型显示器大小能捕捉到高孔径的甜酮感,虽然比品牌的高窄比例要大.
- **BreveText** — *洛拉,你好吗?* 或 减 减 *来源 Serif 专业版* 时 间 16 – 19 px.
- **Apercu** — *Inter* 或 减 减 *曼罗普* 重量 400 / 700.


## 布局

### 间距系统
- **基地单位**: 4 px.
- **脚本**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px · `{spacing.4xl}` 48 px.
- **分区编栏**: 首屏/ 故事网格使用 `{spacing.4xl}` 48 px 桌面上上下下层。
- **故事行编栏**: `{spacing.lg}` 16 px 垂直于旁线故事行之间。

### 网格容器( C)
- 销售内容使用宽容器(~1400 px 最大(最大)数。
- 封面故事 grid: 1 large hero + 2-up secondary stories + vertical stack.
- Story-row 堆栈:带有细边线分隔器的全宽单列。

### 反应战略

#### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile | < 768px | Cover hero 64→40 px; all grids 1-up; hamburger nav. |
| 平板 | 768–1023px | 2- 上二级故事网格。 |
| 桌面 | ≥ 1024px | 满刊网格. |

#### 触控区域
Button-primary 使 ~44 px 高( 高)12 垂直粘贴+ 20 。) 。 WCAG AAA , 在所有宽度。

#### 折叠战略
- 导航: 完全链接行 + 订阅 CDA 桌面 。 汉堡 移动 。
- 杂志 grid: hero stays full-width; 2- 上二级滴水到 1- 移动。
- 故事列:在所有的景点停留单列.

#### 图像行为
- 封面图像: 已全血 16:9 首屏/ 爱人 4:3 二级
- 文章体影像:文章栏内全线网.
- Author avatars: small inline circular crops next to bylines.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default — almost every surface lives at this level. |
| 职等 1 —— 细边线 | 1 px 固态 `{colors.hairline}` 边框。 | Story-row 分隔符,输入边框。 |
| 职等 2 ——重黑边界. | 2 px 固态 `{colors.ink}` 边框。 | 在某些竞选时刻订阅CTA. |

The brand uses no drop-shadows. Surface contrast and hairline borders carry all visual hierarchy.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | Every interactive shape — buttons, inputs, cards. The brand's signature square geometry. |
| `{rounded.full}` | 9999px | Circular 图标容器(社会-共享,账户化)。 |

### 摄影几何
- 封面故事: 16:9 首屏,边缘对角。
- 次要故事卡: 4:3 缩略语.
- 文章体象:原生方面,全列宽.
- 字节/ 变形符 : circular `{rounded.full}` 28 px 作物。


## 组件

### 按钮

**`button-primary`** - 方形黑色的CTA(英语:CTA).
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}` (Apercu 16 px / 700 / 0.3 px tracking), padding `{spacing.md} {spacing.xl}`, shape `{rounded.none}` 0 px.

**`button-outline`** ——白色轮廓CTA.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, same typography / padding / shape.

**`button-icon-circular`** - 电话 circular 共享相机按钮。
- Background `{colors.canvas}`, ink icon, shape `{rounded.full}`.

### 纸牌和集装箱

**`story-card-large`** - 封面故事卡与 `{typography.display-md}` 头条.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg}`. No border — the card lives on the canvas with the photo doing the work.

**`story-card`** ——副故事卡.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md}`. Photo at top, sans display heading + body lead below.

**`story-row`** ——旁线故事列表排行.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` bottom border, body in `{typography.body-md-strong}`, padding `{spacing.lg}` 0.

### 输入表单( F)

**`text-input`** ——标准文本输入.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, body in `{typography.body-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.none}`.

### 导航

**`nav-bar`** ——顶部导航,默认为光线.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.xl}`. Layout: hamburger left, masthead centre, Subscribe right.

**`nav-link`** ——在导航内链接项目.
- 文本 `{colors.ink}`,设置在 `{typography.body-sm-strong}` (Apercu 14 / 700).

**`footer`** - 黑色脚步乐队。
- Background `{colors.primary}`, text `{colors.on-primary}`, padding `{spacing.4xl} {spacing.xl}`. Body in `{typography.body-sm}` (Apercu 14 / 400). Footer column eyebrows in `{typography.body-sm-strong}`.

### 签名组件

**`hero-band`** ——主持封面故事的白首屏乐队.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Cover headline in `{typography.display-hero}` (WiredDisplay 64 px).

**`masthead-band`** ——带词标的瘦顶带.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.xl}`. The wordmark sits centred; flanked by section nav.

**`category-eyebrow`** ——故事头条上方的小大写类标签.
- Text `{colors.ink}`, set in `{typography.body-sm-strong}` (Apercu 14 / 700 — though some campaigns use ALL CAPS via CSS).

**`byline-row`** - 文章的旁线条。
- Background `{colors.canvas}`, text `{colors.body}`, body in `{typography.byline}` (BreveText 12.73 / 700 / line-height 2.2). Includes an author avatar + name + date.

**`hairline-divider`** - 电话 1 px 将线线条连接在故事行之间。
- 1 px 固态 `{colors.hairline}`.

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



## 设计建议与禁忌

### 执行
- 准备金 `{colors.primary}` 黑色表示字签,每张CTA,和页脚填充,品牌是严格的黑白二重唱.
- Set hero headlines in `{typography.display-hero}` (WiredDisplay 64 px weight 400). The proprietary serif IS the brand's typographic signature.
- 使用 `{rounded.none}` 0 px 。每个按钮和窗体输入。品牌读作印刷杂志——方角是不可谈判的。
- 平对 WiredDisplay (serif 显示)与 BreveText (serif 和(b) 组织事项 Apercu (三指标)三面相,三面相角色.
- 编剧故事行 `{colors.hairline}` 1 px 分牌者——品牌唯一的高调提示.

### Don't
- Don't introduce a chromatic brand accent. The link blue is reserved for inline body links inside articles only.
- Don't round button corners. The brand never softens its rectangular geometry.
- Don't drop a soft drop-shadow on cards. Surface contrast and hairlines carry elevation.
- Don't substitute the proprietary serif faces with a generic sans for display. The serif voice is the brand.
- 不要再推崇字重 400,品牌的优雅表现在打字机设计中,而非粗字重量.

## 设计词元原值

启发人们理解 Wired设计语言——旗舰科技-杂志品牌,其表面是白帆上鲜明黑色文字标记的严格编辑二重唱,以高大的狭义风俗展示为主. serif 首屏头条,一个人文主义者 serif 身体面值用于长形读取,而干净的桑斯面值用于元数据;布局读取时就像一个印行的杂志,移植到网络上,几乎没有营销的铬.

```yaml
---
version: alpha
name: Wired-design-analysis
description: An inspired interpretation of Wired's design language — a flagship technology-magazine brand whose surface is a strict editorial duet of stark black wordmark on white canvas, anchored by a tall narrow custom display serif for hero headlines, a humanist serif body face for long-form reading, and a clean sans face for metadata; layout reads like a printed magazine ported to the web with very little marketing chrome.

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#000000"
  ink-soft: "#1a1a1a"
  body: "#757575"
  hairline: "#e0e0e0"
  canvas: "#ffffff"
  canvas-soft: "#f5f5f5"
  link: "#057dbc"

typography:
  display-hero:
    fontFamily: WiredDisplay, "Times New Roman", Georgia, serif
    fontSize: 64px
    fontWeight: 400
    lineHeight: 59.52px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: WiredDisplay, "Times New Roman", Georgia, serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 50.4px
    letterSpacing: -0.4px
  display-md:
    fontFamily: WiredDisplay, "Times New Roman", Georgia, serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 35.2px
    letterSpacing: -0.3px
  display-sm:
    fontFamily: WiredDisplay, "Times New Roman", Georgia, serif
    fontSize: 26px
    fontWeight: 400
    lineHeight: 28.08px
  display-xs:
    fontFamily: Apercu, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 20px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: -0.28px
  body-serif-lg:
    fontFamily: BreveText, Georgia, "Times New Roman", serif
    fontSize: 19px
    fontWeight: 400
    lineHeight: 27.93px
    letterSpacing: 0.108px
  body-serif-md:
    fontFamily: BreveText, Georgia, "Times New Roman", serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0.09px
  body-md:
    fontFamily: Apercu, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 17px
    fontWeight: 400
    lineHeight: 20px
  body-md-strong:
    fontFamily: Apercu, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 17px
    fontWeight: 700
    lineHeight: 22px
    letterSpacing: -0.144px
  body-sm:
    fontFamily: Apercu, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0.4px
  body-sm-strong:
    fontFamily: Apercu, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 18px
    letterSpacing: 0.4px
  byline:
    fontFamily: BreveText, Georgia, "Times New Roman", serif
    fontSize: 12.73px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: 0.108px
  caption:
    fontFamily: Apercu, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: Apercu, "Helvetica Neue", Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.3px

rounded:
  none: 0px
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
  4xl: 48px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  story-card-large:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.lg}"
  story-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xs}"
    padding: "{spacing.md}"
  story-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md-strong}"
    padding: "{spacing.lg} 0"
  category-eyebrow:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
  byline-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.byline}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-hero}"
    padding: "{spacing.4xl} {spacing.xl}"
  masthead-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    padding: "{spacing.md} {spacing.xl}"
  hairline-divider:
    borderColor: "{colors.hairline}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.xl}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
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
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---
```
