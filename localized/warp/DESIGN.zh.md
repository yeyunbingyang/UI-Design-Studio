# Warp · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Warp 是集成 AI 代理的终端开发环境。营销页使用贯穿页面的暖深色背景，底色 `{colors.canvas}`（`#2b2622`）在 oklch 色彩体系中带轻微褐色倾向。文字主要采用 Inter，阅读体验接近开发者编辑器的阅读模式。

装饰保持克制。首屏用两张截图分别展示代理与终端模式，下方以偏暖的表面承载合作伙伴标识（Anthropic / OpenAI / Google / Stanford）。随后是带肖像的推荐语和媒体报道列表，页尾提供 Mac / Linux / Windows 下载卡片。页面主要依靠终端截图和产品信息呈现内容。

首屏采用 64 px 的 Inter，400 字重，字距为 `-1.6px`。代码块用等宽字体 DM Mono（monospace），部分编辑式文字使用 Instrument Serif 斜体。正文为 16 px 的 Inter，line-height 为 1.5。

**关键特征 :**
- 暖白主色 `{colors.primary}`（`#f7f5f0`）同时用于页面文字和 button-primary 底色，承担整套界面的强调角色。
- 页面使用偏褐的暖深底 `{colors.canvas}`（`#2b2622`），形成统一的品牌基调。
- 按钮使用小圆角 3 / 4 px。原文记载其比例为 1 / 2×，并列出 `{rounded.md}` 的基准值 4 px。全圆角 `{rounded.full}` 用于图标容器。
- 无衬线 Inter 和等宽 DM Mono 是基础字体组合，Instrument Serif 偶尔以斜体用于编辑式排版。
- 终端界面示意是贯穿页面的主要视觉素材。
- 中性色统一略偏暖，正文和分隔线也保留这一色调。


## 配色

### 品牌色与强调色
- **暖白主色**（`{colors.primary}`，`#f7f5f0`）用于 button-primary 底色、页面默认文字和品牌字标，承担品牌识别。

### 界面表面
- **页面底色**（`{colors.canvas}`，`#2b2622`）由 `oklch(22.0% 0.004 84.6)` 换算，呈略偏褐的暖深色。
- **柔和深底**（`{colors.canvas-soft}`，`#383330`）用于卡片、界面示意的外框及合作伙伴标识图块。
- **细分隔线**（`{colors.hairline}`，`#3f3a36`）用于深色表面的 1 px 实线。

### 文字颜色
- **主文字色**（`{colors.ink}`，`#f7f5f0`）用于页面默认文字，与暖白主色一致。
- **强调正文色**（`{colors.body-strong}`，`#dad2c1`）用于中等强调的正文。
- **次级正文色**（`{colors.body}`，`#c9c0ad`）用于图注、辅助说明和媒体报道列表。
- **弱文字色**（`{colors.mute}`，`#aea69c`）由 `oklch(71.5% 0.008 84.6)` 换算。用于时间戳、小字和页脚次要内容。

### 语义色
营销页的校验提示沿用统一的暖白色。错误、警告和成功等语义色由终端应用内部定义。


## 字体排版

### 字体族
Three faces ladder the system:
1. **Inter** 用于每个显示、身体、按钮、链接和标签角色。重量 400 / 500 与品牌的"一起使用"Inter 倒背"自定义面作为比量兼容的系统倒背.
2. **DM Mono** for terminal mockups, command snippets, and code blocks. Weight 400 only. Loaded as `--font-dm-mono`.
3. **Instrument Serif** for occasional editorial italic moments — rare on the marketing surface, but documented as a third face for emphasised tagline-style phrases. **Abel** is also loaded as a fourth fallback for headline emphasis.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 70.4px | -1.6px | 首屏头条(").Warp ”)。 |
| `{typography.display-lg}` | 48px | 400 | 52.8px | -1.2px | 科头条. |
| `{typography.display-md}` | 32px | 500 | 40px | -0.8px | Sub-section displays. |
| `{typography.display-sm}` | 24px | 500 | 32px | -0.4px | 牌名和领衔牌的强调. |
| `{typography.display-serif}` | 48px | 400 | 52px | -0.5px | Instrument Serif 斜体编辑部的瞬间 |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | 领头段落。 |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | 默认身体. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | 0 | 粗体内脏. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | 身次第身. 师曰. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | 0 | 导航链接/按钮标签 。 |
| `{typography.caption}` | 12px | 400 | 16px | 0 | 说明,精细的打印。 |
| `{typography.code}` | 13px | 400 | 18px | 0 | 终端模拟机身. |
| `{typography.code-md}` | 14px | 400 | 20px | 0 | 内置命令片段 。 |
| `{typography.button-md}` | 14px | 500 | 20px | 0 | 扣子标签. |

### 原则
- **首屏显示字重 400** ——品牌读作安静自信,而不是广告牌.
- **负追踪是声音的一部分.** `-1.6 px` 时 间 64 px ,通过显示级别缩小。
- **Inter 说明, DM Mono 技术方面。** 严格角色分离.

### 替代字体
三个面孔都开着或者可以自由装入:
- **Inter** 直接从 Google 字体装入或 Vercel- 主持CDN(英语:CDN).
- **DM Mono** ——Google字体开源.
- **Instrument Serif** ——Google字体开源.


## 布局

### 间距系统
- **基地单位**: 4 px (偶尔有) 10 px 和 6 px 按钮绑定值 。
- **脚本**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 10 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px.
- **分区编栏**: 首屏/ 内容带使用 `{spacing.5xl}` 96 px 。在桌面上。
- **纸牌内部**: 牌坐着 `{spacing.xl}` 24 px.

### 网格与容器
- 营销内容中心,大约 1200 px 宽度。
- Hero: 2-column at desktop (split between two terminal screenshots), stacks at mobile.
- 合作伙伴标志 : 5- 收尾的弹性排。
- 下载牌 : 3- 上桌面(Mac / Linux / Windows), 1- 移动。

### 响应式布局

#### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 768px | 首屏堆积物; 1- 上网格; 导航汉堡。 |
| 平板 | 768–1023px | 2- 电网上 |
| 桌面 | ≥ 1024px | 完全首屏分裂; 3- 上下下载的瓷砖。 |

#### 触控区域
按钮渲染到 ~36 px 高( 高)8 px 垂直粘贴+ 20 px line-height)通过额外的垫板与WCAG相遇,移动充气区 44 × 44 px 楼层。

#### 窄屏布局调整
- Nav: full link row + Sign in / Download right cluster at desktop. Hamburger at mobile.
- 首屏终端-模具拆分:在移动时垂直堆栈.
- Press / job rows: full-width single column; stay legible at all widths.

#### 图片适配
- **终端模型**: 以暗卡形式, 并使用内部实际的终端 UI( 暖页面底色 + 彩色语法) 。 光谱比 ~3:2.
- **合伙人标志**: 暗片牌上的单色SVG.
- **证词肖像**: 1:1 内侧正方形作物 `{rounded.md}` 硬币卡。


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default for hero band. |
| 职等 1 —— 细边线 | 1 px 固态 `{colors.hairline}` 边框 `{colors.canvas-soft}`. | 默认卡染色体. |
| Level 2 — Inset Card | Canvas-soft fill against canvas background with 1 px hairline. | Mockup cards, download tiles, testimonial cards. |

The brand uses surface-contrast and hairline borders for elevation; soft drop-shadows do not appear in the marketing surface.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 满血乐队. |
| `{rounded.xxs}` | 1px | 紧紧的文字指示器。 |
| `{rounded.xs}` | 2px | 内置的非常小的芯片。 |
| `{rounded.sm}` | 3px | 默认按钮半径——极紧. |
| `{rounded.md}` | 4px | 贺卡染色体(品牌) `--radius` ), 页面存档备份,存于互联网档案馆. |
| `{rounded.lg}` | 6px | 略大牌(一说). |
| `{rounded.pill}` | 9999px | 图标容器,状态胶囊形。 |

### 图片形状
- 终端模型 : ~3:2 内 `{rounded.md}` 硬币卡。
- 合伙人标识: 一致的单色 SVG 24 px 高在瓷砖内卡。
- 证相画像: 1:1 内置正方形 `{rounded.md}`.


## 组件

### 按钮

**`button-primary`** 暗布上的越白CTA
- Background `{colors.primary}` (off-white), text `{colors.on-primary}` (warm dark), label `{typography.button-md}`, padding `{spacing.sm} {spacing.lg}`, shape `{rounded.sm}` 3 px. Tight.

**`button-secondary-ghost`** ——鬼式二级用于导航和三级动作.
- Background `{colors.canvas}`, text `{colors.ink}`, no border, same typography / shape.

**`button-icon-circular`** - 电话 circular 图标容器。
- Background `{colors.canvas}`, ink icon, shape `{rounded.full}`. Used for nav controls (search, theme).

### 卡片与容器

**`card-content`**：默认内容卡，使用 canvas-soft 底色。
- 底色为 `{colors.canvas-soft}`，文字为 `{colors.ink}`，使用 1 px 实线边框 `{colors.hairline}`、内边距 `{spacing.xl}` 和圆角 `{rounded.md}`。

**`card-mockup`**：终端截图示意卡。
- 容器样式沿用 `card-content`。卡内文字使用 `{typography.code}`（DM Mono）。

**`download-tile`**：Mac / Linux / Windows 下载卡片。
- 底色为 `{colors.canvas-soft}`，文字为 `{colors.ink}`，配细边框、内边距 `{spacing.xl}` 和圆角 `{rounded.md}`。卡内放置平台图标、标签及下载按钮。

**`partner-logo-tile`**：显示合作伙伴标识的 canvas-soft 图块。
- 底色为 `{colors.canvas-soft}`，放置单色 SVG 标识，内边距为 `{spacing.lg}`，圆角为 `{rounded.md}`。

**`testimonial-card`**：带人物肖像的单条推荐语卡。
- 底色为 `{colors.canvas-soft}`，文字为 `{colors.ink}`，内边距为 `{spacing.xl}`，圆角为 `{rounded.md}`。肖像比例为 1:1，正文使用 `{typography.body-md}`。

**`press-row`**：媒体报道列表项。
- 沿用所在区块的 `{colors.canvas}` 底色。底边使用 1 px 实线 `{colors.hairline}`，正文使用 `{typography.body-md}`，内边距为 `{spacing.lg}` 0。

**`job-row`**：「加入团队」列表项，每个职位独占一行。
- 底色为 `{colors.canvas}`，底边使用 1 px 实线，正文使用 `{typography.body-md-strong}`，内边距为 `{spacing.lg}` 0。

### 输入框与表单

**`text-input`**：暖深色页面上的输入框。
- 底色为 `{colors.canvas-soft}`，文字为 `{colors.ink}`，使用 1 px 实线边框 `{colors.hairline}`。正文用 `{typography.body-sm}`，内边距为 `{spacing.sm} {spacing.md}`，圆角为 `{rounded.sm}`。

### 导航

**`nav-bar`** - 电话 sticky 顶级导航
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.xl}`.

**`nav-link`** ——在nav中链接项目.
- Background `{colors.canvas}`, text `{colors.ink}`, body in `{typography.body-sm-strong}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.sm}`.

**`footer`** - 脚步乐队。
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.3xl} {spacing.xl}`. Body in `{typography.body-sm}`.

### 标志性组件

**`hero-band`**：深色首屏区块，放置 64-px 的 Inter 标题。
- 底色为 `{colors.canvas}`，文字为 `{colors.ink}`，内边距为 `{spacing.5xl} {spacing.xl}`。标题用 `{typography.display-xl}`（64 px / 400 / `-1.6 px`），下方双列展示终端界面。

**`content-band`**：标准内容区块。
- 底色为 `{colors.canvas}`，文字为 `{colors.ink}`，内边距为 `{spacing.5xl} {spacing.xl}`。区块标题用 `{typography.display-md}`。

### 组合示例

> 以下组合场景由 `scripts/derive-examples-block.mjs` 生成。各 `ex-*` 条目复用品牌基础样式，供 `/preview-design` 和 `/generate-kit` 以统一风格呈现同一套 10 个示例。`TO_FILL` 提示有待核对的基础样式。

**`ex-pricing-tier`**：默认套餐卡，沿用功能卡结构和品牌 canvas-soft 底色。
- 属性 : `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`**：推荐套餐卡。浅色模式中用深底浅字，深色模式中用浅底深字。
- 属性 : `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`**：面向 SaaS / B2B 场景的套餐权益摘要卡。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`**：SaaS / B2B 订阅摘要，每个附加项单独列出。
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
- Reserve `{colors.primary}` off-white for primary CTA pills and default text. There is no chromatic accent.
- 紧紧用 `{rounded.sm}` 3 px 或 `{rounded.md}` 4 px 品牌从来不会用大方的胶囊形来做CTA
- 设置首屏头条 Inter 字重 400 配合 `-1.6 px` 品牌读作很自信
- 平对 Inter (判决案件) DM Mono (代码块,终端模型).
- 保持暖暗的页面底色语气——纯黑色打破品牌身份.

### 应避免的做法
- Don't introduce a chromatic brand accent. The off-white-on-warm-dark IS the brand's voice.
- Don't render the hero headline in heavy weight (700+). The brand's display is intentionally light.
- Don't use generous pill CTAs. The brand's button radius is 3-4 px, almost rectangular.
- Don't replace the warm dark canvas with neutral gray or pure black. The warmth IS the brand.
- Don't drop a soft drop-shadow on cards. Hairlines + surface contrast carry elevation.

## 设计词元原值

启发人们理解 Warp设计语言——一种代理终端和开发环境品牌,其表面为暖暖的近焦炭页面底色(比纯黑色更暖),仅被清洁打破 Inter 印刷、偶尔 Instrument Serif 斜体瞬间,以及密集的终端-模版图像; CTA的描述异常低,形状几何比大多数营销站点运行紧.

```yaml
---
version: alpha
name: Warp-design-analysis
description: An inspired interpretation of Warp's design language — an agentic terminal-and-development-environment brand whose surface is a warm near-charcoal canvas (a tint warmer than pure black), broken only by clean Inter typography, the occasional Instrument Serif italic moment, and dense terminal-mockup imagery; CTAs are unusually understated, with shape geometry running tighter than most marketing sites.

colors:
  primary: "#f7f5f0"
  on-primary: "#2b2622"
  ink: "#f7f5f0"
  body: "#c9c0ad"
  body-strong: "#dad2c1"
  mute: "#aea69c"
  canvas: "#2b2622"
  canvas-soft: "#383330"
  hairline: "#3f3a36"

typography:
  display-xl:
    fontFamily: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif
    fontSize: 64px
    fontWeight: 400
    lineHeight: 70.4px
    letterSpacing: -1.6px
  display-lg:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 52.8px
    letterSpacing: -1.2px
  display-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: -0.8px
  display-sm:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -0.4px
  display-serif:
    fontFamily: Instrument Serif, Georgia, "Times New Roman", serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 52px
    letterSpacing: -0.5px
  body-lg:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  caption:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  code:
    fontFamily: DM Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
  code-md:
    fontFamily: DM Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  button-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px

rounded:
  none: 0px
  xxs: 1px
  xs: 2px
  sm: 3px
  md: 4px
  lg: 6px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 10px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
  5xl: 96px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  text-input:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  card-content:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  card-mockup:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  download-tile:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  press-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    padding: "{spacing.lg} 0"
  job-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md-strong}"
    padding: "{spacing.lg} 0"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.xl}"
  content-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.5xl} {spacing.xl}"
  partner-logo-tile:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  testimonial-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
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
    backgroundColor: "{colors.canvas-soft}"
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
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.2xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---
```
