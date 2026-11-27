# Ferrari · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Ferrari's marketing site reads as cinematic editorial — closer to a luxury-magazine spread than a typical car-OEM site. The base canvas is **near-black** (`{colors.canvas}` — #181818) holding pure white display type; white-canvas bands appear only inside specific editorial contexts (preowned listings, pricing tables, dealer surfaces). The single brand voltage is **Rosso Corsa** (`{colors.primary}` — #da291c), the iconic Ferrari racing red, used scarcely on primary CTAs, the Cavallino mark, and Formula 1 race-position highlights.

类型运行 **FerrariSans** 以微小的重量表示的单桑家族——显示 500, 身体( 身体) 400. 反恐援助标签在大写中大写,并有慷慨的跟踪(1.1-1.4px),品牌从未使用粗体显示副本.

品牌最强的视觉标志是 **满腔血泪的电影首屏照片** ——上页图像显示汽车摄影,模型细节,或者没有与之竞争的轨迹侧生活. 头条浮在照片底部或者坐在下面的紧凑的带子中. 间距跟随明确 8px 符号梯度 : `xxxs` 4 / `xxs` 8 / `xs` 16 / `sm` 24 / `md` 32 / `lg` 48 / `xl` 64 / `xxl` 96 / `super` 128.

**关键特征 :**
- Single accent: `{colors.primary}` (Rosso Corsa #da291c) for primary CTAs, the Cavallino, F1 race-position highlights. Used scarcely.
- 近黑页面底色( 3)#181818)——永远不纯黑色. 白-canvas乐队只在编辑背景中.
- 单身桑氏家族: FerrariSans 跨越每个文本角色。
- 显示字重停留在 500 - 永远不要大胆
- CTA 标签会让大写带有 1.4px 追踪。
- Sharp `{rounded.none}` (0px) corners on every CTA, card, and band — luxury-automotive precision.
- 满血电影首屏摄影是页染色体.
- 明确 8px 带有命名尺度的间隔符阶梯(xxx通过超级).
- Hairlines + photographic depth — no drop shadow tiers.


## 配色

### 品牌色与强调色
- **Rosso Corsa** (`{colors.primary}` — #da291c): The iconic Ferrari racing red. Primary CTA fill, Cavallino mark, F1 driver-position highlights. Used scarcely.
- **Rosso Corsa Active** (`{colors.primary-active}` — #b01e0a): Press state.
- **Rosso Corsa Hover-darker** (`{colors.primary-hover}` — #9d2211): Documented for completeness; per the no-hover policy this is not used in preview HTML.
- **超帆黄** (`{colors.accent-yellow-hypersail}` — #fff200) + **黄色** (`{colors.accent-yellow}` — #f6e500: 副品牌强调色,为超帆帆船计划和全球 focus-ring 颜色,不是主汽车调色板的一部分

### 界面表面
- **页面底色** (`{colors.canvas}` — #181818:近黑页楼层——永远不纯黑,微微暖.
- **高空的画廊** (`{colors.canvas-elevated}` — #303030:暗布上的纸牌和面板.
- **光线** (`{colors.canvas-light}` — #ffffff: 白话编辑段(前作上市,定价).
- **表面卡片** (`{colors.surface-card}` — #303030: 与 canvas-elevated ——驾驶卡,活字照相机牌.
- **表面软光** (`{colors.surface-soft-light}` — #f7f7f7: 轻编辑交替乐队.
- **表面强光** (`{colors.surface-strong-light}` — #ebebeb:轻坎瓦分机,徽章.

### Hairlines
- **细边线** (`{colors.hairline}` — #303030): 1px 暗色的分隔符——与 `{colors.canvas-elevated}`.
- **光线细边线** (`{colors.hairline-on-light}` — #d2d2d2): 1px 轻频段的分隔符。
- **柔软的细边线** (`{colors.hairline-soft}` — #ebebeb:轻分者.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — #ffffff:显示,身体强调暗色.
- **体质** (`{colors.body}` — #969696: 暗处默认运行文本 。
- **Body Strong** (`{colors.body-strong}` — #ffffff): Same as ink.
- **光线上的身体** (`{colors.body-on-light}` — #181818: 轻带上的默认文本.
- **静音** (`{colors.muted}` — #666666:字幕,字幕在暗色上.
- **静音软体** (`{colors.muted-soft}` — #8f8f8f: 已禁用链接文本.
- **On Primary** (`{colors.on-primary}` — #ffffff): White text on Rosso Corsa.

### 语义色
- **信息** (`{colors.semantic-info}` — #4c98b9:信息徽章,呼喊背景.
- **Success** (`{colors.semantic-success}` — #03904a): Confirmation.
- **警告** (`{colors.semantic-warning}` — #f13a2c: 验证警告.


## 字体排版

### 字体族
**FerrariSans** is the licensed single sans family across every text role. Fallback: `-apple-system, system-ui, sans-serif`. No display/body family split.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 80px | 500 | 1.05 | -1.6px | Homepage hero h1 |
| `{typography.display-xl}` | 56px | 500 | 1.1 | -1.12px | Subsidiary heroes |
| `{typography.display-lg}` | 36px | 500 | 1.2 | -0.36px | 科长,活体乐队 |
| `{typography.display-md}` | 26px | 500 | 1.5 | 0.195px | 副科长 |
| `{typography.title-md}` | 18px | 700 | 1.2 | 0 | 构成部分标题 |
| `{typography.title-sm}` | 16px | 500 | 1.4 | 0.08px | 列表标签 |
| `{typography.body-md}` | 14px | 400 | 1.5 | 0 | 默认正文 |
| `{typography.body-sm}` | 13px | 400 | 1.5 | 0 | Footer body |
| `{typography.caption}` | 12px | 400 | 1.4 | 0 | 图片标题 |
| `{typography.caption-uppercase}` | 11px | 600 | 1.4 | 1.1px | 区域标签、徽章 |
| `{typography.button}` | 14px | 700 | 1.0 | 1.4px (uppercase) | CTA 避孕药标签 |
| `{typography.nav-link}` | 13px | 600 | 1.4 | 0.65px (uppercase) | Top-nav 菜单项 |
| `{typography.number-display}` | 80px | 700 | 1.0 | -1.6px | 种族位置突出显示, 光谱值 |

### 原则
- **显示字重停留在 500.** 编辑自信,而非爆破,电影摄影正在做视觉重力提升——类型不需要竞争.
- **CTA 标签为大写 1.4px 追踪。** 奢侈精密的感觉。
- **导航标签为大写 0.65px 追踪。** 符合CTA的声音。
- **负数 letter-spacing 仅显示。** -0.36px 改为: -1.6px 显示大小; 身体保持为 0.

### 替代字体
FerrariSans 已获得许可。开源替换 : **Inter** 字重 500 配合 letter-spacing -1%,或 **索恩语** 更接近人文主义的分寸


## 布局

### 间距系统
- **基部单位:** 4px.
- **脚本 :** `{spacing.xxxs}` 4px · `{spacing.xxs}` 8px · `{spacing.xs}` 16px · `{spacing.sm}` 24px · `{spacing.md}` 32px · `{spacing.lg}` 48px · `{spacing.xl}` 64px · `{spacing.xxl}` 96px · `{spacing.super}` 128px.
- **Section padding:** `{spacing.xxl}` (96px) for major bands; `{spacing.super}` (128px) reserved for hero band depth.

### 网格与容器
- 最大内容 width: ~1280px on editorial bands. Hero photography goes full-bleed.
- 编辑机构: 12- 列网格 - 列网格 - Colind grade.
- Feature card grids: 2-up at desktop for hero splits, 3-up for benefit grids, 4-up for preowned listing tiles.
- Footer: 5-column at desktop.

### 留白规则
优雅的编辑节奏。电影首屏摄影占据了慷慨的景点房地产;身体部分坐落在下面的编辑布局更紧凑。 canvas-light 编辑乐队(前作,定价)的密度比黑暗电影乐队要紧.


## 层次与深度

系统使用 **图片深度+亮度-步骤** 高空,只有一个小软体 `{shadow.small}` 以提取的符号记录。

| 职等 | 治疗 | 使用 |
|---|---|---|
| 平面( 扫描) | `{colors.canvas}` (#181818) | 车体带,页脚 |
| 纸牌 | `{colors.canvas-elevated}` (#303030) | 驾驶卡,生活车牌 |
| 轻波段 | `{colors.canvas-light}` (#ffffff) | 预购上市,定价 |
| 细边线边框 | 1px `{colors.hairline}` 或 `{colors.hairline-on-light}` | 纸牌轮廓, 分隔符 |
| 软滴 | `0 4px 8px rgba(0,0,0,0.1)` | 单层阴影卡 |
| 摄影 | 电影全血影像 | 首屏乐队,活泼的照片 |

### 装饰性深度
- **满腔热血的电影摄影** 品牌的主要深度处理。
- **红色渐变** (`linear-gradient(180deg, #a00c01, #da291c 64%)`: Rosso Corsa梯度在强调色带和CTA悬浮状态内使用.
- **暗灰色渐变** (`linear-gradient(180deg, #3c3c3c, #030303 64%)`: 用于部分过渡的大气暗化.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 每一个CTA,卡片,波段——主半径 |
| `{rounded.xs}` | 2px | 紧身警徽( 稀有) |
| `{rounded.sm}` | 4px | 格式输入 |
| `{rounded.md}` | 6px | 紧凑牌( 稀有) |
| `{rounded.lg}` | 8px | 仅移动式崩溃卡 |
| `{rounded.xl}` | 12px | 潮汐/对角(稀有) |
| `{rounded.full}` | 9999px | 幻象牌,警徽药 |

半径词汇是 **默认锐度**锐利 0px 角是品牌按钮形状——从不圆形胶囊形,胶囊形几何只保留给徽标.


## 组件

### 顶端导航

**`top-nav-on-dark`** — Default top nav on dark hero pages. Background `{colors.canvas}`, text `{colors.ink}`, height 64px. Layout: Cavallino mark left, primary horizontal menu (Models / F1 / Lifestyle / Owners / Preowned), language picker + utilities right. Menu items render uppercase with 0.65px tracking.

**`top-nav-on-light`** ——编辑光带的白-canvas变体.

### 按钮

**`button-primary`** — The signature Rosso Corsa CTA. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}` (14px / 700 / 1.4px tracking, uppercase), padding 14px × 32px, height 48px, **rounded `{rounded.none}` (0px — sharp corners)**.

**`button-primary-active`** ——新闻状况。背景 `{colors.primary-active}`.

**`button-outline-on-dark`** — Transparent with 1px white border. Background transparent, text `{colors.ink}`, 1px white border, same sharp 0px corners.

**`button-outline-on-light`** — Transparent 配合 1px 浅带上的墨边界.

**`button-tertiary-text`** ——内置文本链接,大写跟踪.

### 首屏乐队

**`hero-band-cinema`** ——全血电影照片. `{colors.canvas}` 显示头条浮在照片底部,或者坐在下面的紧带里,在下面,在下面。 `{typography.display-mega}` (80px / 500 / -1.6px) 初级CTA+ 1 大纲CTA. 0 垫片——照片填充边缘对边缘.

**`hero-band-light`** — White-canvas variant for editorial bands. Background `{colors.canvas-light}`, text `{colors.body-on-light}`, padding 96px.

### 纸牌

**`feature-card-photo`** ——图像第一卡。背景 `{colors.canvas}`文本中,请输入 `{colors.ink}`,四舍五入 `{rounded.none}`,图像填充顶端边缘对端;标题+身体坐落在下方的紧凑的排字.

**`feature-card-light`** — White-canvas variant. Background `{colors.canvas-light}`, text `{colors.body-on-light}`, rounded `{rounded.none}`, padding 32px.

**`driver-card`** — F1 driver portrait card. Background `{colors.canvas-elevated}`, text `{colors.ink}`, rounded `{rounded.none}`, padding 24px. Layout: driver portrait + name + race number + team badge.

### 编辑版面

**`livery-band`** ——全宽的罗索·科萨强调色乐队. `{colors.primary}`文本中,请输入 `{colors.ink}`类型 `{typography.display-lg}`, 96px 用作黑暗编辑乐队之间的突出的现场呼喊。

**`preowned-listing-card`** 用于预有 Ferrari 列表网格。背景 `{colors.canvas-light}`文本中,请输入 `{colors.body-on-light}`,四舍五入 `{rounded.none}`, 编译 24px. 版式:车顶照片+型号名称+年份/英里+价格.

### 光谱和种族表面

**`spec-cell`** — Technical spec callout. Transparent background, value in `{typography.number-display}` (80px / 700 / -1.6px white), label below in `{typography.caption-uppercase}`.

**`race-position-cell`** — F1 driver finishing position. Same number-display geometry but text in `{colors.primary}` Rosso Corsa for the brand's racing identity.

**`race-calendar-row`** ——F型线条分割排行.1 。布局:左边的日期列,种族名称+电路中间,结果列右。

### 窗体标记( T)

**`text-input-on-dark`** — Background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.sm}` (4px), padding 14px × 16px, height 48px, 1px `{colors.hairline}` border.

**`text-input-on-light`** ——白坎瓦斯变种.

**`badge-pill`** — Small uppercase pill. Background `{colors.canvas-elevated}`, text `{colors.ink}`, type `{typography.caption-uppercase}` (11px / 600 / 1.1px tracking, uppercase), rounded `{rounded.full}` (9999px), padding 4px × 12px. The only place pill geometry is used.

### 通讯/CTA/页脚

**`newsletter-input-band`** — Newsletter signup band. Background `{colors.canvas-elevated}`, padding 32px, rounded `{rounded.sm}`. Holds an inline email input + primary CTA.

**`cta-band-dark`** — Pre-footer band. Background `{colors.canvas}`, centered display headline in `{typography.display-lg}`, single Rosso Corsa CTA. 96px padding.

**`footer-dark`** — Closing dark footer. Background `{colors.canvas}`, text `{colors.body}`. 5-column link list. 64×48px padding.

**`footer-link`** — Background transparent, text `{colors.body}`, type `{typography.body-sm}`.


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` (罗索·科萨)主要CTAs、Cavallino标记和F1 种族位置突出。
- 设定每一次 CTA 时间 `{rounded.none}` (0px 尖角)——品牌的标志精度.
- Render CTA labels in uppercase with 1.4px tracking via `{typography.button}`.
- 给每个首屏配上满腔血红的电影照片——照片是深度.
- 使用清晰的 8px 间距梯度( E)`xxxs` 结束 `super`)而不是临时的px值。
- 保持显示字重 500 - 永远不要大胆

### 应避免的做法
- Don't introduce a saturated brand color other than Rosso Corsa.
- 切片或胶囊形不要用 尖锐的 0px 角是品牌按钮。
- Don't bold display copy. The cinematic photography does the visual heavy-lifting.
- Don't use Hypersail yellow outside the Hypersail sailing program context.
- Don't use pure black canvas. The brand canvas is `{colors.canvas}` (#181818) — slightly warm.
- Don't add drop shadow tiers. Photography + brightness-step elevation carry the depth.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA color is what appears on actual product CTAs, not on injected modals.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 640px | 首屏照片作物垂直;首屏h1 80→32px; 特征卡网格 1- 上; 导航汉堡; 预有的上市 1- 起来 |
| 平板 | 640–1024px | 首屏h( 首屏h)1 56px; 特征卡网格 2- 上; 预有上市 2- 起来 |
| 桌面 | 1024–1280px | 完全首屏h( 首屏h)1 80px; 特征卡网格 3- 上; 预有上市 4- 起来 |
| Wide | > 1280px | Editorial body content caps at 1280px; hero photography continues full-bleed. |

### 触控区域
- 初级CTA 时间 48px 高度——在WCAG AAA(AAA)44 × 44).
- 导航项目将大写渲染为 0.65px 跟踪,加载,以有效 48px 电磁带区域。

### 窄屏布局调整
- 顶端导航切换到下面的汉堡包 768px.
- 首屏照片通过艺术方向每断点重新布局——桌面搭载宽阔的电影;移动作物收紧或转向垂直.
- 特性卡 grid: 4-up → 3-up → 2-up → 1-up.
- F1 driver cards: 2-up at desktop, 1-up at mobile.


## 迭代指南

1. 一次集中关注单个组件.
2. 默认 CTAs 至 `{rounded.none}` (0px 锐利。卡片使用 `{rounded.none}` 胶囊形也用来当警徽
3. 变式作为单独的条目在内部存在 `components:`.
4. 使用 `{token.refs}` 到处都是,从不内含六分法。
5. 霍弗州从未有文献记载.
6. FerrariSans 500 用于展示, 400/700 用于体积。大写+跟踪CTAs和导航。
7. Rosso Corsa stays scarce — primary CTAs, Cavallino, race-position highlights only.
8. 使用清晰的 8px 名为间距梯度。


## 已知缺口

- FerrariSans 许可证型号; Inter 字重 500 的替换。
- 动画计时(首屏抛物机,活泼乐队入口,赛事姿势计数器)出镜.
- 产品表面(前置配置器,F)1 遥测重叠),仅通过营销表面部分捕获.
- 形式验证状态超出焦点,在捕获的表面看不到。
- 超帆黄色的词元被提取出来,但只出现在超帆帆程序上下文——作为范围强调色记录.

## 设计词元原值

A luxury-automotive brand whose marketing surfaces read as cinematic editorial. The base canvas is **near-black** (`#181818`) holding pure white display type; white-canvas bands appear only inside specific editorial contexts (preowned listings, pricing tables). The single brand voltage is **Rosso Corsa** (`#da291c`) — the iconic Ferrari racing red — used scarcely on primary CTAs, the Cavallino mark, and Formula 1 race-position highlights. Type runs **FerrariSans** at modest weights (display 500, body 400) — never bombastic. Spacing follows an explicit 8px token ladder (`xxxs` 4px through `super` 128px); generous editorial pacing throughout. The brand's strongest visual signature is the **full-bleed cinematic hero photograph** that fills the viewport top with car photography, model details, or trackside livery — followed by a tighter editorial body layout below.

```yaml
---
version: alpha
name: Ferrari-design-analysis
description: A luxury-automotive brand whose marketing surfaces read as cinematic editorial. The base canvas is **near-black** (`#181818`) holding pure white display type; white-canvas bands appear only inside specific editorial contexts (preowned listings, pricing tables). The single brand voltage is **Rosso Corsa** (`#da291c`) — the iconic Ferrari racing red — used scarcely on primary CTAs, the Cavallino mark, and Formula 1 race-position highlights. Type runs **FerrariSans** at modest weights (display 500, body 400) — never bombastic. Spacing follows an explicit 8px token ladder (`xxxs` 4px through `super` 128px); generous editorial pacing throughout. The brand's strongest visual signature is the **full-bleed cinematic hero photograph** that fills the viewport top with car photography, model details, or trackside livery — followed by a tighter editorial body layout below.

colors:
  primary: "#da291c"
  primary-active: "#b01e0a"
  primary-hover: "#9d2211"
  ink: "#ffffff"
  body: "#969696"
  body-strong: "#ffffff"
  body-on-light: "#181818"
  muted: "#666666"
  muted-soft: "#8f8f8f"
  hairline: "#303030"
  hairline-on-light: "#d2d2d2"
  hairline-soft: "#ebebeb"
  canvas: "#181818"
  canvas-elevated: "#303030"
  canvas-light: "#ffffff"
  surface-card: "#303030"
  surface-soft-light: "#f7f7f7"
  surface-strong-light: "#ebebeb"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-light: "#181818"
  accent-yellow-hypersail: "#fff200"
  accent-yellow: "#f6e500"
  semantic-info: "#4c98b9"
  semantic-success: "#03904a"
  semantic-warning: "#f13a2c"

typography:
  display-mega:
    fontFamily: "'FerrariSans', -apple-system, system-ui, sans-serif"
    fontSize: 80px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -1.6px
  display-xl:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.12px
  display-lg:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.36px
  display-md:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.195px
  title-md:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  title-sm:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.08px
  body-md:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 1.1px
    textTransform: uppercase
  button:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 1.4px
    textTransform: uppercase
  nav-link:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.65px
    textTransform: uppercase
  number-display:
    fontFamily: "'FerrariSans', sans-serif"
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1.6px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  full: 9999px

spacing:
  xxxs: 4px
  xxs: 8px
  xs: 16px
  sm: 24px
  md: 32px
  lg: 48px
  xl: 64px
  xxl: 96px
  super: 128px

components:
  top-nav-on-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  top-nav-on-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.body-on-light}"
    typography: "{typography.nav-link}"
    height: 64px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 14px 32px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  button-outline-on-dark:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 13px 31px
    height: 48px
  button-outline-on-light:
    backgroundColor: transparent
    textColor: "{colors.body-on-light}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 13px 31px
    height: 48px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  hero-band-cinema:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    padding: 0
  hero-band-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.body-on-light}"
    typography: "{typography.display-xl}"
    padding: 96px
  feature-card-photo:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: 0
  feature-card-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.body-on-light}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: 32px
  livery-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: 96px
  preowned-listing-card:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.body-on-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 24px
  spec-cell:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.number-display}"
    padding: 24px 0
  race-position-cell:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.number-display}"
  race-calendar-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 16px 0
  driver-card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: 24px
  text-input-on-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 14px 16px
    height: 48px
  text-input-on-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.body-on-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 14px 16px
    height: 48px
  badge-pill:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  cta-band-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: 96px
  newsletter-input-band:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 32px
  footer-dark:
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
