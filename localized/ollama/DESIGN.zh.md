# Ollama · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Ollama's site is the most aggressively under-designed marketing surface in the AI tooling space, and that is the entire point. The home page reads like a Markdown README rendered with care: a 36px center-aligned heading sits above an inline `curl` install snippet inside a soft-gray pill, a single black "Download" CTA, and a hand-drawn llama mascot as the only ornament. Everything else — automate-your-work block, "Start local. Scale cloud." pricing pair, "Your data stays yours" guarantee strip, FAQ wall on `/pricing` — sits on the same paper-white canvas (`{colors.canvas}`) with quiet `{colors.body}` neutrals carrying the prose. The system is the documentation, and the documentation is the system.

设计哲学是几何:每个交互元素崩溃到 `{rounded.full}` (9999px)——扣子,搜索胶囊形, install-snippet 胶囊形、文字输入和终端-交通-光线点。没有装饰性的投影、没有梯度、没有首屏插图。卡片(罕见的,在 `/pricing`)使用软 `{rounded.lg}` (12px)和a 数据 1px 细边线 整个系统中的单反转瞬间是暗黑的"Max"定价级——. `{colors.surface-dark}` 白色文字——在原本平整的布局中,它充当唯一一个注意的表面。

字型对 SF Pro Rounded (显示标题、 字重) 500–600)与操作系统的默认sans(`ui-sans-serif`用于身体和 `ui-monospace` 头面的圆形是界面框架带的唯一"个性"——它轻轻地回响了 `{rounded.full}` 按钮几何,而不对其装饰。

**关键特征 :**
- 纸张- 白色 `{colors.canvas}` 端到端没有表面交替——整页是一个连续的工作表
- 中心与相邻的首屏 `{typography.display-xl}` SF Pro Rounded 标题,没有眉毛,除了小的“Power OpenClaw”之外,没有小标题 Ollama" 阿拉马山下行
- 胶囊形几何:每根按钮和胶囊形输入 `{rounded.full}`; 使用牌类 `{rounded.lg}`;除了分块者外,没有一件是尖锐的。
- 单色 CTA 系统:纯黑色 `{colors.primary}` 胶囊形每一次动作都带; 定价卡内只有"Get Pro"/"Get Max"的变体
- 内置 `curl` 安装片段作为避孕药提供 `{typography.code-md}` ——最标志元素,直接坐在首屏头条下.
- 带有macOS交通灯点和内置的终端模拟卡 `ollama launch openclaw` 例子——主页唯一的"产品预览"
- Inverted dark `{component.pricing-card-dark}` for the highest-tier "Max" plan, breaking the flat-white rhythm exactly once per page


## 配色

> **Source pages:** `/` (home) and `/pricing`. The chrome palette is identical across both — only content changes.

### 品牌色与强调色
- **纯黑色** (`{colors.primary}` — `#000000`:品牌,每个主CTA,每个黑丸,每个导航中的链接,以及每个固态图标,没有其他"品牌颜色".
- **墨水深处** (`{colors.ink-deep}` — `#090909`:按压状态黑为主药——纯度以下的单点.

### 界面表面
- **页面底色** (`{colors.canvas}` — `#ffffff`:页本身,几乎是系统的每一面表面.
- **软表面** (`{colors.surface-soft}` — `#fafafa`): install-snippet 胶囊形背景,搜索胶囊形,二次芯片背景, 交替填满需要的一排。
- **表面暗色( T)** (`{colors.surface-dark}` — `#171717`:暗黑的"Max"定价卡和暗的CTA条,系统中的单反面.
- **细边线** (`{colors.hairline}` — `#e5e5e5`): 1px 牌面边框,页脚上方的分隔线,FAQ行之间的分隔线.
- **发条坚固** (`{colors.hairline-strong}` — `#d4d4d4`: 罕见的略强分化器,其中需要额外分离(例如,在无关的FAQ组之间).

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#000000`:所有头条,主导航链接,轻表面的按钮文本,定价卡的价格.
- **木炭矿** (`{colors.charcoal}` — `#525252`): list-item 文本和禁用状态的二级副本。
- **体质** (`{colors.body}` — `#737373`:段落副本的默认正文颜色,FAQ答案,页脚链接文本——系统纯黑后使用最多的文本颜色.
- **静音** (`{colors.mute}` — `#a3a3a3`:标题文本,命令行"评论"灰色在终端模型内,最小的强调的效用文本.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): primary text on `{colors.surface-dark}`.
- **暗哑** (`{colors.on-dark-mute}` — `rgba(255,255,255,0.7)`: 暗黑"马克斯"定价卡内二级拷贝.

### 语义色
系统实际上在其公共营销表面没有错误/成功/警告调色板——没有验证状态,没有破坏性流量,也没有横幅. 唯一"语义"色彩是终端模拟器内的macOS终端交通灯:

- **终端红** (`{colors.terminal-red}` — `#ff5f56`:近窗点.
- **终端黄色** (`{colors.terminal-yellow}` — `#ffbd2e`: 最小点.
- **终端绿色** (`{colors.terminal-green}` — `#27c93f`:缩放点.

These appear only inside `{component.terminal-card}` and have no other use.

### 焦点
- **焦点环** (`{colors.focus-ring}` — `rgba(59,130,246,0.5)`:半透明蓝色浏览器-默认焦点环绕交互元素,是系统中唯一的蓝色.


## 字体排版

### 字体族
- **SF Pro Rounded** (display headings) — Apple's rounded geometric sans, used at weights 500 and 600 for headlines from `{typography.display-xl}` (36px) down to `{typography.heading-lg}` (24px). Falls back to `system-ui` → `-apple-system`.
- **ui-sans-serif** (body, links, buttons, captions) — the operating system's default sans-serif. Carries every non-display text role at 12–20px. Falls back through `system-ui` and platform emoji families.
- **ui-monospace** (code, install snippet, command tags) — the OS default monospace. Used inside the terminal mockup, the inline `curl` install pill, and any inline `<code>` formatting. Falls back to SFMono-Regular → Menlo → Monaco → Consolas.

组合 SF Pro Rounded 显示 + 系统 sans body + 系统单码是故意的“ 库存 ” Apple" ——设计决定是没有打字的决定. 品牌显示面像会与系统的文件感觉竞争.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 36px | 500 | 1.11 | 0 | 首屏头条("开阔模型最容易构建的方法"). |
| `{typography.display-lg}` | 30px | 500 | 1.2 | 0 | Major section headlines ("Pricing", "Frequently asked questions") |
| `{typography.heading-lg}` | 24px | 600 | 1.33 | 0 | 部分在体内的子标题("自动工作","开始本地化,缩放云"). |
| `{typography.heading-md}` | 20px | 500 | 1.4 | 0 | 定价等级名称 ("Free", "Pro", "Max"), 牌名 |
| `{typography.heading-sm}` | 18px | 500 | 1.56 | 0 | FAQ 问题标签, 收件字幕 |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 默认正文、 FAQ 答案、 段落副本 |
| `{typography.body-strong}` | 16px | 500 | 1.5 | 0 | 突出重点, primary-nav 链接 |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | 特性弹("在数据中心级硬件上访问更大的模型"),页脚链接 |
| `{typography.body-sm-strong}` | 14px | 500 | 1.43 | 0 | 按钮标签, pricing-card 眉毛("保护更难的任务,更快") |
| `{typography.caption-sm}` | 12px | 400 | 1.33 | 0 | 最小页脚版权行 meta 文本 |
| `{typography.code-md}` | 16px | 400 | 1.5 | 0 | Install-snippet `curl` 线条, 内置命令 |
| `{typography.code-sm}` | 14px | 400 | 1.43 | 0 | 终端输出线, 内置 `<code>` 芯片 |
| `{typography.button-md}` | 14px | 500 | 1 | 0 | 系统内每个按钮标签 |

### 原则
The typography is built for legibility at small sizes on a flat-white canvas. SF Pro Rounded's softened terminals on the heading face do almost all of the brand expression; everything below 20px collapses into the operating system's default sans, which renders identically to the way docs.ollama.com and the Ollama CLI's own help text would appear in a terminal. There is almost no letter-spacing variation, no display-only weights, no italic, and the heading-to-body ratio compresses tightly (36 → 30 → 24 → 20 → 16) so the page reads as a single readable column rather than a marketing pyramid.

### 替代字体
SF Pro Rounded is Apple-licensed and ships only on macOS/iOS. On other systems it falls back to `system-ui` (Segoe UI / Roboto / DejaVu Sans depending on platform) — Ollama explicitly accepts that the heading face will look slightly different on Windows/Linux. The closest open-source substitute is **Nunito** (rounded geometric sans, weights 500/600). For the body face, **Inter** is a near-perfect match for `system-ui` rendered metrics. For code, **JetBrains Mono** or **Fira Code** are the canonical open-source substitutes for `ui-monospace`.


## 布局

### 间距系统
- **基部单位:** 8px (加细 2/4/6px 用于弥补内在差距的步骤)
- **托肯斯(前题):** `{spacing.xxs}` (2px) · `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (16px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.section}` (88px)
- **Universal section rhythm:** every page uses `{spacing.section}` (88px) as the vertical gap between major content blocks (hero → automate → start local/scale cloud → your data stays yours → get-started footer call). This is the single largest spacing token in the system and it is used liberally.
- **Card internal padding:** pricing cards sit at `{spacing.xxl}` (32px) all around; FAQ rows use `{spacing.lg}` (16px) vertical with no horizontal padding.

### 网格与容器
- **最大 width:** ~720px content column on the home page (the whole page is laid out as a single narrow reading column with optional 2-column splits inside specific sections).
- **定价 grid:** 3-up cards at desktop with a max content width of ~960px; 崩溃为 1- 上层 768px.
- **自动分割工作 :** 桌面 50/50 左文本/右文本-刻度-缩放;移动堆栈垂直,文本下方的终端。
- **问:** 单柱叠行,全线 720px 内容栏。
- **Footer:** single-row of small body-sm links, center-aligned at desktop, wrapping to two rows on narrow screens.

### 留白规则
Whitespace is the entire layout. Sections are separated by 88px of plain white air, never by decorative dividers, never by colored bands. Inside a section, content sits in a tight reading column with no decorative columns, callout boxes, or lifted cards. The site treats the page as a long-form Markdown document, and the air between sections is the equivalent of a blank line in Markdown source.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | No border, no shadow | Hero, automate-your-work, your-data-stays-yours, footer — the dominant treatment across the page |
| 1 —— 细边线边界 | 1px 固态 `{colors.hairline}` | 定价卡、FAQ排位符、终端模拟卡 |
| 2 - 倒转的黑暗 | `{colors.surface-dark}` 填充( E) | 暗"Max"定价卡和暗的CTA条——系统唯一的"贴近"表面使用颜色,而不是阴影 |

The system has no drop-shadow elevation at all. Nothing lifts, nothing floats, nothing layers. The only depth cue beyond hairline borders is the single dark surface used on the highest-tier pricing card to draw attention to it.

### 装饰性深度
该网站在传统意义上实际上零装饰深度,"深度"完全来自两个反复出现的设备: .
- **手拉手的拉玛吉祥物** ——一次出现在首屏的顶部,一次出现在每张定价卡的顶部,一次出现在"你的数据会保留你的"部分的锁图标旁边,这是系统中唯一的插图.
- **单行驱动锁图标** 数据存储部分使用。 `{colors.ink}`.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | Nav, footer, FAQ row dividers — flat structural lines |
| `{rounded.sm}` | 6px | 内置代码芯片, 命令标记 |
| `{rounded.md}` | 8px | 稀有中射线表面(如落地板) |
| `{rounded.lg}` | 12px | 定价卡、终端模拟卡 |
| `{rounded.full}` | 9999px | Every button, every pill input, install-snippet pill, search pill, traffic-light dots |

主要的形状词汇只是两个值:丸(pills, 或 label)`{rounded.full}`用于一切互动和 12px (`{rounded.lg}`),对于系统中的几张牌,没有中度的"软牌"——表面是胶囊形或长方形,角子大到可以读作故意软.

### 图片形状
There is no photography. The only image-like elements are:
- **The llama mascot** — a hand-drawn line illustration, ~80–120px on the hero, ~32–48px when it appears as a pricing-card eyebrow icon.
- **锁图标** ——隐私部分的单中风线绘制.
- **macOS 交通灯点** - 三个圆圈 12px (`{rounded.full}`)在终端模拟卡内.


## 组件

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only.

### 按钮

**`button-primary`** ——普及性 Ollama 反恐中心
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}`, padding `8px 20px`, height `36px`, rounded `{rounded.full}`.
- 用于"Download"(顶级导航),"Sign in"(顶级导航,与Download对齐),"创造账户","Get Pro","Get Max"——系统中的每一个主动作.
- 国家住在这里 `button-primary-active` - 后台空降为 `{colors.ink-deep}`.

**`button-secondary`** 光帆上概述替代方案
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-strong}`, type `{typography.button-md}`, padding `8px 20px`, height `36px`, rounded `{rounded.full}`.
- 用作二级支付能力——如在顶部的导航上与黑色的"下载"胶囊形对齐时的"签入"胶囊形,"见更多apps →"箭头连结,呈紧凑状.

**`button-pill-on-dark`** ——在暗面上放白胶囊形.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button-md}`, rounded `{rounded.full}`.
- 坐在暗黑的"Max"定价卡内作为"Get Max"的CTA——颠倒标准主机,因此暗卡本身成为视觉主机,白药读作CTA.

**`button-disabled`**
- Background `{colors.surface-soft}`, text `{colors.mute}`, rounded `{rounded.full}` — flat soft gray.

### 输入框与表单

**`search-pill`** + **`search-pill-focused`**
- Default: background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.body-sm}`, padding `8px 16px`, height `36px`, rounded `{rounded.full}`. Anchored in the center of the primary nav with a small magnifier icon prefix and "Search models" placeholder.
- 焦点:背景翻转到 `{colors.canvas}` 和浏览器默认 `{colors.focus-ring}` 半透明蓝环出现.

**`text-input`** + **`text-input-focused`**
- Default: background `{colors.canvas}`, 1px solid `{colors.hairline}`, type `{typography.body-md}`, padding `8px 16px`, height `40px`, rounded `{rounded.full}`.
- 重点: 1px 墨水边框 + 浏览器- 默认焦点环 。

**`install-snippet`** ——签名安装避孕药
- Background `{colors.surface-soft}`, text `{colors.ink}` rendered in `{typography.code-md}`, padding `12px 20px`, height `48px`, rounded `{rounded.full}`.
- Contains the literal `curl -fsSL https://ollama.com/install.sh | sh` install command with a small copy-icon at the right edge. Sits directly below the hero headline as the page's most prominent "CTA."

**`command-tag`** ——小内置命令芯片
- Background `{colors.surface-soft}`, text `{colors.ink}` in `{typography.code-sm}`, padding `6px 12px`, rounded `{rounded.full}`.
- 用于“自动工作”部分 `ollama launch openclaw` 示例芯片和类似的内置命令演示。

### 卡片与容器

**`terminal-card`** ——主页仅"产品预览".
- 集装箱:背景 `{colors.canvas}`, 1px 固态 `{colors.hairline}`, 编译 `{spacing.lg}` (16px),四舍五入 `{rounded.lg}`.
- Header: three `{component.terminal-traffic-lights}` dots (red/yellow/green at 12px) anchored to the top-left of the card.
- 机体: 终端输出 `{typography.code-sm}` 注释输入 `{colors.mute}` 和活动命令 `{colors.ink}`.

**`terminal-traffic-lights`**
- 三个 12px 圆圈填满 `{rounded.full}`: `{colors.terminal-red}`, `{colors.terminal-yellow}`, `{colors.terminal-green}`。坐着作为三排 `{spacing.xs}` 终端卡片头内的点间间空格。

**`pricing-card`** ——自由/Pro级
- 集装箱:背景 `{colors.canvas}`, 1px 固态 `{colors.hairline}`, 编译 `{spacing.xxl}` (32px),四舍五入 `{rounded.lg}`.
- Layout: small llama mascot icon (~32px) at top, tier name in `{typography.heading-md}`, one-line tier description, large price in `{typography.display-lg}` (`$0` / `$20`), single `{component.button-primary}` CTA, divider, `{typography.body-sm-strong}` "Everything in Free, plus:" header, list of `{component.feature-bullet}` rows.

**`pricing-card-dark`** 最大级(倒数)
- Identical layout to `pricing-card` but with `{colors.surface-dark}` background, `{colors.on-dark}` text, `{colors.on-dark-mute}` secondary text, and `{component.button-pill-on-dark}` CTA. The inversion is the system's single "look here" cue.

**`feature-bullet`** ——定价卡单项目.
- 内置 `✓` 检查标记 `{colors.ink}` 之后是 `{typography.body-sm}` 文本在 `{colors.charcoal}`。没有背景、没有边框,只是堆叠行 `{spacing.sm}` 彼此之间

**`faq-row`** — `/pricing` 财务问题条目
- 集装箱:背景 `{colors.canvas}`, 编译 `16px 0`, 1px 底边框 `{colors.hairline}`.
- 问: `{typography.heading-sm}` (18px / 500) 中, `{colors.ink}`.
- 答: 问: `{typography.body-md}` (16px / 400) 中, `{colors.body}`,直接坐在问题下面 `{spacing.xs}` 间隙 总是扩张 手风琴不会崩溃

**`cta-strip-dark`** 罕见的暗 CTA 带
- Background `{colors.surface-dark}`, text `{colors.on-dark}` in `{typography.heading-lg}`, padding `24px 32px`, rounded `{rounded.lg}`. Used sparingly between sections.

### 内置

**`link-inline`** ——体质-导引主机链接.
- `{colors.ink}` 文本带有下划线。默认装饰是 `text-decoration: underline`.

**`link-mute`** ——长式传教品的二级锚定.
- `{colors.body}` 带有下划线的文本,默认情况下出现 —— 用于 FAQ 答案( “参见” [hello@ollama.com](mailto:)")和脚.

### 导航

**`primary-nav`**
- Background `{colors.canvas}`, text `{colors.ink}`, height 56px, type `{typography.body-sm-strong}`, rounded `{rounded.none}`.
- Layout (desktop): llama icon (left) followed by "Models · Docs · Pricing" text links, centered `{component.search-pill}`, and a right cluster of "Sign in" + black `{component.button-primary}` "Download".

**顶部导航( 移动)**
- Llama icon at left, hamburger drawer trigger at right. Search pill expands to full-width when triggered. The drawer lists "Models · Docs · Pricing · Sign in · Download" stacked vertically with `{spacing.lg}` row gaps.

### Footer

**`footer-section`**
- Background `{colors.canvas}`, 1px top border `{colors.hairline}`, padding `32px 24px`, type `{typography.caption-sm}` `{colors.body}`.
- Single horizontal row of small links: "Download · Blog · Docs · GitHub · Discord · X · Contact · Privacy · Terms" + a "© 2026 Ollama" copyright at the right edge. Wraps to two rows on narrow screens.


## 设计建议与禁忌

### 建议做法
- 将页面当作马克下文档: 单读列, 大量 `{spacing.section}` 隔节间空气,没有装饰的分隔器.
- 使用 `{component.button-primary}` 每一个主动作都没有绿色,蓝色,没有品牌的特制CTA.
- Default to `{rounded.full}` for any interactive element. Cards get `{rounded.lg}` (12px) and that is the only exception.
- 使用 `{typography.display-xl}` SF Pro Rounded 给首屏头条和 `{typography.body-md}` 系统 sans 用于其他所有。避免中间显示大小。
- 准备金 `{component.pricing-card-dark}` (反向的暗面)每个页一页一"看这里"的准确时刻——永远不要使用两次.
- 内部安装命令和 CLI 示例 `{component.install-snippet}` 或 `{component.terminal-card}` 配合 `{typography.code-md}` / `{typography.code-sm}`。代码是一等元件。
- 保留这个系统唯一的插图,就是这个品牌。

### 应避免的做法
- 切勿引入梯度、 抛光阴影或大气背景。 页面底色是纯的 。 `{colors.canvas}`.
- Don't add brand colors. The system is `{colors.primary}` (black) on `{colors.canvas}` (white) with `{colors.body}` (gray) text. That is it.
- Don't soften pills or sharpen cards — pills stay `{rounded.full}`, cards stay `{rounded.lg}`. Don't introduce `{rounded.md}` for buttons or `{rounded.full}` for cards.
- Don't lift cards with shadows. Use a 1px `{colors.hairline}` border or invert to `{colors.surface-dark}` — those are the only two card treatments.
- Don't replace `ui-sans-serif` with a branded display body face. The system relies on `system-ui` rendering to feel native.
- Don't fill long-form pages with marketing chrome. FAQ answers stay in `{colors.body}` body-md prose with no decorative containers.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 桌面大块 | 1280px+ | 默认桌面 - 720px 内容栏, 3- 上标网 |
| 桌面 | 1024px | 相同的布局; 导航仍然水平 |
| 平板电脑 | 850px | 定价崩溃从 3- 最多为 2- 上层+ 1; 导航搜索胶囊形压缩 |
| 平板内窄 | 768px | 定价崩溃到 1- 堆叠;主导航成为汉堡包 |
| mobile | 640px | Hero headline drops from `{typography.display-xl}` (36px) to ~28px; install-snippet wraps; section padding tightens |

### 触控区域
All interactive elements meet WCAG AA at the 36–40px height range. `{component.button-primary}` and `{component.button-secondary}` sit at 36px height with 20px horizontal padding, giving an effective tappable area of ~36×80px which exceeds the 44×44px AAA threshold via the inline padding. `{component.text-input}` sits at 40px. `{component.search-pill}` sits at 36px height with 16px padding. Footer links use `{typography.caption-sm}` (12px) but receive ~12px line-height + ~8px vertical padding for a tappable row of ~32–36px.

### 窄屏布局调整
- **初等导航 :** 桌面水平 ~ 平板窄汉堡抽屉 768px。黑色的“下载” CMA 保持所有宽度可见;它永远不会倒塌到菜单中。
- **搜索胶囊形 :** 桌面 fixed 宽度 ~360px □ 平板压缩为 ~240px ~ 移动崩溃到只使用图标, 并有全宽覆盖的水龙头.
- **定价 grid:** 3-up → 2+1 → 1-up stacked at 850, 768, and below. The dark "Max" card stays in its inverted treatment at every breakpoint.
- **自动分割工作 :** 桌面 50/50 ——平板堆放垂直,文本位于终端模拟之上.
- **Hero headline:** `{typography.display-xl}` (36px) at desktop, scaling to ~28px at mobile with line-height holding at ~1.15.
- **区域间距 :** `{spacing.section}` (88px(台式计算机) – 64px 平板电脑 48px 移动。
- **Install-snippet 胶囊形:** 包装 `curl` 文本改为在窄屏幕上第二行而不是截断; 复制的相册仍固定在右边缘。

### 图片适配
唯一图像资产是Lama吉祥物(在多个分辨率下为raster PNG ) : 16/32/48/64/180/192/512px) 。 于 fixed 首屏和定价卡上的像素尺寸而不是按应答的缩放——品牌资产被当成一个标志,而不是首屏形象.


## 迭代指南

1. 一次聚焦一个组件。 将 YAML 输入从前置事务中拉出, 并验证每个属性解析 。
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component.button-primary-active}`, `{rounded.full}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 自动发出警告。
4. 添加新的变体作为单独的组件条目( Q)`-active`, `-disabled`, `-focused`()——不要把他们埋在传言里.
5. Default body to `{typography.body-md}`; reach for `{typography.body-sm}` for footer/utility text; reserve `{typography.display-xl}` strictly for the page-top headline.
6. Keep `{colors.primary}` scarce per viewport — there should be at most one black pill per fold (counting nav, hero CTA, and pricing-card CTA together). The design's restraint is the design.
7. When introducing a new component, ask whether it can be expressed with the existing pill + flat-card + terminal-mockup vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.


## 已知缺口

- **Mobile screenshots not captured** — responsive behavior synthesizes Ollama's known mobile pattern (hamburger drawer, 1-up pricing stack, install-snippet wrap) from desktop evidence and the extracted breakpoint stack.
- **Hover states not documented** by system policy.
- **窗体字段样式** 搜索和搜索之外 install-snippet 捕获的表面没有——在主页或定价页上没有可见的长式表格。
- **Authenticated chrome** (account dropdown, billing settings, model dashboard) not in the captured pages.
- **模型/文件页** 不属于所捕获的一组——这些表面可能添加一个侧边栏和文档没有描述的文档打印级.

## 设计词元原值

An almost defiantly minimal documentation-first system that treats the home page like a Markdown README — paper-white canvas, 36px center-aligned heading, a single black pill CTA, an inline terminal install snippet, and a hand-drawn llama mascot as the only ornamental element. No gradient, no hero photography, no marketing pyrotechnics. The chrome is a tiny utility palette of pure black, pure white, and three neutral grays; every interactive element is fully rounded into a pill (`{rounded.full}`); typography is SF Pro Rounded for headings paired with system sans for body and ui-monospace for code. Pricing tiers, FAQs, and "your data stays yours" guarantees all sit on the same flat canvas inside thin-border cards — the system is the documentation, and the documentation is the system.

```yaml
---
version: alpha
name: Ollama-design-analysis
description: |
  An almost defiantly minimal documentation-first system that treats the home page like a Markdown README — paper-white canvas, 36px center-aligned heading, a single black pill CTA, an inline terminal install snippet, and a hand-drawn llama mascot as the only ornamental element. No gradient, no hero photography, no marketing pyrotechnics. The chrome is a tiny utility palette of pure black, pure white, and three neutral grays; every interactive element is fully rounded into a pill (`{rounded.full}`); typography is SF Pro Rounded for headings paired with system sans for body and ui-monospace for code. Pricing tiers, FAQs, and "your data stays yours" guarantees all sit on the same flat canvas inside thin-border cards — the system is the documentation, and the documentation is the system.

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#000000"
  ink-deep: "#090909"
  charcoal: "#525252"
  body: "#737373"
  mute: "#a3a3a3"
  canvas: "#ffffff"
  surface-soft: "#fafafa"
  surface-card: "#ffffff"
  hairline: "#e5e5e5"
  hairline-strong: "#d4d4d4"
  on-dark: "#ffffff"
  on-dark-mute: "rgba(255,255,255,0.7)"
  surface-dark: "#171717"
  focus-ring: "rgba(59,130,246,0.5)"
  link: "#000000"
  link-mute: "#737373"
  terminal-red: "#ff5f56"
  terminal-yellow: "#ffbd2e"
  terminal-green: "#27c93f"

typography:
  display-xl:
    fontFamily: SF Pro Rounded
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.11
    letterSpacing: 0
  display-lg:
    fontFamily: SF Pro Rounded
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  heading-lg:
    fontFamily: SF Pro Rounded
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
  heading-md:
    fontFamily: ui-sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  heading-sm:
    fontFamily: ui-sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.56
    letterSpacing: 0
  body-md:
    fontFamily: ui-sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: ui-sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: ui-sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  body-sm-strong:
    fontFamily: ui-sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  caption-sm:
    fontFamily: ui-sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  code-md:
    fontFamily: ui-monospace
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  code-sm:
    fontFamily: ui-monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  button-md:
    fontFamily: ui-sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0

rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 12px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 88px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 8px 20px
    height: 36px
  button-primary-active:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 8px 20px
    height: 36px
  button-pill-on-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 8px 20px
  button-disabled:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.mute}"
    rounded: "{rounded.full}"
  search-pill:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 8px 16px
    height: 36px
  search-pill-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 8px 16px
    height: 40px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  install-snippet:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.code-md}"
    rounded: "{rounded.full}"
    padding: 12px 20px
    height: 48px
  command-tag:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.code-sm}"
    rounded: "{rounded.full}"
    padding: 6px 12px
  terminal-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.code-sm}"
    rounded: "{rounded.lg}"
    padding: 16px
  terminal-traffic-lights:
    rounded: "{rounded.full}"
    size: 12px
  pricing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-bullet:
    textColor: "{colors.charcoal}"
    typography: "{typography.body-sm}"
  faq-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 16px 0px
  link-inline:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  link-mute:
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
  primary-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.none}"
    height: 56px
  footer-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.none}"
    padding: 32px 24px
  cta-strip-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.lg}"
    padding: 24px 32px
---
```
