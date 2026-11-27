# Spotify · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。

# 设计系统灵感来自 Spotify


<details>
<summary>英文原文</summary>

<!-- source:body -->
# Design System Inspired by Spotify


<!-- source:end -->

</details>

## 1。视觉主题和大气

Spotify's web interface is a dark, immersive music player that wraps listeners in a near-black cocoon (`#121212`, `#181818`, `#1f1f1f`) where album art and content become the primary source of color. The design philosophy is "content-first darkness" — the UI recedes into shadow so that music, podcasts, and playlists can glow. Every surface is a shade of charcoal, creating a theater-like environment where the only true color comes from the iconic Spotify Green (`#1ed760`) and the album artwork itself.

The typography uses SpotifyMixUI and SpotifyMixUITitle — proprietary fonts from the CircularSp family (Circular by Lineto, customized for Spotify) with an extensive fallback stack that includes Arabic, Hebrew, Cyrillic, Greek, Devanagari, and CJK fonts, reflecting Spotify's global reach. The type system is compact and functional: 700 (bold) for emphasis and navigation, 600 (semibold) for secondary emphasis, and 400 (regular) for body. Buttons use uppercase with positive letter-spacing (1.4px–2px) for a systematic, label-like quality.

区别是什么 Spotify 表示其避孕药和圆形几何。 500px–9999px 半径(全药), circular 播放按钮 50% 半径,搜索输入为 500px 与重阴影结合(`rgba(0,0,0,0.5) 0px 8px 24px`),用于提升元素和独特的内置边框-阴影组合(`rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset`),结果是一种感觉像一个溢价音频设备的界面——触觉,圆形,并被构建用于触摸.

**关键特征 :**
- 近黑浸暗主题( Q)`#121212`–`#1f1f1f`)——UI在内容后消失.
- Spotify 绿色( G)`#1ed760`)作为单调品牌强调色——从不装饰,总是功能性
- 具有全局脚本支持的SpotifyMixUI/CircularSp字体家族
- Pill buttons (500px–9999px) and circular controls (50%) — rounded, touch-optimized
- 宽度的大写按钮标签 letter-spacing (1.4px–2px)
- 高元素的重阴影( 重阴影)`rgba(0,0,0,0.5) 0px 8px 24px`)
- 语义颜色:负红色( 3)`#f3727f`),警告橙色(`#ffa42b`),宣布为蓝色(`#539df5`)
- 专辑艺术作为主要色彩来源——UI设计为色调


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 1. Visual Theme & Atmosphere

Spotify's web interface is a dark, immersive music player that wraps listeners in a near-black cocoon (`#121212`, `#181818`, `#1f1f1f`) where album art and content become the primary source of color. The design philosophy is "content-first darkness" — the UI recedes into shadow so that music, podcasts, and playlists can glow. Every surface is a shade of charcoal, creating a theater-like environment where the only true color comes from the iconic Spotify Green (`#1ed760`) and the album artwork itself.

The typography uses SpotifyMixUI and SpotifyMixUITitle — proprietary fonts from the CircularSp family (Circular by Lineto, customized for Spotify) with an extensive fallback stack that includes Arabic, Hebrew, Cyrillic, Greek, Devanagari, and CJK fonts, reflecting Spotify's global reach. The type system is compact and functional: 700 (bold) for emphasis and navigation, 600 (semibold) for secondary emphasis, and 400 (regular) for body. Buttons use uppercase with positive letter-spacing (1.4px–2px) for a systematic, label-like quality.

What distinguishes Spotify is its pill-and-circle geometry. Primary buttons use 500px–9999px radius (full pill), circular play buttons use 50% radius, and search inputs are 500px pills. Combined with heavy shadows (`rgba(0,0,0,0.5) 0px 8px 24px`) on elevated elements and a unique inset border-shadow combo (`rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset`), the result is an interface that feels like a premium audio device — tactile, rounded, and built for touch.

**Key Characteristics:**
- Near-black immersive dark theme (`#121212`–`#1f1f1f`) — UI disappears behind content
- Spotify Green (`#1ed760`) as singular brand accent — never decorative, always functional
- SpotifyMixUI/CircularSp font family with global script support
- Pill buttons (500px–9999px) and circular controls (50%) — rounded, touch-optimized
- Uppercase button labels with wide letter-spacing (1.4px–2px)
- Heavy shadows on elevated elements (`rgba(0,0,0,0.5) 0px 8px 24px`)
- Semantic colors: negative red (`#f3727f`), warning orange (`#ffa42b`), announcement blue (`#539df5`)
- Album art as the primary color source — the UI is achromatic by design


<!-- source:end -->

</details>

## 2. Color Palette & Roles

### 初等品牌
- **Spotify Green** (`#1ed760`): Primary brand accent — play buttons, active states, CTAs
- **Near Black** (`#121212`): Deepest background surface
- **暗色表面** (`#181818`:卡片、容器、提升表面
- **中暗线** (`#1f1f1f`:按钮背景,交互式表面

### 文本
- **白色** (`#ffffff`): `--text-base`,主文本
- **Silver** (`#b3b3b3`): Secondary text, muted labels, inactive nav
- **近白线** (`#cbcbcb`: 略亮的副文本
- **光线** (`#fdfdfd`: 最大强调值近纯白色

### 语义
- **负红色** (`#f3727f`): `--text-negative`,错误状态
- **橙色警告( 警告)** (`#ffa42b`): `--text-warning`状态
- **蓝色** (`#539df5`): `--text-announcement`信息状态

### 表面边框( B)
- **暗卡片** (`#252525`: 高卡表面
- **中卡** (`#272727`: 备用卡表面
- **边框灰色** (`#4d4d4d`: 暗边框按钮
- **光线边框** (`#7c7c7c`: 外观按钮边框, 变音链接
- **分隔符** (`#b3b3b3`: 分隔线
- **光面层** (`#eeeeee`: 轻模式按钮( 稀有)
- **Spotify 绿色边框** (`#1db954`: 绿色强调色边框变体

### 阴影
- **重装** (`rgba(0,0,0,0.5) 0px 8px 24px`:对话框、菜单、提升面板
- **中号** (`rgba(0,0,0,0.3) 0px 8px 8px`:卡片,滴滴数
- **设置边框** (`rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset`: 输入边框-阴影组合


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 2. Color Palette & Roles

### Primary Brand
- **Spotify Green** (`#1ed760`): Primary brand accent — play buttons, active states, CTAs
- **Near Black** (`#121212`): Deepest background surface
- **Dark Surface** (`#181818`): Cards, containers, elevated surfaces
- **Mid Dark** (`#1f1f1f`): Button backgrounds, interactive surfaces

### Text
- **White** (`#ffffff`): `--text-base`, primary text
- **Silver** (`#b3b3b3`): Secondary text, muted labels, inactive nav
- **Near White** (`#cbcbcb`): Slightly brighter secondary text
- **Light** (`#fdfdfd`): Near-pure white for maximum emphasis

### Semantic
- **Negative Red** (`#f3727f`): `--text-negative`, error states
- **Warning Orange** (`#ffa42b`): `--text-warning`, warning states
- **Announcement Blue** (`#539df5`): `--text-announcement`, info states

### Surface & Border
- **Dark Card** (`#252525`): Elevated card surface
- **Mid Card** (`#272727`): Alternate card surface
- **Border Gray** (`#4d4d4d`): Button borders on dark
- **Light Border** (`#7c7c7c`): Outlined button borders, muted links
- **Separator** (`#b3b3b3`): Divider lines
- **Light Surface** (`#eeeeee`): Light-mode buttons (rare)
- **Spotify Green Border** (`#1db954`): Green accent border variant

### Shadows
- **Heavy** (`rgba(0,0,0,0.5) 0px 8px 24px`): Dialogs, menus, elevated panels
- **Medium** (`rgba(0,0,0,0.3) 0px 8px 8px`): Cards, dropdowns
- **Inset Border** (`rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset`): Input border-shadow combo


<!-- source:end -->

</details>

## 3. 字法规则

### 字体家庭
- **标题**: `SpotifyMixUITitle`,倒计时: `CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, MS Gothic`
- **用户界面/ 机体**: `SpotifyMixUI`,同样的倒叠

### 等级

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| 节标题 | 闪烁密苏里语Name | 24px (1.50rem) | 700 | normal | normal | 粗体标题字重 |
| 特性标题 | 显微分解MixUI | 18px (1.13rem) | 600 | 1.30 (紧) | normal | 半粗体区长 |
| Body Bold | SpotifyMixUI | 16px (1.00rem) | 700 | normal | normal | Emphasized text |
| 体质 | 显微分解MixUI | 16px (1.00rem) | 400 | normal | normal | 标准机构 |
| 按钮大写 | 显微分解MixUI | 14px (0.88rem) | 600–700 | 1.00 (紧) | 1.4px–2px | `text-transform: uppercase` |
| 按钮 | 显微分解MixUI | 14px (0.88rem) | 700 | normal | 0.14px | 标准按钮 |
| 导航链接粗体 | 显微分解MixUI | 14px (0.88rem) | 700 | normal | normal | 导航 |
| Nav Link | SpotifyMixUI | 14px (0.88rem) | 400 | normal | normal | Inactive nav |
| 粗体标题 | 显微分解MixUI | 14px (0.88rem) | 700 | 1.50–1.54 | normal | 粗体元数据 |
| 说明 | 显微分解MixUI | 14px (0.88rem) | 400 | normal | normal | 元数据 |
| Small Bold | SpotifyMixUI | 12px (0.75rem) | 700 | 1.50 | normal | Tags, counts |
| Small | SpotifyMixUI | 12px (0.75rem) | 400 | normal | normal | Fine print |
| 徽章( T) | 显微分解MixUI | 10.5px (0.66rem) | 600 | 1.33 | normal | `text-transform: capitalize` |
| Micro | SpotifyMixUI | 10px (0.63rem) | 400 | normal | normal | Smallest text |

### 原则
- **Bold/regular binary**: Most text is either 700 (bold) or 400 (regular), with 600 used sparingly. This creates a clear visual hierarchy through weight contrast rather than size variation.
- **系统大写按钮**:按钮标签使用大写 + 宽 letter-spacing (1.4px–2px),创建了与内容文本相区别的系统性"标签"语音.
- **缩合大小**: 范围是 10px–24px ——比大多数系统范围狭窄. Spotify'类型是紧凑和功能的,设计用于扫描播放列表,而不是阅读文章.
- **Global script support**: The extensive fallback stack (Arabic, Hebrew, Cyrillic, Greek, Devanagari, CJK) reflects Spotify's 180+ market reach.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 3. Typography Rules

### Font Families
- **Title**: `SpotifyMixUITitle`, fallbacks: `CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, MS Gothic`
- **UI / Body**: `SpotifyMixUI`, same fallback stack

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Section Title | SpotifyMixUITitle | 24px (1.50rem) | 700 | normal | normal | Bold title weight |
| Feature Heading | SpotifyMixUI | 18px (1.13rem) | 600 | 1.30 (tight) | normal | Semibold section heads |
| Body Bold | SpotifyMixUI | 16px (1.00rem) | 700 | normal | normal | Emphasized text |
| Body | SpotifyMixUI | 16px (1.00rem) | 400 | normal | normal | Standard body |
| Button Uppercase | SpotifyMixUI | 14px (0.88rem) | 600–700 | 1.00 (tight) | 1.4px–2px | `text-transform: uppercase` |
| Button | SpotifyMixUI | 14px (0.88rem) | 700 | normal | 0.14px | Standard button |
| Nav Link Bold | SpotifyMixUI | 14px (0.88rem) | 700 | normal | normal | Navigation |
| Nav Link | SpotifyMixUI | 14px (0.88rem) | 400 | normal | normal | Inactive nav |
| Caption Bold | SpotifyMixUI | 14px (0.88rem) | 700 | 1.50–1.54 | normal | Bold metadata |
| Caption | SpotifyMixUI | 14px (0.88rem) | 400 | normal | normal | Metadata |
| Small Bold | SpotifyMixUI | 12px (0.75rem) | 700 | 1.50 | normal | Tags, counts |
| Small | SpotifyMixUI | 12px (0.75rem) | 400 | normal | normal | Fine print |
| Badge | SpotifyMixUI | 10.5px (0.66rem) | 600 | 1.33 | normal | `text-transform: capitalize` |
| Micro | SpotifyMixUI | 10px (0.63rem) | 400 | normal | normal | Smallest text |

### Principles
- **Bold/regular binary**: Most text is either 700 (bold) or 400 (regular), with 600 used sparingly. This creates a clear visual hierarchy through weight contrast rather than size variation.
- **Uppercase buttons as system**: Button labels use uppercase + wide letter-spacing (1.4px–2px), creating a systematic "label" voice distinct from content text.
- **Compact sizing**: The range is 10px–24px — narrower than most systems. Spotify's type is compact and functional, designed for scanning playlists, not reading articles.
- **Global script support**: The extensive fallback stack (Arabic, Hebrew, Cyrillic, Greek, Devanagari, CJK) reflects Spotify's 180+ market reach.


<!-- source:end -->

</details>

## 4. 组件型号

### 按钮

**暗胶囊形**
- Background: `#1f1f1f`
- 文本 : `#ffffff` 或 减 减 `#b3b3b3`
- 铺垫: 8px 16px
- 半径 : 9999px (满药)
- 使用:导航胶囊形、辅助动作

**暗大胶囊形**
- Background: `#181818`
- 文本 : `#ffffff`
- 铺垫: 0px 43px
- 半径 : 500px
- Use: Primary app navigation buttons

**轻胶囊形**
- Background: `#eeeeee`
- 文本 : `#181818`
- 半径 : 500px
- 使用:轻度模式CTAs(cookie同意,营销)

**提纲胶囊形**
- Background: transparent
- 文本 : `#ffffff`
- 边框 : `1px solid #7c7c7c`
- 铺垫: 4px 16px 4px 36px (图标的不对称)
- 半径 : 9999px
- 使用: 随从按钮, 二次动作

**Circular 播放( L)**
- Background: `#1f1f1f`
- 文本 : `#ffffff`
- 铺垫: 12px
- 半径 : 50% (圆)
- 使用: 播放/暂停控制

### 纸牌和集装箱
- Background: `#181818` or `#1f1f1f`
- 半径 : 6px–8px
- No visible borders on most cards
- 侧面:轻微背景光亮
- 阴影 : `rgba(0,0,0,0.3) 0px 8px 8px` 升起时

### 投入
- Search input: `#1f1f1f` background, `#ffffff` text
- 半径 : 500px (溢出声)
- 铺垫: 12px 96px 12px 48px (虹觉)
- 焦点:边界变为 `#000000`,大纲 `1px solid`

### 导航
- 带有 SpotifyMixUI 的暗边栏 14px 字重 700 活动, 400 用于非活动
- `#b3b3b3` 闲置项目变色, `#ffffff` 活动
- Circular 图标按钮(50% 半径)
- Spotify 标识为绿色左上角


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 4. Component Stylings

### Buttons

**Dark Pill**
- Background: `#1f1f1f`
- Text: `#ffffff` or `#b3b3b3`
- Padding: 8px 16px
- Radius: 9999px (full pill)
- Use: Navigation pills, secondary actions

**Dark Large Pill**
- Background: `#181818`
- Text: `#ffffff`
- Padding: 0px 43px
- Radius: 500px
- Use: Primary app navigation buttons

**Light Pill**
- Background: `#eeeeee`
- Text: `#181818`
- Radius: 500px
- Use: Light-mode CTAs (cookie consent, marketing)

**Outlined Pill**
- Background: transparent
- Text: `#ffffff`
- Border: `1px solid #7c7c7c`
- Padding: 4px 16px 4px 36px (asymmetric for icon)
- Radius: 9999px
- Use: Follow buttons, secondary actions

**Circular Play**
- Background: `#1f1f1f`
- Text: `#ffffff`
- Padding: 12px
- Radius: 50% (circle)
- Use: Play/pause controls

### Cards & Containers
- Background: `#181818` or `#1f1f1f`
- Radius: 6px–8px
- No visible borders on most cards
- Hover: slight background lightening
- Shadow: `rgba(0,0,0,0.3) 0px 8px 8px` on elevated

### Inputs
- Search input: `#1f1f1f` background, `#ffffff` text
- Radius: 500px (pill)
- Padding: 12px 96px 12px 48px (icon-aware)
- Focus: border becomes `#000000`, outline `1px solid`

### Navigation
- Dark sidebar with SpotifyMixUI 14px weight 700 for active, 400 for inactive
- `#b3b3b3` muted color for inactive items, `#ffffff` for active
- Circular icon buttons (50% radius)
- Spotify logo top-left in green


<!-- source:end -->

</details>

## 5. 版式原则

### 间距系统
- 基部单位: 8px
- 缩放 : 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 14px, 15px, 16px, 20px

### 网格容器( C)
- Sidebar (fixed) + main content area
- 网格化的专辑/播放列表卡
- 底部的全宽现播放栏
- 响应内容区域填补剩余空间

### 白空间哲学
- **暗压缩**: Spotify 包的内容密集——播放列表网格,音轨列表,导航都紧密地间隔。 暗色背景在元素之间提供了视觉休息,不需要大间隔。
- **呼吸室内的内容密度**:这是一个应用,而不是营销网站,每个像素都服务于收听体验.

### 圆角刻度
- 最小( 微米)2px:徽章,明确标记
- 浅色( 微弱)4px: 输入,小元素
- 标准( 4)6px: 专辑艺术容器,卡片
- 舒适( 舒适( 舒适) )8px: 区域、对话框
- 中 (单位:千美元)10px–20px: 面板、叠加元素
- Large (100px): Large pill buttons
- Pill (500px): Primary buttons, search input
- 完全胶囊形( E)9999px:导航胶囊形,搜索
- 圆( 圆)50%: 播放按钮、 变形符、 图标


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 14px, 15px, 16px, 20px

### Grid & Container
- Sidebar (fixed) + main content area
- Grid-based album/playlist cards
- Full-width now-playing bar at bottom
- Responsive content area fills remaining space

### Whitespace Philosophy
- **Dark compression**: Spotify packs content densely — playlist grids, track lists, and navigation are all tightly spaced. The dark background provides visual rest between elements without needing large gaps.
- **Content density over breathing room**: This is an app, not a marketing site. Every pixel serves the listening experience.

### Border Radius Scale
- Minimal (2px): Badges, explicit tags
- Subtle (4px): Inputs, small elements
- Standard (6px): Album art containers, cards
- Comfortable (8px): Sections, dialogs
- Medium (10px–20px): Panels, overlay elements
- Large (100px): Large pill buttons
- Pill (500px): Primary buttons, search input
- Full Pill (9999px): Navigation pills, search
- Circle (50%): Play buttons, avatars, icons


<!-- source:end -->

</details>

## 6。深度和高度

| 职等 | 治疗 | 使用 |
|-------|-----------|-----|
| Base (Level 0) | `#121212` background | Deepest layer, page background |
| 表面( 级别) 1) | `#181818` 或 减 减 `#1f1f1f` | 纸牌、侧边栏、集装箱 |
| 升( 级别) 2) | `rgba(0,0,0,0.3) 0px 8px 8px` | 下拉菜单, 悬浮牌 |
| 对话框( 级别) 3) | `rgba(0,0,0,0.5) 0px 8px 24px` | 模块、叠加、菜单 |
| 套接字( 边界) | `rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset` | 输入边框 |

**影子哲学**: Spotify 将显著的重阴影用于暗主题应用程序。 0.5 透明阴影在 24px 模糊为对话框和菜单创造了戏剧性的“在黑暗中飘扬”效果,而 0.3 透明度在 8px 模糊度提供了更微妙的卡片升降。输入值上独特的内置边框-阴影组合产生了一种沉淀的、触觉性的质量。


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (Level 0) | `#121212` background | Deepest layer, page background |
| Surface (Level 1) | `#181818` or `#1f1f1f` | Cards, sidebar, containers |
| Elevated (Level 2) | `rgba(0,0,0,0.3) 0px 8px 8px` | Dropdown menus, hover cards |
| Dialog (Level 3) | `rgba(0,0,0,0.5) 0px 8px 24px` | Modals, overlays, menus |
| Inset (Border) | `rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset` | Input borders |

**Shadow Philosophy**: Spotify uses notably heavy shadows for a dark-themed app. The 0.5 opacity shadow at 24px blur creates a dramatic "floating in darkness" effect for dialogs and menus, while the 0.3 opacity at 8px blur provides a more subtle card lift. The unique inset border-shadow combination on inputs creates a recessed, tactile quality.


<!-- source:end -->

</details>

## 7。 。 。 。 。 。

### 执行
- 使用近黑背景( I)`#121212`–`#1f1f1f`——通过遮荫变异的深度.
- 应用 Spotify 绿色( G)`#1ed760`)只用于游戏控制、活动状态和主要CTA
- Use pill shape (500px–9999px) for all buttons — circular (50%) for play controls
- 应用大写 + 宽 letter-spacing (1.4px–2px按钮标签
- 保持打字紧凑( Q)10px–24px 范围)——这是应用程序,不是杂志.
- 使用重阴影( U)`0.3–0.5 opacity`),用于在暗色背景上提升元素.
- Let album art provide color — the UI itself is achromatic

### Don't
- Don't use Spotify Green decoratively or on backgrounds — it's functional only
- 初等表面不要用光背景——暗沉是核心
- Don't skip the pill/circle geometry on buttons — square buttons break the identity
- Don't use thin/subtle shadows — on dark backgrounds, shadows need to be heavy to be visible
- Don't add additional brand colors — green + achromatic grays is the complete palette
- Don't use relaxed line-heights — Spotify's typography is compact and dense
- Don't expose raw gray borders — use shadow-based or inset borders instead


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 7. Do's and Don'ts

### Do
- Use near-black backgrounds (`#121212`–`#1f1f1f`) — depth through shade variation
- Apply Spotify Green (`#1ed760`) only for play controls, active states, and primary CTAs
- Use pill shape (500px–9999px) for all buttons — circular (50%) for play controls
- Apply uppercase + wide letter-spacing (1.4px–2px) on button labels
- Keep typography compact (10px–24px range) — this is an app, not a magazine
- Use heavy shadows (`0.3–0.5 opacity`) for elevated elements on dark backgrounds
- Let album art provide color — the UI itself is achromatic

### Don't
- Don't use Spotify Green decoratively or on backgrounds — it's functional only
- Don't use light backgrounds for primary surfaces — the dark immersion is core
- Don't skip the pill/circle geometry on buttons — square buttons break the identity
- Don't use thin/subtle shadows — on dark backgrounds, shadows need to be heavy to be visible
- Don't add additional brand colors — green + achromatic grays is the complete palette
- Don't use relaxed line-heights — Spotify's typography is compact and dense
- Don't expose raw gray borders — use shadow-based or inset borders instead


<!-- source:end -->

</details>

## 8. Responsive Behavior

### 断点
| 名称 | 宽度 | 密钥更改 |
|------|-------|-------------|
| 移动小 | <425px | 压缩移动布局 |
| 手机 | 425–576px | 标准移动 |
| 平板 | 576–768px | 2- 柱状网格 |
| 块状大 | 768–896px | 扩展版式 |
| 桌面小数 | 896–1024px | 可见侧边栏 |
| 桌面 | 1024–1280px | 完整的桌面布局 |
| Large Desktop | >1280px | Expanded grid |

### 折叠战略
- Sidebar: full → collapsed → hidden
- 专辑 grid: 5 columns → 3 → 2 → 1
- 现时播放栏:保持大小
- 搜索:维持避孕药输入,宽度调整
- 导航: 移动式边栏 ~ 底栏


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <425px | Compact mobile layout |
| Mobile | 425–576px | Standard mobile |
| Tablet | 576–768px | 2-column grid |
| Tablet Large | 768–896px | Expanded layout |
| Desktop Small | 896–1024px | Sidebar visible |
| Desktop | 1024–1280px | Full desktop layout |
| Large Desktop | >1280px | Expanded grid |

### Collapsing Strategy
- Sidebar: full → collapsed → hidden
- Album grid: 5 columns → 3 → 2 → 1
- Now-playing bar: maintained at all sizes
- Search: pill input maintained, width adjusts
- Navigation: sidebar → bottom bar on mobile


<!-- source:end -->

</details>

## 9. Agent Prompt Guide

### 快速颜色引用
- Background: Near Black (`#121212`)
- 表面:暗卡( 暗卡)`#181818`)
- 文字: 白话( 白话)`#ffffff`)
- 副文本:银(`#b3b3b3`)
- 坐标 : Spotify 绿色( G)`#1ed760`)
- 边框 : `#4d4d4d`
- 错误: 负红色 (E)`#f3727f`)

### 示例组件提示
- "Create a dark card: #181818 background, 8px radius. Title at 16px SpotifyMixUI weight 700, white text. Subtitle at 14px weight 400, #b3b3b3. Shadow rgba(0,0,0,0.3) 0px 8px 8px on hover."
- "Design a pill button: #1f1f1f background, white text, 9999px radius, 8px 16px padding. 14px SpotifyMixUI weight 700, uppercase, letter-spacing 1.4px."
- "Build a circular play button: Spotify Green (#1ed760) background, #000000 icon, 50% radius, 12px padding."
- "Create search input: #1f1f1f background, white text, 500px radius, 12px 48px padding. Inset border: rgb(124,124,124) 0px 0px 0px 1px inset."
- "Design navigation sidebar: #121212 background. Active items: 14px weight 700, white. Inactive: 14px weight 400, #b3b3b3."

### 迭代指南
1. 开始 #121212 ——一切生活于近黑黑暗中.
2. Spotify 绿色只用于功能突出显示( 游戏、 活动、 CDA)
3. 胶囊形一切 - 500px 以大块头而言, 9999px 以小为主, 50% 资源 circular
4. Uppercase + wide tracking on buttons — the systematic label voice
5. 重阴影( 重阴影 )0.3–0.5 光影在黑暗中是看不见的 光影在黑暗中是看不见的
6. 专辑艺术提供所有颜色——UI保持色调

<details>
<summary>英文原文</summary>

<!-- source:body -->
## 9. Agent Prompt Guide

### Quick Color Reference
- Background: Near Black (`#121212`)
- Surface: Dark Card (`#181818`)
- Text: White (`#ffffff`)
- Secondary text: Silver (`#b3b3b3`)
- Accent: Spotify Green (`#1ed760`)
- Border: `#4d4d4d`
- Error: Negative Red (`#f3727f`)

### Example Component Prompts
- "Create a dark card: #181818 background, 8px radius. Title at 16px SpotifyMixUI weight 700, white text. Subtitle at 14px weight 400, #b3b3b3. Shadow rgba(0,0,0,0.3) 0px 8px 8px on hover."
- "Design a pill button: #1f1f1f background, white text, 9999px radius, 8px 16px padding. 14px SpotifyMixUI weight 700, uppercase, letter-spacing 1.4px."
- "Build a circular play button: Spotify Green (#1ed760) background, #000000 icon, 50% radius, 12px padding."
- "Create search input: #1f1f1f background, white text, 500px radius, 12px 48px padding. Inset border: rgb(124,124,124) 0px 0px 0px 1px inset."
- "Design navigation sidebar: #121212 background. Active items: 14px weight 700, white. Inactive: 14px weight 400, #b3b3b3."

### Iteration Guide
1. Start with #121212 — everything lives in near-black darkness
2. Spotify Green for functional highlights only (play, active, CTA)
3. Pill everything — 500px for large, 9999px for small, 50% for circular
4. Uppercase + wide tracking on buttons — the systematic label voice
5. Heavy shadows (0.3–0.5 opacity) for elevation — light shadows are invisible on dark
6. Album art provides all the color — the UI stays achromatic

<!-- source:end -->

</details>
