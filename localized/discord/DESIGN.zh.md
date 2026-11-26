# Discord · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Discord页面在深印度页面底色上直播(`{colors.canvas}` — #0a0d3a) 很少如此:它被布卢尔普尔,紫罗兰,和充满活力的红金色动画网格所冲洗,然后被全血的梯度波段和超大小的圆形介质所扑灭。大多数产品网站都用受约束的中立者低语, Discord 高声呼喊,全副武装 ABC Ginto Nord,堆叠可玩 3D字符艺术,并让一个单一的电绿CTA(`{colors.green}`)弹出对着酷的indigo. 整个系统读起来就像一个街机柜:充满活力,饱和,不模糊的游戏内在.

The brand anchor is **Blurple** (`{colors.primary}` — #5865f2) — Discord's signature indigo-violet. It owns the primary CTA, the marquee and CTA bands, stat cards, and the brand mark. Around it orbit two supporting accents: the electric **green** (`{colors.green}`) used for the highest-intent "get started" actions, and a vibrant **magenta** (`{colors.magenta}` — #ec48bd) that fills the gradient feature panels and step cards. Surfaces stack in cool darks — the indigo canvas, a raised indigo panel (`{colors.surface-indigo}`), an onyx UI card (`{colors.surface-onyx}`), and pure black (`{colors.surface-black}`) showcase bands.

Geometry is soft and generous. Everyday controls round at `{rounded.sm}` (12px) and `{rounded.lg}` (16px); media tiles and feature panels bow out at `{rounded.xl}` (40px) and beyond; the most expressive shapes reach `{rounded.jumbo}` (120px) and pill caps. Nothing is sharp. The result is friendly, toy-like, and built to make software feel like play.

**关键特征 :**
- 深印页面底色( 深印)`{colors.canvas}`)被动画中的Blurple-to-magenta梯度网格点燃——从不平坦或中性背景.
- 一种标志性品牌颜色:模糊( )`{colors.primary}`)拥有CTA,乐队,以及品牌标志;电绿(`{colors.green}`) 是为最高意图的行动而保留的。
- 振动色金刚( 微弱)`{colors.magenta}`)梯度特征面板和步卡携带可玩,饱和的能量.
- Heavy all-caps display type in `{typography.display-xl}` (ABC Ginto Nord 800) shouting over generously rounded media.
- 软,玩具类几何: 12–16px 控制, 40px+在媒体上,最多 `{rounded.jumbo}` 以签名形状显示。
- 页面节奏:暗印首屏 → 梯度+ 暗色特征卡 → 黑色显示乐团 → 布鲁尔玛克/CTA乐队 → 巨型文字标记页脚.


## 配色

> 源页分析:家,广告/遗书,硝基,趋势游戏. 模糊,绿色,红宝石,白色显示类型,每个页面的深印哥页面底色重复;硝基添加定价表,趋势游戏添加排名游戏列表.

### 品牌和 强调色
- **模糊** (`{colors.primary}` — #5865f2:标志性品牌颜色 初级CTA填充,marquee和CTA乐队,STAT卡,品牌标记 单曲使用最多的动作颜色.
- **电绿** (`{colors.green}` — #35ed7e: 预留最高的CTA("开始"/"下载"),总是配对 `{colors.ink-dark}` 文本中选择的文本。
- **振动的紫红色** (`{colors.magenta}` — #ec48bd:饱和粉色,可以填充梯度特征面板,步牌,以及徽章——玩法反衡酷的indigo.
- **链接青色** (`{colors.link}` — #00b0f4: 内置 text-link 颜色在暗色表面。

### 表面
- **印迪戈坎瓦斯语Name** (`{colors.canvas}` — #0a0d3a:深仁迪戈页面基,被动画品牌升级网格洗刷.
- **升为Indigo** (`{colors.surface-indigo}` — #1e2353:从页面底色上往上走一步——暗色特征卡,定价表,游戏排名排行,鬼按钮.
- **欧尼克斯语Name** (`{colors.surface-onyx}` — #23272a): Discord经典的暗UI表面;产品色卡和分割器.
- **黑色** (`{colors.surface-black}` — #000000:全黑显示带设定产品媒体.

### 文本
- **白色** (`{colors.ink}` — #ffffff: 暗页面底色上的所有显示和体文本。 主流文本颜色 。
- **墨水( 墨水 )** (`{colors.ink-dark}` — #000000: 光线上的文字填充——白色按钮和绿色的CTA.
- **静音墨水** (`{colors.muted}` — #333333:偶尔光面的副文本(白色) product-mockup ),卡片(卡片).

### 品牌渐变
The hero and feature panels ride an animated mesh that sweeps from `{colors.primary}` (Blurple) through a deep violet into the vibrant `{colors.magenta}`, resolving back into the `{colors.canvas}` indigo at the edges. It is the brand's defining atmospheric signature — always in motion, never a flat fill.


## 字体排版

### 字体家族
- **ABC Ginto Nord** ——重的显示面孔,所有营销头条,设置在 700–800 字重,经常是全头。宽,自信,略微缩合的字符,读作“加明”。
- **ABC Ginto** – 铅段落、链接和按钮的较轻的伴奏(字重) 500).
- **ggsans** — Discord用于稠密体复制的UI sans(16px / 400).

**Note on font substitutes:** ABC Ginto Nord and ggsans are proprietary. For an open-source rebuild, pair a heavy geometric grotesque — **Hanken Grotesk** or **Space Grotesk** at 700–800 — for display, with **Inter** or **Plus Jakarta Sans** for body and UI. Keep headlines bold and tracked tight; the loud, confident display weight is the brand's voice.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 82px | 800 | 1.0 | 0 | 首屏头条(全头) |
| `{typography.display-lg}` | 62px | 800 | 1.05 | 0 | 马克乐队,主要头条 |
| `{typography.display-md}` | 56px | 700 | 1.05 | 0 | 科头条,CTA带 |
| `{typography.heading-lg}` | 48px | 700 | 1.1 | 0 | 分节标题 |
| `{typography.heading-sm}` | 22px | 700 | 1.2 | 0 | 纸牌标题, 步标签 |
| `{typography.body-lg}` | 20px | 500 | 1.4 | 0 | 引段 |
| `{typography.link-lg}` | 18px | 500 | 1.4 | 0 | Large button label, prominent link |
| `{typography.body}` | 16px | 400 | 1.5 | 0 | 默认正文副本( E)ggsans) |
| `{typography.link}` | 16px | 500 | 1.4 | 0 | 导航链接, 按钮标签 |
| `{typography.link-sm}` | 14px | 500 | 1.4 | 0 | Small link, badge, fine print |

### 原则
- Headlines are short, declarative, and frequently ALL-CAPS in ABC Ginto Nord 800 — the loudest element on every page.
- Body copy drops to the lighter ABC Ginto / ggsans 400–500 so the display type stays the hero.
- 显示到身字重量跳跃( Q)800 → 400/500)故意戏剧化;介于两者之间没有胆小的中量级.


## 布局

### 间距系统
- **基地单位**: 8px.
- **脚本**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.section}` 40px.
- 运行卡片内置 `{spacing.xl}`–`{spacing.section}`; 按钮垫 `{spacing.sm}`–`{spacing.lg}` 垂直为 `{spacing.xl}` 水平。

### 网格容器( C)
- Centered max-width content column (~1200px) on the full-bleed indigo canvas.
- 特性段以叠叠的全宽梯度/暗卡轮流进行双柱分(文本+介质).
- Marquee, CTA, and showcase bands are full-bleed colour fields with their own rounded inner containers.

### 白空间哲学
部分通过Indigo的垂直大缺口呼吸,然后与饱和的彩带碰撞以达到节奏。在卡片内部,慷慨的垫片让超大小的尺寸。 3D艺术和产品模型随空气飘扬.

### 反应战略

#### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 768px | 单列; 导航崩溃到标志 + 汉堡; CTAs 堆叠全宽 |
| Tablet | 768–1023px | Two-column splits begin stacking; gradient cards go full-width |
| 笔记本 | 1024–1279px | 集装箱窄;保留多柱网格 |
| 桌面 | ≥ 1280px | 完整的多列网格; 居中 ~1200px 栏 |

(Discord 船体高度异常密集的断点梯级——在 240px 财务报告和已审计财务报表 ~2000px ——保持超大小显示类型, 3D艺术在每一个宽度上均匀. )

#### 触控区域
`{components.button-primary}` 财务报告和已审计财务报表 `{components.button-green}` 清除 ≥44px 自动调试高度通过垂直的垫装。导航链接和游戏排名的行在移动中满足相同的最低要求。

#### 折叠战略
暗顶导航(logo \链接 \ 登录 \ 下载 CTA ) 崩溃到下面的标志 + 汉堡 768px。双列特征列堆叠媒体上复文本;梯度和暗卡跨度全宽。硝基定价表可横向滚动;趋势游戏排名列表保持其行布局,但会减少次要列。

#### 图像行为
产品模型和 3D 字符艺术坐落在圆形媒体框内(`{rounded.lg}`–`{rounded.xl}`)或血流过卡片边缘作为装饰道具. 介质鳞片在容器内流畅,并保持其角半径每宽.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | No shadow; separation by colour field + large radius | Most cards, colour bands |
| 1 软浮点数 | `0 3px 68px rgba(69,42,124,0.1)` 宽、紫色、很散射 | 浮媒体卡、 提升模型 |

Discord 倾斜 **颜色、梯度和半径** 深比深的阴影要深得多。 提取的阴影是一个宽广的紫色的 微光,它把产品介质从Indigo页面底色上移开,没有硬的边缘。

### 装饰性深度
- 动画中的Blurple-to-magenta梯度网格通过运动和发声而不是阴影来创造深度.
- 3D字符艺术和产品道具重叠卡片边缘,以构建前缘/后缘层.
- 与indigo卷轴相对应的全血色彩带(Blurple,黑色)推深.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 6px | Small ghost buttons, compact chips |
| `{rounded.sm}` | 12px | Primary / green CTA buttons, links, table cells |
| `{rounded.md}` | 14px | 游戏排名行, 中控 |
| `{rounded.lg}` | 16px | 白色/ 幽灵按钮、 牌、 媒体框 |
| `{rounded.xl}` | 40px | Gradient feature panels, large media tiles |
| `{rounded.pill}` | 50px | 药帽、徽章、阿凡达芯片 |
| `{rounded.jumbo}` | 120px | 签名超大小的四舍五入形状卡 |
| `{rounded.full}` | 9999px | Circular 图像和图标按钮 |

### 摄影几何
媒体在软角矩形上展示(`{rounded.lg}`–`{rounded.xl}`),从不硬化. 首屏媒体块使用方向性只底半径(英语:88px 下角),为冲动的基座. 幻象和 circular 图标控件是完全圆的。


## 组件

> No hover states documented. Component specs cover Default and Active/Pressed only; variants are separate `components:` entries.

### 按钮

**`button-primary`** 蓝色胶囊形 CTA
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.link-lg}`, rounded `{rounded.sm}`, padding `{spacing.lg} {spacing.xl}`. The everyday action button across hero and feature sections.

**`button-green`** ——电绿高强度CTA("开始"/"下载").
- Background `{colors.green}`, text `{colors.ink-dark}`, type `{typography.link-lg}`, rounded `{rounded.sm}`, padding `{spacing.sm} {spacing.xl}`. The highest-visibility action; black label for contrast.

**`button-white`** 白色固态按钮
- Background `{colors.ink}`, text `{colors.ink-dark}`, type `{typography.link}`, rounded `{rounded.lg}`, padding `{spacing.xs} {spacing.md}`.

**`button-ghost`** ——暗面半透明indigo按钮
- Background `{colors.surface-indigo}`, text `{colors.ink}`, type `{typography.link}`, rounded `{rounded.lg}`, padding `{spacing.md}`.

**`button-ghost-sm`** – 紧凑的鬼按钮( quests CTA 列)
- Background `{colors.surface-indigo}`, text `{colors.ink}`, type `{typography.link-sm}`, rounded `{rounded.xs}`, padding `{spacing.sm} {spacing.xxl}`.

### 纸牌和集装箱

**`hero`** - 黑暗的印度首屏 - 黑暗的印度首屏 - 黑暗的印度首屏
- Indigo `{colors.canvas}` field with the animated gradient mesh, white `{colors.ink}` all-caps headline at `{typography.display-xl}`, lead paragraph, and a CTA pair. The hero media block carries a swooping bottom-only radius.

**`feature-card-gradient`** ——生动的紫红色梯度特征面板
- Background `{colors.magenta}` gradient, white text, `{rounded.xl}` (40px), padding `{spacing.section}`. Frames a product mockup or 3D prop.

**`feature-card-dark`** ——升起的暗色特征卡
- Background `{colors.surface-indigo}`, white text, `{rounded.xl}`, padding `{spacing.xxl}`. Holds product screenshots / chat mockups.

**`showcase-band-black`** ——全黑产品展示带.
- Background `{colors.surface-black}`, white text, `{rounded.xl}`, padding `{spacing.section}`. Frames a hero product demo.

**`stat-card`** ——大号统计卡(遗书).
- Background `{colors.primary}` (Blurple), white text, headline at `{typography.display-md}`, `{rounded.xl}`, padding `{spacing.xxl}`.

**`step-card`** 编号的步面板(1/2/3 程序)
- Background `{colors.magenta}` gradient, white text, label at `{typography.heading-sm}`, `{rounded.lg}`, padding `{spacing.xl}`.

**`cta-band`** ——全血型的Blurple CTA波段
- Background `{colors.primary}`, white headline at `{typography.display-md}`, `{rounded.xl}`, padding `{spacing.section}`, with a `button-white` or `button-green` CTA.

**`marquee-band`** ——卷轴全卷轴("PLAY ~ CHAT ~ HANGOUE").
- Background `{colors.primary}`, white display text at `{typography.display-lg}`, padding `{spacing.lg}`.

**`faq-accordion`** ——可折叠的FAQ行(硝基)
- Background `{colors.surface-indigo}`, white text, question at `{typography.link-lg}`, `{rounded.lg}`, padding `{spacing.xl}`.

### 输入表单( F)

> Discord's marketing pages surface no standalone text inputs; forms route to the app. The kit-mirror `ex-*` form surfaces below model inputs against the brand's `{rounded.lg}` surfaces and `{colors.surface-indigo}` fills.

### 导航

**`nav-bar`** ——暗顶导航.
- Indigo `{colors.canvas}` bar, white `{colors.ink}` links at `{typography.link}`, padding `{spacing.md} {spacing.xl}`. Slots: Discord logo · text links · "Login" · a Blurple/green Download CTA. Collapses to logo + hamburger on mobile.

**`footer`** – 暗链接页脚
- 英迪戈语Name `{colors.canvas}`,白色链接,在 `{typography.link}`, 编译 `{spacing.section}`,组织成巨型之上的多列连线组 "Discord" 字标。

### 签名组件

**`pricing-table`** ——硝基计划比较表.
- Raised-indigo `{colors.surface-indigo}` surface, body text at `{typography.body}`, `{rounded.lg}`, padding `{spacing.xl}`. Two plan columns (Nitro Basic / Nitro) with the popular tier carrying a `{colors.magenta}` badge, each row ending in a `button-primary` "Subscribe".

**`game-rank-feature`** — top-ranked game card (trending-games #1/#2/#3)
- 升职 `{colors.surface-indigo}` 牌,大介质,排名号+头衔,位于 `{typography.heading-sm}`, `{rounded.lg}`, 编译 `{spacing.md}`.

**`game-rank-row`** —— 排名游戏列表行
- 升职 `{colors.surface-indigo}`,正文文本在 `{typography.body}`, `{rounded.md}`, 编译 `{spacing.sm} {spacing.md}`。 排名 图标 标题 元数据列。

**`badge`** ——小圆形标签/类别芯片
- Background `{colors.magenta}`, white text at `{typography.link-sm}`, `{rounded.lg}`, padding `{spacing.xxs} {spacing.sm}`.

### 实例(说明性)

> 自动生成的工具包-模拟演示表面(`scripts/derive-examples-block.mjs`。每个 `ex-*` 条目参考: 下游消费者的品牌原始产品(`/preview-design`, `/generate-kit`) 重新皮肤相同 10 表面一致。 `TO_FILL` 标记表示缺失原始人——在LLM判断传中解析.

**`ex-pricing-tier`** ——默认定价等级卡。 feature-card 带品牌的铬 canvas-soft 表面。
- 属性 : `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** ——地貌/高亮的层次——极性-浮点表面(暗色填充+光线文字在光线模式下,浅色填充+暗色文字在暗线模式下).
- 属性 : `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** ——什么是包含的汇总卡——重新用于SaaS/B2B纵横(NOT为字形产品画廊).
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** ——订阅摘要——重新用于SaaS/B2B(每件加件的行项目,而非字面车).
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
- 带我们去深印度页面底色`{colors.canvas}`),并让动画中的模糊到magenta梯度带大气.
- 准备金 `{colors.green}` 用于页面上单张最高的 CMA; 使用 `{colors.primary}` 其它动作都模糊不清
- 大声喊叫 `{typography.display-xl}` ABC Ginto Nord 首页中, 首页中; 下至 `{typography.body}` 供复制。
- Round generously — `{rounded.sm}`–`{rounded.lg}` on controls, `{rounded.xl}`+ on media and feature panels.
- Frame product mockups inside `{colors.magenta}` gradient panels or `{colors.surface-indigo}` dark cards.
- 来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,,来,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 3D字符艺术和道具重叠卡边,以构建游戏深度.

### Don't
- Don't flatten the canvas to a neutral grey or pure black — the indigo + gradient mesh is the brand.
- Don't use `{colors.green}` as a general accent; it is the high-intent CTA only.
- Don't set headlines in a timid mid-weight — display type is 700–800 ABC Ginto Nord or it loses the brand voice.
- Don't square off media or cards; the soft `{rounded.xl}`+ geometry is core to the playful tone.
- Don't lean on drop shadows for depth; depth comes from colour, gradient, and overlapping art.
- Don't introduce a fourth loud accent — Blurple, green, and magenta are the full chord.

## 设计词元原值

分析 Discord设计语言——一种响亮,游戏的内在系统,它建立在布卢尔普点燃的深印页面底色上,电动绿色,充满活力的红金色梯度。 ABC Ginto Nord 显示类型在全头大喊大叫, 宽宏大量圆形媒体, 梯度特性面板, 和全血的模糊波段; 情绪是街机- 激流的, 从来没有公司。

```yaml
---
version: alpha
name: Discord Analysis
description: An analysis of Discord's design language — a loud, playful gaming-native system built on a deep-indigo canvas lit by Blurple, electric green, and vibrant magenta gradients. Heavy ABC Ginto Nord display type shouts in all-caps over generously rounded media, gradient feature panels, and full-bleed Blurple bands; the mood is arcade-energetic, never corporate.

colors:
  primary: "#5865f2"
  on-primary: "#ffffff"
  green: "#35ed7e"
  magenta: "#ec48bd"
  link: "#00b0f4"
  canvas: "#0a0d3a"
  surface-indigo: "#1e2353"
  surface-onyx: "#23272a"
  surface-black: "#000000"
  ink: "#ffffff"
  ink-dark: "#000000"
  muted: "#333333"
  hairline: "#23272a"

typography:
  display-xl:
    fontFamily: ABC Ginto Nord
    fontSize: 82px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: 0
  display-lg:
    fontFamily: ABC Ginto Nord
    fontSize: 62px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: 0
  display-md:
    fontFamily: ABC Ginto Nord
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0
  heading-lg:
    fontFamily: ABC Ginto Nord
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0
  heading-sm:
    fontFamily: ABC Ginto Nord
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  body-lg:
    fontFamily: ABC Ginto
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  link-lg:
    fontFamily: ABC Ginto
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body:
    fontFamily: ggsans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  link:
    fontFamily: ABC Ginto
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  link-sm:
    fontFamily: ABC Ginto
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 6px
  sm: 12px
  md: 14px
  lg: 16px
  xl: 40px
  pill: 50px
  jumbo: 120px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.link}"
    padding: "{spacing.md} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.link-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg} {spacing.xl}"
  button-green:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ink-dark}"
    typography: "{typography.link-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.xl}"
  button-white:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-dark}"
    typography: "{typography.link}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xs} {spacing.md}"
  button-ghost:
    backgroundColor: "{colors.surface-indigo}"
    textColor: "{colors.ink}"
    typography: "{typography.link}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  button-ghost-sm:
    backgroundColor: "{colors.surface-indigo}"
    textColor: "{colors.ink}"
    typography: "{typography.link-sm}"
    rounded: "{rounded.xs}"
    padding: "{spacing.sm} {spacing.xxl}"
  hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  feature-card-gradient:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "{spacing.section}"
  feature-card-dark:
    backgroundColor: "{colors.surface-indigo}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
  showcase-band-black:
    backgroundColor: "{colors.surface-black}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "{spacing.section}"
  stat-card:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
  step-card:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  cta-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.section}"
  marquee-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.lg}"
  pricing-table:
    backgroundColor: "{colors.surface-indigo}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  game-rank-feature:
    backgroundColor: "{colors.surface-indigo}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  game-rank-row:
    backgroundColor: "{colors.surface-indigo}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  faq-accordion:
    backgroundColor: "{colors.surface-indigo}"
    textColor: "{colors.ink}"
    typography: "{typography.link-lg}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  badge:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.ink}"
    typography: "{typography.link-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxs} {spacing.sm}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.link}"
    padding: "{spacing.section}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses small link-caps typography; body uses body."
    headerBackground: "{colors.surface-indigo}"
    headerTypography: "{typography.link-sm}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.section}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body}"

---
```
