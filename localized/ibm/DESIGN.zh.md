# IBM · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

IBM's marketing system is a faithful application of **Carbon Design System** — IBM's open-source enterprise design system. The dominant surface is `{colors.canvas}` pure white with `{colors.surface-1}` light gray for elevation, charcoal `{colors.ink}` (#161616) for text, and IBM Blue `{colors.primary}` (#0f62fe) as the single brand accent.

The defining choice is **flat geometry**: every CTA, every card, every input, every container uses square corners (`{rounded.none}` 0px) with thin 1px borders. There are no rounded pills, no soft shadows, no atmospheric gradients. The system is engineered, not stylized.

**IBM Plex Sans** carries the entire type hierarchy. Display sizes (76 / 60 / 42px) run at weight **300** — IBM's signature light display treatment that makes 76px feel calmer than competing brands' 700-weight display. Body type sits at weight 400 with `letter-spacing: 0.16px` (a Carbon precision detail) and line-height 1.50. The voice reads as careful, technical, and trustworthy.

系统很少达到颜色—— IBM 蓝印链接,初级CTA,以及罕见的全血CTA旗. 炭炭携带着其他不白的表面,结果就是企业没有僵硬性:严格,轻量级,有意约束.

**关键特征 :**
- **碳设计系统** — IBM开销铬 碳。按钮是方的,输入是方的, 与下方规则一致,角留在 0px.
- **轻量级显示类型**: 重磅Plex Sans 键 300 资源 42–76px 头条是品牌的打印签名。
- **One accent color**: `{colors.primary}` IBM Blue carries every link, primary CTA, and CTA banner. There is no second brand color.
- 白色页面底色+浅灰色( 3)`{colors.surface-1}`+ 木炭( )`{colors.ink}`( 覆盖 95% 表面的光线。
- Footer inverts to charcoal (`{colors.inverse-canvas}` #161616) — the only dark surface above the page break.
- Card hierarchy is carried by 1px hairlines and surface change, never by drop shadow.
- `letter-spacing: 0.16px` 身体上是碳精度细节——小正轨是品牌声音的一部分.
- 页面节奏:公用事业栏 上行导航 = 首屏轻量级头条 = 特征卡网格 = 客户标识 Marquee = 企业特色栏 = 培训部分 = 通讯 / 签入CTA = 暗脚.


## 配色

> Source pages: ibm.com (home), /software/ai-productivity, /consulting, /products/cloud-pak-for-aiops, /products/bare-metal-servers, community.ibm.com.

### 品牌和 强调色
- **IBM 蓝色** ({colors.primary}:单品牌强调色 链接 初级CTA CTA旗下背景 焦点环.
- **蓝色 60** ({colors.blue-60}: 内侧链接状态.
- **蓝色 80** ({colors.blue-80}:按下主按钮.
- **Blue Hover** ({colors.blue-hover}): Hover state for primary buttons.

### 表面
- **页面底色** ({colors.canvas}: 默认页面背景.
- **表面 1** ({colors.surface-1}: 浅灰色( 3)#f4f4f4)——输入字段,交替排列条纹,细细的节带.
- **表面 2** ({colors.surface-2}: 稍暗的灰色( )#e0e0e0)——残田,隔离人员补发.
- **细边线** ({colors.hairline}): 1px 边框上,在卡片,输入,分割符上。
- **发条坚固** ({colors.hairline-strong}): 1px 木炭强调重点投入(Carbon的特征重点处理)。
- **反向画廊** ({colors.inverse-canvas}: 炭类 #161616 -脚踏实地
- **反面表面 1** ({colors.inverse-surface-1}: 一步比反向页面底色轻——页脚柱分机,盘旋页脚项目.

### 文本
- **墨水( 墨水 )** ({colors.ink}:所有头条和强调的体型——木炭 #161616.
- **墨水静音** ({colors.ink-muted}: 二级类型 #525252 — meta,小标题,脚部。
- **Ink Subtle** ({colors.ink-subtle}): Tertiary type at #8c8c8c — disabled, helper text, captions.
- **反向墨水** ({colors.inverse-ink}:木炭上为白色——页脚标题.
- **反向墨水静音** ({colors.inverse-ink-muted}: 木炭上浅灰色——脚部身体.

### 语义
- **Success Green** ({colors.semantic-success}): Carbon green-50 — success states.
- **警告黄色** ({colors.semantic-warning}:碳黄-30 - 警告状态。
- **Error Red** ({colors.semantic-error}): Carbon red-60 — error states; danger button background.
- **信息蓝** ({colors.semantic-info}:与初等同——信息徽章.


## 字体排版

### 字体家族

- **IBM Plex Sans** — IBM开源专有型面( 任何用途都可以免费) 。 几何, 略为人文主义, 专门为企业 UI 设计 。 Fallback : `Helvetica Neue, Arial, sans-serif`.

同一家族携带显示器、身体和字幕——没有显示器+身体对称。 **大小 + 字重** 而不是通过家庭改变. Plex Sans 也是在SIL Open Font License下的自由/开源——使其成为本列表中最简单的自定义面,以替代执行.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 76px | 300 | 1.17 | -0.5px | 最大首屏头条 |
| `{typography.display-lg}` | 60px | 300 | 1.17 | -0.4px | 打开区域头条 |
| `{typography.display-md}` | 42px | 300 | 1.20 | 0 | 分节头条,首屏卡片标题 |
| `{typography.headline}` | 32px | 400 | 1.25 | 0 | 收集卡片的标题, FAQ 类别 |
| `{typography.card-title}` | 24px | 400 | 1.33 | 0 | 特性卡标题 |
| `{typography.subhead}` | 20px | 400 | 1.40 | 0 | 显示头条标题的正文 |
| `{typography.body-lg}` | 18px | 400 | 1.50 | 0 | 首屏小标题,主要段落 |
| `{typography.body}` | 16px | 400 | 1.50 | 0.16px | 默认正文 |
| `{typography.body-sm}` | 14px | 400 | 1.29 | 0.16px | 纸体,页脚栏 |
| `{typography.body-emphasis}` | 14px | 600 | 1.29 | 0.16px | 选中标签, 下划线 |
| `{typography.caption}` | 12px | 400 | 1.33 | 0.32px | 说明, meta,工具栏 |
| `{typography.button}` | 14px | 400 | 1.29 | 0.16px | All button labels |
| `{typography.eyebrow}` | 14px | 400 | 1.29 | 0.16px | 区域眉毛( Carbon 避免强烈眉毛; 使用句子大小写) 14px) |

### 原则

- **轻量级显示器是品牌声音.** 重磅时的Plex Sans 300 资源 76px 头条读作悄悄权威——切换到 700 让它看起来像其他企业网站
- **碳的吗? `letter-spacing: 0.16px`** 身体尺寸是精确的细节,不要去掉
- **No mono** on marketing surfaces (Plex Mono exists but lives in product surfaces only).
- **眉毛打字法使用句子大小写 14px** ——碳抵制其他企业品牌常见的全头履带眉毛.
- **线高紧的显示,放松的身体**: 1.17 时 间 display-xl, 1.50 体型——与体积成正比。

### Note on Font Substitutes

IBM Plex Sans is **free and open-source** (SIL OFL license) and available on Google Fonts. It is the recommended implementation. The Plex family also includes Plex Mono and Plex Serif if expanded typographic needs arise.


## 布局

### 间距系统

- **基地单位**: 4px (卡尔本的签名) 4-像素网格 -是的 -pixel grade.
- **托肯斯(前题)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- 纸牌内部 padding: `{spacing.lg}` 24px 特性卡; `{spacing.xl}` 32px 产品卡; `{spacing.xxl}` 48px 首屏卡和CTA的旗号
- 按钮 padding: 12px vertical · 16px horizontal — Carbon spec.
- 格式输入 padding: 11px vertical · 16px horizontal.

### 网格容器( C)

- 碳的吗? 16- 桌面上的列网格,缩放到 8 / 4 平板电脑/移动式的列。
- 最大内容宽度左右 1584px (Carbon的最大网格断点).
- Card grids are 4-up at desktop, 2-up at tablet, 1-up at mobile.
- 顾客标志marquee在弹性行中采用固定的宽瓦,在较小的视门上横向滚动.

### 白空间哲学

碳使用精确对齐a 4-像素网格作为其白空间系统。`{colors.surface-1}`内容因设计而密集—— IBM顾客期望看到很多页面,而不是很多的空气.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for body type, hero text, footer body |
| 1 (电线) | 1px `{colors.hairline}` 页面底色上的边框 | 特性卡、输入、列表项目 |
| 2 (地面升降机) | `{colors.surface-1}` 页面底色的背景 | 副排横幅, 悬牌 |
| 3 (焦点环) | 2px `{colors.primary}` 大纲+ 1px `{colors.hairline-strong}` 下划线 | 焦点输入, 焦点按钮 |

Carbon resists drop shadows on marketing — depth is carried by surface change and 1px hairlines. The exception is product / app surfaces (Carbon documents shadow tokens for elevated panels), but the marketing site barely uses them.

### 装饰性深度

- **柔软的蓝色梯度背景** 出现在一些首屏插图的后面——一个微弱的蓝白相间的洗涤,可以温暖页面底色而不与头条竞争.
- **No atmospheric depth.** No spotlight cards, no pastel section blocks, no gradient panels.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 默认——每个按钮,卡片,输入,容器 |
| `{rounded.xs}` | 2px | Small badges (rare exception) |
| `{rounded.sm}` | 4px | 空洞圆形, 下拉菜单 |
| `{rounded.md}` | 6px | (很少使用;完整文件记录) |
| `{rounded.lg}` | 8px | (很少使用;完整文件记录) |
| `{rounded.pill}` | 9999px | 产品UI(销售部分)中的状态胶囊形、徽章 |

The brand commits to flat 0px corners. The other tokens exist for product / mobile surfaces but rarely surface on marketing.

### 摄影和图像几何

- IBM 使用摄影(人,硬件,运动车)和抽象插图(几何网格,点纹图案)可互换.
- 图像框平坦——没有圆角.
- 客户标志牌坐着 `{rounded.none}` 0px 薄片瓦片 1px 边框。


## 组件

### 按钮

**`button-primary`** 蓝色固态CTA,默认主机横跨所有页面.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 12px 16px, rounded `{rounded.none}`.
- 国家住在这里 `button-primary-pressed` (背景变化至 `{colors.blue-80}`).

**`button-secondary`** ——炭固键 碳的"二级"处理.
- Background `{colors.ink}`, text `{colors.inverse-ink}`, type `{typography.button}`, padding 12px 16px, rounded `{rounded.none}`.

**`button-tertiary`** - 白色按钮加蓝色 1px 边框 + 蓝色文本。用于三级CTA。
- Background `{colors.canvas}`, text `{colors.primary}`, type `{typography.button}`, rounded `{rounded.none}`, padding 12px 16px. (Border in implementation: 1px `{colors.primary}`.)

**`button-ghost`** —— 普通文本+chevron, 只有在徘徊时才有背景.
- Background `{colors.canvas}`, text `{colors.primary}`, type `{typography.button}`, rounded `{rounded.none}`, padding 12px 16px.

**`button-danger`** ——碳的破坏性变体.
- Background `{colors.semantic-error}`, text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.none}`, padding 12px 16px.

### 纸牌和集装箱

**`feature-card`** ——默认功能突出显示在主页和产品页上的瓷砖.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding 24px. Stroked with 1px `{colors.hairline}`.

**`feature-card-elevated`** - 形状相同 `{colors.surface-1}` 地面——用于最新内容的旋转木马中的"推荐"卡片.
- Background `{colors.surface-1}`, otherwise identical structure.

**`product-card`** ——更大产品展示瓷砖.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding 32px.

**`hero-card`** ——首屏配料卡,有轻量级头衔,身体,以及CTA.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.display-md}`, rounded `{rounded.none}`, padding 48px.

**`cta-banner`** ——全宽蓝色的CTA面板靠近页面底部.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.headline}`, rounded `{rounded.none}`, padding 48px.

**`resource-tile`** ——小文章/个案研究瓦片.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.none}`, padding 16px.

**`customer-logo-tile`** ——主页上客户马奎的单瓦(Ferrari,辉瑞等).
- Background `{colors.canvas}`, text `{colors.ink-muted}`, type `{typography.caption}`, rounded `{rounded.none}`, padding 24px. 1px hairline border.

### 输入表单( F)

**`text-input`** + **`text-input-focused`** + **`text-input-error`** ——碳的输入铬.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding 11px 16px.
- 焦点状态替换底部 1px 细边线带a 2px `{colors.primary}` 下划线(Carbon的签名焦点处理)。
- 错误状态添加 2px `{colors.semantic-error}` 下划线 。

**`newsletter-input`** ——主页上"保持连接"通讯抓图.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding 11px 16px. Adjacent submit is `button-primary`.

### 标签

**`product-tab`** + **`product-tab-selected`** ——产品页上横向制表条和家用"推荐"木马.
- Default: `{colors.canvas}` background, `{colors.ink-muted}` text, rounded `{rounded.none}`, padding 16px 20px. Bottom 1px hairline.
- Selected: `{colors.canvas}` background, `{colors.ink}` text, `{typography.body-emphasis}` weight, bottom 2px `{colors.primary}` underline. Same padding / rounding.

### 导航

**`top-nav`** — Sticky 白色条形 IBM 左标记, 导航分类中心, 和搜索 / 签名图标右侧。
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, height 48px. 1px bottom hairline.

**`utility-bar`** ——上方导航上方的斯林灰色丝带,带有位置切换,接触,搜索快捷键.
- Background `{colors.surface-1}`, text `{colors.ink-muted}`, type `{typography.caption}`, height 32px.

### Footer

**`footer`** ——炭脚(`{colors.inverse-canvas}`与 IBM 左侧的字标记和 5–6 标题大小链接的列。页间歇页上唯一反转的表面。
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink-muted}`, type `{typography.body-sm}`, padding 64px 32px.


## 设计建议与禁忌

### 执行

- 使用 `{rounded.none}` 0px 每一个CTA,卡片,输入和容器,平方美学就是品牌.
- 平面棱镜重 300 显示大小( 4)42px+) 字重 400 抵制冲动,把头条大放出来
- Reserve `{colors.primary}` IBM Blue for primary CTAs, links, focused-input underlines, and CTA banner. Do not use it as a card background or eyebrow color.
- 应用 `letter-spacing: 0.16px` 以至体积。这是碳精度的细节和印刷声的一部分。
- Use surface change (`canvas` → `surface-1`) and 1px hairlines for card hierarchy. Skip drop shadows.
- 坚持眉毛和部分标签的判案——碳电阻全头盖跟踪.
- 倒转到 `{colors.inverse-canvas}` 仅位于页脚;其余页面保持淡化.

### Don't

- Don't round corners on buttons, cards, or inputs. Even 4px rounded corners break the Carbon look.
- Don't bold display headlines. Plex Sans at weight 300 is the brand voice; weight 700 makes it look generic.
- Don't add atmospheric depth (gradient backdrops, drop shadows, atmospheric overlays) outside the documented soft-blue hero gradient.
- Don't introduce a second brand color. IBM Blue is the only chromatic accent; status semantics use the documented green / yellow / red.
- Don't replace IBM Plex Sans with Inter or Helvetica without preserving the `letter-spacing: 0.16px` and weight-300 display treatment.
- Don't use pill-shaped buttons. Carbon uses square corners; pills read as a different brand.
- Don't write all-caps tracked eyebrows. Carbon's eyebrows are sentence case at 14px.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 最大 | 1584px | 碳最大电网; 沟渠扩展 |
| Desktop-XL | 1312px | Default desktop layout |
| 桌面 | 1056px | 纸牌网格 4- 维持上调 |
| Tablet | 672px | Card grid 4-up → 2-up; nav becomes hamburger |
| 手机 | 320px | 单栏; display-xl 比额表 76px → ~32px |

### 触控区域

- 碳谱 : 48px 最小水龙头目标。按钮和输入符已锁定 48px 触摸视点
- Top-nav links grow from 36px to 48px tap height on touch.
- 标签条列 48px 高音调音高。

### 折叠战略

- **顶端导航**: 连接到下面的汉堡包覆盖 672px。日志和搜索图标留在栏上。
- **工具栏**: 隐藏在下面 672px 以回收垂直空间。
- **Card grid**: 4-up → 2-up at 1056px → 1-up below 672px.
- **显示类型**: `{typography.display-xl}` 76px 比额表走向 42px 移动时,同时保留字重...300 治疗。
- **Footer**: 6-column link grid → 3-column at tablet → 1-column at mobile.

### 图像行为

- marquee中的客户标识保持宽度比,并可能崩溃到 2- 下方滚动 672px.
- 首屏插图比例; 下 672px 可能堆在头条上方 而不是坐在头条旁边


## 迭代指南

1. 一次集中关注一个部分,并按其 `components:` 符号名称。
2. Default body to `{typography.body}` at weight 400 with `letter-spacing: 0.16px`. Don't remove the tracking.
3. 介绍新章节时,请决定是否在 `{colors.canvas}` (违约)或 `{colors.surface-1}` (变调乐队),双面的节奏是节奏.
4. 运行 `npx @google/design.md lint DESIGN.md` 编辑后。
5. 添加新的变体作为单独的组件条目( Q)`button-primary-pressed`, `text-input-error`, `text-input-focused`).
6. 处理 IBM 蓝色如稀有:链接、主要CTA、CTA旗帜、焦点下划线。超出此段的任何东西都是漂移的。
7. 坚守圆角,如果设计师逼迫 4px 圆形,品牌正在从Carbon转移.


## 已知缺口

- IBM产品表面(云板,瓦森,数据封面)具有丰富的碳元件使用量(数据表,图细胞,面包屑,背景菜单),这些内容没有出现在被检查的营销页面上——这些组件生活在碳的文档中,而不是在营销提取中.
- Form-field 错误和验证样式在Carbon docs中记录;被检查的页面没有使错误状态发生.
- 暗模式在Carbon中被记录为灰色-100 主题,但并没有在这些营销页面上曝光——只有页脚反转。整个黑暗主题是一个单独的碳调色板,没有在这里提取。
- 社区.ibm.com子域使用不同的铬(社区-平台白-标签),大致为Carbon,但并不严格——文献系统适用于 ibm.com 正常的. . 互联网档案馆的存档,存档日期2013-09-02..

## 设计词元原值

An enterprise-marketing canvas faithful to Carbon Design System: white surfaces, charcoal type, IBM Blue (#0f62fe) as the single confident accent, and a deliberately flat-square aesthetic where corners stay at 0–4px. Type runs IBM Plex Sans at light weight 300 for display sizes (a brand signature) and 400/600 for body and emphasis. Cards live as thin-bordered tiles with no shadow; sections separate via subtle gray rows. The chrome is square, the typography is light, and the only color in the system is one assertive blue — the result reads as old-world enterprise gravitas reframed for the cloud era.

```yaml
---
version: alpha
name: IBM-design-analysis
description: "An enterprise-marketing canvas faithful to Carbon Design System: white surfaces, charcoal type, IBM Blue (#0f62fe) as the single confident accent, and a deliberately flat-square aesthetic where corners stay at 0–4px. Type runs IBM Plex Sans at light weight 300 for display sizes (a brand signature) and 400/600 for body and emphasis. Cards live as thin-bordered tiles with no shadow; sections separate via subtle gray rows. The chrome is square, the typography is light, and the only color in the system is one assertive blue — the result reads as old-world enterprise gravitas reframed for the cloud era."

colors:
  primary: "#0f62fe"
  on-primary: "#ffffff"
  ink: "#161616"
  ink-muted: "#525252"
  ink-subtle: "#8c8c8c"
  canvas: "#ffffff"
  surface-1: "#f4f4f4"
  surface-2: "#e0e0e0"
  inverse-canvas: "#161616"
  inverse-surface-1: "#262626"
  inverse-ink: "#ffffff"
  inverse-ink-muted: "#c6c6c6"
  hairline: "#e0e0e0"
  hairline-strong: "#161616"
  blue-60: "#0043ce"
  blue-80: "#002d9c"
  blue-hover: "#0050e6"
  semantic-success: "#24a148"
  semantic-warning: "#f1c21b"
  semantic-error: "#da1e28"
  semantic-info: "#0f62fe"

typography:
  display-xl:
    fontFamily: IBM Plex Sans
    fontSize: 76px
    fontWeight: 300
    lineHeight: 1.17
    letterSpacing: -0.5px
  display-lg:
    fontFamily: IBM Plex Sans
    fontSize: 60px
    fontWeight: 300
    lineHeight: 1.17
    letterSpacing: -0.4px
  display-md:
    fontFamily: IBM Plex Sans
    fontSize: 42px
    fontWeight: 300
    lineHeight: 1.20
    letterSpacing: 0
  headline:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  card-title:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  subhead:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0.16px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0.16px
  body-emphasis:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: 0.16px
  caption:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0.32px
  button:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0.16px
  eyebrow:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0.16px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
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
    rounded: "{rounded.none}"
    padding: 12px 16px
  button-primary-pressed:
    backgroundColor: "{colors.blue-80}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 16px
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 16px
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 16px
  button-danger:
    backgroundColor: "{colors.semantic-error}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 16px
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 24px
  feature-card-elevated:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 24px
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 32px
  hero-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: 48px
  cta-banner:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: 48px
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 11px 16px
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 11px 16px
  text-input-error:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 11px 16px
  newsletter-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 11px 16px
  product-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 16px 20px
  product-tab-selected:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-emphasis}"
    rounded: "{rounded.none}"
    padding: 16px 20px
  resource-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 16px
  customer-logo-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 24px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    height: 48px
  utility-bar:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    height: 32px
  footer:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 64px 32px
---
```
