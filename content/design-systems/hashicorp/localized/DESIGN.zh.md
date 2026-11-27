# HashiCorp · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

HashiCorp's marketing canvas is a near-black ground that serves a multi-product portfolio without ever feeling generic. The dominant surface is `{colors.canvas}` (pure black) layered with `{colors.surface-1}` charcoal cards and 1px translucent gray hairlines. The chrome is monochrome — white pill-rounded buttons (`{components.button-primary}`), white type, gray secondary type — but the system is held together by a **palette of per-product accent colors** that signal which HashiCorp tool a given section belongs to: Terraform purple, Vault yellow, Consul red, Waypoint cyan, Vagrant blue, Nomad green, Boundary coral.

显示类型是 **hashicorpSans** 字重 600/700 紧线高( 3)1.17–1.21) 身体类型是同一家庭,位于 500 轻重,有故意放松的直线高(1.50–1.71)——对比感为编辑性,而非企业化. CTAs使用小型. `{rounded.md}` 8px 角而不是丸,它使系统读作开发者-facing而不是消费者-y.

签名设备是 **product-card** 家庭——每个家庭 HashiCorp 产品在家庭和基础设施页面上获得自己的彩色卡片变体,将Terraform提升到紫色地面,Vault提升到黄色,Waypoint提升到青色。这些不是装饰性的梯度,而是身份表层。一个浏览页面的读者可以从眼睛的角落得知一个部分的哪个产品。

**关键特征 :**
- 黑坎瓦斯营销系统: `{colors.canvas}` 首屏、身体、定价、比较表和页脚的表面。
- **产品颜色标识**: 地形 `{colors.product-terraform}`, 断层 `{colors.product-vault}`键, 键位 `{colors.product-waypoint}`流浪汉 `{colors.product-vagrant}`领事 `{colors.product-consul}`,游牧 `{colors.product-nomad}`边框 `{colors.product-boundary}` ——每个都有自己的按钮+卡变体.
- 显示头条运行 hashicorpSans 600/700 配合 line-height 1.17–1.21 (紧);身体运行 同一家庭在 500 配合 1.50–1.71 (松动)——比例差距是品牌的声音.
- CTA 形状为 `{rounded.md}` 8px ——不是胶囊形——保持系统读作开发者工具而不是消费者应用.
- Charcoal surface lift (canvas → surface-1 → surface-2) instead of shadow-driven elevation.
- 1px translucent gray hairlines (`rgba(178,182,189,0.1)`) define cards and dividers — the borders are felt more than seen.
- Eyebrow typography (12–13px, 600 weight, 0.6px positive tracking, uppercase) marks every section as a category label.


## 配色

> Source pages: hashicorp.com/en (home), /en/infrastructure-cloud, /en/products/terraform, /en/pricing, /en/resources?contentType=PDF.

### 品牌色与强调色
- **黑色** ({colors.primary}:系统主表层,坎瓦,页脚,比较表,首屏——都是黑色的.
- **白色** ({colors.on-primary}: 黑色反向文本; 页面底色 `button-primary`.
- **蓝天** ({colors.accent-blue}:超链接横跨营销表面.
- **紫色访问** ({colors.semantic-visited}: 访问链接状态.

### 界面表面
- **页面底色** ({colors.canvas}: 默认页面背景.
- **界面表面 1** ({colors.surface-1}: 木炭在页面底色上方的一步——特色卡,定价卡,资源瓦片.
- **界面表面 2** ({colors.surface-2}:以上两步——特色定价卡,二级按钮,悬浮产品界面框架.
- **界面表面 3** ({colors.surface-3}:以上三步——小筹码,徽章, sub-nav 背景。 。
- **细边线** ({colors.hairline}): 1px 以牌和分牌为边框。
- **柔软的细边线** ({colors.hairline-soft}: 潜行者划分器 - comparison-table 排行数.
- **反向画廊** ({colors.inverse-canvas}:纯白色——用作表面 `button-primary` 仅此而已

### 文字颜色
- **墨水( 墨水 )** ({colors.ink}:所有头条和强调的体型——纯白色.
- **墨水静音** ({colors.ink-muted}: 二级类型 #b2b6bd — meta 信息,页脚列。
- **Ink Subtle** ({colors.ink-subtle}): Tertiary type at #656a76 — form helper text, timestamps, footnotes.

### 生产者身份(签名)
HashiCorp'营销不是由一个单一的强调色颜色来维持的——它是由一个产品特定强调色系统来维持的,每个系统都用来标记一个部分所代表的哪个工具.

- **紫色地表线** ({colors.product-terraform}: 地表部分, 地表CTAs, 紫色 3首屏的D立方体 , 首屏的D立方体 , 首屏的D立方体 , 首屏的D立方体 。
- **地面亮光线** ({colors.product-terraform-bright}:饱和突出点 – 链接强调Terraform页面.
- **黄** ({colors.product-vault}: 断层部分和CTAs.
- **红领官** ({colors.product-consul}领事部门。
- **青色的路标** ({colors.product-waypoint}: 路标部分,深变体 `{colors.product-waypoint-deep}` 用于悬浮/活动。
- **流浪蓝** ({colors.product-vagrant}:流浪区.
- **游牧绿** ({colors.product-nomad}:游牧区。
- **边界珊瑚** ({colors.product-boundary}: 边界段.

### 语义色
- **成功** ({colors.semantic-success}:正态(也作为游牧绿色重新使用).
- **警告** ({colors.semantic-warning}: 警告状态(亦为Vault 黄色).
- **错误** ({colors.semantic-error}:错误状态(也是红领事).
- **琥珀( 琥珀) 100** ({colors.amber-100}:软暖亮度——提取但使用时节制.
- **琥珀( 琥珀) 200** ({colors.amber-200}:饱和琥珀用于警示徽章.
- **蓝色 7** ({colors.blue-7}: 统一核心梯度中使用的深海军.


## 字体排版

### 字体族

- **hashicorpSans** — HashiCorp's proprietary marketing typeface. Geometric, clean, slightly humanist. Fallback stack `__hashicorpSans_Fallback_96f0ca` (system font), then `-apple-system, BlinkMacSystemFont, Segoe UI, helvetica, arial`.

同一家族携带显示器、身体、按钮和字幕——不单独显示+身体对称。500 体 体 / 体 质 600 重点/ 700 和故意采取的 line-height 对比(紧紧的显示,放松的身体).

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 80px | 700 | 1.17 | -2.5px | 最大首屏头条 |
| `{typography.display-lg}` | 56px | 700 | 1.18 | -1.6px | 打开区域头条 |
| `{typography.display-md}` | 40px | 600 | 1.19 | -1.0px | 分节头条 |
| `{typography.headline}` | 28px | 600 | 1.21 | -0.6px | 定价等级标题, CTA 标语标题 |
| `{typography.card-title}` | 22px | 600 | 1.18 | -0.4px | 特性卡标题 |
| `{typography.subhead}` | 20px | 600 | 1.35 | -0.2px | 长式介绍段落 |
| `{typography.body-lg}` | 18px | 500 | 1.69 | 0 | 首屏副标题,牵头机构 |
| `{typography.body}` | 16px | 500 | 1.50 | 0 | 默认正文 |
| `{typography.body-sm}` | 14px | 500 | 1.71 | 0 | 纸体,页脚栏 |
| `{typography.caption}` | 13px | 500 | 1.38 | 0.2px | Meta,比较单元格标签 |
| `{typography.button}` | 14px | 600 | 1.29 | 0 | 胶囊形/ 平方 CTA 按钮 |
| `{typography.eyebrow}` | 12px | 600 | 1.23 | 0.6px | Uppercase section eyebrows |

### 原则

- **紧紧地展示,放松地身体。** 显示位置 line-height 1.17–1.21;身体举起 1.50–1.71。大小 + line-height 对比带等级。
- **字重等级比较小.** 500 体 体 / 体 质 600 重点/ 700 显示。没有光/黑色极端——该品牌读作工程设计。
- **Eyebrow positive-tracked uppercase 12px is the section header.** Every meaningful section has one above the headline.
- **No mono.** Despite being a developer-tools brand, the marketing surface uses no monospace face — code voice is reserved for in-product surfaces.

### 替代字体

If implementing without hashicorpSans, suitable open-source substitutes include **Inter** (closest geometric character set), **Geist Sans**, or **IBM Plex Sans**. Inter at weights 500 / 600 / 700 closely approximates hashicorpSans's proportions; expect to manually adjust line-heights down by ~0.02 to match.


## 布局

### 间距系统

- **基地单位**: 8px (初级增量为: 4 / 8 / 12 / 16 / 24 / 32 / 48).
- **托肯斯(前题)**: `{spacing.hair}` 1px · `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- 纸牌内部 padding: `{spacing.lg}` 24px 产品卡; `{spacing.xl}` 32px 定价卡; `{spacing.xxl}` 48px 是在CTA的旗帜上
- 按钮 padding: 10px vertical · 18px horizontal on `{components.button-primary}`.
- Universal rhythm constant: `{spacing.section}` (96px) vertical gap between major sections.

### 网格与容器

- 最大内容宽度左右 1280px 侧排沟缩放 `{spacing.xxl}` 桌面上下至 `{spacing.lg}` 手机上,我刚从电话里找到的
- Product card grids are 3-up on desktop, 2-up at tablet, 1-up on mobile.
- 定价等级网格为 3- 跨桌面; 下方的比较表使用固定的左宽列。
- 资源目录 (PDF 库) 使用 4- 上方的缩略图网

### 留白规则

The dark canvas IS the whitespace. Sections separate by surface lift (canvas → surface-1) rather than by gaps in white. Within a section, generous `{spacing.xl}` 32px gaps separate cards; `{spacing.lg}` 24px separates rows.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 (flat) | No shadow, no border | Canvas-mounted display type, hero, footer |
| 1 (木炭升降机) | `{colors.surface-1}` + 环境 1px `rgba(178,182,189,0.1)` 边框 | 默认牌、 资源牌、 定价牌 |
| 2 (表1至表1)2 电梯) | `{colors.surface-2}` + 环境 1px `{colors.hairline}` 边框 | 特价卡,悬浮卡, sub-nav |
| 3 (产品色谱) | 产品强调色颜色背景——紫色、紫色、紫黄色、紫色 | 产品展示卡 |

产品色度级不是"模式升降机"——是一种身份装置. Terrorform卡坐落于同一个z-plane上与一个Z-plane. feature-card;区别是意义,而不是深度.

### 装饰性深度

- **3D 产品视觉** ——异位紫色立方体(Terraform),半透明黄色保险箱(Vault),以及类似产品丁化插图坐落在首屏区段的右栏.
- **1px translucent gray hairlines** are the dominant edge — borders are visible without competing.
- **黑暗中没有阴影** 纸牌通过表面变化来提升, 永远不影子.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips / badges |
| `{rounded.sm}` | 6px | 内置标签 |
| `{rounded.md}` | 8px | All CTA buttons, form inputs, list items |
| `{rounded.lg}` | 12px | 特色卡,产品卡,定价卡 |
| `{rounded.xl}` | 16px | 大型示例牌 |
| `{rounded.xxl}` | 24px | CTA 横幅面板 |
| `{rounded.pill}` | 9999px | 眉毛型产品胶囊形(小片) |
| `{rounded.full}` | 9999px | 幻影圈( 市场营销部分) |

### 摄影和图像几何

- 产品 3D插图在其容器内使用全血——没有圆形内罩.
- 顾客的Logo芯片坐上 `{rounded.sm}` 6px 瓷砖 1px 细边线.
- 资源缩略图使用 `{rounded.lg}` 12px 转角


## 组件

### 按钮

**`button-primary`** ——白色圆形重排式CTA. 在所有页面中作为主CTA使用.
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, type `{typography.button}`, padding 10px 18px, rounded `{rounded.md}`.
- 国家住在这里 `button-primary-pressed`.

**`button-secondary`** ——炭圆形-缩影 二级CTA,"读文证"/"聊到销售".
- Background `{colors.surface-2}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

**`button-tertiary`** ——页面底色上赤鬼按钮,只处理文字.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

**`button-product-terraform`** ——Terraform上Terraform的CTA页面.
- Background `{colors.product-terraform}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

**`button-product-vault`** - 黄黄CTA。
- Background `{colors.product-vault}`, text `{colors.inverse-ink}` (yellow needs dark text), type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

**`button-product-waypoint`** - 路标青色CTA。
- Background `{colors.product-waypoint}`, text `{colors.inverse-ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 10px 18px.

(紫色、游牧绿色、红色领事、 边界珊瑚与红色领航者遵循同样的模式) `{colors.product-*}` 符号。 )

### 卡片与容器

**`product-card`** ——默认产品展示卡——表面-1 木炭(变种).
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.

**`product-card-terraform`** ——产品卡,带有Terraform紫色地面(用作身份表,而非模式高地).
- Background `{colors.product-terraform}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.

**`product-card-vault`** - 黄土
- Background `{colors.product-vault}`, text `{colors.inverse-ink}`, otherwise identical structure.

**`product-card-waypoint`** ——路标青色地面.
- Background `{colors.product-waypoint}`, text `{colors.inverse-ink}`, otherwise identical structure.

(其他产品变体随其各自的产品代号也遵循相同的形状. )

**`feature-card`** — Generic feature highlight on surface-1.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.

**`pricing-card`** 定价等级 `/en/pricing`.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 32px.

**`pricing-card-featured`** — Recommended tier (visually emphasized via surface lift).
- Background `{colors.surface-2}`, otherwise identical structure.

**`resource-card`** ——PDF/白纸/指南砖在资源目录中.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.lg}`, padding 16px.

### 输入框与表单

**`text-input`** + **`text-input-focused`** ——在座椅计价表和联系表上填表。
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 10px 14px.
- 焦点状态保留同样的表面;焦点环是 1px `{colors.accent-blue}` 大纲。

### 胶囊形和芯片

**`product-pill`** 小型 product-name 上面的芯片 和在资源卡上 用来标注产品 某部分内容属于。
- Background `{colors.surface-1}`, text `{colors.ink-muted}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px 10px.

### 比较表

**`comparison-row`** ——定价比较表中单行.
- Background `{colors.canvas}`, text `{colors.ink-muted}`, type `{typography.body-sm}`. Row separator is `{colors.hairline-soft}`.

### 中导导线

**`cta-banner`** ——大圆形面板,在长窗页底部使用,并设有一个关闭的CTA.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.subhead}`, rounded `{rounded.xxl}`, padding 48px.

### 导航

**`top-nav`** — Sticky 黑色条 HashiCorp 左标记,主导航链接,以及 a `button-primary` ("签")+. `button-secondary` ("签入")对曰.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, height 64px.
- 移动:主连接崩溃成汉堡包;主CTA仍然可见.

### Footer

**`footer`** —— 电网上线 `{colors.canvas}` 左边的字号 5–6 标题大小链接的列。
- Background `{colors.canvas}`, text `{colors.ink-muted}`, type `{typography.caption}`, padding 64px 32px.


## 设计建议与禁忌

### 建议做法

- 准备金 `{colors.canvas}` (黑色)和(黑色) `{colors.surface-1}` (charcoal)作为系统的两个锚面,页面的每个带都是一个或另一个.
- 介绍关于具体内容的一节时 HashiCorp 产品,使用该产品 `{colors.product-*}` 表示一致——对于节片胶囊形,CTA按钮,以及(酌情)展示卡片背景.
- 使用 `{rounded.md}` 8px 使用CTA按钮; HashiCorp品牌读作是工程设计,而不是消费者.
- 紧紧显示线高( )1.17–1.21) 身体的宽度(1.50–1.71反之亦然,
- 使用眉毛打字法( Name`{typography.eyebrow}`,大写, 0.6px 以上是每一节有意义的内容。
- Use surface lift (canvas → surface-1 → surface-2) to express hierarchy on dark.
- 产品身份储备产品色谱卡;保持通用特征卡 `{colors.surface-1}`.

### 应避免的做法

- Don't ship a light-mode marketing page. HashiCorp's marketing brand IS dark.
- 千万不要在文件外 引入中音灰色文字 `ink` / `ink-muted` / `ink-subtle` 设置。
- Don't square off CTA corners — use `{rounded.md}` 8px, not 0px.
- Don't use a product accent color for a CTA on a page that isn't about that product. Terraform purple on the Vault page is a brand violation.
- Don't combine multiple product accents in the same viewport — the system says "this section is about THIS tool", and mixing accents breaks that signal.
- Don't add drop shadows on dark; surface lift carries elevation.
- Don't replace `hashicorpSans` with a display-only sans for headlines and a different family for body. The brand is held together by one family across the full hierarchy.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Desktop-XL | 1440px | Default desktop layout |
| 桌面 | 1280px | 定价 3- 维持了上网 |
| Tablet | 1024px | Product card grid 3-up → 2-up |
| 移动升 | 768px | 定价比较成为每一级手风琴;导航成为汉堡 |
| 手机 | 480px | 单栏所有东西; display-xl 比额表 80px → ~36px |

### 触控区域

- CTA 按钮( 切换)`button-primary`, `button-secondary`维护 ≥40px 整个景点高度
- 胶囊形是 24px 高高的桌面上,并成长到 28px 触摸视点
- 格式输入持有量 ≥44px 触摸视点上瞄准点

### 窄屏布局调整

- **导航**: 水平导航, 右侧的 CTAs 崩溃到下面的汉堡包覆盖 768px. 初级CTA 保持可见于酒吧。
- **Product card grid**: 3-up → 2-up at 1024px → 1-up below 768px.
- **定价比较表**: 下方每级手风琴发生坍塌 768px 以避免横向滚动。
- **显示类型**: `{typography.display-xl}` 80px 比额表走向 `{typography.display-md}` 40px 移动,同时保留负轨比例。

### 图片适配

- 3D product illustrations (cubes, safes, etc.) maintain aspect ratio and never crop; below 768px they shrink rather than reflow.
- 客户标志水平地刻画比例,并可能以窄宽度包裹到第二行。


## 迭代指南

1. 一次集中关注一个部分,并按其 `components:` 符号名称。
2. When introducing a new section, decide first whether it's a generic feature (surface-1) or a product-identity section (product-* color).
3. 默认正文为 `{typography.body}` 时 间 500 字重; 达到 `{typography.subhead}` 只在CTA旗和特征卡内.
4. 运行 `npx @google/design.md lint DESIGN.md` 编辑后。
5. 添加新的产品变体作为单独的组件条目(`product-card-nomad`, `button-product-consul`) , 编.
6. 将产品调色板作为标识符,而不是装饰。如果在产品上下文之外找到产品颜色,则品牌会漂移。
7. 眉毛类型在每一节之上都是强制的——跳过它使各节读作浮.


## 已知缺口

- 准确的产品颜色六进制值来自 `--mds-color-*` CSS 变量集直接提取; 它们是 HashiCorp其犬齿品牌谱.
- 阴影符号没有广泛的文献记载,因为暗面系统使用表面升力而不是阴影高.
- Form-field 检查页面上看不到错误和验证样式。
- 暗模式是唯一的营销模式——轻模式的适应没有文献记载.
- Product-card 领事、游牧、流浪和边界的变体遵循文件记录的Terraform/Vault/Waypoint模式,但仅以传言形式引用;如果需要正式条目,可添加为 `product-card-consul`, `product-card-nomad`等 类.

## 设计词元原值

An enterprise-infrastructure marketing canvas built around a near-black ground (#000000) and a system of per-product accent colors — Terraform purple, Vault yellow, Consul pink, Waypoint cyan, Vagrant blue — that act as identity tokens rather than decorative palette. Display type is hashicorpSans set in 600/700 with tight 1.17–1.21 line-heights; body type runs the same family at 500 weight with relaxed 1.50–1.71 line-heights. Cards live as charcoal surfaces with 1px translucent gray borders; product showcase cards lift into per-product chromatic gradients. The system reads as confident, technical, and intentionally multi-product — every section quietly signals which HashiCorp tool it represents.

```yaml
---
version: alpha
name: HashiCorp-design-analysis
description: "An enterprise-infrastructure marketing canvas built around a near-black ground (#000000) and a system of per-product accent colors — Terraform purple, Vault yellow, Consul pink, Waypoint cyan, Vagrant blue — that act as identity tokens rather than decorative palette. Display type is hashicorpSans set in 600/700 with tight 1.17–1.21 line-heights; body type runs the same family at 500 weight with relaxed 1.50–1.71 line-heights. Cards live as charcoal surfaces with 1px translucent gray borders; product showcase cards lift into per-product chromatic gradients. The system reads as confident, technical, and intentionally multi-product — every section quietly signals which HashiCorp tool it represents."

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  accent-blue: "#2b89ff"
  ink: "#ffffff"
  ink-muted: "#b2b6bd"
  ink-subtle: "#656a76"
  canvas: "#000000"
  surface-1: "#15181e"
  surface-2: "#1f232b"
  surface-3: "#3b3d45"
  hairline: "#3b3d45"
  hairline-soft: "#252830"
  inverse-canvas: "#ffffff"
  inverse-ink: "#000000"
  product-terraform: "#7b42bc"
  product-terraform-bright: "#911ced"
  product-vault: "#ffcf25"
  product-consul: "#e62b1e"
  product-waypoint: "#14c6cb"
  product-waypoint-deep: "#12b6bb"
  product-vagrant: "#1868f2"
  product-nomad: "#00ca8e"
  product-boundary: "#f24c53"
  amber-100: "#fbeabf"
  amber-200: "#bb5a00"
  blue-7: "#101a59"
  semantic-success: "#00ca8e"
  semantic-warning: "#ffcf25"
  semantic-error: "#e62b1e"
  semantic-visited: "#a737ff"

typography:
  display-xl:
    fontFamily: hashicorpSans
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1.17
    letterSpacing: -2.5px
  display-lg:
    fontFamily: hashicorpSans
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: -1.6px
  display-md:
    fontFamily: hashicorpSans
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.19
    letterSpacing: -1.0px
  headline:
    fontFamily: hashicorpSans
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.21
    letterSpacing: -0.6px
  card-title:
    fontFamily: hashicorpSans
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.4px
  subhead:
    fontFamily: hashicorpSans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: -0.2px
  body-lg:
    fontFamily: hashicorpSans
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.69
    letterSpacing: 0
  body:
    fontFamily: hashicorpSans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: 0
  body-sm:
    fontFamily: hashicorpSans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.71
    letterSpacing: 0
  caption:
    fontFamily: hashicorpSans
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.38
    letterSpacing: 0.2px
  button:
    fontFamily: hashicorpSans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: 0
  eyebrow:
    fontFamily: hashicorpSans
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.23
    letterSpacing: 0.6px

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
  hair: 1px
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
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-primary-pressed:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface-2}"
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
  button-product-terraform:
    backgroundColor: "{colors.product-terraform}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-product-vault:
    backgroundColor: "{colors.product-vault}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-product-waypoint:
    backgroundColor: "{colors.product-waypoint}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  product-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-card-terraform:
    backgroundColor: "{colors.product-terraform}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-card-vault:
    backgroundColor: "{colors.product-vault}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-card-waypoint:
    backgroundColor: "{colors.product-waypoint}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-card-featured:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  resource-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
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
  product-pill:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 64px
  comparison-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
  cta-banner:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.subhead}"
    rounded: "{rounded.xxl}"
    padding: 48px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 32px
---
```
