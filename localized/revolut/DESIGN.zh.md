# Revolut · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Revolut营销布在高调双模系统运作:a
**近黑故事布** (`{colors.canvas-dark}` — `#000000`)
并轮流进行计划 并进行计划
配合 **白色目录带** (`{colors.canvas-light}` — `#ffffff`),该
host comparison tables, FAQ rows, and download tiles. The two modes switch
以全血带而不是柔软的过渡;各节按住每个节
其它的创造杂志的散文节奏 品牌以知名。

显示的打字法是 **Aeonik Pro 字重 500**,在大小上从
20px to 136px. The flagship hero ("Banking & Beyond", "Join the 70+ million
使用 Revolut")坐着 80–136px 配合 `lineHeight: 1.0` 和紧负数
letter-spacing。身体类型是 **Inter** 字重 400 开放源代码,
no-nonsense, paired with positive tracking (`0.24px`) on UI labels for
机械精度略高一点

品牌强调色是: 说到点子上,我 `{colors.primary}` (`#494fdf`) 饱和钴
紫罗兰——但很少出现在营销表面。
首屏的CTA就是那个 **黑药白丸** ("选择你的订阅"),
并且钴紫罗兰被保留给特别的图纸卡, 二级CTAs in
白色的,还有品牌的甘油本身, 宽广的副色板深层
淡蓝色、深粉红色、淡绿色、橙色警告和黄色
产品模型和特征插图内部——从不作为按钮表面.

**关键特征 :**
- 双模页面底色系统—— `{colors.canvas-dark}` 以叙述故事为乐器, `{colors.canvas-light}` (白)用于浏览——切换成全血波段.
- 显示打字法 **Aeonik Pro 500** 大小为 20–136px 紧紧的 `lineHeight: 1.0` 和大负数 letter-spacing 显示大小。
- 实际的初级CTA是: `{component.button-primary}` — a **白胶囊形,黑文本**坐在暗色页面底色上,像素最亮 紫色钴 `{colors.primary}` 预留用于特别计划卡和二级CTA。
- Eight saturated accent colours live inside product mockups and illustrations only, never as button surfaces — teal, light-blue, deep-pink, light-green, warning orange, yellow, brown, danger red.
- All buttons are pill-shaped (`{rounded.full}`); content cards use `{rounded.lg}` (20px); inputs and small chips use `{rounded.md}` (12px).
- 摄影是产品引导的——手机模型,卡片模型,终端模型——显示在暗片区内部的全血,没有字幕覆盖.


## 配色

### 品牌色与强调色
- **钴紫色** (`{colors.primary}` — `#494fdf`:品牌强调色,预留特色计划卡(英语:`{component.plan-card-featured}`),品牌字标图标,以及白话区中的二级CTA.
- **钴亮度** (`{colors.primary-bright}` — `#4f55f1`:一种单步亮变体,用于内联颜色和强调色-相片头.
- **钴深层** (`{colors.primary-deep}` — `#3a40c4`:钴元素的活性/压态.
- **On-Primary** (`{colors.on-primary}` — `#ffffff`: 标签颜色, 上方 `{colors.primary}` 表面, 显示

### 界面表面
- **光线** (`{colors.canvas-light}` — `#ffffff`: FAQ 的白色目录模式,下载瓦片,比较表.
- **暗色画** (`{colors.canvas-dark}` — `#000000`:讲故事页面底色——真黑,从不近黑.
- **表面软** (`{colors.surface-soft}` — `#f4f4f4`:一种在下载瓦片,软扣,以及白色带内嵌卡片组上使用的微妙的脱白.
- **表面卡片** (`{colors.surface-card}` — `#ffffff`:纯白卡表面,用于白坎瓦斯地区的特征卡.
- **地表深处** (`{colors.surface-deep}` — `#0a0a0a`:为黑坎瓦斯区域内的套卡,采用单步式暗面.
- **地面升华** (`{colors.surface-elevated}` — `#16181a`:规划段卡片背景——略显光泽,将计划卡从黑页面底色上抬下.
- **细边线光** (`{colors.hairline-light}` — `#e2e2e7`): 1px 白色带内的分化器。
- **细边线暗** (`{colors.hairline-dark}` — `rgba(255,255,255,0.12)`: 暗区相应的低相位分解器.
- **发条坚固** (`{colors.hairline-strong}` — `#191c1f`:结构全强分机和轻卡的提纲.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#191c1f`:主文字颜色,显著的比纯黑色更温暖,与白色页面底色对齐,以进行身体可辨识.
- **体质** (`{colors.body}` — `#1f2226`:长形体,在哪里 `{colors.ink}` 感觉有点太尖锐了
- **木炭矿** (`{colors.charcoal}` — `#3a3d40`: 标题,二级导航.
- **静音** (`{colors.mute}` — `#505a63`: 支持文本.
- **灰尘** (`{colors.ash}` — `#5c5e60`:第三版文本,页脚复制.
- **石头** (`{colors.stone}` — `#8d969e`:元数据,细微的字幕.
- **异样** (`{colors.faint}` — `#c9c9cd`: 已停用前台,细边线更换.
- **On-Dark** (`{colors.on-dark}` — `#ffffff`): primary text on `{colors.canvas-dark}`.
- **On-Dark 静音** (`{colors.on-dark-mute}` — `rgba(255,255,255,0.72)`: 暗区中第二文本.

### 语义色
- **调和Teal** (`{colors.accent-teal}` — `#00a87e`: 用于产品模拟插图.
- **青色浅蓝色** (`{colors.accent-light-blue}` — `#007bc2`: 暗相片头的内含链接颜色.
- **亚冠蓝连线** (`{colors.accent-blue-link}` — `#376cd5`: 白色表面的默认内线链接颜色.
- **赤色的绿** (`{colors.accent-light-green}` — `#428619`:成功/正产品点名.
- **中央绿色文本** (`{colors.accent-green-text}` — `#006400`: 内置成功文本.
- **黄褐色** (`{colors.accent-yellow}` — `#b09000`: 注意/产品模型中待处理状态.
- **星座警告( C)** (`{colors.accent-warning}` — `#ec7e00`:警告插图中使用的全饱和橙色.
- **粉红色** (`{colors.accent-pink}` — `#e61e49`:深粉色——产品摄影和类图示内用.
- **危险** (`{colors.accent-danger}` — `#e23b4a`:破坏性/错误状态.
- **深红** (`{colors.accent-deep-red}` — `#8b0000`: 内置错误文本.
- **亚新布朗** (`{colors.accent-brown}` — `#936d62`:金属卡片界面框架中所使用的单温中性.
- **链接** (`{colors.link}` — `#376cd5`: 默认内置链接颜色。 与 `{colors.accent-blue-link}`.


## 字体排版

### 字体族

Revolut 船是两家的堆栈:

- **Aeonik Pro** — proprietary humanist sans-serif used for all display sizes (20px+) at weight 500. Carries the brand's editorial confidence; tightens dramatically with negative letter-spacing at large sizes.
- **Inter** – 身体、按钮标签、标题和元数据开源工作马。总是在字重上 400 或 600,有正跟踪(`0.16–0.24px`)在UI标签上.

何时 Aeonik Pro 无法获得许可, **Inter Display**, **桑斯将军**,或 **索恩语** 它们是可信的替代物,它们都具有温暖的几何字符。 -1% letter-spacing 显示大小,以匹配原有的紧度。

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 136px | 500 | 1.0 | -2.72px | The flagship hero ("Banking & Beyond"). One per page. |
| `{typography.display-xl}` | 80px | 500 | 1.0 | -0.8px | 打开区域( “加入” 70+百万 使用 Revolut"). |
| `{typography.display-lg}` | 48px | 500 | 1.21 | -0.48px | 分节标题. |
| `{typography.display-md}` | 40px | 500 | 1.2 | -0.4px | 特色卡片标题. |
| `{typography.heading-lg}` | 32px | 500 | 1.19 | -0.32px | 计划牌名. |
| `{typography.heading-md}` | 24px | 500 | 1.33 | 0 | 节次标题. |
| `{typography.heading-sm}` | 20px | 500 | 1.4 | 0 | 列表头,突出标签. |
| `{typography.body-lg}` | 18px | 400 | 1.56 | -0.09px | 市场传言. |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0.24px | 默认身体. |
| `{typography.body-md-bold}` | 16px | 600 | 1.5 | 0.16px | Emphatic body. |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | 说明,元数据。 |
| `{typography.button-lg}` | 20px | 500 | 1.4 | 0 | 首屏CTAs( 首屏CTAs) (英语:Aeonik Pro). |
| `{typography.button-md}` | 16px | 600 | 1.5 | 0.24px | 默认按钮标签 。 |
| `{typography.button-sm}` | 14px | 600 | 1.43 | 0 | 胶囊形, sub-nav. |
| `{typography.caption}` | 13px | 400 | 1.4 | 0 | 页脚披露,规范文本. |
| `{typography.link-emph}` | 16px | 700 | 1.5 | 0.24px | 暗模式下嵌入式内线链接. |

### 原则
- Display sizes always run at weight 500 with `lineHeight: 1.0` (or 1.19–1.21 below 48px). The negative letter-spacing scales with size — bigger types tighten more.
- 体质 Inter 坐在重的旁边 400 带有正跟踪( )`0.24px`)——小间距的微软使UI标签感觉略微机械化,配位的鳍技术精度.
- 首屏CTAs使用这个 Aeonik Pro `{typography.button-lg}` 变体;首屏下面的一切都使用 Inter `{typography.button-md}`.
- Inline links inside dark photo regions step up to weight 700 (`{typography.link-emph}`) so they hold contrast against the canvas without using the cobalt accent.

### 替代字体

When Aeonik Pro is unavailable, clamp display `lineHeight` to 1.0 explicitly and apply -1% letter-spacing on display sizes. Inter Display, General Sans, or Söhne will read closest to the original. Inter is open-source and should be used directly.


## 布局

### 间距系统
- **基地单位**: 4px,在工作规模上, 4 / 8 / 16.
- **脚本**: `{spacing.xxs}` 4px · `{spacing.xs}` 6px · `{spacing.sm}` 8px · `{spacing.md}` 14px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 48px · `{spacing.block}` 80px · `{spacing.section}` 88px · `{spacing.band}` 120px.
- Section padding: `{spacing.section}` (88px) vertical between bands; `{spacing.band}` (120px) on the hero band and the closing planning section.
- Card internal padding: `{spacing.xxl}` (32px) on `{component.feature-card-light}`, `{component.plan-card}`, `{component.feature-card-dark}`.

### 网格与容器
- **最大内容宽度** ≈ 1200px 身体部位;首屏乐队全速奔跑。
- **Plan grid**: 4-up plan cards on the home page, stacking 2-up at tablet and 1-up at small mobile.
- **Feature grid**: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **产品模拟带**:单张全宽首屏照片的手机或卡片模具,没有周围的界面框架——资产本身就是部分.

### 留白规则
- Whitespace is generous and editorial — sections breathe at 88–120px so display headlines have room to register at 80–136px without feeling cramped.
- Inside cards, padding stays at 32px so feature copy and plan tiers have a consistent rhythm.
- 细边线 `{colors.hairline-light}` 分隔器取代白色表面的阴影; `{colors.hairline-dark}` 承担着在黑暗地区相应的角色.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — flat | No shadow, no border | Default canvas bands (light or dark), full-bleed hero. |
| 1 ——水面卡 | `{colors.surface-card}` (白)开 `{colors.surface-soft}` 带 | 光带内的特色卡片. |
| 2 ——表面升高的暗色. | `{colors.surface-elevated}` (`#16181a`继续 `{colors.canvas-dark}` | 规划科内部的计票卡. |
| 3 - 地面特色 | `{colors.primary}` 打开 `{colors.canvas-dark}` | 特色图案卡(钴紫色反转). |
| 4 产品模型 | 完全充裕的图片资产 | 首屏手机/卡/终端模拟乐队. |

The system has **no traditional drop-shadow language**. Surfaces register depth via colour-blocking (light → dark band switches) and surface-luminance shifts (`{colors.canvas-dark}` → `{colors.surface-elevated}`). Photography mockups carry their own depth from the asset itself.

### 装饰性深度
- **Product mockup hero bands** — the home page features a phone mockup full-bleed against `{colors.canvas-dark}`, with the device's own glow providing the only atmospheric depth. No additional gradients, no shadows.
- **Featured plan card** — the cobalt-violet `{component.plan-card-featured}` sits inside the otherwise dark planning grid as a single saturated colour block, marking the recommended tier visually.
- **纸质金属** ——品牌用途. `{colors.accent-brown}` 金属卡片模型上有一个深层梯度 以示溢价,而不会受到金色的金属效应的影响。


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 首屏乐队,全血科,脚步. |
| `{rounded.sm}` | 8px | 内置标签,小芯片. |
| `{rounded.md}` | 12px | 窗体输入,下载瓦片. |
| `{rounded.lg}` | 20px | 特色卡,计划卡. |
| `{rounded.xl}` | 28px | 产品模拟容器。 |
| `{rounded.full}` | 9999px | Buttons, pills, badges, tabs. |

### 图片形状
- 电话模型 : 9:19.5 (垂直)与 `{rounded.xl}` 装置上的角落 界面框架。
- Card mockups: 1.586:1 (credit-card aspect) with `{rounded.lg}` corners.
- 终端/POS模型: 4:3 配合 `{rounded.xl}` 角落和大量贴在装置周围。
- 生活方式摄影( 稀有): 16:9 配合 `{rounded.lg}` 转角


## 组件

### 按钮

**`button-primary`** - 白色的CTA在黑暗中
- Background `{colors.canvas-light}`, label `{colors.canvas-dark}`, type `{typography.button-md}`, padding `14px 28px`, `rounded: {rounded.full}`, height 48px.
- The brand's primary CTA, used on every dark hero band ("Choose your subscription", "Get started").
- 国家住在这里 `button-primary-pressed` (背景情况) `{colors.faint}`).

**`button-dark`** ——光线上暗的CTA
- Background `{colors.canvas-dark}`, label `{colors.on-dark}`, type `{typography.button-md}`, `rounded: {rounded.full}`.
- 反面扫描相当于 `{component.button-primary}` ——白目录带内使用.

**`button-soft`** 软表面CTA
- Background `{colors.surface-soft}`, label `{colors.ink}`, type `{typography.button-md}`, `rounded: {rounded.full}`.
- 白坎瓦斯地区的三级行动("更多学习","View FAQs").

**`button-outline-light`** ——概述光线CTA.
- Background `{colors.canvas-light}`, label `{colors.ink}`, 1px solid `{colors.hairline-strong}`, type `{typography.button-md}`, `rounded: {rounded.full}`.
- 配对时的次要动作 `{component.button-dark}`.

**`button-outline-dark`** —— 概述暗色的CTA.
- Background `{colors.canvas-dark}`, label `{colors.on-dark}`, 1px solid `{colors.on-dark}`, type `{typography.button-md}`, `rounded: {rounded.full}`, padding `13px 27px`, height 48px.
- 暗黑的canvas 对应的 `{component.button-outline-light}`; 与 暗 首屏 乐队组合时, 将其中的 暗 首屏乐队用作第三步动作 `{component.button-primary}`.

**`button-pill-sm`** ——小胶囊形
- Background `{colors.surface-soft}`, label `{colors.ink}`, type `{typography.button-sm}`, `rounded: {rounded.full}`, padding `8px 16px`, height 36px.
- Sub-nav 芯片,滤波药

### 卡片与容器

**`hero-band-dark`** ——满血的黑暗首屏.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, type `{typography.display-xxl}` for the title, padding `{spacing.section}` (88px) vertical, `rounded: {rounded.none}`.
- Used only on the home page hero band.

**`hero-band-photo`** - 摄影领头的首屏
- Background `{colors.canvas-dark}` with full-bleed product photography, text `{colors.on-dark}`, type `{typography.display-xl}`, `rounded: {rounded.none}`.
- 产品页上使用——电话或卡片模拟作为全频布.

**`feature-card-light`** 白色的特征卡
- Background `{colors.surface-card}`, text `{colors.ink}`, 1px solid `{colors.hairline-light}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}` (32px).
- 用于白色目录带用于特征比较.

**`feature-card-dark`** ——黑天特写卡
- Background `{colors.surface-elevated}`, text `{colors.on-dark}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}`.
- 暗暗的故事叙述部分

**`plan-card`** ——订阅计划卡
- Background `{colors.surface-elevated}`, text `{colors.on-dark}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}` (32px).
- 计划名称在 `{typography.heading-lg}` ("标准","普卢斯","椒","金属","乌尔特拉").

**`plan-card-featured`** - 特色计划卡
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}`.
- 钴紫色反射法 `{component.plan-card}` ——在建议分级使用.

**`product-mockup`** ——全资产品资产.
- Background `{colors.canvas-dark}`, the asset itself fills the band, `rounded: {rounded.xl}` on the device chrome.
- 电话、卡片和终端模型——没有标题上线,也没有周围的界面框架。

**`download-tile`** ——应用商店下载瓦片
- Background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.body-sm}`, `rounded: {rounded.md}`, padding `12px 20px`, height 56px.
- App Store + Google Play 下载按钮,并列.

### 输入框与表单

**`text-input`** ——默认输入
- Background `{colors.canvas-light}`, text `{colors.ink}`, type `{typography.body-md}`, 1px solid `{colors.hairline-light}`, `rounded: {rounded.md}`, padding `14px 16px`, height 56px.
- 费斯科技的可访问性具有优异的高度——舒适地超过了WCAG AAA触控目标.

### 导航

**`nav-bar`** ——顶端导航(桌面).
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, type `{typography.button-md}`, height 64px.
- 左: 字标记标志. 中: 顶级导航("Personal","Company","Company"). 右: 语言切换器+"Log in" + `{component.button-primary}`.

**`nav-bar`** (移动)
- 同样的高度 64px,将中心导航崩溃成汉堡图标。Logo 留在左侧,登录的 CTA 留在右侧。

**`sub-nav-pill`** — sub-nav 芯片
- 胶囊形在暗片段(如"个人","商业","Premium")内横向排位设置, `{component.sub-nav-pill}` 造型风格.

### 标志性组件

**`badge-tag`** 中性标记
- Background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.caption}`, `rounded: {rounded.full}`, padding `4px 12px`.
- 特性卡内置标签.

**`badge-feature`** ——特色突出徽章
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.caption}`, `rounded: {rounded.full}`, padding `4px 12px`.
- "新","最受欢迎"的徽章,以计划牌为主.

**`footer`** ——全球页脚
- Background `{colors.canvas-dark}`, text `{colors.on-dark-mute}`, type `{typography.body-sm}`, `rounded: {rounded.none}`, padding `80px 24px`.
- Multi-column quick-links grid above a copyright + regulatory disclosure block separated by `{colors.divider-soft}`.


## 设计建议与禁忌

### 建议做法
- 切换到间距的完整带 `{colors.canvas-dark}` (故事)和(故事) `{colors.canvas-light}` (目录),双模节奏是核心.
- 使用 `{component.button-primary}` (白丸在暗处)作为每个暗首屏乐队的主要CTA,这是品牌最响亮的动作.
- 准备金 `{colors.primary}` 表示有特色的计划卡和品牌字号——钴应该感觉像刻意的邮票,而不是彩色主题.
- 设置首屏头条 **Aeonik Pro 500** 时 间 80–136px 配合 `lineHeight: 1.0` 和大负数 letter-spacing.
- 使用 **Inter** 用于身体、按钮标签、标题—— 永远不要替换 Aeonik Pro 身体类型。
- Apply `{rounded.full}` to every button and pill; `{rounded.lg}` (20px) to feature and plan cards; `{rounded.md}` (12px) to inputs.
- 显示产品模型在暗片段内全血化——资产IS该段.
- 使用宽强调色调色板( Name`{colors.accent-teal}`, `{colors.accent-pink}`, `{colors.accent-light-green}`) 产品插图和图标图中仅包含产品插图和图示.

### 应避免的做法
- Don't use accent colours (`{colors.accent-teal}`, `{colors.accent-pink}`, etc.) as button surfaces. They live inside illustrations only.
- Don't use a near-black canvas. The brand is `#000000`, not `#0a0a0a`.
- Don't pair white text with cobalt violet inside body content — `{colors.primary}` is for the featured plan card surface, not large prose.
- Don't add drop shadows on cards. Elevation is canvas + surface-luminance shifts.
- Don't introduce a secondary brand colour. Cobalt violet is the only brand stamp.
- Don't loosen Aeonik Pro `lineHeight` past 1.0 on display sizes. Tight stacking is structural.
- Don't bump body Inter to weight 500. Use 400 (default) or 600 (emphatic) — never the in-between.
- Don't pair `{colors.canvas-dark}` with another dark surface beyond `{colors.surface-elevated}`. The surface ladder has only two dark steps.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Desktop XL | ≥ 1440px | 4-up plan grid, full-bleed product mockup bands, max content 1200. |
| 桌面 | 1280–1439px | 集装箱缩水; xl 侧垫。 |
| 块状大 | 1024–1279px | 计划网格 4- 上; 特性网格 3- 起来 |
| 平板 | 768–1023px | 计划网格 2- 上; 特性网格 2- 起来 |
| 大型移动 | 426–767px | 计划网格 1- 上; 特性网格 1-上; 导航崩溃到汉堡; 首屏 `display-xxl` 夹子到 64px. |
| Mobile | ≤ 425px | All grids 1-up; hero clamps to 48px; section padding `{spacing.section}` collapses to 64px. |

### 触控区域
- All buttons ship at minimum 48px tall — comfortably exceeds WCAG AAA (44px). Default `{component.button-primary}` is 48px.
- `{component.text-input}` 谓 56px 高 —— 风琴技术级无障碍。
- `{component.button-pill-sm}` (36px) 被撞到(或) 44px 移动中通过垫装调整。

### 窄屏布局调整
- 顶级导航崩溃到汉堡 < 1024px; 字号和 `{component.button-primary}` 保持锚定。
- 首屏们 `{typography.display-xxl}` 夹子 : 136px → 80px → 64px → 48px 穿过断点梯子
- 计划网格步骤从 4- 最多为 2- 上边 < 1024px 改为: 1- 上边 < 768px.
- 产品模拟波段在每个断点保持全血;资产作物是内在的,而不是信箱。
- Sub-nav 胶囊形从包装行转换为水平滚动扶轮, 位置为 < 768px.

### 图片适配
- Phone and card mockups are served at 1.5× and 2× DPR; below 768px the system swaps to a smaller hero crop.
- 产品摄影在每个断点保留自己的大气照明——没有反应性变种资产.


## 迭代指南

1. 一次聚焦于一个组件。大多数表面共享 `{colors.canvas-dark}` / `{colors.canvas-light}` 组合 `{rounded.full}` 按钮和 `{rounded.lg}` 用来打牌的
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component.plan-card-featured}`, `{rounded.lg}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后; 孤箱警告会抓住未使用的条目。
4. 添加新的变体作为单独的条目( Q) :`-pressed`, `-featured`, `-disabled`)——不要用散文埋没.
5. 默认体型为 `{typography.body-md}` (Inter 400 ; 达到 `{typography.body-md-bold}` 仅强调强调。
6. 保留 `{colors.primary}` 稀有——如果每个视图中出现一个以上的钴紫素元素,则询问是否应该降到 `{component.plan-card}` (`{colors.surface-elevated}`而不是这样。


## 已知缺口

- Pressed/active visual states are documented for `button-primary-pressed` only; other components rely on focus-ring (browser default) for interactive feedback.
- 登录的应用表面(交易,转账,账户设置)超出了范围——只有公共营销布条有文献记载.
- 宽强调色调色板( Name`{colors.accent-teal}` 结束 `{colors.accent-brown}`)从提取的代号集中捕捉,但产品插图内部的确切使用量因市场和产品线而异;文件按每个喷雾而不是作为系统按钮.
- 移动应用截图艺术方向(手机贝子,状态栏)是产品-摄影领域,没有标准化地作为设计标志.

## 设计词元原值

Revolut's marketing surfaces pair a stark black canvas with the brand's cobalt-violet (`#494fdf`) and a wide accent palette of deep, fully-saturated product colours — teal, light-blue, deep pink, light-green, warning orange. The system reads as fintech-meets-product-brochure: oversized 80px–136px Aeonik Pro display headlines, generous whitespace, photography-led hero bands, and full-width product mockups (cards, phones, terminals) shown as hero objects inside near-black sections. Most surfaces are either black or off-white; pill-shaped buttons and rounded-12/20px content cards carry the consumer-financial-app feel without crossing into playful territory.

```yaml
---
version: alpha
name: Revolut-design-analysis
description: |
  Revolut's marketing surfaces pair a stark black canvas with the brand's
  cobalt-violet (`#494fdf`) and a wide accent palette of deep, fully-saturated
  product colours — teal, light-blue, deep pink, light-green, warning orange.
  The system reads as fintech-meets-product-brochure: oversized 80px–136px
  Aeonik Pro display headlines, generous whitespace, photography-led hero
  bands, and full-width product mockups (cards, phones, terminals) shown as
  hero objects inside near-black sections. Most surfaces are either black or
  off-white; pill-shaped buttons and rounded-12/20px content cards carry the
  consumer-financial-app feel without crossing into playful territory.

colors:
  primary: "#494fdf"
  primary-bright: "#4f55f1"
  primary-deep: "#3a40c4"
  on-primary: "#ffffff"
  ink: "#191c1f"
  body: "#1f2226"
  charcoal: "#3a3d40"
  mute: "#505a63"
  ash: "#5c5e60"
  stone: "#8d969e"
  faint: "#c9c9cd"
  on-dark: "#ffffff"
  on-dark-mute: "rgba(255,255,255,0.72)"
  canvas-light: "#ffffff"
  canvas-dark: "#000000"
  surface-soft: "#f4f4f4"
  surface-card: "#ffffff"
  surface-deep: "#0a0a0a"
  surface-elevated: "#16181a"
  hairline-light: "#e2e2e7"
  hairline-dark: "rgba(255,255,255,0.12)"
  hairline-strong: "#191c1f"
  divider-soft: "rgba(255,255,255,0.06)"
  accent-teal: "#00a87e"
  accent-blue-link: "#376cd5"
  accent-light-blue: "#007bc2"
  accent-light-green: "#428619"
  accent-green-text: "#006400"
  accent-yellow: "#b09000"
  accent-warning: "#ec7e00"
  accent-pink: "#e61e49"
  accent-danger: "#e23b4a"
  accent-deep-red: "#8b0000"
  accent-brown: "#936d62"
  link: "#376cd5"

typography:
  display-xxl:
    fontFamily: Aeonik Pro
    fontSize: 136px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -2.72px
  display-xl:
    fontFamily: Aeonik Pro
    fontSize: 80px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.8px
  display-lg:
    fontFamily: Aeonik Pro
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.21
    letterSpacing: -0.48px
  display-md:
    fontFamily: Aeonik Pro
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.4px
  heading-lg:
    fontFamily: Aeonik Pro
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.19
    letterSpacing: -0.32px
  heading-md:
    fontFamily: Aeonik Pro
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0
  heading-sm:
    fontFamily: Aeonik Pro
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: -0.09px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.24px
  body-md-bold:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0.16px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  button-lg:
    fontFamily: Aeonik Pro
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
  button-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0.24px
  button-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
  link-emph:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.24px

rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 20px
  xl: 28px
  full: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 14px
  lg: 16px
  xl: 24px
  xxl: 32px
  xxxl: 48px
  block: 80px
  section: 88px
  band: 120px

components:
  button-primary:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.canvas-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 14px 28px
    height: 48px
  button-primary-pressed:
    backgroundColor: "{colors.faint}"
    textColor: "{colors.canvas-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
  button-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 14px 28px
    height: 48px
  button-soft:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 14px 28px
    height: 48px
  button-outline-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 13px 27px
    height: 48px
  button-outline-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 13px 27px
    height: 48px
  button-pill-sm:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 8px 16px
    height: 36px
  text-input:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px 16px
    height: 56px
  hero-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xxl}"
    rounded: "{rounded.none}"
    padding: 88px 24px
  hero-band-photo:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 0
  feature-card-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-card-dark:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  plan-card:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  plan-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  product-mockup:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xl}"
    padding: 48px
  download-tile:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 56px
  badge-tag:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  badge-feature:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  nav-bar:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    height: 64px
  sub-nav-pill:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark-mute}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 80px 24px
---
```
