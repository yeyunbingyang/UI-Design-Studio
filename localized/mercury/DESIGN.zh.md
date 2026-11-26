# Mercury · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Mercury feels like a private bank that happens to be a software company: quiet, precise and slightly nocturnal. The homepage lives in a deep ink-violet night (`{colors.night}` — #171721). Headlines are pale lavender-white (`{colors.on-dark}`), cards sit one shade lifted (`{colors.night-raised}`), and product imagery glows softly out of the dark. Move to the product and pricing pages and the whole system flips to day: a near-white canvas (`{colors.canvas}`), deep plum-ink text (`{colors.ink}`) and pale lavender feature cards (`{colors.lavender}`). The nav bar and footer stay in the night colour on every page, so each light page is bracketed in dark.

One colour carries the actions in both worlds: Mercury Indigo (`{colors.primary}` — #5266eb). It fills the "Open account" pill in the nav and hero, the annual-pricing toggle, and the brand accent in plan names. Everything else that is clickable is softer: translucent secondary pills tinted with lavender-grey, periwinkle or a 10% wash of the indigo, all with generous 40px capsule corners. The effect is calm and confident, with one saturated button and everything around it whispering.

类型学是 Mercury自己的自定义家族 : arcadiaDisplay 头条新闻和 arcadia 文本,设置在异常轻的可变字重(360 身体复制, 420 大学大学, 480 标题从大小和额外跟踪的头发,而不是字重。

**关键特征 :**
- Two native surface worlds: a dark homepage (`{colors.night}` / `{colors.night-raised}`) and light product pages (`{colors.canvas}` / `{colors.lavender}`), both framed by the night nav and footer.
- 单饱和动作颜色, `{colors.primary}`,在一个 `{rounded.xl}` 胶囊形.
- 二次作用作为半透明胶囊( 3)`{rounded.pill}`)而不是轮廓或灰色按钮。
- Custom arcadia / arcadiaDisplay type at light variable weights (360–480).
- 软圆形牌( Name`{rounded.md}`慷慨无比 `{spacing.xxl}` 铺设和没有阴影。
- 页面节奏:夜 导航 / 黑暗或轻首屏 / 交替卡格 / 中间引号 / 关闭 CTA / 夜脚.


## 配色

> 来源页分析:主页,定价页,以及商业-银行产品页.

### 品牌和 强调色
- **Mercury 英迪戈语Name** (`{colors.primary}` — #5266eb:"开户"药,年价切换,计划名称中的品牌强调色("Plus","Pro"),以及"P". 10% 轻度世界二次胶囊形后面的颜色
- **On Primary** (`{colors.on-primary}` — #ffffff): labels on indigo.
- **佩里温克勒** (`{colors.periwinkle}` — #9cb4e8: 使用时间 20% 透明度作为"接触销售"胶囊形在暗处的填充.

### 表面
- **页面底色** (`{colors.canvas}` — #fbfcfd:产品和定价页的浅页背景.
- **表面** (`{colors.surface}` — #ffffff):定价卡内的分级栏,以及 email-capture 字段。
- **表面细纹** (`{colors.surface-tint}` — #fbfbff:定价比较卡包装,比白话低语凉爽.
- **薰衣草** (`{colors.lavender}` — #edecfb: 光页上的特性和产品卡.
- **夜 间** (`{colors.night}` — #171721: 导航栏,主页页面底色,每个页页页的页脚.
- **夜升起,我爱她** (`{colors.night-raised}` — #1e1e2a: 暗黑主页上的特色和聚光灯卡.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — #28253b:头条和身体在光页上.
- **墨水中学** (`{colors.ink-secondary}` — #554e7b: 说明,标题和光页上的眉毛.
- **黑暗时** (`{colors.on-dark}` — #ededf3:头条和主文在夜光下.
- **雾** (`{colors.fog}` — #c3c3cc:夜间表面的副文本,导航眉毛,以及 1px 手风琴之间 光线上的规则
- **标 题** (`{colors.slate}` — #70707d): 1px 暗黑主页列表行之间的分隔符。


## 字体排版

### 字体家族
- **arcadiaDisplay**: Mercury标题、 统计和大引用的自定义显示面, 以字重计 480 并且卡片大小的追踪显示有微弱的正数
- **arcadia**: 匹配文本面值以复制体( ) (360–400),UI标签和按钮(420),和小大写眉毛(500).

### 等级

| 调试 | 家庭 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|---|
| `{typography.stat}` | arcadiaDisplay | 60px | 480 | 1.1 | 0 | 大型统计数字( “ )300K+") |
| `{typography.display}` | arcadiaDisplay | 52px | 480 | 1.1 | 0 | 首屏头条 |
| `{typography.heading-1}` | arcadiaDisplay | 42px | 480 | 1.15 | 0.42px | 节头条 |
| `{typography.heading-2}` | arcadiaDisplay | 28px | 480 | 1.2 | 0.42px | 牌名、计划名称 |
| `{typography.lead}` | arcadiaDisplay | 24px | 480 | 1.2 | 0.48px | 引言、引引语 |
| `{typography.body-lg}` | arcadia | 18px | 360 | 1.35 | 0 | 纸牌说明, 内传副本 |
| `{typography.body}` | arcadia | 16px | 400 | 1.4 | 0 | 默认复制 |
| `{typography.ui}` | arcadia | 16px | 420 | 1 | 0 | 按钮、导航、输入 |
| `{typography.ui-sm}` | arcadia | 14px | 420 | 1 | 0.07px | Small pills, accordion labels |
| `{typography.eyebrow}` | arcadia | 14px | 500 | 1 | 0.28px | Uppercase eyebrows ("COMPARE PLANS") |
| `{typography.legal}` | arcadia | 12px | 400 | 1.4 | 0.24px | 免责声明者、页脚精细打印 |

### 原则
- 到处都是轻重量:身体在 360,UI 时 420,头条 480. 等级来自大小和颜色.
- 头条在卡片大小下获得一触正追踪,而不是通常的负收紧.
- Uppercase is reserved for small eyebrows.

### Note on Font Substitutes
arcadia and arcadiaDisplay are proprietary. Inter (variable, used at 350–480) is the closest open-source match for both. Keep the light weights, and add about 0.01em of tracking at display sizes to match arcadiaDisplay's open fit.


## 布局

### 间距系统
- **基地单位**: 8px.
- **脚本**: `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 40px · `{spacing.section}` 80px · `{spacing.section-lg}` 128px.
- 纸牌垫 `{spacing.xxl}` 和胶囊形 20px 水平。 区域由 `{spacing.section}` 改为: `{spacing.section-lg}` 垂直空间。

### 网格容器( C)
- Content is centered in a column of roughly 1100–1200px. Headlines are narrower (~600px) and centered.
- Feature cards run in 2- and 3-up grids. The pricing card is a 3-column comparison table about 900px wide.
- 拆分部分将文本栏与产品模拟对齐.

### 白空间哲学
宽大的垂直空间和中心头条使每个部分都有一个平静的,类似画廊的速度。纸牌依赖于填充颜色而不是边框来与页面底色分开。

### 反应战略

#### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 桌面 | ≥ 1200px | 满载滴药的导航; 3- 上网格;并肩分割 |
| 笔记本 | 1024–1199px | 缩小容器;头条缩小流畅 |
| 平板 | 768–1023px | 电网走 2- 上; 分割区块堆栈 |
| 手机 | < 768px | 导航崩溃到菜单; 单列卡; 定价表变成叠加级 |

#### 触控区域
胶囊形是 40px 高, 电子邮件抓取是 46px。在触摸设备上,垫子击中区域到 44px.

#### 折叠战略
- 导航滴药会倒入菜单,“开户”胶囊形会一直可见。
- Card grids reflow 3 → 2 → 1 columns.
- 头条大小为流体,与景点为比例.
- 电子邮件将字段堆放在狭长屏幕上的按钮上方。

#### 图像行为
Product mockups and illustrations sit inside rounded cards (`{rounded.md}`) or float on the canvas. Hero photography on the homepage is full-bleed and fades into the night canvas.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | No shadow; separated by fill colour | Canvas, cards, pills |
| 1 软堆栈 | 极微弱的层状阴影( 微弱的层状阴影 ) ( 微弱的层状阴影 )≈2–9% 墨迹) | 轻质页面上的定价卡和产品模型 |
| 2 — Glow | Photography and luminous illustrations on `{colors.night}` | Homepage hero and feature art |

深度几乎完全为直径:卡片以一阶颜色,而不是阴影方式抬高,唯一的阴影是定价卡下发深,低不透明堆栈和浮动产品模型.

### 装饰性深度
暗黑主页使用光亮,柔软的光线 3D插图(闪烁的圆柱形,光纹,指纹图案),在UI染色体本身中,给予夜布大气而无梯度.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | Nav, footer, table columns |
| `{rounded.xs}` | 4px | Small tags, checkboxes |
| `{rounded.sm}` | 8px | Images, small controls, selects |
| `{rounded.md}` | 12px | 特色卡,定价卡,区域 |
| `{rounded.lg}` | 16px | 更大的面板和媒体框架 |
| `{rounded.xl}` | 32px | 初端“ 打开账户” 胶囊形, 输入左边缘 |
| `{rounded.pill}` | 40px | 中药和导航药 |
| `{rounded.full}` | 9999px | 回合图标按钮、切换、电子邮件抓取 |

### 摄影几何
产品截图和插图 `{rounded.md}` 或 减 减 `{rounded.lg}` 框式,首屏摄影是全血型的,客户标志是作为平面单色条形物出现的.


## 组件

> Only Default states are documented. Variants live as separate `components:` entries.

### 导航

**`nav-bar`**: a 72px `{colors.night}` 栏,每页 16px × 32px 挂起,左侧有字签,放下 `nav-link` 中间的胶囊形,还有"Log in"加一 `button-primary` 右边

**`nav-link`**: transparent 40px 胶囊形(`{rounded.pill}`, 0 × 20px 挂载), 以 `{colors.on-dark}` `{typography.ui}` 和小雪佛兰。

### 按钮

**`button-primary`**: a `{colors.primary}` 胶囊形加一 `{colors.on-primary}` `{typography.ui}` 标签, `{rounded.xl}` 转角 0 × 20px 贴纸和 40px 高度。 用于“ 打开账户 ” 。

**`button-glass-dark`**: a translucent lavender-grey pill (20% fill, with a 1px border at 36%) holding an `{colors.on-dark}` label. Used on the dark hero ("Launch demo").

**`button-tint-dark`**: 一种近温克丸,在 20% 与一个 `{colors.on-dark}` 标签,用于暗片的"接触销售".

**`button-tint-light`**: 一种Indigo胶囊形,在 10% 与一个 `{colors.ink}` 标签。用于“爆炸演示”和光页上的卡片“打开账户”。

**`button-outline-light`**: a grey-violet pill at 10% opacity with a 1px border at 22% and an `{colors.ink}` label. Used for "Contact sales" on light heroes.

**`button-small`**: a 32px- 整个版本 `button-tint-light` 输入 `{typography.ui-sm}` 与 0 × 16px 垫( “扩展全部 ” ) 。

**`button-icon-round`**: circular 图标控件( 图标控件) (`{rounded.full}`)用于游戏/暂停和聚光灯卡上的"+"支付.

### 输入表单( F)

**`text-input`**: 电子邮件字段 `{typography.ui}` 文本, 单词 20px 左边的垫子, 46px 高度,还有 `{rounded.xl}` 左边缘,所以它会连接到旁边的按钮上

**`email-capture`**首屏的注册太空舱,一个 `text-input` 加入到一个 `button-primary` 在一个圆形的全壳内。

**`toggle-switch`**: a `{colors.primary}` 胶囊形开关在旁边 `{colors.ink-secondary}` `{typography.ui}` 标签(“年度定价”15% )),"("关闭").

### 纸牌和集装箱

**`feature-card-dark`**: `{colors.night-raised}` 满, `{rounded.md}` 转角 `{spacing.xxl}` 贴纸, a `{typography.heading-2}` 标题在 `{colors.on-dark}` 财务报告和已审计财务报表 `{colors.fog}` 身体复制,用于主页聚光灯和特征卡片。

**`feature-card-light`**: 相同的形状 `{colors.lavender}`,与 `{colors.ink}` 标题和标题 `{colors.ink-secondary}` `{typography.body-lg}` 用于产品平台卡。

**`pricing-card`**: a `{colors.surface-tint}` wrapper with `{rounded.md}` corners and a very faint shadow. It holds a header row with a `eyebrow-label` and `toggle-switch`, then three `pricing-tier-column`s.

**`pricing-tier-column`**: 白色柱,计划名称在 `{typography.heading-2}` (计划后缀在 `{colors.primary}`),价格,a `{colors.ink-secondary}` 说明,a `button-tint-light` 或 减 减 `button-primary`,并有一个图标引导的特性列表。

**`accordion-row`**: 一条全宽的行, 并带有主要图标, a `{typography.ui-sm}` 标签,一个后期的切夫龙, 10px 垂直粘贴和 a 1px `{colors.fog}` 用于计划比较和FAQs。

### 签名组件

**`eyebrow-label`**: uppercase `{typography.eyebrow}` in `{colors.ink-secondary}` on light pages and `{colors.fog}` on dark ("COMPARE PLANS").

**`stat-block`**: a `{typography.stat}` 数字单位 `{colors.on-dark}` 过一个小 `{colors.fog}` 标题, 设置在主页的四行 。

**`quote-block`**: 中调引号 `{typography.lead}` 下表的归属 `{typography.body}`.

**`logo-strip`**: 夜间页面底色上单色客户单行字标记.

**`site-footer`**: a `{colors.night}` 带多列链接列表的带 `{colors.fog}`,列头输入 `{colors.on-dark}`,并长块 `{typography.legal}` 免责声明。

### 实例(说明性)

> 自动生成的工具包-模拟演示表面(`scripts/derive-examples-block.mjs`。每个 `ex-*` 条目参考: 下游消费者的品牌原始产品(`/preview-design`, `/generate-kit`) 重新皮肤相同 10 表面一致。

**`ex-pricing-tier`** ——默认定价等级卡。 feature-card 带品牌的铬 canvas-soft 表面。
- 属性 : `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** ——地貌/高亮的层次——极性-浮点表面(暗色填充+光线文字在光线模式下,浅色填充+暗色文字在暗线模式下).
- 属性 : `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** ——什么是包含的汇总卡——重新用于SaaS/B2B纵横(NOT为字形产品画廊).
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** ——订阅摘要——重新用于SaaS/B2B(每件加件的行项目,而非字面车).
- 属性 : `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** ——App Shell 实例中的侧边栏导航行. Active State 使用品牌主标.
- 属性 : `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- 属性 : `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** ——签入/签入卡. 复用. feature-card 铬 text-input 原始人在里面,他们都在里面
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** ——模度对话框表面——与 feature-card 以高的阴影盟誓,
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** ——空状态插图框架.
- 属性 : `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** ——通知表面. feature-card 形状 + 中阴影。
- 属性 : `backgroundColor`, `rounded`, `padding`, `typography`



## 设计建议与禁忌

### 执行
- 使用 `{colors.primary}` 用于视图上最重要的单一动作,通常为"打开账户".
- 制作半透明避孕药(`{rounded.pill}`:紫色-灰色或近温克色在暗色,英迪戈或灰紫色的色线在光线上.
- 带有 `{colors.night}` 导航和脚步。
- 保持类型亮度 : `{typography.body-lg}` 时 间 360,UI 时 420,头条 480.
- 将牌与页面底色分开, 并填充( Name`{colors.lavender}`, `{colors.night-raised}`而不是边际或沉重的阴影。
- 中心部分头条和给条 `{spacing.section}` 或更多垂直空间。

### Don't
- 少用一个固件 `{colors.primary}` 按钮。其他的都保持半透明。
- Don't set text in heavy bold weights. The brand never goes above 500.
- 动作上不要使用硬的简写按钮或方角.
- Don't put light-world ink (`{colors.ink}`) on night surfaces or `{colors.on-dark}` on the light canvas.
- Don't add strong drop shadows. Elevation is tonal.
- Don't introduce status greens or oranges into the chrome. They belong to product mockups, not the interface.

## 设计词元原值

分析 Mercury'设计语言——一种在主页上深墨紫色夜界与产品和定价页上苍白,近白光界之间移动的风琴技术系统,由自信的Indigo动作胶囊形,软半透明二次胶囊形,轻轻的圆形卡片和一种静静的定制香炉一起持有,其产品和定价页上都有苍白,近白的光界,其特点为一种令人难以置信的轻重的光.

```yaml
---
version: alpha
name: Mercury Analysis
description: An analysis of Mercury's design language — a fintech system that moves between a deep ink-violet night world on the homepage and a pale, near-white light world on its product and pricing pages, held together by one confident indigo action pill, soft translucent secondary pills, gently rounded cards and a quiet custom sans set at unusually light weights.

colors:
  primary: "#5266eb"
  on-primary: "#ffffff"
  periwinkle: "#9cb4e8"
  canvas: "#fbfcfd"
  surface: "#ffffff"
  surface-tint: "#fbfbff"
  lavender: "#edecfb"
  night: "#171721"
  night-raised: "#1e1e2a"
  ink: "#28253b"
  ink-secondary: "#554e7b"
  on-dark: "#ededf3"
  fog: "#c3c3cc"
  slate: "#70707d"

typography:
  display:
    fontFamily: arcadiaDisplay
    fontSize: 52px
    fontWeight: 480
    lineHeight: 1.1
    letterSpacing: 0
  stat:
    fontFamily: arcadiaDisplay
    fontSize: 60px
    fontWeight: 480
    lineHeight: 1.1
    letterSpacing: 0
  heading-1:
    fontFamily: arcadiaDisplay
    fontSize: 42px
    fontWeight: 480
    lineHeight: 1.15
    letterSpacing: 0.42px
  heading-2:
    fontFamily: arcadiaDisplay
    fontSize: 28px
    fontWeight: 480
    lineHeight: 1.2
    letterSpacing: 0.42px
  lead:
    fontFamily: arcadiaDisplay
    fontSize: 24px
    fontWeight: 480
    lineHeight: 1.2
    letterSpacing: 0.48px
  body-lg:
    fontFamily: arcadia
    fontSize: 18px
    fontWeight: 360
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: arcadia
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  ui:
    fontFamily: arcadia
    fontSize: 16px
    fontWeight: 420
    lineHeight: 1
    letterSpacing: 0
  ui-sm:
    fontFamily: arcadia
    fontSize: 14px
    fontWeight: 420
    lineHeight: 1
    letterSpacing: 0.07px
  eyebrow:
    fontFamily: arcadia
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.28px
  legal:
    fontFamily: arcadia
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.24px

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 32px
  pill: 40px
  full: 9999px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  huge: 40px
  section: 80px
  section-lg: 128px

components:
  # ─── Brand-native components (extracted) ───
  nav-bar:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
    height: 72px

  nav-link:
    textColor: "{colors.on-dark}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.xl}"
    padding: "0px 20px"
    height: 40px

  button-glass-dark:
    backgroundColor: "rgba(175, 178, 206, 0.2)"
    textColor: "{colors.on-dark}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-tint-dark:
    backgroundColor: "rgba(156, 180, 232, 0.2)"
    textColor: "{colors.on-dark}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-tint-light:
    backgroundColor: "rgba(82, 102, 235, 0.1)"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-outline-light:
    backgroundColor: "rgba(112, 115, 147, 0.1)"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-small:
    backgroundColor: "rgba(82, 102, 235, 0.1)"
    textColor: "{colors.ink}"
    typography: "{typography.ui-sm}"
    rounded: "{rounded.pill}"
    padding: "0px 16px"
    height: 32px

  button-icon-round:
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"

  text-input:
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.xl}"
    padding: "0px 0px 0px 20px"
    height: 46px

  email-capture:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"

  feature-card-dark:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"

  feature-card-light:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"

  pricing-card:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.md}"

  pricing-tier-column:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  toggle-switch:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"

  accordion-row:
    textColor: "{colors.ink}"
    typography: "{typography.ui-sm}"
    rounded: "{rounded.none}"
    padding: "10px 0px"

  eyebrow-label:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"

  stat-block:
    textColor: "{colors.on-dark}"
    typography: "{typography.stat}"
    rounded: "{rounded.none}"

  quote-block:
    textColor: "{colors.ink}"
    typography: "{typography.lead}"
    rounded: "{rounded.none}"

  logo-strip:
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"

  site-footer:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.legal}"
    rounded: "{rounded.none}"

  # ─── Examples (illustrative, kit-mirror) ───

  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.fog}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    item-divider: "{colors.fog}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.surface}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.fog}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.huge}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body}"

---
```
