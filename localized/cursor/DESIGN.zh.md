# Cursor · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Cursor's marketing site reads as a quietly-confident developer brand that believes in editorial calm over IDE-darkness. The base canvas is **warm cream** (`{colors.canvas}` — #f7f7f4) holding warm near-black ink (`{colors.ink}` — #26251e) for body and display alike. The single brand voltage is **Cursor Orange** (`{colors.primary}` — #f54e00) reserved for primary CTAs and the wordmark — used scarcely.

类型运行 **CursorGothic** 以单色的家族为主。显示为重 400 负数 letter-spacing ——杂志编辑的声音,而不是技术炸弹的. JetBrains Mono 携带每个代码表面(和代码表面大约是页的一半).

The brand's strongest visual signature is the **AI-timeline pill palette**: five pastel pills (peach `{colors.timeline-thinking}`, mint `{colors.timeline-grep}`, blue `{colors.timeline-read}`, lavender `{colors.timeline-edit}`, gold `{colors.timeline-done}`) marking AI-action stages inside in-product timeline visualizations. Used only in product UI — never as system action colors.

**关键特征 :**
- 暖奶油页面底色,不是白色,墨水是暖的(#26251e),并非纯黑色.
- Single CTA color: `{colors.primary}` (Cursor Orange #f54e00). Used scarcely.
- 显示字重停留在 400 绝对不要大胆 杂志的声音
- AI 时间线贴纸 : 5 用于产品代理作用阶段的专用标志。
- 压缩 8px CTA半径——开发商方言.
- 仅限细边线深度;无滴影.
- 80px 节奏。


## 配色

### 品牌和 强调色
- **Cursor 橙色** (`{colors.primary}` — #f54e00: 初级CTA胶囊形,词签,首屏强调色,很少使用.
- **Cursor 橙色活动** (`{colors.primary-active}` — #d04200:新闻州.

### 表面
- **页面底色** (`{colors.canvas}` — #f7f7f4:温暖的奶油页楼.
- **软画帘** (`{colors.canvas-soft}` — #fafaf7): IDE-pane 模拟器内的背景。
- **表面卡片** (`{colors.surface-card}` — #ffffff:纯白牌表面——与奶油页面底色的微小对比.
- **表面坚固** (`{colors.surface-strong}` — #e6e5e0:徽,标丸.

### Hairlines
- **细边线** (`{colors.hairline}` — #e6e5e0): 1px 分数。
- **柔软的细边线** (`{colors.hairline-soft}` — #efeee8:轻分者.
- **发条坚固** (`{colors.hairline-strong}` — #cfcdc4: 更强的面板大纲.

### 文本
- **Ink** (`{colors.ink}` — #26251e): Display, body emphasis. Warm near-black.
- **体质** (`{colors.body}` — #5a5852: 默认的运行文本.
- **Body Strong** (`{colors.body-strong}` — #26251e): Same as ink.
- **静音** (`{colors.muted}` — #807d72: 字幕组.
- **静音软体** (`{colors.muted-soft}` — #a09c92: 已禁用文本。
- **小学** (`{colors.on-primary}` — #ffffff: 打开白文本 Cursor 橙色的,我记得

### 时间线(AI-行动签名)
- **思考中 爱思索** (`{colors.timeline-thinking}` — #dfa88f:桃子,只在产品内用剂内用时段.
- **格瑞普语Name** (`{colors.timeline-grep}` — #9fc9a2: 薄荷(原变种).
- **读取** (`{colors.timeline-read}` — #9fbbe0: 帕斯德尔蓝.
- **编辑** (`{colors.timeline-edit}` — #c0a8dd: 薰衣草.
- **完成( E)** (`{colors.timeline-done}` — #c08532:温暖的金色.

### 语义
- **成功** (`{colors.semantic-success}` — #1f8a65:确认指标。
- **错误** (`{colors.semantic-error}` — #cf2d56:验证错误.


## 字体排版

### 字体家族
**CursorGothic** is the licensed display + body family. Fallback: `system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`. Code surfaces switch to **JetBrains Mono**.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 72px | 400 | 1.1 | -2.16px | Homepage hero h1 |
| `{typography.display-lg}` | 36px | 400 | 1.2 | -0.72px | 科长 |
| `{typography.display-md}` | 26px | 400 | 1.25 | -0.325px | 副科长 |
| `{typography.display-sm}` | 22px | 400 | 1.3 | -0.11px | 纸牌组标题 |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | 构成部分标题 |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | 列表标签 |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 默认正文 |
| `{typography.body-tracked}` | 16px | 400 | 1.5 | 0.08px | 跟踪编辑机构 |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body |
| `{typography.caption}` | 13px | 400 | 1.4 | 0 | 图片标题 |
| `{typography.caption-uppercase}` | 11px | 600 | 1.4 | 0.88px | 区域标签、时间胶囊形标签 |
| `{typography.code}` | 13px | 400 | 1.5 | 0 | 代码块—— JetBrains Mono |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | CTA 避孕药标签 |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav 菜单 |

### 原则
- **显示字重停留在 400.** 杂志的声音,从来不大胆。
- **负数 letter-spacing 仅显示。** -0.11px 改为: -2.16px 追踪。
- **JetBrains Mono 每一个代码表面。**

### Note on Font Substitutes
CursorGothic is licensed. Open-source substitute: **Inter** at weight 400 with letter-spacing -1.5%. Or **GT Sectra** for a more editorial feel.


## 布局

### 间距系统
- **基部单位:** 4px.
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.base}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px.
- **科 科 padding:** 80px.

### 网格容器( C)
- 最大内容 width: ~1200px.
- 编辑机构: 12- 列网格 - 列网格 - Colind grade.
- Feature card grids: 2-up at desktop for splits, 3-up for benefits.
- Footer: 5-column at desktop.

### 白空间哲学
热衷的编辑节奏——比技术网站更接近印刷杂志。 奶油页面底色有很多呼吸室;乐队内的卡片坐得很近(例如:16-24px —— —— —— —— 。


## 层次与阴影

系统使用 **仅限细边线深度**。没有投影,没有高架。卡片通过屏幕上浮 1px 细边线和轻微的白色对乳激素对比.

| 职等 | 治疗 | 使用 |
|---|---|---|
| 平面( 扫描) | `{colors.canvas}` (#f7f7f4) | 车体带,页脚 |
| 纸牌 | `{colors.surface-card}` (#ffffff) | 内容卡 |
| 细边线边框 | 1px `{colors.hairline}` | 纸牌轮廓, 分隔符 |
| IDE 窗格 | `{colors.canvas-soft}` (#fafaf7) | IDE 模拟卡内部 |

### 装饰性深度
- **IDE 挂卡** 唯一“ 外延” 元素。 白卡在奶油页面底色上, 内部的窗格结构模仿实际 Cursor 编辑。
- **时间线贴纸胶囊形** 添加无表面高度的色深。


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 预留额 |
| `{rounded.xs}` | 4px | 内置标签 |
| `{rounded.sm}` | 6px | 压缩行 |
| `{rounded.md}` | 8px | CTA 按钮, 窗体输入 |
| `{rounded.lg}` | 12px | 纸牌, IDE 窗体 |
| `{rounded.xl}` | 16px | 较大的特征卡( 稀有) |
| `{rounded.pill}` | 9999px | 时间线胶囊形,徽章 |
| `{rounded.full}` | 9999px | 虚幻者( 稀有) |


## 组件

### 顶端导航

**`top-nav`** — Background `{colors.canvas}`, text `{colors.ink}`, height 64px. Layout: Cursor wordmark left, primary horizontal menu (Pricing / Features / Enterprise / Blog / Forum / Careers), Sign In + Download primary CTA right.

### 按钮

**`button-primary`** — The signature Cursor Orange CTA. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}` (14px / 500), padding 10px × 18px, height 40px, rounded `{rounded.md}` (8px).

**`button-primary-active`** ——新闻状况。背景 `{colors.primary-active}`.

**`button-secondary`** 奶油布上的白卡片胶囊形。 `{colors.surface-card}`文本中,请输入 `{colors.ink}`, 1px `{colors.hairline-strong}` 边框。

**`button-tertiary-text`** ——内含墨文字链接.

**`button-download`** — Larger ink-canvas CTA. Background `{colors.ink}`, text `{colors.canvas}`, padding 12px × 20px, height 44px. Used for "Download for macOS" type CTAs.

### 首屏和IDE 杂耍

**`hero-band`** — Background `{colors.canvas}`, full-width display headline in `{typography.display-mega}` (72px / 400 / -2.16px), subhead in `{typography.body-md}`, two CTAs (`button-download` + `button-tertiary-text`), and a centered IDE-mockup card below the hero copy.

**`ide-mockup-card`** ——一张包含多面板 IDE 模拟的白卡(侧边栏+主编辑+聊天面板+终端). `{colors.surface-card}`,四舍五入 `{rounded.lg}` (12px), 1px `{colors.hairline}` 边框,不设垫(纸板填充卡边对边)。

**`ide-pane`** ——模型内单个的IDE窗格。 `{colors.canvas-soft}`文本中,请输入 `{colors.body}` 输入 `{typography.code}` (JetBrains Mono 13px),四舍五入 `{rounded.md}` (8px), 贴 16px.

### 纸牌

**`feature-card`** — Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.title-md}`, rounded `{rounded.lg}`, padding 24px. 1px `{colors.hairline}` border.

**`comparison-card`** — Side-by-side "Cursor vs other tools" card. Same surface and rounding; internally split into 2 columns.

**`testimonial-card`** ——引文卡。背景 `{colors.surface-card}`文本中,请输入 `{colors.body}`,四舍五入 `{rounded.lg}`, 编译 24px.

### AI 时间线(签名)

**`timeline-pill-thinking`** 桃子丸,背景 `{colors.timeline-thinking}`文本中,请输入 `{colors.ink}`类型 `{typography.caption-uppercase}` (11px / 600 / 0.88px 跟踪,大写),四舍五入 `{rounded.pill}`, 编译 4px × 10px. 标注产品时间线中的"思索"阶段.

**`timeline-pill-grep`** 薄荷丸,形状和背景都一样 `{colors.timeline-grep}`. 标记"Greping"阶段.

**`timeline-pill-read`** — Pastel-blue pill. Background `{colors.timeline-read}`. Marks "Reading" stage.

**`timeline-pill-edit`** ——熏烟药。 `{colors.timeline-edit}`. 标记"编辑"舞台.

**`timeline-pill-done`** ——金胶囊形。 `{colors.timeline-done}`文本中,请输入 `{colors.on-primary}` 白色,标记"完成"舞台

### 代码

**`code-block`** ——内置代码块。背景 `{colors.surface-card}`文本中,请输入 `{colors.ink}` 输入 `{typography.code}`,四舍五入 `{rounded.lg}`, 编译 20px, 1px `{colors.hairline}` 边框。

### 定价

**`pricing-tier-card`** — Background `{colors.surface-card}`, rounded `{rounded.lg}`, padding 32px, 1px `{colors.hairline}` border.

**`pricing-tier-featured`** —— 墨水的层次倒转。 `{colors.ink}`文本中,请输入 `{colors.canvas}`,形状相同,暗反转信号"高亮",没有彩色丝带.

### 窗体标记( T)

**`text-input`** — Background `{colors.surface-card}`, text `{colors.ink}`, rounded `{rounded.md}` (8px), padding 12px × 16px, height 44px.

**`badge-pill`** — Small uppercase pill. Background `{colors.surface-strong}`, text `{colors.ink}`, type `{typography.caption-uppercase}`, rounded `{rounded.pill}`, padding 4px × 10px.

### 中导/页脚

**`cta-band`** — Pre-footer "Try Cursor now" band. Background `{colors.canvas}`, centered display headline in `{typography.display-lg}`, single Cursor Orange CTA. 96px vertical padding.

**`footer`** — Closing footer. Background `{colors.canvas}`, text `{colors.body}`. 5-column link list. 64×48px padding.

**`footer-link`** — Background transparent, text `{colors.body}`, type `{typography.body-sm}`.


## 设计建议与禁忌

### 执行
- 准备金 `{colors.primary}` (Cursor 橙色),用于初级CTA和品牌词标.
- Keep display weight at 400. The editorial voice depends on this.
- 来,用奶油 `{colors.canvas}` 页面层——永远不要纯白。
- 将每个代码表面( 内置、 块、 IDE 窗体) 渲染为 JetBrains Mono.
- 只在产品内代理可视化内部使用时间线贴面——从不作为系统动作颜色.

### Don't
- Don't introduce a secondary brand action color. Cursor Orange is the only one.
- 显示时不要降为粗体重量( Q)700+). 杂志的声音取决于 400.
- Don't add drop shadows. Hairlines + ink-on-cream contrast carry the depth.
- Don't use timeline pastels on non-timeline UI. They're scoped to the agent timeline only.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA is what appears on actual product CTAs.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 640px | 首屏h( 首屏h)1 72→32px; IDE 模拟崩溃到单面框预览; 特性网格 1- 上; 航海汉堡。 |
| 平板 | 640–1024px | 首屏h( 首屏h)1 56px; IDE 模拟压缩; 特性网格 2- 起来 |
| 桌面 | 1024–1280px | 完全首屏h( 首屏h)1 72px; 完整的多面板 IDE 模拟; 特性网格 3- 起来 |
| 宽 | > 1280px | 内容上限, 时间 1200px. |

### 触控区域
- 初级CTA 时间 40px 高度——在WCAG AA,为AAA加注.
- Download CTA at 44px — at AAA.

### 折叠战略
- 顶端导航切换到下面的汉堡包 768px.
- IDE模拟多面板崩溃为移动上单一主面板预览.
- 特性 grid: 3-up → 2-up → 1-up.


## 迭代指南

1. 一次集中关注单个组件.
2. 默认 CTAs 至 `{rounded.md}` (8px。卡片使用( ) `{rounded.lg}` (12px).
3. 变式作为单独的条目在内部存在 `components:`.
4. 使用 `{token.refs}` 到处都是,从不内含六分法。
5. 霍弗州从未有文献记载.
6. CursorGothic 400 用于展示, 400/500/600 给身体。 JetBrains Mono 每一个代码表面。
7. Cursor 橙子还是很少吃
8. 时光糕点仍可被限定为产品内代理可视化.


## 已知缺口

- CursorGothic is a licensed typeface; Inter is the substitute.
- 动画时间(时间线胶囊形入口,IDE paine 揭示) 出范围.
- 内部应用表面(代码编辑器,聊天面板,代理时长)仅通过营销IDE模型部分捕获.
- 形式验证状态超出焦点,在捕获的表面看不到。

## 设计词元原值

An AI-first code editor whose marketing site reads like a quietly-confident developer-tools brand with a warm-cream editorial canvas (`#f7f7f4`) instead of the typical dark IDE atmosphere. Near-black warm ink (`#26251e`) carries body and display alike — display sits at weight 400 with negative letter-spacing for a magazine feel rather than a bold tech voice. The single brand voltage is **Cursor Orange** (`#f54e00`) reserved for primary CTAs and the wordmark. A signature pastel timeline palette (peach, mint, blue, lavender, gold) marks AI-action stages (Thinking / Reading / Editing / Grepping / Done) — only inside in-product timeline visualizations. Cards use minimal hairlines, no shadows, generous 80px section rhythm. CursorGothic for display/body, JetBrains Mono on every code surface (which is roughly half the page).

```yaml
---
version: alpha
name: Cursor-design-analysis
description: An AI-first code editor whose marketing site reads like a quietly-confident developer-tools brand with a warm-cream editorial canvas (`#f7f7f4`) instead of the typical dark IDE atmosphere. Near-black warm ink (`#26251e`) carries body and display alike — display sits at weight 400 with negative letter-spacing for a magazine feel rather than a bold tech voice. The single brand voltage is **Cursor Orange** (`#f54e00`) reserved for primary CTAs and the wordmark. A signature pastel timeline palette (peach, mint, blue, lavender, gold) marks AI-action stages (Thinking / Reading / Editing / Grepping / Done) — only inside in-product timeline visualizations. Cards use minimal hairlines, no shadows, generous 80px section rhythm. CursorGothic for display/body, JetBrains Mono on every code surface (which is roughly half the page).

colors:
  primary: "#f54e00"
  primary-active: "#d04200"
  ink: "#26251e"
  body: "#5a5852"
  body-strong: "#26251e"
  muted: "#807d72"
  muted-soft: "#a09c92"
  hairline: "#e6e5e0"
  hairline-soft: "#efeee8"
  hairline-strong: "#cfcdc4"
  canvas: "#f7f7f4"
  canvas-soft: "#fafaf7"
  surface-card: "#ffffff"
  surface-strong: "#e6e5e0"
  on-primary: "#ffffff"
  timeline-thinking: "#dfa88f"
  timeline-grep: "#9fc9a2"
  timeline-read: "#9fbbe0"
  timeline-edit: "#c0a8dd"
  timeline-done: "#c08532"
  semantic-error: "#cf2d56"
  semantic-success: "#1f8a65"

typography:
  display-mega:
    fontFamily: "'CursorGothic', system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -2.16px
  display-lg:
    fontFamily: "'CursorGothic', sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.72px
  display-md:
    fontFamily: "'CursorGothic', sans-serif"
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.325px
  display-sm:
    fontFamily: "'CursorGothic', sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.11px
  title-md:
    fontFamily: "'CursorGothic', sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "'CursorGothic', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "'CursorGothic', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-tracked:
    fontFamily: "'CursorGothic', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.08px
  body-sm:
    fontFamily: "'CursorGothic', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'CursorGothic', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "'CursorGothic', sans-serif"
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
    fontFamily: "'CursorGothic', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "'CursorGothic', sans-serif"
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
  section: 80px

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
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  button-download:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 44px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    padding: 80px
  ide-mockup-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 0
  ide-pane:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: 16px
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  comparison-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  timeline-pill-thinking:
    backgroundColor: "{colors.timeline-thinking}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  timeline-pill-grep:
    backgroundColor: "{colors.timeline-grep}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  timeline-pill-read:
    backgroundColor: "{colors.timeline-read}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  timeline-pill-edit:
    backgroundColor: "{colors.timeline-edit}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  timeline-pill-done:
    backgroundColor: "{colors.timeline-done}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  code-block:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 20px
  pricing-tier-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
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
