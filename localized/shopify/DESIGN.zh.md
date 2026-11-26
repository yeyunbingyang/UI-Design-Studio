# Shopify · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Shopify 运行两个平行的设计轨道,共享打印DNA和一个单一按钮词汇,但在页面底色极性上却存在差异。 `{colors.canvas-night}` (`#000000`)——满腔血色的影视摄影商,巨型. `{typography.display-xxl}` 诺伊语头条 Haas 字重显示格罗捷斯克 330 (一种薄薄的,几乎是编辑剪辑的),和单CTA:一种白色的黑胶囊形,带有形态. `button-outline-on-dark`。这些页面读起来就像一个高档印刷杂志的传播:很多黑色,很多负空间,摄影不与文本竞争,每个乐队只有一个动作.

交易音轨翻转到 `{colors.canvas-light}` 财务报告和已审计财务报表 `{colors.canvas-cream}` 价格水平、比较表和注册流量都坐落在这个更轻的页面底色上, 上面有相同的胶囊形按钮系统,但反极性(一种用白文本的坚固黑胶囊形,或一种 `{colors.aloe-10}` 薄荷丸,用于特色/"开始免费试听"级,强调色—— `{colors.aloe-10}` 薄荷和 `{colors.pistachio-10}` 活塞——只出现在轻轨上,从未出现在电影黑暗首屏的页面.

字法分为三个家族. **诺伊 Haas 格罗特斯克显示** 重量( 微小) (330–500)处理每个显示,标题,和编辑时刻——品牌的特征是薄显示剪切. **Inter Variable** 时 间 420–550 权重处理每个UI机构,按钮标签,标题,并形成字段——不与显示对战的效用文本. **ui-monospace** 仅出现在代码块和稀有的技术眉毛中。在所有三个家族中, OpenType `ss03` 风格集是启用的——这是该品牌的人物级签名,普遍适用.

**关键特征 :**
- 双扫描仪系统: `{colors.canvas-night}` 电影营销, `{colors.canvas-light}` / `{colors.canvas-cream}` 交易表面——从未混合。
- 胶囊形形状( Name`{rounded.pill}`)是两轨上唯一一个按钮形状;圆形矩形不存在用于按钮.
- Thin-weight (330) display typography is the signature; `{typography.display-xxl}` at 96px / weight 330 is the brand's loudest visual.
- Aloe and pistachio greens (`{colors.aloe-10}`, `{colors.pistachio-10}`) are reserved for the light track — they signal commerce, growth, transactional success.
- 摄影是全血型的,边缘对角的,从不嵌入电影轨迹上的卡片;商人和商店前身的图像会做渐变和插图在别处会做的重视提升.
- 打开的Type `ss03` 样式集可以跨过每个文本角色——一个字符级的统一符,可以跟踪两条轨道.
- 紧紧 letter-spacing 显示大小( R)2.4px 正在正跟踪 96px ) 使薄字重增加光学空气。


## 配色

> **Source pages:** home (`/`), `/start`, `/website/builder`, `/pricing`.

### 品牌和 强调色
- **Aloe** (`{colors.aloe-10}` — `#c1fbd4`): The featured-tier and "growth" accent. Used as a pill button background on light surfaces and as a feature-card fill in the pricing comparison band.
- **皮萨奇奥** (`{colors.pistachio-10}` — `#d4f9e0`:柔软于aloe;用作宽段带填充轻轨,以信号不同类别的特点,而不离开绿色家族.
- **Cool Link Tones** (`{colors.link-cool-1}` `#9dabad`, `{colors.link-cool-2}` `#9797a2`, `{colors.link-cool-3}` `#bdbdca`, `{colors.link-mint}` `#99b3ad`): Muted footer / tertiary link colors used on dark surfaces to create a quiet hierarchy below the primary white type.

### 表面
- **风景之夜** (`{colors.canvas-night}` — `#000000`:纯黑色首屏,电影故事页,页脚.
- **夜幕降临** (`{colors.canvas-night-elevated}` — `#0a0a0a`: 电影表面的卡片,视频帧.
- **Surface Elevated Dark** (`{colors.surface-elevated-dark}` — `#1e2c31`): Dark teal-shifted surface used on a small subset of dark cards to introduce subtle depth without breaking the black.
- **光线** (`{colors.canvas-light}` — `#ffffff`:定价,注册,比较表.
- **油菜酱** (`{colors.canvas-cream}` — `#fbfbf5`:定价页背景页面底色上使用的微小温暖的淡白——与 `#ffffff` 却增加了编辑上的热情
- **细边线光** (`{colors.hairline-light}` — `#e4e4e7`): 1px 边框,在轻卡,桌牌分隔符上。
- **细边线暗** (`{colors.hairline-dark}` — `#1e2c31`): 1px 边框上,有可见铬的稀有暗卡。

### 阴影梯
- **Shade-30** (`{colors.shade-30}` — `#d4d4d8`): Tag / chip background on light, footer hairline on dark.
- **Shade-40** (`{colors.shade-40}` — `#a1a1aa`): Tertiary text on light, secondary text on dark.
- **Shade-50** (`{colors.shade-50}` — `#71717a`): Secondary text on light.
- **Shade-60** (`{colors.shade-60}` — `#52525b`): Tertiary text on light, deep on dark.
- **Shade-70** (`{colors.shade-70}` — `#3f3f46`): Pressed-state of the primary pill button; deep dark surface accent.

### 文本
- **Ink** (`{colors.ink}` — `#000000`): All text on light canvas.
- **小学** (`{colors.on-primary}` — `#ffffff`: 暗布上的所有文字+填充的溢出标签.


## 字体排版

### 字体家族

The display tier is **Neue Haas Grotesk Display** at thin weights (330–500). When unavailable, fall back to **Helvetica** at light weight, then Arial. The thin-weight cut is the brand — no substitution should default to weight 400+.

用户界面等级是: **Inter Variable** 时 间 420–550 ——一种可变字体,具有亚字重精度,使系统横跨体(.420),强(550),和标题(第1款)500),不跳至更重的阶梯. Inter 是通过 Google 字体打开源代码。

代码层是 **ui-monospace**,系统单——比网络font单机更喜欢,以避免不必要的下载.

打开的Type `ss03` 样式集可以在每个角色中被启用。它会改变特定的格律形式(小写) `a`, `g`,单层数字),用于略微多几何字符。 `font-feature-settings: "ss03"` 身体元素或根。

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 96px | 330 | 1.0 | 2.4px | 电影首屏头条 |
| `{typography.display-xl}` | 70px | 330 | 1.0 | 0 | 电影版的开页器 |
| `{typography.display-lg}` | 55px | 330 | 1.16 | 0 | 定价页面标题 |
| `{typography.display-md}` | 48px | 330 | 1.14 | 0 | 轻轨小节标题 |
| `{typography.heading-xl}` | 28px | 500 | 1.28 | 0.42px | 牌名/定价等级名称 |
| `{typography.heading-lg}` | 24px | 400 | 1.14 | 0.36px | 缩写卡标题 |
| `{typography.heading-md}` | 20px | 500 | 1.4 | 0.3px | 款次标题 |
| `{typography.heading-sm}` | 18px | 500 | 1.25 | 0.72px | 眉毛/ 小型部分标签 |
| `{typography.body-lg}` | 18px | 550 | 1.56 | 0 | 营销机构领导,大体 |
| `{typography.body-md}` | 16px | 420 | 1.5 | 0 | 默认 UI 机身, 避孕按钮标签 |
| `{typography.body-strong}` | 16px | 550 | 1.5 | 0 | 突出的运行状态 |
| `{typography.caption}` | 14px | 500 | 1.49 | 0.28px | 帮助复制件,脚注 |
| `{typography.micro}` | 13px | 500 | 1.5 | -0.13px | 定价精细打印 |
| `{typography.eyebrow-cap}` | 12px | 400 | 1.2 | 0.72px | All-caps eyebrow above large headlines |
| `{typography.code}` | 16px | 400 | 1.5 | 0 | 代码块 |

### 原则
- **显示瘦弱是品牌。** 总是以字重渲染显示大小 330 - 从来没有 400+. 薄度是一个有意的编辑选择,使巨型大小感到安静.
- **Display in NHGD, body in Inter.** Don't push body roles up to NHGD; don't push display roles down to Inter.
- **追踪电梯在展示中** 电话 96px 首屏会得到 +2.4px 积极跟踪——薄胶片需要空气。 70px 下方,跟踪返回 0.

### Note on Font Substitutes
Open substitutes for Neue Haas Grotesk Display: **Helvetica Now Display** (proprietary) or **Inter Display** at light weights (open-source) are the closest matches. Avoid Helvetica Neue at default weight — it's too heavy for the brand's thin tier. **Inter Variable** is open-source via Google Fonts and is the canonical body face — no substitute needed.


## 布局

### 间距系统
- **基地单位**: 8px (有较密集的子单元) 1, 2, 3, 4 工作需要,但必须进行。
- **脚本**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px.
- **分区编栏**: `{spacing.huge}` 64–128px ; 崩溃到 ~48px 以密度为优先的交易页面。
- **Card internal padding**: `{spacing.xxl}` 32px on pricing cards; `{spacing.xl}` 24px on compact tag rows.

### 网格容器( C)
- 电影首屏的网页使用宽 max-width 集装箱(~1440–1600px)与脱落边缘摄影,逃出容器.
- Pricing collapses through 4-up → 2-up → 1-up tiers based on viewport.
- 机构内容中心 ~720–840px 读取长窗体页面上的列。

### 白空间哲学
The cinematic track treats whitespace as the brand's most valuable asset — sections often have 128–192px of vertical air between content blocks, with photography filling the rest. The transactional track tightens to ~48–64px between bands because users are scanning, comparing, and acting. The contrast between the two whitespace philosophies is part of the brand voice.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 | 平坦,没有影子 | 默认表面 |
| 1 | `0 1px 2px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.04)` | 暗卡上的暗套突出显示( 上端的 Sheen) |
| 2 | `0 0 0 1px rgba(255,255,255,0.08), 0 1px 3px rgba(0,0,0,0.3), 0 5px 10px rgba(0,0,0,0.2)` | 带有细边线的暗高卡+ 投影堆栈 |
| 3 | `0 8px 8px rgba(0,0,0,0.1), 0 4px 4px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.1)` | 光表面的叠加影卡;层状微小的影产生软光环 |
| 4 | `0 25px 50px -12px rgba(0,0,0,0.25)` | 光线上的 Modal / 浮面板 |

### 装饰性深度
On the cinematic track, depth comes from photography — full-bleed merchant imagery layered behind cards, with subtle inset top-edge highlights creating the illusion of light hitting a glass surface. On the light track, the layered tiny-shadow stack (Level 3) produces a soft, paper-like halo around pricing cards — depth without harshness.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | 输入、细边线标记 |
| `{rounded.sm}` | 5px | 图像容器(小) |
| `{rounded.md}` | 8px | 格式输入、录像框、小卡片 |
| `{rounded.lg}` | 12px | 定价卡、特征卡 |
| `{rounded.xl}` | 20px (一些不对称卡上只使用顶端) | 首屏相框、电影卡片、铬 |
| `{rounded.pill}` | 9999px | All buttons, pill tags, mint chips |

### 摄影几何
摄影完全无边框。在电影版的页面上,它完全从容器中逃出;在交易版上,它坐落在内部 `{rounded.lg}` 客户-日志条条中的“神通”处理是统一高度的简单灰度文字标记(~24–32px),在单横向条形中对齐.


## 组件

### 按钮

**`button-primary-pill`** ——整个系统占主导地位的CTA.
- Background `{colors.primary}` (black), text `{colors.on-primary}`, type `{typography.body-md}`, padding `{spacing.md} {spacing.xl}` (12px 24px), rounded `{rounded.pill}` 9999px.
- Pressed state `button-primary-pill-pressed`: background lifts to `{colors.shade-70}`.

**`button-outline-on-dark`** 电影首屏CTA.
- Background `{colors.canvas-night}` (transparent on the canvas), 2px solid `{colors.on-primary}` border, text `{colors.on-primary}`, same pill geometry.

**`button-outline-on-light`** ——轻轨等效.
- Background `{colors.canvas-light}`, 1px solid `{colors.ink}` border, text `{colors.ink}`, same pill geometry.

**`button-aloe-pill`** 定价页面上的CTA。
- Background `{colors.aloe-10}`, text `{colors.ink}`, same pill geometry. Used for the "Start free trial" tier.

### 纸牌和集装箱

**`card-pricing`** ——定价页上的标准等级卡.
- Background `{colors.canvas-light}`, padding `{spacing.xxl}`, rounded `{rounded.lg}` 12px, 1px `{colors.hairline-light}` border. Title in `{typography.heading-xl}`, price in `{typography.display-md}`, body in `{typography.body-md}`, CTA pinned to the bottom as `button-primary-pill`.

**`card-pricing-featured`** ——突出定价等级.
- Background `{colors.aloe-10}`, otherwise identical to `card-pricing`. The mint fill (rather than a brand-color border) is the brand's distinctive featured-tier choice.

**`card-feature-cinematic`** ——电影轨迹上的特色卡.
- Background `{colors.canvas-night-elevated}`, text `{colors.on-primary}`, rounded `{rounded.lg}`, often with a top-edge inset highlight (Level 1 elevation). Holds full-bleed photography or a single large statement.

**`card-pistachio-band`** ——宽水平带卡用于突出轻轨上一类特征.
- Background `{colors.pistachio-10}`, text `{colors.ink}`, rounded `{rounded.lg}` 12px, padding `{spacing.xxl}`.

**`card-photo-frame`** ——电影版页面上全血摄影容器.
- Background `{colors.canvas-night}`, padding 0, rounded `{rounded.xl}` 20px (often top-only). The photo IS the content; no inner padding, no overlay text inside the card.

### 输入表单( F)

**`text-input`** ——光表面标准文字输入.
- Background `{colors.canvas-light}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm}+ {spacing.md}` (10px 12px), rounded `{rounded.md}` 8px, 1px `{colors.hairline-light}` border.

### 导航

**`nav-bar-light`** ——光线页上最高的导航.
- Background `{colors.canvas-light}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.xl}`. Logo wordmark on the left, nav items center, two pill buttons on the right (`button-outline-on-light` for "Log in", `button-primary-pill` for "Start free trial").

**`nav-bar-dark`** ——电影版页上最高的导航.
- Background `{colors.canvas-night}`, text `{colors.on-primary}`, otherwise identical structure. Two pill buttons on the right (`button-outline-on-dark` for both, with the rightmost subtly more prominent via type weight).

### 胶囊形、标签和芯片

**`pill-tag-mint`** ——轻表面的小标记,表示特征类别.
- Background `{colors.aloe-10}`, text `{colors.ink}`, type `{typography.eyebrow-cap}`, padding `{spacing.xs} {spacing.md}`, rounded `{rounded.pill}`.

**`pill-tag-shade`** ——在光面上贴上中立标记.
- Background `{colors.shade-30}`, text `{colors.ink}`, otherwise same shape as `pill-tag-mint`.

### 签名组件

**电影摄影层** ——首屏身上的满血商画照片,不覆盖斜纹,不覆盖文字形象;相反,该类型坐落在照片上下方的干净的负空间,品牌将摄影视为编辑传播,而不是装饰.

**Stacked Tiny Shadows (Level 3 Elevation)** — pricing cards on the light track use 4 stacked tiny drop shadows (each 1–8px Y offset, 10% black) to produce a soft, layered paper halo. This is the brand's distinctive depth on light.

**`link-on-dark`** ——影视版页面内含链接.
- 颜色 `{colors.on-primary}`,默认情况下不下划线(链接依赖上下文);对于第三页脚链接,颜色转换为其中一种凉爽的哑音(`{colors.link-cool-1}` 以坚固的划线表示。

**`footer-dark`** ——电影轨迹全页宽脚步.
- Background `{colors.canvas-night}`, text `{colors.on-primary}`, type `{typography.caption}`, padding `{spacing.huge} {spacing.xl}`. Contains 4–5 columns of muted-tone link groups, social icons, and a small legal row.

**`footer-light`** 交易轨道上相当的
- Background `{colors.canvas-light}`, text `{colors.ink}`, otherwise same structure.


## 设计建议与禁忌

### 执行
- 准备金 `{colors.aloe-10}` 财务报告和已审计财务报表 `{colors.pistachio-10}` 光线赛道上没有出现 电影黑页上没有
- 总是使用 `{rounded.pill}` 按钮; 永远 `{rounded.md}` 或 减 减 `{rounded.lg}`.
- 显示字重级 330; 颠倒到 400 或 减 减 500 打破品牌的薄片签名.
- Use full-bleed photography on cinematic pages — let it escape the container.
- Apply `font-feature-settings: "ss03"` globally; the stylistic set is the brand's typographic signature.
- 配白型黑页面底色和白斑状轮廓药;配黑型黑页面底色和充装黑丸.

### Don't
- Don't introduce a third canvas color — stick to black or light/cream. Greys, beiges, and blues are not in the system.
- Don't add drop shadows on cinematic dark cards beyond the subtle inset top-highlight; the cinematic track wants flat blackness.
- 下方不要缩小显示等级 `{typography.display-md}` (48px)在首屏表面;下面是作为片段头读的,而不是显示.
- Don't put aloe / pistachio greens behind type — they're surface fills, not text colors.
- Don't replace the pill shape with a rounded-rectangle button anywhere.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Wide | ≥ 1440px | Full cinematic hero with edge-bleeding photography; pricing 4-up |
| 桌面 | 1024–1440px | 默认内容 max-width; 定价 4- 上紧了 |
| 平板 | 768–1023px | 定价 2- 上;电影首屏摄影作物 |
| 手机 | < 768px | 定价 1- 上;汉堡导航; display-xxl 滴入数 ~56–64px |

### 触控区域
- Pill buttons hit ≥ 44×44px on mobile via 12px vertical padding × 16px line-height. WCAG AAA compliant.
- 窗体字段停留在 44px 最小高度跨越所有断点。

### 折叠战略
- Display sizes scale down through the breakpoint stair: 96 → 70 → 55 → 48 → 36px on mobile.
- 电影摄影的收成宽度小 将焦点放在边缘的高度
- Pricing tiers stair-step 4-up → 2-up → 1-up; the featured aloe tier stays visually distinguished at every step.
- 顶端导航崩溃到下面的汉堡 768px;菜单继承页面底色极性。

### 图像行为
摄影用反应能力 `srcset` 移动作物更喜欢近身作物; 宽广作物更喜欢环境/储存前缘。


## 迭代指南

1. 一次集中关注一个组件.
2. 直接引用组件名称和符号( Q)`{colors.aloe-10}`, `{button-primary-pill}-pressed`, `{rounded.pill}`).
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后。
4. 添加新的变体作为单独的条目.
5. 默认正文为 `{typography.body-md}`; 储备金 `{typography.body-lg}` 市场营销线索
6. 将两个页面底色轨迹分开——在设计新页时,选择电影OR交易,而不是两者.
7. 丸形不可谈判;新扣变体在填充/边框/页面底色上各有不同,从未出现形状.

## 设计词元原值

An inspired interpretation of Shopify's design language — a cinematic commerce platform that runs two parallel design tracks. The marketing-hero and product-narrative pages live on near-black canvases with full-bleed photography of merchants, giant Neue Haas Grotesk display type at thin weights, and a single black-pill CTA stroked in white. The transactional pages (pricing, signup, dashboards) flip to a cream-mint canvas with pastel aloe and pistachio greens, the same pill button vocabulary, and Inter for UI body. The two tracks share typographic DNA but diverge sharply in canvas polarity — and that choice is the brand.

```yaml
---
version: alpha
name: Shopify-design-analysis
description: An inspired interpretation of Shopify's design language — a cinematic commerce platform that runs two parallel design tracks. The marketing-hero and product-narrative pages live on near-black canvases with full-bleed photography of merchants, giant Neue Haas Grotesk display type at thin weights, and a single black-pill CTA stroked in white. The transactional pages (pricing, signup, dashboards) flip to a cream-mint canvas with pastel aloe and pistachio greens, the same pill button vocabulary, and Inter for UI body. The two tracks share typographic DNA but diverge sharply in canvas polarity — and that choice is the brand.

colors:
  primary: "#000000"
  ink: "#000000"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  canvas-night: "#000000"
  canvas-night-elevated: "#0a0a0a"
  canvas-light: "#ffffff"
  canvas-cream: "#fbfbf5"
  surface-elevated-dark: "#1e2c31"
  shade-30: "#d4d4d8"
  shade-40: "#a1a1aa"
  shade-50: "#71717a"
  shade-60: "#52525b"
  shade-70: "#3f3f46"
  hairline-light: "#e4e4e7"
  hairline-dark: "#1e2c31"
  aloe-10: "#c1fbd4"
  pistachio-10: "#d4f9e0"
  link-cool-1: "#9dabad"
  link-cool-2: "#9797a2"
  link-cool-3: "#bdbdca"
  link-mint: "#99b3ad"

typography:
  display-xxl:
    fontFamily: "NeueHaasGrotesk Display, Helvetica, Arial, sans-serif"
    fontSize: 96px
    fontWeight: 330
    lineHeight: 1.0
    letterSpacing: 2.4px
    fontFeature: ss03
  display-xl:
    fontFamily: "NeueHaasGrotesk Display, Helvetica, Arial, sans-serif"
    fontSize: 70px
    fontWeight: 330
    lineHeight: 1.0
    letterSpacing: 0
    fontFeature: ss03
  display-lg:
    fontFamily: "NeueHaasGrotesk Display, Helvetica, Arial, sans-serif"
    fontSize: 55px
    fontWeight: 330
    lineHeight: 1.16
    letterSpacing: 0
    fontFeature: ss03
  display-md:
    fontFamily: "NeueHaasGrotesk Display, Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 330
    lineHeight: 1.14
    letterSpacing: 0
    fontFeature: ss03
  heading-xl:
    fontFamily: "NeueHaasGrotesk Display, Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.28
    letterSpacing: 0.42px
    fontFeature: ss03
  heading-lg:
    fontFamily: "NeueHaasGrotesk Display, Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: 0.36px
    fontFeature: ss03
  heading-md:
    fontFamily: "NeueHaasGrotesk Display, Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.3px
    fontFeature: ss03
  heading-sm:
    fontFamily: "NeueHaasGrotesk Display, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.72px
    fontFeature: ss03
  body-lg:
    fontFamily: "Inter Variable, Inter, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 550
    lineHeight: 1.56
    letterSpacing: 0
    fontFeature: ss03
  body-md:
    fontFamily: "Inter Variable, Inter, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 420
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: ss03
  body-strong:
    fontFamily: "Inter Variable, Inter, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 550
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: ss03
  caption:
    fontFamily: "Inter Variable, Inter, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.49
    letterSpacing: 0.28px
    fontFeature: ss03
  micro:
    fontFamily: "Inter Variable, Inter, Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.13px
    fontFeature: ss03
  eyebrow-cap:
    fontFamily: "Inter Variable, Inter, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.72px
    fontFeature: ss03
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: ss03

rounded:
  xs: 4px
  sm: 5px
  md: 8px
  lg: 12px
  xl: 20px
  pill: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  huge: 64px

components:
  button-primary-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-primary-pill-pressed:
    backgroundColor: "{colors.shade-70}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-outline-on-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 26px
  button-outline-on-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-aloe-pill:
    backgroundColor: "{colors.aloe-10}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  text-input:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 12px
  card-pricing:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pricing-featured:
    backgroundColor: "{colors.aloe-10}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-feature-cinematic:
    backgroundColor: "{colors.canvas-night-elevated}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pistachio-band:
    backgroundColor: "{colors.pistachio-10}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-photo-frame:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 0px
  pill-tag-mint:
    backgroundColor: "{colors.aloe-10}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow-cap}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  pill-tag-shade:
    backgroundColor: "{colors.shade-30}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow-cap}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  nav-bar-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  nav-bar-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  link-on-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  footer-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 24px
  footer-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 24px
---
```
