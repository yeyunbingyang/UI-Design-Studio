# Lamborghini · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。

# 设计系统灵感来自 Lamborghini


<details>
<summary>英文原文</summary>

<!-- source:body -->
# Design System Inspired by Lamborghini


<!-- source:end -->

</details>

## 1。视觉主题和大气

Lamborghini网站是一座黑暗的教堂——一个数字舞台,喷气式黑色表面无限伸展,每一个元素都像聚光灯下的机器一样从空隙中涌出,页面几乎是全黑色的,不是深灰色的,不是近黑色的——真实的,毫不妥协的黑色().`#000000`饱和的视门,拒绝屈服。 Lamborghini 黄金( O)`#FFC000`)以手术精度部署,创造出一种视觉语言,感觉就像走过夜间运动会的活动,每个表面都吸收光线,但重要的东西除外.

The hero is a full-viewport video — dark, cinematic, immersive — showing event footage or vehicle reveals with the Lamborghini bull logo floating ethereally above. The navigation is minimal: a centered bull logo, a "MENU" hamburger on the left, and search/bookmark icons on the right, all rendered in white against the black canvas. There are no borders, no visible nav containers, no background color on the header — just white marks floating in darkness. The overall mood is nocturnal luxury: exclusive, theatrical, and deliberately intimidating. Each section transition is a scroll through darkness into the next revelation.

Typography is the voice of this darkness. LamboType — a custom Neo-Grotesk typeface created by Character Type and design agency Strichpunkt — is used for everything from 120px uppercase display headlines to 10px micro labels. Its distinctive 12° angled terminals are inspired by the aerodynamic lines of Lamborghini's super sports cars, and its proportions range from Normal to Ultracompressed width. Headlines SHOUT in uppercase at enormous scales with tight line-heights (0.92 at 120px), creating dense blocks of text that feel stamped from steel. The typeface carries hexagonal geometric DNA — constructed from hexagons, three-armed stars, and circles — that echoes throughout the interface in the hexagonal pause button and UI icons. Built on Bootstrap grid with 68 Element Plus/UI components, the technical infrastructure is substantial beneath the theatrical surface.

**关键特征 :**
- True black (`#000000`) dominant surfaces with white and gold as the only relief colors
- LamboType custom Neo-Grotesk font with 12° angled terminals inspired by aerodynamic car lines
- Lamborghini 黄金( O)`#FFC000`)作为唯一的强调色颜色——专门用于主CTA按钮.
- All-uppercase display typography at extreme scales (120px, 80px, 54px) with tight line-heights
- Full-viewport video heroes with cinematic event/vehicle content
- 零点 border-radius 按钮上——尖锐,角形,无妥协矩形
- 用户界面元素中的六边形齿轮(暂停按钮,图标系统)与品牌几何相呼应
- 靴子网格系统+元素加/UI 68 下方组件
- Transparent ghost buttons with white borders at 50% opacity as the secondary CTA pattern


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 1. Visual Theme & Atmosphere

Lamborghini's website is a cathedral of darkness — a digital stage where jet-black surfaces stretch infinitely and every element emerges from the void like a machine under a spotlight. The page is almost entirely black. Not dark gray, not near-black — true, uncompromising black (`#000000`) that saturates the viewport and refuses to yield. Into this abyss, white type and Lamborghini Gold (`#FFC000`) are deployed with surgical precision, creating a visual language that feels like walking through a nighttime motorsport event where every surface absorbs light except the things that matter.

The hero is a full-viewport video — dark, cinematic, immersive — showing event footage or vehicle reveals with the Lamborghini bull logo floating ethereally above. The navigation is minimal: a centered bull logo, a "MENU" hamburger on the left, and search/bookmark icons on the right, all rendered in white against the black canvas. There are no borders, no visible nav containers, no background color on the header — just white marks floating in darkness. The overall mood is nocturnal luxury: exclusive, theatrical, and deliberately intimidating. Each section transition is a scroll through darkness into the next revelation.

Typography is the voice of this darkness. LamboType — a custom Neo-Grotesk typeface created by Character Type and design agency Strichpunkt — is used for everything from 120px uppercase display headlines to 10px micro labels. Its distinctive 12° angled terminals are inspired by the aerodynamic lines of Lamborghini's super sports cars, and its proportions range from Normal to Ultracompressed width. Headlines SHOUT in uppercase at enormous scales with tight line-heights (0.92 at 120px), creating dense blocks of text that feel stamped from steel. The typeface carries hexagonal geometric DNA — constructed from hexagons, three-armed stars, and circles — that echoes throughout the interface in the hexagonal pause button and UI icons. Built on Bootstrap grid with 68 Element Plus/UI components, the technical infrastructure is substantial beneath the theatrical surface.

**Key Characteristics:**
- True black (`#000000`) dominant surfaces with white and gold as the only relief colors
- LamboType custom Neo-Grotesk font with 12° angled terminals inspired by aerodynamic car lines
- Lamborghini Gold (`#FFC000`) as the sole accent color — used exclusively for primary CTA buttons
- All-uppercase display typography at extreme scales (120px, 80px, 54px) with tight line-heights
- Full-viewport video heroes with cinematic event/vehicle content
- Zero border-radius on buttons — sharp, angular, uncompromising rectangles
- Hexagonal motifs in UI elements (pause button, icon system) echoing brand geometry
- Bootstrap grid system + Element Plus/UI 68 components underneath
- Transparent ghost buttons with white borders at 50% opacity as the secondary CTA pattern


<!-- source:end -->

</details>

## 2. Color Palette & Roles

### 主要
- **Lamborghini 黄金** (`#FFC000`: 标志性强调色颜色——一种温暖饱和的琥珀金色(rgb). 255, 192, 0) 专用于主动作按钮("Discover More","Tickets","Start配置"). 整个界面中唯一的色调颜色,它像剪断夜光一样点燃黑页面底色
- **纯白** (`#FFFFFF`: 暗面上的主要文字颜色,标志渲染,导航元素,和光模按钮填充——从暗面说话的声音

### 中学和中学
- **Dark Gold** (`#917300`): Hover/pressed state for gold buttons — a deep amber (rgb 145, 115, 0) that darkens the gold to signal interaction
- **Gold Text** (`#FFCE3E`): Slightly lighter gold variant (rgb 255, 206, 62) used for inline text accents and highlighted labels
- **Cyan Pulse** (`#29ABE2`): Electric blue-cyan (rgb 41, 171, 226) appearing as an informational accent and interactive element highlight
- **链接蓝色** (`#3860BE`: 中蓝色( rgb) 56, 96, 190) 通用用于链接所有文本颜色的悬浮状态

### 表面背景( B)
- **Absolute 黑色** (`#000000`: 主要的表面颜色——用于页面背景,首屏部分,页眉,页脚,以及大多数容器.
- **木炭矿** (`#202020`: 高耸的暗色表面( rgb) 32, 32, 32)——坐落在黑页面底色上方的卡片,面板和文本容器的主要"暗灰色".
- **暗铁** (`#181818`:亚表层变体(rgb). 24, 24, 24)——几乎无法与黑色区分,用于脚部和深部.
- **重叠黑色** (`rgba(0,0,0,0.7)`: 模式和视频淡化半透明复盖
- **Near White** (`#F8F8F8`): Rare light surface (rgb 248, 248, 248) for content blocks in white-mode sections
- **雾** (`#E6E6E6`:二级光电模组容器的浅灰色表面

### 中立文本( T)
- **纯白** (`#FFFFFF`: 暗背景的主要文本——头条,体,导航标签
- **烟** (`#F5F5F5`: 暗面上的次要文字——略微柔软于纯白色.
- **Graphite** (`#494949`): Dark gray text on light surfaces (rgb 73, 73, 73)
- **灰尘** (`#7D7D7D`: 中程灰色,用于变音文本、时间戳和元数据(rgb) 125, 125, 125)
- **钢** (`#969696`: 较轻的灰色,用于禁用的文本和微妙标签(rgb) 150, 150, 150)
- **标 题** (`#666666`: 二级内容的替代中性
- **铁** (`#555555`: 身体文本变体的暗中灰色
- **阴影** (`#313131`: 黑色表面的文字非常暗灰色, 白色太强

### 语义和调值
- **青色脉冲** (`#29ABE2`: 用于信息重点和互动反馈
- **Link Blue** (`#3860BE`): Universal hover state for all hyperlinks
- **Teal 动作** (`#1EAEDB`: 按钮徘徊背景 transparent/鬼变种(rgb). 30, 174, 219)

### 渐变系统
- 色调板中没有明显的梯度——通过表面层层实现暗向光的进化: `#000000` → `#181818` → `#202020` → `#494949` → `#7D7D7D`
- Video heroes use natural atmospheric gradients from the content itself
- 页面顶端梯度:在全血影像边缘,微妙的暗对暗刻器逐渐淡出


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 2. Color Palette & Roles

### Primary
- **Lamborghini Gold** (`#FFC000`): The signature accent color — a warm, saturated amber-gold (rgb 255, 192, 0) used exclusively for primary action buttons ("Discover More", "Tickets", "Start Configuration"). The only chromatic color in the entire interface, it ignites against the black canvas like a headlight cutting through night
- **Pure White** (`#FFFFFF`): Primary text color on dark surfaces, logo rendering, nav elements, and light-mode button fills — the voice that speaks from the darkness

### Secondary & Accent
- **Dark Gold** (`#917300`): Hover/pressed state for gold buttons — a deep amber (rgb 145, 115, 0) that darkens the gold to signal interaction
- **Gold Text** (`#FFCE3E`): Slightly lighter gold variant (rgb 255, 206, 62) used for inline text accents and highlighted labels
- **Cyan Pulse** (`#29ABE2`): Electric blue-cyan (rgb 41, 171, 226) appearing as an informational accent and interactive element highlight
- **Link Blue** (`#3860BE`): Medium blue (rgb 56, 96, 190) used universally for link hover states across all text colors

### Surface & Background
- **Absolute Black** (`#000000`): The dominant surface color — used for page background, hero sections, header, footer, and most containers
- **Charcoal** (`#202020`): Elevated dark surface (rgb 32, 32, 32) — the primary "dark gray" for cards, panels, and text containers sitting above the black canvas
- **Dark Iron** (`#181818`): Subtle surface variant (rgb 24, 24, 24) — barely distinguishable from black, used for footer and deep sections
- **Overlay Black** (`rgba(0,0,0,0.7)`): Semi-transparent overlay for modals and video dimming
- **Near White** (`#F8F8F8`): Rare light surface (rgb 248, 248, 248) for content blocks in white-mode sections
- **Mist** (`#E6E6E6`): Light gray surface for secondary light-mode containers

### Neutrals & Text
- **Pure White** (`#FFFFFF`): Primary text on dark backgrounds — headlines, body, nav labels
- **Smoke** (`#F5F5F5`): Secondary text on dark surfaces — slightly softer than pure white
- **Graphite** (`#494949`): Dark gray text on light surfaces (rgb 73, 73, 73)
- **Ash** (`#7D7D7D`): Mid-range gray for muted text, timestamps, and metadata (rgb 125, 125, 125)
- **Steel** (`#969696`): Lighter gray for disabled text and subtle labels (rgb 150, 150, 150)
- **Slate** (`#666666`): Alternative mid-gray for secondary content
- **Iron** (`#555555`): Dark mid-gray for body text variants
- **Shadow** (`#313131`): Very dark gray for text on dark surfaces where white is too strong

### Semantic & Accent
- **Cyan Pulse** (`#29ABE2`): Used for informational highlights and interactive feedback
- **Link Blue** (`#3860BE`): Universal hover state for all hyperlinks
- **Teal Action** (`#1EAEDB`): Button hover background for transparent/ghost variants (rgb 30, 174, 219)

### Gradient System
- No explicit gradients in the color palette — the dark-to-light progression is achieved through surface layering: `#000000` → `#181818` → `#202020` → `#494949` → `#7D7D7D`
- Video heroes use natural atmospheric gradients from the content itself
- Top-of-page gradient: subtle dark-to-darker fade at the edges of full-bleed imagery


<!-- source:end -->

</details>

## 3. 字法规则

### 字体家族
- **Display & UI**: `LamboType`, Roboto, Helvetica Neue, Arial — custom Neo-Grotesk typeface by Character Type for Lamborghini's 2024 brand refresh. Available in widths from Normal to Ultracompressed and weights from Light (300) to Black. Features 12° angled terminals inspired by aerodynamic car geometry, hexagonal construction logic, and support for 200+ languages including Latin, Cyrillic, and Greek
- **倒计时/UI**: `Open Sans` ——作为系统退缩而用于某些按钮/格式上下文
- **No italic variants** observed on the marketing site — the brand voice is always upright

### 等级

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| 首屏显示 | 120px (7.50rem) | 400 | 0.92 | normal | 兰博Type,大写,最大撞击 |
| 显示 2 | 80px (5.00rem) | 400 | 1.13 | normal | 兰博Type,大写,主要章节标题 |
| Section Title | 54px (3.38rem) | 400 | 1.19 | normal | LamboType, uppercase |
| Sub-section | 40px (2.50rem) | 400 | 1.15 | normal | LamboType, uppercase |
| Feature Heading | 27px (1.69rem) | 400 | 1.37 | normal | LamboType, uppercase |
| 纸牌标题 | 24px (1.50rem) | 400 | — | normal | 兰博泰普 |
| Body Large | 18px (1.13rem) | 400 | 1.56 | normal | LamboType, mixed case and uppercase variants |
| Body / UI | 16px (1.00rem) | 400/700 | 1.50 | normal/0.16px | LamboType, primary body text |
| Button Large | 16px (1.00rem) | 400 | 1.50 | normal | Gold CTA buttons |
| 按钮标准 | 14.4px (0.90rem) | 300/700 | 1.00 | 0.14–0.2px | 兰博Type,大写,鬼按钮 |
| 按钮小 | 13px (0.81rem) | 300/500 | 1.20 | 0.13–0.2px | LamboType, 紧凑按钮变体 |
| 说明 | 14px (0.88rem) | 600/700 | 1.14–1.50 | -0.42px | 兰博Type,大写,负跟踪 |
| 标签 | 12px (0.75rem) | 400/500 | 1.83 | 0.96px | 兰博Type,大写徽章和微标签 |
| Micro | 10px (0.63rem) | 400 | 1.00–2.00 | 0.225px | LamboType, uppercase, smallest text |

### 原则
- **ALL-CAPS is the default voice**: Display and feature headings are universally uppercase. This creates a shouting, commanding tone that matches the brand's aggression
- **Extreme scale range**: From 120px heroes to 10px micro labels — a 12:1 ratio that creates dramatic visual hierarchy
- **缩放的紧线高**: 显示所使用的大小 0.92-1.19 line-height,创建密集的压缩类型块,使其感觉有印记而不是排字
- **字重 400 主导**: 不同于许多使用粗体强调的设计系统, Lamborghini正常字重带头条 排字本身很独特 不需要字重变化
- **字幕的负跟踪**: -0.42px letter-spacing 打开 14px 标题创建压缩技术美学
- **Positive tracking on micro text**: +0.225px at 10px ensures legibility at the smallest sizes
- **单字面学科**:兰博泰普处理一切—— 12° 角终端和六边形几何提供各种大小的视觉一致性


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 3. Typography Rules

### Font Family
- **Display & UI**: `LamboType`, Roboto, Helvetica Neue, Arial — custom Neo-Grotesk typeface by Character Type for Lamborghini's 2024 brand refresh. Available in widths from Normal to Ultracompressed and weights from Light (300) to Black. Features 12° angled terminals inspired by aerodynamic car geometry, hexagonal construction logic, and support for 200+ languages including Latin, Cyrillic, and Greek
- **Fallback/UI**: `Open Sans` — used for some button/form contexts as system fallback
- **No italic variants** observed on the marketing site — the brand voice is always upright

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Hero Display | 120px (7.50rem) | 400 | 0.92 | normal | LamboType, uppercase, maximum impact |
| Display 2 | 80px (5.00rem) | 400 | 1.13 | normal | LamboType, uppercase, major section titles |
| Section Title | 54px (3.38rem) | 400 | 1.19 | normal | LamboType, uppercase |
| Sub-section | 40px (2.50rem) | 400 | 1.15 | normal | LamboType, uppercase |
| Feature Heading | 27px (1.69rem) | 400 | 1.37 | normal | LamboType, uppercase |
| Card Title | 24px (1.50rem) | 400 | — | normal | LamboType |
| Body Large | 18px (1.13rem) | 400 | 1.56 | normal | LamboType, mixed case and uppercase variants |
| Body / UI | 16px (1.00rem) | 400/700 | 1.50 | normal/0.16px | LamboType, primary body text |
| Button Large | 16px (1.00rem) | 400 | 1.50 | normal | Gold CTA buttons |
| Button Standard | 14.4px (0.90rem) | 300/700 | 1.00 | 0.14–0.2px | LamboType, uppercase, ghost buttons |
| Button Small | 13px (0.81rem) | 300/500 | 1.20 | 0.13–0.2px | LamboType, compact button variant |
| Caption | 14px (0.88rem) | 600/700 | 1.14–1.50 | -0.42px | LamboType, uppercase, negative tracking |
| Label | 12px (0.75rem) | 400/500 | 1.83 | 0.96px | LamboType, uppercase badges and micro labels |
| Micro | 10px (0.63rem) | 400 | 1.00–2.00 | 0.225px | LamboType, uppercase, smallest text |

### Principles
- **ALL-CAPS is the default voice**: Display and feature headings are universally uppercase. This creates a shouting, commanding tone that matches the brand's aggression
- **Extreme scale range**: From 120px heroes to 10px micro labels — a 12:1 ratio that creates dramatic visual hierarchy
- **Tight line-heights at scale**: Display sizes use 0.92-1.19 line-height, creating dense, compressed blocks of type that feel stamped rather than typeset
- **Weight 400 dominates**: Unlike many design systems that use bold for emphasis, Lamborghini's regular weight carries the headlines — the typeface itself is so distinctive it doesn't need weight variation
- **Negative tracking on captions**: -0.42px letter-spacing on 14px captions creates a compressed, technical aesthetic
- **Positive tracking on micro text**: +0.225px at 10px ensures legibility at the smallest sizes
- **Single typeface discipline**: LamboType handles everything — the 12° angled terminals and hexagonal geometry provide visual coherence across all sizes


<!-- source:end -->

</details>

## 4. 组件型号

### 按钮
All buttons use **zero border-radius** — sharp, angular rectangles that echo the aggressive lines of Lamborghini vehicles.

**黄金点CTA** - 首要行动:
- Default: bg `#FFC000` (Lamborghini Gold), text `#000000`, padding 24px, fontSize 16px, fontWeight 400, borderRadius 0px, no border
- 侧线: bg `#917300` (暗金色),明显变暗
- 类 : `btn-accent btn-large`
- 用于:"发现更多","Tickets","开始配置"

**Transparent 鬼头** - 暗色背景的次要行动:
- Default: bg transparent, text `#FFFFFF`, border 1px solid `#FFFFFF`, padding 16px, opacity 0.5
- 侧线: bg `#1EAEDB` (Teal Action),文本为白色,不透明 0.7
- 重点:bg `#1EAEDB`边框 1px 固态 `#000000`,大纲 2px 固态 `#000000`
- 用于:首屏区和暗面板上的二级CTA

**白色填充** 轻度模式初级:
- 默认: bg `#FFFFFF`文本中,请输入 `#202020`,无边框
- 用于:在黄金不适宜的情况下,在暗处的CTA

**黑色填充器** —— 暗填充变体:
- 默认: bg `#000000`文本中,请输入 `#202020`
- 用于: 光节反转式CTA

**灰色中立** - 次要行动:
- 默认: bg `#969696`文本中,请输入 `#202020`
- 用于:二级/三级动作,类似徽章的按钮

### 纸牌和集装箱
- Background: `#202020` (Charcoal) on black canvas, or `#000000` on lighter sections
- 边框 : `0px 1px solid #202020` 分区分隔符的底边框
- Border-radius: 0px (完全尖锐的角)
- 阴影: 最小, 使用覆盖不透明来进行深度
- 内容: 白白的全血胶照片+覆盖文本

### 输入表单( F)
- 销售站点上最小形式存在
- 切换元素 : border-radius 20px (唯一四舍五入元素),边框 1px 固态 `#DDDDDD`
- Cookie 横幅输入样式: 黑色白文本, 带有 `#7D7D7D` 边框

### 导航
- **桌面**: 居中公牛标志, "MENU" 汉堡包, 左边有图标, 右边有搜索图标 + 书签图标
- **Background**: Transparent (inherits black page background)
- **Sticky**: Fixed 上方,浮点数高于内容
- **No visible borders or shadows** — elements float in the darkness
- **"MENU"标签**: 白文本, 时间: 14px 字重 400,大写,汉堡包图标
- **Hexagonal motifs**: Pause button on hero sections uses hexagonal outline shape

### 图像处理
- **Hero**: Full-viewport video sections (100vh) with cinematic event/vehicle footage
- **事件摄影**: 满腔血清的空中射击 Lamborghini 场馆活动
- **车辆图像**:高调工作室拍摄黑暗背景,全宽
- **光谱比率**: 以主要为主 16:9 更宽广的电影感
- **暗渐变叠加**: 视频上下边缘暗化,以确保文本可辨识

### 区分成分
- **Hexagonal Pause Button**: Video control uses a hexagonal outline (matching the brand's geometric DNA from the typeface), positioned bottom-right of hero sections
- **进度栏**: 显示视频/滑坡进度的首屏部分底部的细白线
- **Badge/Tag**: bg `#969696`, text white, padding 8px, fontSize 10px, borderRadius 2px — tiny metallic pills


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 4. Component Stylings

### Buttons
All buttons use **zero border-radius** — sharp, angular rectangles that echo the aggressive lines of Lamborghini vehicles.

**Gold Accent CTA** — The primary action:
- Default: bg `#FFC000` (Lamborghini Gold), text `#000000`, padding 24px, fontSize 16px, fontWeight 400, borderRadius 0px, no border
- Hover: bg `#917300` (Dark Gold), darkens significantly
- Class: `btn-accent btn-large`
- Used for: "Discover More", "Tickets", "Start Configuration"

**Transparent Ghost** — The secondary action on dark backgrounds:
- Default: bg transparent, text `#FFFFFF`, border 1px solid `#FFFFFF`, padding 16px, opacity 0.5
- Hover: bg `#1EAEDB` (Teal Action), text white, opacity 0.7
- Focus: bg `#1EAEDB`, border 1px solid `#000000`, outline 2px solid `#000000`
- Used for: secondary CTAs on hero sections and dark panels

**White Filled** — Light-mode primary:
- Default: bg `#FFFFFF`, text `#202020`, no border
- Used for: CTAs on dark sections where gold isn't appropriate

**Black Filled** — Dark filled variant:
- Default: bg `#000000`, text `#202020`
- Used for: Inverted CTA on light sections

**Gray Neutral** — Subtle action:
- Default: bg `#969696`, text `#202020`
- Used for: secondary/tertiary actions, badge-like buttons

### Cards & Containers
- Background: `#202020` (Charcoal) on black canvas, or `#000000` on lighter sections
- Border: `0px 1px solid #202020` bottom borders for section dividers
- Border-radius: 0px (completely sharp corners)
- Shadow: minimal, uses overlay opacity for depth
- Content: full-bleed photography + overlaid text in white

### Inputs & Forms
- Minimal form presence on the marketing site
- Switch elements: border-radius 20px (the only rounded element), border 1px solid `#DDDDDD`
- Cookie banner input style: white text on black with `#7D7D7D` borders

### Navigation
- **Desktop**: Centered bull logo, "MENU" hamburger with icon on left, search icon + bookmarks icon on right
- **Background**: Transparent (inherits black page background)
- **Sticky**: Fixed to top, floats above content
- **No visible borders or shadows** — elements float in the darkness
- **"MENU" label**: White text at 14px weight 400, uppercase, accompanies hamburger icon
- **Hexagonal motifs**: Pause button on hero sections uses hexagonal outline shape

### Image Treatment
- **Hero**: Full-viewport video sections (100vh) with cinematic event/vehicle footage
- **Event photography**: Full-bleed aerial shots of Lamborghini Arena events
- **Vehicle imagery**: High-contrast studio shots on dark backgrounds, full-width
- **Aspect ratios**: Predominantly 16:9 and wider for cinematic feel
- **Dark gradient overlays**: Subtle darkening at top/bottom edges of video to ensure text legibility

### Distinctive Components
- **Hexagonal Pause Button**: Video control uses a hexagonal outline (matching the brand's geometric DNA from the typeface), positioned bottom-right of hero sections
- **Progress Bar**: Thin white line at bottom of hero sections indicating video/slide progress
- **Badge/Tag**: bg `#969696`, text white, padding 8px, fontSize 10px, borderRadius 2px — tiny metallic pills


<!-- source:end -->

</details>

## 5. 版式原则

### 间距系统
- **基地单位**: 8px
- **全额**: 2px, 4px, 5px, 8px, 10px, 12px, 15px, 16px, 20px, 24px, 32px, 40px, 48px, 56px
- **按钮绑定**: 16px (鬼魂),(鬼魂),(鬼魂), 24px (金色强调色) 说吧,我...
- **分区编栏**: 48–56px 垂直, 显示 40px 水平
- **间隔小**: 2–5px 用于细微调整(贴板、边距)

### 网格容器( C)
- **框架**: 靴子网格系统(容器+行+col)
- **最大宽度**: 1440px (最大断点)
- **列数**编号: 标准 12- 柱状的靴子网格
- **满血**:首屏区段断网以填充视点边缘到对角
- **内容领域**: 居中 1200px max-width 容器( 容器)

### 白空间哲学
Lamborghini uses darkness as whitespace. The generous black expanses between content blocks serve the same function as white space in a light design — creating breathing room that elevates each element to the status of exhibit. A model name floating in the middle of a black viewport has the same visual weight as a gallery piece on a white wall. The absence of color IS the design.

### 圆角刻度
| Value | Context |
|-------|---------|
| 0px | 默认所有文件——按钮、卡片、容器、图像 |
| 1px | 细跨元素 |
| 2px | 徽章、扣子、饼干元素——几乎看不见 |
| 20px | Toggle switches only — the sole rounded element |


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 5. Layout Principles

### Spacing System
- **Base unit**: 8px
- **Full scale**: 2px, 4px, 5px, 8px, 10px, 12px, 15px, 16px, 20px, 24px, 32px, 40px, 48px, 56px
- **Button padding**: 16px (ghost), 24px (gold accent)
- **Section padding**: 48–56px vertical, 40px horizontal
- **Small spacing**: 2–5px for fine adjustments (badge padding, border spacing)

### Grid & Container
- **Framework**: Bootstrap grid system (container + row + col)
- **Max width**: 1440px (largest breakpoint)
- **Columns**: Standard 12-column Bootstrap grid
- **Full-bleed**: Hero sections break out of grid to fill viewport edge-to-edge
- **Content areas**: Centered within 1200px max-width containers

### Whitespace Philosophy
Lamborghini uses darkness as whitespace. The generous black expanses between content blocks serve the same function as white space in a light design — creating breathing room that elevates each element to the status of exhibit. A model name floating in the middle of a black viewport has the same visual weight as a gallery piece on a white wall. The absence of color IS the design.

### Border Radius Scale
| Value | Context |
|-------|---------|
| 0px | Default for everything — buttons, cards, containers, images |
| 1px | Subtle span elements |
| 2px | Badges, close buttons, cookie elements — barely perceptible |
| 20px | Toggle switches only — the sole rounded element |


<!-- source:end -->

</details>

## 6。深度和高度

| 职等 | 治疗 | 使用 |
|-------|-----------|-----|
| 职等 0 (阿毗昙. | `#000000` 平面 | 页面背景, 深层 |
| 职等 1 (沙脸) | `#181818` 或 减 减 `#202020` | 纸牌、内容板、高档 |
| 职等 2 (汇总) | `rgba(0,0,0,0.7)` | 模版背景,视频暗淡 |
| 职等 3 (雾) | `rgba(0,0,0,0.5)` | 轻度叠加, 悬浮状态 |
| 职等 4 (中声) | `rgba(0,0,0,0.25)` | 微深提示( T) |

### 影子哲学
Lamborghini 传统的投影是看不见的,相反,系统通过从 absolute 黑色至逐渐淡化的深灰色: `#000000` → `#181818` → `#202020` → `#494949`,这种"暗度梯度"方法意味着上升的元素比其周围的元素在字面上更轻,颠倒了传统的阴影模型.

### 装饰性深度
- 完全血液视频通过电影照明提供大气深度
- The hexagonal pause button floats with a thin white outline stroke
- 首屏区底部的进度栏 创建一条微妙的视野线
- 没有任何梯度、光线或模糊的UI元素效应——摄影提供了所有视觉丰富的


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Level 0 (Abyss) | `#000000` flat | Page background, deepest layer |
| Level 1 (Surface) | `#181818` or `#202020` | Cards, content panels, elevated sections |
| Level 2 (Overlay) | `rgba(0,0,0,0.7)` | Modal backdrops, video dimming |
| Level 3 (Fog) | `rgba(0,0,0,0.5)` | Lighter overlays, hover states |
| Level 4 (Mist) | `rgba(0,0,0,0.25)` | Subtle depth hints |

### Shadow Philosophy
Lamborghini achieves depth through surface color layering rather than shadows. On a black canvas, traditional drop shadows are invisible — instead, the system creates elevation by shifting from absolute black to progressively lighter dark grays: `#000000` → `#181818` → `#202020` → `#494949`. This "darkness gradient" approach means that elevated elements are literally lighter than their surroundings, inverting the traditional shadow model.

### Decorative Depth
- Full-bleed video provides atmospheric depth through cinematic lighting
- The hexagonal pause button floats with a thin white outline stroke
- Progress bars at hero section bottoms create a subtle horizon line
- No gradients, glows, or blur effects on UI elements — the photography provides all visual richness


<!-- source:end -->

</details>

## 7。 。 。 。 。 。

### 执行
- 使用 absolute 黑色( 4)`#000000`)作为主要背景——永远不要以暗灰色作为替代.
- 应用 Lamborghini 黄金( O)`#FFC000`完全用于主要CTA按钮——从未用于装饰目的
- Set all display headings in uppercase with LamboType — the brand voice is always SHOUTING
- 使用零 border-radius 按钮和牌上——锐角不可谈判
- 保持紧线高(0.92–1.19)在显示类型上创建密集的建筑文本块
- 使用 transparent 鬼按钮( 白色边框, 或 白色边框 ) 50% 透明度)作为暗背景的二级CTA
- Let full-viewport video/photography carry emotional weight — UI is infrastructure, not decoration
- 保留用于UI 图标和视频控制按钮的六边形几何
- 使用重 400 (定期)头条新闻——类型面够有特色,没有大胆强调.
- 保持灰色调色板的色调——所有中性都是纯灰色的,没有颜色的色调

### Don't
- 增加金色以外的强调色颜色——单色加金系是神圣的
- 应用 border-radius 切换到按钮或卡片——曲线边缘与角车辆美学相矛盾
- Use LamboType in italic or decorative styles — the brand is always upright and direct
- 向按钮或表面添加梯度——深度来自表层,而不是混合
- 使用光背景作为主页面底色——黑暗是默认状态,光是例外
- 将小写混合到显示标题中——大写常规会传达权限和权力
- Add hover animations with scale or translate — interactions should be color-only (background/opacity shifts)
- Use Open Sans for display text — LamboType must handle all visible typography
- 创建繁忙布局, 包含许多小元素 —— Lamborghini设计是单数的,粗体的
- 将阴影应用到元素中——在黑色页面底色上,阴影是毫无意义的;使用表面颜色的变换代替


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 7. Do's and Don'ts

### Do
- Use absolute black (`#000000`) as the primary background — never dark gray as a substitute
- Apply Lamborghini Gold (`#FFC000`) exclusively for primary CTA buttons — never for decorative purposes
- Set all display headings in uppercase with LamboType — the brand voice is always SHOUTING
- Use zero border-radius on buttons and cards — sharp angles are non-negotiable
- Maintain tight line-heights (0.92–1.19) on display type to create dense, architectural text blocks
- Use the transparent ghost button (white border, 50% opacity) as the secondary CTA on dark backgrounds
- Let full-viewport video/photography carry emotional weight — UI is infrastructure, not decoration
- Reserve hexagonal geometry for UI icons and the video control button
- Use weight 400 (regular) for headlines — the typeface is distinctive enough without bold emphasis
- Keep the gray palette achromatic — all neutrals are pure gray without color tinting

### Don't
- Introduce additional accent colors beyond gold — the monochrome-plus-gold system is sacred
- Apply border-radius to buttons or cards — curved edges contradict the angular vehicle aesthetic
- Use LamboType in italic or decorative styles — the brand is always upright and direct
- Add gradients to buttons or surfaces — depth comes from surface layering, not blending
- Use light backgrounds as the primary canvas — darkness is the default state, light is the exception
- Mix lowercase into display headings — the uppercase convention communicates authority and power
- Add hover animations with scale or translate — interactions should be color-only (background/opacity shifts)
- Use Open Sans for display text — LamboType must handle all visible typography
- Create busy layouts with many small elements — Lamborghini's design is about singular, bold statements
- Apply shadows to elements — on a black canvas, shadows are meaningless; use surface color shifts instead


<!-- source:end -->

</details>

## 8. Responsive Behavior

### 断点
| 名称 | 宽度 | 密钥更改 |
|------|-------|-------------|
| 移动小 | <425px | 单列、 缩小类型缩放、 堆叠按钮 |
| 手机 | 425-576px | 单列,汉堡导航,首屏文字 ~40px |
| 平板电脑小 | 576-768px | 2- 栏格开始, 垫曲调整 |
| 平板 | 768-1024px | 2-栏式布局,扩大首屏,车辆卡并列 |
| 桌面 | 1024-1280px | 完全导航, 3+ 列网格,显示文本 : 80px |
| 桌面大块 | 1280-1440px | 完全布局, 首屏 at 120px 显示, max-width 容器( 容器) |
| 宽 | >1440px | 内容中心化, 边框扩展, 主角填充视图端口 |

### 触控区域
- Gold CTA buttons: 48px+ minimum height with 24px padding (exceeds WCAG 44×44px)
- 鬼按钮 : 48px+ 与 + 键 16px 粘贴
- 汉堡菜单:大触摸目标(~48px 平方正方形)
- Hexagonal pause button: approximately 48px diameter

### 折叠战略
- **导航**: 总是基于汉堡("MENU"+图标)——任何断点上都无水平导航扩展
- **首屏视频**: 保持所有断点的全视港高度, 调整 object-fit
- **Display type**: Scales from 120px (desktop) → 80px (tablet) → 54px/40px (mobile)
- **按钮布局**: 桌面上逐一堆放, 垂直移动
- **网格列**: 3-栏目 – 2-栏目 – 1- 列进
- **节间距**: 减少从 56px → 40px → 24px 垂直粘贴

### 图像行为
- 首屏视频的使用 `object-fit: cover` 保持电影的布局,大小不一
- 车辆图像在集装箱内标出保持宽度比例
- 活动摄影作物在窄屏幕上显示视门宽度
- Background images darken at edges to maintain text contrast on all viewports


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <425px | Single column, reduced type scale, stacked buttons |
| Mobile | 425-576px | Single column, hamburger nav, hero text ~40px |
| Tablet Small | 576-768px | 2-column grid begins, padding adjusts |
| Tablet | 768-1024px | 2-column layout, expanded hero, vehicle cards side-by-side |
| Desktop | 1024-1280px | Full navigation, 3+ column grids, display text at 80px |
| Desktop Large | 1280-1440px | Full layout, hero at 120px display, max-width containers |
| Wide | >1440px | Content centered, margins expand, hero fills viewport |

### Touch Targets
- Gold CTA buttons: 48px+ minimum height with 24px padding (exceeds WCAG 44×44px)
- Ghost buttons: 48px+ with 16px padding
- Hamburger menu: large touch target (~48px square)
- Hexagonal pause button: approximately 48px diameter

### Collapsing Strategy
- **Navigation**: Always hamburger-based ("MENU" + icon) — no horizontal nav expansion on any breakpoint
- **Hero video**: Maintains full-viewport height across all breakpoints, adjusting object-fit
- **Display type**: Scales from 120px (desktop) → 80px (tablet) → 54px/40px (mobile)
- **Button layout**: Side-by-side on desktop, stacks vertically on mobile
- **Grid columns**: 3-column → 2-column → 1-column progression
- **Section spacing**: Reduces from 56px → 40px → 24px vertical padding

### Image Behavior
- Hero videos use `object-fit: cover` to maintain cinematic framing at all sizes
- Vehicle images scale within their containers with maintained aspect ratios
- Event photography crops to viewport width on narrow screens
- Background images darken at edges to maintain text contrast on all viewports


<!-- source:end -->

</details>

## 9. Agent Prompt Guide

### 快速颜色引用
- 初级CTA: "Lamborghini 黄金( O)#FFC000)"
- Background: "Absolute Black (#000000)"
- 表面:"夏尔科(英语:#202020)"
- 标题文字: "纯白(#FFFFFF)"
- Body text: "Ash (#7D7D7D)"
- 链接悬浮:"链接蓝( L)#3860BE)"
- Accent: "Cyan Pulse (#29ABE2)"
- Border: "Pure White (#FFFFFF) at 50% opacity"

### 示例组件提示
- "Create a hero section with a full-viewport black background, the model name 'TEMERARIO' in LamboType at 120px uppercase weight 400 white text with 0.92 line-height, centered vertically, with a Lamborghini Gold (#FFC000) 'Discover More' button below — sharp corners, 0px radius, 24px padding, black text"
- "Design a transparent ghost button with 1px solid white border at 50% opacity, white text at 14.4px uppercase with 0.2px letter-spacing, padding 16px, on a black background — hover state changes to Teal Action (#1EAEDB) background with 70% opacity"
- "在无可见背景的导航栏上建造了一条导航栏" absolute 黑色,一个中央的公牛标志,"MENU"的文字标签,左边是汉堡图标,右边是搜索+书签图标——都用白色, sticky 位置" (中文(简体) ).
- "Create a news card grid on charcoal (#202020) background with white headlines at 27px uppercase, body text in #7D7D7D at 16px, and a white underlined 'Read More' link that turns #3860BE on hover"
- 使用 1px 固态底边框 #202020 黑页面底色上的高度差异 纯粹是通过表面颜色的转变 而不是阴影

### 迭代指南
When refining existing screens generated with this design system:
1. 一次集中关注一个部分—— Lamborghini系统很极端,每个元素都要有攻击性
2. 引用此文档中的特定颜色名称和十六进制码 —— 调色板仅涉及 5 活动颜色
3. 使用自然语言描述,而不是 CSS 值——"尖剪金矩形"不"border-radius: 0px; background: #FFC000"
4. 描述想要的“ feel” 与具体的测量值相配合——“在全黑暗中漂浮” 将黑布传播得比“更好”background: #000000"
5. 记住UPPERCASE是 防御者——如果文本在显示大小时不是大写,它可能应该是

<details>
<summary>英文原文</summary>

<!-- source:body -->
## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: "Lamborghini Gold (#FFC000)"
- Background: "Absolute Black (#000000)"
- Surface: "Charcoal (#202020)"
- Heading text: "Pure White (#FFFFFF)"
- Body text: "Ash (#7D7D7D)"
- Link hover: "Link Blue (#3860BE)"
- Accent: "Cyan Pulse (#29ABE2)"
- Border: "Pure White (#FFFFFF) at 50% opacity"

### Example Component Prompts
- "Create a hero section with a full-viewport black background, the model name 'TEMERARIO' in LamboType at 120px uppercase weight 400 white text with 0.92 line-height, centered vertically, with a Lamborghini Gold (#FFC000) 'Discover More' button below — sharp corners, 0px radius, 24px padding, black text"
- "Design a transparent ghost button with 1px solid white border at 50% opacity, white text at 14.4px uppercase with 0.2px letter-spacing, padding 16px, on a black background — hover state changes to Teal Action (#1EAEDB) background with 70% opacity"
- "Build a navigation bar with zero visible background on absolute black, a centered bull logo, 'MENU' text label with hamburger icon on the left, and search + bookmark icons on the right — all in white, sticky position"
- "Create a news card grid on charcoal (#202020) background with white headlines at 27px uppercase, body text in #7D7D7D at 16px, and a white underlined 'Read More' link that turns #3860BE on hover"
- "Design a section divider using a 1px solid bottom border in #202020 on a black canvas — the elevation difference is purely through surface color shift, not shadow"

### Iteration Guide
When refining existing screens generated with this design system:
1. Focus on ONE component at a time — Lamborghini's system is extreme and every element must feel aggressive
2. Reference specific color names and hex codes from this document — the palette has only about 5 active colors
3. Use natural language descriptions, not CSS values — "sharp-cut golden rectangle" not "border-radius: 0px; background: #FFC000"
4. Describe the desired "feel" alongside specific measurements — "floating in total darkness" communicates the black canvas better than "background: #000000"
5. Remember that UPPERCASE IS THE DEFAULT — if text isn't uppercase at display sizes, it probably should be

<!-- source:end -->

</details>
