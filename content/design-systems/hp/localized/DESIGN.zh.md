# HP · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

HP reads like a long-running consumer-electronics catalog crossed with an enterprise-software product page. The whole system sits on **pure white** (`{colors.canvas}` — `#ffffff`) with thin gray panels (`{colors.cloud}` / `{colors.fog}`) for alternating section bands. There is one chromatic action color — **HP Electric Blue** (`{colors.primary}` — `#024ad8`) — and one ink color (`{colors.ink}` — `#1a1a1a`); together they do ninety percent of the work. Type is a single family across every surface: **Forma DJR Micro**, HP's bespoke geometric grotesque, set at weight 500 for headlines and 400 for body — clean, neutral, slightly mechanical.

签名手势是 **角蓝雪佛兰** - 锋利 0- 光线鞭子源于 HP wordmark的对平行鞭打——主页首屏,笔记本电脑页首屏,以及打印机定价页。它们出现在主标语卡的左右边缘,在产品摄影后层。除这些装饰鞭打外,其他表面都带有直线性 **软 8–16px 角点** 牌和一张牌 4px 转角按键。

系统分为三种语音模式:a **白色商业体** 产品浏览(卡片、类别图标、定价等级);a **暗海军板** (`{colors.ink}` ),收尾的"我们能帮什么忙?"页脚前奏曲,页脚;和a **轻雾带** (`{colors.cloud}` / `{colors.fog}`),用于比较条和FAQ手风琴等功能部分. 蓝色强调色只出现在填充的CTA,链接文本,chevron装饰,以及亮点层的主动价格戳上——从不作为节背景.

**关键特征 :**
- Pure white canvas (`{colors.canvas}`) with deep ink (`{colors.ink}`) running every body surface; light fog bands (`{colors.cloud}`, `{colors.fog}`) alternate for section rhythm
- HP 电色蓝色( E)`{colors.primary}`)是单色的 CTA 填充和链接颜色;每个视图最多出现两次
- 发言 Forma DJR Micro 横跨每个表面——显示、身体、按钮、标题——以重量计 400 / 500 / 600 / 700
- Cards round at `{rounded.xl}` (16px) for product/pricing tiles; buttons sit at `{rounded.md}` (4px) with capitalize labels
- 几何蓝色切面( 3)`{colors.primary}` 矩形切换到 45°) 框首屏摄影和强化词标记
- Dark-navy 板块( 4)`{colors.ink}`)关闭每一页节奏——证音乐队,"我们怎样才能帮助?"序曲,以及脚步
- Section rhythm: utility-strip → top nav → white body → cloud-band → ink slab → cloud-band → ink footer


## 配色

> **No Interaction sub-section.** Hover colors are silently filtered. Allowed sub-sections: Brand & Accent, Surface, Text, Semantic.

### 品牌色与强调色
- **HP 电蓝色** (`{colors.primary}` — `#024ad8`:系统单调信号——主CTA填充,链接颜色, chevron-decoration 填充, 活动 sub-nav 指标。
- **亮蓝色** (`{colors.primary-bright}` — `#296ef9`:一种在暗片内使用的略轻的变体(A.testimonial-card 按钮,暗带CTA链接),其中深蓝色会泥巴化.
- **深海军** (`{colors.primary-deep}` — `#0e3191`:按下状态表示主CTA和访问的-链接颜色.
- **软蓝色** (`{colors.primary-soft}` — `#c9e0fc`): pale-blue 客户-故事卡片和选择芯片内表面使用。

### 界面表面
- **页面底色** (`{colors.canvas}` — `#ffffff`: 通用页面背景. 白色,完全不透明.
- **纸张** (`{colors.paper}` — `#ffffff`:卡片表面——与页面底色一样白色,有细边线边框或阴影提供升降机.
- **云门** (`{colors.cloud}` — `#f7f7f7`:最浅灰色的段带,用于交替行间背景和产品版卡片组.
- **雾** (`{colors.fog}` — `#e8e8e8`:一种稍暗的灰色表面带,用于FAQ外板和"Trending笔记本电脑"头条条.
- **钢** (`{colors.steel}` — `#c2c2c2`: 用于重点更强的概述元素(焦点状态,主动过滤器)的细边线边框.
- **Bloom Coral / Bloom Rose** (`{colors.bloom-coral}` / `{colors.bloom-rose}` — `#ff5050`, `#f9d4d2`): the "Get 25% off" sale-tag chip + soft pink lifestyle accent on the sale hero.
- **风暴雾/海/深** (`{colors.storm-mist}`, `{colors.storm-sea}`, `{colors.storm-deep}` — `#8ebdce`, `#7fadbe`, `#356373`:为打印机-图案图案背景预留的构造暴风声,以及支持的图案性强调色.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#1a1a1a`:白色表面的通用文本颜色——头条,体,按钮标签,导航.
- **墨水深处** (`{colors.ink-deep}` — `#000000`: 纯黑色用于字签和 1px 发条上打着警徽图案
- **墨水软** (`{colors.ink-soft}` — `#292929`: 内部使用的备用近黑 dark-navy 板块作为微妙的文字转变.
- **墨水上( O)** (`{colors.on-ink}` — `#ffffff`: 头条和正文中使用的纯白色 dark-navy 板块
- **木炭矿** (`{colors.charcoal}` — `#3d3d3d`: 白色表面的哑巴色体——二级描述, fine-print 免责声明。
- **Graphite** (`{colors.graphite}` — `#636363`): smaller-print color, used for legal lines and timestamp metadata.

### 语义色
- **布鲁姆深** (`{colors.bloom-deep}` — `#b3262b`) + **布鲁姆葡萄酒** (`{colors.bloom-wine}` — `#5a1313`:错误和折角色。深砖根据位置来读作“出售”或“破坏性”。
- **风暴深层** (`{colors.storm-deep}` — `#356373`:用作中性状态强调色(如打印机-平面图级"Versatile"级颜色).


## 字体排版

### 字体族

声音是 **单身家庭**: Forma DJR Micro (HP几何怪异,倒置 Arial)横跨每个表面——显示,身体,按钮,标题. Forma DJR Micro 是一种宽的,略圆形的杂耍,设计时光学尺寸小,在UI-色度上可辨认。 HP 以字重运行它 400 身体,为 500 显示头条, 600/700 用于加亮和按钮标签。

The 16/14/12-px caption tier carries the catalog metadata — model numbers, spec rows, fine print — at weight 400 with a 1.4–1.5 line-height. Button labels lift to weight 600/700 with positive 0.5–1.1px letter-spacing and uppercase transform — the only place the system tracks letters.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 72px | 500 | 1.0 | 0 | 首屏头条(主页,笔记本电脑枢纽) |
| `{typography.display-xl}` | 56px | 500 | 1.0 | 0 | 登陆页上的片段头条 |
| `{typography.display-lg}` | 44px | 500 | 1.0 | 0 | 商店网页上的小节头条 |
| `{typography.display-md}` | 32px | 500 | 1.0 | 0 | 宣传条形头条, FAQ 区头条 |
| `{typography.display-sm}` | 24px | 500 | 1.17 | 0 | 牌号, pricing-tier 名称 |
| `{typography.display-xs}` | 20px | 500 | 1.0 | 0 | 内置列表头, 手风琴标签 |
| `{typography.body-lg}` | 18px | 400 | 1.33 | 0 | 引言段落 |
| `{typography.body-md}` | 16px | 400 | 1.38 | 0 | 默认正文 |
| `{typography.body-emphasis}` | 16px | 500 | 1.38 | 0 | 粗体运行复制 |
| `{typography.caption-md}` | 14px | 400 | 1.5 | 0 | 光谱、元数据、标题 |
| `{typography.caption-bold}` | 14px | 700 | 1.3 | 0 | 销售标签、卡片上突出内容 |
| `{typography.caption-sm}` | 12px | 400 | 1.33 | 0 | 脚注、法律行 |
| `{typography.link-md}` | 16px | 500 | 1.38 | 0 | 内在链接强调 |
| `{typography.button-md}` | 14px | 600 | 1.4 | 0.7px | Primary/secondary button labels (uppercase) |
| `{typography.button-sm}` | 12.6px | 700 | 1.0 | 0.126px | 紧单元格中的紧凑按钮标签 |
| `{typography.price-md}` | 24px | 500 | 1.17 | 0 | 分级和产品价格邮票 |

### 原则

The typographic decision worth flagging: HP runs **weight 500 for every display size**, including the largest 72px hero headline. Most editorial systems jump to 600/700 at hero scale; HP doesn't. The result feels open and approachable rather than commanding — appropriate for a brand that sells across consumer, SMB, and enterprise audiences in the same catalog.

Forma DJR Micro's rounded-grotesque shapes do most of the warmth. There's no italic in the system except inside legal disclaimers; emphasis is carried by weight (500 → body-emphasis, 700 → caption-bold) instead.

### 替代字体

Forma DJR Micro is proprietary (Commercial Type / Mark Caneso). Closest open-source substitutes:
- **Inter** 重量 400 / 500 / 600 / 700 - 略小于 Forma DJR Micro; 颠倒 font-size 由 ~3% 补偿
- **曼罗普** 重量 400 / 500 / 600 / 700 ——比例更近,曲线更温和;直接使用,不进行度量调整.
- **Roboto** 重量 400 / 500 / 700 ——奉承性格;作为最后的退缩性格.

交换时, 设置正文 line-height 改为: 1.4 显示 line-height 改为: 1.0 明确—— Forma DJR Micro line-height 数字很紧,大多数代用词默认松散。


## 布局

### 间距系统

- **基地单位**: 8px。 更小的半步步数 。 4px。比例表很温和——大多数纸片铺设土地位于 16px 或 24px; 节间距 80px.
- **托肯斯(前题)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.section}` 80px
- **Section padding**: `{spacing.section}` (80px) vertical between major bands on desktop; collapses to ~48px on mobile.
- **Card internal padding**: `{spacing.xl}` (24px) for product cards; `{spacing.xxl}` (32px) for promo strips and feature cards; `{spacing.md}` (16px) for compact article tiles.
- **Gutter**: `{spacing.xl}` (24px) between grid columns at desktop; `{spacing.md}` (16px) on tablet/mobile.

电话 80px 节间隙是通用节奏常数——它出现在每个主页的乐队之间,在主角和打印机-计划页的比较表之间,以及在笔记本电脑-商店页的功能行之间.

### 网格与容器

- **桌面 max-width**: 1366px 含有全血色的扫描片区域背景的内容容器。
- **首屏们**:单张全宽照片卡(主页和笔记本hub首屏),头条上盖位置为左上或右上.
- **产品家庭网格**: 4 列数 >1200px, 3 时 间 1024–1199px, 2 时 间 768–1023px, 1 下级 768px.
- **定价等级**: 4 列数 >1024px, 2x2 网格 : 768–1023px,下方单柱手风琴 768px.
- **Footer**: 5-column link grid at >1024px, collapsing to 2-column then accordion on mobile.

### 留白规则

Whitespace is **commercial-clean** — generous around hero photography, tight around catalog spec rows. Product cards leave breathing room above and below the photo (≥32px) so the laptop or printer reads as a hero shot rather than a thumbnail. The fine-print disclaimer regions (legal, footnote rows) tighten line-height to 1.3 and shrink type to 11–12px so the bulk of fine print stays compact.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | No border, no shadow. | Section bands (white, cloud, fog), full-bleed photo heroes |
| 1 —— 细边线 | 1px 固态 `{colors.hairline}` (`#e8e8e8`)边际,无阴. | 外观上的按钮, comparison-table 电池,FAQ手风琴外形 |
| 2 - 软举起 | `0 2px 8px rgba(26, 26, 26, 0.08)`. | 产品卡, pricing-tier 列,客户-楼层牌 |
| 3 - 浮动的摩达尔 | `0 8px 24px rgba(26, 26, 26, 0.12)`. | 添加到纸卡抽屉、移动导航表、图像缩放模式 |

该系统大多是平坦的——深度通过下列方式传达: **颜色对比** 软升级是目录的工作马——每个产品瓦片和定价栏都得到它;其他的都得不到。移动式浮点数很少,而且保留用于瞬态叠加。

### 装饰性深度

The system's most distinctive depth gesture is the **HP blue chevron pair** — two angular `{colors.primary}` slashes (no radius, no shadow) that sit on the left and right of the homepage hero card and the laptop-shop hero. They're not decorative noise; they're a literal echo of the HP wordmark's two parallel slashes, scaled up to architectural size. Treat them as a brand artifact, not a generic geometric flourish.

内部主页和笔记本电脑厂网页框产品图像上的摄影 `{rounded.xl}` (16px(软体容器) 1px 发条 生活方式摄影(证词, "How How HP 工作为X")坐满了血 dark-navy 板无圆.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 首屏雪佛兰装饰,全血画首屏,马奎条 |
| `{rounded.xs}` | 2px | 二次芯片背景,销售-塔格胶囊形 |
| `{rounded.sm}` | 3px | 默认二次CTA半径(小触觉区) |
| `{rounded.md}` | 4px | Primary buttons, secondary buttons, text inputs |
| `{rounded.lg}` | 8px | 徽章药、类漫画卡、FAQ排装箱 |
| `{rounded.xl}` | 16px | 产品卡、定价等级、客户-楼层瓦片、相框 |
| `{rounded.pill}` | 9999px | 类别 sub-nav 选项卡, search-pill 输入, 过滤芯片 |

该系统保持明确的两级哲学: **按钮保持锐度** (4px,几乎直线),而 **纸牌和相片框保持软** (16px)这个分割是视觉特征——尖锐的交互元素对较软的容器表面.

### 图片形状

Hero photography sits in `{rounded.xl}` (16px) frames with no border. Product family thumbnails inside the laptop-grid are 1:1 (square) on a `{colors.canvas}` background, padded so the laptop is shown at ~70% of the frame. Customer-story photography uses 16:9 inside the same `{rounded.xl}` frame. There are no full-bleed circular avatars; testimonial avatars are 4px-rounded squares.


## 组件

> **No hover states documented.** Every component spec below documents only Default and Active/Pressed states. Variants live as separate front-matter entries.

### 按钮

**`button-primary`** 孤独 HP 电色蓝CTA
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}` (uppercase, 0.7px tracking), padding `{spacing.sm} {spacing.xl}` (12 × 24), height 44px, rounded `{rounded.md}`
- Pressed state `button-primary-pressed` — background `{colors.primary-deep}`, same text
- 已禁用状态 `button-primary-disabled` ——背景 `{colors.steel}`白文本时
- 用于:"买现在","现在","买现在","买打印机",主表格提交

**`button-ink`** ——黑色填充CTA(CTA)
- Background `{colors.ink}`, text `{colors.on-primary}`, padding `{spacing.sm} {spacing.xl}`, height 44px, rounded `{rounded.md}`, type `{typography.button-md}`
- 用于: 暗影上“ 买现在” , 次要主动作, 蓝色会与图像冲突

**`button-outline`** ——蓝文本概述的CTA
- Background `{colors.canvas}`, text `{colors.primary}`, 1px `{colors.primary}` border, padding `{spacing.sm} {spacing.xl}`, height 44px, rounded `{rounded.md}`
- Used for: "Compare", "Customize", "Learn more" — secondary actions on white surfaces

**`button-outline-ink`** ——黑文本概述的CTA
- Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.ink}` border, padding `{spacing.sm} {spacing.xl}`, height 44px, rounded `{rounded.md}`
- 用于:产品家庭卡网格内置的"View"按钮——中性对蓝主电源

**`button-text-link`** ——内含蓝色链接与下划线
- Background `{colors.canvas}`, text `{colors.primary}`, type `{typography.link-md}`, padding `{spacing.xxs} 0`
- 用于:"见细节","多读"内卡和免责行

### 卡片与容器

**`card-product`** ——工作马产品瓦片.
- Background `{colors.canvas}`, rounded `{rounded.xl}` (16px), padding `{spacing.xl}` (24px), Soft Lift shadow
- Layout: hero photo (1:1 ratio) on top, title in `{typography.display-xs}`, spec rows in `{typography.caption-md}`, price in `{typography.price-md}`, CTA pinned to bottom
- 用于:笔记本电脑目录卡,桌面目录卡

**`card-product-feature`** ——带照片+副本的全排特征卡
- Background `{colors.cloud}`, rounded `{rounded.xl}`, padding `{spacing.xxl}` (32px)
- Layout: photo on the left (50% width), copy on the right with section eyebrow + title + body + CTA pair
- Used for: "Trending laptops" feature rows, "Shop these must haves"

**`card-pricing-tier`** + **`card-pricing-tier-featured`**
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xl}`, Soft Lift shadow
- 分级名称在 `{typography.display-sm}`月价单位 `{typography.display-md}` 配合 `{typography.caption-md}` cadence,页数标题,完整特性列表,主 CTA
- 特级载体 `{colors.primary}` 标价加a的文本强调色 `{colors.primary}` 薄的顶边框, 而不是彩色卡片背景 —— 从未倒转为暗色 。

**`card-customer-story`** ——三升证瓦.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.md}` (16px), Soft Lift shadow
- 16:9 照片在顶部 `{rounded.xl}` 框中,引文节选 `{typography.body-md}`,在底部的属性行
- 用于"看我们的顾客怎么说"主页部分

**`card-article-tile`** 4号线"最后从... HP" 瓦片
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.md}`, Soft Lift shadow
- 16:9 上方的缩略图, 日期眉毛 `{typography.caption-sm}`标题 `{typography.body-emphasis}`,"多读"链接

**`card-category-icon`** ——主页"我们的产品"一行中的小图标和标签卡
- Background `{colors.canvas}`, rounded `{rounded.lg}` (8px), padding `{spacing.md}`
- 48px 图标,标签在 `{typography.body-emphasis}` 下级
- 用于: 笔记本电脑、桌面、打印机、计算机工具、附属设备、企业解决方案

**`hero-promo-card`** ——主页首屏卡带雪佛龙装饰品.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xxl}` (32px)
- 摄影占左半;复制块(眉眉+头条+价格印章+CTA对)占右半.
- 被击落 `chevron-decoration` 左边和右边的卡片边框外的蓝色鞭子

**`promo-strip-dark`** ——内含的暗海军宣传片块.
- Background `{colors.ink}`, text `{colors.on-ink}`, rounded `{rounded.xl}`, padding `{spacing.xxl} 48px`
- 曾用于:"工期何时开始妨碍工期?"中篇宣传,SMB证材板

### 输入框与表单

**`text-input`** + **`text-input-focused`**
- Background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 44px
- 1px `{colors.steel}` border in default; gains 1px `{colors.ink}` border on focus (no halo)

**`text-input-search`** ——在顶端导航中进行胶囊形搜索.
- Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 40px, 1px `{colors.steel}` border, magnifying-glass icon at right

**`badge-pill-ink`** ——填充标签胶囊形.
- Background `{colors.ink}`, text `{colors.on-primary}`, rounded `{rounded.lg}`, padding 6px 12px, type `{typography.body-md}`
- 产品标题旁边的内含线,以标记“新”或有特色的指标

**`badge-pill-outline`** - 概述的标签药
- Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.ink}` border, rounded `{rounded.lg}`, padding 6px 12px

**`badge-sale-coral`** ——销售价格戳.
- Background `{colors.bloom-coral}`, text `{colors.on-primary}`, rounded `{rounded.sm}`, padding `{spacing.xxs} {spacing.xs}`, type `{typography.caption-bold}`
- 用于:"省下$.200", "25% 关闭首屏宣传卡上的覆盖标签

### 导航

**`utility-strip`** ——页顶的公用栏
- Background `{colors.ink}`, text `{colors.on-primary}`, height 36px, padding 0 {spacing.xl}, type `{typography.caption-md}`
- 控股:国家/地方采摘者,"为企业/为家庭"切换,"签入"链接,推车链接

**`nav-bar-top`** – 桌面顶端导航( 位于公用设备条下方)
- Background `{colors.canvas}`, height 64px, padding 0 32px
- 版式 : HP 字标记左 ~ 中 类列表 (Laptops / 桌面 / 打印机 / 附属设备 / 解决方案 / 支持) ~ 右槽带有搜索字段, 签名链接, 墨盒图标
- 1px `{colors.hairline}` 底边框将导航与页面分隔开

**`nav-link`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.xs} {spacing.md}`
- Active page draws a 2px `{colors.primary}` underline below the text baseline

**顶部导航( 移动)**
- 高度相同, 汉堡图标取代中间分类列表, 搜索和墨盒保持可见
- 抽屉作为全扫描表扩展,其中 `{typography.body-lg}` 链接列表和 a sticky 底部的签名 CTA

**`category-tab`** + **`category-tab-active`** - 胶囊形 sub-nav
- Default: background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-emphasis}`, rounded `{rounded.pill}`, padding `{spacing.xs} {spacing.lg}`
- 活动:背景 `{colors.ink}`文本中,请输入 `{colors.on-primary}`,同为圆形
- Used on the laptop-shop page for "All / Trending / On Sale" filtering, and on the homepage "How can we help?" closing band

### 标志性组件

**`chevron-decoration`** ——几何蓝色斜线摩蒂夫
- Background `{colors.primary}`, rounded `{rounded.none}`, no shadow
- Renders as a sharp parallelogram cut at ~60° angle, sized to the height of the hero card it flanks
- 保留首屏乐队和满页横幅——从不装饰卡片中的噪声

**`faq-row`** ——打印机上的手风琴排-计划FAQ
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.lg} {spacing.xl}`, type `{typography.body-emphasis}`
- 1px `{colors.hairline}` divider between rows; chevron-down icon on the right collapsed, chevron-up when expanded
- 体答在同一个行容器内 `{typography.body-md}` 扩展后

**`help-band-dark`** ——收尾曲"我们能帮什么忙?"序曲乐队.
- Background `{colors.ink}`, text `{colors.on-primary}`, padding 64px {spacing.xl}
- Layout: large lifestyle photograph as the band background (low-opacity) with chip-style category tabs centered: Browse Topics / Live Chat / Contact / Diagnose / Order Status

**`footer-dark`**
- Background `{colors.ink}`, text `{colors.on-primary}`, type `{typography.body-md}`, padding 64px {spacing.xl}
- 5- 柱式链接网格( Company / Shop / 支持 / 资源 / 连接) `{typography.body-emphasis}` 标题和 `{typography.caption-md}` 链接行
- 底条上标有社会图标、语言选用器和法律线条 `{typography.caption-sm}` 哑巴到 `{colors.steel}`


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` 用于初级CTA,链接颜色,以及 `chevron-decoration` 动机——每个视图最多两次
- 设置每个标题 Forma DJR Micro 字重 500 配合 line-height 1.0 ——抵制冲撞重心的冲动,以首屏为尺度.
- Use `{rounded.xl}` (16px) for cards and photo frames; `{rounded.md}` (4px) for buttons and inputs — keep the two-tier split sharp
- 白双倍 `{colors.canvas}` 带状带 `{colors.cloud}` (`#f7f7f7`交替带;让灰色做呼吸
- 关闭每页节奏的 a dark-navy `{colors.ink}` 板块——"我们能帮什么忙?"序曲+脚步
- Set button labels in uppercase with `{typography.button-md}` (0.7px tracking) — the only place the system tracks letters
- 仅对产品卡和定价级使用软提升阴影——保留平面段幅
- 内置框架产品摄影 `{rounded.xl}` 容器; 从未使用全血 circular 口罩

### 应避免的做法
- Don't introduce secondary saturated colors outside `{colors.primary}` family + the `bloom-coral` sale-tag and `storm` printer-plan accents
- Don't apply heavy material shadows — depth is via color contrast (cloud vs. white) and Soft Lift only
- Don't round buttons above `{rounded.md}` (4px); a soft 8px+ button reads as a different brand
- Don't run Forma DJR Micro below 12px — small caption at 11px is the floor
- Don't use the chevron decoration as inline noise; it is a hero-only architectural element tied to the wordmark
- Don't drop ink text opacity to create hierarchy — switch surface or shift to `{colors.charcoal}` / `{colors.graphite}` instead
- Don't replace the HP wordmark with a generic sans lockup; the wordmark is a custom mark with its own ratio


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 480px | 单柱堆栈; 汉堡导航; 部分垫装滴到 ~48px; 首屏( 首屏) serif 比额表至 ~36px |
| 移动全长 | 480–767px | 相同的列数; 首屏比例表到 ~44px; 定价等级垂直堆叠 |
| 平板 | 768–1023px | 2- 柱式产品网格;定价 2x2; 导航仍然为全文标签 |
| 桌面 | 1024–1279px | 3- 柱式产品网格; 4- 列定价;全导航 |
| 桌面全长 | ≥ 1280px | 4- 柱式产品网格; 1366px 内容 max-width 带满血的带子 |

### 触控区域

Every interactive element clears 44×44px on mobile. `button-primary` at 44px height + 24px horizontal padding meets WCAG-AAA touch target. `category-tab` at 8px 20px padding bumps to 12px 24px on touch screens. Nav-link tap areas extend invisibly beyond the text run to the full 44px row height. Sticky cart/sign-in icons in the top nav use 44×44 invisible hit boxes around their visible 24×24 glyph.

### 窄屏布局调整

- **工具条**: 在每个断点上保持可见; 滴下会倒塌为下面的单个“ 账户” 图标 768px
- **顶端导航**: 中间类别列表崩溃为下面的汉堡抽屉 1024px; 右侧搜索+签名+墨盒保持可见
- **首屏们**: 在每个断点上保持单列; 切夫龙装饰缩到 ~60% 平板电脑大小,移动时完全消失
- **产品家庭网格**: 4 → 3 → 2 → 1 列作为断点缩水; 纸牌保存 `{rounded.xl}` 角的大小都一样
- **定价比较表**: 4- 桌面崩溃时的列网格 2x2 牌匾上,然后在移动时堆放到单个手风琴式的牌
- **Footer**: 5-column link grid → 2-column tablet → single-column accordion on mobile; HP wordmark stays flush left

### 图片适配

Hero photography uses `{rounded.xl}` containers at every breakpoint. The chevron decorations vanish on mobile; the underlying photo card centers in the viewport. Lifestyle photography in the testimonial and "how-can-we-help" bands maintains 16:9 ratio with horizontal cropping rather than letterboxing on mobile. There are no art-direction crop swaps between desktop and mobile — the same image is used at every size.


## 迭代指南

1. 一次集中一个组件; 拒绝在一次通过中重构整个部分
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{typography.display-xxl}`, `{rounded.xl}`, `card-product`)——在旁白中不要对六氯代苯/px作解释性解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 自动警告旗标问题
4. 添加新的变体作为单独的组件条目( Q)`-pressed`, `-disabled`, `-focused`; 决不将状态埋藏在传教士内部
5. 默认正文为 `{typography.body-md}`; 联系范围 `{typography.body-emphasis}` 用于粗体运行; 保持显示大小以显示真实标题角色
6. Keep `{colors.primary}` scarce — at most two flame elements per viewport (one CTA + one chevron decoration). Three flame items in one viewport is over-saturation
7. When introducing a new section band, choose from `{colors.canvas}` / `{colors.cloud}` / `{colors.fog}` / `{colors.ink}` — six pre-defined surface modes is the entire surface vocabulary

## 设计词元原值

An inspired interpretation of HP's design language — a white-paper enterprise-consumer system anchored by HP Electric Blue (`#024ad8`) as the lone signal CTA, near-black ink (`#1a1a1a`) for headlines, geometric Forma-DJR sans throughout, and angular blue-chevron decorations that nod to the HP wordmark's slashes. Cards round at 8–16px, photos sit in soft 16px frames, and dark navy slabs anchor the customer-story and "how can we help" closing bands.

```yaml
---
version: alpha
name: HP-design-analysis
description: An inspired interpretation of HP's design language — a white-paper enterprise-consumer system anchored by HP Electric Blue (`#024ad8`) as the lone signal CTA, near-black ink (`#1a1a1a`) for headlines, geometric Forma-DJR sans throughout, and angular blue-chevron decorations that nod to the HP wordmark's slashes. Cards round at 8–16px, photos sit in soft 16px frames, and dark navy slabs anchor the customer-story and "how can we help" closing bands.

colors:
  primary: "#024ad8"
  primary-bright: "#296ef9"
  primary-deep: "#0e3191"
  primary-soft: "#c9e0fc"
  on-primary: "#ffffff"
  ink: "#1a1a1a"
  ink-deep: "#000000"
  ink-soft: "#292929"
  on-ink: "#ffffff"
  canvas: "#ffffff"
  paper: "#ffffff"
  cloud: "#f7f7f7"
  fog: "#e8e8e8"
  steel: "#c2c2c2"
  graphite: "#636363"
  charcoal: "#3d3d3d"
  hairline: "#e8e8e8"
  hairline-strong: "#c2c2c2"
  link: "#024ad8"
  link-pressed: "#0e3191"
  bloom-coral: "#ff5050"
  bloom-rose: "#f9d4d2"
  bloom-deep: "#b3262b"
  bloom-wine: "#5a1313"
  storm-mist: "#8ebdce"
  storm-sea: "#7fadbe"
  storm-deep: "#356373"
  error: "#b3262b"

typography:
  display-xxl:
    fontFamily: Forma DJR Micro
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  display-xl:
    fontFamily: Forma DJR Micro
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  display-lg:
    fontFamily: Forma DJR Micro
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  display-md:
    fontFamily: Forma DJR Micro
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  display-sm:
    fontFamily: Forma DJR Micro
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.17
    letterSpacing: 0
  display-xs:
    fontFamily: Forma DJR Micro
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  body-lg:
    fontFamily: Forma DJR Micro
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  body-md:
    fontFamily: Forma DJR Micro
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0
  body-emphasis:
    fontFamily: Forma DJR Micro
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.38
    letterSpacing: 0
  caption-md:
    fontFamily: Forma DJR Micro
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption-sm:
    fontFamily: Forma DJR Micro
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  caption-bold:
    fontFamily: Forma DJR Micro
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  link-md:
    fontFamily: Forma DJR Micro
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.38
    letterSpacing: 0
  button-md:
    fontFamily: Forma DJR Micro
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.7px
    textTransform: uppercase
  button-sm:
    fontFamily: Forma DJR Micro
    fontSize: 12.6px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.126px
  price-md:
    fontFamily: Forma DJR Micro
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.17
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 3px
  md: 4px
  lg: 8px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
  button-primary-pressed:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.on-primary}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
  button-outline-ink:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
  button-text-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.link-md}"
    padding: 4px 0
  badge-pill-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 6px 12px
  badge-pill-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 6px 12px
  badge-sale-coral:
    backgroundColor: "{colors.bloom-coral}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
  text-input-search:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 40px
  card-product:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-product-feature:
    backgroundColor: "{colors.cloud}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-pricing-tier:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-pricing-tier-featured:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-customer-story:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 16px
  card-article-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 16px
  card-category-icon:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-emphasis}"
    rounded: "{rounded.lg}"
    padding: 16px
  promo-strip-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 48px
  hero-promo-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 32px
  utility-strip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-md}"
    height: 36px
    padding: 0 24px
  nav-bar-top:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
    padding: 0 32px
  nav-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 8px 16px
  category-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-emphasis}"
    rounded: "{rounded.pill}"
    padding: 8px 20px
  category-tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  faq-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-emphasis}"
    rounded: "{rounded.lg}"
    padding: 20px 24px
  chevron-decoration:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  help-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    padding: 64px 32px
  footer-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    padding: 64px 32px
---
```
