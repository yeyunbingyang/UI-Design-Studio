# Zapier · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Zapier is the original "connect your apps" workflow automation platform — and the marketing surface today reads as confidently-mature. The brand pairs a warm-cream canvas `{colors.canvas}` (`#fffefb`) with a deep coffee-ink `{colors.ink}` (`#201515`) and a single saturated orange `{colors.primary}` (`#ff4f00`) CTA. The warmth in the neutrals — slightly cream rather than pure white — is the brand's defining temperature signal.

Type carries the second voice. The proprietary `Degular Display` family carries hero displays at weight 500. The brand uses `Inter` for everything else — sub-displays, body, button, eyebrow. The two-face pairing reads as "the brand has its own typeface for the loud moments and uses the workhorse for the rest" — modest and unflashy.

Cards are universally `{rounded.md}` 12 px. Buttons share the same 12 px radius — not pills, not square. The brand sits between the friendly-rounded and the technical-square camps with a deliberate middle position.

**关键特征 :**
- 单一的初级 CTA 颜色 `{colors.primary}` (`#ff4f00`)——饱和橙色,品牌的转换标志.
- 暖油页面底色 `{colors.canvas}` (`#fffefb`)——不是纯白,温度是品牌声音.
- Deep coffee ink `{colors.ink}` (`#201515`) — not pure black. Warmth carries through to text.
- 专有 Degular Display 以首屏级的盟誓, Inter 双面系统,
- `{rounded.md}` 12 px 用于按钮和卡片——品牌的中线签名.
- 一种哑巴奶油/咖啡中性梯子—— `{colors.canvas-soft}` (`#f8f4f0`), `{colors.mute}` (`#c5c0b1`), `{colors.body-mid}` (`#939084`), `{colors.body}` (`#605d52`)——每一个中性携带的都是温暖的,没有一种是凉爽的灰色.


## 配色

### 品牌色与强调色
- **Zapier 橙色** (`{colors.primary}` — `#ff4f00`:单一品牌强调色,每粒初级CTA丸,每颗转化靶,饱和橙色是品牌.

### 界面表面
- **页面底色** (`{colors.canvas}` — `#fffefb`:温暖的离白页背景.
- **软画帘** (`{colors.canvas-soft}` — `#f8f4f0`: 用于卡片/内置区域的凝胶-丁酸软表面.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#201515`:深咖啡——每个标题和主文本.
- **墨水软** (`{colors.ink-soft}` — `#2f2a26`:近黑带褐色暖气.
- **墨水中间** (`{colors.ink-mid}` — `#36342e`:中强调文.
- **体质** (`{colors.body}` — `#605d52`: 默认体文本颜色.
- **体中点** (`{colors.body-mid}` — `#939084`: 二级正文/元数据。
- **静音** (`{colors.mute}` — `#c5c0b1`:最低优先的文字——精细的印刷,低强调的字幕.

### 语义色
The brand doesn't surface a separate semantic palette on its marketing pages. Status / validation cues borrow from the ink + orange hierarchy.


## 字体排版

### 字体族
两人的面孔 系统梯子:
1. **Degular Display** — proprietary geometric display sans used for hero headlines at weight 500. The brand's typographic signature.
2. **Inter** 用于子播放、身体、链接、按钮和眉毛。 400 / 500 / 600 / 700 现时在场。

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 500 | 56px | 0 | Hero headline (Degular Display). |
| `{typography.display-lg}` | 48px | 500 | 48px | 0 | Sub-hero displays (Degular Display). |
| `{typography.display-md}` | 32px | 500 | 36px | 1px | 区域显示( 4)Degular Display,正追踪). |
| `{typography.display-sub-lg}` | 48px | 500 | 49.92px | 0 | Inter- 下方的显示 |
| `{typography.display-sub-md}` | 32px | 400 | 40px | 0 | Inter 子播放器。 |
| `{typography.display-sub-sm}` | 24px | 600 | 30px | -0.6px | Card titles (Inter, semibold). |
| `{typography.display-xs}` | 20px | 700 | 25px | -0.5px | 内置显示微头. |
| `{typography.body-lg}` | 20px | 400 | 30px | -0.2px | 领头段落。 |
| `{typography.body-md}` | 18px | 400 | 27px | 0 | 默认身体. |
| `{typography.body-md-strong}` | 18px | 600 | 27px | 0 | 粗体内内脏. |
| `{typography.body-sm}` | 16px | 400 | 24px | 0 | 身次第身. 师曰. |
| `{typography.body-sm-strong}` | 16px | 600 | 24px | 0 | 粗体标题。 |
| `{typography.caption}` | 14px | 400 | 21px | 0 | 精进印. |
| `{typography.eyebrow-uppercase}` | 14px | 500 | 14px | 1px | 上层的眉毛( 上层的眉毛 )Degular Display,正追踪). |
| `{typography.button-md}` | 18px | 600 | 27px | 0 | Primary button label. |
| `{typography.button-sm}` | 14.4px | 700 | 14.4px | 0.144px | Small button label. |

### 原则
- **Degular Display 500 给首屏的 Inter 其它一切的都一样** 严格角色分离.
- **Positive tracking on the Degular eyebrow** — `1 px` at 14 px is the brand's signature label style.
- **判决案头条。** 品牌从不大写显示大小.

### 替代字体
Degular Display 专有。开源替代品 :
- **Display** — *Inter* weight 500 at hero scale comes closest. *Mona Sans* weight 500 is a softer alternative.
- **Sub-display + body** — *Inter* is the brand's actual second face.


## 布局

### 间距系统
- **基地单位**: 4 px.
- **脚本**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px.
- **分区编栏**: 带使用 `{spacing.4xl}` 64 px 上下两层
- **纸牌内部**: 牌数 `{spacing.xl}` 24 px.

### 网格与容器
- 销售集装箱 ~1280 px 宽;以沟为中心。
- 首屏:在桌面上拆分(左头,右头插图);在移动上堆叠.
- 定价等级 grid: 3 / 4-up at desktop.

### 响应式布局

#### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 768px | 首屏堆栈; 网格 1- 上,汉堡导航 |
| 平板 | 768–1023px | 2- 电网上 |
| 桌面 | ≥ 1024px | 完整网格;首屏分裂. |

#### 触控区域
按钮渲染 ~48 px 高( 高)12 垂直粘贴+ 27 WCAG AAA 已经见过了。

#### 图片适配
The brand uses illustrative SVGs of zaps / workflows + product screenshots inside `{rounded.md}` framed cards. Photography is rare.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default for hero. |
| 职等 1 —— 细边线 | 1 px 固态 `{colors.ink}` 边框。 | Pricing-tier 纸牌界面框架,轮廓按钮。 |
| Level 2 — Soft Card | `{colors.canvas-soft}` cream fill against `{colors.canvas}` page. | Default content cards — surface contrast carries elevation. |


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 满血乐队. |
| `{rounded.sm}` | 6px | 内置胶囊形,形成投入. |
| `{rounded.md}` | 12px | The brand's canonical button + card radius. |
| `{rounded.pill}` | 9999px | 状态药,徽章. |
| `{rounded.full}` | 9999px | Circular 图标容器。 |


## 组件

### 按钮

**`button-primary`** - 橙色的CTA(英语:CTA).
- Background `{colors.primary}`, text `{colors.on-primary}` (warm white), label `{typography.button-md}`, padding `{spacing.md} {spacing.xl}`, shape `{rounded.md}` 12 px.

**`button-secondary`** - 暗咖啡的CTA(CTA) - 黑咖啡的CTA(CTA) - 黑咖啡的CTA(CTA) 黑咖啡的CTA(CTA) 黑咖啡的CTA(CTA) 黑咖啡的CTA(CTA) 黑咖啡的CTA(CTA) 黑咖啡的CTA(CTA) 黑咖啡的CTA(CTA) 黑咖啡的CTA(CTA) 黑咖啡的CTA(CTA) 黑咖啡的CTA(CTA) 黑咖啡的CTA(C) 黑咖啡的CTA(CTA) 黑咖啡的CTA(CTA) 黑咖啡的C(CTA) 黑的C(CTA) 黑的C(CA(CTA) 的CA)
- Background `{colors.ink}`, text `{colors.on-primary}`, same typography / padding / shape.

**`button-tertiary`** ——CTA纲要.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, same typography / padding / shape.

**`button-text`** ——只使用文本的CTA 内卡 / nave.
- Background `{colors.canvas}`, text `{colors.ink}`, body in `{typography.button-sm}`, padding `{spacing.sm} {spacing.lg}`, shape `{rounded.md}`.

### 卡片与容器

**`card-content`** ——默认奶油内容卡.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.md}`.

**`card-feature-cream`** ——奶油特色卡.
- 与 `card-content`,主机头条+正体+插图.

**`card-feature-dark`** 极性飞腾的黑咖啡卡
- Background `{colors.ink}`, text `{colors.on-primary}`, padding `{spacing.xl}`, shape `{rounded.md}`.

**`pricing-card`** ——默认定价等级卡.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, padding `{spacing.xl}`, shape `{rounded.md}`.

**`pricing-card-featured`** 极性倾斜的定价等级。
- Background `{colors.ink}`, text `{colors.on-primary}`, same shape / padding.

### 输入框与表单

**`text-input`** ——文体文字输入.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, body in `{typography.body-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}` 6 px.

### 导航

**`nav-bar`** - 电话 sticky 顶级导航
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.xl}`.

**`nav-link`** ——在导航内链接项目.
- 文字颜色 `{colors.ink}`,设置在 `{typography.body-sm}`.

**`footer`** - 深咖啡页脚。
- Background `{colors.ink}`, text `{colors.canvas-soft}`, padding `{spacing.3xl} {spacing.xl}`. Body in `{typography.body-sm}`.

### 标志性组件

**`hero-band`** 奶油首屏乐队
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Headline in `{typography.display-xl}` (Degular Display 56 px / 500).

**`hero-band-dark`** 极性飞腾的深咖啡首屏
- Background `{colors.ink}`, text `{colors.on-primary}`, same scale.

**`content-band-cream`** ——追随首屏的奶油内容乐队.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Section headline in `{typography.display-lg}`.

**`content-band-light`** ——白内容乐队.
- Background `{colors.canvas}`, text `{colors.ink}`, same padding / scale.

**`eyebrow-uppercase`** ——小UPPERCASE Degular眉毛在片段头条上方.
- 文字颜色 `{colors.ink}`,设置在 `{typography.eyebrow-uppercase}` (14 px / 500 / `1 px` 追踪).

**`badge-pill`** 元数据/标签的内置胶囊形。
- Background `{colors.canvas-soft}`, text `{colors.ink}`, body in `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}`.

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
- Reserve `{colors.primary}` Zapier orange for every primary CTA. The saturated orange IS the conversion signature.
- 保持页面底色的温暖 - `{colors.canvas}` `#fffefb` 奶油,不是纯白色,温度是品牌声音
- 设置首屏头条 `{typography.display-xl}` Degular Display 字重 500。句子 - 大小写,没有大写。
- 平对 Degular Display (首屏,眉毛) 与 Inter 双面人,两个角色
- 使用 `{rounded.md}` 12 px 用于按钮+卡片。中间半径是品牌的签名。
- 配对橙色 CTA 与 ink-dark 有关奶油背景的文本——三趾节奏是品牌的整个转换故事.

### 应避免的做法
- Don't replace cream canvas with pure white. The warmth is the brand.
- Don't use pure black ink. The coffee-warmth in `#201515` carries through every text color.
- Don't render CTAs as pills. The brand's button is 12 px rounded rectangle.
- Don't introduce a second chromatic accent. Orange + cream + coffee is the entire palette.
- Don't substitute Degular Display with a cool geometric sans (e.g., generic Helvetica) — the brand's display face has warm proportions that the substitute doesn't capture.

## 设计词元原值

An inspired interpretation of Zapier's design language — a workflow-automation platform whose surface combines warm-cream neutrals (`#fffefb` canvas, `#f8f4f0` soft cream) with deep coffee ink (`#201515`) and a single saturated orange CTA accent (`#ff4f00`); typography pairs the proprietary Degular Display family at hero scale with Inter for sub-displays and body, giving the brand a confident-warm rather than cool-tech voice.

```yaml
---
version: alpha
name: Zapier-design-analysis
description: An inspired interpretation of Zapier's design language — a workflow-automation platform whose surface combines warm-cream neutrals (`#fffefb` canvas, `#f8f4f0` soft cream) with deep coffee ink (`#201515`) and a single saturated orange CTA accent (`#ff4f00`); typography pairs the proprietary Degular Display family at hero scale with Inter for sub-displays and body, giving the brand a confident-warm rather than cool-tech voice.

colors:
  primary: "#ff4f00"
  on-primary: "#fffefb"
  ink: "#201515"
  ink-soft: "#2f2a26"
  ink-mid: "#36342e"
  body: "#605d52"
  body-mid: "#939084"
  mute: "#c5c0b1"
  canvas: "#fffefb"
  canvas-soft: "#f8f4f0"

typography:
  display-xl:
    fontFamily: Degular Display, Inter, system-ui, -apple-system, sans-serif
    fontSize: 56px
    fontWeight: 500
    lineHeight: 56px
  display-lg:
    fontFamily: Degular Display, Inter, system-ui, sans-serif
    fontSize: 48px
    fontWeight: 500
    lineHeight: 48px
  display-md:
    fontFamily: Degular Display, Inter, system-ui, sans-serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: 1px
  display-sub-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 48px
    fontWeight: 500
    lineHeight: 49.92px
  display-sub-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
  display-sub-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 30px
    letterSpacing: -0.6px
  display-xs:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 20px
    fontWeight: 700
    lineHeight: 25px
    letterSpacing: -0.5px
  body-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: -0.2px
  body-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
  body-md-strong:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 27px
  body-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm-strong:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  caption:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
  eyebrow-uppercase:
    fontFamily: Degular Display, Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 14px
    letterSpacing: 1px
  button-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 27px
  button-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 14.4px
    letterSpacing: 0.144px

rounded:
  none: 0px
  sm: 6px
  md: 12px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
  button-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  card-content:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  card-feature-cream:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  card-feature-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  pricing-card-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  hero-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  content-band-cream:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.4xl} {spacing.xl}"
  content-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.4xl} {spacing.xl}"
  eyebrow-uppercase:
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow-uppercase}"
  badge-pill:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas-soft}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.mute}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    item-divider: "{colors.mute}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.md} {spacing.lg}"
    rowBorder: "{colors.mute}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---
```
