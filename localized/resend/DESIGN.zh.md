# Resend · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Resend 看起来像一个开发者工具 带有编辑的排版。
Every page opens on `{colors.canvas}` (`#000000`), and the loudest element on
页面底色不是按钮或品牌邮票——这是 96px Domaine Display
serif 标题(“开发者的电子邮件”、“重新设想的电子邮件”)
`ss01 / ss04 / ss11` 代课员已经接应了, 单打字机
裁决定下了品牌基调:自信、深思熟虑、略微文学,
价格是质量而不是新颖的。

支持的铸造是技术的 机身复制开关 **ABC Favorit** 资源
marketing prose and **Inter** for UI labels, while code blocks render in
**Geist Mono** 内 `{component.code-window}` 炮弹有细边线交通...
光点 表面深度几乎完全由半透明白色构成
6% 边界, 14% 边界很强, 4% 分裂者——在深处 `{colors.surface-deep}`
层,坐落在页面底色黑色的下面。没有绘制梯度
横跨全段,只是 **柔软的大气光芒** (橙色,蓝色,绿色,红色,)
黄色)锚在选定区段的顶端,均在低不透明状态.

单黑寄存器中的页节奏周期: 首屏 stripe − 大气
/ 代码窗口 / 电子邮件模拟 / 定价或特性
牌子上永远不向光面暖和;甚至
二次电子邮件模型在黑暗中作为紧凑的白卡提供
页面底色,像黑边墙的杂志页面上的印刷套装

**关键特征 :**
- 纯黑页面底色( E)`{colors.canvas}` — `#000000`),每页; 脱白文本(`{colors.ink}` — `#fcfdff`)载满读数.
- 由静脉系统引导的类型系统 : **Domaine Display** 时 间 76–96px 首屏头条, **ABC Favorit** 市场营销机构, **Inter** 大学大学, **Geist Mono** 代码。
- 6种强调色发光颜色仅用作低偏风大气洗涤(`{colors.accent-orange}`, `{colors.accent-blue}`, `{colors.accent-green}`, `{colors.accent-red}`, `{colors.accent-yellow}`)——永远不能作为按钮或固体表面.
- Strict container vocabulary: `{rounded.lg}` (12px) for feature cards, code wells, and email mockups; `{rounded.md}` (8px) for buttons; `{rounded.full}` for pills and avatars.
- 透明白色边框( Q)`{colors.hairline}` 6% / `{colors.hairline-strong}` 14%)完全取代阴影——系统没有传统的滴影高架语言.
- `{component.button-primary}` 是一个黑色文字的白色小矩形——反直观对比,成为页面最亮的像素,并起到单一视觉主锚的作用.


## 配色

### 品牌和 强调色
- **初等白种** (`{colors.primary}` — `#fcfdff`:该品牌事实上的强调色. 预留了用于 `{component.button-primary}` (白药在黑页面底色上) Domaine display 标题和正文颜色。白色是页面底色上最响亮的颜色——这就是签名。
- **初等开始** (`{colors.primary-on}` — `#000000`: 标签颜色, 上方 `{colors.primary}` 白色胶囊形上的黑色文字是品牌的CTA图案.
- **表面光线** (`{colors.surface-light}` — `#f1f7fe`:一种微妙的蓝色丁丁型脱白,用作活动/压抑状态 `{component.button-primary}`.

### 表面
- **Canvas** (`{colors.canvas}` — `#000000`): the default page background. True black, never near-black.
- **表面卡片** (`{colors.surface-card}` — `#0a0a0c`:标准内置卡表面,比页面底色轻一点,可以记录升降的阶梯.
- **地面升华** (`{colors.surface-elevated}` — `#101012`:在特色定价等级和鬼按钮表面使用的第二高阶.
- **地表深处** (`{colors.surface-deep}` — `#06060a`:代码窗口背景——比页面底色本身略冷,更暗,通过温度暗示深度.
- **细边线** (`{colors.hairline}` — `rgba(255,255,255,0.06)`: 软 1px 半透明- 白色的分隔器, 用于行间和功能卡周围 。
- **发条坚固** (`{colors.hairline-strong}` — `rgba(255,255,255,0.14)`: 结构 1px 纸牌、密码井和输入的边框。
- **分块软** (`{colors.divider-soft}` — `rgba(255,255,255,0.04)`:页脚列之间的低相隔分数.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — `#fcfdff`: 暗页面底色上主文本颜色. Faintly blue-cool 感觉像印刷纸而不是纯白流行.
- **体质** (`{colors.body}` — `rgba(252,253,255,0.86)`:长形体文字,纯墨会觉得太尖.
- **木炭矿** (`{colors.charcoal}` — `rgba(252,253,255,0.7)`:标题,二级导航标签.
- **静音** (`{colors.mute}` — `#a1a4a5`: 支持文本和不活跃标签.
- **灰尘** (`{colors.ash}` — `#888e90`:第三版文本,页脚复制.
- **石头** (`{colors.stone}` — `#464a4d`: 残废前缘.
- **On-Light** (`{colors.on-light}` — `#000000`: 稀有区域内的标签颜色 email-mockup 白牌(原变种).
- **On-Light 静音** (`{colors.on-light-mute}` — `rgba(0,0,51,0.7)`: 电子邮件模型中的第二文本。

### 语义
- **亚青橙** (`{colors.accent-orange}` — `#ff801f`+ 发光( )`{colors.accent-orange-glow}` — `rgba(255,89,0,0.22)`: 大气暖洗固定在"电子邮件重构"/客户故事部分. 固体橙色从不作为按钮或表面出现——只有光线.
- **黄褐色** (`{colors.accent-yellow}` — `#ffc53d`:内置中用突出字和"一流开发者经验"关键点名.
- **蓝天** (`{colors.accent-blue}` — `#3b9eff`+ 发光( )`{colors.accent-blue-glow}` — `rgba(0,117,255,0.34)`:内置链接颜色与"整合本周末"部分的凉爽大气洗.
- **青绿** (`{colors.accent-green}` — `#11ff99`+ 发光( )`{colors.accent-green-glow}` — `rgba(34,255,153,0.18)`:成功状态点和"交付确认"特征发光.
- **红调** (`{colors.accent-red}` — `#ff2047`+ 发光( )`{colors.accent-red-glow}` — `rgba(255,32,71,0.34)`:内含误差红色和"接触人类,而不是垃圾邮件文件夹"的注意洗.
- **链接** (`{colors.link}` — `#3b9eff`:内含链接颜色——与强调色蓝色相同.


## 字体排版

### 字体家族

Resend 船体四条家用堆栈:

- **Domaine Display** 专有编辑 serif 专用于首屏头条 76px+, 与 `ss01 / ss04 / ss11` 风格的套装 用于稍紧, 更印刷的磁像外观。
- **ABC Favorit** ——专有的人文主义者. sans-serif 用于销售机体复制品、首屏字幕和胶囊形标签。 `ss01 / ss03 / ss04` 表格数字和替代格言的特性。
- **Inter** ——开源. sans-serif 用于UI:按钮标签,标题,纸牌体文本,导航链接.
- **Geist Mono** ——开源. monospace 密码井里用的

When proprietary families cannot be licensed, **Söhne** or **Tiempos Headline** stand in for Domaine Display, and **Geist** or **Inter Tight** can replace ABC Favorit. Inter and Geist Mono are open-source and should be used directly.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 96px | 400 | 1.0 | -0.96px | Home hero ("Email for developers"). One per page. |
| `{typography.display-xl}` | 76.8px | 400 | 1.0 | -0.768px | 区块打开器("电子邮件重构","今日可退"). |
| `{typography.display-lg}` | 56px | 400 | 1.2 | -2.8px | ABC Favorit 显示子标题。 |
| `{typography.heading-md}` | 24px | 500 | 1.5 | -0.4px | 牌名 区块副标题. |
| `{typography.heading-sm}` | 20px | 500 | 1.3 | -0.3px | 列表头条. |
| `{typography.subtitle}` | 20px | 400 | 1.3 | 0 | 首屏字幕组. |
| `{typography.body-lg}` | 18px | 400 | 1.5 | 0 | 市场传言. |
| `{typography.body-md}` | 16px | 400 | 1.5 | -0.8px | ABC Favorit body. |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | 说明,元数据。 |
| `{typography.button-md}` | 14px | 500 | 1.43 | 0 | 默认按钮标签 。 |
| `{typography.button-sm}` | 14px | 500 | 1.43 | 0.35px | 胶囊形标签 内含链接. |
| `{typography.caption}` | 12px | 400 | 1.5 | 0 | 页脚披露,版权. |
| `{typography.caption-emph}` | 14px | 600 | 1.0 | 0 | 插图小标题—— Helvetica 倒计时。 |
| `{typography.code-md}` | 13px | 400 | 1.6 | 0 | 代码块,内置代码. |

### 原则
- 显示大小总是运行在 `lineHeight: 1.0` 负数 letter-spacing - 电话 Domaine Display 头条被打成坚实的打印块,而不是打开散文线条。
- Body weight stays at 400 across `{typography.body-lg}` and `{typography.body-md}`. The serif/sans family change carries hierarchy, not weight bumps.
- ABC Favorit 总是跟着我跑 `ss01 / ss04 / ss11` 参与; Inter 从未带 OpenType 特性。代码为 Geist Mono 永远不带绳索。
- 内置链接使用 `{typography.button-sm}` 阳性 letter-spacing (`0.35px`和 (中文(简体) ). ABC Favorit ——小间隔的微动使它具有交互的传导精度.

### Note on Font Substitutes

何时 Domaine Display 无法使用, 夹 `lineHeight` 改为: 1.0 明确和适用 `font-feature-settings: "ss01", "liga"` 替换 serif 以模仿替代的格言。 Tiempos Headline 将读得最接近。 ABC Favorit 替代品( 4)Geist, Inter 紧)通常默认为松散跟踪——应用 -0.5% letter-spacing 身体大小来补偿。


## 布局

### 间距系统
- **基地单位**: 4px,在工作规模上, 4 / 8 / 16.
- **脚本**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 48px · `{spacing.section}` 96px · `{spacing.band}` 128px.
- Section padding: `{spacing.section}` (96px) vertical between bands; `{spacing.band}` (128px) on the hero stripe and closing footer transition.
- Card internal padding: `{spacing.xxl}` (32px) on `{component.feature-card}`, `{component.pricing-tier}`, and `{component.code-window}`.

### 网格容器( C)
- **最大内容宽度** ≈ 1200px 身体部分。
- **Feature grid**: 3 columns at desktop, 2 at tablet, 1 at mobile.
- **定价**: 3- 以桌面为中心的电网; 中心电网级促进到 `{component.pricing-tier-featured}` (单步线的表面).
- **代码- 音阶分割**: a 2- 上分 —— 叙述性副本左侧, `{component.code-window}` 右侧 —— 崩溃堆叠到 < 1024px.
- **电子邮件模拟带**: 一张白牌(640px 最大宽度)以暗页面底色为中心,宽度垂直的贴纸可以像印刷杂志的套装一样读取.

### 白空间哲学
- 白空间是编辑和慷慨的——满腔的章节呼吸在 96–128px 这么说吧 Domaine Display 头条有空间登记规模。
- 内卡,贴纸留在 32px 特征复制和密码井 与外网保持一致的节奏
- 细边线 `{colors.hairline}` 财务报告和已审计财务报表 `{colors.hairline-strong}` 背负角色的投影会在更亮的系统中进行;暗布完全压制传统的投影深度.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — flat | No shadow, no border | Default canvas, full-bleed bands. |
| 1 ——水面卡 | `{colors.surface-card}` (`#0a0a0c`) + 1px `{colors.hairline-strong}` | 特色卡,定价等级,形成投入. |
| 2 ——升职. | `{colors.surface-elevated}` (`#101012`) + 1px `{colors.hairline-strong}` | 特价级,鬼按钮. |
| 3 - 代码很好 | `{colors.surface-deep}` (`#06060a`) + 1px `{colors.hairline-strong}` | 密码窗口,终端弹壳。 |
| 4 - 大气光辉 | 低偏光度梯度( 微小的)`{colors.accent-*-glow}`) 锚在顶部的区块 | 科开机("整合本周末","电子邮件重构"). |

The system has **no traditional drop shadow language**. Every surface either gets a translucent-white hairline border or sits inside an atmospheric glow. The dark canvas absorbs shadow naturally; surfaces register depth via temperature and luminance shifts rather than blur.

### 装饰性深度
- **Atmospheric section glows** — six accent colours each with a paired glow token (orange, yellow, blue, green, red, plus a deep slate for "everything in your context"). Each section opens with a single radial wash anchored at the top edge of the section, falling off to canvas black within ~600px vertical distance. Never two glows in the same section.
- **电子邮件卡套件** ——"Beyond Everys"模拟乐队将一张单白的电子邮件卡从黑页面底色上抬起,使其成为系统中唯一真正的浅暗对比,卡片没有使用影子;对比本身就是高架.
- **密码窗口交通灯** — `{component.code-window}` 贝壳包括一行三个彩色点(红色) `{colors.accent-red}`黄色 `{colors.accent-yellow}`绿色 `{colors.accent-green}`),在顶部——所有三种语义色彩作为固体表面一起出现的唯一地方.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 首屏们 stripe满血的乐队,脚步。 |
| `{rounded.xs}` | 4px | 密码井内部的内置标记. |
| `{rounded.sm}` | 6px | 代码标签,中尺寸芯片. |
| `{rounded.md}` | 8px | 按钮,形成输入. |
| `{rounded.lg}` | 12px | 特色卡,定价等级,代码井,电子邮件模型. |
| `{rounded.xl}` | 16px | 更大的功能面板。 |
| `{rounded.full}` | 9999px | 胶囊形 状态点 贡献者阿凡达人. |

### 摄影几何
- 该系统几乎没有使用摄影. 视觉兴趣来自打字机+大气光线+代码井+白色的电子邮件卡插件.
- When portraits appear (testimonial avatars), they are circular (`{rounded.full}`) at 32px, sitting inline with body copy.
- 电子邮件模拟卡运行于 4:5 肖像面, 与 `{rounded.lg}` 转角


## 组件

### 按钮

**`button-primary`** 白色CTA( 白色 CTA)
- Background `{colors.primary}`, label `{colors.primary-on}`, type `{typography.button-md}`, padding `8px 16px`, `rounded: {rounded.md}`, height 36px.
- 页面底色上最亮的像素,用于“开始”、“签名”、“尝试” Resend".
- 国家住在这里 `button-primary-pressed` (背景情况) `{colors.surface-light}`).

**`button-ghost`** ——半透明CTA
- Background `{colors.surface-elevated}`, label `{colors.ink}`, 1px `{colors.hairline-strong}`, type `{typography.button-md}`, `rounded: {rounded.md}`, height 36px.
- 同等字重的二级动作配对 `{component.button-primary}`.

**`button-outline`** - 概述的《反恐协定》
- Background `{colors.canvas}`, label `{colors.ink}`, 1px `{colors.hairline-strong}`, type `{typography.button-md}`, `rounded: {rounded.md}`, height 36px.
- 三级动作; 以自己的方式出现在内含链接旁边.

### 纸牌和集装箱

**`hero-stripe`** ——满血首屏.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.display-xxl}` for the headline, padding `96px 32px`, `rounded: {rounded.none}`.
- Used only on the home page hero band; carries the 96px Domaine Display headline and a single `{component.button-primary}` CTA. No photography, no atmospheric glow inside the hero itself — the glow appears on the section that follows.

**`feature-card`** ——特色突出卡
- Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}` (32px).
- 在家里使用过 grid: "Despite emails using React", "So beyond editing", etc. No outline by default — relies on canvas black contrast.

**`feature-card-bordered`** - 概述的特征卡
- Background `{colors.surface-card}`, text `{colors.ink}`, 1px `{colors.hairline-strong}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}`.
- Used when feature cards sit close together and need explicit separation.

**`pricing-tier`** ——定价等级卡.
- Background `{colors.surface-card}`, text `{colors.ink}`, 1px `{colors.hairline-strong}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}` (32px).
- 分级名称在 `{typography.heading-md}` + 价格单位 `{typography.display-lg}` (ABC Favorit, 56px).

**`pricing-tier-featured`** — recommended tier
- Background `{colors.surface-elevated}`, text `{colors.ink}`, 1px `{colors.hairline-strong}`, type `{typography.body-md}`, `rounded: {rounded.lg}`, padding `{spacing.xxl}`.
- 中间层由表面亮度而不是颜色提升。

**`code-window`** - 代码很好
- Background `{colors.surface-deep}`, text `{colors.body}`, type `{typography.code-md}`, 1px `{colors.hairline-strong}`, `rounded: {rounded.lg}`, padding `{spacing.xl}` (24px).
- 包括a 3- 点点交通灯光排在顶端 `{colors.accent-red}` / `{colors.accent-yellow}` / `{colors.accent-green}` 铬,加上下面的标签条。

**`code-tab`** ——代码语言标签
- Background `{colors.surface-card}`, text `{colors.charcoal}`, type `{typography.code-md}`, `rounded: {rounded.sm}`, padding `6px 12px`.
- 活动制表符折叠文本到 `{colors.ink}` 并增加一个微妙的, `{colors.hairline-strong}` 下划线。

**`email-mockup`** 电子邮件卡套件
- Background `{colors.surface-card}` (or the rare `#ffffff` when rendered as a light-island inset), text `{colors.ink}` (or `{colors.on-light}` for white insets), type `{typography.body-md}`, `rounded: {rounded.lg}`, padding 0.
- 用来演示电子邮件输出。

### 输入表单( F)

**`text-input`** ——默认输入
- Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-sm}`, 1px `{colors.hairline-strong}`, `rounded: {rounded.md}`, padding `10px 14px`, height 40px.
- 注册和等待列表电子邮件字段。焦点状态将边框加厚到 `{colors.ink}` (无分别环色).

### 导航

**`nav-bar`** ——顶端导航(桌面).
- Background `{colors.canvas}`, text `{colors.body}`, type `{typography.button-sm}`, height 64px, single hairline `{colors.hairline}` bottom border.
- 左:字标记标志. 中:顶级导航("Features","Pricing","Docs","Customers") 右:"Sign in" 链接+ `{component.button-primary}`.

**`nav-bar`** (移动)
- 同样的高度 64px,将中心导航崩溃成汉堡图标。Logo 留在左侧,登录的 CTA 留在右侧。

**`sub-nav-pill`** 避孕药型 sub-nav
- 胶囊形在内容上方水平行设置(例如客户指数), `{component.sub-nav-pill}` 造型风格.

### 签名组件

**`badge-pill`** 中性胶囊形
- Background `{colors.surface-elevated}`, text `{colors.body}`, type `{typography.caption}`, `rounded: {rounded.full}`, padding `4px 10px`.
- Inline tags ("New", "Beta", "v3.0") inside hero copy and customer story headers.

**`status-dot`** − 状况指标
- Background `{colors.accent-green}`, `rounded: {rounded.full}`, 8px square.
- Inline indicator next to "Status: Operational" in the footer or system status references.

**`contributor-avatar`** ——证监会
- Background `{colors.surface-card}` placeholder, `rounded: {rounded.full}`, 32×32px.
- 与客户证词的内含.

**`footer`** ——全球页脚
- Background `{colors.canvas}`, text `{colors.charcoal}`, type `{typography.body-sm}`, `rounded: {rounded.none}`, padding `64px 32px`.
- Multi-column quick-links grid above a single-line copyright row separated by `{colors.divider-soft}`.


## 设计建议与禁忌

### 执行
- 使用 `{colors.canvas}` (真黑)作为默认的页面背景。每个公共页面都住在这里 。
- 准备金 `{component.button-primary}` 唯一一个坚固的亮光表面 最多每个视野一个
- 设置首屏头条 **Domaine Display** 时 间 76–96px 与 `lineHeight: 1.0` 财务报告和已审计财务报表 `ss01 / ss04 / ss11` 开始使用功能。
- 使用 **ABC Favorit** 市场营销机构, **Inter** 用于UI标签, **Geist Mono** 保持车道的严格
- Build elevation from translucent-white hairlines, not drop shadows.
- 使用 `{colors.accent-*-glow}` 象征低不透明度的光圈大气洗涤——从不像固体表面.
- 设置按钮和输入到 `{rounded.md}` (8px); 牌和密码井 `{rounded.lg}` (12px(胶囊形和假发) `{rounded.full}`.
- Use the white email-mockup inset sparingly — it's the only deliberately-light surface and should feel like a print pull-quote.

### Don't
- Don't use a near-black canvas. The brand sits on `#000000`, not `#0a0a0a`.
- 大气强调色符号不要用固体颜色. `{colors.accent-orange}` 光线是用来显示背景的。
- Don't add drop shadows to feature cards or code wells. Translucent white borders carry depth on this canvas.
- Don't bump body weight to 600 for emphasis. Use family change (Inter → ABC Favorit → Domaine Display) instead.
- Don't render code outside `{component.code-window}` — even small inline code uses Geist Mono and a `{colors.surface-card}` background.
- Don't loosen Domaine Display `lineHeight` past 1.0. Tight stacking is structural to the brand.
- Don't introduce a secondary brand accent. White is the brand on black — accents are atmospheric only.
- Don't bring photography front-and-centre. The brand reads as type-and-code, not photography-led.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Desktop XL | ≥ 1440px | Full max-width 1200 body, 3-up feature grid, side-by-side code-story splits. |
| 桌面 | 1280–1439px | 集装箱缩水; xl 侧垫。 |
| 块状大 | 1024–1279px | 特征网格保留 3- 上,代码记录 2- 起来 |
| 平板 | 768–1023px | 特性网格 2-上,代码层堆栈(上面是叙述式),定价层堆栈垂直. |
| 大型移动 | 426–767px | 特性网格 1-上; 导航崩溃到汉堡; 首屏 `{typography.display-xxl}` 夹子到 56px. |
| Mobile | ≤ 425px | All grids 1-up, hero clamps to 44px, section padding `{spacing.section}` collapses to 64px. |

### 触控区域
- 最少所有按钮 36px 高的桌面,缩放到 44px WCAG AAA通过移动方式开会。
- `{component.text-input}` is 40px tall — comfortable but not large. Mobile scales to 48px via padding.
- `{component.sub-nav-pill}` 留在原点 36px 桌面上, 40px 手机上,我刚从电话里找到的

### 折叠战略
- 顶级导航崩溃到汉堡 < 1024px; 字号和 `{component.button-primary}` 保持锚定。
- 首屏们 `{typography.display-xxl}` 夹子 : 96px → 76px → 56px → 44px 穿过断点梯子
- 定价 3- 垂直堆叠在 < 1024px 与突出的层次 剩下的中心设置。
- Code-story splits switch from side-by-side to stacked at < 1024px, code well always second.
- 大气的光度有节宽度,但保持同样的不透明度——它们在小的视点上自然消退.

### 图像行为
- 电子邮件模拟卡的重传 1:1 的边框,以保持可读性。
- 大气光是CSS梯度——没有资产成本,没有断点变化.
- 客户证物留下 32px circular 不论断点如何


## 迭代指南

1. Focus on ONE component at a time. Most surfaces share `{colors.surface-card}` or `{colors.surface-elevated}` with `{rounded.lg}` — only the role-specific tokens (`{colors.primary}`, `{component.code-window}`) shift between variants.
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component.button-primary-pressed}`, `{rounded.lg}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后; 孤箱警告会抓住未使用的条目。
4. 添加新的变体作为单独的条目( Q) :`-pressed`, `-featured`, `-disabled`)——不要用散文埋没.
5. 默认体型为 `{typography.body-md}`; 联系范围 `{typography.subtitle}` 只在首屏字幕上发的
6. 保留 `{colors.primary}` (白色)稀缺——如果每个视点出现一个以上的实心白色表面,则询问是否应该下降至 `{component.button-ghost}` 换成是的


## 已知缺口

- Pressed/active visual states are documented only for `button-primary-pressed`; other components rely on the default focus-ring (browser default) for interactive feedback.
- 登录进的仪表板表面(API键,发送日志,受众管理)已超出范围;只有公共营销页面底色有文献记载.
- 电子邮件-模板编辑器表面(一个关键产品特性)没有被提取——那些生活在认证后.
- 大气光照渲染使用CSS光圈梯度;准确的点和角度每个部分不同,没有标准化作为符号——每个部分的特定设计判断.

## 设计词元原值

Resend's marketing surfaces sit on a near-pure black canvas with off-white text and a single signature color — the deep editorial-serif Domaine Display headline mark — that gives an otherwise utilitarian developer-tool brand its print-magazine confidence. The system pairs Domaine Display (oversized 76px–96px serif, ss01/ss04/ss11 features on) with ABC Favorit for body and Inter for UI. Surfaces rely on subtle 6–9% opacity gradient glows, hairline 1px borders made from translucent white, and a strict rounded-12px container vocabulary. There is no decorative chrome — just type, code, and atmospheric depth.

```yaml
---
version: alpha
name: Resend-design-analysis
description: |
  Resend's marketing surfaces sit on a near-pure black canvas with off-white
  text and a single signature color — the deep editorial-serif Domaine
  Display headline mark — that gives an otherwise utilitarian developer-tool
  brand its print-magazine confidence. The system pairs Domaine Display
  (oversized 76px–96px serif, ss01/ss04/ss11 features on) with ABC Favorit
  for body and Inter for UI. Surfaces rely on subtle 6–9% opacity gradient
  glows, hairline 1px borders made from translucent white, and a strict
  rounded-12px container vocabulary. There is no decorative chrome — just
  type, code, and atmospheric depth.

colors:
  primary: "#fcfdff"
  primary-on: "#000000"
  ink: "#fcfdff"
  body: "rgba(252,253,255,0.86)"
  charcoal: "rgba(252,253,255,0.7)"
  mute: "#a1a4a5"
  ash: "#888e90"
  stone: "#464a4d"
  on-light: "#000000"
  on-light-mute: "rgba(0,0,51,0.7)"
  canvas: "#000000"
  surface-card: "#0a0a0c"
  surface-elevated: "#101012"
  surface-deep: "#06060a"
  hairline: "rgba(255,255,255,0.06)"
  hairline-strong: "rgba(255,255,255,0.14)"
  divider-soft: "rgba(255,255,255,0.04)"
  accent-orange: "#ff801f"
  accent-orange-glow: "rgba(255,89,0,0.22)"
  accent-yellow: "#ffc53d"
  accent-blue: "#3b9eff"
  accent-blue-glow: "rgba(0,117,255,0.34)"
  accent-green: "#11ff99"
  accent-green-glow: "rgba(34,255,153,0.18)"
  accent-red: "#ff2047"
  accent-red-glow: "rgba(255,32,71,0.34)"
  link: "#3b9eff"
  surface-light: "#f1f7fe"

typography:
  display-xxl:
    fontFamily: Domaine Display
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.96px
    fontFeature: "ss01, ss04, ss11"
  display-xl:
    fontFamily: Domaine Display
    fontSize: 76.8px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.768px
    fontFeature: "ss01, ss04, ss11"
  display-lg:
    fontFamily: ABC Favorit
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -2.8px
    fontFeature: "ss01, ss04, ss11"
  heading-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.4px
  heading-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.3px
  subtitle:
    fontFamily: ABC Favorit
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.3
    fontFeature: "ss01, ss04, ss11"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: ABC Favorit
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.8px
    fontFeature: "ss01, ss04, ss11"
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  button-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
  button-sm:
    fontFamily: ABC Favorit
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0.35px
    fontFeature: "ss01, ss03, ss04"
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  caption-emph:
    fontFamily: Helvetica
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
  code-md:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  xxxl: 48px
  section: 96px
  band: 128px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-on}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 36px
  button-primary-pressed:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.primary-on}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
  button-ghost:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 36px
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 7px 15px
    height: 36px
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
  hero-stripe:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xxl}"
    rounded: "{rounded.none}"
    padding: 96px 32px
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-card-bordered:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-featured:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  code-window:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.body}"
    typography: "{typography.code-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  code-tab:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.charcoal}"
    typography: "{typography.code-md}"
    rounded: "{rounded.sm}"
    padding: 6px 12px
  email-mockup:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 0
  badge-pill:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  status-dot:
    backgroundColor: "{colors.accent-green}"
    rounded: "{rounded.full}"
    size: 8px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.none}"
    height: 64px
  sub-nav-pill:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.body}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  contributor-avatar:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.full}"
    size: 32px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.charcoal}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 64px 32px
---
```
