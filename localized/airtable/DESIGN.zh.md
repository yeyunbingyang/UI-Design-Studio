# Airtable · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Airtable营销表面是悄悄的编辑。底部的氛围是白色页面底色、深色墨水类型、宽大的白色空间和一种近黑胶囊形CTA,除非某一部分需要,否则没有什么值得注意的。品牌辨识度不是来自梯度洗涤或强调色墙;它来自 **满血签名卡** 输入 `{colors.signature-coral}`, `{colors.signature-forest}`,以及 `{colors.surface-dark}` 页面的读写方式是: 一张头条、一张支持的拷贝、一张小图像组,然后是呼吸室。

Type voice is Haas Grotesk at modest weights (400 for display, 500 for sub-titles and buttons). Display headlines never go bolder than 500 — emphasis comes from size and color contrast, not from weight. Body copy stays at 14px / 400 throughout. The pricing surface runs its own dialect: **Inter Display** at unusual mid-weights (475 / 575) and **pill-shaped buttons** (`{rounded.pill}`) that don't appear on any other page — a deliberate sub-system signaling "this page is about commercial precision."

**关键特征 :**
- 初级CTA是 `{colors.primary}` (近黑墨水) 白文本和一个 `{rounded.lg}` (12px)角——读作自信和最终,从不装饰.
- 二级CTA是 `{colors.canvas}` 按钮 `{colors.ink}` 文字和细边线大纲。两者并存形成 Airtable's sign 按钮对 。
- 首屏是白色页面底色,没有大气梯度,没有网状,没有背景繁荣,品牌强度来自类型和坐落在干净的白空间的按钮.
- Brand voltage lives in **signature surface cards**: `{colors.signature-coral}`, `{colors.signature-forest}`, and `{colors.surface-dark}` carry full-bleed product callouts every few screens.
- 解码卡网格携带产品UI碎片 `{colors.signature-peach}`, `{colors.signature-mint}`, `{colors.signature-cream}` 还有其他温暖的面部
- 节奏:白色页面底色 – 珊瑚签名卡 → 白色身体 → 奶油呼喊乐队 → 暗海军 CTA → 浅灰色 CTA 旗 → 脚步. 页面底色重新位于每个签名表面之间.
- Border radius is hierarchical: `{rounded.lg}` (12px) for primary CTAs and large signature cards, `{rounded.md}` (10px) for content cards and demo grids, `{rounded.sm}` (6px) for inputs, `{rounded.full}` for icon buttons. Pricing buttons jump to `{rounded.pill}` to mark themselves as a separate dialect.
- 垂直节奏是 `{spacing.section}` (96px),主要乐队之间——每页都通用.


## 配色

### 品牌和 强调色
- **主要** (`{colors.primary}` — #181d26: 主导品牌颜色. 用于主要CTA背景, h1/h2 显示类型,以及 `{component.surface-dark}` 黑色是整个营销系统的首要产品
- **初等活动** (`{colors.primary-active}` — #0d1218:主按钮上的新闻状态.

### 表面
- **页面底色** (`{colors.canvas}` — #ffffff:默认的页面表面;每个编辑机构的地板.
- **表面软** (`{colors.surface-soft}` — #f8fafc:标签功能卡和特色定价等级.
- **表面坚固** (`{colors.surface-strong}` — #e0e2e6: 浅灰色的"开始建筑与 Airtable" 脚步器附近的CTA旗.
- **表面暗色( T)** (`{colors.surface-dark}` — #181d26:暗海军CTA卡片使用中页(例如"通往 10×你们组织中的每一个人").
- **表面暗线** (`{colors.surface-dark-elevated}` — #1d1f25:彩虹纹饰背后的文章页首屏基础.
- **Hairline** (`{colors.hairline}` — #dddddd): The 1px border tone for input outlines, table dividers, secondary-button outlines.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — #181d26:最强文本——h1/h2 显示类型和主按钮文本。 `{colors.primary}` 因为它们在类型和按钮层上表达的作用相同。
- **体质** (`{colors.body}` — #333840:默认的运行文本颜色.
- **静音** (`{colors.muted}` — #41454d:页脚链接,面包屑,标题.
- **Border Strong** (`{colors.border-strong}` — #9297a0): The 1px outline color on disabled secondary buttons.
- **小学/ 黑暗** (`{colors.on-primary}` — #ffffff:主按钮和暗面上的文字颜色.

### 签名卡表面
These are the colors that carry Airtable's brand voltage. They appear as full-bleed, full-card surfaces — never as accents on a small element.
- **珊瑚** (`{colors.signature-coral}` — #aa2d00:主页上最大的签名卡("原型速度的Production apps in expresent speed"),全血深暗珊瑚与白色类型.
- **Forest** (`{colors.signature-forest}` — #0a2e0e): A deep-green signature card used in the homepage demo-grid cluster.
- **奶油** (`{colors.signature-cream}` — #f5e9d4:奶油呼唤乐队("通往 10×你们组织中的每一个人")——软的蜂窝表面,握着暗型和产品UI碎片.
- **桃子( 桃子)** (`{colors.signature-peach}` — #fcab79), **薄荷** (`{colors.signature-mint}` — #a8d8c4), **黄色** (`{colors.signature-yellow}` — #f4d35e), **芥末酱** (`{colors.signature-mustard}` — #d9a441: 降M卡表面,在多卡网块内承载小产品UI碎片.

### 语义
- **Link** (`{colors.link}` — #1b61c9): Inline body links and anchor text. Darker on press to `{colors.link-active}` (#1a3866). Despite the `--theme_button-background-primary` CSS-variable name, this color is **not** the primary button color — it is the link color.
- **Info** (`{colors.info}` — #254fad) and **Info Border** (`{colors.info-border}` — #458fff): Inline info badges and focused-input outline.
- **Success** (`{colors.success}` — #006400) and **Success Border** (`{colors.success-border}` — #39bf45): Confirmation states.


## 字体排版

### 字体家族
系统运行 **Haas / Haas Groot Disp** (Airtable” 许可显示 + 文本类型 。 Haas Groot Disp 封面显示大小( h)1 / h2); Haas 格罗特斯克包办一切 24px 倒背堆栈走动 `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`.

定价表面是分开运行的 **Inter Display** 中量级堆栈( 中量级)475 / 575)——故意的子系统信号商业精度.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 500 | 1.1 | 0 | 文章页h2 ——二等编辑标题. |
| `{typography.display-lg}` | 40px | 400 | 1.2 | 0 | Homepage h1 hero |
| `{typography.display-md}` | 32px | 400 | 1.2 | 0 | 平台页h2 - 专题片头条 |
| `{typography.title-lg}` | 24px | 400 | 1.35 | 0.12px | 节标题 |
| `{typography.title-md}` | 20px | 400 | 1.5 | 0 | 标签式特征卡中的子章节标题 |
| `{typography.title-sm}` | 18px | 500 | 1.4 | 0 | Article-card 标题 |
| `{typography.label-md}` | 16px | 500 | 1.4 | 0 | 解码卡标题,列表标签 |
| `{typography.button}` | 16px | 500 | 1.4 | 0 | 标准 CTA 按钮标签 |
| `{typography.body-md}` | 14px | 400 | 1.25 | 0 | Body copy, footer links, top-nav items |
| `{typography.caption}` | 14px | 500 | 1.35 | 0.16px | 轻标题和 meta 文本 |
| `{typography.legal}` | 13.12px | 600 | 1.2 | 0 | Cookie/ 合法的 CTA 按钮 |
| `{typography.pricing-display}` | 44.8px | 475 | 1.1 | 0 | 定价-页h1 |
| `{typography.pricing-section}` | 28px | 475 | 1.2 | 0 | 定价页页页头 |
| `{typography.pricing-card-title}` | 20px | 475 | 1.3 | 0 | 定价等级卡计划名称 |

### 原则
The Haas system prefers weight 400 for display sizes — a 40px h1 is **not** bold. Visual emphasis is delegated to size, color contrast, and the signature surface cards. Where the system does want weight, it pivots to 500 (sub-titles, buttons, article titles), never 600 or 700 in the editorial body. The only true bold (600) lives in `{typography.legal}` — a sign that boldness is reserved for terms-of-service surfaces, not marketing.

定价页面子系统使用 Inter Display 时 间 `font-weight: 475` 常规(400)和中 (中文(简体) ).500),以可变字体运出。

### Note on Font Substitutes
若缺少 Haas Groot Disp 和 Haas Grotesk，可用开源可变字体 **Inter Display** 替代。将 line-height 下调 ~5%，使排版更接近 Haas 较紧凑的大写字母高度。定价区直接使用 Inter Display。macOS / iOS 可使用 **system-ui**。Windows 会回退到 Segoe UI，视觉风格略偏冷。


## 布局

### 间距系统
- **基部单位:** 4px (所有间隔速率) 4- 数倍数
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **节贴( 垂直) :** `{spacing.section}` (96px)是通用的垂直节奏常数——每个页面上每个主要编辑带都使用 96px 顶端 + 96px 底部内垫.
- **Card internal padding:** `{spacing.xl}` (32px) for tabbed feature cards and pricing tier cards; `{spacing.xxl}` (48px) inside signature coral / forest / dark cards; `{spacing.lg}` (24px) for cream callouts and demo-grid cards.
- **Gutters:** `{spacing.lg}` (24px) between cards in 3-up grids; `{spacing.md}` (16px) inside denser logo strips and footer column gutters.

### 网格容器( C)
- **Max content width:** ~1280px centered, with `{spacing.xxl}` (48px) horizontal breathing room.
- **编辑机构:** 单身 8/12- 柱子在大断点, 崩溃为单柱移动。
- **Demo-card grids:** 3 or 4 columns at desktop, 2 at tablet, 1 at mobile. Card sizes are deliberately uneven within the grid to dodge a uniform "spec sheet" feel.
- **logo 条 :** 6 桌面上单行单色伙伴标志; 包到 3- 移动。

### 白空间哲学
Airtable 使用白空间作为大气工具。首屏区域坐落于 96px+ 头条上下纯白空间 + 副头条对, 白空间中没有装饰。 主角故意平静 —— 类型后面没有梯度、 极光、 大气网格。 系统只信任白空间来做框架 。


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, footer |
| 软细边线 | 1px `{colors.hairline}` 边框 | 投入, sub-nav 铁栏杆, comparison-table 分隔符,二级按钮 |
| 扣子休息 | 低空低调的蓝丁色光芒 | 初选CTA按钮(蓝色的锡是连接颜色的悬浮,在暗按钮下读作微弱的强调色) |
| Button focus | Outer 2px blue ring at higher alpha | Keyboard focus state on primary buttons |
| Card flat | No shadow; relies on color contrast against the surface band | Signature coral / forest / dark cards, cream callouts, demo-grid cards |

高地哲学是 **颜色块第一,阴影第二**。阴影是最小的;深层被下放到白色页面底色和签名表层卡之间的对比。营销系统任何地方都没有软光/大气阴影/重线语言。

### 装饰性深度
- **垂直彩虹条纹** 仅出现在文章主角上——多彩垂直带坐落在 `{colors.surface-dark-elevated}`。这是单页处理,而不是全系统的签名。
- **摄影-深入** 演示卡中 grid: every card carries a real product UI screenshot or mockup, contributing depth through legible artifact density rather than decorative effects.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 2px | Cookie-同意和合法的CTA按钮——系统要求的表面 |
| `{rounded.sm}` | 6px | Text inputs, small inline buttons |
| `{rounded.md}` | 10px | 二级内容卡、文章卡、奶油点心 |
| `{rounded.lg}` | 12px | 首选项 CTA 按钮、 签名表层卡、 标签特征卡 |
| `{rounded.pill}` | 9999px | 定价页面 CTA 按钮( 仅次系统) |
| `{rounded.full}` | 9999px / 50% | Circular 图标按钮, 浮雕表面 |

### 摄影几何
演示卡网格内的产品 UI 截图保留了本地的宽度比( 通常为 ) 4:3 或 减 减 16:10并收成为 `{rounded.md}` 首屏插图全线流血,没有圆形。 Article-card 缩略图使用 16:9 与 `{rounded.md}` 角 证物中的神通 `{rounded.full}` 定价的表格图像保持长方形,没有圆形。


## 组件

> **No hover states documented.** Per the global no-hover policy (Step 6), every component spec below documents only Default and Active/Pressed states. Variants live as separate entries in the `components:` front matter.

**`top-nav`** — A 64px- 白条钉在每一页的顶端 Airtable 单词标记坐落在左;主水平菜单(Platform, Solutions, 资源, Enterprise, 定价)坐落在中左 `{typography.body-md}`;右组装有"Book Demo"大纲链接,"签名免费" `{component.button-primary}`,以及“Log In”文本链接。导航在每个页面上保持光线—— Airtable 不可逆着黑暗的段。

### 按钮

**`button-primary`** — The signature primary CTA. Background `{colors.primary}` (near-black), text `{colors.on-primary}`, type `{typography.button}`, padding 16px × 24px, rounded `{rounded.lg}` (12px). This is the "Get started for free" / "Sign up for free" button visible on every hero. It reads as confident and final — not decorative — which is why the system uses it sparingly (one per viewport).
- 活动状态 : `button-primary-active` 变暗为 `{colors.primary-active}` (#0d1218).

**`button-secondary`** — White outline button (e.g. "Book demo"). Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.lg}` (12px), 1px hairline outline. Sits next to `{component.button-primary}` as the "less-committed" choice.

**`button-secondary-on-dark`** 形状与 `{component.button-secondary}` 用于标志珊瑚/森林/暗表面。 `{colors.canvas}`文本中,请输入 `{colors.ink}` ——白色按钮在暗色表面保持白色,因为系统从不反转到半透明. on-dark 市场营销网站的样式。

**`button-pricing-pill`** ——定价页 CTA家族. `{colors.canvas}`文本中,请输入 `{colors.pricing-ink}`,四舍五入 `{rounded.pill}` (9999px), 贴 12px × 24px。在营销系统中,胶囊形形是唯一的出现地点。把它作为定价子系统信号的一部分。

**`button-legal`** — Cookie-consent and legal-banner CTAs. Background `{colors.link}`, text `{colors.on-primary}`, type `{typography.legal}` (13.12px / 600), rounded `{rounded.xs}` (2px), padding 12px × 10px. The 2px corner radius and 600 weight signal "this is a required system surface," not a designed brand surface.

**`button-icon-circular`** — 40px × 40px circular button with `{colors.canvas}` background, hairline border, and `{colors.ink}` icon. Used for carousel controls, "share", and "back" affordances.

**`text-link`** ——内置体链接于 `{colors.link}` (#1b61c9。默认情况下没有下划线。类型继承 `{typography.body-md}`.

### 纸牌和集装箱

**`hero-band`** — The full-page-width white-canvas hero. No surface card, no border, no shadow, no atmospheric gradient — just the headline, sub-headline, and primary + secondary button pair sitting in 96px of whitespace. Vertical padding `{spacing.section}` (96px).

**`signature-coral-card`** — The large full-bleed coral card on the homepage ("Production apps in prototype speed"). Background `{colors.signature-coral}` (#aa2d00, a dark coral / oxide red), text `{colors.on-primary}`, rounded `{rounded.lg}` (12px), internal padding `{spacing.xxl}` (48px). Carries an h2 in `{typography.display-md}`, supporting copy in `{typography.body-md}`, and `{component.button-secondary-on-dark}` as the CTA.

**`signature-forest-card`** ——深绿色签名卡(.`{colors.signature-forest}` — #0a2e0e)作为主页上珊瑚卡的演示-网格兄弟.

**`hero-card-dark`** — The dark navy mid-page CTA card (e.g. "The path to 10× every person in your organization"). Background `{colors.surface-dark}` (#181d26), text `{colors.on-dark}`, rounded `{rounded.lg}` (12px), internal padding `{spacing.xxl}` (48px). The same color as `{colors.primary}` because the system uses ink as both type color and signature dark surface.

**`feature-card-tabbed`** ——轻乳卡(如主页上的"Coke / Pelosi / Conde Nast / Time Inc"),贴板特征卡. `{colors.surface-soft}`,四舍五入 `{rounded.lg}` (12px),内部粘贴 `{spacing.xl}` (32px。左侧的铁路带有垂直的标签标签。 `{typography.title-md}`;右面板显示活动标签的内容(ilustation + body copy + 小型 CTA).

**`cream-callout-card`** — Beige callout cards (`{colors.signature-cream}`). Rounded `{rounded.md}` (10px), internal padding `{spacing.lg}` (24px). Carry product UI fragments or stat callouts — softer than the dark/coral signature cards but still a deliberate brand surface.

**`demo-grid-card`** — Used in multi-card grids that punctuate every page. Background `{colors.canvas}` or one of the demo-grid surfaces (`{colors.signature-peach}`, `{colors.signature-mint}`, `{colors.signature-yellow}`, `{colors.signature-mustard}`), rounded `{rounded.md}` (10px), internal padding `{spacing.md}` (16px). Each card frames a product UI fragment. Card heights vary deliberately to dodge a uniform "spec sheet" feel.

**`logo-strip`** — Horizontal monochrome partner-logo row (HBO, Netflix, Amazon, Time, Conde Nast). Logos render in `{colors.muted}`, surface is `{colors.canvas}`, vertical padding `{spacing.xl}` (32px). 6 logos at desktop, 3 at mobile.

**`article-card`** — The trending-stories grid on the articles page. Background `{colors.canvas}`, rounded `{rounded.md}` (10px), internal padding `{spacing.md}` (16px). Each card carries a colorful illustrated thumbnail (16:9), a small uppercase category tag, an `{typography.title-sm}` title, and a meta line. 3-up at desktop.

**`topic-filter-rail`** — The left rail on the articles page. 240px wide, `{colors.canvas}` background, `{typography.body-md}`, vertically grouped category headings ("Marketing", "Product", "Project management", "Operations") with sub-bullets. Active item carries a small numeric count badge.

### 输入表单( F)

**`text-input`** ——标准文本输入。背景 `{colors.canvas}`文本中,请输入 `{colors.ink}`类型 `{typography.body-md}`,四舍五入 `{rounded.sm}` (6px), 贴 12px × 16px高度( 高度) 44px. 1px 细边线边界在 `{colors.hairline}`.

**`text-input-focus`** 焦点状态。边框加厚或重彩 `{colors.info-border}`.

### 定价子系统

**`pricing-tier-card`** — Standard tier card. Background `{colors.canvas}`, text `{colors.pricing-ink}`, type `{typography.pricing-card-title}` for the plan name, rounded `{rounded.md}` (10px), internal padding `{spacing.xl}` (32px). Carries the plan name, a price block in `{typography.pricing-display}` (44.8px / 475), feature checklist, and a `{component.button-pricing-pill}` at the bottom.

**`pricing-tier-card-featured`** — The featured tier (typically "Team" or "Business"). Background shifts to `{colors.surface-soft}`. No accent border, no badge — the background tone shift is the only signal.

**`pricing-comparison-row`** — Each row of the long comparison table at the bottom of the pricing page. Labels in the left column; checkmarks or values across 4 plan columns. 12px vertical padding per row, hairline divider between rows.

### 导航变体

**`footer`** 光面( )`{colors.canvas}`), 6- 覆盖平台/ 解决方案/ 资源/ 学习/ 连子树的桌面列链接列表。 垂直编目 `{spacing.section}` 将上行链接块和下行合法块分隔开。类型 `{typography.body-md}`.

**`cta-band-light`** — The light gray "Start building with Airtable" CTA strip near the footer. Background `{colors.surface-strong}` (#e0e2e6), text `{colors.ink}`, rounded `{rounded.lg}` (12px), padding `{spacing.xxl}` (48px). Carries an h2 in `{typography.display-md}` and a `{component.button-primary}`.

### 签名组件

**Articles Vertical Rainbow Stripe Hero** — The articles-page hero treatment. Multi-color vertical bands at varying widths sitting on `{colors.surface-dark-elevated}`. The h1 + sub-head + CTA cluster sits center-left on top of the stripes. This is a single-page hero treatment, not a system-wide signature — do not promote it to a multi-page pattern.


## 设计建议与禁忌

### 执行
- 保留 `{component.button-primary}` 几乎是黑色的,品牌的主要CTA是 `{colors.primary}`把它们混在一起会让自信的首屏变成一个困惑的首屏
- 准备金 `{component.button-primary}` 系统的设计是为了在品牌操作层中稀缺。
- Use `{component.button-secondary}` (white with hairline outline) as the natural pair with `{component.button-primary}`. The two together form Airtable's signature button row.
- Trust whitespace as the hero atmosphere. Hero bands are intentionally calm — no gradient, no mesh, no atmospheric backdrop. Going against this reads as off-brand.
- Use `{component.signature-coral-card}`, `{component.signature-forest-card}`, and `{component.hero-card-dark}` to break editorial monotony. These are the brand's voltage moments.
- 保留 `{component.demo-grid-card}` 网格内高度不均匀,统一高度感觉像一个光谱表.
- 将定价表面当作自己的方言: 保留 `{typography.pricing-display}`, `{typography.pricing-card-title}`,以及 `{component.button-pricing-pill}` 一起,把它们混在一起 Haas 格罗特斯克按钮类型打破子系统的声音.
- 锁定每个编辑乐队 `{spacing.section}` (96px)垂直贴垫.

### Don't
- Don't make `{colors.link}` (#1b61c9) the primary button color. It is the link color. The primary button is `{colors.primary}` (#181d26, near-black). Treating link-blue as the brand action is the most common mistake when reading Airtable's CSS variables.
- Don't add a gradient backdrop to the hero. Airtable's hero is white, full stop. Mesh, aurora, spotlight gradients all read as "another SaaS template" — not Airtable.
- Don't bold display-weight type. `{typography.display-xl}` and `{typography.display-lg}` are intentionally weight 400 / 500 — going to 700 reads as marketing-page-template.
- Don't use `{rounded.pill}` outside the pricing surface. It's a sub-system signal, not a general radius option.
- 连续两段别重复相同的表面模式,社论的节奏取决于节奏:白 – 签名卡 → 白 → 奶油 → 暗 → 白 ,连续读作打字博客的两名白人.
- Don't add hover state styling beyond what the system already encodes. The system documents Default and Active/Pressed only.
- 系统电压已经使用珊瑚,森林,暗海军,奶油,桃子,薄荷,黄,芥子.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile | < 768px | Single-column body; top nav collapses to hamburger; demo-grid drops to 1-up; signature cards stay full-bleed; logo strip wraps to 2 rows; footer collapses to single-column |
| 平板 | 768–1024px | 2- 上调演示网格;顶端导航保持水平但收紧;奶油调味卡堆 2-上;定价比较表可横向滚动 |
| 桌面 | 1024–1440px | 3- 上层演示网(和 4- 内容更紧; top-nav 包含所有菜单项; 定价等级卡渲染 4- 横跨 |
| 宽 | > 1440px | 与桌面相同, 室外呼吸室较多; 最大内容宽度盖度为 ~1280px 页面添加外边,而不是扩大类型 |

### 触控区域
- `{component.button-primary}` 和兄弟姐妹在 48 × 48px 最低(16px 垂直粘贴+ 16px line-height——舒适地凌驾于WCAG AAA之上. 44 × 44.
- `{component.button-icon-circular}` 完全就是这个意思 40 × 40px - 略低于世界妇女咨询组的建议 44,但中心图标和点射线可以视线补偿.
- `{component.text-input}` 高度为 44px.

### 折叠战略
- 顶级导航崩溃到汉堡 < 768px;菜单作为全屏工作表而不是下拉打开.
- Card grids reduce columns rather than scaling cards down.
- 电话 `{component.feature-card-tabbed}` 将标签栏重新安装在移动中的内容窗格上方。
- 定价比较表转换为水平可滚动刷卡, 时间为 < 1024px;四个计划头在身体卷轴时保持可见.

### 图像行为
- 解码卡UI截图可以切换到容器,而不是放大.
- 首屏插图在移动上全线流血,失去水平边距.
- 签名卡图像(内珊瑚/森林/暗卡)不裁剪地压缩到其卡宽.


## 迭代指南

1. 一次聚焦一个组件。直接引用其 YAML 密钥( Q)`{component.button-primary}`, `{component.signature-coral-card}`).
2. When adding a new component, decide first which sub-system it belongs to: the main editorial system (Haas, `{rounded.lg}`/`{rounded.md}`) or the pricing sub-system (Inter Display, `{rounded.pill}`).
3. 现有组成部分的备选案文(第2款)`-active`, `-disabled`, `-focus`)作为单独的条目在 `components:` 永远不能成为巢穴状态的物体
4. 使用 `{token.refs}` 随处可见的散文中都提到一个颜色,半径,打字角色,或者一个间隔值. Hex代码最多出现在引用旁边一次.
5. 绝不允许文档徘徊。系统只记录默认和主动/已显示状态 。
6. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 自动发出警告。
7. When in doubt about emphasis: bigger type before bolder type, signature surface card before solid accent.


## 已知缺口

- 面部演示网格表面的精确六进制值(`{colors.signature-peach}`, `{colors.signature-mint}`, `{colors.signature-yellow}`, `{colors.signature-mustard}`某些产品发射可能会季节性地交换这些表面。
- 跨越所有组成部分的过度行为没有记录(按全球无过度政策)。
- 动画和过渡时间范围不在此限.
- 表格验证状态超出 `text-input-focus` 输入错误和成功状态需要专门的格式页才能确认。
- 定价比较表的检查标记格莱弗和柱-凹面宽度被描述为结构上,但没有正式化为符号.
- CSS 变量 `--theme_button-background-primary: #1b61c9` 存在于 `:root` 但它并不被用作营销网站中任何地点的主要 CTA 颜色。它将映射到链接/信息颜色角色。在这里记录了这样以后的提取不会重新对误导变量名称进行检索。

## 设计词元原值

A sober, editorial workflow-software interface anchored on white canvas and dark-ink type, where brand voltage comes from full-bleed signature cards in coral, dark green, peach, and dark navy that punctuate long-scroll explainer pages. Primary actions use a near-black pill CTA; secondary actions sit in a white outlined button. Type runs Haas Grotesk in modest weights — never bold for its own sake.

```yaml
---
version: alpha
name: Airtable-design-analysis
description: A sober, editorial workflow-software interface anchored on white canvas and dark-ink type, where brand voltage comes from full-bleed signature cards in coral, dark green, peach, and dark navy that punctuate long-scroll explainer pages. Primary actions use a near-black pill CTA; secondary actions sit in a white outlined button. Type runs Haas Grotesk in modest weights — never bold for its own sake.

colors:
  primary: "#181d26"
  primary-active: "#0d1218"
  ink: "#181d26"
  body: "#333840"
  muted: "#41454d"
  hairline: "#dddddd"
  border-strong: "#9297a0"
  canvas: "#ffffff"
  surface-soft: "#f8fafc"
  surface-strong: "#e0e2e6"
  surface-dark: "#181d26"
  surface-dark-elevated: "#1d1f25"
  signature-coral: "#aa2d00"
  signature-forest: "#0a2e0e"
  signature-cream: "#f5e9d4"
  signature-peach: "#fcab79"
  signature-mint: "#a8d8c4"
  signature-yellow: "#f4d35e"
  signature-mustard: "#d9a441"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  link: "#1b61c9"
  link-active: "#1a3866"
  info: "#254fad"
  info-border: "#458fff"
  success: "#006400"
  success-border: "#39bf45"
  pricing-ink: "#1d1f25"

typography:
  display-xl:
    fontFamily: "Haas Groot Disp, Haas, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 0
  display-lg:
    fontFamily: "Haas Groot Disp, Haas, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  display-md:
    fontFamily: "Haas Groot Disp, Haas, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  title-lg:
    fontFamily: "Haas, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0.12px
  title-md:
    fontFamily: "Haas Groot Disp, Haas, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  title-sm:
    fontFamily: "Haas, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  label-md:
    fontFamily: "Haas, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "Haas, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Haas, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  caption:
    fontFamily: "Haas, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0.16px
  legal:
    fontFamily: "Haas, sans-serif"
    fontSize: 13.12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  pricing-display:
    fontFamily: "Inter Display, system-ui, sans-serif"
    fontSize: 44.8px
    fontWeight: 475
    lineHeight: 1.1
    letterSpacing: 0
  pricing-section:
    fontFamily: "Inter Display, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 475
    lineHeight: 1.2
    letterSpacing: 0
  pricing-card-title:
    fontFamily: "Inter Display, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 475
    lineHeight: 1.3
    letterSpacing: 0

rounded:
  xs: 2px
  sm: 6px
  md: 10px
  lg: 12px
  pill: 9999px
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
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  button-secondary-on-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  button-legal:
    backgroundColor: "{colors.link}"
    textColor: "{colors.on-primary}"
    typography: "{typography.legal}"
    rounded: "{rounded.xs}"
    padding: 12px 10px
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  button-pricing-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.pricing-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: 96px
  signature-coral-card:
    backgroundColor: "{colors.signature-coral}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: 48px
  signature-forest-card:
    backgroundColor: "{colors.signature-forest}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: 48px
  hero-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: 48px
  feature-card-tabbed:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  cream-callout-card:
    backgroundColor: "{colors.signature-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.md}"
    padding: 24px
  demo-grid-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 16px
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-md}"
    padding: 32px
  article-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.md}"
    padding: 16px
  topic-filter-rail:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    width: 240px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
    height: 44px
  text-input-focus:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.pricing-ink}"
    typography: "{typography.pricing-card-title}"
    rounded: "{rounded.md}"
    padding: 32px
  pricing-tier-card-featured:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.pricing-ink}"
    typography: "{typography.pricing-card-title}"
    rounded: "{rounded.md}"
    padding: 32px
  pricing-comparison-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    padding: 12px
  cta-band-light:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: 48px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    padding: 64px
---
```
