# Composio · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Composio's marketing site reads like a serious developer-infrastructure brand — closer to Vercel or Stripe Docs in atmosphere than to a typical AI-tools startup. The base canvas is a near-black `{colors.canvas}` (#0f0f0f) holding white type and a single voltage of **deep electric blue** (`{colors.primary}` — #0007cd) carrying every primary CTA, brand wordmark, and atmospheric spotlight glow that backs the homepage hero.

类型运行 **abcDiatype** 显示为单色的家族, 横跨显示、 身体、 导航和标题。 显示为重置 500 自信但并非爆炸性 代码块和终端模型切换到 JetBrains Mono.

The page rhythm is monolithic: dark canvas top to bottom with subtle elevation steps via card surfaces. The brand's strongest visual signature is a **four-pane terminal-style mockup** — a 2×2 grid of dark code/output panels with a central blue spotlight glow behind them.

**关键特征 :**
- Single accent: `{colors.primary}` (#0007cd) for primary CTAs, wordmark, spotlight glows.
- 单身桑氏家族: abcDiatype 携带除代码以外的所有设备( Q)JetBrains Mono).
- Dark monolithic canvas: `{colors.canvas}` runs top to bottom; depth from `{colors.surface-card}` and `{colors.surface-card-elevated}` brightness steps.
- 终端模拟首屏 : 2×2 代码/输出的网格是品牌签名。
- 紧凑胶囊形几何: CTAs at `{rounded.md}` (8px),不全胶囊形——开发者-工具方言.
- Spotlight-glow atmospheric backdrop: a radial blue glow centered behind hero content.
- 96px 节奏。


## 配色

### 品牌色与强调色
- **Composio 蓝色** (`{colors.primary}` — #0007cd:主CTAs,词标,聚光灯发光中心.
- **Composio 蓝色活动** (`{colors.primary-active}` — #0005a3:新闻州.
- **点光光光光光调色调** (`{colors.primary-glow}` — #1a26ff:光圈大气光圈内部使用的更亮蓝色.
- **青色青色调** (`{colors.accent-cyan}` — #00d4ff:在数据流可视化上进行分解.
- **紫色仙乐** (`{colors.accent-violet}` — #7b3aed: 仅存在于特定产品插图内.

### 界面表面
- **页面底色** (`{colors.canvas}` — #0f0f0f:页楼——近黑.
- **深层的页面底色** (`{colors.canvas-deep}` — #000000: 纯黑色,用于终端模拟网格和代码块.
- **表面卡片** (`{colors.surface-card}` — #181818: 默认内容卡.
- **地表卡升空** (`{colors.surface-card-elevated}` — #222222:终端面板,二级按钮.
- **表面坚固** (`{colors.surface-strong}` — #2a2a2a: 下拉菜单.

### Hairlines
- **细边线** (`{colors.hairline}` — #222222: 默认 1px 分数。
- **柔软的细边线** (`{colors.hairline-soft}` — #1a1a1a:轻分者.
- **发条坚固** (`{colors.hairline-strong}` — #333333: 更强的面板大纲.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — #ffffff: 显示头条.
- **体质** (`{colors.body}` — #a8a8a8: 默认的运行文本——软灰色.
- **Body Strong** (`{colors.body-strong}` — #ffffff): Same as ink.
- **静音** (`{colors.muted}` — #888888: 字幕,面包屑.
- **静音软体** (`{colors.muted-soft}` — #666666: 已禁用文本。
- **小学** (`{colors.on-primary}` — #ffffff:蓝色CTAs上的白文本.

### 语义色
- **成功** (`{colors.semantic-success}` — #33d17a:"在线","主动"指标.
- **错误** (`{colors.semantic-error}` — #ff4d4d:验证错误.


## 字体排版

### 字体族
系统运行 **abcDiatype** 各个文本角色的代码块切换到 **JetBrains Mono**。后退时 : `ui-sans-serif, system-ui, sans-serif`.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 72px | 500 | 1.05 | -2.16px | Homepage hero h1 |
| `{typography.display-xl}` | 56px | 500 | 1.05 | -1.68px | Subsidiary heroes |
| `{typography.display-lg}` | 44px | 500 | 1.1 | -1.32px | 科长 |
| `{typography.display-md}` | 32px | 500 | 1.15 | -0.96px | 副科长 |
| `{typography.display-sm}` | 24px | 500 | 1.25 | -0.5px | 纸牌组标题 |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | 构成部分标题 |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | 工具包卡片标题 |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 默认正文 |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body |
| `{typography.caption}` | 13px | 400 | 1.4 | 0 | 图片标题 |
| `{typography.caption-uppercase}` | 11px | 600 | 1.4 | 0.88px | 标签、警徽药 |
| `{typography.code}` | 13px | 400 | 1.5 | 0 | 代码块—— JetBrains Mono |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | CTA 避孕药标签 |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav 菜单 |

### 原则
- **显示字重停留在 500.** 自信但又不显露粗放.
- **abcDiatype 每一个角色。** 无法显示/ 身体家庭分裂 。
- **JetBrains Mono 每一个代码表面。**

### 替代字体
abcDiatype is a Lineto licensed typeface. Open-source substitute: **Inter** at weight 500 with letter-spacing -1.5%.


## 布局

### 间距系统
- **基部单位:** 4px.
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.base}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **科 科 padding:** `{spacing.section}` (96px),主要乐队.

### 网格与容器
- 最大内容 width: ~1200px.
- 编辑机构: 12- 列网格 - 列网格 - Colind grade.
- 终端模型 grid: 2×2 equal-size panes.
- 工具包 grid: 4-up at desktop, 2-up tablet, 1-up mobile.
- Footer: 5-column at desktop.

### 留白规则
暗色页面底色创造了自己的深度——白空间可以保持紧凑而不感到拥挤. 96px 带间; 24px 在一个乐队内的牌之间。


## 层次与深度

系统使用 **亮度阶梯高地**:表面在亮度中上升,而不是投放阴影。结合细微的光圈蓝色光线,这形成了一个聚焦的暗模式大气。

| 职等 | 治疗 | 使用 |
|---|---|---|
| 平面( 扫描) | `{colors.canvas}` (#0f0f0f) | 车体带,页脚 |
| 已撤销 | `{colors.canvas-deep}` (#000000) | 终端模拟网格背景, 代码块 |
| 纸牌 | `{colors.surface-card}` (#181818) | 默认内容卡 |
| 提高卡片 | `{colors.surface-card-elevated}` (#222222) | 终端窗格, 二级按钮 |
| 大气光芒 | 使用放射性梯度 `{colors.primary-glow}` | 首屏的聚光灯背景 |

### 装饰性深度
- **闪光闪耀的背景** ——以首屏内容为核心的射线蓝色梯度.
- **Terminal-pane 亮度梯级** — 2×2 模拟用途 canvas-deep 外侧+ surface-card-elevated 面板,你应该看看


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 预留额 |
| `{rounded.xs}` | 4px | 内置标签 |
| `{rounded.sm}` | 6px | 压缩行 |
| `{rounded.md}` | 8px | CTA 按钮, 窗体输入 |
| `{rounded.lg}` | 12px | 工具包卡、代码块、终端窗格 |
| `{rounded.xl}` | 16px | 特性卡、终端模拟网格 |
| `{rounded.pill}` | 9999px | 区标签徽章 |
| `{rounded.full}` | 9999px | 远征车牌(稀有) |

紧凑开发者- 电子辐射仪 - 8px 反恐协定, 12-16px 牌,信号是"开发工具"而不是"消费者品牌".


## 组件

### 顶端导航

**`top-nav-dark`** — Default top nav. Background `{colors.canvas}`, text `{colors.body-strong}`, height 64px. Layout: Composio wordmark left, primary horizontal menu (Product / Toolkits / Docs / Pricing / Customers / Blog), GitHub stars + Sign In + "Get started" right.

### 按钮

**`button-primary`** — The signature Composio Blue CTA. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}` (14px / 500), padding 10px × 18px, height 40px, rounded `{rounded.md}` (8px).

**`button-primary-active`** ——新闻状况。背景 `{colors.primary-active}`.

**`button-secondary-dark`** — Surface-elevated secondary. Background `{colors.surface-card-elevated}`, text `{colors.body-strong}`.

**`button-outline`** — Transparent 配合 1px hairline-strong 边框。

**`button-tertiary-text`** ——内含文本链接.

### 首屏与大气

**`hero-band`** — Homepage hero. Background `{colors.canvas}`, full-width display headline in `{typography.display-mega}` (72px / 500), subhead, two CTAs, and a spotlight-glow backdrop emanating from behind the centered terminal-mockup grid.

**`terminal-mockup-grid`** — The brand's strongest visual signature. 2×2 grid of dark code/output panels inside a `{rounded.xl}` (16px) container. Background `{colors.canvas-deep}`, padding 32px, gap 16px.

**`terminal-pane`** ——模拟网格内的个人代码/输出面板。 `{colors.surface-card}`文本中,请输入 `{colors.body}` 输入 `{typography.code}`,四舍五入 `{rounded.lg}` (12px), 贴 20px.

**`spotlight-glow-card`** ——大特色卡,其上方为中央显示头条,后面为光圈蓝色光芒. `{colors.surface-card}`文本中,请输入 `{colors.body-strong}` 输入 `{typography.display-md}`,四舍五入 `{rounded.xl}`, 编译 48px.

### 纸牌

**`feature-card`** — 3- 上方福利网格。 `{colors.surface-card}`文本中,请输入 `{colors.body}`类型 `{typography.title-md}`,四舍五入 `{rounded.xl}`, 编译 28px.

**`toolkit-card`** — 4-up toolkit grid (Slack, GitHub, Stripe, Notion, Linear, etc.). Background `{colors.surface-card}`, text `{colors.body-strong}`, type `{typography.title-sm}`, rounded `{rounded.lg}`, padding 20px. 40px square `{component.toolkit-icon}` top, toolkit name, one-line description.

**`toolkit-icon`** — Square icon plate. Background `{colors.surface-card-elevated}`, rounded `{rounded.md}`, 40px size.

**`testimonial-card`** ——引文卡。背景 `{colors.surface-card}`文本中,请输入 `{colors.body}`,四舍五入 `{rounded.lg}`, 编译 24px.

### 代码

**`code-block`** ——内置代码/边界块。背景 `{colors.canvas-deep}`文本中,请输入 `{colors.body}` 输入 `{typography.code}`,四舍五入 `{rounded.lg}`, 编译 20px.

### Forms

**`text-input`** — Background `{colors.surface-card}`, text `{colors.body-strong}`, rounded `{rounded.md}` (8px), padding 12px × 16px, height 44px.

**`search-input`** 相同表面和半径,较小的垫板, 40px 身高,高点

### 标记徽章( B)

**`badge-pill`** — Small uppercase pill. Background `{colors.surface-card-elevated}`, text `{colors.body-strong}`, type `{typography.caption-uppercase}`, rounded `{rounded.pill}`, padding 4px × 10px.

### 中导/页脚

**`cta-band-spotlight`** — Pre-footer band. Background `{colors.canvas}` with centered radial spotlight glow. Display headline + single primary CTA pill. 96px padding.

**`footer-dark`** — Closing footer. Background `{colors.canvas}`, text `{colors.body}`. 5-column link list. 64×48px padding.

**`footer-link`** — Background transparent, text `{colors.body}`, type `{typography.body-sm}`.


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` 用于初级CTA, 字签,和聚光灯光。
- Use `{rounded.md}` (8px) for every CTA — not full pills.
- 使用亮度阶梯进行高程;避免投影.
- 给每个首屏配上 中央的光圈蓝光光
- 渲染码、 CMI 命令 JetBrains Mono 途经 `{typography.code}`.
- 使用 2×2 终端-模拟网格作为主页首屏主播.

### 应避免的做法
- Don't introduce a secondary brand color. Cyan and violet are illustrative-only.
- Don't use full pills on CTAs.
- Don't drop display weight to 400.
- Don't add drop shadow tiers.
- Don't use canvas-deep (#000000) outside terminal/code surfaces.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA color is what appears on actual page CTAs.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 640px | 首屏h( 首屏h)1 72→36px; 终端模拟网格崩溃为单面板; 工具包网格 1- 上; 航海汉堡。 |
| 平板 | 640–1024px | 首屏h( 首屏h)1 56px; 终端模拟网格保留 2×2; 工具包网格 2- 起来 |
| 桌面 | 1024–1280px | 完全首屏h( 首屏h)1 72px; 满 2×2 终端模型; 工具包网格 4- 起来 |
| 宽 | > 1280px | 内容上限, 时间 1200px. |

### 触控区域
- 初级CTA 时间 40px 高度——在WCAG AA,为AAA加注.
- 搜索输入 : 40px.

### 窄屏布局调整
- 顶端导航切换到下面的汉堡包 768px.
- 终端模型 2×2 网格崩溃为移动上的单个窗格。
- 工具包 grid: 4-up → 2-up → 1-up.
- 首屏的光芒 停留在每一个断点上


## 迭代指南

1. 一次集中关注单个组件.
2. 默认 CTAs 至 `{rounded.md}` (8px。卡片使用( ) `{rounded.lg}` 或 `{rounded.xl}`.
3. 变式作为单独的条目在内部存在 `components:`.
4. 使用 `{token.refs}` 到处都是,从不内含六分法。
5. 霍弗州从未有文献记载.
6. abcDiatype 500 用于展示, 400/600 给身体。 JetBrains Mono 每一个代码表面。
7. Composio 蓝色仍然稀少。


## 已知缺口

- abcDiatype is licensed; Inter is the substitute.
- 动画时间超出范围.
- 产品表面(toolkit仪表板,代理游乐场)位于登录墙后.
- 形式验证状态超出焦点,在捕获的表面看不到。

## 设计词元原值

A developer-tools brand for AI-agent tool integration whose marketing surfaces lean into a dark, technical aesthetic with a single deep-electric-blue voltage (`#0007cd`). The page floor is near-black (`#0f0f0f`); cards float above on subtle gray-tinted surfaces. abcDiatype carries display and body in a single sans family with weights 400-600. The brand's strongest visual signature is a four-pane terminal-style mockup (a 2×2 grid of dark code/output panels) with a central blue spotlight glow — used as the homepage hero anchor.

```yaml
---
version: alpha
name: Composio-design-analysis
description: A developer-tools brand for AI-agent tool integration whose marketing surfaces lean into a dark, technical aesthetic with a single deep-electric-blue voltage (`#0007cd`). The page floor is near-black (`#0f0f0f`); cards float above on subtle gray-tinted surfaces. abcDiatype carries display and body in a single sans family with weights 400-600. The brand's strongest visual signature is a four-pane terminal-style mockup (a 2×2 grid of dark code/output panels) with a central blue spotlight glow — used as the homepage hero anchor.

colors:
  primary: "#0007cd"
  primary-active: "#0005a3"
  primary-glow: "#1a26ff"
  ink: "#ffffff"
  body: "#a8a8a8"
  body-strong: "#ffffff"
  muted: "#888888"
  muted-soft: "#666666"
  hairline: "#222222"
  hairline-soft: "#1a1a1a"
  hairline-strong: "#333333"
  canvas: "#0f0f0f"
  canvas-deep: "#000000"
  surface-card: "#181818"
  surface-card-elevated: "#222222"
  surface-strong: "#2a2a2a"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  accent-cyan: "#00d4ff"
  accent-violet: "#7b3aed"
  semantic-error: "#ff4d4d"
  semantic-success: "#33d17a"

typography:
  display-mega:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -2.16px
  display-xl:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -1.68px
  display-lg:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.32px
  display-md:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.96px
  display-sm:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.5px
  title-md:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.88px
    textTransform: uppercase
  code:
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "'abcDiatype', ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
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
  top-nav-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-strong}"
    typography: "{typography.nav-link}"
    height: 64px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary-dark:
    backgroundColor: "{colors.surface-card-elevated}"
    textColor: "{colors.body-strong}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
    height: 40px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.body-strong}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 9px 17px
    height: 40px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.button}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-strong}"
    typography: "{typography.display-mega}"
    padding: 96px
  terminal-mockup-grid:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.body-strong}"
    typography: "{typography.code}"
    rounded: "{rounded.xl}"
    padding: 32px
  terminal-pane:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 20px
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 28px
  toolkit-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body-strong}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.lg}"
    padding: 20px
  toolkit-icon:
    backgroundColor: "{colors.surface-card-elevated}"
    rounded: "{rounded.md}"
    size: 40px
  spotlight-glow-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body-strong}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: 48px
  code-block:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.body}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 20px
  badge-pill:
    backgroundColor: "{colors.surface-card-elevated}"
    textColor: "{colors.body-strong}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body-strong}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 44px
  search-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body-strong}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 16px
    height: 40px
  cta-band-spotlight:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-strong}"
    typography: "{typography.display-lg}"
    padding: 96px
  testimonial-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  footer-dark:
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
