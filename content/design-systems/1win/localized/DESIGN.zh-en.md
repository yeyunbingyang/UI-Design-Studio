# 1win · 中英文对照

**说明**　中文按英文规范分章校订，文末保留原始设计词元。

## 概览

1win 是一个加密货币赌场和体育博彩平台。页面以近黑色 `{colors.canvas}`（#141415）为底，略偏冷的平面背景衬托大量色彩鲜明的游戏缩略图。控件使用深灰色表面 `{colors.surface}`（#2e3035）、淡色半透明细线和近白文字 `{colors.ink}`（#f0f2f5）。鲜绿色 `{colors.primary}`（#00b24b）用于注册和主要确认操作，电光蓝 `{colors.secondary}`（#0075ff）用于登录、链接、「显示更多」胶囊控件、选中标签页及投注高亮。

这是一套高密度产品界面。左侧图标栏采用 fixed 定位，提供分类导航。主栏由多条可横向滚动的列表组成，包括热门游戏、老虎机、原创游戏和游戏供应商。每行展示铺满卡片的游戏缩略图 `game-tile`。顶部渐变横幅 `hero-banner` 展示奖金活动。体育博彩界面增加赛事列表、赔率选项 `bet-odds-button` 和右侧投注单 `betslip-panel`。Inter 只用 600 和 800 两档字重，正文也采用半粗体，使高密度界面接近原生应用。

紫、红、琥珀和紫罗兰色主要出现在游戏封面和奖金插图中。界面结构以深色层次为底，并由绿、蓝两色分别标识主要操作、获胜与注册，以及次要操作、导航与直播。

**关键特征**

- 近黑 `{colors.canvas}` 和深灰 `{colors.surface}` 形成表面层次，淡色 `{colors.hairline}` 给卡片和图块描边。
- 绿色 `{colors.primary}` 用于注册和确认，蓝色 `{colors.secondary}` 用于次要操作、链接及直播或投注高亮。
- Inter 使用 600 / 800 字重，`{typography.body}` 也采用半粗体。
- 横向游戏列表中的 `game-tile` 封面铺满卡片，周围框架维持深色。
- 徽标与状态控件使用 `{rounded.full}`，按钮使用 `{rounded.lg}`–`{rounded.xl}`，图块、推广卡和面板使用 `{rounded.card}`（16px）。
- 左侧图标栏 `sidebar-rail` 与密集的横向滚动列表构成类似原生应用的界面框架。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Overview

1win is a crypto casino and sportsbook that runs almost entirely on a near-black canvas (`{colors.canvas}` — #141415), a flat, slightly cool dark field that lets thousands of vibrant game thumbnails do the shouting. The chrome around the content is deliberately quiet: dark-grey surfaces (`{colors.surface}` — #2e3035), faint translucent hairlines, and off-white text (`{colors.ink}` — #f0f2f5). Against that restraint, two action colors carry the entire interactive layer — a vivid green (`{colors.primary}` — #00b24b) on the "Registration" CTA and every primary confirm, and an electric blue (`{colors.secondary}` — #0075ff) on "Log In", links, the "Show more" pill, active tabs, and bet highlights.

The layout is a high-density product surface, not a marketing page. A fixed left icon rail holds category navigation; the main column is a long stack of horizontally-scrolling rails — "Top games", "Slots", "Originals", game providers — each a row of full-bleed, brightly-illustrated `game-tile` thumbnails. Promotional bonuses ride in gradient-rich `hero-banner` cards at the top, and the sportsbook adds match rows with `bet-odds-button` chips and a right-hand `betslip-panel`. Typography is Inter set at heavy weights only (600 and 800) — even body copy is semibold — which gives the dense UI a punchy, app-like confidence rather than an editorial calm.

Color discipline is the key to reading this brand correctly: the loud purples, reds, ambers, and violets that fill the screen all live *inside* game artwork and bonus-card illustrations — they are content, not chrome. The system itself is monochrome dark plus exactly two signals: green for "go / win / register" and blue for "secondary / navigate / live". Everything structural is built from the dark surface ladder and those two accents.

**Key Characteristics:**
- Near-black `{colors.canvas}` foundation with a flat `{colors.surface}` card/tile ladder — depth comes from surface shifts and faint `{colors.hairline}` borders, not heavy shadow.
- Two-signal action system: green `{colors.primary}` for primary CTAs (Registration, confirm) and blue `{colors.secondary}` for secondary actions, links, and live/betting highlights.
- Inter at heavy weights only (600 / 800) — even `{typography.body}` is semibold, giving the dense UI an app-like punch.
- Content-forward game rails — full-bleed `game-tile` artwork supplies all the saturation; the surrounding frame stays monochrome dark.
- Pill language for badges and status (`{rounded.full}`), modest `{rounded.lg}`–`{rounded.xl}` on buttons, and `{rounded.card}` (16px) on tiles, promo cards, and panels.
- A left icon `sidebar-rail` + dense horizontally-scrolling rails define the shell, closer to a native app than a website.


<!-- source:end -->

</details>

## 配色

> 采集页面包括首页、推广、投注和 VIP 俱乐部。

### 品牌色与操作色

- **操作绿**（`{colors.primary}`，#00b24b）用于注册、主要确认、投注单中的提交按钮及区块强调图标。
- **电光蓝**（`{colors.secondary}`，#0075ff）用于登录、文字链接、「显示更多」、选中标签、徽标和直播或投注高亮。
- **操作色上的文字**（`{colors.on-primary}`，#ffffff）用于绿底和蓝底上的文字及图标。

### 表面与边框

- **页面底色**（`{colors.canvas}`，#141415）为平坦的近黑色，也用于顶部导航和左侧图标栏 `sidebar-rail`。
- **深灰表面**（`{colors.surface}`，#2e3035）用于卡片、游戏图块、推广卡、投注单、工具按钮和输入框。
- **细分隔线**（`{colors.hairline}`，#2d2f33）为低对比度半透明冷灰，作为 1px 分隔线或卡片边框。

### 文字颜色

- **主文字色**（`{colors.ink}`，#f0f2f5）为柔和的近白，用于主要文字、品牌字标及标题。
- **次级文字色**（`{colors.muted}`，#9aa1b1）用于次级标签、未选中导航图标和页脚文字。
- **弱文字色**（`{colors.faint}`，#53575f）用于三级文字、占位提示和禁用标签。
- **黑色**（`{colors.black}`，#000000）用于明亮强调色底面和浅色推广区上的高对比文字。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Colors

> Source pages analyzed: home, promotions, betting, vip-club.

### Brand & Accent
- **Action Green** (`{colors.primary}` — #00b24b): The primary action color — the "Registration" CTA, primary confirms, betslip place-bet, and section accent icons. The brand's "go / win" signal.
- **Electric Blue** (`{colors.secondary}` — #0075ff): The secondary action — "Log In", text links, the "Show more" pill, active tabs, badges, and live/betting highlights.
- **On Primary** (`{colors.on-primary}` — #ffffff): White text/icons on the green and blue fills.

### Surface
- **Canvas** (`{colors.canvas}` — #141415): The page background and the fill of the nav and `sidebar-rail` — a flat near-black.
- **Surface** (`{colors.surface}` — #2e3035): Cards, game tiles, promo cards, betslip panels, utility buttons, and input fields — the single elevated dark step.
- **Hairline** (`{colors.hairline}` — #2d2f33): The faint 1px divider/card border, a translucent cool-grey edge that reads against both canvas and surface.

### Text
- **Ink** (`{colors.ink}` — #f0f2f5): Primary text, the wordmark, and headings — a soft off-white.
- **Muted** (`{colors.muted}` — #9aa1b1): Secondary labels, inactive nav glyphs, footer text.
- **Faint** (`{colors.faint}` — #53575f): Tertiary/placeholder text and disabled labels.
- **Black** (`{colors.black}` — #000000): Maximum-contrast text used on the brightest accent fills and light promo surfaces.


<!-- source:end -->

</details>

## 字体排版

### 字体族

全站使用 **Inter**（`Inter, sans-serif`）的 **600 (semibold)** 和 **800 (extrabold)**。标题与奖金数字用 800，功能文案及正文用 600。

### 字号层级

| 词元 | 字号 | 字重 | 行高 | 字距 | 用途 |
|---|---|---|---|---|---|
| `{typography.display}` | 33px | 800 | 1.1 | 0 | 首屏或页面标题、奖金数字及推广页标题 |
| `{typography.heading}` | 20px | 800 | 1.2 | 0 | 区块和卡片标题 |
| `{typography.title}` | 16px | 600 | 1.3 | 0 | 游戏标题、列表标题、描边胶囊控件 |
| `{typography.body}` | 14px | 600 | 1.4 | 0 | 正文和按钮标签 |
| `{typography.ui}` | 13px | 600 | 1.3 | 0 | 界面内文、赔率、元数据 |
| `{typography.caption}` | 12px | 600 | 1.3 | 0 | 徽标、小标签和微型说明 |

### 排版原则

字号与 600↔800 字重共同建立层级。深色且内容密集的背景上，小字号界面文字通过半粗体保持可读。

### 替代字体

Inter 是开源 Google Font。需要回退时，可用具有清晰半粗体的无衬线字体，例如 Manrope 或 Geist。正文保留 600+ 字重，以维持应用式的视觉密度。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Typography

### Font Family
The entire system is set in **Inter** (`Inter, sans-serif`), and only at heavy weights — **600 (semibold)** and **800 (extrabold)**. There is no regular-weight body text; even running copy is semibold, which is what gives the dense, data-heavy interface its punchy, native-app feel. Headlines and bonus figures use 800; everything functional uses 600.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 33px | 800 | 1.1 | 0 | Hero / page headlines (bonus figures, "Promotions") |
| `{typography.heading}` | 20px | 800 | 1.2 | 0 | Section + card titles |
| `{typography.title}` | 16px | 600 | 1.3 | 0 | Game titles, row headers, outlined pills |
| `{typography.body}` | 14px | 600 | 1.4 | 0 | Default body, button labels |
| `{typography.ui}` | 13px | 600 | 1.3 | 0 | Inline UI text, odds, metadata |
| `{typography.caption}` | 12px | 600 | 1.3 | 0 | Badges, chips, micro-labels |

### Principles
Hierarchy is built from size and the 600↔800 weight jump, never from a light/regular contrast. The heavy floor keeps small UI text legible against the dark, busy backdrop and matches the high-energy gambling context.

### Note on Font Substitutes
Inter is an open-source Google Font, so no substitution is needed. If a fallback is required, any grotesque with a strong semibold (e.g. Manrope, Geist) preserves the heavy-weight character; keep body at 600+ to retain the app-like density.


<!-- source:end -->

</details>

## 布局

### 间距系统

- 基础单位为 8px。
- 词元为 `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 20px · `{spacing.xxl}` 24px · `{spacing.xxxl}` 32px。
- 按钮常用 `{spacing.sm}`×`{spacing.md}`（8×12px）内边距，卡片和面板用 `{spacing.lg}`–`{spacing.xxl}`（16–24px）。

### 网格与容器

左侧图标栏 `sidebar-rail` 采用 fixed 定位，右侧内容栏占用剩余宽度。发现页用可横向滚动的 `game-tile` 游戏列表，推广页用双列卡片网格，体育博彩页用通栏赛事行和右侧停靠的 `betslip-panel`。

### 留白

游戏图块紧密排列，让同一视口能看到更多内容。横向列表之间的纵向空隙较小，主要依靠页面底色、图块明度差和淡色 `{colors.hairline}` 划分结构。

### 响应式布局

| 视口 | 宽度 | 变化 |
|---|---|---|
| 手机 | < 768px | 左栏收起为底部导航或菜单，横向列表缩短，投注单改为底部面板 |
| 平板 | 768–1023px | 导航栏压缩，每行可见图块减少，推广卡保持双列 |
| 笔记本 | 1024–1439px | 恢复完整导航，每行显示多张图块 |
| 桌面 | ≥ 1440px（最高 1920px） | 横向列表更宽，投注单面板常驻 |

#### 触控区域

按钮使用 `{spacing.sm}`×`{spacing.md}` 内边距，胶囊控件保留足够点击范围。绿色 `button-primary` 是优先级最高、面积最大的操作，紧凑列表中的触控区域建议至少为 44×44px。

#### 收拢顺序

左侧 `sidebar-rail` 先收起。分类标签和 `bet-odds-button` 行可横向滚动，游戏列表继续使用轮播布局并减少可见图块。桌面端 `betslip-panel` 停靠右侧，移动端改为底部面板。

#### 图片行为

游戏缩略图采用偏竖向及正方形比例，铺满 `{rounded.card}`，内部零留白。推广卡使用通栏摄影，标题颜色为 `{colors.ink}`。图块在进入视口时延迟加载，占位底色为 `{colors.surface}`。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Layout

### Spacing System
- **Base unit**: 8px.
- **Tokens (front matter)**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 20px · `{spacing.xxl}` 24px · `{spacing.xxxl}` 32px
- Controls run tight — `{spacing.sm}`×`{spacing.md}` (8×12px) is the recurring button padding; cards and panels use `{spacing.lg}`–`{spacing.xxl}` (16–24px) interiors.

### Grid & Container
The shell is a fixed left icon `sidebar-rail` plus a fluid content column. Discovery uses horizontally-scrolling rails (carousels) of `game-tile` thumbnails rather than wrapping grids; the promotions page uses a 2-up card grid, and the sportsbook uses full-width match rows with a docked right-hand `betslip-panel`.

### Whitespace Philosophy
Density is the point — tiles pack close together to maximize the number of games in view, and the dark canvas itself does the separating between rails. Vertical gaps between labeled rails are modest; the brightness step between a tile and the canvas, plus a faint `{colors.hairline}`, supplies most of the structure.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Left rail collapses to a bottom/hamburger nav; rails shorten; betslip becomes a bottom sheet |
| Tablet | 768–1023px | Condensed rail; fewer tiles per rail; 2-up promo grid retained |
| Laptop | 1024–1439px | Full rail + multi-tile rails |
| Desktop | ≥ 1440px (up to 1920px) | Widest rails + persistent betslip panel |

#### Touch Targets
Buttons carry `{spacing.sm}`×`{spacing.md}` padding and pills clear comfortable tap sizes; the green `button-primary` is the largest, highest-priority tap surface. Aim for 44×44px minimum on the dense rails.

#### Collapsing Strategy
The left `sidebar-rail` collapses first (to a hamburger or bottom bar). Category tab strips and `bet-odds-button` rows become horizontally scrollable rather than wrapping. Game rails keep their carousel behavior at every width, simply showing fewer tiles. The `betslip-panel` docks to the right on desktop and becomes a bottom sheet on mobile.

#### Image Behavior
Game thumbnails are full-bleed inside `{rounded.card}` corners (no internal padding) in portrait-leaning and square ratios; the artwork supplies all the color. Promo cards carry edge-to-edge photography behind an `{colors.ink}` title. Tiles lazy-load as rails scroll into view, with the `{colors.surface}` tile color as the placeholder.


<!-- source:end -->

</details>

## 层次与阴影

页面用两阶明度区分深度。

| 层级 | 处理方式 | 用途 |
|---|---|---|
| 0 | 平坦的 `{colors.canvas}` | 页面、顶部导航、左侧图标栏 |
| 1 | `{colors.surface}` 与 `{colors.hairline}` 边框 | 卡片、图块、推广卡、投注单、按钮和输入框 |
| 浮层 | `{colors.surface}` 与柔和的 `rgba(0,0,0,0.4)` 阴影 | 弹窗、下拉菜单及浮起的投注单 |

### 装饰层次

游戏插画和带 `radial-gradient` 的推广横幅构成视觉重点。选中和激活状态通过绿色或蓝色强调，呈现类似微光的效果。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Elevation & Depth

Depth is mostly tonal — a flat two-step surface ladder rather than layered shadows.

| Level | Treatment | Use |
|---|---|---|
| 0 | `{colors.canvas}` flat | Page background, nav, sidebar rail |
| 1 | `{colors.surface}` + `{colors.hairline}` border | Cards, tiles, promo cards, betslip, buttons, inputs |
| Floating | `{colors.surface}` + soft `rgba(0,0,0,0.4)` shadow | Modals, dropdowns, the docked betslip lifted above content |

### Decorative Depth
The brand's visual richness comes from the game and promo artwork (radial-gradient bonus banners, illustrated tiles) layered on the flat dark canvas — not from UI shadows. Selected/active states use the green or blue accent as a glow-like emphasis rather than elevation.


<!-- source:end -->

</details>

## 形状与圆角

### 圆角层级

| 词元 | 值 | 用途 |
|---|---|---|
| `{rounded.xs}` | 4px | 小标签与内层元素 |
| `{rounded.sm}` | 6px | 紧凑卡片和小媒体 |
| `{rounded.md}` | 8px | 输入框、赔率按钮与中型控件 |
| `{rounded.lg}` | 10px | 主按钮、次按钮和幽灵按钮 |
| `{rounded.xl}` | 12px | 工具按钮 |
| `{rounded.card}` | 16px | 游戏图块、推广卡、首屏横幅和面板 |
| `{rounded.full}` | 999px | 胶囊形控件、徽标、头像与圆形控件（circular controls） |

### 图片形状

游戏封面铺满 `{rounded.card}`（16px）图块，推广卡用同样的 16px 圆角和铺满式图片。头像、状态徽标及供应商标签使用 `{rounded.full}`。摄影集中在游戏和活动内容里，界面框架采用平面几何形状。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, inner elements |
| `{rounded.sm}` | 6px | Compact cards, small media |
| `{rounded.md}` | 8px | Inputs, odds buttons, medium elements |
| `{rounded.lg}` | 10px | Primary / secondary / ghost buttons |
| `{rounded.xl}` | 12px | Utility buttons |
| `{rounded.card}` | 16px | Game tiles, promo cards, hero banners, panels |
| `{rounded.full}` | 999px | Pills, badges, avatars, circular controls |

### Photography Geometry
Game artwork is framed at `{rounded.card}` (16px) and runs full-bleed inside the tile. Promo cards use the same 16px frame with edge-to-edge imagery. Avatars, status badges, and provider chips use `{rounded.full}`. There is no exposed photography outside the gaming/promo content — the structural chrome stays geometric and flat.


<!-- source:end -->

</details>

## 组件

> 归档只记录默认与激活或按下状态，悬停样式尚未采集。不同变体在 `components:` 下单独定义。

### 按钮

- **`button-primary`** 用于绿色注册与主要确认。底色 `{colors.primary}`，文字 `{colors.on-primary}`，排版 `{typography.body}`，圆角 `{rounded.lg}`，内边距为 `{spacing.sm}` `{spacing.md}`（8×12px）。
- **`button-secondary`** 用于蓝色登录、次要操作及「显示更多」。底色 `{colors.secondary}`，文字 `{colors.on-primary}`，排版 `{typography.body}`，圆角 `{rounded.lg}`，内边距 8×12px。
- **`button-tertiary`** 是深灰工具按钮，用于「更多赛事」或「阅读更多」。底色 `{colors.surface}`，文字 `{colors.ink}`，排版 `{typography.body}`，圆角 `{rounded.xl}`，内边距 8×12px。
- **`button-ghost`** 用于密集列表里的弱操作。底色 `{colors.surface}`，文字 `{colors.ink}`，排版 `{typography.body}`，圆角 `{rounded.lg}`，内边距 `0` `{spacing.sm}`（0×8px）。

### 导航

- **`top-nav`** 是采用 sticky 定位的顶部导航，放置品牌字标、搜索、余额（balance）及注册与登录按钮。底色 `{colors.canvas}`，文字 `{colors.ink}`，内边距 8×16px，底边用 `{colors.hairline}`。
- **`sidebar-rail`** 是采用 fixed 定位的左栏，包含赌场、体育和各分类。底色 `{colors.canvas}`，图标 `{colors.muted}`，内边距 `{spacing.sm}`，选中项用 `{colors.primary}`。

### 输入框与表单

- **`text-input`** 用于搜索和投注金额输入。底色 `{colors.surface}`，文字 `{colors.ink}`，占位提示 `{colors.faint}`，边框 `{colors.hairline}`，排版 `{typography.body}`，圆角 `{rounded.md}`，内边距 8×12px。
- **`bet-odds-button`** 是赛事行中的赔率选项。底色 `{colors.surface}`，文字 `{colors.ink}`，排版 `{typography.ui}`，圆角 `{rounded.md}`，内边距 8×12px，选中用 `{colors.secondary}`。

### 胶囊控件与徽标

- **`pill-badge`** 是蓝色实心状态或数量徽标。底色 `{colors.secondary}`，文字 `{colors.on-primary}`，排版 `{typography.caption}`，圆角 `{rounded.full}`，内边距 `0` `{spacing.xs}`（0×4px）。
- **`pill-outline`** 用于分类或筛选。文字 `{colors.ink}`，排版 `{typography.title}`，圆角 `{rounded.full}`，内边距 0×8px，边框 `{colors.hairline}`。

### 卡片与容器

- **`game-tile`** 用于发现页，封面铺满。占位底色 `{colors.surface}`，圆角 `{rounded.card}`。
- **`hero-banner`** 用于欢迎奖金和推广，以渐变图片铺底。背景 `{colors.surface}`，标题用 `{colors.ink}` 与 `{typography.display}`，圆角 `{rounded.card}`，内边距 `{spacing.xxl}`。
- **`promo-card`** 展示整幅推广照片、标题及收藏或分类标签。底色 `{colors.surface}`，标题 `{colors.ink}`，圆角 `{rounded.card}`，内边距 `{spacing.lg}`。
- **`feature-card`** 是通用深色内容卡。底色 `{colors.surface}`，文字 `{colors.ink}`，边框 `{colors.hairline}`，圆角 `{rounded.card}`，内边距 `{spacing.lg}`。
- **`feature-card-elevated`** 用于弹窗、提示等浮层。底色 `{colors.surface}`，文字 `{colors.ink}`，圆角 `{rounded.card}`，内边距 `{spacing.lg}`，阴影 `rgba(0,0,0,0.4)`。
- **`betslip-panel`** 是停靠的体育投注单或转盘面板。底色 `{colors.surface}`，文字 `{colors.ink}`，圆角 `{rounded.card}`，内边距 `{spacing.lg}`，确认使用 `button-primary`。
- **`footer`** 组织支持、信息与分类链接。底色 `{colors.canvas}`，正文 `{colors.muted}`，标题 `{colors.ink}`，内边距 `{spacing.xxl}`。

### 组合示例

> 下方 10 个 `ex-*` 条目用于演示。它们复用 `{colors.surface}`、`{colors.primary}`、`{rounded.card}` 及间距尺度，便于在同一风格中展示通用界面。

| 组件 | 用途 | 属性 |
|---|---|---|
| `ex-pricing-tier` | 默认套餐卡，复用功能卡和较柔和的页面底色 | `backgroundColor`、`textColor`、`borderColor`、`rounded`、`padding` |
| `ex-pricing-tier-featured` | 推荐套餐卡，浅色模式用深底浅字，深色模式用浅底深字 | `backgroundColor`、`textColor`、`rounded`、`padding` |
| `ex-product-selector` | SaaS／B2B 套餐的权益摘要 | `backgroundColor`、`rounded`、`padding` |
| `ex-cart-drawer` | SaaS／B2B 订阅摘要，按附加项列出明细 | `backgroundColor`、`rounded`、`padding`、`item-divider` |
| `ex-app-shell-row` | 应用框架示例的侧栏行，选中项用品牌主色 | `backgroundColor`、`activeIndicator`、`rounded`、`padding` |
| `ex-data-table-cell` | 数据表格的表头与正文，表头采用大写等宽字，正文采用 body-sm | `headerBackground`、`headerTypography`、`bodyTypography`、`cellPadding`、`rowBorder` |
| `ex-auth-form-card` | 复用功能卡及输入框的登录与注册卡 | `backgroundColor`、`rounded`、`padding` |
| `ex-modal-card` | 复用功能卡表面并加浮层阴影的弹窗 | `backgroundColor`、`rounded`、`padding` |
| `ex-empty-state-card` | 空状态插图容器 | `backgroundColor`、`rounded`、`padding`、`captionTypography` |
| `ex-toast` | 复用功能卡形状和中级阴影的提示条 | `backgroundColor`、`rounded`、`padding`、`typography` |


<details>
<summary>英文原文</summary>

<!-- source:body -->
## Components

> **No hover states documented.** Each spec covers Default and Active/Pressed only. Variants live as separate `components:` entries.

### Buttons

**`button-primary`** — the green "Registration" / primary-confirm CTA, the highest-visibility control.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.lg}`, padding `{spacing.sm}` `{spacing.md}` (8×12px).

**`button-secondary`** — the blue "Log In" / secondary action and the "Show more" pill.
- Background `{colors.secondary}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 8×12px.

**`button-tertiary`** — the dark-grey utility button ("More events", "Read more").
- Background `{colors.surface}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.xl}`, padding 8×12px.

**`button-ghost`** — a low-emphasis grey control on dense rows.
- Background `{colors.surface}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}`, padding `0` `{spacing.sm}` (0×8px).

### Navigation

**`top-nav`** — the sticky header carrying the 1win wordmark, search, balance, and the green Registration + blue Log In CTAs.
- Background `{colors.canvas}`, text `{colors.ink}`, padding 8×16px, with a `{colors.hairline}` base edge.

**`sidebar-rail`** — the fixed left icon rail (Casino, Sports, categories).
- Background `{colors.canvas}`, glyphs `{colors.muted}`, padding `{spacing.sm}`. Active item marked in `{colors.primary}`.

### Inputs & Forms

**`text-input`** — search and betslip amount fields.
- Background `{colors.surface}`, text `{colors.ink}`, placeholder `{colors.faint}`, border `{colors.hairline}`, type `{typography.body}`, rounded `{rounded.md}`, padding 8×12px.

**`bet-odds-button`** — the odds chip in sportsbook match rows.
- Background `{colors.surface}`, text `{colors.ink}`, type `{typography.ui}`, rounded `{rounded.md}`, padding 8×12px. Selected state highlights in `{colors.secondary}`.

### Pills & Badges

**`pill-badge`** — the solid blue status/count badge.
- Background `{colors.secondary}`, text `{colors.on-primary}`, type `{typography.caption}`, rounded `{rounded.full}`, padding `0` `{spacing.xs}` (0×4px).

**`pill-outline`** — the bordered filter/category pill.
- Text `{colors.ink}`, type `{typography.title}`, rounded `{rounded.full}`, padding 0×8px, with a `{colors.hairline}` border.

### Cards & Containers

**`game-tile`** — the core discovery unit: a full-bleed game thumbnail.
- Background `{colors.surface}` (placeholder), rounded `{rounded.card}`. Artwork fills edge-to-edge with no padding.

**`hero-banner`** — the top welcome-bonus / promo banner.
- Background `{colors.surface}` with edge-to-edge gradient imagery, headline `{colors.ink}` in `{typography.display}`, rounded `{rounded.card}`, padding `{spacing.xxl}`.

**`promo-card`** — a promotions-page card (full-bleed photo + title + chips).
- Background `{colors.surface}`, title `{colors.ink}`, rounded `{rounded.card}`, padding `{spacing.lg}`.

**`feature-card`** — generic dark content card.
- Background `{colors.surface}`, text `{colors.ink}`, border `{colors.hairline}`, rounded `{rounded.card}`, padding `{spacing.lg}`.

**`feature-card-elevated`** — a feature card lifted above the page (floating shadow), base for modal/toast surfaces.
- Background `{colors.surface}`, text `{colors.ink}`, rounded `{rounded.card}`, padding `{spacing.lg}`, soft `rgba(0,0,0,0.4)` shadow.

**`betslip-panel`** — the docked sportsbook betslip / wheel-of-fortune panel.
- Background `{colors.surface}`, text `{colors.ink}`, rounded `{rounded.card}`, padding `{spacing.lg}`. Confirm action uses `button-primary`.

**`footer`** — the page footer (support, information, categories columns).
- Background `{colors.canvas}`, text `{colors.muted}`, headings `{colors.ink}`, padding `{spacing.xxl}`.

### Examples (illustrative)

> Kit-mirror demonstration surfaces. Each `ex-*` entry references 1win's brand-native primitives (`{colors.surface}`, `{colors.primary}`, `{rounded.card}`, the spacing scale) so downstream consumers re-skin the same 10 illustrative surfaces consistently. These are not extracted brand components.

**`ex-pricing-tier`** — Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** — What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** — Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** — Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — same chrome as feature-card with elevated shadow.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — Empty-state illustration frame.
- Properties: `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast notification surface — feature-card shape + medium shadow.
- Properties: `backgroundColor`, `rounded`, `padding`, `typography`



<!-- source:end -->

</details>

## 使用约束

### 建议

- 注册、确认和提交投注使用 `{colors.primary}`，次要操作、链接及直播或投注高亮使用 `{colors.secondary}`。
- 用 `{colors.canvas}` → `{colors.surface}` 的明度差和淡色 `{colors.hairline}` 区分层次。
- 标签使用 Inter 600+（`{typography.body}` 或 `{typography.caption}`），标题和奖金数字用 800。
- 游戏与活动图片负责丰富色彩，界面框架维持深色。
- 按钮用 `{rounded.lg}`–`{rounded.xl}`，图块、卡片和面板用 `{rounded.card}`（16px），胶囊控件和徽标用 `{rounded.full}`。
- 强调色底上的文字用 `{colors.on-primary}`（白色）。

### 避免

- 游戏图块和奖金横幅中的紫、红、紫罗兰与琥珀色仅用于内容展示。
- 界面结构强调色限于绿和蓝。
- 正文字重使用 Inter 600，归档未采用 Inter 400。
- 游戏封面铺满 `{rounded.card}`，卡片内部零留白。
- 主要层次依靠表面明度差，投影留给浮层。

<details>
<summary>英文原文</summary>

<!-- source:body -->
## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (green) for primary actions — Registration, confirm, place-bet — and `{colors.secondary}` (blue) for secondary actions, links, and live/betting highlights.
- Build depth with the surface ladder (`{colors.canvas}` → `{colors.surface}`) plus a faint `{colors.hairline}` edge; avoid heavy shadows.
- Set every label in Inter 600+ (`{typography.body}` / `{typography.caption}`); use the 800 weight for headlines and bonus figures.
- Let game and promo artwork supply the color — keep the surrounding chrome monochrome dark.
- Use `{rounded.lg}`–`{rounded.xl}` on buttons, `{rounded.card}` (16px) on tiles/cards/panels, and `{rounded.full}` on pills and badges.
- Pair accent fills with `{colors.on-primary}` (white) text for legibility.

### Don't
- Don't promote game-tile or bonus-banner gradient colors (the purples, reds, violets, ambers) into the UI palette — they are content, not chrome.
- Don't add a third structural accent; the system is green + blue only.
- Don't use pure-regular weights — there is no Inter 400 here; body copy is semibold.
- Don't pad game tiles — artwork is full-bleed inside `{rounded.card}` corners.
- Don't rely on drop shadows for elevation; the surface brightness step is the elevation language.

<!-- source:end -->

</details>

## 设计词元原值

1win 设计语言分析。近黑底色衬托密集的通栏游戏图块、推广卡与直播投注面板。界面使用粗字重 Inter、平坦的深灰表面，以及鲜绿色与电光蓝两种操作色。

```yaml
---
version: alpha
name: 1win Analysis
description: An analysis of 1win's design language — a near-black crypto casino and sportsbook built on Inter at heavy weights, where a vivid green action color and an electric blue secondary carry every CTA across dense, full-bleed game-tile rails, promo cards, and live betting panels on a flat dark-grey surface ladder.

colors:
  primary: "#00b24b"
  secondary: "#0075ff"
  on-primary: "#ffffff"
  canvas: "#141415"
  surface: "#2e3035"
  hairline: "#2d2f33"
  ink: "#f0f2f5"
  muted: "#9aa1b1"
  faint: "#53575f"
  black: "#000000"

typography:
  display:
    fontFamily: Inter
    fontSize: 33px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: 0
  heading:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: 0
  title:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  ui:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  card: 16px
  full: 999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
  xxxl: 32px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
  button-tertiary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "8px 12px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0px 8px"
  pill-badge:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "0px 4px"
  pill-outline:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.full}"
    padding: "0px 8px"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "8px 16px"
  sidebar-rail:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    padding: "8px"
  game-tile:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
  hero-banner:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "24px"
  promo-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  feature-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  feature-card-elevated:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  bet-odds-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  betslip-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    padding: "24px"

  # ─── Examples (illustrative) — kit-mirror surfaces ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.surface}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.xxl}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body}"

---
```
