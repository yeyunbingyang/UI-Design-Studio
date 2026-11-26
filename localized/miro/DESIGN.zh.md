# Miro · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Miro 以AI为动力的视觉工作空间,通过自信的、稍有乐趣的品牌声音。主页打开时,有一个小金丝雀-黄金丝雀支撑的赤白布。 Miro 左上方的文字标记,黑字主 CTA "免费开始", 和第二部"制作演示"的纲要胶囊形——然后戏剧性地真实的米罗板模拟图像(sticky 图片、卡班、心灵图)带有视觉字重。在更深的表面,系统打开:贴纸特征卡(玫瑰、泰尔、珊瑚、黄色)与活白色板产品的实际粘贴色调色板相呼应,客户故事卡重复使用这些色调来区分品牌。

Roobert PRO — Miro's custom display face — anchors every typographic surface, from the 80px hero display down to 11px micro labels. The face's slightly rounded, geometric character pairs naturally with the playful product photography and the friendly product positioning. Black-pill primary buttons (`{rounded.full}`) dominate marketing CTAs; the brand color, signature canary yellow ({colors.brand-yellow}), is reserved for the wordmark, top promo banners, and "yellow tag" feature pills — never as a primary CTA. The 4-tier pricing comparison (Free / Starter / Business / Enterprise) leads into the densest surface in the system: a feature comparison table that runs ~80 rows deep across multiple section dividers.

**关键特征 :**
- 斯塔克白页面底色+ Miro 以金丝雀黄色标注字号({colors.brand-yellow})作为可辨认的开封签字
- 黑泄漏初级CTA({colors.primary} + `{rounded.full}`)作为主要的交互要素
- Pastel feature cards (yellow, rose, coral, teal, mint) that echo the actual sticky-note palette
- Roobert PRO 跨越每个UI表面; 几何形状, 略微四舍五入的字符
- 真实 Miro- 用作图案的板块模拟图像
- 4- 一级定价卡网+密集特性比较表
- 大规模黑页脚( M){colors.footer-bg}) 带有多栏链接+应用商店徽章


## 配色

> Source pages: miro.com/ (homepage), /pricing/ (4-tier comparison), /products/ai-workflows/ (AI product), /agile/ (vertical landing), /customers/ (story directory). Token coverage was identical across all five pages.

### 品牌和 强调色
- **Miro 黄色** ({colors.brand-yellow}:品牌可识别金丝雀黄色——字标颜色,上标宣传旗,"黄牌"丸.
- **黄深** ({colors.brand-yellow-deep}: 悬浮状态和突出度的变种变暗
- **黄光** ({colors.yellow-light}:标签芯片的淡黄色背景锡
- **黄暗** ({colors.yellow-dark}: 黄塔格文字颜色( 暗橄榄) 用于芯片前景
- **蓝蓝** ({colors.brand-blue}: 行动蓝色,用于内含链接和特色定价级边界
- **Blue Pressed** ({colors.blue-pressed}): Pressed-state blue
- **布兰德·珊瑚** ({colors.brand-coral}: 珊瑚强调色用于暖暖的呼喊
- **珊瑚光** ({colors.coral-light}: 用于特征卡背景的灰珊瑚
- **珊瑚暗色( 暗色)** ({colors.coral-dark}:珊瑚塔格文字颜色(深酒)
- **布兰德·罗斯** ({colors.brand-rose}: 特性卡变体的软玫瑰平克
- **品牌提尔** ({colors.brand-teal}: 品牌茶叶
- **提尔光** ({colors.teal-light}: 特征卡背景的淡色 Teal
- **摩斯暗色( 暗色)** ({colors.moss-dark}:深色绿色文字颜色
- **品牌粉红** ({colors.brand-pink}: 粉色淡粉色表示软调用
- **橙色的光线** ({colors.brand-orange-light}: 特征卡背景的软橙色

### 表面
- **Canvas White** ({colors.canvas}): Page background and primary card surface
- **表面** ({colors.surface}: 细小的一节背景, search-pill 休息时间
- **表面软** ({colors.surface-soft}: 静静分科
- **表面黄色** ({colors.surface-yellow}: 标签芯片的淡黄色丁丁表面
- **表面定价特征** ({colors.surface-pricing-featured}: 彩色薰衣草,用于突出定价等级
- **细边线** ({colors.hairline}): 1px 边界和主要分隔
- **柔软的细边线** ({colors.hairline-soft}: 静点的桌排分隔器
- **发条坚固** ({colors.hairline-strong}: 强壮 1px 输入边框

### 文本
- **墨水深处** ({colors.ink-deep}: 轻便特性卡上的标题
- **墨水( 墨水 )** ({colors.ink}:主要头条和正文
- **木炭矿** ({colors.charcoal}: 机构重点案文
- **标 题** ({colors.slate}: 次级文本,元数据
- **Steel** ({colors.steel}): Tertiary text, footer links
- **石头** ({colors.stone}: 说明, 变音标签
- **静音** ({colors.muted}: 已禁用的标签、输入占位符
- **黑暗时** ({colors.on-dark}: 暗面的白文本
- **黑暗的静音** ({colors.on-dark-muted}: 暗色上减少不透明白色

### 语义
- **成功成绩** ({colors.success-accent}:确认/成功指标绿色
- **品牌红** ({colors.brand-red}: 错误背景的软红色
- **品牌红色暗色** ({colors.brand-red-dark}: 错误边框的更强烈红色


## 字体排版

### 字体家族
**Roobert PRO** (小学): Miro定制几何 sans-serif 类型面。从超大小到每个UI表面使用 80px 显示为首屏 11px 微标签 面部具有略微圆形,友好的特征,与品牌的游戏产品定位相匹配. Fallbacks: Noto Sans,,. -apple-system, BlinkMacSystemFont, sans-serif.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 80px | 500 | 1.05 | -2px | 营销首屏("看看团队如何出色地完成) Miro") |
| `{typography.display-lg}` | 60px | 500 | 1.10 | -1.5px | Major section openers |
| `{typography.heading-1}` | 48px | 500 | 1.15 | -1px | 页面级头条 |
| `{typography.heading-2}` | 36px | 500 | 1.20 | -0.5px | 分节标题 |
| `{typography.heading-3}` | 28px | 500 | 1.25 | 0 | 牌名标题 |
| `{typography.heading-4}` | 22px | 500 | 1.30 | 0 | 特征牌标题 |
| `{typography.heading-5}` | 18px | 500 | 1.40 | 0 | FAQ questions, smaller cards |
| `{typography.subtitle}` | 18px | 400 | 1.50 | 0 | 首屏字幕 |
| `{typography.body-md}` | 16px | 400 | 1.50 | 0 | 主体文本 |
| `{typography.body-md-medium}` | 16px | 500 | 1.50 | 0 | logo 墙壁标签 |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | 二级体,桌细胞 |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | 过滤下拉, 按钮标签 |
| `{typography.caption}` | 13px | 400 | 1.40 | 0 | 帮助文本 |
| `{typography.caption-bold}` | 13px | 600 | 1.40 | 0 | 标签、标签芯片 |
| `{typography.micro}` | 12px | 500 | 1.40 | 0 | Footer microcopy |
| `{typography.micro-uppercase}` | 11px | 600 | 1.40 | 0.5px | Section dividers in tables |
| `{typography.button-md}` | 14px | 500 | 1.30 | 0 | 胶囊形按钮标签 |
| `{typography.stat-display}` | 64px | 500 | 1.10 | -1.5px | "100M+ users" stat callouts |

### 原则
- **紧紧的首屏领头** (1.05)在杂志上创建杂志级显示头条 80px 首屏( 首屏 )
- **负数 letter-spacing 进展** —— 显示大小使用 -2px 改为: -1.5px;小标题放松到 0
- **Stat-display 符号** (64px / 500)用于营销定点电
- **Single weight scale** — 400 (body), 500 (medium emphasis + headings), 600 (badges and uppercase). Roobert PRO does not use 700 in this system.


## 布局

### 间距系统
- **基地单位**: 4px (8px 小学加薪)
- **脚本**: `{spacing.xxs}` (4px) · `{spacing.xs}` (8px) · `{spacing.sm}` (12px) · `{spacing.md}` (16px) · `{spacing.lg}` (20px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.xxxl}` (40px) · `{spacing.section-sm}` (48px) · `{spacing.section}` (64px) · `{spacing.section-lg}` (96px) · `{spacing.hero}` (120px)
- **节奏**: 销售页面使用 `{spacing.section-lg}` (96px),价格比较收紧到 `{spacing.section}` (64px); 客户故事堆栈使用 `{spacing.xxl}` (32px)
- **Card internal padding**: `{spacing.xl}` (24px) for compact cards; `{spacing.xxl}` (32px) for feature panels

### 网格容器( C)
- 营销页面使用情况 1280px max-width 与 32px 沟槽
- 定价页面 4- 桌面上的一级牌行( 自由/ 启动 / 商业/ 企业)
- 客户故事页面使用 2- 带过滤器的列网
- AI 工作流程页面使用 2- 柱子首屏,然后, 3- 上层特性网格

### 白空间哲学
Marketing surfaces give content generous breathing room — `{spacing.hero}` (120px) hero padding gives the small wordmark room to breathe. Pricing surfaces tighten dramatically.


## 层次与阴影

该系统主要运行平坦,在首屏模型上具有战略深度.

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 (flat) | No shadow; `{colors.hairline-soft}` border | Default cards, table rows, form inputs |
| 1 (声) | `rgba(5, 0, 56, 0.04) 0px 1px 2px 0px` | 细细的悬浮瓦片 |
| 2 (卡) 发牌 | `rgba(5, 0, 56, 0.06) 0px 4px 12px 0px` | 标准特性卡 |
| 3 (嘲笑) 说吧,我... | `rgba(5, 0, 56, 0.08) 0px 12px 32px -4px` | 首屏白板模型框架 |
| 4 (模式) | `rgba(5, 0, 56, 0.12) 0px 16px 48px -8px` | 潮汐、降水 |

### 装饰性深度
- 大气层深度在 Miro首屏来自活品板模拟插图—— sticky 以 Z 字串排列, 白板框后面的颜色块
- 贴纸特征卡通过饱和背景颜色携带自己的视觉字重
- 客户-故事卡片层深图片内容, 带有覆盖的片段


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, micro-controls |
| `{rounded.sm}` | 6px | 贴现徽章 |
| `{rounded.md}` | 8px | 投入, search-pill |
| `{rounded.lg}` | 12px | 标准卡,桌柜 |
| `{rounded.xl}` | 16px | 定价卡、特性板 |
| `{rounded.xxl}` | 20px | 更大的特性卡 |
| `{rounded.xxxl}` | 28px | 贴纸特色卡(黄,玫瑰,珊瑚,茶叶) |
| `{rounded.feature}` | 32px | 首屏CTA旗下卡片 |
| `{rounded.full}` | 9999px | All buttons, pill tabs, badges |

### 摄影几何
- Real Miro board mockups render with `{rounded.xl}` (16px) corners and a subtle drop shadow
- Customer story cards use `{rounded.xxxl}` (28px) corners with full-bleed photography
- 使用模板卡缩略图 `{rounded.xl}` (16px) 图片内容
- 客户标识墙以一致方式显示内含的字签 100px 高度( E)


## 组件

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### 按钮

**`button-primary`** ——黑丸主CTA,主动作("开始自由").
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.full}`.
- Pressed state `button-primary-pressed` lifts to `{colors.charcoal}`.
- 已禁用状态 `button-primary-disabled` 使用情况 `{colors.hairline}` 和背景 `{colors.muted}` 文本中选择的文本。

**`button-yellow`** — Brand-yellow 胶囊形,为品牌强调的时刻。
- Background `{colors.brand-yellow}`, text `{colors.primary}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.full}`.

**`button-blue`** — Brand-blue 内线动作胶囊形
- Background `{colors.brand-blue}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.full}`.

**`button-secondary`** ——二级动作的纲要药("制作演示").
- Background transparent, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.full}`.

**`button-on-dark`** ——白丸,用于暗CTA旗.
- Background `{colors.on-dark}`, text `{colors.primary}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.full}`.

**`button-ghost`** ——静静的长方形鬼按键.
- Background transparent, text `{colors.ink}`, typography `{typography.button-md}`, padding `8px 12px`, rounded `{rounded.md}`.

**`button-link`** ——内含文本链接.
- Background transparent, text `{colors.brand-blue}`, typography `{typography.body-sm-medium}`, padding `0`.

**`button-icon-circular`** — 36×36px circular 工具按钮。
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.full}`.

### 纸牌和集装箱

**`card-base`** ——标准内容卡.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-soft}`.

**`card-feature`** 白色特征卡,较大 28px 转角
- Background `{colors.canvas}`, rounded `{rounded.xxxl}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline-soft}`.

**`card-feature-yellow`** ——帕斯特尔黄特色卡.
- Background `{colors.brand-yellow}`, text `{colors.primary}`, rounded `{rounded.xxxl}`, padding `{spacing.xxl}`.

**`card-feature-coral`** ——帕斯特尔-科罗拉特征卡变型.
- Background `{colors.coral-light}`, text `{colors.primary}`, rounded `{rounded.xxxl}`, padding `{spacing.xxl}`.

**`card-feature-teal`** ——帕斯泰尔特征卡变型.
- Background `{colors.teal-light}`, text `{colors.primary}`, rounded `{rounded.xxxl}`, padding `{spacing.xxl}`.

**`card-feature-rose`** ——帕斯特尔-罗斯特色卡变型.
- Background `{colors.rose-light}`, text `{colors.primary}`, rounded `{rounded.xxxl}`, padding `{spacing.xxl}`.

**`card-customer-story`** -客户故事卡
- Background `{colors.canvas}`, rounded `{rounded.xxxl}`, padding `0` (image fills the card), border `1px solid {colors.hairline-soft}`.

**`card-stat`** - 用于 " 的Stat-row单元格100M+用户".
- Background transparent, text `{colors.ink}`, typography `{typography.stat-display}`, padding `{spacing.lg}`.

**`pricing-card`** ——标准定价等级卡.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline}`.

**`pricing-card-featured`** ——特色定价等级(商业——薰衣草背景+蓝色边框).
- Background `{colors.surface-pricing-featured}`, rounded `{rounded.xl}`, padding `{spacing.xxl}`, border `2px solid {colors.brand-blue}`.

**`pricing-card-enterprise`** ——暗黑坎瓦斯企业级卡.
- Background `{colors.primary}`, text `{colors.on-primary}`, rounded `{rounded.xl}`, padding `{spacing.xxl}`.

### 输入表单( F)

**`text-input`** ——标准文本字段.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 44px.

**`text-input-focused`** ——启动状态.
- 边框切换到 `2px solid {colors.brand-blue}`.

**`search-pill`** - 搜索栏。
- Background `{colors.surface}`, text `{colors.steel}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, height 40px, border `1px solid {colors.hairline}`.

**`filter-dropdown`** ——胶囊形形滤波器下垂("公司使用"/"工业"/"使用案例").
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm-medium}`, rounded `{rounded.full}`, padding `{spacing.xs} {spacing.md}`, border `1px solid {colors.hairline-strong}`.

### 标签

**`pill-tab`** + **`pill-tab-active`** ——胶囊形式的制表导航.
- Inactive: background `{colors.canvas}`, text `{colors.steel}`, border `1px solid {colors.hairline}`, padding `{spacing.xs} {spacing.md}`, rounded `{rounded.full}`.
- 活动:背景 `{colors.primary}`文本中,请输入 `{colors.on-primary}`.

**`toggle-monthly-yearly`** 双州避孕药切换(每月/每年定价)。
- Background `{colors.surface}`, rounded `{rounded.full}`, padding `4px`.

### 徽章状态( S)

**`badge-promo`** ——黄宣传旗徽.
- Background `{colors.brand-yellow}`, text `{colors.primary}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-tag-yellow`** ——软黄色特性标记芯片(AI Workflows页面上的"黄色"标记).
- Background `{colors.surface-yellow}`, text `{colors.yellow-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-tag-purple`** ——拉芬德特性标记芯片("AI代理"标记).
- Background `{colors.surface-pricing-featured}`, text `{colors.brand-blue}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-tag-coral`** ——珊瑚特征标记芯片变种.
- Background `{colors.coral-light}`, text `{colors.coral-dark}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-success`** ——绿色成功指标.
- Background `{colors.success-accent}`, text `{colors.on-primary}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.

**`badge-discount`** ——黄长方形减价药("救"). 15%").
- Background `{colors.brand-yellow}`, text `{colors.primary}`, typography `{typography.caption-bold}`, rounded `{rounded.sm}`, padding `2px 6px`.

**`promo-banner`** — Sticky 黑色的促销带 ABOVE顶端导航。
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.body-sm-medium}`, padding `{spacing.sm} {spacing.md}`. Carries inline yellow "GET YOUR SPOT" pill.

### 表格

**`comparison-table`** ——定价特征比较表.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, border `1px solid {colors.hairline}`.

**`comparison-row`** ——个人特色栏目.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.lg}`, bottom border `1px solid {colors.hairline-soft}`.

### Documentation Components

**`whiteboard-mockup`** 实际 Miro- 机身UI作为特写插图
- Background `{colors.canvas}`, rounded `{rounded.xl}`, border `1px solid {colors.hairline-soft}`, shadow `rgba(5, 0, 56, 0.08) 0px 12px 32px -4px`.

**`template-card`** ——模板缩略图卡.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.md}`, border `1px solid {colors.hairline}`.

**`industry-tile`** ——工业-纵向瓦片.
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-soft}`.

**`faq-accordion-item`** - 财务问题面板项目。
- Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.xl}`, bottom border `1px solid {colors.hairline}`.

**`logo-wall-item`** ——客户标识文字标记单元格.
- Background transparent, text `{colors.steel}`, typography `{typography.body-md-medium}`, padding `{spacing.lg}`.

**`capterra-badge`** ——在页脚上评议/评分徽章.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.caption}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, border `1px solid {colors.hairline}`.

**`app-store-badge`** ——App商店/谷歌游戏下载胶囊形.
- Background `{colors.canvas}`, text `{colors.primary}`, typography `{typography.caption-bold}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`.

### 导航

**顶端导航( 市场营销)** — Sticky 白色条形,黄色 Miro 单词标记+水平链接+右侧 CTA.
- Background `{colors.canvas}`, height ~64px.
- 左侧:黄色方形 Miro 单词标记+水平链接列表(Production, Solutions,Resources).
- Right: "Login / Pricing / Contact sales" links + black-pill "Get started free".

### 签名组件

**`hero-band-marketing`** - 营销首屏乐队。
- Background `{colors.canvas}`, padding `{spacing.hero}`.
- Layout: centered headline in `{typography.hero-display}`, centered subtitle, centered button row, then whiteboard mockup illustration below.

**`cta-banner-dark`** —— 功能页底部的暗CTA旗.
- Background `{colors.primary}`, text `{colors.on-primary}`, rounded `{rounded.feature}`, padding `{spacing.section}`. Centered headline + subtitle + `button-on-dark` "Get started free".

**`footer-region`** ——大规模多栏暗足.
- Background `{colors.footer-bg}`, padding `{spacing.section} {spacing.xxl}`.
- 6-栏链接网格(生产/解决方案/工具/资源/公司/计划与定价)。
- 节标题 `{typography.body-md-medium}` `{colors.on-dark}`.

**`footer-link`** ——页脚中的个人链接.
- Background transparent, text `{colors.on-dark-muted}`, typography `{typography.body-sm}`, padding `{spacing.xxs} 0`.


## 设计建议与禁忌

### 执行
- 准备金 `{colors.brand-yellow}` 用于文字标记、顶端宣传旗和“黄色标签”芯片
- 使用 `{colors.primary}` (黑色)作为所有表面的主要CTA
- 同一景点的白面卡(黄色、玫瑰、珊瑚、泰尔)
- 应用 `{rounded.full}` 每一个按钮,每个胶囊形,每个状态徽章
- Apply `{rounded.xxxl}` (28px) to pastel feature cards
- 使用真实 Miro- 板模型作为特征插图
- 维护 Roobert PRO 跨越每个UI表面

### Don't
- Don't use `{colors.brand-yellow}` on standard CTAs or large background surfaces
- 黄牌和品牌面条之外不要增加强调色颜色
- Don't soften corners on buttons; the pill is a brand signature
- Don't reduce hero leading below 1.05
- 平面文件卡上不要用重阴影; 保留白板模型的高度
- Don't use stock photography — show the live product board UI


## 响应式规则

### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero scales to 36px. Pill nav collapses to hamburger. Pricing tiers stack 1-up. |
| Mobile (large) | 480 – 767px | Feature tiles 2-up. Hero scales to 48px. |
| 平板 | 768 – 1023px | 2- 列的特征网格。 Pill-tab 导航返回。 |
| 桌面 | 1024 – 1279px | 4- 等级定价卡行。客户故事网格 2- 上,首屏们, 64px. |
| 宽桌面 | ≥ 1280px | 完全首屏的介绍, 80px 首屏的显示。 |

### 触控区域
- 胶囊形按钮渲染到 40–44px 有效高度——WCAG AAA层
- Circular 图标按钮 : 36×36px 桌面 – 数据 44×44px 移动
- 格式输入提供时间 44px 高度( E)
- 过滤器滴入渲染到 ~36px 高的, 颠倒到 44px 移动

### 折叠战略
- **宣传旗** 保持全宽; 切换到 < 480px
- **顶端导航** 下级 1024px 倒塌到汉堡
- **首屏乐队**: 2-柱子首屏崩溃 堆积在 < 1024px
- **定价比较**: 4-柱状层次 – 2-柱状石板 - 柱状石板 - 柱状石板 1-栏移动;比较表变成水平滚动
- **Customer story grid**: 2-up → 1-up at < 768px
- **首屏打字技术**: 80px → 60px 平板电脑 48px 移动大号 ∗_ 36px 移动小号
- **Footer**: 6-column desktop → 3-column tablet → 2-column mobile → accordion at small mobile

### 图像行为
- 白板模型保持宽度比; 懒惰地装入折叠以下
- 客户故事摄影用途 16:9 比例,含全血比例
- logo 墙以一致方式显示字标记 100px 高度( E)


## 迭代指南

1. 一次集中关注一个部分
2. 直接引用组件名称和符号
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后
4. 添加新的变体作为单独的 `components:` 条目
5. 默认为 `{typography.body-md}` 身体和身体的 `{typography.subtitle}` 重点
6. 保留 `{colors.brand-yellow}` 仅限于文字标记、宣传旗和黄塔芯片
7. 胶囊形形状的按钮( $`{rounded.full}`总是
8. 显示产品时,使用真实的 Miro- 带有粘贴符号的彩色图案的板块模型


## 已知缺口

- Specific dark-mode token values not surfaced
- Animation/transition timings not extracted; recommend 150–200ms ease
- 格式验证成功状态未明确记录到默认值之后
- Sticky 白板产品内部的彩色线条比营销表面的含量要丰富

## 设计词元原值

Miro presents itself as the AI-powered visual workspace through a confident, almost playful brand voice — anchored by its signature canary yellow ({colors.brand-yellow}) wordmark over white canvas, broken open by colorful pastel feature tints (rose, teal, coral, orange, mint) that echo the actual sticky-note color palette used on the live whiteboard. Black-pill primary buttons dominate marketing, real Miro-board mockups serve as feature illustrations, and a 4-tier pricing grid leads into a dense comparison table. Roobert PRO carries display headlines; the system supports homepage, pricing, AI Workflows product page, agile vertical, and customer stories surfaces.

```yaml
---
version: alpha
name: Miro-design-analysis
description: Miro presents itself as the AI-powered visual workspace through a confident, almost playful brand voice — anchored by its signature canary yellow ({colors.brand-yellow}) wordmark over white canvas, broken open by colorful pastel feature tints (rose, teal, coral, orange, mint) that echo the actual sticky-note color palette used on the live whiteboard. Black-pill primary buttons dominate marketing, real Miro-board mockups serve as feature illustrations, and a 4-tier pricing grid leads into a dense comparison table. Roobert PRO carries display headlines; the system supports homepage, pricing, AI Workflows product page, agile vertical, and customer stories surfaces.

colors:
  primary: "#1c1c1e"
  on-primary: "#ffffff"
  brand-yellow: "#ffd02f"
  brand-yellow-deep: "#fcb900"
  yellow-light: "#fff4c4"
  yellow-dark: "#746019"
  brand-blue: "#4262ff"
  blue-450: "#5b76fe"
  blue-pressed: "#2a41b6"
  brand-coral: "#ff9999"
  coral-light: "#ffc6c6"
  coral-dark: "#600000"
  brand-rose: "#ffd8f4"
  rose-light: "#fde0f0"
  brand-pink: "#fde0f0"
  brand-teal: "#0fbcb0"
  teal-light: "#c3faf5"
  moss-dark: "#187574"
  brand-orange-light: "#ffe6cd"
  brand-red: "#fbd4d4"
  brand-red-dark: "#e3c5c5"
  success-accent: "#00b473"
  canvas: "#ffffff"
  surface: "#f7f8fa"
  surface-soft: "#fafbfc"
  surface-yellow: "#fff8e0"
  surface-pricing-featured: "#f5f3ff"
  hairline: "#e0e2e8"
  hairline-soft: "#eef0f3"
  hairline-strong: "#c7cad5"
  ink-deep: "#050038"
  ink: "#1c1c1e"
  charcoal: "#2c2c34"
  slate: "#555a6a"
  steel: "#6b6f7e"
  stone: "#8e91a0"
  muted: "#a5a8b5"
  on-dark: "#ffffff"
  on-dark-muted: "#a5a8b5"
  footer-bg: "#1c1c1e"

typography:
  hero-display:
    fontFamily: Roobert PRO
    fontSize: 80px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -2px
  display-lg:
    fontFamily: Roobert PRO
    fontSize: 60px
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: -1.5px
  heading-1:
    fontFamily: Roobert PRO
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -1px
  heading-2:
    fontFamily: Roobert PRO
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: -0.5px
  heading-3:
    fontFamily: Roobert PRO
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.25
  heading-4:
    fontFamily: Roobert PRO
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.30
  heading-5:
    fontFamily: Roobert PRO
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.40
  subtitle:
    fontFamily: Roobert PRO
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
  body-md:
    fontFamily: Roobert PRO
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
  body-md-medium:
    fontFamily: Roobert PRO
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.50
  body-sm:
    fontFamily: Roobert PRO
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  body-sm-medium:
    fontFamily: Roobert PRO
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.50
  caption:
    fontFamily: Roobert PRO
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
  caption-bold:
    fontFamily: Roobert PRO
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.40
  micro:
    fontFamily: Roobert PRO
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40
  micro-uppercase:
    fontFamily: Roobert PRO
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0.5px
  button-md:
    fontFamily: Roobert PRO
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.30
  stat-display:
    fontFamily: Roobert PRO
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: -1.5px

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 20px
  xxxl: 28px
  feature: 32px
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
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-pressed:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
  button-yellow:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-blue:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    border: "1px solid {colors.hairline-strong}"
  button-on-dark:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.brand-blue}"
    typography: "{typography.body-sm-medium}"
    padding: "0"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
    border: "1px solid {colors.hairline}"
  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-soft}"
  card-feature:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-soft}"
  card-feature-yellow:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxl}"
  card-feature-coral:
    backgroundColor: "{colors.coral-light}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxl}"
  card-feature-teal:
    backgroundColor: "{colors.teal-light}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxl}"
  card-feature-rose:
    backgroundColor: "{colors.rose-light}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxl}"
  card-customer-story:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxxl}"
    padding: "0"
    border: "1px solid {colors.hairline-soft}"
  card-stat:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.stat-display}"
    padding: "{spacing.lg}"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  pricing-card-featured:
    backgroundColor: "{colors.surface-pricing-featured}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
    border: "2px solid {colors.brand-blue}"
  pricing-card-enterprise:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
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
    border: "2px solid {colors.brand-blue}"
  search-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
    height: 40px
    border: "1px solid {colors.hairline}"
  filter-dropdown:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.hairline-strong}"
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
  toggle-monthly-yearly:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "4px"
  badge-promo:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-tag-yellow:
    backgroundColor: "{colors.surface-yellow}"
    textColor: "{colors.yellow-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-tag-purple:
    backgroundColor: "{colors.surface-pricing-featured}"
    textColor: "{colors.brand-blue}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-tag-coral:
    backgroundColor: "{colors.coral-light}"
    textColor: "{colors.coral-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-success:
    backgroundColor: "{colors.success-accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-discount:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  promo-banner:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.md}"
  comparison-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline}"
  comparison-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "{spacing.md} {spacing.lg}"
    border: "0 0 1px {colors.hairline-soft} solid"
  template-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"
  whiteboard-mockup:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "0"
    border: "1px solid {colors.hairline-soft}"
    shadow: "rgba(5, 0, 56, 0.08) 0px 12px 32px -4px"
  faq-accordion-item:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    border: "0 0 1px {colors.hairline} solid"
  logo-wall-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-md-medium}"
    padding: "{spacing.lg}"
  hero-band-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.hero-display}"
    rounded: "0"
    padding: "{spacing.hero}"
  cta-banner-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.feature}"
    padding: "{spacing.section}"
  industry-tile:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-soft}"
  capterra-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"
  footer-region:
    backgroundColor: "{colors.footer-bg}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
  footer-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
  app-store-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
---
```
