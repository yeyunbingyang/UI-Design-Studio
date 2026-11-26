# Warp · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Warp 是一个"代理开发环境"——一个包装AI代理的终端应用——其营销网站反映了产品的姿态:一个单一的暗带运行整个页面,比纯黑色更温暖(英语:`{colors.canvas}` `#2b2622` 上面有来自品牌的 oklch 定义的暖热值的棕色贝色的提示, 复制版几乎完全装在 Inter。页面阅读的更像是开发商的读模编辑器而不是营销表面。

The decoration is restrained. Two terminal screenshots open the hero (split between the two main product modes — agent + terminal). A partner-logo strip (Anthropic / OpenAI / Google / Stanford) sits below the hero on a slightly warmer tile surface. A single testimonial card with a portrait photograph. A press-coverage list. Then the page closes with download tiles for Mac / Linux / Windows. There is no gradient, no atmospheric backdrop, no illustration system.

Type is the second decisive voice. Hero display sits at 64 px Inter weight 400 with `-1.6px` tracking — restrained for a hero, deliberately quiet. The brand carries DM Mono as its monospace face for code blocks, and Instrument Serif italics occasionally appear for editorial moments. Body text is 16 px Inter at line-height 1.5, very readable.

**关键特征 :**
- 单一的原生"颜色"——真的是一个离白 `{colors.primary}` (`#f7f5f0`——作为页面底色上的文字和作为 button-primary 填充,没有色调的强调色
- 暖暗页面底色( E)`{colors.canvas}` `#2b2622`)是唯一的页面表面,品牌的定型语气是棕色的暖气,而不是纯黑色.
- Extremely tight button radii — 3 / 4 px (1 / 2× the brand's `{rounded.md}` 4 px base) — the brand never uses generous pill shapes for CTAs. Only icon containers use `{rounded.full}`.
- Inter 桑斯+ 单曲 DM Mono 单体是犬科的配对。 Instrument Serif 以第三种文字形式出现,用于偶尔的斜体。
- 终端-模拟图像是该品牌唯一一致的装饰系统——没有梯度,没有大气覆盖.
- 微妙的温暖的锡条贯穿每一个中性;甚至身体文本和分裂者都带有温和而不是中性灰色的暗示.


## 配色

### 品牌和 强调色
- **关闭白话小学** (`{colors.primary}` — `#f7f5f0`:该品牌的"主"是一个暖和的淡白的. button-primary 填充,作为页面底色上的默认文字,作为文字标记颜色。没有色调品牌强调色——非白话是该品牌的区别语调。

### 表面
- **页面底色** (`{colors.canvas}` — `#2b2622`:温暖的暗页背景。 `oklch(22.0% 0.004 84.6)`. 稍稍棕色比纯黑色,略微温暖比中性灰色——温暖是品牌的特征.
- **软画帘** (`{colors.canvas-soft}` — `#383330`:一种较轻的暖暗填充,用于卡片,模具铬,以及伙伴-logo瓷砖.
- **细边线** (`{colors.hairline}` — `#3f3a36`): 1 px 深层表面的固态分裂器。

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — `#f7f5f0`:页面底色上的默认文本——与主画相同的非白文字,是有意统一.
- **强体** (`{colors.body-strong}` — `#dad2c1`:中强调体文字.
- **体质** (`{colors.body}` — `#c9c0ad`: 副体文字——标题,辅助副本,新闻封面行.
- **静音** (`{colors.mute}` — `#aea69c`:最优先的文本——时间戳、精细印刷、页脚的第二行。 `oklch(71.5% 0.008 84.6)`.

### 语义
The brand doesn't surface a separate error / warning / success palette in its marketing pages. Validation cues come from the unified off-white system; in-product semantic colors live in the terminal application proper.


## 字体排版

### 字体家族
Three faces ladder the system:
1. **Inter** 用于每个显示、身体、按钮、链接和标签角色。重量 400 / 500 与品牌的"一起使用"Inter 倒背"自定义面作为比量兼容的系统倒背.
2. **DM Mono** for terminal mockups, command snippets, and code blocks. Weight 400 only. Loaded as `--font-dm-mono`.
3. **Instrument Serif** for occasional editorial italic moments — rare on the marketing surface, but documented as a third face for emphasised tagline-style phrases. **Abel** is also loaded as a fourth fallback for headline emphasis.

### 等级

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

### Note on Font Substitutes
三个面孔都开着或者可以自由装入:
- **Inter** 直接从 Google 字体装入或 Vercel- 主持CDN(英语:CDN).
- **DM Mono** ——Google字体开源.
- **Instrument Serif** ——Google字体开源.


## 布局

### 间距系统
- **基地单位**: 4 px (偶尔有) 10 px 财务报告和已审计财务报表 6 px 按钮绑定值 。
- **脚本**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 10 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px.
- **分区编栏**: 首屏/ 内容带使用 `{spacing.5xl}` 96 px 。在桌面上。
- **纸牌内部**: 牌坐着 `{spacing.xl}` 24 px.

### 网格容器( C)
- 营销内容中心,大约 1200 px 宽度。
- Hero: 2-column at desktop (split between two terminal screenshots), stacks at mobile.
- 合作伙伴标志 : 5- 收尾的弹性排。
- 下载牌 : 3- 上桌面(Mac / Linux / Windows), 1- 移动。

### 反应战略

#### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 768px | 首屏堆积物; 1- 上网格; 导航汉堡。 |
| 平板 | 768–1023px | 2- 电网上 |
| 桌面 | ≥ 1024px | 完全首屏分裂; 3- 上下下载的瓷砖。 |

#### 触控区域
按钮渲染到 ~36 px 高( 高)8 px 垂直粘贴+ 20 px line-height)通过额外的垫板与WCAG相遇,移动充气区 44 × 44 px 楼层。

#### 折叠战略
- Nav: full link row + Sign in / Download right cluster at desktop. Hamburger at mobile.
- 首屏终端-模具拆分:在移动时垂直堆栈.
- Press / job rows: full-width single column; stay legible at all widths.

#### 图像行为
- **终端模型**: 以暗卡形式, 并使用内部实际的终端 UI( 暖页面底色 + 彩色语法) 。 光谱比 ~3:2.
- **合伙人标志**: 暗片牌上的单色SVG.
- **证词肖像**: 1:1 内侧正方形作物 `{rounded.md}` 硬币卡。


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default for hero band. |
| 职等 1 —— 细边线 | 1 px 固态 `{colors.hairline}` 边框 `{colors.canvas-soft}`. | 默认卡染色体. |
| Level 2 — Inset Card | Canvas-soft fill against canvas background with 1 px hairline. | Mockup cards, download tiles, testimonial cards. |

The brand uses surface-contrast and hairline borders for elevation; soft drop-shadows do not appear in the marketing surface.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 满血乐队. |
| `{rounded.xxs}` | 1px | 紧紧的文字指示器。 |
| `{rounded.xs}` | 2px | 内置的非常小的芯片。 |
| `{rounded.sm}` | 3px | 默认按钮半径——极紧. |
| `{rounded.md}` | 4px | 贺卡染色体(品牌) `--radius` ), 页面存档备份,存于互联网档案馆. |
| `{rounded.lg}` | 6px | 略大牌(一说). |
| `{rounded.pill}` | 9999px | 图标容器,状态胶囊形。 |

### 摄影几何
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

### 纸牌和集装箱

**`card-content`** ——默认内容卡开 canvas-soft.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, padding `{spacing.xl}`, shape `{rounded.md}`.

**`card-mockup`** ——终端-截图模拟卡.
- Same chrome as `card-content` but body in `{typography.code}` (DM Mono) when text appears inside.

**`download-tile`** ——Mac / Linux / Windows下载瓦片.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, hairline border, padding `{spacing.xl}`, shape `{rounded.md}`. Hosts a platform icon + label + download CTA.

**`partner-logo-tile`** - 电话 canvas-soft 砖头主机为合作伙伴标志.
- Background `{colors.canvas-soft}`, monochrome logo SVG inside, padding `{spacing.lg}`, shape `{rounded.md}`.

**`testimonial-card`** ——单引文风格的卡片,带有肖像.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.md}`. Portrait 1:1 + body in `{typography.body-md}`.

**`press-row`** ——新闻封面榜项目.
- Background `{colors.canvas}` (no fill — sits on the canvas band), 1 px solid bottom border `{colors.hairline}`, body in `{typography.body-md}`, padding `{spacing.lg}` 0.

**`job-row`** ——"加入我们团队"项目列表(单行每张开场角色).
- Background `{colors.canvas}`, 1 px solid bottom border, body in `{typography.body-md-strong}`, padding `{spacing.lg}` 0.

### 输入表单( F)

**`text-input`** ——暗黑的canvas文本输入.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, body in `{typography.body-sm}`, padding `{spacing.sm} {spacing.md}`, shape `{rounded.sm}`.

### 导航

**`nav-bar`** - 电话 sticky 顶级导航
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.xl}`.

**`nav-link`** ——在nav中链接项目.
- Background `{colors.canvas}`, text `{colors.ink}`, body in `{typography.body-sm-strong}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.sm}`.

**`footer`** - 脚步乐队。
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.3xl} {spacing.xl}`. Body in `{typography.body-sm}`.

### 签名组件

**`hero-band`** —— 主持"黑首屏乐队"的黑首屏乐队. 64-px (英语). Inter 头条.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Headline `{typography.display-xl}` (64 px / 400 / `-1.6 px`). Below: a 2-column terminal-mockup split.

**`content-band`** ——标准内容带.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.xl}`. Section headline `{typography.display-md}`.

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
- Reserve `{colors.primary}` off-white for primary CTA pills and default text. There is no chromatic accent.
- 紧紧用 `{rounded.sm}` 3 px 或 减 减 `{rounded.md}` 4 px 品牌从来不会用大方的胶囊形来做CTA
- 设置首屏头条 Inter 字重 400 与 `-1.6 px` 品牌读作很自信
- 平对 Inter (判决案件) DM Mono (代码块,终端模型).
- 保持暖暗的页面底色语气——纯黑色打破品牌身份.

### Don't
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
