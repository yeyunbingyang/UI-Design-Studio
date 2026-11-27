# Runway · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Runway 将它的营销网站视为一个馆藏空间——比典型的AI工具网站更接近电影节的节目指南。摄影设定温度:电影、大气静物(黄昏时分的森林,一个在Indigo夜空下的孤独人物) `{colors.scrim}`,而文档的其余部分则会掉入纯度 `{colors.canvas}` 色彩故事是克制到紧缩的地步——纸白上的黑色墨水,五层灰色从标题到分词的每一个细微处都带有,以及一个单层蓝色(`{colors.slate-soft}` / `{colors.slate}`),在极少数情况下保留给次要文本.

Typography does almost all of the heavy lifting. A single proprietary sans, `abcNormal`, carries every level from 11px micro-caps to 48px editorial display, with negative letter-spacing on every heading (`-0.9px` to `-1.2px`) tightening the headline silhouette into something that reads as deliberate and quiet rather than punchy. There is no decorative ornament, no card glow, no gradient buttons — every primary action is a black solid pill (`{colors.primary}` background, `{colors.on-primary}` text, `{rounded.full}` corners), reused with absolute consistency across hero CTAs, pricing subscriptions, and form submissions.

排版学科为社论:细边线分流者(.`{colors.hairline}`),大写眉毛(`{typography.eyebrow}`),以及一个 8-px 间隔网格, 将大小解析 64–96px 部分通过紧凑的节奏循环——深色摄影首屏——白读乐队——页面底色上的研究网格——全宽摄影插曲——深CTA条线——黑脚步——让黑墨水和黑白摄影完成其他网站委托给彩色的戏剧性工作.

**关键特征 :**
- Cinematic dark photographic heroes (`{colors.scrim}` over editorial stills) bookending crisp `{colors.canvas}` reading bands
- 单一专有桑( 3, 4, 5, 5, 5, 5, 6)`abcNormal`)覆盖每个打印角色,对显示大小进行严密的负跟踪
- Black-only primary action language: every CTA is `{button-primary}` (`{colors.primary}` pill with `{rounded.full}` corners and 14px/600 button text)
- 5级中性梯级( 3)`{colors.ink}` → `{colors.graphite}` → `{colors.slate}` → `{colors.stone}` → `{colors.hairline}`) 携带整个UI,没有强调色颜色
- 5- 柱式定价网格,其中显示的等级由 `{colors.hairline}` 填入而非颜色边框
- 细边线分割符和大写 `{typography.eyebrow}` 锁店给营销部门一个编辑,展览目录
- 摄影被视为内容,而不是装饰——满血、电影和陶瓷,而不是生动的


## 配色

### 品牌色与强调色
- **Black** (`{colors.primary}`): The single brand action colour. Every primary CTA, every pricing-tier subscription button, every form submit pill resolves to this exact black. Used as the footer canvas as well, which extends the brand voice through the bottom of every page.
- **Paper White** (`{colors.on-primary}`): Type colour on `{colors.primary}` surfaces; canvas of every reading section.

### 界面表面
- **页面底色** (`{colors.canvas}`:主阅读页背景.
- **圆筒暖** (`{colors.canvas-warm}`:近不可接受的脱白,用于在纯白之上抬起工作室-页的砖块半圆,而不失去纸的感觉.
- **地表特征** (`{colors.hairline}`: 特色定价等级("Pro")后面的填充,以及某些桌式的横幅后面的填充——选用它近乎零饱和,所以读作一个直线步骤而不是填充.
- **柔软的细边线** (`{colors.hairline-soft}`): 1- 定价网格和表格分隔器中的像素列分隔器。
- **凉爽的表面** (`{colors.surface-cool}`: 资产油漆前, 媒体缩略图和图像加载框架的默认占位符填充 。
- **闪光** (`{colors.scrim}`: 电影首屏摄影所铺设的大气暗层;行为为全血影像模块的"舞台"色彩.
- **Footer** (`{colors.footer}`): Near-pure black footer canvas, one notch warmer than `{colors.primary}` so it sits visually distinct when the two stack.

### 文字颜色
- **Ink** (`{colors.ink}`): Primary heading and body text on `{colors.canvas}`; closest the system gets to absolute black for type.
- **墨水软** (`{colors.ink-soft}`: 导航链接,次要标题,体格强调——比墨水软一击.
- **Graphite** (`{colors.graphite}`): Standard body copy across marketing sections, balancing readability with calm.
- **标 题** (`{colors.slate}`) / **软板** (`{colors.slate-soft}`:系统唯一的有色中性——为三级元数据保留的微蓝灰色, footer-section 黑底上的标题,还有小盖子标签
- **Mute** (`{colors.mute}`): Lighter neutral for inline disabled or fine-print copy.
- **石头** (`{colors.stone}`:脚眉盖和田占位符.
- **Ash** (`{colors.ash}`): The lightest readable neutral — captions on tiles, pricing fine-print.

### 语义色
The system does not introduce signal colours (red, green, yellow). Validation states in forms rely on borders and copy rather than colour shifts. Where the contact form indicates a required field, the only visual cue is an asterisk in `{colors.ink}` paired with helper text in `{colors.graphite}`.


## 字体排版

### 字体族
The entire system runs on a single proprietary sans, **abcNormal**, with `abcNormal Fallback` declared as the substitute. It is a humanist neo-grotesque in the lineage of ABC Diatype — uniform stroke contrast, flat terminals, slightly compressed counters, and a confident lowercase that suits Runway's all-lowercase wordmark. The face is used at every level; there is no second display font, no monospace, no italic specimen across marketing pages.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display}` | 48px | 400 | 1.0 | -1.2px | 页面级编辑显示 (").Runway 定价,"寻找联系?". |
| `{typography.display-sm}` | 40px | 400 | 1.0 | -1px | 定价等级金额,首屏第二头条 |
| `{typography.heading-md}` | 36px | 400 | 1.0 | -0.9px | 片段头条("我们的最新研究和产品"),分级名称 |
| `{typography.heading-sm}` | 24px | 400 | 1.0 | 0 | 牌名、 子节标题、 专用牌的链接文本 |
| `{typography.subtitle}` | 20px | 400 | 1.0 | 0 | 首屏副拷贝和领头段落 |
| `{typography.body}` | 16px | 400 | 1.5 | 0 | Default body copy, form fields, footer link list |
| `{typography.body-strong}` | 16px | 600 | 1.5 | 0 | 内嵌强调, “开始” 类标签文本 |
| `{typography.body-tight}` | 16px | 400 | 1.3 | -0.16px | 营销卡和CTA卡的严格领导机构 |
| `{typography.link-sm}` | 14px | 600 | 1.43 | 0 | 导航链接、 按钮标签、 “ 更多学习” 文本链接 |
| `{typography.eyebrow}` | 14px | 500 | 1.43 | 0.35px | 区域标题上方的大写眉毛 |
| `{typography.meta}` | 13px | 400 | 1.3 | -0.26px | 三级元数据(日期、精细打印、表脚注) |
| `{typography.micro-caps}` | 11px | 450 | 1.3 | 0.2px | Footer column headings, small-caps tags ("PRESS", "RESOURCES") |
| `{typography.button}` | 14px | 600 | 1.43 | 0 | 系统内每个按钮标签 |

### 原则
- **One face, every level.** Hierarchy is articulated through size, weight, and tracking — never through a contrasting display family. The result is a uniform editorial cadence that reads as confident rather than expressive.
- **Negative tracking on display, neutral tracking on body.** Headings 24–48px sit at -0.9 to -1.2px to tighten silhouettes; body copy stays at 0 for legibility.
- **紧紧地引导着展示,慷慨地引导着身体.** 显示大小锁定到 `line-height: 1.0`身体放松下来 `1.5`。对比值使各节具有明确的“标题-当时的段落”节奏。
- **Uppercase reserved for two roles.** `{typography.eyebrow}` for section labels, `{typography.micro-caps}` for footer columns and small tags. Body copy is never set in uppercase.

### 替代字体
If `abcNormal` is unavailable, the closest open-source substitutes are **ABC Diatype** (commercial) or **Inter** at -0.02em tracking on display sizes. When using Inter, lift display sizes by ~1px and pull `letter-spacing` slightly tighter (-1.4px at 48px) to recover the compressed silhouette of the original.


## 布局

### 间距系统
- **基地单位**: 8px (与 4px 和 6px 用于内置元素间隙的微步骤).
- **托肯斯(前题)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 64px · `{spacing.section-lg}` 96px.
- 内挂牌坐着 `{spacing.lg}` (24px) 节垂直节奏在两者之间替换 `{spacing.section}` (64px)用于紧读带和 `{spacing.section-lg}` (96px)用于主要模块之间的编辑间断。内置按钮编码为 `{spacing.sm}` 垂直/ 垂直 `{spacing.lg}` 水平。

### 网格与容器
- 销售页在一个中央容器内制作,封顶接近 1280px 宽屏断点;文档保持宽大的左/右沟(~`{spacing.xxl}`以上每一断点 1024px.
- The pricing surface is a 5-column equal-width grid (Free / Standard / Pro / Unlimited / Enterprise) on widescreen; each column is a vertical strip separated by 1-pixel `{colors.hairline-soft}` rules rather than gaps.
- Research/products listings use a 12-column underlying grid where each row presents a 5/7 split: media thumbnail on the left (5 columns), aligned text block on the right (7 columns).
- 工作室的网页故意打破纪律: 编辑海报牌的密集、不规则的瓦片, `{typography.body-tight}`,没有一致的栏目统计——该页意在读作程序网格.

### 留白规则
空格在 Runway 区域由 64–96px 垂直; 区域内的牌由 16–24px 空格。没有卡片阴影或彩色表面可供布局 。 `{colors.canvas}` 节奏来自 line-height 工作室的网页是例外的;它们密集的海报网格几乎被对比所笼罩,这就是重点——它们像印刷目录一样阅读。


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | No shadow, optional 1px `{colors.hairline}` divider | Default state for cards, pricing columns, research rows, footer surfaces |
| Photographic | Full-bleed image laid into `{colors.scrim}`, no border, `{rounded.lg}` corners on contained variants | Hero modules, "We are building foundational simulation World Models" interlude, mid-page CTA panels |
| Subtle Surface Lift | `{colors.hairline}` infill behind a card on a `{colors.canvas}` page | The featured pricing tier ("Pro") — the only "elevation" cue in the entire pricing module |

The system avoids drop shadows entirely. Depth is created by photographic layering and tonal surface shifts, never by blurred shadows. This is a deliberate aesthetic choice — Runway communicates polish through editorial restraint, not material affordance.

### 装饰性深度
- **Cinematic photography as backdrop.** The hero on the homepage uses an indigo night-sky photograph; the mid-page interlude uses a fog-and-trees forest scene rendered into `{colors.scrim}`. Both function as atmospheric surfaces that the next white reading band breaks against, creating a perceived "stage" depth without any CSS effect.
- **Tonal surface stepping.** Pricing's featured-tier infill (`{colors.hairline}` against `{colors.canvas}`) is the system's quietest possible "this one is special" cue — perceptible, never loud.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 定价-网格单元格、表格行、窗体字段、页脚链接块 |
| `{rounded.xs}` | 4px | 内含强调色、焦点环、二级链接芯片 |
| `{rounded.sm}` | 6px | 标签芯片, 二级链接按钮 |
| `{rounded.md}` | 8px | Research-card 缩略图、工作室海报瓦、媒体容器 |
| `{rounded.lg}` | 16px | 警报旗、首屏摄影容器、全血型CTA板 |
| `{rounded.full}` | 9999px | 每一个初级按钮(CTA药),工作室标记药 |

### 图片形状
- **首屏静态** 它们是满血的,没有圆形的——它们延伸到页面边缘,以感受电影而不是像卡片一样的感觉.
- **包含的首屏面板** (中页插曲) `{rounded.lg}` 角,表示"模块"而不是"页面".
- **研究缩略图** 已经 16:9 配合 `{rounded.md}` 转角和a `{colors.surface-cool}` 占位符填满。
- **工作室海报牌** 方程比(平方 4:5, 景观)和使用 `{rounded.md}` 角; 故意行为 aspect-ratio 不一致是工作室的网格 其程序目录的感觉。
- **Avatar/logo lockups** in the partner row are rendered without rounding, in flat black wordmarks on `{colors.canvas}`, evenly spaced.


## 组件

### 按钮

**`button-primary`** ——每个初级CTA横跨市场表面("Try"). Runway","开始","现在订阅","发送消息","更多学习"填充变体).
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding `{spacing.sm}` × `{spacing.lg}`, rounded `{rounded.full}`, height 40px.
- 该系统使用同一种胶囊形,每一次均不作大/小区分。

**`button-primary-on-dark`** ——表面本身是时使用的反向. `{colors.scrim}` (黑暗首屏CTAs) (英语:
- Background `{colors.on-primary}`, text `{colors.primary}`, otherwise identical token set to `{button-primary}`.

**`button-ghost`** ——光表面的二次动作("Schedule a Demo","Sign Up"在自由阶梯).
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.full}`, with a 1px `{colors.ink}` border.

**`button-text-link`** ——内置二级动作,表格行“订阅现在”标签,以及“查看更多”链接
- Background `{colors.canvas}`, text `{colors.ink}`, underline-on-active, type `{typography.link-sm}`.

### 导航

**`nav-bar`** ——持久顶条.
- Background `{colors.canvas}`, height ~64px, padding `{spacing.lg}` horizontal, `{typography.link-sm}` for menu items.
- Layout: lowercase `runway` wordmark left → centred 5-item primary menu (Research, Product, Resources, Solutions, Company) → right cluster (`Enterprise Sales` text link, `Log In` text link, `Try Runway` `{button-primary}` pill).
- 栏杆坐落在文档顶部,只按间隔,而不是按细边线从页面中分出.

**`nav-link`** ——上栏菜单项
- Background `{colors.canvas}`, text `{colors.ink-soft}`, type `{typography.link-sm}`, padding `{spacing.xs}` vertical.

### 卡片与容器

**`pricing-card`** ——每个标准等级(自由,标准,无限制,企业).
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg}`, no rounding, separated from neighbouring tiers by 1px `{colors.hairline-soft}` column rules.
- 内部堆栈: 级名称 (E)`{typography.heading-md}`) □ 单行说明(`{typography.body}` 输入 `{colors.graphite}`) 数额(`{typography.display-sm}`) = 单位标题(`{typography.meta}` 输入 `{colors.stone}`) 动作按钮( )`{button-primary}` 分级支付, `{button-ghost}` —— 专题清单(第1款)`{typography.body}` 子弹).

**`pricing-card-featured`** ——"Pro"级
- Identical structure to `{pricing-card}` but the column infill is `{colors.hairline}` instead of `{colors.canvas}`. No coloured border, no badge, no shadow — just the surface-step.

**`pricing-tier-name`** ——每个定价栏头行
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.heading-md}` set in title-case ("Free", "Standard", "Pro").

**`pricing-amount`** ——每张定价卡中出现大额货币.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.display}` paired with a `{typography.meta}` "per user/month" caption beside it.

**`research-card`** ——"我们的最新研究和产品"每行
- 版式 : `{media-thumbnail}` 左( 左)16:9+ 文本块右侧。
- 右块:标题( Q)`{typography.heading-sm}`) 说明(`{typography.body}` 输入 `{colors.graphite}`) ——页脚链接(`{typography.link-sm}`,在活动上下划线).

**`studios-tile`** ——工作室索引上的海报卡
- Background `{colors.canvas-warm}`, image fills the tile, optional caption strip below in `{typography.body-tight}` (`{colors.graphite}`).
- 斜拉片在宽度比上故意是千差万别的。

**`studios-tag`** ——工作室卡片上小头丸类胶囊形.
- Background `{colors.canvas}`, text `{colors.slate}`, type `{typography.micro-caps}`, padding `{spacing.xxs}` × `{spacing.sm}`, rounded `{rounded.full}`.

**`hero-photo`** ——满腔热血的电影首屏街区.
- `{colors.scrim}` 背着照片, 贴着 `{spacing.xxl}`,四舍五入 `{rounded.lg}` 的变体和 `{rounded.none}` 以边缘对边缘变体表示。
- 内部堆栈:可选眉毛( Y)`{typography.eyebrow}` 输入 `{colors.on-primary}` 时 间 70% 透明度 + 显示头条( )`{typography.display}` 输入 `{colors.on-primary}`) ——可选副拷贝(`{typography.subtitle}` 输入 `{colors.on-primary}`) → `{button-primary-on-dark}` 中铁局.

**`media-thumbnail`** ——图像占位符
- Background `{colors.surface-cool}`, rounded `{rounded.md}`, ratio 16:9 by default, image lazy-loads on top.

### 输入框与表单

**`form-field`** ——每个联系人形式输入(选择、文本、文本区域)
- Background `{colors.canvas}`, text `{colors.ink}`, label above field in `{typography.body}` `{colors.ink}`, helper text in `{typography.meta}` `{colors.stone}`.
- 球场本身是一个 1px 下限规则 : `{colors.hairline-soft}` (没有全边框)——占位符("按您的全名")坐落于 `{colors.stone}`.
- 铺垫 `{spacing.sm}` 垂直,无圆形。

**`form-field-focused`** ——重点状态.
- 底线规则加深到 `{colors.ink}`。没有发光,也没有色调。

**`alert-banner`** ——隐私/饼干披露副本.
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body-tight}`, padding `{spacing.md}`, rounded `{rounded.lg}`, 1px `{colors.hairline-soft}` border.

### Footer

**`footer`** ——系统终端表面.
- Background `{colors.footer}`, text `{colors.on-primary}`, padding `{spacing.section}` vertical, `{spacing.lg}` horizontal.
- Layout: 6-column link grid → bottom strip with the lowercase `runway` wordmark left and legal/copyright links right.

**`footer-eyebrow`** ——小盖栏标题("生产","倡议","公司").
- Background `{colors.footer}`, text `{colors.stone}`, type `{typography.eyebrow}`.

**`footer-link`** ——链接列表项目
- Background `{colors.footer}`, text `{colors.on-primary}`, type `{typography.body}`.

### 标志性组件

**定价 5- 科隆斯布(英语:Column Slab) - 科隆斯布(英语:Column Slab)** — Runway定价模块异常平坦: a 5- 层次板,没有彩色的边框,没有阴影,没有徽章丝带。`{colors.hairline}` )和稍重的动作按钮。将 Free → Enterprise 变成一个连续的板块而不是单独的浮牌的决定是页面的中央设计移动。

**Editorial Eyebrow + Display Lockup** — Across the site, headline modules follow a fixed three-part rhythm: uppercase `{typography.eyebrow}` label → 36–48px `{typography.display}` headline → `{typography.body}` lead paragraph. Section spacing locks to `{spacing.section}` between modules. The lockup is what gives marketing pages their festival-programme cadence.

**电影大气干扰** ——中篇文件插曲("我们正在构建基础模拟世界模型"森林场景,"我们正在构建AI模拟世界......"收尾条) 使用一个包含的. `{hero-photo}` 面板为 `{rounded.lg}` 角。它们的作用是研究网格和CTA波段之间的间隔,而不是促进单元。


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` 用于初级动作和页脚; 使用 `{button-primary}` 每一个主要的CTA,没有不同的角半径或填充。
- 堆叠大写 `{typography.eyebrow}` 结束 `{typography.display}` 每一个主要区块的打开器都是系统的签名锁。
- Use `{colors.hairline}` infill — never a coloured border — when one item in a comparison must read as featured.
- Set body copy in `{colors.graphite}` against `{colors.canvas}` for paragraphs, and reserve `{colors.ink}` for headings and emphasis only.
- 将摄影视为 content: full-bleed, cinematic, aligned to the page edge in heroes; `{rounded.lg}` 只有在照片包含在某一部分时。
- 锁定显示标题为负数 letter-spacing (`-0.9px` 改为: `-1.2px`)——紧跟追踪是品牌声音的核心.
- 使用 `{rounded.full}` 扣子胶囊形和 `{rounded.none}` 用于表格/网格单元格。绝不混合。

### 应避免的做法
- 勿将强调色颜色(蓝色,绿色,红色)引入营销表面—— Runway声音是单色的 加上摄影
- 深度是照相和直肠,不是物质的。
- Don't badge the featured pricing tier with a coloured ribbon or border — the surface step is the badge.
- Don't break headings into bold + light contrast; every heading is regular weight (`400`) with tight tracking.
- Don't centre body paragraphs longer than one sentence — the system uses left-aligned reading bands almost exclusively.
- Don't use uppercase for body or button copy. Uppercase is reserved for `{typography.eyebrow}` (14px) and `{typography.micro-caps}` (11px).
- Don't render the runway wordmark in title-case or with a brand colour. It is always lowercase, in `{colors.ink}` on light surfaces and `{colors.on-primary}` on dark.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 2十一 国 务 院 | 1600px | 编辑容器齐全;定价 5- 上; 研究行 5/7 拆分( E) |
| 十一 国 务 院 | 1536px | 同样的布局,稍紧的沟槽 |
| 升( 升) | 1280px | 默认桌面读取视图 |
| 微额 | 1200px | 定价网格仍然 5- 上但层的文本收紧 |
| 静态 | 1024px | 定价崩溃到 3 → 2 级行; 研究行堆栈在特定断点 |
| 自动 | 768px | 顶端导航崩溃成汉堡; 部分垫片滴入到 `{spacing.section}` |
| xxs | 640px | Single-column reading; hero display drops to `{typography.display-sm}`; pricing tiers stack 1-up |

### 触控区域
- 每隔 `{button-primary}` 谓 40px 高的,位于低端 44×44 WCAG目标,移动时按钮会长到 48px 高度( 仍然为 `{rounded.full}`, 仍然( ) `{typography.button}`).
- `{nav-link}` 项 获取 `{spacing.sm}` 移动菜单内垂直粘贴,在不改变打字功能的情况下扩展水龙头目标.
- Pricing-tier `{button-primary}` 将全栏宽线扩展为移动式。

### 窄屏布局调整
- **纳芙.** 居中桌面菜单崩溃为打开覆盖表的单个汉堡; 右侧 `{button-primary}` 尝试 Runway" 汉堡上方保持可见的持久作用。
- **定价** 5-柱状板坍塌为单柱叠加的卡片,在xxs; 特征 `{colors.hairline}` 填充在Pro卡上保存,所以直肠提示能活下来。
- **研究网格.** 5/7 分割崩溃到图像上方,文本下方,在 sm; 缩略图圆形(`{rounded.md}`)被保留.
- **脚足.** 6- 柱状链接网格崩溃到 2- 柱子在sm和 1-xxs的栏;小写 `runway` 字签在下方左下方, 法律链接堆栈。

### 图片适配
- 首屏照片在移动(垂直-拾取)上交换到更紧的作物,因此焦点主体保持xxs宽度的中心.
- `{media-thumbnail}` 集装箱保存其 16:9 每一断点的比率; `{colors.surface-cool}` 占位符在懒惰的负荷中填充颜料。
- 工作室海报瓦片在每个断点保留其原始的侧面比——砖瓦只是重新流到较少的柱子.


## 迭代指南

1. 一次聚焦一个组件。从 `{button-primary}` 和 `{nav-bar}` - 它们在每一页上都出现,并锁定系统。
2. 直接引用组件名称和符号( Q)`{colors.ink}`, `{button-primary-on-dark}`, `{rounded.full}`()——不解释或替代六重值。
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 警告旗自动漂移。
4. 添加新的变体作为单独的 `components:` 条目( 4)`-pressed`, `-disabled`, `-focused`)——永远不要埋藏在传言中.
5. 默认复制到 `{typography.body}` 重点 `{typography.body-strong}`准备金 `{typography.eyebrow}` 和 `{typography.micro-caps}` 用于两个特定角色(打开部分和页脚栏)。
6. 保留 `{colors.primary}` 稀有——如果一个单一的视点中出现一个以上的黑溢出动作,则次元中和到 `{button-ghost}`.
7. 介绍摄影时,请输入 `{colors.scrim}` 避免中段摄影强调色, 而不是覆盖全部内容宽度, 它们是在系统外读取。

## 设计词元原值

An inspired interpretation of Runway's design language — an editorial, gallery-grade marketing system for an AI creative-tools company. Cinematic photographic heroes give way to crisp white reading surfaces, a tight monochrome neutral ladder, and a single proprietary sans (abcNormal) carrying every level of the hierarchy. The system reads like a film festival programme more than a SaaS site: black ink on paper-white, generous air, hairline dividers, and reserved use of restrained slate-blue for secondary text. Pure black solid pills serve every primary action, with no accent colour competing for attention.

```yaml
---
version: alpha
name: Runway-design-analysis
description: An inspired interpretation of Runway's design language — an editorial, gallery-grade marketing system for an AI creative-tools company. Cinematic photographic heroes give way to crisp white reading surfaces, a tight monochrome neutral ladder, and a single proprietary sans (abcNormal) carrying every level of the hierarchy. The system reads like a film festival programme more than a SaaS site: black ink on paper-white, generous air, hairline dividers, and reserved use of restrained slate-blue for secondary text. Pure black solid pills serve every primary action, with no accent colour competing for attention.

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#030303"
  ink-soft: "#1a1a1a"
  graphite: "#404040"
  slate: "#676f7b"
  slate-soft: "#727a85"
  mute: "#6b7280"
  stone: "#939393"
  ash: "#999999"
  hairline: "#e7eaf0"
  hairline-soft: "#c9ccd1"
  surface-cool: "#d0d4d4"
  canvas: "#ffffff"
  canvas-warm: "#fefefe"
  scrim: "#1a1a1a"
  footer: "#030303"

typography:
  display:
    fontFamily: abcNormal
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -1.2px
  display-sm:
    fontFamily: abcNormal
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -1px
  heading-md:
    fontFamily: abcNormal
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.9px
  heading-sm:
    fontFamily: abcNormal
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1
  subtitle:
    fontFamily: abcNormal
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: abcNormal
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-strong:
    fontFamily: abcNormal
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
  body-tight:
    fontFamily: abcNormal
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.16px
  link-sm:
    fontFamily: abcNormal
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
  meta:
    fontFamily: abcNormal
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.26px
  eyebrow:
    fontFamily: abcNormal
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0.35px
  micro-caps:
    fontFamily: abcNormal
    fontSize: 11px
    fontWeight: 450
    lineHeight: 1.3
    letterSpacing: 0.2px
  button:
    fontFamily: abcNormal
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 16px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px
  section-lg: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 40px
  button-primary-on-dark:
    backgroundColor: "{colors.on-primary}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 40px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 40px
  button-text-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.link-sm}"
    rounded: "{rounded.xs}"
    padding: 4px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.link-sm}"
    height: 64px
    padding: 24px
  nav-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.link-sm}"
    padding: 8px
  pricing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 24px
    width: 224px
  pricing-card-featured:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 24px
    width: 224px
  pricing-tier-name:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
  pricing-amount:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
  research-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px
  media-thumbnail:
    backgroundColor: "{colors.surface-cool}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  hero-photo:
    backgroundColor: "{colors.scrim}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: 48px
  studios-tile:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body-tight}"
    rounded: "{rounded.md}"
    padding: 16px
  studios-tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.slate}"
    typography: "{typography.micro-caps}"
    rounded: "{rounded.full}"
    padding: 6px
  form-field:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px
  form-field-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px
  alert-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-tight}"
    rounded: "{rounded.lg}"
    padding: 16px
  footer:
    backgroundColor: "{colors.footer}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    padding: 64px
  footer-link:
    backgroundColor: "{colors.footer}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
  footer-eyebrow:
    backgroundColor: "{colors.footer}"
    textColor: "{colors.stone}"
    typography: "{typography.eyebrow}"
---
```
