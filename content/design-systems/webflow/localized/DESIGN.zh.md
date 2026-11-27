# Webflow · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Webflow 定位自己为视觉网络开发平台——营销表面读作自信的专业产品,而不是技术启动. 默认的页面是宽宏大量白页面底色(英语:`{colors.canvas}`有着深厚的近黑 `{colors.primary}` (`#080808`),为品牌的初级CTA,排版和墨水. 围绕这个受约束的初级,品牌层层一个五站式的色调强调色系统—— `{colors.accent-purple}` `#7a3dff`, `{colors.accent-pink}` `#ed52cb`, `{colors.accent-blue}` `#3b89ff`, `{colors.accent-orange}` `#ff6b00`, `{colors.accent-green}` `#00d722` ——每个都映射到平台的产品类别(设计,CMS,托管,电子商务等)中的一个,这些强调色作为全卡填充在产品类网格内,而不是按键颜色;品牌的初级CTA保持近黑.

Type carries the second decisive voice. The proprietary `WF Visual Sans Variable` family carries every display, body, and label role at weight 500 / 600 — the brand never goes heavier than semibold, never lighter than regular. Hero display sits at 80 px / weight 600 / `-0.8 px` tracking — confident but not shouting. Uppercase eyebrows in 15 px weight 500 with `1.5 px` positive tracking mark every section header.

形状系统是受约束的 按钮要紧 `{rounded.sm}` 4 px 半径——既不是胶囊形,也不是方块;品牌读作设计。 `{rounded.md}` 8 px. 胶囊形(Pill)`{rounded.full}` 9999 px)为 circular 图标容器。在特殊卡片上加层的投影会增加适度的高度,但从未感到物质重。

**关键特征 :**
- A two-colour conversion hierarchy — `{colors.primary}` near-black for every primary CTA, white-on-hairline for every secondary. Chromatic accents are used as full surface fills on category cards, never as button backgrounds.
- The brand's signature is its **five-stop chromatic category palette**: purple / pink / blue / orange / green, each tied to a product surface. Used at full saturation as card fills.
- 首屏打字机在以下地点 80 px 字重 600 配合 `-0.8 px` 追踪——有约束,自信,从来不会打广告牌.
- WF Visual Sans Variable 是一个家族; 品牌没有单独使用 sans 来表示身体 / 显示。 WFVisualSans-Mono / Inconsolata 仅用于技术标题。
- Tight `{rounded.sm}` 4 px button geometry; cards at `{rounded.md}` 8 px. The brand never uses pill CTAs.
- 将多面面面的投影带分层在特色牌上——该品牌唯一的高架提示.


## 配色

### 品牌色与强调色
- **Ink Black** (`{colors.primary}` — `#080808`): The brand's primary conversion colour. Every primary CTA, every heading, every wordmark. Deeper than pure black to read as branded.
- **紫色铜色** (`{colors.accent-purple}` — `#7a3dff`:五色类强调色之一——用于设计/制造产品表面.
- **粉红色** (`{colors.accent-pink}` — `#ed52cb`: 紫红强调色——用于动画/交互产品表面.
- **蓝天** (`{colors.accent-blue}` — `#3b89ff`:亮色青蓝色——用于SEO/分析产品表面.
- **深蓝** (`{colors.accent-blue-deep}` — `#006acc`: 用于强调链接的深蓝色.
- **Accent Blue Info** (`{colors.accent-blue-info}` — `#146ef5`): The badge-info blue.
- **亚青橙** (`{colors.accent-orange}` — `#ff6b00`: 用于托管/基础设施产品表面。
- **青绿** (`{colors.accent-green}` — `#00d722`:用于电子商务/状态-成功表面.
- **黄褐色** (`{colors.accent-yellow}` — `#ffae13`:用于警告/协作产品表面.
- **红调** (`{colors.accent-red}` — `#ee1d36`: 用于错误/ 破坏性状态。

### 界面表面
- **页面底色** (`{colors.canvas}` — `#ffffff`: 默认的页面背景.
- **细边线** (`{colors.hairline}` — `#d8d8d8`): 1 px 固态边框——输入边框,卡色素,分界线.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#080808`: 默认文本和标题.
- **墨水坚固** (`{colors.ink-strong}` — `#222222`:近黑强调.
- **体质** (`{colors.body}` — `#363636`: 默认正文段落颜色.
- **体中点** (`{colors.body-mid}` — `#5a5a5a`:中强调的副文本——页脚行,标题.
- **静音** (`{colors.mute}` — `#898989`: 低优先级文本.
- **静音软音** (`{colors.mute-soft}` — `#ababab`:最轻的文本角色——占位符文本,精细印刷.

### 语义色
- **信息蓝** (`{colors.accent-blue-info}` — `#146ef5`:信息徽章/通知.
- **成功绿色** (`{colors.accent-green}` — `#00d722`: 成功指标。
- **警告黄色** (`{colors.accent-yellow}` — `#ffae13`: 警告状态.
- **红字错误** (`{colors.accent-red}` — `#ee1d36`: 验证/破坏性.


## 字体排版

### 字体族
A single proprietary family carries every typographic role: **WF Visual Sans Variable** (with `Arial` system fallback). Weights 400 / 500 / 550 / 600 are present; the brand never uses 700 / 800 / 900. A monospace variant — **WFVisualSans-Mono** with `Inconsolata` fallback — handles rare technical caption moments and code-style labels. OpenType features `"ss02"`, `"ss10"`, `"zero"` are enabled in the mono variant for the styled zero glyph.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 80px | 600 | 83.2px | -0.8px | 首屏头条. |
| `{typography.display-xl}` | 56px | 600 | 58.24px | 0 | Sub-hero displays. |
| `{typography.display-lg}` | 44.8px | 600 | 46.6px | 0 | 科头条. |
| `{typography.display-md}` | 32px | 500 | 41.6px | 0 | Card-cluster headlines. |
| `{typography.display-sm}` | 24px | 500 | 31.2px | 0 | Sub-section displays. |
| `{typography.display-xs}` | 20px | 500 | 28px | 0 | 内置显示微头. |
| `{typography.eyebrow-uppercase}` | 15px | 500 | 19.5px | 1.5px | UPPERCASE 眉毛标记在部分以上. |
| `{typography.eyebrow-uppercase-sm}` | 12px | 500 | 12px | 0.6px | 小型大写元数据. |
| `{typography.body-lg}` | 28.8px | 400 | 46.08px | -0.288px | 领头段落。 |
| `{typography.body-md}` | 16px | 400 | 25.6px | -0.16px | 默认身体. |
| `{typography.body-md-strong}` | 16px | 500 | 25.6px | -0.16px | 粗体内内脏. |
| `{typography.body-sm}` | 14px | 400 | 22.4px | 0 | 身次第身. 师曰. |
| `{typography.body-sm-strong}` | 14px | 500 | 22.4px | 0 | 粗体标题 / nav-link. |
| `{typography.caption}` | 12.8px | 550 | 15.36px | 0 | 徽章标签(品牌签名) 550 )),重. |
| `{typography.caption-mono}` | 12px | 400 | 18px | 0 | 单曲代码标题. |
| `{typography.button-md}` | 16px | 500 | 25.6px | -0.16px | 扣子标签. |

### 原则
- **字重上限, 600.** 品牌从不使用 700+. 自信,不响.
- **Negative tracking at display sizes.** `-0.8 px` at 80 px, scaling through. Tight kerning is part of the voice.
- **Uppercase eyebrows mark every section.** 15 px / weight 500 / `1.5 px` positive tracking is the brand's signature label style.
- **Single family across the system.** No separate display vs body face. The variable axes do the work.

### 替代字体
WF Visual Sans Variable 专有。开源替代品 :
- **显示 + 体** — *Inter* 重量 400 / 500 / 600 配合 `font-feature-settings: "ss01"` 启用是最接近的样式匹配 。
- **单声道** — *Inconsolata* (文件记载的倒计时)或 *DM Mono*.


## 布局

### 间距系统
- **基地单位**: 4 px (经常出现) 0.4 / 0.8 用于细垫的子倍数).
- **脚本**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px.
- **分区编栏**: 首屏/ 内容带使用 `{spacing.3xl}` 32 px 垂直间隔宽大的沟槽.
- **纸牌内部贴纸**: 特性和定价卡 `{spacing.3xl}` 32 px.

### 网格与容器
- 销售集装箱很宽(实际上与 `{spacing.3xl}` 沟渠).
- 类别卡 grid: 2 / 3-up at desktop with mixed sizing (some larger feature cards span 2 columns).
- 定价等级 grid: 3-up at desktop, 1-up at mobile.

### 响应式布局

#### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile | < 479px | Hero stacks; all grids 1-up. |
| 移动全长 | 479–767px | 和机动车一样 |
| 平板 | 768–991px | 2- 电网上 |
| 桌面 | ≥ 992px | 全面多向上电网. |

#### 触控区域
Buttons render at ~44 px (12 px vertical padding + 25.6 px line-height). WCAG AAA met.

#### 窄屏布局调整
- 导航: 桌面全链接行。 移动式汉堡 。
- 类别卡 grid: 2 / 3 / 4-up at desktop, drops to 1-up at mobile.
- Pricing tier: 3 / 4-up at desktop, 1-up at mobile.

#### 图片适配
- 分类卡:全血固色填充(无摄影).
- 产品截图 : 16:9 内 `{rounded.md}` 硬币卡。
- 市场表面没有肖像画


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default bands. |
| 职等 1 —— 细边线 | 1 px 固态 `{colors.hairline}` 边框 `{colors.canvas}`. | 默认卡的界面框架和输入边框 。 |
| 职等 2 - 层状投放 | 带有微妙的温暖抵消的多站式层阴影—— `0 84px 24px rgba(0,0,0,0), 0 54px 22px rgba(0,0,0,0.01), 0 30px 18px rgba(0,0,0,0.04), 0 13px 13px rgba(0,0,0,0.08), 0 3px 7px rgba(0,0,0,0.09)`. | 需要显式升降的特制卡片. |
| Level 3 — Layered Drop Strong | Deeper version of Level 2 with `0.12` final offset opacity. | Pricing / modal-level emphasis. |
| Level 4 — Heavy Modal | Extremely heavy multi-stop — `0 24px 24px rgba(0,0,0,0.26), 0 6px 13px rgba(0,0,0,0.29)` final stops. | Modal / dialog surfaces. |

### 装饰性深度
- 色谱类卡(全饱和紫色/粉色/蓝色/橙色/绿色填充)通过纯色对比白色页面底色提供视觉深度.
- 层层的阴影食谱是品牌唯一真正的大气效应——它们是 5- 停止投影堆积 极低的个体不透明。


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 满血乐队. |
| `{rounded.xs}` | 2px | 紧内服丸. |
| `{rounded.sm}` | 4px | 品牌的"犬形按钮+徽章+小元素半径". |
| `{rounded.md}` | 8px | 牌染色体和特征/类牌. |
| `{rounded.full}` | 9999px | Circular 图标容器。 |


## 组件

### 按钮

**`button-primary`** ——舟曲近黑CTA.
- Background `{colors.primary}` (`#080808`), text `{colors.on-primary}` white, label `{typography.button-md}` (16 px weight 500), padding `{spacing.md} {spacing.xl}`, shape `{rounded.sm}` 4 px.

**`button-secondary`** ——白色轮廓CTA.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, same typography + padding + shape.

**`button-text-arrow`** - 下划线 text-link 长形部分使用的箭头为CTA.
- Background `{colors.canvas}`, text `{colors.ink}`, no border, body in `{typography.button-md}`, padding `{spacing.xl}` 0.

**`button-icon-circular`** - 电话 circular 图标按钮用于旋转木马控件。
- Background `{colors.canvas}`, ink icon, shape `{rounded.full}`.

### 卡片与容器

**`card-feature`** ——页面底色上的犬科特征卡.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, padding `{spacing.3xl}`, shape `{rounded.md}`. Often elevated to Level 2 shadow when featured.

**`card-feature-dark`** ——极性飞腾的特征卡在近黑上.
- Background `{colors.primary}`, text `{colors.on-primary}`, padding `{spacing.3xl}`, shape `{rounded.md}`.

**`card-pricing`** - 电话 pricing-tier 纸牌。
- Background `{colors.canvas}`, text `{colors.ink}`, hairline border, padding `{spacing.3xl}`, shape `{rounded.md}`. Layered shadow on the featured tier.

### 输入框与表单

**`text-input`** ——文体文字输入.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, body in `{typography.body-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}`.

### 导航

**`nav-bar`** - 电话 sticky 顶级导航
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.3xl}`.

**`nav-link`** ——内部链接项目 `nav-bar`.
- 文字颜色 `{colors.ink}`,设置在 `{typography.body-sm-strong}`.

**`footer`** - 脚步乐队。
- Background `{colors.canvas}`, text `{colors.body-mid}`, padding `{spacing.3xl} {spacing.3xl}`. Body in `{typography.body-sm}`.

### 标志性组件

**`hero-band`** - 白色首屏乐队
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.3xl}`. Headline in `{typography.display-xxl}` (80 px weight 600).

**`hero-band-dark`** ——极性飞跃的近黑首屏乐队(在一些竞选网页上使用).
- Background `{colors.primary}`, text `{colors.on-primary}`, same padding / headline scale.

**`content-band`** ——页面底色上的标准内容带.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.3xl}`. Section headline in `{typography.display-lg}`.

**`category-card-purple`** ——满装紫色类卡.
- Background `{colors.accent-purple}`, text white, padding `{spacing.3xl}`, shape `{rounded.md}`.

**`category-card-pink`** ——满粉类卡.
- Background `{colors.accent-pink}`, text white, padding `{spacing.3xl}`, shape `{rounded.md}`.

**`category-card-blue`** ——满载蓝类卡.
- Background `{colors.accent-blue}`, text white, padding `{spacing.3xl}`, shape `{rounded.md}`.

**`category-card-orange`** ——满装橙色类卡.
- Background `{colors.accent-orange}`, text white, padding `{spacing.3xl}`, shape `{rounded.md}`.

**`category-card-green`** ——满装绿色类卡(使用墨水文字对较轻的绿色进行辨别).
- Background `{colors.accent-green}`, text `{colors.primary}` (ink), padding `{spacing.3xl}`, shape `{rounded.md}`.

**`badge-info`** + **`badge-info-soft`** ——以固蓝或软轮廓为信息徽章.
- 已填充: bg `{colors.accent-blue-info}` 文字白。软: bg 页面底色,文本 `{colors.accent-blue-info}`。在两个地点 `{typography.caption}` (12.8 px 字重 550)——品牌的签名. 550- 重度字幕 - 重度字幕 - 重度字幕 - 重度字幕

### 组合示例

> 以下组合场景由 `scripts/derive-examples-block.mjs` 生成。各 `ex-*` 条目复用品牌基础样式，供 `/preview-design` 和 `/generate-kit` 以统一风格呈现同一套 10 个示例。`TO_FILL` 提示有待核对的基础样式。

**`ex-pricing-tier`**：默认套餐卡，沿用功能卡结构和品牌 canvas-soft 底色。
- 属性 : `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`**：推荐套餐卡。浅色模式中用深底浅字，深色模式中用浅底深字。
- 属性 : `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`**：面向 SaaS / B2B 场景的套餐权益摘要卡。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`**：SaaS / B2B 订阅摘要，每个附加项单独列出。
- 属性 : `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`**：应用框架示例里的侧栏导航行，以品牌主色标识选中状态。
- 属性 : `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`**：数据表格中 th 与 td 的默认样式。表头采用大写等宽字，正文采用 body-sm。
- 属性 : `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`**：登录与注册卡，复用功能卡和 text-input。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`**：对话框表面，沿用功能卡样式并加浮层投影。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`**：空状态插图容器。
- 属性 : `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`**：轻提示，沿用功能卡圆角并使用中等投影。
- 属性 : `backgroundColor`, `rounded`, `padding`, `typography`



## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` (`#080808`),每个主CTA,每个标题,每个词标,近黑是转换颜色.
- 使用五色调的强调色(purple / p粉红 / 蓝色 / 橙色 / 绿色)作为满分类卡,不作为按钮背景.
- 设置首屏头条 `{typography.display-xxl}` 字重 600 配合 `-0.8 px` 追踪。
- 给所有WF视觉圣人家族 分配每个印刷角色
- 使用 `{rounded.sm}` 4 px 按钮, `{rounded.md}` 8 px 牌子上从不使用避孕药CTA
- Use layered multi-stop drop-shadows on featured cards — the brand's distinctive elevation recipe.

### 应避免的做法
- Don't promote button-medium weight to 700+. The brand's weight ceiling is 600.
- Don't use chromatic accents as button backgrounds. They're surface fills, not actions.
- Don't render CTAs as pills. The brand's button geometry is tight 4 px rectangle.
- Don't introduce a sixth accent colour. The 5-stop palette is the system.

## 设计词元原值

启发人们理解 Webflow设计语言——视觉网络开发平台,其表面对比了深层近黑 `#080808` 由五站式的色调系统(purple / pink / blue / 橙色/绿色) 绘制品牌产品类别图 由专有的WF视觉圣人家族在限制下使用 。 500 / 600 负跟踪的重量。

```yaml
---
version: alpha
name: Webflow-design-analysis
description: An inspired interpretation of Webflow's design language — a visual web development platform whose surface contrasts a deep near-black `#080808` primary against a generous white canvas, broken by a five-stop chromatic accent system (purple / pink / blue / orange / green) that maps to the brand's product categories, and anchored by the proprietary WF Visual Sans family used at restrained 500 / 600 weights with negative tracking.

colors:
  primary: "#080808"
  on-primary: "#ffffff"
  ink: "#080808"
  ink-strong: "#222222"
  body: "#363636"
  body-mid: "#5a5a5a"
  mute: "#898989"
  mute-soft: "#ababab"
  hairline: "#d8d8d8"
  canvas: "#ffffff"
  accent-purple: "#7a3dff"
  accent-pink: "#ed52cb"
  accent-blue: "#3b89ff"
  accent-blue-deep: "#006acc"
  accent-blue-info: "#146ef5"
  accent-orange: "#ff6b00"
  accent-green: "#00d722"
  accent-yellow: "#ffae13"
  accent-red: "#ee1d36"

typography:
  display-xxl:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, -apple-system, sans-serif
    fontSize: 80px
    fontWeight: 600
    lineHeight: 83.2px
    letterSpacing: -0.8px
  display-xl:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 56px
    fontWeight: 600
    lineHeight: 58.24px
  display-lg:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 44.8px
    fontWeight: 600
    lineHeight: 46.6px
  display-md:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 41.6px
  display-sm:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 31.2px
  display-xs:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28px
  eyebrow-uppercase:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 19.5px
    letterSpacing: 1.5px
  eyebrow-uppercase-sm:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 12px
    letterSpacing: 0.6px
  body-lg:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 28.8px
    fontWeight: 400
    lineHeight: 46.08px
    letterSpacing: -0.288px
  body-md:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 25.6px
    letterSpacing: -0.16px
  body-md-strong:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 25.6px
    letterSpacing: -0.16px
  body-sm:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22.4px
  body-sm-strong:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22.4px
  caption:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 12.8px
    fontWeight: 550
    lineHeight: 15.36px
  caption-mono:
    fontFamily: WFVisualSans-Mono, Inconsolata, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
  button-md:
    fontFamily: WF Visual Sans Variable, Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 25.6px
    letterSpacing: -0.16px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.lg} {spacing.3xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-text-arrow:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    padding: "{spacing.xl} 0"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  badge-info:
    backgroundColor: "{colors.accent-blue-info}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  badge-info-soft:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent-blue-info}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  card-feature-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  card-pricing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xxl}"
    padding: "{spacing.3xl} {spacing.3xl}"
  hero-band-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xxl}"
    padding: "{spacing.3xl} {spacing.3xl}"
  content-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.3xl} {spacing.3xl}"
  category-card-purple:
    backgroundColor: "{colors.accent-purple}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  category-card-blue:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  category-card-orange:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  category-card-green:
    backgroundColor: "{colors.accent-green}"
    textColor: "{colors.primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  category-card-pink:
    backgroundColor: "{colors.accent-pink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-mid}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.3xl}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.md} {spacing.lg}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---
```
