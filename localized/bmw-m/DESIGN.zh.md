# BMW M · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

BMW M营销表面是近纯黑页面底色(`{colors.canvas}` — #000) 持有白色 BMW Type Next Latin 头条在 **自信的上层**系统没有自身的装饰性电压;品牌能量来自 **满载汽车摄影** ——汽车以速度角,碳纤维轮式细节,驾驶舱射击,运动坑道——作为边缘对角内容布置,填满整个波段. UI 环绕摄影的光圈保持最小:薄度 sans-serif 复制,除号为 1px 细边线( 4)`{colors.hairline}`),全盖按钮标签,在盘旋之前不填满.

The **M tricolor stripe** — `{colors.m-blue-light}` (#0066b1) → `{colors.m-blue-dark}` (#1c69d4) → `{colors.m-red}` (#e22718) — appears sparingly as the brand's signature accent, used on the M wordmark, motorsport chrome, vehicle-tech callouts, and model badges. It is never a CTA color and never used as a background fill — the tricolor is exclusively a brand-identity marker.

Type voice runs **BMW Type Next Latin** in two cuts: regular for display + nav labels and Light for body + secondary copy. Display sizes use weight 700 (BMW's signature heavy-but-tight setting), while body type drops to weight 300 (Light). The contrast between heavy display and light body is the system's editorial signature.

**关键特征 :**
- 近纯黑页面底色( 3)`{colors.canvas}` — #000),与白色类型. 系统几乎完全颠倒——没有光模营销表面.
- Display headlines in UPPERCASE BMW Type Next Latin at weight 700. Sub-heads stay sentence-case at lighter weight.
- 红色( M)`{colors.m-blue-light}` / `{colors.m-blue-dark}` / `{colors.m-red}`)用作 4px 品牌的分音器,M字标记强调色,以及运动运动的铬——从不作为按钮或填充.
- 摄影可以填充整个波段的边缘对角. 汽车总是视觉主题;UI染色体回落到摄影上覆盖的小白色标签上.
- 按钮是平的 `{rounded.none}` (0px)角和大写字母间隔标签,"工业精度"长方形的圆筒是品牌.
- 整个系统的边界半径大多为零。 `{rounded.full}` 打开 circular 图标按钮(木卫一箭头、聊天机器人发射器)和 `{rounded.sm}` 吃一小片切片胶囊形
- Spacing is generous and grid-aligned: `{spacing.section}` (96px) between major bands; `{spacing.xxl}` (64px) inside hero photo bands; `{spacing.xl}` (40px) inside content cards.


## 配色

### 品牌和 强调色
- **Primary** (`{colors.primary}` — #ffffff): The system's primary type and CTA color. Used for h1/h2/h3 display, body text on dark, and primary button labels (the buttons themselves are transparent or canvas-colored — the white text + outline IS the button).
- **M 蓝光** (`{colors.m-blue-light}` — #0066b1: M 三角彩色第一站 stripe使用在M型臂章强调色和运动车手的铬上.
- **M Blue Dark** (`{colors.m-blue-dark}` — #1c69d4): The middle stop. The same hex as `{colors.bmw-blue}` — BMW's heritage corporate blue, repurposed as the middle band of the M stripe.
- **M 红色** (`{colors.m-red}` — #e22718:第三站。在 stripe 和马达运动-快速点火。
- **电蓝色** (`{colors.electric-blue}` — #0653b6: MxDrive电动模型页面中使用的单独电动车辆强调色,与传统蓝色的区别——感觉更冷,更数字化.

### 表面
- **页面底色** (`{colors.canvas}` — #000000: 每一个营销表面的默认页面层。 true black.
- **表面软** (`{colors.surface-soft}` — #0d0d0d:一种几乎不区分的黑色,用于光谱表细胞和脚贴条.
- **表面卡片** (`{colors.surface-card}` — #1a1a1a:卡片,二级按钮,图标-按钮背景.
- **地面升华** (`{colors.surface-elevated}` — #262626:一步轻一点,用于暗带内的嵌套卡.
- **碳灰色** (`{colors.carbon-gray}` — #2b2b2b: 技术谱卡片上使用的碳纤维激发的表面语气.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #3c3c3c): The 1px divider tone on dark surfaces. Used between body sections, between table rows, around card outlines.
- **发条坚固** (`{colors.hairline-strong}` — #262626: 与六进制相同 `{colors.surface-elevated}` ——边界感觉像一步高,而不是墨线.

### 文本
- **墨水/ 暗色时** (`{colors.on-dark}` — #ffffff: 暗页面底色上所有头条和主文本.
- **体质** (`{colors.body}` — #bbbbbb: 默认的运行文本颜色( 略微冷于纯白) 。 用于正文段落和二次元数据 。
- **Body Strong** (`{colors.body-strong}` — #e6e6e6): Emphasized body / lead paragraph.
- **静音** (`{colors.muted}` — #7e7e7e:页脚链接,面包屑,标题.

### 语义
- **警告** (`{colors.warning}` — #f4b400:技术警告点名令使用非常少。
- **成功** (`{colors.success}` — #0fa336: 订单确认状态(仅见于市场营销表面).


## 字体排版

### 字体家族
**BMW Type Next Latin** is BMW's licensed display + body typeface. The system uses two cuts: regular and Light. The fallback stack walks `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

分量是故意的字重级:
- 显示( E)700),用于头条,导航标签,按钮文本,以及类别标签——"标注"语音.
- 轻( L)300),用于正文段落,描述性副本,以及二级元数据——"工程"语音.

The contrast between heavy display and light body is BMW's editorial signature — never blur it by using regular (400) display or medium (500) body.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 80px | 700 | 1.0 | 0 | 首屏h( 首屏h)1 ("ULTIMATE","莫雷") BMW M.") |
| `{typography.display-lg}` | 56px | 700 | 1.05 | 0 | 科长(“MORE from”) BMW M 玛嘉丝妮". ) |
| `{typography.display-md}` | 40px | 700 | 1.1 | 0 | 子节标题,模型名称 |
| `{typography.display-sm}` | 32px | 700 | 1.15 | 0 | CTA-band 标题, 类页面标题 |
| `{typography.title-lg}` | 24px | 700 | 1.3 | 0 | 名片标题 3- 上网格( 上网格) |
| `{typography.title-md}` | 20px | 400 | 1.4 | 0 | 牌子标题,领头段落 |
| `{typography.title-sm}` | 18px | 400 | 1.4 | 0 | 点名, 段落 |
| `{typography.label-uppercase}` | 14px | 700 | 1.3 | 1.5px | 分类标签, “ 更多” 内含标签 |
| `{typography.body-md}` | 16px | 300 (灯光) | 1.5 | 0 | 默认体 —— BMW Type Next Latin 光线 |
| `{typography.body-sm}` | 14px | 300 (灯光) | 1.5 | 0 | 页脚、饼干同意书、精细印刷品 |
| `{typography.caption}` | 12px | 400 | 1.4 | 0.5px | 图片标题、图像信用行 |
| `{typography.button}` | 14px | 700 | 1.0 | 1.5px | All button labels — uppercase, letterspaced |
| `{typography.nav-link}` | 14px | 400 | 1.4 | 0.5px | Top-nav 菜单项 |

### 原则
The system contrasts heavy headlines (700) against very light body (300) at all times — the gap is the editorial signature. Letter-spacing is non-trivial: button labels and category labels carry 1.5px tracking that makes them feel "machined" rather than "typed." Display headlines stay at 0 letter-spacing — BMW Type's natural cap-height handles spacing on large sizes.

UPPERCASE display is the default voice for h1/h2 — sentence case appears on body and intro paragraphs but rarely on headlines. The all-caps treatment is a brand-voice signal, not a stylistic choice.

### Note on Font Substitutes
If BMW Type Next Latin is unavailable, **Inter** (variable) at 700/300 is the closest open-source substitute. Adjust display headline tracking to -0.5px to match BMW Type's tighter spacing at large sizes. **Saira Condensed** is an alternative for headlines if a slightly more compressed feel is desired.


## 布局

### 间距系统
- **基部单位:** 4px.
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 40px · `{spacing.xxl}` 64px · `{spacing.section}` 96px.
- **节贴( 垂直) :** `{spacing.section}` (96px),主要编辑乐队之间.
- **Hero photo bands:** `{spacing.xxl}` (64px) internal vertical padding around the hero h1 + sub-headline pair.
- **Card internal padding:** `{spacing.lg}` (24px) for content and model cards; `{spacing.xl}` (40px) for spec-cell tables.
- **Gutters:** `{spacing.lg}` (24px) between cards in 3-up grids; `{spacing.md}` (16px) inside footer columns.

### 网格容器( C)
- **最大内容 width:** ~1440px centered on marketing pages — wider than typical SaaS to give photography breathing room.
- **编辑机构:** 单身 12-柱状网格;照片带流血成血(无) max-width).
- **Card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Footer:** 4-column link list at desktop, 2-up at tablet, 1-up at mobile.

### 白空间哲学
BMW M trusts photography to do the visual work. Whitespace around photography is restrained — the cars fill the frame, and copy sits below or beside them in tightly-aligned columns. Where whitespace appears (between body sections, around CTAs), it's always uniform `{spacing.section}` (96px). The system never adds atmospheric backdrops, gradients, or decoration — empty space stays as empty black canvas.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, footer, photo bands |
| 软细边线 | 1px `{colors.hairline}` 边框 | 分区、卡片大纲、表格行 |
| Card surface | `{colors.surface-card}` background over canvas — no shadow | Feature photo cards, magazine cards, chatbot launcher |
| 摄影深度 | 具有边缘到边缘作物的全血摄影 | 首屏带,运动特征——通过主题物的深度,而不是铬. |

系统使用不落影,不层层的铬. 深度完全来自摄影(主题+镜头+照明),黑色页面底色与略带的对比. `{colors.surface-card}`.

### 装饰性深度
- **M Stripe 分隔符** (`{component.m-stripe-divider}`): A 4px- 带M三色线的横向分线器(`{colors.m-blue-light}` → `{colors.m-blue-dark}` → `{colors.m-red}`用于运动场的铬、模型-尾部头部和品牌标识瞬间。 stripe 系统是唯一的"装饰性"元素——用于标注意义。
- **碳纤维表面**: 技术- 规格页使用 `{colors.carbon-gray}` (#2b2b2b) 带有微妙纹理覆盖的单元格。这是单页处理,而不是全系统模式。
- **摄影深度**:全弹道车是深度. 光照在摄影中(轨迹灯,日落的光线)会做投影在SaaS系统中的提升工作.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | All buttons, cards, photo containers, spec cells, inputs — the dominant radius |
| `{rounded.xs}` | 2px | 几乎无用——保留给合法的协定 |
| `{rounded.sm}` | 4px | 配置器表面切片小胶囊形 |
| `{rounded.md}` | 6px | Rare — small dropdown menu items |
| `{rounded.full}` | 9999px / 50% | Circular 图标按钮、旋转箭头、聊天机器人启动器 |

The radius hierarchy is "almost always 0, sometimes circular." This binary radius decision is a deliberate brand-language choice — sharp rectangles read as engineered precision; circles read as functional controls. Nothing in between.

### 摄影几何
首屏摄影充满全宽,没有圆形。 网格内保留照片卡 `{rounded.none}` 角,边对边图像. 碳轮详细镜头和运动场坑照片使用 16:9 或 减 减 21:9 电影-视星等比率。 4:5 画像作物,也有尖锐的角。


## 组件

### 顶端导航

**`top-nav`** ——黑导航栏被钉在每页的顶部. 64px 高个子 `{colors.canvas}` 的背景。 BMW M 左侧的标志(M 3color +) BMW 圆形+“ M” 字标记,主水平菜单( 模式、 主题、 杂志、 配置器、 Fastlane) , 右侧集群, 带有语言选择器、 搜索图标、 账户图标。 菜单项 渲染到 `{typography.nav-link}` 带有句子标记。

### 按钮

**`button-primary`** — The signature primary CTA. Background `{colors.canvas}` (or transparent over photography), text `{colors.on-dark}` (white), 1px white border outline, rounded `{rounded.none}` (0px), padding 16px × 32px, height 48px. Type `{typography.button}` — uppercase 14px / 700 / 1.5px tracking. The rectangular silhouette and uppercase letterspaced label IS the brand button.

**`button-primary-outline`** 与初级相同但具有 transparent 仅使用背景和白色轮廓。在图片中,一个填充的按钮会与图像相冲突。

**`button-on-light`** 用于罕见的光面环境(配置器、账户对话框)。 `{colors.canvas}`文本中,请输入 `{colors.on-dark}` ——带有白文本的黑色按钮,从暗黑的canvas默认中倒置.

**`button-icon`** — Circular 图标按钮(木马控件、共享、最爱)。 48 × 48px,背景情况 `{colors.surface-card}`,白色图标居中,圆形 `{rounded.full}`。系统唯一的非矩形按钮形状。

**`carousel-arrow`** - 具体 48 × 48 circular 图片旋转木马所用的箭头。形状与 `{component.button-icon}` 与切夫龙格莱弗。

**`text-link`** — Inline uppercase letterspaced links ("VIEW ALL MODELS", "READ MORE"). `{typography.label-uppercase}`, white on dark, no underline. The chevron arrow → glyph appears next to most link labels.

### 纸牌和集装箱

**`hero-photo-band`** ——全宽黑色带,全宽的汽车摄影充斥了大部分帧. h.1 使用情况 `{typography.display-xl}` (80px / 700),坐在左侧的相片上,经常在照片上加一个小字幕. `{typography.body-md}` 下方。垂直贴板 `{spacing.xxl}` (64px),无卡片框——照片就是乐队.

**`feature-photo-card`** 用于 3- 上格是"从" BMW M 和类似的编辑部分。 `{colors.surface-card}`,四舍五入 `{rounded.none}`内部粘贴 `{spacing.lg}` (24px。卡片的上半部分是a 16:9 照片( 满血在卡片内); 照片下方, 分类标签 。 `{typography.label-uppercase}`, a `{typography.title-lg}` 标题,并作简短的体型描述。

**`model-card`** - 用于"莫雷新MMODELS" 3- 上网格。背景 `{colors.canvas}` (没有卡片表面——只拍黑色照片),四舍五入 `{rounded.none}`顶部 : 16:10 模式的首屏镜头。 `{typography.display-md}` (40px / 700),简称 `{typography.body-sm}`, a `{component.text-link}` ("探索这个模样").

**`magazine-article-card`** — A more text-forward card variant used on the magazine overview page. Background `{colors.canvas}` with hairline border, rounded `{rounded.none}`. Carries a small thumbnail at top, a category label in `{typography.label-uppercase}`, headline in `{typography.title-lg}`, and a body excerpt.

**`spec-cell`** ——模型-细节页中使用的技术规格单元格(引擎规格,字重,最高速度, 0-100 时间。背景 `{colors.surface-soft}` (#0d0d0d),四舍五入 `{rounded.none}`, 编译 `{spacing.lg}` (24px。每个单元格都有一个值。 `{typography.display-sm}` (32px / 700)在顶部,并有一个标签在 `{typography.label-uppercase}` 下图.

**`motorsport-photo-card`** ——赛车-小组/运动车段使用的边对边照片卡。没有卡片表面,只是一张满载的照片,上面左下方的白色文字有小的上下文。摄影就是这里的品牌。

**`chatbot-launcher`** — A right-side card-style entry point ("BMW M CHATBOT") on the homepage. Background `{colors.surface-card}`, rounded `{rounded.none}`, padding `{spacing.lg}` (24px). Carries an h3 title, a short prompt, and a `{component.button-primary}` to launch.

**`category-tab`** + **`category-tab-active`** ——杂志和专题页中使用的类别选择标签(如“ALL ^ MAGAZINE → MODELES → LIFESTYLE → MOTORSPORT ”)。标签在 `{typography.label-uppercase}`中,当前状态更改文本颜色 `{colors.body}` 改为: `{colors.on-dark}` 并添加一个 2px 标签下方为白色的下划线。没有背景填充,也没有圆角。

### 输入表单( F)

**`text-input`** — Standard text input on dark surfaces. Background `{colors.surface-card}`, text `{colors.on-dark}`, type `{typography.body-md}`, rounded `{rounded.none}` (0px), padding 12px × 16px, height 48px. 1px hairline border. Focus state thickens the border to white.

**`cookie-consent-card`** — A right-side cookie-banner card visible on the homepage. Background `{colors.canvas}` with 1px hairline, rounded `{rounded.none}`, padding `{spacing.lg}` (24px). Body text in `{typography.body-sm}` (14px / 300) — Light weight even for legal text. Two buttons stacked at bottom: primary outline + text-link.

### 签名组件

**`m-stripe-divider`** - 风景 4px 水平 stripe 携带M 三角色( 3) (`{colors.m-blue-light}` → `{colors.m-blue-dark}` → `{colors.m-red}`),用作运动场染色体上的分机,品牌标识区间,以及分类标签上的悬浮状态指标,是系统中最显著的非打字元素.

**`cta-band-photo`** ——前脚"Drive an M"CTA乐队,搭载全弹光摄影机,拍摄一辆汽车在轨角角,头条中央在其中. `{typography.display-md}` 备注a `{component.button-primary-outline}` 下方。垂直贴板 80px. CTA通过全血摄影而不是铬继承了其余页面的编辑重力.

### Footer

**`footer`** — Black footer that closes every page. Background `{colors.canvas}`, text `{colors.body}`. 4-column link list at desktop covering BMW M Models / BMW M Lifestyle / Owners / Company. Vertical padding 64px. Bottom row carries the BMW corporate disclaimer in `{typography.caption}` and language selector. The footer never inverts — it stays black even when the body might transition.


## 设计建议与禁忌

### 执行
- 装满血压的汽车摄影每页都锁定,汽车是品牌辨识度;铬反向关闭.
- 使用 UPPERCASE 显示头条 `{typography.display-xl}` 或 减 减 `{typography.display-lg}`。句子显示为非品牌。
- 双层重显示器( 4)700) 轻身(300。加权对比是编辑签名。
- 保留 M 三角色 stripe 品牌标识时刻——文字标记强调色,运动车手的染色体,模具徽章. 永不作为扣填或表面.
- 使用 `{rounded.none}` (0px)默认。 `{rounded.full}` 资源 circular 图标按钮。
- 字母空格全页标签, 位于 1.5px. "机器"的感觉是不可谈判的.
- 使用 `{spacing.section}` (96px),主要编辑段之间,用于网格对齐的垂直节奏.

### Don't
- 千万别在M三色外引入品牌颜色(`{colors.m-blue-light}` / `{colors.m-blue-dark}` / `{colors.m-red}`)和遗产 `{colors.bmw-blue}`.
- Don't bold body type. Body stays at 300 (Light) — bumping to 400 or 500 makes the page feel marketing-bombastic instead of European-engineered.
- Don't use rounded buttons. The rectangular silhouette IS the brand. Rounded corners read as consumer-tech, not motorsport.
- Don't put gradient backdrops behind hero type. The hero IS the photography — the page floor stays pure black, and the photo provides the depth.
- Don't repeat the same surface mode in two consecutive bands. Rhythm: photo band → spec table → photo band → magazine grid → photo band. Two text-only bands in a row read as a corporate site.
- Don't use the M stripe as a button fill. The stripe is a divider / accent — never an action surface.
- 下方不要大写追踪 1.5px 按钮标签上——间隔让他们感觉"机器化".


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales 80→48px; demo grid 1-up; photo cards stack full-width; footer 4 cols → 1 |
| Tablet | 768–1024px | Top nav stays horizontal but tightens; 2-up card grids; spec tables 2-up |
| Desktop | 1024–1440px | Full top-nav; 3-up card grids; spec tables 4-up |
| 宽 | > 1440px | 与呼吸室较多的桌面相同; 最大内容 1440px |

### 触控区域
- `{component.button-primary}` 制作时间为 48 × 48px 最低——满足世界水兵大会AAA的要求。
- `{component.button-icon}` 财务报告和已审计财务报表 `{component.carousel-arrow}` 完全一样 48 × 48 - 舒适地高于 44 × 44 最低点
- `{component.text-input}` 高度为 48px.
- 分类标签为文本专用标签 12px 垂直粘贴; 有效的水龙头区域会合 44px 与周围的间隔。

### 折叠战略
- 顶端导航崩溃到汉堡单 < 768px;菜单打开时为满屏黑色,上面为M 三角彩色 stripe 顶端的
- 摄影在每一个断点都保持满血状态——从不倒塌到边角的容器.
- Card grids reduce columns rather than scaling cards down; photography retains its native aspect ratio.
- 光谱表崩溃从 4- 最多为 2- 最多为 1-上; 光谱值保持为 `{typography.display-sm}` 不论栏数。
- M型分裂器留在 4px 高度跨越所有断点。

### 图像行为
- 首屏摄影作物反应敏捷——桌面上更宽的作物,移动上垂直的作物.
- 生活方式和运动场的照片保留了原生的侧面比例;系统从不写字母框或柱框.
- M字标记+三彩色标志按视港宽度比例进行比例比例标定.


## 迭代指南

1. 一次关注一个组件。请参考其 YAML 密钥( Q)`{component.hero-photo-band}`, `{component.spec-cell}`).
2. New components default to `{rounded.none}` (0px). Only use `{rounded.full}` if it's a circular icon button.
3. 备选案文(`-active`, `-disabled`)作为单独的条目在 `components:`.
4. 使用 `{token.refs}` 到处都是,从不内含六分法。
5. 文档中从未显示悬浮状态。 默认和主动/ 仅显示 。
6. Display headlines stay UPPERCASE 700; body stays sentence-case 300. Never blur the contrast.
7. M三色是品牌标识的唯独——从不将其延伸至系统符号,用于"主动作".
8. When in doubt about emphasis: bigger photography before bigger type.


## 已知缺口

- 调幅频率分析器捕获了白文本( 计数) 955)作为最高频率的标志. 黑页面底色是从截图推断出来的——德姆布兰特的身体-背景取样没有把它作为顶部调色板条目表面,但页面是毫不含糊的黑白文字.
- The exact M tricolor stops are documented from public BMW brand guidelines; the screenshots show the stripe as a small element but pixel-sampling at this resolution doesn't reliably distinguish #0066b1 from #1c69d4. Treat the documented stops as canonical based on BMW Design Works' published brand spec.
- BMW Type Next Latin 光线以外的字重轴值( Q)300)和经常(700)没有记载——只有截图中观察到的静态字重.
- 动画和过渡时间(光滑旋转过渡,悬浮-回光效应,配置器相互作用)不在范围.
- 表格验证状态超出 `{component.text-input}` 默认不提取 – 错误/ 成功输入变体需要配置符或命令流来确认 。
- 配置器表面(带有颜色/轮/内部采样器的车辆建构页)没有在分析的URL集中;其监视网格,比较面板和价格总结卡在这里没有记录.
- 饼干同意在被捕获的截图中覆盖了主页首屏的部分模糊;二级首屏治疗(不同的车型骑着首屏乐队)可能携带没有捕获的变体.

## 设计词元原值

以白色近黑页面底色为主的马达运动-工程接口 BMW Type Next Latin 品牌没有装潢电压——它的能量来自满载汽车摄影(车在轨、驾驶舱镜头、碳纤维细节)和标志性的M三色 stripe 使用标记、分机和运动场铬作为品牌标志。 类型保持轻度到中度字重,以感受欧洲工程,从未有美国炸弹。 使用标记、分机和运动场的标志,但不会影响欧洲。

```yaml
---
version: alpha
name: BMW M-design-analysis
description: A motorsport-engineering interface anchored on a near-black canvas with white BMW Type Next Latin display headlines in confident UPPERCASE. The brand carries no decorative voltage — its energy comes from full-bleed automotive photography (cars on tracks, driver-cockpit shots, carbon-fiber detail) and the iconic M tricolor stripe (light blue → dark blue → red) used sparingly as a brand signature on logos, dividers, and motorsport chrome. Type stays light to medium weight to feel European-engineered, never American-bombastic.

colors:
  primary: "#ffffff"
  ink: "#ffffff"
  body: "#bbbbbb"
  body-strong: "#e6e6e6"
  muted: "#7e7e7e"
  hairline: "#3c3c3c"
  hairline-strong: "#262626"
  canvas: "#000000"
  surface-card: "#1a1a1a"
  surface-elevated: "#262626"
  surface-soft: "#0d0d0d"
  on-primary: "#000000"
  on-dark: "#ffffff"
  m-blue-light: "#0066b1"
  m-blue-dark: "#1c69d4"
  m-red: "#e22718"
  bmw-blue: "#1c69d4"
  electric-blue: "#0653b6"
  carbon-gray: "#2b2b2b"
  warning: "#f4b400"
  success: "#0fa336"

typography:
  display-xl:
    fontFamily: "BMWTypeNextLatin, sans-serif"
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0
  display-lg:
    fontFamily: "BMWTypeNextLatin, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0
  display-md:
    fontFamily: "BMWTypeNextLatin, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0
  display-sm:
    fontFamily: "BMWTypeNextLatin, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  title-lg:
    fontFamily: "BMWTypeNextLatin, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "BMWTypeNextLatin, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "BMWTypeNextLatin, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  label-uppercase:
    fontFamily: "BMWTypeNextLatin, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 1.5px
  body-md:
    fontFamily: "BMWTypeNextLatin Light, BMWTypeNextLatin, sans-serif"
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "BMWTypeNextLatin Light, sans-serif"
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "BMWTypeNextLatin, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.5px
  button:
    fontFamily: "BMWTypeNextLatin, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 1.5px
  nav-link:
    fontFamily: "BMWTypeNextLatin, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.5px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 32px
    height: 48px
  button-primary-outline:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 32px
    height: 48px
  button-on-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 32px
  button-icon:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    size: 48px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.label-uppercase}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 64px
  hero-photo-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px
  m-stripe-divider:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    height: 4px
  feature-photo-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: 24px
  model-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.none}"
    padding: 24px
  magazine-article-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: 24px
  spec-cell:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 24px
  cookie-consent-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 24px
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.label-uppercase}"
    padding: 12px 0
  category-tab-active:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.label-uppercase}"
    padding: 12px 0
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 12px 16px
    height: 48px
  chatbot-launcher:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: 24px
  cta-band-photo:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    padding: 80px
  motorsport-photo-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
  carousel-arrow:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    size: 48px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: 64px
---
```
