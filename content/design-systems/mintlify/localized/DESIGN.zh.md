# Mintlify · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Mintlify positions itself at the intersection of polished marketing presentation and developer-grade documentation density. The home and startups pages open with cinematic atmospheric heroes — soft sky-gradient backdrops with cloud illustrations on the homepage, dark teal-to-mint gradients with a rocket launch on the startups page — that feel more like a SaaS landing aesthetic than a developer tool. Then the deeper surfaces (pricing comparison, live documentation pages) collapse into dense, high-information layouts where Inter body type carries 14–16px copy across long-form prose, syntax-highlighted code blocks, and 3-column documentation grids.

The brand's signature mint green ({colors.brand-green}) appears sparingly but decisively — on the hero "Get started" pill button, the green checkmark icons inside feature lists, the "Featured" pricing tier border, and active state indicators inside docs UI. Black-pill primary buttons dominate the marketing flow; white-on-dark inversions appear on dark hero bands. The signature pairing of Inter (body, headings) with Geist Mono (code blocks, inline references, type signatures) reinforces the developer-tool DNA without requiring a third typeface.

**关键特征 :**
- 大气梯度首屏乐队(主页上为天空蓝至奶油;启动时为泰尔至薄荷)提供电影营销演示
- 签署 Mintlify 薄荷绿色( 3){colors.brand-green}) 专供强调色CTA、活动状态和特性确认
- 黑溢主按钮( Q){colors.primary} + `{rounded.full}`用于销售CTA
- Inter 对所有UI的传教士; Geist Mono 代码块、内置代码和类型/财产签名
- 3- 列文件布局(侧栏/旁文/TOC),密度 14px 用于长窗体开发者读取的正文类型
- 严格控制半径尺度:营销用途 `{rounded.lg}` (12px),使用胶囊形按钮 `{rounded.full}` ——不转角软化之间.
- 振动证照( 微软)`{colors.testimonial-orange}`故意为情感影响打破色彩节奏


## 配色

> Source pages: mintlify.com/ (homepage), /startups (program page), /pricing (comparison), /docs/components/tabs (live documentation). Token coverage was identical across all four pages.

### 品牌色与强调色
- **Mintlify 薄荷** ({colors.brand-green}:签名强调色 – 用于首屏"开始"的避孕药按钮,功能列表中的绿色检查标记,特色定价等级的边框强调色,侧边栏活动指标点.
- **深薄荷** ({colors.brand-green-deep}:按/活化变种薄荷强调色.
- **软薄荷** ({colors.brand-green-soft}: 用于成功状态和确认表面的浅色背景锡.
- **品牌标记** ({colors.brand-tag}:文档标记和参考颜色(用于 `<Tabs>` JSX风格的注释和代码tag芯片.
- **品牌注释** ({colors.brand-annotate}: 内置代码注解绿色(在双斜码注解系统中使用).
- **品牌警告** ({colors.brand-warn}:代码警告突出(过期,谨慎).
- **品牌错误** ({colors.brand-error}:红色用于要求域标签和错误突出显示.
- **证橙** ({colors.testimonial-orange}:暖珊瑚-橙色用于 "Cursor" 证证和暖呼唤表露.

### 界面表面
- **白色页面底色** ({colors.canvas}:主页和卡片背景.
- **暗色画** ({colors.canvas-dark}: 宣传旗,暗反光表面,代码编辑器包装.
- **Surface** ({colors.surface}): Subtle section backgrounds, search-pill rest, code-inline background, sidebar active state.
- **表面软** ({colors.surface-soft}: 静脉部分背景和FAQ手风琴.
- **表面代码** ({colors.surface-code}暗色( 暗色 ) : code-block 包装背景.
- **细边线** ({colors.hairline}): 1px 边界和主要划分者。
- **柔软的细边线** ({colors.hairline-soft}:静音表排行划分符和副段断.

### 首屏大气
- **Hero Sky From / To** ({colors.hero-sky-from}, {colors.hero-sky-to}): Atmospheric sky-blue to soft cream gradient on the homepage hero.
- **Hero Dark From / To** ({colors.hero-dark-from}, {colors.hero-dark-to}): Dark teal to mint gradient on the startups hero.

### 文字颜色
- **墨水( 墨水 )** ({colors.ink}:主要头条和CTA文本.
- **木炭矿** ({colors.charcoal}:正文,正文, code-inline 观前缘.
- **标 题** ({colors.slate}: 次级文本和元数据。
- **钢** ({colors.steel}:第三层文本,表头,侧边栏不活动项目,页脚链接.
- **石头** ({colors.stone}: 说明,两斜线 cursor 颜色,哑巴标签.
- **静音** ({colors.muted}:去强调标签和禁用文本.
- **黑暗时** ({colors.on-dark}: 暗面上的白文本(首屏乐队,代码块,宣传旗).
- **黑暗的静音** ({colors.on-dark-muted}: 减少偏僻度白色用于 code-block 暗处的页眉和元数据。

### 语义色
- 错误音调来源于 `{colors.brand-error}` 用于输入边框、所需域标签和验证消息。


## 字体排版

### 字体族
**Inter** (主语):可变型号优化,可识别。在每一个UI表面使用——正文、标题、导航、按钮标签、标题。倒置: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif.

**Geist Mono** (代码): Monospace 代码块内使用的字型,内置代码引用,类型签名(如. `string`, `number`, `boolean`),以及 API 文档中的财产名称。SF Mono', Menlo, Consolas, 'Geist Mono 倒计时 monospace.

The brand uses no italic variants of either face — emphasis comes from weight (500/600), color shift, or background highlighting (in code references).

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 72px | 600 | 1.05 | -2px | 营销首屏展("智能知识平台"). |
| `{typography.display-lg}` | 56px | 600 | 1.10 | -1.5px | 主要的科开机("情报时代的建设"). |
| `{typography.heading-1}` | 48px | 600 | 1.10 | -1px | 页面头条("按你的条件定价") |
| `{typography.heading-2}` | 36px | 600 | 1.20 | -0.5px | 节头条( "请按 Mintlify 启动程序"). |
| `{typography.heading-3}` | 28px | 600 | 1.25 | 0 | Subsection headers, "Tabs" docs page title |
| `{typography.heading-4}` | 22px | 600 | 1.30 | 0 | Card titles, larger feature headers |
| `{typography.heading-5}` | 18px | 600 | 1.40 | 0 | 较小的特性标题, FAQ 问题标题 |
| `{typography.subtitle}` | 18px | 400 | 1.50 | 0 | 首屏字幕,领头人物 |
| `{typography.body-md}` | 16px | 400 | 1.50 | 0 | 主体文本 |
| `{typography.body-md-medium}` | 16px | 500 | 1.50 | 0 | 机构重点 |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | 二级体、表细胞、导航 |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | 活动侧边栏导航、按钮标签、标签标签 |
| `{typography.caption}` | 13px | 400 | 1.40 | 0 | Helper text, fine print, code-block headers |
| `{typography.caption-bold}` | 13px | 600 | 1.40 | 0 | 标签 |
| `{typography.micro}` | 12px | 500 | 1.40 | 0 | 缩微复制页,标签芯片 |
| `{typography.micro-uppercase}` | 11px | 600 | 1.40 | 0.5px | 侧边栏的页眉, “REQUIRED” 标签 |
| `{typography.button-md}` | 14px | 500 | 1.30 | 0 | 胶囊形按钮标签 |
| `{typography.code-md}` | 14px | 400 | 1.50 | 0 | 代码块内容 |
| `{typography.code-sm}` | 13px | 400 | 1.40 | 0 | 较小的代码, 类型签名 |
| `{typography.code-inline}` | 13px | 500 | 1.30 | 0 | 内置 `<Tabs>` 机构参考文献 |

### 原则
- **紧紧的首屏领头** (1.05)在杂志上创建杂志级显示头条 72px 首屏( 首屏 )
- **负数 letter-spacing** 大小反向的进度——显示大小使用 -2px 改为: -1.5px;小标题放松到 0
- **Documentation-grade body** (1.50 line-height on 14–16px) ensures comfortable long-form reading in dense docs surfaces
- **Inter / Geist Mono 配对** — Inter 其它一切,我都会告诉你 Geist Mono 手术时用于代码参考;两者的对比是品牌的开发者尊重信号
- **Uppercase micro labels** with +0.5px letter-spacing carry sidebar section headers and "REQUIRED" annotation tags


## 布局

### 间距系统
- **基地单位**: 4px (8px 小学加薪)
- **脚本**: `{spacing.xxs}` (4px) · `{spacing.xs}` (8px) · `{spacing.sm}` (12px) · `{spacing.md}` (16px) · `{spacing.lg}` (20px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.xxxl}` (40px) · `{spacing.section-sm}` (48px) · `{spacing.section}` (64px) · `{spacing.section-lg}` (96px) · `{spacing.hero}` (120px)
- **节奏**: 销售页面使用 `{spacing.section-lg}` (96px)主要频段之间;价格比较收紧到 `{spacing.section}` (64px); 使用文件表面 `{spacing.xxl}` (32px)小节之间
- **Card internal padding**: Standard `{spacing.xl}` (24px) for compact cards; `{spacing.xxl}` (32px) for pricing cards and feature panels; testimonial card pushes to `{spacing.section}` (64px) for hero-card presence

### 网格与容器
- 营销页面使用a 1280px max-width 配合 32px 沟槽
- 首屏和特色乐队经常使用 2-柱子分块(左文本、插图/右缩)
- Pricing page renders 3 tier cards in a row at desktop (FREE / Lift Off / Custom), then a comprehensive feature comparison table below
- 文档页面使用严格 3- 栏 grid: left sidebar nav (~240px), center prose (~720px max-width), right TOC (~200px)
- 使用logo墙壁 6- 顾客标志的排数 80–100px 高度各处

### 留白规则
Marketing surfaces give content generous breathing room — `{spacing.hero}` (120px) above-the-fold creates space for atmospheric gradient backdrops to read clearly. Documentation tightens dramatically: section gaps drop to `{spacing.xxl}` (32px), table rows pack to `{spacing.md}` (16px), sidebar nav compresses to `{spacing.xs}` (8px) vertical rhythm.


## 层次与深度

该系统主要运行于具有战略大气深度的平坦地带。

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 (flat) | No shadow; `{colors.hairline}` border | Default cards, table rows, form inputs |
| 1 (声) | `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` | 细腻的瓷砖,细微的亮点 |
| 2 (卡) 发牌 | `rgba(0, 0, 0, 0.08) 0px 4px 12px 0px` | 标准特性卡 |
| 3 (嘲笑) 说吧,我... | `rgba(0, 0, 0, 0.12) 0px 24px 48px -8px` | 首屏产品模拟框架——主页首屏文件预览的深度扩散滴滴 |
| 4 (brand-tinted) | `rgba(0, 212, 164, 0.08) 0px 8px 24px` | Featured pricing tier glow |

### 装饰性深度
- The homepage hero uses an atmospheric photographic backdrop (cloud illustration on sky-gradient) for depth — no shadow needed; the imagery does the work
- 初创首屏使用相似的处理方法 火箭发射插图横跨深层梯度
- 代码块通过语法高亮的颜色等级来携带自己的内部深度,位于暗面;没有使用阴影


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 4px | 内置代码芯片, 微标签 |
| `{rounded.sm}` | 6px | 侧边栏导航项目, 类型徽章 |
| `{rounded.md}` | 8px | 输入、搜索胶囊形、密码块、二级卡 |
| `{rounded.lg}` | 12px | 标准卡、定价等级、首屏模型、FAQ项目 |
| `{rounded.xl}` | 16px | 更大的专题板 |
| `{rounded.xxl}` | 24px | 特长产品显示牌 |
| `{rounded.full}` | 9999px | All buttons, pill tabs, badges |

The radius scale is tightly disciplined — the brand never uses a corner softening between `{rounded.md}` (8px) and `{rounded.lg}` (12px) for the same component family. Pill buttons (`{rounded.full}`) are used universally; rectangular cards use `{rounded.lg}` (12px) consistently.

### 图片形状
- 首屏插图(云,火箭)坐落在全血的梯度背景上,没有内部框架
- Customer logo walls use 1:1 ratio cells without rounding (logos are presented inline as wordmarks)
- 使用作证照片 1:1 边框 `{rounded.md}` (8px) 软化
- Code editor mockup hero image uses `{rounded.lg}` (12px) corners on a hairline-bordered card with a deep diffuse drop shadow


## 组件

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### 按钮

**`button-primary`** ——黑丸主CTA,是贯穿所有表面的主导动作.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.full}`.
- Pressed state `button-primary-pressed` lifts to `{colors.charcoal}`.
- 已禁用状态 `button-primary-disabled` 使用情况 `{colors.hairline}` 和背景 `{colors.muted}` 文本中选择的文本。

**`button-accent-green`** —— 以"品牌强调"CTAs(首屏"开始",特色定价CTA)为主的薄荷绿胶囊形.
- Background `{colors.brand-green}`, text `{colors.primary}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.full}`.

**`button-on-dark`** — White pill for use on dark hero bands (startups page "Get started").
- Background `{colors.on-dark}`, text `{colors.primary}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.full}`.

**`button-secondary`** 二级手术的避孕药。
- Background transparent, text `{colors.ink}`, border `1px solid {colors.hairline}`, typography `{typography.button-md}`, padding `10px 20px`, rounded `{rounded.full}`.

**`button-ghost`** ——静态长方形鬼按键(侧杠动作,三级导航).
- Background transparent, text `{colors.ink}`, typography `{typography.button-md}`, padding `8px 12px`, rounded `{rounded.md}`.

**`button-link`** ——内置文本链接,其样式为微妙的按钮.
- Background transparent, text `{colors.ink}`, typography `{typography.body-sm-medium}`, padding `0`. Underline appears on activation.

**`button-icon-circular`** — 32×32px circular 工具按钮(关闭、复制、箭头)。
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.full}`.

### 卡片与容器

**`card-base`** 标准文件/地物卡。
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`.

**`card-feature`** ——浅灰色表面的特征面板.
- Background `{colors.surface}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`.

**`card-help`** ——"需要帮助" 价格比较以下的CTA卡("快速启动指南","技术写作指南","Founder","销售").
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`.

**`card-startup-perk`** ——启动-方案perk网格项目("贴现与信用","优先支持","创业包","富强社区").
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`. Carries an icon at top, heading `{typography.heading-5}`, description `{typography.body-sm}` `{colors.steel}`.

**`pricing-card`** ——标准定价等级卡.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline}`.
- 标题 `{typography.heading-3}`价格 `{typography.display-lg}`,特性列表 `{typography.body-sm}` 带有绿色检查标记图标。

**`pricing-card-featured`** ——突出定价等级(离岸/特色计划).
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `2px solid {colors.brand-green}`, soft brand-tinted shadow `rgba(0, 212, 164, 0.08) 0px 8px 24px`.

**`testimonial-card-feature`** ——亮橙大证照卡,带照片+引文(").Cursor ——每批YC 连续看到顶级表现的初创企业使用. Mintlify ”).
- Background `{colors.testimonial-orange}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.section}`. Photo on right, large quote in `{typography.heading-3}` left, attribution below in `{typography.body-sm-medium}`.

**`testimonial-card-quote`** ——启动页上小白证卡.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline}`.

**`founder-quote-card`** — Cursor 创始人证卡变种在橙色表面.
- Background `{colors.testimonial-orange}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`. Carries the specific founder portrait + quote treatment.

**`startup-program-card`** ——含有百克网格+应用CTA的较大应用/程序卡.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline}`.

### 输入框与表单

**`text-input`** ——标准文本字段.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 40px.

**`text-input-focused`** ——启动状态.
- 边框切换到 `2px solid {colors.brand-green}` ——焦点使用品牌薄荷作为激活信号.

**`search-pill`** ——文档上栏搜索.
- Background `{colors.surface}`, text `{colors.steel}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, height 36px, border `1px solid {colors.hairline}`.

### 标签

**`segmented-tab`** + **`segmented-tab-active`** ——底线式标签导航(用于“第一标签/第二标签/第三标签”的Docs Tabs组件内部).
- Inactive: text `{colors.steel}`, transparent background, padding `{spacing.sm} {spacing.md}`. Active: text `{colors.ink}`, 2px bottom border in `{colors.ink}`.

**`pill-tab`** + **`pill-tab-active`** ——胶囊形式标签导航(定价页的顶部:"定价/路线图").
- Inactive: background `{colors.canvas}`, text `{colors.steel}`, border `1px solid {colors.hairline}`, padding `8px 16px`, rounded `{rounded.full}`.
- 活动:背景 `{colors.primary}`文本中,请输入 `{colors.on-primary}`,没有边界。

**`toggle-monthly-yearly`** 双态避孕药切换(每月/每年定价页)。
- Background `{colors.surface}`, rounded `{rounded.full}`, padding `4px`. Active state moves a white pill thumb to the selected position.

### 徽章状态( S)

**`badge-discount`** — Small green "Save 20%" badge attached to annual toggle.
- Background `{colors.brand-green}`, text `{colors.primary}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `2px 8px`.

**`badge-required`** ——文档属性行上的红色"REQUIRED"标签.
- Background `{colors.brand-error}`, text `{colors.on-dark}`, typography `{typography.micro-uppercase}`, rounded `{rounded.sm}`, padding `2px 6px`.

**`badge-type`** ——文档中的签名芯片类型(例如: `string`, `number`, `boolean`).
- Background `{colors.surface}`, text `{colors.steel}`, typography `{typography.code-sm}`, rounded `{rounded.sm}`, padding `2px 6px`.

**`badge-tag`** ——文档标记芯片(如. `<Tabs>` 案文中突出提及)。
- Background `rgba(55, 114, 207, 0.15)`, text `{colors.brand-tag}`, typography `{typography.caption-bold}`, rounded `{rounded.sm}`, padding `2px 8px`.

**`promo-banner`** — Sticky 黑色的促销条 ABOVE 顶端导航(当现时).
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, typography `{typography.body-sm-medium}`, padding `{spacing.sm} {spacing.md}`.

### 代码

**`code-block`** ——语法突出的代码容器.
- Background `{colors.surface-code}`, text `{colors.on-dark}`, typography `{typography.code-md}`, rounded `{rounded.md}`, padding `{spacing.md}`.

**`code-block-header`** ——代码上方带有语言标签+副本按钮的页眉栏.
- Background `{colors.surface-code}`, text `{colors.on-dark-muted}`, typography `{typography.caption}`, padding `{spacing.xs} {spacing.md}`, bottom border `1px solid {colors.hairline-dark}`.

**`code-inline`** — Inline `<Tabs>` reference in body prose.
- Background `{colors.surface}`, text `{colors.charcoal}`, typography `{typography.code-inline}`, rounded `{rounded.xs}`, padding `2px 6px`, border `1px solid {colors.hairline}`.

**`copy-code-button`** ——"密码"按钮输入 code-block 头曰.
- Background transparent, text `{colors.on-dark-muted}`, typography `{typography.caption}`, rounded `{rounded.sm}`, padding `{spacing.xxs} {spacing.xs}`, border `1px solid {colors.hairline-dark}`.

### Documentation Components

**`property-row`** ——API 财产文档行(如. `defaultIndex` )),在Tabs页面上出现.
- Background transparent, text `{colors.ink}`, typography `{typography.body-sm}`, padding `{spacing.md} 0`, bottom border `1px solid {colors.hairline-soft}`.
- 版式: 属性名称在 `{typography.code-inline}` + 类型徽章+ 选择性REQUIRED徽章+以下描述 `{typography.body-sm}` `{colors.steel}`.

**`feature-comparison-table`** ——详细定价页特征比较表.
- Background `{colors.canvas}`, text `{colors.ink}`, typography `{typography.body-sm}`, rounded `{rounded.md}`, border `1px solid {colors.hairline}`.

**`feature-comparison-row`** ——比较表内各行.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.lg}`, bottom border `1px solid {colors.hairline-soft}`. Section dividers in `{typography.micro-uppercase}` `{colors.steel}`.

**`sidebar-nav-item`** + **`sidebar-nav-item-active`** ——文献左侧栏链接条目.
- Inactive: background transparent, text `{colors.steel}`, typography `{typography.body-sm}`, rounded `{rounded.sm}`, padding `{spacing.xs} {spacing.md}`.
- 活动:背景 `{colors.surface}`文本中,请输入 `{colors.ink}`,打印 `{typography.body-sm-medium}`.

**`sidebar-section-header`** ——大写部分头部位于侧边栏(如"COMPONENTS","PRIMIVATES")内.
- Background transparent, text `{colors.steel}`, typography `{typography.micro-uppercase}`, padding `{spacing.md} {spacing.md} {spacing.xs}`.

**`doc-toc-item`** + **`doc-toc-item-active`** ——右排目录链接.
- Inactive: background transparent, text `{colors.steel}`, typography `{typography.body-sm}`, padding `{spacing.xxs} 0`.
- 活动: 文本 `{colors.ink}`,打印 `{typography.body-sm-medium}`,可选左边强调色 `{colors.brand-green}`.

### 导航

**顶端导航( 市场营销)** — Sticky 白色条形,带有标志,链接列表,以及右侧的CTA.
- Background `{colors.canvas}`, height ~64px, bottom border `1px solid {colors.hairline-soft}`.
- 左边 : Mintlify 单词标记+水平链接列表(流派,定价,客户端,文档,变换日志).
- 右:二级"谈销售"+黑吐"开始".

**顶端导航( 文档)** ——中线压缩导航. search-pill 和右侧账户/升级的CTA。
- Background `{colors.canvas}`, height ~56px. Search-pill at center, "Documentation / Guides / API Reference / Changelog" links + "Talk to us" + green "Get started" right.

### 标志性组件

**`hero-band-sky`** ——主页首屏,以大气天蓝色为奶油梯度和云插图.
- Background gradient `linear-gradient(180deg, {colors.hero-sky-from} 0%, {colors.hero-sky-to} 100%)`, text `{colors.on-dark}` (early portion of gradient) shifting to `{colors.ink}` further down, padding `{spacing.hero}`.
- Layout: centered hero headline in `{typography.hero-display}`, centered subtitle in `{typography.subtitle}`, centered button row (`button-accent-green` "Get started" + `button-secondary` "Talk to us"), product mockup below the buttons.

**`hero-band-dark`** —— 以暗色的纹理对薄荷梯度和火箭发射插图的创业首屏.
- Background gradient `linear-gradient(135deg, {colors.hero-dark-from} 0%, {colors.hero-dark-to} 100%)`, text `{colors.on-dark}`, padding `{spacing.hero}`.
- Layout: hero headline left in `{typography.hero-display}` `{colors.on-dark}`, illustration right (rocket cutting across the gradient), button row uses `button-on-dark` (white pill) + ghost link.

**`hero-product-mockup`** ——主页首屏内部装配的代码编辑模型.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, border `1px solid {colors.hairline-soft}`, deep shadow `rgba(0, 0, 0, 0.12) 0px 24px 48px -8px`.
- 内部包含一个文档页面预览(左侧边栏,传言体,模拟UI控制).

**`logo-wall-item`** ——客户标识单元格 6- 上信任行网格(“Anthropic / 认知” / ) Mintlify / Vercel / 反应 / Lovable", "Stripe / 块/ 付费页/ 化合物/ Auth").
- Background transparent, text `{colors.steel}`, typography `{typography.body-md-medium}`, padding `{spacing.lg}`.
- 以一致的垂直中心显示的 Logos 显示为文字标记 。

**`faq-accordion-item`** 经常问询的小组项目(可在定价网页上查阅)。
- Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-soft}`.
- 问题 `{typography.heading-5}`,在 `{typography.body-md}` `{colors.steel}`,在 `{colors.steel}` 16px.

**`footer-region`** ——多栏站点页脚.
- Background `{colors.canvas}`, top border `1px solid {colors.hairline}`, padding `{spacing.section} {spacing.xxl}`.
- 5 栏组(勘探/资源/公司/法律+品牌标记栏)。
- 区头在 `{typography.body-sm-medium}` `{colors.ink}`,链接项目 `{typography.body-sm}` `{colors.steel}`.

**`footer-link`** ——页脚中的个人链接条目.
- Background transparent, text `{colors.steel}`, typography `{typography.body-sm}`, padding `{spacing.xxs} 0`.


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.brand-green}` (Mintlify 薄荷),仅用于强调色 CTA 和 活动状态指示器——每个视图强调色按钮都带有字重
- Use `{colors.primary}` (black) as the dominant CTA on light backgrounds; switch to `button-on-dark` (white pill) on dark hero bands
- 应用 `{rounded.full}` 切换到每个按钮和胶囊形; 绝不软化胶囊形角
- 平对 Inter (UI 传言) Geist Mono (代码)——永远不要引入第三种类型面
- 节俭使用大气梯度首屏带(只使用主页和启动页);使更深的表面平坦和密集
- Apply `{rounded.lg}` (12px) consistently on cards; use `{rounded.md}` (8px) only on compact UI like search pills and code blocks
- Keep documentation prose at `{typography.body-md}` (16px) with 1.50 line-height — never compress

### 应避免的做法
- Don't use `{colors.brand-green}` on body text or large surfaces — it loses signal
- Don't introduce additional accent colors beyond mint, tag-blue, error-red, and the testimonial orange
- 平面文件卡上不要用厚的阴影; 保留高架用于首屏产品模拟
- Don't reduce documentation line-height below 1.50 — long-form readability suffers
- Don't combine atmospheric gradients with multiple competing color accents in the same hero — the sky/dark gradient is the brand mood; let it breathe
- Don't use Inter for code or Geist Mono for prose — the typeface assignment IS the brand voice


## 响应式布局

### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero scales to 36px. Pill nav collapses to hamburger. Pricing tiers stack 1-up. Footer 1-column accordion. |
| Mobile (large) | 480 – 767px | Same as small but feature tiles render 2-up. Hero scales to 44px. |
| 平板 | 768 – 1023px | 2- 列的特征网格。 Pill-tab 导航返回。文档侧边栏崩溃到抽屉。首屏缩放到 56px. |
| 桌面 | 1024 – 1279px | 满 3-柱形的docs网格(侧边栏/正体/TOC). 3- 等级定价卡行,首屏在 72px. |
| 宽桌面 | ≥ 1280px | 更大的首屏沟,更大的产品模型, fixed 240px 侧边栏。 |

### 触控区域
- 胶囊形按钮渲染到 36–40px 有效高度—— 颠峰至 44px 移动中通过编目覆盖
- Circular 图标按钮 : 32×32px 桌面 – 数据 44×44px 移动
- 格式输入提供时间 40px 高度; 凸起到 44px 移动
- 侧边栏导航项渲染于 ~32px 高 —— 颠倒 44px 移动抽屉

### 窄屏布局调整
- **宣传旗** 保持全宽; 切换到 < 480px
- **顶端导航** 下级 1024px 崩溃到汉堡; 水平链接移动到抽屉中
- **首屏乐队**: 2-柱式首屏(文本+模拟)崩溃堆叠到 < 1024px; 移动中文本下面的模拟
- **Documentation grid**: 3-column desktop → sidebar-drawer at < 1024px → single-column at < 768px
- **定价比较**: 3-柱状层次 – 1- 堆叠在 < 768px; 比较表变为水平滚动
- **首屏打字技术**: `{typography.hero-display}` (72px) → 56px 平板电脑 44px 移动大号 ∗_ 36px 移动小号
- **Customer logo wall**: 6-up → 3-up at tablet → 2-up at mobile
- **Footer**: 5-column desktop → 2-column tablet → accordion at mobile

### 图片适配
- 首屏插图(云,火箭)懒散的与首屏乐队;在所有断点保持脆脆(基于SVG)
- 产品模型在断点之间保持其尺寸比;比例尺
- 客户标识使用 SVG 字签; 视网膜显示时保持简洁


## 迭代指南

1. 一次关注一个组件,系统内部一致性很高.
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component-name}-pressed`, `{rounded.full}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后,以获取断裂的反差和对比问题。
4. 添加新的变体作为单独的 `components:` 条目( 4)`-pressed`, `-disabled`, `-focused`, `-active`).
5. 默认为 `{typography.body-md}` 身体和身体的 `{typography.subtitle}` 标题下移 `hero-display → display-lg → heading-1 → heading-2 → heading-3 → heading-4 → heading-5`.
6. 保留 `{colors.brand-green}` 仅限强调色瞬间。如果它出现在一般表面上,请询问它是否赢得了这个角色。
7. 胶囊形形状的按钮( $`{rounded.full}`总是; 平方按钮在此语言中表示“ 第三方部件 ” 。
8. 传言文件属于 `{typography.body-md}` 16px 配合 1.50 line-height 任何更密集的事物都会破坏阅读体验.


## 已知缺口

- 页面底色、表面、墨水和细边线的具体暗模符号值没有在这些页面上浮出水面;该品牌尚未运出已公布的暗模调色板
- Animation/transition timings are not extracted; recommend 150–200ms ease for hover/focus state transitions
- 格式验证成功状态没有在默认状态之后被明确捕获——按照标准绿色边界+成功徽章模式执行
- 代码语法在docs内部突出调色板没有正式化;文档样本携带着自己的双斜式注解系统符号(例如. `{colors.brand-tag}`, `{colors.brand-annotate}`, `{colors.brand-warn}`),但未列出完整的突出显示方案

## 设计词元原值

Mintlify 介绍具有双模审美的文献基础设施——大气天梯级营销首屏(云彩插图背景,软奶油至蓝洗),配以密集的开发者级文献表面。 Inter 以传教士的身份 Geist Mono 代码和签名 Mintlify 绿色( 4){colors.brand-green}),保留给强调色CTA和活跃状态. 黑泄漏主按钮主导营销,白在暗黑首屏乐队出现反演,a 3-栏文档布局(侧栏/旁白/TOC)锁定开发者的经验。覆盖范围跨越主页、启动程序、定价比较和实时标签文档页。

```yaml
---
version: alpha
name: Mintlify-design-analysis
description: Mintlify presents documentation infrastructure with a dual-mode aesthetic — atmospheric sky-gradient marketing heroes (cloud illustration backdrops, soft cream-to-blue washes) paired with dense developer-grade documentation surfaces. The system uses Inter for UI prose, Geist Mono for code, and a signature Mintlify green ({colors.brand-green}) reserved for accent CTAs and active states. Black-pill primary buttons dominate marketing, white-on-dark inversions appear on dark hero bands, and a 3-column documentation layout (sidebar / prose / TOC) anchors the developer experience. Coverage spans homepage, startups program, pricing comparison, and the live tabs documentation page.

colors:
  primary: "#0a0a0a"
  on-primary: "#ffffff"
  brand-green: "#00d4a4"
  brand-green-deep: "#00b48a"
  brand-green-soft: "#7cebcb"
  brand-tag: "#3772cf"
  brand-warn: "#c37d0d"
  brand-annotate: "#1ba673"
  brand-error: "#d45656"
  brand-cursor: "#888888"
  hero-sky-from: "#87a8c8"
  hero-sky-to: "#f5e9d8"
  hero-dark-from: "#1a3d4a"
  hero-dark-to: "#2d5a4f"
  testimonial-orange: "#f55a3c"
  testimonial-orange-deep: "#cc3a1f"
  canvas: "#ffffff"
  canvas-dark: "#0a0a0a"
  surface: "#f7f7f7"
  surface-soft: "#fafafa"
  surface-code: "#1c1c1e"
  hairline: "#e5e5e5"
  hairline-soft: "#ededed"
  hairline-dark: "#1f1f1f"
  ink: "#0a0a0a"
  charcoal: "#1c1c1e"
  slate: "#3a3a3c"
  steel: "#5a5a5c"
  stone: "#888888"
  muted: "#a8a8aa"
  on-dark: "#ffffff"
  on-dark-muted: "#b3b3b3"

typography:
  hero-display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -2px
  display-lg:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -1.5px
  heading-1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -1px
  heading-2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.5px
  heading-3:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
  heading-4:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.30
  heading-5:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
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
    lineHeight: 1.50
  body-md-medium:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.50
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
    letterSpacing: 0.5px
  button-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.30
  code-md:
    fontFamily: Geist Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  code-sm:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
  code-inline:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.30

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
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
    padding: "10px 20px"
  button-primary-pressed:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
  button-accent-green:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-on-dark:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
    border: "1px solid {colors.hairline}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    padding: "0"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 32px
    border: "1px solid {colors.hairline}"
  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  card-feature:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
  card-help:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  card-startup-perk:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  pricing-card-featured:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "2px solid {colors.brand-green}"
    shadow: "rgba(0, 212, 164, 0.08) 0px 8px 24px"
  testimonial-card-feature:
    backgroundColor: "{colors.testimonial-orange}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.section}"
  testimonial-card-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
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
    border: "2px solid {colors.brand-green}"
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
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.md}"
    border: "0 0 2px transparent solid"
  segmented-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    border: "0 0 2px {colors.ink} solid"
  pill-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
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
  badge-discount:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
  badge-required:
    backgroundColor: "{colors.brand-error}"
    textColor: "{colors.on-dark}"
    typography: "{typography.micro-uppercase}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  badge-type:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.code-sm}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  badge-tag:
    backgroundColor: "rgba(55, 114, 207, 0.15)"
    textColor: "{colors.brand-tag}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  promo-banner:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.md}"
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
    border: "0 0 1px {colors.hairline-dark} solid"
  code-inline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.charcoal}"
    typography: "{typography.code-inline}"
    rounded: "{rounded.xs}"
    padding: "2px 6px"
    border: "1px solid {colors.hairline}"
  property-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md} 0"
    border: "0 0 1px {colors.hairline-soft} solid"
  feature-comparison-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline}"
  feature-comparison-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "{spacing.md} {spacing.lg}"
    border: "0 0 1px {colors.hairline-soft} solid"
  sidebar-nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  sidebar-nav-item-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
  sidebar-section-header:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.micro-uppercase}"
    padding: "{spacing.md} {spacing.md} {spacing.xs}"
  doc-toc-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
  doc-toc-item-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
  copy-code-button:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.xs}"
    border: "1px solid {colors.hairline-dark}"
  hero-band-sky:
    backgroundColor: "{colors.hero-sky-from}"
    textColor: "{colors.on-dark}"
    rounded: "0"
    padding: "{spacing.hero}"
  hero-band-dark:
    backgroundColor: "{colors.hero-dark-from}"
    textColor: "{colors.on-dark}"
    rounded: "0"
    padding: "{spacing.hero}"
  hero-product-mockup:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "0"
    border: "1px solid {colors.hairline-soft}"
    shadow: "rgba(0, 0, 0, 0.12) 0px 24px 48px -8px"
  logo-wall-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-md-medium}"
    padding: "{spacing.lg}"
  faq-accordion-item:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-soft}"
  footer-region:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
    border: "1px solid {colors.hairline}"
  footer-link:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
  startup-program-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  founder-quote-card:
    backgroundColor: "{colors.testimonial-orange}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
---
```
