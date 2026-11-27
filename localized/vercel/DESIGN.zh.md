# Vercel · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Vercel's Geist system is an exercise in subtraction. The page is a near-white sheet (`{colors.canvas}` — #fafafa) carrying near-black ink (`{colors.ink}` — #171717), and almost nothing else competes. Headings, body copy, primary buttons, and the thin 1px borders that define every card all draw from the same ink-and-grey ladder. The one place color is allowed to exist is the hero, where a soft multi-stop **mesh gradient** — cyan, blue, violet, magenta, amber — blooms behind or beside the headline as the brand's entire decorative system. Everywhere else, restraint.

Typography does the heavy lifting. **Geist Sans** sets the display headline in tightly-tracked weight-600 (the hero h1 runs -2.4px letter-spacing), and **Geist Mono** appears as small uppercase eyebrows labeling sections like a technical spec sheet. Buttons split into two shapes by context: the marketing CTAs are fully rounded black **pills** (`{rounded.pill}` — 100px, "Start Deploying" / "Get a Demo"), while nav and in-app controls use a tight 6px square (`{rounded.sm}`, "Sign Up" / "Log In"). The contrast between the rounded marketing pill and the square app button is itself a deliberate signal of which surface you're on.

Surfaces barely lift. Cards are white (`{colors.canvas-elevated}`) on the #fafafa canvas, separated by a 1px hairline (`{colors.hairline}` — #ebebeb) and, at most, a whisper-soft layered shadow. Feature sections are built from precise grids of these hairline cards, often holding thin node-graph or code-editor illustrations rendered in the same ink-on-white palette. The page reads like documentation that happens to be selling something — engineered, exact, and confident enough to let a single gradient be the only flourish.

**关键特征 :**
- 单笔近黑墨水( Q)`{colors.ink}`上面有标题、体、主要CTA, 以及近白色页面底色上的边框(`{colors.canvas}`)——近零色环色环.
- The multi-stop mesh gradient (cyan → blue → violet → magenta → amber) is the entire decorative system, confined to the hero.
- Two button shapes by context: rounded black **pills** (`{rounded.pill}`) for marketing CTAs, tight 6px squares (`{rounded.sm}`) for nav/app controls.
- Geist Sans for tightly-tracked display type (`{typography.display-xl}` at -2.4px), Geist Mono for uppercase technical eyebrows (`{typography.mono-eyebrow}`).
- 细边线边框白卡( 3)`{colors.hairline}` 打开 `{colors.canvas-elevated}`)在精确网格中;深度通过 1px 边框+低声阴影, 永远不重升。
- 经典 Vercel 梯度三强调色(开发/预览/舰艇)作为命名的强调色系统生存下来: `{colors.gradient-develop-start}`尾声,预览,飞船
- 彩块页面节奏:白色首屏带网格梯度 ^ 标志条 → 细边线 feature-card 网格 → 代码编辑频段 → 模板卡 → 黑文本 CTA频段 → 灰色页脚.


## 配色

> 来源页分析:主页、AI网关页、客户页和定价页。每页的墨水/扫描/海绳三强调色重复;强调色蓝色(`{colors.link}`)价格上表面,网格化停止在首屏中生活.

### 品牌色与强调色
- **墨水( 墨水 )** (`{colors.primary}` / `{colors.ink}` — #171717:该品牌定义了近黑. 头部,主CTA填充,标志,以及最黑暗的文本层. Paired with. `{colors.on-primary}` (白话).
- **Vercel Blue** (`{colors.link}` — #0070f3): the link and accent blue — inline links, pricing highlights, focus signals. Darker press tone `{colors.link-deep}` (#0761d1), pale wash `{colors.link-soft}` (#d3e5ff).
- **紫罗兰** (`{colors.violet}` — #7928ca), **青色** (`{colors.cyan}` — #50e3c2), **粉红色** (`{colors.pink}` — #ff0080), **红** (`{colors.magenta}` — #eb367f:色调强调色家族,节制用于插图强调色,作为网格化的停声,从未像界面框架填充一样.

### 界面表面
- **页面底色** (`{colors.canvas}` — #fafafa:默认的页背景——近白面表所有东西都坐着.
- **升迁** (`{colors.canvas-elevated}` — #ffffff:纯白色的牌,按钮,输入,和代码块从页面底色上抬起.
- **Hairline-Soft 界面表面** (`{colors.hairline-soft}` — #f2f2f2:最微弱的灰色填充,用于巧妙的交替面板和凹井。

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — #171717:主要标题和高强调文本。
- **体质** (`{colors.body}` — #4d4d4d:标准段落和二级副本,导航链接.
- **Mute** (`{colors.mute}` — #8f8f8f): lower-emphasis captions, logo-strip labels, metadata.
- **异样** (`{colors.faint}` — #a1a1a1:最低级——占位符,残废标签.

### 边框
- **细边线** (`{colors.hairline}` — #ebebeb: 计数器 1px 每一个卡片、输入和分隔器上的边框——系统的结构工作马。

### 语义色
- **错误** (`{colors.error}` — #ee0000: 验证/破坏性,具有深层的压电层 `{colors.error-deep}` (#c50000).
- **警告** (`{colors.warning}` — #f5a623: 谨慎状态, 柔软 `{colors.warning-soft}` 深处 `{colors.warning-deep}` 等级。
- **成功** 地图到 `{colors.link}` (#0070f3)——蓝色双人作为正/主动信号.

### 品牌渐变
Three named two-stop gradients form the legacy Vercel gradient identity, surviving as illustration and accent washes:
- **开发**: `{colors.gradient-develop-start}` (#007cf0) → `{colors.gradient-develop-end}` (#00dfd8)——蓝至青.
- **预览**: `{colors.gradient-preview-start}` (#7928ca) → `{colors.gradient-preview-end}` (#ff0080)——紫罗兰变粉红.
- **船舶**: `{colors.gradient-ship-start}` (#ff4d4d) → `{colors.gradient-ship-end}` (#f9cb28)——红至琥珀.
These, blended together, form the hero's multi-stop mesh.


## 字体排版

### 字体族
The system runs entirely on **Geist** — Vercel's own type family. **Geist Sans** (with an `Arial` system fallback) sets all UI and prose; **Geist Mono** sets code, inline technical tokens, and the small uppercase section eyebrows. There is no third face. Geist Sans is a clean geometric-humanist sans; substitute **Inter** if Geist is unavailable, and **JetBrains Mono** or **IBM Plex Mono** for Geist Mono.

### 字号层级

| 调试                       | 大小 | 字重 | 线条高度 | 字母间距 | 使用                                   |
| --------------------------- | ---- | ------ | ----------- | -------------- | ------------------------------------- |
| `{typography.display-xl}`   | 48px | 600    | 48px        | -2.4px         | 首屏头条                         |
| `{typography.heading-lg}`   | 32px | 600    | 40px        | -1.28px        | Major section headings                |
| `{typography.heading-md}`   | 20px | 600    | 28px        | -0.4px         | 分节/卡片标题           |
| `{typography.label-sm}`     | 14px | 500    | 20px        | -0.28px        | 强标签, 导航强调           |
| `{typography.mono-eyebrow}` | 12px | 500    | 16px        | 0              | Uppercase Geist Mono section eyebrows |
| `{typography.body-lg}`      | 16px | 400    | 24px        | 0              | 领头段落,大体           |
| `{typography.body-md}`      | 14px | 400    | 20px        | 0              | 默认正文、 导航链接、 表格单元格  |
| `{typography.body-sm}`      | 12px | 400    | 16px        | 0              | 说明、脚注、元数据         |
| `{typography.button-lg}`    | 16px | 500    | 20px        | 0              | 营销胶囊形按钮标签          |
| `{typography.button-md}`    | 14px | 500    | 20px        | 0              | 导航/ 应用按钮标签               |
| `{typography.code}`         | 14px | 400    | 20px        | 0              | 代码块, 内置代码( Q)Geist Mono) |

### 原则
- 显示类型由紧的负跟踪定义——标题越大,则越紧(-2.4px 以首屏的模样, -1.28px 。身体类型坐落在中性间距。
- Weight is binary: 600 for headings and 500 for buttons/labels; everything else is 400. There is no light or black weight, and no italic.
- Geist Mono 仅保留两个角色——代码,以及小大写眉毛标签,这些标签引入了像光谱表头这样的部分。

### 替代字体
Geist Sans and Geist Mono are freely available (open-source, via Vercel / Google Fonts). If unavailable, **Inter** (sans) and **JetBrains Mono** (mono) are the closest open substitutes; keep heading weight at 600 and preserve the negative display tracking.


## 布局

### 间距系统
- **基地单位**: 4px。比例级步骤 4 → 8 → 12 → 16 → 24 → 32 → 40 → 64 → 96 → 128px.
- **脚本**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 40px · `{spacing.3xl}` 64px · `{spacing.4xl}` 96px · `{spacing.section}` 128px.
- **Card interiors** sit at `{spacing.lg}`–`{spacing.xl}` (24–32px); **section bands** run `{spacing.4xl}`–`{spacing.section}` (96–128px) of vertical rhythm.
- **按钮绑定** 横向的 营销胶囊形 `0px 14px`,导航按钮 `0px 6px` 高度由下列人员设定: line-height 而不是垂直的垫。

### 网格与容器
- 居中( C) max-width 集装箱(~1200px),带有舒适的沟槽;首屏和CTA乐队将其内容集中.
- 使用特性部分 2- 起来, 3- 上,还有 4- 向上移动的发条卡网 1- 宽度很窄
- 定价页面使用多栏级网格;客户页上标注/案例研究网格.

### 留白规则
白空是结构的,近白页面底色和宽大的块块块编织完成分离工作;卡片由细毛线而不是粗厚的背景组合,页面呼吸——带间纵向差距较大,卡片内部节奏紧凑.

### 响应式布局

#### 断点
| 名称    | 宽度   | 密钥更改                                                                              |
| ------- | ------- | ---------------------------------------------------------------------------------------- |
| 手机  | ≤ 640px | 单柱堆栈; NAV ~ 菜单触发器; 首屏类型级降级; 丸 CTA 完全宽度 |
| 平板  | 768px   | 2- 上卡网格; 缩合导航                                                           |
| 笔记本  | 1024px  | 3–4- 上网格;全导航列                                                               |
| 桌面 | 1200px+ | 居中( C) max-width 集装箱,全多柱网格                                    |

#### 触控区域
销售胶囊形`{components.button-primary}`)和导航按钮清除 44px WCAG-AAA目标通过线高8驱动高度. Circular 图标按钮(`{components.button-icon-circular}`保持足够的命中区。

#### 窄屏布局调整
导航行在菜单触发器后面崩溃;多列发卡网格重流到单列;代码编辑器和节点图示缩放或滚动而不是不合理缩小;定价级网格堆积垂直.

#### 图片适配
The hero mesh gradient is a CSS/SVG composition that scales fluidly. Feature illustrations (node graphs, code editors) are vector/HTML, ink-on-white, scaling crisply. Customer logos sit in a greyscale strip. No heavy raster photography.


## 层次与深度

| 职等        | 治疗                                                                                  | 使用                                                 |
| ------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| 0 — Flat     | 1px hairline (`{colors.hairline}`), no shadow                                              | Default feature cards, inputs, dividers, the canvas |
| 1 - 低声说话  | 边框+ `0px 1px 1px rgba(0,0,0,0.04)` 微阴影                                       | 轻度卡片                                |
| 2 - 浮动 | 层状软阴影( E)`0px 2px 2px` + `0px 8px 16px -4px` 低α黑色)+ 内置细边线 | 菜单、模式、工具提示                             |

深度是故意最小的,系统更喜欢简洁 1px 细边线加上近白相间的表面阶梯向阴影;当表面浮起时,它使用细层的,非常低的阿尔法阴影堆而不是单重的滴.

### 装饰性深度
The hero **mesh gradient** is the only atmospheric element — a soft multi-stop bloom of the brand accent colors against the white canvas. Feature illustrations (ink node-graphs, code editors) add a sense of product depth without color. No glows, no heavy gradients elsewhere.


## 形状

### 圆角层级

| 调试                     | 数值  | 使用                                             |
| ------------------------- | ------ | ----------------------------------------------- |
| `{rounded.none}`          | 0px    | 满血乐队、分牌                      |
| `{rounded.sm}`            | 6px    | 导航/ 应用程序按钮, 输入                       |
| `{rounded.md}`            | 12px   | 特性卡, 代码块                      |
| `{rounded.lg}`            | 16px   | 定价卡,大面板                    |
| `{rounded.pill-category}` | 64px   | Category-tab 胶囊形(AI Apps / Web Apps)         |
| `{rounded.pill}`          | 100px  | 销售CTA药                             |
| `{rounded.full}`          | 9999px | Circular 图标按钮、 浮雕、 导航幽灵链接 |

半径语言为双模式:紧 6px 用于功能性界面框架的方形、用于营销的全胶囊形和类别标签,以及 12–16px 内容卡在中间。

### 几何
牌是矩形,在 12–16px 半径; 营销按钮和分类标签为全药; 图标按钮和假人为 circular。说明是线性字重的矢量图形,用白纸墨印。


## 组件

> No hover states are documented. Each spec covers Default and (where extracted) pressed/active states. Variants live as separate `components:` entries.

### 导航

**`nav-bar`** ——顶端导航.
- Background `{colors.canvas}`, bottom hairline `{colors.hairline}`, text `{colors.body}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.lg}`. Holds the black wordmark, ghost nav links, and the Sign Up / Log In buttons at right.

**`nav-link`** ——个别导航项目.
- Body-grey text `{colors.body}`, type `{typography.body-md}`, fully rounded hit area `{rounded.full}`, padding `{spacing.xs} {spacing.sm}`. Transparent until interacted.

### 按钮

**`button-primary`** ——黑市胶囊形("开始部署","部署").
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-lg}`, fully rounded `{rounded.pill}` (100px), padding `0px 14px`.

**`button-secondary`** ——白市胶囊形("拿个Demo").
- Background `{colors.canvas-elevated}`, text `{colors.ink}`, type `{typography.button-lg}`, rounded `{rounded.pill}`, padding `0px 14px`. Same pill shape as primary, inverted fill.

**`button-primary-sm`** ——紧凑的黑色导航CTA("签名").
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}`, tight square `{rounded.sm}` (6px), padding `0px 6px`.

**`button-ghost-sm`** ——白色导航/应用按钮("Log In","询问AI").
- Background `{colors.canvas-elevated}`, text `{colors.ink}`, 1px hairline `{colors.hairline}`, type `{typography.button-md}`, rounded `{rounded.sm}`, padding `0px 6px`.

**`button-category-pill`** — the category-tab pill ("AI Apps", "Web Apps", "Ecommerce")
- Background `{colors.canvas-elevated}`, text `{colors.ink}`, type `{typography.button-md}`, rounded `{rounded.pill-category}` (64px), padding `0px 16px`.

**`button-icon-circular`** — circular 图标/旋转木马控件
- Background `{colors.canvas-elevated}`, text `{colors.ink}`, 1px hairline `{colors.hairline}`, type `{typography.body-lg}`, rounded `{rounded.full}`, no padding.

### 输入框与表单

**`text-input`** 默认窗体字段
- Background `{colors.canvas-elevated}`, ink text `{colors.ink}`, 1px hairline `{colors.hairline}`, type `{typography.body-md}`, rounded `{rounded.sm}`, padding `{spacing.xs} {spacing.sm}`.

### 卡片与容器

**`feature-card`** ——平面细边线内容卡.
- Background `{colors.canvas-elevated}`, 1px hairline `{colors.hairline}`, ink text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}`, padding `{spacing.lg}`. The workhorse grid tile, often holding a node-graph or code illustration.

**`feature-card-elevated`** ——升卡变体.
- Same chrome as `feature-card` with the Level-2 floating shadow for menus / featured tiles.

**`pricing-card`** ——定价等级卡.
- Background `{colors.canvas-elevated}`, 1px hairline `{colors.hairline}`, ink text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.lg}`, padding `{spacing.xl}`.

**`code-block`** ——代码/终端表面
- Background `{colors.canvas-elevated}`, ink text `{colors.ink}`, 1px hairline `{colors.hairline}`, monospace `{typography.code}`, rounded `{rounded.md}`, padding `{spacing.md}`. Syntax rendered in the ink-and-accent palette.

### 带

**`logo-strip`** ——客户标志带.
- Background `{colors.canvas}`, mute text `{colors.mute}`, type `{typography.body-md}`, padding `{spacing.xl} {spacing.lg}`. A greyscale row of customer wordmarks.

**`hero-band`** - 完全宽的首屏区
- Background `{colors.canvas}` with the mesh gradient, ink text `{colors.ink}`, display type `{typography.display-xl}`, padding `{spacing.section} {spacing.lg}`.

**`cta-band`** ——页尾呼叫对战频段("开始部署").
- Background `{colors.canvas}`, ink text `{colors.ink}`, display type `{typography.display-xl}`, padding `{spacing.4xl} {spacing.lg}`, with a `{components.button-primary}` pill.

### Footer

**`footer`** ——站点页脚
- Background `{colors.canvas}`, top hairline `{colors.hairline}`, body-grey text `{colors.body}`, type `{typography.body-md}`, padding `{spacing.3xl} {spacing.lg}`. Multi-column link groups under the wordmark.


## 设计建议与禁忌

### 建议做法
- 保持页面底色近白( Name`{colors.canvas}`并让近黑墨水(`{colors.ink}`) 带有标题,CTA,和边框——系统是黑白二重奏.
- 首屏网格梯度和小插图强调色的封装颜色; 保留 `{colors.link}` 链接和焦点。
- Use the two button shapes by context: black pill (`{components.button-primary}`) for marketing CTAs, 6px square (`{components.button-primary-sm}`) for nav/app.
- 使用一个定义牌和输入 1px 细边线( 4)`{colors.hairline}`)在任何阴影之前——平面是默认值.
- 设置标题 Geist 桑斯语Name 600 带有紧紧负跟踪; 带有大写标签的段落 Geist Mono 眉毛( 双眉)`{typography.mono-eyebrow}`).
- 故意踩踏灰色文本梯度 : `{colors.ink}` → `{colors.body}` → `{colors.mute}` → `{colors.faint}`.

### 应避免的做法
- Don't fill large surfaces with the accent colors — violet/cyan/pink/blue live in the gradient and illustrations, not as chrome.
- Don't mix the button shapes within one context — marketing CTAs stay pills, app/nav controls stay 6px squares.
- Don't pile on shadows — depth is a 1px hairline plus, at most, a finely-layered low-alpha shadow stack.
- Don't set body copy in pure black (`#000000`) — the brand's ink is #171717 and body steps to `{colors.body}`.
- Don't add a second decorative system — the mesh gradient is the only flourish; everything else is ink on white.
- Don't loosen the display tracking — large Geist headings carry tight negative letter-spacing by design.

## 设计词元原值

分析 Vercel设计语言—— Geist 系统,一种尖锐的黑色近白开发者平台美学,其中单一的墨水调带每个标题,CTA,和边框,页面允许自己的唯一颜色是多站的网状梯度(cyan / blue / violet / magenta / 琥珀),仅限于首屏. Geist 珊丝驱动的紧跟显示类型, Geist Mono 标注技术眉毛, 和丸形黑色按钮标记营销 CTAs 的同时 6px 方形按钮处理应用和导航界面框架.

```yaml
---
version: alpha
name: Vercel Analysis
description: An analysis of Vercel's design language — the Geist system, a stark black-on-near-white developer-platform aesthetic where a single ink tone carries every heading, CTA, and border, and the only color the page allows itself is a multi-stop mesh gradient (cyan / blue / violet / magenta / amber) confined to the hero. Geist Sans drives tightly-tracked display type, Geist Mono labels the technical eyebrows, and pill-shaped black buttons mark the marketing CTAs while 6px square buttons handle app and nav chrome.

colors:
  primary: "#171717"
  on-primary: "#ffffff"
  ink: "#171717"
  body: "#4d4d4d"
  mute: "#8f8f8f"
  faint: "#a1a1a1"
  hairline: "#ebebeb"
  hairline-soft: "#f2f2f2"
  canvas: "#fafafa"
  canvas-elevated: "#ffffff"
  link: "#0070f3"
  link-deep: "#0761d1"
  link-soft: "#d3e5ff"
  error: "#ee0000"
  error-deep: "#c50000"
  warning: "#f5a623"
  warning-soft: "#ffefcf"
  warning-deep: "#ab570a"
  violet: "#7928ca"
  violet-soft: "#d8ccf1"
  cyan: "#50e3c2"
  cyan-soft: "#aaffec"
  pink: "#ff0080"
  magenta: "#eb367f"
  gradient-develop-start: "#007cf0"
  gradient-develop-end: "#00dfd8"
  gradient-preview-start: "#7928ca"
  gradient-preview-end: "#ff0080"
  gradient-ship-start: "#ff4d4d"
  gradient-ship-end: "#f9cb28"

typography:
  display-xl:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 48px
    fontWeight: 600
    lineHeight: 48px
    letterSpacing: -2.4px
  heading-lg:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -1.28px
  heading-md:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.4px
  label-sm:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -0.28px
  mono-eyebrow:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0
  body-lg:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0
  body-md:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0
  body-sm:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0
  button-lg:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0
  button-md:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0
  code:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0

rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 16px
  pill-category: 64px
  pill: 100px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 64px
  4xl: 96px
  section: 128px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "0px 14px"
  button-secondary:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "0px 14px"
  button-primary-sm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "0px 6px"
  button-ghost-sm:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "0px 6px"
  button-category-pill:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill-category}"
    padding: "0px 16px"
  button-icon-circular:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "0px"
  text-input:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  feature-card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  feature-card-elevated:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  pricing-card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  code-block:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-md}"
    padding: "{spacing.xl} {spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section} {spacing.lg}"
  cta-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.3xl} {spacing.lg}"

---
```
