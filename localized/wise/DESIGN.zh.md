# Wise · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Wise — the global money-transfer brand — wears its identity in a single signature pairing: a vivid lime-green `{colors.primary}` (`#9fe870`) used as the CTA pill and brand accent, set against a pale sage-tinted canvas `{colors.canvas-soft}` (`#e8ebe6`) that runs across the hero band, and a near-black ink `{colors.ink}` (`#0e0f0c`) with a hint of warmth from the brand's underlying olive cast. The brand reads more like a calm Scandinavian magazine than a bank — generous whitespace, large rounded cards, and an unusually heavy display sans set at weight 900 carrying every hero headline.

Display typography is the second decisive voice. The proprietary `Wise Sans` family carries hero displays at weight 900 in scales from 64 px up to 126 px on the largest hero. The brand pairs Wise Sans 900 with Inter at weight 600 for sub-displays — the contrast between the chunky proprietary face and Inter's neutrality creates a particular hierarchy: Wise Sans for the brand moment, Inter for everything else.

Cards are universally pill-rounded — `{rounded.xl}` 24 px is the brand's signature card radius. Buttons take the same 24 px pill-rectangle shape. The brand never uses sharp corners on UI elements; the visual softness is part of the friendly fintech voice.

**关键特征 :**
- 单一的石灰绿色CTA强调色 `{colors.primary}` (`#9fe870`)——品牌通用主动作颜色,无第二强调色.
- 双面显示打字法—— Wise Sans (专有,字重) 900+ , 首屏比例) + Inter (字重) 600,子发布比例。对比点是品牌的打印故事。
- `{rounded.xl}` 24 px is the canonical card and button radius. Generous, friendly.
- 圣丁型页面底色 `{colors.canvas-soft}` (`#e8ebe6`)是品牌的首屏表面;白色 `{colors.canvas}` 用于在圣人乐队内打牌。
- 完整的语义调色板:正绿色家族,警告黄色家族,负红色家族——每个都记载有内容/悬浮/活跃的变种,用于产品内部使用.
- 首屏上的货币转换卡——品牌的签名互动组件,托管从/到数量输入.


## 配色

### 品牌色与强调色
- **Wise 绿色** (`{colors.primary}` — `#9fe870`:品牌通用CTA颜色,每按首键,每"送钱"丸,品牌标志强调色.
- **Wise 绿色的霍夫** (`{colors.primary-active}` — `#cdffad`: 活动状态的浅绿色.
- **Wise 绿色中立** (`{colors.primary-neutral}` — `#c5edab`: 中饱和绿色用作中性活性填充.
- **Wise 绿暗** (`{colors.primary-pale}` — `#e2f6d5`:最浅绿色的柔软表面衬衫/徽章背景.

### 界面表面
- **页面底色** (`{colors.canvas}` — `#ffffff`:纯白为卡内置.
- **软画帘** (`{colors.canvas-soft}` — `#e8ebe6`: 圣洁的页面背景,定义品牌的心情.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#0e0f0c`:近黑带有橄榄暖的提示——品牌默认文字和标题颜色.
- **墨水深处** (`{colors.ink-deep}` — `#163300`:正态表面使用的深层森林绿色墨水.
- **体质** (`{colors.body}` — `#454745`: 副正文.
- **静音** (`{colors.mute}` — `#868685`:最低优先的文本——标题,占位符,精细的打印.

### 语义色
- **Positive** (`{colors.positive}` — `#2ead4b`): Success indicator.
- **Positive Deep** (`{colors.positive-deep}` — `#054d28`): Pressed positive state.
- **警告** (`{colors.warning}` — `#ffd11a`: 注意指标。
- **深处警告** (`{colors.warning-deep}` — `#b86700`:按下警告,请回答。
- **警告内容** (`{colors.warning-content}` — `#4a3b1c`: 警告表面的文字.
- **负数** (`{colors.negative}` — `#d03238`: 破坏/错误红色.
- **负深** (`{colors.negative-deep}` — `#a72027`:按破坏性.
- **负暗** (`{colors.negative-darkest}` — `#a7000d`: 最高强调的破坏性文字.
- **负 Bg** (`{colors.negative-bg}` — `#320707`: 黑暗的马龙,用于破坏性呼喊背景.

### 品牌-高等教育
- **亚青橙** (`{colors.accent-orange}` — `#ffc091`: 说明性内容/定价卡内使用的亮桃.
- **青色青色调** (`{colors.accent-cyan}` — `#38c8ff`: 亮天蓝色作为第三插图强调色使用.


## 字体排版

### 字体族
两人的面孔 系统梯子:
1. **Wise Sans** — proprietary geometric sans with an unusually heavy weight 900 used for all hero displays. The face is the brand's typographic signature. Always at weight 900, never lighter on the marketing surface.
2. **Inter** 用于子播放(字重) 600),所有身体,并形成标签。 `font-feature-settings: "calt"` 用于背景替代。

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 126px | 900 | 107.1px | 0 | 首屏的气温最大。 |
| `{typography.display-xxl}` | 96px | 900 | 81.6px | 0 | Sub-hero scale. |
| `{typography.display-xl}` | 64px | 900 | 54.4px | 0 | 标准首屏头条. |
| `{typography.display-lg}` | 47px | 400 | 70.5px | -0.108px | 轻轻分机. |
| `{typography.display-md}` | 40px | 900 | 34px | 0 | 区/牌头条. |
| `{typography.display-sm}` | 32px | 600 | 38.4px | -0.96px | Inter- 标题已交代 |
| `{typography.display-xs}` | 24px | 600 | 31.2px | -0.48px | Sub-section displays. |
| `{typography.body-lg}` | 20px | 400 | 30px | 0 | 领头段落。 |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | 默认身体. |
| `{typography.body-md-strong}` | 16px | 600 | 24px | 0 | 粗体内脏. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | 身次第身. 师曰. |
| `{typography.body-sm-strong}` | 14px | 600 | 20px | 0 | 粗体标题 / nav-link. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | 精进印. |
| `{typography.button-md}` | 16px | 600 | 24px | 0 | 扣子标签. |

### 原则
- **Weight 900 for hero, weight 600 for everything else.** The brand's display ceiling is full-black weight; everything below is semibold.
- **Wise Sans 以品牌之声, Inter 用于实用性。** 严格角色分离.

### 替代字体
Wise Sans 专有。开源替代品 :
- **显示** — *Inter* 字重 900 或 *曼罗普* 字重 800 / 900 捕捉几何重度。 *Geist* 字重 800 是一个可通过的第二个选择。
- **Sub-display + body** — *Inter* is the brand's actual second face.


## 布局

### 间距系统
- **基地单位**: 4 px.
- **脚本**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px.
- **分区编栏**: 带使用 `{spacing.3xl}` 48 px 桌面上上下下层。
- **纸牌内部**: 牌数 `{spacing.xl}` 24 px.

### 网格与容器
- 销售集装箱中心 ~1200 px.
- 首屏:在桌面上进行分割布局(左头,货币转换卡右);在移动时堆叠.
- Feature grids: 2-up / 3-up at desktop.

### 响应式布局

#### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 768px | 首屏堆栈; 转换器卡在标题下方全宽; 网格 1- 起来 |
| 平板 | 768–1023px | 网格 2- 起来 |
| 桌面 | ≥ 1024px | 首屏分裂; 整格. |

#### 触控区域
按钮渲染 ~48 px 高( 高)12 垂直粘贴+ 24 。) 。 WCAG AAA , 在所有宽度。

#### 图片适配
摄影作品稀少;品牌更喜欢在卡片内刻有说明性的SVG和产品模型. 乡村旗缩略图出现在货币行内.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default. |
| Level 1 — Hairline on Dark | 1 px solid `{colors.ink}` border. | Tertiary outline buttons, form inputs. |
| Level 2 — Soft Card | Implicit Level 0 white card sitting on sage canvas — the surface contrast IS the elevation. | Cards on the sage hero band. |

The brand uses surface contrast (`{colors.canvas-soft}` background vs `{colors.canvas}` cards) as the primary elevation cue.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 满血乐队. |
| `{rounded.sm}` | 8px | 内服丸,小 徽. |
| `{rounded.md}` | 12px | 形态输入,较小的界面框架. |
| `{rounded.lg}` | 16px | 中大小牌(变种). |
| `{rounded.xl}` | 24px | The brand's canonical button + card radius. |
| `{rounded.pill}` | 9999px | 状态药和全辐射强调色 |
| `{rounded.full}` | 9999px | Circular 图标容器。 |


## 组件

### 按钮

**`button-primary`** 石灰绿色的CTA胶囊形
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}`, padding `{spacing.md} {spacing.xl}`, shape `{rounded.xl}` 24 px.

**`button-secondary`** - 圣丁型二级
- Background `{colors.canvas-soft}`, text `{colors.ink}`, same typography / padding / shape.

**`button-tertiary`** ——白大纲第三.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, same typography / padding / shape.

**`button-icon-circular`** - 电话 circular 图标按钮。
- Background `{colors.canvas}`, ink icon, shape `{rounded.full}`.

### 卡片与容器

**`card-content`** ——默认白牌.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.xl}`. No border, sits on sage canvas.

**`card-feature-sage`** ——圣情特写卡.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.xl}`.

**`card-feature-green`** ——软绿色特色卡.
- Background `{colors.primary-pale}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.xl}`.

**`card-feature-dark`** ——极性-闪烁的暗卡带有绿色文字.
- Background `{colors.ink}`, text `{colors.primary}` (Wise green!), padding `{spacing.xl}`, shape `{rounded.xl}`. Used for promotional moments.

**`currency-converter-card`** ——品牌的签名交互式部件.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, padding `{spacing.xl}`, shape `{rounded.xl}`. Hosts from/to amount inputs + currency selectors.

### 输入框与表单

**`text-input`** ——文体文字输入.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.ink}` border, body in `{typography.body-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.md}`.

### 导航

**`nav-bar`** - 电话 sticky 顶级导航
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.xl}`.

**`nav-link`** ——在导航内链接项目.
- 文字颜色 `{colors.ink}`,设置在 `{typography.body-sm-strong}`.

**`footer`** 黑暗脚步乐队。
- Background `{colors.ink}`, text `{colors.canvas-soft}`, padding `{spacing.3xl} {spacing.xl}`. Body in `{typography.body-sm}`.

### 标志性组件

**`hero-band`** ——圣人坎瓦斯首屏乐队.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.xl}`. Headline in `{typography.display-mega}` (Wise Sans weight 900).

**`hero-band-dark`** 极地飞扬的黑暗首屏
- Background `{colors.ink}`, text `{colors.primary}` (Wise green headline on near-black!), same padding / scale.

**`content-band`** ——追随首屏的白色内容乐队.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.3xl} {spacing.xl}`. Section headline in `{typography.display-md}`.

**`badge-positive`** 阳性状态胶囊形。
- Background `{colors.primary-pale}`, text `{colors.positive-deep}`, body in `{typography.body-sm-strong}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}`.

**`badge-negative`** - 负状态胶囊形。
- Background `{colors.negative-bg}`, text white, body in `{typography.body-sm-strong}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}`.

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
- 准备金 `{colors.primary}` Wise 石灰绿胶囊形是品牌的转换标志
- Set hero headlines in `{typography.display-mega}` / `{typography.display-xl}` Wise Sans weight 900. Never lighter.
- 使用 `{rounded.xl}` 24 px 宽宏大量半径是品牌的友好签名。
- 循环页面表面在 `{colors.canvas-soft}` 圣人页面底色 – `{colors.canvas}` 白色牌,表面对比带高
- Use the full semantic palette (positive / warning / negative) for in-product status — never repurpose Wise green as success indicator since it IS the brand CTA.

### 应避免的做法
- Don't introduce a second brand accent. Wise green is the sole identity colour.
- Don't render the hero in weight 700 or lighter. The brand's display weight is 900.
- Don't render CTAs as sharp rectangles. The 24 px pill geometry is non-negotiable.
- Don't pair the green CTA with a green background. The brand always sits Wise green on neutral surfaces (sage / white / ink).
- Don't replace Wise Sans with a generic geometric sans for hero typography — the proprietary face IS the brand's voice.

## 设计词元原值

启发人们理解 Wise设计语言——全球货币转移品牌,其表面融合了异常重的近黑显示色(字重) 900 时 间 64–126 px),带有生动的石灰绿色品牌强调色,圣洁丁香的表面中性,在苍白的绿色丁香页面底色上圆形白卡;整个系统阅读的更像是斯堪的纳维亚风琴技术杂志而不是银行.

```yaml
---
version: alpha
name: Wise-design-analysis
description: An inspired interpretation of Wise's design language — a global money-transfer brand whose surface combines an unusually heavy near-black display sans (weight 900 at 64–126 px) with a vivid lime-green brand accent, sage-tinted surface neutrals, and rounded white cards on a pale green-tinted canvas; the whole system reads more like a Scandinavian fintech magazine than a bank.

colors:
  primary: "#9fe870"
  on-primary: "#0e0f0c"
  primary-active: "#cdffad"
  primary-neutral: "#c5edab"
  primary-pale: "#e2f6d5"
  ink: "#0e0f0c"
  ink-deep: "#163300"
  body: "#454745"
  mute: "#868685"
  canvas: "#ffffff"
  canvas-soft: "#e8ebe6"
  positive: "#2ead4b"
  positive-deep: "#054d28"
  warning: "#ffd11a"
  warning-deep: "#b86700"
  warning-content: "#4a3b1c"
  negative: "#d03238"
  negative-deep: "#a72027"
  negative-darkest: "#a7000d"
  negative-bg: "#320707"
  accent-orange: "#ffc091"
  accent-cyan: "#38c8ff"

typography:
  display-mega:
    fontFamily: Wise Sans, Inter, system-ui, -apple-system, sans-serif
    fontSize: 126px
    fontWeight: 900
    lineHeight: 107.1px
  display-xxl:
    fontFamily: Wise Sans, Inter, system-ui, sans-serif
    fontSize: 96px
    fontWeight: 900
    lineHeight: 81.6px
  display-xl:
    fontFamily: Wise Sans, Inter, system-ui, sans-serif
    fontSize: 64px
    fontWeight: 900
    lineHeight: 54.4px
  display-lg:
    fontFamily: Wise Sans, Inter, system-ui, sans-serif
    fontSize: 47px
    fontWeight: 400
    lineHeight: 70.5px
    letterSpacing: -0.108px
  display-md:
    fontFamily: Wise Sans, Inter, system-ui, sans-serif
    fontSize: 40px
    fontWeight: 900
    lineHeight: 34px
  display-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 38.4px
    letterSpacing: -0.96px
  display-xs:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 31.2px
    letterSpacing: -0.48px
  body-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 30px
  body-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  caption:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px

rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md} {spacing.xl}"
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md} {spacing.xl}"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
  card-content:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  card-feature-sage:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  card-feature-green:
    backgroundColor: "{colors.primary-pale}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  card-feature-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    padding: "{spacing.3xl} {spacing.xl}"
  hero-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.primary}"
    typography: "{typography.display-mega}"
    padding: "{spacing.3xl} {spacing.xl}"
  content-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.3xl} {spacing.xl}"
  currency-converter-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  badge-positive:
    backgroundColor: "{colors.primary-pale}"
    textColor: "{colors.positive-deep}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  badge-negative:
    backgroundColor: "{colors.negative-bg}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas-soft}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.mute}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    item-divider: "{colors.canvas-soft}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.md} {spacing.lg}"
    rowBorder: "{colors.canvas-soft}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.xl}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---
```
