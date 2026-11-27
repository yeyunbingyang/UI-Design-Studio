# Coinbase · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Coinbase reads like an institutional financial brand that happens to trade crypto — the marketing surfaces are quiet, white-canvas, editorially-spaced, and almost monochromatic. The single brand voltage is **Coinbase Blue** (`{colors.primary}` — #0052ff), used scarcely: every primary CTA pill, the brand wordmark, and inline emphasis links. Beyond that one blue, the system is white canvas + ink + soft gray elevation bands + a deep near-black editorial canvas (`{colors.surface-dark}` — #0a0b0d) for full-bleed product-mockup heroes.

Type pairs **CoinbaseDisplay** for hero headlines with **CoinbaseSans** for body, captions, and navigation. Display sits at **weight 400** — not the 700+ typical of trading platforms. The choice signals editorial calm and institutional trust rather than fintech urgency.

页面节奏旋转三种模式:亮白编辑部分,软灰色高频带,以及 **充满血迹的黑暗编辑首屏** 带有层层产品-UI模拟卡。带有浮动仪表板模拟卡的黑暗首屏是单一的最具特色的组件。

**关键特征 :**
- 单声调 color: `{colors.primary}` (#0052ff Coinbase Blue)搭载了每一个主要的CTA,单词标记,以及内线品牌链接. 很少使用.
- 适度显示字重 – 字重显示 – CoinbaseDisplay at 字重 400,从 700+.
- Editorial pill geometry: every CTA is `{rounded.pill}` (100px), every asset glyph is `{rounded.full}`, every card is `{rounded.xl}` (24px). Sharp corners absent.
- Full-bleed dark heroes with floating product-UI cards: `{component.hero-band-dark}` plus inline `{component.product-ui-card-dark}` mockups is the brand's strongest signature pattern.
- Trading semantics: `{colors.semantic-up}` (#05b169) and `{colors.semantic-down}` (#cf202f) — text color only, never background fills.
- 96px 节奏——慷慨的编辑节奏.


## 配色

### 品牌色与强调色
- **Coinbase Blue** (`{colors.primary}` — #0052ff): The single brand color. Every primary CTA pill, the Coinbase wordmark, and inline brand links.
- **Coinbase 蓝色活动** (`{colors.primary-active}` — #003ecc:按州黑于初药.
- **Coinbase 蓝色已禁用** (`{colors.primary-disabled}` — #a8b8cc: faded-blue tint for disable CTAs. : 用于残疾的CTA 的花色蓝色色色.
- **黄褐色** (`{colors.accent-yellow}` — #f4b000:一种小的子品牌强调色在比特币/资产格莱弗上非常节制地使用了在功能卡片内填充. Illustrative- only, not a active color.

### 界面表面
- **页面底色** (`{colors.canvas}` — #ffffff:默认的页面层.
- **表面软** (`{colors.surface-soft}` — #f7f7f7: 微调交替带表面.
- **表面坚固** (`{colors.surface-strong}` — #eef0f3: 轻灰色填充在次要按钮后面, 搜索胶囊形, 资产-虹板.
- **Surface Dark** (`{colors.surface-dark}` — #0a0b0d): Deep near-black canvas for full-bleed dark heroes, CTA bands. Same hex as `{colors.ink}` — page-floor and text-color share the value.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #16181c): One step lighter, used for floating product-UI mockup cards inside dark heroes.

### Hairlines
- **细边线** (`{colors.hairline}` — #dee1e6: 默认 1px 白色表面的分隔器。
- **柔软的细边线** (`{colors.hairline-soft}` — #eef0f3: 较轻的分隔器——与 `{colors.surface-strong}`.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — #0a0b0d:显示标题,主导航,体格强调.
- **体质** (`{colors.body}` — #5b616e: 默认的运行文本——略凉灰色.
- **强体** (`{colors.body-strong}` — #0a0b0d:与墨水相同,用于更强的强调.
- **静音** (`{colors.muted}` — #7c828a: 字幕,面包屑,脚踏车二级.
- **静音软体** (`{colors.muted-soft}` — #a8acb3: 已禁用链接文本.
- **小学** (`{colors.on-primary}` — #ffffff: 打开白文本 Coinbase 蓝色CTAs.
- **On Dark** (`{colors.on-dark}` — #ffffff): White text on dark heroes.
- **暗软** (`{colors.on-dark-soft}` — #a8acb3: 暗时的二次文字被静音关闭。

### 贸易语义
- **语义上调** (`{colors.semantic-up}` — #05b169:"定价"绿色,文本颜色仅限.
- **语义下移** (`{colors.semantic-down}` — #cf202f:"定价下"红,文本色仅限.


## 字体排版

### 字体族
系统运行 **库因巴斯游戏** (播放头条), **库恩巴桑斯** (身体,导航,标题,按钮), **铜基孔** (虹字体),和 **库因巴索莫** 。倒数堆栈 : `-apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.

显示/身体分裂是功能性的: CoinbaseDisplay只携带首屏头条; CoinbaseSans 携带其他一切.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 80px | 400 | 1.0 | -2px | Homepage hero h1 |
| `{typography.display-xl}` | 64px | 400 | 1.0 | -1.6px | Subsidiary heroes |
| `{typography.display-lg}` | 52px | 400 | 1.0 | -1.3px | 科长 |
| `{typography.display-md}` | 44px | 400 | 1.09 | -1px | CTA-band 头条 |
| `{typography.display-sm}` | 36px | 400 | 1.11 | -0.5px | 副科长-Coinbase Sans |
| `{typography.title-lg}` | 32px | 400 | 1.13 | -0.4px | 纸牌组标题 |
| `{typography.title-md}` | 18px | 600 | 1.33 | 0 | 构成部分标题,资产行 |
| `{typography.title-sm}` | 16px | 600 | 1.25 | 0 | 列表标签 |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 默认正文 |
| `{typography.body-strong}` | 16px | 700 | 1.5 | 0 | 重点机构 |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body |
| `{typography.caption}` | 13px | 400 | 1.5 | 0 | 图片标题 |
| `{typography.caption-strong}` | 12px | 600 | 1.5 | 0 | 标签胶囊形标签 |
| `{typography.number-display}` | 18px | 500 | 1.4 | 0 | 资产价格,百分比变化——CoinbaseMono |
| `{typography.button}` | 16px | 600 | 1.15 | 0 | 标准CTA胶囊形 |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav 菜单项 |

### 原则
- **显示字重停留在 400.** 唯一最独特的排版选择——表示"calm机构品牌"而不是"交易平台的迫切性".
- **负数 letter-spacing 仅显示。** 显示用途 -1px 改为: -2px 跟踪; 身体停留在 0.
- **每一个号码都写着CoinbaseMono.** 资产价格,百分比变化,任何表格都用库因巴索莫制成。

### 替代字体
库因巴斯迪斯普斯、库因巴斯桑斯和库因巴斯莫诺获得许可 Coinbase 字型为字形。
- **库因巴斯游戏 – Inter** 字重 400, letter-spacing -1.5%.
- **桑斯监狱 – Inter** 字重 400/600.
- **CoinbaseMono → JetBrains Mono** or **Geist Mono** at weight 500.


## 布局

### 间距系统
- **基部单位:** 4px.
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.base}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) for every major editorial band.
- **内部卡片 padding:** `{spacing.xl}` (32px)用于特写卡和产品-UI模型.

### 网格与容器
- **最大内容 width:** ~1200px centered. Hero photography full-bleed.
- **编辑机构:** 单身 12- 列网格 - 列网格 - Colind grade.
- **Feature card grids:** 2-up at desktop for hero splits, 3-up for benefit grids.
- **Footer:** 6-column link list at desktop.

### 留白规则
慷慨的社论节奏——更接近彭博或"金融时报",而不是交易仪表板. 96px 带间; 带内卡片坐 24px 密度生活在登录墙后,而不是在营销上。


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | No shadow, no border | 80% of surfaces |
| 细边线边框 | 1px `{colors.hairline}` | 白色的特写卡图谱 |
| 软滴 | `0 4px 12px rgba(0, 0, 0, 0.04)` | 单层阴影-悬浮卡 |
| 摄影 | 完全充血产品-UI模型 | 首屏深度( E) |

### 装饰性深度
- **Layered product-UI cards inside dark heroes** is the most distinctive decorative pattern — a `{component.product-ui-card-dark}` floats above a darker base canvas, often with a second smaller card overlapping at an angle.
- **几何品牌插图** 深处的阴影会比这更深


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 准备金(基本未使用) |
| `{rounded.xs}` | 4px | 内置标签 |
| `{rounded.sm}` | 8px | 压缩行 |
| `{rounded.md}` | 12px | 格式输入 |
| `{rounded.lg}` | 16px | 中等大小的牌 |
| `{rounded.xl}` | 24px | 特长卡、产品-UI模型、定价等级 |
| `{rounded.pill}` | 100px | All CTA buttons, search pills, badges |
| `{rounded.full}` | 9999px | 资产图标圆圈, 浮雕 |

Pill for interactive, card-radius (24px) for containers, full circle for icons. Sharp corners absent.


## 组件

### 顶端导航

**`top-nav-light`** — Default top nav on white pages. Background `{colors.canvas}`, text `{colors.ink}`, height 64px. Layout: Coinbase wordmark left, primary horizontal menu (Cryptocurrencies / Individuals / Businesses / Institutions / Developers / Company), search-icon + globe + Sign In + Sign Up CTAs right.

**`top-nav-on-dark`** ——顶部导航过深色首屏乐队. `{colors.surface-dark}`文本中,请输入 `{colors.on-dark}`。 。 。 。 。

### 按钮

**`button-primary`** — The signature Coinbase Blue pill. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}` (16px / 600), padding 12px × 20px, height 44px, rounded `{rounded.pill}` (100px).

**`button-primary-active`** ——新闻状况。背景 `{colors.primary-active}`深蓝色

**`button-primary-disabled`** — Faded blue tint. Background `{colors.primary-disabled}`. Cursor not-allowed.

**`button-secondary-light`** ——白色表面的软灰色二级。 `{colors.surface-strong}`文本中,请输入 `{colors.ink}`同样的胶囊形几何。

**`button-secondary-dark`** — Used on dark heroes. Background `{colors.surface-dark-elevated}`, text `{colors.on-dark}`, same pill geometry.

**`button-outline-on-dark`** — Transparent pill with white outline. Background transparent, text `{colors.on-dark}`, 1px white border.

**`button-tertiary-text`** — Inline text link. Background transparent, text `{colors.primary}`, type `{typography.button}`.

**`button-pill-cta`** — Larger pill CTA used on the homepage hero ("Get started"). Same Coinbase Blue palette but with 56px height and 16px × 32px padding for a prouder stance.

### 首屏乐队

**`hero-band-dark`** ——签名全血黑首屏. `{colors.surface-dark}`文本中,请输入 `{colors.on-dark}`,全流层产品-UI模拟卡。显示左侧头条 `{typography.display-mega}` (80px / 400),小标题插入 `{typography.body-md}`有两个CTA

**`hero-band-light`** — White-canvas variant used on Wealth and Explore. Background `{colors.canvas}`, text `{colors.ink}`. Same skeleton, light palette.

### 纸牌

**`product-ui-card-dark`** ——浮动产品-UI模拟. `{colors.surface-dark-elevated}`文本中,请输入 `{colors.on-dark}`,四舍五入 `{rounded.xl}` (24px), 贴 32px。经常显示为 2-3 轻轻旋转时堆叠牌,模仿一层的仪表板.

**`product-ui-card-light`** — Light-canvas variant used on Explore for asset cards. Background `{colors.canvas}`, text `{colors.ink}`, same geometry, 1px hairline border.

**`feature-card`** — Used in 3-up and 2-up grids. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.title-md}`, rounded `{rounded.xl}`, padding 32px.

### 交易表面

**`asset-row`** ——资产清单(勘探,财富)的横向行. transparent, 1px 细边线分隔符。 版式 : 32px circular 资产图标左侧, 资产名称+勾选器, 价格栏 `{typography.number-display}`, 24h 更改栏为 `{component.price-up-cell}` 或 `{component.price-down-cell}`.

**`price-up-cell`** + **`price-down-cell`** —— 内置价格变化单元格。仅颜色 : 绿色或红色文本 。 `{typography.number-display}`,没有背景填充。

**`asset-icon-circular`** — Circular 盘式后资产格子。背景 `{colors.surface-strong}`,四舍五入 `{rounded.full}`, 32px 直径。

### 定价

**`pricing-tier-card`** — Standard pricing tier on Developer Platform. Background `{colors.canvas}`, rounded `{rounded.xl}`, padding 32px, 1px hairline border. Layout: tier name + price + feature checklist + CTA pill.

**`pricing-tier-featured`** — The featured tier. Background `{colors.surface-dark}`, text `{colors.on-dark}`. Same skeleton, dark palette — visual inversion signals "highlighted choice" without colored ribbons.

### Forms

**`text-input`** ——标准文本输入。背景 `{colors.canvas}`文本中,请输入 `{colors.ink}`,四舍五入 `{rounded.md}` (12px), 贴 14px × 16px高度( 高度) 48px, 1px 细边线边界,在焦点上,边界加厚到 2px Coinbase 蓝.

**`search-input-pill`** — Pill-shaped search bar. Background `{colors.surface-strong}`, rounded `{rounded.pill}`, padding 12px × 20px, height 44px.

### 标记徽章( B)

**`badge-pill`** ——小大写丸作为部分标签使用("Institutional","REGULATTED"). `{colors.surface-strong}`文本中,请输入 `{colors.ink}`类型 `{typography.caption-strong}`,四舍五入 `{rounded.pill}`.

### 中导/页脚

**`cta-band-dark`** ——脚前"控制你的钱"乐队. `{colors.surface-dark}`文本中,请输入 `{colors.on-dark}`垂直编目 96px. 居中标题+两个CTA.

**`footer-light`**：白底页脚。底色为 `{colors.canvas}`，文字为 `{colors.body}`，链接列表为 6-column（六列）。

**`footer-link`** — Individual footer link. Background transparent, text `{colors.body}`.

**`legal-band`** ——页脚下方的条条。所有文字 `{colors.muted}` 时 间 `{typography.caption}`.


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` (Coinbase Blue),用于初级CTA,词标,品牌-glyph插图,内置强调色链接.
- 将每个 CTA 设定为 `{rounded.pill}` (100px;每个资产格言为: `{rounded.full}`.
- 保持 Coinbase 显示头条重播 400.
- 使用暗/淡波段旋转作为页面节奏.
- 将 CoinbaseMano 中的每个数值通过 `{typography.number-display}`.
- 给每个黑暗首屏配上一层层的产品 -UI模拟卡堆.

### 应避免的做法
- Don't introduce a secondary brand color. Coinbase Blue is the only action color; trading green/red are semantic-only.
- Don't bold display copy — display sits at weight 400; bolding shifts the brand voice.
- Don't add drop shadow tiers — system has one shadow tier.
- Don't use sharp `{rounded.none}` (0px) on CTAs.
- Don't mix CoinbaseDisplay and CoinbaseSans inside the same headline.
- Don't use trading green/red as a button background.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA color is what appears on actual product CTAs, not on injected modals.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 手机 | < 640px | 首屏h( 首屏h)1 80→40px; 特征卡网格 1-up; 资产行堆栈; 导航崩溃到汉堡; 层化产品-UI卡崩溃到单张卡. |
| 平板 | 640–1024px | 首屏h( 首屏h)1 64px; 特征卡网格 2-上;资产行保持水平但压缩列。 |
| 桌面 | 1024–1280px | 完全首屏h( 首屏h)1 80px; 特征卡网格 3-上; 完整资产行布局 。 |
| Wide | > 1280px | Content caps at 1200px; hero photography full-bleed. |

### 触控区域
- 初级CTA胶囊形, 44px 高度——位于WCAG AA.
- 更大的首屏胶囊形(`{component.button-pill-cta}`时 . 56px 远高于AAA.
- Asset icon circles at 32px — borderline; padded 8px row creates effective 48px tap zone.
- 搜索胶囊形 44px 高度——在AAA.

### 窄屏布局调整
- 顶端导航切换到下面的汉堡单 768px。签名 CTA 时保持可见。
- 首屏h( 首屏h)1 下移步骤 : 80 → 64 → 52 → 44 → 36px 显示最小的屏幕。
- 分层产品- UI 模拟卡从崩溃 2-3 移动时堆成单张卡。
- Pricing tier rows: 3-up → 2-up → 1-up.
- 移动堆栈上的资产行垂直:上方为勾线,下方为价格+变化线.


## 迭代指南

1. 一次聚焦单个组件,直接引用 YAML 密钥 。
2. New CTAs default to `{rounded.pill}` (100px); new icon plates default to `{rounded.full}`. Cards use `{rounded.xl}`.
3. 备选案文作为单独的条目在 `components:` 块。
4. 使用 `{token.refs}` 到处都是,从不内含六分法。
5. Hover state never documented. Only Default and Active/Pressed.
6. 库因巴斯游戏 400 用于显示的 ConbaseSans 软件 400/600/700 每一个号码都写着"库恩巴索摩诺"
7. Coinbase 蓝色仍然稀少——每个乐队一两个蓝色的时刻.


## 已知缺口

- 库因巴斯迪斯佩克、库因巴斯桑斯、库因巴斯莫诺获得许可证; Inter 和 JetBrains Mono 被记录为替代物。
- 产品内部交易表面(订单书,图表,订单表)在登录墙后——本文件只涵盖营销.
- 动画时间超出范围.
- 形式验证状态超出焦点,在捕获的表面看不到。
- 黄角只出现在比特币资产格莱弗插图中;仅作为说明性文件记录.

## 设计词元原值

An institutional-grade crypto exchange whose marketing surfaces read like a quietly-confident financial-services brand. The base canvas is pure white; Coinbase Blue (`#0052ff`) is the single brand voltage, used scarcely on primary CTAs, signature glyphs, and inline accent moments. Type runs Coinbase's licensed CoinbaseDisplay (display) and CoinbaseSans (body) at modest weights — display sits at weight 400 not 700, signaling editorial calm rather than fintech-bombastic. Page rhythm rotates between bright white sections, soft gray elevation bands, and full-bleed dark editorial heroes (`#0a0b0d`) carrying product-ui mockup cards. Iconography is geometric and minimal; depth comes from card-on-card layering, never decorative shadows.

```yaml
---
version: alpha
name: Coinbase-design-analysis
description: An institutional-grade crypto exchange whose marketing surfaces read like a quietly-confident financial-services brand. The base canvas is pure white; Coinbase Blue (`#0052ff`) is the single brand voltage, used scarcely on primary CTAs, signature glyphs, and inline accent moments. Type runs Coinbase's licensed CoinbaseDisplay (display) and CoinbaseSans (body) at modest weights — display sits at weight 400 not 700, signaling editorial calm rather than fintech-bombastic. Page rhythm rotates between bright white sections, soft gray elevation bands, and full-bleed dark editorial heroes (`#0a0b0d`) carrying product-ui mockup cards. Iconography is geometric and minimal; depth comes from card-on-card layering, never decorative shadows.

colors:
  primary: "#0052ff"
  primary-active: "#003ecc"
  primary-disabled: "#a8b8cc"
  ink: "#0a0b0d"
  body: "#5b616e"
  body-strong: "#0a0b0d"
  muted: "#7c828a"
  muted-soft: "#a8acb3"
  hairline: "#dee1e6"
  hairline-soft: "#eef0f3"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface-card: "#ffffff"
  surface-strong: "#eef0f3"
  surface-dark: "#0a0b0d"
  surface-dark-elevated: "#16181c"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#a8acb3"
  semantic-up: "#05b169"
  semantic-down: "#cf202f"
  accent-yellow: "#f4b000"

typography:
  display-mega:
    fontFamily: "'Coinbase Display', -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -2px
  display-xl:
    fontFamily: "'Coinbase Display', sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1.6px
  display-lg:
    fontFamily: "'Coinbase Display', sans-serif"
    fontSize: 52px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1.3px
  display-md:
    fontFamily: "'Coinbase Display', sans-serif"
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.09
    letterSpacing: -1px
  display-sm:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.11
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: -0.4px
  title-md:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
  title-sm:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  body-md:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption-strong:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  number-display:
    fontFamily: "'Coinbase Mono', 'Coinbase Sans', monospace"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0
  nav-link:
    fontFamily: "'Coinbase Sans', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  pill: 100px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  base: 16px
  md: 20px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  top-nav-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  top-nav-on-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 64px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 44px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-secondary-light:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 44px
  button-secondary-dark:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 44px
  button-outline-on-dark:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 11px 19px
    height: 44px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  button-pill-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 32px
    height: 56px
  hero-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-mega}"
    padding: 96px
  hero-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    padding: 96px
  product-ui-card-dark:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xl}"
    padding: 32px
  product-ui-card-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 32px
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  asset-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 16px 0
  price-up-cell:
    backgroundColor: transparent
    textColor: "{colors.semantic-up}"
    typography: "{typography.number-display}"
  price-down-cell:
    backgroundColor: transparent
    textColor: "{colors.semantic-down}"
    typography: "{typography.number-display}"
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  pricing-tier-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  cta-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: 96px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px 16px
    height: 48px
  search-input-pill:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 44px
  badge-pill:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  asset-icon-circular:
    backgroundColor: "{colors.surface-strong}"
    rounded: "{rounded.full}"
    size: 32px
  footer-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: 64px 48px
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
  legal-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
---
```
