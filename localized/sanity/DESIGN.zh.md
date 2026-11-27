# Sanity · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Sanity营销表面是围绕一个单一的高定罪想法构建的:内容平台应该看起来像一个编辑属性。主页打开到一个近黑的 `{colors.canvas}` 页面中 112px 显示标题( “ 结构功率智能 ”) , 将整个视图端口填充 `{typography.display-mega}` 专有性设置 `waldenburgNormal` 桑斯,切到 -4.48px 白色的坐落在这个黑暗的舞台上,就像墨水在印着的宽边。`{colors.brand}`) ——从不记录背景,只记录几个关键CTA和品牌点——保持页面清醒而不是宣传。

系统运行时采用两种模式,共享同一类型系统但反向布局. 暗模式(homepage,内容代理,工作室营销)是品牌语音:头条大,鲜白的身躯,深海军的板音,以及 IBM 普莱克斯·莫诺眉毛具有技术可信度。光线模式(定价)是商业声音:白色页面底色、黑色墨水、稠密 4- 水平比较表, 和同样的珊瑚红色 `{colors.brand}` 重复使用作为显示的定价等级的强调色。在两种模式之间切换中文档是页面节奏的一部分 。 Sanity 将色彩主题作为区域范围,而不是页面范围。

Two type families do all the work: `waldenburgNormal` for every running text role (display through caption), and `ibmPlexMono` reserved exclusively for technical eyebrows and small-caps labels. Display sizes range from 112px down to 38px in a continuous editorial scale; tracking tightens aggressively on display (-4.48px at 112px) and relaxes to neutral on body (16px). OpenType variants are switched on across the marketing copy (`cv01`, `cv11`, `cv12`, `cv13`, `ss07`) — characters like the single-storey `g` and rounded `t` give the headlines a humanist, slightly literary feel.

**关键特征 :**
- 暗影第一营销表面( )`{colors.canvas}` `#0b0b0b`),白色类型,并有单一珊瑚红色的强调色(.`{colors.brand}`)
- 编辑显示类型过大, 最多 112px 输入 `waldenburgNormal` 带有强烈的负追踪
- 双主题节奏:暗的首屏/地貌部分反向轻价/比较表面,两者都使用同一类型系统.
- IBM 普莱克斯·莫诺专为技术眉毛和小盖子标签保留——其他角色都是专有的圣人.
- 胶囊形主按钮( Name`{rounded.full}`用于销售带有锐切应用radi的CTA(3–6px)用于产品中演播室截图
- 4- 标价卡格,其中显示的等级通过填满表示 `{colors.ink}` 反转,不是用彩丝带
- Dense feature-comparison tables on `{colors.canvas-light}` with hairline `{colors.hairline}` row dividers — the densest typographic surface in the system


## 配色

### 品牌色与强调色
- **Coral-Red** (`{colors.brand}` — `#f36458`): The single signature accent. Reserved for the highest-priority CTA per page (one occurrence per viewport on most pages), the brand dot beside the wordmark, and brand-card surface fills on content-agent and select feature panels. Used sparingly enough that a viewer can predict where it will appear.
- **深白( Brand Deep) 语句** (`{colors.brand-deep}` — `#dd0000`:错误/破坏性变体——从未作为首屏或节强调色使用.
- **黑色** (`{colors.primary}` — `#0b0b0b`: 暗片中的默认页面底色; 光片上的主要动作填充; 光表面的默认文字颜色。 系统中使用最多的颜色在之后 `{colors.on-primary}`.

### 界面表面
- **页面底色** (`{colors.canvas}` — `#0b0b0b`: 默认暗剖背景,无暖气的近黑.
- **软画帘** (`{colors.canvas-soft}` — `#212121`: 暗片和面板表面。 feature-card-dark 和 Studio-window 模型,提供单步高架提示
- **Canvas Light** (`{colors.canvas-light}` — `#ffffff`): Primary light-mode background. Used for the entire pricing page, marketing-section-light bands, and pricing-card surface.
- **页面底色纸** (`{colors.canvas-paper}` — `#ededed`: 用于某些物体的暖灰替代光表面 hero-card 工作室页面上的瓷砖;选择在纯白之上举牌半圆,而不失去清净的阅读感觉.
- **柔软的细边线** (`{colors.hairline-soft}` — `#353535`): 1- 暗卡和对话框面板上的像素边框颜色。
- **细边线** (`{colors.hairline}` — `#ededed`): 1-轻卡上的像素边框 comparison-table 分词,和特征网规则。
- **表面蓝色 Bg** (`{colors.surface-blue-bg}` — `#afe3ff`:软蓝色的警报/info表面——系统中唯一一个色表面填充.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#0b0b0b`:头条和身体在光线表面.
- **墨水软** (`{colors.ink-soft}` — `#212121`: 轻质表面的次要文字;暗卡的容器背景颜色.
- **Graphite** (`{colors.graphite}` — `#353535`): Tertiary text and dividers in dark sections.
- **标 题** (`{colors.slate}` — `#3c4758`) / **软板** (`{colors.slate-soft}` — `#505b6c`: 酷蓝灰色中性,用于二次链接文本,并在暗色上去强调规则线.
- **静音** (`{colors.mute}` — `#797979`:中灰单色字幕颜色,脚眉.
- **灰尘** (`{colors.ash}` — `#b9b9b9`: 暗面上默认的体文字.
- **小学** (`{colors.on-primary}` — `#ffffff`: 暗面头条颜色;墨水颜色 `{colors.brand}` 和 `{colors.ink}` 满载按钮。

### 语义色
- **链接蓝色** (`{colors.link-blue}` — `#0052ef`: 光表面的内置链接颜色;标准超链接 hue.
- **链接蓝色软体** (`{colors.link-blue-soft}` — `#55beff`: 连接颜色在暗色表面.
- **成功** (`{colors.success}` — `#37cd84`:验证成功——在工作室状态胶囊形和定价比较表中的"可用"标记中使用.
- **错误** (`{colors.error}` — `#dd0000`: 需要的字段标记和错误消息.


## 字体排版

### 字体族
市场营销系统在运行 **waldenburgNormal**,ABC Walden Burn家族中一个专有的人文主义的圣人——统一中风对比,单层 `a` 可通过下列途径获取: `cv01`,略压缩的计数器,以及结构替代(`ss07`, `cv11`–`cv13`圆形终端,并软化 `g`/`y` 降世者。结果是编辑学——它比典型的SaaS sans更像当代贸易杂志。 **ibmPlexMono** 仅用于两个角色的配对:技术眉毛和小头饰。 Helvetica 出现在提取的代号数据中,但是一种倒置的动脉,而不是品牌标本。

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 112px | 400 | 1.0 | -4.48px | 页面定义首屏("定时能力智能");每页最多一个 |
| `{typography.display-xl}` | 72px | 400 | 1.05 | -2.88px | 开区编辑显示("爱人: 1M+用户...).) |
| `{typography.display-lg}` | 60px | 400 | 0.8 | 0 | 用于强调小节头的紧导显示 |
| `{typography.display-md}` | 48px | 400 | 1.08 | -1.68px | 标准部分头条、定价等级数额 |
| `{typography.display-sm}` | 38px | 400 | 1.10 | -1.14px | 子节标题, 内容代理特性标题 |
| `{typography.heading-md}` | 32px | 425 | 1.13 | -0.32px | Card titles, large list-item labels |
| `{typography.heading-sm}` | 24px | 400 | 1.10 | -0.24px | 小小的标签, feature-card 标题 |
| `{typography.subtitle}` | 18px | 400 | 1.5 | -0.18px | 首屏副拷贝,领头段落 |
| `{typography.body}` | 16px | 400 | 1.5 | 0 | 默认运行主体横跨两个主题 |
| `{typography.body-sm}` | 15px | 400 | 1.5 | -0.15px | Comparison-table 单元格, 密度中等读取副本 |
| `{typography.caption}` | 13px | 400 | 1.5 | 0 | 纸片字幕, list-item meta |
| `{typography.caption-tight}` | 13px | 500 | 1.3 | -0.13px | 紧紧的元数据, button-sm 印刷技术 |
| `{typography.meta}` | 12px | 400 | 1.5 | -0.12px | 脚注,精细印刷 |
| `{typography.mono-eyebrow}` | 13px | 400 | 1.5 | 0 | 区域眉毛英寸 IBM 普莱克斯·莫诺 |
| `{typography.mono-caps}` | 11px | 400 | 1.5 | 0 | Small-caps mono labels and footer column heads |
| `{typography.mono-micro}` | 10px | 400 | 1.3 | 0 | 标签芯片和非常精细的技术标签 |
| `{typography.button-lg}` | 16px | 500 | 1.5 | 0 | 营销 CTA 按钮 |
| `{typography.button-sm}` | 13px | 500 | 1.3 | -0.13px | 内置二次动作, 标签按钮 |
| `{typography.button-uppercase}` | 11px | 600 | 1.5 | 0 | Studio app-style toolbar tabs (uppercase) |

### 原则
- **每一层都有品牌的圣歌** 等级分出自大小,字重,和跟踪;从来不来自对比的显示家族.
- **显示大小的主动性负跟踪。** -4.48px 时 间 112px 将大标题的剪辑收紧,变成一个可以读取的单视单元,而不是一行字母。
- **Mono是一个完全的标签系统。** IBM Plex Mono 保留用于眉毛、小盖标签和技术- feel 标题。 绝不使用单机复制身体。
- **OpenType 特性将始终启用 waldenburgNormal 显示。** `cv01`, `cv11`, `cv12`, `cv13`, `ss07` 提供单层 `a`,四舍五入 `t`软 `g` ——这些是品牌声音的核心. 身体大小 放弃OpenType变体,让默认形式渲染.

### 替代字体
If `waldenburgNormal` is unavailable, **ABC Walden** (commercial) is the closest substitute. **Inter** at the same sizes works as a fallback if the OpenType-feature richness is dropped — pull `letter-spacing` 0.5px tighter at display sizes (-5.0px at 112px) to compensate for Inter's looser default tracking. Keep IBM Plex Mono unchanged — it is open-source and ships with the desired feel.


## 布局

### 间距系统
- **基地单位**: 8px,与 4px 用于内线间隔的微步。
- **托肯斯(前题)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 64px · `{spacing.section-lg}` 96px.
- Card internal padding sits at `{spacing.xl}` (32px) on marketing cards and `{spacing.md}` (16px) on Studio-window mockups. Section vertical rhythm uses `{spacing.section-lg}` (96px) between major modules — this is the constant that holds across home, studio, content-agent, and pricing pages.

### 网格与容器
- 销售页在一个中央容器内制作,封顶接近 1640px 宽屏幕上显示。首屏打字法使用整个容器宽度——显示头条时往往横跨整个内容区域,没有附带卡片。
- 定价使用 a 4- 宽屏上的一级列网格(按典型布局模式显示的自由/增长/企业/自定义),其中显示的级翻转为 `{pricing-card-featured}` 极性。在电网下方,比较表是一个横跨整个容器的非常宽的表格;单元格是 16px- 添加特性标签和每一级检查/值之间可互换。
- 内容代理使用不规则的不对称 grid: a left-side text column at ~50% width, right-side feature cards in a 2-up grid below. This breaks the otherwise-symmetric system rhythm to flag the page as a campaign rather than a product page.
- 工作室使用紧凑的砖瓦 code-window 模型,每个都装进 `{studio-window}` 样式为锐利 `{rounded.app-lg}` 转角

### 留白规则
The dark canvas does most of the visual work — generous negative space lets the editorial display headlines breathe. Sections are separated by `{spacing.section-lg}` (96px) verticals; cards inside a section use `{spacing.lg}` (24px) gaps. Padding inside marketing cards is `{spacing.xl}` (32px) — slightly more generous than the `{spacing.lg}` typical in B2B SaaS systems, giving cards an editorial-spread feel. The pricing comparison table is the deliberate exception: row padding tightens to `{spacing.md}` (16px) to fit a 30+ row matrix without overwhelming the page.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat (Dark) | `{colors.canvas}` background, no shadow, no border | Default dark-section reading surface |
| Card (Dark) | `{colors.canvas-soft}` infill on `{colors.canvas}` page, `{rounded.marketing}` corners, optional 1px `{colors.hairline-soft}` border | Feature cards, Studio-window mockups, content-agent tiles |
| Card (Light) | `{colors.canvas-light}` on `{colors.canvas-paper}` band OR `{colors.canvas-light}` with 1px `{colors.hairline}` border | Pricing cards, marketing-section-light feature tiles |
| 倒置特性 | `{colors.ink}` 打开 `{colors.canvas-light}` 页面,白文本 | 特异性定价等级——极性翻转是整个"特异性"提示 |
| 品牌表面 | `{colors.brand}` 填充( E) | 品牌卡,内容代理CTA面板, brand-dot |
| Soft Drop | Subtle `0 4px 24px rgba(0,0,0,0.08)` on light cards only | Resting-state lift on the pricing-card hero panel |

系统避免了沉重的投影. 深度主要由直肠表面阶梯(canvas →)来传递. canvas-soft → canvas-light)和通过暗光表面之间的极性翻转。两个提取的阴影值被保留给非常罕见的升降提示——大多数牌坐着冲。

### 装饰性深度
- **极性翻转像戏剧一样** Sanity最大深度提示是暗和淡两段之间的反转。眼睛读取两个相邻段(一个页面底色,一个页面底色)之间的硬边缘 canvas-light)作为强排版语句.
- **品牌卡闪光。** 单张特征卡, 填充 `{colors.brand}` 中段创建一个没有阴影或边框的视觉锚——颜色变化是深度提示.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 比较表格单元格,全宽横幅 |
| `{rounded.app-xs}` | 3px | 文本输入、文本区域、应用程序样式字段 |
| `{rounded.app-sm}` | 4px | 头级胶囊形,二级投入 |
| `{rounded.app-md}` | 5px | 工作室工具栏按钮、制表胶囊形、二次动作 |
| `{rounded.app-lg}` | 6px | 工作室窗口模型, 代码块 |
| `{rounded.marketing}` | 12px | 特色卡、定价卡、内容代理面板 |
| `{rounded.full}` | 99999px | 销售CTA、徽章、品牌点、标签芯片 |

### 图片形状
- **工作室截图** 被内置 `{rounded.app-lg}` (6px)窗口——被选作模仿本土macOS/Windows应用程序的chrome而不是卡圆,因此截图读作"真实产品".
- **内容代理插图** 已经满载, `{rounded.marketing}` 带有抽象梯度表面的面板。
- **假象/logo 锁** 伙伴乐队中是平坦的黑白字印,没有圆形,平匀的间隔跨一行.


## 组件

### 按钮

**`button-primary`** ——暗版段的营销CTA("Get Started Free").
- Background `{colors.canvas-light}`, text `{colors.ink}`, type `{typography.button-lg}`, padding `{spacing.sm}` × `{spacing.lg}`, rounded `{rounded.full}`, height 44px, with a thin `{colors.ink}` border that paints inside the white pill and reads as a confident edge against the dark canvas.

**`button-primary-on-light`** — the inverse for light-section heroes
- Background `{colors.ink}`, text `{colors.on-primary}`, identical token set otherwise.

**`button-brand`** ——为"接触销售"或高峰优先级提示而保留的罕见品牌色CTA.
- Background `{colors.brand}`, text `{colors.ink}`, type `{typography.button-lg}`, rounded `{rounded.full}`, padding `{spacing.sm}` × `{spacing.lg}`.

**`button-secondary-dark`** ——暗面的二次动作.
- Background `{colors.canvas-soft}`, text `{colors.ash}`, type `{typography.button-sm}`, rounded `{rounded.app-md}`, padding `{spacing.sm}`, height 36px, 1px `{colors.hairline-soft}` border.

**`button-ghost-dark`** 黑暗上的文本样式链接
- Background `{colors.canvas}` (transparent), text `{colors.ash}`, type `{typography.button-sm}`, rounded `{rounded.full}`.

**`button-app-tab`** ——工作室风格工具栏标签(在工作室内可见截图模型).
- Background `{colors.canvas-soft}`, text `{colors.ash}`, type `{typography.button-uppercase}` (uppercase IBM Plex Mono-feel), rounded `{rounded.app-sm}`, padding `{spacing.xs}`, height 32px.

### 导航

**`nav-bar-dark`** ——持续黑暗的顶部栏
- Background `{colors.canvas}`, height ~64px, padding `{spacing.lg}` horizontal, white text.
- 版式: 红色 `brand-dot` + `Sanity` 字标记左 + 中心主菜单(生产、解决方案、资源、客户、定价、文件) → 右组(`Sign In` 文本链接, `Book a Demo` `{button-secondary-dark}`, `Get Started Free` `{button-primary}`).
- Sticky 滚动上,没有边框分割——栏只按颜色对比下滚动的任何光线部分。

**`nav-link`** ——主菜单项目.
- Background `{colors.canvas}`, text `{colors.on-primary}`, type `{typography.button-lg}`, padding `{spacing.xs}` vertical.

### 卡片与容器

**`hero-display`** ——主页显示锁
- Background `{colors.canvas}`, text `{colors.on-primary}`, type `{typography.display-mega}`. The hero is type-only on the home page; supplementary subtitle, lead paragraph, and primary CTA stack directly below in `{spacing.lg}` increments.

**`feature-card-dark`** ——标准暗段特征卡
- Background `{colors.canvas-soft}`, text `{colors.on-primary}`, padding `{spacing.xl}`, rounded `{rounded.marketing}`, with optional 1px `{colors.hairline-soft}` border.
- Internal stack: optional `{typography.mono-eyebrow}` label → `{typography.heading-sm}` title → `{typography.body}` description → optional `{button-ghost-dark}` link.

**`feature-card-brand`** ——罕见的品牌色亮卡片.
- Background `{colors.brand}`, text `{colors.ink}`, padding `{spacing.xl}`, rounded `{rounded.marketing}`. Used at most once per page to anchor the eye.

**`feature-card-light`** 光段特性瓦
- Background `{colors.canvas-light}`, text `{colors.ink}`, padding `{spacing.xl}`, rounded `{rounded.marketing}`, 1px `{colors.hairline}` border.

**`pricing-card`** ——定价页上标准等级卡.
- Background `{colors.canvas-light}`, text `{colors.ink}`, padding `{spacing.xl}`, rounded `{rounded.marketing}`, 1px `{colors.hairline}` border.
- 内部堆栈: 级名称 (E)`{typography.heading-md}`) → `{typography.body}` − 级价(`{pricing-amount}`——初级CTA(`{button-primary-on-light}`—— 专题清单(`{typography.body-sm}` 弹丸 `{colors.success}` 检查).

**`pricing-card-featured`** ——特色层次.
- Background `{colors.ink}` (full inversion), text `{colors.on-primary}`, otherwise identical layout. The black fill is the badge — no ribbon, no border treatment.

**`pricing-amount`** 美元/期间显示
- 继承的背景,文本 `{colors.ink}` 或 `{colors.on-primary}`类型 `{typography.display-md}`.

**`comparison-table-row`** ——长篇特征比较表关于定价的行
- Background `{colors.canvas-light}`, text `{colors.ink}`, type `{typography.body-sm}`, padding `{spacing.md}`, rule `{colors.hairline}` between rows. Cells alternate: feature label (left) + per-tier value (centre, repeating).

**`studio-window`** ——被设定的工作室应用截图
- Background `{colors.canvas-soft}`, padding `{spacing.md}`, rounded `{rounded.app-lg}` (6px), 1px `{colors.hairline-soft}` border. Internal: a thin chrome bar with three coloured dots (red/yellow/green macOS-style) in the top-left, then the Studio UI screenshot.

**`brand-dot`** — the small `{colors.brand}` filled circle paired with the `Sanity` wordmark
- Background `{colors.brand}`, size 12px, rounded `{rounded.full}`. Always sits 8px to the left of the wordmark.

### 输入框与表单

**`text-input`** ——轻模式文本输入(定价形式,联系形式).
- Background `{colors.canvas-light}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.app-xs}` (3px), padding `{spacing.sm}` × `{spacing.md}`, height 44px, 1px `{colors.hairline}` border.

**`text-input-dark`** ——暗模输入变体(Studio模型,内容代理形式).
- Background `{colors.canvas}`, text `{colors.ash}`, type `{typography.body}`, rounded `{rounded.app-xs}`, padding `{spacing.sm}` × `{spacing.md}`, 1px `{colors.ink-soft}` border.

**`text-input-focused`** ——焦点状态.
- Background `{colors.canvas-light}`, text `{colors.ink}`, 0 outline + 2px `{colors.link-blue}` ring on focus.

**`textarea`** ——多线变体.
- Background `{colors.canvas}`, text `{colors.ash}`, type `{typography.body}`, rounded `{rounded.app-xs}`, padding `{spacing.xs}` × `{spacing.sm}`, 1px `{colors.ink-soft}` border.

**`badge-neutral`** ——小白丸("新","贝塔").
- Background `{colors.canvas-light}`, text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.full}`, padding `{spacing.xs}`.

**`badge-filled`** 黑小胶囊形
- Background `{colors.ink}`, text `{colors.on-primary}`, type `{typography.caption}`, rounded `{rounded.full}`.

**`alert-banner`** 软蓝信息通知
- Background `{colors.surface-blue-bg}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.app-lg}`, padding `{spacing.md}`.

### Footer

**`footer`** ——暗端表面.
- Background `{colors.canvas}`, text `{colors.on-primary}`, padding `{spacing.section}` vertical, `{spacing.lg}` horizontal.
- 版式 : 6-柱状连接网格 底条与 `brand-dot` + `Sanity` 字标记右对齐和版权/社会链接左对齐。

**`footer-eyebrow`** - 栏标题
- Background `{colors.canvas}`, text `{colors.mute}`, type `{typography.mono-caps}` (small-caps IBM Plex Mono). The mono-eyebrow at the footer is what locks in the technical-trade-journal feel.

**`footer-link`** ——链接列表项目
- Background `{colors.canvas}`, text `{colors.ash}`, type `{typography.caption}`.

### 科级单位

**`marketing-section-dark`** ——全宽的暗带.
- Background `{colors.canvas}`, text `{colors.on-primary}`, padding `{spacing.section-lg}` vertical.

**`marketing-section-light`** ——全宽光带.
- Background `{colors.canvas-light}`, text `{colors.ink}`, padding `{spacing.section-lg}` vertical.

**`marketing-section-paper`** ——暖灰色替代灯带.
- Background `{colors.canvas-paper}`, text `{colors.ink}`, padding `{spacing.section-lg}` vertical.

### 标志性组件

**极度- 滑动部分** ——最突出的部分. Sanity市场布局。 `{marketing-section-dark}` 和 `{marketing-section-light}` (或 减 减 ) `{marketing-section-paper}`硬切是系统最常用的深度提示 以及它们所推出的 电影、卷轴驱动的长篇营销

**Editorial Display + Mono Eyebrow** — the canonical headline lockup. `{typography.mono-eyebrow}` (IBM Plex Mono, 13px) sits above a 48–112px `{typography.display-md}` to `{typography.display-mega}` headline. The mono caption is what marks the system as developer-platform-aware rather than generic-marketing.

**工作室窗口模拟** - 每一个工作室的截图都刻在 `{studio-window}` 界面框架。这是系统的主要经常性视觉资产, 并带有“这是一个真正的产品,而不是一个营销图”信号。


## 设计建议与禁忌

### 建议做法
- 运行暗模式营销区( R)`{marketing-section-dark}`)作为品牌的默认声音; `{marketing-section-light}` 用于商业/比较表面(定价、集成矩阵)。
- 将每条编辑显示标题对齐 `{typography.mono-eyebrow}` 上面的标签——锁是签名.
- 准备金 `{colors.brand}` 用于每个视点一个CTA或强调色表面。颜色的功率来自稀缺。
- 使用 `{rounded.full}` 用于销售CTA和 `{rounded.app-*}` 3–6px 用于应用风格元素的角(输入, Studio 模拟) 混合两种角语言是有意的——正是它将"营销"与"产品UI"区分在了其中. Sanity'其声.
- 设置显示头条( T) (>48px)与 OpenType 变体 `cv01, cv11, cv12, cv13, ss07` 启用 —— 替代是品牌字母格式的核心。
- 使用极性翻转(Dark → 光)作为分区分隔符,而不是横向规则或背景梯度.
- 平对 brand-dot 与 `Sanity` 单词标记出现时的文字标记 >24px 大小。

### 应避免的做法
- Don't use `{colors.brand}` as a background for dark-mode body sections — it must remain a quiet accent, not a section colour.
- Don't introduce additional accent hues (purple, teal, magenta gradients). Sanity's chromatic story is monochrome plus coral-red.
- Don't apply OpenType variants to body running text — keep them on display sizes only. Mixing modes makes the page feel typographically loud.
- Don't use IBM Plex Mono for body or headline text. Mono is reserved for eyebrows, captions, and small-caps labels.
- Don't add a "Most Popular" badge to the featured pricing tier. The polarity inversion (`{pricing-card-featured}`) is the badge.
- Don't break headings into mixed-weight contrast (light + bold). Every heading is regular weight (400) — let tracking carry the silhouette.
- Don't replace the `brand-dot` with a logo glyph in the navigation. The dot + wordmark pairing is the system's primary identification mark.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 2十一 国 务 院 | 1640px | 编辑容器齐全;定价 4- 层网格宽; 比较表单行布局 |
| 十一 国 务 院 | 1440px | 集装箱稍加紧; `{typography.display-mega}` 可能下调到 96px |
| 升( 升) | 1200px | 默认桌面读取视图 |
| 微额 | 1100px | 定价 4- 电网还很平稳 4- 上但层文本密度收紧 |
| 静态 | 960px | 定价崩溃到 2 分级的列; 导航主菜单崩溃到此上面的汉堡 |
| 自动 | 768px | 区域贴载从 `{spacing.section-lg}` 改为: `{spacing.section}`; 显示大小向下 |
| 双倍 | 480px | 单栏读物; `{typography.display-mega}` 滴入数 ~64px; 定价等级堆栈 1-上;比较表转换为每一级手风琴 |
| xxxs | 376px | Footer 6-column grid collapses to 2-column; brand-dot scales to 10px |

### 触控区域
- `{button-primary}` 谓 44px 高 —— 与 WCAG AAA 触摸目标相遇。在移动时,高度会增长到 48px.
- `{button-secondary-dark}` 谓 36px 桌面上; 扩展至 44px 移动以保持目标合规。
- `{nav-link}` 收到的项目 `{spacing.sm}` 移动菜单内垂直粘贴,在不调整类型大小的情况下扩展水龙头目标.

### 窄屏布局调整
- **纳芙.** 居中桌面菜单崩溃为汉堡,打开一个覆盖表 < 960px; 右边 `{button-primary}` "开始自由"在汉堡上方保持可见.
- **首屏 谢天谢地** 电话 112px `{typography.display-mega}` 步骤下至 64px xxs; 按比例跟踪放松(-1.92px 改为 -4.48px) 保持较小的可读性 absolute 大小,请检查url=值 (帮助).
- **Pricing tier grid.** 4-up → 2-up → 1-up. The featured-tier inversion is preserved across all breakpoints.
- **Comparison table.** At xxs, the wide matrix transforms into a per-tier accordion: tap a tier name, expand its full feature list. The polarity rules (alternating row fills) carry over.
- **节极性翻转.** 在每个断点上都保留着——暗/光的卡登斯是结构化的到品牌声音,并且永远不会崩溃.

### 图片适配
- `{studio-window}` mockups preserve their `{rounded.app-lg}` framing at every breakpoint. On xxs, they switch to a single-column stack and may horizontal-scroll inside the window if the embedded UI doesn't compress.
- 首屏大气背景(当内容代理和选择特征页面上出现时)使用更紧凑的移动裁剪,因此焦点主题保持中心.
- 伙伴行文字标记重流到一个 3- 升格在sm和 2- 上到xxs,你觉得呢?


## 迭代指南

1. 一次聚焦一个组件。从 `{hero-display}`, `{button-primary}`,以及 `{nav-bar-dark}` ——它们出现在每一个暗模版的页面上,并主播品牌声音.
2. 直接引用组件名称和符号( Q)`{colors.brand}`, `{button-primary-on-light}`, `{rounded.full}`()——不解释或替代六重值。
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后。
4. 添加新的变体作为单独的 `components:` 条目( 4)`-dark`, `-on-light`, `-featured`永远不要埋在传言里
5. 默认复制到 `{typography.body}`准备金 `{typography.mono-eyebrow}` 和 `{typography.mono-caps}` 资源 IBM 仅标有Plex Mono标签; 绝对不要使用单曲头条 。
6. 保留 `{colors.brand}` 稀缺的——最多一个品牌的CTA或每个视点的表面。如果一个区域已经有一个 `{button-brand}` 行动,次要行动 `{button-secondary-dark}`.
7. When introducing a new section, start by deciding its polarity (`{marketing-section-dark}` vs light vs paper). The polarity choice drives every other token decision in the section.

## 设计词元原值

An inspired interpretation of Sanity's design language — a dark-first, content-platform marketing system that pairs an oversized editorial display sans (waldenburgNormal) with IBM Plex Mono for technical eyebrows. The site reads like a software-engineering trade journal: near-black `{colors.canvas}` reading bands, white text, a single signature coral-red accent (`{colors.brand}`) reserved for the highest-priority action, and a deliberate light-theme inversion on commercial pages (pricing) where dense feature tables demand maximum legibility. Display sizes climb to 112px with tightly-cut negative tracking; rounded pills coexist with sharply-cut 3–6px application-grade radii from the Studio screenshots, signalling the dual identity of "marketing brand" and "developer tool.

```yaml
---
version: alpha
name: Sanity-design-analysis
description: An inspired interpretation of Sanity's design language — a dark-first, content-platform marketing system that pairs an oversized editorial display sans (waldenburgNormal) with IBM Plex Mono for technical eyebrows. The site reads like a software-engineering trade journal: near-black `{colors.canvas}` reading bands, white text, a single signature coral-red accent (`{colors.brand}`) reserved for the highest-priority action, and a deliberate light-theme inversion on commercial pages (pricing) where dense feature tables demand maximum legibility. Display sizes climb to 112px with tightly-cut negative tracking; rounded pills coexist with sharply-cut 3–6px application-grade radii from the Studio screenshots, signalling the dual identity of "marketing brand" and "developer tool."

colors:
  primary: "#0b0b0b"
  on-primary: "#ffffff"
  brand: "#f36458"
  brand-deep: "#dd0000"
  ink: "#0b0b0b"
  ink-soft: "#212121"
  graphite: "#353535"
  slate: "#3c4758"
  slate-soft: "#505b6c"
  mute: "#797979"
  ash: "#b9b9b9"
  hairline: "#ededed"
  hairline-soft: "#353535"
  canvas: "#0b0b0b"
  canvas-soft: "#212121"
  canvas-light: "#ffffff"
  canvas-paper: "#ededed"
  on-canvas-light: "#0b0b0b"
  link-blue: "#0052ef"
  link-blue-soft: "#55beff"
  surface-blue-bg: "#afe3ff"
  success: "#37cd84"
  error: "#dd0000"

typography:
  display-mega:
    fontFamily: waldenburgNormal
    fontSize: 112px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -4.48px
    fontFeature: cv01, cv11, cv12, cv13, ss07
  display-xl:
    fontFamily: waldenburgNormal
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -2.88px
  display-lg:
    fontFamily: waldenburgNormal
    fontSize: 60px
    fontWeight: 400
    lineHeight: 0.8
  display-md:
    fontFamily: waldenburgNormal
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -1.68px
  display-sm:
    fontFamily: waldenburgNormal
    fontSize: 38px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -1.14px
  heading-md:
    fontFamily: waldenburgNormal
    fontSize: 32px
    fontWeight: 425
    lineHeight: 1.13
    letterSpacing: -0.32px
  heading-sm:
    fontFamily: waldenburgNormal
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.24px
  subtitle:
    fontFamily: waldenburgNormal
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.18px
  body:
    fontFamily: waldenburgNormal
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: waldenburgNormal
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.15px
  caption:
    fontFamily: waldenburgNormal
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  caption-tight:
    fontFamily: waldenburgNormal
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.13px
  meta:
    fontFamily: waldenburgNormal
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.12px
  mono-eyebrow:
    fontFamily: ibmPlexMono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  mono-caps:
    fontFamily: ibmPlexMono
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
  mono-micro:
    fontFamily: ibmPlexMono
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.3
  button-lg:
    fontFamily: waldenburgNormal
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
  button-sm:
    fontFamily: waldenburgNormal
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.13px
  button-uppercase:
    fontFamily: waldenburgNormal
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.5

rounded:
  none: 0px
  app-xs: 3px
  app-sm: 4px
  app-md: 5px
  app-lg: 6px
  marketing: 12px
  full: 99999px

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
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 44px
  button-primary-on-light:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 44px
  button-brand:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 44px
  button-secondary-dark:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ash}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.app-md}"
    padding: 12px
    height: 36px
  button-ghost-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ash}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 36px
  button-app-tab:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ash}"
    typography: "{typography.button-uppercase}"
    rounded: "{rounded.app-sm}"
    padding: 8px
    height: 32px
  nav-bar-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    height: 64px
    padding: 24px
  nav-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    padding: 8px
  hero-display:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-mega}"
    padding: 48px
  marketing-section-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    padding: 96px
  marketing-section-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 96px
  marketing-section-paper:
    backgroundColor: "{colors.canvas-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 96px
  feature-card-dark:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.marketing}"
    padding: 32px
  feature-card-brand:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.marketing}"
    padding: 32px
  feature-card-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.marketing}"
    padding: 32px
  pricing-card:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.marketing}"
    padding: 32px
  pricing-card-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.marketing}"
    padding: 32px
  pricing-amount:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
  comparison-table-row:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: 16px
  studio-window:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.app-lg}"
    padding: 16px
  text-input:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.app-xs}"
    padding: 12px
    height: 44px
  text-input-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ash}"
    typography: "{typography.body}"
    rounded: "{rounded.app-xs}"
    padding: 12px
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.app-xs}"
    padding: 12px
  textarea:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ash}"
    typography: "{typography.body}"
    rounded: "{rounded.app-xs}"
    padding: 12px
  badge-neutral:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 8px
  badge-filled:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 8px
  brand-dot:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 12px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    padding: 64px
  footer-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ash}"
    typography: "{typography.caption}"
  footer-eyebrow:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.mono-caps}"
  alert-banner:
    backgroundColor: "{colors.surface-blue-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.app-lg}"
    padding: 16px
---
```
