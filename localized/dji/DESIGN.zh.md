# DJI · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

DJI's site works like a brightly lit product showroom. The page is a white canvas (`{colors.canvas}`) tiled edge to edge with studio photography: a full-height hero carousel of a single hero product over dark or sky backdrops, then a two-up grid of square-cornered product tiles separated by thin white gutters, each tile a soft grey render of a drone, gimbal or microphone with its name set as large, light-weight wordmark-style type above it. Text is never pure black; it is Open Sans in a near-black ink (`{colors.ink}`) at stepped opacities, tracked slightly tight so headings read compact and engineered.

颜色几乎只用于动作。每颗交互式胶囊形(导航存储按钮“Buy Now”,模型选择器“Where to Buy”)都装有单一的工程蓝色(`{colors.primary}`),而次要动作则是薄的黑线胶囊形. 店家用略亮的蓝色(英语:`{colors.store-blue}`)和"加到卡"的苍白色伴奏,一个小的烧橙标签(英语:`{colors.tier-orange}`),标注"旗舰"或"先进"等产品等级;是品牌网站唯一热门强调色.

页面有明确的节奏:公告栏和白色导航、照相瓦、以中心为主的节点、比较或编辑网格、灰色的特征链接带和木炭页脚(`{colors.footer}`商店保存着骨架,但增加了商业家具: 8px 带有一个选项卡 2px 蓝色选择戒指 橙角徽章 蓝色选择戒指 sticky 白色购买栏,方形黑色介质瓦片用于故事故事,以及一个浅灰色页脚.

**关键特征 :**
- 摄影第一:全血首屏木马和方形、沟槽分隔的产品瓦 `{colors.canvas}`;UI染色体保持不碍事.
- One action colour: `{colors.primary}` on the brand site and `{colors.store-blue}` in the store; every CTA is a pill (`{rounded.xl}`, `{rounded.xxl}`, `{rounded.full}`).
- 次要行动是: 1px `{colors.ink}` 轮廓胶囊形(`button-outline`首屏CTA是白鬼胶囊形 而不是摄影`button-hero-ghost`).
- Open Sans 整个过程中,跟踪紧凑(大约 −0.02em 身体,为 −0.03em 标题),加字重 600 标题和标题 400 其它一切的都一样
- 墨水在顶端的不透明度 : `{colors.ink}`, `{colors.ink-secondary}`, `{colors.ink-tertiary}`.
- Small `{colors.tier-orange}` eyebrows mark product rank; orange never fills a button.
- 页面节奏:公告栏,导航,图片首屏,产品牌,以网格为中心标题, `{colors.canvas-soft}` 功能链接带, `{colors.footer}` 脚足.


## 配色

Source pages: dji.com home, the camera-drones category page, and a store product page.

### 品牌和 强调色
- **DJI 蓝色** (`{colors.primary}` — #0070d5:品牌现场动作颜色:Nav Store胶囊形,"买现在"胶囊形,主动型号选择器,"买哪里"胶囊形和"买哪里"胶囊形. announcement-bar 链接。
- **存储蓝色** (`{colors.store-blue}` — #0060ef:商店的动作颜色: 购买, 添加到墨盒标签, 选中的选项环, 以及 DJI 护理标签和内置商店链接。
- **存储蓝丁** (`{colors.store-blue-tint}` — #deeafd: 给Cart添加的苍白填充.
- **蓝色** (`{colors.on-primary}`:蓝色和深色胶囊形上的白色标签,以及首屏文字比摄影更优美.
- **链接蓝色** (`{colors.link-blue}` — #1890ff:"Learn More QQ"和"Buy Now QQ"在产品和探险卡上的文本链接.
- **橙色水平** (`{colors.tier-orange}` — #be4e04:小眉纹,标出产品等级.
- **徽章橙色** (`{colors.badge-orange}` — #fa8c16: 突出显示的商店选项上的角徽章.

### 表面
- **页面底色** (`{colors.canvas}`:页背景,导航,卡片,购买栏.
- **软画帘** (`{colors.canvas-soft}` — #f7f9fa: 特性链接带,存储面板,在Box牌片中,脚注面板和存储页脚.
- **小组讨论会** (`{colors.panel}` — #f6f8f9:产品收益面板.
- **雾** (`{colors.fog}` — #f5f5f5:探索更多乐队, product-card 其它地区胶囊形
- **宣布内容** (`{colors.announce}` — #fafafa: 公告栏和分类图标条.
- **黑色媒体** (`{colors.media-black}`:存储特性介质牌.
- **Footer** (`{colors.footer}` — #272727), with **Footer Pill** (`{colors.footer-pill}` — #383838) and **Footer Divider** (`{colors.footer-divider}` — #414141).
- **Lines**: `{colors.hairline}` (#f0f0f0) tab track, `{colors.divider}` (#e8e8e8) FAQ and purchase-bar rules, `{colors.card-border}` (#d9d9d9) option cards, `{colors.dashed-border}` (#dddddd) unavailable option, `{colors.input-border}` (#d4d7d9) store email field, `{colors.control-border}` (#cccccc) steppers and checkboxes.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — #262626:标题和身体在白色上.
- **墨水中学** (`{colors.ink-secondary}` — #595959: 二级副本,不活动标签.
- **墨水第三层** (`{colors.ink-tertiary}` — #8c8c8c): product-tile 眉间.
- **存储墨水** (`{colors.store-ink}` — #333333: 存储产品和选项标题.
- **Graphite** (`{colors.graphite}` — #3b3e40): store body copy and section headings.
- **导航墨水** (`{colors.nav-ink}` — #303233:白色头部的导航标签.
- **标 题** (`{colors.slate}` — #6c7073:存储页脚链接和暗页脚的野外边界.
- **钢** (`{colors.steel}` — #9fa3a6: 比较表中的 spec 标题。
- **Footer Link** (`{colors.footer-link}` — #b3b3b3): links on the charcoal footer.

### 语义
- **错误** (`{colors.error}` — #f5222d):"Out of Stock"在无法使用的商店选项上.


## 字体排版

### 字体家族
**Open Sans** 分级来自大小和狭小的字重范围(400 用于身体、链接和按钮; 500 特征标题; 600 标题和存储标题)。 Letter-spacing 持续为负数: −0.02em 体型和体型 −0.03em ,在标题大小上,它使类型具有紧凑的技术感觉。照片牌上较大的产品名称作为标志型的艺术品出现,而不是类型尺度的一部分。

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 600 | 1.08 | −1.44px | 类别 页面标题 ("卡米拉无人机") |
| `{typography.display}` | 40px | 600 | 1.2 | −1.2px | 部分标题 ("偶联无人机比较","爆炸更多") . |
| `{typography.spec-value}` | 40px | 400 | 1.2 | −1.2px | 比较光谱值 (“)1063 g", "100 议员"). |
| `{typography.heading}` | 32px | 600 | 1.125 | −0.96px | 储存产品标题、储存和主页标题 |
| `{typography.card-title-lg}` | 32px | 500 | 1.125 | 0 | Field-card 摄影标题 |
| `{typography.news-title}` | 28px | 600 | 1.14 | 0 | 编辑/新闻卡片标题 |
| `{typography.title-md}` | 24px | 600 | 1.17 | −0.72px | 探索牌名标题 |
| `{typography.product-name}` | 24px | 400 | 1.17 | −0.72px | 比较表中的模型名称 |
| `{typography.price}` | 20px | 600 | 1.2 | −0.4px | Purchase-bar 价格 |
| `{typography.subhead}` | 20px | 600 | 1.2 | −0.6px | 存储子节(“ 选择选项”) |
| `{typography.feature-title}` | 20px | 500 | 1.4 | 0 | 特性链接带标题 |
| `{typography.option-title}` | 18px | 600 | 1.33 | −0.36px | 存储选项标题 |
| `{typography.body}` | 16px | 400 | 1.5 | −0.32px | 复制件,卡片文本链接 |
| `{typography.button}` | 16px | 400 | 1.25 | −0.32px | 胶囊形按钮标签 |
| `{typography.faq}` | 16px | 600 | 1.5 | −0.32px | 问题 |
| `{typography.ui}` | 14px | 400 | 1.43 | −0.28px | 标签、 存储列表、 首屏鬼标签、 内置链接 |
| `{typography.nav}` | 14px | 400 | 1.0 | −0.28px | 顶级导航和导航药 |
| `{typography.caption}` | 12px | 400 | 1.33 | −0.24px | 层次眉毛、 类别标签、 脚注 |
| `{typography.badge}` | 12px | 600 | 1.33 | −0.24px | 选项角徽章 |
| `{typography.footer-heading}` | 12px | 500 | 2.0 | 0 | Footer column headings |
| `{typography.micro}` | 10px | 600 | 1.8 | −0.2px | DJI 护理标签 |

### 原则
- 严格跟踪每个大小,使长的产品名称和光谱值作为紧凑块坐落.
- Weight is used sparingly: headings at 600, everything functional at 400, so blue pills and photography carry the emphasis.
- Spec values use the display size at regular weight, letting numbers like "1063 g" read as large, calm data rather than shouting headlines.

### Note on Font Substitutes
Open Sans is open source on Google Fonts. Keep the negative tracking (−0.02em to −0.03em); without it the type looks noticeably looser than the brand.


## 布局

### 间距系统
- **基地单位**: 4px,主要在 8px 步骤。
- **托肯斯(前题)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 40px · `{spacing.huge}` 48px · `{spacing.section}` 64px.
- Product tiles are separated by `{spacing.md}` white gutters; option cards pad `{spacing.xl}`; the feature-link band pads `{spacing.section}` vertically; the footer pads `{spacing.xxl}` by `{spacing.md}`.

### 网格容器( C)
- 家牌和类牌均全宽减去一个小的外沟,在首屏下面两高;编辑和场牌则跑两高三高.
- 比较表为四栏;探索和辅助卡为一栏内双升 1200px 容器。
- 商店产品页分成一个左侧的大图片廊和一个 500px 右侧的购买栏。

### 白空间哲学
Photography fills the tiles; whitespace appears as consistent gutters and generous gaps above centred section headings. Inside the store, whitespace groups options into cards and panels rather than separating long sections.

### 反应战略

#### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 宽 | ≥ 1200px | 完整的桌面网格, 1200px 存储容器 |
| 桌面 | 1024–1199px | 储存展廊和购买栏收紧 |
| 平板 | 769–1023px | 导航凝结; 保留两块升瓦 |
| 手机 | ≤ 768px | 向菜单显示导航崩溃; 平面、 比较列和商店将堆栈分割为一个列 |
| Small | ≤ 456px | Compact type and tile heights |

#### 触控区域
Store CTAs (`button-store-buy`, `button-store-cart`) and `button-outline-lg` are 48px tall; `button-primary` and `button-outline` are 40px; nav pills are 32px and rely on generous horizontal padding. FAQ rows are about 49px tall.

#### 折叠战略
- 导航崩溃到菜单; Store 胶囊形保持可见.
- 双升产品瓦片和场卡堆叠为一列;比较表变为水平可滚动列.
- 商店展廊堆放在购买栏上方; sticky `purchase-bar` 保持价格和CTA都能达到。

#### 图像行为
首屏图像是全血木马,左下方有幻灯片标题;瓷砖制作是以软灰色为中心的工作室剪辑;编辑卡使用裁剪的景观摄影。图像将懒散地装入砖块卷轴中。


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | No shadow | Tiles, cards, bands, footer |
| 大纲 | 1px 边框( R)`{colors.card-border}`, `{colors.divider}`,墨水轮廓丸). | 选项卡、 FAQ 列、 大纲按钮 |
| 选中 | 2px `{colors.store-blue}` 环 | 选中的存储选项 |
| 浮动 | 柔软的影子, 0 8px 16px 时 间 10% 黑色 | 浮动 circular 按钮(支持,返回顶部), sticky 购买栏 |

高度是罕见的。 网站依靠摄影和平面灰色带进行深度测量, 并且保留真正浮在内容上的元素的阴影 。

### 装饰性深度
深度来自产品让自己: 软光工作室拍摄的画面,灰色梯度上带有温柔的地板阴影,以及戏剧性的黑暗首屏背景. Store 特征瓦片使用纯黑色(英语:`{colors.media-black}`产品制作和生活方式摄影背后。


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 相片牌、牌、媒体牌、带 |
| `{rounded.xs}` | 4px | DJI 护理标签 |
| `{rounded.sm}` | 8px | 存储选项卡、 惠益面板、 比较选项 |
| `{rounded.xl}` | 60px | Product-card 买药/ 学药 |
| `{rounded.xxl}` | 64px | 首屏鬼药 |
| `{rounded.pill}` | 100px | 区域避孕药、媒体切换、下载 App |
| `{rounded.full}` | 9999px | 储存避孕药、储存CTA、大片药、暗药 |

Floating support and back-to-top buttons are perfect circles. The orange option badge rounds only its bottom-left corner (8px), and email fields round only their left corners (4px) where they meet a square submit button.

### 摄影几何
Product tiles are square-cornered and close to 1:1 on the home page; category cards are similar large squares on a grey backdrop. Field and editorial cards use landscape crops. Store galleries use a large landscape frame with thumbnail strips; In the Box tiles are square.


## 组件

> **No hover states documented.** Each component below documents its resting state only.

### 导航

**`announcement-bar`** 导航上方的细条
- Background `{colors.announce}`, text `{colors.ink}` in `{typography.ui}`, a `text-link` ("Shop Now ›") and a close icon.

**`nav-bar-overlay`** 首屏照片上的家航
- Transparent, white `{typography.nav}` labels, 64px tall; logo left, category links, then search, account, `region-pill` and `button-store-pill` at right.

**`nav-bar`** ——内页的白色导航
- Background `{colors.canvas}`, labels in `{colors.nav-ink}` `{typography.nav}`, 64px tall.

**`button-store-pill`** ——导航中的蓝色存储按钮
- Background `{colors.primary}`, text `{colors.on-primary}` in `{typography.nav}`, `{rounded.full}`, padding 8px 16px 8px 34px (room for a bag icon), 32px tall.

**`region-pill`** ——"其他地区"选用者.
- Background `{colors.fog}`, text `{colors.ink}` in `{typography.nav}`, `{rounded.pill}`, padding 0 `{spacing.sm}`, 32px tall, with a globe icon.

**`store-nav`** ——仓库头
- Background `{colors.canvas}`, `{typography.ui}` category links with a 2px indicator, a `care-tag` beside "Services", and search, cart and account icons.

**`category-strip`** ——分类页面导航下的图标行
- Background `{colors.announce}`, 124px tall, product icons over `{typography.caption}` labels.

### 按钮

**`button-primary`** ——蓝丸("买现在",活跃的模特选手,"买哪里") .
- Background `{colors.primary}`, text `{colors.on-primary}` in `{typography.button}`, `{rounded.xl}`, padding 0 `{spacing.md}`, 40px tall.

**`button-outline`** — outline pill ("Learn More", inactive model selector)
- Transparent, 1px `{colors.ink}` 边框,文本 `{colors.ink}` 输入 `{typography.button}`, `{rounded.xl}`, 编译 0 15px, 40px 高个子。

**`button-outline-lg`** 大型轮廓胶囊形(“Compare”) DJI 摄像机无人机... ... ... ...")
- 1px `{colors.ink}` 边框, `{typography.button}`, `{rounded.full}`, 编译 14px `{spacing.md}`, 48px 高个子。

**`button-hero-ghost`** ——白鬼丸战胜首屏摄影("Learn More QQ","Buy Now QQ").
- Transparent, 1px `{colors.on-primary}` 边框和文本, `{typography.ui}`, `{rounded.xxl}`, 编译 5px `{spacing.md}`, 32px 高个子。

**`button-store-buy`** ——现在商店买
- Background `{colors.store-blue}`, text `{colors.on-primary}` in `{typography.button}`, `{rounded.full}`, padding 14px `{spacing.xxl}`, 48px tall.

**`button-store-cart`** ——存储添加到墨盒中
- Background `{colors.store-blue-tint}`, text `{colors.store-blue}`, same shape as `button-store-buy`. The pair always sits side by side, cart first.

**`button-dark-pill`** 紧凑的暗药("现在抽搐")
- Background `{colors.ink}`, text `{colors.on-primary}` in `{typography.ui}`, `{rounded.full}`, padding 6px `{spacing.sm}`, 32px tall.

**`button-download-app`** ——脚踏车药("下载App").
- Background `{colors.footer-pill}`, text `{colors.on-primary}` in `{typography.button}`, `{rounded.pill}`, padding 10px `{spacing.md}`, 40px tall.

**`compare-options-button`** ——全宽存储面板按钮(“Compare 选项”)
- Background `{colors.canvas-soft}`, text `{colors.ink}` in `{typography.ui}`, `{rounded.sm}`, padding `{spacing.xl}`, with a blue circular chevron at right.

**`text-link`**, **`text-link-store`**, **`card-text-link`** ——内置链接
- `{colors.primary}` on the brand site, `{colors.store-blue}` in the store, and `{colors.link-blue}` "Learn More ›" on product and explore cards; all followed by a small chevron.

### 纸牌和集装箱

**`product-tile`** 家庭及类别照片瓦
- `{colors.fog}`- 录音室的制作 `{rounded.none}`,由 `{spacing.md}` 白色的沟槽, 以中心为中心 `tile-eyebrow`,标志型产品名称,短标签线和两个文本链接或胶囊形坐落在渲染物之上。

**`tile-eyebrow`** ——瓦片踢球手("初相机友好无人机").
- `{colors.ink-tertiary}` 输入 `{typography.ui}`.

**`tier-eyebrow`** ——产品等级标签("旗舰","三联旗舰相机无人机").
- `{colors.tier-orange}` 输入 `{typography.caption}`.

**`product-card`** ——分类页产品卡.
- `{colors.fog}` backdrop, square corners, `tier-eyebrow` above the logotype name, a tagline, then `button-primary` + `button-outline` side by side over the render.

**`comparison-tabs`** + **`comparison-tab-active`** ——台式机("空中影像","瞬间飞行").
- Inactive tabs in `{colors.ink-secondary}`, active tab in `{colors.ink}` with an ink underline, on a 1px `{colors.hairline}` track, `{typography.ui}`.

**`spec-column`** + **`spec-caption`** ——比较栏
- 产品制成, `tier-eyebrow`,模型名称 `{typography.product-name}`, a `button-primary` "哪里买"和 `card-text-link`,然后堆叠的光谱行:图标,值在 `{typography.spec-value}` 和标题 `{colors.steel}`.

**`explore-card`** - 白牌上,我给你 `{colors.fog}` 带
- Background `{colors.canvas}`, square corners, photo on top, centred title in `{typography.title-md}`, one-line description and a `card-text-link`.

**`field-card`** ——带有上贴标题的图片卡("影视制作","企业").
- Full photo, white title in `{typography.card-title-lg}`, subtitle and "Learn More ›" in white, square corners.

**`news-card`** ——编辑照片卡.
- 带有光线的照片 `tile-eyebrow`标题 `{typography.news-title}` 和文字链接,方圆角。

**`feature-link-band`** ——"哪里买/支持/飞行安全"乐队.
- Background `{colors.canvas-soft}`, padding `{spacing.section}` vertical, three centred columns of outline icon, title in `{typography.feature-title}` and a link.

**`media-tile`** ——存储特性瓦
- Background `{colors.media-black}`, white heading and paragraph over product renders or lifestyle photography, square corners, arranged in mixed one- and two-column rows.

**`in-box-tile`** ——"箱中"项目.
- Background `{colors.canvas-soft}`, square product cut-out, name below in `{typography.ui}` and a "× 1" count.

**`footnote-panel`** ——编号的标注
- Background `{colors.canvas-soft}`, `{typography.caption}` in `{colors.ink-secondary}`.

### 储存采购部件

**`benefits-panel`** ——航运和专题摘要,标题旁
- Background `{colors.panel}`, text `{colors.graphite}` in `{typography.ui}`, padding `{spacing.md}`, `{rounded.sm}` container, icon-led lists with a chevron.

**`option-card`** + **`option-card-active`** + **`option-card-disabled`** ——可选产品选项.
- Background `{colors.canvas}`, `{rounded.sm}`, title in `{typography.option-title}` `{colors.store-ink}` beside a product thumbnail, price below. Default has a 1px `{colors.card-border}` border and `{spacing.xl}` padding; selected has a 2px `{colors.store-blue}` ring with 23px padding; unavailable has a 1px dashed `{colors.dashed-border}` border and a red "Out of Stock" line in `{colors.error}`.

**`option-badge`** 角徽章上突出的选项
- Background `{colors.badge-orange}`, white `{typography.badge}`, padding 2px `{spacing.xs}`, rounded only at the bottom-left (8px), pinned to the card's top-right corner.

**`care-tag`** ——小 "DJI 店里挂着"关照"标签
- Background `{colors.store-blue}`, white `{typography.micro}`, `{rounded.xs}`, padding 0 `{spacing.xxs}`.

**`media-toggle`** + **`media-toggle-active`** ——画廊开关("图片"/"Intro").
- `{rounded.pill}`, 编译 `{spacing.xs}` 由 `{spacing.md}`, 32px 高; 活动填充 `{colors.ink}` 带有白色标签,非活动是纯文本。

**`quantity-stepper`** 辅助数量控制
- 中概述的减值、值和加值单元格 `{colors.control-border}`, `{typography.ui}`.

**`purchase-bar`** — sticky 带交货、价格和合同的
- Background `{colors.canvas}`, 1px `{colors.divider}` rule, soft shadow, padding `{spacing.md}` vertical; delivery selector at left, price in `{typography.price}`, then `button-store-cart` + `button-store-buy` at right.

**`region-banner`** ——店顶区域建议栏.
- Background `{colors.canvas}`, text `{colors.graphite}` in `{typography.ui}`, padding `{spacing.lg}` by `{spacing.sm}`, close icon at left and a `button-dark-pill` at right.

**`faq-row`** ——FAQ问题行.
- 问题 `{typography.faq}` `{colors.ink}`切夫龙右转 1px `{colors.divider}` 规则在下面。

### 输入表单( F)

**`newsletter-input`** – 深页脚上的页脚电子邮件字段
- Transparent, white `{typography.ui}` text, 1px `{colors.slate}` border rounded only on the left (4px), padding 4px 0 4px `{spacing.sm}`, 32px tall, joined to a square grey submit button.

### 签名组件

**`floating-circle-button`** ——浮动支持和后向上按钮
- 40px 圆圈 `{colors.canvas}` 以墨水图标和软浮影,固定在右边缘.

### Footer

**`footer`** ——品牌站脚
- Background `{colors.footer}`, padding `{spacing.xxl}` by `{spacing.md}`. A "Only in the DJI Store App" row with `button-download-app` sits above `{colors.footer-divider}` rules, then six link columns with `{typography.footer-heading}` headings in white and links in `{colors.footer-link}`, a subscribe field, social icons and a legal row.

**`footer-store`** ——仓库页脚
- Background `{colors.canvas-soft}`, headings in `{colors.graphite}`, links in `{colors.slate}` `{typography.caption}`, a subscribe field outlined in `{colors.input-border}` and a legal row.

### 实例(说明性)

> 说明性演示表面。 `ex-*` 条目仅由上面的品牌原始人组成(商店) `option-card` 形状, `button-primary` / `button-store-buy` 胶囊形, `canvas` / `canvas-soft` 表面和地表 Open Sans ,所以,同一个十例 不断的出现皮肤 DJI颜色,光度和间隔。

**`ex-pricing-tier`** ——默认定价等级卡。 feature-card 带品牌的铬 canvas-soft 表面。
- 属性 : `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** ——地貌/高亮的层次——极性-浮点表面(暗色填充+光线文字在光线模式下,浅色填充+暗色文字在暗线模式下).
- 属性 : `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** ——彩色/大小采摘者染色体——时尚/DTC变种选择器.
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** ——购物车抽屉 DTC/时尚品牌 实际车型为铬.
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
- Let product photography fill square, gutter-separated tiles; keep text centred above the render.
- Use `{colors.primary}` (brand site) or `{colors.store-blue}` (store) for every primary action, always as a pill.
- 给一个装满的蓝色胶囊形加一个 1px `{colors.ink}` 二级手术的避孕药
- 使用白话 `button-hero-ghost` 胶囊形 黑暗首屏摄影。
- 将全部文本设置在 Open Sans 微弱负跟踪,并使用墨水不透明步骤(`{colors.ink}`, `{colors.ink-secondary}`, `{colors.ink-tertiary}`)为分级.
- 标记产品等级, 并小 `tier-eyebrow` 输入 `{colors.tier-orange}`.
- In the store, group choices into `{rounded.sm}` option cards and show selection with a 2px `{colors.store-blue}` ring.
- Close pages with the `{colors.footer}` footer on the brand site and `{colors.canvas-soft}` in the store.

### Don't
- Don't round photo tiles, cards or media tiles; only pills, option cards and small tags are rounded.
- Don't use more than one blue on the same surface; the brand site and the store each have their own.
- 切勿用橙色来扣扣或大填充;它保留给小排位标签和选项徽章.
- 文本不要使用纯黑色; 使用 `{colors.ink}`.
- Don't add drop shadows to tiles or cards; keep shadows for floating buttons and the sticky purchase bar.
- 标题不要重于 600 或音轨类型正数。

## 设计词元原值

分析 DJI设计语言——无人机和摄像机的产品摄影展示室 满腔血浆的录音室 将平面、沟槽和牌子 放在白色页面底色上 每一个动作都是圆形胶囊形 在一个工程蓝色中 类型是严密跟踪的 Open Sans 以近黑墨水形式在不透明处设置,小橙色等级标签标出产品等级,以及储存层 8px 选项牌, a sticky 在同一限制系统之上购买栏和灰色灰色板,然后关闭一个木炭脚。

```yaml
---
version: alpha
name: DJI Analysis
description: An analysis of DJI's design language — a product-photography showroom for drones and cameras, where full-bleed studio renders sit in square, gutter-separated tiles on a white canvas, every action is a rounded pill in a single engineering blue, type is a tightly tracked Open Sans set in near-black ink at stepped opacities, small orange tier labels mark product rank, and the store layers 8px option cards, a sticky purchase bar and pale grey panels on top of the same restrained system before closing on a charcoal footer.

colors:
  primary: "#0070d5"          # DJI Blue — Store pill, Buy Now pills, active selector, announcement link
  store-blue: "#0060ef"       # store Buy Now, Add to Cart label, selected option border, store links
  store-blue-tint: "#deeafd"  # Add to Cart pill fill (store blue at 13% on white)
  on-primary: "#ffffff"       # labels on blue and dark pills, hero text over photography
  link-blue: "#1890ff"        # "Learn More ›" / "Buy Now ›" text links on product cards
  tier-orange: "#be4e04"      # product tier eyebrows ("Flagship", "Advanced")
  badge-orange: "#fa8c16"     # option corner badge
  error: "#f5222d"            # "Out of Stock"
  canvas: "#ffffff"           # page canvas, cards, nav, purchase bar
  canvas-soft: "#f7f9fa"      # feature-link band, store panels, In the Box tiles, store footer
  panel: "#f6f8f9"            # product benefits panel
  fog: "#f5f5f5"              # Explore More band, product-card backdrop, region pill
  announce: "#fafafa"         # announcement bar, category icon strip
  media-black: "#000000"      # store feature media tiles
  footer: "#272727"           # brand-site footer
  footer-pill: "#383838"      # Download App pill on the footer
  footer-divider: "#414141"   # footer rules
  ink: "#262626"              # headings and body (black at 85%)
  ink-secondary: "#595959"    # secondary text, inactive tabs (black at 65%)
  ink-tertiary: "#8c8c8c"     # tile eyebrows (black at 45%)
  store-ink: "#333333"        # store product and option titles
  graphite: "#3b3e40"         # store body copy and section headings
  nav-ink: "#303233"          # nav labels on white
  slate: "#6c7073"            # store footer links, input text, footer field border
  steel: "#9fa3a6"            # spec captions
  footer-link: "#b3b3b3"      # brand footer links (white at 65%)
  hairline: "#f0f0f0"         # tab track rule
  divider: "#e8e8e8"          # FAQ rows, purchase-bar rule
  card-border: "#d9d9d9"      # option card border
  dashed-border: "#dddddd"    # unavailable option card (dashed)
  input-border: "#d4d7d9"     # store email field
  control-border: "#cccccc"   # quantity stepper, checkbox

typography:
  display-xl:
    fontFamily: Open Sans
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -1.44px
  display:
    fontFamily: Open Sans
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -1.2px
  spec-value:
    fontFamily: Open Sans
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -1.2px
  heading:
    fontFamily: Open Sans
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.125
    letterSpacing: -0.96px
  card-title-lg:
    fontFamily: Open Sans
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.125
    letterSpacing: 0
  news-title:
    fontFamily: Open Sans
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: 0
  title-md:
    fontFamily: Open Sans
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.17
    letterSpacing: -0.72px
  product-name:
    fontFamily: Open Sans
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: -0.72px
  price:
    fontFamily: Open Sans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.4px
  subhead:
    fontFamily: Open Sans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.6px
  feature-title:
    fontFamily: Open Sans
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  option-title:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: -0.36px
  body:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.32px
  button:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.32px
  faq:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: -0.32px
  ui:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: -0.28px
  nav:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.28px
  caption:
    fontFamily: Open Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: -0.24px
  badge:
    fontFamily: Open Sans
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: -0.24px
  footer-heading:
    fontFamily: Open Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 2.0
    letterSpacing: 0
  micro:
    fontFamily: Open Sans
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.8
    letterSpacing: -0.2px

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  xl: 60px
  xxl: 64px
  pill: 100px
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
  huge: 48px
  section: 64px

components:
  announcement-bar:
    backgroundColor: "{colors.announce}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
  nav-bar-overlay:
    textColor: "{colors.on-primary}"
    typography: "{typography.nav}"
    rounded: "{rounded.none}"
    height: 64px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.nav-ink}"
    typography: "{typography.nav}"
    rounded: "{rounded.none}"
    height: 64px
  button-store-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.nav}"
    rounded: "{rounded.full}"
    padding: "8px 16px 8px 34px"
    height: 32px
  region-pill:
    backgroundColor: "{colors.fog}"
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: "0px 12px"
    height: 32px
  button-hero-ghost:
    textColor: "{colors.on-primary}"
    borderColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.xxl}"
    padding: "5px 16px"
    height: 32px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "0px 16px"
    height: 40px
  button-outline:
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "0px 15px"
    height: 40px
  button-outline-lg:
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "14px 16px"
    height: 48px
  button-store-buy:
    backgroundColor: "{colors.store-blue}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
    height: 48px
  button-store-cart:
    backgroundColor: "{colors.store-blue-tint}"
    textColor: "{colors.store-blue}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
    height: 48px
  button-dark-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
    height: 32px
  button-download-app:
    backgroundColor: "{colors.footer-pill}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
    height: 40px
  compare-options-button:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "24px"
  text-link:
    textColor: "{colors.primary}"
    typography: "{typography.ui}"
  text-link-store:
    textColor: "{colors.store-blue}"
    typography: "{typography.ui}"
  card-text-link:
    textColor: "{colors.link-blue}"
    typography: "{typography.body}"
  product-tile:
    backgroundColor: "{colors.fog}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
  tile-eyebrow:
    textColor: "{colors.ink-tertiary}"
    typography: "{typography.ui}"
  tier-eyebrow:
    textColor: "{colors.tier-orange}"
    typography: "{typography.caption}"
  product-card:
    backgroundColor: "{colors.fog}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
  category-strip:
    backgroundColor: "{colors.announce}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    height: 124px
  comparison-tabs:
    textColor: "{colors.ink-secondary}"
    borderColor: "{colors.hairline}"
    typography: "{typography.ui}"
    padding: "14px 0px"
  comparison-tab-active:
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.ui}"
  spec-column:
    textColor: "{colors.ink}"
    typography: "{typography.spec-value}"
  spec-caption:
    textColor: "{colors.steel}"
    typography: "{typography.ui}"
  explore-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
  field-card:
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title-lg}"
    rounded: "{rounded.none}"
  news-card:
    textColor: "{colors.ink}"
    typography: "{typography.news-title}"
    rounded: "{rounded.none}"
  feature-link-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.feature-title}"
    padding: "64px 0px"
  store-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
  care-tag:
    backgroundColor: "{colors.store-blue}"
    textColor: "{colors.on-primary}"
    typography: "{typography.micro}"
    rounded: "{rounded.xs}"
    padding: "0px 4px"
  benefits-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.graphite}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "16px"
  option-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.store-ink}"
    borderColor: "{colors.card-border}"
    typography: "{typography.option-title}"
    rounded: "{rounded.sm}"
    padding: "24px"
  option-card-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.store-ink}"
    borderColor: "{colors.store-blue}"
    typography: "{typography.option-title}"
    rounded: "{rounded.sm}"
    padding: "23px"
  option-card-disabled:
    textColor: "{colors.store-ink}"
    borderColor: "{colors.dashed-border}"
    typography: "{typography.option-title}"
    rounded: "{rounded.sm}"
    padding: "24px"
  option-badge:
    backgroundColor: "{colors.badge-orange}"
    textColor: "{colors.on-primary}"
    typography: "{typography.badge}"
    padding: "2px 8px"
  media-toggle:
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: 32px
  media-toggle-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: 32px
  quantity-stepper:
    textColor: "{colors.store-ink}"
    borderColor: "{colors.control-border}"
    typography: "{typography.ui}"
  purchase-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.divider}"
    typography: "{typography.price}"
    padding: "16px 0px"
  region-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.graphite}"
    typography: "{typography.ui}"
    padding: "20px 12px"
  media-tile:
    backgroundColor: "{colors.media-black}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  in-box-tile:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
  faq-row:
    textColor: "{colors.ink}"
    borderColor: "{colors.divider}"
    typography: "{typography.faq}"
  footnote-panel:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
  floating-circle-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    size: 40px
  newsletter-input:
    textColor: "{colors.on-primary}"
    borderColor: "{colors.slate}"
    typography: "{typography.ui}"
    padding: "4px 0px 4px 12px"
    height: 32px
  footer:
    backgroundColor: "{colors.footer}"
    textColor: "{colors.footer-link}"
    borderColor: "{colors.footer-divider}"
    typography: "{typography.footer-heading}"
    padding: "32px 16px"
  footer-store:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.slate}"
    typography: "{typography.caption}"

  # ─── Examples (illustrative) — kit-mirror surfaces composed from the primitives above ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.card-border}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "Color/size picker chrome — fashion / DTC variant selector."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  ex-cart-drawer:
    description: "Shopping cart drawer — DTC / fashion brand actual cart chrome."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
    item-divider: "{colors.divider}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.divider}"
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
    padding: "{spacing.huge}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body}"

---
```
