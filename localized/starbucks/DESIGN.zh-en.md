# Starbucks · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。

# 设计系统灵感来自 Starbucks


<details>
<summary>英文原文</summary>

<!-- source:body -->
# Design System Inspired by Starbucks


<!-- source:end -->

</details>

## 1。视觉主题和大气

Starbucks设计系统是一个 **温暖,自信的零售旗舰** 页面底色在中温奶油之间(`#f2f0eb`和陶瓷脱白(`#edebe9`——参考实际储存材料的颜色:纸巾、咖啡厅墙、木头完成——而签名 **Starbucks 绿色** (`#006241`)将品牌时刻锁定在首屏乐队,CTA,以及"奖赏"体验上,绿化会以四个校准的阴影(英语:Greens comes in four colubed shadow)为主线.Starbucks、Accent、House、Uplift),每个都绘制到特定的表面角色,以及黄金(`#cba258`)只出现在"奖励-地位"仪式上——而不是作为一般的强调色.

Typography carries most of the brand voice. The proprietary **SoDoSans** typeface (custom to Starbucks) sits across nearly every surface with a tight `-0.16px` letter-spacing — it reads confident and friendly rather than fashion-magazine severe. What's unusual: the Rewards page switches to a warm serif (`"Lander Tall", "Iowan Old Style", Georgia`) for specific headline moments, subtly echoing the nostalgic feel of a coffeehouse chalkboard. And the Careers pages use a handwritten script (`"Kalam", "Comic Sans MS", cursive`) for personal cup-name touches. Three typefaces, three contexts — the system is disciplined about when each appears.

表面通过圆形几何呼吸。每个按钮都是一个 50px 满溢,牌要一张 12px 圆形矩形。“ Frap” 浮式 CTA —— a 56px circular 排序在绿色 ACCent 中的按钮(`#00754A`)——是产品标志深度移动:它用一层的阴影堆放在右下方(即:`0 0 6px rgba(0,0,0,0.24)` 碱基+ `0 8px 12px rgba(0,0,0,0.14)` 环境)和压缩通过 `scale(0.95)` 高度被限制 暗影被隐蔽在低声 `0.14/0.24` 阿尔法,全球导航得到一个安静的三层阴影堆。整个系统感觉像干净的咖啡馆标志:清晰,温暖,而且从来不喊叫。

**关键特征 :**
- Four-tier green brand system (Starbucks / Accent / House / Uplift) each mapped to a distinct surface role — not a single "brand green"
- Gold reserved for Rewards-status moments only; never a general-purpose accent
- 暖中立页面底色( 3)`#f2f0eb` / `#edebe9`)而不是冷白的——参考咖啡馆材料
- Custom proprietary typeface (SoDoSans) with tight `-0.16px` letter-spacing as the universal voice
- 特定背景类型开关 : serif (Lander Tall) 奖励, 脚本 (Kalam) 职业杯名
- 完全溢出按钮( E)`50px` 半径) 通用, `scale(0.95)` 正在按下签名微互动
- 飘扬"垃圾" circular 中直省(`56px`,绿色的Accent填充,层层的阴影堆栈)——产品标志的高架元素
- 礼品卡表面设计为 **相片实物产品** ——每张卡片都是一张鲜明的插图照片,而不是生成的图形.
- 12px 纸牌半径+低声软阴影使内容卡保持平面加闪光
- Rem-based spacing scale anchored at 1.6rem (~16px) = `--space-3`, stepping to 6.4rem (~64px)

**颜色块页面节奏 :** 奶油首屏 白话内容部分 暗绿( / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /`#1E3932`) 带有白文本的特色带 → 奶油通用区 → 暗绿色( )`#1E3932`)页脚有金色/白文本——一个围绕亮身的浓郁的深色书架.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 1. Visual Theme & Atmosphere

Starbucks' design system is a **warm, confident retail flagship** wearing the green of their storefront apron across every surface. The canvas alternates between a neutral-warm cream (`#f2f0eb`) and a ceramic off-white (`#edebe9`) — colors that reference actual store materials: the paper napkins, the café walls, the wood finishes — while the signature **Starbucks Green** (`#006241`) anchors the brand moment on hero bands, CTAs, and the Rewards experience. The greens come in four calibrated shades (Starbucks, Accent, House, Uplift) each mapped to a specific surface role, and gold (`#cba258`) appears only around Rewards-status ceremony — not as a general accent.

Typography carries most of the brand voice. The proprietary **SoDoSans** typeface (custom to Starbucks) sits across nearly every surface with a tight `-0.16px` letter-spacing — it reads confident and friendly rather than fashion-magazine severe. What's unusual: the Rewards page switches to a warm serif (`"Lander Tall", "Iowan Old Style", Georgia`) for specific headline moments, subtly echoing the nostalgic feel of a coffeehouse chalkboard. And the Careers pages use a handwritten script (`"Kalam", "Comic Sans MS", cursive`) for personal cup-name touches. Three typefaces, three contexts — the system is disciplined about when each appears.

The surfaces breathe through rounded geometry. Every button is a 50px full-pill. Cards take a 12px rounded-rectangle. The "Frap" floating CTA — a 56px circular order button in Green Accent (`#00754A`) — is the product's signature depth move: it floats bottom-right with a layered shadow stack (`0 0 6px rgba(0,0,0,0.24)` base + `0 8px 12px rgba(0,0,0,0.14)` ambient) and compresses via `scale(0.95)` on press. Elevations are otherwise restrained — card shadows stay at a whispered `0.14/0.24` alpha, global nav gets a quiet three-layer shadow stack. The whole system feels like clean café signage: legible, warm, and never shouting.

**Key Characteristics:**
- Four-tier green brand system (Starbucks / Accent / House / Uplift) each mapped to a distinct surface role — not a single "brand green"
- Gold reserved for Rewards-status moments only; never a general-purpose accent
- Warm-neutral canvas (`#f2f0eb` / `#edebe9`) instead of cold white — references café materials
- Custom proprietary typeface (SoDoSans) with tight `-0.16px` letter-spacing as the universal voice
- Context-specific type switches: serif (Lander Tall) for Rewards, script (Kalam) for Careers cup-names
- Full-pill buttons (`50px` radius) universal, `scale(0.95)` active press the signature micro-interaction
- Floating "Frap" circular CTA (`56px`, Green Accent fill, layered shadow stack) — the product's signature elevation element
- Gift-card surfaces designed as **photographed physical product** — every card is a distinct illustrated photograph rather than a generated graphic
- 12px card radius + whisper-soft shadows keep content cards flat-plus-hint-of-lift
- Rem-based spacing scale anchored at 1.6rem (~16px) = `--space-3`, stepping to 6.4rem (~64px)

**Color-block page rhythm:** Cream hero → White content sections → Dark-green (`#1E3932`) feature band with white text → Cream utility zone → Dark-green (`#1E3932`) footer with gold / white text — an espresso-dark bookend around the bright body.


<!-- source:end -->

</details>

## 2. Color Palette & Roles

**Source pages analyzed:** homepage, rewards, gift cards, product detail (Pink Energy Drink), product nutrition (Cold Brew).

### 主要

- **Starbucks 绿色** (`#006241`: 历史品牌绿色. used on h1 标题,主节标题在Rewards页面,在需要单一主导颜色的地方作为主品牌信号.
- **Green Accent** (`#00754A`): A slightly brighter, more luminous green. The primary filled-CTA color ("Explore our afternoon menu", "See the spring menu") and the fill of the floating Frap circular button.
- **绿屋** (`#1E3932`深黑色的绿色,页脚表面 feature-band 背景,奖励地位暗淡的表面,以及标题"自由咖啡只是开始"的"Rewards上的首屏乐队".
- **绿色提升** (`#2b5148`:一种二级中深绿色在装饰性强调色和暗淡渐变的时刻中被节制使用.
- **绿光** (`#d4e9e2`:一种用于形式验证态锡和浅绿色公用表面的淡薄荷洗涤.

### 中学和中学

- **黄金** (`#cba258`:几乎完全保留给奖励-地位仪式——黄金级点名,合伙牌(SkyMiles,Bonvoy),以及溢价感应强调色,从未出现通用品牌颜色.
- **Gold Light** (`#dfc49d`): Softer gold for background washes on gold-tier sections.
- **Gold Lightest** (`#faf6ee`): Cream-gold page-surface wash used under partnership sections on the Rewards page — ties the gold accent back into the warm neutral system.

### 表面背景( B)

- **白色** (`#ffffff`:主牌和模式表面,还有卡片填充在礼品卡的牌片上.
- **中性凉爽** (`#f9f9f9`: 降下菜单("账"降下)中使用的浅凉灰色表面,窗体卡包装,以及静态的通用容器.
- **Neutral Warm** (`#f2f0eb`): The warm cream **primary page canvas** for Rewards utility zones and hero bands.
- **陶瓷** (`#edebe9`:一种稍暖的/达克奶油,用于区隔离器,软页段洗涤,以及Rewards合伙乐队.
- **黑色** (`#000000`:深墨预留深色顶部CTA条("Join now")和高孔纹 top-nav 签名按钮。

### 中立文本( T)

- **Text Black** (`rgba(0, 0, 0, 0.87)`): Primary heading and body text color on light surfaces. Not pure black — an 87%-opacity black that reads warmer.
- **文字 黑色软** (`rgba(0, 0, 0, 0.58)`: 光表面的二级/元数据文本.
- **文字白** (`rgba(255, 255, 255, 1)`: 暗绿色表面的主标题/体文字.
- **文字 白软** (`rgba(255, 255, 255, 0.70)`: 暗绿色表面的副文本——页脚链接描述,标题文本.
- **奖励绿色** (`#33433d`: 专用的哑音的板绿色,仅用于 Rewards-page文本块上——比文本黑略微"dustier"读色,表示"报酬表面"而不使用全色 Starbucks 绿色的。

### 语义和调值

- **红色** (`#c82014`:错误和破坏性状态(形成无效的,破坏性的行动).
- **黄色** (`#fbbc05`:警告状态,遗产品牌触摸.
- **绿光** (`#d4e9e2` 时 间 33% 透明度= `hsl(160 32% 87% / 33%)`: 格式有效字段锡背景.
- **红丁** (`hsl(4 82% 43% / 5%)`:表单上无效的字段锡。

### 黑色/ 白色阿尔法梯

用于叠加和二次文本的平行半透明比例表:
- `rgba(0,0,0,0.06)` 结束 `rgba(0,0,0,0.90)` 输入 10% 步骤——用于光表面的暗面覆盖
- `rgba(255,255,255,0.10)` 结束 `rgba(255,255,255,0.90)` 输入 10% 步骤——用于暗表面的光线覆盖

### 渐变系统

No structural gradient tokens observed. Surface hierarchy is solid-color-block throughout — the system relies on its five-tier cream/green surface palette rather than gradients.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 2. Color Palette & Roles

**Source pages analyzed:** homepage, rewards, gift cards, product detail (Pink Energy Drink), product nutrition (Cold Brew).

### Primary

- **Starbucks Green** (`#006241`): The historic brand green. Used on h1 headings, primary section headers on the Rewards page, and as the main brand signal wherever a single dominant color is needed.
- **Green Accent** (`#00754A`): A slightly brighter, more luminous green. The primary filled-CTA color ("Explore our afternoon menu", "See the spring menu") and the fill of the floating Frap circular button.
- **House Green** (`#1E3932`): The deep near-black brand green. Footer surface, feature-band backgrounds, reward-status dark surfaces, and the headline "Free coffee is just the beginning" hero band on Rewards.
- **Green Uplift** (`#2b5148`): A secondary mid-dark green used sparingly on decorative accents and dark-gradient moments.
- **Green Light** (`#d4e9e2`): A pale mint wash used for form-valid-state tints and light green utility surfaces.

### Secondary & Accent

- **Gold** (`#cba258`): Reserved almost exclusively for Rewards-status ceremony — Gold-tier callouts, partnership badges (SkyMiles, Bonvoy), and premium-feeling accents. Never a general-purpose brand color.
- **Gold Light** (`#dfc49d`): Softer gold for background washes on gold-tier sections.
- **Gold Lightest** (`#faf6ee`): Cream-gold page-surface wash used under partnership sections on the Rewards page — ties the gold accent back into the warm neutral system.

### Surface & Background

- **White** (`#ffffff`): Primary card and modal surface. Also card fill on gift-card tiles.
- **Neutral Cool** (`#f9f9f9`): Subtle cool-gray surface used on dropdown menus ("Account" dropdown), form-card wraps, and quiet utility containers.
- **Neutral Warm** (`#f2f0eb`): The warm cream **primary page canvas** for Rewards utility zones and hero bands.
- **Ceramic** (`#edebe9`): A slightly warmer/darker cream for zone separators, soft page-section washes, and Rewards partnership band.
- **Black** (`#000000`): Deep ink reserved for the dark top-of-page CTA strip ("Join now") and high-contrast top-nav sign-in buttons.

### Neutrals & Text

- **Text Black** (`rgba(0, 0, 0, 0.87)`): Primary heading and body text color on light surfaces. Not pure black — an 87%-opacity black that reads warmer.
- **Text Black Soft** (`rgba(0, 0, 0, 0.58)`): Secondary/metadata text on light surfaces.
- **Text White** (`rgba(255, 255, 255, 1)`): Primary heading/body text on dark green surfaces.
- **Text White Soft** (`rgba(255, 255, 255, 0.70)`): Secondary text on dark-green surfaces — footer link descriptions, caption text.
- **Rewards Green** (`#33433d`): A dedicated muted slate-green used only on Rewards-page text blocks — a slightly "dustier" reading color than Text Black that signals "reward surface" without using full Starbucks Green.

### Semantic & Accent

- **Red** (`#c82014`): Error and destructive state (form invalid, destructive actions).
- **Yellow** (`#fbbc05`): Warning state, legacy brand touch.
- **Green Light** (`#d4e9e2` at 33% opacity = `hsl(160 32% 87% / 33%)`): Form valid-field tint background.
- **Red Tint** (`hsl(4 82% 43% / 5%)`): Invalid-field tint on forms.

### Black / White Alpha Ladders

Two parallel translucent scales for overlay and secondary-text use:
- `rgba(0,0,0,0.06)` through `rgba(0,0,0,0.90)` in 10% steps — for dark overlays on light surfaces
- `rgba(255,255,255,0.10)` through `rgba(255,255,255,0.90)` in 10% steps — for light overlays on dark surfaces

### Gradient System

No structural gradient tokens observed. Surface hierarchy is solid-color-block throughout — the system relies on its five-tier cream/green surface palette rather than gradients.


<!-- source:end -->

</details>

## 3. 字法规则

### 字体家族

- **小学:** `SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif` — Starbucks几乎每层都使用的专有型公司型号
- **正在装入退步 :** `"Helvetica Neue", Helvetica, Arial, sans-serif` ——用户在 SoDoSans 装入前看到的内容
- **奖励 Serif:** `"Lander Tall", "Iowan Old Style", Georgia, serif` ——在具体的"奖励"-页面标题片段上用,以表达热烈的社论感受.
- **事业文稿 :** `"Kalam", "Comic Sans MS", cursive` ——专用于职业页面"cup name"装饰触摸,参考手写名称. Starbucks 杯子( 杯子)

No OpenType stylistic sets explicitly activated at `:root`.

### 等级

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| 显示( 文本 -)10) | 5.0rem / 80px | 400–600 | 1.2 | -0.16px | 最大奖/首屏显示 |
| Jumbo (text-9) | 3.6rem / 58px | 400–600 | 1.2 | -0.16px | Secondary hero headings |
| Hero Large (text-8) | 2.8rem / 45px | 400–600 | 1.2–1.5 | -0.16px | Landing section headlines |
| H1 | 24px | 600 | 36px | -0.16px | Starbucks-绿色主标题 |
| H2 | 24px | 400 | 36px | -0.16px | 黑文本中常规加权区标题 |
| Body Large | 19px | 400–600 | 33.25px (~1.75) | -0.16px | Hero intro copy, feature-band body |
| Body (text-3) | 1.6rem / 16px | 400 | 1.5 (24px) | -0.01em | Default body copy |
| Small (text-2) | 1.4rem / ~14px | 400–600 | 1.5 | -0.01em | Button label, metadata, form labels |
| 微( 文本 - )1) | 1.3rem / ~13px | 400 | 1.5 | -0.01em | 活动浮标状态, 标题缩微复制 |
| Button Label | 14–16px | 400–600 | 1.2 | -0.01em | All pill-button labels |

**Letter-spacing 符号 :**
- `letterSpacingNormal`: `-0.01em` (默认——紧,特征).
- `letterSpacingLoose`: `0.1em` (强调上限)
- `letterSpacingLooser`: `0.15em` (上层标签,极重)

**Line-height 符号 :**
- `lineHeightNormal`: `1.5` (身体) 爱丽丝·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西德·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西德·卡西尔·卡西德·卡西尔·卡西尔·卡西尔·卡西尔·卡西尔·卡西德·卡西德·卡西德·卡西德·卡西德·卡西德·
- `lineHeightCompact`: `1.2` (播放/按钮)

### 原则

- **紧负跟踪( Q)`-0.01em`)** 几乎被普遍应用——整个产品读取略为压缩,这使得SoDoSans在不感到被挤压的情况下,有自信的存在.
- **字重级的班次是等级,而不是大小的班次.** H1 和H类2 共享相同 24px/36px 大小; 仅重( 4)600 数字 400)和颜色(Starbucks-绿色对黑色文本)将它们分开.
- **Size tokens use rem, anchored to `1rem = 10px`** on this site (via a `font-size: 62.5%` root trick). So `1.6rem` = 16px, `2.4rem` = 24px, etc. The scale is semantic (textSize-1 through textSize-10), not arbitrary pixel values.
- **特定背景的字型交换** — serif 奖励,事业的脚本——是刻意的,是本地化的,绝不要与同一面的原始桑混在一起。
- **Body text never goes pure black** — it sits at `rgba(0,0,0,0.87)` to match the warm-neutral canvas temperature.

### Note on Font Substitutes

SoDoSans is proprietary to Starbucks (licensed from House Industries, not publicly available). Reasonable open-source substitutes:
- **Inter** (Google字体)——类似的人文几何比例,宽重范围.
- **曼罗普** 稍稍圆润, 相似自信的感觉
- **南多三世** ——暖和,适合"咖啡馆"品牌代用品.

If substituting, verify the tight `-0.01em` / `-0.16px` tracking still reads well; some open-source fonts need `-0.005em` instead.

高地(赏金) serif)是自定义的——开源替代: **木卫一旧样式** (已经是倒计时), **洛拉,你好吗?**,或 **来源 Serif 专业版**. Kalam(护理员脚本)直接在Google字体上提供.


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 3. Typography Rules

### Font Family

- **Primary:** `SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif` — Starbucks' proprietary corporate typeface, used across nearly every surface
- **Loading Fallback:** `"Helvetica Neue", Helvetica, Arial, sans-serif` — what users see before SoDoSans loads
- **Rewards Serif:** `"Lander Tall", "Iowan Old Style", Georgia, serif` — used on specific Rewards-page headline moments for a warm editorial feel
- **Careers Script:** `"Kalam", "Comic Sans MS", cursive` — used exclusively for Careers-page "cup name" decorative touches, referencing the hand-written names on Starbucks cups

No OpenType stylistic sets explicitly activated at `:root`.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display (text-10) | 5.0rem / 80px | 400–600 | 1.2 | -0.16px | Largest Rewards/hero display |
| Jumbo (text-9) | 3.6rem / 58px | 400–600 | 1.2 | -0.16px | Secondary hero headings |
| Hero Large (text-8) | 2.8rem / 45px | 400–600 | 1.2–1.5 | -0.16px | Landing section headlines |
| H1 | 24px | 600 | 36px | -0.16px | Starbucks-Green primary heading |
| H2 | 24px | 400 | 36px | -0.16px | Regular-weight section title in Text Black |
| Body Large | 19px | 400–600 | 33.25px (~1.75) | -0.16px | Hero intro copy, feature-band body |
| Body (text-3) | 1.6rem / 16px | 400 | 1.5 (24px) | -0.01em | Default body copy |
| Small (text-2) | 1.4rem / ~14px | 400–600 | 1.5 | -0.01em | Button label, metadata, form labels |
| Micro (text-1) | 1.3rem / ~13px | 400 | 1.5 | -0.01em | Active float-label state, caption micro-copy |
| Button Label | 14–16px | 400–600 | 1.2 | -0.01em | All pill-button labels |

**Letter-spacing tokens:**
- `letterSpacingNormal`: `-0.01em` (default — tight, characteristic)
- `letterSpacingLoose`: `0.1em` (emphasized caps)
- `letterSpacingLooser`: `0.15em` (uppercase-style labels, extreme emphasis)

**Line-height tokens:**
- `lineHeightNormal`: `1.5` (body)
- `lineHeightCompact`: `1.2` (display/buttons)

### Principles

- **Tight negative tracking (`-0.01em`)** is applied almost universally — the entire product reads slightly compressed, which gives SoDoSans its confident presence without feeling squeezed.
- **Weight shifts carry hierarchy, not size shifts.** H1 and H2 share the same 24px/36px size; only weight (600 vs 400) and color (Starbucks-Green vs Text Black) separate them.
- **Size tokens use rem, anchored to `1rem = 10px`** on this site (via a `font-size: 62.5%` root trick). So `1.6rem` = 16px, `2.4rem` = 24px, etc. The scale is semantic (textSize-1 through textSize-10), not arbitrary pixel values.
- **Context-specific typeface swaps** — serif on Rewards, script on Careers — are deliberate and localized. Never mix them with the primary sans within the same surface.
- **Body text never goes pure black** — it sits at `rgba(0,0,0,0.87)` to match the warm-neutral canvas temperature.

### Note on Font Substitutes

SoDoSans is proprietary to Starbucks (licensed from House Industries, not publicly available). Reasonable open-source substitutes:
- **Inter** (Google Fonts) — similar humanist geometric proportions, wide weight range
- **Manrope** — slightly rounder, similar confident feel
- **Nunito Sans** — warmer, good for a "café" brand substitute

If substituting, verify the tight `-0.01em` / `-0.16px` tracking still reads well; some open-source fonts need `-0.005em` instead.

Lander Tall (the Rewards serif) is custom — open-source substitutes: **Iowan Old Style** (already in fallback), **Lora**, or **Source Serif Pro**. Kalam (Careers script) is available on Google Fonts directly.


<!-- source:end -->

</details>

## 4. 组件型号

### 按钮

**1。初等填充——“免费探索我们的下午菜单/签字”**
- Background: `#00754A` (Green Accent)
- 文本 : `#ffffff`
- 边框 : `1px solid #00754A`
- 半径 : `50px` (满药)
- 铺垫: `7px 16px`
- Font: SoDoSans, 16px, weight 600, letter-spacing `-0.01em`
- 活动状态 : `transform: scale(0.95)` 途经 `--buttonActiveScale`
- 过渡 : `all 0.2s ease`

**2。主大纲 —— “给他们一个尝试/开始命令 ”**
- Background: transparent
- 文本 : `#00754A` (绿色安分)
- 边框 : `1px solid #00754A`
- 半径/铺设/活动/过渡与初等填充相同

**3. Black Filled — "Join now"**
- Background: `#000000`
- 文本 : `#ffffff`
- 边框 : `1px solid #000000`
- 半径 : `50px`,铺垫: `7px 16px`
- Font: 14px, weight 600
- Used on the top-of-page join strip and similar conversion moments

**4. 黑暗轮廓——"签名".**
- Background: transparent
- 文本 : `rgba(0, 0, 0, 0.87)` (图文黑).
- 边框 : `1px solid rgba(0, 0, 0, 0.87)`
- 半径 : `50px`,铺垫: `7px 16px`
- Font: 14px, weight 600

**5. 绿色上绿色倒置——"见春季菜单"**
- Background: `#ffffff`
- 文本 : `#00754A`
- 边框 : `1px solid #ffffff`
- 按钮后面的表面是深绿色的绿色带子时使用——白色的按钮,上面是绿色文字,而不是绿色bg上的填充绿色胶囊形

**6. 黑暗上的大纲——"多学/现在就秩序"**
- Background: transparent
- 文本 : `#ffffff`
- 边框 : `1px solid #ffffff`
- 用于二次动作的深绿色特性带, 配对为白色填充的 CTA

**7. Consent Agree (dark-green variant)**
- Background: `rgb(0, 130, 72)` (a specific variant green used in the cookie-consent module)
- 文本 : `#ffffff`
- No border, `50px` radius, `7px 16px` padding, 14px / weight 400
- 略微亮于绿色角——留给同意方-同意方的行动

**8. 垃圾-漂浮 Circular 顺序按钮**
- Background: `#00754A` (Green Accent)
- 图标 : `#ffffff`
- 大小 : `5.6rem / 56px` (标准), `4rem / 40px` (最小变种)
- Radius: `50%` (full circle)
- Fixed 右下方,请检查date=中的日期值 (帮助) `-0.8rem` 额外水龙头舒适度的触摸偏移
- 阴影堆栈: 底盘 `0 0 6px rgba(0,0,0,0.24)` + 环境 `0 8px 12px rgba(0,0,0,0.14)`
- 活动状态:环境阴影淡化为 `0 8px 12px rgba(0,0,0,0)`
- This is the product's signature elevation element — it floats over every scrolled surface

**9。全宽反馈标签——"提供反馈"**
- Background: `#00754A`
- 文本 : `#ffffff`
- 半径 : `12px 12px 0px 0px` (仅上四舍五入)
- 铺垫: `8px 16px`
- Font: 14px, weight 400
- 已定位 fixed 右下方, 连接在视图边缘

### 纸牌和集装箱

**内容卡( 默认)**
- Background: `#ffffff` (`--cardBackgroundColor`)
- 半径 : `12px` (`--cardBorderRadius`)
- 阴影 : `0px 0px .5px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.24)` (`--cardBoxShadow`)
- 用于: 特性卡、菜单项目牌、奖励状态面板

**礼品卡片**
- Background: illustrated photography fills the card (no solid bg)
- 半径:类似于卡( )`~12px`角落稍紧一点)
- 阴影:比默认卡轻——这些被当成贴在页面底色上的物理卡处理
- Labeled by category above the card grid (Spring, Thank You, Birthday, Celebration, Mother's Day, Appreciation, Encouragement, Milestones, Anytime)

**奖励状况卡(奖励页面签名)**
- Three-column grid: Bronze / Gold / Silver-ish — each a dark-green (`#1E3932`) panel with:
  - 彩色渐变/ 彩色页眉环
  - 编号的“ 等级” 徽章
  - 大型索多桑斯字重级的状态头衔 600
  - 白/透明-白文本中的星/ 福利列表
  - 底部"随着你赚更多的星星..." 进步标题

**合伙卡(奖励)**
- Background: `#faf6ee` (Gold Lightest) warm-cream surface
- 内容:合作伙伴标志("SkyMiles","Bonvoy")以中心为中心,下面是描述性文字.
- 半径和阴影跟随默认的卡片光谱

**下调菜单( 账户下调, ) top-nav)**
- Background: `#f9f9f9` (Neutral Cool)
- 菜单项 `24px / weight 400` 文本黑点
- No border — just background surface shift against white nav

**调制解调器**
- 铺垫: `2.4rem` (`--modalPadding`)
- 顶端 padding: `8.8rem` (`--modalTopPadding`)——留有空间关闭按钮/头部.
- 合并垂直 padding: `11.2rem`
- 半径继承了卡片的光谱( R)`12px`)

### 输入表单( F)

**浮动标签输入**
- 标签在焦点/填充时浮在输入边框上方
- 桌面标签字体大小 : `1.9rem` 默认, 动画为 `1.4rem` 活动时
- 移动标签字体大小 : `1.6rem` 默认, 动画为 `1.3rem` 活动
- Label horizontal offset: `12px` from left
- 活动标签翻译:最多 `-12px` 与 `-50%` Y 翻译
- 外地 padding: `12px`
- 水平窗体 padding: `1.6rem`
- 验证: 有效字段获得 `rgba(green-light, 0.33)` 锡特; 无效字段获得 `rgba(red, 0.05)` 锡特
- 过渡 : `0.3s option-label-marker-expansion cubic-bezier(0.32, 2.32, 0.61, 0.27)` 输入

**选项图标( 检查框/ 电台)**
- 铺垫: `3px` 内
- 使用上面的检查输入立方位比齐尔动画(略为“春季”) 2.32 超射曲线)

### 导航

**Global Nav (top bar)**
- Fixed 具有渐进高度的位置: `64px` · 国家 `72px` 移动电话 ∗∗ `83px` 平板电脑 `99px` 桌面
- 阴影堆栈 : `0 1px 3px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)` ——三级软升降机.
- Left: Starbucks wordmark logo, offsetting by `99px` (md) / `131px` (lg) from left edge
- 索多桑斯字重中的主链接 400–600: 菜单 : 奖励 : 礼品卡
- 右侧: 查找存储链接 + 签名于( 外延) + 加入( 黑色已填充)

**Sub-nav (第二栏,例如内部奖励)**
- 高度 : `53px` (全球潜水) / `48px` (内部潜水)
- 通常水平标签组位于全局导航下

**移动导航**
- 折叠到平板断点下面的汉堡抽屉中
- Frap floating button persists at bottom-right regardless of nav state

### 图像处理

- **首屏摄影**:产品照片(有色背景的清净玻璃中的饮料——珊瑚、圣人、温暖琥珀) ~40vw ; 文本占据另一个 60vw (`--headerCrateProportion: 40vw` / `--contentCrateProportion: 60vw`)
- **礼品卡插图**:每张卡片都是一张鲜明的插图照片(漆-feel,手绘外观,温暖的色调). 永不通用生成的图形.
- **奖励仪式图像**照片: 照片: 照片: 照片: Starbucks 奖励App屏幕手持,角度组成——产品内文本摄影.
- **菜单缩略图**: 平方或 4:3 产品摄影,带有干净的白色/乳汁背景,玻璃周围微软的滴影.
- **图像淡出**: `opacity 0.3s ease-in` 图像负载的过渡( E)`--imageFadeTransition`).

### 特色乐队(深绿色首屏带)

Full-width `#1E3932` (House Green) band with:
- 左:白头线+子头+CTA行
- 右:产品摄影或插图
- 拆分比例 ~40/60 或 减 减 50/50 视各节而定
- 白文本全用 `rgba(255,255,255,0.70)` 备查副本
- CTA 遵循绿色对绿色的反转( 白色填充) + 暗色( 白色大纲) 配对的大纲

### 扩展/ 连接

- 持续时间 : `300ms` (`--expanderDuration`)
- 时间曲线 : `cubic-bezier(0.25, 0.46, 0.45, 0.94)` ——计量 ease-out
- 用于奖励和礼品页面的FAQ部分

### Cookie 同意模块

暗绿色模式卡在页面顶端有"Agree"(绿色填充)和"Manage偏好"(外延)按钮,首次访问时出现;不可拒绝.

### 产品细节组件( PDP 签名集群)

菜单产品页面上重复使用的组件集群(例如: `/menu/product/40498/iced` 以饮料的精华为饮料, `/menu/product/.../nutrition` 用于补充营养事实。这些内容将不改变符号而扩展成份清单。

**大小选项选择器**
- Horizontal row of 4 cup-icon buttons (Tall / Grande / Venti / Trenta)
- Each item: cup silhouette icon on top, size name below (16/700 in Starbucks-Green), fluid-ounce caption (13/400 in Text Black Soft)
- 活动状态:绿色 circular 环线轮廓( R)`2px solid #00754A`) 围绕选定的杯图标
- Inactive: no ring, same typography
- Full-width row, equal spacing
- 容器半径 : `12px` 或平; 单个图标为 `50%` circular
- 铺垫: `16px 24px` 内部

**添加/ 牛奶选择( 外延矩形)**
- Background: `#ffffff`
- 边框 : `1px solid #d6dbde` (输入边框)
- 半径 : `4px`
- 其栏中全宽
- 上方浮标 border: "Add-ins" / "Milk" / "Add-ins" — 13/700 in Text Black, uppercase, `0.325px` letter-spacing
- 显示的数值以中心(例如“冰”、“椰子”、“草莓水果包容之声”): 16/400 文字黑
- 文本中右侧的雪佛龙下方图标
- 重点:边界向绿色角的转移(`#00754A`)

**数字步进器**
- Embedded inside an Add-in row when a quantity is required (e.g., Strawberry Fruit Inclusions scoop)
- `−` minus button + count number + `+` plus button, all inline right of the label
- 按钮 : circular `32×32px` 与 `1px solid #d6dbde` 边框, 中性灰色图标
- 数 : 16/700 文字黑点居中

**Customize Button**
- Background: `#ffffff`
- 文本 : `#00754A` (绿色安分)
- 边框 : `1.5px solid #00754A`
- 半径 : `50px` (满药)
- 铺垫: `14px 40px` (比默认胶囊形大得多——这是次要的初级手术)
- Label: "Customize" with a gold sparkle ✨ icon inset left
- 用于:在大小/牛奶选择后输入饮用定制流程

**添加到顺序按钮( PDP)**
- Background: `#00754A` (Green Accent)
- 文本 : `#ffffff`
- 半径 : `50px`
- 铺垫: `14px 32px`
- 产品卡的顶端右侧和/或库存可用性带内的对齐右侧
- 一样 scale(0.95) 活跃行为作为其他主要 CTA

**Rewards Cost Pill — "200★ item"**
- Background: transparent
- 边框 : `1px solid #cba258` (金刚)
- 文本 : `#cba258` (金刚)
- 半径 : `50px` (满药)
- 铺垫: `4px 12px`
- Content: "200★ item" where `★` is a small filled star glyph — indicates the Rewards Stars required to redeem this item
- 字体: 近似新星 13/700 与 `0.5px` letter-spacing
- 仅用于可奖励的产品

**产品描述带**
- Full-width dark-green band (`#1E3932` House Green)
- 包含上下层:
  1. 酌情支付胶囊形(金)
  2. 产品描述体复制品,白文本(16/400/1.5)
  3. 营养内含摘要 (").140 热量, 25糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖,糖 2.5g fat"),带有信息化的icon工具提示——. 14/700 白色
  4. 营养和成分清单 绿色的白色避孕药按钮
- 铺垫: `32px` 垂直
- 出现在初级产品标题带下

**成份/营养表**
- 营养页面上的双栏布局
- 左栏: "Infedients"标题+列表或“不可用于此项目”占位符文本块,在文本黑软中加一个解释段落 14/400
- 右栏:"Nutrition"标题+标签/值行
- Each row: nutrient label (Proxima Nova 14/400) on the left, value (e.g., "140 calories", "25g", "205 mg**") on the right, separated by a `1px solid #e7e7e7` hairline below
- 咖啡因/安全标记的脚注 13/400 底部的黑软文字
- 营养事实可重复使用的符合规定情况的表格

**存储可用性选择器**
- 显示在大小选项行上的深绿色特征带
- Full-width rounded rectangle with transparent-white interior
- 文字: "关于物品可用性,选择一个仓库",白文本, 14/400
- 右侧: 雪佛龙下架 + 购物袋 SVG 图标用白色轮廓
- 半径 : `4px`
- 高度 : ~48px

**PDP 面包屑**
- 产品标题之上的"Menu / 刷新器 / Pink Energy Drink"线索
- 分隔符 : `/` 文本中黑软斜线字符
- Current page is unlinked, prior pages are underlined green-accent links
- 字体 : 14/400 近新星
- Appears on all PDP pages

**后雪佛龙链接(PDP营养/细节子页)**
- 营养页标题上方的“QQ Back”文本链接
- 绿色调值文字( Q)`#00754A`) 14/700 近新星
- 左切夫龙 `<` 在同一绿色中
- 深层分页上完整的面包屑的替代品


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 4. Component Stylings

### Buttons

**1. Primary Filled — "Explore our afternoon menu / Sign up for free"**
- Background: `#00754A` (Green Accent)
- Text: `#ffffff`
- Border: `1px solid #00754A`
- Radius: `50px` (full pill)
- Padding: `7px 16px`
- Font: SoDoSans, 16px, weight 600, letter-spacing `-0.01em`
- Active state: `transform: scale(0.95)` via `--buttonActiveScale`
- Transition: `all 0.2s ease`

**2. Primary Outlined — "Give them a try / Start an order"**
- Background: transparent
- Text: `#00754A` (Green Accent)
- Border: `1px solid #00754A`
- Same radius/padding/active/transition as Primary Filled

**3. Black Filled — "Join now"**
- Background: `#000000`
- Text: `#ffffff`
- Border: `1px solid #000000`
- Radius: `50px`, Padding: `7px 16px`
- Font: 14px, weight 600
- Used on the top-of-page join strip and similar conversion moments

**4. Dark Outlined — "Sign in"**
- Background: transparent
- Text: `rgba(0, 0, 0, 0.87)` (Text Black)
- Border: `1px solid rgba(0, 0, 0, 0.87)`
- Radius: `50px`, Padding: `7px 16px`
- Font: 14px, weight 600

**5. Green-on-Green Inverted — "See the spring menu"**
- Background: `#ffffff`
- Text: `#00754A`
- Border: `1px solid #ffffff`
- Used when the surface behind the button is the dark green House Green band — white button with green text instead of a filled green pill on green bg

**6. Outlined on Dark — "Learn more / Order now"**
- Background: transparent
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Used on dark-green feature bands for secondary action paired with a white filled CTA

**7. Consent Agree (dark-green variant)**
- Background: `rgb(0, 130, 72)` (a specific variant green used in the cookie-consent module)
- Text: `#ffffff`
- No border, `50px` radius, `7px 16px` padding, 14px / weight 400
- Slightly brighter than Green Accent — reserved for the consent-banner Agree action

**8. Frap — Floating Circular Order Button**
- Background: `#00754A` (Green Accent)
- Icon: `#ffffff`
- Size: `5.6rem / 56px` (standard), `4rem / 40px` (mini variant)
- Radius: `50%` (full circle)
- Fixed bottom-right, `-0.8rem` touch offset for extra tap comfort
- Shadow stack: base `0 0 6px rgba(0,0,0,0.24)` + ambient `0 8px 12px rgba(0,0,0,0.14)`
- Active state: ambient shadow fades to `0 8px 12px rgba(0,0,0,0)`
- This is the product's signature elevation element — it floats over every scrolled surface

**9. Full-width Feedback Tab — "Provide feedback"**
- Background: `#00754A`
- Text: `#ffffff`
- Radius: `12px 12px 0px 0px` (top-rounded only)
- Padding: `8px 16px`
- Font: 14px, weight 400
- Positioned fixed bottom-right-inside, attached to the viewport edge

### Cards & Containers

**Content Card (default)**
- Background: `#ffffff` (`--cardBackgroundColor`)
- Radius: `12px` (`--cardBorderRadius`)
- Shadow: `0px 0px .5px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.24)` (`--cardBoxShadow`)
- Used for: feature cards, menu-item tiles, reward-status panels

**Gift Card Tile**
- Background: illustrated photography fills the card (no solid bg)
- Radius: similar to cards (`~12px`, slightly tighter on corners)
- Shadow: lighter than default card — these are treated like physical cards laid on the canvas
- Labeled by category above the card grid (Spring, Thank You, Birthday, Celebration, Mother's Day, Appreciation, Encouragement, Milestones, Anytime)

**Rewards Status Cards (Rewards page signature)**
- Three-column grid: Bronze / Gold / Silver-ish — each a dark-green (`#1E3932`) panel with:
  - Colored gradient/color header ring
  - Numbered "Level" badge
  - Status title in large SoDoSans weight 600
  - Stars / benefits list in white/translucent-white text
  - Bottom "As you earn more stars…" progression caption

**Partnership Card (Rewards)**
- Background: `#faf6ee` (Gold Lightest) warm-cream surface
- Content: partner logos ("SkyMiles", "Bonvoy") centered, with descriptive text below
- Radius and shadow follow default card spec

**Dropdown Menu (Account dropdown, top-nav)**
- Background: `#f9f9f9` (Neutral Cool)
- Menu items at `24px / weight 400` in Text Black
- No border — just background surface shift against white nav

**Modal**
- Padding: `2.4rem` (`--modalPadding`)
- Top padding: `8.8rem` (`--modalTopPadding`) — leaves room for close button / header
- Combined vertical padding: `11.2rem`
- Radius inherits from card spec (`12px`)

### Inputs & Forms

**Floating Label Input**
- Label floats above the input border when focused/filled
- Desktop label font size: `1.9rem` default, animates to `1.4rem` when active
- Mobile label font size: `1.6rem` default, animates to `1.3rem` active
- Label horizontal offset: `12px` from left
- Active label translate: up to `-12px` with `-50%` Y translation
- Field padding: `12px`
- Form horizontal padding: `1.6rem`
- Validation: valid-field gets `rgba(green-light, 0.33)` tint; invalid-field gets `rgba(red, 0.05)` tint
- Transition: `0.3s option-label-marker-expansion cubic-bezier(0.32, 2.32, 0.61, 0.27)` on checked-input

**Option Icon (checkbox/radio)**
- Padding: `3px` inner
- Uses the checked-input cubic-bezier animation above (a slightly "springy" 2.32 overshoot curve)

### Navigation

**Global Nav (top bar)**
- Fixed position with progressive heights: `64px` xs → `72px` mobile → `83px` tablet → `99px` desktop
- Shadow stack: `0 1px 3px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)` — three-layer soft lift
- Left: Starbucks wordmark logo, offsetting by `99px` (md) / `131px` (lg) from left edge
- Primary links inline in SoDoSans weight 400–600: Menu · Rewards · Gift Cards
- Right: Find a store link + Sign in (outlined) + Join now (black filled)

**Sub-nav (second bar, e.g., Rewards internal)**
- Height: `53px` (global subnav) / `48px` (internal subnav)
- Typically horizontal tab group beneath the global nav

**Mobile Nav**
- Collapses to a hamburger drawer below tablet breakpoint
- Frap floating button persists at bottom-right regardless of nav state

### Image Treatment

- **Hero photography**: Product photos (beverages in clear glass with colored backgrounds — coral, sage, warm amber) occupy ~40vw of a split-hero layout; text occupies the other 60vw (`--headerCrateProportion: 40vw` / `--contentCrateProportion: 60vw`)
- **Gift card illustrations**: Each card is a distinct illustrated photograph (painted-feel, hand-drawn-looking, warm color palette). Never generic generated graphics.
- **Rewards ceremony imagery**: Photographs of Starbucks Rewards App screens held in-hand, angled compositions — product-in-context photography.
- **Menu thumbnails**: Square or 4:3 product photography with clean white/cream backdrops, slight soft drop-shadow around the glass.
- **Image fade-in**: `opacity 0.3s ease-in` transition on image load (`--imageFadeTransition`).

### Feature Band (dark-green hero strip)

Full-width `#1E3932` (House Green) band with:
- Left: white headline + subhead + CTA row
- Right: product photography or illustration
- Split ratio ~40/60 or 50/50 depending on section
- White text throughout with `rgba(255,255,255,0.70)` for secondary copy
- CTAs follow Green-on-Green Inverted (white filled) + Outlined on Dark (white outline) pairing

### Expander / Accordion

- Duration: `300ms` (`--expanderDuration`)
- Timing curve: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — a measured ease-out
- Used for FAQ sections on Rewards and gift page

### Cookie Consent Module

Dark-green modal card at top of page with "Agree" (green-filled) and "Manage preferences" (outlined) buttons. Appears on first visit; dismissible.

### Product Detail Components (PDP signature cluster)

A repeating component cluster used on menu product pages (e.g., `/menu/product/40498/iced` for a drink detail, `/menu/product/.../nutrition` for nutrition facts). These extend the component inventory without changing tokens.

**Size Options Selector**
- Horizontal row of 4 cup-icon buttons (Tall / Grande / Venti / Trenta)
- Each item: cup silhouette icon on top, size name below (16/700 in Starbucks-Green), fluid-ounce caption (13/400 in Text Black Soft)
- Active state: a green circular ring outline (`2px solid #00754A`) around the selected cup icon
- Inactive: no ring, same typography
- Full-width row, equal spacing
- Radius of container: `12px` or flat; individual icons are `50%` circular
- Padding: `16px 24px` internal

**Add-in / Milk Select (outlined rectangle)**
- Background: `#ffffff`
- Border: `1px solid #d6dbde` (Input Border)
- Radius: `4px`
- Full-width in its column
- Floating label above top border: "Add-ins" / "Milk" / "Add-ins" — 13/700 in Text Black, uppercase, `0.325px` letter-spacing
- Value displayed centered (e.g., "Ice", "Coconut", "Strawberry Fruit Inclusions scoop"): 16/400 Text Black
- Chevron-down icon right side in Text Black Soft
- Focus: border shifts to Green Accent (`#00754A`)

**Numeric Stepper**
- Embedded inside an Add-in row when a quantity is required (e.g., Strawberry Fruit Inclusions scoop)
- `−` minus button + count number + `+` plus button, all inline right of the label
- Buttons: circular `32×32px` with `1px solid #d6dbde` border, neutral gray icon
- Count number: 16/700 Text Black centered

**Customize Button**
- Background: `#ffffff`
- Text: `#00754A` (Green Accent)
- Border: `1.5px solid #00754A`
- Radius: `50px` (full pill)
- Padding: `14px 40px` (generously larger than default pills — this is a secondary primary action)
- Label: "Customize" with a gold sparkle ✨ icon inset left
- Used for: entering the drink-customization flow after size/milk selection

**Add to Order Button (PDP)**
- Background: `#00754A` (Green Accent)
- Text: `#ffffff`
- Radius: `50px`
- Padding: `14px 32px`
- Pinned top-right of product card and/or aligned right within the store-availability band
- Same scale(0.95) active behavior as other primary CTAs

**Rewards Cost Pill — "200★ item"**
- Background: transparent
- Border: `1px solid #cba258` (Gold)
- Text: `#cba258` (Gold)
- Radius: `50px` (full pill)
- Padding: `4px 12px`
- Content: "200★ item" where `★` is a small filled star glyph — indicates the Rewards Stars required to redeem this item
- Font: Proxima Nova 13/700 with `0.5px` letter-spacing
- Used only on products that are Rewards-redeemable

**Product Description Band**
- Full-width dark-green band (`#1E3932` House Green)
- Contains top-to-bottom:
  1. Rewards Cost Pill (gold) if applicable
  2. Product description body copy in white (16/400/1.5)
  3. Nutritional summary inline ("140 calories, 25g sugar, 2.5g fat") with info-icon tooltip — 14/700 white
  4. "Full nutrition & ingredients list" outlined-white-on-green pill button
- Padding: `32px` vertical
- Appears beneath the primary product header band

**Ingredients / Nutrition Table**
- Two-column layout on the Nutrition page
- Left column: "Ingredients" header + list or "Not available for this item" placeholder text block with an explanatory paragraph in Text Black Soft 14/400
- Right column: "Nutrition" header + label/value rows
- Each row: nutrient label (Proxima Nova 14/400) on the left, value (e.g., "140 calories", "25g", "205 mg**") on the right, separated by a `1px solid #e7e7e7` hairline below
- Footnote for caffeine/asterisk markers in 13/400 Text Black Soft at the bottom
- Reusable pattern for nutrition facts regulation-compliant tables

**Store Availability Selector**
- Appears on dark-green feature band above the size-options row
- Full-width rounded rectangle with transparent-white interior
- Text: "For item availability, choose a store" in white, 14/400
- Right side: chevron-down affordance + shopping-bag SVG icon in white outline
- Radius: `4px`
- Height: ~48px

**PDP Breadcrumb**
- "Menu / Refreshers / Pink Energy Drink" trail above the product title
- Separator: `/` slash character in Text Black Soft
- Current page is unlinked, prior pages are underlined green-accent links
- Font: 14/400 Proxima Nova
- Appears on all PDP pages

**Back Chevron Link (PDP nutrition / detail sub-pages)**
- "← Back" text link above section headings on the nutrition page
- Text in Green Accent (`#00754A`) 14/700 Proxima Nova
- Left chevron `<` in the same green
- Alternative to full breadcrumb on deep sub-pages


<!-- source:end -->

</details>

## 5. 版式原则

### 间距系统

语义尺度( 定值) `1rem = 10px`):

| Token | Rem | Pixels | Typical Use |
|-------|-----|--------|-------------|
| `--space-1` | `0.4rem` | 4px | Tightest inline padding |
| `--space-2` | `0.8rem` | 8px | 间隙小, 按钮垂直绑定 |
| `--space-3` | `1.6rem` | 16px | 默认——卡片贴,外侧沟Xs |
| `--space-4` | `2.4rem` | 24px | 区内间隔,外沟md |
| `--space-5` | `3.2rem` | 32px | 区间间主要间隔 |
| `--space-6` | `4rem` | 40px | Large gaps, outer gutter lg, header crate |
| `--space-7` | `4.8rem` | 48px | 区间间距 |
| `--space-8` | `5.6rem` | 56px | 呼吸非常大——破烂的身高 |
| `--space-9` | `6.4rem` | 64px | Widest section padding |

**盖特的标志:**
- `--outerGutter: 1.6rem` (16px,默认/移动)
- `--outerGutterMedium: 2.4rem` (24px,平板电脑)
- `--outerGutterLarge: 4.0rem` (40px, 桌面) (中文(简体) ).

**通用节奏常数 :** `1.6rem` (16px)作为默认的外侧沟槽、卡片贴垫基线和文本大小出现在每一页中 3 体 —— 系统最频繁的间隔单元。

### 网格容器( C)

- 列宽度尺度 : `--columnWidthSmall: 343px` / `Medium: 500px` / `Large: 720px` / `XLarge: 1440px`
- 礼品卡网格使用一个 3-5- 电网的响应性电网 `~343px` 瓷砖
- 奖励状态部分 : 3- 上深绿色面板 `lg+` 断点
- 首屏:不对称分裂 40% (图) / 60% (内容)通过 `--headerCrateProportion` / `--contentCrateProportion`

### 白空间哲学

白空间带有"咖啡馆里空间充裕"的感觉. 部分贴补倾斜(英语:40–64px。内容块由白空而不是分隔符分隔。`#f2f0eb`)本身是白色卡片和绿色特征带之间的视觉呼吸.

### 圆角刻度

| 数值 | 使用 |
|-------|-----|
| `12px` | 纸牌、模式、菜单项目牌(`--cardBorderRadius`) |
| `12px 12px 0 0` | Full-width feedback tab (top-rounded only) |
| `50px` | All buttons — full-pill radius (`--buttonBorderRadius`) |
| `50%` | Circular 图标、 浮式按钮、 缩略图 |
| 专业 | `3.3333%/5.298%` 椭圆形 Starbucks- 维萨-卡德模型(`--svcRoundedCorners`) |


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 5. Layout Principles

### Spacing System

Rem-based semantic scale (anchored `1rem = 10px`):

| Token | Rem | Pixels | Typical Use |
|-------|-----|--------|-------------|
| `--space-1` | `0.4rem` | 4px | Tightest inline padding |
| `--space-2` | `0.8rem` | 8px | Small gap, button vertical padding |
| `--space-3` | `1.6rem` | 16px | Default — card padding, outer gutter xs |
| `--space-4` | `2.4rem` | 24px | Section inner spacing, outer gutter md |
| `--space-5` | `3.2rem` | 32px | Major between-section spacing |
| `--space-6` | `4rem` | 40px | Large gaps, outer gutter lg, header crate |
| `--space-7` | `4.8rem` | 48px | Section-to-section spacing |
| `--space-8` | `5.6rem` | 56px | Very large breathing — Frap height |
| `--space-9` | `6.4rem` | 64px | Widest section padding |

**Gutter tokens:**
- `--outerGutter: 1.6rem` (16px, default / mobile)
- `--outerGutterMedium: 2.4rem` (24px, tablet)
- `--outerGutterLarge: 4.0rem` (40px, desktop)

**Universal rhythm constant:** `1.6rem` (16px) appears across every page as the default outer gutter, card padding baseline, and text size 3 body — the system's most frequent spacing unit.

### Grid & Container

- Column width scale: `--columnWidthSmall: 343px` / `Medium: 500px` / `Large: 720px` / `XLarge: 1440px`
- Gift-card grid uses a 3-5-up responsive grid of `~343px` tiles
- Rewards status section: 3-up dark-green panels at `lg+` breakpoints
- Hero: asymmetric split 40% (image) / 60% (content) via `--headerCrateProportion` / `--contentCrateProportion`

### Whitespace Philosophy

Whitespace carries the feeling of "plenty of space in the café." Section padding leans generous (40–64px). Content blocks are separated by whitespace rather than dividers. The cream canvas (`#f2f0eb`) is itself a visual breath between white cards and green feature bands.

### Border Radius Scale

| Value | Use |
|-------|-----|
| `12px` | Cards, modals, menu-item tiles (`--cardBorderRadius`) |
| `12px 12px 0 0` | Full-width feedback tab (top-rounded only) |
| `50px` | All buttons — full-pill radius (`--buttonBorderRadius`) |
| `50%` | Circular icons, Frap floating button, avatar thumbnails |
| Specialty | `3.3333%/5.298%` elliptical for Starbucks-Visa-Card mockups (`--svcRoundedCorners`) |


<!-- source:end -->

</details>

## 6。深度和高度

| 职等 | 治疗 | 使用 |
|-------|-----------|-----|
| 纸牌 | `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)` | 默认内容卡——低语软双影 |
| Global Nav | `0 1px 3px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)` | Triple-layer soft lift on the fixed top bar |
| 垃圾基地 | `0 0 6px rgba(0,0,0,0.24)` | 浮在水面上的光环 circular 反恐中心 |
| 垃圾场 | `0 8px 12px rgba(0,0,0,0.14)` | 堆叠的方向环境——向前浮动 |
| 礼品卡 | 图片周围的光影 | 物理卡片对礼物牌的感觉 |
| Starbucks Card (SVC) | `drop-shadow(0 4px 1px rgba(0,0,0,0.11)) drop-shadow(0 0 2px rgba(0,0,0,0.24))` | Stacked SVG drop shadows for Starbucks Card visuals |

**影子哲学:** 微声柔软,分层叠加的固体——系统从未到达一个重的投影。相反,它堆叠着 2–3 低α阴影, 具有不同的偏移, 模拟真实世界环境+直接照明。 Frap 按钮是任意页面中最高的元素 。

### 装饰性深度

- **No gradient system** — surfaces are solid color-block
- **颜色块条条** 带深(深绿色带在奶油/白色身体段之间读作“后继特征区”)
- **SVG 过滤阴影** 打开 Starbucks-卡片视觉会增加一点 3D 物理无 box-shadow


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Card | `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)` | Default content cards — a whisper-soft dual-shadow |
| Global Nav | `0 1px 3px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)` | Triple-layer soft lift on the fixed top bar |
| Frap Base | `0 0 6px rgba(0,0,0,0.24)` | Base halo around the floating circular CTA |
| Frap Ambient | `0 8px 12px rgba(0,0,0,0.14)` | Stacked directional ambient — floats the Frap forward |
| Gift Card | Light drop shadow around illustrated photograph | Physical-card feel for gift tiles |
| Starbucks Card (SVC) | `drop-shadow(0 4px 1px rgba(0,0,0,0.11)) drop-shadow(0 0 2px rgba(0,0,0,0.24))` | Stacked SVG drop shadows for Starbucks Card visuals |

**Shadow philosophy:** Whisper-soft, layered over solid — the system never reaches for a single heavy drop shadow. Instead, it stacks 2–3 low-alpha shadows with different offsets to simulate real-world ambient + direct lighting. The Frap button is the most elevated element on any page.

### Decorative Depth

- **No gradient system** — surfaces are solid color-block
- **Color-block banding** carries perceived depth (dark-green bands read as "recessed feature zones" between cream/white body sections)
- **SVG filter shadows** on Starbucks-Card visuals add a slight 3D physicality without a box-shadow


<!-- source:end -->

</details>

## 7。 。 。 。 。 。

### 执行
- 使用中性温暖( U)`#f2f0eb`)或陶瓷(`#edebe9`)作为页面页面底色而不是纯白色——温暖的奶油是签名.
- 将绿色的层次绘制到其预期的表面作用上—— Starbucks 绿色为标题,绿色ACCENTAs, 绿色为深带, 提升为装饰
- 继续追踪 `-0.01em` / `-0.16px` 整个系统
- Use 50px full-pill radius on every button without exception
- Apply `transform: scale(0.95)` as the universal button active state
- 仅供奖励状态仪式使用
- Use SoDoSans for nearly everything; switch to Lander Tall serif only for Rewards editorial headlines; reserve Kalam script for Careers "cup name" moments
- Layer 2–3 low-alpha shadows instead of one heavier drop shadow for elevation
- Use the Frap circular CTA as the persistent floating order entry on every shopping surface
- Let the cream canvas breathe between content cards — use whitespace, not dividers

### Don't
- 勿用纯白色作为页页面底色——温暖的奶油温度是载荷的
- Don't pick "one brand green" — the four-green system is intentional; using only `#006241` everywhere flattens the brand
- Don't use Gold as a general-purpose accent — it's a Rewards signal only
- Don't square the corners on buttons — the 50px pill is universal
- Don't introduce gradient fills — the system is color-block throughout
- Don't weight-contrast h1 and h2 by size — the hierarchy comes from weight + color (600 Starbucks-Green vs 400 Text Black)
- Don't use pure black for body text — `rgba(0,0,0,0.87)` matches the warm canvas
- Don't skip the `scale(0.95)` active feedback on buttons — it's a signature micro-interaction
- Don't stack single heavy shadows; always layer 2–3 low-alpha ones
- Don't introduce serifs or scripts into the main shopping flow — they belong to Rewards and Careers contexts respectively


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 7. Do's and Don'ts

### Do
- Use Neutral Warm (`#f2f0eb`) or Ceramic (`#edebe9`) as page canvas instead of pure white — the warm cream is the signature
- Map the green tiers to their intended surface role — Starbucks Green for headings, Green Accent for CTAs, House Green for deep bands, Uplift for decorative
- Keep tracking tight at `-0.01em` / `-0.16px` on SoDoSans across the whole system
- Use 50px full-pill radius on every button without exception
- Apply `transform: scale(0.95)` as the universal button active state
- Reserve Gold for Rewards-status ceremony moments only
- Use SoDoSans for nearly everything; switch to Lander Tall serif only for Rewards editorial headlines; reserve Kalam script for Careers "cup name" moments
- Layer 2–3 low-alpha shadows instead of one heavier drop shadow for elevation
- Use the Frap circular CTA as the persistent floating order entry on every shopping surface
- Let the cream canvas breathe between content cards — use whitespace, not dividers

### Don't
- Don't use pure white as the page canvas — the warm cream temperature is load-bearing
- Don't pick "one brand green" — the four-green system is intentional; using only `#006241` everywhere flattens the brand
- Don't use Gold as a general-purpose accent — it's a Rewards signal only
- Don't square the corners on buttons — the 50px pill is universal
- Don't introduce gradient fills — the system is color-block throughout
- Don't weight-contrast h1 and h2 by size — the hierarchy comes from weight + color (600 Starbucks-Green vs 400 Text Black)
- Don't use pure black for body text — `rgba(0,0,0,0.87)` matches the warm canvas
- Don't skip the `scale(0.95)` active feedback on buttons — it's a signature micro-interaction
- Don't stack single heavy shadows; always layer 2–3 low-alpha ones
- Don't introduce serifs or scripts into the main shopping flow — they belong to Rewards and Careers contexts respectively


<!-- source:end -->

</details>

## 8. Responsive Behavior

### 断点

Inferred from component width tokens and progressive nav heights:

| 名称 | 宽度 | 密钥更改 |
|------|-------|-------------|
| xs | < 480px | Global nav 64px; hamburger menu; single-column layouts; pill buttons full-width |
| Mobile | 480–767px | Global nav 72px; gift-card grid 2-up; card padding tightens |
| Tablet | 768–1023px | Global nav 83px; gift-card grid 3-up; hero split begins to appear |
| Desktop | 1024–1439px | Global nav 99px; gift-card grid 4-up; full asymmetric hero 40/60 |
| 最大值 | 1440px+ | 内容上限, 时间 `--columnWidthXLarge`; 礼品卡网格 5- 上;额外奶油边距 |

### 触控区域

- 胶囊形按钮在 `7px 16px` 贴纸量度 ~32px 高-以下( 下) 44px WCAG AAA 最小的触摸表面。在移动时,按钮垫面可视似扩展以达到最小值 。
- 浮起来的垃圾 circular 按钮在 `56px` 远远高于最低水平。
- 废物用途 `--frapTouchOffset: calc(-1 * .8rem)` 以扩展水龙头区域 8px 超越视觉边缘。
- 表格浮标输入器在移动上增大标签字体大小( Q)1.6rem 基础对 1.9rem 桌面)——以臂长的手拍和读取比较容易.

### 折叠战略

- **Global nav height scales progressively**: 64 → 72 → 83 → 99px across breakpoints, not a single value
- **首屏分裂崩溃**: 40/60 移动时不对称的分割 ~ 堆叠(图像顶部,下方内容)
- **Gift-card grid**: 5-up → 4-up → 3-up → 2-up → 1-up across breakpoints with adjusted card widths
- **Feature bands**: Stay full-width but text + imagery stack vertically on mobile
- **Outer gutter scales**: 16px → 24px → 40px as viewport grows
- **奖励 3-列状态面板**: 移动时堆叠到单列

### 图像行为

- 首屏产品摄影作物在移动上垂直收紧;内容成为视觉主播
- 礼品卡插图 保存宽度比; 纸牌网格重流
- `opacity 0.3s ease-in` 图像负荷上的淡入式过渡( 防止 jaring 流行)
- 按比例奖励应用摄影尺度; 永远不伸缩


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 8. Responsive Behavior

### Breakpoints

Inferred from component width tokens and progressive nav heights:

| Name | Width | Key Changes |
|------|-------|-------------|
| xs | < 480px | Global nav 64px; hamburger menu; single-column layouts; pill buttons full-width |
| Mobile | 480–767px | Global nav 72px; gift-card grid 2-up; card padding tightens |
| Tablet | 768–1023px | Global nav 83px; gift-card grid 3-up; hero split begins to appear |
| Desktop | 1024–1439px | Global nav 99px; gift-card grid 4-up; full asymmetric hero 40/60 |
| XLarge | 1440px+ | Content caps at `--columnWidthXLarge`; gift-card grid 5-up; extra cream margin |

### Touch Targets

- Pill buttons at `7px 16px` padding measure ~32px tall — below 44px WCAG AAA minimum for touch-only surfaces. On mobile, button padding may be visually expanded to meet the minimum.
- Frap floating circular button at `56px` is well above minimum.
- Frap uses `--frapTouchOffset: calc(-1 * .8rem)` to extend tap area 8px beyond visual edge.
- Form float-label inputs grow their label font size on mobile (1.6rem base vs 1.9rem desktop) — easier to tap and read at arm's-length.

### Collapsing Strategy

- **Global nav height scales progressively**: 64 → 72 → 83 → 99px across breakpoints, not a single value
- **Hero split collapses**: 40/60 asymmetric split → stacked (image top, content below) at mobile
- **Gift-card grid**: 5-up → 4-up → 3-up → 2-up → 1-up across breakpoints with adjusted card widths
- **Feature bands**: Stay full-width but text + imagery stack vertically on mobile
- **Outer gutter scales**: 16px → 24px → 40px as viewport grows
- **Rewards 3-column status panels**: Stack to single column on mobile

### Image Behavior

- Hero product photography crops tighter vertically on mobile; content becomes the visual anchor
- Gift-card illustrations preserve aspect ratio; card grid reflows
- `opacity 0.3s ease-in` fade-in transition on image load (prevents jarring pop-in)
- Rewards app-in-hand photography scales proportionally; never stretches


<!-- source:end -->

</details>

## 9. Agent Prompt Guide

### 快速颜色引用

- 初级CTA: "绿色中枢(CTA):`#00754A`)"
- 主要的CTA文本:"White (White) (英语:`#ffffff`)"
- 品牌标题: "Starbucks 绿色( G)`#006241`)"
- 特色乐队/脚步:"House Green (英语:`#1E3932`)"
- 页面页面底色:"Neutral Warm (`#f2f0eb`)"
- 纸板页面底色: "白色( Name`#ffffff`)"
- 光线标题文字: "Text Black (Text Black)"(Text Black) 光线文字:`rgba(0,0,0,0.87)`)"
- 光线上的正文:"Text Black Soft (Text Black Soft (英语:`rgba(0,0,0,0.58)`)"
- 深绿色的正文: "Text White Soft (Text White Soft (Text) ) :"(Text White Soft (Text) :"(Text White Soft (Text)) :"(Text White Soft (Text)) :"(Text White Soft (Text) :"(Text White Soft (T) :"(Text White Soft (T) :"White Sweet(Tright) :","Wh] ,"(Text ) :","Wh] ,",",","W",",",",",",",",",",",",",",",",",",",",",",",",",",",",",",",",",",",",","`rgba(255,255,255,0.70)`)"
- 赏重强调色:"金色(`#cba258`)"
- 奖励文本:"奖励绿色(`#33433d`)"
- 贬曰:"红(......`#c82014`)"

### 示例组件提示

1. "Create a primary Starbucks CTA pill button with Green Accent (`#00754A`) background, white text 'Explore our afternoon menu', SoDoSans font at 16px weight 600 with `-0.01em` letter-spacing, `50px` border-radius (full pill), `7px 16px` padding. Apply `transform: scale(0.95)` as the active state with a `0.2s ease` transition."

2. "设计与怀特的"内容卡"("White").`#ffffff`)背景情况 `12px` border-radius,分层阴影 `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)`。 标本内容 `16–24px` (`--space-3` 改为: `--space-4`。 设置在中立的温暖上( ) 。`#f2f0eb`页面页面底色与 `16px` 和兄弟姐妹的距离" ("我和兄弟的距离")

3. "制造了浮着的废墟 circular 命令按钮... `56px` 直径,绿色`#00754A`)填充,白色购物袋图标居中。层层阴影: `0 0 6px rgba(0,0,0,0.24)` + `0 8px 12px rgba(0,0,0,0.14)`. Fixed 右下位置为 `-0.8rem` 触摸偏移。活动状态会崩溃环境阴影到 `0 8px 12px rgba(0,0,0,0)` 与 `scale(0.95)`."

4. " 打造了深绿色的特色乐队——与House Green(英语:House Green (film))的全线段.`#1E3932`)背景。左栏:白色SoDoSans h2 时 间 24px 字重 600,然后是文字白软(`rgba(255,255,255,0.70)`) 身体段落和一个带有两个按钮的 CTA 列( 初等版的白文本为绿色 ACCent 文本, 中等版的深白边框为外观 ) 。 右栏: 产品摄影 。 分割比例 。 40/60,垂直于下方 `768px`."

5. "创造奖励地位卡——豪斯格林(英语:House Green (film)).`#1E3932`) 面板与 `12px` border-radius,颜色梯度顶端 stripe (铜/银/金),SoDoSans中的标题 24px 字重 600 白话中,作为白话的白话 `rgba(255,255,255,0.70)` 次要标题。在文本 White Soft 中,从下到下向文本。 Stack 3 网格中的面板, 位于 `lg+`,移动的单列。"

6. "设计礼品卡片——卡片半径匹配 `12px`,填充整个表面的插图照片(手绘水彩绘感觉)。低沉的阴影让它感觉像在奶油页面底色上贴上一张物理卡。在SoDoSans的分类标签(“Spring”、“Thank You”、“Birthday”)下组 24px 字重 400 超过电网。"

7. "Create a Starbucks product-detail header — House Green (`#1E3932`) band with breadcrumb 'Menu / Refreshers / Pink Energy Drink' in 14/400 white above the product title in SoDoSans 32/700 uppercase white. Product photograph centered below title. Below photo: a 4-up size selector row — each cup-icon button shows a vertical cup silhouette, size name ('Tall' / 'Grande' / 'Venti' / 'Trenta') in 16/700 white, and fluid-ounce in 13/400 Text White Soft. Selected size wraps the cup icon in a `2px solid #00754A` circular ring."

8. "Build a Starbucks customize flow — under the size selector, 3 stacked outlined-rectangle input rows (white bg, `1px solid #d6dbde` border, `4px` radius). Each has a floating label ('Add-ins', 'Milk', 'Add-ins') above the top border in 13/700 Text Black uppercase. Value centered (e.g., 'Ice', 'Coconut'). Right side: chevron-down in Text Black Soft. For the scoop row, embed a numeric stepper (`−` `1` `+` with circular `32px` outlined buttons). Below all three fields: outlined green 'Customize' pill with gold sparkle icon, `50px` radius, `14px 40px` padding. Pair with a Green Accent filled 'Add to Order' pill in the same row."

9. "Design a Starbucks product description band — full-width House Green (`#1E3932`) below product header. Top: a gold-outlined '200★ item' Rewards Cost Pill (`50px` radius, `4px 12px` padding, gold `#cba258` border and text). Below: product description in white 16/400/1.5. Nutritional inline summary in white 14/700 ('140 calories, 25g sugar, 2.5g fat') with info-icon tooltip. Outlined-white-on-green pill button 'Full nutrition &amp; ingredients list'. 32px vertical padding."

10. "Create a Starbucks nutrition facts table — two-column layout inside a White card. Left column: 'Ingredients' header (24/400 Text Black), followed by ingredient list or 'Not available for this item' placeholder paragraph in 14/400 Text Black Soft. Right column: 'Nutrition' header, then label/value rows (nutrient name left, value right) separated by `1px solid #e7e7e7` hairlines. Typography: labels in 14/400 Text Black, values in 14/700 Text Black right-aligned. Footnote asterisk markers in 13/400 Text Black Soft at the bottom."

### 迭代指南

When refining existing screens generated with this design system:
1. 一次集中关注一个部分
2. Reference specific color names and hex codes from this document
3. Use natural language descriptions ("warm cream canvas," "four-tier green system") alongside exact values
4. 保护 50px 胶囊形+ `scale(0.95)` 普遍活跃状态
5. 检查是否绘制了绿色图,以正确定位其角色(CTA的绿色ACCent, Starbucks 绿色为领头, 绿色为乐队).
6. Don't introduce gradients — the system is color-block
7. 保持SoDoSans的跟踪 `-0.01em` / `-0.16px` 全面发展

### 已知缺口

- SoDoSans is a proprietary typeface not available on Google Fonts — when implementing publicly, use Inter or Manrope as a substitute and document the swap
- 高地( 奖励) serif)也是自定义的——用Iowan Old Style, Lora, 或源代码代替 Serif 专业版
- 每一组成部分的具体动画时间超出少数记录的时间(`--duration: 0.4s`, `--iconTransition: all ease-out 0.2s`, `--expanderDuration: 300ms`) 不被捕获到每个交互表面
- 格式错误状态全样式(红色边框字重,图标放置)可见于锡词元上,但并非详尽提取
- 职业页特定组件(cup-name card, 搜索无线电网格)以符号名称引用,但本提取内容未涵盖
- Starbucks 签证卡/ Starbucks-卡(SVC) 详细的模拟规格提示如下: `--svcRoundedCorners` 财务报告和已审计财务报表 `--svcShadowFilter` 符号,但未充分记录

<details>
<summary>英文原文</summary>

<!-- source:body -->
## 9. Agent Prompt Guide

### Quick Color Reference

- Primary CTA: "Green Accent (`#00754A`)"
- Primary CTA text: "White (`#ffffff`)"
- Brand heading: "Starbucks Green (`#006241`)"
- Feature band / footer: "House Green (`#1E3932`)"
- Page canvas: "Neutral Warm (`#f2f0eb`)"
- Card canvas: "White (`#ffffff`)"
- Heading text on light: "Text Black (`rgba(0,0,0,0.87)`)"
- Body text on light: "Text Black Soft (`rgba(0,0,0,0.58)`)"
- Body text on dark-green: "Text White Soft (`rgba(255,255,255,0.70)`)"
- Rewards accent: "Gold (`#cba258`)"
- Rewards text: "Rewards Green (`#33433d`)"
- Destructive: "Red (`#c82014`)"

### Example Component Prompts

1. "Create a primary Starbucks CTA pill button with Green Accent (`#00754A`) background, white text 'Explore our afternoon menu', SoDoSans font at 16px weight 600 with `-0.01em` letter-spacing, `50px` border-radius (full pill), `7px 16px` padding. Apply `transform: scale(0.95)` as the active state with a `0.2s ease` transition."

2. "Design a content card with White (`#ffffff`) background at `12px` border-radius, layered shadow `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)`. Pad contents `16–24px` (`--space-3` to `--space-4`). Place on a Neutral Warm (`#f2f0eb`) page canvas with `16px` gap to siblings."

3. "Build the Frap floating circular order button — `56px` diameter, Green Accent (`#00754A`) fill, white shopping-bag icon centered. Layered shadow: `0 0 6px rgba(0,0,0,0.24)` + `0 8px 12px rgba(0,0,0,0.14)`. Fixed position bottom-right with `-0.8rem` touch offset. Active state collapses the ambient shadow to `0 8px 12px rgba(0,0,0,0)` with `scale(0.95)`."

4. "Build a dark-green feature band — full-width section with House Green (`#1E3932`) background. Left column: white SoDoSans h2 at 24px weight 600, followed by a Text White Soft (`rgba(255,255,255,0.70)`) body paragraph and a CTA row with two buttons (White-filled with Green Accent text for primary, Outlined-on-Dark white border for secondary). Right column: product photography. Split ratio 40/60, stacked vertically below `768px`."

5. "Create a Rewards status card — House Green (`#1E3932`) panel with `12px` border-radius, colored gradient top stripe (Bronze/Silver/Gold tier). Title in SoDoSans 24px weight 600 in white. Benefits list as white bullets with `rgba(255,255,255,0.70)` secondary captions. Bottom progression text in Text White Soft. Stack 3 panels in a grid at `lg+`, single column on mobile."

6. "Design a gift-card tile — card radius matches `12px`, fills with an illustrated photograph (hand-drawn watercolor-painted feel) as the entire surface. Subtle drop shadow makes it feel like a physical card on the cream canvas. Group under a category label ('Spring', 'Thank You', 'Birthday') in SoDoSans 24px weight 400 above the grid."

7. "Create a Starbucks product-detail header — House Green (`#1E3932`) band with breadcrumb 'Menu / Refreshers / Pink Energy Drink' in 14/400 white above the product title in SoDoSans 32/700 uppercase white. Product photograph centered below title. Below photo: a 4-up size selector row — each cup-icon button shows a vertical cup silhouette, size name ('Tall' / 'Grande' / 'Venti' / 'Trenta') in 16/700 white, and fluid-ounce in 13/400 Text White Soft. Selected size wraps the cup icon in a `2px solid #00754A` circular ring."

8. "Build a Starbucks customize flow — under the size selector, 3 stacked outlined-rectangle input rows (white bg, `1px solid #d6dbde` border, `4px` radius). Each has a floating label ('Add-ins', 'Milk', 'Add-ins') above the top border in 13/700 Text Black uppercase. Value centered (e.g., 'Ice', 'Coconut'). Right side: chevron-down in Text Black Soft. For the scoop row, embed a numeric stepper (`−` `1` `+` with circular `32px` outlined buttons). Below all three fields: outlined green 'Customize' pill with gold sparkle icon, `50px` radius, `14px 40px` padding. Pair with a Green Accent filled 'Add to Order' pill in the same row."

9. "Design a Starbucks product description band — full-width House Green (`#1E3932`) below product header. Top: a gold-outlined '200★ item' Rewards Cost Pill (`50px` radius, `4px 12px` padding, gold `#cba258` border and text). Below: product description in white 16/400/1.5. Nutritional inline summary in white 14/700 ('140 calories, 25g sugar, 2.5g fat') with info-icon tooltip. Outlined-white-on-green pill button 'Full nutrition &amp; ingredients list'. 32px vertical padding."

10. "Create a Starbucks nutrition facts table — two-column layout inside a White card. Left column: 'Ingredients' header (24/400 Text Black), followed by ingredient list or 'Not available for this item' placeholder paragraph in 14/400 Text Black Soft. Right column: 'Nutrition' header, then label/value rows (nutrient name left, value right) separated by `1px solid #e7e7e7` hairlines. Typography: labels in 14/400 Text Black, values in 14/700 Text Black right-aligned. Footnote asterisk markers in 13/400 Text Black Soft at the bottom."

### Iteration Guide

When refining existing screens generated with this design system:
1. Focus on ONE component at a time
2. Reference specific color names and hex codes from this document
3. Use natural language descriptions ("warm cream canvas," "four-tier green system") alongside exact values
4. Preserve the 50px pill + `scale(0.95)` active state universally
5. Check that greens are mapped to their correct role (Green Accent for CTA, Starbucks Green for heading, House Green for band)
6. Don't introduce gradients — the system is color-block
7. Keep SoDoSans tracking at `-0.01em` / `-0.16px` across the board

### Known Gaps

- SoDoSans is a proprietary typeface not available on Google Fonts — when implementing publicly, use Inter or Manrope as a substitute and document the swap
- Lander Tall (Rewards serif) is also custom — substitute with Iowan Old Style, Lora, or Source Serif Pro
- Specific per-component animation timings beyond the few documented (`--duration: 0.4s`, `--iconTransition: all ease-out 0.2s`, `--expanderDuration: 300ms`) are not captured for every interactive surface
- Form error-state full styling (red border weight, icon placement) visible on the tint token but not exhaustively extracted
- Careers-page specific components (cup-name card, search radio grid) are referenced in token names but not covered by this extraction
- Starbucks Visa Card / Starbucks-Card (SVC) detailed mockup specs are hinted at by `--svcRoundedCorners` and `--svcShadowFilter` tokens but not fully documented

<!-- source:end -->

</details>
