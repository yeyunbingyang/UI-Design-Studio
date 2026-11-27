# Oura · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Oura's web presence reads like a printed field journal that learned to breathe. The default surface is a warm paper cream (`{colors.canvas}` — #f7f1e8) rather than white, and everything sits on it with generous air: a light, high-contrast serif for the big statements, a calm grotesque sans for everything you actually read, and full-bleed lifestyle photography that carries most of the emotional weight. Where a typical wellness-tech site would reach for gradients and glassmorphism, Oura reaches for restraint — flat fills, hairline rules, and long vertical silences between sections.

系统运行着三个表面的"世界". **奶油世界( 奶油世界 )** (`{colors.canvas}`)是营销和编辑内容的母基地. **墨水世界( 墨水世界 )** (`{colors.ink-band}` / `{colors.ink-band-soft}`)是专为脚手和"新闻里"乐队保留的近黑舞台,其中奶油卡像剪辑一样漂浮在暗桌子上. **银色世界** (`{colors.surface-grey}` → `{colors.silver}`)是一种冷却的机器灰色梯度,只用于产品展示的页面,其中环像珠宝一样被拍照.

颜色纪律是签名动作。 整个调色板是土质的 —— 芥子和金色( Name`{colors.gold}`, `{colors.ochre}`), clay 和咖啡( 咖啡) (`{colors.clay}`, `{colors.espresso}`橄榄和贤淑(A.`{colors.forest}`, `{colors.sage}`) ——这些都以强调色带,插图,分数/数据可视化的形式出现,从不作为按钮. 按钮带有一个单一的,故意的例外: **动作蓝色** (`{colors.primary}` — #2a72de),仅用于决定性的转换瞬间("Explocation","Shop All Products"). 温暖的品牌中性. `{colors.stone}` (#4a4741) 比较安静的工作——文字标记,编辑胶囊形,形成字段,轮廓,和链接——所以蓝色从不用竞争.

**关键特征 :**
- 暖纸页面底色( 3)`{colors.canvas}`)作为默认表面,而不是白色——奶油是品牌的休息状态.
- A two-typeface voice: `{typography.display}` (Editorial New, a light high-contrast serif) for headlines, `{typography.body}` (AkkuratLL, a neutral grotesque) for reading.
- One decisive **action blue** (`{colors.primary}`) reserved strictly for primary CTAs; every other button is warm-neutral `{colors.stone}` or cream.
- 土豆强调色家族——芥末, clay,橄榄——用于带,插图和数据视频,故意不扣.
- Fully-rounded pill buttons (`{rounded.full}`) against softly-rounded cards (`{rounded.lg}`) and large-radius product images (`{rounded.xl}`).
- 三个表面世界以可预测的节奏循环:奶油社论 → 黑色新闻/脚手乐队 → 银制品舞台.
- Photography-first hierarchy: full-bleed imagery leads, UI recedes to hairlines and quiet labels.


## 配色

> 分析的资料来源:主页、 Oura 环 5 存储页面、活动与移动页面、临床与科学专家页面。下面的调色板将全部四个调和成一个系统。

### 品牌色与强调色
- **蓝色行动** (`{colors.primary}` — #2a72de: 单色转换颜色。将初级CTA丸(“爆炸”、“所有产品”)填充为 `{colors.on-primary}` 文本。没有其它地方使用,不是用于链接,也不是用于强调色。
- **Stone** (`{colors.stone}` — #4a4741): the warm taupe-brown brand neutral. Carries the wordmark, secondary/editorial pill buttons, form-field fills, circular-icon outlines, and default link color. This is the color that makes Oura feel "Oura."
- **Clay** (`{colors.clay}` — #6b443d:一种暖红褐色的,用于配音带和内容卡片(例如活动页的"你的"). Oura 活动得分"乐队.
- **埃斯佩索 爱斯佩索 Espresso** (`{colors.espresso}` — #39221e:最暗的棕色,用于深强调色填充和金色表面丰富的文字.
- **Gold** (`{colors.gold}` — #af751b) / **Ochre** (`{colors.ochre}` — #bc924c) / **Gold Soft** (`{colors.gold-soft}` — #ddaa61) / **Gold Pale** (`{colors.gold-pale}` — #ddbe78) / **Gold Deep** (`{colors.gold-deep}` — #684d07): the mustard ramp. Powers warm illustration, the activity-ring dashboard card, and score data-visualisation.
- **Forest** (`{colors.forest}` — #224228) / **Olive** (`{colors.olive}` — #5c6f5d) / **Sage** (`{colors.sage}` — #849671) / **Sage Mute** (`{colors.sage-mute}` — #7b886d) / **Sage Pale** (`{colors.sage-pale}` — #ced4b8): the olive ramp, used for calm accent bands, illustration, and secondary data-visualisation.

### 界面表面
- **页面底色** (`{colors.canvas}` — #f7f1e8:所有编辑和营销表面的签名热纸背景.
- **界面表面** (`{colors.surface}` — #ffffff:纯白的,为高的牌, circular "+"在人牌上上覆盖按钮.
- **表面灰质** (`{colors.surface-grey}` — #ececec:产品页梯度和光功率的光端填充.
- **银** (`{colors.silver}` — #cccac7:产品显示页上使用的凉爽灰色,并作为选定的tab边框.
- **墨水带** (`{colors.ink-band}` — #000000:脚步/新闻乐队的真黑舞台.
- **墨水带柔软** (`{colors.ink-band-soft}` — #19191c:指足部表面所用的近黑,比纯黑色更暖的毛发.
- **细边线** (`{colors.hairline}` — #e1dcd3: 温暖 1px 奶油上的分水器(一种低不透明度的墨水混合在页面底色上)。

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — #1c1b1a:主要标题和奶油上的身体文字.
- **Stone** (`{colors.stone}` — #4a4741): secondary text and editorial emphasis on cream.
- **灰尘** (`{colors.ash}` — #838280: 哑灰色表示 meta 文本、标题下的标题和工具标题。
- **静音** (`{colors.mute}` — #a8a5a0: 温暖灰色,用于最安静的字幕和暗带上的副文本.
- **黑暗时** (`{colors.on-dark}` — #ffffff: 墨水银界上的文字和图标.

### 语义色
- **错误** (`{colors.error}` — #e33a22: 形式字段的验证和焦点- 错误状态( 焦点电子邮件字段边框) 。


## 字体排版

### 字体族
Two families carry the entire system, and the tension between them is the point.

- **Editorial New** (`{typography.display}`, `{typography.heading-1}`, `{typography.heading-2}`, `{typography.lead}`: 轻度,高低调过渡 serif 用于显示标题、标题和偶尔出现的轻质铅段。 100 和 300 ——所以大尺寸读作优雅,而非重.活动页用斜体字("move")显示. *以手定式编辑方式繁荣。
- **AkkuratLL** (`{typography.heading-3}` 结束 `{typography.caption}`:一种中立的瑞士杂耍,它能做所有真正的阅读工作——子标题,身体,UI标签,按钮,标题. 300 / 400 / 600 / 700.

### 字号层级

| 调试 | 家庭 | 大小 | 字重 | 线条高度 | 使用 |
|---|---|---|---|---|---|
| `{typography.display}` | Editorial New | 110px | 300 | 1.05 | Homepage hero headline ("Subtle. Power.") |
| `{typography.display-2}` | Editorial New | 80px | 300 | 1.1 | 显示标题的第二页 |
| `{typography.heading-1}` | Editorial New | 68px | 300 | 1.1 | Large page titles |
| `{typography.heading-2}` | Editorial New | 40px | 300 | 1.15 | 节头条 |
| `{typography.heading-3}` | AkkuratLL | 40px | 400 | 1.25 | Sans 一节标题/大数据 |
| `{typography.title}` | AkkuratLL | 32px | 400 | 1.25 | 牌名,小节标题 |
| `{typography.lead}` | Editorial New | 24px | 100 | 1.25 | 浅析内语/主要段落 |
| `{typography.body-lg}` | AkkuratLL | 20px | 400 | 1.5 | 着重号副本 |
| `{typography.body}` | AkkuratLL | 18px | 400 | 1.5 | 默认正文文本 |
| `{typography.body-sm}` | AkkuratLL | 16px | 400 | 1.5 | 深色正文、链接、窗体文本 |
| `{typography.button}` | AkkuratLL | 16px | 600 | 1 | 按钮标签 |
| `{typography.ui}` | AkkuratLL | 14px | 400 | 1.4 | 导航链接、标签、工具UI |
| `{typography.caption}` | AkkuratLL | 13px | 400 | 1.4 | 说明、脚注 |
| `{typography.eyebrow}` | AkkuratLL | 12px | 700 | 1.2 | Small-caps overlines ("IN THE NEWS", "FEATURED ARTICLE") |

### 原则
- Serif 感受, 求事实。 `{typography.display}` 并且其兄弟姐妹只出现在大尺寸的,高中风对比可辨别和表现; `{typography.body}`.
- 细微显示字重。 serif 头条靠着字重 100–300,所以规模——而不是大胆——就形成了等级.
- 静态超线。 区域背景设置为 `{typography.eyebrow}` (上行,轻追)而非重踢者.

### 替代字体
Both faces are proprietary. For open-source builds, substitute **Editorial New** with **Fraunces** or **Newsreader** (both high-contrast serifs — set optical size high and weight low to match the thin display feel), and **AkkuratLL** with **Inter** or **Hanken Grotesk** (neutral grotesques with similar x-height). When substituting, nudge display line-height up slightly (Fraunces runs a touch taller than Editorial New) and keep body tracking at 0.


## 布局

### 间距系统
- **基地单位**: 8px.
- **脚本**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px.
- 纸牌内部坐着 `{spacing.lg}`; 紧凑的效用组合(窗体编版、芯片编版) , 位于 `{spacing.sm}`–`{spacing.md}`节奏故意很大——空白奶油分离内容块的纵向长空,让摄影和头条呼吸.

### 网格与容器
- Content is center-constrained within a wide max-width, with full-bleed photography breaking out to the viewport edges.
- 运行的卡网 3- 上(人牌、福利三等奖)和 4- 上(新闻/专家木马),倒塌走向 1- 上窄屏幕上。
- 产品页面替代以边际对边媒体为中心单栏展示.

### 留白规则
Empty cream is a design element, not leftover space. Large silences between sections group related content and pace the scroll like chapters. UI chrome stays minimal so the eye rests on imagery and headlines.

### 响应式布局

#### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 桌面 | ≥ 1280px | 完整的多列网格,水平导航,大型显示类型 |
| 笔记本 | 1024–1279px | 略加收紧的沟槽,同样的结构 |
| 平板 | 768–1023px | 4- 升格点 – 2- 上,导航开始凝固 |
| Mobile | ≤ 767px | Single-column stacks, hamburger nav, display type scales down (110px → ~48px), pill CTAs go full-width-ish |

(提取的介质-清水数据跨度中观察到的断点梯度) 1280 → 1024 → 896 → 768 → 600 → 480 → 320px.)

#### 触控区域
胶囊形按钮( Name`button-primary`, `button-secondary`和 (中文(简体) ). circular 图标按钮(`button-icon-circular`) 大小,可自在地敲击;至少保持交互控制 44×44px 手提箭头和"+" person-card 按钮是 circular 和手指大小的。

#### 窄屏布局调整
- 水平导航在平板断点下方坍塌为汉堡;推车和文字标记持续.
- Multi-column card grids collapse 4-up → 2-up → 1-up.
- 银制品展示使其中心单柱媒体保持大小各异,并简单缩放图像.
- 脚注链接列从 a 重流 4- 排成一排成一排

#### 图片适配
摄影是全血型的,艺术方向的,在移动上往往有边缘到边缘. 产品图像使用大辐射圆框(英语:Ligd-radus rounded frame).`{rounded.xl}`);编辑图像经常是无圆形的全血,图像在部分进入视门时懒散地排入.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | No shadow; separation by color-world shift or `{colors.hairline}` rule | Default on cream; most sections |
| 1 — Resting card | Very soft, low-opacity drop shadow | News cards on the black band, the Technical Specifications card |
| 2 - 浮动 | 稍深一点,更分散的柔软的影子 | 产品放映盒媒体卡、高含量卡 |
| 3 ——重叠 | 强烈的扩散阴影+ 斜线 | 模块/ 对话框( 稀有) |

深度被低估了,在奶油上,通过表面世界的变换(cream → 黑 → 银)和细边线分割器而不是沉重的高空分割器分离的片段,如果出现阴影,它们就很柔软,温暖,而且不透明——从不硬或高低的分层.

### 装饰性深度
深度主要来自 **摄影** (全血生活方式图像,机器产品在银舞台上制作) **温暖的强调色带** (`{colors.clay}`, `{colors.gold}` 微光光出现在产品图像后面 以解除灰色背景的环


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 完整成像、波段、导航 |
| `{rounded.xs}` | 4px | 小型的公用芯片, 紧紧的控制 |
| `{rounded.sm}` | 8px | Small cards, badges, list items |
| `{rounded.md}` | 12px | 窗体字段( 电子邮件输入) |
| `{rounded.lg}` | 24px | 内容卡、人牌、新闻卡 |
| `{rounded.xl}` | 40px | 商店页面上的大型产品图像卡 |
| `{rounded.full}` | 9999px | 胶囊形扣子 标签 circular 图标按钮, 统计徽章 |

### 图片形状
产品和生活方式图像慷慨和轻度:产品卡的使用 `{rounded.xl}`、编辑和人物图像的使用 `{rounded.lg}` 或运行无半径的全血。人牌是近似外形的矩形,小的 circular 转角处"+"付价. Stat reactionout (").99%", "95%", "90%") 坐在完美的圆圈里("`{rounded.full}`).


## 组件

> 仅记录默认状态和(在真正提取的情况下)活动状态/前置状态。 `components:` 输入前置事项。

### 导航

**`nav-bar`** ——奶油上方导航.
- Background `{colors.canvas}`, links in `{colors.stone}` at `{typography.ui}`, no radius. Slots: OURA wordmark (left, `{colors.stone}`), center dropdown links (Shop, Your Health, Why Oura, For Organizations), cart icon (right). Sits flush on the cream canvas with no divider until scrolled.

**`announcement-bar`** - 顶级宣传条
- Full-width cream strip above the nav, centered `{typography.eyebrow}` text in `{colors.ink}` (e.g. free-trial offer copy). No radius, no background shift — it reads as the top edge of the paper.

### 首屏们

**`hero`** ——开页发言
- 奶油背景, `{typography.display}` serif 标题在 `{colors.ink}` (主页:"下. 力."),一个小. serif 上面的眉毛标签, 和单张 `button-primary` 蓝色胶囊形 CTA. 常与头条下方的全血产品/生活方式摄影对齐.

### 按钮

**`button-primary`** ——初级转换型CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, fully rounded (`{rounded.full}`). The only blue in the interface. Used for "Explore" and "Shop All Products".

**`button-secondary`** 编辑/次要行动
- Background `{colors.stone}`, text `{colors.on-stone}`, `{typography.button}`, `{rounded.full}`. The warm-neutral pill for content actions ("Why Oura", "How It Works").

**`button-on-dark`** ——暗面乳油丸
- Background `{colors.canvas}`, text `{colors.stone}`, `{typography.button}`, `{rounded.full}`. Used for "Read More" and card actions floating on the black news band. (Extracted button variant: cream fill, stone text, full radius.)

**`button-outline`** 黑/光片的纲要胶囊形
- Transparent 结束 `{colors.ink-band}`, 1px `{colors.on-dark}` 边框,白文本, `{rounded.full}`低度行动,而不是暗影

**`button-outline-stone`** - 奶油上的避孕药
- 奶油背景, 1px `{colors.stone}` 边框, `{colors.stone}` 文本, 单词 `{rounded.full}`. 低强调行动在纸面布。

**`button-icon-circular`** — Circular 图标控件
- Circular (`{rounded.full}`) control for carousel arrows and the person-card "+" affordance. Two flavours: a white surface circle (`{colors.surface}`) with a hairline edge for the "+" overlays, and a stone-outlined circle for the carousel arrows.

### 输入框与表单

**`text-input`** 通讯/电子邮件栏
- Background `{colors.stone}`, text `{colors.on-stone}`, `{typography.body-sm}`, radius `{rounded.md}` (12px), padding roughly 8px vertical / 20px left with a trailing submit affordance on the right. The dark taupe fill makes the field feel like part of the footer rather than a bright form box.

**`text-input-focused`** ——焦点/错误字段
- 将田地抬到浅水面上(`{colors.surface}`与 `{colors.ink}` 文本和 a `{colors.error}` 用于验证- 错误状态的边框。 半径保留 `{rounded.md}`.

### 卡片与容器

**`feature-card`** 内容/福利卡
- 白色表面( 4)`{colors.surface}`), `{colors.hairline}` 边框, `{colors.ink}` 文本, 单词 `{typography.body}`半径 `{rounded.lg}`, 编译 `{spacing.lg}`。 奶油上的默认软橡皮内容容器。

**`feature-card-elevated`** ——浮点内容卡
- Cream surface (`{colors.canvas}`) with a soft Level-1/2 shadow, `{rounded.lg}`, padding `{spacing.lg}`. Used where a card floats over imagery or the black band (news clippings, spec card).

**`product-card`** 产品展示盒媒体卡
- 凉爽的灰色表面( O)`{colors.surface-grey}`),大半径 `{rounded.xl}` (40px),在银台上持有一个机器产品渲染,在环后往往带有微妙的光圈光芒.

**`person-card`** 专家/领导证
- Cream background, portrait photo with radius `{rounded.lg}`, a white circular `button-icon-circular` "+" in the corner, name in `{typography.body}`/`{typography.title}` and role in `{colors.ash}` `{typography.caption}`. Appears in horizontal carousels.

**`news-card`** - 暗带新闻剪辑
- 奶油卡( 微量)`{colors.canvas}`浮在( 浮点) `{colors.ink-band}`, `{colors.ink}` 文本, 单词 `{typography.body}`, `{rounded.lg}`, 编译 `{spacing.lg}`。带出一个出版物引文加一个 circular 箭头链接。

### 标志性组件

**`stat-badge`** — Circular 读取数据
- 完美的圆圈( E)`{rounded.full}`奶油上加大块 `{typography.title}`/`{typography.heading-3}` 数字在 `{colors.stone}` 和下面的小标题(例如) "99% / 95% / 90%" 产品页上的准确数字 " 。

**`pill-tab`** ——产品选择器标签
- Fully-rounded (`{rounded.full}`) tab in a horizontal selector row; selected state gets a `{colors.silver}` (2px) border, label in `{typography.ui}`, `{colors.stone}` text on cream. Used for the "Everyday health sensing" category switcher.

**`eyebrow-label`** - 科室超线
- Uppercase `{typography.eyebrow}` label in `{colors.ink}` on cream, no background, marking section context ("ACTIVITY & MOVEMENT", "FROM THE PULSE BLOG", "FEATURED ARTICLE" as a small pill on imagery).

**`footer`** ——站点页脚
- 近黑表面( 3)`{colors.ink-band-soft}`), `{colors.on-dark}` 文本和文本 `{colors.mute}` 次要文本, 以及 `{typography.body-sm}`中包含 OURA 文字标记, 通讯 `text-input`,支付方法图标,a 4- 柱状连结网格, 和一种语言胶囊形。

### 组合示例

> 自动生成的工具包-模拟演示表面(`scripts/derive-examples-block.mjs`。每个 `ex-*` 条目参考: 下游消费者的品牌原始产品(`/preview-design`, `/generate-kit`) 重新皮肤相同 10 表面一致。

**`ex-pricing-tier`**：默认套餐卡，沿用功能卡结构和品牌 canvas-soft 底色。
- 属性 : `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`**：推荐套餐卡。浅色模式中用深底浅字，深色模式中用浅底深字。
- 属性 : `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** ——彩色/大小采摘者染色体——时尚/DTC变种选择器.
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** ——购物车抽屉 DTC/时尚品牌 实际车型为界面框架.
- 属性 : `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`**：应用框架示例里的侧栏导航行，以品牌主色标识选中状态。
- 属性 : `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`**：数据表格中 th 与 td 的默认样式。表头采用大写等宽字，正文采用 body-sm。
- 属性 : `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`**：登录与注册卡，复用功能卡和 text-input。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`**：对话框表面，沿用功能卡样式并加浮层投影。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`**：空状态插图容器。
- 属性 : `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`**：轻提示，沿用功能卡圆角并使用中等投影。
- 属性 : `backgroundColor`, `rounded`, `padding`, `typography`



## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` 严格用于主转换的CTA——每个视图一个蓝色瞬间,最大.
- 默认每个表面为 `{colors.canvas}` (温纸),不是白的。白色(`{colors.surface}`)是用于高卡和输入,而不是背景.
- 使用 `{colors.stone}` 用于词签,辅药,轮廓,表状填充,以及链接——它是工作马队中性.
- Pair `{typography.display}` (thin serif) at large sizes with `{typography.body}` (grotesque) for reading; let scale create hierarchy.
- 保持胶囊形全圆形(`{rounded.full}`)和软圆形的牌(`{rounded.lg}`; 使用情况 `{rounded.xl}` 仅用于大型产品图像。
- Let the earth-tone ramps (gold, clay, olive) live in bands, illustration, and data-viz — as color-blocked sections that pace the scroll.
- 给部分宽大的垂直呼吸室;将空奶油作为结构处理.

### 应避免的做法
- Don't use `{colors.primary}` for links, accents, icons, or decorative fills — it must stay unique to the primary CTA.
- Don't put the mustard/olive accent colors on buttons — they are surfaces and illustration, never actions.
- Don't set body copy in `{typography.display}`; the thin serif is display-only and gets illegible at small sizes.
- Don't default backgrounds to white — it breaks the warm-paper identity.
- Don't add heavy or hard-edged shadows; elevation here is soft, warm, and low-opacity.
- Don't crowd sections — compressing the vertical rhythm collapses the calm, editorial pacing that defines the brand.

## 设计词元原值

分析 Oura设计语言——温纸井井系统,配对高调编辑 serif 带着安静的怪兽 将每个表面包裹在 芥末的奶油和土色板上 clay 和橄榄,驱动转换 单一的决定性行动蓝色 对抗否则平静, 摄影引导的布局。

```yaml
---
version: alpha
name: Oura Analysis
description: An analysis of Oura's design language — a warm-paper wellness system that pairs a high-contrast Editorial serif with a quiet grotesque sans, wraps every surface in a cream-and-earth palette drawn from mustard, clay and olive, and drives conversion with a single decisive action blue against otherwise calm, photography-led layouts.

colors:
  primary: "#2a72de"
  on-primary: "#ffffff"
  stone: "#4a4741"
  on-stone: "#ffffff"
  clay: "#6b443d"
  espresso: "#39221e"
  gold: "#af751b"
  ochre: "#bc924c"
  gold-soft: "#ddaa61"
  gold-pale: "#ddbe78"
  gold-deep: "#684d07"
  forest: "#224228"
  olive: "#5c6f5d"
  sage: "#849671"
  sage-mute: "#7b886d"
  sage-pale: "#ced4b8"
  canvas: "#f7f1e8"
  surface: "#ffffff"
  surface-grey: "#ececec"
  silver: "#cccac7"
  ink-band: "#000000"
  ink-band-soft: "#19191c"
  ink: "#1c1b1a"
  ash: "#838280"
  mute: "#a8a5a0"
  on-dark: "#ffffff"
  hairline: "#e1dcd3"
  error: "#e33a22"

typography:
  display:
    fontFamily: Editorial New
    fontSize: 110px
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: 0
  display-2:
    fontFamily: Editorial New
    fontSize: 80px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: 0
  heading-1:
    fontFamily: Editorial New
    fontSize: 68px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: 0
  heading-2:
    fontFamily: Editorial New
    fontSize: 40px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: 0
  heading-3:
    fontFamily: AkkuratLL
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  title:
    fontFamily: AkkuratLL
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  lead:
    fontFamily: Editorial New
    fontSize: 24px
    fontWeight: 100
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: AkkuratLL
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: AkkuratLL
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: AkkuratLL
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: AkkuratLL
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  ui:
    fontFamily: AkkuratLL
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption:
    fontFamily: AkkuratLL
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  eyebrow:
    fontFamily: AkkuratLL
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 1px

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 24px
  xl: 40px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px

components:
  # ─── Brand-native components (extracted) ───
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.stone}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"

  announcement-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"

  hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"

  button-secondary:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.on-stone}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"

  button-on-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.stone}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"

  button-outline:
    backgroundColor: "{colors.ink-band}"
    textColor: "{colors.on-dark}"
    borderColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"

  button-outline-stone:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.stone}"
    borderColor: "{colors.stone}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"

  button-icon-circular:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.stone}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.full}"

  text-input:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.on-stone}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"

  text-input-focused:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.error}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"

  feature-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"

  feature-card-elevated:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"

  product-card:
    backgroundColor: "{colors.surface-grey}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"

  person-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"

  stat-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.stone}"
    typography: "{typography.title}"
    rounded: "{rounded.full}"

  pill-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.stone}"
    borderColor: "{colors.silver}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"

  eyebrow-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"

  news-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"

  footer:
    backgroundColor: "{colors.ink-band-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"

  # ─── Examples (illustrative, kit-mirror) ───
  # (derived in Step 7.5 by scripts/derive-examples-block.mjs)

  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "Color/size picker chrome — fashion / DTC variant selector."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  ex-cart-drawer:
    description: "Shopping cart drawer — DTC / fashion brand actual cart chrome."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.surface}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---
```
