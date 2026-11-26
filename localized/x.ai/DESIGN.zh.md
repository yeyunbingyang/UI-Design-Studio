# xAI · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

xAI is Elon Musk's frontier-AI lab and the website wears that posture with engineered restraint: a near-black canvas `{colors.canvas}` (`#0a0a0a`) edge-to-edge, white outline pills as every interactive element, and a single proprietary geometric sans `Universal Sans` carrying every display headline at weight 400. There is no gradient hero, no atmospheric backdrop, no product screenshot. The brand reads as confidently sparse — a research lab announcing its work rather than a SaaS marketing site.

Type is the second decisive voice. `Universal Sans` carries every display at weight 400 (regular) with aggressive negative tracking (`-2.4 px` at 96 px, scaling down through the display ladder). For technical labels, eyebrows, and metric counters, the brand pairs `Geist Mono` (uppercase, 1.4 px positive tracking) — every section eyebrow reads as a code comment more than a marketing label.

Every interactive element is a pill (`{rounded.pill}` 9999 px) with 1 px white-translucent border `rgba(255, 255, 255, 0.25)`. The button shape never varies — the same translucent-white pill carries "Try Grok", "Read announcement", "Custom Voices", "Sign up now", and every "Read" anchor. The pill is the entire shape system.

**关键特征 :**
- 单张近黑页面底色( Name`{colors.canvas}` `#0a0a0a`),以白色轮廓丸作为整个交互词汇.
- Universal Sans weight 400 for display, Geist Mono uppercase tracked for labels — the two-face contrast IS the brand voice.
- Every button is a `{rounded.pill}` outline with translucent-white border. The brand never uses filled CTAs except for one variant (white-filled pill on Sign Up).
- 牌很紧的 `{rounded.sm}` 8 px 长方形,在稍轻的灯光中 `{colors.canvas-card}` (`#191919`)填充细边线边框,无阴.
- 一种哑音的强调色调盘日落-橙 / 黄昏-普尔普 / 紫色-紫色/微风-蓝色 生活在设计符中,但很少出现在主要营销表面——保留给产品插图/图标.
- 大规模负数 letter-spacing 显示头条( E)`-2.4 px` 时 间 96 px)给打字机一个精确的,集合的外观.


## 配色

### 品牌和 强调色
- **白色** (`{colors.primary}` — `#ffffff`:该品牌的主要"颜色"——用作按钮轮廓, button-primary 装填,全部显示文本,品牌的签名是白色的近黑的.
- **日落橙色** (`{colors.accent-sunset}` — `#ff7a17`:一种在产品插图和强调色片段内使用的暖橙色.
- **日落软体** (`{colors.accent-sunset-soft}` — `#ffc285`:日落强调色的较轻变体.
- **紫色黄昏** (`{colors.accent-dusk}` — `#7c3aed`:深紫色,产品插图内用.
- **暮色** (`{colors.accent-twilight}` — `#c4b5fd`: 柔软紫罗兰——说明性强调色.
- **微风蓝** (`{colors.accent-breeze}` — `#a0c3ec`: 柔软的蓝色——说明性强调色.
- **午夜时分** (`{colors.accent-midnight}` — `#0d1726`:深蓝黑色用于说明背景.

### 表面
- **页面底色** (`{colors.canvas}` — `#0a0a0a`:默认的近黑页背景,品牌是唯一真实的表面.
- **软画帘** (`{colors.canvas-soft}` — `#1a1c20`:一个稍轻的暗填充,用于悬浮的导航项和工具提示.
- **页面底色卡** (`{colors.canvas-card}` — `#191919`: 装填产品版卡内使用的木炭卡.
- **页面底色中间** (`{colors.canvas-mid}` — `#363a3f`:一种用于嵌入式表面和代码模拟背景的中暗.
- **细边线** (`{colors.hairline}` — `#212327`): 1 px 固体分裂器在黑暗表面。

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — `#ffffff`:页面底色上的默认文本——纯白.
- **墨水车** (`{colors.ink-hover}` — `#fafaf7`: 稍稍脱白用于悬浮状态(在组件规格中过滤出每条无悬浮政策).
- **体质** (`{colors.body}` — `#dadbdf`: 次要体文本——支持性副本字重较轻.
- **中间/ 静音** (`{colors.body-mid}` — `#7d8187`:中线体和哑文本——标题,精细印刷.

### 语义
The brand doesn't surface a separate semantic palette on the marketing site. Validation cues use the white-on-canvas hierarchy.


## 字体排版

### 字体家族
两人的面孔 系统梯子:
1. **universalSans** – 用于每个显示、身体、按钮和链接角色的专有几何色素。 400 只在营销表面(品牌的束缚是声音的一部分). 负面 letter-spacing 显示大小时,是视觉签名。
2. **GeistMono** 用于大写部分眉毛、标签标题和公尺计数器。1.2 – 1.4 px时 . 12 – 14 px.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 96px | 400 | 96px | -2.4px | 最大首屏规模. |
| `{typography.display-lg}` | 72px | 400 | 72px | -1.8px | Sub-hero displays. |
| `{typography.display-md}` | 48px | 400 | 48px | -1.2px | 科头条. |
| `{typography.display-sm}` | 32px | 400 | 36px | -0.6px | 纸牌组标题。 |
| `{typography.display-xs}` | 20px | 400 | 28px | 0 | 内含显示. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | 领头段落。 |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | 默认身体. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | 身次第身. 师曰. |
| `{typography.caption-mono}` | 14px | 400 | 20px | 1.4px | 区域眉毛( 3)GeistMono ) (大写). |
| `{typography.caption-mono-sm}` | 12px | 400 | 16px | 1.2px | Small mono labels. |
| `{typography.button-md}` | 14px | 400 | 20px | 0 | 扣子标签. |

### 原则
- **字重 400 给一切。** 品牌从不大胆,负追踪+大小等级负责强调工作.
- **显示大小时严格负跟踪 。** 恢复到中性跟踪会失去精准感.
- **GeistMono uppercase for eyebrows.** Tracked positively (1.4 px) to make the mono read as a code comment.

### Note on Font Substitutes
universalSans 专有。开源替代品 :
- **显示 + 体** — *Inter* 字重 400 与 `-0.04em` 改为: `-0.02em` letter-spacing 显示大小最接近。 *Geist* 也是第二好的选择。
- **单声道** — *Geist Mono* 确是有文据的品牌伙伴, *JetBrains Mono* 或 减 减 *IBM 普莱克斯·莫诺* 均为候补。


## 布局

### 间距系统
- **基地单位**: 4 px.
- **脚本**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px.
- **分区编栏**: 首屏/ 内容带 。 `{spacing.4xl}` 64 px 。在桌面上。
- **纸牌内部贴纸**: `{spacing.xl}` 24 px.

### 网格容器( C)
- 销售内容中心 ~1200 px.
- 产品/公告卡 grid: 2-up at desktop, 1-up at mobile.

### 反应战略

#### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 768px | 首屏称号 96 → 48 px网格 1- 上,汉堡导航 |
| 桌面 | ≥ 768px | 完全首屏+ 爱人 2- 电网上 |

#### 触控区域
按钮渲染 ~32 – 40 px 高( 高)8 垂直粘贴+ 20 移动充气区与WCAG相会 44 × 44 px.

#### 图像行为
The brand uses sparse SVG illustrations for product moments (Grok, Voice, API). No photography on the marketing surface.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default. |
| 职等 1 —— 细边线 | 1 px 固态 `{colors.hairline}` 边框。 | 纸牌铬,按钮轮廓(带有半透明白色). |

品牌没有阴影, 细边线边框带所有的高位提示。


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 满血乐队. |
| `{rounded.sm}` | 8px | 贺卡染色体(品牌) `--radius` 数值)。 |
| `{rounded.pill}` | 9999px | Every button — the brand's universal interactive shape. |
| `{rounded.full}` | 9999px | Circular 图标容器。 |


## 组件

### 按钮

**`button-primary`** ——罕见的白填药(用在单张Sign Up CTA上).
- Background `{colors.primary}` white, text `{colors.on-primary}` near-black, 1 px solid white border, label `{typography.button-md}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}` 9999 px.

**`button-outline-on-dark`** —— 犬白线外药,每服非初级CTA.
- Background `{colors.canvas}` (transparent in practice — `rgba(0,0,0,0)`), text `{colors.ink}` white, 1 px solid `{colors.hairline}` border (translucent white at runtime), same typography / padding scale / shape.

**`button-outline-sm`** ——卡片类CTA中所使用的较小的轮廓胶囊形.
- 与 `button-outline-on-dark` 使用更紧的垫装 `{spacing.xs} {spacing.md}`.

### 纸牌和集装箱

**`card-content`** ——默认内容卡.
- Background `{colors.canvas-card}` (`#191919`), text `{colors.ink}`, 1 px solid `{colors.hairline}` border, padding `{spacing.xl}`, shape `{rounded.sm}` 8 px.

**`card-feature-product`** ——产品地物卡(Grok / Voice / API).
- 与 `card-content`。主机为 SVG 插图 + 头条 + 身体 + 纲要胶囊形 CTA。

### 输入表单( F)

**`text-input`** ——暗面的标准文本输入.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, body in `{typography.body-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}` 8 px.

### 导航

**`nav-bar`** - 电话 sticky 顶级导航
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.xl}`.

**`nav-link`** ——在导航内链接项目.
- 文本 `{colors.ink}`,设置在 `{typography.body-sm}`.

**`footer`** - 脚步乐队。
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.3xl} {spacing.xl}`. Body in `{typography.body-sm}`.

### 签名组件

**`hero-band`** ——那个有着大规模显示头条的黑暗首屏.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Headline in `{typography.display-xl}` (96 px weight 400 with `-2.4 px` tracking).

**`content-band`** ——标准内容部分.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Section headline in `{typography.display-md}` preceded by a `{typography.caption-mono}` UPPERCASE GeistMono eyebrow.

**`eyebrow-mono`** ——跟踪大写 GeistMono 标签上方的每个区头条。
- Text `{colors.ink}`, set in `{typography.caption-mono}`. The brand's signature label style.

**`divider-hairline`** - 电话 1 px 区域段之间的线条。
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
- 准备金 `{colors.canvas}` (`#0a0a0a`)作为唯一的页面表面,品牌仅是暗色的canvas.
- 设置首屏头条 `{typography.display-xl}` 通用三联赛字重 400 与 `-2.4 px` 追踪,精度就是声音
- 使用 `{rounded.pill}` 9999 px 胶囊形是品牌
- 平价通用桑斯(判决案件) GeistMono UPPERCASE(眼睛眉,标签,标注计数器).
- 大纲按钮使用白透明边框——品牌在其大纲胶囊形上从未使用固白边框.

### Don't
- Don't introduce a light-mode counterpart. xAI is dark-canvas only.
- Don't bold display headlines. Weight 400 is the entire scale.
- Don't use filled buttons broadly. The brand uses outline pills almost exclusively; one Sign Up white-filled pill is the rare exception.
- Don't drop a drop-shadow on cards. Hairline borders carry elevation.
- 使用通用几何桑语代替通用桑语,不用调整 letter-spacing. 负追踪是品牌的一部分.

## 设计词元原值

启发人们理解 xAI设计语言——埃隆·穆斯克的前沿-AI公司,其网络表面是严格近黑页面底色,仅被白丸子轮廓打破,偶尔温暖的日落/黄昏梯度强调色,定制的几何桑(Universal Sans)用于展示,以及一个大写跟踪 monospace 标题面;整个系统读作工程-宇宙,未上市.

```yaml
---
version: alpha
name: xAI-design-analysis
description: An inspired interpretation of xAI's design language — Elon Musk's frontier-AI company whose web surface is a strict near-black canvas broken only by white pill outlines, occasional warm sunset / dusk gradient accents, a custom geometric sans (Universal Sans) for display, and an uppercase tracked monospace caption face; the whole system reads as engineered-cosmic, unmarketed.

colors:
  primary: "#ffffff"
  on-primary: "#0a0a0a"
  ink: "#ffffff"
  ink-hover: "#fafaf7"
  body: "#dadbdf"
  body-mid: "#7d8187"
  mute: "#7d8187"
  hairline: "#212327"
  canvas: "#0a0a0a"
  canvas-soft: "#1a1c20"
  canvas-card: "#191919"
  canvas-mid: "#363a3f"
  accent-sunset: "#ff7a17"
  accent-sunset-soft: "#ffc285"
  accent-dusk: "#7c3aed"
  accent-twilight: "#c4b5fd"
  accent-breeze: "#a0c3ec"
  accent-midnight: "#0d1726"

typography:
  display-xl:
    fontFamily: universalSans, Inter, system-ui, -apple-system, sans-serif
    fontSize: 96px
    fontWeight: 400
    lineHeight: 96px
    letterSpacing: -2.4px
  display-lg:
    fontFamily: universalSans, Inter, system-ui, sans-serif
    fontSize: 72px
    fontWeight: 400
    lineHeight: 72px
    letterSpacing: -1.8px
  display-md:
    fontFamily: universalSans, Inter, system-ui, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: -1.2px
  display-sm:
    fontFamily: universalSans, Inter, system-ui, sans-serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.6px
  display-xs:
    fontFamily: universalSans, Inter, system-ui, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
  body-lg:
    fontFamily: universalSans, Inter, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: universalSans, Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: universalSans, Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption-mono:
    fontFamily: GeistMono, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 1.4px
  caption-mono-sm:
    fontFamily: GeistMono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 1.2px
  button-md:
    fontFamily: universalSans, Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px

rounded:
  none: 0px
  sm: 8px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  button-outline-on-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  button-outline-sm:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  text-input:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  card-content:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  card-feature-product:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  content-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.4xl} {spacing.xl}"
  eyebrow-mono:
    textColor: "{colors.ink}"
    typography: "{typography.caption-mono}"
  divider-hairline:
    borderColor: "{colors.hairline}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
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
    headerTypography: "{typography.caption-mono}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.md} {spacing.lg}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---
```
