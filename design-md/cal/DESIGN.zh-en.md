# Cal.com 设计规范 · DESIGN.md

根据同目录的 [英文原文](DESIGN.md) 编排。词元键和值在文末完整列出，中英文正文在每个章节内对照。译文保留原始设计分析的判断和采集范围。

## 概览｜Overview

### 中文

Cal.com 的营销页面采用干净、亲切的现代 SaaS 风格。白色画布 `{colors.canvas}`（#ffffff）配近黑色主要行动按钮 `{colors.primary}`（#111111），标题使用定制的 **Cal Sans**，浅灰色卡片 `{colors.surface-card}`（#f5f5f5）直接展示产品界面片段。每个区块层次明确、留白充足，并聚焦于一个主要操作。

**Cal Sans** 是略收紧的几何字体，用于 h1、h2、h3 和首屏标题，字重固定为 600，随字号使用 −0.5px 至 −2px 的字距。**Inter** 用于正文、按钮、导航和说明文字。日历、小型预约表单、自动化流程图和集成面板直接嵌入展示卡片，让访客看见缩小后的真实产品界面。长页面以近黑色页脚 `{colors.surface-dark}`（#101010）收尾，上方保持白底和浅灰卡片。

- 主要行动按钮使用近黑底色、8px 圆角和 600 字重。展示标题在需要替代字体时可用 Inter 600。
- 功能卡片、推荐语卡片及普通定价卡片使用浅灰或白色表面。推荐定价卡片使用深色表面。
- 胶囊形导航容器 `{component.nav-pill-group}` 把相关导航分段放在一起，例如不同产品模式。
- 推荐语和团队列表使用直径 36px 的正圆头像。
- 页脚为 #101010，次级文字为 #a1a1aa。主要区块间距为 96px。
- 按钮和输入框使用 `{rounded.md}`（8px），内容卡片使用 `{rounded.lg}`（12px），首屏产品预览容器使用 `{rounded.xl}`（16px）。导航组和徽标使用 `{rounded.pill}`，头像和图标按钮使用 `{rounded.full}`。

<details>
<summary>English · 英文原文</summary>

Cal.com's marketing surface is a clean, friendly modern-SaaS interface — white canvas (`{colors.canvas}` — #ffffff) with black primary CTAs (`{colors.primary}` — #111111), custom **Cal Sans** display typography, and `{colors.surface-card}` (#f5f5f5) light-gray cards holding product UI fragments. The system reads as confidently engineered without trying to impress — every band has clear hierarchy, generous whitespace, and a single primary action.

Type voice splits cleanly into two roles: **Cal Sans** (the brand's custom geometric display face — used for h1, h2, h3, and hero headlines) and **Inter** (used for everything else — body, buttons, nav, captions). Cal Sans uses weight 600 with negative letter-spacing (-0.5px to -2px depending on size) — it feels modern, slightly condensed, distinctly Cal.com.

Component voltage comes from **product UI fragments shown directly inside cards** — calendar widgets, scheduling forms, automation diagrams, integration tiles. Cal.com doesn't paint marketing illustrations of the product; it shows the actual product chrome at small scale embedded in the marketing flow.

The footer flips to `{colors.surface-dark}` (#101010) — a deep near-black that visually closes every long-scroll page. The footer is the only dark surface in the system; everything above stays white-with-light-gray-cards.

**Key Characteristics:**
- White canvas with black primary CTA (`{colors.primary}` — #111111). Buttons are `{rounded.md}` (8px) with confident weight-600 labels. Standard friendly-SaaS button.
- Custom `Cal Sans` display typeface for headlines (substituted with Inter weight 600 here). Negative letter-spacing on display sizes — geometric, precise, slightly condensed.
- Light-gray card surfaces (`{colors.surface-card}` — #f5f5f5) for feature cards, testimonials, and pricing tiers (non-featured). The featured pricing tier flips to `{colors.surface-dark}` (the only dark card on light pages).
- Product UI fragments embedded directly in cards — Cal.com shows real schedule pickers, calendar widgets, integration grids inside its marketing cards. Brand voltage from real product chrome at small scale.
- Nav-pill-group (`{component.nav-pill-group}`) — a small pill-radius wrapper around grouped nav segments (e.g., the sub-nav switcher between product views). The pill wrapper is one of the system's signature interactive components.
- Avatars are circular (`{rounded.full}`), 36px diameter, used in testimonial rows and team-listing surfaces.
- Footer is dark navy (`{colors.surface-dark}` — #101010) with light text (`{colors.on-dark-soft}` — #a1a1aa). The dark footer closes every page even though the body above is white.
- Spacing rhythm is `{spacing.section}` (96px) between major bands — tight enough to feel modern-SaaS but generous enough to breathe.
- Border radius is hierarchical: `{rounded.md}` (8px) for buttons + inputs, `{rounded.lg}` (12px) for content cards, `{rounded.xl}` (16px) for the hero app-mockup container, `{rounded.pill}` for nav-pill-group + badges, `{rounded.full}` for avatars + icon buttons.

</details>

## 颜色｜Colors

### 中文

### 品牌与强调

- `{colors.primary}`（#111111）用于主要行动按钮及 h1/h2 展示标题，按下使用 `{colors.primary-active}`（#242424）。
- `{colors.brand-accent}`（#3b82f6）少量用于行内链接或客户故事标记。
- `{colors.badge-orange}`（#fb923c）、`{colors.badge-pink}`（#ec4899）、`{colors.badge-violet}`（#8b5cf6）和 `{colors.badge-emerald}`（#34d399）用于分类标签、头像底色及产品界面的局部点缀。

### 表面与边框

| 词元 | 色值 | 用途 |
| --- | --- | --- |
| `{colors.canvas}` | #ffffff | 默认页面底色 |
| `{colors.surface-soft}` | #f8f9fa | 胶囊导航背景和很浅的分区 |
| `{colors.surface-card}` | #f5f5f5 | 功能卡、推荐语、徽标和默认头像背景 |
| `{colors.surface-strong}` | #e5e7eb | 细边框的替代色和禁用按钮背景 |
| `{colors.surface-dark}` | #101010 | 页脚和推荐定价卡 |
| `{colors.surface-dark-elevated}` | #1a1a1a | 深色页脚或推荐定价卡里的嵌套卡片 |
| `{colors.hairline}` | #e5e7eb | 输入框、表格和部分卡片的 1px 边框 |
| `{colors.hairline-soft}` | #f3f4f6 | 同为白底的区块之间的细分隔线 |

### 文字与语义

- `{colors.ink}`（#111111）用于标题和主要文字，`{colors.body}`（#374151）用于正文。
- `{colors.muted}`（#6b7280）用于副标题、面包屑和页脚正文。较弱的 `{colors.muted-soft}`（#898989）用于图注、小字和版权行。
- `{colors.on-primary}`、`{colors.on-dark}`（均为 #ffffff）用于主要按钮和深色页脚上的文字。页脚链接可用较柔和的 `{colors.on-dark-soft}`（#a1a1aa）。
- `{colors.success}`（#10b981）用于确认反馈和成功标记，`{colors.warning}`（#f59e0b）用于提醒，`{colors.error}`（#ef4444）用于校验错误。

<details>
<summary>English · 英文原文</summary>

### Brand & Accent
- **Primary** (`{colors.primary}` — #111111): The dominant action color. All primary CTAs, h1/h2 display type. Press state shifts to `{colors.primary-active}` (#242424).
- **Brand Accent** (`{colors.brand-accent}` — #3b82f6): Used sparely on inline links and on a small badge / "Customer story" highlight. Cal.com is a near-monochrome brand — the blue appears rarely.
- **Badge Pastels** — A small pastel set for category badges and avatar fills: `{colors.badge-orange}` (#fb923c), `{colors.badge-pink}` (#ec4899), `{colors.badge-violet}` (#8b5cf6), `{colors.badge-emerald}` (#34d399). These appear on tag pills and small accent moments inside product UI fragments — never on hero CTAs.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #f8f9fa): Nav-pill-group background, very-soft section dividers.
- **Surface Card** (`{colors.surface-card}` — #f5f5f5): Feature cards, testimonial cards, badge pills, default avatar fills.
- **Surface Strong** (`{colors.surface-strong}` — #e5e7eb): Hairline border alternative; disabled button background.
- **Surface Dark** (`{colors.surface-dark}` — #101010): The footer background — the only dark surface on every page. Also used for the featured pricing tier card.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #1a1a1a): Used for nested cards inside the dark footer or featured pricing card.
- **Hairline** (`{colors.hairline}` — #e5e7eb): The 1px border tone on light surfaces. Used on input borders, table dividers, content card outlines (sometimes).
- **Hairline Soft** (`{colors.hairline-soft}` — #f3f4f6): A barely-visible divider used between sections that share the white canvas.

### Text
- **Ink** (`{colors.ink}` — #111111): All headlines and primary text.
- **Body** (`{colors.body}` — #374151): Default running-text color.
- **Muted** (`{colors.muted}` — #6b7280): Secondary text — sub-headings, breadcrumbs, footer body.
- **Muted Soft** (`{colors.muted-soft}` — #898989): Tertiary text — captions, fine-print, copyright lines.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on primary buttons and dark footer.
- **On Dark Soft** (`{colors.on-dark-soft}` — #a1a1aa): Footer body text — slightly muted white for the link rows.

### Semantic
- **Success** (`{colors.success}` — #10b981): Confirmation states, success badges in product UI.
- **Warning** (`{colors.warning}` — #f59e0b): Warning callouts.
- **Error** (`{colors.error}` — #ef4444): Validation errors.

</details>

## 字体｜Typography

### 中文

**Cal Sans** 用于品牌字样和展示标题，字重 600，字距 −0.5 至 −2px。**Inter** 用于正文、控件、导航和说明文字，字重 400–600，字距一般为 0。系统字体回退序列为 `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`。代码词元引用 JetBrains Mono。

| 词元 | 字号 | 字重 | 行高 | 字距 | 用途 |
| --- | --- | --- | --- | --- | --- |
| `display-xl` | 64px | 600 | 1.05 | −2px | 首页 h1 |
| `display-lg` | 48px | 600 | 1.1 | −1.5px | 主要区块标题 |
| `display-md` | 36px | 600 | 1.15 | −1px | 子区块和卡片标题 |
| `display-sm` | 28px | 600 | 1.2 | −0.5px | 行动区标题和定价金额 |
| `title-lg` | 22px | 600 | 1.3 | −0.3px | 套餐名称 |
| `title-md` | 18px | 600 | 1.4 | 0 | 功能卡标题和介绍 |
| `title-sm` | 16px | 600 | 1.4 | 0 | 小卡片和列表标题 |
| `body-md` | 16px | 400 | 1.5 | 0 | 默认正文 |
| `body-sm` | 14px | 400 | 1.5 | 0 | 页脚正文和小字 |
| `caption` | 13px | 500 | 1.4 | 0 | 徽标和图片说明 |
| `code` | 14px | 400 | 1.5 | 0 | 代码与 API 示例 |
| `button` | 14px | 600 | 1.0 | 0 | 标准按钮标签 |
| `nav-link` | 14px | 500 | 1.4 | 0 | 顶部导航 |

展示标题统一使用 Cal Sans 600 与负字距。正文使用 Inter。Cal Sans 不可用时，可以使用字重 600、字距 −0.04em 的 Inter，也可用 Manrope 700 近似替代。

<details>
<summary>English · 英文原文</summary>

### Font Family
The system runs **Cal Sans** for display + brand wordmark and **Inter** for everything else. Cal Sans is Cal.com's custom geometric display typeface — slightly condensed, weight 600, negative letter-spacing. Inter handles body, buttons, navigation, captions, and tabular code blocks. The fallback stack walks `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for both families.

The split is functional:
- Cal Sans (display, 600 weight, -0.5 to -2px tracking) — h1, h2, h3
- Inter (body + UI, 400-600 weight, 0 letter-spacing) — paragraphs, labels, buttons, nav

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 1.05 | -2px | Homepage h1 ("The better way to schedule your meetings") — Cal Sans |
| `{typography.display-lg}` | 48px | 600 | 1.1 | -1.5px | Section heads ("Your all-purpose scheduling app") — Cal Sans |
| `{typography.display-md}` | 36px | 600 | 1.15 | -1px | Sub-section heads, card titles — Cal Sans |
| `{typography.display-sm}` | 28px | 600 | 1.2 | -0.5px | CTA-band heads, pricing tier prices — Cal Sans |
| `{typography.title-lg}` | 22px | 600 | 1.3 | -0.3px | Pricing plan names — Inter |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles, intro paragraphs |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Small card titles, list labels |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions |
| `{typography.code}` | 14px | 400 | 1.5 | 0 | Code snippets, API examples — JetBrains Mono |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Standard button labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles
Cal Sans is the brand voice — every display headline uses it. Inter handles the supporting type. The boundary is strict: never put body copy in Cal Sans, never put a display headline in Inter. Cal Sans without negative letter-spacing reads as off-brand — the -0.5 to -2px tracking is part of the voice.

Display weight stays at 600 across all sizes — never 700, never 500. The middle weight is what makes Cal Sans feel modern and confident without becoming bombastic.

### Note on Font Substitutes
If Cal Sans is unavailable, **Inter** at weight 600 with -0.04em letter-spacing is a usable approximation. The geometric character of Cal Sans differs from Inter's humanist forms, but the substitution preserves the weight + tracking signature. **Manrope** at weight 700 is another close alternative.

</details>

## 布局与间距｜Layout

### 中文

- 以 4px 为基础单位。间距依次为 `xxs` 4px、`xs` 8px、`sm` 12px、`md` 16px、`lg` 24px、`xl` 32px、`xxl` 48px、`section` 96px。
- 区块统一采用 96px 的纵向间距。功能和定价卡片内边距 32px，推荐语和产品预览卡片为 24px。三列卡片的间隙为 24px，页脚列内间距为 16px。
- 内容居中，最大宽度约 1200px，使用 12 列网格。首屏常按 7 : 5 切分，标题在左、产品预览在右。
- 功能卡片在桌面、平板、手机上分别为 3、2、1 列，定价卡片分别为 4、2、1 列，页脚为 4、2、1 列。
- 保持留白，每个区块围绕标题与支撑卡片组织，让读者能快速扫读。

<details>
<summary>English · 英文原文</summary>

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) — the universal vertical rhythm between editorial bands.
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards and pricing tier cards; `{spacing.lg}` (24px) for testimonial and product-mockup cards.
- **Gutters:** `{spacing.lg}` (24px) between cards in 3-up grids; `{spacing.md}` (16px) inside footer columns.

### Grid & Container
- **Max content width:** ~1200px centered on marketing pages.
- **Editorial body:** Single 12-column grid; hero band often uses 7/5 split (h1 left, app mockup card right).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Pricing grid:** 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Footer:** 4-column link list at desktop, wrapping to 2-up at tablet, 1-up at mobile.

### Whitespace Philosophy
Cal.com uses generous but not excessive whitespace — section padding sits at 96px (modern-SaaS standard), and card internal padding stays at 32px. The rhythm is calibrated for fast scanning: every band has a single h1 + h2 + supporting cards, never densely packed lists. The result reads as confident-not-shouting.

</details>

## 层次与阴影｜Elevation & Depth

### 中文

| 层次 | 表现 | 用途 |
| --- | --- | --- |
| 平面 | 无阴影、无边框 | 正文区块、顶部导航、首屏 |
| 细边框 | 1px `{colors.hairline}` | 输入框、表格分隔线和部分卡片 |
| 卡片表面 | `{colors.surface-card}`，无阴影 | 功能卡片、推荐语 |
| 轻阴影 | `0 1px 2px rgba(0,0,0,0.05)` 或 `0 4px 12px rgba(0,0,0,0.08)` | 定价卡片和抬高状态 |
| 推荐定价 | 使用深色表面形成对比 | 推荐套餐 |

使用浅阴影和色块对比塑造层次，避免厚重投影、拟态和玻璃效果。嵌入的日历或其他产品组件保留自身内部阴影。推荐语头像可用柔和色底提供局部点缀。

<details>
<summary>English · 英文原文</summary>

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, table dividers, occasionally on cards |
| Card surface | `{colors.surface-card}` background — no shadow | Feature cards, testimonials |
| Subtle drop shadow | Faint shadow at low alpha | Pricing tier cards, hover-elevated states (the system uses `0 1px 2px rgba(0,0,0,0.05)` and `0 4px 12px rgba(0,0,0,0.08)`) |
| Featured tier | `{colors.surface-dark}` background, no shadow needed | The featured pricing tier inverts to dark surface — color contrast does the elevation work |

The elevation philosophy is **soft and modern** — small drop shadows on elevated cards, color-block contrast for emphasis. No heavy shadows, no neumorphism, no glassmorphism.

### Decorative Depth
- Calendar widgets and product UI fragments embedded inside marketing cards carry their own internal shadows from the product UI itself — these are not system tokens, they're product chrome shown as content.
- Avatar circles in testimonial sections sometimes carry pastel fill colors (`{colors.badge-orange}`, `{colors.badge-pink}`, etc.) — adds a small chromatic flourish without breaking the monochrome brand voice.

</details>

## 形状与圆角｜Shapes

### 中文

| 词元 | 数值 | 用途 |
| --- | --- | --- |
| `{rounded.xs}` | 4px | 局部徽标装饰 |
| `{rounded.sm}` | 6px | 小型行内按钮、下拉项 |
| `{rounded.md}` | 8px | 按钮、输入框、分类标签页 |
| `{rounded.lg}` | 12px | 功能、推荐语、定价等内容卡片 |
| `{rounded.xl}` | 16px | 首屏产品预览卡 |
| `{rounded.pill}` | 9999px | 导航组、徽标 |
| `{rounded.full}` | 9999px / 50% | 头像、圆形图标按钮 |

头像照片裁为直径 36px 或 40px 的正圆。嵌入的产品片段保留原有控件圆角。首屏插图区域采用 16:9 或 4:3，并使用 16px 圆角。

<details>
<summary>English · 英文原文</summary>

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Almost no use — reserved for badge accents |
| `{rounded.sm}` | 6px | Small inline buttons, dropdown items |
| `{rounded.md}` | 8px | Standard CTA buttons, text inputs, category tabs |
| `{rounded.lg}` | 12px | Content cards (feature cards, testimonial cards, pricing tier cards) |
| `{rounded.xl}` | 16px | Hero app-mockup card (a slightly larger radius for the marquee component) |
| `{rounded.pill}` | 9999px | Nav-pill-group, badge pills |
| `{rounded.full}` | 9999px / 50% | Avatars, icon buttons |

### Photography Geometry
Avatar photos use `{rounded.full}` (perfect circles) at 36px or 40px. Product UI fragments inside marketing cards retain their native chrome (which often has its own internal radii — e.g., calendar grid cells, button rows). Hero illustration zones use 16:9 or 4:3 ratios with `{rounded.xl}` corners.

</details>

## 组件与状态｜Components

### 中文

### 顶部导航

- `top-nav` 固定在顶部，高 64px，白底。左侧品牌区域，中间横排产品、方案、资源、定价与企业菜单，右侧为登录文字链接、免费注册按钮和按需显示的语言选择。导航使用 Inter 14px / 500。
- `nav-pill-group` 容纳 2–3 个相关分段，浅底、内边距 6px、胶囊外形。选中项为带轻阴影的白色分段。

### 按钮

- `button-primary` 近黑底、白字、Inter 14px / 600、内边距 12px × 20px、高 40px、8px 圆角。按下变为 #242424，禁用状态的浅灰背景和文字由 YAML 词元定义。
- `button-secondary` 白底、深色文字、1px 细边框，内边距、尺寸和圆角与主按钮相同。
- `button-icon-circular` 为 36 × 36px 的白底圆形按钮，细边框、深色图标，用于分享、查看更多或轮播控制。
- `button-text-link` 是透明底的行内文字按钮，用于顶部登录和卡片内行动链接。`text-link` 的正文文字为近黑色，原文提到悬停时有下划线。

### 卡片与容器

- `hero-band` 白底、7 : 5 网格、纵向内边距 96px。左侧为 h1、副标题和按钮，右侧放产品预览。
- `hero-app-mockup-card` 展示预约控件里的日历网格、时段与确认按钮。白底、1px 边框、16px 圆角、轻阴影。
- `feature-card` 用于三列功能网格，浅灰底、12px 圆角、32px 内边距，包含图标、`title-md` 和 `body-md`。
- `feature-icon-card` 用于四列区块，白底、细边框、12px 圆角、24px 内边距，包含图标、`title-sm` 和短说明。
- `product-mockup-card` 容纳工作流、日历、集成网格或自动化界面。白底、12px 圆角、24px 内边距，内部产品控件保留自身样式。
- `testimonial-card` 浅灰底、12px 圆角、24px 内边距。顶部为头像、姓名、职务，底部用 `body-md` 展示推荐语。
- `pricing-tier-card` 白底、12px 圆角、32px 内边距，依次包含 `title-lg` 套餐名、`display-sm` 金额、`body-md` 功能清单和主按钮。
- `pricing-tier-card-featured` 通常用于 Teams 套餐。深底、白字，仅通过底色突出层次，保持原有边框和尺寸。

### 表单、标签与页脚

- `text-input` 为白底、近黑文字，使用 `body-md`，8px 圆角，内边距 10px × 14px，高 40px，1px 细边框。`text-input-focused` 加粗边框或将其改为近黑色。
- `badge-pill` 用于分类和标签。浅灰或柔和色底，深色文字，13px / 500，胶囊圆角，内边距 4px × 12px。`avatar-circle` 直径 36px，容纳照片或柔和色底首字母。`rating-stars` 用橙色星标显示五分评价。
- `category-tab` 默认透明、次级文字。`category-tab-active` 使用白底、近黑文字与轻阴影，内边距 8px × 14px，8px 圆角。
- `cta-band-light` 是页脚前的浅灰行动卡，12px 圆角、48px 内边距，居中放置 `display-sm` 标题、辅助文字和主按钮。
- `footer` 为 #101010 深色表面，正文 #a1a1aa。桌面四列链接覆盖产品、方案、公司和资源，纵向内边距 64px，左上品牌字样使用白色。

<details>
<summary>English · 英文原文</summary>

### Top Navigation

**`top-nav`** — White nav bar pinned to the top of every page. 64px tall, `{colors.canvas}` background. Carries the Cal.com wordmark + logo at left (the lowercase "Cal.com" with the brand circle), primary horizontal menu (Product, Solutions, Resources, Pricing, Enterprise) center, right-side cluster with "Sign in" text-link, "Sign up free" `{component.button-primary}`, and a sometimes-visible language selector. Menu items in `{typography.nav-link}` (Inter 14px / 500).

**`nav-pill-group`** — A small pill-radius wrapper around 2-3 sub-nav segments (e.g., the product-mode switcher between "Personal" / "Teams" / "Enterprise"). Background `{colors.surface-soft}` with internal padding 6px, rounded `{rounded.pill}`. Active segment renders as a white-canvas pill with a subtle drop shadow inside the wrapper. The pill-in-pill treatment is one of Cal.com's signature interactive components.

### Buttons

**`button-primary`** — The signature primary CTA. Background `{colors.primary}` (#111111), text `{colors.on-primary}`, type `{typography.button}` (Inter 14px / 600), padding 12px × 20px, height 40px, rounded `{rounded.md}` (8px). Active state `button-primary-active` shifts to `{colors.primary-active}` (#242424).

**`button-secondary`** — White button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px hairline border, same padding + height + radius as primary.

**`button-icon-circular`** — 36 × 36px circular icon button. Background `{colors.canvas}`, hairline border, ink-color icon. Used for share, "view more", carousel arrows.

**`button-text-link`** — Inline text button, no background. Used for "Sign in" in the top nav and inline CTA links inside cards.

**`text-link`** — Inline body links in `{colors.ink}` (the brand keeps inline links monochrome). Underlined on hover (not documented per the no-hover policy, but mentioned for context).

### Cards & Containers

**`hero-band`** — White-canvas hero with a 7-5 grid: h1 + sub-headline + button row on the left, `{component.hero-app-mockup-card}` on the right. Vertical padding `{spacing.section}` (96px).

**`hero-app-mockup-card`** — A larger product-UI mockup card showing the actual Cal.com booking widget with calendar grid, time slots, and a primary "Confirm" button inside. Background `{colors.canvas}`, 1px hairline border, rounded `{rounded.xl}` (16px), subtle drop shadow. Used as the hero's right-side artifact.

**`feature-card`** — Used in 3-up feature grids ("With us, appointment scheduling is easy"). Background `{colors.surface-card}` (#f5f5f5), rounded `{rounded.lg}` (12px), internal padding `{spacing.xl}` (32px). Carries a small icon at top, an `{typography.title-md}` headline, and a body description in `{typography.body-md}`.

**`feature-icon-card`** — A simpler card variant used in 4-up feature grids on lower-density bands. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Carries a small icon, `{typography.title-sm}` title, short description.

**`product-mockup-card`** — A card showing actual Cal.com product UI fragments (workflow editor, calendar grid, integration grid, automation flow). Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). The product UI inside has its own internal chrome — these cards display the product, they don't decorate around it.

**`testimonial-card`** — Used in customer-quote grids. Background `{colors.surface-card}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Top row carries a `{component.avatar-circle}` + name + role; below sits the testimonial quote in `{typography.body-md}`.

**`pricing-tier-card`** — Standard tier card. Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Carries the plan name in `{typography.title-lg}`, price in `{typography.display-sm}`, feature checklist in `{typography.body-md}`, and a `{component.button-primary}` at the bottom.

**`pricing-tier-card-featured`** — The featured tier (typically "Teams"). Background flips to `{colors.surface-dark}` (#101010), text inverts to `{colors.on-dark}`. The dark surface IS the featured-tier signal — no accent border, no badge, no scale shift.

### Inputs & Forms

**`text-input`** — Standard text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}` (8px), padding 10px × 14px, height 40px. 1px hairline border in `{colors.hairline}`.

**`text-input-focused`** — Focus state. Border thickens or shifts to `{colors.ink}` for emphasis.

### Tags / Badges

**`badge-pill`** — Small pill label used for category tags ("Product", "Article", "New") and pastel-fill avatar substitutes. Background `{colors.surface-card}` or one of the badge pastels (`{colors.badge-orange}`, `{colors.badge-pink}`, etc.), text `{colors.ink}`, type `{typography.caption}` (13px / 500), rounded `{rounded.pill}`, padding 4px × 12px.

**`avatar-circle`** — 36px diameter, rounded `{rounded.full}`. Either holds a photo or a pastel fill with initials in `{typography.caption}`.

**`rating-stars`** — Inline star rating in `{colors.badge-orange}` (#fb923c). Used near testimonial avatars to display a 5-star satisfaction score.

### Tab / Filter

**`category-tab`** + **`category-tab-active`** — Used inside the nav-pill-group. Inactive: transparent background, `{colors.muted}` text. Active: `{colors.canvas}` background, `{colors.ink}` text, subtle drop shadow inside the pill-group wrapper. Padding 8px × 14px, rounded `{rounded.md}`.

### CTA / Footer

**`cta-band-light`** — A pre-footer "Smarter, simpler scheduling" CTA card. Background `{colors.surface-card}`, rounded `{rounded.lg}`, padding `{spacing.xxl}` (48px). Carries an h2 in `{typography.display-sm}`, a sub-line, and a `{component.button-primary}` centered.

**`footer`** — Dark navy footer that closes every page. Background `{colors.surface-dark}` (#101010), text `{colors.on-dark-soft}`. 4-column link list at desktop covering Product / Solutions / Company / Resources. Vertical padding 64px. The Cal.com wordmark sits at the top-left in `{colors.on-dark}`. The footer is the only dark surface on every page — the deliberate inversion visually closes the page.

</details>

## 设计约束｜Do's and Don'ts

### 中文

**建议采用**

- 主行动和 h1/h2 用 #111111。展示标题用 Cal Sans 600 搭配负字距，正文用 Inter。
- 浅灰功能卡适合说明功能，白色产品预览卡适合展示真实界面。优先让用户看到产品控件。
- 头像为 36px 正圆，柔和色点缀用在局部。分段式子导航使用胶囊导航组。
- 让深色页脚承担页面收尾作用。

**避免采用**

- 避免用蓝色或柔和强调色制作主按钮，避免展示标题超过 600 字重、卡片圆角超过 16px。
- 深色卡片留给推荐定价，深色大区留给页脚。区块表面按白、浅灰、白、产品预览、白、深色页脚切换。
- 沿用已定义的状态。主按钮按下加深，仓库原文未要求增设其他悬停变化。

<details>
<summary>English · 英文原文</summary>

### Do
- Reserve `{colors.primary}` (#111111) for primary CTAs and h1/h2 type. Cal.com's button is near-black, not blue.
- Use Cal Sans for every display headline. Pair with Inter body. Never blur the boundary.
- Apply negative letter-spacing on display sizes (-0.5 to -2px). Cal Sans without it reads as off-brand.
- Use `{component.feature-card}` (light gray) and `{component.product-mockup-card}` (white with chrome) deliberately — the gray cards signal "abstract feature claim", white cards signal "look at the actual product".
- Embed real product UI fragments inside marketing cards. Don't paint marketing illustrations of the product when you can show the product itself.
- Keep avatar circles at 36px, perfect circles, sometimes with pastel fills. Avatars are the only place where badge pastels appear.
- Use `{component.nav-pill-group}` for grouped sub-nav segments. The pill-in-pill treatment is signature.
- End every page with the dark footer. The light-to-dark transition is part of the editorial rhythm.

### Don't
- Don't use accent colors (`{colors.brand-accent}`, badge pastels) on primary CTAs. The system is monochrome at the action layer.
- Don't bold display weight beyond 600. Cal Sans at 700 reads as bombastic.
- Don't use rounded radius beyond `{rounded.xl}` (16px) on cards. Larger radii read as consumer-app, not professional booking software.
- Don't put dark surface cards anywhere except the footer and the featured pricing tier. The dark surface is a deliberate, scarce signal.
- Don't repeat the same surface mode in two consecutive bands. Cal.com's pacing alternates white → light-gray → white → product-mockup-card → white → dark-footer.
- Don't add hover state styling beyond what the system already encodes — primary darkens on press; nothing else changes.

</details>

## 响应式规则｜Responsive Behavior

### 中文

| 屏宽 | 变化 |
| --- | --- |
| 小于 768px | 顶部导航收为菜单，打开后占满屏幕。首屏 h1 从 64px 降至 32px，产品预览移到文案下方。功能卡、定价及页脚均为单列。 |
| 768–1024px | 保留紧凑横向导航，胶囊导航可换行，功能和定价卡片为两列。 |
| 1024–1440px | 完整导航，功能卡片三列，定价四列。 |
| 大于 1440px | 沿用桌面网格，增加外侧留白，内容宽度仍限制在约 1200px。 |

- 主按钮触控区域至少 40 × 40px，图标按钮为 36 × 36px，输入框高 40px。原文认为胶囊导航外层加上标签内边距可形成至少 44px 的触控区域。
- 网格通过减少列数适配小屏，保留推荐定价的深色区别。平板可让胶囊分段换行，头像与推荐语保持网格对齐。
- 产品预览内部保持原始宽高比，容器随布局调整。头像始终裁为正圆，移动端预约示意需保持日历格可读。

<details>
<summary>English · 英文原文</summary>

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→32px; hero-app-mockup-card stacks below content; feature grids 1-up; pricing 1-up; footer 4 cols → 1 |
| Tablet | 768–1024px | Top nav stays horizontal but tightens; nav-pill-group wraps; feature cards 2-up; pricing 2-up |
| Desktop | 1024–1440px | Full top-nav with all menu items; 3-up feature cards; 4-up pricing tiers |
| Wide | > 1440px | Same as desktop with more outer breathing room; max content width caps at 1200px |

### Touch Targets
- `{component.button-primary}` at minimum 40 × 40px.
- `{component.button-icon-circular}` at exactly 36 × 36 — slightly under WCAG's 44 × 44 but the centered icon and full-circle silhouette compensate.
- `{component.text-input}` height is 40px.
- `{component.category-tab}` rendered inside nav-pill-group has 8 × 14 padding; effective tap area meets 44px+ with the surrounding pill.

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px; menu opens as a full-screen sheet.
- Hero band's 7-5 grid collapses to single-column on mobile — h1 + sub-head + buttons first, then the app-mockup card below.
- Feature grids reduce columns rather than scaling cards down.
- Pricing tier cards collapse 4 → 2 → 1; featured-tier dark surface stays visually distinct at every breakpoint.
- Nav-pill-group wraps to multi-row on tablet if the segments don't fit horizontally.
- Avatar + testimonial card layouts stay grid-aligned at every breakpoint.

### Image Behavior
- Product UI fragments inside cards retain native aspect ratios; the cards themselves resize.
- Avatar photos crop to circles at every breakpoint.
- Hero app-mockup card scales proportionally on mobile — the calendar grid stays legible.

</details>

## 迭代指南｜Iteration Guide

### 中文

1. 每次处理一个组件，直接引用其 YAML 键，例如 `{component.feature-card}`。
2. 将按下、禁用、聚焦等变体放在独立的 `components:` 条目。
3. 通过词元引用取值，避免内联十六进制色值。
4. 记录默认和按下状态。原文的采集规则未把悬停列为正式变体。
5. 展示标题保持 Cal Sans 600 和负字距，正文保持 Inter 400。
6. 将深色表面留给页脚和已定义的高亮场景。
7. 强调标题时优先增大字号。

<details>
<summary>English · 英文原文</summary>

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.pricing-tier-card-featured}`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Cal Sans 600 with negative letter-spacing. Body stays Inter 400. The trinity does not blur.
6. The dark footer is the only dark surface on most pages. Don't add other dark cards casually.
7. When in doubt about emphasis: bigger Cal Sans before bolder Cal Sans.

</details>

## 已知缺口｜Known Gaps

### 中文

- dembrandt 未采到按钮变体，因为多数行动按钮实际为带样式的链接。按钮样式由截图和已知字体规则补充。
- 原文记载 Cal Sans 字体在该分析中未随规范提供，字体章节列出替代方案。
- 柔和徽标色取自观察到的头像底色，具体色值可能随页面更新而变化。
- 未采集日历时段选择、预约确认和集成面板悬停动效的时长及缓动。
- 表单只记录输入框聚焦状态，注册和预约里的错误、成功等状态需要进一步确认。
- 真正的预约页面 `cal.com/{username}` 属于产品界面，超出这份营销页分析的范围。
- 推荐语区域同时使用头像照片和柔和色底首字母。

<details>
<summary>English · 英文原文</summary>

- The dembrandt frequency analyzer captured `Buttons: 0 variants` — Cal.com renders most CTAs as styled `<a>` link elements rather than `<button>` tags, which dembrandt's button selector doesn't capture. Button styles are documented from screenshot ground-truth + standard Cal Sans / Inter baselines.
- Cal Sans is licensed to Cal.com and not available as a public web font; substitutes are documented in the typography section.
- The badge pastel set (orange / pink / violet / emerald) is documented from observed avatar fill colors; exact hex values may shift seasonally.
- Animation and transition timings (calendar slot picker, schedule confirmation, integration grid hover-reveal) are not in scope.
- Form validation states beyond `{component.text-input-focused}` are not extracted — error / success states would need a sign-up or booking flow to confirm.
- The actual booking widget surface (cal.com/{username}) is the product, not a marketing surface; its spec is out of scope.
- Avatar photos in testimonial sections sometimes carry pastel circular fills with initials instead of photographs; both treatments coexist on the same page.

</details>

## 完整设计词元｜YAML tokens

**元数据中文说明**　白底、近黑色主操作与 Cal Sans 展示标题构成基础，浅灰圆角卡片展示产品界面片段，深色页脚收束长页面。

原始版本为 `alpha`，名称为 `Cal.com-design-analysis`。

```yaml
version: alpha
name: Cal.com-design-analysis
description: A clean, calendar-software-first interface anchored on white canvas with black primary CTAs and custom Cal Sans display typography. The system reads as friendly modern SaaS — generous whitespace, soft-rounded cards (~12px), product UI fragments shown directly inside cards, and a dark navy footer that visually closes long-scroll pages. Brand voltage comes from the Cal Sans display headline (a custom geometric face) and from product UI artifacts shown in-card rather than from accent colors.

colors:
  primary: "#111111"
  primary-active: "#242424"
  primary-disabled: "#e5e7eb"
  ink: "#111111"
  body: "#374151"
  muted: "#6b7280"
  muted-soft: "#898989"
  hairline: "#e5e7eb"
  hairline-soft: "#f3f4f6"
  canvas: "#ffffff"
  surface-soft: "#f8f9fa"
  surface-card: "#f5f5f5"
  surface-strong: "#e5e7eb"
  surface-dark: "#101010"
  surface-dark-elevated: "#1a1a1a"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#a1a1aa"
  brand-accent: "#3b82f6"
  success: "#10b981"
  warning: "#f59e0b"
  error: "#ef4444"
  badge-orange: "#fb923c"
  badge-pink: "#ec4899"
  badge-violet: "#8b5cf6"
  badge-emerald: "#34d399"

typography:
  display-xl:
    fontFamily: "Cal Sans, Inter, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -2px
  display-lg:
    fontFamily: "Cal Sans, Inter, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.5px
  display-md:
    fontFamily: "Cal Sans, Inter, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -1px
  display-sm:
    fontFamily: "Cal Sans, Inter, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
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
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  nav-pill-group:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
    padding: 6px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 96px
  hero-app-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-icon-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
    padding: 8px 14px
    rounded: "{rounded.md}"
  category-tab-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.md}"
  avatar-circle:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
  badge-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  rating-stars:
    backgroundColor: transparent
    textColor: "{colors.badge-orange}"
    typography: "{typography.caption}"
  cta-band-light:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.lg}"
    padding: 48px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: 64px
```
