# Expo · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Expo's marketing site reads like a quietly-confident React-Native developer platform. The base canvas is **pure white** (`{colors.canvas}` — #ffffff) with a soft **sky-blue gradient atmospheric wash** behind the hero band. Near-black ink `{colors.ink}` (#171717) carries body and display alike. The single brand voltage is **pure black** (`{colors.primary}` — #000000) for primary CTAs — minimal and editorial-feeling. A small blue text-link accent (`{colors.text-link}` — #0d74ce) is reserved for inline body links, never as a CTA.

Type runs **Inter** as the single sans family at modest weights (display 600, body 400). JetBrains Mono carries every code surface. No custom typeface — the brand trusts Inter's editorial neutrality.

品牌最强的视觉标志是 **设备模拟首屏** ——一个中心MacBook + iPhone 复合材料显示真实性 Expo 平面( 微米)Expo 工作室,EAS 构建仪表板, Expo Go simulator)——在天蓝色梯度大气洗涤上,复合材料是页的界面框架而不是插图.

**关键特征 :**
- 纯白页面底色,只有首屏才有天空蓝色梯度大气背景.
- 单次初级CTA:纯黑胶囊形 `{rounded.md}` (8px)——紧凑开发者-工具方言.
- Text-link 蓝色( B)`{colors.text-link}`)只用于内置链接——从未在CTA上.
- Inter as the single sans family — no custom display typeface.
- JetBrains Mono 每一个代码表面。
- 设备模拟首屏与真实 Expo 产品表面是品牌界面框架.
- 细边线+软滴深度;首屏外无大气品牌装饰.
- 96px 节奏。


## 配色

### 品牌色与强调色
- **Black** (`{colors.primary}` — #000000): Primary CTA fill. Used scarcely.
- **黑色活动** (`{colors.primary-active}` — #1a1a1a:新闻州.
- **文字链接蓝色** (`{colors.text-link}` — #0d74ce: 内置体链接在长式复制中. 范围狭小——从不出现在CTAs上.
- **法律链接蓝** (`{colors.text-link-secondary}` — #476cff: 法律副本页脚内置链接.
- **亮色青色( 浅色青色)** (`{colors.accent-link-bright}` — #47c2ff: 曾经非常少用文件部件链接 。

### 界面表面
- **页面底色** (`{colors.canvas}` — #ffffff:纯白页楼.
- **软画帘** (`{colors.canvas-soft}` — #fafafa: 转弯的带。
- **表面卡片** (`{colors.surface-card}` — #ffffff:纯白牌.
- **表面坚固** (`{colors.surface-strong}` — #f0f0f3:徽章,生态系统瓦片,二级按钮.
- **表面暗色( T)** (`{colors.surface-dark}` — #171717:暗色特征卡,代码块,IDE模型,特色定价.
- **表面暗线** (`{colors.surface-dark-elevated}` — #1a1a1a:暗牌内部一个步骤轻点.

### 大气后投弃
- **Sky Light** (`{colors.gradient-sky-light}` — #cfe7ff) + **Sky Mid** (`{colors.gradient-sky-mid}` — #a8c8e8): The soft sky-blue gradient wash behind the homepage hero only. Not a brand action color.

### Hairlines
- **细边线** (`{colors.hairline}` — #f0f0f3: 默认 1px 分数。
- **柔软的细边线** (`{colors.hairline-soft}` — #f5f5f7:轻分者.
- **发条坚固** (`{colors.hairline-strong}` — #dcdee0: 更强的面板大纲.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — #171717:显示,身体强调.
- **体质** (`{colors.body}` — #60646c: 默认的运行文本——略凉灰色.
- **Body Strong** (`{colors.body-strong}` — #171717): Same as ink.
- **静音** (`{colors.muted}` — #999999: 字幕组.
- **静音软体** (`{colors.muted-soft}` — #cccccc: 已禁用文本。
- **小学** (`{colors.on-primary}` — #ffffff:黑色CTA上的白文本.
- **黑暗时** (`{colors.on-dark}` — #ffffff:黑牌上白文本.
- **暗软** (`{colors.on-dark-soft}` — #b0b4ba: 哑巴在黑暗中关闭白色。

### 语义色
- **警告** (`{colors.accent-warning}` — #ab6400: 文档提示内有警告文本 。
- **预览** (`{colors.accent-preview}` — #8145b5:"预览"标签颜色.
- **Success** (`{colors.semantic-success}` — #16a34a): Confirmation.
- **错误** (`{colors.semantic-error}` — #eb8e90:验证错误.


## 字体排版

### 字体族
**Inter** 是一个单桑家族 跨越每个文本角色。 **JetBrains Mono** 携带每个代码表面。 退后 : `-apple-system, system-ui, sans-serif`.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 64px | 600 | 1.05 | -1.92px | Homepage hero h1 |
| `{typography.display-xl}` | 48px | 600 | 1.1 | -1.44px | Subsidiary heroes |
| `{typography.display-lg}` | 36px | 600 | 1.15 | -1.08px | 科长 |
| `{typography.display-md}` | 28px | 600 | 1.2 | -0.84px | 副科长 |
| `{typography.display-sm}` | 22px | 600 | 1.25 | -0.5px | 纸牌组标题 |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | 构成部分标题 |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | 列表标签 |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 默认正文 |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body |
| `{typography.caption}` | 13px | 400 | 1.4 | 0 | 图片标题 |
| `{typography.caption-uppercase}` | 11px | 600 | 1.4 | 0.88px | 区域标签、徽章 |
| `{typography.code}` | 13px | 400 | 1.5 | 0 | 代码块—— JetBrains Mono |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | CTA 标签 |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav 菜单 |

### 原则
- **显示字重停留在 600** -自信但不会爆炸 Inter 时 间 600 读取较 700.
- **负数 letter-spacing 显示** — -0.5px 改为: -1.92px 追踪。
- **JetBrains Mono 每一个代码表面。**

### 替代字体
Inter 和 JetBrains Mono 两种方法都可以免费使用——系统直接使用。


## 布局

### 间距系统
- **基部单位:** 4px.
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.base}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **科 科 padding:** 96px.

### 网格与容器
- 最大内容 width: ~1200px.
- 编辑机构: 12- 列网格 - 列网格 - Colind grade.
- Feature card grids: 2-up at desktop for hero splits, 3-up for benefit grids.
- 生态系统瓦 grid: 8-up at desktop.
- Footer: 5-column at desktop.

### 留白规则
慷慨的编辑节奏。 白帆不会与首屏的梯度天洗相竞争; 密集工作流程部分内的卡片坐得近( )16-24px —— —— —— —— 。


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 平面( 扫描) | `{colors.canvas}` (#ffffff) | 车体带,页脚 |
| 纸牌 | `{colors.surface-card}` (#ffffff) | 内容卡 |
| 细边线边框 | 1px `{colors.hairline}` | 纸牌轮廓 |
| 软滴 | `0 4px 12px rgba(0, 0, 0, 0.04)` | 单层阴影卡 |
| Atmospheric gradient | Sky-blue radial wash | Hero backdrop only |
| 黑暗反转 | `{colors.surface-dark}` (#171717) | 暗色特征卡、代码块、 特征定价 |

### 装饰性深度
- **Sky-blue gradient backdrop** in the hero only — atmospheric depth without claiming to be a brand color.
- **Device mockup composite** as page chrome — MacBook + iPhone showing real Expo dev surfaces.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 预留额 |
| `{rounded.xs}` | 4px | 内置标签 |
| `{rounded.sm}` | 6px | 压缩行 |
| `{rounded.md}` | 8px | CTA 按钮、 窗体输入、 生态系统瓦片 |
| `{rounded.lg}` | 12px | 特性卡、代码块、定价等级 |
| `{rounded.xl}` | 16px | 设备模拟卡 |
| `{rounded.xxl}` | 24px | 较大的大气卡(稀有) |
| `{rounded.pill}` | 9999px | 仅标牌 |
| `{rounded.full}` | 9999px | 远征车牌(稀有) |

紧凑开发者- 电子辐射仪 - 8px 反恐协定, 12px 牌,胶囊形几何是专为徽章保留的,从来不是CTA.


## 组件

### 顶端导航

**`top-nav`** — Background `{colors.canvas}`, text `{colors.ink}`, height 64px. Layout: Expo wordmark left, primary horizontal menu (Tools / Workflows / EAS / Pricing / Docs / Showcase), Sign In + Get started CTA right.

### 按钮

**`button-primary`** 纯黑胶囊形。 `{colors.primary}`文本中,请输入 `{colors.on-primary}`类型 `{typography.button}` (14px / 500), 贴 10px × 18px高度( 高度) 40px,四舍五入 `{rounded.md}` (8px).

**`button-primary-active`** ——新闻状况。背景 `{colors.primary-active}`.

**`button-secondary`** ——白牌随笔. 1px hairline-strong 边框。背景 `{colors.surface-card}`文本中,请输入 `{colors.ink}`, 1px `{colors.hairline-strong}` 边框。

**`button-tertiary-text`** — Inline blue text link. Background transparent, text `{colors.text-link}`.

### 首屏设备杂交( D)

**`hero-band`** — Background `{colors.canvas}` with a soft sky-blue gradient wash behind the centered headline. Display headline in `{typography.display-mega}` (64px / 600 / -1.92px), subhead in `{typography.body-md}`, single primary CTA, then below — the device mockup composite.

**`device-mockup-card`** — A layered MacBook + iPhone composite showing real Expo dev surfaces. Background `{colors.surface-card}`, rounded `{rounded.xl}`. The MacBook holds the EAS dashboard or Expo Studio screenshot; the iPhone overlay shows the running app in Expo Go. This is the page chrome.

### 纸牌

**`feature-card`** — Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.title-md}`, rounded `{rounded.lg}`, padding 24px, 1px `{colors.hairline-strong}` border.

**`feature-card-dark`** — Dark variant. Background `{colors.surface-dark}`, text `{colors.on-dark}`. Same shape, dark inversion.

**`workflow-step-card`** — Step in the "Get your app on every device" workflow row. Background `{colors.surface-card}`, text `{colors.body}`, rounded `{rounded.lg}`, padding 20px. Layout: 32px square `{component.workflow-step-icon}` + step number + label + body.

**`workflow-step-icon`** — Square plate. Background `{colors.surface-strong}`, rounded `{rounded.md}`, 32px size.

**`testimonial-card`** ——引文卡。背景 `{colors.surface-card}`文本中,请输入 `{colors.body}`,四舍五入 `{rounded.lg}`, 编译 24px.

### 代码和 IDE

**`code-block`** ——内置代码块。背景 `{colors.surface-dark}`文本中,请输入 `{colors.on-dark}` 输入 `{typography.code}` (JetBrains Mono 13px),四舍五入 `{rounded.lg}`, 编译 20px。在黑暗中读取白文本。

**`ide-mockup-card`** ——Stylized IDE 模拟。背景 `{colors.surface-dark}`,四舍五入 `{rounded.lg}`。多面板编辑器+终端预览。

### 定价

**`pricing-tier-card`** 标准定价等级。 `{colors.surface-card}`,四舍五入 `{rounded.lg}`, 编译 32px, 1px `{colors.hairline-strong}` 边框。

**`pricing-tier-featured`** — Featured tier. Background `{colors.surface-dark}`, text `{colors.on-dark}`. Same shape, dark inversion.

### 生态系统

**`ecosystem-tile`** — Square logo plate for ecosystem partner logos (TypeScript, React, Sentry, etc.). Background `{colors.surface-card}`, rounded `{rounded.md}`, 64px size, 1px `{colors.hairline}` border.

### 窗体标记( T)

**`text-input`** — Background `{colors.surface-card}`, text `{colors.ink}`, rounded `{rounded.md}` (8px), padding 12px × 16px, height 44px, 1px `{colors.hairline-strong}` border. Focus thickens border to 2px ink.

**`badge-pill`** — Small uppercase pill. Background `{colors.surface-strong}`, text `{colors.ink}`, type `{typography.caption-uppercase}`, rounded `{rounded.pill}`, padding 4px × 10px.

### 中导/页脚

**`cta-band`** — Pre-footer band. Background `{colors.canvas}`, centered display headline in `{typography.display-lg}`, single black pill CTA. 96px padding.

**`footer-light`** — Closing white footer. Background `{colors.canvas}`, text `{colors.body}`. 5-column link list. 64×48px padding.

**`footer-link`** — Background transparent, text `{colors.body}`, type `{typography.body-sm}`.


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` (黑色) 初级CTA。
- 使用 `{colors.text-link}` (蓝色)仅用于内置体链接——从不在CTA或按钮上.
- 设定每一次 CTA 时间 `{rounded.md}` (8px) ——开发者方言.
- 使用 Inter 字重 600 用于展示, 400 给身体。
- 将每个代码表面都显示在 JetBrains Mono.
- 给首屏配上设备-模具复合材料——是页染色体.

### 应避免的做法
- Don't introduce a saturated brand action color. Black is the only CTA fill.
- 少用蓝( 蓝)`{colors.text-link}`)在CTA上,仅内置链接.
- Don't drop display below weight 600 or above 700.
- 止痛药上不要用满药——丸只用徽章.
- 应避免的做法 replicate 首屏外的天空蓝度背景。
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA is what appears on actual page CTAs.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 640px | 首屏h( 首屏h)1 64→32px; 设备模拟 → 单 iPhone 屏幕; 特性网格 1- 上; 航海汉堡。 |
| 平板 | 640–1024px | 首屏h( 首屏h)1 48px; 设备模拟压缩; 特性网格 2- 起来 |
| 桌面 | 1024–1280px | 完全首屏h( 首屏h)1 64px; 完整的 MacBook + iPhone 复合材料; 特性网格 3- 起来 |
| 宽 | > 1280px | 内容上限, 时间 1200px. |

### 触控区域
- 初级CTA 时间 40px 高度——在WCAG AA,为AAA加注.
- Search input 44px — at AAA.

### 窄屏布局调整
- 顶端导航切换到下面的汉堡包 768px.
- 设备模拟MacBook + iPhone在移动中崩溃为单个iPhone预览.
- 特性 grid: 3-up → 2-up → 1-up.
- 生态系统瓦 grid: 8-up → 4-up → 3-up → 2-up.


## 迭代指南

1. 一次集中关注单个组件.
2. 默认 CTAs 至 `{rounded.md}` (8px。卡片使用( ) `{rounded.lg}` (12px).
3. 变体作为单独的条目存在.
4. 使用 `{token.refs}` 到处都是,从不内含六分法。
5. 霍弗州从未有文献记载.
6. Inter 600 用于展示, Inter 400 给身体。 JetBrains Mono 密码上
7. 黑色保持唯一的CTA颜色; text-link 蓝色只保留内含。


## 已知缺口

- Inter 和 JetBrains Mono 免费——不考虑许可证发放问题。
- 动画计时(device smoup pallax,首屏入口) 出镜.
- 应用中的表面(EAS仪表板互动, Expo 模拟器)通过营销模型只捕获了部分.
- 形式验证状态超出焦点,在捕获的表面看不到。

## 设计词元原值

A React Native developer-platform whose marketing site reads like a quietly-confident infrastructure brand. The base canvas is pure white with a soft sky-blue gradient atmospheric wash behind the hero; near-black ink (`#171717`) carries body and display alike. The single brand voltage is **pure black** (`#000000`) for primary CTAs — minimal and editorial-feeling, paired with a small blue text-link accent (`#0d74ce`) reserved for inline body links. Type pairs Inter at modest weights (display 600, body 400) with JetBrains Mono on every code surface. The brand's strongest visual signature is the **device-mockup hero** — a centered MacBook + iPhone composite showing real Expo dev surfaces — over the gradient sky wash.

```yaml
---
version: alpha
name: Expo-design-analysis
description: A React Native developer-platform whose marketing site reads like a quietly-confident infrastructure brand. The base canvas is pure white with a soft sky-blue gradient atmospheric wash behind the hero; near-black ink (`#171717`) carries body and display alike. The single brand voltage is **pure black** (`#000000`) for primary CTAs — minimal and editorial-feeling, paired with a small blue text-link accent (`#0d74ce`) reserved for inline body links. Type pairs Inter at modest weights (display 600, body 400) with JetBrains Mono on every code surface. The brand's strongest visual signature is the **device-mockup hero** — a centered MacBook + iPhone composite showing real Expo dev surfaces — over the gradient sky wash.

colors:
  primary: "#000000"
  primary-active: "#1a1a1a"
  text-link: "#0d74ce"
  text-link-secondary: "#476cff"
  ink: "#171717"
  body: "#60646c"
  body-strong: "#171717"
  muted: "#999999"
  muted-soft: "#cccccc"
  hairline: "#f0f0f3"
  hairline-soft: "#f5f5f7"
  hairline-strong: "#dcdee0"
  canvas: "#ffffff"
  canvas-soft: "#fafafa"
  surface-card: "#ffffff"
  surface-strong: "#f0f0f3"
  surface-dark: "#171717"
  surface-dark-elevated: "#1a1a1a"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#b0b4ba"
  gradient-sky-light: "#cfe7ff"
  gradient-sky-mid: "#a8c8e8"
  accent-warning: "#ab6400"
  accent-preview: "#8145b5"
  accent-link-bright: "#47c2ff"
  semantic-error: "#eb8e90"
  semantic-success: "#16a34a"

typography:
  display-mega:
    fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1.92px
  display-xl:
    fontFamily: "'Inter', sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.44px
  display-lg:
    fontFamily: "'Inter', sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -1.08px
  display-md:
    fontFamily: "'Inter', sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.84px
  display-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.5px
  title-md:
    fontFamily: "'Inter', sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "'Inter', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'Inter', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "'Inter', sans-serif"
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
    fontFamily: "'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "'Inter', sans-serif"
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
    rounded: "{rounded.md}"
    padding: 10px 18px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 9px 17px
    height: 40px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.text-link}"
    typography: "{typography.button}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    padding: 96px
  device-mockup-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 0
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  workflow-step-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 20px
  workflow-step-icon:
    backgroundColor: "{colors.surface-strong}"
    rounded: "{rounded.md}"
    size: 32px
  code-block:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 20px
  ide-mockup-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: 0
  pricing-tier-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
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
  ecosystem-tile:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.md}"
    size: 64px
  cta-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: 96px
  testimonial-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  footer-light:
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
