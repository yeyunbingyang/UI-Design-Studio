# MiniMax · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

MiniMax 市场营销在严酷的白色页面底色中浮现和平台页面主播,并具有深黑的印刷强调——品牌声音自信,技术性,几乎编辑性。但每个模型发布都获得自己的充满活力的梯度身份证:M2.7 火山珊瑚红,音乐 2.6 红金色的,深蓝色的,海罗瓜,演讲 2.8 将这些充满活力的瓷砖放在了主页上, 每一个都宣布了自己的产品个性。

DM Sans anchors every surface from oversized 80px hero displays down to 12px micro labels. The geometric, slightly humanist character of the face suits both the dense documentation surfaces (where 14px body type carries 1.5 line-height for long-form prose) and the high-impact marketing displays (where -2px letter-spacing tightens 80px headlines). Buttons are universally pill-shaped (`rounded-full`) with a sharp two-tier system: black-pill primary (the dominant CTA) and outline-pill secondary. Cards split into two distinct families: vibrant gradient product showcases (32px corner softening) and quiet white documentation cards (16px corner softening).

**关键特征 :**
- 斯塔克单色调色板——黑色({colors.primary})和白色( 双色){colors.canvas})——被饱和的品牌-颜色梯度卡片打破打开.
- Distinct product-color encoding: each model line has its own vibrant brand color (coral M2.7, magenta Music 2.6, blue Hailuo, orange Speech 2.8)
- DM Sans 在整个系统; Inter 倒计时
- 胶囊形形状的按钮( ${rounded.full})和处处的避孕药形标签;矩形只存在于数据表和密集的文档中
- 首屏打字法使用紧凑 1.10 line-height 配合 -2px letter-spacing 影响
- 文档表面使用 a 3-栏形布局:左侧栏形导航,中心传言体,右侧内容表
- 黑色宣传旗( Name{colors.primary})在导航之上,为有时间限制的品牌时刻


## 配色

> Source pages: minimax.io/ (homepage), /models/text/m27 (product showcase), platform.minimax.io/docs/guides/models-intro (documentation), /subscribe/token-plan (pricing). Token coverage was identical across all four pages.

### 品牌色与强调色
- **Brand Coral** ({colors.brand-coral}): Signature high-impact accent. Used on M2.7 product card, "Token Plan" hero band, promo CTA strips, and "NEW" badges. Carries the brand's most attention-grabbing energy.
- **白红** ({colors.brand-magenta}中学 product-card 身份( 音乐) 2.6;用于音乐/音频产品编码.
- **蓝蓝** ({colors.brand-blue}:海路子视频产品身份;全系统主要蓝调.
- **蓝深** ({colors.brand-blue-deep}:形式控制激活,链接强调.
- **蓝蓝 700** ({colors.brand-blue-700}:文档标记和参考文本颜色.
- **白青兰** ({colors.brand-cyan}:大气蓝色,用于产品梯度和装饰性洗涤.
- **蓝蓝 200** ({colors.brand-blue-200}:代码徽章,信息塔格背景.
- **紫色品牌( B)** ({colors.brand-purple}: 发言 2.8 和小紫色产品身份; 紫色卡的梯度配方。

### 界面表面
- **白色页面底色** ({colors.canvas}:主页背景和卡片表面.
- **界面表面** ({colors.surface}: 细小的一节背景, search-pill 休息,侧边导航活动状态。
- **表面软** ({colors.surface-soft}:静脉分部.
- **细边线** ({colors.hairline}): 1px 输入边框和主分隔符。
- **柔软的细边线** ({colors.hairline-soft}:静坐桌排位分机和次节断档.

### 文字颜色
- **墨水( 墨水 )** ({colors.ink}:主头条和CTA文本——品牌近黑主播.
- **墨水坚固** ({colors.ink-strong}:纯黑色用于宣传旗和首屏显示,以达到最大对比.
- **木炭矿** ({colors.charcoal}: 光表面的体文字.
- **标 题** ({colors.slate}: 副文本,元数据.
- **Steel** ({colors.steel}): Tertiary text, table headers, sidebar inactive items.
- **石头** ({colors.stone}: 已调用字幕和标签不活动标签。
- **静音** ({colors.muted}:页脚链接文本和去强调的标签.

### 语义色
- **成功的背景** ({colors.success-bg}): Pale-green 洗洗,以成功徽章和确认。
- **成功文本** ({colors.success-text}): Deep-green 墨水表示成功徽章标签.
- 错误音调来自 a `#d45656` 输入边框错误状态中使用的红色(不提取为顶级系统符).


## 字体排版

### 字体族
**DM Sans** (primary): Geometric variable sans-serif. Used across every surface, every role. Fallbacks: Inter, Helvetica Neue, Helvetica, Arial.

DM Sans was chosen for its dual fluency: it scales cleanly from 80px hero displays (where -2px letter-spacing creates magazine-grade tightness) down to 12px micro labels (where the slightly humanist counters maintain legibility). The face has no italic variant in the brand's deployment — emphasis comes from weight (500/600/700) instead.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 80px | 600 | 1.10 | -2px | Homepage hero ("MiniMax Music 2.6") |
| `{typography.display-lg}` | 56px | 600 | 1.10 | -1.5px | Section openers, major page heroes |
| `{typography.heading-lg}` | 40px | 600 | 1.20 | -1px | 分页头条("托肯计划","模型概述") . |
| `{typography.heading-md}` | 32px | 600 | 1.25 | -0.5px | 子节标题(“Full-Stack模型矩阵”) |
| `{typography.heading-sm}` | 24px | 600 | 1.30 | 0 | 牌名、 特性标题 |
| `{typography.card-title}` | 20px | 600 | 1.40 | 0 | Product-card titles, feature-tile headers |
| `{typography.subtitle}` | 18px | 500 | 1.50 | 0 | 节次,牵头机构 |
| `{typography.body-md}` | 16px | 400 | 1.50 | 0 | 主体文本 |
| `{typography.body-md-bold}` | 16px | 700 | 1.50 | 0 | 机构重点 |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | 二级体、表细胞、导航 |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | 活动侧边栏导航, 按钮标签 |
| `{typography.caption}` | 13px | 400 | 1.70 | 0 | Documentation captions, fine print |
| `{typography.caption-bold}` | 13px | 600 | 1.50 | 0 | 标签、表格标题文本 |
| `{typography.micro}` | 12px | 400 | 1.50 | 0 | 缩微镜、芯片标签 |
| `{typography.button-md}` | 14px | 600 | 1.40 | 0 | 胶囊形按钮标签 |

### 原则
- **紧紧的首屏领头** (1.10)和侵略性负 letter-spacing 创建一个杂志质量的打印显示, 独有于 MiniMax.
- **Generous body leading** (1.50) keeps long-form documentation comfortable; captions push to 1.70 for scientific-paper-grade clarity.
- **字重学科:** 400 (身体),(身体),(身体), 500 (中度强调), 600 (头/扣), 700 (强烈的内在强调)重力没有被使用。
- **单字型** 战略——永远不要混合 DM Sans 与另一个 sans-serif。代码样本(当显示时)使用系统 monospace 倒置,但没有第二个类型面进入品牌页面底色。


## 布局

### 间距系统
- **基地单位**: 4px (8px 初级增量)。
- **脚本**: `{spacing.xxs}` (4px) · `{spacing.xs}` (8px) · `{spacing.sm}` (12px) · `{spacing.md}` (16px) · `{spacing.lg}` (20px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.xxxl}` (40px) · `{spacing.section-sm}` (48px) · `{spacing.section}` (64px) · `{spacing.section-lg}` (80px) · `{spacing.hero}` (96px).
- **节奏**: 销售页面分开 `{spacing.hero}` (96px)以上,则 `{spacing.section-lg}` (80px)下面;文件收紧到 `{spacing.section}` (64px);表格行压缩到 `{spacing.md}` (16px).
- **Card internal padding**: Vibrant product cards use `{spacing.xxl}` (32px); documentation cards use `{spacing.lg}–{spacing.xl}` (20–24px); promo strips expand to `{spacing.section}` (64px).

### 网格与容器
- 营销页面使用a 1280px max-width 配合 32px 沟渠.
- Homepage product matrix renders as a 4-column row of 32px-rounded gradient cards, each ~280–320px wide.
- AI 产品矩阵下方使用a 4- 列网带 16px- 圆形白牌。
- 文档表面使用 a 3-列布局:左侧栏导航(~220px),中心传教体(英语:~720px max-width),右TOC(英语:~180px。侧边栏持续在桌面上;下面的抽屉会倒塌 1024px.
- Token 计划/ 定价页面使用量 2- 上方的栏标签 3- 列级卡网

### 留白规则
Marketing pages give product photography and color cards generous breathing room — `{spacing.hero}` (96px) above-the-fold creates visual oxygen for the 80px hero display. Inside documentation, whitespace tightens dramatically: section gaps drop to `{spacing.xxl}` (32px), table rows pack down to `{spacing.md}` (16px), and the sidebar nav uses `{spacing.xs}` (8px) vertical rhythm.


## 层次与深度

该系统主要运行平坦,为高架预留了 sticky 面板,滴水, 和罕见的浮式CTA。

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 (flat) | No shadow; `{colors.hairline}` border | Default cards, table rows, form inputs |
| 1 (声) | `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` | Card-recommendation,悬浮的瓷砖 |
| 2 (卡) 发牌 | `rgba(0, 0, 0, 0.08) 0px 4px 6px 0px` | 标准特性卡, 滴落 |
| 3 (大气) | `rgba(0, 0, 0, 0.08) 0px 0px 22px 0px` | 专用产品卡上的Diffuse光芒 |
| 4 (模式) | `rgba(36, 36, 36, 0.08) 0px 12px 16px -4px` | 模块,确认对话框, sticky 面板 |

### 装饰性深度
- 充满活力的梯度产品卡通过内部的射线梯度和硅胶图像——不需要阴影,其颜色能起作用,从而可以携带自己的大气深度。
- 白纹阴影( Name`rgba(44, 30, 116, 0.16) 0px 0px 15px`)出现在紫色主题卡下,用于微妙的环境升力.
- 点/纹理偶尔会在产品卡内作为图片内容装饰出现;这些不是作为系统符号的形式.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | 密码芯片,微控制器 |
| `{rounded.sm}` | 6px | 压缩控制, 表格单元格 |
| `{rounded.md}` | 8px | 输入、二级按钮、搜索胶囊形 |
| `{rounded.lg}` | 12px | Documentation cards, recommendation tiles |
| `{rounded.xl}` | 16px | 标准特性卡, AI 产品牌 |
| `{rounded.xxl}` | 20px | 更大的专题板 |
| `{rounded.xxxl}` | 24px | AI 产品瓦片特征变体 |
| `{rounded.hero}` | 32px | 振动梯度产品卡,促销CTA条 |
| `{rounded.full}` | 9999px | 全部按钮,所有胶囊形,徽章 |

### 图片形状
- 使用振动产品卡 32px 角软化——与 16px 双倍半径是视觉上的标志,“这是一个突出的产品时刻”。
- 产品图象卡片内部的图像作为图片内容(shilhouettes,暗影室照明)处理,没有圆形内部帧.
- 幻觉圆圈(稀有,在证物中)是 `{rounded.full}` - 完美的圆圈。


## 组件

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### 按钮

**`button-primary`** ——黑丸主CTA,是贯穿所有表面的主导动作.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `11px 24px`, rounded `{rounded.full}`.
- Pressed state `button-primary-pressed` lifts to `{colors.charcoal}`.
- 已禁用状态 `button-primary-disabled` 使用情况 `{colors.hairline}` 和背景 `{colors.muted}` 文本中选择的文本。

**`button-secondary`** —— 纲要胶囊形二级动作,与双CTA首屏模式中的主配对.
- Background transparent, text `{colors.ink}`, border `1px solid {colors.ink}`, typography `{typography.button-md}`, padding `11px 24px`, rounded `{rounded.full}`.

**`button-tertiary`** ——白填静剂丸,用于三级导航和信息化CTA.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, typography `{typography.button-md}`, padding `11px 24px`, rounded `{rounded.full}`.

**`button-link`** ——内置文本链接,其样式为微妙的按钮.
- Background transparent, text `{colors.ink}`, typography `{typography.body-sm-medium}`, padding `8px 0`. Underline appears on activation.

**`button-icon-circular`** — 36×36px circular 实用按钮( carousel 箭头、 共享、 复制) 。
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.full}`.

### 振动产品卡

**`product-card-coral`** — M2.7 - 托肯计划签名卡。
- Background `{colors.brand-coral}`, text `{colors.on-dark}`, rounded `{rounded.hero}` (32px), padding `{spacing.xxl}`.
- 主办 M2.7 以大块表示的字标记 `{typography.display-lg}` 白色标记线。

**`product-card-magenta`** ——音乐 2.6 产品展示。
- Background `{colors.brand-magenta}`, text `{colors.on-dark}`, rounded `{rounded.hero}`, padding `{spacing.xxl}`.

**`product-card-blue`** ——海路影视产品展示.
- Background `{colors.brand-blue}`, text `{colors.on-dark}`, rounded `{rounded.hero}`, padding `{spacing.xxl}`.

**`product-card-purple`** - 发言 2.8 /变种产品展示.
- Background `{colors.brand-purple}`, text `{colors.on-dark}`, rounded `{rounded.hero}`, padding `{spacing.xxl}`.

**`product-card-photo`** ——暗肖像产品卡(主页S).2 放置,视频-情绪产品).
- Background `{colors.primary}` (black with overlaid product photo), text `{colors.on-dark}`, rounded `{rounded.hero}`, padding `{spacing.xxl}`.

### 卡片与容器

**`card-base`** 标准文件/地物卡。
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`.

**`card-feature`** ——浅灰色上更安静的特色面板.
- Background `{colors.surface}`, rounded `{rounded.xl}`, padding `{spacing.xxl}`.

**`card-recommendation`** ——文档页脚中的"推荐阅读"瓦片.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.lg}`, border `1px solid {colors.hairline}`.

**`promo-cta-card`** — Bright orange "Refunds of 10%..." promo strip with embedded CTA pill.
- Background `{colors.brand-coral}`, text `{colors.on-dark}`, rounded `{rounded.hero}`, padding `{spacing.section}`. Embedded button uses `button-tertiary` (white pill on coral) for the "Join Now" action.

**`ai-product-tile`** ——AI产品矩阵网格中的白卡(代理,海路影视, MiniMax 音频。
- Background `{colors.canvas}`, rounded `{rounded.xxxl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`. Carries an icon/illustration top, title `{typography.card-title}`, description `{typography.body-sm}`.

### 输入框与表单

**`text-input`** ——标准文本字段.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 40px.

**`text-input-focused`** ——启动状态.
- 边框切换到 `2px solid {colors.brand-blue-deep}`.

**`text-input-error`** ——验证错误状态.
- 边框切换到 `1px solid #d45656`; 匹配红色时下方错误标签 `{typography.body-sm}`.

**`search-pill`** ——文档上栏搜索字段.
- Background `{colors.surface}`, text `{colors.steel}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, height 36px, border `1px solid {colors.hairline}`.

### 标签

**`segmented-tab`** + **`segmented-tab-active`** — Underline-style tab navigation (Benchmark / Self-Evaluation / Multi-Agent Collaboration on the M2.7 page).
- Inactive: text `{colors.steel}`, transparent background, padding `{spacing.md} {spacing.lg}`. Active: text shifts to `{colors.ink}`, 2px bottom border in `{colors.ink}`.

**`pill-tab`** + **`pill-tab-active`** ——定价-页面标签导航(Token Plan / Audio订阅/视频包).
- Inactive: background `{colors.canvas}`, text `{colors.steel}`, border `1px solid {colors.hairline}`, padding `{spacing.xs} {spacing.md}`, rounded `{rounded.full}`.
- 活动:背景 `{colors.primary}`文本中,请输入 `{colors.on-primary}`,没有边框(或匹配黑边框).

### 徽章状态( S)

**`badge-success`** — Pale-green 证实徽章("Available","Active").
- Background `{colors.success-bg}`, text `{colors.success-text}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-new`** ——珊瑚"NEW"/"活"药,用于新鲜释放.
- Background `{colors.brand-coral}`, text `{colors.on-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-beta`** — Pale-blue "BETA"/信息药.
- Background `{colors.brand-blue-200}`, text `{colors.brand-blue-deep}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-code`** ——内置代码式芯片("Code","API").
- Background `{colors.brand-blue-200}`, text `{colors.brand-blue-deep}`, typography `{typography.caption-bold}`, rounded `{rounded.sm}`, padding `2px 6px`.

**`promo-banner`** — Sticky black promotional strip ABOVE the top nav ("Invite & Earn — Rewards for Both!").
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.body-sm-medium}`, padding `{spacing.sm} {spacing.lg}`. Carries one-line copy with optional inline link.

### 数据表格

**`data-table`** ——文献模型比较表.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, border `1px solid {colors.hairline}`.

**`data-table-header`** ——数据表顶部头行.
- Background `{colors.surface}`, text `{colors.steel}`, typography `{typography.caption-bold}`, padding `{spacing.sm} {spacing.md}`.

**`data-table-row`** - 身体排队。
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm}`, padding `{spacing.md}`, bottom border `1px solid {colors.hairline-soft}`.

### 导航

**顶端导航( 市场营销)** — Sticky 白色条形,带有标志,链接列表,以及右侧的CTA.
- Background `{colors.canvas}`, height ~64px, bottom border `1px solid {colors.hairline-soft}`.
- 左边 : MiniMax 单词标记+水平链接列表(Models,Product,API,Company).
- 右:黑溢"Contact Us"+简写-溢出"Login".

**顶端导航(文档/格式)** ——中线压缩导航. search-pill 和右侧账户/升级的CTA。
- Background `{colors.canvas}`, height ~56px, with search-pill at center and "Documentation / Account / Subscribe" links + black-pill "Sign Up" right.

**`sidebar-nav-item`** + **`sidebar-nav-item-active`** ——文献左侧栏链接条目.
- Inactive: background transparent, text `{colors.charcoal}`, typography `{typography.body-sm}`, rounded `{rounded.sm}`, padding `{spacing.xs} {spacing.md}`.
- 活动:背景 `{colors.surface}`文本中,请输入 `{colors.ink}`,打印 `{typography.body-sm-medium}`.

**`doc-toc-item`** ——右排目录链接.
- Background transparent, text `{colors.steel}`, typography `{typography.body-sm}`, padding `{spacing.xs} 0`. Active item color shifts to `{colors.ink}`.

### 标志性组件

**`hero-band-marketing`** — Centered hero with massive 80px display + dual-CTA pair.
- Layout: centered headline in `{typography.hero-display}` ({colors.ink}), centered subtitle in `{typography.subtitle}` ({colors.steel}), centered button row (`button-primary` + `button-secondary`).

**`product-matrix-grid`** — 4- 充满活力的梯度产品卡的列横向卷轴(主页"Full-Stack Model Matrix").
- Each tile uses one of the `product-card-*` variants (coral, magenta, blue, purple, photo).
- 名片标题在 `{typography.display-lg}` (M2.7 单词标记)或 `{typography.heading-lg}` (音乐) 2.6).
- 词条下方: 薄标签线 `{typography.body-sm}` 80% 白色不透明。
- 右上角可选徽章 : `badge-new`.
- Card heights are uniform (~360–400px); the row scrolls horizontally on mobile.

**`ai-product-matrix`** — 4- 生机勃勃的矩阵下方白色产品瓦片的柱状网格(Agent / Haluo Video / Audio / Video).
- Each tile is `ai-product-tile` chrome.
- 顶部 : 100px- 全部插图区(往往为线条艺术图标或 3D标记。
- 标题如下: `{typography.card-title}`,说明 `{typography.body-sm}` `{colors.steel}`.

**`docs-prose-block`** ——文件主要内容领域.
- Max-width ~720px,以中心为中心。 `{typography.body-md}` `{colors.charcoal}` line-height 1.6.
- 内置代码在 `{typography.body-md}` monospace 倒置为 `{colors.surface}` 和背景 `{rounded.xs}` 转角

**`models-comparison-table`** ——文档表比较模型大小和特征.
- 用途 `data-table` 界面框架。每行都带有一个模型名称(链接, in `{colors.ink}` body-sm-medium),一个描述栏(`{colors.charcoal}`),并设有特征弹出列表栏。

**`testimonial-stat-row`** —— Stats 条状物 (").214,000+企业客户端和开发者”,“0+ 国家服务)。
- 水平行数 4 统计单元格,每个单元格中有大量数字 `{typography.heading-lg}` `{colors.ink}` 和下面的标签 `{typography.body-sm}` `{colors.steel}`.

**`footer-region`** —— 深黑坎岩多柱脚.
- Background `{colors.footer-bg}`, padding `{spacing.section} {spacing.xxl}`.
- 顶行 : MiniMax 词标("与每个人的智慧"标签线)和社会图标(X,Twitter, GitHub) , 编.
- 体 : 4-栏目链接网格(研究/产品/API/公司/新闻).
- 区头在 `{typography.body-sm-medium}` `{colors.on-dark}`.

**`footer-link`** ——页脚栏内个别链接条目.
- Background transparent, text `{colors.muted}`, typography `{typography.body-sm}`, padding `{spacing.xxs} 0`. Active/visited states do not change color — only opacity shifts on activation.


## 设计建议与禁忌

### 建议做法
- 使用 `{colors.primary}` (black)作为主导CTA——它是该品牌最可识别的互动元素.
- 储备产品品牌颜色(`{colors.brand-coral}`, `{colors.brand-magenta}`, `{colors.brand-blue}`, `{colors.brand-purple}`仅供产品识别时刻使用——绝不供一般按钮或文本使用。
- Pair `{rounded.hero}` (32px) gradient cards with `{rounded.xl}` (16px) white cards in the same viewport — the radius contrast is the visual signature.
- 应用 `{rounded.full}` 每一个按钮,每一个胶囊形,每一个徽章。
- Use `{typography.hero-display}` (80px) with -2px letter-spacing for hero displays — never compromise the leading or letter-spacing.
- Treat each model/product line as a distinct color identity. M2.7 is coral, Music is magenta, Hailuo is blue. These are brand assignments, not free choices.

### 应避免的做法
- Don't use brand-coral or brand-magenta on body text or large surfaces — they lose meaning when overused.
- Don't soften corners on buttons (anything less than `{rounded.full}`); the pill is a brand signature.
- Don't introduce a second display typeface; DM Sans handles every role.
- Don't reduce hero leading below 1.10 — the brand needs that breathing room on the 80px display.
- Don't apply heavy shadows on white cards; flat-with-borders is the documentation default.
- Don't put gradient backgrounds on standard buttons; gradients are reserved for product-card identity moments.


## 响应式布局

### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero drops to 40px. Pill nav collapses to hamburger. Product matrix horizontal-scroll. Footer 1-column accordion. |
| Mobile (large) | 480 – 767px | Same as small but AI product matrix renders 2-up. |
| 平板 | 768 – 1023px | 2- AI产品矩阵栏 Pill-tab 导航返回。 文档侧边栏崩溃到抽屉 。 |
| 桌面 | 1024 – 1279px | 满 4- 柱式产品矩阵; 3-柱形的docs网格(侧边栏/正体/TOC). |
| 宽桌面 | ≥ 1280px | 更大的首屏沟,更大的产品摄影, fixed 220px 侧边栏。 |

### 触控区域
- 胶囊形按钮渲染到 38–40px 有效高度—— 颠峰至 44px 移动通过垫装操作。
- Circular 图标按钮 : 36×36px 桌面 – 数据 44×44px 手机上,我刚从电话里找到的
- 格式输入提供时间 40px 高度; 凸起到 44px 手机上,我刚从电话里找到的
- 侧边栏导航项渲染于 ~32px 高的, 颠倒到 44px 移动抽屉里

### 窄屏布局调整
- **宣传旗** 保持全宽; 崩溃为单行 。 < 480px 与短调。
- **顶端导航** 下级 1024px 崩溃到汉堡; 水平链接移动到抽屉中。
- **Documentation grid**: 3-column desktop → sidebar-drawer at < 1024px → single-column with collapsible sidebar at < 768px.
- **产品矩阵**: 4-列式桌面 ~ 水平滚动 at < 1024px (木马式的带扣点).
- **AI 产品矩阵**: 4-栏目 – 2- 柱子在平板上 – 。 1- 移动栏杆。
- **首屏打字技术**: `{typography.hero-display}` (80px) → 56px 时 间 < 1024px → 40px 时 间 < 768px → 32px 时 间 < 480px.
- **点条**: 4-栏目 – 2×2 时 间 < 768px → 1- 栏目在 < 480px.

### 图片适配
- 产品卡图像使用带有内部梯度叠加的图片内容;懒惰的负载在折叠下方.
- AI产品瓦片插图基于SVG;在所有断点上保持简洁.
- Avatar imagery in testimonials uses 1:1 aspect ratio with `{rounded.full}` masking.


## 迭代指南

1. 一次关注一个组件,系统内部一致性很高.
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component-name}-pressed`, `{rounded.full}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后,以获取断裂的反差和对比问题。
4. 添加新的变体作为单独的 `components:` 条目( 4)`-pressed`, `-disabled`, `-active`).
5. 默认为 `{typography.body-md}` 身体和身体的 `{typography.subtitle}` 标题下移 `hero-display → display-lg → heading-lg → heading-md → heading-sm`.
6. 保持品牌颜色(口服、红酒、蓝色、紫色) product-card 身份。如果一个品牌颜色出现在标准按钮或通用表面,请询问它是否赢得了该表面。
7. 胶囊形形状的按钮( $`{rounded.full}`总是; 平方按钮在此语言中表示“ 第三方部件 ” 。


## 已知缺口

- 特定的暗模符值(canvas,表面,墨水,细边线)在这些页面上不浮出水面;品牌尚未运出已公布的暗模盘.
- Animation/transition timings are not extracted; recommend 150–200ms ease for hover/focus state transitions.
- 形式验证成功状态没有被明确记录到默认之外——按照标准绿色边界+成功徽章模式执行.
- 代码语法在文件内突出调色板没有正式化;文档样本以系统默认显示 monospace 和最小的颜色。

## 设计词元原值

MiniMax 以突出的双重性——大胆的黑溢CTA和用于营销的尖锐白色页面底色——呈现出自己作为高价的AI基础设施品牌,配以充满活力的梯度产品卡(橙红色,紫色,紫色,蓝色),将每个模型的释放转化为独特的视觉特征. DM Sans 在所有表面,使用超大尺寸 80px 首屏展示,主要动作以深黑胶囊形为主, 层内内容密度通过 3覆盖范围跨越营销主页、模型展示页、开发者文档和平台定价表面。

```yaml
---
version: alpha
name: MiniMax-design-analysis
description: MiniMax presents itself as a premium AI infrastructure brand through a striking duality — bold black-pill CTAs and stark white canvas for marketing, paired with vibrant gradient product cards (orange-red, magenta-pink, purple, blue) that turn each model release into a distinctive visual identity. The system uses DM Sans across all surfaces, employs an oversized 80px hero display, anchors major actions in deep near-black pills, and layers content density via a 3-column documentation grid with sidebar nav, prose body, and TOC. Coverage spans the marketing homepage, model showcase pages, developer documentation, and platform pricing surfaces.

colors:
  primary: "#0a0a0a"
  on-primary: "#ffffff"
  primary-soft: "#181e25"
  brand-coral: "#ff5530"
  brand-magenta: "#ea5ec1"
  brand-blue: "#1456f0"
  brand-blue-mid: "#3b82f6"
  brand-blue-deep: "#1d4ed8"
  brand-blue-700: "#17437d"
  brand-cyan: "#3daeff"
  brand-blue-200: "#bfdbfe"
  brand-purple: "#a855f7"
  canvas: "#ffffff"
  surface: "#f7f8fa"
  surface-soft: "#f2f3f5"
  hairline: "#e5e7eb"
  hairline-soft: "#eaecf0"
  ink: "#0a0a0a"
  ink-strong: "#000000"
  charcoal: "#222222"
  slate: "#45515e"
  steel: "#5f5f5f"
  stone: "#8e8e93"
  muted: "#a8aab2"
  success-bg: "#e8ffea"
  success-text: "#1ba673"
  on-dark: "#ffffff"
  footer-bg: "#0a0a0a"

typography:
  hero-display:
    fontFamily: DM Sans
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -2px
  display-lg:
    fontFamily: DM Sans
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -1.5px
  heading-lg:
    fontFamily: DM Sans
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -1px
  heading-md:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.5px
  heading-sm:
    fontFamily: DM Sans
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.30
  card-title:
    fontFamily: DM Sans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.40
  subtitle:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.50
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
  body-md-bold:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.50
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  body-sm-medium:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.50
  caption:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.70
  caption-bold:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.50
  micro:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.50
  button-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.40

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 20px
  xxxl: 24px
  hero: 32px
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
  section-lg: 80px
  hero: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "11px 24px"
  button-primary-pressed:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "11px 24px"
    border: "1px solid {colors.ink}"
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "11px 24px"
    border: "1px solid {colors.hairline}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    padding: "8px 0"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
    border: "1px solid {colors.hairline}"
  product-card-coral:
    backgroundColor: "{colors.brand-coral}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-magenta:
    backgroundColor: "{colors.brand-magenta}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-blue:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-purple:
    backgroundColor: "{colors.brand-purple}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-photo:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  card-feature:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
  card-recommendation:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
  promo-cta-card:
    backgroundColor: "{colors.brand-coral}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.section}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"
    height: 40px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.brand-blue-deep}"
  text-input-error:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "1px solid #d45656"
  search-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
    height: 36px
    border: "1px solid {colors.hairline}"
  segmented-tab:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.button-md}"
    rounded: "0"
    padding: "{spacing.md} {spacing.lg}"
    border: "0 0 2px transparent solid"
  segmented-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    border: "0 0 2px {colors.ink} solid"
  pill-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.hairline}"
  pill-tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.primary}"
  badge-success:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success-text}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-new:
    backgroundColor: "{colors.brand-coral}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-beta:
    backgroundColor: "{colors.brand-blue-200}"
    textColor: "{colors.brand-blue-deep}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-code:
    backgroundColor: "{colors.brand-blue-200}"
    textColor: "{colors.brand-blue-deep}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  promo-banner:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.lg}"
  data-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline}"
  data-table-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.caption-bold}"
    padding: "{spacing.sm} {spacing.md}"
  data-table-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md}"
    border: "0 0 1px {colors.hairline-soft} solid"
  sidebar-nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  sidebar-nav-item-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
  doc-toc-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} 0"
  ai-product-tile:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  footer-region:
    backgroundColor: "{colors.footer-bg}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
  footer-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
  hero-band-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.hero-display}"
    rounded: "{rounded.lg}"
    padding: "{spacing.hero}"
  product-matrix-grid:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  ai-product-matrix:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  docs-prose-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.charcoal}"
    typography: "{typography.body-md}"
    padding: "{spacing.xxl}"
  models-comparison-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline}"
  testimonial-stat-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-lg}"
    padding: "{spacing.xl}"
---
```
