# SpaceX · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

SpaceX's design language is an exercise in negation: pure black canvas, white display type set in tight vertical leading and uppercase, full-bleed photography or autoplaying rocket-launch video as the only chrome. There is no brand color beyond black-and-white; there are no decorative shapes; there are no card grids or pricing tables on the marketing pages. Every band is a single full-viewport photograph or video paired with one all-caps headline at `{typography.display-xxl}` (80px D-DIN-Bold) and one ghost-outlined pill CTA. The composition is closer to a film title card than a SaaS landing page.

品牌深度为摄影,火星景观,火箭排气羽流,F型9 日落时发射板上的助推器——这些是设计系统。类型在高度不透明的情况下坐落,没有斜纹,没有梯度覆盖;照片被分级,所以类型是干净的。当类型确实需要背景时,它就坐落于上。 `{colors.canvas-night-soft}` (一个勉强被抬起来的近黑) 1px 细边线在 `{colors.hairline-on-dark}`.

Typography splits between **D-DIN-Bold** for display tiers (uppercase, tight tracking, condensed feel) and **D-DIN** regular for body and button labels. There is no third family — even pricing on the shop site uses the same two cuts. The display sizes are unusually tight in vertical leading (0.95–1.25) and unusually loose in horizontal tracking (1.6px positive at 80px) — the brand feels engineered rather than designed.

**关键特征 :**
- Single canvas: pure `{colors.canvas-night}` (`#000000`) for marketing; `{colors.canvas-light}` only on the shop site.
- Display tier in uppercase D-DIN-Bold with positive horizontal tracking (1.6px at 80px) — the brand's typographic signature.
- Full-bleed photography or autoplaying video as the dominant decorative element; type sits directly on imagery with no scrim.
- 单粒幽灵外线胶囊形 CTA/每组 `{rounded.pill}` 32px 半径——不填充,不配强调色色.
- All-caps eyebrow microtext (`{typography.micro-cap}` and `{typography.button-cap}`) with positive 0.96–1.17px tracking — every chrome element shouts in caps.
- Fixed 顶端导航覆盖在摄影上——没有不透明的背景,只是白线上图像.
- 紧紧 0.95 line-height 自动操作 80px 显示 —— 垂直压缩是工程美学.


## 配色

> **Source pages:** home (`/`), `/shop`, `/vehicles/starship`, `/humanspaceflight/overview`, `/mission`.

### 品牌色与强调色
The brand has no accent colors. Black and white do all the chromatic work; photography supplies every other hue.

### 界面表面
- **风景之夜** (`{colors.canvas-night}` — `#000000`:默认营销布,纯黑色,无锡.
- **夜幕轻柔** (`{colors.canvas-night-soft}` — `#0a0a0a`: 微小的被抬起的近黑,用于内容章节,这些章节需要与纯黑首屏微妙的区分.
- **光线** (`{colors.canvas-light}` — `#ffffff`:店址产品表面.
- **风帆 凉爽** (`{colors.canvas-cool}` — `#f0f0fa`: 一种苍白的凉蓝白,用作商店场地上的次要表面,以及某些鬼按钮的悬浮布.
- **黑暗的细边线** (`{colors.hairline-on-dark}` — `#3a3a3f`): 1px 暗色表面界面框架的边框。
- **光线上的细边线** (`{colors.hairline-on-light}` — `#e0e0e8`:店址卡上的边框.

### 文字颜色
- **小学** (`{colors.on-primary}` — `#ffffff`:暗布上的默认文本;整个营销网站的主导文本颜色.
- **On Primary Mute** (`{colors.on-primary-mute}` — `#f0f0fa`): Slightly cooled-white used for secondary text on dark surfaces — barely distinguishable from `{colors.on-primary}` but enough to suggest a hierarchy.
- **墨水( 墨水 )** (`{colors.ink}` — `#000000`: 光面上的默认文本(商店站点).
- **墨水哑声** (`{colors.ink-mute}` — `#5a5a5f`: 轻表面的副文本.

### 链接
- **链接于 Dark** (`{colors.link-on-dark}` — `#ffffff`:暗布上下划线内置链接.
- **链接蓝后退** (`{colors.link-blue-fallback}` — `#0000ee`:在无样式的倒置上下文中出现的浏览器默认——为完整而记录,不用作品牌颜色.


## 字体排版

### 字体族

显示层是 **D-DIN-Bold** ——由德国DIN启发的浓缩工业桑斯 1451 标准(在自动巴恩道路标志和工程蓝图上使用)。 **Arial Narrow**,则 Arial,则 Verdana ——倒置链将宽度压缩优先于装饰品.

用户界面等级是: **D-DIN** (正则字重)——标准宽度下相同的家族——用于身体,按钮标签,以及标题.

D-DIN is freely available from the **DIN Type Foundry** (and a free version under the same name is widely distributed). For maximum brand fidelity, use D-DIN directly; as a substitute, **Inter** at heavy weights (700+) with letter-spacing of 1.6px positive tracking approximates the rhythm. Avoid serif or humanist sans alternatives.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 80px | 700 | 0.95 | 1.6px | Hero headline (uppercase) |
| `{typography.display-xl}` | 60px | 700 | 1.2 | 1.2px | Section opener (uppercase) |
| `{typography.display-lg}` | 48px | 700 | 1.25 | 0.96px | 分节标题(uppercase) |
| `{typography.body-lg}` | 16px | 400 | 1.7 | 0.32px | 营销机构牵头 |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0.32px | 默认 UI 天体 |
| `{typography.button-cap}` | 13.008px | 700 | 0.94 | 1.17px | All-caps button label |
| `{typography.micro-cap}` | 12px | 400 | 2.0 | 0.96px | All-caps eyebrow / nav item |
| `{typography.caption}` | 13.008px | 400 | 1.5 | 0 | Helper / footer text |

### 原则
- **Uppercase across display.** Every display tier renders in uppercase. The brand never uses sentence-case display headlines.
- **显示时要紧竖起** 0.95 时 间 80px 和 1.2 时 间 60px ——类型堆栈 工程师-紧凑.
- **Wide horizontal tracking.** Positive 0.96–1.6px tracking on display sizes; positive 0.96–1.17px on caps eyebrows. The wide tracking is the brand's signature optical air.
- **No mono.** Code blocks are not part of the brand's typographic system.

### 替代字体
**D-DIN** is freely available (the original DIN-style face under that name is widely distributed). When unavailable, use **Inter** at 700 weight with `letter-spacing: 1.6px`, `text-transform: uppercase`, and `line-height: 0.95` for display sizes — this matches the rhythm. Avoid Helvetica or Arial at default weights — the brand needs the condensed industrial cut. Avoid serif fallbacks entirely.


## 布局

### 间距系统
- **基地单位**: 8px (有较密集的子单元) 4 / 12 / 16 / 18 / 24).
- **脚本**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 18px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 48px.
- **分区编栏**:关于营销的全景波段——上面/下面没有内部粘贴;照片是部分。 48–64px 垂直粘贴。

### 网格与容器
- 营销页面没有容器——每个乐队都是全景端口-宽,全景端口-高(或接近),整个帧都充满了摄影.
- 商店产品 grid: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- 类型坐落在内侧 ~1200px 阅读栏目时,横向以全血照片为中心。

### 留白规则
The marketing pages have minimal traditional whitespace — the photograph occupies all space. "Whitespace" here means the dark sky in a rocket photograph or the empty stretch of Martian terrain. Negative space is photographic, not a UI choice. On the shop site whitespace returns to standard 32px grid gutters.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 | 平面 | 默认——也是营销表面的唯一关卡 |
| 1 | Photographic — full-bleed image or video | The primary depth medium; photographs do all the lifting |

品牌不使用投影、模糊、发光或梯度覆盖。深度是摄影:在暮光下发射火箭具有自然大气深度,没有CSS影子可以模拟。当类型需要从图像中分离时,图像被分级为更暗而非斜线。

### 装饰性深度
Photography and autoplaying rocket-launch video are the only decorative depth. There are no illustrations, no icons beyond a few minimal SVG arrow chevrons in nav and CTA hover states.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | 表格输入(商店网站) |
| `{rounded.sm}` | 8px | 商店产品卡、光盘、录像机 |
| `{rounded.md}` | 16px | 较大的表面界面框架 |
| `{rounded.pill}` | 32px | Ghost)概述了避孕药CTAs(品牌的签名按钮形状). |
| `{rounded.full}` | 9999px | Circular 视频框上的播放按钮覆盖 |

### 图片形状
Every photograph is full-viewport-bleed, edge-to-edge, never inset in a card on the marketing site. On the shop site, product photography sits inside `{rounded.sm}` 8px containers with no shadow. Aspect ratios on marketing photography vary with the source image — there is no enforced ratio; the photograph leads.


## 组件

### 按钮

**`button-ghost-on-dark`** ——市场营销表面的通用CTA.
- Background `{colors.canvas-night}` (transparent against the photographed canvas), 1px solid `{colors.on-primary}` border, text `{colors.on-primary}`, type `{typography.button-cap}` (uppercase, 13px / 700 / 1.17px tracking), padding `{spacing.lg} {spacing.xl}` (18px 24px), rounded `{rounded.pill}` 32px.

**`button-ghost-on-light`** ——商店/灯页上相同的按钮.
- Background `{colors.canvas-light}` (transparent against light canvas), 1px solid `{colors.ink}` border, text `{colors.ink}`, otherwise identical.

**`button-filled-cool`** ——在店面产品卡上填充变种.
- Background `{colors.canvas-cool}`, text `{colors.ink}`, same pill geometry. Used as "Add to cart" or similar product CTAs.

### 卡片与容器

**`card-photo-band`** ——上市版全血摄影乐队.
- Background `{colors.canvas-night}`, padding 0, rounded `{rounded.xs}`. The photograph fills the entire band; type and CTA sit overlaid.

**`card-shop-product`** ——店址上的产品卡.
- Background `{colors.canvas-light}`, padding `{spacing.md}` 16px, rounded `{rounded.sm}` 8px, 1px `{colors.hairline-on-light}` border. Product photo on top, name in `{typography.body-md}`, price in `{typography.body-md}` 700 weight, "Add to cart" button at the bottom.

### 输入框与表单

**`text-input`** ——在店址上形成输入.
- Background `{colors.canvas-light}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (12px 16px), rounded `{rounded.xs}` 4px, 1px `{colors.hairline-on-light}` border.

### 导航

**`nav-bar-overlay`** ——上行导航横跨市场营销网站.
- Background `{colors.canvas-night}` (transparent over the hero photo), text `{colors.on-primary}`, type `{typography.button-cap}` (uppercase). Logo wordmark on the left at ~147×19px, nav items horizontal in caps, padding `{spacing.xl} {spacing.xxl}` (24px 32px). The nav is fixed/sticky on scroll, retaining the overlay treatment.

### 标志性组件

**Full-Bleed Photo / Video Hero** — every marketing band is a full-viewport photograph or autoplaying rocket-launch video. Type and CTA sit overlaid on the photograph at high opacity with no scrim. The photograph is graded so type lands cleanly without an overlay layer.

**Uppercase Display Headline** — the 80px D-DIN-Bold uppercase headline with 1.6px positive tracking is the brand's most recognizable typographic moment. Always uppercase, always bold-weight, always positively tracked.

**`link-on-dark`** 暗布上连线
- 文字颜色 `{colors.link-on-dark}` 上面有下划线

**`link-on-light`** ——光帆上线性链接.
- 文字颜色 `{colors.ink}` 以坚固的划线盟誓,

**`footer-dark`** ——全站页脚.
- Background `{colors.canvas-night}`, text `{colors.on-primary}`, type `{typography.caption}`, padding `{spacing.xxl} {spacing.xl}` (32px 24px). Holds nav columns in `{typography.micro-cap}` (uppercase), and a small legal/copyright row at the bottom.


## 设计建议与禁忌

### 建议做法
- 使用全血摄影或自动播放视频作为每个营销乐队的主导装饰元素.
- Render display tiers in uppercase D-DIN-Bold with positive 0.96–1.6px letter-spacing — the wide tracking is the signature.
- Use a single `{button-ghost-on-dark}` per band — the brand does NOT show two CTAs side by side on marketing surfaces.
- Pair every photograph with type that respects the imagery — no scrims, no gradients, no overlays. Grade the photo, not the canvas.
- 保持导航覆盖样式( K)transparent,"白在形象上")在营销页面上.

### 应避免的做法
- Don't introduce brand accent colors — black, white, and photography are the entire palette.
- Don't use drop shadows or gradient overlays on dark canvas — they fight the photography.
- Don't render display tiers in sentence-case or title-case — uppercase is the brand.
- Don't put filled buttons on marketing surfaces — the ghost outlined pill is the only marketing CTA.
- Don't use serif or humanist sans alternatives — the condensed industrial DIN cut is non-negotiable.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 宽 | ≥ 1500px | 完整首屏照片; max-content 类型列 1200px |
| 桌面 | 1280–1499px | 默认桌面布局 |
| 笔记本 | 961–1279px | 类型栏收紧;照片作物调整 |
| 平板 | 768–960px | 显示滴数 80 → 60px; 导航压缩 |
| 手机 | 600–767px | 显示滴数到 48px; 鬼按钮保留胶囊形形状 |
| 小型移动 | < 600px | 显示滴数到 40px; 导航成为汉堡 |

### 触控区域
- Ghost pill buttons hit ≥ 50×50px due to the 18px vertical padding × 13px line-height. WCAG AAA compliant.
- 窗体字段停留在 44px 最低身高。

### 窄屏布局调整
- 显示阶梯大小 80 → 60 → 48 → 40px 穿过断点
- 摄影重裁成焦科 宽度较小(火箭中心,火星景观中心).
- 顶端导航崩溃到下面的汉堡 768px;菜单保留了暗的上覆处理.
- Shop product grid stair-steps 4-up → 2-up → 1-up.

### 图片适配
营销摄影用途 `srcset` 用于桌面 /平板 / 移动,主要断点有艺术导向作物。移动作物倾向于中心焦点主题;宽作物倾向于环境背景(完全发射台,全火星视野) 。


## 迭代指南

1. 一次集中关注一个组件.
2. 直接引用组件名称和符号( Q)`{colors.canvas-night}`, `{button-ghost-on-dark}`, `{rounded.pill}`).
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后。
4. 添加新的变体作为单独的条目.
5. 默认正文为 `{typography.body-md}`; 储备金 `{typography.body-lg}` 市场营销线索
6. 黑白唯一的规则是负载——添加品牌强调色颜色打破系统.
7. 鬼丸是唯一的营销CTA;填充按钮只住在店内网站.

## 设计词元原值

An inspired interpretation of SpaceX's design language — a mission-oriented aerospace brand built on pure black canvas, full-bleed photographic and video heroes of rockets and Mars landscapes, and uppercase D-DIN display type set in tight vertical leading. UI chrome is intentionally minimal: a single ghost outlined pill button per band, all-caps eyebrow microtext, and a fixed top nav over photography. The system is unapologetically austere — black, white, and the imagery itself.

```yaml
---
version: alpha
name: SpaceX-design-analysis
description: An inspired interpretation of SpaceX's design language — a mission-oriented aerospace brand built on pure black canvas, full-bleed photographic and video heroes of rockets and Mars landscapes, and uppercase D-DIN display type set in tight vertical leading. UI chrome is intentionally minimal: a single ghost outlined pill button per band, all-caps eyebrow microtext, and a fixed top nav over photography. The system is unapologetically austere — black, white, and the imagery itself.

colors:
  primary: "#000000"
  ink: "#000000"
  on-primary: "#ffffff"
  on-primary-mute: "#f0f0fa"
  canvas-night: "#000000"
  canvas-night-soft: "#0a0a0a"
  canvas-light: "#ffffff"
  canvas-cool: "#f0f0fa"
  hairline-on-dark: "#3a3a3f"
  hairline-on-light: "#e0e0e8"
  link-on-dark: "#ffffff"
  link-blue-fallback: "#0000ee"
  ink-mute: "#5a5a5f"

typography:
  display-xxl:
    fontFamily: "D-DIN-Bold, Arial Narrow, Arial, Verdana, sans-serif"
    fontSize: 80px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 1.6px
  display-xl:
    fontFamily: "D-DIN-Bold, Arial Narrow, Arial, Verdana, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 1.2px
  display-lg:
    fontFamily: "D-DIN-Bold, Arial Narrow, Arial, Verdana, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.96px
  body-lg:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.32px
  body-md:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.32px
  button-cap:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 13.008px
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: 1.17px
  micro-cap:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0.96px
  caption:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 13.008px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 16px
  pill: 32px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 18px
  xl: 24px
  xxl: 32px
  huge: 48px

components:
  button-ghost-on-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.pill}"
    padding: 18px 24px
  button-ghost-on-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.pill}"
    padding: 18px 24px
  button-filled-cool:
    backgroundColor: "{colors.canvas-cool}"
    textColor: "{colors.ink}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.pill}"
    padding: 18px 24px
  text-input:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 12px 16px
  card-photo-band:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  card-shop-product:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px
  nav-bar-overlay:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-cap}"
    rounded: "{rounded.xs}"
    padding: 24px 32px
  link-on-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.link-on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  link-on-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  footer-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 32px 24px
---
```
