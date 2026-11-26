# Nike · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Nike商业系统建立在单一的、几乎是暴力的简单思想之上:摄影说话,铬不读。每一页都读作运动社论——高大写法图拉显示锁(`{typography.display-campaign}`燃烧成全血的竞选图像,其他一切(导航、过滤器、按钮、卡片、页脚)都减少到中性打字和胶囊形几何。 `{colors.canvas}` 财务报告和已审计财务报表 `{colors.soft-cloud}`。没有装饰梯度,没有软阴影怀旧,没有用于"调子"的强调色颜色——系统将所有色素能量保存在产品摄影上,以及实际上需要信号的一小段时间(售价) `{colors.sale}`,成功数 `{colors.success}`,表点。

The result is a layout that feels physical — campaign hero, product grid, sport tile, footer — stacked like a printed catalog rather than animated like a typical SaaS landing page. Density is high but never crowded, because the system relies on three relentless devices: square or near-square 1:1 product imagery on `{colors.soft-cloud}`, pill-shaped black CTAs (`{rounded.full}`) anchoring every actionable surface, and a tight 8px-base spacing scale that keeps cards and filters mathematically aligned across PLP, PDP, and editorial pages.

横跨 `/men`追踪的列表 泽伽玛PDP `/membership`, 和乔丹高尔夫, 同样的铬在比例上出现,只有摄影和复制的改变。这就是系统的标志: 图像中的最大编辑表达, 其它任何地方的最大机械约束。

**关键特征 :**
- 编辑活动首屏 `{typography.display-campaign}` (Nike Futura ND, 96px, line-height 0.9,大写)直接烧成全血摄影
- 纯黑/白/单灰色UI调色板 : `{colors.ink}`, `{colors.canvas}`,以及 `{colors.soft-cloud}` 携带 ~95% 铬表面面积
- Pill geometry everywhere: every CTA, search field, filter chip, and badge uses `{rounded.full}` (30px) or `{rounded.md}` (24px) — there are no sharp-cornered buttons in the system
- 产品卡片半径为零,阴影为零,直接坐上 `{colors.soft-cloud}` 监视背景——照片是卡片
- Two-tone CTA hierarchy: `{component.button-primary}` (black on anything light) versus `{component.button-secondary}` (`{colors.soft-cloud}` on anything bright) — never both at once on the same surface
- 8px spacing system with section rhythm at `{spacing.section}` (48px) creating consistent vertical breathing across PLP, PDP, and editorial pages
- 销售信号是零售铬中唯一出现非中性颜色的地方: `{colors.sale}` 价格+通过原价,无徽章背景


## 配色

> **Source pages:** `/men` (primary), `/w/mens-acg-trail-running-shoes-…`, `/t/acg-zegama-…`, `/membership`, `/w/jordan-golf-…`. The chrome palette is identical across all five — only photography varies.

### 品牌和 强调色
- **Nike Black** (`{colors.ink}` — `#111111`): The brand's only "color." It is the primary CTA, the swatch dot, the active filter chip, the campaign overlay, the headline color, and the body text. When Nike wants to assert anything, it goes black.
- **纯白** (`{colors.on-primary}`, `{colors.canvas}` — `#ffffff`: 黑方为平等的合伙人。 载录每页背景、 图像 CTA 和反向文本 `{colors.ink}` 表面, 显示

### 表面
- **软云** (`{colors.soft-cloud}` — `#f5f5f5`:整个系统中最常用的非白色表面. 产品卡图像背景,搜索胶囊形,二级CTA,公用事业栏,运动类的表牌,是每张产品照片舞台的"颜色".
- **细边线** (`{colors.hairline}` — `#cacacb`): 1px 过滤行、页脚列和 PDP 披露行之间的分隔。
- **柔软的细边线** (`{colors.hairline-soft}` — `#e5e5e5`: 内置 1px 阴影在下面 sticky 条和标签条,是系统唯一使用的"阴影".

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — `#111111`: 光表面的主要文字——头条,产品名称,价格,导航.
- **木炭矿** (`{colors.charcoal}` — `#39393b`:墨水太重的地方,身体略微柔软.
- **灰尘** (`{colors.ash}` — `#4b4b4d`: 暗面残缺二级边框和极低强调的效用文本.
- **静音** (`{colors.mute}` — `#707072`:产品分类字幕("男人的拖车跑鞋"),页脚链接文本,二级元数据.
- **石头** (`{colors.stone}` — `#9e9ea0`: 反向二次文本在暗面和最小强调的效用文本上.

### 语义
- **销售** (`{colors.sale}` — `#d30005`:折扣价格颜色和"%关闭"副本——整个零售铬中唯一的红色.
- **深销** (`{colors.sale-deep}` — `#780700`:销售价格徘徊/压抑和暗模式销售主播.
- **成功** (`{colors.success}` — `#007d48`:确认信息,库存指标,资格勾选.
- **成功亮点** (`{colors.success-bright}` — `#1eaa52`:在暗面上反向成功.
- **信息** (`{colors.info}` — `#1151ff`: 成员经验点名中的信息链接/标语.
- **信息深处** (`{colors.info-deep}` — `#0034e3`:按州为信息强调色.

### 类 丙烯(运动/收集芯片)
These appear sparingly — almost exclusively as small chip backgrounds, swatch dots, or category illustrations in editorial tiles. They are never used as text or primary CTA color.
- **粉红色** (`{colors.accent-pink}` — `#ed1aa0`: SKIMS / 女性收藏时刻.
- **粉红色软** (`{colors.accent-pink-soft}` — `#ffb0dd`: 成员经验牌上软的锡化.
- **紫色圆软** (`{colors.accent-purple-soft}` — `#beaffd`:编辑swatch点,软类芯片.
- **紫色圆光** (`{colors.accent-purple-pale}` — `#d6d1ff`:最轻的软瓦填充.
- **调和Teal** (`{colors.accent-teal}` — `#0a7281`: 轨迹/户外/ACG 锁内编辑强调色.
- **粉红色深处** (`{colors.accent-pink-deep}` — `#4c012d`:最深的编辑上覆锡,用作遗产/约旦瓷砖上的洗涤.


## 字体排版

### 字体家族
- **Nike Futura ND** (仅限播放)——为高耸的大写头条所制作的专有几何色标,被烧成了竞选首屏摄影。 Helvetica Now Text Medium → Helvetica → Arial.
- **Helvetica Now Display Medium** (标题) 16–32px)——现代 Helvetica 切换显示大小; 包含每个区域的标题, PDP 产品名称, 以及对话框头条 。
- **Helvetica Now Text Medium** (UI) (英语). 12–16px)——按钮,标题,监视标签,徽章文本. 系统UI工作马.
- **Helvetica Now Text** (体和链接)——长形体和下划线内链.
- **Neue Frutiger 阿拉伯语** 阿拉伯语语言的RTL配对, `{typography.heading-lg}` 和标题大小。
- **Helvetica Neue 9px** ——仅限合法印刷的实用行(`{typography.utility-xs}`).

When substituting on systems without proprietary Nike fonts: pair **Inter** (Display 700 for body chrome, Display 500 for buttons) with **Bebas Neue** or **Anton** at 96px/0.9 line-height for the campaign headline tier. Tighten letter-spacing slightly (-0.5%) on the substitute to approximate Futura ND's optical weight.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-campaign}` | 96px | 500 | 0.9 | 0 | 编辑活动头条被烧成首屏摄影(uppercase) |
| `{typography.heading-xl}` | 32px | 500 | 1.2 | 0 | 节标题——"FEATURED FOOTWEAR","LATEST in CLOTHING",PDP产品标题块 |
| `{typography.heading-lg}` | 24px | 500 | 1.2 | 0 | 子节/成员福利卡标题,大CTA标签,PDP价格 |
| `{typography.heading-md}` | 16px | 500 | 1.75 | 0 | Card title, FAQ row label, filter group header |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 体型复制, search-pill 占位符,产品说明 |
| `{typography.body-strong}` | 16px | 500 | 1.5 | 0 | 产品卡名称,过滤行标签,主导航链接 |
| `{typography.button-lg}` | 24px | 500 | 1.2 | 0 | 首屏区内部的CTA 被按下字母运动 |
| `{typography.button-md}` | 16px | 500 | 1.5 | 0 | 全系统标准避孕药CTA |
| `{typography.button-sm}` | 14px | 500 | 1.5 | 0 | 紧凑胶囊形 CTA, 徽章标签, 地理选择按钮 |
| `{typography.link-md}` | 16px | 500 | 1.75 | 0 | 下划线内含链接 "View产品细节" |
| `{typography.caption-md}` | 14px | 500 | 1.5 | 0 | 产品字幕("男人的拖车跑鞋"),过滤计数,页脚链接 |
| `{typography.caption-sm}` | 12px | 500 | 1.5 | 0 | 过滤芯片标签、徽章文本、颜色计数 |
| `{typography.utility-xs}` | 9px | 500 | 1.75 | 0 | 法律版权 / fine-print 排在最下面 |

### 原则
The system runs on extreme typographic contrast: a single 96px uppercase display tier reserved for editorial campaign moments, and a quiet 12–16px Helvetica Now Text/Medium tier carrying everything else. There is almost no middle ground — the jump from `{typography.heading-xl}` (32px) directly to `{typography.body-strong}` (16px) is intentional and creates the "billboard above, catalog below" effect across every page. Letter-spacing is left at 0 (Futura ND and Helvetica Now are both cut for tight optical fit at scale).

### Note on Font Substitutes
The closest open-source path to Nike's display tier is **Bebas Neue** (free, geometric condensed) at 96px / 0.9 / uppercase / 500. For UI text, **Inter** is the safest substitute — match weights 400/500 and the system reads almost identically at button and caption sizes.


## 布局

### 间距系统
- **基部单位:** 8px
- **托肯斯(前题):** `{spacing.xxs}` (2px) · `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (18px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (30px) · `{spacing.section}` (48px+)
- **通用节奏 :** 设定中的每个页面 `{spacing.section}` (48px)作为主要内容块(运动首屏 – 趋势排行 – 特色排行 – 逐店逐店 – 最新上衣 – foder)之间的垂直差距. PLP卡网格使用 `{spacing.sm}` (8px) 沟槽。PDP 披露行堆叠在 `{spacing.xl}` (24px)垂直贴垫.
- **Card internal padding:** product cards use 0px internal padding — image is full-bleed; metadata rows sit directly below with `{spacing.sm}` (8px) gap between name, subtitle, and price.

### 网格容器( C)
- **最大 width:** ~1440px content area with edge gutters that grow to ~80px at 1920px (the system lets very wide viewports breathe rather than stretch).
- **Column patterns:** PLP listing uses 3-up at desktop, collapsing to 2-up at 1023px and 1-up at 599px. The men's home `/men` mixes a 2-up campaign hero row, a 3- or 4-up "Trending Now" row, a horizontal-scroll "Shop by Sport" rail, and a 4-up "Latest in Clothing" thumbnail grid.
- **过滤侧边栏 :** ~220px 固定宽度左侧铁轨在桌面上被制成 `Hide Filters` 切换宽度较小的按钮。

### 白空间哲学
Whitespace is a tool for separation, not for breath. Sections butt directly against each other vertically with `{spacing.section}` rhythm, and product photos tile edge-to-edge inside their grid — there is no padding wrapped around the product image itself. The "air" comes from the `{colors.soft-cloud}` background of the photograph, not from layout margin. Headlines do not have decorative whitespace above them; they sit immediately under the section divider line.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | No shadow, no border | Default for cards, buttons, sections — the dominant treatment |
| 1 —— 细边线分机 | 1px 固态 `{colors.hairline}` | 过滤行分隔符、页脚列边框、 PDP 披露- 列分隔符 |
| 2 ——内置底线 | `box-shadow: inset 0 -1px 0 {colors.hairline-soft}` | Sticky 公用设备/ 设备sub-nav 条下边缘, 标签条下划线 |

该系统零售铬完全没有滴影高。卡片不在页面上升起。唯一的深度提示是 1px 打开的套接字 sticky 条形图和全血摄影与 `{colors.soft-cloud}` 产品背景。

### 装饰性深度
深度为 Nike系统完全来自摄影,而不是CSS效果:
- **编辑活动牌** 透过电影视角创造深度——在小径上跑步,在庭院中建模——富图拉显示头条,用白色或白色覆盖,或 `{colors.ink}` 直接在图像上。
- **产品卡摄影** 被射中平面 `{colors.soft-cloud}` 以去除任何背景深度,所以产品本身是页面上唯一有形式的东西.
- **运动类牌** 电影摄影的首页是满腔热血的电影摄影 `{component.button-outline-on-image}` 胶囊形停在左下方 给一瞬间 白胶囊形与大气影像相对


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 纸牌、运动瓦片、产品图像、导航、页脚——系统中的每个容器 |
| `{rounded.sm}` | 18px | 成员福利锁内的Avatar / 图标容器 |
| `{rounded.md}` | 24px | 搜索避孕药、 搜索提交、 过滤输入 |
| `{rounded.lg}` | 30px | Every CTA pill — primary, secondary, on-image, filter chip, geo-selector, "Notify Me" |
| `{rounded.full}` | 9999px | 彩色监视点和 circular 图标按钮(背面、共享、最喜欢的旋转木板) |

### 摄影几何
- **产品卡 :** 一致 1:1 平方或近方( 5)~4:5 高高的庄稼上画像,在牌内满身血水,没有贴纸,坐在上面 `{colors.soft-cloud}` 背景情况。
- **编辑活动首屏:** ~16:9 或更宽广的电影作物, 充血在内容 max-width,随着富图拉显示头条被烧成左下位或左上位第三位.
- **体育类铁路:** 4:5 肖像全血缩略图 上面有一颗CTA小胶囊形 左下方
- **PDP main image:** square primary image with vertical thumbnail rail to its left (~5–7 thumbnails stacked at small size), enabling rapid color/angle browsing without leaving the page.
- **象形图案/ 类图标卡 :** 居中显示的图标 ~80–96px 打开 `{colors.canvas}` 与 `{typography.caption-md}` 标签下面。


## 组件

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only; variants live as separate `components:` entries in the front matter.

### 按钮

**`button-primary`** ——普及性 Nike 反恐中心
- Background `{colors.ink}`, text `{colors.on-primary}`, type `{typography.button-md}`, padding `16px 32px`, height `{spacing.section}` (48px), rounded `{rounded.lg}` (30px pill).
- 系统每一次主动作上都使用:"签名","通知我","Buy","Türkiye"地理确认,"Shop"在运动瓦片上覆盖,"Contue".
- Pressed state lives in `button-primary-active` — the bg stays `{colors.ink}` while the surface shrinks to `scale(0.5)` with `opacity: 0.5` (Nike's signature "tap collapse" feedback that's extracted across all five pages).

**`button-secondary`** 光表面的软替代品
- Background `{colors.soft-cloud}`, text `{colors.ink}`, type `{typography.button-md}`, padding `16px 32px`, rounded `{rounded.lg}`.
- Used as the lower-emphasis alternate when a primary CTA already exists, e.g., "United States" geo-decline next to the black "Türkiye" confirm; "Cancel" or "Discover More" on light cards.

**`button-outline-on-image`** - 覆盖摄影的CTA
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.lg}`.
- 白白的胶囊形 将每个 运动类和编辑运动的牌子 放在左下方

**`button-icon-circular`** ——铬图标控制器
- Background `{colors.soft-cloud}` or transparent, icon `{colors.ink}`, rounded `{rounded.full}`, size 40px.
- 用于背面的旋转木桨(左/右),希望主义者心,分享,以及"隐藏过滤器"切换.

**`filter-chip`** + **`filter-chip-active`**
- Default: background `{colors.canvas}`, text `{colors.ink}`, 1px hairline `{colors.hairline}`, type `{typography.button-md}`, rounded `{rounded.lg}`, padding `8px 16px`.
- 活动:背景 `{colors.ink}`文本中,请输入 `{colors.on-primary}` ——芯片在选中时完全反转,没有中间状态.

### 输入表单( F)

**`search-pill`** + **`search-pill-focused`**
- Default: background `{colors.soft-cloud}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}` (24px), padding `8px 16px`, height `40px`. Anchored to the right of the primary nav with a small magnifier icon.
- Focused: background `{colors.canvas}`, 2px solid border `{colors.ink}`, with a 12px outer halo of `{colors.soft-cloud}` (the system's only "focus ring" effect). The pill shape stays `{rounded.md}` so the halo reads as a soft glove, not a hard outline.

### 纸牌和集装箱

**`product-card`**
- Container: background `{colors.canvas}`, rounded `{rounded.none}`, padding 0, no shadow.
- 图像区域 : `{component.product-card-image}` ——全血产品照片上映. `{colors.soft-cloud}` 平方边。
- 下方图像( 以此顺序排列 ) `{spacing.sm}` 之间: 监视点行( 秒) (3–6 点数 : 12px circular),在适用的情况下,宣传徽章(`{component.badge-promo}` "Just In","Comeing Soon","回收材料",产品名称 . `{typography.body-strong}` `{colors.ink}`分类字幕 `{typography.caption-md}` `{colors.mute}`价格一行 价钱一行
- 价格行:正常价格 `{typography.body-strong}` `{colors.ink}`。如果在出售:折扣价格 `{colors.sale}` 之后是原创的打击 `{colors.mute}` 之后是% 关闭在 `{colors.sale}`.

**`campaign-tile`** ——品牌签名编辑单位.
- 完全流畅的摄影 `{typography.display-campaign}` 头条被烧伤(上部, 96px, line-height 0.9).
- 标题颜色为 `{colors.canvas}` 或 减 减 `{colors.ink}` 以基本图像为参照,而不是参数化; 选择每资产。
- 单人 `{component.button-outline-on-image}` 胶囊形锚在瓷砖的左下方 带有呼叫动作

**`category-icon-card`**
- 集装箱:背景 `{colors.canvas}`,四舍五入 `{rounded.none}`.
- 居中类别说明( Q)~80px+ 标签 `{typography.caption-md}` `{colors.ink}` 直接在下面,在"衣着最后"里用过 4–8- 上图条 `/men`.

**`member-benefit-card`**
- 深色图像背景上全血相片卡; 左下角复制槽 `{typography.heading-lg}` 标题 `{colors.on-primary}` 备注a `{component.button-outline-on-image}` 下方为"爆炸"胶囊形.
- 用于 `/membership` "会员福利" 3- 电网上

**`swatch-dot`** + **`swatch-dot-active`**
- 12px circle, rounded `{rounded.full}`, no border in default state. Renders the colorway options on every product card and PDP color picker.
- 默认:填充彩道实际产品颜色(从产品图像中在运行时间中提取), 1px 微妙的外环在 `{colors.hairline}` 白色/ 浅色的颜色通道, 使其保持可见 `{colors.canvas}`.
- 活动: 以 A 填充相同的 2px `{colors.ink}` 外环和 2px 白色内间间隙, 创建 Nike签名的同心环“ 选定” 状态。 默认和活动之间的大小不变 。

**`badge-promo`**
- Background `{colors.canvas}` with 1px hairline `{colors.hairline}`, text `{colors.ink}`, type `{typography.caption-sm}`, rounded `{rounded.lg}`, padding `4px 12px`.
- 坐在产品图像(卡片的左上方)的顶部,上面有"Just In","Coming Soon","回收材料","Member Enterpress"等拷贝.

**`badge-sale-text`**
- Inline price-row text in `{colors.sale}` with no background — the only "badge" in the system that has no container.

### 导航

**`utility-bar`** ——顶端电线条
- Background `{colors.soft-cloud}`, text `{colors.ink}`, type `{typography.caption-sm}`, height ~36px, rounded `{rounded.none}`.
- 右对齐的集群:“寻找存储 ” 帮助 —— 加入我们 —— 签名 ” 。 总是在列; 永远不会崩溃 。

**`primary-nav`** ——主导航.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-strong}` for nav links, height 56–64px, rounded `{rounded.none}`.
- Layout: Nike swoosh logo at left (32×32), centered nav row ("New & Featured · Men · Women · Kids · Jordan · Nike SKIMS · Sport"), right cluster (search pill, wishlist heart icon, bag icon).
- 活动区域得到一个 2px- 下划线在 `{colors.ink}` - 没有任何背景填充。

**Sub-nav 脱光** (PLP) ——出现在主导航下,带有面包屑+排序+隐藏式过滤器控制.
- 一样 `{colors.canvas}` 带有背景 1px 设置 hairline-soft 底边.
- 左侧:面包屑 `{typography.caption-md}` `{colors.mute}` 由 " / " 分隔开。
- 右:"隐藏过滤器"切换+"Sort By:..." 滴滴——均在 `{typography.button-md}` 带有切夫龙图标.

**顶部导航( 移动)**
- Hamburger menu icon (left), Nike swoosh (center), search + bag icons (right).
- 搜索胶囊形在窄宽处崩溃成只限图标的按钮; 点击可扩展全宽覆盖的搜索胶囊形 `{rounded.md}`.
- 初等导航崩溃成一个从左侧滑入的全高抽屉,上面列出自上而下带有的导航行 `{spacing.xl}` 垂直粘贴。

### 签名组件

**`pdp-disclosure-row`** ——PDP信息手风琴排.
- 堆叠的行,用于“查看产品细节”、“测试和返回”、“审查(n)” `{spacing.xl}` 垂直粘贴和 a 1px `{colors.hairline}` 下方为分隔符。
- 标签 `{typography.body-strong}` `{colors.ink}` 左对齐; 切夫龙 `{colors.ink}` 右对齐。

**`faq-row`** — `/membership` 风琴
- Identical pattern to `pdp-disclosure-row` but with `{typography.heading-md}` label weight; 1px `{colors.hairline}` divider below each.

**`filter-sidebar`** - 进工党左侧铁路
- 集装箱 `{colors.canvas}`,四舍五入 `{rounded.none}`.
- Section headers `{typography.body-strong}` `{colors.ink}` with `{spacing.lg}` (18px) vertical gap between groups.
- 活动过滤器获得一个 1px 墨水下划线; 括号内的计数 `{colors.mute}`.

**`footer`**
- Background `{colors.canvas}` with a single 1px `{colors.hairline}` top divider.
- 4列:资源/帮助/公司/促销和贴现,每列都有栏头. `{typography.body-strong}` `{colors.ink}` 和链接列表 `{typography.caption-md}` `{colors.mute}`.
- 列下方:水平规则,然后是 fine-print 与 `{typography.utility-xs}` `{colors.mute}` (版权、地方性转换器、术语、隐私、供应链行为)。


## 设计建议与禁忌

### 执行
- 准备金 `{typography.display-campaign}` 专供编辑运动首屏关卡——永远不要使用 96px Futura)用于区划标题或产品标题.
- 使用 `{component.button-primary}` (`{colors.ink}` 胶囊形)作为每个景点的单项主动作。 `{component.button-secondary}` (`{colors.soft-cloud}` 胶囊形),作为柔软的替代品.
- 开始拍摄每张产品照片 `{colors.soft-cloud}` ——灰色是系统"studio".
- 保持所有CTA的胶囊形形状 `{rounded.lg}` (30px。从不引入正方形或 `{rounded.sm}` 按钮。
- 使用 `{colors.sale}` 只在价格行上——从不在背景,徽章,或铬上.
- 堆叠内容部分 : `{spacing.section}` (48px)节奏,没有装饰性的划分它们之间的分;摄影的血缘是分化者.
- 以图像为主的 CTAs `{component.button-outline-on-image}` (白丸)在下左——系统普遍"处理这个图像"的位置.

### Don't
- Don't introduce drop shadows or card elevation. Cards sit flat on the page; the only depth cue is the 1px inset hairline on sticky bars.
- Don't use any of the category accent colors (`{colors.accent-pink}`, `{colors.accent-purple-soft}`, `{colors.accent-teal}`) for primary chrome — they belong to swatch dots, soft tile fills, and editorial moments only.
- Don't replace `{colors.ink}` with a near-black gray like `{colors.charcoal}` for a CTA — Nike's primary pill is true `#111111`.
- Don't pad inside product cards. The image is full-bleed; metadata sits directly below with `{spacing.sm}` (8px) between rows.
- Don't put two campaign-tile lockups in the same row at the same scale — Nike alternates a single full-bleed editorial tile with a 2-up or 4-up product/category grid.
- Don't underline anything other than `{typography.link-md}` inline links and the active primary-nav indicator. Buttons, headings, and prices stay un-underlined.
- Don't introduce a third button shape. Pill or icon-circular — that's the entire button shape vocabulary.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 超广 | 1920px+ | 内容 max-width 暂停 ~1440px;外沟长到 ~80px 每一边 |
| 桌面大块 | 1440px | 默认桌面布局 - 3- 上产品网, 4- 上衣带,全支导航 |
| 桌面 | 1200px | 与大,外沟略窄相同 |
| 桌面小块 | 1024px | 过滤侧栏开始压缩; 运动栏显示 ~3 可见的牌 |
| 平板电脑 | 1023–961px | 3- 上进工党倒闭 2-上;“隐藏过滤器”成为默认切换 |
| tablet-narrow | 960–640px | Primary nav center cluster collapses to a hamburger drawer; search pill becomes icon-only |
| 移动景观 | 639–600px | 2- 上进工党倒闭 1-上;产品卡随图像和元数据堆叠而成为全宽 |
| 移动 | 599–320px | 单栏所有;运动瓦片以全屏幕宽度渲染,Futura尺寸较短(~64px) |

### 触控区域
All interactive elements meet WCAG AAA (44×44px minimum). Pills (`{component.button-primary}`, `{component.button-secondary}`) sit at 48px height with 32px horizontal padding. Icon-circular buttons (`{component.button-icon-circular}`) sit at 40px — Nike's PDP carousel paddle and wishlist heart sit just under AAA but above AA at 40×40, with hit-target padding extending the tappable area to 48px+. Filter-chip pills are 40px height with 16px padding.

### 折叠战略
- **初等导航 :** 桌面中心集群 – 由汉堡在swoush左侧触发的移动抽屉.
- **进工党 grid:** 3-up → 2-up → 1-up at 1023, 599, and below; 沟槽从 `{spacing.sm}` 改为: `{spacing.xs}` 手机上,我刚从电话里找到的
- **过滤侧边栏 :** 220px fixed ~"隐藏过滤器"切换 ~ 关闭扫描屏全屏过滤抽屉在移动中.
- **体育栏杆:** 桌面水平滚动 ~5 可见 ~ 移动水平滚动 ~1.5 可见( peek- next- card 模式)。
- **区域间距 :** `{spacing.section}` 48px 桌面 – 数据 32px 平板电脑 24px 移动,以保持编辑节奏紧凑在小屏幕上.
- **编辑活动标题:** 桌面 96px · 平板电脑 64px ■ 流动 48px, line-height 留在原点 0.9 跨越各种大小。

### 图像行为
- 产品图像具有反应能力 1:1 在所有断点上的比例——图像尺度,比例不.
- 编辑运动用艺术指导作物:a 16:9 桌面交换中的宽首屏 4:5 移动上的照片,所以图保持中心,标题仍然有燃烧空间。
- All non-critical product imagery is lazy-loaded as the user scrolls into the next grid row.


## 迭代指南

1. 一次聚焦一个组件。 将 YAML 输入从前置事务中拉出, 并验证每个属性解析 。
2. 直接引用组件名称和符号( Q)`{colors.ink}`, `{component.button-primary-active}`, `{rounded.lg}`)——在散文中不要用复写颜色名称或弧度来解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 自动发出警告。
4. Add new variants as separate component entries (`-active`, `-disabled`, `-focused`) — do not bury them inside prose. Nike's pressed state (`scale(0.5) opacity 0.5`) is intentional and must be its own entry, not a hover stand-in.
5. 默认正文为 `{typography.body-md}`; 联系范围 `{typography.body-strong}` 用于产品名称和主导航链接; 保留 `{typography.display-campaign}` 严格地说,是首屏竞选的锁。
6. 保留 `{colors.ink}` 很少的每个视图——如果一个以上的固黑胶囊形或块在同一折叠中出现,则将一个中和到 `{component.button-secondary}` 或 减 减 `{component.button-outline-on-image}`.
7. 引入新组件时,询问是否可以用现有的避孕药+平卡+摄影-上-上表示.`{colors.soft-cloud}` 词汇表在添加新符号之前。系统的力量在于它几乎永远不需要新的符号。


## 已知缺口

- **Mobile screenshots not captured** — responsive behavior described above synthesizes Nike's known mobile pattern (hamburger drawer, 1-up grid, headline downscale) from desktop evidence and the breakpoint list extracted from tokens.
- **Hover states not documented** by system policy — Nike's CSS uses `--pds-color-element-hover` and `--pds-color-text-hover` tokens but these are not included here.
- **对话框/ 模式样式** 无法从捕获的表面确认除地理选择器和国证药配对之外的其他情况;没有记录袋、愿望清单和登录表。
- **窗体字段样式** 用于检查、注册和地址表的表格没有在捕获的表面中存在——只有搜索胶囊形有记录。
- **袋和许愿名单** 图标状态变体(填充的计数徽章)在捕获的页面中不可见。

## 设计词元原值

以极强的排版对比为基础的第一摄影商业系统——高高的大写Futura 显示的锁被烧成编辑运动图像,坐在密集、中立、近乎单一的迷你零售胶囊形黑色CTA的染色体上,灰色搜索和标签胶囊形,以及紧凑的 8px品牌的声音是运动、动力学和 absolute:纯黑色,纯白色,单软表面灰色,以及故意的一小组语义强调色(销售红,成功绿,受约束的类别锡)——每个色调瞬间都保留给编辑摄影或定价信号,从不装饰铬.

```yaml
---
version: alpha
name: Nike-design-analysis
description: |
  A photography-first commerce system built on extreme typographic contrast — towering uppercase Futura display lockups burned into editorial campaign imagery, sitting above a dense, neutral, near-monochrome retail chrome of pill-shaped black CTAs, gray search and tag pills, and tight 8px-grid product cards. The brand's voice is athletic, kinetic, and absolute: pure black, pure white, a single soft surface gray, and a deliberately small set of semantic accents (sale red, success green, restrained category tints) — every chromatic moment is reserved for editorial photography or pricing signal, never decorative chrome.

colors:
  primary: "#111111"
  on-primary: "#ffffff"
  canvas: "#ffffff"
  soft-cloud: "#f5f5f5"
  ink: "#111111"
  charcoal: "#39393b"
  ash: "#4b4b4d"
  mute: "#707072"
  stone: "#9e9ea0"
  hairline: "#cacacb"
  hairline-soft: "#e5e5e5"
  sale: "#d30005"
  sale-deep: "#780700"
  success: "#007d48"
  success-bright: "#1eaa52"
  info: "#1151ff"
  info-deep: "#0034e3"
  accent-pink: "#ed1aa0"
  accent-pink-soft: "#ffb0dd"
  accent-purple-soft: "#beaffd"
  accent-purple-pale: "#d6d1ff"
  accent-teal: "#0a7281"
  accent-pink-deep: "#4c012d"

typography:
  display-campaign:
    fontFamily: Nike Futura ND
    fontSize: 96px
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: 0
    textTransform: uppercase
  heading-xl:
    fontFamily: Helvetica Now Display Medium
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  heading-lg:
    fontFamily: Helvetica Now Display Medium
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  heading-md:
    fontFamily: Helvetica Now Display Medium
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.75
    letterSpacing: 0
  body-md:
    fontFamily: Helvetica Now Text
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: Helvetica Now Text Medium
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  button-lg:
    fontFamily: Helvetica Now Display Medium
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  button-md:
    fontFamily: Helvetica Now Text Medium
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  button-sm:
    fontFamily: Helvetica Now Text Medium
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  link-md:
    fontFamily: Helvetica Now Text
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.75
    letterSpacing: 0
    textDecoration: underline
  caption-md:
    fontFamily: Helvetica Now Text Medium
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption-sm:
    fontFamily: Helvetica Now Text Medium
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  utility-xs:
    fontFamily: Helvetica Neue
    fontSize: 9px
    fontWeight: 500
    lineHeight: 1.75
    letterSpacing: 0

rounded:
  none: 0px
  sm: 18px
  md: 24px
  lg: 30px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  xxl: 30px
  section: 48px

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 16px 32px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "{colors.soft-cloud}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 16px 32px
    height: 48px
  button-outline-on-image:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-icon-circular:
    backgroundColor: "{colors.soft-cloud}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  search-pill:
    backgroundColor: "{colors.soft-cloud}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 40px
  search-pill-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  filter-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  filter-chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
  badge-promo:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  badge-sale-text:
    textColor: "{colors.sale}"
    typography: "{typography.caption-md}"
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    padding: 0px
  product-card-image:
    backgroundColor: "{colors.soft-cloud}"
    rounded: "{rounded.none}"
  swatch-dot:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 12px
  swatch-dot-active:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 12px
  campaign-tile:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-campaign}"
    rounded: "{rounded.none}"
  category-icon-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
  member-benefit-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.none}"
  faq-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.none}"
    padding: 24px 0px
  pdp-disclosure-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    padding: 24px 0px
  utility-bar:
    backgroundColor: "{colors.soft-cloud}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.none}"
    height: 36px
  primary-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    height: 56px
  filter-sidebar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
---
```
