# Mistral AI · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Mistral AI carries itself with a singular, almost cinematographic visual signature — the homepage opens with "Frontier AI. In your hands." rendered in elegant near-serif display type over a photographic mountain landscape bathed in mustard-orange sunset light. Below the hero, every page closes with the same recognizable element: a horizontal "sunset stripe" gradient band running red→orange→yellow→cream that wraps the foot of the page just above the footer. This stripe is THE brand recognizer — it appears on the homepage, products/studio, solutions/coding, news articles, contact form, and services tier page without exception.

The system pairs PP Editorial Old (a near-serif elegant display face) for hero displays with Inter for everything else (body, headings, UI). Cream-yellow surfaces ({colors.cream}, {colors.surface-cream-soft}) anchor form panels and feature cards; saturated orange ({colors.primary}) carries primary CTAs; the deep mountain photography on the homepage and the dark code mockups inside Le Studio create photographic depth. Cards are rectangular with `{rounded.lg}` (12px) corners — distinctly less playful than Miro's or Mintlify's pill-buttons-everywhere approach. Buttons are also `{rounded.md}` (8px), not pills — Mistral's geometry is more sober and editorial than its peers.

**关键特征 :**
- 大气山日落首屏摄影(橙红黄梯度天空).
- 水平“ 日落 ” stripe" 乐队({colors.primary} → {colors.sunshine-700} → {colors.yellow-saturated} → {colors.cream}),在每一页底部
- 黄油黄油表面( Name{colors.cream}, {colors.cream-soft}用于形式面板和特征卡
- PP Editorial Old (或类似近血)用于首屏展示; Inter 给其他一切
- `{rounded.md}` (8px) buttons and `{rounded.lg}` (12px) cards — less playful, more editorial geometry
- 饱和橙色初级CTA({colors.primary}) 携带每一份行动呼吁


## 配色

> Source pages: mistral.ai/ (homepage), /products/studio (Le Studio product), /solutions/coding (coding solution), /news/vibe-remote-agents-mistral-medium-3-5 (news), /contact (contact form), /services (services tiers). Token coverage was identical across all six pages.

### 品牌色与强调色
- **雾橙** ({colors.primary}: 初级CTA颜色,品牌橙色
- **橙深** ({colors.primary-deep}: 压态和加亮变体
- **阳光 300** ({colors.sunshine-300}:大气淡橙黄色
- **阳光 500** ({colors.sunshine-500}:中谱日落橙色
- **阳光 700** ({colors.sunshine-700}:饱和的中日落梯度停止
- **阳光 800** ({colors.sunshine-800}:深日落梯度停止
- **阳光 900** ({colors.sunshine-900}:最深的日落橙色
- **黄饱和** ({colors.yellow-saturated}: 日落时使用的纯黄色品牌 stripe 渐变
- **块 5/6/7** ({colors.block-5}, {colors.block-6}, {colors.block-7}:光谱沿日落梯度停止(光-黄 → 中黄 → 深奥线).

### 奶油/ 中性温暖
- **奶油** ({colors.cream}: 用于形式面板、特征卡、页脚的温暖黄油表面
- **奶油软** ({colors.cream-soft}: 较轻奶油变型
- **奶油深层** ({colors.cream-deeper}: 徽章/塔格芯片的饱和度更高
- **碧海深处** ({colors.beige-deep}: 凝胶表面 1px 边框颜色

### 界面表面
- **白色页面底色** ({colors.canvas}: 页面背景和卡片表面
- **界面表面** ({colors.surface}: 更安静的背景
- **表面凝胶** ({colors.surface-cream}: 黄油黄色表面
- **表面代码** ({colors.surface-code}暗色( 暗色 ) : code-block / IDE 模拟表面
- **细边线** ({colors.hairline}): 1px 边框
- **柔软的细边线** ({colors.hairline-soft}: 静者
- **发条坚固** ({colors.hairline-strong}: 强壮 1px 输入边框

### 文字颜色
- **墨水( 墨水 )** ({colors.ink}:主要头条和正文
- **墨迹** ({colors.ink-tint}: 首屏覆盖文字的稍柔的黑色
- **木炭矿** ({colors.charcoal}:机构重点
- **标 题** ({colors.slate}: 副文本
- **Steel** ({colors.steel}): Tertiary text, captions
- **石头** ({colors.stone}: 哑标签
- **静音** ({colors.muted}: 残疾、占位符
- **黑暗时** ({colors.on-dark}: 暗面的白文本
- **黑暗的静音** ({colors.on-dark-muted}: 减少不透明度的白色
- **On Cream** ({colors.on-cream}): Ink text on cream surfaces

### 语义色
- **链接** ({colors.link}: 内置链接颜色( 匹配主橙色)


## 字体排版

### 字体族
**PP Editorial Old** (Display):Mistral的签名近塞里夫优雅的显示类型,用于首屏显示,大量,编辑部分的开页. Carries a 略显古典,智能的性格,与当代产品定位形成对比. Fallbacks:'Times New Roman', Georgia, serif.

**Inter** (UI Propose): 用于身体,导航,按钮,标签,标题的可变类型面。 退后: ui-sans-serif, system-ui, -apple-system, sans-serif.

**JetBrains Mono** (代码): Monospace 用于代码块和 IDE 模型。退后: 'SF Mono', Menlo, Consolas, monospace.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 家庭 | 使用 |
|---|---|---|---|---|---|---|
| `{typography.hero-display}` | 84px | 400 | 1.05 | -1.5px | PP Editorial Old | 首屏("前线AI,在你手中"). |
| `{typography.display-lg}` | 64px | 400 | 1.10 | -1px | PP Editorial Old | 打开区域者 |
| `{typography.heading-1}` | 52px | 400 | 1.15 | -0.5px | PP Editorial Old | 页面头条("与团队联系"). |
| `{typography.stat-display}` | 56px | 400 | 1.10 | -1px | PP Editorial Old | 点播(")75%") |
| `{typography.heading-2}` | 36px | 500 | 1.20 | -0.5px | Inter | 分节标题 |
| `{typography.heading-3}` | 28px | 500 | 1.25 | 0 | Inter | 牌名标题 |
| `{typography.heading-4}` | 22px | 500 | 1.30 | 0 | Inter | 特征牌标题 |
| `{typography.heading-5}` | 18px | 500 | 1.40 | 0 | Inter | 较小的牌名 |
| `{typography.subtitle}` | 18px | 400 | 1.50 | 0 | Inter | 首屏字幕,领头人物 |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Inter | 主体文本 |
| `{typography.body-md-medium}` | 16px | 500 | 1.55 | 0 | Inter | 机构重点 |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Inter | 中学 |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | Inter | 活动侧边栏, 按钮标签 |
| `{typography.caption}` | 13px | 400 | 1.40 | 0 | Inter | 帮助文本 |
| `{typography.caption-bold}` | 13px | 600 | 1.40 | 0 | Inter | 标签 |
| `{typography.micro}` | 12px | 500 | 1.40 | 0 | Inter | Footer microcopy |
| `{typography.micro-uppercase}` | 11px | 600 | 1.40 | 1px | Inter | 区域眉毛 |
| `{typography.button-md}` | 14px | 500 | 1.30 | 0 | Inter | 按钮标签 |
| `{typography.code-md}` | 14px | 400 | 1.50 | 0 | JetBrains Mono | 代码块 |

### 原则
- **编辑/桑斯配对** — PP Editorial Old (近岸,古典)主播首屏展示; Inter 反之亦然,是品牌的声音
- **体型优雅,能带劲** (1.55 打开 body-md),用于长式页面的编辑可读性
- **紧紧的首屏领头** (1.05 打开 84px 显示)创建杂志级的打印显示
- **负数 letter-spacing** 大小的进度—— 显示大小使用 -1.5px 改为: -0.5px; 较小的头放松到 0
- **Stat-display 符号** (56px 编辑),用于营销调图(").75% / 80% / 100%")


## 布局

### 间距系统
- **基地单位**: 4px (8px 小学加薪)
- **脚本**: `{spacing.xxs}` (4px) · `{spacing.xs}` (8px) · `{spacing.sm}` (12px) · `{spacing.md}` (16px) · `{spacing.lg}` (20px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.xxxl}` (40px) · `{spacing.section-sm}` (48px) · `{spacing.section}` (64px) · `{spacing.section-lg}` (96px) · `{spacing.hero}` (120px)
- **节奏**: 销售页面使用 `{spacing.section-lg}` (96px);内容页面收紧到 `{spacing.section}` (64px)
- **Card internal padding**: `{spacing.xl}` (24px) for compact cards; `{spacing.xxl}` (32px) for feature panels and form panels

### 网格与容器
- 营销页面使用情况 1280px max-width 配合 32px 沟槽
- 首屏乐队使用 2- 桌面上的柱子分割( 左文本, 日落摄影右)
- Le Studio产品页的使用 3- 首屏下面的上层特征网格
- 联系页使用 1- 以奶油窗面板为中心(柱形布局)~520px max-width)
- 服务页面使用 4- 带有奶油特性面板分隔条的层次卡布局

### 留白规则
Marketing surfaces give content generous breathing room — `{spacing.hero}` (120px) hero padding lets the mountain-sunset photography fill the frame. Form pages tighten dramatically: contact form panel uses `{spacing.xxl}` (32px) internal padding, fields stack on `{spacing.md}` (16px) gap.


## 层次与深度

该系统主要运行平坦,从摄影中具有战略大气深度.

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 (flat) | No shadow; `{colors.hairline-soft}` border | Default cards, table rows, form inputs |
| 1 (声) | `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` | 斜拉片 |
| 2 (卡) 发牌 | `rgba(0, 0, 0, 0.04) 0px 4px 12px 0px` | 标准特性卡 |
| 3 (嘲笑) 说吧,我... | `rgba(0, 0, 0, 0.08) 0px 12px 24px -4px` | IDE 模拟、代码编辑器框架 |
| 4 (模式) | `rgba(0, 0, 0, 0.12) 0px 16px 48px -8px` | 潮汐、降水 |

### 装饰性深度
- The atmospheric depth on Mistral's hero comes from the photographic mountain-sunset imagery — natural light gradient does the work
- 日落的太阳 stripe" 关闭带通过多站梯度(红色 ~ 橙色 ~ 黄色 ~ 奶油)带深
- IDE / 代码模型使用带有微妙的投影的暗黑扫描背景


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, micro-controls |
| `{rounded.sm}` | 6px | 折价徽章, 紧凑的 UI |
| `{rounded.md}` | 8px | 按钮,输入, search-pill代码块 |
| `{rounded.lg}` | 12px | 牌,型号,面板(主牌半径) |
| `{rounded.xl}` | 16px | 更大的专题板 |
| `{rounded.xxl}` | 20px | 特色重点卡 |
| `{rounded.full}` | 9999px | 状态徽章、胶囊形(使用时不拘时——大多数按钮是非胶囊形) |

The radius scale is sober and editorial — Mistral does NOT use pill buttons. `{rounded.md}` (8px) for buttons, `{rounded.lg}` (12px) for cards, `{rounded.full}` reserved for badges and the rare pill tab.

### 图片形状
- 首屏摄影是全血的大气山太阳图象,没有内部框架
- IDE/code mockups render with `{rounded.lg}` (12px) corners on dark canvas
- 客户标识墙以一致方式显示内含的字签 60–80px 高度( E)
- 产品图像(Le Studio Modelup,代理 UI Modelups)坐落于 `{rounded.lg}` 带有微妙边框的面板


## 组件

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### 按钮

**`button-primary`** ——饱和-橙色初级CTA,是主导动作.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.md}`.
- Pressed state `button-primary-pressed` deepens to `{colors.primary-deep}`.
- 已禁用状态 `button-primary-disabled` 使用情况 `{colors.hairline}` 和背景 `{colors.muted}` 文本中选择的文本。

**`button-cream`** ——暖奶油黄黄二次动作,常见于奶油表面的节点.
- Background `{colors.cream}`, text `{colors.ink}`, border `1px solid {colors.beige-deep}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.md}`.

**`button-dark`** ——奶油表面的暗黑/黑色初级CTA.
- Background `{colors.ink}`, text `{colors.on-dark}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.md}`.

**`button-secondary`** ——概括次要行动.
- Background transparent, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.md}`.

**`button-on-cream`** - 白色按钮在奶油丁丁背景。
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.beige-deep}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.md}`.

**`button-link`** ——内含橙色文字链接.
- Background transparent, text `{colors.primary}`, typography `{typography.body-sm-medium}`, padding `0`. Underline on activation.

### 卡片与容器

**`card-base`** ——标准内容卡.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-soft}`.

**`card-feature`** ——白色特征卡,加大贴纸.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid `{colors.hairline-soft}`.

**`card-cream`** ——暖奶油黄话特色卡(服务等级,perk点播).
- Background `{colors.cream}`, text `{colors.ink}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.beige-deep}`.

**`card-cream-soft`** ——轻乳油变种.
- Background `{colors.surface-cream-soft}`, text `{colors.ink}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`.

**`card-feature-product`** ——产品展示卡,带有微妙的提升.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline-soft}`, shadow `rgba(0, 0, 0, 0.04) 0px 4px 12px`.

**`card-photographic`** ——背景暗的摄影产品卡.
- Background `{colors.surface-code}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `0` (image fills the card).

**`pricing-card`** ——标准定价等级卡.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline-soft}`.

**`pricing-card-featured`** ——特色定价等级(尖叫背景+橙色边框).
- Background `{colors.cream}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `2px solid {colors.primary}`.

### 输入框与表单

**`text-input`** ——标准文本字段.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 44px.

**`text-input-focused`** ——启动状态.
- 边框切换到 `2px solid {colors.primary}`.

**`text-area`** ——联系表的多行文本区域.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, rounded `{rounded.md}`, padding `{spacing.md}`.

**`contact-form-panel`** ——接触页上的凝胶定式容器.
- Background `{colors.cream}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.beige-deep}`. Hosts text-inputs, text-area, submit `button-dark`.

### 标签

**`pill-tab`** + **`pill-tab-active`** ——胶囊形式标签导航(在产品页上使用时较为节制).
- Inactive: background `{colors.canvas}`, text `{colors.steel}`, border `1px solid {colors.hairline}`, padding `{spacing.xs} {spacing.md}`, rounded `{rounded.full}`.
- 活动:背景 `{colors.ink}`文本中,请输入 `{colors.on-dark}`.

**`segmented-tab`** + **`segmented-tab-active`** ——底线式标签导航.
- Inactive: text `{colors.steel}`, transparent background, padding `{spacing.sm} {spacing.md}`, no bottom border.
- 活动: 文本 `{colors.primary}`, 2px 下边框中 `{colors.primary}`.

### 徽章状态( S)

**`badge-orange`** ——饱和橙色徽章.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-cream`** ——奶油丁丁酸标签芯片.
- Background `{colors.cream-deeper}`, text `{colors.ink}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-dark`** ——暗黑/黑身份徽章.
- Background `{colors.ink}`, text `{colors.on-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`promo-banner`** — Sticky 黑色的促销带 ABOVE顶端导航。
- Background `{colors.ink}`, text `{colors.on-dark}`, typography `{typography.body-sm-medium}`, padding `{spacing.sm} {spacing.md}`. Carries one-line copy + inline CTA.

### 代码

**`code-block`** ——语法突出的IDE风格代码块(Le Studio页面模拟,代理演示).
- Background `{colors.surface-code}`, text `{colors.on-dark}`, typography `{typography.code-md}`, rounded `{rounded.md}`, padding `{spacing.md}`.

**`code-block-header`** ——代码块上方的页眉条.
- Background `{colors.surface-code}`, text `{colors.on-dark-muted}`, typography `{typography.caption}`, padding `{spacing.xs} {spacing.md}`, bottom border `1px solid rgba(255,255,255,0.08)`.

### Documentation Components

**`feature-icon-tile`** ——奶油黄话特色图标呼号.
- Background `{colors.cream}`, rounded `{rounded.md}`, padding `{spacing.md}`, border `1px solid {colors.beige-deep}`.

**`industry-tile`** ——溶液页格中的工业-垂直瓦片.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-soft}`.

**`stat-cell`** —— 静电槽(")75% 更多/ 更多 80% 更妙的是,我们是...
- Background transparent, text `{colors.ink}`, typography `{typography.stat-display}`, padding `{spacing.lg}`.

**`customer-testimonial-card`** ——客户报价卡(在Le Studio和Solutions页面中使用).
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline-soft}`. Quote in `{typography.body-md}`, attribution in `{typography.body-sm}` `{colors.steel}`.

**`logo-wall-item`** ——客户标识文字标记单元格.
- Background transparent, text `{colors.steel}`, typography `{typography.body-md-medium}`, padding `{spacing.lg}`.

**`faq-accordion-item`** - 足协小组
- Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.xl}`, bottom border `1px solid {colors.hairline}`.

**`app-store-badge`** ——App Store / Google Play下载徽章.
- Background `{colors.ink}`, text `{colors.on-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`.

### 导航

**顶端导航( 市场营销)** — Sticky 白条.
- Background `{colors.canvas}`, height ~64px, bottom border `1px solid {colors.hairline-soft}`.
- 左:Mistral M-mark标志+"MISTRAL AI_"字标记+水平链接列表(Products, Solutions, Research, Blog, Clients, Company).
- 右:"联系销售"链接+黑溢"Try Studio"CTA.

### 标志性组件

**`hero-band-sunset`** ——大气日落首屏乐队.
- Background gradient `linear-gradient(135deg, {colors.sunshine-700} 0%, {colors.sunshine-900} 60%, {colors.primary} 100%)` overlaid on photographic mountain landscape.
- Layout: hero headline left in `{typography.hero-display}` ({colors.ink}), subtitle in `{typography.subtitle}` ({colors.ink-tint}), button row (`button-dark` + `button-secondary`), atmospheric mountain photography right.

**`sunset-stripe-band`** ——每页脚下水平关闭带.
- Multi-stop gradient: `{colors.primary}` → `{colors.sunshine-700}` → `{colors.sunshine-500}` → `{colors.yellow-saturated}` → `{colors.cream}`.
- Padding `{spacing.lg} 0`. Spans full width, sits above the footer. THIS IS THE BRAND'S MOST RECOGNIZABLE SIGNATURE ELEMENT.

**`cta-banner-cream`** - 奶油表面的Page-bottom CTA乐队.
- Background `{colors.cream}`, text `{colors.ink}`, rounded `{rounded.lg}`, padding `{spacing.section}`. "The next chapter of AI is yours." headline in `{typography.heading-1}` (PP Editorial Old), button row below.

**`footer-region`** ——奶油丁酸多柱脚.
- Background `{colors.footer-cream}`, padding `{spacing.section} {spacing.xxl}`.
- 5-柱式链接网格(为什么Mistral / Explore / Build / Legal + 品牌标记栏).
- 底部:语言采摘者+社会图标.

**`footer-link`** ——个人页脚链接.
- Background transparent, text `{colors.primary}`, typography `{typography.body-sm}`, padding `{spacing.xxs} 0`.


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` 仅针对初级CTA和活跃状态的(饱和橙色)
- 使用 **日落时 stripe 带** 每一页的脚下,这是品牌最能识别的签名
- 平对 PP Editorial Old (播放)与 Inter (UI)——从不以通用替代品取代
- Apply `{rounded.md}` (8px) to buttons and `{rounded.lg}` (12px) to cards consistently
- 使用黄油表面( Name{colors.cream}用于窗体面板、特征卡和页脚
- Anchor heroes with photographic mountain-sunset imagery (or its visual equivalent — atmospheric gradient sky)
- 使用 stat-display 符号( PP 编辑器) 56px)用于stat调用以保持编辑性能.

### 应避免的做法
- Don't use pill-shaped buttons (`{rounded.full}`) — Mistral's geometry is sober and editorial, not playful
- 越橘子/黄黄/奶油夕阳调色板,不要增加强调色颜色
- Don't reduce hero leading below 1.05 — the editorial display needs that magazine-grade tightness
- Don't replace PP Editorial Old hero displays with Inter — the editorial / sans contrast IS the brand
- Don't apply heavy shadows on flat documentation cards; reserve elevation for IDE mockups
- Don't drop the sunset stripe band from any page bottom — it's the brand's continuity element


## 响应式布局

### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero scales to 40px (PP Editorial). Pill nav collapses to hamburger. Pricing tiers stack 1-up. |
| Mobile (large) | 480 – 767px | Feature tiles 2-up. Hero scales to 52px. |
| 平板 | 768 – 1023px | 2- 列的特征网格。 Pill-tab 导航返回。 首屏 64px. |
| Desktop | 1024 – 1279px | Multi-column layouts. Hero 76px. Stat row at full width. |
| 宽桌面 | ≥ 1280px | 满 84px 首屏介绍 |

### 触控区域
- 按钮渲染到 40–44px 有效高度——位于WCAG AAA层, `10px 20px` 粘贴
- 格式输入提供时间 44px 高度( E)
- 胶囊形标签渲染到 ~32px 高的, 颠倒到 44px 移动

### 窄屏布局调整
- **宣传旗** 保持全宽; 切换到 < 480px
- **顶端导航** 下级 1024px 倒塌到汉堡
- **首屏乐队**: 2- 柱形首屏(文本 + 摄影) 崩溃堆叠到 < 1024px
- **定价等级**: 4- 列上桌面 ~ 2-柱状石板 - 柱状石板 - 柱状石板 1- 列移动
- **静态行**: 3- 堆积在 < 768px
- **首屏打字技术**: 84px → 64px → 52px → 40px
- **Footer**: 5-column desktop → 3-column tablet → 1-column accordion mobile
- **日落 stripe 带** 在所有断点上保持全宽

### 图片适配
- 山日照使用量 16:9 比例,含全血比例
- IDE 模拟图像保持跨断点的宽度比
- 客户端标志墙以一致的方式显示文字标记 60–80px 高度( E)


## 迭代指南

1. 一次集中关注一个部分
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component-name}-pressed`)
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后
4. 添加新的变体作为单独的 `components:` 条目
5. 默认为 `{typography.body-md}` 身体和身体的 `{typography.subtitle}` 显示显示 `{typography.hero-display}` (PP Editorial Old).
6. 保留 `{colors.primary}` 限于初级CTA、活动状态和日落 stripe 带
7. 使用卡片 `{rounded.lg}` (12px,按钮 `{rounded.md}` (8px)胶囊形(.`{rounded.full}`)只保留徽章.
8. 总是包含 sunset-stripe-band 组件,在每页模拟的脚下。


## 已知缺口

- Specific dark-mode token values not surfaced; the brand has not shipped a published dark-mode palette
- Animation/transition timings not extracted; recommend 150–200ms ease for hover/focus state transitions
- 格式验证成功状态未明确记录到默认值之后
- 日落 stripe 带梯度停止是近似值——实际值可能因页面而略有不同,但视觉节奏一致

## 设计词元原值

Mistral AI 品牌本身具有单一的特征——大气日落梯度(须、橙、深红色)在山地摄影上分层,加上横向的"日落" stripe关闭每一页的栏杆,系统对着暖奶油黄油表面({colors.cream}具有饱和橙色初级CTA({colors.primary}),并使用优雅的近音来进行首屏显示. 覆盖范围跨越主页(Frontier AI hero),Le Studio产品页面,编码解决方案,新闻文章表面,接触形式,服务层次页面——都由签名梯度关闭带定位.

```yaml
---
version: alpha
name: Mistral AI-design-analysis
description: Mistral AI brands itself with a singular signature — atmospheric sunset gradients (mustard, orange, deep red) layered over photography of mountains, plus a horizontal "sunset stripe" bar that closes every page. The system pairs warm cream-yellow surfaces ({colors.cream}) with a saturated orange primary CTA ({colors.primary}) and uses an elegant near-serif voice for hero displays. Coverage spans homepage (Frontier AI hero), Le Studio product page, Coding solutions, news article surfaces, contact form, and services tier page — all anchored by the signature gradient closing band.

colors:
  primary: "#fa520f"
  primary-deep: "#cc3a05"
  on-primary: "#ffffff"
  sunshine-300: "#ffd06a"
  sunshine-500: "#ffb83e"
  sunshine-700: "#ffa110"
  sunshine-800: "#ff8105"
  sunshine-900: "#ff8a00"
  yellow-saturated: "#ffd900"
  cream: "#fff8e0"
  cream-light: "#fffaeb"
  cream-deeper: "#fff0c2"
  beige-deep: "#e6d5a8"
  block-5: "#ffe295"
  block-6: "#ffd900"
  block-7: "#ff8105"
  ink: "#1f1f1f"
  ink-tint: "#3d3d3d"
  charcoal: "#2c2c2c"
  slate: "#4a4a4a"
  steel: "#6a6a6a"
  stone: "#8a8a8a"
  muted: "#a8a8a8"
  hairline: "#e5e5e5"
  hairline-soft: "#ededed"
  hairline-strong: "#c7c7c7"
  canvas: "#ffffff"
  surface: "#fafafa"
  surface-cream: "#fff8e0"
  surface-cream-soft: "#fffaeb"
  surface-code: "#1c1c1e"
  on-dark: "#ffffff"
  on-dark-muted: "#a8a8a8"
  on-cream: "#1f1f1f"
  footer-cream: "#fff8e0"
  link: "#fa520f"

typography:
  hero-display:
    fontFamily: PP Editorial Old
    fontSize: 84px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: PP Editorial Old
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.10
    letterSpacing: -1px
  heading-1:
    fontFamily: PP Editorial Old
    fontSize: 52px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.5px
  heading-2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: -0.5px
  heading-3:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.25
  heading-4:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.30
  heading-5:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.40
  subtitle:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-md-medium:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.55
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  body-sm-medium:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.50
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
  caption-bold:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.40
  micro:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40
  micro-uppercase:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 1px
  button-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.30
  stat-display:
    fontFamily: PP Editorial Old
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.10
    letterSpacing: -1px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 20px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section-sm: 48px
  section: 64px
  section-lg: 96px
  hero: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-pressed:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
  button-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    border: "1px solid {colors.beige-deep}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    border: "1px solid {colors.hairline-strong}"
  button-on-cream:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    border: "1px solid {colors.beige-deep}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm-medium}"
    padding: "0"
  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-soft}"
  card-feature:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-soft}"
  card-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.beige-deep}"
  card-cream-soft:
    backgroundColor: "{colors.surface-cream-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
  card-feature-product:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-soft}"
    shadow: "rgba(0, 0, 0, 0.04) 0px 4px 12px"
  card-photographic:
    backgroundColor: "{colors.surface-code}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "0"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-soft}"
  pricing-card-featured:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "2px solid {colors.primary}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline-strong}"
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.primary}"
  text-area:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline-strong}"
  contact-form-panel:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.beige-deep}"
  pill-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.hairline}"
  pill-tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.ink}"
  segmented-tab:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.md}"
    border: "0 0 2px transparent solid"
  segmented-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm-medium}"
    border: "0 0 2px {colors.primary} solid"
  badge-orange:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-cream:
    backgroundColor: "{colors.cream-deeper}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  promo-banner:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.md}"
  hero-band-sunset:
    backgroundColor: "{colors.sunshine-700}"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "{spacing.hero}"
  sunset-stripe-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "0"
    padding: "{spacing.lg} 0"
  cta-banner-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.section}"
  code-block:
    backgroundColor: "{colors.surface-code}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  code-block-header:
    backgroundColor: "{colors.surface-code}"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.caption}"
    padding: "{spacing.xs} {spacing.md}"
    border: "0 0 1px rgba(255,255,255,0.08) solid"
  feature-icon-tile:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.beige-deep}"
  industry-tile:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-soft}"
  stat-cell:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.stat-display}"
    padding: "{spacing.lg}"
  customer-testimonial-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-soft}"
  logo-wall-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-md-medium}"
    padding: "{spacing.lg}"
  faq-accordion-item:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    border: "0 0 1px {colors.hairline} solid"
  footer-region:
    backgroundColor: "{colors.footer-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
  footer-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
  app-store-badge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
---
```
