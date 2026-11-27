# mydealz · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

mydealz is a deals-community feed running at maximum density: a single cool-gray canvas (`{colors.canvas}`) stacked with hundreds of white deal cards (`{colors.surface}`), each one a compact bundle of thumbnail, title, price, and social signals. The design's whole job is to make that firehose scannable, and it does it with one confident brand green (`{colors.primary}`) — the color of every price, every "Zum Deal" pill, every submit action — plus a tight status vocabulary that keeps the eye moving.

签名移动是 **温度控制**:每一笔交易都携带一粒胶囊形,显示一种冷蓝色的下拉(L.`{colors.cold}`),交易的热红(热红)的人群投票温度(////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////`{colors.hot}`红蓝的配对, 由暖橙子延伸( )`{colors.warm}`交易增加和紫色溢价`{colors.premium}`)对于突出的内容,是该品牌与原本商业的网格相对应的游戏量。`{colors.discount-surface}`),所以一张牌一看就看:绿色价格,红热温度,薄荷节约.

Geometrically the system is defined by the **fully-round 540px pill** — buttons, the search field, the temperature control, filter chips all curve to a complete radius, while content cards settle at a friendly 8px. Averta CY carries everything at just two weights (medium 500, bold 700), keeping headlines punchy and the dense body legible. Depth is minimal: cards separate with a hairline (`{colors.hairline}`) and lift on the softest shadow only when they matter.

**关键特征 :**
- 绿色品牌( 3)`{colors.primary}`拥有每一个行动和每个代价——一个混乱的饲料的单一统一信号
- Signature hot/cold **temperature control**: `{colors.cold}` down-vote, `{colors.hot}` up-vote and temperature reading, on every deal card
- Fully-round `{rounded.full}` (540px) pills for buttons, search, chips, and the temperature control; 8px cards
- 薄荷折扣药(`{colors.discount-surface}`将绿色节约与红热温度对齐
- Averta CY at two weights (500/700) driving a punchy, high-density type system
- 凉油页面底色( Name`{colors.canvas}`) 堆叠的白牌后面(`{colors.surface}`)——可扫描卡片饲料,而非营销页面
- 紧凑的强调色集... `{colors.warm}` 橙色的升起, `{colors.premium}` 紫色突出——保持严格功能


## 配色

### 品牌色与强调色
- **发牌绿色** (`{colors.primary}` — #30a83c:品牌的核心. 填充每颗初级CTA丸,每份交易价格,提交动作,主动链接,以及突出显示的STAT. On-color内容是: `{colors.on-primary}`.
- **强绿色** (`{colors.green-strong}`: 亮表面绿色文本的深绿色( )discount-badge 标签, 轮廓- 按钮格言) 里面的填充绿色会太轻。
- **热红** (`{colors.hot}`:温度"热"信号——交易的学位读数和高票箭头,品牌的兴奋色.
- **Cold Blue** (`{colors.cold}`): The temperature "cold" signal — the down-vote arrow. Always paired against `{colors.hot}` in the temperature control.
- **橙子升起来** (`{colors.warm}`:用于升温/调温交易的暖强调色,坐落在温度谱的冷热之间.
- **紫色精华** (`{colors.premium}`:突出标注溢价/特色内容标语.
- **贴现薄荷** (`{colors.discount-surface}`: 储蓄百分比后面的软绿色胶囊形.

### 界面表面
- **页面底色** (`{colors.canvas}`: 堆放白牌的凉爽的光灰色页面上方坐着.
- **界面表面** (`{colors.surface}`:纯白——每张牌,导航,页脚,按钮.
- **Hairline** (`{colors.hairline}`): The 1px border on cards, buttons, and dividers.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}`: 交易标题、标题和主文本的真黑。
- **体质** (`{colors.body}`:中灰色表示二级副本,元数据,哑音按钮标签.
- **静音** (`{colors.muted}`: 浅灰色,用于最安静的字幕和占位符文本.

### 语义色
- **表面/ 文本警告** (`{colors.warning-surface}` / `{colors.warning-text}`:软黄丸和琥珀棕色文本用于过期/警告交易。


## 字体排版

### 字体族

**Averta CY** — a humanist geometric sans — carries the entire system at two weights: medium (500) for body and lead copy, bold (700) for headings, UI labels, prices, and micro-labels. A **monospace** face appears in rare technical contexts (voucher codes). There is no light or black weight; the two-weight discipline keeps the dense feed consistent.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display}` | 48px | 700 | 1.1 | 0 | 页面首屏头条 |
| `{typography.heading-lg}` | 24px | 700 | 1.2 | 0 | 标题、交易价格 |
| `{typography.heading}` | 20px | 700 | 1.25 | 0 | 纸牌/块标题 |
| `{typography.lead}` | 18px | 500 | 1.4 | 0 | 引文段落,突出链接 |
| `{typography.body}` | 16px | 500 | 1.5 | 0 | 复制本,交易说明 |
| `{typography.ui}` | 14px | 700 | 1.3 | 0 | 按钮标签、温度、徽章 |
| `{typography.caption}` | 12px | 500 | 1.3 | 0 | 元数据、时间戳 |
| `{typography.micro}` | 10px | 700 | 1.2 | 0 | 微标签, 计数 |
| `{typography.mono}` | 16px | 500 | 1.4 | 0 | 证券代码 |

### 原则
- 仅两重... 500 阅读, 700 任何信号或行动
- 价格和温度总是大胆的;它们都是卡片上最重要的两个数字.
- 密集的饲料依靠大小和字重,从不以颜色为主,为文字等级(颜色保留地位).

### 替代字体
Averta CY is a commercial face. For open-source builds, **Mulish** or **Nunito Sans** (500/700) reproduce the humanist-geometric warmth with near-identical metrics; keep the two-weight split. Any system monospace substitutes for the voucher-code face.


## 布局

### 间距系统
- **基地单位**: 8px
- **托肯斯(前题)**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 40px
- 纸牌垫 `{spacing.lg}`; 纸牌行堆栈 `{spacing.sm}`–`{spacing.md}` 最大密度的空白。

### 网格与容器
上面有两柱壳 ~768px:主交易种子(单叠列全宽卡)加上右侧边栏的券,新闻,讨论卡. 断点下方的侧栏滴放,种子全宽. 容器宽度和内容强度,而不是狭义的读列.

### 留白规则
白空间是配给的——这是信息产品,而不是营销页。卡片与紧凑的内部垫板紧紧地坐在一起;白卡之间凉爽的页面底色沟则做分离工作,而细边线边界则保持每张卡片对邻居的脆性。

### 响应式布局

#### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 768px | 单柱饲料;侧边栏落;导航崩溃至"Menü"丸;温度控制和卡体下方的CTA堆积 |
| 桌面 | ≥ 768px | 饲料+右侧栏两栏壳;带搜索胶囊形和分类条的全导航行 |

#### 触控区域
胶囊形按钮( Name`{components.button-primary}`)和温度控制清除了舒适的水龙头高度;投票箭头,评论,分享,以及书签图标在卡脚上搭载了慷慨的命中区.

#### 窄屏布局调整
分类条和右侧栏首先崩溃; 导航缩合为"Menü"丸+搜索+提交; 交易卡从媒体左行重流到窄屏幕上堆叠的缩略图上.

#### 图片适配
交易缩略图包含在 `{rounded.md}` 纸牌的媒体边框,从未充血;假人就是完美的圆圈(`{rounded.circle}`) 商贸标志和app-shore徽章在 fixed 高处.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 | Flat on `{colors.canvas}` | Page ground, footer |
| 1 | 1px `{colors.hairline}` 边框 | 发牌、侧边栏牌、按钮、输入 |
| 2 | 软阴影 `rgba(11,22,44,0.09) 0 4px 12px` | 升降/盘旋牌,降降 |
| 3 | 深点 `rgba(0,0,0,0.38) -1px 11px 15px -11px` | 重叠, sticky 条 |

深度为细边线第一。卡片按边框和页面底色沟分开;软度 4–12px 阴影被保留给那些升起的元素(menus, sticky 栏,高卡片。休息的种子中没有沉重的阴影堆栈。

### 装饰性深度
The brand's playfulness lives in illustration, not gradients — a green cartoon frog mascot and companion characters appear in the consent and empty-state surfaces. The palette itself is flat; there are no brand gradients.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 2px | Tightest inline chips |
| `{rounded.sm}` | 4px | Discount / filled badges, small tags |
| `{rounded.md}` | 8px | 发牌、侧边栏牌、缩略图、标签按钮 |
| `{rounded.full}` | 540px | Buttons, search pill, temperature control, filter chips — the pill signature |
| `{rounded.circle}` | 9999px | 幻象,图标按钮 |

### 图片形状
处理缩略图 `{rounded.md}` 纸卡媒体栏上的帧; 作者和社区的造型为圆( Q)`{rounded.circle}`),没有首屏摄影——产品是卡片网格.


## 组件

### 按钮

**`button-primary`** ——绿色行动("Zum Deal","Deal-Alarm analegen","Hinzufügen").
- 填充 `{colors.primary}`标签 `{colors.on-primary}` 输入 `{typography.ui}`形状 `{rounded.full}`, 编译 `0px 14px`,经常带有尾端的外部链接或加格莱夫

**`button-outline-green`** ——品牌丁字二级(“+贝特拉格”).
- `{colors.surface}` 满, `{colors.primary}` 标签+边框, `{rounded.full}`, 编译 `0px 14px`

**`button-outline-neutral`** ——静静的界面框架("Menü").
- `{colors.surface}` 满, `{colors.ink}` 标签, `{colors.hairline}` 边框, `{rounded.full}`, 编译 `0px 12px`

**`button-muted`** ——不强调动作("Ohne Zustimmung weiter").
- `{colors.surface}` 满, `{colors.body}` 标签, `{colors.hairline}` 边框, `{rounded.full}`

**`button-tag`** ——紧凑型公用事业控制.
- `{colors.surface}` 满, `{colors.ink}` 标签, `{rounded.md}`紧紧的 `0px 4px` 粘贴

### 卡片与容器

**`deal-card`** - 种子的原子 - 种子的原子
- `{colors.surface}` 打开 `{colors.hairline}`, `{rounded.md}`, `{spacing.lg}` 页; 媒体左缩略图, 粗体黑色标题, a `price-lockup`, a `temperature-control`,商家+作者行,以及 a `button-primary` 带有注释/ 共享/ 书签图标的脚

**`sidebar-card`** ——券/新闻/讨论牌
- 同样的白色对接线 `{rounded.md}` 界面框架为 `deal-card`右侧的铁轨上

**`timestamp-pill`** - "Geposet vor..." 标记
- `{colors.canvas}` 满, `{colors.body}` `{typography.caption}`, `{rounded.md}`贴在卡片上

### 输入框与表单

**`search-pill`** ——头部搜索
- `{colors.surface}` 胶囊形 `{rounded.full}`, `{colors.hairline}` 边框, `{colors.body}` 占位符在 `{typography.body}`,左侧放大格

**`text-input`**
- `{colors.surface}` 字段,请 `{colors.ink}` 文本,海军-透明边界,全圆 `{rounded.full}`, 编译 `9px 35px`

**`email-input`**
- `{colors.surface}` 字段为 `{rounded.md}` (对胶囊形的夸张), 贴 `9px 16px`

### 导航

**`nav-bar`**
- `{colors.surface}` 栏 `{colors.hairline}` 底规则 : mydealz 青蛙标志, `button-outline-neutral` 门纽, `search-pill`,"致命警报麻醉剂"和"Einloggen"的文本链接, `button-outline-green` + Beitrag; 分类条(Kategorien, Gutscheine, Freebies, Deals, Diskusionen, Club)坐落在下面

**`footer`**
- `{colors.surface}` 超过一个 `{colors.hairline}` 上规则; 链接列( Firma, Community, Rechtliches)  in `{colors.body}` 绿色链接,社交圈图标, 应用商店徽章,以及一个 `country-selector`

**`country-selector`**
- `{colors.surface}` `{rounded.md}` 降下带有旗帜+标签的 `{colors.hairline}` 边框

### 标志性组件

**`temperature-control`** ——品牌的界定成分.
- 全面展开 `{rounded.full}` 胶囊形: `temperature-down` 冷蓝( 冷蓝) (`{colors.cold}`) 下行,交易的温度读取热红(`{colors.hot}`),以及a 数据 `temperature-up` 热红的上行者——群众的票价显露出来.

**`temperature-up`** / **`temperature-down`** ——投票箭头.
- 上进 `{colors.hot}`下进 `{colors.cold}`,两者均输入 `{typography.ui}`

**`price-lockup`** - 交易的号码
- `{colors.primary}` 绿色时价 `{typography.heading-lg}`,一个触摸 `{colors.muted}` 原创,a `discount-badge`

**`discount-badge`** - 储蓄
- `{colors.discount-surface}` 薄荷药 `{colors.green-strong}` 标签在 `{typography.ui}`, `{rounded.sm}`, `4px 8px`

**`badge-neutral-subtle`** / **`badge-filled`** - 状态芯片
- 亚细亚:白色/ 黑色 / `{rounded.md}`填充时 : `{colors.canvas}` 满, `{colors.body}` 文本, 单词 `{rounded.sm}` 白色细边线

**`premium-badge`** ——突出显示的内容标记
- `{colors.premium}` 紫色标签上 `{colors.surface}`, `{rounded.sm}`

**`warning-badge`** 过期/警告状态
- `{colors.warning-surface}` 软黄丸, `{colors.warning-text}` 琥珀棕色标签, `{rounded.sm}`

**`avatar`** 作者/社区
- 圆( 圆)`{rounded.circle}`继续 `{colors.canvas}` 白环

### 组合示例

> Kit-miror演示表面,这些不是品牌内涵,每个都 `ex-*` 条目引用上面的品牌原始语,所以每个实例表面都是由这个光谱而不是模板默认而成的.

**`ex-pricing-tier`**：默认套餐卡，沿用功能卡结构和品牌 canvas-soft 底色。
- 属性 : `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`**：推荐套餐卡。浅色模式中用深底浅字，深色模式中用浅底深字。
- 属性 : `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`**：面向 SaaS / B2B 场景的套餐权益摘要卡。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`**：SaaS / B2B 订阅摘要，每个附加项单独列出。
- 属性 : `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`**：应用框架示例里的侧栏导航行，以品牌主色标识选中状态。
- 属性 : `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`**：数据表格中 th 与 td 的默认样式。表头采用大写等宽字，正文采用 body-sm。
- 属性 : `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`**：登录与注册卡，复用功能卡和 text-input。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`**：对话框表面，沿用功能卡样式并加浮层投影。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`**：空状态插图容器。
- 属性 : `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`**：轻提示，沿用功能卡圆角并使用中等投影。
- 属性 : `backgroundColor`, `rounded`, `padding`, `typography`



## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` 绿色的,用于行动和价格——它是将饲料连在一起的单一线条。
- 留着 `temperature-control` 组合完好无损 : `{colors.cold}` 下来, `{colors.hot}` 升温——是品牌的标志.
- 将每个按钮、芯片、搜索和温度控制都注射到 `{rounded.full}`; 保留内容卡 `{rounded.md}`.
- 省点钱吧 `{colors.discount-surface}` 薄荷徽章在绿色价格旁边
- 将打字机保存到 Averta CY 500 / 700; 大胆的每个价格和温度。
- 使用单独的牌 `{colors.hairline}` 边界和边界 `{colors.canvas}` 沟壑,不重阴.

### 应避免的做法
- Don't recolor prices or primary actions away from `{colors.primary}` green.
- Don't split the temperature pairing or recolor the vote arrows — cold is blue, hot is red, always.
- Don't introduce shadows on resting feed cards; the soft 4–12px shadow is for elements that lift.
- Don't use a third or fourth type weight — the system is 500 and 700 only.
- Don't let `{colors.warm}` orange or `{colors.premium}` violet drift into decorative use; they are functional status colors.
- Don't square off the pills — the fully-round `{rounded.full}` button is the brand's shape signature.

## 设计词元原值

分析 mydealz设计语言——一个建立在自信的品牌绿色之上的高密度德国交易-社区系统,一个堆积的白卡饲料携带着上千个交易,每张卡都戴着将定价转化为众票的签名热/冷温度控制. 540px 胶囊形扣子 Averta CY 以两重的重量,冷却-灰色页页面底色,以及紧凑的红色/蓝色/橙色状态词汇,使信息-密集的饲料可以扫描,同时可以播放。

```yaml
---
version: alpha
name: mydealz Analysis
description: An analysis of mydealz's design language — a high-density German deals-community system built on a confident brand green, where a stacked white-card feed carries thousands of deals and every card wears the signature hot/cold temperature control that turns pricing into a crowd vote. Fully-round 540px pill buttons, Averta CY at two weights, cool-gray page canvas, and a compact red/blue/orange status vocabulary keep the information-dense feed scannable and playful at once.

colors:
  primary: "#30a83c"
  on-primary: "#ffffff"
  green-strong: "#197e25"
  discount-surface: "#defde4"
  hot: "#ce1736"
  cold: "#034eb1"
  warm: "#fb6001"
  premium: "#7457dd"
  canvas: "#f3f5f7"
  surface: "#ffffff"
  ink: "#000000"
  body: "#6b6d70"
  muted: "#a7a9ac"
  hairline: "#dfe1e4"
  warning-surface: "#faf9ca"
  warning-text: "#9f5c0c"

typography:
  display:
    fontFamily: Averta CY
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0
  heading-lg:
    fontFamily: Averta CY
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading:
    fontFamily: Averta CY
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  lead:
    fontFamily: Averta CY
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body:
    fontFamily: Averta CY
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  ui:
    fontFamily: Averta CY
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  caption:
    fontFamily: Averta CY
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  micro:
    fontFamily: Averta CY
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  mono:
    fontFamily: monospace
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 2px
  sm: 4px
  md: 8px
  full: 540px
  circle: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 40px

components:
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    borderColor: "{colors.hairline}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "0px 14px"
  button-outline-green:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "0px 14px"
    borderColor: "{colors.primary}"
  button-outline-neutral:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "0px 12px"
    borderColor: "{colors.hairline}"
  button-muted:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "0px 14px"
    borderColor: "{colors.hairline}"
  button-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0px 4px"
  search-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    borderColor: "{colors.hairline}"
  deal-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "16px"
  temperature-control:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.hot}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    borderColor: "{colors.hairline}"
  temperature-up:
    textColor: "{colors.hot}"
    typography: "{typography.ui}"
  temperature-down:
    textColor: "{colors.cold}"
    typography: "{typography.ui}"
  price-lockup:
    textColor: "{colors.primary}"
    typography: "{typography.heading-lg}"
  discount-badge:
    backgroundColor: "{colors.discount-surface}"
    textColor: "{colors.green-strong}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  badge-neutral-subtle:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0px 4px"
  badge-filled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
    borderColor: "{colors.surface}"
  premium-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.premium}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
  warning-badge:
    backgroundColor: "{colors.warning-surface}"
    textColor: "{colors.warning-text}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "9px 35px"
  email-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "9px 16px"
  timestamp-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
  sidebar-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "16px"
  avatar:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.circle}"
    borderColor: "{colors.surface}"
  country-selector:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    borderColor: "{colors.hairline}"
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"

  # ─── Examples (illustrative) — kit-mirror surfaces ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
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
    headerBackground: "{colors.surface}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body}"

---
```
