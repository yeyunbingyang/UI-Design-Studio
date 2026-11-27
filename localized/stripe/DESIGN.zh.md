# Stripe · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Stripe设计语言以渐变网开口。 宽水平带的面霜、雪贝橙、薰衣草、电红粉几乎占据每个营销页面的上三分之一, 品牌的大气背景立即可以识别。 UI 模型和产品浮在上方 。 `{colors.canvas}` (白色),梯度同时作为装饰和视觉锚地。页面的下部返回白色,并带有特性解释。 `{colors.canvas-soft}` (一种几乎不透气的冷却脱白)和仪表板产品模拟器在深海军中被合成为Faux IDE/锥面板.

色彩系统有两个主要角色. **英迪戈语Name** (`{colors.primary}` — `#533afd`)是品牌的标志CTA颜色,使用时节制:每段装药1粒. **深海军** (`{colors.ink}` — `#0d253d`)是通用体文字颜色和装填仪表板模型,有特色的定价等级,以及仪表板轨迹上的暗应用表面. Ruby ().`{colors.ruby}`)和红衣(`{colors.magenta}`) 出现在梯度网格内,并作为产品UI模型中的强调色点;它们不被用作按钮颜色.

字型是围绕 **索恩语** 字重 300 负数 letter-spacing ——品牌编辑密度显示签名. 显示大小( 3) :32–56px使用( ) -1.4px 改为: -0.64px 跟踪; 使用体积 0;表格标题大小(其中金钱和数字很重要)使用 OpenType `tnum` 特性加紧身 -0.36 改为: -0.42px 追踪。 `ss01` 在所有角色中启用了样式集。

**关键特征 :**
- 每一个营销首屏的背景——奶油/橘子/薰衣草/因迪戈/Ruby横向冲洗,横跨页面的上三分之一。
- 单印度 CTA 等级:填充 `{colors.primary}` 胶囊形是市场表面唯一装满的按钮
- Sohne thin (weight 300) display tier with negative tracking from -1.4px to -0.2px depending on size.
- 表格图体类型( Name`tnum`),用于任何含有钱或数字的单元格——该品牌的静态财务数据信号.
- 暗应用仪表盘轨迹:深海军产品UI模型坐落在白色页面底色上方,经常在内部装有渲染的代码或仪表盘表.
- Pill-shaped buttons (`{rounded.pill}` 9999px) with tight `8px 16px` padding — short, decisive, transactional.
- 奶油带特色卡( Name`{colors.canvas-cream}`)引入蓝色/白色段间温和的插曲,而不打破品牌的色谱逻辑.


## 配色

> **Source pages:** home (`/`), `/payments`, `/pricing`, `dashboard.stripe.com/register/payments`.

### 品牌色与强调色
- **英迪戈语Name** (`{colors.primary}` — `#533afd`:品牌的标志CTA颜色. 填充式溢出按钮,链接强调,梯度锚.
- **深渊** (`{colors.primary-deep}` — `#4434d4`: 更深的indigo在梯度中停时使用,并作为新闻状态更温暖的替代品.
- **印地哥出版社** (`{colors.primary-press}` — `#2e2b8c`:按下一级升降机.
- **软软的Indigo** (`{colors.primary-soft}` — `#665efd`:一种产品-UI强调色和图表亮点中使用的轻度的indigo.
- **内脏已制服** (`{colors.primary-bg-subdued-hover}` — `#b9b9f9`: pale indigo fill 用作软标签背景.
- **浅色 900** (`{colors.brand-dark-900}` — `#1c1e54`: 专用定价等级和仪表板界面框架上使用的深海军.
- **鲁比** (`{colors.ruby}` — `#ea2261`:渐变的强调色和图表突出;从不扣.
- **红** (`{colors.magenta}` — `#f96bee`: 渐变的粉色更亮点。
- **柠檬** (`{colors.lemon}` — `#9b6829`:温暖的雪贝在梯度背景中停止.

### 界面表面
- **页面底色** (`{colors.canvas}` — `#ffffff`: 默认页面背景.
- **软画帘** (`{colors.canvas-soft}` — `#f6f9fc`: 渐变首屏下面的特征带上使用的冷淡的淡白.
- **油菜酱** (`{colors.canvas-cream}` — `#f5e9d4`: 用作一种温暖的奶油 feature-band 填充——品牌的色调插曲.
- **细边线** (`{colors.hairline}` — `#e3e8ee`): 1px 纸牌和桌子上的边框。
- **细边线输入** (`{colors.hairline-input}` — `#a8c3de`:形式输入上使用的稍凉的细边线.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#0d253d`: 品牌上默认的车身文字颜色,深海军,从不纯黑色.
- **墨水中学** (`{colors.ink-secondary}` — `#273951`: 白话的副文字.
- **墨水哑声** (`{colors.ink-mute}` — `#64748d`:帮助者文字,标题,表格标签.
- **墨水哑声 2** (`{colors.ink-mute-2}` — `#61718a`: 近似于 ink-mute 用于导航。
- **小学** (`{colors.on-primary}` — `#ffffff`: 文本在indigo/上 : dark-navy 表面, 显示

### 语义色
The brand does not use a separate semantic color palette in the marketing system — error / success states live in dashboard-product UI specifically.


## 字体排版

### 字体族

The display and UI tier is **Sohne** (proprietary, licensed from Klim Type Foundry) at weights 300 (thin) and 400 (regular). The variable font (`sohne-var`) is loaded with `font-feature-settings: "ss01"` enabled globally — the stylistic set substitutes a single-story `a` and other character variants that are part of the brand's typographic signature.

When Sohne is unavailable, fall back to **SF Pro Display** at thin weights, then system-ui. For maximum brand fidelity, **Inter** (open-source) at weight 300 with `font-feature-settings: "ss01"` and `letter-spacing: -1.4px` on display sizes approximates the rhythm closely.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 56px | 300 | 1.03 | -1.4px | 首屏头条 |
| `{typography.display-xl}` | 48px | 300 | 1.15 | -0.96px | 打开区域器 |
| `{typography.display-lg}` | 32px | 300 | 1.1 | -0.64px | 牌名/ 子节 |
| `{typography.display-md}` | 26px | 300 | 1.12 | -0.26px | 缩写卡标题 |
| `{typography.heading-lg}` | 22px | 300 | 1.1 | -0.22px | 定价级名称 |
| `{typography.heading-md}` | 20px | 300 | 1.4 | -0.2px | 款次标题 |
| `{typography.heading-sm}` | 18px | 300 | 1.4 | 0 | 小型区标签 |
| `{typography.body-lg}` | 16px | 300 | 1.4 | 0 | 营销机构牵头 |
| `{typography.body-md}` | 15px | 300 | 1.4 | 0 | 默认 UI 天体 |
| `{typography.body-tabular}` | 14px | 300 | 1.4 | -0.42px | 货币/数字表(使用) `tnum`) |
| `{typography.button-md}` | 16px | 400 | 1.0 | 0 | 胶囊形按钮标签 |
| `{typography.button-sm}` | 14px | 400 | 1.0 | 0 | 紧凑的避孕药标签 |
| `{typography.caption}` | 13px | 400 | 1.4 | -0.39px | 帮助, 表格标签 |
| `{typography.micro}` | 11px | 300 | 1.4 | 0 | 精细打印 |
| `{typography.micro-cap}` | 10px | 400 | 1.15 | 0.1px | All-caps eyebrow |

### 原则
- **Thin weight is the brand.** Display tiers always render at weight 300. Bumping to 400+ removes the brand's editorial air.
- **显示中负追踪 。** -1.4px 时 间 56px,按比例缩小至 -0.2px 时 间 20px. 负跟踪是该品牌的排版签名.
- **Tabular figures for money.** Any cell rendering currency, transaction amounts, or numeric counts uses `font-feature-settings: "tnum"` plus a tightening tracking. The brand quietly signals its financial DNA through this micro-detail.
- **`ss01` 在全球范围。** 应用 `font-feature-settings: "ss01"` 以至身体元素,所以每个文本角色的样式化-设置替代都开始。

### 替代字体
索恩是专有的,使用 **Inter** (通过 Google 字体打开源码) 字重 300 配合 `letter-spacing: -1.4px` 和 `font-feature-settings: "ss01"` 用于显示级别 - Inter 是最接近的开源模拟。 Inter 时 间 300 字重为 `font-feature-settings: "tnum"` (在适用的情况下)是犬科替代物。 Helvetica 或 system-ui 默认——比品牌需求重.


## 布局

### 间距系统
- **基地单位**: 8px (与 2 / 4 / 12 工作需要的子脚趾).
- **脚本**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px.
- **分区编栏**: 64–96px 销售表面; 32–48px 显示在仪表板/产品表面。
- **Card internal padding**: 32px on feature cards; 24px on dashboard mockups.

### 网格与容器
- 销售页面中心a ~1200px 容器,其梯度网格延伸至上方的边缘至边缘。
- Pricing collapses 4-up → 2-up → 1-up at 1024 / 768 breakpoints.
- 板板产品模型使用自己的内部网格(12- 领带桌, 3- 科尔卡格)作为静态复合材料提供.

### 留白规则
梯度网格占据了页的上三分之一;下面的白帆是慷慨的加成。 96px,内容收紧到 32px 使用仪表板/定价页面,用户进行比较和采取行动。


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 | 平面 | 默认表面 |
| 1 | `box-shadow: rgba(0,55,112,0.08) 0 1px 3px` | 白色卡片升挂 |
| 2 | `box-shadow: rgba(0,55,112,0.08) 0 8px 24px, rgba(0,55,112,0.04) 0 2px 6px` | 浮面板、仪表板模拟界面框架 |
| 3 | 渐变网状背景 | 品牌的主要深度介质——大气颜色而非文字阴影 |

### 装饰性深度
梯度网格是深度系统。 执行时是层状的 SVG 或大背景图像, 而不是 CSS 梯度( 实际网格有有机的blob形状, 而不是 CSS 的可解性) 。 网格提供了品牌的签名升降; 字面阴影被保留给产品- UI 模型, 并保持微妙 。


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | 发条标签,表界面框架 |
| `{rounded.sm}` | 6px | 格式输入 |
| `{rounded.md}` | 8px | 压缩卡、 提示 |
| `{rounded.lg}` | 12px | 定价卡、特征卡 |
| `{rounded.xl}` | 16px | 板式产品模拟界面框架 |
| `{rounded.pill}` | 9999px | All buttons, tag pills |

### 图片形状
品牌使用 **产品 UI 模型** 盘状复合材料在内部制成 faux IDE/terminal/dashboard 界面框架 `{rounded.lg}` 12px 装有细微的容器 `box-shadow`。真实摄影出现在客户标识条和罕见的案例研究卡中;作为套件处理 4:3 以无影.


## 组件

### 按钮

**`button-primary-pill`** ——在全系统主导CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}`, padding `{spacing.sm} {spacing.lg}` (8px 16px), rounded `{rounded.pill}` 9999px.
- Pressed state `button-primary-pill-pressed` shifts background to `{colors.primary-press}`.

**`button-secondary`** ——大纲式替代.
- Background `{colors.canvas}`, text `{colors.primary}`, 1px solid `{colors.primary}` border, same pill geometry.

**`button-on-dark`** ——用于仪表板/暗面.
- Background `{colors.brand-dark-900}`, text `{colors.on-primary}`, same pill geometry.

### 卡片与容器

**`card-feature-light`** ——白色的特色解释卡.
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}` 12px, 1px `{colors.hairline}` border, optional Level 1 shadow.

**`card-pricing`** ——标准定价等级.
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`, 1px `{colors.hairline}` border. Title `{typography.heading-lg}`, price `{typography.display-md}`, body `{typography.body-md}`, CTA pinned bottom as `button-primary-pill`.

**`card-pricing-featured`** 反向的黑暗的层次
- Background `{colors.brand-dark-900}`, text `{colors.on-primary}`, otherwise identical structure to `card-pricing`. The deep-navy fill is the brand's distinctive featured-tier choice.

**`card-cream-band`** - 热插曲卡
- Background `{colors.canvas-cream}`, text `{colors.ink}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`. Used to break up the indigo / white rhythm with warmth.

**`card-dashboard-mockup`** ——复合仪表板/产品UI截图.
- Background `{colors.canvas}`, type `{typography.body-tabular}` (with `tnum`), padding `{spacing.xl}` 24px, rounded `{rounded.lg}` 12px, Level 2 shadow. Often contains nested mini-mockups: code preview + dashboard table + chart card.

### 输入框与表单

**`text-input`** ——标准表单字段.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (8px 12px), rounded `{rounded.sm}` 6px, 1px `{colors.hairline-input}` border.
- 焦点状态 `text-input-focused`: 边界交换 `{colors.primary}`.

### 导航

**`nav-bar-on-mesh`** ——顶部导航浮在梯度首屏之上.
- Background `{colors.canvas}` (or transparent depending on scroll), text `{colors.ink}`, padding `{spacing.lg} {spacing.xl}`. Logo wordmark on the left, primary nav center, sign-in + filled `button-primary-pill` on the right.

### 胶囊形、标签和芯片

**`pill-tag-soft`** 低调的Indigo标签。
- Background `{colors.primary-bg-subdued-hover}`, text `{colors.primary-deep}`, type `{typography.micro-cap}`, padding `4px 8px`, rounded `{rounded.pill}`.

### 标志性组件

**渐变网格后投** 红宝石粉末在页面上三分之一横向模糊,作为SVG或大背景图像执行,不是平坦的CSS梯度(真正的网格有有机斑点形状).

**复合板模拟器** ——多层福克斯产品-UI组成:左边是IDE面板,仪表板表中心,右边是图表卡,都以小比例在内部提供. `{rounded.lg}` 带有微妙级的容器 2 影子 复合材料是该品牌最有照片的特征.

**Tabular-Figure Money Type** — every number rendering money, count, or transaction value uses `font-feature-settings: "tnum"`. The brand's quiet signal that it's a financial-infrastructure platform.

**`link-on-light`** ——光表面的内含链接.
- 文字颜色 `{colors.primary}` 交付 `{typography.body-md}`,默认情况下不下划线。

**`footer-light`** ——全站页脚.
- Background `{colors.canvas}`, text `{colors.ink-mute}`, type `{typography.caption}`, padding `{spacing.huge} {spacing.xl}` (64px 24px). Holds 4–6 columns of link groups, social icons, and a small legal row.


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` 用于填充的CTA和内置链接的强调——它应该保持节制,每个带一个填充的按钮.
- 将梯度网格应用到每个营销首屏身上;赤裸的canvas首屏感觉离谱.
- 显示字重级 300 负数 letter-spacing ——细的跟踪是打印的特征.
- 使用 `font-feature-settings: "tnum"` 。每个货币/数字单元格。
- 应用 `font-feature-settings: "ss01"` 举世瞩目的是
- 将每个特性解释与复合产品UI模拟对等;品牌的论据是"看实际产品".

### 应避免的做法
- Don't bump display weight above 300 — at 400 the brand's editorial air collapses.
- Don't add new accent colors outside the documented gradient stops (cream / orange / lavender / indigo / ruby / magenta).
- Don't use the indigo `{colors.primary}` as a body-text color — it's a CTA and link color, not a type color at body size.
- 下方别收缩按钮 `8px 16px` ——紧身胶囊形是品牌交易感的一部分.
- Don't render money cells without `tnum` — it breaks the quiet financial-data signature.
- Don't replace the pill shape with rounded-rectangles for buttons.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Wide | ≥ 1440px | Full gradient mesh edge-to-edge; dashboard composite at full scale |
| Desktop | 1024–1440px | Default content max-width; pricing 4-up |
| 平板 | 768–1023px | 定价 2- 上;仪表板复合材料简化为 2 面板 |
| 手机 | < 768px | 定价 1- 上; 汉堡导航; 显示滴 56 → 36px |

### 触控区域
- 胶囊形扣子被击中 ≥ 40×40px 。在较小的屏幕上,按钮大小最多 44×44px 维持WCAG AA.
- 窗体字段不变 40px 最低身高。

### 窄屏布局调整
- 显示阶梯级 56 → 48 → 32 → 26 → 22px 穿过断点
- 移动式上渐变网状重排砖块,以保存洗涤而不会消失.
- 变板复合材料简化为移动式的单板模型;多层的构件只在桌面+时制作.
- Pricing tiers stair-step 4-up → 2-up → 1-up.

### 图片适配
产品UI复合材料使用 `srcset` 移动作物侧重于最可操作的内板;桌面作物显示完整的多层组成。


## 迭代指南

1. 一次集中关注一个组件.
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{button-primary-pill}-pressed`, `{rounded.pill}`).
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后。
4. 添加新的变体作为单独的条目.
5. 默认正文为 `{typography.body-md}` (15px; 使用情况 `{typography.body-tabular}` 用于任何货币/数字单元格。
6. 应用 `ss01` 在全球范围; `tnum` 数字内容的每个元素。
7. The gradient mesh is non-negotiable on marketing heroes — bare-canvas heroes break the brand.

## 设计词元原值

启发人们理解 Stripe设计语言——一种以深水墨为主的金融基础设施品牌,一种电动indigo初级,以及一种反复出现的大气梯度网,占据了几乎每个营销页的上三分之一。300(负数) letter-spacing 用于编辑密度显示头条,并使用表格图体类型,其中金钱和数字都很重要。按钮是紧辐射药,卡片生活在近白表面,仪表盘轨迹将极性翻转到一个熟悉的暗应用壳。

```yaml
---
version: alpha
name: Stripe-design-analysis
description: An inspired interpretation of Stripe's design language — a financial-infrastructure brand built on a deep navy ink, an electric indigo primary, and a recurring atmospheric gradient mesh that occupies the upper third of nearly every marketing page. The system pairs the proprietary Sohne family at thin (300) weights with negative letter-spacing for editorial-density display headlines, and uses tabular-figure body type where money and numerics matter. Buttons are tight-radius pills, cards live on near-white surfaces, and the dashboard track flips polarity to a familiar dark-app shell.

colors:
  primary: "#533afd"
  primary-deep: "#4434d4"
  primary-press: "#2e2b8c"
  primary-soft: "#665efd"
  primary-bg-subdued-hover: "#b9b9f9"
  brand-dark-900: "#1c1e54"
  ink: "#0d253d"
  ink-secondary: "#273951"
  ink-mute: "#64748d"
  ink-mute-2: "#61718a"
  on-primary: "#ffffff"
  canvas: "#ffffff"
  canvas-soft: "#f6f9fc"
  canvas-cream: "#f5e9d4"
  hairline: "#e3e8ee"
  hairline-input: "#a8c3de"
  ruby: "#ea2261"
  magenta: "#f96bee"
  lemon: "#9b6829"
  shadow-blue: "#003770"

typography:
  display-xxl:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 56px
    fontWeight: 300
    lineHeight: 1.03
    letterSpacing: -1.4px
    fontFeature: ss01
  display-xl:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: -0.96px
    fontFeature: ss01
  display-lg:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -0.64px
    fontFeature: ss01
  display-md:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 26px
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: -0.26px
    fontFeature: ss01
  heading-lg:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 22px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -0.22px
    fontFeature: ss01
  heading-md:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: -0.2px
    fontFeature: ss01
  heading-sm:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0
    fontFeature: ss01
  body-lg:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0
    fontFeature: ss01
  body-md:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0
    fontFeature: ss01
  body-tabular:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: -0.42px
    fontFeature: tnum
  button-md:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
    fontFeature: ss01
  button-sm:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
    fontFeature: ss01
  caption:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: -0.39px
    fontFeature: tnum
  micro:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 11px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0
    fontFeature: ss01
  micro-cap:
    fontFamily: "sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0.1px
    fontFeature: ss01

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

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
  button-primary-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  button-primary-pill-pressed:
    backgroundColor: "{colors.primary-press}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  button-on-dark:
    backgroundColor: "{colors.brand-dark-900}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
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
    backgroundColor: "{colors.brand-dark-900}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-cream-band:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-dashboard-mockup:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-tabular}"
    rounded: "{rounded.lg}"
    padding: 24px
  pill-tag-soft:
    backgroundColor: "{colors.primary-bg-subdued-hover}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 4px 8px
  nav-bar-on-mesh:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  link-on-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
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
