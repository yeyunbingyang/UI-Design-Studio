# PostHog · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

PostHog其营销系统建立在品牌核心的视觉矛盾之上:一个严肃的开源产品分析平台,提供时仿佛是友好的工程素描本. 界面框架在暖奶油页面底色上运行(英语:`{colors.canvas}` — `#eeefe9`)——不是白的——每一页都用手画的刺绣吉祥物在实验室的外套,休息室椅,终端,和阅读眼镜中都用点缀,像教科书中的边际分布一样,散落在布局上. Types sit in the explants. IBM Plex Sans Variable 橄榄树(在橄榄树上),`{colors.body}` — `#4d4f46`用于身体和深橄榄焦(含:`{colors.ink}` — `#23251d`头条新闻, 权重紧紧地拉在 400, 600, 700,以及 800 生成无色的层次。单饱和黄橙丸(`{colors.primary}` — `#f7a501`)是该品牌唯一响亮的色调瞬间;其他一切都是奶油,橄榄,白卡,偶尔的糕点呼号乐队.

The system has a distinctive **two-mode body layout**: marketing pages (home, workflows, pricing) lean on alternating-pastel callout bands and feature tiles in white cards on cream, while documentation pages add a sticky 240px left sidebar with a rounded outline-icon section list. Code samples are full-width dark blocks on `{colors.surface-dark}` (the same olive-charcoal that carries body ink, used inverted) inside white doc cards, creating the system's most distinctive visual moment: a dark-on-dark code island floating inside a white card on a cream canvas, with a hedgehog mascot doodled in the margin.

Sections stack at `{spacing.section}` (80px) rhythm with cream canvas continuing edge-to-edge between them. The only color bands that interrupt the cream are pastel `{component.banner-tip-blue}` / `-green` / `-red` / `-purple` callout panels inside doc articles — soft tinted boxes that carry "💡 Tip", "✅ Success", "⚠️ Warning", "📘 Info" inline annotations. There are no decorative gradients, no atmospheric mesh backgrounds, and no full-bleed dark hero chapters; the cream canvas runs uninterrupted top to bottom and the hedgehogs are the entire visual identity.

**关键特征 :**
- 暖奶油页面底色(`{colors.canvas}` — #eeefe9) 端到端,各节之间没有表面交替——页是连续的页
- Single yellow-orange CTA pill (`{colors.primary}` — #f7a501) with deep olive text (`{colors.on-primary}`) — the brand's only saturated color
- IBM Plex Sans Variable 横跨每个带有权重的文本角色 400/500/600/700/800 ——系统中没有其他排字面.
- 手绘刺绣吉祥物作为整个装饰系统分散在布局中——没有梯度,没有网状,没有大气背景
- 4–8px radius card vocabulary: `{rounded.md}` (6px) for most components, `{rounded.lg}` (8px) for select containers, fully rounded for pill chips
- 贴贴挂旗( Name`{colors.accent-blue-soft}`, `{colors.accent-green-soft}`, `{colors.accent-red-soft}`, `{colors.accent-purple-soft}`将Doc文章体用软锡侧轨断开,以示提示/警告/信息
- 文档页加页a sticky 240px `{component.doc-sidebar}` 带有圆形的大纲-虹节导航和“询问” PostHog AI"CTA在顶部


## 配色

> **Source pages:** `/` (home), `/pricing` (pricing detail), `/docs/product-analytics` (docs article), `/workflows` (product feature page). The chrome palette is identical across all four pages — only doc-specific accents (callout-banner pastels, code-block dark surface) appear exclusively inside the docs experience.

### 品牌色与强调色
- **PostHog 黄色** (`{colors.primary}` — `#f7a501`: 通用初级CTA. Sticky 每一个导航的右上角 都有免费的胶囊形 首屏CTA pricing-tier 订阅按钮,页脚注册胶囊形,系统只有饱和色调瞬间.
- **黄色按下** (`{colors.primary-pressed}` — `#dd9001`:按胶囊形主服.
- **黄色活动** (`{colors.primary-active}` — `#b17816`:深压黄色+系统金强调色的边音(rare) : 1px 内在形式元素上的金规则).

### 界面表面
- **Canvas** (`{colors.canvas}` — `#eeefe9`): the warm cream page background. End-to-end on every page; the brand's most distinctive surface choice.
- **软表面** (`{colors.surface-soft}` — `#e5e7e0`): button-secondary 满, sub-nav 脱衣舞背景, inline-code 芯片背景 。
- **表面卡片** (`{colors.surface-card}` — `#ffffff`:真白牌和瓦片背景坐落在奶油页面底色上方,主牌表面.
- **表面文档** (`{colors.surface-doc}` — `#fcfcfa`:一种在Doc文章体卡内使用的微软的奶油-暖白色——比纯白色略软,以保持页面的直线统一.
- **Surface Dark** (`{colors.surface-dark}` — `#23251d`): the deep olive-charcoal used inverted as code-block background. The same hex as `{colors.ink}` — the brand uses one olive-near-black for both text and dark code surfaces.
- **细边线** (`{colors.hairline}` — `#bfc1b7`): 1px 纸牌边框、表格规则、页脚列分隔符。
- **柔软的细边线** (`{colors.hairline-soft}` — `#dcdfd2`:卡式排位分隔器,软套规则.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): primary text on `{colors.surface-dark}` code blocks.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#23251d`:头条,灯光上的按钮文字,主导航链接——深橄榄-焦炭,读取近黑抗奶油.
- **Body** (`{colors.body}` — `#4d4f46`): default paragraph text, doc article body, inline link color before hover. The brand's most-used text color.
- **木炭矿** (`{colors.charcoal}` — `#33342d`: 身体太软的地方,强调体文.
- **静音** (`{colors.mute}` — `#6c6e63`:元数据,页脚链接文本,列表中的二级说明.
- **灰尘** (`{colors.ash}` — `#9b9c92`: 禁用状态文本和最小强调的效用。
- **石头** (`{colors.stone}` — `#b6b7af`: 最小强调标题文本和禁用的图标颜色。

### 语义色
- **链接蓝色** (`{colors.link-blue}` — `#1d4ed8`:内置主播链路在体介词内,系统主信息链路颜色.
- **链接Teal** (`{colors.link-teal}` — `#1078a3`: doc-article inline 链接变体,与体文本对齐.
- **蓝天** (`{colors.accent-blue}` — `#2c84e0`) + **蓝调柔软** (`{colors.accent-blue-soft}` — `#dceaf6`:"QQ Tip / Info"在Docs内部的点名标语.
- **红调** (`{colors.accent-red}` — `#cd4239`) + **赤色软** (`{colors.accent-red-soft}` — `#f7d6d3`:"QQ警告/注意"呼喊旗.
- **青绿** (`{colors.accent-green}` — `#2c8c66`) + **圆绿软** (`{colors.accent-green-soft}` — `#d9eddf`:"XQ成功/正"呼号横幅.
- **Accent Purple** (`{colors.accent-purple}` — `#7c44a6`) + **Accent Purple Soft** (`{colors.accent-purple-soft}` — `#e7d8ee`): "📘 Note / Reference" callout banner.
- **焦点环** (`{colors.focus-ring}` — `rgba(59,130,246,0.5)`:半透明蓝色浏览器-默认焦点环绕交互元素.


## 字体排版

### 字体族
**IBM Plex Sans Variable** 系统的主要面孔——在每页的每个文字角色中按重量使用 400 (经常), 500 (中 间) 600 (半保龄球), 700 (bold),以及 800 (外锋) 倒下通过 `IBM Plex Sans` → `-apple-system` → `system-ui` 宽跨平台的桑斯堆栈。

**ui-monospace** + **Source Code Pro** 携带代码样本, inline-code 芯片在 14px / 1.43 line-height. Source Code Pro 显示 monospace; ui-monospace 内置控件 `<code>` 筹码.

品牌的区别选择是 **混合字重梯级** (400 / 500 / 600 / 700 / 800)——大多数界面框架生活在 400–700 带重的波段 800 仅限在家庭和定价上显示更大的头条。这让系统有了“工程博客”的感觉:等级结构的构建与字重对比远大于大小。

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | 1.5 | 0 | 首屏头条("新造产品方式"). |
| `{typography.display-lg}` | 24px | 800 | 1.33 | -0.6px | 区头,定价级别名称 |
| `{typography.heading-lg}` | 21px | 700 | 1.4 | -0.5px | 分节标题,H条医生2 |
| `{typography.heading-md}` | 20px | 700 | 1.4 | 0 | 牌组标题,内网标题 |
| `{typography.heading-sm}` | 18px | 700 | 1.5 | 0 (uppercase) | 区间眉毛("UNDERSTAND Product useage") |
| `{typography.heading-sm-mixed}` | 18px | 600 | 1.56 | 0 | Card title in mixed-case (no uppercase transform) |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 复制件, 默认段落 |
| `{typography.body-strong}` | 16px | 600 | 1.5 | 0 | Inline emphasis, primary nav link, in-card label |
| `{typography.body-sm}` | 15px | 400 | 1.71 | 0 | 医生文章体,营销卡描述 |
| `{typography.body-sm-strong}` | 15px | 600 | 1.71 | 0 | Sub-section emphasis inside doc article |
| `{typography.body-xs}` | 14px | 500 | 1.43 | 0 | Doc 侧边栏项目、元数据、列表中的标题 |
| `{typography.caption-md}` | 14px | 700 | 1.71 | 0 | Card eyebrow, link cluster header |
| `{typography.caption-sm}` | 13px | 500 | 1.5 | 0 | 压缩元数据标题 |
| `{typography.caption-xs}` | 12px | 600 | 1.33 | 0 (uppercase) | 内嵌徽章标签 |
| `{typography.utility-xs}` | 12px | 700 | 1.33 | 0 (uppercase) | Section-eyebrow utility text, footer category header |
| `{typography.link-md}` | 16px | 400 | 1.5 | 0 | 内置主机链接 |
| `{typography.button-md}` | 14px | 700 | 1.5 | 0 | 标准主/次要按钮标签 |
| `{typography.button-sm}` | 13px | 500 | 1 | 0 | 胶囊形/紧凑式CTA |
| `{typography.code-sm}` | 14px | 400 | 1.43 | 0 | 代码块内容 |
| `{typography.code-xs}` | 14px | 500 | 1.43 | 0 | 内置代码芯片 |

### 原则
等级结构是从字重+大小+偶发的大写变换中明确构建的——没有斜体样式,没有装饰性显示变体,没有专有面孔. 最大的显示瞬间使用字重 800 配合 -0.6px 追踪,尸体就安顿在 400 配合 1.5 line-height;其他所有东西都填满了间距。`{typography.heading-sm}` 和 `{typography.utility-xs}`) 不断使大写,这让医生有其教科书章节的感觉。

### 替代字体
IBM Plex Sans Variable 由开源和Google-Fonts托管。不需要替代设备,直接装入。如果真的需要替代设备, **Inter** 在所有五个重量上是最接近的几何匹配; 配对 Inter's letter-spacing -0.5 改为: -0.6px 显示大小以大致显示 Plex 的显示跟踪。 monospace, **JetBrains Mono** 是一个近乎完美的替代品,用于 Source Code Pro 身体大小, 和身体大小一样。


## 布局

### 间距系统
- **基部单位:** 8px (加细 2/4/6px 用于在点名标语和胶囊形按钮中填补紧密内含空白的阶梯)。
- **托肯斯(前题):** `{spacing.xxs}` (2px) · `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (16px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.section}` (80px).
- **Universal section rhythm:** every page in the set uses `{spacing.section}` (80px) as the vertical gap between major content blocks. Card grids use `{spacing.lg}` (16px) gutters; card internal padding sits at `{spacing.xl}` (24px) for product cards and `{spacing.xxl}` (32px) for pricing tier cards.

### 网格与容器
- **最大 width:** ~1280px content area at desktop with 24px gutters (~48px at ultrawide). Doc article body sits at ~720px max width with the 240px sidebar pushing the article column right of center.
- **营销卡 grid:** 4-up at desktop, 3-up at 1024px, 2-up at 768px, 1-up at 480px. Cards preserve a fixed 1:1 or 4:3 ratio.
- **定价等级 grid:** 3-up at desktop with a left rail of plan info, collapsing to 2-up + 1 at tablet and 1-up at mobile.
- **Doc 版式 :** 桌面 240px sticky 左侧边栏+ ~720px 条款正文+(可选) 200px 右TOC 侧栏= ~1160px 内容宽度。
- **Footer:** 6-column horizontal link grid at desktop, 3-up at tablet, 2-up at mobile.

### 留白规则
白空间对营销页面很慷慨,对Doc页面很紧。主页和工作流程页面的叠加功能瓦片 `{spacing.lg}` (16px(沟渠和) 24px 内部粘贴,而医生的内饰则将内部间隔收紧到 `{spacing.md}` (12px) ,在段落之间实现信息密度最大化。 1px 区间眉毛下的细边线和页脚栏规定单独的内容块.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | No border, no shadow | Default for canvas-on-canvas blocks, hero text, body sections |
| 1 —— 细边线边界 | 1px 固态 `{colors.hairline}` | 营销卡 定价等级卡 医生侧栏项目 脚本列规则 |
| 2 - 柔软的细边线 | 1px 固态 `{colors.hairline-soft}` | 相邻行之间的卡片行分隔符 |
| 3 ——倒转暗码块 | `{colors.surface-dark}` 填充( E) | 医生卡内部的代码样本——系统唯一的"外延"表面使用颜色,而不是阴影. |

该系统在营销或产品界面框架方面没有滴影高。卡片平坐于奶油上,橄榄边框薄。单反转瞬间是黑暗。 code-block 医生文章体卡内使用的表面。

### 装饰性深度
深度完全来自插图和pastel callout频段系统,而不是来自CSS效果:
- **手绘刺绣吉祥物** ——各种服装(板块外套,终端,休息椅,放大玻璃,吊床,帽子)中的角色散落在各页的边缘,总是作为平面彩色插图,永远不拍照.
- **贴画点名旗** — `{component.banner-tip-blue}` / `-green` / `-red` / `-purple` 软锡侧式护栏板在Doc文章内,每条前缀有emoji图标(QQQQQQ),并携带提示/警告/注抄本.
- **代码块** 整个宽的深色橄榄花板 `{colors.surface-dark}` 系统最具有电影色彩,在白医生卡内使用。
- **Outline product icons** in the doc sidebar — small rounded-square mini-illustrations (chart icon, funnel, session-replay icon) mark each major product section.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | Sub-nav 条形、页脚、医生侧边栏、主导航-平面结构表面 |
| `{rounded.xs}` | 2px | 内置 `<code>` 芯片,微规则亮点 |
| `{rounded.sm}` | 4px | 内置按钮、窗体输入、微芯片 |
| `{rounded.md}` | 6px | Marketing cards, pricing cards, doc cards, code blocks, every standard CTA |
| `{rounded.lg}` | 8px | 标签顶角( T)`6px 6px 0 0` 和稀有大型容器 |
| `{rounded.full}` | 9999px | 胶囊形和胶囊形式的CTA("开始——免费") sticky 导航中的CTA) |

围绕半径词汇群 4–6px 几乎每件事物都一样,只有圆形的元素是避孕药 sticky 导航CTA和内线胶囊形

### 图片形状
There is no photography. Visual elements are limited to:
- **黑奇霍格字符插图** 平面彩色的刺绣 ~80px (卡式吉祥物)改为 ~240px 总是在原生方面, 从未被剪切到一个框架 。
- **Outline product icons** in the doc sidebar — 20–24px rounded-square illustrations.
- **Inline emoji** at 14–16px inside callout banners (💡 ✅ ⚠️ 📘) — used as functional iconography rather than decoration.
- **Section illustrations** on the home page — small hedgehog vignettes paired with each "Understand product usage" / "Build sticky habits" / "Test before launch" feature row.


## 组件

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only.

### 按钮

**`button-primary`** ——普及性 PostHog 反恐中心
- Background `{colors.primary}` (yellow-orange), text `{colors.on-primary}` (deep olive), type `{typography.button-md}`, padding `8px 16px`, height `40px`, rounded `{rounded.md}`.
- Used for "Get started — free" (sticky top-nav CTA), "Sign up", "Try it free", "Subscribe" — every primary action.
- 国家住在这里 `button-primary-pressed` - 后台空降为 `{colors.primary-pressed}`.

**`button-secondary`** 奶油布上的软替代品
- Background `{colors.surface-soft}` (`#e5e7e0`), text `{colors.ink}`, type `{typography.button-md}`, padding `8px 16px`, height `40px`, rounded `{rounded.md}`.
- "聊卖","读文","看示范"——二级动作与黄色主机对齐.

**`button-tertiary`** - 鬼文字按钮
- Background transparent, text `{colors.ink}`, type `{typography.button-md}`, padding `8px 12px`, rounded `{rounded.md}`.
- 低强调动作:"见所有docs →","浏览所有特性".

**`button-disabled`**
- Background `{colors.surface-soft}`, text `{colors.ash}` — flat soft cream-gray.

### 标签芯片( C)

**`product-tab`** + **`product-tab-active`** ——主要产品段标签.
- 默认 : transparent 文本, 文本 `{colors.body}`类型 `{typography.body-strong}`, 编译 `8px 12px`,四舍五入 `{rounded.md}`.
- 活动:背景翻转到 `{colors.surface-card}` (白色),文本 `{colors.ink}` ——标签卡将奶油页面底色上架作为选择的视觉信号.

**`pill-tab`** + **`pill-tab-active`** 紧凑的滤镜胶囊形
- 默认 : transparent 文本, 文本 `{colors.body}`类型 `{typography.button-sm}`, 编译 `6px 14px`,四舍五入 `{rounded.full}`.
- 活动:背景翻转到 `{colors.ink}`文本中,请输入 `{colors.on-dark}` ——芯片翻转在选择上完全倒置.

**`badge-uppercase`** —— 仅文本的通用标签
- Background transparent, text `{colors.body}` in `{typography.utility-xs}` (uppercase) — used as in-list category prefix ("FEATURE FLAG", "EXPERIMENT", "HEATMAP").

**`badge-promo`** ——小内线胶囊形
- Background `{colors.accent-blue-soft}`, text `{colors.link-blue}`, type `{typography.caption-xs}`, padding `2px 8px`, rounded `{rounded.full}`.
- "新","贝塔","快来了"的胶囊形标签上贴满了牌子.

### 输入框与表单

**`text-input`** + **`text-input-focused`**
- Default: background `{colors.surface-card}`, text `{colors.ink}`, 1px solid `{colors.hairline}`, type `{typography.body-md}`, padding `8px 12px`, height `36px`, rounded `{rounded.md}`.
- 焦点:同一表面; 2px 固态 `{colors.accent-blue}` 边框替换 1px 细边线+半透明 `{colors.focus-ring}` 大纲。

**`search-input`** — utility search field (doc sidebar, "Ask PostHog AI")
- 与 `text-input` 左边缘有放大镜 `{colors.mute}`.

### 卡片与容器

**`product-card`** ——销售牌/特色卡
- 集装箱:背景 `{colors.surface-card}` (白话), 1px 固态 `{colors.hairline}`, 编译 `{spacing.xl}` (24px),四舍五入 `{rounded.md}`.
- Layout: small hedgehog illustration at top-left, `{typography.heading-sm-mixed}` title, `{typography.body-sm}` description, optional `{component.button-tertiary}` "Learn more →" link.

**`doc-card`** ——医生文章体卡.
- 集装箱:背景 `{colors.surface-doc}` (`#fcfcfa` 温白的, 1px 固态 `{colors.hairline}`, 编译 `{spacing.xl}` (24px),四舍五入 `{rounded.md}`.
- 携带文章体段,代码块,呼号横幅,以及医生页面内的表格.

**`feature-tile`** 小型销售特色瓦
- 集装箱:背景 `{colors.surface-card}`, 1px 固态 `{colors.hairline}`, 编译 `{spacing.lg}` (20px),四舍五入 `{rounded.md}`.
- 用于 3- 上层或 4- 家庭网页和工作流程页面上的上网格——配对小图标和 1- 线条描述。

**`pricing-tier-card`** ——定价计划卡.
- 集装箱:背景 `{colors.surface-card}`, 1px 固态 `{colors.hairline}`, 编译 `{spacing.xxl}` (32px),四舍五入 `{rounded.md}`.
- Layout: tier name in `{typography.display-lg}` (24px / 800 / -0.6px), large price + period, feature checklist with check-icon bullets, primary or secondary CTA at bottom.

**`hedgehog-mascot-card`** 带有边角悬刺绣的特征卡
- Same chrome as `{component.product-card}` but with a hand-drawn hedgehog illustration anchored in the right margin or top-right corner — the brand's signature card variant.

### 点名旗舰

**`banner-tip-blue`** + **`banner-tip-green`** + **`banner-tip-red`** + **`banner-tip-purple`**
- Background `{colors.accent-blue-soft}` / `{colors.accent-green-soft}` / `{colors.accent-red-soft}` / `{colors.accent-purple-soft}`, text `{colors.ink}`, type `{typography.body-md}`, padding `16px 20px`, rounded `{rounded.md}`.
- Each prefixed with an inline emoji icon (💡 / ✅ / ⚠️ / 📘) followed by an inline label and body copy.
- Only appear inside doc article body. The four-color callout family is the brand's information-architecture vocabulary for inline tips/warnings/info inside long-form documentation.

### 代码

**`code-block`** – 医生卡内暗码样本
- 集装箱:背景 `{colors.surface-dark}` (深橄榄焦炭),文本 `{colors.on-dark}` 输入 `{typography.code-sm}`, 编译 `16px 20px`,四舍五入 `{rounded.md}`.
- 语法加亮使用哑音的强调色颜色(关键词蓝色,字符串绿色,数字紫色)——绝对没有在点名标语中使用的亮色强调色颜色.

**`inline-code`** ——小内含 `<code>` 芯片
- Background `{colors.surface-soft}`, text `{colors.ink}` in `{typography.code-xs}`, padding `2px 6px`, rounded `{rounded.xs}` (2px).
- 使用体内的传言来标记代码片段和识别符.

### 导航

**`primary-nav`**
- Background `{colors.canvas}` (cream — same as the page), text `{colors.ink}`, height `56px`, type `{typography.body-strong}`, rounded `{rounded.none}`.
- 版式( 桌面) : PostHog 左侧的字标记+刺绣标识, 导航菜单集群("定价 ・ Docs ・ 社区 ・ 公司"), 右集群, 带有搜索- glyph, "Login" 链接, 和总是黄色 `{component.button-primary}` 开始 免费的胶囊形 锁定在极右侧

**`sub-nav-strip`** 二级导航棒(初级以下)
- Background `{colors.surface-soft}`, text `{colors.body}` in `{typography.body-xs}`, height `40px`, rounded `{rounded.none}`.
- Sits directly below the primary nav on workflows / product pages with section anchor links and a contextual "Get started →" link at the right.

**`doc-sidebar`** — sticky 左侧边栏
- Background `{colors.canvas}`, text `{colors.body}` in `{typography.body-xs}`, width `240px`, rounded `{rounded.none}`.
- 版式 : search-input 问 PostHog AI"在顶部,然后是各带小圆形大纲-虹型迷你涂鸦的区段标题的垂直列表,然后在活动标题下嵌入项链.

**顶部导航( 移动)**
- 汉堡菜单图标左侧, PostHog 字标记+ 刺绣, 搜索 + sticky 黄色的"开始——自由"CTA在右侧. 初等导航崩溃成一个从左侧滑动的全高抽屉.

### Footer

**`footer-section`**
- Background `{colors.canvas}`, text `{colors.body}` in `{typography.body-xs}`, padding `32px 24px`, rounded `{rounded.none}`, with a 1px `{colors.hairline}` top rule.
- 版式 : 6- 横向连接网(生产资源) 公司 社区 定价 法律 每一栏都有 `{typography.utility-xs}` (uppercase) 标题和链接的垂直列表 `{typography.body-xs}` `{colors.body}`.
- Bottom row: PostHog wordmark + small hedgehog illustration, copyright in `{typography.caption-xs}` `{colors.mute}`, social-icon row at far-right.

### 内置

**`link-inline`** ——体质-导引主机链接.
- `{colors.link-teal}` (`#1078a3`) in body prose with no underline by default; underline appears on focus. The brand's primary inline link color.


## 设计建议与禁忌

### 建议做法
- 使用 `{colors.canvas}` (尖叫声) `#eeefe9`)作为页体。绝不用纯白色代替页面底色。
- 准备金 `{colors.primary}` (黄橙)只用于初级CTA胶囊形,"开始——免费"治疗是品牌的主播.
- 将品牌字签与刺绣插图并列,而不是作为独立的字签。刺绣是品牌身份。
- Use IBM Plex Sans Variable across every text role — body 400, emphasis 600/700, display 800.
- Stack content sections at `{spacing.section}` (80px) rhythm with no decorative dividers between them; let the cream canvas continue uninterrupted.
- 使用 `{component.banner-tip-blue}` / `-green` / `-red` / `-purple` 仅用于提示/警告/注板的医生文章体内——保持销售四色呼喊家族中的界面框架.
- Pair every code sample with the dark `{component.code-block}` surface; inline `<code>` chips use `{component.inline-code}` (cream surface-soft chip).
- 家庭版面和工作流程页的特色瓦片边框中安插了刺绣吉祥物插图——系统的签名装饰.

### 应避免的做法
- Don't introduce drop shadows on cards. Cards sit flat on cream with thin olive borders only.
- Don't add a second saturated chromatic CTA. Yellow-orange is the only loud color in the system.
- Don't replace the cream canvas with pure white or full-bleed dark hero bands. The cream is the brand.
- Don't use the four-color callout banner pastels (`{colors.accent-blue-soft}`, `-green`, `-red`, `-purple`) as marketing-card backgrounds. They belong to inline doc content only.
- Don't substitute the hedgehog illustration with a generic icon set. The character system is the brand.
- Don't use uppercase transform outside of `{typography.heading-sm}`, `{typography.utility-xs}`, and `{typography.caption-xs}`. Uppercase is reserved for eyebrows and footer category headers.
- Don't pad cards with 32px+ on all sides except for `{component.pricing-tier-card}`. Standard cards sit at 24px internal padding.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 超广 | 1920px+ | 内容 max-width 暂停 1280px;外沟长到 ~80px |
| 桌面大块 | 1440px | 默认 —— 4- 上层的瓦片网格, 240px sticky 可见 doc 侧边栏 |
| 桌面 | 1280px | 外沟布局相同 |
| 桌面小块 | 1024px | 4- 上层瓷砖倒塌到 3-上; Doc 侧边栏仍然可见 |
| tablet | 768px | 3-up tiles collapse to 2-up; doc sidebar collapses into a top accordion; primary nav becomes hamburger |
| 移动 | 480px | 单栏所有东西;首屏 `{typography.display-xl}` 比额表 36px → ~28px |
| 移动窄 | 320px | 节贴紧到 32px |

### 触控区域
All interactive elements meet WCAG AA (≥ 40×40px). `{component.button-primary}` and `{component.button-secondary}` sit at 40px height with 16px padding. `{component.text-input}` sits at 36px (just under AAA but above AA at this size). `{component.pill-tab}` is ~32–36px height with 14px padding extending to ~44px tappable via inline padding. Doc-sidebar items use 14px text with ~32px line-height + 6px vertical padding for ~44px tap rows.

### 窄屏布局调整
- **初等导航 :** 桌面水平组 – 平板汉堡抽屉 768px. 黄色的"开始——免费"CTA在每一个断点都保持可见.
- **Sub-nav 条形:** 桌面水平锚行 →平板电脑水平卷轴 → 移动选择下拉。
- **营销卡 grid:** 4-up → 3-up → 2-up → 1-up at 1024, 768, and 480px; 沟槽从 16px 改为: 12px 手机上,我刚从电话里找到的
- **定价 grid:** 3-up → 2+1 → 1-up stacked at tablet and below.
- **Doc 版式 :** 桌面 240px 边栏+ 720px 平板侧管倒塌到顶风琴 移动式完全倒塌的手风琴
- **Footer:** 6-up link columns → 3-up at tablet → 2-up at mobile.
- **科 科 padding:** `{spacing.section}` (80px(台式计算机) – 64px 平板电脑 48px 移动。
- **Hero headline:** `{typography.display-xl}` (36px) at desktop, scaling to ~28px at mobile, line-height holding at 1.5.

### 图片适配
The only "imagery" in the system is hand-drawn hedgehog illustrations rendered as inline SVG. They preserve their natural aspect at every breakpoint and scale via CSS `width: auto; max-width: 100%`. There is no responsive art-direction needed because there is no photography.


## 迭代指南

1. 一次聚焦一个组件。 调用其 YAML 条目并验证每个属性解析 。
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component.button-primary-pressed}`, `{rounded.md}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 自动发出警告。
4. 添加新的变体作为单独的组件条目( Q)`-pressed`, `-disabled`, `-focused`()——不要把他们埋在传言里.
5. 默认正文为 `{typography.body-md}` (16px / 400 / 1.5; 伸缩范围 `{typography.body-strong}` 用于强调; 储备金 `{typography.display-lg}` (24px / 800)严格用于营销展示时刻.
6. Keep `{colors.primary}` scarce per viewport — at most one yellow-orange pill per fold.
7. When introducing a new component, ask whether it can be expressed with the existing card + 6px-radius + cream-canvas vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.


## 已知缺口

- **Mobile screenshots not captured** — responsive behavior synthesizes PostHog's mobile pattern (hamburger drawer, single-column grid, doc sidebar accordion) from desktop evidence and the breakpoint stack.
- **Hover states not documented** by system policy.
- **产品中的应用界面框架** (PostHog 仪表板,图表,会话重播播放器)没有在捕获的集中——此营销网站在此有文献记载,而不是产品内分析界面.
- **认证的界面框架** (记录模式、帐号仪表板、帐单设置)没有在捕获的页面中。
- **表格验证状态** 超过捕获表面中不存在的焦态输入。
- **营销插图集** ——此处不列举刺绣虎特征姿势的完整库;具体姿势(手帕大衣刺绣虎,终端刺绣虎,吊床刺绣虎)在截图中可见,但完整的资产库是针对页面的.

## 设计词元原值

A playful developer-tools system rendered on a warm cream canvas with hand-drawn hedgehog mascots dotted across every page like marginalia in a sketchbook. The chrome reads like a friendly engineering blog: olive-gray ink (#4d4f46) for body, deep olive-charcoal (#23251d) for headlines, IBM Plex Sans Variable typography in tight 1.43-line-height paragraphs, and a single saturated yellow-orange CTA pill (#f7a501) carrying every primary action. The system actively rejects the genre's typical somber dark-tech aesthetic in favor of a creamy, textbook-illustration sensibility — bordered cards stack on the cream canvas with 4–6px radii, doc sidebars use rounded outline-icon mini-illustrations, and the home page leans on cartoon characters (hedgehogs in lab coats, hedgehogs at terminals, hedgehogs in lounge chairs) as its signature decoration. Code samples and product analytics charts live inside white-on-cream cards with thin olive borders; the contrast between the playful illustration and the data-dense product imagery is the brand's signature voice.

```yaml
---
version: alpha
name: PostHog-design-analysis
description: |
  A playful developer-tools system rendered on a warm cream canvas with hand-drawn hedgehog mascots dotted across every page like marginalia in a sketchbook. The chrome reads like a friendly engineering blog: olive-gray ink (#4d4f46) for body, deep olive-charcoal (#23251d) for headlines, IBM Plex Sans Variable typography in tight 1.43-line-height paragraphs, and a single saturated yellow-orange CTA pill (#f7a501) carrying every primary action. The system actively rejects the genre's typical somber dark-tech aesthetic in favor of a creamy, textbook-illustration sensibility — bordered cards stack on the cream canvas with 4–6px radii, doc sidebars use rounded outline-icon mini-illustrations, and the home page leans on cartoon characters (hedgehogs in lab coats, hedgehogs at terminals, hedgehogs in lounge chairs) as its signature decoration. Code samples and product analytics charts live inside white-on-cream cards with thin olive borders; the contrast between the playful illustration and the data-dense product imagery is the brand's signature voice.

colors:
  primary: "#f7a501"
  primary-pressed: "#dd9001"
  primary-active: "#b17816"
  on-primary: "#23251d"
  ink: "#23251d"
  body: "#4d4f46"
  charcoal: "#33342d"
  mute: "#6c6e63"
  ash: "#9b9c92"
  stone: "#b6b7af"
  hairline: "#bfc1b7"
  hairline-soft: "#dcdfd2"
  on-dark: "#ffffff"
  canvas: "#eeefe9"
  surface-soft: "#e5e7e0"
  surface-card: "#ffffff"
  surface-doc: "#fcfcfa"
  surface-dark: "#23251d"
  link-blue: "#1d4ed8"
  link-teal: "#1078a3"
  accent-blue: "#2c84e0"
  accent-blue-soft: "#dceaf6"
  accent-red: "#cd4239"
  accent-red-soft: "#f7d6d3"
  accent-green: "#2c8c66"
  accent-green-soft: "#d9eddf"
  accent-purple: "#7c44a6"
  accent-purple-soft: "#e7d8ee"
  focus-ring: "rgba(59,130,246,0.5)"

typography:
  display-xl:
    fontFamily: IBM Plex Sans Variable
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  display-lg:
    fontFamily: IBM Plex Sans Variable
    fontSize: 24px
    fontWeight: 800
    lineHeight: 1.33
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: IBM Plex Sans Variable
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: -0.5px
  heading-md:
    fontFamily: IBM Plex Sans Variable
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  heading-sm:
    fontFamily: IBM Plex Sans Variable
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
    textTransform: uppercase
  heading-sm-mixed:
    fontFamily: IBM Plex Sans Variable
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.56
    letterSpacing: 0
  body-md:
    fontFamily: IBM Plex Sans Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: IBM Plex Sans Variable
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: IBM Plex Sans Variable
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.71
    letterSpacing: 0
  body-sm-strong:
    fontFamily: IBM Plex Sans Variable
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.71
    letterSpacing: 0
  body-xs:
    fontFamily: IBM Plex Sans Variable
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  caption-md:
    fontFamily: IBM Plex Sans Variable
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.71
    letterSpacing: 0
  caption-sm:
    fontFamily: IBM Plex Sans Variable
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption-xs:
    fontFamily: IBM Plex Sans Variable
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
    textTransform: uppercase
  utility-xs:
    fontFamily: IBM Plex Sans Variable
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0
    textTransform: uppercase
  link-md:
    fontFamily: IBM Plex Sans Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button-md:
    fontFamily: IBM Plex Sans Variable
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  button-sm:
    fontFamily: IBM Plex Sans Variable
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  code-sm:
    fontFamily: ui-monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  code-xs:
    fontFamily: Source Code Pro
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 40px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 40px
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  button-disabled:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ash}"
    rounded: "{rounded.md}"
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 8px 12px
    height: 36px
  text-input-focused:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  search-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 8px 12px
    height: 36px
  product-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  doc-card:
    backgroundColor: "{colors.surface-doc}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  feature-tile:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-sm-mixed}"
    rounded: "{rounded.md}"
    padding: 20px
  pricing-tier-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 32px
  hedgehog-mascot-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  product-tab:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  product-tab-active:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.md}"
  pill-tab:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  pill-tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
  badge-uppercase:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.utility-xs}"
    rounded: "{rounded.none}"
  badge-promo:
    backgroundColor: "{colors.accent-blue-soft}"
    textColor: "{colors.link-blue}"
    typography: "{typography.caption-xs}"
    rounded: "{rounded.full}"
    padding: 2px 8px
  banner-tip-blue:
    backgroundColor: "{colors.accent-blue-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  banner-tip-green:
    backgroundColor: "{colors.accent-green-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  banner-tip-red:
    backgroundColor: "{colors.accent-red-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  banner-tip-purple:
    backgroundColor: "{colors.accent-purple-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  code-block:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code-sm}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  inline-code:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.code-xs}"
    rounded: "{rounded.xs}"
    padding: 2px 6px
  primary-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    height: 56px
  sub-nav-strip:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-xs}"
    rounded: "{rounded.none}"
    height: 40px
  doc-sidebar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-xs}"
    rounded: "{rounded.none}"
    width: 240px
  footer-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-xs}"
    rounded: "{rounded.none}"
    padding: 32px 24px
  link-inline:
    textColor: "{colors.link-teal}"
    typography: "{typography.link-md}"
---
```
