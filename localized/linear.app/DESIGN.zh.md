# Linear · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Linear's marketing canvas is the deepest dark surface in this collection — `{colors.canvas}` is #010102, essentially pure black with a faint blue tint. On top sits a four-step surface ladder (`{colors.surface-1}` through `{colors.surface-4}`) for cards, panels, and lifted tiles, with hairline borders running from `{colors.hairline}` (#23252a) up through `{colors.hairline-strong}` and `{colors.hairline-tertiary}`. Light gray text (`{colors.ink}` #f7f8f8) carries the body and headlines.

The single chromatic accent is **Linear lavender-blue** `{colors.primary}` (#5e6ad2) — used on the brand mark, focus rings, and the primary CTA button. A lighter hover state (`{colors.primary-hover}` #828fff) and a focus-tinted variant (`{colors.primary-focus}` #5e69d1) extend the same hue. Linear avoids saturated greens, oranges, reds, etc. on the marketing canvas — the only semantic color is `{colors.semantic-success}` (#27a644) for status pills and the rare success indicator.

显示类型运行 Linear习惯的 sans( 与 `SF Pro Display` 倒数),字重 500–700 负数 letter-spacing 缩放从 -3.0px 时 间 80px 下至( 下至) 0 身体上,身体上的家庭是... Linear文本剪辑,并 a Linear Mono 用于产品截图中的代码片段。

The page rhythm is **dense product screenshots** — Linear's marketing leads with high-fidelity captures of the product UI (issue list, project view, dashboard) framed in `{colors.surface-1}` panels with `{rounded.xl}` 16px corners. The chrome is intentionally minimal so the app screenshots can do the heavy lifting.

**关键特征 :**
- **暗黑黑漆黑的营销系统** — `{colors.canvas}` (#010102)是本集最深的黑暗.
- **紫色的品牌强调色** (`{colors.primary}` #5e6ad2)——很少用于品牌标记,焦点,以及初级CTA.
- Four-step surface ladder (canvas → surface-1 → surface-2 → surface-3 → surface-4) carries hierarchy without shadow.
- 显示跟踪牵引力强烈负( N)-3.0px 时 间 80px) 身体坚守 -0.05px.
- 使用卡片 `{rounded.lg}` 12px 角与( ) 1px 细边线边界——不吃药,很少 16px.
- **产品 UI 截图** 销售界面框架是应用软件的暗框。
- No second chromatic color. No atmospheric gradients. No spotlight cards.


## 配色

> Source pages: linear.app (home), /intake, /pricing, /contact/sales, /build.

### 品牌色与强调色
- **紫色蓝色** ({colors.primary}: 签名 Linear 强调色——主要CTA,品牌标记,链接强调.
- **熏烟者霍弗** ({colors.primary-hover}: 轻便薰衣草(#828fff)——主要CTA的徘徊状态.
- **淡色焦点** ({colors.primary-focus}): Focus-ring 锡( 锡)#5e69d1)——重点输入,重点按钮.
- **品牌安全** ({colors.brand-secure}: 哑紫草(原变种).#7a7fad——用于 "Linear 安全层的表面

### 界面表面
- **Canvas** ({colors.canvas}): Default page background — #010102, near-pure black with a faint blue tint.
- **界面表面 1** ({colors.surface-1}:页面底色之上的一步——特色卡,定价卡,产品截图面板.
- **界面表面 2** ({colors.surface-2}:以上两步——特色定价卡,盘点卡.
- **界面表面 3** ({colors.surface-3}:以上三步——线-三边背景, sub-nav.
- **Surface 4** ({colors.surface-4}): Four steps above — bg-level-3, deepest lifted surface.
- **细边线** ({colors.hairline}): 1px 以牌和分牌为边框。
- **发条坚固** ({colors.hairline-strong}: 强壮 1px 边框 —— 输入焦点环 。
- **细边线第三层** ({colors.hairline-tertiary}: 筑巢面的三级边界.
- **反向画廊** ({colors.inverse-canvas}:纯白色——在一小组开口的节片上反向药CTA表面.
- **反面表面 1** ({colors.inverse-surface-1}: 反面页面底色上面的一步.
- **反面表面 2** ({colors.inverse-surface-2}:上两步反向页面底色.

### 文字颜色
- **墨水( 墨水 )** ({colors.ink}:所有头条和强调的体型——浅灰色 #f7f8f8.
- **墨水静音** ({colors.ink-muted}: 二级类型 #d0d6e0 — meta 首屏面板的信息。
- **Ink Subtle** ({colors.ink-subtle}): Tertiary type at #8a8f98 — deselected pricing tabs, footer columns.
- **墨水第三层** ({colors.ink-tertiary}: Quarnernary at (中文(简体) ). #62666d ——已停用,脚注.

### 语义色
- **成功绿色** ({colors.semantic-success}:状态胶囊形,成功指标,营销上唯一的语义色彩.
- **重叠** ({colors.semantic-overlay}:纯黑色覆钵,用于模式.


## 字体排版

### 字体族

- **Linear Display** — Linear'scast 显示 sans; 倒置 `SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto`. 承运人 display-xl 穿过小标题。
- **Linear Text** — Linear定制文本 sans( 切度稍有不同, 用于体积); 相同的倒置堆栈。 carry 车身大小、 按钮标签、 标题 。
- **Linear Mono** — Linear定制单数; 倒置 `ui-monospace, SF Mono, Menlo`。用于产品截图中的代码片段和状态/ID标志。

营销表面将"显示"和"文本"视为一个连续的声音;家族变化是沉默的.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 80px | 600 | 1.05 | -3.0px | 最大首屏头条 |
| `{typography.display-lg}` | 56px | 600 | 1.10 | -1.8px | 打开区域头条 |
| `{typography.display-md}` | 40px | 600 | 1.15 | -1.0px | 分节头条 |
| `{typography.headline}` | 28px | 600 | 1.20 | -0.6px | 定价等级标题, CTA 标语标题 |
| `{typography.card-title}` | 22px | 500 | 1.25 | -0.4px | 特性卡标题 |
| `{typography.subhead}` | 20px | 400 | 1.40 | -0.2px | 牵头机构,介绍段落 |
| `{typography.body-lg}` | 18px | 400 | 1.50 | -0.1px | 首屏小标题,主要段落 |
| `{typography.body}` | 16px | 400 | 1.50 | -0.05px | 默认正文 |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | 纸体,页脚栏 |
| `{typography.caption}` | 12px | 400 | 1.40 | 0 | 说明, meta状态 |
| `{typography.button}` | 14px | 500 | 1.20 | 0 | All button labels |
| `{typography.eyebrow}` | 13px | 500 | 1.30 | 0.4px | 区域眉毛( 浅显正跟踪) |
| `{typography.mono}` | 13px | 400 | 1.50 | 0 | Linear Mono 用于产品截图中的代码 |

### 原则

- **显示时主动负跟踪** (-3.0px 时 间 80px ≈ 4% )),以"小号"表示.
- **单声从展转至体.** Display-xl 时 间 600 身体在吗? 400 同一个家庭, 更窄的重量。
- **眉毛使用正跟踪** (+0.4px)——与负轨显示的对比,将眉毛标记为分类学.
- **单曲只出现在代码背景中.** Linear Mono 生活在产品屏幕上,而不是在销售界面框架上。

### 替代字体

Linear's custom typeface isn't publicly distributed; the documented fallback `SF Pro Display, -apple-system, system-ui` is the recommended substitute on macOS. For cross-platform implementation, **Inter** at weight 500 / 600 / 700 is the closest free substitute. **Geist Sans** is also viable. For mono, **JetBrains Mono** or **Geist Mono** at weight 400 closely approximates Linear Mono.


## 布局

### 间距系统

- **基地单位**: 4px.
- **托肯斯(前题)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- 纸牌内部 padding: `{spacing.lg}` 24px 特征/定价卡; `{spacing.xl}` 32px 使用证照卡; `{spacing.xxl}` 48px 是在CTA的旗帜上
- 胶囊形按钮 padding: 8px vertical · 14px horizontal — Linear's compact button spec.
- 格式输入 padding: 8px vertical · 12px horizontal.

### 网格与容器

- 最大内容宽度左右 1280px.
- Card grids are 3-up at desktop, 2-up at tablet, 1-up at mobile.
- 定价等级网格为 3-上;下面的比较条显示每层的检查标记。
- 产品截图面板横跨全内容宽度——它们都是主角.

### 留白规则

The dark canvas IS the whitespace. Sections separate by lift onto surface-1 panels, not by gaps in white. Within a panel, generous `{spacing.lg}` 24px gaps between content blocks; `{spacing.section}` 96px between sections.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for body type, hero text, footer |
| 1 (木炭升降机) | `{colors.surface-1}` 页面底色的背景, 1px `{colors.hairline}` | 默认牌、 产品面板 |
| 2 (surface-2 lift) | `{colors.surface-2}` background, 1px `{colors.hairline-strong}` | Featured pricing card, hovered cards |
| 3 (surface-3 lift) | `{colors.surface-3}` background | Sub-nav, dropdown menus |
| 4 (焦点环) | 2px `{colors.primary-focus}` 概要 50% 透明度 | 焦点输入, 焦点按钮 |

Linear'深度由表面梯子+细边线边框承载,品牌几乎完全能抵御暗影的落下.

### 装饰性深度

- **产品 UI 截图** 以装饰深度为主。
- **No atmospheric gradients, no spotlight cards.**
- **浅白边缘突出显示** 被抬起的面板的顶端 —— 使暗色表面有微弱的"像素渲染"的感觉.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, status badges |
| `{rounded.sm}` | 6px | 内置标签 |
| `{rounded.md}` | 8px | All buttons, form inputs |
| `{rounded.lg}` | 12px | 定价卡、特征卡、证照卡 |
| `{rounded.xl}` | 16px | 产品截图面板 |
| `{rounded.xxl}` | 24px | 超大CTA旗(稀有) |
| `{rounded.pill}` | 9999px | 定价制表盘、状态胶囊形 |
| `{rounded.full}` | 9999px | 幻象圆圈 |

### 摄影和图像几何

- Product UI screenshots dominate; they sit in `{rounded.xl}` 16px tiles with `{spacing.lg}` 24px outer padding.
- 客户标识瓦制作规模小(~24px 标志高度) `{colors.canvas}` 与无边际.
- 使用证卡时的神通圆圈 `{rounded.full}` 时 间 32–40px 大小,请检查url=值 (帮助).


## 组件

### 按钮

**`button-primary`** ——拉凡德CTA. 默认主CTA遍及所有页面.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 8px 14px, rounded `{rounded.md}`.
- 国家住在这里 `button-primary-pressed` (背景变化至 `{colors.primary-focus}`).
- 霍夫州住在这里 `button-primary-hover` (背景变化至 `{colors.primary-hover}` 轻点的薰衣草。

**`button-secondary`** — Charcoal button. Used for secondary CTAs ("Sign in", "Read changelog").
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.button}`, padding 8px 14px, rounded `{rounded.md}`. 1px `{colors.hairline}` border.

**`button-tertiary`** - 纯文本按钮。
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 8px 14px.

**`button-inverse`** ——白在暗反CTA.
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 8px 14px.

### 定价标签

**`pricing-tab-default`** + **`pricing-tab-selected`** 弹丸切换 `/pricing`.
- Default: `{colors.canvas}` background, `{colors.ink-subtle}` text, rounded `{rounded.pill}`, padding 6px 14px.
- Selected: `{colors.surface-2}` background, `{colors.ink}` text — selected = surface lift.

### 卡片与容器

**`pricing-card`** - 每一级 `/pricing`.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px. 1px `{colors.hairline}` border.

**`pricing-card-featured`** — Recommended tier — surface lift to surface-2.
- Background `{colors.surface-2}`, otherwise identical structure.

**`feature-card`** ——通用特色突出瓦片.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.

**`product-screenshot-card`** ——主导牌型——框型高纯度. Linear app UI 截图.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.xl}`, padding 24px.

**`testimonial-card`** ——客户引文含avatar+名称+角色.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body-lg}`, rounded `{rounded.lg}`, padding 32px.

**`customer-logo-tile`** 顾客的瓷砖小
- Background `{colors.canvas}`, text `{colors.ink-subtle}`, type `{typography.caption}`, rounded `{rounded.xs}`, padding 16px.

**`cta-banner`** 关闭接近页面底部的 CTA 面板 。
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.headline}`, rounded `{rounded.lg}`, padding 48px.

### 输入框与表单

**`text-input`** + **`text-input-focused`** - 表格字段在 `/contact/sales` 并注册覆盖。
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 8px 12px.
- 焦点状态保留同样的表面;焦点环是 2px `{colors.primary-focus}` 概要 50% 透明度。

### 状态和构建页面

**`changelog-row`** - 每一行都进 `/build` (changelog page) 上市版本,日期,和更改.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.xs}`, padding 24px 0. 1px `{colors.hairline}` bottom rule.

**`status-badge`** ——小状态丸.
- Background `{colors.surface-2}`, text `{colors.ink-muted}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 2px 8px.

### 导航

**`top-nav`** — Sticky 暗条 Linear 左侧文字标记,主导航链接以中心为中心,以及 a `button-secondary` ("签入")+ `button-primary` ("开始")对对对.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, height 56px.

### Footer

**`footer`** —— 电网上线 `{colors.canvas}` 与 Linear 左侧的文字标记。
- Background `{colors.canvas}`, text `{colors.ink-subtle}`, type `{typography.caption}`, padding 64px 32px.


## 设计建议与禁忌

### 建议做法

- 准备金 `{colors.canvas}` (#010102)作为系统的锚面——昏暗的蓝色锡是故意的.
- 使用 `{colors.primary}` 紫衣只用于:品牌标记,主CTA,焦点环,链接强调.
- 使用四步的表面梯度进行等级划分。 避免跳过级别 。
- 显示对等字重 600 字重 400 — Linear 反抗 700+ 显示字重。
- 应用负数 letter-spacing 积极展示。
- 使用产品UI截图作为每个部分的主角.
- 将 CTA 组成为 `{rounded.md}` 8px 转角

### 应避免的做法

- Don't ship a light-mode marketing page.
- Don't use lavender as a section background or card fill.
- Don't introduce a second chromatic accent (orange, pink, green for marketing).
- Don't add atmospheric gradients or spotlight cards.
- Don't pill-round CTAs.
- Don't use `#000000` true black as the canvas.
- 产品截图模型中不要结合多种亮强调色.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Desktop-XL | 1440px | Default desktop layout |
| 桌面 | 1280px | 纸牌网格 3- 维持上调 |
| Tablet | 1024px | Card grid 3-up → 2-up |
| 移动升 | 768px | 定价比较变成手风琴;导航汉堡 |
| 手机 | 480px | 单栏; display-xl 比额表 80px → ~36px |

### 触控区域

- 反恐协定 ≥40px 整个景点高度
- 定价的胶囊形 ≥36px 音响高度; 触摸视图端口增长到 ≥44px.
- 格式输入持有量 ≥44px 触控目标

### 窄屏布局调整

- **顶端导航**: 链接崩溃到下面的汉堡 768px.
- **Card grids**: 3-up → 2-up at 1024px → 1-up below 768px.
- **定价比较**: 下方每一级手风琴 768px.
- **显示类型**: `{typography.display-xl}` 80px 比额表走向 `{typography.display-md}` 40px 手机上,我刚从电话里找到的

### 图片适配

- 产品UI截图保持了宽度比,永远不裁剪.
- 门厅的客户标志可能会从 6- 最多为 3- 上层 768px.


## 迭代指南

1. 一次集中关注一个部分,并按其 `components:` 符号名称。
2. When introducing a section, decide first which surface lift it lives on.
3. 默认正文为 `{typography.body}` 字重 400.
4. 运行 `npx @google/design.md lint DESIGN.md` 编辑后。
5. 添加新的变体作为单独的组件条目.
6. 将薰衣草视为稀缺:品牌标志,主CTA,焦点,链接重点.
7. 带领每个区段,并带一个产品UI截图.


## 已知缺口

- The four-step surface ladder values are extracted directly from Linear's `--color-bg-level-3`, `--color-line-tint`, etc. CSS variables; they are Linear's canonical surface spec.
- Form-field 检查页面上看不到错误和验证样式。
- 光模式没有被记录,因为营销网站没有传送一个光主题.
- Linear'实际产品UI使用更丰富的色塔色调色板(红,橙,黄,绿,蓝,紫)来进行发行优先级和项目标签——这些颜色活在模型显示的产物表面.
- The custom display, text, and mono families are proprietary; an open-source substitute is acceptable.

## 设计词元原值

近黑产品集中的营销布条 #010102 (本集任何工具的最深暗表面),浅灰色文本(#f7f8f8)和签名 Linear 紫色蓝色( 紫色)#5e6ad2)作为单一的色调强调色。系统读作软件手动文档:密集、技术、以及静静的奢侈。显示类型设置在 Linear 习惯桑( E)SF Pro Display 倒计时) 500–700 以木炭板为活体(#0f1011),带有细边线边框. 强调色薰衣草出现在品牌标记上,焦点环,以及一些有意的CTA上——永远不装饰. 页面节奏倚靠产品UI的截图,用暗面板而不是大气颜色框框.

```yaml
---
version: alpha
name: Linear-design-analysis
description: "A near-black product-focused marketing canvas built around #010102 (the deepest dark surface of any tool in this collection), light gray text (#f7f8f8), and the signature Linear lavender-blue (#5e6ad2) used as the single chromatic accent. The system reads as software-craft documentation: dense, technical, and quietly luxurious. Display type is set in the Linear custom sans (SF Pro Display fallback) at 500–700 with measured negative tracking. Cards live as charcoal panels (#0f1011) with hairline borders. The accent lavender appears on the brand mark, focus rings, and a few intentional CTAs — never decoratively. Page rhythm leans on product UI screenshots framed in dark panels rather than atmospheric color."

colors:
  primary: "#5e6ad2"
  on-primary: "#ffffff"
  primary-hover: "#828fff"
  primary-focus: "#5e69d1"
  ink: "#f7f8f8"
  ink-muted: "#d0d6e0"
  ink-subtle: "#8a8f98"
  ink-tertiary: "#62666d"
  canvas: "#010102"
  surface-1: "#0f1011"
  surface-2: "#141516"
  surface-3: "#18191a"
  surface-4: "#191a1b"
  hairline: "#23252a"
  hairline-strong: "#34343a"
  hairline-tertiary: "#3e3e44"
  inverse-canvas: "#ffffff"
  inverse-surface-1: "#f5f6f6"
  inverse-surface-2: "#f6f7f7"
  inverse-ink: "#000000"
  brand-secure: "#7a7fad"
  semantic-success: "#27a644"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Linear Display
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -3.0px
  display-lg:
    fontFamily: Linear Display
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -1.8px
  display-md:
    fontFamily: Linear Display
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -1.0px
  headline:
    fontFamily: Linear Display
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.6px
  card-title:
    fontFamily: Linear Display
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.4px
  subhead:
    fontFamily: Linear Display
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: -0.2px
  body-lg:
    fontFamily: Linear Text
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.1px
  body:
    fontFamily: Linear Text
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.05px
  body-sm:
    fontFamily: Linear Text
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: Linear Text
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  button:
    fontFamily: Linear Text
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Linear Text
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0.4px
  mono:
    fontFamily: Linear Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0

rounded:
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
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  button-primary-pressed:
    backgroundColor: "{colors.primary-focus}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  button-inverse:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  pricing-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-card-featured:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-screenshot-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  customer-logo-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 16px
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  pricing-tab-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  pricing-tab-selected:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  cta-banner:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.lg}"
    padding: 48px
  changelog-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 24px 0
  status-badge:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 2px 8px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 56px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 32px
---
```
