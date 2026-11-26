# Apple · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Apple's web presence is a masterclass in **reverent product photography framed by near-invisible UI**. Every page is a stack of edge-to-edge product "tiles" — alternating light and dark canvases, each centered on a hero headline, a one-line tagline, two tiny blue pill CTAs, and an impossibly crisp product render. Nothing competes with the product. Typography is confident but quiet; color is either pure white, an off-white parchment, or a near-black tile; interactive elements are a single, quiet blue.

Density is unusually low even by contemporary SaaS standards. Each tile occupies roughly one viewport, and there is no decorative chrome — no borders, no gradients, no decorative frames, no shadows on headlines. Elevation appears only when a product image rests on a surface (a single soft `rgba(0, 0, 0, 0.22) 3px 5px 30px` drop for visual weight). The result is a catalog that feels more like a museum gallery: the wall disappears and the artifact takes over.

Store and shop surfaces retain the same chassis but switch modes. The product configurator (iPhone 17 Pro, accessories grid) introduces a tight grid of white utility cards at `{rounded.lg}` (18px) radius with a thin border, paired with a persistent thin sub-nav strip. The environment page leans darker and more editorial. Across all five surfaces the typographic system, spacing rhythm, and the single blue accent are consistent — this is one design language expressed at different volumes.

**关键特征 :**
- 摄影-第一演示;UI退缩,使产品能说话.
- 换成全血砖块块:白色/parchment QQ近黑,颜色变化本身充当区块分割器.
- 单蓝色强调色( E)`{colors.primary}` — #0066cc) 搭载每个交互元素。没有第二个品牌颜色。
- Two button grammars: tiny blue pill CTAs (`{rounded.pill}`) and compact utility rects (`{rounded.sm}`).
- 使用 SF Pro Display 和 SF Pro Text。大字号标题采用负的 letter-spacing，呈现 Apple 标志性的紧凑字距。
- 只有在产品图像需要呼吸时才使用微声-整个系统中的完全一个滴影。
- 紧紧的双行导航: 瘦 `{component.global-nav}` + 产品专用 `{component.sub-nav-frosted}` 与持续的右配角初级CTA.
- Section rhythm across multiple pages: light hero → dark product tile → light utility tile → dark tile → parchment footer — a predictable pulse.


## 配色

> **Source pages analyzed:** homepage, environment, store, iPhone 17 Pro buy page, accessories index. The color system is identical across all five surfaces; only the surface-mode mix differs.

### 品牌和 强调色
- **蓝色行动** (`{colors.primary}` — #0066cc: 单一品牌级交互颜色,所有文本链接,所有蓝色丸CTA("更多学习","Buy"),以及焦点环根。这是 Apple'是静但通用的"点击我"信号。按态通过主动比例变换而不是六角变换转至稍暗的变体。
- **聚焦蓝** (`{colors.primary-focus}` — #0071e3:一个稍亮一点的蓝色行动兄弟,保留给键盘焦点环按键(`outline: 2px solid`).
- **Sky Link Blue** (`{colors.primary-on-dark}` — #2997ff): A brighter blue used on dark surfaces for in-copy links and inline callouts, where Action Blue would disappear against the tile background.

### 表面
- **纯白** (`{colors.canvas}` — #ffffff: 占优势的页面底色 内容,公用卡,存储牌,配置格.
- **纸质纸质** (`{colors.canvas-parchment}` — #f5f5f7: 签名 Apple 。用于转换光片、页脚区域以及存储工具区中的默认页布。与白色的区别足够大,可以创建节奏。
- **Pearl Button** (`{colors.surface-pearl}` — #fafafc): A near-white used as the fill for secondary "ghost" buttons — lighter than the parchment canvas so the button still reads as a button against `{colors.canvas-parchment}`.
- **近黑色砖瓦 1** (`{colors.surface-tile-1}` — #272729:主页产品网格上的主暗砖表面.
- **近黑色砖瓦 2** (`{colors.surface-tile-2}` — #2a2a2c:微步打火机——在暗砖直接坐落在地砖上下的地方使用 1 以创造最微弱的分离。
- **近黑色砖瓦 3** (`{colors.surface-tile-3}` — #252527:一个微步暗器——用于堆栈底部和嵌入式视频/游戏机帧.
- **纯黑色** (`{colors.surface-black}` — #000000: 预留真空——视频播放器背景,边缘对边缘摄影覆盖,全球导航栏背景.
- **半透明芯片灰色** (`{colors.surface-chip-translucent}` — #d2d2d7: 用于摄影的半透明灰色芯片的基六进制 circular 控制按钮。在生产中,应用于 ~64% α as `rgba(210, 210, 215, 0.64)`.

### 文本
- **近黑墨水( 近黑墨水)** (`{colors.ink}` — #1d1d1f:每条头条,每段身体的声音,以及暗的效用按钮的填充. 选择而非纯黑色来保持页面感觉摄影而不是打印.
- **体质** (`{colors.body}` — #1d1d1f: 与墨水相同的六分级- Apple 光表面所有文字都使用一个近黑音.
- **黑暗时的身体** (`{colors.body-on-dark}` — #ffffff:所有暗色瓷砖和全局导航栏上的文本.
- **已静音** (`{colors.body-muted}` — #cccccc: 黑砖上第二张,纯白的会太响。
- **墨水静音 80** (`{colors.ink-muted-80}` — #333333:白色珍珠扣子表面的体文字——略微软于纯黑色.
- **墨水静音 48** (`{colors.ink-muted-48}` — #7a7a7a: 已禁用按钮文本和法律 fine-print.

### Hairlines & Borders
- **Divider Soft** (`{colors.divider-soft}` — #f0f0f0): The "border" tone on secondary buttons — functions as a ring shadow rather than a hard line. In production, often applied as `rgba(0, 0, 0, 0.04)`.
- **Hairline** (`{colors.hairline}` — #e0e0e0): The 1px hairline border on store utility cards and configurator chips.

### 品牌渐变
**No decorative gradients.** Atmospheric depth on product photography (the iPhone 17 Pro camera plate, the Apple Watch bands, AirPods reflections) is inherent to the imagery, not a CSS gradient overlay. The environment page's hero uses photographic atmosphere (mountain vista at dawn) but no gradient tokens are defined. Apple is the rare luxury-brand site with zero gradient-based design tokens.


## 字体排版

### 字体家族
- **显示**: `SF Pro Display, system-ui, -apple-system, sans-serif` — Apple专有显示面, 优化大小 ≥ 19px。定义每个头条的声音。
- **体/UI 数据**: `SF Pro Text, system-ui, -apple-system, sans-serif` ——用于体型复制,标题,按钮,以及下文链接的文本优化变体. 20px.
- **打开类型特性**: `font-variant-numeric: numerator` 显示大小依赖于紧凑的跟踪而不是上下文的连接。

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 56px | 600 | 1.07 | -0.28px | 首屏头条;签名 "Apple 紧紧的"跟踪 |
| `{typography.display-lg}` | 40px | 600 | 1.10 | 0 | Tile headlines atop every product tile |
| `{typography.display-md}` | 34px | 600 | 1.47 | -0.374px | 科长(SF Pro Text 显示比例) |
| `{typography.lead}` | 28px | 400 | 1.14 | 0.196px | 产品瓦片副拷贝 |
| `{typography.lead-airy}` | 24px | 300 | 1.5 | 0 | 环境页牵头段落(稀重) 300) |
| `{typography.tagline}` | 21px | 600 | 1.19 | 0.231px | 底瓦标签线; sub-nav 类别名称 |
| `{typography.body-strong}` | 17px | 600 | 1.24 | -0.374px | 突出重点 |
| `{typography.body}` | 17px | 400 | 1.47 | -0.374px | 默认段落 |
| `{typography.dense-link}` | 17px | 400 | 2.41 | 0 | 脚脚 / 存储工具链接列表( 放松引导) |
| `{typography.caption}` | 14px | 400 | 1.43 | -0.224px | 次要标题, 按钮文本 |
| `{typography.caption-strong}` | 14px | 600 | 1.29 | -0.224px | 突出标题 |
| `{typography.button-large}` | 18px | 300 | 1.0 | 0 | 存储首屏 CTAs( 稀有字重) 300) |
| `{typography.button-utility}` | 14px | 400 | 1.29 | -0.224px | 工具/导航按钮标签 |
| `{typography.fine-print}` | 12px | 400 | 1.0 | -0.12px | Fine-print,页脚体 |
| `{typography.micro-legal}` | 10px | 400 | 1.3 | -0.08px | 微观法律免责声明者 |
| `{typography.nav-link}` | 12px | 400 | 1.0 | -0.12px | Global nav menu items |

### 原则

- **Negative letter-spacing at display sizes.** Every headline at 17px and up carries a slight tracking tighten (`-0.12 → -0.374px`). This produces the iconic "Apple tight" headline cadence. Never used at 12px or below.
- **复制件时间 17px,没有 16px.** Apple 打破 SaaS 公约,并将段落文本运行于 17px,额外的像素给页面一个不可模糊的"读而不扫描"的速度.
- **Weight 300 is real and rare.** Used deliberately on a handful of large-size reads (`{typography.button-large}` at 18px/300 and `{typography.lead-airy}` at 24px/300). It's not an accident — it's a light-atmosphere cue reserved for moments where the content should feel airy.
- **Weight 600, not 700, for headlines.** Apple's headlines sit at weight 600. Weight 700 is used sparingly for `{typography.tagline}` (21px) when a touch more assertion is needed.
- **Line-height is context-specific.** Display sizes use 1.07–1.19 (tight). Body uses 1.47. Utility link stacks in the footer/store use an unusually relaxed 2.41 (`{typography.dense-link}`). The 2.41 is not a bug — it's how the footer's dense link columns breathe.
- **字重 500 故意缺席。** 梯子是... 梯子是... 300 / 400 / 600 / 700。中量级读数总是使用 600.

### Note on Font Substitutes
SF Pro is Apple's proprietary system font. When building off-system:

- Use `system-ui, -apple-system, BlinkMacSystemFont` as the first stack entry — on macOS/iOS/Safari this resolves to the real SF Pro.
- For non-Apple platforms, **Inter** (Google Fonts, variable) is the closest open-source equivalent. Inter at weight 600 with `font-feature-settings: "ss03"` approximates SF Pro's rounded "a" character.
- Nudge `letter-spacing` down by `-0.01em` on display sizes to re-create the Apple tight feel; Inter's default tracking runs slightly wider than SF Pro.
- For body text, tighten line-height by `0.03` (from 1.47 → 1.44) when substituting Inter — Inter's taller x-height needs less leading.


## 布局

### 间距系统
- **Base unit:** 8px. Sub-base values (2, 4, 5, 6, 7) are used for tight typographic adjustments; structural layout snaps to 8/12/16/20/24.
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 17px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px.
- **垂直区 padding:** `{spacing.section}` (80px)在产品瓦片内;瓷砖堆叠边缘至边缘,与 0 间隙(颜色变化提供间断).
- **纸牌 padding:** `{spacing.lg}` (24px) 内电网卡。
- **按钮 padding:** 8–11px vertical, 15–22px horizontal.
- **Universal rhythm constants:** the 17px body line-height multiplier (~25px line) and 21px tagline size show up on every analyzed page.

### 网格容器( C)
- **最大内容 width:** ~980px on text-heavy sections (environment), ~1440px on product grids (store, accessories), full-bleed for product tiles (homepage).
- **Column patterns:** 3 to 5 column utility card grid on store/accessories; 2-column side-by-side tiles on homepage occasional sections; single-column centered stack on product tile heroes.
- **盖特斯:** 20–24px 介于电源网格中的卡片之间。

### 白空间哲学
Apple白空间是产品的脚踏板,每个瓦片至少要先用 64px 气流在头条和头条之上 48–64px 产品制造从未挤满;产品图像的最近内容至少是 40px 页脚是唯一能打破这个区域的地方,那里, Apple 故意使整个信息架构 清晰可见


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | No shadow, no border | Full-bleed tiles, global nav, footer, body sections |
| 软细边线 | 1px `rgba(0, 0, 0, 0.08)` 边框 | 实用卡, sub-nav 冰冻玻璃分隔器 |
| 后投时模糊 | `backdrop-filter: blur(N)` 纸质图案 80% | Sub-nav 和iPhone 购买浮动 sticky 栏 |
| 产品阴影 | `rgba(0, 0, 0, 0.22) 3px 5px 30px 0` | 产品使休眠在表面(系统中唯一的"阴影") |

**Shadow philosophy.** Apple uses **exactly one** drop-shadow, and it is applied to photographic product imagery — never to cards, never to buttons, never to text. Elevation in the UI comes from (a) surface-color change (light tile ↔ dark tile) and (b) backdrop-blur on sticky bars. The single shadow is about giving the product weight, not about UI hierarchy.

### 装饰性深度
- **大气图像** 环境页面(照片图象)上显示情绪;没有涉及CSS梯度。
- **边缘对边缘的瓦片交替** 创造节奏,没有边框或阴影——颜色变化本身就是分裂者.
- **Backdrop-filter 模糊** 打开 `{component.sub-nav-frosted}` 财务报告和已审计财务报表 `{component.floating-sticky-bar}` 创造出"浮在内容上"的效果,是功能性的,而不是装饰性的.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 满血产品瓦(无角圆形) |
| `{rounded.xs}` | 5px | 以微妙芯片( 稀有) 样式进行内置链接 |
| `{rounded.sm}` | 8px | 暗的功能按钮( Sign In, Bag), 内置卡片图像 |
| `{rounded.md}` | 11px | 白珍珠扣子胶囊 |
| `{rounded.lg}` | 18px | 存储公用卡、配件网格卡 |
| `{rounded.pill}` | 9999px | 蓝胶囊形CTA sub-nav 购买按钮、配置器选项芯片、搜索输入——签名 Apple 胶囊形 |
| `{rounded.full}` | 9999px / 50% | Circular 移动在摄影上的控制芯片 |

### 摄影几何
- **首屏图像**:满血, 21:9 或高点在主页上; 16:9 产品是真实的,常常在成为瓷砖背景的有色表面拍摄。
- **产品制造**:PNG/WebP 透明;休息在表面的瓦片上,并拾取系统阴影.
- **Accessory grid**: square 1:1 crops at `{rounded.lg}` (18px) radius, light neutral backgrounds, product centered with 20–40px internal padding.
- **首屏牌片中没有圆形图像** ——图像为全血矩形. 圆形(.`{rounded.sm}`, `{rounded.lg}`)只出现在内置卡片图像上.
- Lazy-loading via responsive `srcset` and `sizes` across all breakpoints; CDN-optimized WebP.


## 组件

### 顶端导航

**`global-nav`** — Persistent, ultra-thin black nav bar pinned to the top of every page. Background `{colors.surface-black}`, height 44px, text `{colors.on-dark}` in `{typography.nav-link}` (12px / 400 / -0.12px tracking). Links are quiet, spaced ~20px apart, running edge-to-edge across the top. Right-aligned cluster: Search, Bag icons — always visible. On mobile, collapses to hamburger at ~834px and the Apple logo centers.

**`sub-nav-frosted`** — Surface-specific nav that sticks below the global nav. Background `{colors.canvas-parchment}` at 80% opacity with backdrop-filter blur, creating a frosted-glass effect. Height 52px. Content on left: product category name ("iPhone", "Store", "Accessories") in `{typography.tagline}` (21px / 600). Content right: inline nav links in `{typography.button-utility}` (14px), ending in a persistent `{component.button-primary}` ("Buy") or a utility link.

### 按钮

**`button-primary`** - 签字 Apple 行动。 `{colors.primary}` (蓝色行动) #0066cc),文本(第1行), `{colors.on-primary}` 输入 `{typography.body}` (SF Pro Text 17px / 400),四舍五入 `{rounded.pill}` (全胶囊形——胶囊形),垫装 11px × 22px. 完全溢出半径是品牌动作信号.
- 活动状态 : `{component.button-primary-active}` — `transform: scale(0.95)` (全系统微观互动).
- 焦点状态 : `{component.button-primary-focus}` — 2px 固态 `{colors.primary-focus}` 大纲。

**`button-secondary-pill`** — Used as the second CTA when two blue pills appear together ("Learn more" / "Buy"). Background transparent, text `{colors.primary}`, 1px solid `{colors.primary}` border, rounded `{rounded.pill}`, padding 11px × 22px. Reads as a "ghost pill."

**`button-dark-utility`** — Global nav actions (Sign In, Bag, language selector). Background `{colors.ink}` (#1d1d1f), text `{colors.on-dark}` in `{typography.button-utility}` (14px / 400 / -0.224px tracking), rounded `{rounded.sm}` (8px), padding 8px × 15px. Active state shrinks via `transform: scale(0.95)`.

**`button-pearl-capsule`** — Product-card 二级按钮。背景 `{colors.surface-pearl}` (#fafafc),文本(第1行), `{colors.ink-muted-80}` 输入 `{typography.caption}` (14px), 3px 固态 `{colors.divider-soft}` 边框(作为软环而非可见线的作用),四舍五入 `{rounded.md}` (11px), 贴 8px × 14px.

**`button-store-hero`** 用于商店首屏表面的更大的初级CTA。同样动作蓝+纸张白色为 `{component.button-primary}`,但与 `{typography.button-large}` (18px / 300 - 注意难得的字重 300)和稍多点垫(14px × 28px曾经在商店落地时少用过

**`button-icon-circular`** - 浮在摄影上。 44 × 44px,背景情况 `{colors.surface-chip-translucent}` 时 间 ~64% α, 图标在 `{colors.ink}`,四舍五入 `{rounded.full}`. 用于旋转木马控制,关闭按钮,以及内映控制(产品图像缩略图在iPhone购买页面上).

**`text-link`** ——内置体链接于 `{colors.primary}` (行动蓝色),每个上下文下划线或非下划线。

**`text-link-on-dark`** —— 暗牌上内置体链接 `{colors.primary-on-dark}` (天空连线蓝色) #2997ff——行动蓝将消失,反对 `{colors.surface-tile-1}`.

### 纸牌和集装箱

**`product-tile-light`** — Full-bleed light tile. Background `{colors.canvas}` (white), text `{colors.ink}`, rounded `{rounded.none}` (0 — tiles touch edges), vertical padding `{spacing.section}` (80px). Centered stack: product name in `{typography.display-lg}` (40px / 600) → one-line tagline in `{typography.lead}` (28px / 400) → two `{component.button-primary}` CTAs ("Learn more" / "Buy") → product render resting on the surface with the system shadow.

**`product-tile-parchment`** — Same as `{component.product-tile-light}` but on `{colors.canvas-parchment}` (#f5f5f7). Used to break two consecutive white tiles.

**`product-tile-dark`** ——全血黑瓦,背景 `{colors.surface-tile-1}` (#272729),文本(第1行), `{colors.on-dark}`,四舍五入 `{rounded.none}`垂直编目 `{spacing.section}` (80px。与轻瓦片相同但内容堆栈 `{component.text-link-on-dark}` 用于内置复制和 `{component.button-primary}` (Action Blue仍然在暗面上工作),在主页产品网格上作为交替的暗带使用.

**`product-tile-dark-2`** — Variant on `{colors.surface-tile-2}` (#2a2a2c). Used where a dark tile sits directly above or below `{component.product-tile-dark}` to create the faintest separation through micro-step lightness change.

**`product-tile-dark-3`** - 备选案文 `{colors.surface-tile-3}` (#252527),在堆栈底部和嵌入式视频/游戏框中使用.

**`store-utility-card`** — Used in store grid and accessories grid. Background `{colors.canvas}` (white), 1px solid `{colors.hairline}` border, rounded `{rounded.lg}` (18px), padding `{spacing.lg}` (24px). Top: product image (1:1 crop with `{rounded.sm}` (8px) inner image radius). Below: product name in `{typography.body-strong}` (17px / 600), price in `{typography.body}` (17px / 400), and a `{component.text-link}` ("Buy" or "Learn more"). No shadow by default; product render itself carries the system product-shadow.

**`configurator-option-chip`** — Pill-shaped tappable cell used in the iPhone 17 Pro buy page. Background `{colors.canvas}`, text `{colors.ink}` in `{typography.caption}`, rounded `{rounded.pill}`, padding 12px × 16px. Contains a small product thumbnail + label + price delta. Arranged in a grid of 4–5 options per row.

**`configurator-option-chip-selected`** —— 选定状态。边境升级为 2px 固态 `{colors.primary-focus}`。形状相同,内容相同。

**`environment-quote-card`** — A photographic-canvas hero specific to the environment page. Dark photographic backdrop (mountain vista at dawn) with `{colors.surface-tile-1}` as the fallback color, centered white-text headline in `{typography.display-lg}` (40px), small green "Apple 2030" pictographic logo above the headline, single `{component.button-primary}` below. Padding `{spacing.section}` (80px).

**`floating-sticky-bar`** — Floats at the bottom of the viewport on the iPhone 17 Pro buy page during scroll. Background `{colors.canvas-parchment}` at 80% opacity with `backdrop-filter: blur(N)`, height 64px, padding 12px × 32px. Left: running price total in `{typography.body}`. Right: `{component.button-primary}` ("Add to Bag").

### 输入表单( F)

**`search-input`** — The accessories search input. Background `{colors.canvas}`, text `{colors.ink}` in `{typography.body}` (17px), 1px solid `rgba(0, 0, 0, 0.08)` border, rounded `{rounded.pill}` (full pill — search is also pill-shaped, matching the CTA grammar), padding 12px × 20px, height 44px. Leading icon: search glyph at 14px, muted tint.

错误和验证状态没有在分析的页面中浮出水面。

### Footer

**`footer`** — Background `{colors.canvas-parchment}` (#f5f5f7), text `{colors.ink-muted-80}`. Link columns in `{typography.dense-link}` (17px / 400 / 2.41 line-height — the relaxed leading is what makes the dense columns scannable). Column headings in `{typography.caption-strong}` (14px / 600). Legal row at the very bottom in `{typography.fine-print}` (12px / 400) with `{colors.ink-muted-48}` text. Vertical padding 64px.


## 设计建议与禁忌

### 执行
- 使用 `{colors.primary}` (蓝色行动) #0066cc),对于每一个交互元素——链接,丸CTA,焦点信号——和别无其他,单调强调色是不可谈判的.
- 设置标题 `{typography.hero-display}` 或 减 减 `{typography.display-lg}` 负数 letter-spacing (`-0.28 → -0.374px`) 获得签名 "Apple 紧紧的"卡登斯。
- 运行复制体 。 `{typography.body}` (17px / 400 / 1.47 / -0.374px)——没有 16px. 附加像素定义了品牌的读取速度.
- 候补 `{component.product-tile-light}` (或纸条)和 `{component.product-tile-dark}` 用于全血节奏。颜色变化是分隔符。
- 准备金 `{rounded.pill}` 用于主蓝CTA和任何其它应读作"动作"的元素(配置芯片,搜索输入, sticky 。 。 。
- 应用单一产品阴影( E)`rgba(0, 0, 0, 0.22) 3px 5px 30px`仅仅为了产品而使休息在表面——从不在牌、按钮或文字上。
- Use `transform: scale(0.95)` as the active/press state on every button — it's the system-wide micro-interaction.
- 保持全局导航 `{colors.surface-black}` (真黑)——这是大部分页上唯一出现纯黑的地方.

### Don't
- Don't introduce a second accent color; every "click me" signal is `{colors.primary}` (Action Blue).
- Don't add shadows to cards, buttons, or text — shadow is reserved for product imagery.
- Don't use gradients as decorative backgrounds; atmosphere comes from photography.
- Don't set body copy at weight 500 — Apple's ladder is 300 / 400 / 600 / 700, with 500 deliberately absent. Body is always 400; strong inline is 600; display is 600.
- Don't round full-bleed tiles — tiles are rectangular and edge-to-edge; the color change is the divider.
- Don't tighten line-height below 1.47 for body copy — the editorial leading is part of the brand.
- Don't mix radii grammars — use `{rounded.sm}` for compact utility, `{rounded.lg}` for utility cards, `{rounded.pill}` for pills, and nothing in between (except the rare `{rounded.md}` Pearl Button).
- Don't use `{colors.primary-on-dark}` (Sky Link Blue) on light surfaces — it's the dark-tile-only variant. Action Blue is for light surfaces.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Small phone | ≤ 419px | Single-column tiles; sub-nav collapses to category name + primary CTA only; hero typography drops to 28px |
| 电话 | 420–640px | 单柱堆栈;产品使比例尺变为 80% 瓦宽; 首屏 h1 滴入数 34px |
| Large phone | 641–735px | Tiles transition to tighter padding (48px vertical vs 80px); fine-print wraps |
| Tablet portrait | 736–833px | Global nav collapses to hamburger; sub-nav hides category chips, keeps primary CTA |
| Tablet landscape | 834–1023px | Global nav returns fully expanded; 3-column utility grids become 2-column |
| Small desktop | 1024–1068px | Product tiles use 2/3 width with margin gutters; hero h1 stays at 40px |
| 桌面 | 1069–1440px | 完全布局; 4–5 列存储网格; 1440px 内容最大 |
| 宽桌面 | ≥ 1441px | 内容锁定于 1440px,边距吸收额外宽度 |

结构断点对物剂很重要: 1440px (内容锁定), 1068px (小桌面), 833px (表型景观切换), 734px (表画像), 640px (电话) 480px (小电话).

### 触控区域
- 最小值 44 × 44px. `{component.button-primary}` 土地在 ~44 × 100px (全溢半径使得可见的命中区比标签暗示的更慷慨).
- `{component.button-icon-circular}` 完全就是这个意思 44 × 44px.
- Global nav utility links are smaller (~32 × 80px) — they deliberately sit at a tighter target because they're precision desktop actions, and the mobile hamburger replaces them at ≤ 833px.

### 折叠战略
- **Global nav**: full horizontal link row on desktop → collapses to Apple logo + hamburger + bag icon at 834px and below.
- **Sub-nav**: category name + inline links + primary CTA → category name + primary CTA only at mobile; inline links move into a hamburger tray.
- **Product tiles**: stack from 2-column to 1-column at 834px; vertical padding tightens from 80px → 48px at small-phone.
- **通用网格** (商店,配件): 5- 科尔 - 4-col( 双关)1440px) → 3-col( 双关)1068px) → 2-col( 双关)834px) → 1-col( 双关)640px).
- **Hero typography**: `{typography.hero-display}` (56px) → `{typography.display-lg}` (40px) at 1068px → 34px at 640px → 28px at 419px.

### 图像行为
- All product imagery uses responsive `srcset` with breakpoint-matched crops.
- 首屏摄影可以在移动时切换艺术方向(例如,环境页的远景作物在移动上比高,设定对象不同).
- 产品使这些产品得以维持 1:1 或 减 减 4:3 跨断点的大小比;只有比例变化。
- 懒惰负载是默认的;上面的首屏负载是急切的.


## 迭代指南

1. 一次聚焦一个组件。直接引用其 YAML 密钥( Q)`{component.product-tile-dark}`, `{component.search-input}`).
2. 现有组成部分的备选案文(第2款)`-active`, `-focus`, `-2`, `-3`)作为单独的条目在 `components:`.
3. 使用 `{token.refs}` 到处都是,从不内含六分法。
4. 文档永远不要徘徊。 默认和主动状态/ 已显示状态 。
5. 显示标题保留 SF Pro Display 600 负数 letter-spacing。身体停留状态 SF Pro Text 400 时 间 17px。边界是不可突破的。
6. 单滴阴影( T)`rgba(0, 0, 0, 0.22) 3px 5px 30px`)只保留用于产品摄影.
7. When in doubt about emphasis: alternate surface (light → dark tile) before adding chrome.


## 已知缺口

- 表格验证和错误状态没有在分析的页面上浮出;只有中性搜索输入被记录下来。
- The homepage's embedded video/player frame uses `{colors.surface-black}`; interior player controls are not documented (they're a platform widget, not a web-design token).
- Some component imagery is dynamic (rotating product hero) and its specific copy varies per surface — component specs name the structure, not the rotating content.
- 储存和配件通用卡的暗模对等器没有出现在分析的页面上;记录的系统是白天/光线支配变体 Apple 默认的船舶。
- 大气摄影(Environmental page mounta vista)是一种内容资产,而不是设计标志;文件记载 `{component.environment-quote-card}` 仅描述结构表面。
- 准确 backdrop-filter 模糊半径在 `{component.sub-nav-frosted}` 财务报告和已审计财务报表 `{component.floating-sticky-bar}` 依赖平台; 生产 CSS 用途 `saturate(180%) blur(20px)` 以作为典型的基线,但价值并没有正式化作为象征.

## 设计词元原值

A photography-first interface that turns marketing into a museum gallery. Edge-to-edge product tiles alternate light and dark canvases, framed by SF Pro Display headlines with negative letter-spacing and a single Action Blue (#0066cc) interactive color. UI chrome recedes so the product can speak — no decorative gradients, no shadows on chrome, only the one signature drop-shadow under product imagery resting on a surface.

```yaml
---
version: alpha
name: Apple-design-analysis
description: A photography-first interface that turns marketing into a museum gallery. Edge-to-edge product tiles alternate light and dark canvases, framed by SF Pro Display headlines with negative letter-spacing and a single Action Blue (#0066cc) interactive color. UI chrome recedes so the product can speak — no decorative gradients, no shadows on chrome, only the one signature drop-shadow under product imagery resting on a surface.

colors:
  primary: "#0066cc"
  primary-focus: "#0071e3"
  primary-on-dark: "#2997ff"
  ink: "#1d1d1f"
  body: "#1d1d1f"
  body-on-dark: "#ffffff"
  body-muted: "#cccccc"
  ink-muted-80: "#333333"
  ink-muted-48: "#7a7a7a"
  divider-soft: "#f0f0f0"
  hairline: "#e0e0e0"
  canvas: "#ffffff"
  canvas-parchment: "#f5f5f7"
  surface-pearl: "#fafafc"
  surface-tile-1: "#272729"
  surface-tile-2: "#2a2a2c"
  surface-tile-3: "#252527"
  surface-black: "#000000"
  surface-chip-translucent: "#d2d2d7"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

typography:
  hero-display:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: -0.28px
  display-lg:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0
  display-md:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 34px
    fontWeight: 600
    lineHeight: 1.47
    letterSpacing: -0.374px
  lead:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: 0.196px
  lead-airy:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  tagline:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 21px
    fontWeight: 600
    lineHeight: 1.19
    letterSpacing: 0.231px
  body-strong:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.24
    letterSpacing: -0.374px
  body:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: -0.374px
  dense-link:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 2.41
    letterSpacing: 0
  caption:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: -0.224px
  caption-strong:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: -0.224px
  button-large:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: 0
  button-utility:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: -0.224px
  fine-print:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.12px
  micro-legal:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.08px
  nav-link:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.12px

rounded:
  none: 0px
  xs: 5px
  sm: 8px
  md: 11px
  lg: 18px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 17px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 11px 22px
  button-primary-focus:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-primary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-secondary-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 11px 22px
  button-dark-utility:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-utility}"
    rounded: "{rounded.sm}"
    padding: 8px 15px
  button-pearl-capsule:
    backgroundColor: "{colors.surface-pearl}"
    textColor: "{colors.ink-muted-80}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  button-store-hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-large}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-icon-circular:
    backgroundColor: "{colors.surface-chip-translucent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 44px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  text-link-on-dark:
    backgroundColor: transparent
    textColor: "{colors.primary-on-dark}"
    typography: "{typography.body}"
  global-nav:
    backgroundColor: "{colors.surface-black}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 44px
  sub-nav-frosted:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.tagline}"
    height: 52px
  product-tile-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  product-tile-parchment:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  product-tile-dark:
    backgroundColor: "{colors.surface-tile-1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  product-tile-dark-2:
    backgroundColor: "{colors.surface-tile-2}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
  product-tile-dark-3:
    backgroundColor: "{colors.surface-tile-3}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
  store-utility-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.lg}"
    padding: 24px
  configurator-option-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 12px 16px
  configurator-option-chip-selected:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  search-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 44px
  floating-sticky-bar:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    height: 64px
    padding: 12px 32px
  environment-quote-card:
    backgroundColor: "{colors.surface-tile-1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  footer:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink-muted-80}"
    typography: "{typography.fine-print}"
    padding: 64px
---
```
