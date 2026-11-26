# ElevenLabs · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

ElevenLabs 读起来像一本编辑杂志, 恰好是声优AI产品。 `{colors.canvas}` (#f5f5f5) 握着温暖的近黑墨水 `{colors.ink}` (#0c0a09)品牌辨识度是. **照片,不是色调**:软面的大气梯度圆形(薄荷,桃子,薰衣草,天空,玫瑰)漂移在页面中作为唯一的"彩色"时刻,没有霓虹强调色,没有饱和的CTA颜色,没有暗色的cavas dev-tools大气.

Type pairs **Waldenburg Light** (custom serif at weight 300) for display with **Inter** for body, navigation, captions. The display weight at 300 is the editorial signature — never bold, never heavy.

反恐怖药很微妙:一种近黑墨胶囊形(`{component.button-primary}`)是初级,a transparent 大纲(`{component.button-outline}`)是次要的,品牌信任大气摄影和适度的类型重量来承载品牌作品.

**关键特征 :**
- 外白页面底色,温暖的近黑墨水,没有饱和的CTA颜色.
- 单次主要动作:墨药 `{rounded.pill}`大气梯度带视觉品牌辨识度.
- 显示运行 Waldenburg 字重轻 300 ——编辑杂志语音.
- 运行 Inter 时 间 400 和微妙的 letter-spacing (+0.15-0.18px).
- 贴度梯度圆形( R)5 标志:薄荷,桃子,薰衣草,天,玫瑰)仅用作大气品牌装饰.
- 软药几何( 微米)`{rounded.pill}` 适用于《协定》, `{rounded.xl}` ),为牌.
- 96px 节奏。


## 配色

### 品牌和 强调色
- **墨水小学** (`{colors.primary}` — #292524:主要动作颜色——温暖的近黑胶囊形,很少使用.
- **墨水初活跃** (`{colors.primary-active}` — #0c0a09:新闻州.

### 表面
- **页面底色** (`{colors.canvas}` — #f5f5f5: 脱白页楼.
- **软画帘** (`{colors.canvas-soft}` — #fafafa: 更轻的带用于微妙的交替部分.
- **深层的页面底色** (`{colors.canvas-deep}` — #0c0a09:与墨水相同——用于罕见的暗模首屏(Agents page).
- **表面卡片** (`{colors.surface-card}` — #ffffff:纯白牌.
- **表面坚固** (`{colors.surface-strong}` — #f0efed:徽章,语音-icon板.
- **表面暗色( T)** (`{colors.surface-dark}` — #0c0a09:黑暗首屏/CTA乐队页面底色.
- **表面暗线** (`{colors.surface-dark-elevated}` — #1c1917:暗页面底色上的卡片.

### Hairlines
- **细边线** (`{colors.hairline}` — #e7e5e4: 默认 1px 分数。
- **柔软的细边线** (`{colors.hairline-soft}` — #f0efed:轻分者.
- **发条坚固** (`{colors.hairline-strong}` — #d6d3d1: 更强的面板大纲.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — #0c0a09: 显示,主文本.
- **体质** (`{colors.body}` — #4e4e4e: 默认的运行文本.
- **强体** (`{colors.body-strong}` — #292524:与初级相同——强调。
- **静音** (`{colors.muted}` — #777169: 字幕组.
- **静音软体** (`{colors.muted-soft}` — #a8a29e: 已禁用文本。
- **小学** (`{colors.on-primary}` — #ffffff:白文本在墨药上.
- **黑暗时** (`{colors.on-dark}` — #ffffff: 黑暗首屏的白文本.
- **暗软** (`{colors.on-dark-soft}` — #a8a29e: 哑巴在黑暗中关闭白色。

### 大气梯度停止(签名)
- **Gradient Mint** (`{colors.gradient-mint}` — #a7e5d3): Mint green orb.
- **Gradient Peach** (`{colors.gradient-peach}` — #f4c5a8): Peach orb.
- **渐变的拉风机** (`{colors.gradient-lavender}` — #c8b8e0:薰衣草圆形.
- **渐变天空** (`{colors.gradient-sky}` — #a8c8e8:天蓝色圆形.
- **渐变玫瑰** (`{colors.gradient-rose}` — #e8b8c4:玫瑰圆珠.

These appear ONLY as soft radial-gradient atmospheric orbs inside `{component.gradient-orb-card}` and as background atmospheric blooms behind hero copy. Never as button fills, never as text colors.

### 语义
- **Success** (`{colors.semantic-success}` — #16a34a): Confirmation.
- **错误** (`{colors.semantic-error}` — #dc2626:验证错误.


## 字体排版

### 字体家族
**Waldenburg 光线** 属于特许显示 serif 字重 300. **Inter** 携带身体、导航、标题和按钮。 `'Times New Roman', serif` 资源 Waldenburg, `sans-serif` 资源 Inter.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 64px | 300 | 1.05 | -1.92px | Homepage hero h1 |
| `{typography.display-xl}` | 48px | 300 | 1.08 | -0.96px | Subsidiary heroes |
| `{typography.display-lg}` | 36px | 300 | 1.17 | -0.36px | 科长 |
| `{typography.display-md}` | 32px | 300 | 1.13 | -0.32px | 副科长 |
| `{typography.display-sm}` | 24px | 300 | 1.2 | 0 | 纸牌组标题 |
| `{typography.title-md}` | 20px | 500 | 1.35 | 0 | 构成部分标题 - Inter |
| `{typography.title-sm}` | 18px | 500 | 1.44 | 0.18px | 列表标签 |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0.16px | 默认体 —— Inter |
| `{typography.body-strong}` | 16px | 500 | 1.5 | 0.16px | 重点机构 |
| `{typography.body-sm}` | 15px | 400 | 1.47 | 0.15px | Footer body |
| `{typography.caption}` | 14px | 400 | 1.5 | 0 | 图片标题 |
| `{typography.caption-uppercase}` | 12px | 600 | 1.4 | 0.96px | 区域标签、徽章 |
| `{typography.button}` | 15px | 500 | 1.0 | 0 | CTA 胶囊形 |
| `{typography.nav-link}` | 15px | 500 | 1.4 | 0 | Top-nav 菜单 |

### 原则
- **显示字重停留在 300.** Waldenburg 光是编辑签名,绝不是粗体显示副本。
- **浅 letter-spacing 身体上,我们有** Inter 时 间 +0.15-0.18px 跟踪——比默认松一点 Inter 更能表达编辑的感受
- **负数 letter-spacing 显示中。** Waldenburg 牵引 -0.32px 改为: -1.92px 更紧的显示大小 。

### Note on Font Substitutes
Waldenburg 已获得许可。开源替换 : **贾蒙德** 字重 300 (略多一点的人文主义)或 **区级** (关闭到 Waldenburg's immerity. 使用 Inter 直接为了身体,是同一个家庭 ElevenLabs 使用时。


## 布局

### 间距系统
- **基部单位:** 4px.
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.base}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **科 科 padding:** 96px.

### 网格容器( C)
- 最大内容 width: ~1200px.
- 编辑机构: 12- 列网格 - 列网格 - Colind grade.
- Feature card grids: 2-up at desktop for hero splits, 3-up for benefit grids.
- Footer: 5-column at desktop.

### 白空间哲学
慷慨的社论节奏——印刷-杂志的感觉. 96px 带间; 带内卡片坐近( Name16-24px 空隙)。大气梯度球体占用了宽大的呼吸空间,而不与复制物竞争。


## 层次与阴影

系统使用 **细边线+软滴**。卡片通过非白页面底色上方浮动 1px 细边线和单一的细微的阴影层,大气深度来自梯度圆形.

| 职等 | 治疗 | 使用 |
|---|---|---|
| 平面( 扫描) | `{colors.canvas}` (#f5f5f5) | 车体带,页脚 |
| 纸牌 | `{colors.surface-card}` (#ffffff) | 内容卡 |
| 细边线边框 | 1px `{colors.hairline}` | 纸牌轮廓 |
| 软滴 | `0 4px 16px rgba(0, 0, 0, 0.04)` | 单层阴影卡 |
| 渐变圆形b | 带其中之一的辐射梯度 `{colors.gradient-*}` | 大气深度——永远不要卡片表面 |

### 装饰性深度
- **Pastel gradient orbs** are the brand's strongest atmospheric pattern. Soft radial blooms in mint, peach, lavender, sky, or rose drift through hero bands and feature sections without containing any content — they are pure atmosphere.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 预留额 |
| `{rounded.xs}` | 4px | 内置标签 |
| `{rounded.sm}` | 6px | 压缩行 |
| `{rounded.md}` | 8px | 格式输入 |
| `{rounded.lg}` | 12px | 压缩卡 |
| `{rounded.xl}` | 16px | 特价卡,定价等级 |
| `{rounded.xxl}` | 24px | 渐变圆形卡( 超软) |
| `{rounded.pill}` | 9999px | All CTA buttons, badges |
| `{rounded.full}` | 9999px | 声音图标圆圈, 变形符 |


## 组件

### 顶端导航

**`top-nav`** — Background `{colors.canvas}`, text `{colors.ink}`, height 64px. Layout: ElevenLabs wordmark left, primary horizontal menu (Creative / Agents / Video / Pricing / Enterprise / Docs), Sign In + "Try free" primary CTA right.

### 按钮

**`button-primary`** 近黑墨胶囊形。 `{colors.primary}`文本中,请输入 `{colors.on-primary}`类型 `{typography.button}` (15px / 500), 贴 10px × 20px高度( 高度) 40px,四舍五入 `{rounded.pill}`.

**`button-primary-active`** ——新闻状况。背景 `{colors.primary-active}`.

**`button-outline`** — Transparent pill with 1px ink border. Background transparent, text `{colors.ink}`, 1px `{colors.hairline-strong}` border.

**`button-tertiary-text`** ——内含墨文字链接.

### 首屏与大气

**`hero-band`** — Background `{colors.canvas}`, full-width display headline in `{typography.display-mega}` (64px / 300 / -1.92px), subhead in `{typography.body-md}`, two CTAs, and an atmospheric gradient orb behind the centered headline.

**`gradient-orb-card`** ——一张大卡,在中心显示副本后方有软光圈级的圆形圆形。背景 `{colors.canvas-soft}`,四舍五入 `{rounded.xxl}` (24px), 贴 32px。每个变体使用五个梯度符号中的一个(`gradient-mint`, `gradient-peach`, `gradient-lavender`, `gradient-sky`, `gradient-rose`).

**`audio-waveform-card`** — A waveform visualization card. Background `{colors.surface-card}`, rounded `{rounded.xl}`, padding 24px. Holds a play button + waveform glyph + voice metadata.

### 纸牌

**`feature-card`** — 2- 上层或 3- 上网格。背景 `{colors.surface-card}`文本中,请输入 `{colors.ink}`,四舍五入 `{rounded.xl}`, 编译 24px, 1px 细边线边界.

**`product-card-stack`** ——堆叠产品预览卡。背景 `{colors.surface-card}`,四舍五入 `{rounded.xl}`,不贴(孩子填充卡片边缘对接)。

**`testimonial-card`** ——引文卡。背景 `{colors.surface-card}`文本中,请输入 `{colors.body}`,四舍五入 `{rounded.xl}`, 编译 32px.

### 语音库

**`voice-row`** — Horizontal row in voice list. Background transparent, 1px hairline divider. Layout: 32px circular voice icon (`{component.voice-icon-circular}`) left, voice name + accent stack, optional preview button right.

**`voice-icon-circular`** — Background `{colors.surface-strong}`, rounded `{rounded.full}`, 32px diameter. Holds initials or voice glyph.

### 定价

**`pricing-tier-card`** — Background `{colors.surface-card}`, rounded `{rounded.xl}`, padding 32px, 1px hairline border.

**`pricing-tier-featured`** ——特色层次反转。 `{colors.surface-dark}`文本中,请输入 `{colors.on-dark}`形状相同,阴暗的反转。

### 窗体标记( T)

**`text-input`** — Background `{colors.surface-card}`, text `{colors.ink}`, rounded `{rounded.md}` (8px), padding 12px × 16px, height 44px, 1px `{colors.hairline-strong}` border. On focus, border thickens to 2px ink.

**`badge-pill`** — Background `{colors.surface-strong}`, text `{colors.ink}`, type `{typography.caption-uppercase}`, rounded `{rounded.pill}`, padding 4px × 10px.

### 中导/页脚

**`cta-band`** — Pre-footer. Background `{colors.canvas}`, centered display headline in `{typography.display-lg}`, single ink pill CTA. 96px padding.

**`footer`** — Closing footer. Background `{colors.canvas}`, text `{colors.body}`. 5-column link list. 64×48px padding.

**`footer-link`** — Background transparent, text `{colors.body}`, type `{typography.body-sm}`.


## 设计建议与禁忌

### 执行
- 准备金 `{colors.primary}` 初级CTA(胶囊形)
- 使用 Waldenburg 字重轻 300 每一个显示标题, 绝不是粗体。
- 使用 Inter 时 间 +0.15-0.18px 跟踪身体——编辑方言.
- 仅使用大气梯度圆柱(mint/peach/lavender/sky/rose)作为装饰.
- Use the pill shape for every CTA and badge.

### Don't
- Don't introduce a saturated brand action color. Ink pill is the only CTA color.
- Don't bold display copy. Display sits at weight 300 — bolding shifts the brand voice from editorial to consumer-marketing.
- Don't use gradient orbs as button fills, text colors, or component backgrounds. They are pure atmosphere.
- Don't use sharp `{rounded.none}` (0px) on CTAs. Pill geometry is the brand button.
- Don't drop body Inter to weight 300 to match Waldenburg — body stays at 400/500 for legibility.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA color is what appears on actual product CTAs.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 640px | 首屏h( 首屏h)1 64→32px; 特性卡 1-上; 导航汉堡包; 梯度圆形缩小。 |
| 平板 | 640–1024px | 首屏h( 首屏h)1 48px; 特性卡 2- 起来 |
| 桌面 | 1024–1280px | 完全首屏h( 首屏h)1 64px; 特性卡 3- 起来 |
| 宽 | > 1280px | 内容上限, 时间 1200px. |

### 触控区域
- 初药 40px 高度——在WCAG AA,为AAA加注.
- 语音图标圆圈 32px ——加字行创建有效 48px 电磁带

### 折叠战略
- 顶端导航切换到下面的汉堡包 768px.
- 特性 grid: 3-up → 2-up → 1-up.
- 渐变圆形在每一个断点上都降低直径,但永不消失.


## 迭代指南

1. 一次集中关注单个组件.
2. 默认 CTAs 至 `{rounded.pill}`。卡片使用量 `{rounded.xl}` (16px).
3. 变体作为单独的条目存在.
4. 使用 `{token.refs}` 到处都是,从不内含六分法。
5. 霍弗州从未有文献记载.
6. Waldenburg 300 用于展示, Inter 400/500 给身体。
7. 渐变圆形被测量到大气装饰.


## 已知缺口

- Waldenburg 是一种特许型号; EB Garamond / GT sectra 被记录为代用品。
- 动画计时(orb 漂移,波形脉冲,首屏入口) 出镜.
- 产品表面(语音库编辑器,代理操场)仅通过营销模型部分捕获.
- 形式验证状态超出焦点,在捕获的表面看不到。

## 设计词元原值

A voice-AI brand whose marketing surfaces read like a quietly editorial print magazine. The base canvas is off-white (`#f5f5f5`) holding warm near-black ink (`#292524`); the brand voltage is photographic, not chromatic — soft pastel atmospheric gradient orbs (mint → peach → lavender → sky) drift through the page as the only "color" moments. Display runs Waldenburg Light at weight 300 — the editorial signature. Inter carries body, navigation, captions. CTAs are subtle: a near-black ink pill is the primary, a transparent outline is the secondary. The brand trusts atmospheric photography and modest type weights to do all of the brand work; there is no neon accent, no saturated CTA color, no developer-tools dark canvas.

```yaml
---
version: alpha
name: ElevenLabs-design-analysis
description: A voice-AI brand whose marketing surfaces read like a quietly editorial print magazine. The base canvas is off-white (`#f5f5f5`) holding warm near-black ink (`#292524`); the brand voltage is photographic, not chromatic — soft pastel atmospheric gradient orbs (mint → peach → lavender → sky) drift through the page as the only "color" moments. Display runs Waldenburg Light at weight 300 — the editorial signature. Inter carries body, navigation, captions. CTAs are subtle: a near-black ink pill is the primary, a transparent outline is the secondary. The brand trusts atmospheric photography and modest type weights to do all of the brand work; there is no neon accent, no saturated CTA color, no developer-tools dark canvas.

colors:
  primary: "#292524"
  primary-active: "#0c0a09"
  ink: "#0c0a09"
  body: "#4e4e4e"
  body-strong: "#292524"
  muted: "#777169"
  muted-soft: "#a8a29e"
  hairline: "#e7e5e4"
  hairline-soft: "#f0efed"
  hairline-strong: "#d6d3d1"
  canvas: "#f5f5f5"
  canvas-soft: "#fafafa"
  canvas-deep: "#0c0a09"
  surface-card: "#ffffff"
  surface-strong: "#f0efed"
  surface-dark: "#0c0a09"
  surface-dark-elevated: "#1c1917"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#a8a29e"
  gradient-mint: "#a7e5d3"
  gradient-peach: "#f4c5a8"
  gradient-lavender: "#c8b8e0"
  gradient-sky: "#a8c8e8"
  gradient-rose: "#e8b8c4"
  semantic-error: "#dc2626"
  semantic-success: "#16a34a"

typography:
  display-mega:
    fontFamily: "'Waldenburg', 'Times New Roman', serif"
    fontSize: 64px
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: -1.92px
  display-xl:
    fontFamily: "'Waldenburg', serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: -0.96px
  display-lg:
    fontFamily: "'Waldenburg', serif"
    fontSize: 36px
    fontWeight: 300
    lineHeight: 1.17
    letterSpacing: -0.36px
  display-md:
    fontFamily: "'Waldenburg', serif"
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.13
    letterSpacing: -0.32px
  display-sm:
    fontFamily: "'Waldenburg', serif"
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: 0
  title-md:
    fontFamily: "'Inter', sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  title-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.44
    letterSpacing: 0.18px
  body-md:
    fontFamily: "'Inter', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.16px
  body-strong:
    fontFamily: "'Inter', sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.16px
  body-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: 0.15px
  caption:
    fontFamily: "'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "'Inter', sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.96px
    textTransform: uppercase
  button:
    fontFamily: "'Inter', sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "'Inter', sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  base: 16px
  md: 20px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 9px 19px
    height: 40px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    padding: 96px
  gradient-orb-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xxl}"
    padding: 32px
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 24px
  product-card-stack:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 0
  voice-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 12px 0
  voice-icon-circular:
    backgroundColor: "{colors.surface-strong}"
    rounded: "{rounded.full}"
    size: 32px
  pricing-tier-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  pricing-tier-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 44px
  badge-pill:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  cta-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: 96px
  testimonial-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  audio-waveform-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 24px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: 64px 48px
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
---
```
