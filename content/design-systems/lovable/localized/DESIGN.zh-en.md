# Lovable · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。

# 设计系统灵感来自 Lovable


<details>
<summary>英文原文</summary>

<!-- source:body -->
# Design System Inspired by Lovable


<!-- source:end -->

</details>

## 1。视觉主题和大气

Lovable's website radiates warmth through restraint. The entire page sits on a creamy, parchment-toned background (`#f7f4ed`) that immediately separates it from the cold-white conventions of most developer tool sites. This isn't minimalism for minimalism's sake — it's a deliberate choice to feel approachable, almost analog, like a well-crafted notebook. The near-black text (`#1c1c1c`) against this warm cream creates a contrast ratio that's easy on the eyes while maintaining sharp readability.

定制的相机平面变形器是系统的秘密武器,与信号"科技公司"的几何色素分离器不同,相机平面具有人文主义的温暖性——略微圆形终端,有机曲线,以及舒适的读取节奏. at example systems ()48px–60px),字重 600 带有强烈的负数 letter-spacing (-0.9px 改为: -1.5px)将头条压缩为自信的,编辑性的声明. `ui-sans-serif, system-ui` 承认定制型号带有品牌个性

何谓 Lovable视觉系统的独特之处在于它的不透明驱动深度模型。系统不是使用传统的灰色尺度,而是调制 `#1c1c1c` 不同不透明(0.03, 0.04, 0.4, 0.82–0.83) 创建统一的直肠范围。页面上每个灰色的阴影在技术上都是一样的——只是大致 transparent。这创造了一种视觉一致性,用任意的六极值几乎不可能实现。边框系统也遵循了这样的标准: `1px solid #eceae4` 光分和光分 `1px solid rgba(28, 28, 28, 0.4)` 以更强大的交互边界。

**关键特征 :**
- 温暖的羊皮纸背景( E) :`#f7f4ed`)——不是白色,不是白米,是一种有意的奶油,感觉自己是亲手挑选的.
- 摄影机平面变形 带有人文主义的温暖和编辑 letter-spacing 显示大小
- Opacity-driven color system: all grays derived from `#1c1c1c` at varying transparency levels
- 按钮上的嵌入阴影技术 : `rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset`
- 温暖的中性边框调色板 : `#eceae4` 以微妙的言语发誓, `rgba(28,28,28,0.4)` 用于交互式要素
- Full-pill radius (`9999px`) used extensively for action buttons and icon containers
- 焦点状态使用 `rgba(0,0,0,0.1) 0px 4px 12px` 影子,用于软的,温暖的强调
- 阴影/ 井 + Radix UI 组件原始,带有 Tailwind CSS 工具样式


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 1. Visual Theme & Atmosphere

Lovable's website radiates warmth through restraint. The entire page sits on a creamy, parchment-toned background (`#f7f4ed`) that immediately separates it from the cold-white conventions of most developer tool sites. This isn't minimalism for minimalism's sake — it's a deliberate choice to feel approachable, almost analog, like a well-crafted notebook. The near-black text (`#1c1c1c`) against this warm cream creates a contrast ratio that's easy on the eyes while maintaining sharp readability.

The custom Camera Plain Variable typeface is the system's secret weapon. Unlike geometric sans-serifs that signal "tech company," Camera Plain has a humanist warmth — slightly rounded terminals, organic curves, and a comfortable reading rhythm. At display sizes (48px–60px), weight 600 with aggressive negative letter-spacing (-0.9px to -1.5px) compresses headlines into confident, editorial statements. The font uses `ui-sans-serif, system-ui` as fallbacks, acknowledging that the custom typeface carries the brand personality.

What makes Lovable's visual system distinctive is its opacity-driven depth model. Rather than using a traditional gray scale, the system modulates `#1c1c1c` at varying opacities (0.03, 0.04, 0.4, 0.82–0.83) to create a unified tonal range. Every shade of gray on the page is technically the same hue — just more or less transparent. This creates a visual coherence that's nearly impossible to achieve with arbitrary hex values. The border system follows suit: `1px solid #eceae4` for light divisions and `1px solid rgba(28, 28, 28, 0.4)` for stronger interactive boundaries.

**Key Characteristics:**
- Warm parchment background (`#f7f4ed`) — not white, not beige, a deliberate cream that feels hand-selected
- Camera Plain Variable typeface with humanist warmth and editorial letter-spacing at display sizes
- Opacity-driven color system: all grays derived from `#1c1c1c` at varying transparency levels
- Inset shadow technique on buttons: `rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset`
- Warm neutral border palette: `#eceae4` for subtle, `rgba(28,28,28,0.4)` for interactive elements
- Full-pill radius (`9999px`) used extensively for action buttons and icon containers
- Focus state uses `rgba(0,0,0,0.1) 0px 4px 12px` shadow for soft, warm emphasis
- shadcn/ui + Radix UI component primitives with Tailwind CSS utility styling


<!-- source:end -->

</details>

## 2. Color Palette & Roles

### 主要
- **奶油** (`#f7f4ed`:页背景,卡片表面,按钮表面,基座——温,纸状,人.
- **Charcoal** (`#1c1c1c`): Primary text, headings, dark button backgrounds. Not pure black — organic warmth.
- **脱白** (`#fcfbf8`: 暗背景上的按钮文字,微妙的突出,几乎可以与纯白色区分.

### Neutral Scale (Opacity-Based)
- **Charcoal 100%** (`#1c1c1c`): Primary text, headings, dark surfaces.
- **木炭矿 83%** (`rgba(28,28,28,0.83)`: 强辅文.
- **木炭矿 82%** (`rgba(28,28,28,0.82)`: 身体副本.
- **静音灰** (`#5f5f5d`: 副文本,说明,标题.
- **木炭矿 40%** (`rgba(28,28,28,0.4)`: 交互式边框,按钮大纲.
- **木炭矿 4%** (`rgba(28,28,28,0.04)`: 细细的徘徊背景,微调.
- **木炭矿 3%** (`rgba(28,28,28,0.03)`:几乎可以看见的覆面,背景深度.

### 表面边框( B)
- **浅色奶油** (`#eceae4`:卡边框,分隔符,图像轮廓. 暖分隔符线.
- **凝胶表面** (`#f7f4ed`:卡片背景,部分填充——与无缝集成的页面背景相同.

### 交互式
- **环蓝** (`#3b82f6` 时 间 50% 透明度 : `--tw-ring-color`尾风焦点戒指
- **聚焦阴影** (`rgba(0,0,0,0.1) 0px 4px 12px`:焦与活性状态阴影——柔软,温暖,分散.

### 内置阴影
- **按钮设置** (`rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px`: 暗按钮上的多层签名内置阴影.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 2. Color Palette & Roles

### Primary
- **Cream** (`#f7f4ed`): Page background, card surfaces, button surfaces. The foundation — warm, paper-like, human.
- **Charcoal** (`#1c1c1c`): Primary text, headings, dark button backgrounds. Not pure black — organic warmth.
- **Off-White** (`#fcfbf8`): Button text on dark backgrounds, subtle highlight. Barely distinguishable from pure white.

### Neutral Scale (Opacity-Based)
- **Charcoal 100%** (`#1c1c1c`): Primary text, headings, dark surfaces.
- **Charcoal 83%** (`rgba(28,28,28,0.83)`): Strong secondary text.
- **Charcoal 82%** (`rgba(28,28,28,0.82)`): Body copy.
- **Muted Gray** (`#5f5f5d`): Secondary text, descriptions, captions.
- **Charcoal 40%** (`rgba(28,28,28,0.4)`): Interactive borders, button outlines.
- **Charcoal 4%** (`rgba(28,28,28,0.04)`): Subtle hover backgrounds, micro-tints.
- **Charcoal 3%** (`rgba(28,28,28,0.03)`): Barely-visible overlays, background depth.

### Surface & Border
- **Light Cream** (`#eceae4`): Card borders, dividers, image outlines. The warm divider line.
- **Cream Surface** (`#f7f4ed`): Card backgrounds, section fills — same as page background for seamless integration.

### Interactive
- **Ring Blue** (`#3b82f6` at 50% opacity): `--tw-ring-color`, Tailwind focus ring.
- **Focus Shadow** (`rgba(0,0,0,0.1) 0px 4px 12px`): Focus and active state shadow — soft, warm, diffused.

### Inset Shadows
- **Button Inset** (`rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px`): The signature multi-layer inset shadow on dark buttons.


<!-- source:end -->

</details>

## 3. 字法规则

### 字体家族
- **主要**: `Camera Plain Variable`,带有后退: `ui-sans-serif, system-ui`
- **字重范围**: 400 (身体/阅读), 480 (特别展示), 600 (标题/强调)
- **特性**: 具有连续字重轴的可变字体——允许微调中间字重,如 480.

### 等级

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| 显示首屏 | 相机平面变量 | 60px (3.75rem) | 600 | 1.00–1.10 (紧) | -1.5px | 最大影响,编辑 |
| 显示备选案文 | 相机平面变量 | 60px (3.75rem) | 480 | 1.00 (紧) | normal | 更轻的首屏变体 |
| 科 长 | 相机平面变量 | 48px (3.00rem) | 600 | 1.00 (紧) | -1.2px | 特性部分标题 |
| 副标题 | 相机平面变量 | 36px (2.25rem) | 600 | 1.10 (紧) | -0.9px | 分节 |
| 纸牌标题 | 相机平面变量 | 20px (1.25rem) | 400 | 1.25 (紧) | normal | 纸牌标题 |
| Body Large | Camera Plain Variable | 18px (1.13rem) | 400 | 1.38 | normal | Introductions |
| 体质 | 相机平面变量 | 16px (1.00rem) | 400 | 1.50 | normal | 标准读取文本 |
| 按钮 | 相机平面变量 | 16px (1.00rem) | 400 | 1.50 | normal | 按钮标签 |
| 按钮小 | 相机平面变量 | 14px (0.88rem) | 400 | 1.50 | normal | 压缩按钮 |
| 链接 | 相机平面变量 | 16px (1.00rem) | 400 | 1.50 | normal | 下划线装饰 |
| Link Small | Camera Plain Variable | 14px (0.88rem) | 400 | 1.50 | normal | Footer links |
| Caption | Camera Plain Variable | 14px (0.88rem) | 400 | 1.50 | normal | Metadata, small text |

### 原则
- **温暖的人文主义声音**: 相机平面变量 Lovable 稍微圆形的终端和有机曲线与大多数开发者工具所用的尖锐几何色的桑斯-塞里夫相对应。
- **Variable weight as design tool**: The font supports continuous weight values (e.g., 480), enabling nuanced hierarchy beyond standard weight stops. Weight 480 at 60px creates a display style that feels lighter than semibold but stronger than regular.
- **缩放**: 标题使用负数 letter-spacing (-0.9px 改为: -1.5px)用于编辑效果. 身体文本保持正常的跟踪,以方便阅读.
- **双重, 清晰的角色**: 400 (体/UI/链接/按钮)和 600 (头部/下划线) 狭重范围通过大小和间距产生层次,而不是字重变化.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 3. Typography Rules

### Font Family
- **Primary**: `Camera Plain Variable`, with fallbacks: `ui-sans-serif, system-ui`
- **Weight range**: 400 (body/reading), 480 (special display), 600 (headings/emphasis)
- **Feature**: Variable font with continuous weight axis — allows fine-tuned intermediary weights like 480.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Camera Plain Variable | 60px (3.75rem) | 600 | 1.00–1.10 (tight) | -1.5px | Maximum impact, editorial |
| Display Alt | Camera Plain Variable | 60px (3.75rem) | 480 | 1.00 (tight) | normal | Lighter hero variant |
| Section Heading | Camera Plain Variable | 48px (3.00rem) | 600 | 1.00 (tight) | -1.2px | Feature section titles |
| Sub-heading | Camera Plain Variable | 36px (2.25rem) | 600 | 1.10 (tight) | -0.9px | Sub-sections |
| Card Title | Camera Plain Variable | 20px (1.25rem) | 400 | 1.25 (tight) | normal | Card headings |
| Body Large | Camera Plain Variable | 18px (1.13rem) | 400 | 1.38 | normal | Introductions |
| Body | Camera Plain Variable | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text |
| Button | Camera Plain Variable | 16px (1.00rem) | 400 | 1.50 | normal | Button labels |
| Button Small | Camera Plain Variable | 14px (0.88rem) | 400 | 1.50 | normal | Compact buttons |
| Link | Camera Plain Variable | 16px (1.00rem) | 400 | 1.50 | normal | Underline decoration |
| Link Small | Camera Plain Variable | 14px (0.88rem) | 400 | 1.50 | normal | Footer links |
| Caption | Camera Plain Variable | 14px (0.88rem) | 400 | 1.50 | normal | Metadata, small text |

### Principles
- **Warm humanist voice**: Camera Plain Variable gives Lovable its approachable personality. The slightly rounded terminals and organic curves contrast with the sharp geometric sans-serifs used by most developer tools.
- **Variable weight as design tool**: The font supports continuous weight values (e.g., 480), enabling nuanced hierarchy beyond standard weight stops. Weight 480 at 60px creates a display style that feels lighter than semibold but stronger than regular.
- **Compression at scale**: Headlines use negative letter-spacing (-0.9px to -1.5px) for editorial impact. Body text stays at normal tracking for comfortable reading.
- **Two weights, clear roles**: 400 (body/UI/links/buttons) and 600 (headings/emphasis). The narrow weight range creates hierarchy through size and spacing, not weight variation.


<!-- source:end -->

</details>

## 4. 组件型号

### 按钮

**Primary Dark (Inset Shadow)**
- Background: `#1c1c1c`
- 文本 : `#fcfbf8`
- 铺垫: 8px 16px
- 半径 : 6px
- 阴影 : `rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px`
- 活动:不透明 0.8
- 重点: `rgba(0,0,0,0.1) 0px 4px 12px` 阴影
- 使用:主 CTA ("开始建筑","开始")

**鬼/ 大纲**
- Background: transparent
- 文本 : `#1c1c1c`
- 铺垫: 8px 16px
- 半径 : 6px
- 边框 : `1px solid rgba(28,28,28,0.4)`
- 活动:不透明 0.8
- 重点: `rgba(0,0,0,0.1) 0px 4px 12px` 阴影
- 使用:二级动作(“输入”、“文件”)

**凝胶表面**
- Background: `#f7f4ed`
- 文本 : `#1c1c1c`
- 铺垫: 8px 16px
- 半径 : 6px
- No border
- 活动:不透明 0.8
- 使用: 三级动作,工具栏按钮

**胶囊形/ 图标按钮**
- Background: `#f7f4ed`
- 文本 : `#1c1c1c`
- 半径 : 9999px (满药)
- 阴影: 与主暗相同内置模式
- Opacity: 0.5 (default), 0.8 (active)
- 使用: 附加动作, 计划模式切换, 语音记录

### 纸牌和集装箱
- Background: `#f7f4ed` (matches page)
- 边框 : `1px solid #eceae4`
- 半径 : 12px (标准), 16px (特写), 8px (契约)
- No box-shadow by default — borders define boundaries
- 图像卡 : `1px solid #eceae4` 与 12px 半径

### 输入表单( F)
- Background: `#f7f4ed`
- 文本 : `#1c1c1c`
- 边框 : `1px solid #eceae4`
- 半径 : 6px
- 焦点: 环蓝色( Q)`rgba(59,130,246,0.5)`) 大纲
- 占位符 : `#5f5f5d`

### 导航
- 奶油背景上清洁水平导航, fixed
- 标记/ 字签左对齐( Q)128.75 x 22px)
- 链接: 相机平面 14–16px 字重 400, `#1c1c1c` 文本
- 暗按钮 暗的阴影, 6px 半径
- 移动:汉堡菜单 6px 半径按钮
- 滚动时的下边框或无边框

### 链接
- 颜色 : `#1c1c1c`
- 装饰:下划线(默认)
- 强调色:主强调色(通过 CSS 变量) `hsl(var(--primary))`)
- 悬浮时没有颜色变化——装饰带有交互式信号

### 图像处理
- 显示大小写/ 组合图像 `1px solid #eceae4` 边框
- Consistent 12px border radius on all image containers
- 首屏内容后面的柔软梯度背景( 温暖多彩洗涤)
- 模板/项目展示的图片库样式演示文稿

### 区分成分

**AI 聊天输入**
- 带软边框的大型快速输入区
- 服用建议药 `#eceae4` 边框
- Voice recording / plan mode toggle buttons as pill shapes (9999px)
- 温暖,邀请输入区域——不临床

**模板图片库**
- 显示项目模板的卡片网格
- Each card: image + title, `1px solid #eceae4` border, 12px radius
- 弯曲:微妙的阴影或边界变暗
- 以标签为文本链接的分类

**数据栏**
- 大型计量标准: "0M+" 模式在 48px+ 字重 600
- Descriptive text below in muted gray
- 宽广间距的横向布局


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 4. Component Stylings

### Buttons

**Primary Dark (Inset Shadow)**
- Background: `#1c1c1c`
- Text: `#fcfbf8`
- Padding: 8px 16px
- Radius: 6px
- Shadow: `rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px`
- Active: opacity 0.8
- Focus: `rgba(0,0,0,0.1) 0px 4px 12px` shadow
- Use: Primary CTA ("Start Building", "Get Started")

**Ghost / Outline**
- Background: transparent
- Text: `#1c1c1c`
- Padding: 8px 16px
- Radius: 6px
- Border: `1px solid rgba(28,28,28,0.4)`
- Active: opacity 0.8
- Focus: `rgba(0,0,0,0.1) 0px 4px 12px` shadow
- Use: Secondary actions ("Log In", "Documentation")

**Cream Surface**
- Background: `#f7f4ed`
- Text: `#1c1c1c`
- Padding: 8px 16px
- Radius: 6px
- No border
- Active: opacity 0.8
- Use: Tertiary actions, toolbar buttons

**Pill / Icon Button**
- Background: `#f7f4ed`
- Text: `#1c1c1c`
- Radius: 9999px (full pill)
- Shadow: same inset pattern as primary dark
- Opacity: 0.5 (default), 0.8 (active)
- Use: Additional actions, plan mode toggle, voice recording

### Cards & Containers
- Background: `#f7f4ed` (matches page)
- Border: `1px solid #eceae4`
- Radius: 12px (standard), 16px (featured), 8px (compact)
- No box-shadow by default — borders define boundaries
- Image cards: `1px solid #eceae4` with 12px radius

### Inputs & Forms
- Background: `#f7f4ed`
- Text: `#1c1c1c`
- Border: `1px solid #eceae4`
- Radius: 6px
- Focus: ring blue (`rgba(59,130,246,0.5)`) outline
- Placeholder: `#5f5f5d`

### Navigation
- Clean horizontal nav on cream background, fixed
- Logo/wordmark left-aligned (128.75 x 22px)
- Links: Camera Plain 14–16px weight 400, `#1c1c1c` text
- CTA: dark button with inset shadow, 6px radius
- Mobile: hamburger menu with 6px radius button
- Subtle border or no border on scroll

### Links
- Color: `#1c1c1c`
- Decoration: underline (default)
- Hover: primary accent (via CSS variable `hsl(var(--primary))`)
- No color change on hover — decoration carries the interactive signal

### Image Treatment
- Showcase/portfolio images with `1px solid #eceae4` border
- Consistent 12px border radius on all image containers
- Soft gradient backgrounds behind hero content (warm multi-color wash)
- Gallery-style presentation for template/project showcases

### Distinctive Components

**AI Chat Input**
- Large prompt input area with soft borders
- Suggestion pills with `#eceae4` borders
- Voice recording / plan mode toggle buttons as pill shapes (9999px)
- Warm, inviting input area — not clinical

**Template Gallery**
- Card grid showing project templates
- Each card: image + title, `1px solid #eceae4` border, 12px radius
- Hover: subtle shadow or border darkening
- Category labels as text links

**Stats Bar**
- Large metrics: "0M+" pattern in 48px+ weight 600
- Descriptive text below in muted gray
- Horizontal layout with generous spacing


<!-- source:end -->

</details>

## 5. 版式原则

### 间距系统
- 基部单位: 8px
- 缩放 : 8px, 10px, 12px, 16px, 24px, 32px, 40px, 56px, 80px, 96px, 128px, 176px, 192px, 208px
- 规模在顶端慷慨扩张——各科使用. 80px–208px 编辑呼吸室的垂直间距

### 网格容器( C)
- 最大内容 width: approximately 1200px (centered)
- 首屏:以大型垂直贴板为中心单柱(96px+)
- 特性部分 : 2–3 列网格
- 带多栏链接布局的全宽页脚
- 显示带有居中卡网格的大小写区域

### 白空间哲学
- **编辑慷慨**: Lovable区段边界的间隔为粗略( ) 。80px–208px) 温暖的奶油背景使得这些外延人感觉舒适而不是空洞.
- **内容驱动节奏**: 紧凑的卡片内部间隔(12–24px)与宽的节间隙形成对比,形成一种读取节奏,在焦点内容和视觉休息之间替换.
- **Section separation**: Footer uses `1px solid #eceae4` border and 16px radius container. Sections defined by generous spacing rather than border lines.

### 圆角刻度
- Micro (4px): Small buttons, interactive elements
- 标准( 4)6px:按钮、输入、导航菜单
- 舒适( 舒适( 舒适) )8px: 压缩卡, divis
- 纸牌( $1)12px: 标准卡,图像容器,模板
- 集装箱(16px:大型集装箱,页脚部分
- 完全胶囊形( E)9999px:动作胶囊形,图标按钮,切换


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 8px, 10px, 12px, 16px, 24px, 32px, 40px, 56px, 80px, 96px, 128px, 176px, 192px, 208px
- The scale expands generously at the top end — sections use 80px–208px vertical spacing for editorial breathing room

### Grid & Container
- Max content width: approximately 1200px (centered)
- Hero: centered single-column with massive vertical padding (96px+)
- Feature sections: 2–3 column grids
- Full-width footer with multi-column link layout
- Showcase sections with centered card grids

### Whitespace Philosophy
- **Editorial generosity**: Lovable's spacing is lavish at section boundaries (80px–208px). The warm cream background makes these expanses feel cozy rather than empty.
- **Content-driven rhythm**: Tight internal spacing within cards (12–24px) contrasts with wide section gaps, creating a reading rhythm that alternates between focused content and visual rest.
- **Section separation**: Footer uses `1px solid #eceae4` border and 16px radius container. Sections defined by generous spacing rather than border lines.

### Border Radius Scale
- Micro (4px): Small buttons, interactive elements
- Standard (6px): Buttons, inputs, navigation menu
- Comfortable (8px): Compact cards, divs
- Card (12px): Standard cards, image containers, templates
- Container (16px): Large containers, footer sections
- Full Pill (9999px): Action pills, icon buttons, toggles


<!-- source:end -->

</details>

## 6。深度和高度

| 职等 | 治疗 | 使用 |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, cream background | Page surface, most content |
| 边框( 级别) 1) | `1px solid #eceae4` | 纸牌、图像、分隔符 |
| Inset (Level 2) | `rgba(255,255,255,0.2) 0px 0.5px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px` | Dark buttons, primary actions |
| 重点( 级别) 3) | `rgba(0,0,0,0.1) 0px 4px 12px` | 活跃/重点状态 |
| Ring (Accessibility) | `rgba(59,130,246,0.5)` 2px ring | Keyboard focus on inputs |

**影子哲学**: Lovable深度系统有意是浅薄的。系统不使用带有戏剧性的滴影的浮牌,而是依赖于温暖的边界(`#eceae4`)与奶油表面相对,以产生温柔的抑制. 唯一显著的阴影模式是暗按钮上的内置阴影——一种微妙的多层技术,即白色的突出线坐落在顶端边缘,而一个暗环和软滴则会操纵底部. 产生一种触觉,压在地上的感觉,而不是盘旋的上表面的感觉. 温暖的焦点阴影( 温暖的焦点阴影 )`rgba(0,0,0,0.1) 0px 4px 12px`)被故意扩散和大,产生柔软的光辉而不是尖锐的轮廓.

### 装饰性深度
- 首屏:在首屏身后柔软温暖的多颜色梯度洗涤(平板,橙色,蓝色)——大气,几乎看不见
- Footer: gradient background with warm tones transitioning to the bottom
- No harsh section dividers — spacing and background warmth handle transitions


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, cream background | Page surface, most content |
| Bordered (Level 1) | `1px solid #eceae4` | Cards, images, dividers |
| Inset (Level 2) | `rgba(255,255,255,0.2) 0px 0.5px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px` | Dark buttons, primary actions |
| Focus (Level 3) | `rgba(0,0,0,0.1) 0px 4px 12px` | Active/focus states |
| Ring (Accessibility) | `rgba(59,130,246,0.5)` 2px ring | Keyboard focus on inputs |

**Shadow Philosophy**: Lovable's depth system is intentionally shallow. Instead of floating cards with dramatic drop-shadows, the system relies on warm borders (`#eceae4`) against the cream surface to create gentle containment. The only notable shadow pattern is the inset shadow on dark buttons — a subtle multi-layer technique where a white highlight line sits at the top edge while a dark ring and soft drop handle the bottom. This creates a tactile, pressed-into-surface feeling rather than a hovering-above-surface feeling. The warm focus shadow (`rgba(0,0,0,0.1) 0px 4px 12px`) is deliberately diffused and large, creating a soft glow rather than a sharp outline.

### Decorative Depth
- Hero: soft, warm multi-color gradient wash (pinks, oranges, blues) behind hero — atmospheric, barely visible
- Footer: gradient background with warm tones transitioning to the bottom
- No harsh section dividers — spacing and background warmth handle transitions


<!-- source:end -->

</details>

## 7。 。 。 。 。 。

### 执行
- Use the warm cream background (`#f7f4ed`) as the page foundation — it's the brand's signature warmth
- Use Camera Plain Variable at display sizes with negative letter-spacing (-0.9px to -1.5px)
- 衍生出所有灰色 `#1c1c1c` 不同程度的不透明 肾脏统一
- 使用暗按钮上的内置阴影技术进行触觉深度
- 使用 `#eceae4` 边框,而不是用于卡片封装的阴影
- 保持字重系统窄度: 400 身体/UI, 用于 600 标题
- Use full-pill radius (9999px) only for action pills and icon buttons
- 应用不透明 0.8 用于反应触觉反馈的状态

### Don't
- Don't use pure white (`#ffffff`) as a page background — the cream is intentional
- Don't use heavy box-shadows for cards — borders are the containment mechanism
- Don't introduce saturated accent colors — the palette is intentionally warm-neutral
- Don't use weight 700 (bold) — 600 is the maximum weight in the system
- 不许申请 9999px 半径在长方形按钮上——丸是用于图标/动作切换的
- Don't use sharp focus outlines — the system uses soft shadow-based focus indicators
- Don't mix border styles — `#eceae4` for passive, `rgba(28,28,28,0.4)` for interactive
- Don't increase letter-spacing on headings — Camera Plain is designed to run tight at scale


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 7. Do's and Don'ts

### Do
- Use the warm cream background (`#f7f4ed`) as the page foundation — it's the brand's signature warmth
- Use Camera Plain Variable at display sizes with negative letter-spacing (-0.9px to -1.5px)
- Derive all grays from `#1c1c1c` at varying opacity levels for tonal unity
- Use the inset shadow technique on dark buttons for tactile depth
- Use `#eceae4` borders instead of shadows for card containment
- Keep the weight system narrow: 400 for body/UI, 600 for headings
- Use full-pill radius (9999px) only for action pills and icon buttons
- Apply opacity 0.8 on active states for responsive tactile feedback

### Don't
- Don't use pure white (`#ffffff`) as a page background — the cream is intentional
- Don't use heavy box-shadows for cards — borders are the containment mechanism
- Don't introduce saturated accent colors — the palette is intentionally warm-neutral
- Don't use weight 700 (bold) — 600 is the maximum weight in the system
- Don't apply 9999px radius on rectangular buttons — pills are for icon/action toggles
- Don't use sharp focus outlines — the system uses soft shadow-based focus indicators
- Don't mix border styles — `#eceae4` for passive, `rgba(28,28,28,0.4)` for interactive
- Don't increase letter-spacing on headings — Camera Plain is designed to run tight at scale


<!-- source:end -->

</details>

## 8. Responsive Behavior

### 断点
| 名称 | 宽度 | 密钥更改 |
|------|-------|-------------|
| 移动小 | <600px | 紧紧的单列, 减少垫板 |
| 手机 | 600–640px | 标准移动布局 |
| 平板电脑小 | 640–700px | 2- 栏杆开始 |
| 平板 | 700–768px | 扩大卡网格 |
| Desktop Small | 768–1024px | Multi-column layouts |
| 桌面 | 1024–1280px | 完整特性布局 |
| Large Desktop | 1280–1536px | Maximum content width, generous margins |

### 触控区域
- 按钮 : 8px 16px 垫( 舒适的触摸)
- 导航:各项目之间适当的间隔
- 胶囊形按钮 : 9999px 半径可创建大型的容易开发的目标
- 菜单切换 : 6px 带适当尺寸的半径按钮

### 折叠战略
- Hero: 60px → 48px → 36px headline scaling with proportional letter-spacing
- 导航:水平链接 = 汉堡菜单 768px
- 特性卡 : 3-栏目 – 2-栏 – 单栏叠叠
- 模板库:网格 ~ 堆叠的垂直卡片
- 立体栏:水平 ~ 堆叠垂直
- Footer: multi-column → stacked single column
- 区域间距 : 128px+ → 64px 移动

### 图像行为
- 维护模板截图 `1px solid #eceae4` 大小边框
- 12px 跨断点保存的边界半径
- 符合一致的图像图片库图像
- 移动式上首屏梯度软化/简化


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <600px | Tight single column, reduced padding |
| Mobile | 600–640px | Standard mobile layout |
| Tablet Small | 640–700px | 2-column grids begin |
| Tablet | 700–768px | Card grids expand |
| Desktop Small | 768–1024px | Multi-column layouts |
| Desktop | 1024–1280px | Full feature layout |
| Large Desktop | 1280–1536px | Maximum content width, generous margins |

### Touch Targets
- Buttons: 8px 16px padding (comfortable touch)
- Navigation: adequate spacing between items
- Pill buttons: 9999px radius creates large tap-friendly targets
- Menu toggle: 6px radius button with adequate sizing

### Collapsing Strategy
- Hero: 60px → 48px → 36px headline scaling with proportional letter-spacing
- Navigation: horizontal links → hamburger menu at 768px
- Feature cards: 3-column → 2-column → single column stacked
- Template gallery: grid → stacked vertical cards
- Stats bar: horizontal → stacked vertical
- Footer: multi-column → stacked single column
- Section spacing: 128px+ → 64px on mobile

### Image Behavior
- Template screenshots maintain `1px solid #eceae4` border at all sizes
- 12px border radius preserved across breakpoints
- Gallery images responsive with consistent aspect ratios
- Hero gradient softens/simplifies on mobile


<!-- source:end -->

</details>

## 9. Agent Prompt Guide

### 快速颜色引用
- 初级CTA:木炭(`#1c1c1c`)
- · 乳油(含焦糖)`#f7f4ed`)
- 标题文本:炭( 3)`#1c1c1c`)
- 文字: 静音灰色( Q)`#5f5f5d`)
- 边框 : `#eceae4` (被动), `rgba(28,28,28,0.4)` (互动)
- 重点: `rgba(0,0,0,0.1) 0px 4px 12px`
- 暗色上按钮文本 : `#fcfbf8`

### 示例组件提示
- "Create a hero section on cream background (#f7f4ed). Headline at 60px Camera Plain Variable weight 600, line-height 1.10, letter-spacing -1.5px, color #1c1c1c. Subtitle at 18px weight 400, line-height 1.38, color #5f5f5d. Dark CTA button (#1c1c1c bg, #fcfbf8 text, 6px radius, 8px 16px padding, inset shadow) and ghost button (transparent bg, 1px solid rgba(28,28,28,0.4) border, 6px radius)."
- "Design a card on cream (#f7f4ed) background. Border: 1px solid #eceae4. Radius 12px. No box-shadow. Title at 20px Camera Plain Variable weight 400, line-height 1.25, color #1c1c1c. Body at 14px weight 400, color #5f5f5d."
- "Build a template gallery: grid of cards with 12px radius, 1px solid #eceae4 border, cream backgrounds. Each card: image with 12px top radius, title below. Hover: subtle border darkening."
- "创造导航: sticky 奶油( 奶油) (#f7f4ed) 摄像头平原 16px 字重 400 链接, #1c1c1c 文本。暗的 CTA 按钮右侧与内置阴影对齐。移动:汉堡菜单与 6px 半径".
- "Design a stats section: large numbers at 48px Camera Plain weight 600, letter-spacing -1.2px, #1c1c1c. Labels below at 16px weight 400, #5f5f5d. Horizontal layout with 32px gap."

### 迭代指南
1. 总是使用奶油( Name`#f7f4ed`)作为基础——永远不纯白
2. 衍生灰色来自 `#1c1c1c` 透明度水平,而不是使用明显的六进制值
3. 使用 `#eceae4` 用于封隔的边框,而不是阴影
4. Letter-spacing 大小的天平 : -1.5px 时 间 60px, -1.2px 时 间 48px, -0.9px 时 间 36px,正常时间 16px
5. 重两重: 400 (除标题外的一切都包括在内) 600 (头)
6. 暗按钮上的内置阴影是签名细节——不要跳过它
7. 相机平面变数, 字重 480 仅用于特殊显示时刻

<details>
<summary>英文原文</summary>

<!-- source:body -->
## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Charcoal (`#1c1c1c`)
- Background: Cream (`#f7f4ed`)
- Heading text: Charcoal (`#1c1c1c`)
- Body text: Muted Gray (`#5f5f5d`)
- Border: `#eceae4` (passive), `rgba(28,28,28,0.4)` (interactive)
- Focus: `rgba(0,0,0,0.1) 0px 4px 12px`
- Button text on dark: `#fcfbf8`

### Example Component Prompts
- "Create a hero section on cream background (#f7f4ed). Headline at 60px Camera Plain Variable weight 600, line-height 1.10, letter-spacing -1.5px, color #1c1c1c. Subtitle at 18px weight 400, line-height 1.38, color #5f5f5d. Dark CTA button (#1c1c1c bg, #fcfbf8 text, 6px radius, 8px 16px padding, inset shadow) and ghost button (transparent bg, 1px solid rgba(28,28,28,0.4) border, 6px radius)."
- "Design a card on cream (#f7f4ed) background. Border: 1px solid #eceae4. Radius 12px. No box-shadow. Title at 20px Camera Plain Variable weight 400, line-height 1.25, color #1c1c1c. Body at 14px weight 400, color #5f5f5d."
- "Build a template gallery: grid of cards with 12px radius, 1px solid #eceae4 border, cream backgrounds. Each card: image with 12px top radius, title below. Hover: subtle border darkening."
- "Create navigation: sticky on cream (#f7f4ed). Camera Plain 16px weight 400 for links, #1c1c1c text. Dark CTA button right-aligned with inset shadow. Mobile: hamburger menu with 6px radius."
- "Design a stats section: large numbers at 48px Camera Plain weight 600, letter-spacing -1.2px, #1c1c1c. Labels below at 16px weight 400, #5f5f5d. Horizontal layout with 32px gap."

### Iteration Guide
1. Always use cream (`#f7f4ed`) as the base — never pure white
2. Derive grays from `#1c1c1c` at opacity levels rather than using distinct hex values
3. Use `#eceae4` borders for containment, not shadows
4. Letter-spacing scales with size: -1.5px at 60px, -1.2px at 48px, -0.9px at 36px, normal at 16px
5. Two weights: 400 (everything except headings) and 600 (headings)
6. The inset shadow on dark buttons is the signature detail — don't skip it
7. Camera Plain Variable at weight 480 is for special display moments only

<!-- source:end -->

</details>
