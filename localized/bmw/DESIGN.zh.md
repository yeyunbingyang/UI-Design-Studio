# BMW · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

BMW's corporate site carries a far more **measured, corporate-automotive** interface than its motorsport-bombastic cousin BMW M. The atmosphere is light: `{colors.canvas}` (#ffffff) is the base surface, `{colors.surface-card}` (#fafafa) carries the soft-grey card plates, and dark navy `{colors.surface-dark}` (#1a2129) appears only inside hero bands — one per page, framing the lead model render.

Type runs BMW's licensed **BMW Type Next Latin** at two weights: heavy 700 (display + button + nav) and Light 300 (body + secondary copy). That contrast — heavy display next to thin paragraph — is the editorial signature, channeling the brand's "European-engineered" voice. Weight 500 is deliberately absent; weight 400 only appears on caption and nav-link in neutral utility contexts.

品牌动作颜色, **BMW 公司蓝** (`{colors.primary}` — #1c69d4),单行横跨每个初级CTA——按钮是 **长方形, 0px 转角**,带有白色类型。网站旋转一个蓝按钮+深色导航-首屏组合,并贯穿页面节奏。M tricolor stripe (`{colors.m-blue-light}` → `{colors.m-blue-dark}` → `{colors.m-red}`)只出现在运动场景中,并作为M型型徽章/潜水器出现——从未出现在公司网站的主要语言中.

配置和预留流在同一系统之上增加了一个经销商-侧式存货UI——滤镜芯片,模版卡,价格表,但打字和颜色保持不变;只有密度上升.

**关键特征 :**
- Light `{colors.canvas}` is the base surface; dark navy `{colors.surface-dark}` appears only inside hero bands — page rhythm relies on contrast.
- BMW 公司蓝( 4)`{colors.primary}` — #1c69d4)作为单一的初级动作颜色.
- BMW Type Next Latin: 字重 700 显示与字重 300 身体是签名。
- 按钮是 **长方形, 0px 半径** ——企业方言,与M's sportier radi相区别.
- 模式牌以 4- 上层或 5- 上网格无细边线边界或仅最小边框——仅白板+照片+标题.
- 摄影(模型制作)坐落在环境里,没有影子——深度完全来自颜色-块对比.
- 红色 stripe 仅出现在M型模式背景下,而不是公司语言的一部分。
- Section rhythm holds at `{spacing.section}` (80px) for every major band.


## 配色

### 品牌色与强调色
- **BMW 蓝色( 初级)** (`{colors.primary}` — #1c69d4: 单品牌动作颜色. 全部主CTA,"Learn More"链接前缀(蓝色文本),. nav-link 状态。按下 转换为 `{colors.primary-active}` (#0653b6).
- **M 蓝光** (`{colors.m-blue-light}` — #0066b1) + **M 蓝色暗色** (`{colors.m-blue-dark}` — #1c69d4) + **M 红色** (`{colors.m-red}` — #e22718: M 彩色调 stripe ——只出现在公司网站的M型版面和"M"徽章上,从未作为CTA的颜色.

### 界面表面
- **页面底色** (`{colors.canvas}` — #ffffff:默认页面表面.
- **表面软** (`{colors.surface-soft}` — #f7f7f7:脚步和子导航带的软灰色.
- **表面卡片** (`{colors.surface-card}` — #fafafa: 样卡照片块后面的灯牌.
- **表面坚固** (`{colors.surface-strong}` — #ebebeb:一种稍重的灰色用作分区分解器.
- **表面暗色( T)** (`{colors.surface-dark}` — #1a2129: 暗海军为首屏乐队和大型暗CTA. 并非纯黑色——携带暖气底质.
- **表面暗线** (`{colors.surface-dark-elevated}` — #262e38:一步轻一点,用于暗首屏顶上嵌入的牌.

### Hairlines
- **Hairline** (`{colors.hairline}` — #e6e6e6): The 1px divider — input outline, configurator card outline, table separator.
- **Hairline Strong** (`{colors.hairline-strong}` — #cccccc): A more visible 1px outline — disabled secondary buttons, emphasized table border.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — #262626:所有显示和主文本,不纯黑色——柔软的反对摄影.
- **体质** (`{colors.body}` — #3c3c3c: 默认运行的文本.
- **强体** (`{colors.body-strong}` — #1a1a1a:强调段落和主文。
- **静音** (`{colors.muted}` — #6b6b6b:页脚链接,面包屑,标题.
- **静音软体** (`{colors.muted-soft}` — #9a9a9a: 已禁用文本, fine-print 法律上说。
- **小学** (`{colors.on-primary}` — #ffffff:蓝色按钮上的白色文字.
- **黑暗时** (`{colors.on-dark}` — #ffffff: 黑首屏乐队的白文本.
- **暗软** (`{colors.on-dark-soft}` — #bbbbbb: 暗带上稍微微微声的白文本的二次文本.

### 语义色
- **成功** (`{colors.success}` — #22c55e:确认消息和"可用"指标.
- **Warning** (`{colors.warning}` — #f59e0b): Warning callouts.
- **错误** (`{colors.error}` — #dc2626:验证错误.


## 字体排版

### 字体族
系统运行 **BMW Type Next Latin** 中,两个切数:正则(显示 + UI 标签)和 **BMW Type Next Latin 光线** (body + 二次复制) 倒数堆叠 : `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

显示/ 身体分割功能 :
- BMW Type Next Latin (700) 显示头条、按钮标签、导航链接
- BMW Type Next Latin 轻( L)300) 段落,说明性副本
- BMW Type Next Latin (400——标题,中性 nav-link 语境

This three-way split mirrors BMW M's — corporate and the M sub-brand share the same typographic DNA; only the weight/size ratios differ.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 700 | 1.05 | 0 | 首屏h( 首屏h)1 ("九)3",型号名称). |
| `{typography.display-lg}` | 48px | 700 | 1.1 | 0 | 科长 |
| `{typography.display-md}` | 32px | 700 | 1.15 | 0 | 副科长 |
| `{typography.display-sm}` | 24px | 700 | 1.25 | 0 | CTA-band 头条 |
| `{typography.title-lg}` | 20px | 700 | 1.3 | 0 | 纸牌组标题 |
| `{typography.title-md}` | 18px | 700 | 1.4 | 0 | 牌名范本,介绍段落 |
| `{typography.title-sm}` | 16px | 700 | 1.4 | 0 | 库存卡片标题,列表标签 |
| `{typography.body-md}` | 16px | 300 (灯光) | 1.55 | 0 | 默认体 —— BMW Type Next Latin 光线 |
| `{typography.body-sm}` | 14px | 300 (灯光) | 1.55 | 0 | 页脚身体, fine-print |
| `{typography.caption}` | 12px | 400 | 1.4 | 0.5px | 图片标题, meta |
| `{typography.label-uppercase}` | 13px | 700 | 1.3 | 1.5px | "LEARN More" 内置链接, 分类标签 |
| `{typography.button}` | 14px | 700 | 1.0 | 0.5px | 标准 CTA 按钮标签 |
| `{typography.nav-link}` | 14px | 400 | 1.4 | 0.3px | Top-nav 菜单项 |

### 原则
- The **700/300 contrast** is the editorial signature. Weight 500 is absent from the system.
- **No negative letter-spacing** — BMW Type Next Latin works on a wide body, so tracking stays at default. Apple/Cal.com-style tightening reads off-brand here.
- **UPPERCASE 内置链接** ——"LEARN More"风格的CTA运行大写与 1.5px 追踪,"机器精度"的声音
- **字重 400 住在一条狭窄的路** - 仅说明和 nav-link,两个中性效用角色。

### 替代字体
BMW Type Next Latin 是一个许可的 BMW 类型。开源选项 :
- **Inter** (variable) — close match at weight 700/300. Leave letter-spacing at 0.0em.
- **萨伊拉凝固** - 稍微压缩一点 BMW 类型感觉。


## 布局

### 间距系统
- **基部单位:** 8px.
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px.
- **Section padding:** `{spacing.section}` (80px) for every major editorial band.
- **内部卡片 padding:** `{spacing.lg}` (24px),用于模型和特征卡.

### 网格与容器
- **最大内容 width:** ~1440px center-aligned.
- **编辑机构:** 单人 12- 列网格 - 列网格 - Colind grade.
- **Model card grids:** 4-up or 5-up at desktop, 2-up at tablet, 1-up on mobile.
- **配置目录网格 :** 3- 上滤波器行+ 4- 车卡,密集布局。

### 留白规则
BMW白空间策略比 BMW M运动-动力-格伦迪耶——公司方面更受公用事业驱动。 80px (不是M的吗? 96px。卡片贴纸是 24px (不是M的吗? 32px。页面密度较大,更能发挥经销商的作用。


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | No shadow, no border | Body, top nav, footer, hero bands |
| 软细边线 | 1px `{colors.hairline}` 边框 | 配置选项牌, 表格分隔符 |
| Card surface | `{colors.surface-card}` background — no shadow | Model card photo plate |
| 摄影 | 边缘对边缘摄影 | 首屏乐队,模特儿 |

系统从未使用投影. 深度完全来自(a)色块对比(浅页面底色对暗首屏)和(b)摄影主题+照明.

### 装饰性深度
- **`m-stripe-divider`** — a 4px- 全部水平三色 stripe (`{colors.m-blue-light}` → `{colors.m-blue-dark}` → `{colors.m-red}`),仅在M型型背景,运动徽章,或作为M型相关区块划分器,不参与主要企业流.
- **Photographic depth** — full-bleed vehicle photography (lighting + subject) does the work chrome would otherwise do.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | Every button, card, input, configurator chip — the dominant radius |
| `{rounded.xs}` | 2px | 徽章很小,非常罕见 |
| `{rounded.sm}` | 4px | Small inline button (rare) |
| `{rounded.md}` | 8px | 仅移动的崩溃卡( 稀有) |
| `{rounded.lg}` | 12px | 极罕见的-模式/对角 |
| `{rounded.pill}` | 9999px | 某些上下文中的过滤芯片( 稀有) |
| `{rounded.full}` | 9999px / 50% | 幻象,你应该知道, circular 图标按钮 |

半径等级为二进制 : **长方形的,所有的一切, circular 仅用于图标按钮。** 明显偏离了柔软的萨阿斯方言 Apple 或 Cal.com - 更接近于 BMW 企业-自主化的"工程精度"语音.

### 图片形状
- 首屏摄影在 16:9 或 21:9 电影比例。
- 模特卡片照片坐着 16:10,边缘对边缘 `{rounded.none}` 转角
- 配置车让坐落在白色的工作室背景上,全色的硅光可见.


## 组件

### 顶端导航

**`top-nav`** — A white sticky nav bar pinned to the top of the page. 64px tall, `{colors.canvas}` background. Left: BMW circular badge logo; center: primary horizontal menu (Models, Next Generation, Pre-Owned, Dealers, Test Drive); right: cart icon, language picker, profile. Menu items render in `{typography.nav-link}` (14px / 400 / 0.3px tracking).

### 按钮

**`button-primary`** — The signature primary CTA. Background `{colors.primary}` (BMW Blue #1c69d4), text `{colors.on-primary}`, type `{typography.button}` (BMW Type Next Latin 14px / 700 / 0.5px tracking), padding 14px × 32px, height 48px, rounded `{rounded.none}` (0px — rectangular). Press state: `button-primary-active` shifts to `{colors.primary-active}`.

**`button-secondary`** ——带有细边线大纲的白色按钮。背景 `{colors.canvas}`文本中,请输入 `{colors.ink}`, 1px `{colors.hairline-strong}` 边框,同一加载+高度+半径。

**`button-secondary-on-dark`** — Used over a dark hero band. Background transparent, text `{colors.on-dark}`, 1px `{colors.on-dark}` border, same rectangular shape.

**`button-text-link`** 中, 包含 UPPERCASE 字母间距链接。没有背景、 文本 `{colors.ink}`类型 `{typography.label-uppercase}` (13px / 700 / 1.5px 。读作“LEARN More”,终止于 `›` 谢夫龙.

**`text-link`** ——内线链接 内线复制体. `{colors.ink}` 文本,默认时不下划线;下划线。

### 卡片与容器

**`hero-band-dark`** — Full-width dark navy hero. Background `{colors.surface-dark}`, text `{colors.on-dark}`, vertical padding `{spacing.section}` (80px). Centered: model name in `{typography.display-xl}` (64px / 700) + sub-headline + vehicle render (right-aligned or below). A single `{component.button-primary}` (blue) or `{component.button-secondary-on-dark}`.

**`hero-photo-band`** - 轻彩画模型展示乐队。 `{colors.canvas}`文本中,请输入 `{colors.ink}`。车辆渲染取宽度;右或下方,一个头条+两个链接CTA+子塔格。

**`model-card`** — Used in 4-up or 5-up model card grids on the homepage ("BMW iX3", "BMW iX", "BMW 5 Series"). Background `{colors.canvas}`, rounded `{rounded.none}`, padding `{spacing.lg}` (24px). Contents: model render at the top (`{component.model-card-photo}` on `{colors.surface-card}`), model name in `{typography.title-md}` (18px / 700) below, a one-line tagline in `{typography.body-sm}` (14px / 300), and a `{component.button-text-link}` ("LEARN MORE ›").

**`model-card-photo`** — The card's photo plate. Background `{colors.surface-card}` (#fafafa — soft grey), rounded `{rounded.none}`, vehicle render in full silhouette. Zero padding — the photo runs edge-to-edge.

**`feature-photo-card`** ——一张特色/生活方式卡。 `{colors.canvas}`, 编译 `{spacing.lg}`. 16:9 照片在顶部, `{typography.title-md}` 头条+身体摘录如下.

**`spec-cell`** ——技术规格单元格(模型细节页). Transparent 上方值 (% 1)`{typography.display-sm}` 24px / 700),下面的标签(`{typography.label-uppercase}`).

### 库存配置( C)

**`inventory-card`** ——每辆车一张卡,在经销商库存页上。 `{colors.canvas}`, 编译 `{spacing.md}` (16px),四舍五入 `{rounded.none}`,车顶上方的车辆照片,型号+变种名称+价格+下面的"维尤"链接.

**`filter-chip`** + **`filter-chip-active`** — Inventory filter chips (model, year, price range). Inactive: background `{colors.canvas}`, 1px `{colors.hairline-strong}` border, text `{colors.ink}`, type `{typography.caption}`. Active: background `{colors.ink}`, text `{colors.on-dark}`. Padding 8px × 14px, radius `{rounded.none}`.

**`configurator-option-tile`** + **`configurator-option-tile-selected`** — Configurator selection cell (color, wheels, upholstery). Inactive: background `{colors.canvas}`, 1px hairline. Selected: 2px `{colors.primary}` border. Padding 16px × 24px, radius `{rounded.none}`.

### 输入框与表单

**`text-input`** ——标准文本输入。背景 `{colors.canvas}`文本中,请输入 `{colors.ink}`类型 `{typography.body-md}`,四舍五入 `{rounded.none}` (0px), 贴 14px × 16px高度( 高度) 48px, 1px 细边线边界,在焦点上,边界厚至墨水.

**`cookie-consent-card`** — Cookie banner. Background `{colors.canvas}`, 1px hairline, padding `{spacing.lg}` (24px), `{typography.body-sm}` (14px / 300 — Light even in legal copy).

### 标签/ 标签

**`category-tab`** + **`category-tab-active`** - 类别 sub-nav。不活动 : transparent + `{colors.muted}` UPPERCASE标签。 transparent + `{colors.ink}` 上层标签 + 2px 墨水下划线 12px 垂直粘贴,无水平半径。

### 品牌签名

**`m-stripe-divider`** — A 4px- 全部水平三色 stripe (`{colors.m-blue-light}` → `{colors.m-blue-dark}` → `{colors.m-red}`),仅在M型模式背景,运动徽章,或作为M型相关区块划分器中,没有来自公司主流;在M型模式细节页和M型性能徽章中,它扮演着内在划分器的角色.

### 中导/页脚

**`cta-band-photo`** — A pre-footer "Discover the New iX3"-style band. Background `{colors.surface-dark}` with a full-bleed vehicle photo. Centered headline in `{typography.display-md}` (32px / 700) + a single `{component.button-secondary-on-dark}`. 80px padding.

**`footer`** ——收尾软灰色页脚。背景 `{colors.surface-soft}` (#f7f7f7 ——不是纯白——软灰色),文本 `{colors.body}`. A 4-列链接列表:模型/服务/交易商/左右。垂直编目 64px。下面,一个版权线,在 `{typography.body-sm}` 配合 `{colors.muted}`.


## 设计建议与禁忌

### 建议做法
- 每一页都坐着 `{colors.canvas}` (纯白色); 储备 `{colors.surface-dark}` 仅限首屏乐队
- 与初级CTA对等 `{colors.primary}` (BMW 蓝色)+ `{colors.on-primary}` 白文本 + 颜色 `{rounded.none}` 0px 角——公司签名.
- 设置显示头条 BMW Type Next Latin 700 和身体在光线中 300。对比是不容谈判的。
- 使用UPPERCASE字母空格链接,如"LEARN More"作为内置的CTA.
- 将模范卡片的照片放在上面 `{colors.surface-card}` 标题下方——标准 BMW 公司模式。
- 节奏保持在 `{spacing.section}` (80px) ——比 BMW M's 96px.
- 保留 M 三角色 stripe 用于M型型环境与运动运动分机.

### 应避免的做法
- Don't add a brand color other than blue — BMW Blue is the only primary action color.
- Don't use pill or rounded buttons — `{rounded.none}` (0px) rectangular IS the brand button.
- Don't drop display weight to 500 — the system uses 700 / 400 / 300; 500 is absent.
- Don't bold body type — Light 300 is the BMW corporate editorial voice.
- Don't add drop shadows to cards — depth comes from photo + color-block contrast.
- 光线-暗首屏_光线特性_深CTA_轻脚旋转需要通过连续两个波段重复相同的表面模式.
- Don't use the M tricolor stripe as a CTA fill — divider/accent role only.
- Don't mix languages in a single page — UI language must stay consistent.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→40px; model card grid 1-up; configurator filter chips 2-up; footer 4 col → 1 col |
| Tablet | 768–1024px | Top nav narrows, secondary menu hides under "More"; model card 2-up; inventory 2-up |
| 桌面 | 1024–1440px | 满 top-nav; 4- 上层或 5- 上型卡网;库存 3-上; 完整配置器 UI |
| 宽 | > 1440px | 与桌面相同,内容 fixed 时 间 1440px;沟槽吸收其余部分 |

### 触控区域
- `{component.button-primary}` 最小值 48 × 48px ——上方为WCAG AAA(AAA).44 × 44).
- `{component.text-input}` 高度( E) 48px.
- 分类标签运行 12px 垂直粘贴, 给出有效的水龙头区域 > 44px.

### 窄屏布局调整
- 顶部的导航崩溃到下面的汉堡 768px;菜单作为全屏工作表打开。
- 首屏乐队的内部布局降为单列.
- Model card grid 4-up/5-up → 2-up → 1-up.
- 配置器过滤芯片行在移动上横向滚动.
- M 彩色调 stripe 留在原点 4px 高度跨越每一个断点。

### 图片适配
- 模型在每个断点都使尺度保持原生的侧面比率。
- 首屏摄影可能转向移动上更垂直的作物(艺术方向).
- 车辆库存照片可能从 16:9 改为: 4:3 手机上,我刚从电话里找到的


## 迭代指南

1. 聚焦于单个组件。 直接引用其 YAML 密钥( Q)`{component.model-card}`, `{component.button-primary}`).
2. New components default to `{rounded.none}` (0px). Use `{rounded.full}` only for circular icon buttons.
3. 备选案文(`-active`, `-disabled`, `-selected`) 以单独条目的形式在 `components:` 块。
4. `{token.refs}` 到处都是,从不内含六分法。
5. Hover state is never documented. Only Default and Active/Pressed states.
6. Display headlines stay BMW Type Next Latin 700; body stays Light 300; the trio is fixed.
7. 将UI字符串保持为单一语言——匹配页面的语境.


## 已知缺口

- BMW Type Next Latin 已获得许可的 BMW 而不作为公共网页字体发布; Inter 重量 700/300 以替代方式记录。
- 动画和过渡时间(配置色交换,模型卡悬浮-回光)在此不在范围.
- 表格验证状态超出 `{component.text-input}` 焦点没有被提取——错误/成功状态需要专用的表格页。
- 经销商盘点子域与主要公司网站共享打字和颜色;只有UI密度上升(过滤器,表格,价格).
- 饼干同意覆覆可以吞噬部分首屏——主角乐队内容可能没有完全捕捉到.
- M 彩色调 stripe 公司网站似乎很少出现; 整个运动场环境都存在于 BMW M 网站。

## 设计词元原值

BMW公司网站——不同于 BMW M发动机运动-炸弹式变体,这是一种测量和固定的企业-自动接口。 BMW 公司蓝( 4)#1c69d4)搭载每台主力CTA;暗海军首屏乐队帧模型摄影. BMW Type Next Latin 将整个等级设置在两个重上——重 700 显示和亮度 300 组合和预留流量使用卡片 4- 上网格,每张卡都持有模型渲染,名称,以及"学习更多"链接.

```yaml
---
version: alpha
name: BMW-design-analysis
description: BMW's corporate site — distinct from BMW M's motorsport-bombastic variant, this is a measured and settled corporate-automotive interface. On a light (cream-tinted white) canvas, BMW corporate blue (#1c69d4) carries every primary CTA; dark navy hero bands frame model photography. BMW Type Next Latin sets the entire hierarchy on two weights — heavy 700 display and Light 300 body. Configuration and reservation flows ride a card-based 4-up grid, where each card holds a model render, a name, and a "Learn More" link.

colors:
  primary: "#1c69d4"
  primary-active: "#0653b6"
  primary-disabled: "#d6d6d6"
  ink: "#262626"
  body: "#3c3c3c"
  body-strong: "#1a1a1a"
  muted: "#6b6b6b"
  muted-soft: "#9a9a9a"
  hairline: "#e6e6e6"
  hairline-strong: "#cccccc"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface-card: "#fafafa"
  surface-strong: "#ebebeb"
  surface-dark: "#1a2129"
  surface-dark-elevated: "#262e38"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#bbbbbb"
  m-blue-light: "#0066b1"
  m-blue-dark: "#1c69d4"
  m-red: "#e22718"
  success: "#22c55e"
  warning: "#f59e0b"
  error: "#dc2626"

typography:
  display-xl:
    fontFamily: "'BMW Type Next Latin', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0
  display-lg:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0
  display-md:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  display-sm:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  title-lg:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.5px
  label-uppercase:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 1.5px
    textTransform: uppercase
  button:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.5px
  nav-link:
    fontFamily: "'BMW Type Next Latin', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.3px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
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
  section: 80px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 14px 32px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 13px 31px
    height: 48px
  button-secondary-on-dark:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 13px 31px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.label-uppercase}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  hero-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 80px
  hero-photo-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: 80px
  model-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: 24px
  model-card-photo:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.none}"
  feature-photo-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: 24px
  spec-cell:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.none}"
    padding: 24px
  inventory-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.none}"
    padding: 16px
  filter-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 8px 14px
  filter-chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
  configurator-option-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 16px 24px
  configurator-option-tile-selected:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 15px 23px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 14px 16px
    height: 48px
  cookie-consent-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 24px
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.label-uppercase}"
    rounded: "{rounded.none}"
  category-tab-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.label-uppercase}"
    rounded: "{rounded.none}"
  m-stripe-divider:
    backgroundColor: transparent
    rounded: "{rounded.none}"
  cta-band-photo:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    padding: 80px
  footer:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: 64px
---
```
