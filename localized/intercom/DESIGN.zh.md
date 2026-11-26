# Intercom · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Intercom营销布是一块软奶油白色的地面(`{colors.canvas}` ≈ #f5f1ec)——不是纯白色. 温暖是品牌的信号:这是编辑,冷静,以产品为主,不是亮丽的SaaS. 奶油页面底色上坐着白色浮牌(英语:White flobal cards).`{colors.surface-1}`),薄毛线分线器(`{colors.hairline}`)和木炭类型(`{colors.ink}` #111111).

显示类型是 **Saans** — Intercom专有几何参数——设定为字重 500 已测量为负数 letter-spacing (-2.0px 打开 72px 显示)。字重时,身体类型是同一个家族。 400。单独为 **SaansMono**,节制用于代码片段和产品UI截图嵌入在营销表面.

单色强调色是 **芬奥兰治** (`{colors.fin-orange}` #ff5600) — IntercomAI产品品牌颜色。它浮现在Fin产品CTA、Fin徽章的定价以及一些内含式强调瞬间。它不是系统主色调,系统主色调是木炭 `{colors.ink}`. Intercom 也维持一个小的 **报表调色板** (`{colors.report-blue}`, `{colors.report-green}`, `{colors.report-pink}`, `{colors.report-lime}`)在模型中显示的产物内分析表面。

页面节奏很重 **产品模型**:每个区段的载荷都是高真实度截图,显示 Intercom产品 UI, 以白卡装框, 使用 `{rounded.xl}` 16px 角 销售的铬是故意的安静的,这样产品就可以成为主角.

**关键特征 :**
- **奶油页面底色** (`{colors.canvas}` #f5f1ec)是该品牌的界定表面——既不是白色,也不是灰色,故意温暖.
- 产品-屏幕弹射引导的页面节奏:每个节点都设置一个产品模拟卡,营销铬保持最低水平.
- **Saans** 专有 sans-serif 带有整个等级; SaansMono 用于只使用代码的上下文。
- **木炭矿** `{colors.ink}` (#111111)是系统主——按钮,头条,身体类型都坐落在木炭上.
- **芬奥兰治** (`{colors.fin-orange}` #ff5600)是AI产品颜色——在Fin CTA和Fin徽章上使用,从未装饰过.
- 显示跟踪牵引力强烈负( N)-2.0px 打开 72px) 身体留在原处 0.
- 牌角保持谦虚 `{rounded.lg}` 12px 财务报告和已审计财务报表 `{rounded.xl}` 16px ——从不圆丸;从不圆方.


## 配色

> Source pages: intercom.com (home), /pricing, /helpdesk, /customers, /helpdesk/inbox.

### 品牌和 强调色
- **木炭矿** ({colors.ink}:系统主表面 头条,身体类型,主CTA丸背景——全部为木炭.
- **白色** ({colors.on-primary}: 木炭CTAs上的文字;浮牌布.
- **芬奥兰治** ({colors.fin-orange}:AI产品强调色,在Fin CTA,Fin徽章上使用,还有一小段内线强调瞬间.
- **橙色报告** ({colors.report-orange}:报告内部使用的略为不同的橙色/用于产品模型的分析调色板.
- **蓝蓝** ({colors.brand-blue}:饱和品牌蓝色(#0007cb)——用于一套小的营销插图上.

### 表面
- **页面底色** ({colors.canvas}: 默认页面背景——软奶油-白色 #f5f1ec.
- **表面 1** ({colors.surface-1}:纯白色——用于浮牌(定价,特征,,). product-mockup).
- **表面 2** ({colors.surface-2}:稍暗的奶油——启动贴现旗,alt-row条纹.
- **细边线** ({colors.hairline}): 1px 纸牌上的边框——软暖灰色(#d3cec6).
- **柔软的细边线** ({colors.hairline-soft}:甚至FAQ行和页脚列之间的较软的划分.
- **反向画廊** ({colors.inverse-canvas}:纯黑色——只在证照/引文呼号条上.
- **反面表面 1** ({colors.inverse-surface-1}: 一步轻一点——在暗处徘徊的脚踏车物品.

### 文本
- **墨水( 墨水 )** ({colors.ink}:所有头条,车身类型,按钮标签——木炭 #111111.
- **墨水静音** ({colors.ink-muted}: 二级类型 #626260 — meta 信息,取消选择的定价标签。
- **Ink Subtle** ({colors.ink-subtle}): Tertiary type at #7b7b78 — footer columns, helper text.
- **墨水第三层** ({colors.ink-tertiary}: Quarnernary 类型, 位于 #9c9fa5 ——已停用,脚注.
- **反向墨水** ({colors.inverse-ink}: 黑色上白色——引文-字符串类型.
- **反向墨水静音** ({colors.inverse-ink-muted}: 黑色上浅灰色——引文字符串 meta.

### 语义和报告调色板(产品模型)
- **红字错误** ({colors.semantic-error}:形式验证,破坏性状态.
- **成功绿色** ({colors.semantic-success}:正态(亦有) `{colors.report-green}`).
- **蓝色报告** ({colors.report-blue}:分析图蓝.
- **报告粉红色** ({colors.report-pink}:分析图粉红色.
- **报告林姆** ({colors.report-lime}:分析图石灰.
- **报告青色** ({colors.report-cyan}:电话乡村选音.

报告调色板显示INSID产品UI模型——这些是 Intercom产品图中的颜色,而不是营销表面的颜色。


## 字体排版

### 字体家族

- **Saans** — Intercom专有几何色素, 倒置 `Saans Fallback, ui-sans-serif, system-ui`. . . . . . . .
- **SaansMono** ——独资独资,倒置. `SaansMono Fallback, ui-monospace`产品模型中显示的代码内部使用片段。

同一家族承载着整个等级,等级由大小+字重+跟踪承载,而不是由家族变化承载.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 500 | 1.05 | -2.0px | 最大首屏头条 |
| `{typography.display-lg}` | 56px | 500 | 1.10 | -1.4px | 打开区域头条 |
| `{typography.display-md}` | 40px | 500 | 1.15 | -0.8px | 分节头条 |
| `{typography.headline}` | 28px | 500 | 1.20 | -0.5px | 定价等级标题,CTA旗 |
| `{typography.card-title}` | 22px | 500 | 1.25 | -0.3px | 名片标题, 特征卡 |
| `{typography.subhead}` | 20px | 400 | 1.40 | -0.2px | 牵头机构,介绍段落 |
| `{typography.body-lg}` | 18px | 400 | 1.50 | -0.1px | 首屏小标题,主要段落 |
| `{typography.body}` | 16px | 400 | 1.50 | 0 | 默认正文 |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | 纸牌体,页脚 |
| `{typography.caption}` | 12px | 400 | 1.40 | 0 | 说明, meta |
| `{typography.button}` | 15px | 500 | 1.20 | 0 | 胶囊形/ 平方按钮标签 |
| `{typography.eyebrow}` | 14px | 500 | 1.30 | 0 | 科眉(判决案件) |
| `{typography.mono}` | 13px | 400 | 1.50 | 0 | SaansMono 用于模型中的代码 |

### 原则

- **字重 500 带显示。** Saans 时 间 500 读起来很自信,没有胆量。
- **负数 letter-spacing 大小的天平。** -2.0px 时 间 72px (≈3% 大小),下至 0 身体上,我们有
- **线高的显示器紧紧,身体放松.** 1.05 时 间 display-xl, 1.50 身体上,我们的身体。
- **铬上没有单体** SaansMono 产品UI; 销售铬留在 Saans.
- **眉部使用句子大小写** 时 间 14px / 500 字重——无全头追踪.

### Note on Font Substitutes

If implementing without Saans, suitable substitutes include **Söhne** (paid), **Inter** (free, weight 500), or **Geist Sans** (free). Inter at weight 500 is the closest free substitute; SaansMono can be approximated with **JetBrains Mono** at weight 400.


## 布局

### 间距系统

- **基地单位**: 8px.
- **托肯斯(前题)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- 纸牌内部 padding: `{spacing.lg}` 24px 定价/地产卡; `{spacing.xl}` 32px 凭证/贴现卡; `{spacing.xxl}` 48px 是在CTA的旗帜上
- 胶囊形按钮 padding: 10px vertical · 18px horizontal.

### 网格容器( C)

- 最大内容宽度左右 1280px.
- Card grids are 3-up at desktop, 2-up at tablet, 1-up at mobile.
- 定价等级网格为 3-上;下面的比较条显示每层的检查标记。
- 产品模拟卡横跨全内容宽度——是每个片段的主角.

### 白空间哲学

奶油布是工作白空间在另一个品牌。`{spacing.section}` 96px)加升降白牌.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for body type, hero text, footer |
| 1 (升起的奶油) (笑声) | `{colors.surface-1}` 白色背景显示 `{colors.canvas}` 奶油,你来点什么? | 定价卡、特征卡、产品模型 |
| 2 (电线升降机) | `{colors.surface-1}` + 1px `{colors.hairline}` 边框 | 带有额外定义的浮动牌 |
| 3 (deep accent) | `{colors.inverse-canvas}` true black | Quote / testimonial callout strip |

Intercom 电阻下降阴影 深度通过白亮亮的表面变化来传播

### 装饰性深度

- **产品 UI 模型** 主导每个区段的右栏或中段——这些是截图,而不是插图.
- **No atmospheric gradients, no spotlight cards, no pastel section blocks.** The cream + white system is deliberately restrained.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | 小型芯片、徽章 |
| `{rounded.sm}` | 6px | 内置标签 |
| `{rounded.md}` | 8px | All buttons, form inputs |
| `{rounded.lg}` | 12px | 定价卡、特征卡、FAQ列 |
| `{rounded.xl}` | 16px | 产品模拟卡 |
| `{rounded.xxl}` | 24px | 超大CTA旗号 |
| `{rounded.pill}` | 9999px | 标签切换 |
| `{rounded.full}` | 9999px | 幻象圆圈 |

### 摄影和图像几何

- 产品UI截图占据了营销的一面;它们坐在那里 `{rounded.xl}` 16px 瓷砖。
- 客户标识瓦制作规模小(~24–32px 标志高度) `{colors.canvas}` 奶油无边际.
- 使用证卡时的神通圆圈 `{rounded.full}` 时 间 40–48px 大小,请检查url=值 (帮助).


## 组件

### 按钮

**`button-primary`** ——炭CTA. 默认主CTA遍及所有页.
- Background `{colors.ink}`, text `{colors.on-primary}`, type `{typography.button}`, padding 10px 18px, rounded `{rounded.md}`.
- 国家住在这里 `button-primary-pressed`.

**`button-secondary`** 奶油上的白色按钮,用于二级CTA.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.button}`, padding 10px 18px, rounded `{rounded.md}`. 1px `{colors.hairline}` border.

**`button-tertiary`** - 纯文本按钮。
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

**`button-fin`** ——Fin Orange CTA——为Fin AI产品CTA保留.
- Background `{colors.fin-orange}`, text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

### 定价标签

**`pricing-tab-default`** + **`pricing-tab-selected`** 弹丸切换 `/pricing`.
- Default: `{colors.canvas}` background, `{colors.ink-muted}` text, rounded `{rounded.pill}`.
- Selected: `{colors.surface-1}` white background, `{colors.ink}` text — selected = lift onto white.

### 纸牌和集装箱

**`pricing-card`** - 每一级 `/pricing`.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.

**`pricing-card-featured`** ——特色/推荐等级——倒置木炭.
- Background `{colors.ink}`, text `{colors.on-primary}`, otherwise identical structure.

**`feature-card`** ——通用特色突出.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.

**`product-mockup-card`** ——占优势的卡型——帧高纯度产品UI截图.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.xl}`, padding 24px.

**`testimonial-card`** ——客户引文与avatar+名称+公司.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body-lg}`, rounded `{rounded.lg}`, padding 32px.

**`startup-discount-card`** - "开始" 90% 关闭"锡卡。
- Background `{colors.surface-2}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 32px.

**`customer-logo-tile`** 顾客的瓷砖小
- Background `{colors.canvas}`, text `{colors.ink-muted}`, type `{typography.caption}`, rounded `{rounded.xs}`, padding 16px.

**`cta-banner`** 关闭接近页面底部的 CTA 面板 。
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.headline}`, rounded `{rounded.lg}`, padding 48px.

### 输入表单( F)

**`text-input`** + **`text-input-focused`** ——在联系和搜索上填表字段。
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 10px 14px.

### 财务问题

**`faq-row`** ——定价FAQ中可扩展手风琴排行.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 24px. 1px `{colors.hairline-soft}` bottom rule.

### 导航

**`top-nav`** — Sticky 奶油条 Intercom 字标记左,导航链接以中心为中心,登录+注册对右.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, height 56px.

### Footer

**`footer`** —— 电网上线 `{colors.canvas}` 奶油加热 Intercom 左侧的文字标记。
- Background `{colors.canvas}`, text `{colors.ink-muted}`, type `{typography.caption}`, padding 64px 32px.


## 设计建议与禁忌

### 执行

- 准备金 `{colors.canvas}` 奶油作为系统的锚面——永不以纯白色取代.
- Lift cards from cream onto white (`{colors.surface-1}`) for hierarchy.
- 使用 **`button-fin`** 芬橙只出现在芬AI产品CTA和芬胸章上.
- 平对 Saans 显示在字重 500 尸体在,在 400.
- 使用产品UI截图作为每个部分的主角.
- 使用 `{rounded.lg}` 12px 用于卡片和 `{rounded.xl}` 16px 用于产品模拟瓷砖。
- 将负跟踪按比例应用到显示大小 。

### Don't

- Don't use pure white as the canvas.
- Don't use Fin Orange as a section background or as a generic primary CTA.
- Don't add drop shadows to floating cards.
- Don't introduce a second display family.
- Don't pill-round CTAs.
- Don't write all-caps tracked eyebrows.
- Don't promote the report palette colors to brand-level surfaces.
- Don't combine charcoal CTAs and Fin Orange CTAs in the same viewport.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Desktop-XL | 1440px | Default desktop layout |
| 桌面 | 1280px | 纸牌网格 3- 维持上调 |
| Tablet | 1024px | Card grid 3-up → 2-up |
| 移动升 | 768px | 定价比较变成手风琴;导航汉堡 |
| 手机 | 480px | 单栏; display-xl 比额表 72px → ~32px |

### 触控区域

- 反恐协定 ≥40px 整个景点高度
- 定价的胶囊形 ≥40px 高音调音高。
- 格式输入持有量 ≥44px 触控目标

### 折叠战略

- **顶端导航**: 链接崩溃到下面的汉堡 768px;主 CTA 仍然可见 。
- **Card grids**: 3-up → 2-up at 1024px → 1-up below 768px.
- **定价比较**: 下方每层手风琴发生折叠 768px.
- **显示类型**: `{typography.display-xl}` 72px 比额表走向 `{typography.display-md}` 40px 手机上,我刚从电话里找到的

### 图像行为

- 产品UI截图保持了宽度比,永远不裁剪.
- 门厅的客户标志可能会从 6- 最多为 3- 上层 768px.


## 迭代指南

1. 一次集中关注一个部分,并按其 `components:` 符号名称。
2. 介绍一节时,先决定是否在 `{colors.canvas}` 奶油(默认)或是否升到一个 `{colors.surface-1}` 白牌(原变种).
3. 默认正文为 `{typography.body}` 字重 400.
4. 运行 `npx @google/design.md lint DESIGN.md` 编辑后。
5. 添加新的变体作为单独的组件条目.
6. 将芬橙作为产品强调色:Fin CTA和芬胸章仅限.
7. 带领每个部分 以产品截图。


## 已知缺口

- 电话 **报表调色板** 产品分析仪表板在营销模型中制造; 其完整性被记录,但并非品牌表面颜色。
- Form-field 检查页面上看不到错误和验证样式。
- 暗模式没有被记录,因为营销网站没有传送暗主题.
- 帮助台/收件箱产品表面显示产品UI表示并非正式营销铬.
- Saans and SaansMono are proprietary; an open-source substitute (Inter, Söhne, Geist) is acceptable.

## 设计词元原值

An editorial customer-service marketing canvas built around a soft cream-white ground, charcoal type set in Saans (Intercom's proprietary geometric sans), and a single confident Fin Orange (#ff5600) reserved for the Fin AI brand. Cards live as floating white tiles with thin hairline borders and minimal radii (8–16px). Display headlines run Saans at weight 500 with measured negative tracking. The system reads as a careful, product-led publication: product screenshots dominate, ornament is rare, and the only place chromatic energy enters is the Fin Orange CTA.

```yaml
---
version: alpha
name: Intercom-design-analysis
description: "An editorial customer-service marketing canvas built around a soft cream-white ground, charcoal type set in Saans (Intercom's proprietary geometric sans), and a single confident Fin Orange (#ff5600) reserved for the Fin AI brand. Cards live as floating white tiles with thin hairline borders and minimal radii (8–16px). Display headlines run Saans at weight 500 with measured negative tracking. The system reads as a careful, product-led publication: product screenshots dominate, ornament is rare, and the only place chromatic energy enters is the Fin Orange CTA."

colors:
  primary: "#111111"
  on-primary: "#ffffff"
  ink: "#111111"
  ink-muted: "#626260"
  ink-subtle: "#7b7b78"
  ink-tertiary: "#9c9fa5"
  canvas: "#f5f1ec"
  surface-1: "#ffffff"
  surface-2: "#ebe7e1"
  inverse-canvas: "#000000"
  inverse-surface-1: "#313130"
  inverse-ink: "#ffffff"
  inverse-ink-muted: "#9c9fa5"
  hairline: "#d3cec6"
  hairline-soft: "#ebe7e1"
  fin-orange: "#ff5600"
  report-orange: "#fe4c02"
  report-blue: "#65b5ff"
  report-green: "#0bdf50"
  report-pink: "#ff2067"
  report-lime: "#b3e01c"
  report-cyan: "#03b2cb"
  brand-blue: "#0007cb"
  semantic-error: "#c41c1c"
  semantic-success: "#0bdf50"

typography:
  display-xl:
    fontFamily: Saans
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -2.0px
  display-lg:
    fontFamily: Saans
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: -1.4px
  display-md:
    fontFamily: Saans
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.8px
  headline:
    fontFamily: Saans
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: -0.5px
  card-title:
    fontFamily: Saans
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.3px
  subhead:
    fontFamily: Saans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: -0.2px
  body-lg:
    fontFamily: Saans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.1px
  body:
    fontFamily: Saans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body-sm:
    fontFamily: Saans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: Saans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  button:
    fontFamily: Saans
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Saans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0
  mono:
    fontFamily: SaansMono
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
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-primary-pressed:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-fin:
    backgroundColor: "{colors.fin-orange}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  pricing-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-card-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-mockup-card:
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
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 16px
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 14px
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 14px
  pricing-tab-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  pricing-tab-selected:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  faq-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  cta-banner:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.lg}"
    padding: 48px
  startup-discount-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 56px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 32px
---
```
