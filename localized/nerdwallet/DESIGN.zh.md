# NerdWallet · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

NerdWallet 是一个比较引擎, 上面有编辑外套, 设计反映了两个半边。 `{colors.primary}` 梯度乐队带白头条,旁线行和一套信任徽章——这是品牌唯一提高声音的地方。该乐队下面的一切都掉到 `{colors.canvas}` 财务报告和已审计财务报表 `{colors.canvas-soft}`,其中密集率表和产品卡可以做实际工作。过渡是突然的:一个饱和的绿色矩形,然后是一个非常长的非常安静的文档。

调色板几乎是单色的Hue. `{colors.primary}` 是一个深层的绿色,它充满了每个按钮,每个活性标签和每个评分星, 并且它下面坐着一整层的薄荷—— `{colors.mint-50}`, `{colors.mint-100}`, `{colors.mint-200}` —— 洗刷部分面板、图标瓦和相框。这些薄荷纸的表面面积巨大,远大于任何强调色,这使得一页财务表格无法作为电子表格阅读。绿家族之外的唯一颜色是: `{colors.link}` 用来连接内线 和一个石灰家族用来强调。

形状语言是惊喜。对于一个非常清晰的消费产品,角是近方形的:主按钮坐落在 `{rounded.xs}` ——两个像素——和牌很少超过 `{rounded.lg}`。基本上没有高地;系统中的单一阴影是一个非常宽、非常微弱的双层堆栈。分离用 `{colors.hairline}` 结果是值得信赖的、实用的,而不是软的。

**关键特征 :**
- One deep green, `{colors.primary}`, fills every action and every active state across all page types.
- 3步薄荷梯( 3步)`{colors.mint-50}` → `{colors.mint-100}` → `{colors.mint-200}`)搭载系统内最大的表面.
- 按钮几乎是正方形 `{rounded.xs}`;形状语言即使插图有播放性,也保持紧凑.
- 几乎无影无踪... `{colors.hairline}` 规则和薄荷洗涤代替了高空。
- 编辑网页按以下内容排列: fixed 节奏:绿色梯度带 → 白色身体 → 薄荷呼喊 → 白色比较表.
- 石灰家族( 即:`{colors.lime-hero}`, `{colors.lime-panel}`, `{colors.lime-accent}`)提供绿色不能使用的强调,因为绿色用于控制。
- 头像纯洁地坐着 `{colors.ink}` 黑色,不是软化的近黑色。


## 配色

来源:主页 高产储蓄比较页 最佳信用卡页.

### 品牌和 强调色

- **Spruce** (`{colors.primary}` — #008254): the brand. It fills `{button-primary}`, `{icon-circle-active}`, rating stars and every in-body green link, and it is the base of the editorial hero gradient. By pixel volume it is the single most-used non-neutral in the system.
- **深层螺旋** (`{colors.primary-deep}` — #006642: 填充( ) `{stat-block-dark}`坐在薄荷专家点名的暗黑统计面板
- **森林** (`{colors.forest}` — #00482f:最深的绿色,用来表示首屏梯度最暗处 和密集的编辑染色体。
- **卢戈·莱姆** (`{colors.logo-lime}` — #8dc63f:词标中主标内的石灰,在每一页中都以小尺度出现,其他任何地方也没有.
- **首屏莱姆** (`{colors.lime-hero}` — #9ae600:将品牌名称设置在主页首屏头条里面的生动的石灰——一个字,每页一次.
- **面板 莱姆** (`{colors.lime-panel}` — #e8fdac: 填充( ) `{expert-tip-panel}` 颜色 `{editorial-badge}` 绿色带的文本。
- **红灯** (`{colors.lime-accent}` — #ddfa88:用于比较页上突出标记的亮度的石灰.
- **丝带状林姆** (`{colors.lime-ribbon}` — #a8ea4c: 灰末端的叶片 `{marquee-ribbon}` 梯度——石灰家族唯一覆盖大面积表面的地方.

### 表面

- **页面底色** (`{colors.canvas}` — #ffffff:页,导航栏和每张卡.
- **软画像** (`{colors.canvas-soft}` — #f7f7f7: 长对比页后面的页线和填充 `{button-secondary}`。它比储蓄页上任何其他表面都包含更多的区域。
- **薄荷 50** (`{colors.mint-50}` — #effcf8:最漂亮的洗涤,用于 `{section-panel-mint}` 财务报告和已审计财务报表 `{icon-circle-inactive}`.
- **薄荷 100** (`{colors.mint-100}` — #e3faf2: 一步,用于 `{media-frame-mint}` 财务报告和已审计财务报表 `{award-ribbon-pill}`.
- **薄荷 200** (`{colors.mint-200}` — #b7ecda:最饱和的薄荷,保留给小强调的填充.
- **细边线** (`{colors.hairline}` — #ebebec:桌排与内卡之间规则.
- **强发条** (`{colors.hairline-strong}` — #d8d9da: 可见的边框 `{product-card}` 财务报告和已审计财务报表 `{button-outline}`.

### 文本

- **墨水( 墨水 )** (`{colors.ink}` — #000000:每个标题和产品名称,纯黑色,不软化.
- **体质** (`{colors.body}` — #3d4045: 运行复制和 `{spec-cell}` 标签。
- **静音** (`{colors.muted}` — #64666a: 标题、披露行和 `{eyebrow-label}`.
- **异样** (`{colors.faint}` — #b1b3b5:最安静的一级,用于去强调元数据.

### 语义

- **链接** (`{colors.link}` — #005fb9: 内置表格和卡片内的链接,始终下划线.
- **信息** (`{colors.info}` — #4b99e6:一种用于支持信息标记的较轻的蓝色.
- **错误** (`{colors.error}` — #de2828:系统验证和破坏性红色,保留用于形式错误和去除动作.


## 字体排版

### 字体家族

**Gotham** 财务报告和已审计财务报表 **GothamDisplay** 携带整个系统 Gotham 处理身体复制、UI标签、标题和最大的主页头条; GothamDisplay 更紧凑的显示剪辑,在编辑标题中大多取自 14 财务报告和已审计财务报表 40px。对称是不寻常的,因为显示切片是用在 *较小* 大小比文本切的最大,所以两者重叠通过比例尺的中间,而不是在大小边界上干净地分割.

The weight range is wide and genuinely used: 300 for body copy, 500 and 600 for interface text, 700 for headings and labels, and 900 available at the top. Body copy at weight 300 against 700 headings is what gives the long editorial pages their airy feel despite very tight corner radii. A serif, **Chronicle Display**, appears on the long-form editorial pages as a secondary face.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 52px | 700 | 1.15 | 0 | Homepage hero headline |
| `{typography.display-lg}` | 40px | 700 | 1.2 | 0 | 编辑页头条 |
| `{typography.heading-1}` | 36px | 700 | 1.2 | 0 | 区头条 |
| `{typography.heading-2}` | 28px | 700 | 1.25 | 0 | 子节标题 |
| `{typography.stat-value}` | 24px | 700 | 1.2 | 0 | 统计数字 |
| `{typography.heading-3}` | 20px | 700 | 1.3 | 0 | 牌名标题 |
| `{typography.heading-4}` | 20px | 500 | 1.3 | 0 | 轻小标题 |
| `{typography.body-lg}` | 18px | 300 | 1.5 | 0 | 引段 |
| `{typography.body-md}` | 16px | 300 | 1.5 | 0 | 副本 |
| `{typography.body-sm}` | 14px | 300 | 1.5 | 0 | 表格副本, 标题 |
| `{typography.ui-label}` | 14px | 700 | 1.2 | 0 | 按钮和导航标签 |
| `{typography.ui-sm}` | 13px | 500 | 1.3 | 0 | 深层界面文本 |
| `{typography.caption}` | 12px | 500 | 1.4 | 0 | 外地标签、披露 |
| `{typography.eyebrow}` | 12px | 700 | 1.2 | 0 | Uppercase section labels |
| `{typography.micro}` | 11px | 500 | 1.4 | 0 | 信任徽章,精细的印记 |

### 原则

Hierarchy is carried by weight contrast more than by size. The gap between weight-300 body and weight-700 headings is wide enough that adjacent sizes (20px heading against 18px lead) still read as distinct levels. Uppercase is reserved for two roles — `{typography.eyebrow}` section labels and button text — and never used for headings.

### Note on Font Substitutes

Gotham 财务报告和已审计财务报表 GothamDisplay 被许可的面孔。 **蒙特塞拉特** 是最接近可广泛获取的几何学替代 Gotham,虽然运行的稍宽,需要小的负跟踪显示大小; **近新星** 或 减 减 **约斯特** 中,如果有的话,则接近比例。 300 体型复制字重——降至 400 折叠重数与等级关系对比。替换编辑器 serif 与 **播放集显示** 或 减 减 **来源 Serif 4**.


## 布局

### 间距系统

- **基地单位**: 8px.
- **脚本**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.section}` 40px.
- `{spacing.md}` 即普遍控制垫-两者 `{button-primary}` 财务报告和已审计财务报表 `{button-secondary}` 使用平面 16px 以四面八方的角表示,
- `{button-outline}` 打破模式为 `8px 16px`让它比旁边的扣子短得多

### 网格容器( C)

Content centres in a container of roughly 1200px inside the 1280px viewport. The homepage runs a 5-up category tile grid that steps down to 4-up and 2-up. Editorial pages use a single wide column for the hero band and then a full-width comparison table with five semantic columns — institution, rating, headline rate, bonus, and action. Product cards on the credit-cards page are full-width blocks stacked vertically, each subdivided into a spec grid of three to four cells.

### 白空间哲学

白空间内部组件紧凑,彼此之间宽敞。桌排相邻,只有一条连接它们之间的细边线,但一个比较块和下一个比较块之间的空隙很大。薄荷板充当呼吸室,仍然带有内容,而不是留下空地,系统会掉在苍白的地上。 `{colors.mint-50}` 并让密度下降。

### 反应战略

#### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 小型移动 | < 425px | 单列; 比较表成为堆叠的卡片; 导航减少为标志加菜单 |
| 手机 | 425–599px | 单列; 光谱网格崩溃为每行一列 |
| Large mobile | 600–767px | Two-up category tiles; table columns begin to drop |
| 平板 | 768–1023px | 横向分类铁路卷轴;产品卡保留其动作栏 |
| 笔记本 | 1024–1279px | 装有收紧沟槽的完整桌布局 |
| 桌面 | ≥ 1280px | 集装箱宽度的全版式 |

#### 触控区域

`{button-primary}` 财务报告和已审计财务报表 `{button-secondary}` 清除 44×44 舒适的在他们的公寓 `{spacing.md}` 贴纸 `{button-outline}` 时 间 `8px 16px` 位置接近最小值,需要其触摸宽度的扩展。 `{icon-circle-active}` 财务报告和已审计财务报表 `{icon-circle-inactive}` 接近时 44px 铁路类别

#### 折叠战略

导航时尽可能地保持文字标记,搜索和两个账户控制,首先放弃分类链接. 比较页上的横向分类铁轨成为卷轴条而不是包扎. 比较表是主要的响应事件:在平板断点下方每行回流成堆叠卡,其中机构标志,评级和评分成为垂直字段,动作按钮全线通. `{expert-tip-panel}` 保持薄荷的充份,但滴水不漏 `{stat-block-dark}` 复制品下面,而不是旁边

#### 图像行为

机构标志作为固定高的灰度的标志提供,绝不收割。 `{media-frame-mint}` 时 间 `{rounded.xxxl}`. 产品艺术——信用卡面孔——在 fixed 内部小方面 `{product-card}` 绝不是满足的。 circular 时 间 `{rounded.full}` 在一个小的重叠堆栈中。


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 | 平着 `{colors.canvas}` | 复制本,表格行,标题 |
| 1 | 1px `{colors.hairline}` 规则 | 排行符, spec-cell 分离器 |
| 2 | 1px `{colors.hairline-strong}` 边框 | `{product-card}`, `{button-outline}`, `{accordion-row}` |
| 3 | `rgba(100,102,106,0.05) 0 4px 16px` + 数字 `rgba(100,102,104,0.05) 0 16px 40px` | `{button-primary}` 和少数浮浮的表面 |
| 4 | `oklab(0 0 0 / 0.04) 0 20px 25px -5px` + 数字 `0 8px 10px -6px` | 重叠表面 |

The system is deliberately flat. Both shadow definitions sit at 4–5% opacity and spread very wide, so they register as a faint settling rather than a lift. On a page of financial data this reads as precision: nothing floats, everything is ruled.

### 装饰性深度

深度来自颜色阻隔和插图,而不是来自阴影. 绿色首屏乐队是唯一饱和的平面;在它下面的薄荷梯子在各节间产生浅阶. 说明是平面的-活性——硬币堆栈,猪笼草库,房屋——直接坐落在白色或薄荷上,没有投影. 真正的维度元素是箭头的动静 `{stat-block-dark}`,它读作一个图线 打破它的容器。


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | `{text-input}`, `{award-ribbon-pill}`,表格边缘 |
| `{rounded.xxs}` | 1px | 内嵌标记 |
| `{rounded.xs}` | 2px | `{button-primary}`, `{button-secondary}`搜索字段 |
| `{rounded.sm}` | 4px | 小型集装箱和内衬区块 |
| `{rounded.md}` | 6px | 领带 |
| `{rounded.lg}` | 8px | `{product-card}`, `{button-outline}`, `{accordion-row}`, `{expert-tip-panel}`, `{stat-block-dark}` |
| `{rounded.xl}` | 10px | 标签和小跨度 |
| `{rounded.xxl}` | 12px | `{category-tile}` |
| `{rounded.xxxl}` | 16px | `{section-panel-mint}`, `{media-frame-mint}` |
| `{rounded.tooltip}` | 20px | 工具提示表面 |
| `{rounded.full}` | 9999px | 幻象们, `{icon-circle-active}`, `{icon-circle-inactive}` |

比例很大,但使用量的字重在小端。 `{rounded.xs}`,卡片在 `{rounded.lg}`,并且只有装饰表面——薄荷面板和照相框——可以到达 `{rounded.xxxl}`. 几个部件使用不对称的弧度,它们只用顶角或主要角对接相邻的块。

### 摄影几何

Editorial photography sits inside `{media-frame-mint}` at `{rounded.xxxl}`, typically at a portrait or square crop. Author avatars are `{rounded.full}` at roughly 32px, overlapped in threes. Institution logos are placed on white at their native aspect with generous padding so competing brand marks never touch. Illustration is used at roughly 64px square inside `{category-tile}`.


## 组件

> 默认文件,如果提取,则只显示活动状态。

### 按钮

**`button-primary`** ——绿色行动("Sign Up","APPLY Now","Learn More").
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.ui-label}`, rounded `{rounded.xs}`, padding `{spacing.md}`, Elevation Level 3.
- Uppercase label. The flat 16px padding on all four sides is what gives it its blocky proportion, and the 2px radius keeps it reading as a rectangle rather than a pill.

**`button-secondary`** ——安静的伴郎("SIGN IN").
- Background `{colors.canvas-soft}`, text `{colors.primary}`, type `{typography.ui-label}`, rounded `{rounded.xs}`, padding `{spacing.md}`.
- 与 `{button-primary}` 与填充和文本角色互换,所以对称读作一个控件,有两个重量.

**`button-outline`** ——紧凑型公用事业控制.
- 文本 `{colors.primary}`类型 `{typography.ui-label}`,四舍五入 `{rounded.lg}`, 编译 `8px 16px`, 1px `{colors.hairline-strong}` 边界,没有填满。
- 唯一一个既离方圆半径又离平板的按钮——明显比填充的对更短,更柔软.

### 纸牌和集装箱

**`product-card`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.lg}`, 1px `{colors.hairline-strong}` border, Elevation Level 2.
- 比较页的工作马:产品名称、明星评级、a `{button-primary}` 右侧的动作列,然后是 `{spec-cell}` 块和堆积 `{accordion-row}` 披露。

**`category-tile`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.xxl}`.
- 平面图,粗体标题,两行 `{colors.muted}` 描述,右上角有小对角箭头。

**`section-panel-mint`**
- Background `{colors.mint-50}`, text `{colors.ink}`, rounded `{rounded.xxxl}`.
- 保持主页分类网格的苍白洗涤,提供无边框或阴影的分离.

**`media-frame-mint`**
- Background `{colors.mint-100}`, rounded `{rounded.xxxl}`. Holds editorial photography with the mint visible as a border-like margin around the image.

**`expert-tip-panel`**
- Background `{colors.lime-panel}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.lg}`.
- 签名编辑部分:宽阔的苍白的带子,由粗箭头前缀的标签打开,带咨询副本和主机 `{stat-block-dark}` 财务报告和已审计财务报表 `{stat-chip-light}` 里面的,我看见了,我看见了

**`stat-block-dark`**
- Background `{colors.primary-deep}`, text `{colors.on-primary}`, type `{typography.stat-value}`, rounded `{rounded.lg}`.
- 坐在里面,我看见了 `{expert-tip-panel}`,将乘数和率与小 `{typography.caption}` 标签下方, 以图示箭头为主。

**`stat-chip-light`**
- Background `{colors.canvas}`, label `{colors.muted}` at `{typography.caption}`, rounded `{rounded.lg}`.
- 白色的对应物,旁边有比较数字 `{stat-block-dark}`.

**`accordion-row`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.ui-label}`, rounded `{rounded.lg}`.
- 领先的格言、标签和后继的切夫龙 被一个 `{colors.hairline}` 规则。

### 输入表单( F)

**`text-input`**
- 文本 `{colors.ink}`类型 `{typography.body-md}`,四舍五入 `{rounded.none}`.
- 平面角。系统没有输入填充,也没有自己的边界,它们坐落在一个供应铬的边框容器内,这就是输入本身几乎没有结构的原因。

### 导航

**`nav-bar`** (德士克托普语).
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.ui-label}`.
- 左侧的字签,八个类链接中心,然后搜索, `{button-secondary}` 财务报告和已审计财务报表 `{button-primary}` 白话在每一页,不管下面的乐队

**`nav-bar`** (移动)
- 保留单词标记,搜索和两个账户控制;分类链接移动到菜单后面.

**`icon-circle-active`** / **`icon-circle-inactive`**
- Active fills `{colors.primary}` with an `{colors.on-primary}` glyph; inactive fills `{colors.mint-50}` with a `{colors.primary}` glyph. Both `{rounded.full}`.
- 将横向类别铁路在比较页上方组成,每个线下加标签,并加划线标记活动项目。

**`breadcrumb`**
- 文本 `{colors.on-primary}` 时 间 `{typography.caption}`,设定在绿色首屏乐队 与切夫龙分离器。

**`footer`**
- Background `{colors.canvas-soft}`, text `{colors.body}`, type `{typography.body-sm}`.

### 签名组件

**`hero-band`**
- Background `{colors.primary}` running as a horizontal gradient toward a lighter green, text `{colors.on-primary}`, type `{typography.body-md}`.
- 打开每页编辑。 Carries `{breadcrumb}`,则 `{typography.display-lg}` 标题, 副行 circular 虚构者, `{editorial-badge}` 信任标记和一条引段。满载、圆角,也是页面上唯一饱和的平面。

**`editorial-badge`**
- Text `{colors.lime-panel}` at `{typography.micro}`, uppercase, with a leading verification glyph. Sits on the green band and is the reason a lime tier exists — green-on-green would vanish.

**`award-ribbon-pill`**
- Background `{colors.mint-100}`, text `{colors.primary}`, type `{typography.eyebrow}`, rounded `{rounded.none}`.
- 一块由折叠的绿旗标志引入的平面薄荷旗,钉在胜利者左上角 `{product-card}`.

**`comparison-row`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`.
- 5个栏——机构,评级,比率,奖金,动作——从相邻行中分离出来,由a. `{colors.hairline}` 规则中没有垂直分隔符。

**`spec-cell`**
- Background `{colors.canvas}`, label `{colors.body}` at `{typography.caption}`, value `{colors.ink}`.
- 内部的标签上值块 `{product-card}`,在它的前边缘上通过 `{colors.hairline}`.

**`link-inline`** / **`link-green`**
- `{link-inline}` 使用情况 `{colors.link}` 附有辅助参考的下划线; `{link-green}` 使用情况 `{colors.primary}` 两者共存于同一张牌上,并具有不同的意图。

**`eyebrow-label`**
- 文本 `{colors.muted}` 时 间 `{typography.eyebrow}`,大写,开源合伙人和资源科。

**`logo-wordmark`**
- 文本 `{colors.primary}` 时 间 `{typography.heading-4}`,前面有一个标记 携带 `{colors.logo-lime}`.

**`rate-card`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.xxl}`.
- 薄荷价格面板内可点击的比较瓦:产品名称, a `{colors.primary}` circular 箭头右侧,然后两条速率行对齐 a `{colors.muted}` 标签为大 `{colors.primary}` 数字和趋势的格言。

**`badge-compare`**
- Background `{colors.lime-panel}`, text `{colors.primary}`, type `{typography.eyebrow}`, rounded `{rounded.xl}`.
- 一颗白石丸钉在头部左上角 `{rate-card}`,标出建议比较。

**`carousel-control`**
- Background `{colors.mint-50}`, glyph `{colors.primary}`, rounded `{rounded.full}`.
- 将一个点形条绕过前/下个圆形,其有效点形条形填充 `{colors.primary}`.

**`marquee-ribbon`**
- Background `{colors.lime-ribbon}` running as a gradient into `{colors.primary}`, text `{colors.primary}`, type `{typography.ui-label}`.
- A full-bleed diagonal band of repeated uppercase slogans separated by small sparkle glyphs, tilted a few degrees off horizontal and bleeding past both viewport edges. It is the loudest element in the system and the only place the lime family fills a large surface.

### 实例(说明性)

> Kit-miror 演示表面。这些不是从 NerdWallet 它们是标准SaaSUI模式 重新皮肤 NerdWallet'原始人,因此,这个文档的每个消费者都会对品牌而不是模板默认形成相同的十面.

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

- 花费 `{colors.primary}` 仅关于动作和活动状态的——按钮,评分星,活动标签,内在链接.
- Reach for the mint ladder (`{colors.mint-50}` → `{colors.mint-200}`) when a section needs separation; it is the system's substitute for elevation.
- 保持控制状态 `{rounded.xs}` 和牌数 `{rounded.lg}`; 保存( E) `{rounded.xxxl}` 用于装饰面板和相框。
- 单行分隔表格 `{colors.hairline}` 规则和没有垂直分隔。
- 利用石灰家族来强调 必须在绿地上生存 `{colors.primary}` 就会消失
- 设置标题 `{colors.ink}` 纯黑色和字重复制 300 ——字重差距是等级.
- 给出每个比较图a `{typography.caption}` 上面贴着标签 `{colors.body}`永远不要内在。
- Open editorial pages with `{hero-band}` and then drop immediately to a light canvas; do not carry the green further down.

### Don't

- Don't round the filled buttons. `{rounded.xs}` is a deliberate choice against the softness of the illustration style.
- Don't add drop shadows to cards — use the `{colors.hairline-strong}` border instead. The system's only shadows sit at 4–5% opacity.
- Don't use `{colors.link}` blue and `{colors.primary}` green interchangeably; blue is a supporting reference, green is navigation the reader is meant to follow.
- Don't extend `{hero-band}` green into body sections or use it as a card fill.
- Don't introduce a warm accent. The palette runs green through mint with blue as the only outside hue.
- Don't set body copy above weight 300 or headings below 700 — collapsing the gap flattens the hierarchy.
- Don't place `{colors.lime-panel}` on white as a text colour; the lime tier only works as a fill on white or as type on green.
- Don't give `{text-input}` a radius or a border of its own; the containing chrome supplies both.

## 设计词元原值

An analysis of NerdWallet's design language — a personal-finance comparison platform built almost entirely from one deep green and a ladder of mints beneath it. Editorial pages open on a green gradient band, then drop to near-white where dense comparison tables do the real work. Corners are almost square, shadows are nearly absent, and the whole system separates content with hairlines and pale mint washes rather than elevation.

```yaml
---
version: alpha
name: NerdWallet Analysis
description: An analysis of NerdWallet's design language — a personal-finance comparison platform built almost entirely from one deep green and a ladder of mints beneath it. Editorial pages open on a green gradient band, then drop to near-white where dense comparison tables do the real work. Corners are almost square, shadows are nearly absent, and the whole system separates content with hairlines and pale mint washes rather than elevation.

colors:
  primary: "#008254"
  primary-deep: "#006642"
  forest: "#00482f"
  on-primary: "#ffffff"
  lime-hero: "#9ae600"
  lime-panel: "#e8fdac"
  lime-accent: "#ddfa88"
  lime-ribbon: "#a8ea4c"
  logo-lime: "#8dc63f"
  canvas: "#ffffff"
  canvas-soft: "#f7f7f7"
  mint-50: "#effcf8"
  mint-100: "#e3faf2"
  mint-200: "#b7ecda"
  hairline: "#ebebec"
  hairline-strong: "#d8d9da"
  ink: "#000000"
  body: "#3d4045"
  muted: "#64666a"
  faint: "#b1b3b5"
  link: "#005fb9"
  info: "#4b99e6"
  error: "#de2828"

typography:
  display-xl:
    fontFamily: Gotham
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  display-lg:
    fontFamily: GothamDisplay
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading-1:
    fontFamily: GothamDisplay
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading-2:
    fontFamily: Gotham
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-3:
    fontFamily: GothamDisplay
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  heading-4:
    fontFamily: Gotham
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  stat-value:
    fontFamily: Gotham
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  body-lg:
    fontFamily: Gotham
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: Gotham
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: Gotham
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  ui-label:
    fontFamily: Gotham
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  ui-sm:
    fontFamily: Gotham
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  caption:
    fontFamily: Gotham
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  eyebrow:
    fontFamily: Gotham
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  micro:
    fontFamily: Gotham
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xxs: 1px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 10px
  xxl: 12px
  xxxl: 16px
  tooltip: 20px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-label}"

  logo-wordmark:
    textColor: "{colors.primary}"
    typography: "{typography.heading-4}"

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"

  button-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"

  button-outline:
    textColor: "{colors.primary}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    borderColor: "{colors.hairline-strong}"

  text-input:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"

  hero-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"

  breadcrumb:
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"

  editorial-badge:
    textColor: "{colors.lime-panel}"
    typography: "{typography.micro}"

  expert-tip-panel:
    backgroundColor: "{colors.lime-panel}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"

  stat-block-dark:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.stat-value}"
    rounded: "{rounded.lg}"

  stat-chip-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"

  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    borderColor: "{colors.hairline-strong}"

  category-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xxl}"

  section-panel-mint:
    backgroundColor: "{colors.mint-50}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xxxl}"

  media-frame-mint:
    backgroundColor: "{colors.mint-100}"
    rounded: "{rounded.xxxl}"

  award-ribbon-pill:
    backgroundColor: "{colors.mint-100}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"

  icon-circle-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"

  icon-circle-inactive:
    backgroundColor: "{colors.mint-50}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"

  comparison-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"

  spec-cell:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"

  accordion-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.lg}"

  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-sm}"

  link-green:
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"

  eyebrow-label:
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"

  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"

  rate-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xxl}"

  badge-compare:
    backgroundColor: "{colors.lime-panel}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.xl}"

  carousel-control:
    backgroundColor: "{colors.mint-50}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"

  marquee-ribbon:
    backgroundColor: "{colors.lime-ribbon}"
    textColor: "{colors.primary}"
    typography: "{typography.ui-label}"

  # ─── Examples (illustrative) ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.lg}"
    typography: "{typography.body-sm}"

---
```
