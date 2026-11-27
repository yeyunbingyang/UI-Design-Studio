# Renault · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Renault营销表面的高度不光彩:a
白帆画 黑色页面底色画 产品故事 和
单色太阳光黄色强调色( Sunlight Yellow ) (`{colors.primary}` — `#ffed00`预留
品牌的现代化平面钻石标志
语气——几何、自信、略为工业化——和系统遵循
方角占优势,细边线边界很少,而且高程是
以颜色屏蔽而不是阴影表达。

打印为单文。 网站上的每个文本都设置在 **NouvelR**,
Renault举手展示家庭, 强烈的偏重字重 700 时 间
显示大小( 紧凑) `lineHeight: 0.95`)和字重 400 给尸体,这里
并非中学 serif,没有装饰性的斜体,没有脚本——学科是
签名。

三个表面模式之间的页节奏周期:a **白色目录模式** 资源
列表和配置符(`{colors.canvas}` 带毛线的深线
`{colors.hairline}` 平分),a **黑色故事讲述模式** 给首屏
以及竞选版的下半页和短篇
**黄色强调色瞬间** (`{colors.primary}` 瓷砖,"NEW"徽章,R5- 编码
黄色彩色镜头),可以弹出原本中性调色板.

**关键特征 :**
- 双托式页面底色系统 - `{colors.canvas}` 以浏览为目的, `{colors.surface-dark}` (black)用于讲故事——切换成满腔的乐队而不是微妙的等级.
- 单一的品牌强调色—— `{colors.primary}` 阳光黄——很少用于初级CTA,"NEW"徽章,R5 首屏摄影,和配置点指标。
- **NouvelR 到处**,与 `{typography.display-xl}` 头条在 56px / 字重 700 / `lineHeight: 0.95` 如此凝结多行头条 干净地堆积。
- 方形几何 : `{rounded.xs}` (2px)在按钮上, `{rounded.none}` 上面有瓷砖和产品卡, `{rounded.pill}` 专为 sub-nav 芯片和装饰徽章.
- 摄影第一产品瓦片——车辆照片在本来中性卡片内满身血,拷贝堆在下面而不是上覆.
- 页面级节奏周期 白色 黑色 黄色 强调色 黑色 字印和页脚总是会关闭 `{colors.surface-dark}`.


## 配色

### 品牌色与强调色
- **阳光黄色** (`{colors.primary}` — `#ffed00`:品牌强调色 预留了初级CTA,"NEW"/"yeni"徽章,配置点指标,以及全血宣传瓦片,从未装饰过.
- **日光黄色按下** (`{colors.primary-deep}` — `#e6d200`: 活动/压力状态 `{colors.primary}` 按钮和瓷砖。
- **On-Primary** (`{colors.on-primary}` — `#000000`: 标签颜色, 上方 `{colors.primary}` 表面。黄色总是与黑色文字成对,从不白色。

### 界面表面
- **页面底色** (`{colors.canvas}` — `#ffffff`:默认的页面背景和卡片表面.
- **表面软** (`{colors.surface-soft}` — `#f7f7f7`: 组合配置行和不活动形式字段的微妙高程步骤。
- **表面暗色( T)** (`{colors.surface-dark}` — `#000000`:另作页面底色,用于首屏乐队,脚步,和全能的故事讲述部分.
- **地表深处** (`{colors.surface-deep}` — `#111111`: 内部单步高程 `{colors.surface-dark}` 区域用于套卡和窗体面板。
- **细边线** (`{colors.hairline}` — `#f2f2f2`: 软 1px 白色表面的行间分隔器。
- **发条坚固** (`{colors.hairline-strong}` — `#000000`: 白色上满分音符,加上所有卡/按钮大纲.
- **暗号** (`{colors.divider-dark}` — `rgba(255,255,255,0.16)`: 内部使用的相应低相位分隔器 `{colors.surface-dark}` 区域。

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#000000`: 白色表面的首字母颜色,同样值也驱动着标志,图标,和边框的大纲——黑色是结构的,而不是装饰的.
- **体质** (`{colors.body}` — `#222222`: 次级正文,纯黑色在长段落中会感到太重.
- **木炭矿** (`{colors.charcoal}` — `#333333`: 标题,元数据,以及小标签.
- **静音** (`{colors.mute}` — `#666666`:支持文本和不活跃的导航标签.
- **灰尘** (`{colors.ash}` — `#8a8a8a`:占位符文本,已禁用标签.
- **石头** (`{colors.stone}` — `#c4c4c4`: 残废状态前缘.
- **On-Dark** (`{colors.on-dark}` — `#ffffff`): primary text on `{colors.surface-dark}` surfaces.
- **On-Dark 静音** (`{colors.on-dark-mute}` — `rgba(255,255,255,0.72)`:暗区二级文字;保留品牌高调的感官,而不诉诸中灰色.

### 语义色
- **错误** (`{colors.error}` — `#be6464`: 用于内含形式错误的变形脱饱和红色。 显著的比典型的纯红色错误状态更温暖 。
- **警告** (`{colors.warning}` — `#f0ad4e`琥珀警报。
- **成功** (`{colors.success}` — `#8dc572`: 哑绿色确认.
- **信息** (`{colors.info}` — `#337ab7`:一种用于信息芯片的脱饱和中蓝.
- **Link** (`{colors.link}` — `#0000ee`): the unstyled-anchor default kept for fallback inline text links — production links inherit `{colors.ink}` and rely on underline/weight rather than colour.


## 字体排版

### 字体族

整个系统都设置在 **NouvelR**, Renault专有显示
家族,跨越导航、头条、身体、标题和按钮使用
标签 家族带有略微几何、半凝固的个性
高的X高跟方尖顶 与钻石自然对齐
标记。

何时 NouvelR 无法获得许可, 合适的开源替代品包括
**Inter 紧紧**, **曼罗普**,或 **香港格罗捷斯克半凝固** ——全部分担.
几何和温暖的感受 和适应 干净的重量 400 / 600 / 700.
Tighten `lineHeight` on display sizes to ~0.95 to match the original; do not
放松点

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 700 | 0.95 | 0 | 首屏头条,竞选标题("E-TECH ELEKTRIKLI","REVOLUTION"). |
| `{typography.display-lg}` | 40px | 700 | 0.95 | 0 | 副节标题. |
| `{typography.display-md}` | 32px | 700 | 0.95 | 0 | 页面级别 H1 的子页和配置面板。 |
| `{typography.heading-lg}` | 24px | 700 | 0.95 | 0 | 科头,牌名. |
| `{typography.heading-md}` | 20px | 700 | 0.95 | 0 | 分节标题,突出标签. |
| `{typography.heading-sm}` | 18px | 700 | 1.0 | 0 | 拼贴标题,列表组头. |
| `{typography.subtitle}` | 19.2px | 600 | 1.3 | 0 | 领头段落,首屏字幕. |
| `{typography.body-lg}` | 18px | 400 | 1.5 | 0 | 长形体. |
| `{typography.body-md}` | 16px | 400 | 1.4 | 0 | 默认的正体和形成字段 。 |
| `{typography.body-sm}` | 14px | 400 | 1.57 | 0 | 说明,元数据。 |
| `{typography.button-lg}` | 16px | 700 | 1.0 | 0 | 首屏乐队的大型CTA. |
| `{typography.button-md}` | 14.4px | 700 | 1.0 | 0.144px | 整个系统默认按钮标签 。 |
| `{typography.button-sm}` | 13px | 600 | 1.2 | 0.13px | Sub-nav 胶囊形,小的卡片动作。 |
| `{typography.caption}` | 12px | 400 | 1.4 | 0 | 页脚披露,规范文本. |
| `{typography.overline}` | 10px | 700 | 1.45 | 0 | 标题上短小写标签 。 |

### 原则
- Display sizes always weight 700, always at `lineHeight: 0.95`. The tightness is what makes the brand feel confident rather than corporate.
- 体型保持字重 400 - 从来没有 500,身体与显示的对比是系统的一部分.
- 按钮标签带有微小的正数 letter-spacing (`0.144px` 打开 `{typography.button-md}`)——几乎无法理解,但它增加了品牌在CTAs上想要的微小的机械精度.
- No italics, no script, no decorative ligatures.

### 替代字体

NouvelR 已获得许可证; 替代品(Inter 紧身/曼罗佩/香港格罗特斯克半身
凝固)保留几何字符,但一般渲染为
显示大小时略松的线高——夹式显示
`lineHeight` 改为: 0.95 明确与源头匹配。


## 布局

### 间距系统
- **基地单位**: 4px,工作规模建立在多种工作基础上, 4 和 8.
- **脚本**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 40px · `{spacing.section}` 80px.
- 节垫( 满额带 ) : `{spacing.section}` (80px)桌面上,崩溃为 `{spacing.xxxl}` (40px)在移动中.
- 内部宣传 padding: `{spacing.xxl}` (32px)桌面上所有侧面。
- 垂直配置行 padding: `{spacing.xl}` (24px)上/下,各行间有细边线分隔符.

### 网格与容器
- **最大内容宽度** ≈ 1440px。除此之外,内容仍以中心为中心,暗/淡波段则延伸为全血。
- **宣传网格** 页面上:a 2- 桌面上的柱形瓦网格, 降为 1- 移动上,每块砖块都是方角(`{rounded.none}`),以摄影或固体颜色为背景.
- **Vehicle range grids**: 3 to 4 cars per row at desktop, collapsing 2-up at tablet and 1-up at small mobile.
- **配置符** 使用a fixed 左视窗格( 右视窗格) (~60% 宽度),带有右手滚动选项列表(~40% 宽度),位于桌面上.

### 留白规则
- 白空间是结构的,不是装饰性的. 部分通过颜色阻隔(白 → 黑色) 而不是软垫坡道来分隔.
- 内置牌和配置列,贴板慷慨但从来不是空洞——品牌是大众市场,因此密度是可以接受的.
- Hairline `{colors.hairline}` dividers on white surfaces create the sense of catalogue precision; on dark surfaces, `{colors.divider-dark}` carries the same role.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — flat | No shadow, no border | Default page surface, full-bleed bands. |
| 1 ——纲要. | 1px 固态 `{colors.hairline-strong}` 或 `{colors.hairline}` | 轻便上宣传瓦片,车辆卡片,配置板. |
| 2 ——色封高地 | 表面颜色变换(例如. `{colors.canvas}` 坐在一个卡片内 `{colors.surface-soft}` 带) | 配置细节卡,相关内容行. |
| 3 — dark inversion | Card swaps to `{colors.surface-dark}` against a `{colors.canvas}` band | "Ticari araç" hero promo tiles, lifestyle storytelling cards. |

Drop shadows are extracted from the system but rarely visible on the marketing
表面,当它们出现时,它们非常微妙(如:~10% 透明度, 2–4px 模糊)
并用于浮点如配置器的 sticky 简列条。

### 装饰性深度
- 红5 首屏乐队使用大气网格化的背景——汽车硅胶后面的紫色至黄色的光线,作为系统唯一的真正的大气深度。 其他地方,深度都是结构(颜色阻塞+轮廓),而不是大气。
- E-TECH电力列车页面使用光线紫红色对紫色梯度,在切开图后,保留给电动子品牌.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 平面,车辆卡,分牌,横幅,全血影像. |
| `{rounded.xs}` | 2px | 默认按钮(主黄,次黑,轮廓). |
| `{rounded.sm}` | 3px | 标签面板,小芯片。 |
| `{rounded.md}` | 4px | 表格标签,内含标签. |
| `{rounded.pill}` | 46px | Sub-nav 丸,"yeni"/"NEW"徽章,装饰性木马片. |
| `{rounded.full}` | 9999px | 配置色表, 浮雕点数. |

### 图片形状
- 车辆摄影是 **总是方角** (`{rounded.none}`),没有圆形的车辆首屏镜头,没有软套车卡.
- 相邻的光谱比组 **16:9** (首屏乐队), **1:1** (平面宣传瓦),和 **4:3** (车辆行距卡) **2:1 宽** 给满血的乐队。
- 虚构和小剖面提示(如果有的话) `{rounded.full}` 圆形,以与平方几何相对。


## 组件

### 按钮

**`button-primary`** ——黄CTA
- Background `{colors.primary}`, label `{colors.on-primary}`, type `{typography.button-md}`, padding `14px 24px`, `rounded: {rounded.xs}`.
- 页面上唯一最重要的动作(如"Hemen randevu al","Hesapla","Konfigüratörü başlat").
- 国家住在这里 `button-primary-pressed` (背景情况) `{colors.primary-deep}`).

**`button-secondary-dark`** ——固态黑色CTA
- Background `{colors.surface-dark}`, label `{colors.on-dark}`, type `{typography.button-md}`, `rounded: {rounded.xs}`.
- 同等字重的二级动作配对 `{component.button-primary}`,或使用黄瓦背景时的主要动作。

**`button-outline-dark`** ——概述光线CTA.
- Background `{colors.canvas}`, label `{colors.ink}`, 1px solid `{colors.hairline-strong}`, type `{typography.button-md}`, `rounded: {rounded.xs}`.
- Tertiary action; appears alongside primary/secondary for "Detayları gör", "Modeller", etc.

**`button-outline-light`** —— 概述暗色的CTA.
- Background `{colors.surface-dark}`, label `{colors.on-dark}`, 1px solid `{colors.on-dark}`, type `{typography.button-md}`, `rounded: {rounded.xs}`.
- 暗黑的黑幕对等 `{component.button-outline-dark}`.

**`button-pill`** — sub-nav 芯片
- Background `{colors.canvas}`, label `{colors.ink}`, 1px solid `{colors.hairline-strong}`, type `{typography.button-sm}`, `rounded: {rounded.pill}`, height 36px.
- The only place the system uses a pill — for top-level filter chips ("Servis & randevu", "Sahiplik dönemi geçişi", "Kampanyalar") and configurator tab switches.

**`button-icon-square`** — small icon button
- Background `{colors.canvas}`, 1px solid `{colors.hairline-strong}`, `rounded: {rounded.xs}`, 40×40px square.
- 木马箭,合用,语言切换器.

### 卡片与容器

**`promo-tile-light`** ——白宣传瓦
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.heading-lg}`, padding `{spacing.xxl}`, `rounded: {rounded.none}`.
- 使用在主页 2- 上面的"Hybrid araç modeleri","binek araç sat kampanyalar"的牌子。

**`promo-tile-dark`** ——黑色宣传瓦片
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, type `{typography.heading-lg}`, padding `{spacing.xxl}`, `rounded: {rounded.none}`.
- Lifestyle / commercial-vehicle storytelling tiles ("ticari araç satış kampanyaları").

**`promo-tile-yellow`** ——强调色促销瓦片
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.heading-lg}`, padding `{spacing.xxl}`, `rounded: {rounded.none}`.
- 单曲"PARLAK SARI" / "Sunlight Yellow" 关注瓦,主播一个竞选乐队. Reserved——通常每页最多一首.

**`vehicle-card`** ——汽车上市卡
- Background `{colors.canvas}`, full-bleed product photography on top, text below, `rounded: {rounded.none}`, no outer border.
- 包括车辆名称(`{typography.heading-md}`),变体字幕(`{typography.body-sm}`),并有一个跟踪箭头的图标。

**`hero-banner`** ——满血首屏.
- Background `{colors.surface-dark}` with full-bleed photo or atmospheric gradient, content stacked left, type `{typography.display-xl}` for the title.
- "SCENIC E-TECH ELEKTRİKLİ" hero on the homepage.

### 输入框与表单

**`text-input`** ——默认输入
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, 1px bottom border `{colors.hairline-strong}`, `rounded: {rounded.none}`, padding `{spacing.sm} {spacing.md}`, height 48px.
- 输入故意最小——上边和侧边无边,下边单细边线——保持目录感.

### 配置符

**`configurator-row`** — option list row
- Background `{colors.canvas}`, separator hairline `{colors.hairline}` between rows, padding `{spacing.xl}` top/bottom, type `{typography.body-md}`.
- 配置器上的右侧滚动列表:"kasa tipi","motor seçimi","versiyon seçimi","renk seçenekleri"等.

**`configurator-swatch`** — circular 颜色选择
- Background `{colors.surface-soft}` (or the actual car colour), `rounded: {rounded.full}`, 56×56px.
- 用于彩色选择。 活动状态添加 a 1px 固态 `{colors.hairline-strong}` 戒指,你给我打电话

### 导航

**`nav-bar`** ——顶端导航(桌面).
- Background `{colors.canvas}`, type `{typography.button-md}`, height 60px, hairline `{colors.hairline}` bottom border.
- Left: diamond logomark. Centre: top-level nav ("Modeller", "Hizmetler", "Renault Yaşamı", "MyRenault"). Right: language switcher + login icon.

**`nav-bar`** (移动)
- 同样的高度 60px,将中心导航崩溃成汉堡图标。Logo 左边,登录右边。

**`sub-nav-pill`** 避孕药型 sub-nav
- Pill chips set in a horizontal scroll bar between hero and content body (e.g. "Servis & randevu", "Sahiplik dönemi geçişi", "Kampanyalar"), `{component.button-pill}` styling.

### 标志性组件

**`badge-new`** -"yeni"徽章 - 亚尼徽章
- Background `{colors.primary}`, label `{colors.on-primary}`, type `{typography.button-md}`, `rounded: {rounded.full}`, padding `6px 14px`.
- 被困在新车卡左下方

**`footer`** ——全球页脚
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, type `{typography.body-sm}`, padding `64px 24px`.
- 由三栏法律/快速链接/本地网格在单行版权行上方分隔 `{colors.divider-dark}`.


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` 仅限初级CTA,"yeni"/"NEW"徽章,每个乐队最多一个强调色促动瓦片—— `{component.promo-tile-yellow}` 故意难得的
- 平对 `{colors.primary}` 仅使用 `{colors.on-primary}` 文本。黄+白是被禁止的。
- Set everything in **NouvelR** — no secondary serif, no script, no decorative italic.
- Hold display headlines at `{typography.display-xl}` weight 700 with `lineHeight: 0.95` so they stack tightly on multi-line wraps.
- 使用 `{rounded.xs}` (2px)在每个标准按钮上——近平角是品牌的一部分.
- 切换到间距的完整带 `{colors.canvas}` 和 `{colors.surface-dark}` 避免中灰作为节拍的背景
- 显示车内全血摄影 `{component.vehicle-card}` 上面有上层的书本, 上面没有上层的
- 使用 `{component.sub-nav-pill}` (`{rounded.pill}`仅用于 sub-nav 和小滤波行——从不为主 CTA 。

### 应避免的做法
- Don't introduce a secondary accent colour. Yellow is the only brand accent; semantic colours (`{colors.error}`, `{colors.success}`, `{colors.warning}`) are functional, not decorative.
- Don't round vehicle cards or promo tiles. Square-cornered photography is core to the brand expression.
- Don't soften body weights to 500 or 600 — the system relies on the 400 / 700 contrast.
- 不许申请 `{colors.primary}` 以每个波段的单音片以外的文字或大表面表示。
- Don't add atmospheric gradient washes outside the dedicated R5 / E-TECH hero contexts.
- Don't pair light grey text on white. Body text steps through `{colors.body}`, `{colors.charcoal}`, `{colors.mute}` — `{colors.ash}` and `{colors.stone}` are reserved for placeholders and disabled states.
- 车辆卡或宣传牌上不要加入投影——系统在目录级别上是无阴影的.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Desktop XL | ≥ 1440px | Full max-width container, 3–4 column vehicle grid, 2-up promo tile grid. |
| 桌面 | 1280–1439px | 相同的布局, 容器缩放到视图端口 `{spacing.xl}` 侧式垫板 |
| 块状大 | 1024–1279px | 车辆网格投放到 3-上,配置器左/右面板大小调整为 55/45. |
| 平板 | 768–1023px | 推动砖块网格崩溃 2- 起来, sub-nav 胶囊形变成横向卷轴。 |
| 大型移动 | 426–767px | 车辆网 2-上,配置器开关为叠叠式的窗体(在顶部可视化,下面可选),导航崩溃为汉堡. |
| Mobile | ≤ 425px | All grids 1-up, hero `{typography.display-xl}` clamps to ~40px, section padding `{spacing.section}` collapses to `{spacing.xxxl}`. |

### 触控区域
- 最少所有按钮 44×44px 移动; 默认 `{component.button-primary}` 谓 48px 高高,舒适地超过WCAG AAA.
- `{component.sub-nav-pill}` (36px) 被撞到(或) 40px 高的移动通过增加的垂直垫。
- `{component.button-icon-square}` (40px) 处于WCAG AA的最低水平,并且仍然可以开采,但应当成长为 44px 用作主要导航控制。

### 窄屏布局调整
- 顶级导航崩溃到汉堡 < 1024px; 标志和登录图标仍固定在上。
- 2- 上推网格崩溃 1- 上边 < 768px; 砖块垫片缩进 `{spacing.xxl}` 改为: `{spacing.lg}`.
- 配置器从侧面切换到堆叠 < 1024px,可视化 钉在卷轴上的视门顶端。
- 显示头条夹 : `{typography.display-xl}` 56px → 40px → 32px 穿过断点梯子
- Sub-nav 胶囊形从包装行转换为水平滚动扶轮, 位置为 < 768px.

### 图片适配
- Vehicle photography is served at 1.5× and 2× DPR; below 768px, the system swaps to a portrait-oriented composition where art direction allows.
- 首屏大气梯度(R)5, E-TECH)在主内容后懒散地加载;它们没有阻塞.
- 生命风格/商业摄影 `{component.promo-tile-dark}` 保持不变 16:9 横跨断点架设,切入而非信箱.


## 迭代指南

1. 一次关注一个组件。大多数组件共享 `{rounded.xs}`, `{colors.canvas}` / `{colors.surface-dark}`,以及 NouvelR ——只有角色特定标志(.`{colors.primary}`, `{component.promo-tile-yellow}`)变体之间的移位.
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component.button-primary-pressed}`, `{rounded.pill}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` ; 孤箱警告会在未使用条目上船前捕获。
4. 添加新的变体作为单独的条目( Q) :`-pressed`, `-disabled`, `-outline`)——不要用散文埋没.
5. 默认体型为 `{typography.body-md}`; 联系范围 `{typography.subtitle}` 只在首屏字幕和领头段落上
6. 保留 `{colors.primary}` 稀有——如果每个视图中出现一个以上的黄色元素,询问其中之一是否应降为 `{colors.surface-dark}` 或 `{colors.canvas}` 换成是的


## 已知缺口

- 活动/压电的视觉状态在静态表面没有始终一致的观测; `button-primary-pressed` 文档中提取的暗黄色值,但没有任何其他组件有被按下被提升到YAML的变体。
- Drop-shadow values exist in the extracted tokens but are rarely surfaced visually; only the configurator's sticky summary bar uses them on the captured pages.
- MyRenault应用表面(登录产品)是这种提取的超出范围——只有公共营销布有记载.
- Form-field 焦点样式不提取;系统可能依赖于更厚的底边框, 位置为 `{colors.ink}`,但从图像上看,这些内容在被捕获的页面上并未得到证实。

## 设计词元原值

Renault网络存在对齐了新现代 Renault 钻石(钻石) 2021 平线的rhombus mark),带有鲜明的黑白页面底色,标志的太阳光黄色强调色,以及专有的 NouvelR 显示类型面。 系统读作自信,摄影-第一汽车——在中性或大气背景上装有大型首屏汽车,平面或圆形的容器,以及一个小型的纪律调色板,每个有色元素都是故意的. 铺设网格,满腔横幅,并反复出现"配置"的表面(白牌,黄牌强调色点,中性产品界面框架),搭载大众市场经销商的语气,不进入奢侈品.

```yaml
---
version: alpha
name: Renault-design-analysis
description: |
  Renault's web presence pairs the freshly-modernised Renault diamond
  (the 2021 flat-line rhombus mark) with a stark black-and-white canvas, a
  signature Sunlight Yellow accent, and the proprietary NouvelR display
  typeface. The system reads as confident, photography-first automotive — large
  hero cars on neutral or atmospheric backdrops, square-edged or barely-rounded
  containers, and a small disciplined palette where every coloured element is
  intentional. Tile grids, full-bleed banners, and a recurring "configurator"
  surface (white card, yellow accent dots, neutral product chrome) carry the
  mass-market dealership tone without crossing into luxury.

colors:
  primary: "#ffed00"
  primary-deep: "#e6d200"
  on-primary: "#000000"
  ink: "#000000"
  body: "#222222"
  charcoal: "#333333"
  mute: "#666666"
  ash: "#8a8a8a"
  stone: "#c4c4c4"
  on-dark: "#ffffff"
  on-dark-mute: "rgba(255,255,255,0.72)"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface-card: "#ffffff"
  surface-dark: "#000000"
  surface-deep: "#111111"
  hairline: "#f2f2f2"
  hairline-strong: "#000000"
  divider-dark: "rgba(255,255,255,0.16)"
  badge-new: "#ffed00"
  link: "#0000ee"
  error: "#be6464"
  warning: "#f0ad4e"
  success: "#8dc572"
  info: "#337ab7"

typography:
  display-xl:
    fontFamily: NouvelR
    fontSize: 56px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  display-lg:
    fontFamily: NouvelR
    fontSize: 40px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  display-md:
    fontFamily: NouvelR
    fontSize: 32px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  heading-lg:
    fontFamily: NouvelR
    fontSize: 24px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  heading-md:
    fontFamily: NouvelR
    fontSize: 20px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  heading-sm:
    fontFamily: NouvelR
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  subtitle:
    fontFamily: NouvelR
    fontSize: 19.2px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: NouvelR
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: NouvelR
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-sm:
    fontFamily: NouvelR
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.57
    letterSpacing: 0
  button-lg:
    fontFamily: NouvelR
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  button-md:
    fontFamily: NouvelR
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.144px
  button-sm:
    fontFamily: NouvelR
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.13px
  caption:
    fontFamily: NouvelR
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  overline:
    fontFamily: NouvelR
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 3px
  md: 4px
  pill: 46px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: 14px 24px
    height: 48px
  button-primary-pressed:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
  button-secondary-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: 14px 24px
  button-outline-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: 13px 23px
  button-outline-light:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: 13px 23px
  button-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
    height: 36px
  button-icon-square:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    size: 40px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 12px 16px
    height: 48px
  hero-banner:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: 0
  promo-tile-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.none}"
    padding: 32px
  promo-tile-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.none}"
    padding: 32px
  promo-tile-yellow:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.none}"
    padding: 32px
  vehicle-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 0
  configurator-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 24px 0
  configurator-swatch:
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.full}"
    size: 56px
  badge-new:
    backgroundColor: "{colors.badge-new}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    height: 60px
  sub-nav-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 64px 24px
---
```
