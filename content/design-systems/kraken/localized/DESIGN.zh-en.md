# Kraken · 中英文对照

**说明**　中文为本地批量译稿。英文与设计词元沿用官网归档。

# 设计系统灵感来自 Kraken


<details>
<summary>英文原文</summary>

<!-- source:body -->
# Design System Inspired by Kraken


<!-- source:end -->

</details>

## 1。视觉主题和大气

Kraken's website is a clean, trustworthy crypto exchange that uses purple as its commanding brand color. The design operates on white backgrounds with Kraken Purple (`#7132f5`, `#5741d8`, `#5b1ecf`) creating a distinctive, professional crypto identity. The proprietary Kraken-Brand font handles display headings with bold (700) weight and negative tracking, while Kraken-Product (with IBM Plex Sans fallback) serves as the UI workhorse.

**关键特征 :**
- Kraken Purple (`#7132f5`) as primary brand with darker variants (`#5741d8`, `#5b1ecf`)
- Kraken- Brand( 播放) + Kraken- 生产(UI)双字体系统
- 近黑( 4)`#101114`具有凉爽的蓝灰色中性比例的文本
- 12px 半径按钮(圆形但非胶囊形)
- 暗影( 微小的阴影 )`rgba(0,0,0,0.03) 0px 4px 24px`)——低语层.
- 绿色强调色( E)`#149e61`) 用于正/成功状态


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 1. Visual Theme & Atmosphere

Kraken's website is a clean, trustworthy crypto exchange that uses purple as its commanding brand color. The design operates on white backgrounds with Kraken Purple (`#7132f5`, `#5741d8`, `#5b1ecf`) creating a distinctive, professional crypto identity. The proprietary Kraken-Brand font handles display headings with bold (700) weight and negative tracking, while Kraken-Product (with IBM Plex Sans fallback) serves as the UI workhorse.

**Key Characteristics:**
- Kraken Purple (`#7132f5`) as primary brand with darker variants (`#5741d8`, `#5b1ecf`)
- Kraken-Brand (display) + Kraken-Product (UI) dual font system
- Near-black (`#101114`) text with cool blue-gray neutral scale
- 12px radius buttons (rounded but not pill)
- Subtle shadows (`rgba(0,0,0,0.03) 0px 4px 24px`) — whisper-level
- Green accent (`#149e61`) for positive/success states


<!-- source:end -->

</details>

## 2. Color Palette & Roles

### 主要
- **Kraken 紫色** (`#7132f5`:初级CTA,品牌强调色,链接
- **紫色暗色( 紫色 )** (`#5741d8`:按钮边框, 概述的变体
- **紫深镇** (`#5b1ecf`(最深的紫色) (中文(简体) ).
- **紫色潜水艇** (`rgba(133,91,251,0.16)`紫色在吗? 16% - 微妙的按钮背景
- **Near Black** (`#101114`): Primary text

### 中立
- **酷灰色** (`#686b82`: 初级中立,边界位于 24% 透明度
- **银蓝** (`#9497a9`: 次要文本,变音元素
- **白色** (`#ffffff`: 初级表面
- **边框灰色** (`#dedee5`: 分隔线

### 语义
- **绿色** (`#149e61`: 成功/成绩 16% 徽章不透明
- **绿色暗色** (`#026b3f`: 徽章文本


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 2. Color Palette & Roles

### Primary
- **Kraken Purple** (`#7132f5`): Primary CTA, brand accent, links
- **Purple Dark** (`#5741d8`): Button borders, outlined variants
- **Purple Deep** (`#5b1ecf`): Deepest purple
- **Purple Subtle** (`rgba(133,91,251,0.16)`): Purple at 16% — subtle button backgrounds
- **Near Black** (`#101114`): Primary text

### Neutral
- **Cool Gray** (`#686b82`): Primary neutral, borders at 24% opacity
- **Silver Blue** (`#9497a9`): Secondary text, muted elements
- **White** (`#ffffff`): Primary surface
- **Border Gray** (`#dedee5`): Divider borders

### Semantic
- **Green** (`#149e61`): Success/positive at 16% opacity for badges
- **Green Dark** (`#026b3f`): Badge text


<!-- source:end -->

</details>

## 3. 字法规则

### 字体家庭
- **显示**: `Kraken-Brand`,倒计时: `IBM Plex Sans, Helvetica, Arial`
- **用户界面/ 机体**: `Kraken-Product`,倒计时: `Helvetica Neue, Helvetica, Arial`

### 等级

| 作用 | 字体 | 大小 | 字重 | 线条高度 | 字母间距 |
|------|------|------|--------|-------------|----------------|
| 显示首屏 | Kraken- 布兰德 | 48px | 700 | 1.17 | -1px |
| 科 长 | Kraken- 布兰德 | 36px | 700 | 1.22 | -0.5px |
| 副标题 | Kraken- 布兰德 | 28px | 700 | 1.29 | -0.5px |
| 特征标题 | Kraken- 生产 | 22px | 600 | 1.20 | normal |
| 体质 | Kraken- 生产 | 16px | 400 | 1.38 | normal |
| 中体 | Kraken- 生产 | 16px | 500 | 1.38 | normal |
| 按钮 | Kraken- 生产 | 16px | 500–600 | 1.38 | normal |
| 说明 | Kraken- 生产 | 14px | 400–700 | 1.43–1.71 | normal |
| Small | Kraken-Product | 12px | 400–500 | 1.33 | normal |
| 微量 | Kraken- 生产 | 7px | 500 | 1.00 | uppercase |


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 3. Typography Rules

### Font Families
- **Display**: `Kraken-Brand`, fallbacks: `IBM Plex Sans, Helvetica, Arial`
- **UI / Body**: `Kraken-Product`, fallbacks: `Helvetica Neue, Helvetica, Arial`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display Hero | Kraken-Brand | 48px | 700 | 1.17 | -1px |
| Section Heading | Kraken-Brand | 36px | 700 | 1.22 | -0.5px |
| Sub-heading | Kraken-Brand | 28px | 700 | 1.29 | -0.5px |
| Feature Title | Kraken-Product | 22px | 600 | 1.20 | normal |
| Body | Kraken-Product | 16px | 400 | 1.38 | normal |
| Body Medium | Kraken-Product | 16px | 500 | 1.38 | normal |
| Button | Kraken-Product | 16px | 500–600 | 1.38 | normal |
| Caption | Kraken-Product | 14px | 400–700 | 1.43–1.71 | normal |
| Small | Kraken-Product | 12px | 400–500 | 1.33 | normal |
| Micro | Kraken-Product | 7px | 500 | 1.00 | uppercase |


<!-- source:end -->

</details>

## 4. 组件型号

### 按钮

**初级紫色**
- Background: `#7132f5`
- 文本 : `#ffffff`
- 铺垫: 13px 16px
- 半径 : 12px

**紫色图示**
- Background: `#ffffff`
- 文本 : `#5741d8`
- 边框 : `1px solid #5741d8`
- 半径 : 12px

**紫色潜水艇**
- Background: `rgba(133,91,251,0.16)`
- 文本 : `#7132f5`
- 铺垫: 8px
- 半径 : 12px

**白按钮**
- Background: `#ffffff`
- 文本 : `#101114`
- 半径 : 10px
- 阴影 : `rgba(0,0,0,0.03) 0px 4px 24px`

**二级灰**
- Background: `rgba(148,151,169,0.08)`
- 文本 : `#101114`
- 半径 : 12px

### 徽章
- 成功 : `rgba(20,158,97,0.16)` 目标 `#026b3f` 文本, 单词 6px 半径
- 中立 : `rgba(104,107,130,0.12)` 目标 `#484b5e` 文本, 单词 8px 半径


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 4. Component Stylings

### Buttons

**Primary Purple**
- Background: `#7132f5`
- Text: `#ffffff`
- Padding: 13px 16px
- Radius: 12px

**Purple Outlined**
- Background: `#ffffff`
- Text: `#5741d8`
- Border: `1px solid #5741d8`
- Radius: 12px

**Purple Subtle**
- Background: `rgba(133,91,251,0.16)`
- Text: `#7132f5`
- Padding: 8px
- Radius: 12px

**White Button**
- Background: `#ffffff`
- Text: `#101114`
- Radius: 10px
- Shadow: `rgba(0,0,0,0.03) 0px 4px 24px`

**Secondary Gray**
- Background: `rgba(148,151,169,0.08)`
- Text: `#101114`
- Radius: 12px

### Badges
- Success: `rgba(20,158,97,0.16)` bg, `#026b3f` text, 6px radius
- Neutral: `rgba(104,107,130,0.12)` bg, `#484b5e` text, 8px radius


<!-- source:end -->

</details>

## 5. 版式原则

### 间距 : 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 13px, 15px, 16px, 20px, 24px, 25px
### 边框半径 : 3px, 6px, 8px, 10px, 12px, 16px, 9999px, 50%


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 5. Layout Principles

### Spacing: 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 13px, 15px, 16px, 20px, 24px, 25px
### Border Radius: 3px, 6px, 8px, 10px, 12px, 16px, 9999px, 50%


<!-- source:end -->

</details>

## 6。深度和高度
- 浅意 : `rgba(0,0,0,0.03) 0px 4px 24px`
- 微量 : `rgba(16,24,40,0.04) 0px 1px 4px`


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 6. Depth & Elevation
- Subtle: `rgba(0,0,0,0.03) 0px 4px 24px`
- Micro: `rgba(16,24,40,0.04) 0px 1px 4px`


<!-- source:end -->

</details>

## 7。 。 。 。 。 。

### 执行
- 使用 Kraken 紫色( 紫色)#7132f5)用于CTAs和链接
- 应用 12px 在所有按钮上半径
- 使用 Kraken- 带过来 Kraken- 生产尸体

### Don't
- Don't use pill buttons — 12px is the max radius for buttons
- 千万别在定号外用其他紫色


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 7. Do's and Don'ts

### Do
- Use Kraken Purple (#7132f5) for CTAs and links
- Apply 12px radius on all buttons
- Use Kraken-Brand for headings, Kraken-Product for body

### Don't
- Don't use pill buttons — 12px is the max radius for buttons
- Don't use other purples outside the defined scale


<!-- source:end -->

</details>

## 8. Responsive Behavior
断点 : 375px, 425px, 640px, 768px, 1024px, 1280px, 1536px


<details>
<summary>英文原文</summary>

<!-- source:body -->
## 8. Responsive Behavior
Breakpoints: 375px, 425px, 640px, 768px, 1024px, 1280px, 1536px


<!-- source:end -->

</details>

## 9. Agent Prompt Guide

### 快速颜色引用
- 品牌 : Kraken 紫色( 紫色)`#7132f5`)
- 暗变体 : `#5741d8`
- 文字: 近黑 (`#101114`)
- 副文本: `#9497a9`
- 白种( 白种)`#ffffff`)

### 示例组件提示
- "Create hero: white background. Kraken-Brand 48px weight 700, letter-spacing -1px. Purple CTA (#7132f5, 12px radius, 13px 16px padding)."

<details>
<summary>英文原文</summary>

<!-- source:body -->
## 9. Agent Prompt Guide

### Quick Color Reference
- Brand: Kraken Purple (`#7132f5`)
- Dark variant: `#5741d8`
- Text: Near Black (`#101114`)
- Secondary text: `#9497a9`
- Background: White (`#ffffff`)

### Example Component Prompts
- "Create hero: white background. Kraken-Brand 48px weight 700, letter-spacing -1px. Purple CTA (#7132f5, 12px radius, 13px 16px padding)."

<!-- source:end -->

</details>
