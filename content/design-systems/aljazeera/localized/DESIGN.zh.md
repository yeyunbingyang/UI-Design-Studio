# Al Jazeera · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Al Jazeera新闻表面是印刷机,不是产品。页面是平的 `{colors.canvas}` 纸片包装的边缘对边缘 摄影和密集 Roboto 头条堆栈;没有阴影,没有托纳卡填充,没有装饰梯度——等级完全由类型字重,规则,以及网格的纪律来承载. 反之严重性,品牌本身用单一饱和橙色表示: `{colors.primary}` 标记块,在主头和短橙色条上,每条眉毛前方(“Must READ”、“OPINON”、“FEATURED”),橙色从不填满按钮,也从来不给链接颜色——它是标记笔,而不是控制。

急急有自性色. `{colors.live-red}` 完全属于现场设备:在桅头旁边的LIVE徽章,破解的掩蔽带,分分钟时间的脉冲点,以及运行故事上的LIVE UPDATES标签。相比之下,动作是安静的黑色物体——紧凑的。 `{colors.ink}` 胶囊形,在 `{rounded.lg}` 供签署和订户, `{rounded.xl}` 通讯的电子邮件胶囊——这样就没有什么东西可以和新闻图像竞争来引起人们的注意了。

The corporate network pages flip the polarity while keeping the family jewelry. On a near-black `{colors.network-canvas}` canvas, a `{colors.night-navy}` utility strip and royal `{colors.indigo}` hero panels frame monochrome leadership portraiture; `{colors.gold}` rules and `{colors.amber}` active links carry the network's gilded eagle identity; and vivid vertical rails in `{colors.rail-teal}` and `{colors.rail-red}` label whole sections from the margin. It reads as the broadcast brand's title-card language applied to the web.

**关键特征 :**
- 平面白纸,零高- `{colors.hairline}` 规则和空白空间 做所有在新闻表面的分隔
- One-color signature: `{colors.primary}` appears only as the logo block and the 8px eyebrow bar before `{typography.section-eyebrow}` labels
- 直播报道用 `{colors.live-red}` 标记徽标、横幅和时间轴圆点。圆点以 `{colors.silver}` 连线串联。
- 紧凑的黑药控制器( 3)`{rounded.lg}`)和a 数据 `{rounded.xl}` 胶囊输入; 媒体缩略图圆形 。 `{rounded.md}` 文章图像保持平方
- Roboto- 仅跨越等级 300- 重置大写眉毛到 900- 字重级生活车和趋势标签
- The network sub-surface: `{colors.network-canvas}` dark canvas, `{colors.indigo}` hero panels, `{colors.gold}`/`{colors.amber}` gilding, and teal/crimson section rails
- 页面节奏运行白色桅杆头 – 直播条 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网格 – 光线网 – 光网 光网 – 光网 光网 – 光 光网 – 光 光 光 光 – 光 光 光 光 光 – 光 光 光 光 光 光 光 光 光 光 `{colors.soft}` 通讯卡 → 白脚;网络页面运行海军条 → 白脚 → 黑头肖像页面底色 → 黑脚


## 配色

来源页面——新闻首屏,一个现场博客,以及网络的领导和奖项页面——共享一个身份跨越两个极点.

### 品牌色与强调色
- **半岛橙色** (`{colors.primary}` — #fa9000: 桅头标志块和 section-eyebrow 栏,身份, 绝不互动。
- **红色直播** (`{colors.live-red}` — #c31833: 打破乐队,LIVE徽章,时间点,直播标签,"现在发生"的颜色,没有别的.
- **Gold** (`{colors.gold}` — #dba200): the network's rule and control-border gilding.
- **琥珀( 琥珀)** (`{colors.amber}` — #ffa000: 网络页面上活跃的导航链接.
- **选择黄金** (`{colors.select-gold}` — #ffc500: 网络很重 3px 控制过滤器上的边框。
- **时间轴连线提尔** (`{colors.rail-teal}`和 (中文(简体) ). **时间轴连线灰暗** (`{colors.rail-red}`: 领导网格旁的垂直段标签栏杆——广播在页面边距上显示的下三分之一颜色.

### 界面表面
- **纸张** (`{colors.canvas}` — #ffffff:新闻页面底色,导航,页脚.
- **软** (`{colors.soft}` — #f0f0f0:通讯卡填充和最微弱的分音.
- **夜幕画** (`{colors.network-canvas}` — #181818:网络页面的暗色片场用于肖像卡.
- **皇家印地哥** (`{colors.indigo}` — #272967: 网络首屏面板在页标题后面.
- **夜间海军** (`{colors.night-navy}` — #100e2f:网络的微弱的公用条.
- **细线色**（`{colors.hairline}`，#d8d8d8）与**银灰色**（`{colors.silver}`，#bebebe）用于列表分隔线、卡片边缘及直播时间轴连线。

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}`:头条,立牌,黑丸充之.
- **木炭矿** (`{colors.charcoal}` — #333333: 文章正文.
- **标 题** (`{colors.slate}` — #595959:次文本,眉毛标签,超大小的最受欢迎数字,输入边框,以及单色标志渲染.
- **雾** (`{colors.mist}` — #dddddd:网络暗面上的轻文本.
- **Graphite** (`{colors.graphite}` — #323232): network body text and rules on light bands.

### 语义色
- `{colors.live-red}` 是直播与突发状态使用的语义色。新闻界面框架维持中性色，归档无专用成功色或警告色。

### 品牌渐变
- None. Every brand surface is a flat fill; even the network's indigo panels and gold rules are solid.


## 字体排版

### 字体族
Roboto carries the entire system — news and corporate alike — from 300-weight uppercase eyebrows to 900-weight status labels. The only other face is the network's custom Al-Jazeera wordmark lettering, used solely as logo art. Body text on article pages sits on Roboto's neutral 400.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.headline-xl}` | 40px | 700 | 1.2 | 0 | 现场博客和文章头条 |
| `{typography.headline-lg}` | 32px | 700 | 1.25 | 0 | 首屏头条新闻 |
| `{typography.headline-md}` | 24px | 700 | 1.3 | 0 | 头条牌、通讯标题 |
| `{typography.headline-sm}` | 18px | 700 | 1.35 | 0 | List headlines, Most Popular rows |
| `{typography.network-display}` | 36px | 700 | 1.2 | 0 | 网络页面标题和领导者名称 |
| `{typography.section-eyebrow}` | 24px | 300 | 1.2 | 0 | 橙色条后面的大写区域标签 |
| `{typography.label-black}` | 14px | 900 | 1 | 0 | 趋势、生活和状态标签 |
| `{typography.body}` | 16px | 400 | 1.5 | 0 | 文章和接口机构 |
| `{typography.body-sm}` | 14px | 400 | 1.45 | 0 | Metadata, nav links, footer columns |
| `{typography.caption}` | 12px | 400 | 1.4 | 0 | 时间戳、信用、精细印刷 |
| `{typography.button}` | 16px | 400 | 1 | 0 | 胶囊形标签 |

### 原则
- Weight is the hierarchy: 700 for every headline tier, 300 for the airy uppercase eyebrows, 900 reserved for tiny urgent labels — a deliberately wide 300↔900 spread inside one family.
- 头条被设定紧凑,密集;系统容忍——并拥抱——拥挤的新闻网格.
- 时间戳和线状元数据 `{typography.caption}` `{colors.slate}`总是从属于头条块。

### 替代字体
Roboto 是一个开源的,直接使用。半岛地区文字标记字母是专有标志艺术;不要将其与文本面相近。


## 布局

### 间距系统
- **基地单位**: 8px 紧紧的 2/4px 用于界面框架和元数据的步骤。
- **托肯斯(前题)**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 20px · `{spacing.xxl}` 24px · `{spacing.huge}` 30px
- 新闻密度使差距很小—— `{spacing.sm}`-`{spacing.lg}` 介于牌之间; 通讯卡片 `{spacing.xl}`; 网络段落呼吸 `{spacing.xxl}`+.

### 网格与容器
- The front page runs a packed 1100px multi-column news grid: lead story + secondary column + rail, then full-width bands (video carousel, features, galleries).
- 直播博客使用单列正文与右侧栏，每条更新带时间戳并按顺序堆叠。
- 网络页面运行全血乐队:首屏面板,然后 4- 上面的肖像网, 垂直的栏目色条占据左侧边距。

### 留白规则
白空间像柱英寸一样配角。设计中有意运行密集的——分离来自细边线规则,时间戳,以及字重对比而不是空气。只有网络页面允许在肖像画周围出现宽大的黑暗空隙。

### 响应式布局

#### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 桌面 | 1280px | 右栏的全新网 |
| Laptop | 1024px | Rail folds under; grids step to 2-up |
| 平板 | 768-992px | 导航凝结; 旋转木马显示的卡片较少 |
| 移动升 | 600px | 单柱堆叠; 缩略图移到标题旁 |
| Mobile | 480px and below | Full-width media; pills persist at compact size |

#### 触控区域
黑药垫 6px 17px 环绕 16px 标签——保持其周围行距,因此目标清晰 44×44。 时间线项目和最受欢迎的行是全宽的自来水区。

#### 窄屏布局调整
导航收起为菜单，LIVE 胶囊标签和品牌标识区保持可见。新闻网格随视口收窄逐列减为手机单栏。直播时间轴在各宽度均保留圆点和连线。人物肖像网格按 4 → 2 → 1 列变化，栏目色条移到网格上方。

#### 图片适配
新闻摄影被大肆收割 16:9 和 4:3以物为单位, `{rounded.md}` 网络领导肖像是一贯的灰色工作室,以高卡片显示,上面有姓名上盖。


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | None — rules only | The entire news surface |
| Rule | 1px `{colors.hairline}` / `{colors.soft}` dividers; 1px `{colors.ink}` bottom rules | Lists, cards, section boundaries |
| 下调 | 0 6px 12px rgba(0, 0, 0, 0.175) | 网络菜单——系统唯一的影子 |

影子哲学: 读取新闻是平的。 摄影在编辑方面提供所有深度; 网络的暗布在公司方面提供。 单一的下垂阴影是用于可用性的,而不是风格的。

### 装饰性深度
- **照片剪辑**:领导肖像卡在基地逐渐淡出,所以白色的名字具有对比性.
- **区段栏目色条**: 切片和折片垂直条读作像广播侧索,给平面页一个舞台设定深度.
- **Polarity shift**: the jump from white news paper to `{colors.network-canvas}` corporate darkness is itself the system's depth move.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 2px | 生活证章、网络按钮 |
| `{rounded.sm}` | 4px | Tooltips, small tags |
| `{rounded.md}` | 10px | 视频卡片、缩略图图像 |
| `{rounded.lg}` | 18px | 黑药扣 |
| `{rounded.xl}` | 22px | 电子邮件胶囊输入 |
| `{rounded.full}` | 9999px | 迷你胶囊形 circular 图标按钮, 变形符 |

比例尺为双倍制:编辑图像和徽章保持接近平方(2-10px)而每个控制器都是一个胶囊(18-22px,图标的圆圆形)——按钮在平面页上单独以形状宣布自己.

### 图片形状
- 文章网格使用直角、贴边排列的配图，裁切比例为 16:9 和 4:3。
- 视频旋转木马:肖像卡 `{rounded.md}`.
- Thumb rows: small 130×87 stills at `{rounded.md}` beside `{typography.headline-sm}` links.
- 意见: circular `{rounded.full}` 作者阿凡达.
- 网:高架肖像卡带底板斜纹,方形斜纹.


## 组件

### 按钮

**`button-pill-dark`** - 注册,订阅,LIVE主控头控制器
- Fill `{colors.ink}`, label `{colors.on-primary}` at `{typography.button}`, rounded `{rounded.lg}`, padding 6px 17px. The standing action shape across the news surface.

**`button-pill-mini`**
- 细小的 `{colors.ink}` 胶囊形 `{rounded.full}`, 编译 1px 6px ——照片计数叠加和紧凑的切换.

### 卡片与容器

**`news-card`**
- Square photography above or beside an `{typography.headline-md}`/`{typography.headline-sm}` ink headline with `{typography.caption}` metadata; no fill, no border — position and weight define it.

**`media-thumb`**
- 电话 `{rounded.md}` 仍然用于视频旋转木马和拇指链接行.

**`newsletter-card`**
- `{colors.soft}` 面板, `{typography.headline-md}` 标题, 支持 `{typography.body-sm}`,包含 `text-input` 备注a `button-pill-dark`,加号 `{spacing.xl}`.

**`most-popular-row`** + **`popular-numeral`**
- 排名列表行除以 `{colors.hairline}` 体积过大 `{colors.slate}` 数字在 `{typography.headline-lg}` 旁边 `{typography.headline-sm}` 头条.

**`award-card`**
- 网络奖格格格:平方新闻照片, `{typography.headline-sm}` 标题, `{typography.caption}` 日期, `{colors.graphite}` 总结。

**`leader-card`** + **`leader-band`**
- 上映肖像卡片 `{colors.network-canvas}` 和基底斜纹和 `{colors.on-primary}` 名称/作用文本;高级领导获得全宽灰色工作室乐队 `{typography.network-display}` 名称通过一个短白规则。

### 输入框与表单

**`text-input`** - 电子邮件胶囊
- `{colors.canvas}` 满, 1px `{colors.slate}` 边框,四舍五入 `{rounded.xl}`, 编译 0px 15px, `{typography.body}` 文本中选择的文本。

**`network-select`**
- 网络过滤控制 : `{colors.canvas}` 满载重物 3px `{colors.select-gold}` 边框——系统最响亮的控制边缘.

### 导航

**`nav-bar`** ——顶级导航(德士克托普,新闻).
- 白条 : `logo-block` 左侧( `{colors.primary}` 与白鹰同为正方形,黑色 `{typography.body}` 将卡片滴入,然后是LIVE胶囊形, 搜索, 并签注胶囊形。 `{typography.label-black}` 标签和主题链接。

**`network-utility-strip`** + **`network-nav`** + **`network-nav-active`**
- 公司头条叠加 a `{colors.night-navy}` 电源条(语言+社会),在白色的盖子链接导航上,活动项目切换到 `{colors.amber}`;金鹰标记坐左.

**顶部导航( 移动)**
- 新闻导航崩溃到汉堡+标志块+LIVE胶囊形.

**`footer`** / **`network-footer`**
- 新闻页脚:白色,细边线上连接的栏目与鹰印. 网路页脚: `{colors.ink}` 黑色为 `{colors.mist}` 链接和金质网络锁。

### 标志性组件

**`section-eyebrow-lockup`**
- The system's signature: an 8px-wide `{colors.primary}` bar flush against an uppercase `{typography.section-eyebrow}` label in `{colors.slate}`. Every editorial section opens with it.

**`live-badge`** + **`breaking-band`** + **`live-strip-item`**
- 直播状态标签 LIVE UPDATES 用 `{typography.label-black}`、`{colors.live-red}` 和 `{rounded.xs}`。通栏突发新闻横幅用 `{colors.live-red}`，标题文字用 `{colors.on-primary}`。逐分钟时间轴用 `{colors.live-red}` 圆点与 `{colors.silver}` 连线，旁列采用 `{typography.body-sm}` 的带时间戳更新。

**`section-rail-teal`** / **`section-rail-red`**
- 人物肖像网格旁用 `{colors.rail-teal}` 和 `{colors.rail-red}` 绘制贯穿栏目全高的竖色条，条上用旋转的白色大写字显示栏目名。

**`network-hero-panel`**
- 电话 `{colors.indigo}` 标题面板打开网络页面 : `{typography.network-display}` 白头 `{typography.body-sm}` 复制,在全血摄影旁边

**`logo-block`**
- 头骨身份:一个坚固的 `{colors.primary}` 方形上,在文字标记旁,背着白鹰书法标记。

**`avatar-circle`**
- Circular `{rounded.full}` 意见书列表中的作者肖像.

### 组合示例

> Kit-mirror demonstration surfaces. Each `ex-*` entry references brand-native primitives via token syntax so downstream consumers re-skin the same 10 surfaces consistently — these are illustrative compositions stamped with this brand's tokens, not components extracted from the site.

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
- 保留 `{colors.primary}` 给身份责任——标志块和眉条——让黑胶囊形携带每一个动作.
- 准备金 `{colors.live-red}` 严格针对活/破状态:徽章,乐队,时间线点.
- 打开每节编辑 `section-eyebrow-lockup` (橙条+ 300- 字重大写标签).
- 保持新闻平面:细边线规则和字重对比,永远不出现阴影或托纳牌.
- 运行图片密集度和文章网格中的方块; 保存 `{rounded.md}` 木马和拇指。
- On network pages, keep the gilded family — `{colors.gold}` rules, `{colors.amber}` active links — over the dark `{colors.network-canvas}`.
- 宽度 Roboto 特意分散字重 : 300 眉毛, 头发, 700 头条, 900 紧急标签。

### 应避免的做法
- Don't fill buttons or links with `{colors.primary}` — orange interaction chrome breaks the marker-pen rule.
- Don't use `{colors.live-red}` decoratively; if it isn't live coverage, it isn't red.
- Don't add shadows, gradients, or card fills to news grids — density and rules are the aesthetic.
- Don't round article photography; square crops are part of the wire-service voice.
- Don't mix the network's gold/amber/indigo family into the news surface, or the orange eyebrow system into corporate pages.
- 眉毛不要软化——它们保持大写,轻量级,禁止.
- Don't introduce new accent hues; the palette's color budget is spent on orange, live-red, and the network's gold and rails.

## 设计词元原值

An analysis of Al Jazeera's design language — a hard-news editorial system built on flat white paper and dense Roboto headline stacks, signed by one saturated orange used as logo block and section-eyebrow bar, punctuated by a live-red that marks breaking coverage with timeline dots and LIVE badges, and interfaced through compact black pills; the corporate network pages extend the same identity onto a near-black canvas with royal-indigo hero panels, gold rules and amber links, and vivid teal and crimson section rails beside monochrome leadership portraiture.

```yaml
---
version: alpha
name: Al Jazeera Analysis
description: An analysis of Al Jazeera's design language — a hard-news editorial system built on flat white paper and dense Roboto headline stacks, signed by one saturated orange used as logo block and section-eyebrow bar, punctuated by a live-red that marks breaking coverage with timeline dots and LIVE badges, and interfaced through compact black pills; the corporate network pages extend the same identity onto a near-black canvas with royal-indigo hero panels, gold rules and amber links, and vivid teal and crimson section rails beside monochrome leadership portraiture.

colors:
  primary: "#fa9000"
  on-primary: "#ffffff"
  live-red: "#c31833"
  ink: "#000000"
  charcoal: "#333333"
  slate: "#595959"
  canvas: "#ffffff"
  soft: "#f0f0f0"
  hairline: "#d8d8d8"
  silver: "#bebebe"
  indigo: "#272967"
  night-navy: "#100e2f"
  network-canvas: "#181818"
  gold: "#dba200"
  amber: "#ffa000"
  select-gold: "#ffc500"
  rail-teal: "#00cbca"
  rail-red: "#bc0000"
  mist: "#dddddd"
  graphite: "#323232"

typography:
  headline-xl:
    fontFamily: Roboto
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  headline-lg:
    fontFamily: Roboto
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  headline-md:
    fontFamily: Roboto
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  headline-sm:
    fontFamily: Roboto
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: 0
  network-display:
    fontFamily: Roboto
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  section-eyebrow:
    fontFamily: Roboto
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: 0
  label-black:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: 0
  body:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  caption:
    fontFamily: Roboto
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0

rounded:
  xs: 2px
  sm: 4px
  md: 10px
  lg: 18px
  xl: 22px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
  huge: 30px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 0px 15px

  logo-block:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"

  button-pill-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 6px 17px

  button-pill-mini:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 1px 6px

  section-eyebrow-lockup:
    textColor: "{colors.slate}"
    typography: "{typography.section-eyebrow}"
    borderColor: "{colors.primary}"

  news-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.headline-md}"

  media-thumb:
    rounded: "{rounded.md}"

  live-badge:
    textColor: "{colors.live-red}"
    typography: "{typography.label-black}"
    rounded: "{rounded.xs}"

  breaking-band:
    backgroundColor: "{colors.live-red}"
    textColor: "{colors.on-primary}"
    typography: "{typography.headline-sm}"

  live-strip-item:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.silver}"

  most-popular-row:
    textColor: "{colors.ink}"
    typography: "{typography.headline-sm}"
    borderColor: "{colors.hairline}"
    padding: 16px 0px

  popular-numeral:
    textColor: "{colors.slate}"
    typography: "{typography.headline-lg}"

  newsletter-card:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.ink}"
    typography: "{typography.headline-md}"
    padding: 20px

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    borderColor: "{colors.slate}"
    rounded: "{rounded.xl}"
    padding: 0px 15px

  avatar-circle:
    rounded: "{rounded.full}"

  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"

  network-utility-strip:
    backgroundColor: "{colors.night-navy}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"

  network-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.graphite}"
    typography: "{typography.body-sm}"

  network-nav-active:
    textColor: "{colors.amber}"
    typography: "{typography.body-sm}"

  network-hero-panel:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.on-primary}"
    typography: "{typography.network-display}"
    padding: 24px

  leader-band:
    textColor: "{colors.on-primary}"
    typography: "{typography.network-display}"

  leader-card:
    backgroundColor: "{colors.network-canvas}"
    textColor: "{colors.on-primary}"
    typography: "{typography.headline-md}"

  section-rail-teal:
    backgroundColor: "{colors.rail-teal}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"

  section-rail-red:
    backgroundColor: "{colors.rail-red}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"

  award-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.graphite}"
    typography: "{typography.headline-sm}"

  network-select:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.graphite}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.select-gold}"

  network-footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.mist}"
    typography: "{typography.body-sm}"

  # ─── Examples (illustrative, kit-mirror) ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
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
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.huge}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---
```
