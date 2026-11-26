# Pinterest · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Pinterest营销系统是围绕一个单一的教学原则构建的: 走出照片的路. 铬是一种静静的温和的乳汁中性调色板(英语:`{colors.surface-soft}`, `{colors.surface-card}`, `{colors.canvas}`) 携带印刷机 Pinterest专有 Pin Sans 脸,与 Pinterest 红色( R)`{colors.primary}` — `#e60023`) 专用于“签名”CTA、活动Tab指标和 sticky top-nav 锚。 图像后面的每一个表面都可以淡出, 即针片、 类片、 内容缩略图、 剖面图—— 构成实际产品。

The design system has two distinct surface modes that alternate down the home page: the **hero/CTA chrome** (cream surfaces, large 70px Pin Sans display headlines, alternating left/right photo-illustrated feature cards) and the **content masonry** (a column-based grid of 16px-radius pin cards on `{colors.surface-card}` with no internal padding — the pin is the card). The search results page is almost pure masonry: a tight column grid of pin imagery in mixed aspect ratios, with a small filter-chip strip at the top and the sticky red Sign-up CTA in the upper-right corner. The `create.pinterest.com` business surface inverts the grid back to a more traditional editorial layout but keeps every other rule of the system: Pin Sans, cream chrome, red CTA, 16px-radius pills.

The system's signature gesture is **shape geometry**: 16px radius (`{rounded.md}`) for nearly every surface — buttons, inputs, pin cards, feature cards — and 32px radius (`{rounded.lg}`) reserved for pin-card-large and modal cards. There are exactly three radius values in active use: 16px, 32px, and pill (9999px). The system never goes flat (sharp corners) and never goes radius-medium — those two values are the entire shape vocabulary.

**关键特征 :**
- 单倍分数CTA: Pinterest 红色( R)`{colors.primary}`) 携带每个主动作;其他一切都是单色
- Pin Sans proprietary typography across every text role from `{typography.display-xl}` (70px) down to `{typography.caption-sm}` (12px) — no serif, no monospace anywhere
- Two-radius shape system: `{rounded.md}` (16px) for most components, `{rounded.lg}` (32px) for large cards and modals, `{rounded.full}` for circular elements
- 共济会针网格作为负载视觉元素——以柱为主的布局,其中保留每个针的自然侧比
- 暖乳中性铬(`{colors.surface-card}` — #f6f6f3)在图像后轻轻退却而不相竞
- Sticky 上导航,每断点右上方都挂着总红的签名 CTA
- 使用软缩的页面内容而不是导航跳跃的 Modal 覆盖( login/ signup)


## 配色

> **Source pages:** `/` (home), `/search/pins/?q=bold lip` (search results), `create.pinterest.com/` (creator marketing), `create.pinterest.com/product-features/how-to-create-boards/` (creator article). The chrome palette is identical across all four pages.

### 品牌和 强调色
- **Pinterest 红色** (`{colors.primary}` — `#e60023`:该品牌是唯一高度饱和的颜色. 注册CTAs, sticky top-nav 锚,在标签条中活动状态,以及品牌字号.
- **Pinterest 红色按下** (`{colors.primary-pressed}` — `#cc001f`:按下状态为主按钮——一个比品牌红色更深的单音节.

### 表面
- **Canvas** (`{colors.canvas}` — `#ffffff`): true white. The base surface for the primary nav, modals, feature cards, and content body.
- **软表面** (`{colors.surface-soft}` — `#fbfbf9`:微弱的奶油丁丁脱白,用于主页首屏的页体洗涤.
- **表面卡片** (`{colors.surface-card}` — `#f6f6f3`: 暖心卡和皮夹背景. Carrys 分类瓷砖, search-bar 默认填充, button-secondary 默认,以及 pin-card 背景。 。
- **中学学士学位** (`{colors.secondary-bg}` — `#e5e5e0`: 用于 `{component.button-secondary}` ("我已经有一个账户")填充——比 `{colors.surface-card}`.
- **中学** (`{colors.secondary-pressed}` — `#c8c8c1`:按下状态为二级按钮.
- **表面暗色( T)** (`{colors.surface-dark}` — `#262622`: 热近黑色,用于罕见的深色CTA条上 `create.pinterest.com`.
- **Hairline** (`{colors.hairline}` — `#dadad3`): 1px row dividers, footer column rules.
- **柔软的细边线** (`{colors.hairline-soft}` — `#e5e5e0`:较轻的内线分解器;双倍作为二级按钮背景.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — `#000000`:主头条,按钮文本,主导航链接.
- **墨水软** (`{colors.ink-soft}` — `#211922`: 内线链接的体质改编中的颜色,品牌仅"色彩"超越 Pinterest 红在铬中使用——一种带有微弱暖铸的近黑.
- **体质** (`{colors.body}` — `#33332e`: 默认段落文本于 `{colors.canvas}`.
- **木炭矿** (`{colors.charcoal}` — `#262622`: 纯墨太重的地方,潜柔软的体型.
- **静音** (`{colors.mute}` — `#62625b`:元数据文本,页脚链接,副标题.
- **灰尘** (`{colors.ash}` — `#91918c`: 已禁用按钮文本, 输入中的占位符文本 。
- **石头** (`{colors.stone}` — `#c8c8c1`: 最小强调的公用文字, 禁用状态边框 。
- **On Dark** (`{colors.on-dark}` — `#ffffff`): primary text on `{colors.surface-dark}`.

### 语义
- **错误** (`{colors.error}` — `#9e0a0a`:验证消息,破坏性确认副本.
- **Error Deep** (`{colors.error-deep}` — `#cc001f`): deepened error background where the regular error tone needs more contrast. Note: this matches the primary-pressed value but in error context represents semantic destructiveness.
- **成功 深处** (`{colors.success-deep}` — `#103c25`:产品成功信息.
- **成功阴影** (`{colors.success-pale}` — `#c7f0da`:苍白的成功-泄漏背景.
- **聚焦外部** (`{colors.focus-outer}` — `#435ee5`: 系统 focus-ring 蓝色——以 2px 外框围绕焦点输入和按钮.
- **焦点内在** (`{colors.focus-inner}` — `#ffffff`: 内部白色间隙 focus-ring 堆栈。

### 编辑版Accents(在内容图像和类别徽章中很少使用)
- **青色压蓝** (`{colors.accent-pressed-blue}` — `#617bff`:按下状态,用于蓝信息徽章和编辑针芯片.
- **紫色铜色** (`{colors.accent-purple}` — `#7e238b`:编辑建议徽章,产品 "Pinterest 预言"呼唤.
- **紫深号** (`{colors.accent-purple-deep}` — `#6845ab`:配对为暗色,用于紫色锁和"Performance+"图标.


## 字体排版

### 字体家族
**Pin Sans** is Pinterest's proprietary geometric sans-serif used across every text role on every page. It carries weights 400 (regular), 500 (medium), 600 (semibold), and 700 (bold), and falls back through a long stack — `-apple-system` → `system-ui` → `Segoe UI` → `Roboto` → `Helvetica Neue` → `Arial` plus emoji fallbacks. The face's distinctive trait is its tight letter-spacing at display sizes (-1.2px on `{typography.display-xl}` and `{typography.heading-xl}`), which gives 70px headlines a confident, friendly density rather than the airy spread of more conventional display geometric sans faces.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 70px | 600 | 1.1 | -1.2px | 营销首屏头条("创造你热爱的生活") Pinterest") |
| `{typography.display-lg}` | 44px | 700 | 1.15 | -0.8px | "你的内容可以繁荣" 创造首屏 |
| `{typography.heading-xl}` | 28px | 700 | 1.2 | -1.2px | 一节标题("将你最喜欢的想法带给生命"),Pinterest 为你品牌). |
| `{typography.heading-lg}` | 22px | 600 | 1.25 | 0 | 子节标题,模式标题(“欢迎使用” Pinterest") |
| `{typography.heading-md}` | 18px | 600 | 1.3 | 0 | 内网针标签牌名 |
| `{typography.body-md}` | 16px | 400 | 1.4 | 0 | 文本副本, 模式正文, 默认段落 |
| `{typography.body-strong}` | 16px | 600 | 1.4 | 0 | Inline emphasis, primary nav link, form label |
| `{typography.body-sm}` | 14px | 400 | 1.4 | 0 | 页脚复制、 网格针元数据、 帮助文本 |
| `{typography.body-sm-strong}` | 14px | 700 | 1.4 | 0 | 搜索结果计数标签, 表格标题文本 |
| `{typography.caption-md}` | 12px | 500 | 1.5 | 0 | 说明文本, 链接元数据 |
| `{typography.caption-sm}` | 12px | 400 | 1.4 | 0 | Smallest utility text, copyright |
| `{typography.link-md}` | 16px | 600 | 1.4 | 0 | 内置的播音链接 |
| `{typography.button-md}` | 14px | 700 | 1 | 0 | 标准主/次要按钮标签 |
| `{typography.button-sm}` | 12px | 700 | 1 | 0 | 紧凑的胶囊形,卡片按钮 |

### 原则
The system has an unusually steep size jump between display and body — `{typography.display-xl}` (70px) drops directly to `{typography.body-md}` (16px) on the home hero with no intermediate tier between. The negative tracking on the largest tiers (-1.2px / -0.8px) creates a tighter, more confident headline than a default geometric sans would deliver, and the body copy sits at a generous 1.4 line-height to keep multi-line descriptions breathing.

### Note on Font Substitutes
Pin Sans is proprietary. The closest open-source substitute is **Inter** (weights 400 / 500 / 600 / 700) — its geometry, x-height, and metric balance match Pin Sans within ~3% at body sizes. **Manrope** is a strong secondary substitute for the display tier where slightly tighter letterspacing helps the 70px headline feel weighted. Apply -1.2px tracking on the substitute at display sizes regardless of which substitute is chosen.


## 布局

### 间距系统
- **基部单位:** 8px (加细 4/6/7px 用于紧凑的内含缺口的避孕药按钮和芯片。
- **托肯斯(前题):** `{spacing.xxs}` (4px) · `{spacing.xs}` (6px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (16px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.section}` (64px).
- **通用节奏 :** 设定中的每个页面 `{spacing.section}` (64px)作为主要内容块之间的垂直差距。 `{spacing.sm}` (8px)瓷砖之间的沟槽——系统最紧的网状沟槽,设计时的图像可以有效触碰横跨柱状.
- **调制解调器 padding:** `{component.modal-card}` 使用情况 32px 内部粘贴( E)`{spacing.xxl}`)四面无边.

### 网格容器( C)
- **最大 width:** ~1280px content area at desktop with 24px gutters (~48px at ultrawide).
- **平板砖 grid:** auto-fitting column-based layout — 5–6 columns at ultrawide, 4 columns at desktop, 3 at tablet, 2 at mobile-landscape, 1 at mobile. Each tile preserves its natural aspect ratio (square / 2:3 / 3:4 / 4:5 portrait — never landscape because pins are vertically-oriented). Gutters are `{spacing.sm}` (8px) 水平和垂直。
- **家首屏特征行 :** 不对称 2-柱子在文本和图像左/右对页的位置进行分割(文本左+图像右,然后图像左+文本右等).
- **Footer:** 4-column link grid at desktop, collapsing to 2-up at tablet, 1-up at mobile.

### 白空间哲学
Whitespace is generous on the marketing surfaces and tight on the discovery surfaces. The home page sits sections 64px apart with photo-illustrated feature cards using 32px internal padding, while the search results page collapses to an 8px-gutter masonry grid that tiles imagery edge-to-edge. The system reads as two tools sharing the same chrome: a magazine (hero / feature / CTA / footer) and a search engine (top nav / filter row / pin grid / load more).


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | No border, no shadow | Default for pin cards, feature cards, footer — the dominant treatment |
| 1 — Hairline border | 1px solid `{colors.hairline}` | Inputs, footer column dividers, in-list rows |
| 2 ——潮湿的薄膜+软的阴影 | 摩达尔坐在一个暗暗的角落上 上面的页面内容很柔软 16px 环境阴影 | 登录/ 注册模式, 图像预览模式 |
| 3 - 平轮悬浮升力 | (按系统政策打算无证件) | n/a |

Pinterest's system has effectively no shadow elevation in its content surfaces. Pin cards sit flat on the canvas; the only "elevation" appears on the modal layer where a 16px ambient shadow paired with a 50%-opacity scrim lifts the modal above the page content.

### 装饰性深度
深度完全来自图像本身,而不是来自CSS效应:
- **Pin photography** carries cinematic depth through composition (food photography, fashion close-ups, interior shots) — the design lets each tile's image speak rather than adding chrome to it.
- **Category tile thumbnails** in the home page's feature rows use Pinterest's own pin imagery as composition assets, often with a small `{component.pin-overlay-pill}` ("Cherry red", "Preppy look", "Earthy space inspo") overlaid in the corner of the image.
- **Modal scrim** — a 50%-opacity dark overlay over the entire page content when the login modal opens, with a 16px ambient shadow underneath the modal card lifting it to the visual top.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 页脚,主导航,页段——所有平面结构表面 |
| `{rounded.sm}` | 8px | 稀有中辐射表面(例如编辑工具提示) |
| `{rounded.md}` | 16px | 按钮,输入,针卡,特征卡,类牌——主元件半径 |
| `{rounded.lg}` | 32px | Large pin cards, modal cards — used sparingly for "big" content surfaces |
| `{rounded.full}` | 9999px | 搜索栏、过滤芯片、针状胶囊形、图标环形按钮、假人 |

The radius vocabulary is essentially three values: 16px for most things, 32px for big cards and modals, and pill for circular elements. There are no sharp-cornered buttons or sharp-cornered pin cards.

### 摄影几何
- **Pin imagery:** mixed aspect ratios — square (1:1), portrait (3:4, 2:3, 4:5), and rare landscape — preserved at their natural ratio inside `{rounded.md}` (16px) corners on small tiles and `{rounded.lg}` (32px) on large feature pins.
- **分类平面缩略图 :** 平方( 5)1:1与 `{rounded.md}` 转角
- **幻象圆:** 32–48px 时 间 `{rounded.full}` 用于内端属性和配置芯片。
- **特性卡图像 :** 常规 4:5 照片包含在主页分类卡上的肖像画 ~60% 中,并标出卡片和头条+CTA。


## 组件

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only.

### 按钮

**`button-primary`** ——普及性 Pinterest 反恐中心
- Background `{colors.primary}` (Pinterest Red), text `{colors.on-primary}`, type `{typography.button-md}`, padding `6px 14px`, height ~40px, rounded `{rounded.md}` (16px).
- 用来"签名","Join" Pinterest 免费),"开始"——系统内每个表面的每一个主动作.
- 国家住在这里 `button-primary-pressed` - 后台空降为 `{colors.primary-pressed}` (`#cc001f`).

**`button-secondary`** 灰色乳油替代品
- Background `{colors.secondary-bg}` (`#e5e5e0`), text `{colors.on-secondary}`, type `{typography.button-md}`, padding `6px 14px`, height ~40px, rounded `{rounded.md}`.
- "我已经有一个账户","Continue","Cancel"——二级动作与红色主机对齐.
- 国家住在这里 `button-secondary-pressed` - 后台空降为 `{colors.secondary-pressed}`.

**`button-tertiary`** - 鬼灵链接
- Background transparent, text `{colors.ink}`, type `{typography.button-md}`, rounded `{rounded.md}`.
- 用于低亮度动作在对话框内部("读到文件","多学~"用小切夫龙).

**`button-icon-circular`** — circular 图标按钮
- Background `{colors.surface-card}`, icon `{colors.ink}`, rounded `{rounded.full}`, size 40px.
- Carousel paddles, modal close button, and small floating action buttons in pin imagery.

**`button-pill-on-image`** — small overlay pill on photography
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button-md}`, rounded `{rounded.full}`, padding `8px 14px`.
- 签名"樱桃红"/"Preppy look"/"地球空间 Inspo" 覆盖了将角点锁定的胶囊形 category-tile 针头图像。

**`button-disabled`**
- Background `{colors.surface-card}`, text `{colors.ash}` — flat soft-cream.

### 过滤标签芯片( T)

**`filter-chip`** + **`filter-chip-active`**
- Default: background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.button-md}`, rounded `{rounded.full}`, padding `8px 16px`.
- 活动:背景 `{colors.ink}`文本中,请输入 `{colors.on-dark}` ——芯片翻转在选择上完全倒置.
- 在整个搜索结果页面过滤条("Beauty coup","Lipstick","Editorial coup...")中使用.

### 输入表单( F)

**`text-input`** + **`text-input-focused`**
- Default: background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.ash}`, type `{typography.body-md}`, padding `11px 15px`, height ~44px, rounded `{rounded.md}`.
- 重点: 2px `{colors.ink}` 内边框+ 4px `{colors.focus-outer}` 外框——签名双环聚焦信号.
- 电子邮件、密码、出生日期、国家字段的登录/签名模式。

**`search-bar`** + **`search-bar-focused`**
- Default: background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-md}`, padding `11px 15px`, height ~48px, rounded `{rounded.full}`.
- 焦点: 相同的尺寸,背景翻转到 `{colors.canvas}` 含a 1px `{colors.ash}` 边框。
- 悬浮在主导航中心 左边缘有放大镜 以及"寻找想法 时尚..."的占位符

### 纸牌和集装箱

**`pin-card`** ——标准石柱瓦片
- 集装箱:背景 `{colors.surface-card}`,四舍五入 `{rounded.md}` (16px), 贴 0.
- Layout: full-bleed image at the card's natural aspect ratio with no internal padding. Optional `{component.pin-overlay-pill}` anchored to one corner of the image, optional 32px circular avatar with profile name in `{typography.body-sm-strong}` overlaid at the bottom-left.

**`pin-card-large`** ——主页特征标针.
- 与《联合国宪章》和《联合国宪章》 `pin-card` 已四舍五入 `{rounded.lg}` (32px)——用于主页专题栏目主播的大型编辑标语.

**`pin-overlay-pill`** ——固定在针形图象上的芯片
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button-sm}`, rounded `{rounded.full}`, padding `6px 12px`.
- 浮在针的左下角或左上角,上面有搜索时标注,如果针与搜索("切里红","前置外观","地球空间 Inspo")匹配,则会浮出水面.

**`category-tile`**
- Background `{colors.surface-card}`, rounded `{rounded.md}`, padding 16px.
- 3- 或 说 4- 将主页“将你最喜欢的想法带给生活”部分的小类缩略图上网格。每块砖头都包含一个类别图标或组成照片+一个短标签。 `{typography.body-strong}`.

**`feature-card`** + **`feature-card-soft`**
- Standard: background `{colors.canvas}`, rounded `{rounded.md}`, padding 32px. Pairs a 4:5 portrait pin image (left or right) with a `{typography.heading-xl}` headline + body copy + `{component.button-primary}` red CTA.
- 软:背景 `{colors.surface-card}` 用于交替排列的变体,其中奶油表面需要分解内容.

**`modal-card`** ——登录/签名覆盖
- Background `{colors.canvas}`, rounded `{rounded.lg}` (32px), padding 32px.
- 版式: 标题 英寸 `{typography.heading-lg}` (欢迎你) Pinterest),字幕输入 `{typography.body-md}`,叠叠 `{component.text-input}` 字段(电子邮件、密码、出生日期、国家),主 `{component.button-primary}` 继续,小"已经是成员了吗?登录"链接下.
- Floats over a 50%-opacity scrim covering the entire page content with a 16px ambient shadow.

**`hero-cta-strip`** 深色的CTA条 `create.pinterest.com`
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, type `{typography.heading-xl}`, padding `48px 32px`, rounded `{rounded.none}`.
- 坐在创作者营销页面的顶端 单曲 `{component.button-primary}` 红色CTA在右边。

### 导航

**`primary-nav`**
- Background `{colors.canvas}`, text `{colors.ink}`, height ~64px, type `{typography.body-strong}`, rounded `{rounded.none}`, with a 1px `{colors.hairline}` bottom rule on inner pages (no rule on the home hero).
- 版式( 桌面主机): Pinterest 红色字标记,位于左方+“爆炸”链接,居中 `{component.search-bar}`,右组("About / business / create / Log in")+ 总是红色 `{component.button-primary}` "签名"CTA.
- Layout (search results): Pinterest red P-logo at left, centered search bar with the active query, right cluster ("Log in" + red Sign-up button).

**顶部导航( 移动)**
- 汉堡菜单图标位于左,P-logo位于中,搜索-glyph + 签名 CTA位于右. 搜索栏崩溃为放大器图标,在被点击时扩展为全宽.

### Footer

**`footer-section`**
- Background `{colors.canvas}`, text `{colors.mute}` in `{typography.body-sm}`, padding `32px 24px`, rounded `{rounded.none}`, with a 1px `{colors.hairline}` top rule.
- 版式 : 4-栏链接网格(Get the app - iOS / Android / 快速链接 / Explore / Shop / 用户 / 收藏 / 购物 ) ! Pinterest 有关——隐私/术语/帮助中心),列标题在 `{typography.body-sm-strong}` 和链接列表 `{typography.body-sm}` `{colors.mute}`.
- 下行 : Pinterest 红色字标记+“ ” 2026 Pinterest" , 以 `{typography.caption-sm}` `{colors.mute}`.

### 内置

**`link-inline`** ——体质-导引主机链接.
- `{colors.ink-soft}` 文本中默认没有下划线。 Pinterest'"除了染色体上的品牌红色之外,只有"颜色"——一种近黑的暖色锡,用来区分连接与身体,没有色彩对比.


## 设计建议与禁忌

### 执行
- 准备金 `{colors.primary}` (Pinterest Red),用于初级CTA,活动-tab指标,以及仅用于品牌字签,从不装饰.
- Use `{rounded.md}` (16px) on every interactive element and standard card; reserve `{rounded.lg}` (32px) for large pin cards and modals; reserve `{rounded.full}` for circular elements (search bar, chips, avatars).
- 将每个针头图像插到 a 内 `{component.pin-card}` 里面没有内垫 照片就是卡片
- Stack content sections at `{spacing.section}` (64px) rhythm; tighten pin grids to `{spacing.sm}` (8px) gutters so imagery effectively touches.
- 使用 `{component.pin-overlay-pill}` 以锁定搜索时的标签 category-tile 针形照片——系统标志装饰手势.
- Build hierarchy from font weight (400 → 600 → 700) and size, not from color tinting. Body stays `{colors.body}` regardless of section context.
- 应用 -1.2px letter-spacing 打开 `{typography.display-xl}` 财务报告和已审计财务报表 `{typography.heading-xl}`. 负面追踪是品牌声音的一部分.

### Don't
- Don't use sharp-cornered buttons or cards. There are no `{rounded.none}` interactive elements in the system.
- 系统里唯一的影子就是... 16px 环境 `{component.modal-card}`.
- Don't pad `{component.pin-card}` internally. The image is full-bleed; metadata sits over the image as an overlay pill, not below it.
- Don't replace `{colors.primary}` with another red. The brand red is precise — `#e60023`.
- Don't use `{colors.ink-soft}` (the body-prose link tint) outside of inline body anchor links. It is not a chrome color.
- Don't introduce a third radius value between 16px and 32px. The system jumps directly from md to lg with nothing in between.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 超广 | 1920px+ | 平线网格扩展为 5–6 列; 内容 max-width 暂停 ~1280px |
| 桌面大块 | 1440px | 默认 —— 4-柱状针网,全主导航 |
| 桌面 | 1280px | 外沟布局相同 |
| 桌面小块 | 1024px | 平方格崩溃到 3 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列; 列。 sub-nav 保持水平 |
| tablet | 768px | Pin grid collapses to 2 columns; primary nav becomes hamburger drawer; search bar becomes icon-only |
| 移动 | 480px | 单柱针网格; 首屏 `{typography.display-xl}` 比额表 70px → ~44px |
| 移动窄 | 320px | 首屏进一步比额 ~36px; 节贴紧到 32px |

### 触控区域
All interactive elements meet WCAG AA (≥ 44×44px). `{component.button-primary}` and `{component.button-secondary}` sit at ~40px height with 14px horizontal padding (effective ~40×80px tappable). `{component.search-bar}` sits at 48px. `{component.text-input}` sits at 44px. `{component.filter-chip}` is ~36–40px height with 16px padding — extends to 44px tappable via inline padding. `{component.button-icon-circular}` is exactly 40×40 with extended hit-target padding to 48×48 inside the parent.

### 折叠战略
- **Primary nav:** desktop horizontal cluster → tablet hamburger drawer at 768px. The red Sign-up CTA stays visible at every breakpoint.
- **Search bar:** desktop centered (~480px wide) → tablet compressed (~320px) → mobile collapses to a magnifier icon that expands to a full-width overlay on tap.
- **平板砖 grid:** 5/6-up → 4-up → 3-up → 2-up → 1-up at 1920, 1024, 768, and 480px. Gutters drop from 8px to 6px on mobile.
- **Home feature row:** desktop alternating left/right 2-column → tablet vertical stack with text above image → mobile single-column with full-bleed image.
- **模式 :** 桌面居中 ~480px- 宽卡 ~ 移动全宽纸,四舍五入 `{rounded.lg}` 上下游CTA 上下游游荡
- **科 科 padding:** `{spacing.section}` (64px(台式计算机) – 48px 平板电脑 32px 移动。
- **Hero headline:** `{typography.display-xl}` (70px) at desktop, scaling 56px / 44px / 36px down the breakpoint stack.
- **Footer:** 4-up link columns → 2-up at tablet → full accordion at mobile (each header becomes a tap-to-expand row).

### 图像行为
- 平图在每一个断点上都保留自然的纵宽比;柱数变化,而不是侧面.
- 维护类片缩略图 1:1 跨越各种大小。
- 首屏特色图像使用移动上的艺术引导作物(4:5 肖像 ~ 平方),所以当布局崩溃到单柱时,主题会保持中心.
- All non-critical imagery is lazy-loaded as the user scrolls into the next grid row.


## 迭代指南

1. 一次聚焦一个组件。 调用其 YAML 条目并验证每个属性解析 。
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component.button-primary-pressed}`, `{rounded.md}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 自动发出警告。
4. 添加新的变体作为单独的组件条目( Q)`-pressed`, `-disabled`, `-focused`()——不要把他们埋在传言里.
5. 默认正文为 `{typography.body-md}`; 联系范围 `{typography.body-strong}` 用于强调; 储备金 `{typography.display-xl}` 严格地说,首屏首屏头条。
6. 保留 `{colors.primary}` 稀缺——最多一个 Pinterest- 红色每叠(计算导航、首屏和 feature-card 共同的CTAs(CTAs together)). 星洲网.
7. When introducing a new component, ask whether it can be expressed with the existing pin-card + 16px-radius + cream-surface vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.


## 已知缺口

- **Mobile screenshots not captured** — responsive behavior synthesizes Pinterest's known mobile pattern (hamburger drawer, single-column grid, hero downscale) from desktop evidence and the documented breakpoint stack.
- **Hover states not documented** by system policy.
- **平底特写( 单边针覆盖)** 不属于捕获的集中——产品中 Pin 细节视图(带有注释,相关标点,保存板拾)可能引入此处没有记载的组件.
- **认证的铬** (登录的家用饲料,板页,剖面页)没有在被捕获的页面中——被捕获的表面是登录的外销和搜索体验.
- **Pinterest 移动应用程序屏幕** 并非在此处所记载的系统中——这是只有网络的铬.
- **Form validation states** (success / error inline messages) not documented; only the focused-state field is captured.

## 设计词元原值

A photography-first discovery system organized around the Pinterest Red CTA, the masonry pin grid, and a soft warm-cream chrome that gets out of the imagery's way. The home page is a content-discovery tool wearing the chrome of a magazine publisher: 70px display headlines, friendly Pin Sans typography, fully-rounded pill buttons (16px) on a cream-tinted neutral palette, and a sticky red "Sign up" CTA that anchors every viewport. Pin imagery is the system's load-bearing visual element — square, portrait, and landscape pins tile in a column-based masonry grid where each tile is a fully-rounded 16px-radius card, separated by tight 8px gutters. The chrome is otherwise quiet: warm grays, true whites, and a single saturated red — no decorative gradients, no atmospheric backgrounds, no shadows beyond a soft modal scrim.

```yaml
---
version: alpha
name: Pinterest-design-analysis
description: |
  A photography-first discovery system organized around the Pinterest Red CTA, the masonry pin grid, and a soft warm-cream chrome that gets out of the imagery's way. The home page is a content-discovery tool wearing the chrome of a magazine publisher: 70px display headlines, friendly Pin Sans typography, fully-rounded pill buttons (16px) on a cream-tinted neutral palette, and a sticky red "Sign up" CTA that anchors every viewport. Pin imagery is the system's load-bearing visual element — square, portrait, and landscape pins tile in a column-based masonry grid where each tile is a fully-rounded 16px-radius card, separated by tight 8px gutters. The chrome is otherwise quiet: warm grays, true whites, and a single saturated red — no decorative gradients, no atmospheric backgrounds, no shadows beyond a soft modal scrim.

colors:
  primary: "#e60023"
  on-primary: "#ffffff"
  primary-pressed: "#cc001f"
  ink: "#000000"
  ink-soft: "#211922"
  body: "#33332e"
  charcoal: "#262622"
  mute: "#62625b"
  ash: "#91918c"
  stone: "#c8c8c1"
  hairline: "#dadad3"
  hairline-soft: "#e5e5e0"
  on-secondary: "#000000"
  secondary-bg: "#e5e5e0"
  secondary-pressed: "#c8c8c1"
  canvas: "#ffffff"
  surface-soft: "#fbfbf9"
  surface-card: "#f6f6f3"
  surface-elevated: "#ffffff"
  on-dark: "#ffffff"
  on-dark-mute: "rgba(255,255,255,0.7)"
  surface-dark: "#262622"
  focus-outer: "#435ee5"
  focus-inner: "#ffffff"
  accent-pressed-blue: "#617bff"
  accent-purple: "#7e238b"
  accent-purple-deep: "#6845ab"
  success-deep: "#103c25"
  success-pale: "#c7f0da"
  error: "#9e0a0a"
  error-deep: "#cc001f"

typography:
  display-xl:
    fontFamily: Pin Sans
    fontSize: 70px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.2px
  display-lg:
    fontFamily: Pin Sans
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.8px
  heading-xl:
    fontFamily: Pin Sans
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -1.2px
  heading-lg:
    fontFamily: Pin Sans
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  heading-md:
    fontFamily: Pin Sans
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body-md:
    fontFamily: Pin Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-strong:
    fontFamily: Pin Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-sm:
    fontFamily: Pin Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-sm-strong:
    fontFamily: Pin Sans
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  caption-md:
    fontFamily: Pin Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption-sm:
    fontFamily: Pin Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  link-md:
    fontFamily: Pin Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  button-md:
    fontFamily: Pin Sans
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0
  button-sm:
    fontFamily: Pin Sans
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0

rounded:
  none: 0px
  sm: 8px
  md: 16px
  lg: 32px
  full: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 6px 14px
    height: 40px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.secondary-bg}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 6px 14px
    height: 40px
  button-secondary-pressed:
    backgroundColor: "{colors.secondary-pressed}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
  button-icon-circular:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  button-pill-on-image:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 8px 14px
  button-disabled:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ash}"
    rounded: "{rounded.md}"
  search-bar:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 11px 15px
    height: 48px
  search-bar-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 11px 15px
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  pin-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 0px
  pin-card-large:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 0px
  pin-overlay-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 6px 12px
  filter-chip:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  filter-chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
  category-tile:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.md}"
    padding: 16px
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-xl}"
    rounded: "{rounded.md}"
    padding: 32px
  feature-card-soft:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-xl}"
    rounded: "{rounded.md}"
    padding: 32px
  modal-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  hero-cta-strip:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-xl}"
    rounded: "{rounded.none}"
    padding: 48px 32px
  primary-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    height: 64px
  footer-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 32px 24px
  link-inline:
    textColor: "{colors.ink-soft}"
    typography: "{typography.link-md}"
---
```
