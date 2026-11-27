# Superhuman · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Superhuman's marketing pages open in an editorial dark register: a deep indigo navy `{colors.primary}` (`#1b1938`) canvas overlaid with a soft violet-and-sky atmospheric backdrop and a half-bleed portrait subject (often a person looking off-frame, photographed at twilight). Headlines render in `{typography.display-xxl}` (Super Sans VF at 64px / weight 540) with negative tracking, set in white over the indigo. A single rounded-rectangle CTA button anchors each band — never two, never three.

The body of every page flips to white. `{colors.canvas}` (`#ffffff`) takes over below the hero, with body type in `{colors.ink}` (`#292827` — a slightly warm dark grey, never pure black) and feature rows alternating between white and `{colors.canvas-soft}` (a barely-tinted off-white). Pricing tiers sit on this white surface; the featured tier inverts to the indigo navy, completing the brand's binary polarity.

Every page closes with a **deep-teal CTA band** (`{colors.surface-teal-deep}` — `#0e3030`). The teal is a single chromatic interlude: rich, almost-black green-blue, that breaks up what would otherwise be an indigo/white-only page. The teal band always contains the closing CTA in `{typography.display-lg}` paired with a single white-pill button.

字型运行 **Super Sans VF** ——专有可变显示色谱——在不寻常的中量子(460, 540, 600)可变轴让品牌选择精确的子默认重,读作比典型更温暖,更人性化. 400/500/700 SaaS 比例尺。 显示大小使用负数 letter-spacing 备注 -1.32px 改为: -0.315px 视大小而定; 线高异常紧(0.96 打开 48px 显示).

**关键特征 :**
- Three-canvas system: indigo navy (`{colors.primary}`) for hero, white (`{colors.canvas}`) for body, deep teal (`{colors.surface-teal-deep}`) for closing CTA.
- 半身血画肖像题材在主角中带有紫罗兰-天空大气背景——品牌使用人看离身像作为反复出现的视觉.
- Single CTA per band; the marketing pages never crowd actions.
- Super Sans VF 子默认权重( 4)460, 540, 600)——品牌的印刷热量标志.
- 紧线- 高线( 3)0.96),在显示大小上——纵向压缩作为编辑密度.
- 暖灰外体墨水( 上)`#292827`)——永远不纯黑色;品牌的宁静温暖.
- 披针形的CTA 以苍紫色(`{colors.surface-violet-soft}`); 圆形-矩形CTAs 到处可见.


## 配色

> **Source pages:** home (`/`), `/products/go-ai-assistant`, `/contact-sales`, `/plans`.

### 品牌色与强调色
- **初级Indigo海军** (`{colors.primary}` — `#1b1938`:品牌主表面和CTA颜色. 首屏页面底色,填充圆角-矩形按钮,特色定价等级.
- **深渊** (`{colors.primary-deep}` — `#0e0c1f`:按级升降/更深的海军在首屏梯度停止时使用.
- **表面紫色软** (`{colors.surface-violet-soft}` — `#c9b4fa`:首屏丸扣填充——苍白紫色涂在indigo页面底色上,同样出现在大气背景中.
- **表面深层** (`{colors.surface-teal-deep}` — `#0e3030`:签名关闭-CTA乐队颜色,富绿色蓝色,几乎黑色.
- **Surface Teal Mid** (`{colors.surface-teal-mid}` — `#155555`): Slightly lifted teal for nested chrome inside the band.

### 界面表面
- **页面底色** (`{colors.canvas}` — `#ffffff`: 默认身体背景.
- **软画帘** (`{colors.canvas-soft}` — `#fafaf8`: 旋转时短温不白 feature-row 乐队。
- **细边线** (`{colors.hairline}` — `#e8e4dd`): 1px 边框,略微温暖的灰色。
- **细边线暗** (`{colors.hairline-dark}` — `#3f3a52`): 1px 暗面的边框。

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#292827`:默认的体文字,温暖的深灰色,永远不纯黑色.
- **墨水哑声** (`{colors.ink-mute}` — `#73706d`: 副文本,标题.
- **Ink Faint** (`{colors.ink-faint}` — `#9a9794`): Tertiary / disabled text.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text on dark navy / teal surfaces.
- **暗哑** (`{colors.on-dark-mute}` ——半透明白:暗字上的副文字.
- **On Dark Faint** (`{colors.on-dark-faint}` — translucent white): Tertiary text on dark.


## 字体排版

### 字体族

显示和UI级是 **Super Sans VF** ——专有可变色色色(可变轴表示字重,品牌使用子默认). 460 / 540 / 600 重。倒转链是系统字体堆栈。

For substitution use **Inter Variable** (open-source) at weight 460 / 540 / 600 — Inter's variable axes match Super Sans VF's behavior closely. Avoid fixed-weight Inter at 400 / 500 / 600 — the brand specifically picks the in-between weights.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 64px | 540 | 0.96 | 0 | 首屏头条 |
| `{typography.display-xl}` | 48px | 460 | 0.96 | -1.32px | 光面开孔器 |
| `{typography.display-lg}` | 28px | 540 | 1.14 | -0.63px | 子节/ 特征标题 |
| `{typography.display-md}` | 22px | 460 | 1.1 | -0.315px | 牌名标题 |
| `{typography.heading-lg}` | 20px | 460 | 1.2 | -0.4px | 缩写卡标题 |
| `{typography.body-lg}` | 18px | 540 | 1.5 | -0.135px | 营销机构牵头 |
| `{typography.body-md}` | 16px | 460 | 1.5 | 0 | 默认 UI 天体 |
| `{typography.body-strong}` | 18.72px | 700 | 1.5 | 0 | 重点机构 |
| `{typography.button-md}` | 16px | 700 | 1.0 | 0 | 圆形矩形按钮标签 |
| `{typography.button-cap}` | 14px | 600 | 1.0 | 0 | 压缩按钮标签 |
| `{typography.caption}` | 14px | 460 | 1.4 | 0 | 帮助者,脚注 |
| `{typography.micro}` | 12px | 540 | 1.4 | 0 | 胶囊形标签,精细打印 |

### 原则
- **子违约权重.** 品牌选 460 / 540 / 600 改为 400 / 500 / 700 ——在排版中,将它与默认的SaaS系统区分开来的一种宁静的温暖.
- **紧紧显示领先.** 0.96 打开 48–64px 显示 —— 类型堆栈异常紧凑。
- **显示大小的负跟踪 。** -1.32px 时 间 48px 按比例缩放——将可变字母格式收紧到编辑密度.

### 替代字体
**Inter Variable** (open-source via Google Fonts) is the recommended substitute. Set `font-variation-settings: "wght" 540` for display, 460 for body — Inter's variable axes match. Avoid fixed-weight Inter; the in-between weights are the brand's signature.


## 布局

### 间距系统
- **基地单位**: 8px (与 2 / 4 / 12 工作需要的子脚趾).
- **脚本**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px.
- **分区编栏**: 64–96px ; 关闭带使用 96–128px 编辑字重。
- **Card internal padding**: 32px on pricing cards; 24px on alternating feature rows.

### 网格与容器
- 首屏横跨全景点宽度, 以紫外线- 天空背景边缘对接; 内容中心在一个 ~960px 栏中。
- 机构内容中心 ~960–1100px.
- Pricing collapses 3-up → 2-up → 1-up at 1024 / 768 breakpoints.

### 留白规则
The brand uses generous editorial whitespace on both polarities — dark hero and white body. Section gaps tend toward 96px; the teal closing band gets up to 128px of vertical air. The whitespace itself is part of the brand's "considered, slow-tempo" feel.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 | 平面 | 默认表面 |
| 1 | `box-shadow: 0 1px 3px rgba(0,0,0,0.08)` | 底卡提携 |
| 2 | `box-shadow: 0 8px 24px rgba(0,0,0,0.12)` | 浮动面板、模式 |
| 3 | 大气背景(紫外星座上方的Indigo) | 首屏的深度介质 |

### 装饰性深度
首屏的深度是 人类的深处 **紫外星天空大气背景** ——软性不动紫色对白蓝光线洗,坐落在肖像题材后面,作为CSS的光线梯度或大背景图像执行,在首屏下面,深度是最小的——白色页面底色平整.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | 发条标签 |
| `{rounded.sm}` | 6px | 格式输入 |
| `{rounded.md}` | 8px | 按钮(品牌的签名按钮形状——圆形矩形,永不吃药) . |
| `{rounded.lg}` | 12px | 定价卡、特征卡 |
| `{rounded.xl}` | 16px | Modal dialogs, large feature cards |
| `{rounded.full}` | 9999px | 功能列中的 Pill 标签, 首屏 CTA |

### 图片形状
The hero uses **half-bleed portrait subjects** — a person photographed at twilight, looking off-frame, occupying the right half of the hero. The portrait extends edge-to-edge vertically and stops mid-canvas horizontally; type sits on the left side. Other photography is rare; product UI mockups handle most other illustrative needs.


## 组件

### 按钮

**`button-primary-dark`** ——白色表面的主导圆形-矩形CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}`, padding `{spacing.md} {spacing.xl}` (12px 20px), rounded `{rounded.md}` 8px.
- Pressed state `button-primary-dark-pressed` shifts to `{colors.primary-deep}`.

**`button-on-dark-pill`** ——CTA首屏,身形苍白紫罗兰胶囊形.
- Background `{colors.surface-violet-soft}`, text `{colors.primary}`, same typography, padding 12px 20px, rounded `{rounded.full}`. The pill shape only appears on the hero — body CTAs use the rounded rectangle.

**`button-secondary-outline`** ——概述白色上的替代方案.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-dark}` border, same shape as `button-primary-dark`.

**`button-on-teal`** 关闭的电话带里有CTA
- Background `{colors.canvas}`, text `{colors.surface-teal-deep}`, rounded-rectangle, same typography.

### 卡片与容器

**`card-feature-light`** ——特色卡白色.
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`, 1px `{colors.hairline}` border.

**`card-pricing`** ——标准定价等级卡.
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`, 1px `{colors.hairline}` border.

**`card-pricing-featured`** 反向Indigo的突出层次。
- Background `{colors.primary}`, text `{colors.on-primary}`, otherwise identical to `card-pricing`.

**`card-teal-band`** ——每页的CTA乐队关闭.
- Background `{colors.surface-teal-deep}`, text `{colors.on-primary}`, padding `{spacing.huge}` 64px, rounded `{rounded.lg}` 12px (often radius-less in practice when full-bleed). Holds a single closing headline in `{typography.display-lg}` and a `button-on-teal`.

**`card-feature-row`** — alternating feature-row card on the body.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.xl}` 24px, rounded `{rounded.md}` 8px. Used in pairs/triplets to explain features below the hero.

### 输入框与表单

**`text-input`** ——标准表单输入.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm}+ {spacing.md}` (10px 12px), rounded `{rounded.sm}` 6px, 1px `{colors.hairline}` border.

### 导航

**`nav-bar-dark`** 顶级导航 over indigo首屏。
- Background `{colors.primary}`, text `{colors.on-primary}`, padding `{spacing.lg} {spacing.xl}`. Logo on the left, nav center, "Get Started" `button-on-dark-pill` on the right.

**`nav-bar-light`** ——上行车身/定价页的顶端导航.
- Background `{colors.canvas}`, text `{colors.ink}`, otherwise same structure with `button-primary-dark` on the right.

### 胶囊形、标签和芯片

**`pill-tab-light`** — feature-row 选项卡选择器。
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button-cap}`, padding `{spacing.sm} {spacing.lg}`, rounded `{rounded.full}`. Used in the feature category picker (Mail / Channels / Code / AI / Calendar etc.) below the hero.

### 标志性组件

**半黑肖像首屏( 半黑肖像首屏)** ——有人在暮光照下,占据了印地哥首屏的右半部,背后是紫罗兰-天空大气背景,Type和CTA坐落在左侧,肖像是品牌反复出现的视觉标志.

**Closing Teal Band** — every page closes with a `card-teal-band` containing a `{typography.display-lg}` closing headline and a single `button-on-teal`. The teal is the page's resolving chord.

**`link-on-light`** 身体上连线
- 文字颜色 `{colors.ink}` 交付 `{typography.body-md}` 以坚固的划线盟誓,

**`footer-light`** ——全站页脚.
- Background `{colors.canvas}`, text `{colors.ink-mute}`, type `{typography.caption}`, padding `{spacing.huge} {spacing.xl}` (64px 24px). Holds 4 columns of link groups, social icons, and a small legal/copyright row.


## 设计建议与禁忌

### 建议做法
- 给每个首屏配上紫罗兰天空的大气背景 和半血肖像题材
- 子默认重下显示分级( R)460 / 540)——温是排字符号.
- 使用圆角矩形 CTAs 时 8px 半径除了首屏之外(其中丸形是规则),其他任何地方都行.
- Close every marketing page with a deep-teal CTA band.
- Use warm dark grey `{colors.ink}` for body text — never pure black.
- 紧紧应用 0.96 line-height 显示大小;编辑压缩是品牌。

### 应避免的做法
- 页面身体中不要使用丸形按钮;丸形只使用首屏.
- Don't bump display weight above 540 unless using `body-strong` (700) for emphasized inline body.
- Don't render body text in pure black — the warm grey `#292827` is part of the brand.
- Don't omit the closing teal band — every marketing page closes with it.
- Don't introduce additional accent colors beyond indigo, violet-soft, teal, and the off-warm-greys.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 宽 | ≥ 1440px | 半血画像全尺寸; 带形 128px 高点 |
| Desktop | 1024–1440px | Default content max-width; pricing 3-up |
| 平板 | 768–1023px | 定价 2- 上; 肖像作物收紧 |
| 手机 | < 768px | 定价 1- 上; 汉堡导航; 显示滴 64 → 36px |

### 触控区域
- Buttons hit ≥ 44×44px on mobile via 12px vertical padding × 16px line-height. WCAG AAA.
- 窗体字段停留在 44px 最低身高。

### 窄屏布局调整
- 显示阶梯级 64 → 48 → 36 → 28 → 22px.
- 半血肖像作物在移动上对头和肩进行;大气背景简化.
- Pricing tiers stair-step 3-up → 2-up → 1-up.
- 顶端导航崩溃到下面的汉堡 768px.
- 关闭带减少垂直粘贴从 128 → 64px 手机上,我刚从电话里找到的

### 图片适配
首屏肖像画的使用 `srcset` 具有桌面/移动作物——桌面偏爱完全的半流成分;移动作物为头肩.


## 迭代指南

1. 一次集中关注一个组件.
2. 参考组件名称和符号直接 。
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后。
4. 默认正文为 `{typography.body-md}`; 储备金 `{typography.body-lg}` 市场营销线索
5. 保持三色布的节奏(indigo / 白/teal)——增加第四个页面底色颜色打破系统.
6. 关闭的Teal乐队是不可谈判的——每个营销页面都在那里解决.

## 设计词元原值

An inspired interpretation of Superhuman's design language — a fast-email productivity brand split between an editorial dark hero (deep indigo navy with violet-sky atmospheric backdrop and a portrait subject) and a quiet white content body with off-warm-grey ink. The system uses a single proprietary variable display sans, heavy weight 460–540 with tight tracking, and a deep-teal closing CTA band that breaks the indigo/white rhythm with a warm dark interlude. Buttons are tight rounded rectangles, pricing is sober and dense, and the brand reads more like a high-end newsletter than a SaaS app.

```yaml
---
version: alpha
name: Superhuman-design-analysis
description: An inspired interpretation of Superhuman's design language — a fast-email productivity brand split between an editorial dark hero (deep indigo navy with violet-sky atmospheric backdrop and a portrait subject) and a quiet white content body with off-warm-grey ink. The system uses a single proprietary variable display sans, heavy weight 460–540 with tight tracking, and a deep-teal closing CTA band that breaks the indigo/white rhythm with a warm dark interlude. Buttons are tight rounded rectangles, pricing is sober and dense, and the brand reads more like a high-end newsletter than a SaaS app.

colors:
  primary: "#1b1938"
  primary-deep: "#0e0c1f"
  on-primary: "#ffffff"
  ink: "#292827"
  ink-mute: "#73706d"
  ink-faint: "#9a9794"
  canvas: "#ffffff"
  canvas-soft: "#fafaf8"
  surface-violet-soft: "#c9b4fa"
  surface-teal-deep: "#0e3030"
  surface-teal-mid: "#155555"
  hairline: "#e8e4dd"
  hairline-dark: "#3f3a52"
  on-dark-mute: "#bcbac9"
  on-dark-faint: "#5a5772"

typography:
  display-xxl:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 64px
    fontWeight: 540
    lineHeight: 0.96
    letterSpacing: 0
  display-xl:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 48px
    fontWeight: 460
    lineHeight: 0.96
    letterSpacing: -1.32px
  display-lg:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 28px
    fontWeight: 540
    lineHeight: 1.14
    letterSpacing: -0.63px
  display-md:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 22px
    fontWeight: 460
    lineHeight: 1.1
    letterSpacing: -0.315px
  heading-lg:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 20px
    fontWeight: 460
    lineHeight: 1.2
    letterSpacing: -0.4px
  body-lg:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 18px
    fontWeight: 540
    lineHeight: 1.5
    letterSpacing: -0.135px
  body-md:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 16px
    fontWeight: 460
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 18.72px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  button-md:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  button-cap:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 14px
    fontWeight: 460
    lineHeight: 1.4
    letterSpacing: 0
  micro:
    fontFamily: "'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 12px
    fontWeight: 540
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

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
  button-primary-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-primary-dark-pressed:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-on-dark-pill:
    backgroundColor: "{colors.surface-violet-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 20px
  button-secondary-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-on-teal:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.surface-teal-deep}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
  card-feature-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pricing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pricing-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-teal-band:
    backgroundColor: "{colors.surface-teal-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.lg}"
    padding: 64px
  card-feature-row:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  pill-tab-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  nav-bar-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  nav-bar-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  link-on-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  footer-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 24px
---
```
