# SAP · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。

## 概览

SAP's web surface is built like an application frame rather than a marketing site. A 60px bar in `{colors.chrome}` sits across the top, and on any product or services page a second rail drops beneath it carrying a breadcrumb and a row of tabs. That two-storey chrome is the first thing the design commits to: before a visitor reads a headline they have been told where they are in a very large catalogue, and the page below behaves like the content pane of that catalogue.

What fills the pane is mostly `{colors.canvas}`. White covers between 57 and 69 percent of every page, and the design separates content by dropping in **broad flat bands** rather than by bordering or elevating anything. There are four of them and each does a different job: `{colors.chrome}` for a neutral section, `{colors.band}` for the footer, `{colors.band-blue}` for a highlighted strip, and `{colors.band-lavender}` for a softer one. They run edge to edge with square corners, so the page reads as a stack of full-width horizontal zones.

Blue is the only colour that acts. `{colors.primary}` fills every button and every inline link; `{colors.primary-deep}` fills the solid hero band on interior pages and is also the label colour inside an outline button. The home page hero departs from both, running a deep navy gradient anchored on `{colors.navy}` behind a product lockup, which makes it the one surface on the site that is atmospheric rather than flat. Corners stay tight throughout: `{rounded.md}` on every control, `{rounded.lg}` on media, and nothing rounder anywhere.

**关键特征 :**
- 一层两层界面框架-a `{colors.chrome}` 产品标签栏上方的全局栏杆——该栏杆将页面设定为应用程序。
- 白色页面底色被四个全宽的平面带断开(`{colors.chrome}`, `{colors.band}`, `{colors.band-blue}`, `{colors.band-lavender}`),带有方边.
- 一种演绎颜色 : `{colors.primary}` 用于控制和链接, `{colors.primary-deep}` 给内部首屏乐队。
- A five-tier text ladder (`{colors.ink}` → `{colors.ink-lead}` → `{colors.ink-body}` → `{colors.ink-list}` → `{colors.ink-meta}`) that shifts hue as it descends, from pure black through warm grey into slate.
- 品牌自己的变形面 横跨一个 350- 给...700 字重范围,所以 15px 清单项目和a 15px 导航链接读作大小相同的不同类.
- 深度由波段和梯度而不是阴影所携带;控制器平坐在他们的地上.
- 角落盖住 `{rounded.md}` 控制设备 `{rounded.lg}` 媒体认为,


## 配色

### 品牌色与强调色
- **SAP Blue** (`{colors.primary}` — #0057d2): the acting colour. Every filled button, every inline text link, and the active product tab.
- **深蓝** (`{colors.primary-deep}` — #0040b0:内页上坚固的首屏乐队,以及贴在白色上的大纲按钮内标签颜色.
- **小学** (`{colors.on-primary}` — #ffffff:每个蓝色填充物的标签以及首屏乐队内部的所有类型.
- **海军** (`{colors.navy}` — #022879:主页首屏梯度的锚,系统中的大气表面之一.
- **天空( S)** (`{colors.sky}` — #6bc0ff:服务布局内部使用的浅蓝色面板.

### 界面表面
- **页面底色** (`{colors.canvas}` — #ffffff:工作场地。内容窗格、卡片和大部分部分坐落在该平台上。
- **颜色** (`{colors.chrome}` — #f5f6f7:环球导航栏,中性带曾将一段分开.
- **带** (`{colors.band}` — #eaecee:脚踏实地,也是主页上最大的单非白色表面.
- **蓝色乐队** (`{colors.band-blue}` — #ebf8ff: 一条苍白的蓝色条纹,用来将一段从白色跑道上抬出来.
- **带状薰衣草** (`{colors.band-lavender}` — #f7f4ff: 一种在产品页上服务同样角色的软洗,上缘为弯曲而不是平面.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — #000000: 标题为各级。 SAP 把它的头条头条写成真正的黑色,而不是软化的近黑色。
- **墨铅** (`{colors.ink-lead}` — #3c3c3c: 计数器 28px 标题下显示标题。
- **墨水体** (`{colors.ink-body}` — #223548: 体型复制。 片段而不是灰色, 也就是段落层次与铅层次之间的区别。
- **墨水列表** (`{colors.ink-list}` — #354a5f:列表项目,设置比体更轻的一步.
- **墨水( 墨水 ) Meta** (`{colors.ink-meta}` — #475e75:标题和脚注,最安静的可辨读的层次.
- **墨水导航** (`{colors.ink-nav}` — #545454:导航链接,面包屑和标签。唯一一种文本颜色是中性灰色而不是板块,这就是界面框架如何与内容保持视觉分离。

### 语义色
- **细边线** (`{colors.hairline}` — #475e75: 大纲按钮上的规则。与 `{colors.ink-meta}`,用作边框而不是类型。


## 字体排版

### 字体族
The whole system is set in SAP's own variable typeface, 72 Brand Variable. There is no second family and no monospace. What the variable axis buys is a weight range wider than most corporate systems use — 350, 400, 500 and 700 all appear — and the design leans on it hardest at the small end, where three roles share the 14–16px range and are separated by weight alone.

The clearest example is at 15px. `{typography.nav-link}` is 400 in `{colors.ink-nav}` grey; `{typography.list-item}` is 350 in `{colors.ink-list}` slate. Same size, same family, and yet a reader parses one as chrome and the other as content. A system without a sub-400 weight could not make that distinction without changing size or colour.

线身高度按角色清净划分,标题大致排列为 1.1 — `{typography.display}` 运行 57px 打开 62.7px, `{typography.section-title}` 32px 打开 35.2px ——身体角色开放给: 1.5,与 `{typography.body-lg}` 时 间 20px 打开 30px. `{typography.button}` 设置为固态 16px 打开 17.6px,这就是让我们 44px 按钮在不垂直漂移的情况下按住其标签。

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display}` | 57px | 700 | 62.7px | 0 | Home page display headline |
| `{typography.hero-title}` | 36px | 500 | 39.6px | 0 | 内务页面首屏标题 |
| `{typography.section-title}` | 32px | 500 | 35.2px | 0 | 节标题 |
| `{typography.lead}` | 28px | 400 | 30.8px | 0 | 引段 |
| `{typography.subhead}` | 20px | 500 | 22px | 0 | 特性标题, 活动标签 |
| `{typography.body-lg}` | 20px | 400 | 30px | 0 | 复制大件文件 |
| `{typography.body}` | 18px | 400 | 27px | 0 | 副本 |
| `{typography.button}` | 16px | 500 | 17.6px | 0 | 按钮标签 |
| `{typography.link}` | 16px | 400 | 24px | 0 | 内嵌文本链接 |
| `{typography.nav-link}` | 15px | 400 | 21px | 0 | 面包屑导航 |
| `{typography.list-item}` | 15px | 350 | 21px | 0 | 清单项目 |
| `{typography.caption}` | 14px | 400 | 21px | 0 | 说明、标签标签、脚注 |

### 原则
标题是黑色的和紧凑的;下面的一切都是板块和开的。这个单一的对比对大多数的等级工作都起作用,这就是为什么系统需要如此少的尺寸——十二个角色覆盖三个页面模板。

Tracking is left at zero everywhere. For a typeface designed in-house that is a statement of confidence: the metrics are already tuned for the sizes the system uses, so nothing needs correcting.

### 替代字体
72 Brand Variable is proprietary. A substitute needs a genuine variable weight axis reaching below 400, because the 350 list-item weight is load-bearing — collapsing it to 400 erases the distinction between a list item and a nav link at 15px. Among open faces, Inter Variable or Source Sans 3 Variable come closest in width and x-height; whichever is used, carry the line heights in the table across verbatim rather than accepting the substitute's defaults, since the tight heading leading is what keeps the display sizes from feeling loose.


## 布局

### 间距系统
- **基地单位**: 8px,在小端有一个精细的子步骤用于控制垫。
- **脚本**: `{spacing.xxs}` 2px · `{spacing.xs}` 3px · `{spacing.sm}` 8px · `{spacing.md}` 9px · `{spacing.lg}` 10px · `{spacing.xl}` 12px · `{spacing.xxl}` 15px · `{spacing.wide}` 16px · `{spacing.section}` 20px · `{spacing.giant}` 24px · `{spacing.max}` 32px · `{spacing.huge}` 40px · `{spacing.hero}` 48px · `{spacing.band}` 56px · `{spacing.page}` 72px
- 控制器位于紧端: `{component.button-primary}` 垫子 `12px 14px` 和 `{component.button-outline}` `8px 9px`。从 `{spacing.max}` 向上保留用于波段之间的垂直节奏.

### 网格与容器
The content column is centred and capped, with the chrome running full-bleed above it. Product pages centre their hero — headline, subcopy and a single button stacked on the axis — while the services hero splits left-text against a right-hand image. Feature content resolves into two columns; the services page runs a 2×2 grid separated by hairlines rather than by card edges. The footer divides into link columns above a legal strip.

首屏治疗是每季最明显的区别。主页运行的是全血海军梯度,服务页运行平面 `{colors.primary-deep}` 带位于 450px,而产品页面则完全没有带子——只是以下列类型为中心: `{colors.canvas}` 三个模板,三个首屏策略,一个界面框架。

### 留白规则
Because nothing is bordered and nothing is elevated, the gap between blocks is what groups them. Sections are separated by large vertical intervals and, where a stronger break is needed, by switching the band colour. The bands are the punctuation of the page: a run of white, a grey interval, more white, a pale blue strip. Within a band the spacing tightens considerably, which is what keeps a dense feature grid readable directly beneath an open hero.

### 响应式布局

#### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 小型移动 | < 480px | 单列; 标签轨轴横向滚动; 首屏类型降为 36px 等级 |
| Mobile | 480–767px | Single column; nav collapses to a menu; two-column features stack |
| Tablet | 768–1023px | Two-column features hold; breadcrumb truncates; hero image moves below its text |
| 笔记本 | 1024–1279px | 完整网格; 标签栏显示所有标签; 首屏返回侧面 |
| 桌面 | 1280–1439px | 以全宽居中的内容列 |
| 宽 | ≥ 1440px | 宽度加宽; 带保持全血 |

该系统宣布一套异常密集的媒体查询——三个模板的查询量远远超过30个——这是这样一个庞大的目录,当同一个染色体必须托管非常不同的页面机构时,它需要这个目录。

#### 触控区域
`{component.button-floating}` 清除 44×44 安全地在WCAG -AAA 上 58px,以及 `{component.button-primary}` 碰见它时 44px. `{component.product-tab-active}` 达到 44px 时,不活动者 `{component.product-tab}` 坐在这 32px,以及 `{component.breadcrumb}` 时 间 17px 是一个查找标签而不是一个主要目标。在触摸宽度时,不活动标签是首先应该生长的标签。

#### 窄屏布局调整
The global bar collapses its links behind a menu but keeps the logo, search and account affordances at every width. The product tab rail becomes a horizontal scroller rather than wrapping, so the active tab stays anchored. Two-column feature blocks stack, the 2×2 grid becomes a single column with its hairlines retained, and the hero image moves below its text rather than shrinking beside it. Bands keep their full-bleed width at every size; only their inner padding compresses.

#### 图片适配
产品图像是复合的,而不是仅以照片为主:照片位于一个 `{rounded.lg}` 框架用浮动的UI卡和点状连接线排列在它周围,因此插图解释一个工作流程而不是装饰这个部分. 视频缩略图带有一个中心圆形的播放负担. 合伙人和顾客的标志在图像本身内以小的单色锁出现. 任何事物都没有被裁剪成一个统一的比例;每个框架大小与其组成成份相同。


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 | Canvas, no border | Content panes, most sections |
| 1 | 平板乐队 - `{colors.chrome}`, `{colors.band}`, `{colors.band-blue}` 或 `{colors.band-lavender}` | 区段分离,页脚 |
| 2 | 固体彩色带—— `{colors.primary-deep}` | 内地页面首屏 |
| 3 | 逐步发展——海军 `{colors.navy}`,或紫色至蓝色的促销条 | 首屏, 活动条 |
| 4 | 软投影 | 产品插图内浮动的 UI 卡 |

系统默认为平型. 按钮没有高架,卡片没有边框,各节没有规则. 设计中唯一真正的影子生活在产品插图中,小白卡浮在照片上方——这正是重点:阴影是用来描绘一个界面的,而不是用来建造一个界面的.

### 装饰性深度
大气工作有两个梯度,主首屏在海上 拥有一个深水的海军基地 `{colors.navy}`左边暗黑,在产品锁后打开蓝色。 `{colors.band-lavender}` 产品页上的部分带有一个曲线的上缘而不是直缘,即系统原本是方形带几何软化的单一位置。


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 每一个乐队, 界面框架, 塔布导航条, 脚步 |
| `{rounded.sm}` | 4px | 内置锚表面 |
| `{rounded.md}` | 8px | 每一个按钮和控件 |
| `{rounded.lg}` | 12px | 媒体框架和插图表面 |

The scale is short and it stops early. Nothing on this site is a pill, and nothing is a circle except the play affordance on a video thumbnail. Controls get 8px, media gets 12px, and full-width regions get nothing at all — which is the rule that gives the page its horizontal, banded character. A rounded band would read as a card; a square one reads as a zone, and zones are what this layout is made of.

### 图片形状
照片出现在里面 `{rounded.lg}` 框,从不全血,从不裁剪到一个 fixed 比例。签名处理将一个带有小白色UI卡的照片围在点状连接线上,因此图像和界面元素一起描述一个任务。Logos是放置在框架内部而不是单独的条形框中的小单色锁。


## 组件

> **No hover states documented.** Every component below documents its default state only. Variants live as separate entries in the `components:` front matter and are described in their own sub-blocks.

### 颜色

**`nav-bar`** -全球酒吧
- Background `{colors.chrome}`, text `{colors.ink-nav}`, type `{typography.nav-link}`, rounded `{rounded.none}`, height 60. Full-bleed, square, and the same on every template.

**`nav-link`** - 里面有东西
- Background `{colors.chrome}`, text `{colors.ink-nav}`, type `{typography.nav-link}`, rounded `{rounded.none}`.

**`breadcrumb`** ——产品标签栏杆上方的痕迹.
- Background `{colors.canvas}`, text `{colors.ink-nav}`, type `{typography.nav-link}`, rounded `{rounded.none}`, height 17.

**`product-tab`** ——产品栏杆不活跃的标签.
- Background `{colors.canvas}`, text `{colors.ink-nav}`, type `{typography.caption}`, rounded `{rounded.none}`, height 32.

**`product-tab-active`** ——选中的标签 。
- Background `{colors.canvas}`, text `{colors.primary}`, type `{typography.subhead}`, rounded `{rounded.none}`, height 44. Marked by a blue underline and a step up in both size and weight, which is why it reads as selected without any fill.

### Heroes

**`hero-band`** - 扎实的内部首屏。
- Background `{colors.primary-deep}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.none}`, height 450. Full-bleed and square.

**`hero-title`** - 头条
- Background `{colors.primary-deep}`, text `{colors.on-primary}`, type `{typography.hero-title}`, rounded `{rounded.none}`, height 40.

**`hero-display`** ——主页头条,设定在白色而不是在乐队中.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.display}`, rounded `{rounded.none}`, height 188. The largest type in the system and the only role at weight 700.

**`navy-hero`** ——主页首屏场.
- Background `{colors.navy}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.none}`. A gradient anchored on navy rather than a flat fill, carrying a product lockup on its right.

### 按钮

**`button-primary`** - 标准填充动作。
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`, padding `12px 14px`, height 44.

**`button-outline`** 安静的搭档,在首屏的扣子旁边
- Background `{colors.canvas}`, text `{colors.primary-deep}`, type `{typography.button}`, rounded `{rounded.md}`, padding `8px 9px`. Bounded by a `{colors.hairline}` rule; the label is the deeper blue rather than the standard one.

**`button-floating`** 持续接触的承受力被固定在右下方。
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.caption}`, rounded `{rounded.md}`, padding `16px 20px`, height 58. The tallest control in the system and the only one that follows the page.

### 内容

**`section-heading`** - 一节标题。
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.section-title}`, rounded `{rounded.none}`, height 35.

**`lead-paragraph`** ——显示标题后的段落.
- Background `{colors.canvas}`, text `{colors.ink-lead}`, type `{typography.lead}`, rounded `{rounded.none}`. Set at 28px in the one grey that appears nowhere else.

**`body-copy`** ——标准传言.
- Background `{colors.canvas}`, text `{colors.ink-body}`, type `{typography.body}`, rounded `{rounded.none}`.

**`feature-title`** ——特征块内的方向.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.subhead}`, rounded `{rounded.none}`, height 22.

**`list-item`** 链接列表中的条目。
- Background `{colors.canvas}`, text `{colors.ink-list}`, type `{typography.list-item}`, rounded `{rounded.none}`, height 38. Weight 350, the lightest setting in the system.

**`meta-note`** 说明和脚注。
- Background `{colors.canvas}`, text `{colors.ink-meta}`, type `{typography.caption}`, rounded `{rounded.none}`.

**`text-link`** ——内线链接.
- Background `{colors.canvas}`, text `{colors.primary}`, type `{typography.link}`, rounded `{rounded.none}`. Usually trailed by a chevron.

**`inline-anchor`** ——运行内容内置小锚面.
- Background `{colors.canvas}`, text `{colors.primary}`, type `{typography.caption}`, rounded `{rounded.sm}`. The only place the 4px corner is used.

**`media-frame`** 照片或插图周围的容器。
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.lg}`.

### 带

**`band-neutral`** - 一块放在界面框架灰上的
- Background `{colors.chrome}`, text `{colors.ink-body}`, type `{typography.body}`, rounded `{rounded.none}`.

**`band-blue`** ——苍蓝变种.
- Background `{colors.band-blue}`, text `{colors.ink-body}`, type `{typography.body}`, rounded `{rounded.none}`.

**`band-lavender`** ——最软的变体,用于产品页.
- Background `{colors.band-lavender}`, text `{colors.ink-body}`, type `{typography.body}`, rounded `{rounded.none}`. The one band whose upper edge curves.

**`sky-panel`** ——服务布局内设浅蓝色面板.
- Background `{colors.sky}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`.

**`footer`** ——链接栏和法定条.
- Background `{colors.band}`, text `{colors.ink-nav}`, type `{typography.nav-link}`, rounded `{rounded.none}`. The largest single non-white surface on the home page.

### 组合示例

> Kit-mirror demonstration surfaces. These are not brand-native components — they are the ten SaaS UI patterns downstream consumers re-skin, stamped here with this brand's own primitives so every example surface resolves against the documented spec rather than a template default.

**`ex-pricing-tier`** 页面底色地面的一层卡片 `{colors.hairline}` 规则, `{rounded.md}` 转角和 `{spacing.giant}` 内地.

**`ex-pricing-tier-featured`** ——升格的极性浮出水面. `{colors.ink}` 配合 `{colors.on-primary}` 文本中选择的文本。

**`ex-product-selector`** ——包含的即兴卡,因为品牌销售的是企业软件而不是可配置商品. `{rounded.md}` 时 间 `{spacing.giant}`.

**`ex-cart-drawer`** - 订阅摘要 `{colors.hairline}` 规则在行项之间,与服务页面的细边线分隔功能网格相呼应.

**`ex-app-shell-row`** - 侧边边导航列 `{rounded.md}`,以 `{colors.primary}` ——活性产品标签使用的同样蓝色.

**`ex-data-table-cell`** - 配有界面框架的表 `{typography.subhead}` 头部过 `{typography.caption}` 单元格和 `{colors.hairline}` 列规则, 添加 `{spacing.xl} {spacing.wide}`.

**`ex-auth-form-card`** - 一张在页面底色地面上的签到卡,在 `{rounded.md}` 配合 `{spacing.giant}` 室内房间。

**`ex-modal-card`** - 模式表面,在 `{rounded.lg}`媒体的角落,与 `{spacing.max}` 内地.

**`ex-empty-state-card`** - 空状态框架, 位于 `{rounded.lg}` 配合 `{spacing.huge}` 房间。

**`ex-toast`** - 敬酒,请 `{rounded.md}` 添加 `{spacing.xl} {spacing.wide}`,接近主按钮本身的比例。


## 设计建议与禁忌

### 建议做法
- 保留 `{colors.primary}` 用于操作的东西——按钮、内置链接、活动标签,并让其他所有东西保持中立。
- 带宽的带宽与边框或阴影的带宽不同,带宽就是这种布局的圆点.
- 运行每个乐队方。 `{rounded.none}` 完全宽度就是将一个区域读作一个区域。
- 使用字重轴在小尺寸. `{typography.list-item}` 时 间 350 和 `{typography.nav-link}` 时 间 400 有意的大小是一样的。
- 设置正中标题 `{colors.ink}` 黑色和步进身体复制到 `{colors.ink-body}` 血脉变化会带去等级
- 保持界面框架英寸 `{colors.ink-nav}` 灰色所以导航与内容文本保持视觉区别 。
- 控制顶端 `{rounded.md}` 媒体与媒体 `{rounded.lg}`.
- Let the product illustrations carry the shadows. Floating UI cards inside an image are depicting an interface, not decorating a section.

### 应避免的做法
- Don't elevate a button or a card. Depth in this system is band and gradient, not shadow.
- Don't round a full-width region. It becomes a card and the banded rhythm collapses.
- Don't introduce a second accent hue. `{colors.sky}` and `{colors.navy}` are scoped to specific surfaces and are not general-purpose.
- Don't set body copy in `{colors.ink-nav}`. That grey belongs to the chrome; content uses the slate tiers.
- Don't flatten the weight range to 400 and 700. Losing 350 and 500 collapses three distinct roles in the 14–16px band.
- Don't add letter-spacing. The typeface is metrically tuned for these sizes and needs no correction.
- Don't crop the product illustrations to a uniform ratio. Each composition is sized to what it explains.
- Don't let a hero band and a content band sit adjacent without a white interval. The rhythm depends on white returning between coloured zones.

## 设计词元原值

分析 SAP设计语言——一种几乎将一切都用在白色上,并将其结构花在两个灰色和一个蓝色上的企业系统. 界面框架是故意的安静的,a 60px 光灰色条在产品标签栏杆上,所以该页读作应用框而不是营销表面。深度来自宽平的带而不是阴影,角留在原处。 8px 控制和控制 12px 媒体上,品牌本身的可变型号 带有一个 350- 给...700 重范围,允许 15px 清单项目和a 15px 导航链接读作大小相同的不同文本类别.

```yaml
---
version: alpha
name: SAP Analysis
description: An analysis of SAP's design language — an enterprise system that keeps almost everything on white and spends its structure on two greys and one blue. The chrome is deliberately quiet, a 60px light-grey bar over a product tab rail, so the page reads as an application frame rather than a marketing surface. Depth comes from broad flat bands rather than shadow, corners stay at 8px on controls and 12px on media, and the brand's own variable typeface carries a 350-to-700 weight range that lets a 15px list item and a 15px nav link read as different classes of text at the same size.

colors:
  primary: "#0057d2"
  primary-deep: "#0040b0"
  on-primary: "#ffffff"
  navy: "#022879"
  sky: "#6bc0ff"
  canvas: "#ffffff"
  chrome: "#f5f6f7"
  band: "#eaecee"
  band-blue: "#ebf8ff"
  band-lavender: "#f7f4ff"
  ink: "#000000"
  ink-lead: "#3c3c3c"
  ink-body: "#223548"
  ink-list: "#354a5f"
  ink-meta: "#475e75"
  ink-nav: "#545454"
  hairline: "#475e75"

typography:
  display:
    fontFamily: 72 Brand Variable
    fontSize: 57px
    fontWeight: 700
    lineHeight: 62.7px
    letterSpacing: 0
  hero-title:
    fontFamily: 72 Brand Variable
    fontSize: 36px
    fontWeight: 500
    lineHeight: 39.6px
    letterSpacing: 0
  section-title:
    fontFamily: 72 Brand Variable
    fontSize: 32px
    fontWeight: 500
    lineHeight: 35.2px
    letterSpacing: 0
  lead:
    fontFamily: 72 Brand Variable
    fontSize: 28px
    fontWeight: 400
    lineHeight: 30.8px
    letterSpacing: 0
  subhead:
    fontFamily: 72 Brand Variable
    fontSize: 20px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: 0
  body-lg:
    fontFamily: 72 Brand Variable
    fontSize: 20px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: 0
  body:
    fontFamily: 72 Brand Variable
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
    letterSpacing: 0
  button:
    fontFamily: 72 Brand Variable
    fontSize: 16px
    fontWeight: 500
    lineHeight: 17.6px
    letterSpacing: 0
  link:
    fontFamily: 72 Brand Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0
  nav-link:
    fontFamily: 72 Brand Variable
    fontSize: 15px
    fontWeight: 400
    lineHeight: 21px
    letterSpacing: 0
  list-item:
    fontFamily: 72 Brand Variable
    fontSize: 15px
    fontWeight: 350
    lineHeight: 21px
    letterSpacing: 0
  caption:
    fontFamily: 72 Brand Variable
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px

spacing:
  xxs: 2px
  xs: 3px
  sm: 8px
  md: 9px
  lg: 10px
  xl: 12px
  xxl: 15px
  wide: 16px
  section: 20px
  giant: 24px
  max: 32px
  huge: 40px
  hero: 48px
  band: 56px
  page: 72px

components:
  nav-bar:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.ink-nav}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    height: 60

  nav-link:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.ink-nav}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"

  product-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-nav}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    height: 32

  product-tab-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.subhead}"
    rounded: "{rounded.none}"
    height: 44

  breadcrumb:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-nav}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    height: 17

  hero-band:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    height: 450

  hero-title:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.hero-title}"
    rounded: "{rounded.none}"
    height: 40

  hero-display:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    height: 188

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 14px
    height: 44

  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 9px

  button-floating:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 16px 20px
    height: 58

  section-heading:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.section-title}"
    rounded: "{rounded.none}"
    height: 35

  lead-paragraph:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-lead}"
    typography: "{typography.lead}"
    rounded: "{rounded.none}"

  body-copy:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  feature-title:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.subhead}"
    rounded: "{rounded.none}"
    height: 22

  list-item:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-list}"
    typography: "{typography.list-item}"
    rounded: "{rounded.none}"
    height: 38

  meta-note:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-meta}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"

  text-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.link}"
    rounded: "{rounded.none}"

  media-frame:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"

  inline-anchor:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"

  band-neutral:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.ink-body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  band-blue:
    backgroundColor: "{colors.band-blue}"
    textColor: "{colors.ink-body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  band-lavender:
    backgroundColor: "{colors.band-lavender}"
    textColor: "{colors.ink-body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  footer:
    backgroundColor: "{colors.band}"
    textColor: "{colors.ink-nav}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"

  sky-panel:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  navy-hero:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  # ─── Examples (illustrative) ───
  ex-pricing-tier:
    description: "Tier card on the canvas ground with a hairline rule and an 8px corner."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.giant}"
  ex-pricing-tier-featured:
    description: "Promoted tier, polarity-flipped onto the ink fill."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.giant}"
  ex-product-selector:
    description: "What's-included summary card, since the brand sells enterprise software rather than configurable goods."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.giant}"
  ex-cart-drawer:
    description: "Subscription summary with hairline-ruled line items, echoing the services feature grid."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.giant}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row; the active state is marked by the same blue the active product tab uses."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl} {spacing.wide}"
  ex-data-table-cell:
    description: "Table chrome with subhead headers over caption cells and hairline row rules."
    headerBackground: "{colors.canvas}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.xl} {spacing.wide}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in card on the canvas ground with the brand's control chrome inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.giant}"
  ex-modal-card:
    description: "Modal dialog surface at the media frame's 12px corner."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.max}"
  ex-empty-state-card:
    description: "Empty-state frame on the canvas ground."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.huge}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast surface close to the primary button's own proportions."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl} {spacing.wide}"
    typography: "{typography.body}"

---
```
