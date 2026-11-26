# Claude · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Claude.com is the warmest, most editorial interface in the AI-product category. The base atmosphere is a **tinted cream canvas** (`{colors.canvas}` — #faf9f5) — distinctly warm, deliberately not the cool gray-white that every other AI brand uses. Headlines run a **slab-serif display** ("Copernicus" / Tiempos Headline) at weight 400 with negative letter-spacing, paired with **StyreneB / Inter** body sans. The combination feels like a literary publication, not a SaaS marketing page.

品牌辨识度来自 **奶油+珊瑚配对** ——珊瑚(含:`{colors.primary}` — #cc785c)是每个主CTA,品牌字签,全血呼号牌上使用的Anthropic强调色的标志. 珊瑚温暖,稍微微哑,从未青/蓝——故意反置OpenAI的酷酷板块,Google的饱和蓝,以及 Microsoft公司青色。

该系统有三个表面模式,可逐页交替:
1. **奶油页面底色** (`{colors.canvas}`)——缺省体积
2. **轻霜卡** (`{colors.surface-card}`)——特色卡背景.
3. **暗海军产品表面** (`{colors.surface-dark}`)——代码编辑器模型,模型显示卡,脚前CTA,脚脚本身

黑暗的表面是哪里, 黑暗的表面是哪里 Claude 显示其产品铬 – 代码块,终端输出,模型比较表,代理流图。奶油到黑暗的对比是页面的节奏。

**关键特征 :**
- Warm cream canvas (`{colors.canvas}` — #faf9f5) with dark warm-ink text (`{colors.ink}` — #141413). The brand's defining color choice.
- 珊瑚初级CTA(`{colors.primary}` — #cc785c。 很少在单个按钮上使用, 慷慨地在满血的珊瑚呼喊卡上使用。
- Slab-serif display headlines via Copernicus / Tiempos Headline at weight 400 with negative letter-spacing. Pairs with humanist sans body for a literary editorial voice.
- 暗海军产品模拟卡(`{colors.surface-dark}` — #181715)携带代码块,终端板,模型比较数据——品牌以规模显示产品铬,而不是抽象的营销插图.
- 轻奶油特色卡(`{colors.surface-card}` — #efe9de)——比页面底色略暗,用于内容驱动的特性解释.
- 反射线-斜射标记——一个黑色小星状的格子(英语:4-speak radial)——作为品牌字标前缀和内容标记出现.
- Border radius is hierarchical: `{rounded.md}` (8px) for buttons + inputs, `{rounded.lg}` (12px) for content + product cards, `{rounded.xl}` (16px) for the hero illustration container, `{rounded.pill}` for badges.
- 节奏 `{spacing.section}` (96px——现代赛卡标准. 内部卡片贴贴贴保持宽宏大量. `{spacing.xl}` (32px).


## 配色

### 品牌和 强调色
- **珊瑚/小学** (`{colors.primary}` — #cc785c: 签名 Anthropic 暖珊瑚. 在每个主要的CTA背景上使用,在满血的珊瑚呼号卡上使用,在品牌的字号强调色上使用. 尖号标志外最公认的Anthropic 颜色.
- **珊瑚活性** (`{colors.primary-active}` — #a9583e: 新闻/悬浮-达克变种.
- **珊瑚残废** (`{colors.primary-disabled}` — #e6dfd8: 脱饱和奶油丁酸残废状态.
- **调和Teal** (`{colors.accent-teal}` — #5db8a6:在二级产品表面使用节制(端数状态指标,连接器页面中的"主动连接"点).
- **琥珀节** (`{colors.accent-amber}` — #e8a55a: 分类徽章和内含亮点上使用的小型伴暖通.

### 表面
- **页面底色** (`{colors.canvas}` — #faf9f5:默认的页层. 丁香奶油——温暖,故意不纯白色.
- **表面软** (`{colors.surface-soft}` — #f5f0e8: 区划符,非常柔软的带状背景.
- **表面卡片** (`{colors.surface-card}` — #efe9de:特色卡,内容卡,比页面底色更暗的一步.
- **表面凝胶坚固** (`{colors.surface-cream-strong}` — #e8e0d2: 选定分类标签和下划线段段所使用的最强亮度变体.
- **表面暗色( T)** (`{colors.surface-dark}` — #181715:代码编辑器模型,模型显示卡,页脚. 主导暗色表面.
- **表面暗线** (`{colors.surface-dark-elevated}` — #252320: 暗带内高分牌(在模型中设置面板).
- **表面暗软** (`{colors.surface-dark-soft}` — #1f1e1b:稍轻的暗色,用于较大暗卡内部的代码块背景.
- **Hairline** (`{colors.hairline}` — #e6dfd8): The 1px border tone on cream surfaces. Same hex as `{colors.primary-disabled}` — borders feel like one elevation step rather than ink lines.
- **柔软的细边线** (`{colors.hairline-soft}` — #ebe6df:同一带内使用的几乎可视分机.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — #141413:所有头条和主文,温暖的黑暗,略微淡出纯黑.
- **Body Strong** (`{colors.body-strong}` — #252523): Emphasized paragraphs, lead text.
- **体质** (`{colors.body}` — #3d3d3a: 默认的运行文本颜色.
- **静音** (`{colors.muted}` — #6c6a64:子标题,面包屑,脚贴的辅文字.
- **Muted Soft** (`{colors.muted-soft}` — #8e8b82): Captions, fine-print, copyright lines.
- **小学** (`{colors.on-primary}` — #ffffff:珊瑚按钮上的文字.
- **黑暗时** (`{colors.on-dark}` — #faf9f5: 暗表面使用的凝胶-丁酸白色(去除页面底色色调).
- **暗软** (`{colors.on-dark-soft}` — #a09d96:页脚体文字,暗模中的次要标签.

### 语义
- **成功** (`{colors.success}` — #5db872:绿色状态点,"可用"指标.
- **警告** (`{colors.warning}` — #d4a017:警告警示(在营销表面有报道).
- **错误** (`{colors.error}` — #c64545:验证错误.


## 字体排版

### 字体家族
The system runs **Copernicus** (or **Tiempos Headline** as substitute) as the slab-serif display face for headlines, and **StyreneB** (or **Inter** as substitute) as the humanist sans for body, navigation, and UI labels. **JetBrains Mono** handles code blocks. The fallback stack walks `Tiempos Headline, Garamond, "Times New Roman", serif` for display and `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for body.

显示/身体的分割是编辑:
- Copernicus serif (字重) 400——负跟踪) → h1, h2, h3,首屏显示
- StyreneB 萨斯( 字重) 400-500) 身体、导航、按钮、标题、标签
- JetBrains Mono → all code blocks and terminal text

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 1.05 | -1.5px | Homepage h1 ("Meet your thinking partner") — Copernicus serif |
| `{typography.display-lg}` | 48px | 400 | 1.1 | -1px | 科长 -- -- Copernicus |
| `{typography.display-md}` | 36px | 400 | 1.15 | -0.5px | 子节标题,型号名称 - Copernicus |
| `{typography.display-sm}` | 28px | 400 | 1.2 | -0.3px | 定价级别名称,点名头条—— Copernicus |
| `{typography.title-lg}` | 22px | 500 | 1.3 | 0 | 定价计划大小标签—— StyreneB |
| `{typography.title-md}` | 18px | 500 | 1.4 | 0 | 特征卡片标题, 介绍段落 |
| `{typography.title-sm}` | 16px | 500 | 1.4 | 0 | 连接器牌片标题, 列表标签 |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | 默认运行文本 - StyreneB |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | 页脚身体, fine-print |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | 标签、 标题 |
| `{typography.caption-uppercase}` | 12px | 500 | 1.4 | 1.5px | 类别标签, “NEW” 徽章 |
| `{typography.code}` | 14px | 400 | 1.6 | 0 | 代码块—— JetBrains Mono |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | 标准按钮标签 |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav 菜单项 |

### 原则
Display sizes use weight 400 (regular), never bold. Negative letter-spacing (-0.3 to -1.5px) is essential — Copernicus without it reads as off-brand. The serif character is what gives Anthropic its literary, considered voice; switching to a sans-serif display would make Claude feel like every other AI tool.

身体类型保持字重 400 段落、字重 500 圣体是人文主义的(StyreneB)——永远不几何. Inter 由于其类似的人道主义比例,是可以接受的替代物; Helvetica 或 减 减 Arial 将太中立 打破温暖的饮食感觉。

### Note on Font Substitutes
If Copernicus / Tiempos Headline is unavailable, **Cormorant Garamond** at weight 500 with -0.02em letter-spacing is the closest open-source approximation. **EB Garamond** is a fallback. For StyreneB, **Inter** is the closest match — both are humanist sans designed for screen reading. **Söhne** is another close alternative if licensed.


## 布局

### 间距系统
- **基部单位:** 4px.
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **科 科 padding:** `{spacing.section}` (96px)——现代-SaaS节奏.
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards, pricing tier cards, model comparison cards; `{spacing.lg}` (24px) for code-window cards and connector tiles.
- **Callout / CTA bands:** `{spacing.xxl}` (48px) inside coral callout cards; 64px inside the larger dark CTA band.

### 网格容器( C)
- **最大内容 width:** ~1200px centered.
- **编辑机构:** 单身 12-列网格;首屏经常使用 6/6 拆分(h)1 左,插图右).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Connector tile grids:** 4-up or 6-up at desktop, 2-up at tablet, 1-up at mobile.
- **定价 grid:** 3-up at desktop (Free / Pro / Team / Enterprise often), 1-up at mobile.

### 白空间哲学
奶油页面底色+ serif 显示 + 慷慨的内部编织 创建编辑间隔 —— Claude 读作长形杂志栏而非营销模板。 96px; 白空间内卡是宽大的( )32px),让类型呼吸。


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| 软细边线 | 1px `{colors.hairline}` 边框 | 投入, sub-nav,偶尔在牌上 |
| Cream card | `{colors.surface-card}` background — no shadow | Feature cards, content cards |
| Dark surface card | `{colors.surface-dark}` background — no shadow | Code editor mockups, model showcase cards |
| 暗影的暗影 暗影的暗影的暗影 | 低阿尔法时的阴影 | 覆盖状态(系统使用 `0 1px 3px rgba(20,20,19,0.08)` 很少见) |

高地哲学是 **颜色块先, 阴影稀有**,大多数深度来自奶油-vs-暗面对比. 阴影是最小的,暗面模型有自己的内部产品铬(代码编辑器滚动条,行号,语法突出),这些产品不需要外部阴影就可以增加细节.

### 装饰性深度
- 炭疽杆菌-标记甘油(4- 光线星号)作为小黑标志出现在品牌字标中,作为内容标记在内线中出现.
- 代码编辑器模型携带着自己的内部深度: 语法高亮文本在哑调蓝 / 橙 / 灰色,行号在 `{colors.muted-soft}`,在下方状态栏 `{colors.surface-dark-elevated}`.
- Some hero illustrations use simple line-art with coral and dark-navy strokes on cream — minimal, hand-drawn-feeling, never photorealistic.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | 准备了警徽强调色和小滴滴 |
| `{rounded.sm}` | 6px | Small inline buttons, dropdown items |
| `{rounded.md}` | 8px | 标准 CTA 按钮、 文本输入、 类别标签 |
| `{rounded.lg}` | 12px | 内容卡(特点、定价、 code-window,模型比较) |
| `{rounded.xl}` | 16px | 首屏插图容器,更大的马奎组件 |
| `{rounded.pill}` | 9999px | 徽章药,"NEW"标签 |
| `{rounded.full}` | 9999px / 50% | 超凡代用品,图标按钮 |

### 摄影和图示
Claude首屏很少使用摄影,而是使用:
- 珊瑚+的简单线条艺术插图 dark-navy 奶油布上的中风
- 代码编辑器模型(开发者专注页面上占主导地位的"首屏"处理)
- 终端输出模拟器 monospace 暗色文本
- 模型比较卡(Opus / Sonnet / Haiku),带有抽象几何缩略图

When photography is used (rare — mostly testimonials), avatars crop to perfect circles at 40px diameter.


## 组件

### 顶端导航

**`top-nav`** — Cream nav bar pinned to the top of every page. 64px tall, `{colors.canvas}` background. Carries the Anthropic spike-mark + "Claude" wordmark at left, primary horizontal menu (Product, Solutions, Use Cases, Pricing, Research, Company) center-left, right-side cluster with "Sign in" text-link, "Try Claude" `{component.button-primary}` (coral). Menu items in `{typography.nav-link}` (StyreneB 14px / 500).

### 按钮

**`button-primary`** - 珊瑚CTA的标志。 `{colors.primary}` (#cc785c),文本(第1行), `{colors.on-primary}` (白色),类型 `{typography.button}` (StyreneB 14px / 500), 贴 12px × 20px高度( 高度) 40px,四舍五入 `{rounded.md}` (8px) 活跃状态 `button-primary-active` 变暗为 `{colors.primary-active}` (#a9583e).

**`button-secondary`** ——带有细边线大纲的奶油按钮。背景 `{colors.canvas}`文本中,请输入 `{colors.ink}`, 1px 细边线边框,与主线相同垫线+高度+半径.

**`button-secondary-on-dark`** 旧的 `{colors.surface-dark}` 牌。背景 `{colors.surface-dark-elevated}` (#252320),文本(第1行), `{colors.on-dark}`. 保持黑暗——系统从不颠倒在暗表面的光次生.

**`button-text-link`** ——内置文本按钮,无背景. 用于顶端导航和内置CTA链接中的"签名".

**`button-icon-circular`** — 36px circular 图标按钮。背景 `{colors.canvas}`,细边线边框,墨色图标。用于旋转木雕箭头,共享,"更多视角".

**`text-link`** ——内置体链接于 `{colors.primary}` 压轴线下; 珊瑚内线连接是系统最显著的小细节之一。

### 纸牌和集装箱

**`hero-band`** 奶油罐头首屏 6-6 grid: h1 + sub-headline + button row on the left, hero illustration card or product mockup card on the right. Vertical padding `{spacing.section}` (96px).

**`hero-illustration-card`** — A larger card holding the hero's right-side artifact — sometimes a coral-stroke line illustration on cream background, sometimes a dark code editor mockup. Background `{colors.canvas}` or `{colors.surface-dark}` depending on context, rounded `{rounded.xl}` (16px).

**`feature-card`** 用于 3- 上层特性网格。背景 `{colors.surface-card}` (#efe9de 稍暗的奶油,圆形 `{rounded.lg}` (12px),内部粘贴 `{spacing.xl}` (32px。在顶部带一个小图标,一个 `{typography.title-md}` 头条,和身体描述 `{typography.body-md}`.

**`product-mockup-card-dark`** - 显示实际的暗色海军卡 Claude 产品铬(聊天界面、代码编辑器、代理控制)。 `{colors.surface-dark}`,四舍五入 `{rounded.lg}`内部粘贴 `{spacing.xl}` (32px。 。 运算文本标签 。 `{colors.on-dark}` 和以下产品UI碎片。

**`code-window-card`** ——一张专门暗卡,显示一个有行号的代码编辑器,语法高亮代码在 `{typography.code}` (JetBrains Mono),有时在下面设置“运行”按钮或终端输出面板。 `{colors.surface-dark}` 与 `{colors.surface-dark-soft}` 内置码块,四舍五入 `{rounded.lg}`, 编译 `{spacing.lg}` (24px) 的标志视觉要素。 Claude 代码产品页.

**`model-comparison-card`** — Used on the homepage's "Which problem are you up against?" section comparing Opus / Sonnet / Haiku. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, internal padding `{spacing.xl}` (32px). Carries the model name, a short capability blurb, and a `{component.text-link}` to learn more.

**`pricing-tier-card`** — Standard tier card. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Carries the plan name in `{typography.title-lg}` (StyreneB), price in `{typography.display-sm}` (Copernicus serif!), feature checklist in `{typography.body-md}`, and a `{component.button-primary}` at the bottom.

**`pricing-tier-card-featured`** — The featured tier (typically "Pro" or "Team"). Background flips to `{colors.surface-dark}`, text inverts to `{colors.on-dark}`. The dark surface IS the featured-tier signal.

**`callout-card-coral`** ——全血珊瑚卡,搭载大呼应行动. `{colors.primary}` (#cc785c),文本(第1行), `{colors.on-primary}` 圆形 `{rounded.lg}`, 编译 `{spacing.xxl}` (48px)珊瑚表面是电压;内部的CTA使用倒扣式(珊瑚上的乳油/canvas按钮).

**`connector-tile`** — Used on the connectors page's integration grid. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, padding 20px. Each tile carries a logo at top, a `{typography.title-sm}` connector name, and a short description.

### 输入表单( F)

**`text-input`** ——标准文本输入。背景 `{colors.canvas}`文本中,请输入 `{colors.ink}`类型 `{typography.body-md}`,四舍五入 `{rounded.md}` (8px), 贴 10px × 14px高度( 高度) 40px. 1px 细边线边界在 `{colors.hairline}`.

**`text-input-focused`** — Focus state. Border thickens or shifts to `{colors.primary}` (coral) for emphasis. Carries a 3px coral-at-15%-alpha outer ring.

**`cookie-consent-card`** ——右下方浮动暗饼干横幅. `{colors.surface-dark}`文本中,请输入 `{colors.on-dark}`,四舍五入 `{rounded.lg}`, 编译 `{spacing.lg}` (24px) 少数地方之一的暗面在奶油页上以小尺度出现.

### 标记/ 徽章

**`badge-pill`** — Small pill label used for category tags. Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.caption}` (13px / 500), rounded `{rounded.pill}`, padding 4px × 12px.

**`badge-coral`** — Coral-fill badge for "NEW", "BETA", featured highlights. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.caption-uppercase}` (12px / 500 / 1.5px tracking), rounded `{rounded.pill}`, padding 4px × 12px.

### 标签/过滤器

**`category-tab`** + **`category-tab-active`** — Used in sub-nav rows on solutions / connectors pages. Inactive: transparent background, `{colors.muted}` text. Active: `{colors.surface-card}` background, `{colors.ink}` text. Padding 8px × 14px, rounded `{rounded.md}`.

### 中导/页脚

**`cta-band-coral`** — A pre-footer "Try Claude" CTA card. Full-width coral fill, white type, rounded `{rounded.lg}`, padding 64px. Carries an h2 in `{typography.display-sm}` (still serif!), a sub-line, and a cream-button CTA.

**`cta-band-dark`** ——开发者重点页面上另类前脚带. `{colors.surface-dark}`文本中,请输入 `{colors.on-dark}`,四舍五入 `{rounded.lg}`, 编译 64px。往往与一个 code-window 纸牌。

**`footer`** ——关闭每一页的黑暗海军页脚。 `{colors.surface-dark}` (#181715),文本(第1行), `{colors.on-dark-soft}`. 4- 覆盖产品/公司/资源/法律的桌面链接列表。 64px。安特罗比标记+“安特罗比”词标位于顶端 `{colors.on-dark}`页脚从不反转。


## 设计建议与禁忌

### 执行
- 霜页面底色上每页都锁定,纯白读作"任何其他AI工具";暖色的锡是品牌差异.
- 使用 Copernicus serif 显示标题。对齐 StyreneB 圣体 负 letter-spacing 显示大小为不可谈判的。
- 准备金 `{colors.primary}` 初级社区协议和全血型 `{component.callout-card-coral}` 千万别把强调色画到别的地方去
- 使用 `{component.product-mockup-card-dark}` 财务报告和已审计财务报表 `{component.code-window-card}` 显示实际 Claude 产品铬。当您可以显示真实代码时,不要涂上代码的营销插图。
- 平对 `{component.feature-card}` (尖叫声)与 `{component.product-mockup-card-dark}` 换带的(navy),奶油到暗的节奏是品牌的节奏机制.
- 使用 Anthropic 标记格莱弗作为品牌字标记前缀, 绝不在字标记本身内将标记反转为白刻在暗处.
- 应用 `{spacing.section}` (96px)在主要乐队之间.

### Don't
- Don't use cool grays or pure white for canvas. Cream is the brand.
- 大胆一点 serif 显示字重。 Copernicus 时 间 700 读作爆炸性;系统留在 400.
- Don't use cool blue or saturated cyan as a brand accent. The coral is the brand voltage.
- Don't put coral everywhere. The coral is scarce on individual elements and generous only on full-bleed coral callout cards.
- Don't use Inter for display headlines. The serif character is the brand voice.
- 连续两段别重复相同的表面模式,节奏替代:奶油 – 奶油卡 – 暗雾 → 奶油 – 珊瑚呼喊 – 暗足.
- Don't add hover state styling beyond what the system already encodes — primary darkens on press; nothing else changes.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→32px; hero-illustration-card stacks below content; feature grids 1-up; connector tiles 2-up; pricing 1-up; footer 4 cols → 1 |
| Tablet | 768–1024px | Top nav stays horizontal but tightens; feature cards 2-up; connector tiles 3-up; pricing 2-up |
| 桌面 | 1024–1440px | 满 top-nav 包含所有菜单项; 3- 增加特色卡; 4- 上层或 6- 上层连接器瓦片; 3- 上调定价等级 |
| 宽 | > 1440px | 与桌面相同, 室外呼吸室较多; 最大内容宽度盖度为 1200px |

### 触控区域
- `{component.button-primary}` at minimum 40 × 40px.
- `{component.button-icon-circular}` 准确的说 36 × 36 - 略低于世界水产学咨询小组 44 却以视觉为中心。
- `{component.text-input}` 高度为 40px.
- Connector tile entire card area is tappable; effective tap area >> 44px.

### 折叠战略
- 顶级导航崩溃到汉堡 < 768px;菜单作为全屏奶油纸打开.
- 首屏乐队的 6-6 网格崩溃到移动上的单列——h1 +子标题+按钮先,然后是下面的插图/模拟卡.
- 特色网格减少柱数,而不是缩小牌数.
- 定价等级卡崩溃 4 → 2 → 1; 特色级的暗面在每个断点上保持视差分明.
- Code-window cards retain code legibility at every breakpoint by allowing horizontal scroll within the card rather than wrapping code lines.

### 图像行为
- 暗模拟器内的代码块 fixed font-size; 水平滚动在移动上而不是包扎.
- 首屏插图比例尺;线条艺术中风在移动上略微微微微瘦.
- 证物中的照片 在每个断点上转圈


## 迭代指南

1. 一次关注一个组件。请参考其 YAML 密钥( Q)`{component.feature-card}`, `{component.code-window-card}`).
2. 现有组成部分的备选案文(第2款)`-active`, `-disabled`, `-focused`)作为单独的条目在 `components:`.
3. 使用 `{token.refs}` 到处都是,从不内含六分法。
4. 文档永远不要徘徊。 默认和主动状态/ 已显示状态 。
5. 显示标题保留 Copernicus serif 400 身体会留下 StyreneB / Inter 400。 。 。 。
6. 奶油+珊瑚+暗海军是三重音,不要引入第四表面调(没有紫色卡片,没有绿色部分).
7. When in doubt about emphasis: bigger Copernicus serif before bolder weight.


## 已知缺口

- Copernicus 财务报告和已审计财务报表 StyreneB 被许可使用 Anthropic 类型面, 且不能作为公共网络字体。 替代( )Tiempos Headline /加拉蒙德勋章/EB加拉蒙德勋章 serif; Inter / Söhne for sans)在排版部分有记载.
- Anthropic radial-spike-mark是作为内置SVG而提供的品牌格莱弗;它在此没有作为系统符号正式化. 把它当作一个标志资产.
- 动画和过渡时间(聊天消息透露,主页上的代码块打字机效果,代理流图动画)不在范围.
- 表格验证状态超出 `{component.text-input-focused}` 不被提取 – 错误/ 成功状态需要注册或反馈流程来确认。
- 实际 Claude 产品表面( 4)claude.ai聊天界面)与营销网站共享一些符号,但添加了许多产品特定组件(聊天泡沫,消息工具,文件上传芯片,对话历史侧栏),这些内容超出了此营销表面文档的范围.
- 某些页面上的“代理”/“计算机使用”演示卡,显示动画 Claude 控制浏览器——静态截图不能完全捕捉动画的铬.

## 设计词元原值

A warm-canvas editorial interface for Anthropic's Claude product. The system anchors on a tinted cream canvas with serif display headlines, warm coral CTAs, and dark navy product surfaces (code editor mockups, model showcase cards). Brand voltage comes from the cream/coral pairing — deliberately warm and humanist where most AI brands use cool blue + slate. Type voice runs a slab-serif display ("Copernicus" / Tiempos Headline) for h1/h2 and a humanist sans for body. The signature Anthropic black-radial-spike mark anchors the wordmark.

```yaml
---
version: alpha
name: Claude-design-analysis
description: A warm-canvas editorial interface for Anthropic's Claude product. The system anchors on a tinted cream canvas with serif display headlines, warm coral CTAs, and dark navy product surfaces (code editor mockups, model showcase cards). Brand voltage comes from the cream/coral pairing — deliberately warm and humanist where most AI brands use cool blue + slate. Type voice runs a slab-serif display ("Copernicus" / Tiempos Headline) for h1/h2 and a humanist sans for body. The signature Anthropic black-radial-spike mark anchors the wordmark.

colors:
  primary: "#cc785c"
  primary-active: "#a9583e"
  primary-disabled: "#e6dfd8"
  ink: "#141413"
  body: "#3d3d3a"
  body-strong: "#252523"
  muted: "#6c6a64"
  muted-soft: "#8e8b82"
  hairline: "#e6dfd8"
  hairline-soft: "#ebe6df"
  canvas: "#faf9f5"
  surface-soft: "#f5f0e8"
  surface-card: "#efe9de"
  surface-cream-strong: "#e8e0d2"
  surface-dark: "#181715"
  surface-dark-elevated: "#252320"
  surface-dark-soft: "#1f1e1b"
  on-primary: "#ffffff"
  on-dark: "#faf9f5"
  on-dark-soft: "#a09d96"
  accent-teal: "#5db8a6"
  accent-amber: "#e8a55a"
  success: "#5db872"
  warning: "#d4a017"
  error: "#c64545"

typography:
  display-xl:
    fontFamily: "Copernicus, Tiempos Headline, serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Copernicus, Tiempos Headline, serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "Copernicus, Tiempos Headline, serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-sm:
    fontFamily: "Copernicus, Tiempos Headline, serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.3px
  title-lg:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 1.5px
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  button:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
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
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-secondary-on-dark:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 96px
  hero-illustration-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  product-mockup-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  code-window-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 24px
  model-comparison-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  callout-card-coral:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  connector-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.lg}"
    padding: 20px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  cookie-consent-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 24px
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
    padding: 8px 14px
    rounded: "{rounded.md}"
  category-tab-active:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.md}"
  badge-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-coral:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  cta-band-coral:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.lg}"
    padding: 64px
  cta-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.lg}"
    padding: 64px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: 64px
---
```
