# PlayStation · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

PlayStation's marketing system reads like a console launch trailer scrolling past the viewer in chapters. Each section is a full-bleed band — pure black `{colors.canvas-dark}`, true white `{colors.canvas-light}`, or PlayStation Blue `{colors.primary}` — and each chapter owns one editorial moment: hero console photography, a games-coming-soon strip, the PlayStation Plus tier banner, the "30 Years of PlayStation" anniversary band, the news strip from the PlayStation Blog. There is no decorative chrome between chapters; the section background change IS the divider. Sections stack at `{spacing.section}` (96px) rhythm with the next band's color taking over the page edge-to-edge.

The system has two distinct surface modes that alternate down the page: a **dark canvas mode** for editorial product moments (hero, "ON PLAYSTATION" band, marathon game pages) and a **light canvas mode** for utility surfaces (PS5 games listing, support pages, news index). Both modes use the same chrome vocabulary — fully-rounded `{rounded.full}` pill buttons, 8px-radius `{rounded.md}` cards, the proprietary PlayStation SST face — only the surface and on-surface colors change. The third surface mode is the **PlayStation Blue band** (`{colors.primary}` — `#0070d1`) reserved for the highest-priority moments: the Marathon launch CTA strip, the footer, and any "Action Required" banner.

排版是系统最独特的选择. PlayStation SST 使标题显示于 **字重 300** (光)——对于一个可以轻易到达粗体几何显示面孔的游戏品牌来说,不寻常. 轻量级使铬具有了一种空气,几乎是编辑质量,让图像说话; 复制是信息而不是装饰. 标题大小在紧加量中下降( )54 → 44 → 35 → 28 → 22 → 18尸体就安顿在 18px 与 1.5 line-height 用于在支持和游戏页面上进行舒适的长式阅读。

**关键特征 :**
- Three-canvas chapter system: `{colors.canvas-dark}` (black), `{colors.canvas-light}` (white), `{colors.primary}` (PlayStation Blue) alternating down the page
- PlayStation 蓝色( B)`{colors.primary}` — `#0070d1`)是普及的初级CTA——全圆胶囊形,可使用 `{rounded.full}` (9999px)
- 橙色商业( 4, 5, 5, 5, 6, 6, 6, 7, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6`{colors.commerce}` — `#d53b00`)是二级CTA,为"Buy now"/"Pre-order"/存储动作保留.
- PlayStation SST 显示等级 **字重 300** 与 -0.1px 改为: +0.4px 跟踪——品牌的签名空心编辑声音.
- 8px- 弧度( 微米)`{rounded.md}`产品卡和功能板; 4px- 弧度( 微米)`{rounded.sm}`投入; 胶囊形(`{rounded.full}`每一CTA
- 游戏牌、控制台制作和 PS Plus 级插图 60-90% ——图像能讲故事
- Color-block page rhythm (one observed band sequence): dark hero → light console showcase → dark "Great PS4 & PS5 games" rail → light "Discover PlayStation Plus" tier band → light "30 years of PlayStation" callout → dark "ON PLAYSTATION" band → light news strip → blue footer


## 配色

> **Source pages:** `/en-tr/` (home), `/en-tr/ps5/games/` (PS5 games listing), `/en-tr/games/marathon/` (single game page), `/tr-tr/support/account/` (support center). The chrome palette is identical across all four pages; the support page uses the light-canvas mode exclusively while marketing pages alternate.

### 品牌和 强调色
- **PlayStation Blue** (`{colors.primary}` — `#0070d1`): the brand's universal primary. Every primary CTA pill, the active filter chip, the footer surface, badge fills, and inline link color on dark surfaces.
- **PlayStation 蓝色按下** (`{colors.primary-pressed}` — `#0064b7`:按住原药状态——同样是光表面的内线连结颜色的双倍.
- **PlayStation 蓝色活动** (`{colors.primary-active}` — `#004d8d`:主按钮的深压状态.
- **橙色商业** (`{colors.commerce}` — `#d53b00`:二级CTA专为商店/买家/订货前动作预留,是系统中唯一一种温暖的颜色.
- **Commerce Orange Pressed** (`{colors.commerce-pressed}` — `#aa2f00`): pressed state for commerce buttons.
- **马拉松黄** (`{colors.marathon-yellow}` — `#deff20`:从马拉松的产品调色板中提取出一个单高饱和度的游戏页面强调色——仅在专用游戏内使用. `/marathon/` 游戏页面chrome,而不是系统一般的强调色词汇的一部分.

### 表面
- **暗色画** (`{colors.canvas-dark}` — `#000000`:纯黑色首屏乐队,主导航背景,页脚. 编辑产品瞬间的主要表面.
- **表面暗线** (`{colors.surface-dark-elevated}` — `#121314`: 内置暗面板,PS Plus 级横幅背景,"ON PLAYSTATION" 渐变结束。
- **表面暗卡** (`{colors.surface-dark-card}` — `#181818`:游戏瓦片填充,暗产品卡背景.
- **光线** (`{colors.canvas-light}` — `#ffffff`:真白控制台-显示器乐队,支持页面机身,新闻条形背景.
- **软表面** (`{colors.surface-soft}` — `#f3f3f3`): hairline-soft 带状填充在光页上,在光表面上进行分割规则。
- **表面卡片** (`{colors.surface-card}` — `#f5f7fa`: 凉蓝丁型产品卡和轻页面底色上的阶梯卡背景.
- **表面过滤器** (`{colors.surface-filter}` — `rgba(245,247,250,0.3)`: 半透明填充器 filter-pill 光页面底色上的默认状态。
- **细边线光** (`{colors.hairline-light}` — `#f3f3f3`): 1px 光页上的分割规则。
- **细边线暗** (`{colors.hairline-dark}` — `rgba(229,229,229,0.2)`: 半透明 1px 暗色页面底色上的分页符 。

### 文本
- **Ink** (`{colors.ink}` — `#000000`): primary text on `{colors.canvas-light}`. Headlines, button text, support body.
- **墨水深处** (`{colors.ink-deep}` — `#121314`:在暗面和深影梯度上,为卡片标题加热的近黑度较高.
- **墨水梯形变** (`{colors.ink-elevated}` — `#181818`:暗色的canvas墨水中最轻的,用于高卡背景.
- **体光( T)** (`{colors.body-light}` — `rgba(0,0,0,0.6)`:光帆上的半透明体文字——系统默认段落颜色.
- **静音光** (`{colors.mute-light}` — `#6b6b6b`: 元数据文本和页脚链接在光帆上的字幕.
- **灰光( 灰光)** (`{colors.ash-light}` — `#cccccc`: 禁用状态文本和轻表面最小强调的效用.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): primary text on `{colors.canvas-dark}` — headlines, button text on dark hero bands.
- **身体暗处** (`{colors.body-dark}` — `rgba(255,255,255,0.7)`: 暗布上半透明体文字.
- **暗哑** (`{colors.on-dark-mute}` — `#cccccc`: 二次文本和在暗面上的禁用状态.
- **静音暗** (`{colors.mute-dark}` — `rgba(229,229,229,0.55)`: 暗页面底色上的标题和元数据.

### 语义
- **警告** (`{colors.warning}` — `#c81b3a`: 验证错误和破坏性确认副本.
- **链接光** (`{colors.link-light}` — `#0064b7`: 光帆上内置的体裁主播链接——与Hex相同 `{colors.primary-pressed}`.
- **链接暗** (`{colors.link-dark}` — `#53b1ff`:内含在暗布上的内在体-正锚链接——一种亮蓝色,用于暗模可辨.

### 品牌渐变
- **PlayStation Plus Gold Gradient** — a horizontal three-stop gold gradient `{colors.ps-plus-gold-start}` (`#ffce21`) → `{colors.ps-plus-gold-mid}` (`#f5a623`) → `{colors.ps-plus-gold-end}` (`#ee8e00`) that anchors the PS Plus banner on the home page. The only gradient in the system; reserved exclusively for PS Plus chrome.


## 字体排版

### 字体家族
- **PlayStation SST** is the proprietary brand sans-serif used across every text role on the site. It carries weights 300 (light), 400 (regular), 500 (medium), 600 (semibold), and 700 (bold), and falls back through `sst` → `Arial` → `Helvetica`. The brand's distinctive choice is using **weight 300 (light) for display headlines** — unusual for a gaming brand and the source of the system's editorial, airy character.
- **标准** 以产品表面的二次切除形式出现,然后又回到 Helvetica → Arial.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 54px | 300 | 1.25 | -0.1px | 首屏头条(“发现所有 PS ” Name5 控制台和配件”). |
| `{typography.display-lg}` | 44px | 300 | 1.25 | 0.1px | 区头条(“大PS”)4 PS 组合键( P)5 游戏现在或即将来临"). |
| `{typography.display-md}` | 35px | 300 | 1.25 | 0 | 中段标题, 游戏页面子首屏 |
| `{typography.heading-xl}` | 28px | 300 | 1.25 | 0.1px | "30 年份 PlayStation" 呼喊,带内小标题 |
| `{typography.heading-lg}` | 22px | 300 | 1.25 | 0.1px | 新闻卡标题, 支持类标题 |
| `{typography.heading-md}` | 18px | 600 | 1 | 0 | 纸牌标签、导航菜单标题、产品内坚固标题 |
| `{typography.body-md}` | 18px | 400 | 1.5 | 0.1px | 副本,段落文本,支持文章机构 |
| `{typography.body-strong}` | 18px | 500 | 1.25 | 0.4px | 内置强调,主导航链接,按钮标签(大) |
| `{typography.body-sm}` | 16px | 400 | 1.5 | 0 | 二级车身卡片说明 |
| `{typography.caption-md}` | 14px | 400 | 1.5 | 0 | 页脚链接,元数据, sub-nav 文本 |
| `{typography.caption-sm}` | 12px | 500 | 1.5 | 0 | Smallest utility text, badge label |
| `{typography.link-md}` | 18px | 400 | 1.5 | 0 | 内置的正文主播链接 |
| `{typography.button-lg}` | 18px | 700 | 1.25 | 0.45px | 初等CTA药 |
| `{typography.button-md}` | 14px | 700 | 1.25 | 0.324px | 紧凑胶囊形、滤镜芯片、二级CTA |

### 原则
The hierarchy works on a 1.25-line-height ladder almost exclusively — even body sits at 1.5 instead of the typical 1.6 — which keeps long-form support pages tight and console showcases efficient. The weight contrast between display (300) and button (700) is dramatic: a single 18px chrome line might host a heavyweight CTA next to a feather-light 22px headline, giving the system its editorial gaming-magazine feel.

### Note on Font Substitutes
PlayStation SST 属于专有。最接近的开源替代 :
- **Roboto 轻( L)300)** 显示级的显示器,其显示级稍松 letter-spacing 符合SST的显示光学装配。
- **Inter** 重量 400/500/600 身体和铬的几何学的桑 与SST的身体切口相匹配
- **来源 Sans Pro Light (300)** 用于显示级的替代 Roboto 读太功利主义。

When substituting, preserve the +0.1px to +0.45px tracking on display and button tiers — the spacing is part of what makes PlayStation SST feel premium at the light weight.


## 布局

### 间距系统
- **基部单位:** 8px (加细 4/12px 步骤,以填补内在的紧缺。
- **托肯斯(前题):** `{spacing.xxs}` (4px) · `{spacing.xs}` (8px) · `{spacing.sm}` (12px) · `{spacing.md}` (16px) · `{spacing.lg}` (24px) · `{spacing.xl}` (32px) · `{spacing.xxl}` (48px) · `{spacing.section}` (96px).
- **Universal section rhythm:** every page in the set uses `{spacing.section}` (96px) as the vertical gap between major content blocks. Card grids use `{spacing.lg}` (24px) gutters; in-card padding sits at `{spacing.lg}` to `{spacing.xl}` depending on density.
- **首屏乐队 padding:** 96px vertical / 48px horizontal — the largest spacing in the system, reserved for full-bleed surface chapters.

### 网格容器( C)
- **最大 width:** ~1280px content area for body text on desktop with 24px gutters that expand to ~48px at ultrawide. Hero bands and game-tile rails go full-bleed with no max-width constraint on imagery.
- **游戏牌子旋转木马 :** 4- 上桌面,在同一行上水平滚动,崩溃为 3- 上边 1024px 财务报告和已审计财务报表 2- 上边 768px。每块瓦片的使用 16:9 保护艺术,在 `{rounded.md}`.
- **控制台显示 grid:** desktop 5-column thumbnail strip below the main hero render, collapsing to 3-up + horizontal scroll at tablet.
- **支持页面 :** 桌面 2- 栏 30/70 分拆(侧边边导航+文章机体),与移动时提升到顶端手风琴的侧边杆一起倒塌为单柱.
- **News strip:** 3-up card grid at desktop, 2-up at tablet, 1-up at mobile.

### 白空间哲学
Whitespace is structural and band-defined. The 96px `{spacing.section}` between chapters reads as silence between trailer cuts — there's no decorative wash, no gradient transition, no mid-section divider. Inside a section, content is left-aligned in a tight column with the imagery breathing in the right 60-70% of the band. Paragraph text is comfortable at 1.5 line-height but column widths stay narrow (~520px at desktop) to keep long-form copy readable.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | No border, no shadow | Default for hero bands, footer, full-bleed sections — the dominant treatment |
| 1 — Hairline divider | 1px solid `{colors.hairline-light}` or `{colors.hairline-dark}` | Card borders, support row dividers, footer column rules |
| 2 ——软活动阴影 | `0 4px 12px rgba(0,0,0,0.16)` | 主动/压强的CTA, 升空产品卡 |
| 3 — Section gradient | Soft top-to-bottom darkening from `{colors.surface-dark-elevated}` to `{colors.canvas-dark}` | "ON PLAYSTATION" band — only place a gradient appears on chrome |

该系统实际上没有在卡片上留有阴影;深度由跨波段的表面-颜色对比构建. Cards 升空只通过压载.

### 装饰性深度
深度来自交替带节奏和图像本身:
- **控制台产品摄影** 双音响控制器和PS5 控制台让中性白色上射 带有脆脆的边缘照明 光圈内满腔血流
- **游戏密钥艺术** ——全血电影静片(马拉松,最新版的块块块发布) 深黑的canvas乐队内部,标题封存在左下角.
- **PS + 级横幅** 微妙的横向金梯度( 0.`{colors.ps-plus-gold-start}` → `{colors.ps-plus-gold-end}`)坐以系统唯一的铬梯度,锚定"发现"(Discover) PlayStation 加上"CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA","CTA".
- **"开始 PLAYSTATION" 梯度带** ——从上到下不断深化. `{colors.surface-dark-elevated}` (`#121314`改为: `{colors.canvas-dark}` (`#000000`)在周年点名下,形成影院化的暗淡效果.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 首屏乐队,主导航,脚步, sub-nav,支持文章体——每个全血结构表面 |
| `{rounded.sm}` | 4px | 文本投入,支持搜索场公用事业 |
| `{rounded.md}` | 8px | 游戏牌、产品卡、特性卡、 PS Plus 横幅 |
| `{rounded.lg}` | 16px | 少用软外角的大容器(例如对话框卡) |
| `{rounded.full}` | 9999px | Every CTA pill (primary / commerce / secondary), filter chips, pagination dots, carousel paddles |

半径词汇在 a 上工作 4 / 8 / 胶囊形节奏,用于铬,结构表面保持平坦 0px.

### 摄影几何
- **首屏控制台渲染 :** 大型中央控制台+白色的双音构件, ~70% 宽度,左边有复制槽。
- **游戏牌 :** 16:9 键曲 : `{rounded.md}` (8px), 4- 桌面上有轨电车,有水平旋转木马
- **马拉松游戏页面首屏:** 满腔热血的电影 16:9 左下方还有"MARATHON"字印 轻轻的 黄色 `{colors.marathon-yellow}` 几个小的UI标签上的强调色。
- **新闻卡缩略图 :** 16:9 图像在 `{rounded.md}` 下方有一个小的文本块。
- **幻象/品牌图标:** 32–40px 圆圈用于 sub-nav 社交专栏.


## 组件

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only.

### 按钮

**`button-primary`** ——普及性 PlayStation 反恐中心
- Background `{colors.primary}` (PlayStation Blue), text `{colors.on-primary}`, type `{typography.button-lg}`, padding `12px 28px`, height ~48px, rounded `{rounded.full}`.
- 用于"添加包","签名","学习更多","订阅"——每一个跨越光线和暗线画布的初级动作.
- 国家住在这里 `button-primary-pressed` - 后台空降为 `{colors.primary-pressed}` (`#0064b7`).

**`button-commerce`** - 橙色商店CTA
- Background `{colors.commerce}` (`#d53b00`), text `{colors.on-commerce}`, type `{typography.button-lg}`, padding `12px 28px`, height ~48px, rounded `{rounded.full}`.
- 预留"买现在","前序","加推"——只存储动作,是系统中唯一的暖色.
- 国家住在这里 `button-commerce-pressed` - 后台空降为 `{colors.commerce-pressed}`.

**`button-secondary-light`** 光帆上的大纲变体
- Background transparent, text `{colors.ink}`, 1px solid `{colors.ash-light}` border, type `{typography.button-lg}`, padding `12px 28px`, height ~48px, rounded `{rounded.full}`.
- Lower-emphasis CTA on white surfaces ("Learn more →", "Watch trailer").

**`button-secondary-dark`** – 暗布上的大纲变体
- Background transparent, text `{colors.on-dark}`, 1px solid `{colors.hairline-dark}`, type `{typography.button-lg}`, padding `12px 28px`, height ~48px, rounded `{rounded.full}`.
- 与光变体相同但倒置用于 `{colors.canvas-dark}` 首屏乐队。

**`button-disabled`**
- Background `{colors.surface-soft}`, text `{colors.ash-light}`, rounded `{rounded.full}` — flat soft gray.

### 过滤标签芯片( T)

**`filter-pill`** + **`filter-pill-active`**
- Default: background `{colors.surface-filter}` (translucent), text `{colors.ink}`, type `{typography.button-md}`, padding `8px 16px`, rounded `{rounded.full}`.
- 活动:背景翻转到 `{colors.canvas-light}` (opaque white)——来自半透明默认的芯片"升降机".
- 用于PS5 游戏过滤条( "All" , "Coming Soon" )PlayStation 虚拟2","最近释".

### 输入表单( F)

**`text-input`** + **`text-input-focused`**
- Default: background `{colors.canvas-light}`, text `{colors.ink}`, 1px solid `{colors.ash-light}`, type `{typography.body-md}`, padding `12px 16px`, height ~48px, rounded `{rounded.sm}` (4px).
- 重点: 2px 固态 `{colors.primary}` 边框,无光环(在边框字重上作为焦点信号增加).

**`support-search-bar`** ——支持页面签名搜索字段
- Background `{colors.canvas-light}`, text `{colors.ink}`, type `{typography.body-md}`, padding `12px 24px`, height ~56px, rounded `{rounded.full}`.
- 坐在支持页面首屏的顶部,左边缘有放大镜图标,"搜索支持中心"占位符.

### 纸牌和集装箱

**`product-card`** 轻扫描器产品/地物卡
- 集装箱:背景 `{colors.surface-card}` (`#f5f7fa` 蓝色的, 1px 固态 `{colors.hairline-light}` (稀有;通常无边框),贴 `{spacing.lg}` (24px),四舍五入 `{rounded.md}` (8px).
- 用于 " .PlayStation 存储"销售点名,新闻卡,以及PS Plus在轻页面底色上的等级比较卡.

**`product-card-dark`** 黑漆漆产品卡
- 集装箱:背景 `{colors.surface-dark-card}` (`#181818`), 贴 `{spacing.lg}`,四舍五入 `{rounded.md}`.
- 用于游戏-细节卡和暗黑canvas功能面板.

**`game-tile`** – 游戏/主机缩略图平板
- 集装箱:背景 `{colors.surface-dark-elevated}`, 编译 0,四舍五入 `{rounded.md}`.
- 版式 : 16:9 半径内满血的覆盖艺术,标题+平台标记覆盖在左下方 `{typography.body-sm}`.
- 用于"大PS"4 PS 组合键( P)5 游戏" 铁路和PS5 游戏列表网格。

**`feature-card`** 轻帆车营销卡
- 集装箱:背景 `{colors.canvas-light}`, 编译 `{spacing.xl}` (32px),四舍五入 `{rounded.md}`.
- 用于 " .PlayStation 存储"首屏卡和类似功能面板,带有小产品图标,标题,身体,以及CTA.

**`hero-band-blue`** - 电话 PlayStation 蓝色全血带
- Background `{colors.primary}`, text `{colors.on-primary}` in `{typography.display-md}`, padding `96px 48px`, rounded `{rounded.none}`.
- 马拉松发射的CTA条和脚踏车表面使用这个乐队,乐队的界定目的是"这是页面的动作时刻".

**`hero-band-dark`** ——满血的黑暗首屏.
- Background `{colors.canvas-dark}` (with optional gradient end at `{colors.surface-dark-elevated}`), text `{colors.on-dark}` in `{typography.display-xl}`, padding `96px 48px`, rounded `{rounded.none}`.
- The home-page hero, the game-detail page hero, and the "ON PLAYSTATION" anniversary band.

**`hero-band-light`** ——满血的白族首屏.
- Background `{colors.canvas-light}`, text `{colors.ink}` in `{typography.display-xl}`, padding `96px 48px`, rounded `{rounded.none}`.
- 控制台显示乐队( “ 发现所有 PS ”5 控制台和附件")和支持页顶部.

**`ps-plus-banner`** — PlayStation Plus tier callout
- Background `{colors.surface-dark-elevated}` with the `{colors.ps-plus-gold-start}` → `{colors.ps-plus-gold-end}` gold gradient as a horizontal accent bar across the top, text `{colors.on-dark}` in `{typography.heading-xl}`, padding `48px 32px`, rounded `{rounded.md}`.
- The "Discover PlayStation Plus" full-width banner on the home page.

**`carousel-paddle`** — circular 木马控制
- Background `rgba(255,255,255,0.16)`, icon `{colors.on-dark}`, rounded `{rounded.full}`, size 48px.
- 被安乔打到游戏的牌盘旋转木马的左/右边缘.

**`pagination-dot`** + **`pagination-dot-active`**
- 8px 圆点 `{rounded.full}`默认填充 `{colors.ash-dark}`; 活动填充 `{colors.on-dark}`.
- 木马位置指示器位于游戏瓦片铁路下方.

### 内置

**`badge-info`** ——小信息标签
- Background `{colors.primary}`, text `{colors.on-primary}` in `{typography.caption-sm}`, padding `4px 10px`, rounded `{rounded.full}`.
- "新","前序","Coming Soon"标签在游戏牌匾上覆盖.

**`link-inline`** ——体质-导引主机链接.
- `{colors.link-light}` 轻页面底色上的文本 / `{colors.link-dark}` 。默认情况下,在暗页面底色上不下划线。内置正文链接,支持文章段落。

### 导航

**`primary-nav`**
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, height ~48px, type `{typography.body-strong}`, rounded `{rounded.none}`.
- 版式( 桌面) : PlayStation 极左偏左,中侧的导航列(“Games ” ) 的 P-logo5 · 方案支助4 · PS VR2 · 订阅 · 硬件 · 移动 · 新闻 · 商店 · 支持 ),右组群(搜索-glyph + 语言+ 手推车图标+用户-avatar 圈).

**`sub-nav`** - 二级导航带
- Background `{colors.canvas-dark}`, text `{colors.on-dark}` in `{typography.caption-md}`, height ~40px, rounded `{rounded.none}`.
- 紧靠PS上的初等导航5 游戏 / 单游戏 / PS Plus 页面,有特定节点主机链接.

**顶部导航( 移动)**
- 汉堡菜单图标位于左,P-logo位于中,搜索+推车图标位于右. Prime nave崩溃成一个从左侧滑动的全屏幕暗抽屉.

### Footer

**`footer-section`**
- Background `{colors.primary}` (PlayStation Blue), text `{colors.on-primary}` in `{typography.caption-md}`, padding `{spacing.xxl}` (48px) vertical.
- Layout: large PlayStation wordmark at top-left, multi-column link grid (locale selector, store links, account, support, social), bottom row with terms / privacy fine-print in `{typography.caption-sm}`.
- 脚步的蓝色表面是系统"我们完成了——回到品牌"的主播.

### 支持页面

**`support-row`** ——支持文章列表行
- Background `{colors.canvas-light}`, text `{colors.ink}` in `{typography.body-md}`, padding `16px 0`, with a 1px `{colors.hairline-light}` bottom rule.
- 用于支持页面上FAQ / 分类列表行,右侧右侧小图标位于右边缘.


## 设计建议与禁忌

### 执行
- 准备金 `{colors.primary}` (PlayStation Blue),用于初级CTA和脚步表面,蓝色的带很珍贵——每页最多有一个全血蓝带.
- 准备金 `{colors.commerce}` 仅用于商店/购买/预购CTA,从未用于销售铬或首屏胶囊形。
- 使用 PlayStation SST 字重 300 显示标题( Q)54 / 44 / 35 / 28 / 22) 轻重是品牌声音.
- 堆叠内容部分 : `{spacing.section}` (96px)节奏与下段乐队的表面颜色占据了页面边缘对边缘——没有装饰性分乐队.
- Use `{rounded.full}` (9999px) on every CTA pill and `{rounded.md}` (8px) on every product card. The two-radius vocabulary is the entire shape system aside from inputs.
- 平面全血的游戏密钥艺术和控制台在暗带或光带内制作;让图像占据 60-90% 乐队的垂直高度。
- Use `{component.ps-plus-banner}` with the gold gradient exclusively for the PlayStation Plus tier callout — never decorate other components with the gold.

### Don't
- Don't introduce drop shadows on resting cards. The system is flat-on-canvas; cards lift only on press.
- Don't replace `{colors.primary}` with another shade of blue. The brand blue is precise — `#0070d1` for default and `#0064b7` for pressed.
- Don't use `{colors.commerce}` (orange) on marketing/hero CTAs. It's reserved exclusively for store actions.
- Don't introduce a sans-serif body font, italic, or monospace style. PlayStation SST carries every text role.
- Don't soften pill geometry. CTAs are always `{rounded.full}` — no medium-radius buttons.
- Don't use the gold PS Plus gradient on anything that isn't the PS Plus banner. It is a tier-specific brand asset.
- Don't put a gradient on chrome. The only allowed gradient is the gold PS Plus accent and the soft top-to-bottom darkening of the "ON PLAYSTATION" band.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 超广 | 1920px+ | 首屏乐队保持内容 max-width 1280px;外沟长到 ~80px |
| 桌面大块 | 1440px | 默认桌面 - 4- 上游游戏砖木马,全主导航 |
| 桌面 | 1280px | 外沟布局相同 |
| 桌面小块 | 1024px | 游戏瓦片铁路崩溃到 3- 上层; sub-nav 保持水平 |
| 平板电脑 | 768px | 游戏牌__ 2-上;主导航成为汉堡抽屉 |
| 移动 | 480px | 单栏所有东西;首屏 `{typography.display-xl}` 比额表 54px → ~32px |
| 移动窄 | 320px | 节贴紧到 32px; 首屏进一步缩放到 ~28px |

### 触控区域
All interactive elements meet WCAG AAA (≥ 44×44px). `{component.button-primary}` and `{component.button-commerce}` sit at 48px height with 28px horizontal padding (effective ~48×100px tappable). `{component.text-input}` sits at 48px. `{component.support-search-bar}` sits at 56px. `{component.filter-pill}` is ~36–40px height with 16px padding extending to 44px tappable via inline padding. `{component.carousel-paddle}` is exactly 48×48 circular.

### 折叠战略
- **初等导航 :** 桌面水平组 – 平板汉堡抽屉 768px。右组图标(搜索、手推、账户)在每个断点都保持可见。
- **Sub-nav:** 桌面水平锚行 →平板电脑水平卷轴 → 移动选择下拉。
- **Game tile carousel:** 4-up → 3-up → 2-up at 1024 and 768px; carousel paddles stay visible at every desktop breakpoint, hide on mobile in favor of touch-swipe.
- **首屏乐队:** 在每个断点保持全血;只有内部内容列从 2-栏(文字左+图像右)为单栏(文字上方图像).
- **控制台显示 :** 桌面 5- 上缩略图条 \ 平板 3- 上+水平卷轴 + 移动 1- 上桨。
- **支持页面 :** 桌面 30/70 分(侧杠+身体) →平板侧杠升格为顶部手风琴 → 移动全坍塌手风琴.
- **科 科 padding:** `{spacing.section}` (96px(台式计算机) – 64px 平板电脑 48px 移动。
- **Hero headline:** `{typography.display-xl}` (54px) at desktop, scaling 44px / 32px / 28px down the breakpoint stack.

### 图像行为
- Hero imagery (console renders, game key art) uses art-direction crops on mobile so the central subject stays centered when the band collapses to single-column.
- 游戏砖块封面艺术保护 16:9 每一断点的比例;只有列数变化。
- Console showcase thumbnails maintain their natural aspect (~1:1 product render) across breakpoints.
- All non-critical imagery is lazy-loaded as the user scrolls into the next chapter.


## 迭代指南

1. 一次聚焦一个组件。 调用其 YAML 条目并验证每个属性解析 。
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component.button-primary-pressed}`, `{rounded.full}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 自动发出警告。
4. 添加新的变体作为单独的组件条目( Q)`-pressed`, `-disabled`()——不要把他们埋在传言里.
5. 默认正文为 `{typography.body-md}` (18px / 400 / 1.5; 伸缩范围 `{typography.display-xl}` 严格用于页顶的首屏头条; 使用 `{typography.body-strong}` 用于主导航链接。
6. Keep `{colors.primary}` scarce per viewport — at most one full-bleed PlayStation Blue band per page.
7. When introducing a new component, ask whether it can be expressed with the existing pill + 8px-radius card + full-bleed-band vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.


## 已知缺口

- **Mobile screenshots not captured** — responsive behavior synthesizes PlayStation's known mobile pattern (hamburger drawer, single-column band reflow, hero downscale) from desktop evidence and the breakpoint stack.
- **Hover states not documented** by system policy.
- **签名/认证铬** (记录模式、账户仪表板、简介页)没有在捕获的页面中。
- **PlayStation 存储** 存储浏览表面(PDP/推车/检查)不在捕获的一组中——这些都使用密度更高的 data-table 用于文档未描述的布局。
- **Game-page-specific theming** — the `/marathon/` page uses `{colors.marathon-yellow}` as a chapter accent. Other game pages may pull in their own per-title brand colors that vary outside the documented system.
- **表格验证状态** (成功/ 错误的内含消息) 无法在所捕获的表层中显示 `{colors.warning}` 颜色标志。

## 设计词元原值

A three-surface marketing system organized around alternating black, white, and PlayStation Blue chapters that scroll past the viewer like a console launch trailer. Each section has a single editorial purpose — hero photography, console product render, PS Plus tier callout, news strip — and each owns one of three full-bleed canvas modes. The chrome is unusually quiet for a gaming brand: bright PlayStation Blue (`#0070d1`) carries every primary CTA as a fully-rounded pill, the proprietary SST face renders display copy at a signature weight 300 (light) for an airy, premium feel, and a crisp 8px-radius secondary card system carries product info on either canvas mode. The system never decorates — no gradient backgrounds on chrome, no atmospheric mesh, no drop shadows beyond a faint section-divide. Imagery does all the heavy lifting: console glamour shots, game key art, and PS Plus tier illustrations occupy 60-90% of every section, with copy compressed into a small editorial slot.

```yaml
---
version: alpha
name: PlayStation-design-analysis
description: |
  A three-surface marketing system organized around alternating black, white, and PlayStation Blue chapters that scroll past the viewer like a console launch trailer. Each section has a single editorial purpose — hero photography, console product render, PS Plus tier callout, news strip — and each owns one of three full-bleed canvas modes. The chrome is unusually quiet for a gaming brand: bright PlayStation Blue (`#0070d1`) carries every primary CTA as a fully-rounded pill, the proprietary SST face renders display copy at a signature weight 300 (light) for an airy, premium feel, and a crisp 8px-radius secondary card system carries product info on either canvas mode. The system never decorates — no gradient backgrounds on chrome, no atmospheric mesh, no drop shadows beyond a faint section-divide. Imagery does all the heavy lifting: console glamour shots, game key art, and PS Plus tier illustrations occupy 60-90% of every section, with copy compressed into a small editorial slot.

colors:
  primary: "#0070d1"
  primary-pressed: "#0064b7"
  primary-active: "#004d8d"
  on-primary: "#ffffff"
  link-light: "#0064b7"
  link-dark: "#53b1ff"
  commerce: "#d53b00"
  commerce-pressed: "#aa2f00"
  commerce-link-base: "#d63d00"
  on-commerce: "#ffffff"
  ink: "#000000"
  ink-deep: "#121314"
  ink-elevated: "#181818"
  charcoal: "#1f2024"
  body-light: "rgba(0,0,0,0.6)"
  mute-light: "#6b6b6b"
  ash-light: "#cccccc"
  body-dark: "rgba(255,255,255,0.7)"
  mute-dark: "rgba(229,229,229,0.55)"
  ash-dark: "rgba(229,229,229,0.2)"
  canvas-light: "#ffffff"
  surface-soft: "#f3f3f3"
  surface-card: "#f5f7fa"
  surface-filter: "rgba(245,247,250,0.3)"
  canvas-dark: "#000000"
  surface-dark-elevated: "#121314"
  surface-dark-card: "#181818"
  hairline-light: "#f3f3f3"
  hairline-dark: "rgba(229,229,229,0.2)"
  on-dark: "#ffffff"
  on-dark-mute: "#cccccc"
  warning: "#c81b3a"
  ps-plus-gold-start: "#ffce21"
  ps-plus-gold-mid: "#f5a623"
  ps-plus-gold-end: "#ee8e00"
  marathon-yellow: "#deff20"

typography:
  display-xl:
    fontFamily: PlayStation SST
    fontSize: 54px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: -0.1px
  display-lg:
    fontFamily: PlayStation SST
    fontSize: 44px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0.1px
  display-md:
    fontFamily: PlayStation SST
    fontSize: 35px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0
  heading-xl:
    fontFamily: PlayStation SST
    fontSize: 28px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0.1px
  heading-lg:
    fontFamily: PlayStation SST
    fontSize: 22px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0.1px
  heading-md:
    fontFamily: PlayStation SST
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  body-md:
    fontFamily: PlayStation SST
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.1px
  body-strong:
    fontFamily: PlayStation SST
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.4px
  body-sm:
    fontFamily: PlayStation SST
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption-md:
    fontFamily: PlayStation SST
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption-sm:
    fontFamily: PlayStation SST
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  link-md:
    fontFamily: PlayStation SST
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button-lg:
    fontFamily: PlayStation SST
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.45px
  button-md:
    fontFamily: PlayStation SST
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.324px

rounded:
  none: 0px
  sm: 4px
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
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 48px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
  button-commerce:
    backgroundColor: "{colors.commerce}"
    textColor: "{colors.on-commerce}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 48px
  button-commerce-pressed:
    backgroundColor: "{colors.commerce-pressed}"
    textColor: "{colors.on-commerce}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
  button-secondary-light:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 48px
  button-secondary-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 48px
  button-disabled:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ash-light}"
    rounded: "{rounded.full}"
  text-input:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
    height: 48px
  text-input-focused:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  filter-pill:
    backgroundColor: "{colors.surface-filter}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  filter-pill-active:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
  product-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  product-card-dark:
    backgroundColor: "{colors.surface-dark-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  game-tile:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 0px
  feature-card:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 32px
  hero-band-blue:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: 96px 48px
  hero-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 96px 48px
  hero-band-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 96px 48px
  ps-plus-banner:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-xl}"
    rounded: "{rounded.md}"
    padding: 48px 32px
  carousel-paddle:
    backgroundColor: "rgba(255,255,255,0.16)"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    size: 48px
  pagination-dot:
    backgroundColor: "{colors.ash-dark}"
    rounded: "{rounded.full}"
    size: 8px
  pagination-dot-active:
    backgroundColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    size: 8px
  badge-info:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  primary-nav:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    height: 48px
  sub-nav:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
    height: 40px
  footer-section:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
    padding: 48px 32px
  support-search-bar:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
    height: 56px
  support-row:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 16px 0px
  link-inline:
    textColor: "{colors.link-light}"
    typography: "{typography.link-md}"
---
```
