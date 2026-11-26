# OpenCode · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

OpenCode's marketing site is rendered entirely in Berkeley Mono — every word on the page, from the 38px hero headline down to the 14px footer fine print, sits in the same monospaced face. The visual identity comes from that single typographic decision: the page reads like a manpage or a static-site README, complete with bracketed `[+]` / `[-]` / `[x]` ASCII markers used in place of icons or bullets, and a wordmark rendered as block-pixel ASCII art at the top of the nav. There is no sans-serif anywhere, no display face, no italics, no decorative ornament — the system is one font and one weight away from being a 1990s `whatis` page rendered at modern resolutions.

The chrome is austere: warm cream canvas (`{colors.canvas}` — `#fdfcfc` with a faint blush), nearly-black ink (`{colors.ink}` — `#201d1d`), and a 4-tier neutral gray ladder for body, metadata, and disabled text. Cards don't exist as raised surfaces — sections are just hairline-bordered text blocks (`{colors.hairline}` 1px) sitting directly on the canvas with `{spacing.section}` (96px) air between them. The single "visual" moment in the entire system is a full-bleed dark hero card (`{colors.surface-dark}` — true near-black) that mocks up the OpenCode TUI itself: a terminal frame with `tab` / `ctrl-p` keybinding hints, a "Build" command line, and the OpenCode wordmark rendered as a pixel-block ASCII title.

语义调色板对品牌营销网站来说很不寻常:它载着满载的 Apple 人际界面准则强调色坡道 - `{colors.accent}` (Apple 蓝色 `#007aff`), `{colors.danger}` (`#ff3b30`), `{colors.warning}` (`#ff9f0a`), `{colors.success}` (`#30d158`)加上他们的悬浮/活跃的加深——尽管营销本身只在黑暗首屏TUI模拟中使用这些颜色作为语法高光立体. 更大的调色板属于产品TUI;营销页面大多停留在单色.

**关键特征 :**
- 100% Berkeley Mono 横跨每个文本角色的打印——否 sans-serif 铬中任何地方的回落
- 暖奶油 热奶油 `{colors.canvas}` (#fdfcfc)作为唯一的身体背景——没有跨科的表面交替.
- 单色暗面( O)`{colors.surface-dark}` — #201d1d) 专供首屏TUI模拟
- 4px 半径( 4 )`{rounded.sm}`),在每个交互元素上;各部分本身是尖锐的矩形,与 1px 细边线
- ASCII 括号标记( 中标)`[+]`, `[-]`, `[x]`)作为图案列表和FAQ行中的弹格格言.
- Block-pixel ASCII 首发导航和首屏TUI内部的文字标记——品牌身份是自己的ASCII艺术
- 96px `{spacing.section}` rhythm between every section, with no decorative dividers; only thin 1px `{colors.hairline}` rules separate content blocks


## 配色

> **Source pages:** `/` (home), `/zen`, `/enterprise`. The chrome palette is identical across all three.

### 品牌和 强调色
- **墨水( 墨水 )** (`{colors.primary}` / `{colors.ink}` — `#201d1d`:品牌只有"彩色",头条,体文字,主CTA填充,导航链接,以及每个固态图标. 将近黑作为品牌颜色,而不是纯黑色,以保持类型可读性在暖奶油页面底色上.
- **墨水深处** (`{colors.ink-deep}` — `#0f0000`:按住主CTA的状态,搭载一个与页面底色的暖铸相匹配的微弱红色底色.
- **奶油** (`{colors.canvas}` — `#fdfcfc`:品牌的标志性温暖白色. 用于每个页面体,每个卡片表面, on-primary 文本颜色,然后在黑暗时填充 ASCII 字标记。

### 表面
- **油菜酱** (`{colors.canvas}` — `#fdfcfc`:每页体,每张牌.
- **软表面** (`{colors.surface-soft}` — `#f8f7f7`): text-input 默认背景, 验证行填充, 交替行锡。
- **表面卡片** (`{colors.surface-card}` — `#f1eeee`): install-snippet 丸,停用扣填,略贴节行.
- **表面暗色( T)** (`{colors.surface-dark}` — `#201d1d`:首屏TUI模拟背景和主页上暗的CTA丸. `{colors.ink}` ——品牌既使用文字,也使用暗面,使用一个近黑.
- **表面暗线** (`{colors.surface-dark-elevated}` — `#302c2c`:首屏TUI模拟中迅速排出,比暗表面本身轻一个不轻的音符.
- **细边线** (`{colors.hairline}` — `rgba(15,0,0,0.12)`): 1px 半透明暖色的衬衫 与奶油布的底色相符
- **发条坚固** (`{colors.hairline-strong}` — `#646262`: Tab 条的底部规则和更强的内线分割符.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — `#201d1d`:头条,正文文本,主导航链接,轻表面的按钮文本.
- **木炭矿** (`{colors.charcoal}` — `#302c2c`: 纯墨太重的地方,潜柔软的体型.
- **体质** (`{colors.body}` — `#424245`:默认段落文本和FAQ答案.
- **静音** (`{colors.mute}` — `#646262`:标签标签(默认状态),元数据,页脚链接文本,列表中的二级说明.
- **石头** (`{colors.stone}` — `#6e6e73`:最不强调的效用文本,面包屑分离器.
- **灰尘** (`{colors.ash}` — `#9a9898`: 暗的TUI模拟中已禁用文本和二次注释,同样是TUI模拟二次颜色.

### 语义
The full Apple Human Interface Guidelines semantic ramp ships with the system. On marketing pages these colors appear primarily inside the hero TUI mockup as syntax-highlight stand-ins; in the in-product TUI they carry their conventional meaning.

- **计费** (`{colors.accent}` — `#007aff`:主信息信号,产品内链接颜色,TUI命令亮点.
- **Accent Hover** (`{colors.accent-hover}` — `#0056b3`): pressed informational link.
- **活动** (`{colors.accent-active}` — `#004085`: 信息状态深陷压力.
- **危险** (`{colors.danger}` — `#ff3b30`:破坏性确认,错误状态.
- **危险** (`{colors.danger-hover}` — `#d70015`:按压破坏力.
- **危险活动** (`{colors.danger-active}` — `#a50011`: 深压破坏力.
- **警告** (`{colors.warning}` — `#ff9f0a`:小心点名.
- **警告缓冲** (`{colors.warning-hover}` — `#cc7f08`: 被加压的谨慎。
- **警告活动** (`{colors.warning-active}` — `#995f06`: 深为压抑的谨慎.
- **成功** (`{colors.success}` — `#30d158`:正确认,TUI成功指标.


## 字体排版

### 字体家族
**Berkeley Mono** is the proprietary monospaced face used across every text role in the system. It carries weights 400 (regular), 500 (medium), and 700 (bold) and falls back through a long monospace stack — IBM Plex Mono → ui-monospace → SFMono-Regular → Menlo → Monaco → Consolas → Liberation Mono → Courier New.

单调决定是品牌。没有显示面孔,没有身体的色素,没有斜体的替代,也没有回落到任何一处的成比例字体上——甚至合法的版权行使用 Berkeley Mono 时 间 14px。这是营销工具类任何网站最积极的印刷限制: OpenCode'身份是"营销页面是男性页面".

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 38px | 700 | 1.5 | 0 | 首屏头条("开源AI编码代理") 互联网档案馆的存档,存档日期2013-03-02. |
| `{typography.heading-md}` | 16px | 700 | 1.5 | 0 | Section label ("What is OpenCode?", "FAQ", "Built for privacy first") |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 复制本,段落文本, list-row 文本, 单词 install-snippet 代码 |
| `{typography.body-strong}` | 16px | 500 | 1.5 | 0 | Inline emphasis, primary nav link, tab-label active |
| `{typography.body-tight}` | 16px | 500 | 1 | 0 | 压缩标签,没有呼吸室 |
| `{typography.link-md}` | 16px | 400 | 1.5 | 0 | 内置的播音链接 |
| `{typography.button-md}` | 16px | 500 | 2 | 0 | 系统内每个按钮标签 |
| `{typography.caption-md}` | 14px | 400 | 2 | 0 | Footer link text, badge label, copyright row, chart caption |

### 原则
The hierarchy is built almost entirely from size and weight contrast on a single face. The display headline (38px / 700) and the heading-md label (16px / 700) share a weight; the difference is just size. Body and link share size, weight, and line-height — only context distinguishes them. Buttons get a deliberately tall line-height (2.0) so labels feel calmly spaced inside the 4px-radius rectangle.

### Note on Font Substitutes
Berkeley Mono 是一个付费的商业字体。 开源替代物, 大致相当于其度量值 。 ~3% 体积:
- **JetBrains Mono** 中风对比和x-高;重量对齐 400 / 500 / 700.
- **IBM 普莱克斯·莫诺** ——文献字体堆栈中的官方二次倒置;略多打开的计数器但匹配 line-height 行为
- **Geist Mono** ——具有类似几何构造的现代替代.

When substituting, line-height behavior is preserved by keeping `lineHeight: 1.5` for body and `lineHeight: 2` for buttons — adjusting weight is rarely needed.


## 布局

### 间距系统
- **基部单位:** 8px (加细 1/2/4px 用于弥补内在差距的可使用步骤)。
- **托肯斯(前题):** `{spacing.xxs}` (1px) · `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (16px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.section}` (96px).
- **通用节奏 :** 设定中的每个页面 `{spacing.section}` (96px)作为主要内容块之间的垂直差距。这是系统最大的间隔标志,也是整个家庭的主要布局提示, `/zen`,以及 `/enterprise` 页面。
- **内部科 padding:** content rows inside a section sit at `{spacing.lg}` (16px)垂直,没有水平的垫片——文本在部分的左边缘开始冲洗.

### 网格容器( C)
- **Max width:** ~960px content column for body sections; the dark hero TUI mockup is full-bleed within an outer ~1100px content frame.
- **Two-column split:** `/enterprise` pairs a left text block (~360px wide) with a right-aligned form column (~480px wide). The home page is single-column reading.
- **Footer:** 5-up horizontal link row (GitHub / Docs / Changelog / Discord / X) at desktop, collapsing to 2-up at tablet and 1-up at mobile.

### 白空间哲学
白空间是结构的,宽大的,部分坐着 96px 彼此之间没有装饰上的分界线, `{colors.hairline}` 1px 规则是分离的唯一信号。在一节中,内容是左倾对柱边缘,没有内部缩进;子弹使用ASCII括号前缀(`[+]` / `[-]`) 而不是缩进式布局,结果是一个页面,它感觉像一个打印代码列表,而不是一个风格化的营销布局.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | No border, no shadow | Default for body sections, list rows, hero text block, footer |
| 1 ——细边线规则. | 1px 固态 `{colors.hairline}` (透明暖锡) | 节分隔符,主要内容块之间 |
| 2 ——毛线坚固. | 1px 固态 `{colors.hairline-strong}` | 标签条底部规则, 列表中强调的分隔符 |
| 3 - 倒转的黑暗 | `{colors.surface-dark}` 填充( E) | 首屏TUI模拟,暗CTA丸——系统唯一的"外延"表面使用颜色,而不是阴影. |

系统没有投影,没有升起,没有浮起。元素将“上”另一个方法,就是首屏模拟中使用的暗表面。

### 装饰性深度
深度来自打字密度和单个深色的TUI模型,而不是来自CSS效果:
- **ASCII 块像素文字标记** - 电话 OpenCode 品牌名称已实现 5- 单间字符细胞的排块,用于主导航,并作为首屏TUI模型的中枢构件.
- **泰瑞首屏模拟** ——满血 `{colors.surface-dark}` 含有 faux 终端接口的矩形: ASCII 字标记, a `tui-prompt-row` 显示构建命令行,以及 `tab switch agent` / `ctrl-p commands` 键形绑定提示 `{colors.ash}` 位于底部边缘.
- **图表牌** ——主页"开源AI编码代理"STA块内三张薄线ASCII图表,其中抽象的点/sparse-line地块在 `{colors.body}` 夹在奶油布上, 夹在下面 `{typography.caption-md}` (`Fig 1. 150K GitHub Stars`, `Fig 2. 850 Contributors`, `Fig 3. 6.5M Monthly Devs`).


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 区域,首屏TUI模拟,主导航,脚步,列表行——每个不是按钮的容器 |
| `{rounded.sm}` | 4px | Every interactive element — primary CTA, secondary CTA, text inputs, install snippet, badges, prompt rows |
| `{rounded.full}` | 9999px | 试镜中的神通圆圈 |

半径词汇为两个值: 4px 用于互动要素和 0px 测试行中的神通圆是系统中唯一一个全圆的元素。

### 摄影几何
There is no photography. Visual elements are limited to:
- **ASCII block-pixel wordmark** in the nav and hero TUI mockup.
- **内置 ASCII 图表** 内 stat-block 区域 —— 抽象的零星线和点状地块,没有特定的数据点。
- **虚幻点** (~32px) 内证行上. `/zen` 平面彩色圆圈 `{rounded.full}`.
- **产品图标** (kbd, A+, QQ, Q, K, Z) 以小单位字符格调,而不是位图或SVG来渲染.


## 组件

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only.

### 按钮

**`button-primary`** ——普及性 OpenCode 反恐中心
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}`, padding `4px 20px`, height ~36px, rounded `{rounded.sm}` (4px).
- 用于"下载"(上载),"从禅开始","送"(企业联系表),"下载"(新闻字母页脚),"读道士_.
- 国家住在这里 `button-primary-active` - 后台空降为 `{colors.ink-deep}`.

**`button-secondary`** - 概述的备选案文
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-strong}` border, type `{typography.button-md}`, padding `4px 20px`, rounded `{rounded.sm}`.
- 低重点的CTA——出现在两个动作对齐的主要填充物旁边。

**`button-tab`** + **`button-tab-active`** 安装-塔布条
- 默认 : transparent 文本, 文本 `{colors.mute}`类型 `{typography.button-md}`, 编译 `8px 16px`,四舍五入 `{rounded.none}`.
- 活动: 相同的表面, 文本 `{colors.ink}`,带有 2px `{colors.ash}` 下划线显示选择。
- Used in the install-method tab strip on the home page (`curl` / `npm` / `bun` / `brew` / `yay`).

**`button-disabled`**
- Background `{colors.surface-card}`, text `{colors.ash}`, rounded `{rounded.sm}`.

### 徽章和芯片

**`badge-news`** ——新闻/公告条小暗芯片
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, type `{typography.caption-md}`, padding `2px 8px`, rounded `{rounded.sm}`.
- 坐在内侧,身体副本作为"新闻"/"Beta"/"Live now"标签在首屏头条上方的主页上.

**`badge-section-label`** - 括号内的一节标题
- Background transparent, text `{colors.ink}`, type `{typography.heading-md}`, rounded `{rounded.none}`.
- 裸露的发光 `**Heading**` 上行为 a 1px `{colors.hairline}` 规则没有芯片背景——但文本的读法("[+]","[x]"), `What is OpenCode?`)使其作为标签组件发挥作用。

### 输入表单( F)

**`text-input`** + **`text-input-focused`**
- Default: background `{colors.surface-soft}`, text `{colors.ink}`, 1px solid `{colors.hairline}`, type `{typography.body-md}`, padding `8px 12px`, height ~40px, rounded `{rounded.sm}`.
- 焦点:背景翻转到 `{colors.canvas}`,边框变为 1px 固态 `{colors.ink}` (页面底色的平焦信号——无光环,无光环).
- 用于每个联系人表格字段 `/enterprise` (全名、角色、公司、公司电子邮件、电话号码)和通讯电子邮件栏,在主页页页页脚上。

**`textarea`**
- Background `{colors.surface-soft}`, text `{colors.ink}`, 1px solid `{colors.hairline}`, type `{typography.body-md}`, padding `12px`, rounded `{rounded.sm}`.
- "你试图解决什么问题?"多行文本区域 `/enterprise`.

**`install-snippet`** ——主页的签名安装代码块
- Background `{colors.surface-card}` (`#f1eeee`), text `{colors.ink}` rendered in `{typography.body-md}` (already monospaced — Berkeley Mono), padding `12px 16px`, rounded `{rounded.sm}`.
- 包含字面 `curl -fsSL https://opencode.ai/install | bash` 命令,右边缘有小的复制相。在安装方法标签条下方。

### 纸牌和集装箱

**`hero-tui-mockup`** ——主页签名 TUI预览
- 集装箱:全血 `{colors.surface-dark}` (~近黑),贴 `64px 32px`,四舍五入 `{rounded.none}`.
- Contents (top → bottom): ASCII block-pixel "OPENCODE" wordmark centered in `{colors.on-dark}`; a `{component.tui-prompt-row}` showing a "Build" command line with model selector text; an `tab switch agent  ctrl-p commands` keybinding hint row at the bottom in `{colors.ash}`.

**`tui-prompt-row`** ——TUI模型内的内置命令行
- Background `{colors.surface-dark-elevated}` (`#302c2c`), text `{colors.on-dark}` in `{typography.body-md}`, padding `8px 12px`, rounded `{rounded.sm}`.
- 创建内置命令( R)`Build  Claude Opus 4.5  OpenCode Zen`),带有领先的垂直管,模型名称为括号内的符号样式.

**`list-row`** 带有ASCII括号圆形的特征/效益行
- Background `{colors.canvas}`, text `{colors.body}` in `{typography.body-md}`, padding `8px 0`.
- Each row begins with a `[+]` / `[-]` / `[x]` ASCII marker followed by a bold label and a regular description: e.g., `[+] LSP enabled    Automatically loads the right LSPs for the IDE`. The bracket marker is part of the text content, not a separate icon.

**`faq-row`** ——带括号切换的FAQ条目
- Background `{colors.canvas}`, text `{colors.ink}` in `{typography.body-md}`, padding `12px 0`, with a 1px `{colors.hairline}` bottom rule.
- Each row leads with `+` / `−` ASCII markers indicating expand/collapse state. Always rendered as plain text rows — no chevron icons, no animated accordion chrome.

**`testimonial-row`** — `/zen` 引用行对齐
- Background `{colors.surface-soft}`, text `{colors.body}` in `{typography.body-md}`, padding `16px 20px`, rounded `{rounded.sm}`.
- Layout: a 32px avatar circle (`{rounded.full}`) at left, name + role + company in `{typography.body-strong}` on the first line, quote in `{typography.body-md}` `{colors.body}` on the second line.

**`chart-tile`** - 电话 stat-block 线条图
- Background `{colors.canvas}`, text `{colors.body}` in `{typography.caption-md}`, rounded `{rounded.none}`, padding `16px`.
- 包含内含的 SVG/CSS 绘制的 ASCII 风格的稀疏线条图案( 刻录,抽象- 从未具体数据点) `Fig N. <stat label>` 标题在其中 `{colors.mute}`.

### 导航

**`primary-nav`**
- Background `{colors.canvas}`, text `{colors.ink}` in `{typography.body-strong}`, height ~56px, rounded `{rounded.none}`, with a 1px `{colors.hairline}` bottom rule.
- 版式(桌面):块像素ASCII OpenCode 左侧的字标记( Q)~120×24px), 导航链接集群中右侧(")GitHub [150K] · 医生 · 禅 · 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 进 `{component.button-primary}` "Download" CTA在极右侧带有少量下载glyph.

**顶部导航( 移动)**
- ASCII 字签留在左侧, 导航链接会倒塌到右侧的汉堡抽屉中。 下载 CTA 仍然在每个断点可见 。

### Footer

**`footer-section`**
- Background `{colors.canvas}`, text `{colors.body}` in `{typography.caption-md}`, padding `32px 0`, with a 1px `{colors.hairline}` top rule.
- 顶行 : 5-柱式横向链接网格(GitHub [150· 医生-变更日志 Discord ×),每个被分别作为中心单元,由 1px `{colors.hairline}` 垂直规则。
- 下行 : `©2026 Anomaly` 版权在左边, `Brand · Privacy · Terms · English ▼` 公用设备组位于右侧, 全部在 `{typography.caption-md}` `{colors.mute}`.

### 内置

**`link-inline`** ——体质-导引主机链接.
- `{colors.ink}` 文字加下划线。品牌唯一的链接负担能力——甚至身体内部链接段落使用墨水颜色而不是墨水颜色。 `{colors.accent}` 蓝色的。 Apple 蓝色是预留的用于产品TUI.


## 设计建议与禁忌

### 执行
- 将每个文本角色都显示在 Berkeley Mono。单峰决定是整个身份。
- Keep `{colors.canvas}` (`#fdfcfc`) as the only body background. Don't introduce gray section bands.
- 使用 ASCII 括号标记(`[+]`, `[-]`, `[x]`, `+`, `−`)作为子弹,切片,以及节格图案,是该品牌唯一的标志性图案.
- 锁定黑暗 `{component.hero-tui-mockup}` 每一个登陆页都作为首屏中心人物一次 绝不用暗色表面来表达身体内容
- 准备金 `{colors.accent}` (Apple 蓝色)和TUI州的其他语义坡道;营销铬保持单色.
- Use `{rounded.sm}` (4px) on every interactive element and `{rounded.none}` (0px) on every container.
- Stack content sections at `{spacing.section}` (96px) rhythm with only 1px `{colors.hairline}` rules between them.

### Don't
- Don't introduce a sans-serif body font, a display face, or an italic style. Berkeley Mono carries everything.
- Don't add drop shadows, gradients, or atmospheric backgrounds. The system is flat-on-cream.
- Don't replace the ASCII bracket markers with SVG icons. The brackets are the icons.
- Don't use the semantic accent ramp (`{colors.accent}`, `{colors.warning}`, `{colors.danger}`, `{colors.success}`) on marketing CTAs. They belong to the in-product TUI.
- Don't pad cards with 24px+ internal padding. List rows sit at 8px vertical; FAQ rows at 12px.
- Don't render the OpenCode wordmark as a vector logo. It is always block-pixel ASCII.
- Don't fill the hero TUI mockup with photography or illustration. It is text-only and always shows a faux terminal command line.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 桌面大块 | 1280px+ | 默认 —— 960px 内容栏, 5- 上行脚链接网格 |
| 桌面 | 1024px | 相同的布局; 导航仍然水平 |
| tablet | 850px | Footer collapses to 2-up grid; `/enterprise` two-column form stacks |
| tablet-narrow | 768px | Primary nav becomes hamburger drawer; Download CTA stays visible |
| 移动 | 640px | 单栏所有;首屏显示滴 38px → ~28px; 节贴紧 |

### 触控区域
All interactive elements meet WCAG AA at the ~36–40px height range. `{component.button-primary}` sits at ~36px with 20px horizontal padding. `{component.text-input}` and `{component.textarea}` sit at ~40px. `{component.button-tab}` rows in the install-method strip sit at ~32–36px depending on label length but extend to a full 44px tappable cell via inline padding. Footer links use `{typography.caption-md}` (14px) but receive ~28px line-height (caption-md is 2.0) plus 8px vertical padding for a comfortable ~44px tappable row.

### 折叠战略
- **初等导航 :** 桌面水平集群 ~ 平板内涵汉堡抽屉 768px。暗的“下载” CTA 保持所有宽度的可见度。
- **首屏TUI模拟:** 在每个断点上保持其全血色的暗表面; ASCII 字标比例尺和键装订的线条可能在窄屏幕上包裹到两行.
- **安装片段 + 标签条 :** 桌面固定宽的胶囊形 → 移动全宽的胶囊形,如果标签溢出,标签条上会带有水平滚动。
- **Footer:** 5-up horizontal link grid → 2-up at tablet → 1-up at mobile (each link becomes a full-width row).
- **`/enterprise` two-column layout:** desktop 50/50 → tablet stacks to single-column with the form below the text block.
- **科 科 padding:** `{spacing.section}` (96px(台式计算机) – 64px 平板电脑 48px 移动。
- **Hero headline:** `{typography.display-xl}` (38px) at desktop, scaling to ~28px at mobile, line-height holding at 1.5.

### 图像行为
There are no raster images in the system aside from the favicon and OG share image. Every visual element — wordmarks, charts, icons — is rendered as type or inline SVG and scales without aspect-ratio considerations.


## 迭代指南

1. 一次聚焦一个组件。 调用其 YAML 条目并验证每个属性解析 。
2. 直接引用组件名称和符号( Q)`{colors.ink}`, `{component.hero-tui-mockup}`, `{rounded.sm}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 自动发出警告。
4. 添加新的变体作为单独的组件条目( Q)`-active`, `-disabled`()——不要把他们埋在传言里.
5. 默认正文为 `{typography.body-md}`; 联系范围 `{typography.body-strong}` 用于强调; 储备金 `{typography.display-xl}` 严格地为页面顶部的首屏头条。
6. 保留 `{colors.surface-dark}` 稀有的——每页最多一个满血的暗模。 暗面是一个叙事装置,而不是铬处理。
7. When introducing a new component, ask whether it can be expressed with the existing ASCII-bracket + 4px-radius + Berkeley-Mono vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.


## 已知缺口

- **Mobile screenshots not captured** — responsive behavior synthesizes OpenCode's mobile pattern (hamburger drawer, single-column, footer accordion) from desktop evidence and the breakpoint stack.
- **Hover states not documented** by system policy.
- **产品TUI截图** 营销首屏模型不在被捕获的片段中; `opencode` 终端接口(完整的密钥绑定,面板,状态栏)在此不记录.
- **`/go` page** not extracted — the marketing page for the Go SDK likely shares the same chrome but introduces code-sample blocks not documented above.
- **窗体校验状态** (成功/错误的内含消息)在捕获的表面中不存在.

## 设计词元原值

A terminal-native marketing system rendered entirely in Berkeley Mono — every word on the page, from the hero headline down to the footer fine print, is monospaced. The page itself reads like a manpage or a static-site README: warm cream canvas (`#fdfcfc`), nearly-black ink (`#201d1d`), 4px-radius rectangles for the few interactive elements, and bracketed `[+]`/`[-]` ASCII markers used as bullets. The brand's only "visual moment" is a single dark hero card that mocks up the OpenCode TUI itself — black background, monospaced terminal output, ASCII pipe characters, and a wordmark rendered as block-pixel ASCII. Every section sits as a hairline-bordered text block on the cream canvas with no shadows, no gradients, no decorative imagery, and no non-monospaced character anywhere in the system.

```yaml
---
version: alpha
name: OpenCode-design-analysis
description: |
  A terminal-native marketing system rendered entirely in Berkeley Mono — every word on the page, from the hero headline down to the footer fine print, is monospaced. The page itself reads like a manpage or a static-site README: warm cream canvas (`#fdfcfc`), nearly-black ink (`#201d1d`), 4px-radius rectangles for the few interactive elements, and bracketed `[+]`/`[-]` ASCII markers used as bullets. The brand's only "visual moment" is a single dark hero card that mocks up the OpenCode TUI itself — black background, monospaced terminal output, ASCII pipe characters, and a wordmark rendered as block-pixel ASCII. Every section sits as a hairline-bordered text block on the cream canvas with no shadows, no gradients, no decorative imagery, and no non-monospaced character anywhere in the system.

colors:
  primary: "#201d1d"
  on-primary: "#fdfcfc"
  ink: "#201d1d"
  ink-deep: "#0f0000"
  charcoal: "#302c2c"
  body: "#424245"
  mute: "#646262"
  stone: "#6e6e73"
  ash: "#9a9898"
  canvas: "#fdfcfc"
  surface-soft: "#f8f7f7"
  surface-card: "#f1eeee"
  surface-dark: "#201d1d"
  surface-dark-elevated: "#302c2c"
  hairline: "rgba(15,0,0,0.12)"
  hairline-strong: "#646262"
  on-dark: "#fdfcfc"
  on-dark-mute: "#9a9898"
  accent: "#007aff"
  accent-hover: "#0056b3"
  accent-active: "#004085"
  warning: "#ff9f0a"
  warning-hover: "#cc7f08"
  warning-active: "#995f06"
  danger: "#ff3b30"
  danger-hover: "#d70015"
  danger-active: "#a50011"
  success: "#30d158"

typography:
  display-xl:
    fontFamily: Berkeley Mono
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  heading-md:
    fontFamily: Berkeley Mono
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: Berkeley Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: Berkeley Mono
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  body-tight:
    fontFamily: Berkeley Mono
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  link-md:
    fontFamily: Berkeley Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button-md:
    fontFamily: Berkeley Mono
    fontSize: 16px
    fontWeight: 500
    lineHeight: 2
    letterSpacing: 0
  caption-md:
    fontFamily: Berkeley Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 2
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  full: 9999px

spacing:
  xxs: 1px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 4px 20px
    height: 36px
  button-primary-active:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 4px 20px
  button-tab:
    backgroundColor: "transparent"
    textColor: "{colors.mute}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 8px 16px
  button-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
  button-disabled:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ash}"
    rounded: "{rounded.sm}"
  badge-news:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  text-input:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
    height: 40px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  textarea:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px
  install-snippet:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  hero-tui-mockup:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 64px 32px
  tui-prompt-row:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  list-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 8px 0px
  faq-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 12px 0px
  testimonial-row:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px 20px
  chart-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
    padding: 16px
  primary-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    height: 56px
  footer-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
    padding: 32px 0px
  link-inline:
    textColor: "{colors.ink}"
    typography: "{typography.link-md}"
  badge-section-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.none}"
---
```
