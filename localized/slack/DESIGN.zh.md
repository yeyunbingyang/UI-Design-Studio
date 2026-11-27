# Slack · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Slack设计语言中心在深层的aubergine初级(`{colors.primary}`)——该品牌最持久的视觉资产——作为主控按钮颜色,脚步带,特色定价等级,品牌字号应用. 围绕这个系统,一个异常微妙的生态系统:奶油-薰衣草首屏画布,上面有软的贴面-梅斯梯度(油橙、薰衣草、灰绿色),浮产品UI模型后面的脉冲,实际界面框架在以下几处得到详细制作: 3:2 。 。 。

两种专有的人文主义家庭的字型划分。 700 字重,大小 32–64px 负数 letter-spacing 用于在首屏头条上进行紧凑的光学密度。UI级使用第二家族,位于 400–700 稍松的领先地位(1.55)——品牌体型副本在读时不与aubergine 瞬间竞争时静悄悄地读.

按钮是避孕药的形状 90px 半径,水平粘贴量异常( )28–30px),让他们有一种特别舒适,几乎是过度增加的感觉。 主要的安培胶囊形是大多数情况下唯一装满的按钮;次要动作使用软薰衣草胶囊形(L.`{colors.canvas-lavender}`)读作主表面的较温和的回声。内线链接会转换成饱和的蓝色(`{colors.link-blue}`)——该品牌唯一与美式乳汁世界的色调性区别.

**关键特征 :**
- 单体卵状初级(`{colors.primary}`) 跨CTAs再利用,特色定价等级,脚步乐队,以及词标——品牌的色调一神论.
- 奶油-薰衣草首屏页面底色( Name`{colors.canvas-cream}` / `{colors.canvas-lavender}`),上面有扩散的糊状层层大气梯度和浮动的UI模型。
- 胶囊形按钮在 `{rounded.pill}` (90px 半径),宽宏大量. 28–30px 水平垫板——被SaaS-默认标准加高,故意加高.
- 紧负 letter-spacing 显示大小( R)-0.768px 打开 64px 编辑密度头条。
- 蓝色内线链接( E)`{colors.link-blue}`)——体型中唯一一种非亚麻色的色调.
- 帕斯特尔-梅什梯度大气:每个首屏乐队背后都有细微的桃色-薰衣草-杜斯底-绿色洗涤;产品UI坐上,从不内,梯度.
- 大规模aubergine显示型号的统计卡(90% / 43 / 87%),白色——仅通过规模进行定量强调.


## 配色

> **Source pages:** home (`/`), `/features/channels`, `/pricing`, `/contact-sales`.

### 品牌色与强调色
- **Aubergine** (`{colors.primary}` — `#4a154b`): The brand's primary surface and CTA color. Deep, warm purple with a hint of ruby — used on filled buttons, the featured pricing tier, the footer band, and the brand wordmark.
- **Aubergine Deep** (`{colors.primary-deep}` — `#481a54`): A near-identical sibling of `{colors.primary}` extracted from a different surface; treat as functionally equivalent.
- **Aubergine Press** (`{colors.primary-press}` — `#611f69`): Pressed-state lift of the primary, slightly lighter and warmer.
- **欧贝金丁丁** (`{colors.primary-tint}` — `#592466`: aubergine上方的边音.
- **链接蓝色** (`{colors.link-blue}` — `#1264a3`:内含链接颜色——饱和,略微温暖的蓝色,是体型中唯一一种取代aubergine的色素替代品.
- **连接** (`{colors.link-hover}` — `#3860be`: 连接悬浮状态上使用的更饱和的蓝色.

### 界面表面
- **白色页面底色** (`{colors.canvas}` — `#ffffff`: 默认内容表面.
- **油菜酱** (`{colors.canvas-cream}` — `#f4ede4`: 首屏梯度和特征带上使用的温暖淡白, 添加编辑温暖.
- **彩虹薰衣草** (`{colors.canvas-lavender}` — `#f9f0ff`: 淡紫色锡作为副扣表面和软节带使用.
- **地表奥贝里** (`{colors.surface-aubergine}` — `#4a154b`: 原生的aubergine作为表面再利用——以定价等级,脚步,暗色特征带为特色.
- **细边线** (`{colors.hairline}` — `#e6e6e6`): 1px 牌和桌牌分隔符上的边框。

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#1d1d1d`: 轻表面的主体体文字,只是害羞纯黑色.
- **墨水哑声** (`{colors.ink-mute}` — `#696969`: 副文本,标题,帮助者副本.
- **小学** (`{colors.on-primary}` — `#ffffff`: aubergine表面和填充的CTA上文本.
- **On Aubergine Mute** (`{colors.on-aubergine-mute}` — `#d9bdde`): Secondary text on aubergine surfaces — a desaturated mauve that reads as muted-light.

### 语义色
- **错误** (`{colors.semantic-error}` — `#cc4117`: 形式错误和破坏性动作颜色.
- **成功** (`{colors.semantic-success}` — `#007a5a`: 内含成功指标.


## 字体排版

### 字体族

The display tier is **Salesforce Avant Garde** — a proprietary humanist sans with broad apertures and a slightly geometric character. When unavailable, fall back to the system font stack (`system-ui, -apple-system, BlinkMacSystemFont`).

用户界面等级是: **销售力系列** 用于身体、标题和按钮标签的单独专有面孔。同样的倒置链条。

两者面孔都是专有的,不能免费取用。 **Inter** (通过Google字体开源) 显示和身体的重量匹配—— Inter 是对两层最接近的开放模拟。

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 64px | 700 | 1.12 | -0.768px | 营销首屏头条 |
| `{typography.display-xl}` | 58px | 600 | 1.25 | -0.464px | 打开区域者 |
| `{typography.display-lg}` | 50px | 700 | 1.12 | -0.6px | 统计征集 |
| `{typography.display-md}` | 32px | 700 | 1.25 | -0.256px | 纸牌/特性标题 |
| `{typography.heading-lg}` | 24px | 700 | 1.33 | -0.096px | 定价级别名称 |
| `{typography.heading-md}` | 22px | 600 | 1.4 | 0 | 分节标题 |
| `{typography.heading-sm}` | 18px | 600 | 1.56 | -0.0216px | 缩写卡标题 |
| `{typography.body-lg}` | 18px | 400 | 1.55 | -0.0216px | 营销机构牵头 |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | 默认 UI 天体 |
| `{typography.body-strong}` | 16px | 700 | 1.5 | 0.16px | 重点机构 |
| `{typography.button-lg}` | 18px | 700 | 1.0 | 0 | 首屏胶囊形按钮标签 |
| `{typography.button-md}` | 16px | 700 | 1.38 | 0.2px | 标准胶囊形按钮标签 |
| `{typography.button-cap}` | 14.4px | 700 | 1.0 | 0.144px | 紧凑的避孕药标签 |
| `{typography.caption}` | 14px | 400 | 1.43 | 0.1px | 帮助者,脚注 |
| `{typography.micro-cap}` | 12px | 700 | 1.0 | 0.96px | All-caps eyebrow |

### 原则
- **紧跟显示。** 负数 letter-spacing 横跨 32–64px 大小; 专有面默认宽, 负跟踪将其拉入编辑密度 。
- **身体在 1.55 领先。** 稍稍放松,以方便销售,而不进入空气状态。 1.7+ 领土。
- **Caps for eyebrows.** All eyebrows render uppercase with positive 0.96–0.144px tracking depending on size.

### 替代字体
Use **Inter** (open-source Google Fonts) for both display and UI tiers — Inter at 700 weight with `-0.768px` letter-spacing closely approximates the brand's display behavior. For maximum brand fidelity, **Lato** is a softer humanist alternative that pairs well at body sizes. Avoid System UI fonts on the body — the brand's subtle warmth disappears at default weights.


## 布局

### 间距系统
- **基地单位**: 8px (与 4 / 12 / 16 / 20 / 24 / 28 用于精细垂直节奏的子音节)。
- **脚本**: `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 20px · `{spacing.xxl}` 24px · `{spacing.huge}` 28px.
- **分区编栏**: 64–96px ; 紧紧地 48px 交易页面。
- **Card internal padding**: 32px on pricing cards; 48px on aubergine band cards.

### 网格与容器
- 销售页面中心a ~1240px 容器中含有脱落的粘贴层梯度。
- Pricing collapses 4-up → 2-up → 1-up at 992 / 768 breakpoints.
- 统计行 : 3- 柱状网格,巨大的 50px aubergine 显示数字 。

### 留白规则
贴面-mesh梯度填补了营销页面上的大部分负空格——各节感觉宽阔而不字面是空的。在交易页面上,梯度下降,白空格恢复到传统 48px- 剖腹呼吸室 - 切腹呼吸室 - 切腹呼吸室


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 | 平面 | 默认表面 |
| 1 | `box-shadow: rgba(0,0,0,0.1) 0 5px 20px 0` | 浮动首屏按钮 |
| 2 | `box-shadow: rgba(0,0,0,0.1) 0 0 32px 0` | 产品 UI 模拟复合材料 |
| 3 | `box-shadow: rgba(0,0,0,0.2) 0 1px 10px 0` | 土司/通知界面框架 |
| 4 | `box-shadow: rgb(97,31,105) 0 0 0 1px inset` | 欧贝金嵌入边框(按钮聚焦,特殊界面框架) |

### 装饰性深度
品牌的深度语言是 **贴面梅斯梯度** ——桃,薰衣草,灰绿色在大圆形的圆形上一起停止模糊,在产品UI截图后产生柔软的大气背景,梯度是品牌的口味"深无阴影":眼觉产品模拟浮在无任何升力的光滑背景之上.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 2px | 发条标签,状态胶囊形(稀有) |
| `{rounded.sm}` | 4px | 格式输入 |
| `{rounded.md}` | 8px | 缩合卡、 视频帧 |
| `{rounded.lg}` | 12px | 中型卡,二级表面 |
| `{rounded.xl}` | 16px | 定价卡、特征卡 |
| `{rounded.xxl}` | 48px | 标志背景 |
| `{rounded.pill}` | 90px | All buttons |

### 图片形状
品牌使用 **产品 UI 截图** 模拟器在贴面上方的梯度上方 4:3 角度,没有阴影,但带有提供眼所期望的“升”的梯度。真实摄影出现在客户-日志条条和偶尔的案例研究卡中,被视为内部的全血 `{rounded.xl}` 集装箱。


## 组件

### 按钮

**`button-primary-pill`** ——在全系统主导CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}`, padding `14px 28px`, rounded `{rounded.pill}` 90px.
- Pressed state `button-primary-pill-pressed` shifts background to `{colors.primary-press}`.

**`button-secondary-pill`** ——软薰衣草的替代.
- Background `{colors.canvas-lavender}`, text `{colors.ink}`, padding `10px 30px`, same pill geometry. Used as the second action beside the primary aubergine pill.

**`button-outline-aubergine`** ——提纲变种在白色表面.
- Background `{colors.canvas}`, text `{colors.primary}`, 2px solid `{colors.primary}` border, same pill shape.

**`button-outline-on-aubergine`** 欧贝金页面底色上的轮廓
- Background `{colors.surface-aubergine}` (transparent over the surface), text `{colors.on-primary}`, 2px solid `{colors.on-primary}` border, same pill shape.

### 卡片与容器

**`card-pricing`** ——标准定价等级卡.
- Background `{colors.canvas}`, padding `{spacing.xxl}+` (32px), rounded `{rounded.xl}` 16px, 1px `{colors.hairline}` border. Title in `{typography.heading-lg}`, price in `{typography.display-md}`, body in `{typography.body-md}`, CTA pinned to bottom as `button-primary-pill`.

**`card-pricing-featured`** 反转的欧贝金 具有突出的层次。
- Background `{colors.surface-aubergine}`, text `{colors.on-primary}`, otherwise identical to `card-pricing`. The aubergine fill is the brand's signature featured-tier choice.

**`card-feature-cream`** ——奶油赛道上的特色解释卡.
- Background `{colors.canvas-cream}`, text `{colors.ink}`, rounded `{rounded.xl}`, padding 32px.

**`card-aubergine-band`** ——带aubergine full的大型横向乐队卡,经常包含一个营销页面的关闭式CTA.
- Background `{colors.surface-aubergine}`, text `{colors.on-primary}`, padding 48px, rounded `{rounded.xl}` 16px.

**`card-stat`** ——统计挂牌.
- Background `{colors.canvas}`, text `{colors.primary}` rendered in `{typography.display-lg}` (50px aubergine numeral). Holds a single percentage/number with a small caption underneath.

### 输入框与表单

**`text-input`** ——标准表单字段.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `10px 12px`, rounded `{rounded.sm}` 4px, 1px `{colors.hairline}` border.

### 导航

**`nav-bar-light`** ——所有营销页面的顶端导航.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.xxl}`. Logo wordmark on the left, nav items center, two pill buttons on the right (`button-secondary-pill` for "Sign In", `button-primary-pill` for "Try For Free").

### 胶囊形、标签和芯片

**`pill-cap-shade`** ——小全头丸作为上方眉毛使用. pricing-tier 标题。
- Background `{colors.canvas-cream}`, text `{colors.ink}`, type `{typography.micro-cap}`, padding `4px 12px`, rounded `{rounded.pill}`.

### 标志性组件

**贴贴- 列斯梯度后投** ——桃( 桃子 )`#fff0e6`-ish)+薰衣草(英语:`#e9d8ff`)+ 灰尘绿色停止在首屏乐队后方模糊在一起. 执行为CSS光圈级堆栈,而非单一图像. 提供品牌的深度/光度,而不带有文字阴影.

**Floating Product UI Mockup** — product screenshots framed in `{rounded.lg}` (12px) containers, positioned above the pastel-mesh gradient with no border or shadow. The gradient does the lifting.

**Aubergine Footer Band** — every marketing page closes with a full-bleed `card-aubergine-band` containing a closing CTA in white type. The band height is generous (~480–600px on desktop) and reads as the page's signature.

**`link-on-light`** ——在光面上进行体型复制的内置链接.
- 文字颜色 `{colors.link-blue}` 交付 `{typography.body-md}`。默认情况下没有下划线;下划线出现在通过 link-hover 行为

**`link-on-aubergine`** 连接在欧贝里海面上
- 文字颜色 `{colors.on-primary}` 以坚固的划线盟誓,

**`footer-aubergine`** ——全站页脚.
- Background `{colors.surface-aubergine}`, text `{colors.on-primary}` rendered in `{typography.caption}`, padding `{spacing.huge}+ {spacing.xxl}` (32px 24px). Holds 4–5 columns of `{colors.on-aubergine-mute}` link groups, social icons, and a small legal/copyright row at the bottom.


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` aubergine代表填充式CTA,特色定价等级,以及关闭式aubergine乐队——这是品牌的色调单神主义.
- 使用 `{rounded.pill}` (90px),对于整个系统的每一个按钮——从没有圆形的矩形按钮.
- 平面显示等级为负数 letter-spacing (`-0.768px` 时 间 64px);专有面部需要跟踪拉力.
- 编译首屏乐队,带有pastel-mesh梯度背景+浮动产品UI模拟;梯度是深度.
- Use `{colors.link-blue}` for inline links — it's the only chromatic departure from aubergine and is part of the brand voice.

### 应避免的做法
- Don't add a third accent color to the system — the aubergine + blue link combination is exhaustive.
- 下方别收缩按钮 `14px 28px` ——加片过量的胶囊形是品牌感受的一部分.
- Don't render display tiers at default tracking (0) — without negative letter-spacing the headlines read loose and unedited.
- Don't put product UI screenshots inside cards — they sit ABOVE the pastel-mesh gradient, never inside chrome.
- Don't use aubergine for body text — it's a surface and CTA color, not a type color at body sizes.
- Don't replace the pill shape with a square button anywhere.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Wide | ≥ 1440px | Full-bleed pastel-mesh hero; pricing 4-up |
| Desktop | 1024–1440px | Default content max-width; pricing 4-up |
| 平板 | 768–1023px | 定价 2- 上;产品 UI 模拟裁剪到焦板 |
| 手机 | < 768px | 定价 1- 上;汉堡导航; display-xxl 滴数 64 → 40px |

### 触控区域
- Pill buttons hit ≥ 48×48px due to the over-padded geometry. WCAG AAA compliant.
- 窗体字段停留在 44px 最低身高。

### 窄屏布局调整
- 显示阶梯级 64 → 50 → 32 → 28 → 24 跨越断点。
- 帕斯特尔-梅什梯度在移动上重置瓦片,以防止洗涤完全消失.
- 将产品UI模型化为移动上最可操作的内板。
- 定价等级 4 → 2 → 1; aubergine 的特色 等级保持区分。
- 顶端导航崩溃到下面的汉堡 768px;菜单继承页面底色颜色。

### 图片适配
产品 UI 模型使用 `srcset` 用于桌面/平板/移动作物;移动作物中心位于最可操作的内部面板上,而不是缩小整个复合材料。


## 迭代指南

1. 一次集中关注一个组件.
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{button-primary-pill}-pressed`, `{rounded.pill}`).
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后。
4. 添加新的变体作为单独的条目.
5. 默认正文为 `{typography.body-md}`; 储备金 `{typography.body-lg}` 市场营销线索
6. 保持aubergine的稀缺性——每个景点一个填充的aubergine按钮.
7. 给每个首屏乐队配上贴纸的梯度背景;赤裸的canvas首屏读作离品牌.

## 设计词元原值

启发人们理解 Slack其设计语言——一个基于深奥素的初级的工作场所信息品牌,其上带有奶油-薰衣草首屏梯度,蓝色内线链接,以及丸CTAs. 该系统将一个专有的人文主义的圣物配对,用于展示,并配有单独的身体用物圣物,在软面-mesh首屏复合材料中配有级产品UI模型,既可以起到装饰作用,也可以起到特征解释作用.

```yaml
---
version: alpha
name: Slack-design-analysis
description: An inspired interpretation of Slack's design language — a workplace messaging brand built on a deep aubergine primary, with cream-lavender hero gradients, blue inline links, and pill CTAs. The system pairs a proprietary humanist sans for display with a separate utility sans for body, and stages product UI mockups inside soft pastel-mesh hero composites that act as both decoration and feature explanation.

colors:
  primary: "#4a154b"
  primary-deep: "#481a54"
  primary-press: "#611f69"
  primary-tint: "#592466"
  on-primary: "#ffffff"
  ink: "#1d1d1d"
  ink-mute: "#696969"
  link-blue: "#1264a3"
  link-hover: "#3860be"
  canvas: "#ffffff"
  canvas-cream: "#f4ede4"
  canvas-lavender: "#f9f0ff"
  surface-elev: "#ffffff"
  surface-aubergine: "#4a154b"
  hairline: "#e6e6e6"
  hairline-strong: "#000000"
  semantic-error: "#cc4117"
  semantic-success: "#007a5a"
  on-aubergine-mute: "#d9bdde"

typography:
  display-xxl:
    fontFamily: "Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.768px
  display-xl:
    fontFamily: "Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 58px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.464px
  display-lg:
    fontFamily: "Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 50px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.6px
  display-md:
    fontFamily: "Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.256px
  heading-lg:
    fontFamily: "Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: -0.096px
  heading-md:
    fontFamily: "Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  heading-sm:
    fontFamily: "Salesforce-Avant-Garde, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.56
    letterSpacing: -0.0216px
  body-lg:
    fontFamily: "Salesforce-Sans, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.0216px
  body-md:
    fontFamily: "Salesforce-Sans, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-strong:
    fontFamily: "Salesforce-Sans, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.16px
  button-lg:
    fontFamily: "Salesforce-Sans, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  button-md:
    fontFamily: "Salesforce-Sans, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.38
    letterSpacing: 0.2px
  button-cap:
    fontFamily: "Salesforce-Sans, system-ui, -apple-system, sans-serif"
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.144px
  caption:
    fontFamily: "Salesforce-Sans, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0.1px
  micro-cap:
    fontFamily: "Salesforce-Sans, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.96px

rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 48px
  pill: 90px

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
  huge: 28px

components:
  button-primary-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-primary-pill-pressed:
    backgroundColor: "{colors.primary-press}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-secondary-pill:
    backgroundColor: "{colors.canvas-lavender}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 10px 30px
  button-outline-aubergine:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-outline-on-aubergine:
    backgroundColor: "{colors.surface-aubergine}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
  pill-cap-shade:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  card-pricing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-pricing-featured:
    backgroundColor: "{colors.surface-aubergine}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-feature-cream:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-aubergine-band:
    backgroundColor: "{colors.surface-aubergine}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xl}"
    padding: 48px
  card-stat:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.xl}"
    padding: 32px
  nav-bar-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  link-on-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.link-blue}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  link-on-aubergine:
    backgroundColor: "{colors.surface-aubergine}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  footer-aubergine:
    backgroundColor: "{colors.surface-aubergine}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 32px 24px
---
```
