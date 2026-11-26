# Airbnb · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Airbnb is the canonical example of a generous, photography-led consumer marketplace. The base canvas is **pure white** (`{colors.canvas}` — #ffffff) with deep near-black ink (`{colors.ink}` — #222222) for headlines and body, and a single voltage of **Rausch** (`{colors.primary}` — #ff385c) carrying every primary CTA, the search-button orb, the heart save state, and inline brand links. There is no secondary brand color in mainline marketing — the **Luxe purple** (`{colors.luxe}` — #460479) and **Plus magenta** (`{colors.plus}` — #92174d) tokens are sub-brand accents that only appear inside Airbnb Luxe / Plus contexts.

Type runs **Airbnb Cereal VF** (a custom variable font Airbnb licenses), with **Circular** as the historic in-house fallback and a system stack underneath. Cereal sits at modest weights — display headlines render at 22–28px in weight 500–600, not the heavy 700+ weights that financial or enterprise systems lean on. The hero h1 ("Inspiration for future getaways") on the homepage is just 28px / 700, which would feel small on a typical SaaS page; here it works because the layout leans on photography (city collage, property cards) for visual weight rather than typographic muscle.

The shape language is **soft**. Buttons are 8px radius (`{rounded.sm}`), property cards are ~14px (`{rounded.md}`), the search bar is fully pill-shaped (`{rounded.full}`), wishlist hearts and search orbs are circles (`{rounded.full}`), and category strip rounded corners run at 32px (`{rounded.xl}`). There is essentially no hard corner anywhere except the body grid itself — every interactive element is rounded.

**关键特征 :**
- 单声调 color: `{colors.primary}` (#ff385c ——"Rausch")搭载着每一个初级CTA,搜索球体,心存状态,以及品牌字号. 使用很少——大多数页都是. 90% 白色+墨水加一两个劳施瞬间.
- Custom variable type: `Airbnb Cereal VF`. Display weights sit at 500–700, body at 400. Modest weight is intentional — the system trusts photography for visual heft.
- Three-product top nav: Homes, Experiences, Services — each with a hand-illustrated 32px icon and "NEW" badges (`{component.new-tag}`) on the two newer products. Active tab uses an underline rule (`{component.product-tab-active}`).
- Pill-shaped global search bar: white surface, fully rounded (`{rounded.full}`), divided by 1px hairlines into Where / When / Who segments, terminated by a circular Rausch search orb (`{component.search-orb}`).
- 属性卡是照片第一: aspect-ratio 矩形为 `{rounded.md}` 角剪,可刷的图像旋转木马, "贵宾最喜欢的"浮标 左上,心脏图标右上,然后 4–5 线条 meta 下方,我们来
- 编辑降(footer,语言采摘者)是白帆上方的干净文本列——没有卡片表面,没有阴影.
- 设计系统在一层阴影层上盖上高度(`box-shadow: rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px, rgba(0,0,0,0.1) 0 4px 8px`) ——用于悬浮卡和搜索/账户下架.
- 8px 基底间隔系统,主要各节均位于 `{spacing.section}` (64px)——慷慨但气息不够,感觉有编辑杂志的美景;市场密度要求每卷卷多张牌.


## 配色

### 品牌和 强调色
- **劳施** (`{colors.primary}` — #ff385c:单品牌颜色 用于初级CTA背景(Reserve,Continent),搜索 Ob,地产卡上心脏保存状态,以及内置品牌链接,消费者旅行中最可识别的颜色.
- **活跃的劳施** (`{colors.primary-active}` — #e00b41: 压/指向下变体——略多饱和. 使用于 `{component.button-primary-active}`.
- **劳施已禁用** (`{colors.primary-disabled}` — #ffd1da:一种在残废的CTA上使用的苍白的锡.
- **Luxe Purple** (`{colors.luxe}` — #460479): Sub-brand accent for Airbnb Luxe. Only appears inside Luxe-branded surfaces — never in mainline marketing.
- **Plus Magenta** (`{colors.plus}` — #92174d): Sub-brand accent for Airbnb Plus. Same scoping as Luxe — sub-product only.

### 表面
- **页面底色** (`{colors.canvas}` — #ffffff:每个公共页面的默认页面层. Airbnb 公共网络上没有暗模式。
- **表面软** (`{colors.surface-soft}` — #f7f7f7:最轻的填充器——用于残基, sub-nav 悬浮背景, 和内置搜索过滤带。
- **表面坚固** (`{colors.surface-strong}` — #f2f2f2: 稍重的填充量 -- circular 图标按钮表面(例如面包屑背面-窄边和列出工具栏按钮)。

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #dddddd): The default 1px border tone — search bar dividers, table separators, footer column splitters, card 1px borders.
- **柔软的细边线** (`{colors.hairline-soft}` — #ebebeb:长卷编辑机分离器上使用的较轻的分隔器.
- **边界强势** (`{colors.border-strong}` — #c1c1c1:在已停用的大纲按钮上使用的重中风,在焦点后形成输入大纲.

### 文本
- **Ink** (`{colors.ink}` — #222222): The dominant text color on light surfaces. Display headlines, body paragraphs, primary nav links, and most inline link text. Never pure black.
- **体质** (`{colors.body}` — #3f3f3f: 长式复检和体贴副本中墨水会觉得太重的二次运行文字颜色.
- **静音** (`{colors.muted}` — #6a6a6a: 城市链接区块内的字幕("Cottage lears","Villa lears"),不活动 product-tab 标签,页脚类子标签,"查看所有"链接.
- **静音软体** (`{colors.muted-soft}` — #929292: 已禁用链接文本。 使用时非常省时 。
- **星级评分** (`{colors.star-rating}` — #222222: 同样的墨迹—— Airbnb'星号图标和'4.81" 评级数字都用墨水而不是黄/金色表示,这是有意的品牌选择(黄星在旅行背景中感觉便宜)。
- **小学** (`{colors.on-primary}` — #ffffff: Rausch CTAs上的白文本.

### 语义
- **错误** (`{colors.primary-error-text}` — #c13515: 内置错误文本用于形式验证. 区别于劳施——略暗,饱和度较高的红色.
- **错误** (`{colors.primary-error-text-hover}` — #b32505: 链接上的黑暗悬浮。
- **法律链接蓝** (`{colors.legal-link}` — #428bff: 法律副本(Privacy, Terms)内置链接,仅用于法律子带内.

### 闪光
- **Scrim** (`{colors.scrim}` — #000000 at 50% opacity): The global modal backdrop tone — date picker, login dialog, language picker. Stored as the base hex; opacity is applied at render time.


## 字体排版

### 字体家族
系统运行 **Airbnb Cereal VF** 显示、身体、导航、标题、缩微复制。 `Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif`. **Circular** 是一个历史的内置排版, 仍作为第一个不可变的倒置; 系统堆叠备份它。

There is no separate display family. The variable font carries the entire scale.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.rating-display}` | 64px | 700 | 1.1 | -1px | 列出详细评级显示 (")4.81") |
| `{typography.display-xl}` | 28px | 700 | 1.43 | 0 | Homepage h1 ("Inspiration for future getaways") |
| `{typography.display-lg}` | 22px | 500 | 1.18 | -0.44px | 列出详细情况h1 ("关闭费提耶·阿利亚·巴里海滩...") |
| `{typography.display-md}` | 21px | 700 | 1.43 | 0 | 科长在列表中的细节("这里提供的东西") |
| `{typography.display-sm}` | 20px | 600 | 1.20 | -0.18px | 子节标题("要知道的事情"). |
| `{typography.title-md}` | 16px | 600 | 1.25 | 0 | 城市链接块标题 ("维尔明顿","雅典") |
| `{typography.title-sm}` | 16px | 500 | 1.25 | 0 | Footer column heads ("Support", "Hosting", "Airbnb") |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 列表副本中默认的运行文本 |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | 纸牌 meta 线条、日期、价格、距离文本 |
| `{typography.caption}` | 14px | 500 | 1.29 | 0 | 搜索场段标签 ("在哪里", "何时", "谁" ) |
| `{typography.caption-sm}` | 13px | 400 | 1.23 | 0 | Footer legal line ("© 2026 Airbnb, Inc.") |
| `{typography.badge}` | 11px | 600 | 1.18 | 0 | "最受欢迎的"浮标文字 |
| `{typography.micro-label}` | 12px | 700 | 1.33 | 0 | 纸质纪念微标签(“内置” 6") |
| `{typography.uppercase-tag}` | 8px | 700 | 1.25 | 0.32px (uppercase) | 产品导航标签上的"NEW"徽章 |
| `{typography.button-md}` | 16px | 500 | 1.25 | 0 | 首选项按钮标签 |
| `{typography.button-sm}` | 14px | 500 | 1.29 | 0 | 胶囊形按钮标签( 类别条形) |
| `{typography.link}` | 14px | 400 | 1.43 | 0 | 内在体链接 |
| `{typography.nav-link}` | 16px | 600 | 1.25 | 0 | 顶级产品导航标签(主题、经验、服务) |

### 原则
Display weights stay modest. The homepage h1 at 28px / 700 is deliberately small — it tucks under the search bar so photography and the city-link grid carry visual hierarchy. The listing-detail h1 at 22px / 500 is even quieter; the listing photo banner does the work above it.

The single typographically loud moment in the entire system is the **rating display** (`{typography.rating-display}` — 64px / 700) on listing pages. That is the only place the system trusts type alone to carry hierarchy — rating numbers are a peak trust signal, so they get the loudest treatment.

### Note on Font Substitutes
If Airbnb Cereal VF and Circular are unavailable, **Inter** is the closest open-source substitute. Adjust display headlines down by ~2% in line-height to match Cereal's slightly tighter cap height; otherwise the proportions transfer cleanly.


## 布局

### 间距系统
- **基部单位:** 4px (与 2px 微步(英语:Micro-step).
- **脚本 :** `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 64px.
- **节贴( 垂直) :** `{spacing.section}` (64px)主要页面段;比典型的SaaS营销更紧凑(80–96px),因为市场页需要提高每卷卷的卡片密度.
- **Card internal padding:** `{spacing.lg}` (24px) for `{component.host-card}` and `{component.reservation-card}`; `{spacing.base}` (16px) for property-card meta block; `{spacing.sm}` (8px) for caption / date-row gutters.
- **Gutters:** `{spacing.base}` (16px) between cards in the homepage city grid; `{spacing.lg}` (24px) inside footer column gutters; `{spacing.xs}` (4px) on dense category-strip dividers.

### 网格容器( C)
- **最大内容 width:** ~1280px centered on the homepage and editorial pages. Listing detail pages cap closer to 1080px to keep the photo banner and reservation rail readable.
- **城市链接网格(homepage foper):** 6- 桌面上各栏的网格,每个单元格内都有一个城市名称 `{typography.title-md}` 和分类子标签 `{typography.body-sm}` 哑哑.
- **列出细节 :** 2- 左边有照片/体型的柱子(~64% 宽度)和 a sticky 预订卡( $ 1)`{component.reservation-card}`右边( 右侧)~32%).
- **Footer:** 3-column link list (Support / Hosting / Airbnb) at desktop, collapsing to 1-column on mobile.

### 白空间哲学
系统给编辑带 64px 垂直呼吸室但压缩卡网——财产和城市连接卡坐只是 16px 对比是有意的:页面读作“开放的首屏,密集的市场下面”,强化市场的性质,而不给观众打倒。


## 升迁

该系统基本上具备: **一层阴影** 加上平面基线。

- **Flat (no shadow):** Body, hero, footer, all editorial bands — 95% of surfaces.
- **Card hover float:** `box-shadow: rgba(0, 0, 0, 0.02) 0 0 0 1px, rgba(0, 0, 0, 0.04) 0 2px 6px 0, rgba(0, 0, 0, 0.1) 0 4px 8px 0` — applied to property cards on pointer hover, the search bar at rest, and the dropdown menus (account menu, language picker, date picker). This is the single shadow definition in the entire system.
- **Modal scrim:** `{colors.scrim}` rendered at 50% opacity — the global modal backdrop. Used on date pickers, login dialogs, language picker.

There are no progressive elevation tiers — the system either has the one shadow or none. Depth comes from photography, the white-on-white surface separation, and rounded-corner clipping rather than from layered shadows.


## 组件

### 按钮

**`button-primary`** 劳施填充,白文本, 8px 半径, 14×24px 贴着, 48px 身高,字重 500,系统上最常见的CTA:"Reserve","Continue","Search",账户流初选.

**`button-primary-active`** — The press state. Background flips to `{colors.primary-active}`. No transform, no shadow change.

**`button-primary-disabled`** - 淡色的劳施锡特 #ffd1da 与白文本一起使用。 Cursor 不被承认。

**`button-secondary`** 白色的墨水文字和一个 1px 墨水大纲. 8px 半径,用于"拯救","放弃",以及反向CTA在劳施表面.

**`button-tertiary-text`** ——普通墨文字,无表面,无边框,下划线在悬浮上,用于"显示更多"类型链接和模式近距离标签.

**`button-pill-rausch`** ——在特色细胞上使用的避孕药形Rausch CTA(如"成为主机"子CTA)——. 9999px 半径, 10×20px 贴着, 14px 标签。

### 搜索表面

**`search-bar-pill`** 签名全球搜索栏 白色填充 9999px 半径, 64px 身高, 高点, 1px 细边线 1px- 阴影边框。内部被垂直的细边线规则分割为: `{component.search-field-segment}` 单元格 (Where / When / Who) 。每个段在占位符行上方有一个大写标题标签 `{typography.caption}`.

**`search-orb`** - 风景 circular rausch orb 终止搜索栏右侧边缘 。 48×48px,完全圆形,白色放大镜图标居中心,主页最热的单色瞬间.

### 顶端导航

**`top-nav`** - 白色表面, 80px 身高, 高点, 1px 底细边线,是 Airbnb 单词标记坐左冲,三个产品标签(Homes / Everysys / Services)坐右冲,账户工具(host link, 语言地球, 账户菜单)坐右冲.

**`product-tab-active`** ——墨水标签英寸 `{typography.nav-link}`, 32px 手触动的图标, 2px 墨水在图标标签对下划线规则。

**`product-tab-inactive`** — Muted label, illustrated icon, no underline. Becomes active on click.

**`new-tag`** 微小圆形的溢出徽章(`{rounded.full}`) 锁定图标的右上角,带有大写“NEW”标签 `{typography.uppercase-tag}` (8px / 700 与 0.32px 用于显示恢复性的经验和服务。

### 挂牌游戏

**`property-card`** ——一张照相第一卡. 1:1 aspect-ratio 图像为 `{rounded.md}` 角剪,图像旋转点叠, "贵宾最喜欢的"浮标 左上角(`{component.guest-favorite-badge}`),右上方的心脏图标(`{component.icon-button-circle}` 默认状态下, 保存时填充了 Rausch 。 图像下方 : 4–5 线条 meta 标题(`{typography.title-md}`),距离/日期(`{typography.body-sm}` ),和价("$X夜")右对调.

**`property-card-photo`** ——照片盘本身,分离为符号,因为有些表面(wishlist,搜索结果)只重复使用没有照片的图片. meta 块。

**`experience-card`** ——高标牌(图).4:5),用于经验清单。 `{rounded.md}` 剪辑,浮动"NEW"徽章左上,心脏右上,下面是单行标题.

**`guest-favorite-badge`** — White rounded pill (`{rounded.full}`) at 11px / 600 weight. Sits over the photo with the system's only shadow tier applied for elevation.

### 列出详细情况

**`rating-display-card`** 签字列名-详细时刻。 64px / 700 评级编号 (")4.81")由细小的劳雷尔-花环SVG饰品左右侧侧. 下注:"嘉宾最爱"标签线和一排墨质的Stat列,是整个系统中排版量最大的.

**`amenity-row`** — A 1-column list of amenity icons + ink labels in `{typography.body-md}`. 12px row padding, no border between rows; section is closed by a 1px hairline divider above and below.

**`reviews-card`** — A 2- 栏内审查摘录。每个栏内有一个作者行( avatar, 名称, 日期) 以上 a 3- 线性节选与"显示更多"第三链接.

**`host-card`** — A white card with `{rounded.md}` rounding and 24px padding holding a host avatar, name, "Superhost" badge, response-rate stat, and a "Contact host" `{component.button-secondary}`.

**`reservation-card`** - 风景 sticky 右侧的卡片,详细列出页。 `{rounded.md}` 圆圈 1px 细边线边界, 1px 阴影高地, 24px 贴纸。包含:夜间价格(含:`{typography.display-md}` 墨水),日期范围选择器,客座计数阶梯,"Reserve"初级CTA全宽,以及下方的收费折叠堆叠 `{typography.body-sm}`.

### 约会拾取器

**`date-picker-day`** — A 40×40px circular 带有日数的单元格 `{typography.body-sm}`默认状态为 transparent 填充,墨水文本。

**`date-picker-day-selected`** ——墨填,白文字,全圆(.`{rounded.full}`。两个选定日期之间的范围表示a `{colors.surface-soft}` 连接他们的洛森格背景.

### Forms

**`text-input`** — White surface, 1px hairline outline, `{rounded.sm}` 8px radius, 56px height, 14×12px padding. Stacked label above (in `{typography.caption}` muted), placeholder text in `{typography.body-md}` muted. On focus, the border thickens to 2px ink and the border color flips to `{colors.ink}` — no glow, no ring.

### Footer

**`footer-light`** ——白色表面(与页页面底色相匹配) —— Airbnb 没有任何反比脚, 48×80px 。三列链接块(支持/主机 / Airbnb),被宽宏大量地分离. 24px 沟槽,每个柱头都有 `{typography.title-sm}` 墨水标签和堆栈 `{component.footer-link}` 列数 `{typography.body-sm}` 墨水(变种).

**`legal-band`** — A bottom strip beneath the footer columns carrying the copyright line, language picker (globe icon + "English (US)" link), currency picker, and social icons (Facebook, X, Instagram). All text in muted `{colors.muted}` at `{typography.caption-sm}`.


## 响应式规则

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 744px | 顶端导航崩溃为标志+汉堡; 产品标签隐藏在工作表后面; 搜索栏崩溃为单个可调试的胶囊形; 属性卡堆 1- 上;城市网格 1-栏;列出细节后,保留卡会倒塌到一个 sticky 底边栏. |
| Tablet | 744–1128px | Top nav keeps product tabs but search bar narrows; property cards 2-up; city grid 2–3 column; reservation card stays sticky right-rail at narrower width. |
| 桌面 | 1128–1440px | 以三个产品标签为中心, 完全顶端导航; 以全胶囊形宽度搜索栏, 全部 3 可见的段; 属性卡 4- 上;城市网格 6-栏; 列表细节 2- 和预留铁路的栏杆 |
| 宽 | > 1440px | 内容宽度上限, 以 1440px 清单/搜索网页和 ~1280px 编辑部;排水沟吸收其余部分。 |

### 触控区域
- 初级社区协议至少 48×48px (上WCAG AAA).
- 搜索对象为 48×48px circular ——页面上最贴近的元素.
- 保存心脏按钮是 32×32px circular ——AAA的边界线,但由慷慨的补偿. 12px 贴在照片卡里
- 日期选择日单元格为 40×40px circular.

### 折叠战略
- 顶级产品标签会倒塌到下面的汉堡单上 744px.
- 搜索栏 3 片段崩溃为单塔条目,打开移动上的全屏搜索覆盖。
- 属性和城市链接网格在每一个断点都清晰地计算出列数——永远不回流行;总是减少列数.
- 上市细节开关的预留卡 sticky 右导线至 a sticky 手机上底层栏杆,仅携带"Reserve"CTA+夜价汇总.


## 已知缺口

- **隐藏状态颜色 :** 故意不记录全球无抵押权政策—— Airbnb实际数 `:hover` 地产卡的造型是一种微妙的升降机,但精确提取是不可靠的.
- **装入状态/ 骨架屏幕 :** 无法在提取的表面看到。
- **地图视图样式 :** 搜索结果地图使用自定义的Rausch标记的 Mapbox-tinted 牌; 此处没有捕获 。
- **窗体输入错误 :** 错误的文本颜色( E)`{colors.primary-error-text}`)被记录,但在捕获的表面中无法看到关于验证失败的完整输入大纲+帮助文本组合.
- **子品牌调色板 :** 吕克塞语( L)`{colors.luxe}`)和加号(`{colors.plus}`)作为符号被记录,但其完整的子系统(拼写功能超常,表面处理)则生活在单独的子域上,在此不捕捉.

## 设计词元原值

A warm, generous consumer marketplace anchored on a clean white canvas and Airbnb Rausch (#ff385c), the single brand voltage that carries every primary CTA, search-button orb, and rating dot. Type runs Airbnb Cereal VF at modest weights — display sits at 22–28px in weight 500/600 rather than the heavy 700+ that fintech and enterprise systems use; the brand trusts photography and generous whitespace over typographic muscle. Three product entries (Homes, Experiences, Services) sit in the top nav with hand-illustrated 32-icon glyphs and "NEW" badges, signaling a marketplace expansion rather than a feature dump. Pill-shaped search bars (`{rounded.full}`), softly rounded property cards (`{rounded.lg}` ~14px), and 32px button radii read as friendly and human — there is no hard corner anywhere except the body grid.

```yaml
---
version: alpha
name: Airbnb-design-analysis
description: A warm, generous consumer marketplace anchored on a clean white canvas and Airbnb Rausch (#ff385c), the single brand voltage that carries every primary CTA, search-button orb, and rating dot. Type runs Airbnb Cereal VF at modest weights — display sits at 22–28px in weight 500/600 rather than the heavy 700+ that fintech and enterprise systems use; the brand trusts photography and generous whitespace over typographic muscle. Three product entries (Homes, Experiences, Services) sit in the top nav with hand-illustrated 32-icon glyphs and "NEW" badges, signaling a marketplace expansion rather than a feature dump. Pill-shaped search bars (`{rounded.full}`), softly rounded property cards (`{rounded.lg}` ~14px), and 32px button radii read as friendly and human — there is no hard corner anywhere except the body grid.

colors:
  primary: "#ff385c"
  primary-active: "#e00b41"
  primary-disabled: "#ffd1da"
  primary-error-text: "#c13515"
  primary-error-text-hover: "#b32505"
  luxe: "#460479"
  plus: "#92174d"
  ink: "#222222"
  body: "#3f3f3f"
  muted: "#6a6a6a"
  muted-soft: "#929292"
  hairline: "#dddddd"
  hairline-soft: "#ebebeb"
  border-strong: "#c1c1c1"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface-card: "#ffffff"
  surface-strong: "#f2f2f2"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  legal-link: "#428bff"
  star-rating: "#222222"
  scrim: "#000000"

typography:
  display-xl:
    fontFamily: "'Airbnb Cereal VF', Circular, -apple-system, system-ui, Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0
  display-lg:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: -0.44px
  display-md:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0
  display-sm:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.18px
  title-md:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  title-sm:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  rating-display:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  body-md:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  caption:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  caption-sm:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: 0
  badge:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: 0
  micro-label:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0
  uppercase-tag:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 8px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.32px
    textTransform: uppercase
  button-md:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  link:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  nav-link:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 14px
  lg: 20px
  xl: 32px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 14px 24px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 13px 23px
    height: 48px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
  button-pill-rausch:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 10px 20px
  search-orb:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    height: 48px
  icon-button-circle:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 32px
  icon-button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 40px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 80px
  product-tab-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
  product-tab-inactive:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
  search-bar-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 14px 24px
    height: 64px
  search-field-segment:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: 8px 24px
  category-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.button-sm}"
  category-tab-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.none}"
  property-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
  property-card-photo:
    rounded: "{rounded.md}"
  experience-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.md}"
  city-link-block:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
  rating-display-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.rating-display}"
  guest-favorite-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.badge}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  new-tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.uppercase-tag}"
    rounded: "{rounded.full}"
    padding: 2px 6px
  amenity-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 12px 0
  reviews-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  host-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 24px
  reservation-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  date-picker-day:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
  date-picker-day-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 14px 12px
    height: 56px
  footer-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: 48px 80px
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  legal-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption-sm}"
---
```
