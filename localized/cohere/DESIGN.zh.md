# Cohere · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Cohere's current web presence feels like a sober enterprise AI command center with editorial restraint. The home page opens on a huge typographic declaration over a white canvas, then uses photography, dark product mockups, trust logos, and generous empty space to make AI infrastructure feel controlled rather than speculative. Product pages invert the tone into deep green-black or dark navy bands, while blog and research pages move toward publishing-system clarity: large filters, thin rules, dense lists, and pale technical backgrounds.

使得系统具有独特性的是将严酷的黑白UI与触觉品牌图像的连发混合. 该网站避免了普通界面中的装饰性铬;颜色通过摄影,抽象到达. 3手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机等。 手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机、手机

**关键特征 :**
- 单曲显示头条,线高极紧,跟踪不良.
- 白色的编辑画布被深绿色,黑暗的海军,以及图像引导的CTA乐队打断.
- 圆形媒体卡和产品卡,通常 8px 改为: 22px.
- 近黑或白色的 Pill CTAs, 多数次要动作作为下划线文本链接提供.
- 信托-日志条带单色伙伴标记,垂直间隔非常宽.
- 代理控制台模型使用暗面板,小状态芯片,以及产品集成徽章.
- 博客和研究表面有突出的分类芯片,长长的规则分隔列表,以及搜索字段.


## 配色

### 品牌和 强调色

- **Cohere 黑色** (`#000000`:公告栏,最高的连续文本,以及全球品牌主播.
- **近黑小学** (`#17171c`:主CTA按钮,暗脚,和深UI卡.
- **深企业绿色** (`#003c33`:产品首屏乐队,用于北方和指挥风格的暗片段.
- **黑暗海军** (`#071829`: 金融服务和面向安全的解决办法波段.
- **蓝色行动** (`#1863dc`:编辑链接,页码化,以及次要动作重点.
- **珊瑚** (`#ff7759`:博客分类芯片,分类学大纲,以及温暖产品标记.
- **软珊瑚** (`#ffad9b`: 阴暗芯片边框和分割文章标签细节.

### 表面背景( B)

- **白色页面底色** (`#ffffff`: 占优势的页面背景和窗体/卡面.
- **软石** (`#eeece7`:产品卡,证物占位符,以及温暖中性表面块.
- **灰绿色洗** (`#edfce9`: 北页部分背景背景 堆叠的暗能力面板.
- **淡蓝色洗** (`#f1f5ff`: Blog CTA 表面在抽象后方 3D图像。
- **纸牌边框** (`#f2f2f2`:最软的卡封隔线.

### 文本规则( R)

- **墨水( 墨水 )** (`#212121`: 默认正文文本和大部分关于光背景的链接文本.
- **静音板** (`#93939f`:页脚链接,日期,元数据,以及去强调的标签.
- **标 题** (`#75758a`:研究分离器和第三版文本.
- **细边线** (`#d9d9dd`:标准列表规则和分区划分符.
- **边框光** (`#e5e7eb`:二级分法和效用规则.

### 语义

- **聚焦蓝** (`#4c6ee6`:键盘焦点和环色.
- **窗体焦点紫色** (`#9b60aa`:文本输入的焦点边框。
- **红字错误** (`#b30000`: 与验证类状态相关的提取环/阴影颜色.

### 渐变系统

Cohere does not use gradients as a generic UI fill. Gradients and color fields are media-led: abstract 3D hero imagery, deep blue open-science particle fields, red-orange product video posters, and dark green-to-black product environments. Keep UI surfaces flat; reserve gradient richness for large media panels and CTA image bands.


## 字体排版

### 字体家族

- **显示**: `CohereText`,倒转到 `Space Grotesk`, `Inter`, `ui-sans-serif`,以及 `system-ui`.
- **机构/UI**: `Unica77 Cohere Web`,倒转到 `Inter`, `Arial`, `ui-sans-serif`,以及 `system-ui`.
- **技术标签**: `CohereMono`,倒转到 `Arial`, `ui-sans-serif`,以及 `system-ui`.
- **图标**: Cohere 使用自定义图标字体和细线几何插图。

### 等级

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---:|---:|---:|---:|---|
| Hero Display | CohereText | 96px | 400 | 1.00 | -1.92px | Home page declaration scale. |
| 产品显示 | CohereText | 72px | 400 | 1.00 | -1.44px | 产品与研究首屏头条. |
| 区域显示 | 乌尼察77 | 60px | 400 | 1.00 | -1.2px | 大型产品页标题。 |
| 科 长 | 乌尼察77 | 48px | 400 | 1.20 | -0.48px | 拆分首屏和CTA标题. |
| 纸牌标题 | 乌尼察77 | 32px | 400 | 1.20 | -0.32px | 特色卡和列表部分标题. |
| 特性标题 | 乌尼察77 | 24px | 400 | 1.30 | 0 | 牌,滤镜,和文章标题. |
| Body Large | Unica77 | 18px | 400 | 1.40 | 0 | Lead text and larger paragraphs. |
| 体质 | 乌尼察77 | 16px | 400 | 1.50 | 0 | 默认复制和链接文本 。 |
| 按钮 | 乌尼察77 | 14px | 500 | 1.71 | 0 | 紧凑的CTA标签. |
| 说明 | 乌尼察77 | 14px | 400 | 1.40 | 0 | 元数据和小的解释性文本。 |
| Mono Label | CohereMono | 14px | 400 | 1.40 | 0.28px | Uppercase technical labels. |
| 微量 | 乌尼察77 | 12px | 400 | 1.40 | 0 | 页脚,导航显微镜,以及小链接. |

### 原则

- 少用大类型; Cohere 页面往往有一个超大标题,然后安顿下来 16px-24px 用户信息收到。
- 保持显示类型,首屏副本应该感觉紧凑和刻画,而不是空洞.
- 避免重粗重的重力。大小、间隔和表面对比是大多数等级工作。
- 使用大写单标签来表示类别和系统标记,特别是在产品和研究页面上.
- 编辑页可以使用珊瑚芯片和蓝色链接,但基础打字仍然黑色并被测量.


## 布局

### 间距系统

系统使用 8px 具有许多一次性对齐值的基数 : `2px`, `6px`, `8px`, `10px`, `12px`, `16px`, `20px`, `22px`, `24px`, `28px`, `32px`, `36px`, `40px`, `56px`, `60px`, `64px`,以及 `80px`.

Large sections rely on dramatic vertical breathing room. The home page places a trust-logo strip far below the hero media. Product pages often hold dark panels inside fields of empty white space, then transition to dense forms or footers only near the end.

### 网格容器( C)

- Global nav uses a three-zone layout: logo left, menu centered, sign-in/CTA right.
- 家首屏以双卡媒体构成之上的文字为中心:在较窄的摄影卡旁边,有一个宽的产品模拟卡.
- 常用的特性部分 3- 桌面上的列牌 - 台式电脑上的列牌
- 产品页 备用的中枢首屏块、信任-日志条、大型单特性带和 2- 或 说 3- 列牌网格 - 列牌网格 - Colind card grags.
- 研究页面使用带有日期和芯片列的全宽列表,而不是装饰卡.
- 表格使用两栏输入行,在深色或石块部分背景上,在圆形白色卡片内.

### 白空间哲学

Cohere 使用白空空间作为信任信号。 巨大的空间隔将品牌要求、客户证明、产品证明和CTA分开。 Dense内容只出现在服务于信息架构的地方:研究纸行、博客卡网格和联系形式字段。


## 层次与阴影

Cohere 深度来自表面交替、介质对比、圆角、边框细小而不是投影。

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | No shadow, white or dark field | Hero copy, research lists, editorial surfaces |
| 边框 | 1px `#d9d9dd`, `#e5e7eb`,或者暗半透明规则 | 研究行、表单、苍白卡片、页脚输入 |
| 媒体升起 | 反向区域颜色的圆形图像或视频 | 首屏照片卡、产品视频、CTA图像 |
| 暗产品字段 | 深绿色或海军全宽带 | 指挥、北部、财务、安保科 |


## 形状

### 半径缩放

| 调试 | 数值 | 作用 |
|---|---:|---|
| `xs` | 4px | Small images, search fields, article thumbnails, utility elements |
| `sm` | 8px | 博客芯片、卡片、小媒体、对话框 |
| `md` | 16px | 中型产品卡和分组块 |
| `lg` | 22px | 签名媒体卡和软占位符半径 |
| `xl` | 30px | 研究/专题滤镜药 |
| `pill` | 32px | 初级 CTA 按钮 |
| `full` | 9999px | 圆形状态元件和全丸形控制 |

### 图像处理

Images are not decorative backdrops for text except in CTA bands. Most imagery sits as rounded cards with visible corners: product videos, enterprise photography, article thumbnails, and abstract 3D renders. The dominant radii are 8px and 22px.


## 组件

### **`button-primary`**

Near-black or white pill CTA, depending on surface contrast. Uses 14px-16px Unica77, 12px 24px padding, and a 32px pill radius. This is the primary action style for "Request a demo", "Submit", and hero CTAs.

### **`button-secondary`**

仅文本动作链接,通常下划线或规则对齐,没有填充的背景. 用于"Explocates","Try the Playground",通讯注册,以及二级首屏动作.

### **`button-pill-outline`**

避孕药控制大纲 transparent 满, 1px 黑暗的边界,和 30px 半径。 用于研究过滤器、 主题标签和轻量级分类学控制 。

### **`announcement-bar`**

导航上方的全宽黑条 36px 高,中央的显微镜,带有下划线的"多学"链接,在极右侧有严密的控制.

### **`hero-photo-card`**

圆形媒体卡用于主首屏和解析页,它结合了摄影或抽象图像与覆盖的暗代理-控制台模块. Radius 通常为 22px 和大牌上, 8px 缩略图上

### **`agent-console-card`**

Dark product mockup panel showing agent names, status chips, integration badges, prompt fields, and generated response cards. Background is near-black, text is white or muted, and small accent chips use product colors.

### **`trust-logo-strip`**

Centered copy above a row of monochrome customer logos. It is intentionally quiet: no cards, no borders, just large horizontal spacing and black or white logos depending on the background.

### **`capability-card`**

Content block with thin-line geometric illustration, 24px heading, body copy, and a text link. On light backgrounds, cards often have only a top rule or a subtle image/card relationship rather than full boxing.

### **`dark-feature-band`**

深绿色或海军全宽的路段用于产品能力、安全要求和特性崩溃。文本变为白色;卡片使用更暗的透明表面、苍白的边框和抽象的线条插图。

### **`product-card`**

Warm stone card used for product/model summaries. Typically 3-column on desktop, with 8px radius, generous padding, a small pill button, a divider line, and checkmark bullet rows.

### **`blog-filter-chip`**

Large coral taxonomy chip used on the blog index. Active chips invert to coral fill with dark text; inactive chips use coral outline and pale fill. Typography is oversized relative to typical filters, making the taxonomy a hero-level control.

### **`research-table`**

Rule-separated publication list with title left, topic pills centered, and date right. Rows are tall, white, and border-driven; filters above use many compact outlined pills.

### **`contact-form-card`**

圆形白色面板,以反向暗绿色或暖石块。输入为长方形,有薄灰色边框, 12px-16px 贴贴,以及紧凑的标签/位置。提交时使用与主切片相同的近黑胶囊形样式。

### **`footer-newsletter`**

暗页脚订阅块,带有珊瑚"AI移动快"标签,白色头条,哑音法律显微拷贝,单行电子邮件字段,箭头提交标记. 脚注列使用白色部分标签和哑音链接.


## 设计建议与禁忌

### 执行

- 使用白色页面底色作为默认的表面;引入深绿色或海军作为全宽的产品带.
- 保持初级CTA的胶囊形形状和光面近黑.
- 使用 22px 半径在主要媒体卡和占位符上。
- 使用珊瑚进行编辑分类学和小温强调色,而不是作为主要的CTA系统.
- 使用宽间隔的单色信任标志.
- 使用薄线几何插图来进行研究和能力图标.
- Let photography and product mockups carry color, while the UI shell stays restrained.

### Don't

- Do not turn coral or blue into broad decorative surface colors.
- Do not add heavy drop shadows to cards.
- Do not make every section card-based; Cohere often uses unframed rows, rules, and open space.
- 下方不要使用四舍五入的牌 8px 给主要媒体。
- Do not replace the display/body type split with one generic sans-serif voice.
- Do not render undocumented interaction variants in documentation or previews.
- Do not use saturated gradients as normal UI backgrounds; keep gradients media-led.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---:|---|
| 小型移动 | <425px | 单列卡,紧凑导航,减少首屏头条缩放 |
| 手机 | 425-640px | 首屏媒体堆栈、卡网格变成一列、 形成行堆栈 |
| 大型移动 | 640-768px | 媒体卡片较大的单列布局 |
| Tablet | 768-1024px | Two-column cards begin, nav spacing tightens |
| 桌面 | 1024-1440px | 完全导航 3- 柱形牌网格, 分裂首屏组成 |
| Large Desktop | 1440-2560px | Wide containers and large empty vertical intervals |

### 触控区域

初级CTA和胶囊形会满足舒适的触摸 伸展通过 12px-24px 添加和pill radi。研究过滤芯片和博客类芯片比标准标签大,使密集的分类表可用于触摸设备。

### 折叠战略

- Nav collapses from full horizontal links to a compact mobile menu.
- 首屏媒体从分牌到堆牌.
- Product and capability grids collapse from 3 columns to 2 and then 1.
- 窗体字段从对齐行向单列崩溃。
- 研究行保留其规则分隔的结构,但将元数据堆放在标题下方的较小宽度.


## 迭代指南

1. Start from a white canvas or a full-width dark green/navy band; avoid mid-tone page backgrounds unless the screenshot shows a specific CTA/form section.
2. 使用 `button-primary` 行动,以及 `button-secondary` 以作伴者,
3. Use `hero-photo-card` or `agent-console-card` when a page needs visual energy; avoid invented dashboard data.
4. 编辑网页,合并 `blog-filter-chip`, `button-pill-outline`,以及 `research-table` 而不是通用的营销卡。
5. 保留组件实例结构诚实:占位产品帧比发明的产品内容更好.


## 已知缺口

- 精确的专有字体文件不捆绑;在外部执行时使用文件倒计时.
- 移动截图在本次公开更新中并未再生成,因此移动行为从桌面系统和现有的响应模式中被记录下来.
- Some live pages lazy-load content blocks late; blank testimonial placeholders are documented as placeholder skeleton surfaces rather than filled testimonial cards.

## 设计词元原值

Cohere's 2026 网络系统是一款由严白编辑空间,深绿色黑色产品带,软矿物表面,圆形媒体卡组成的控制型企业AI界面,是单位式的显示头条和精准的Unica之间划分的鲜明类型.77 UI 文本 。

```yaml
---
version: alpha
name: Cohere-design-analysis
description: Cohere's 2026 web system is a controlled enterprise AI interface built from stark white editorial space, deep green-black product bands, soft mineral surfaces, rounded media cards, and a distinctive type split between monospaced-feeling display headlines and precise Unica77 UI text.

colors:
  primary: "#17171c"
  cohere-black: "#000000"
  ink: "#212121"
  deep-green: "#003c33"
  dark-navy: "#071829"
  canvas: "#ffffff"
  soft-stone: "#eeece7"
  pale-green: "#edfce9"
  pale-blue: "#f1f5ff"
  hairline: "#d9d9dd"
  border-light: "#e5e7eb"
  card-border: "#f2f2f2"
  muted: "#93939f"
  slate: "#75758a"
  body-muted: "#616161"
  action-blue: "#1863dc"
  focus-blue: "#4c6ee6"
  coral: "#ff7759"
  coral-soft: "#ffad9b"
  form-focus: "#9b60aa"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  error: "#b30000"

typography:
  hero-display:
    fontFamily: CohereText
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -1.92px
  product-display:
    fontFamily: CohereText
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -1.44px
  section-display:
    fontFamily: Unica77 Cohere Web
    fontSize: 60px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -1.2px
  section-heading:
    fontFamily: Unica77 Cohere Web
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.48px
  card-heading:
    fontFamily: Unica77 Cohere Web
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.32px
  feature-heading:
    fontFamily: Unica77 Cohere Web
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  body-large:
    fontFamily: Unica77 Cohere Web
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body:
    fontFamily: Unica77 Cohere Web
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: Unica77 Cohere Web
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.71
    letterSpacing: 0
  caption:
    fontFamily: Unica77 Cohere Web
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  mono-label:
    fontFamily: CohereMono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.28px
  micro:
    fontFamily: Unica77 Cohere Web
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 22px
  xl: 30px
  pill: 32px
  full: 9999px

spacing:
  xxs: 2px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 8px 0
  button-pill-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: 6px 12px
  announcement-bar:
    backgroundColor: "{colors.cohere-black}"
    textColor: "{colors.on-dark}"
    typography: "{typography.micro}"
    height: 36px
  hero-photo-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
  agent-console-card:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sm}"
    padding: 24px
  trust-logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
  capability-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 24px
  dark-feature-band:
    backgroundColor: "{colors.deep-green}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: 80px
  product-card:
    backgroundColor: "{colors.soft-stone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 32px
  blog-filter-chip:
    backgroundColor: transparent
    textColor: "{colors.coral}"
    typography: "{typography.card-heading}"
    rounded: "{rounded.sm}"
    padding: 8px 14px
  research-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-large}"
  contact-form-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 32px
  footer-newsletter:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.micro}"
---
```
