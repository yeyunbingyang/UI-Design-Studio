# NVIDIA · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

NVIDIA其营销系统就像一部学习图形设计的工程文献——每页都是由密密,事实信息排列在纸白网格上的层次分级,由深黑首屏/脚的章节来布置上下. 整个系统都有一种强调色颜色,它正在做所有的工作: NVIDIA 绿色( G)`{colors.primary}` — `#76b900`),用于每个初级CTA,每个活动标签,每个连接在暗色表面的承受能力,以及标记卡片容器的小装饰角方块。其他的都无所竞争。

系统字符来自极强的排版约束和几乎惩罚性的角几何。每个容器、按钮和图像都使用 `{rounded.sm}` (2px)——一个几乎没有但从未出现零的符号,使系统具有CAD输出的精确,技术的感觉,而不是温暖的消费软件. Cards sit on plain `{colors.canvas}` 带细边线的 `{colors.hairline}` 边界(无阴影,无高地),用紧线分隔 8px- 基底间隔节奏。长窗形的页面堆栈 6–10 将这些卡片装入多柱技术网格,而从未引入装饰性断层。

黑漆黑的首屏和页脚章是系统"头条时刻"——一张全血合照或 3D 图像 `{typography.display-xl}` 头条拷贝以白色铺设,单绿色的CTA按钮,以及一个小绿色角广场作为唯一的装饰品,其他的都是从属的.

**关键特征 :**
- 单身津贴制度: `{colors.primary}` 带有每个 CTA, 活动状态, 以及装饰性调制。 其余的为单色黑白/ 灰色。
- 双模表面建筑: `{colors.surface-dark}` 首屏/脚的章节; `{colors.canvas}` 以可预测的节奏在页面下交替
- 超方形几何 : `{rounded.sm}` (2px),在每个交互元素上。没有避孕药按钮,没有圆形卡片,没有软色调。
- NVIDIA-EMEA proprietary sans-serif at weights 400 and 700, scaled across a 12-tier hierarchy from `{typography.utility-xs}` (10px) up to `{typography.display-xl}` (48px)
- 纸牌库靠到细边线 `{colors.hairline}` 边界和边界 `{colors.surface-soft}` 分离的背景而不是阴影
- 签名装饰元素:小 `{component.corner-square}` (~12px 绿色广场)锚定在资源和功能卡的一角
- 深色多列页脚 4–6 链接列 : `{colors.surface-dark}` ——每页关闭时,均采用相同的结构化全球导航.


## 配色

> **Source pages:** `/tr-tr/` (primary homepage), `/en-eu/industries/healthcare-life-sciences/`, `/en-eu/solutions/ai/`, `/en-eu/ai/foundry/`. The chrome palette is identical across all four — only photography and copy vary.

### 品牌色与强调色
- **NVIDIA 绿色** (`{colors.primary}` — `#76b900`:品牌,每个主CTA,每个活跃状态,每个连接在暗面上承受,每个角广场,以及品牌的词标本身.
- **NVIDIA 绿色暗色** (`{colors.primary-dark}` — `#5a8d00`:按下状态为主按钮——一个比品牌绿色更深的单音节.
- **青色苍白** (`{colors.accent-green-pale}` — `#bff230`:编辑点名和装饰性微块中常用的罕见突出点锡;从未在界面框架上使用过.

### 界面表面
- **页面页面底色** (`{colors.canvas}` — `#ffffff`:每页的正文,卡片直接在上面坐着,上面有细边线规则.
- **软表面** (`{colors.surface-soft}` — `#f7f7f7`面包屑条, sub-nav,边边比较面板,交替行背景。
- **黑页面底色** (`{colors.surface-dark}` — `#000000`:首屏章,暗CTA条,页脚,主导航,系统"框架"颜色.
- **地面升华** (`{colors.surface-elevated}` — `#1a1a1a`):在脚下嵌入的暗板(柱形分隔器, fine-print ),该词的词句为:
- **细边线** (`{colors.hairline}` — `#cccccc`): 1px 纸牌边框,表格规则,页脚链接区之间的分隔符.
- **发条坚固** (`{colors.hairline-strong}` — `#5e5e5e`): 1px 暗面上的分隔符(脚列规则,暗模卡边缘).

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#000000`: 头条和正文 `{colors.canvas}`.
- **体质** (`{colors.body}` — `#1a1a1a`:纯黑太重的长式段落文本.
- **静音** (`{colors.mute}` — `#757575`:元数据,面包屑分离器,页脚版权.
- **石头** (`{colors.stone}` — `#898989`: 最小强调文本和禁用状态.
- **灰尘** (`{colors.ash}` — `#a7a7a7`: 已禁用图标颜色和微弱的效用文本.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): primary text on `{colors.surface-dark}`.
- **暗哑** (`{colors.on-dark-mute}` — `rgba(255,255,255,0.7)`:二级脚步链接文本和暗黑扫描体复制.

### 语义色
- **错误** (`{colors.error}` — `#e52020`:验证消息,破坏性确认.
- **深处出错** (`{colors.error-deep}` — `#650b0b`:按下错误按钮的状态;按下悬浮的验证图标.
- **警告** (`{colors.warning}` — `#df6500`:小心点名,失色的文献标语.
- **提示亮度** (`{colors.warning-bright}` — `#ef9100`:在暗布上反向警告.
- **成功 深处** (`{colors.success-deep}` — `#3f8500`: 肯定,如果 NVIDIA 格林的饱和会引发冲突
- **链接蓝色** (`{colors.link-blue}` — `#0046a4`:光帆上内置锚链颜色——系统中唯一的蓝色,保留给亲信嵌入的超链接.

### 编辑节点(在长式内使用)
- **紫色铜色** (`{colors.accent-purple}` — `#952fc6`:研究/科学计算编辑强调色.
- **紫深号** (`{colors.accent-purple-deep}` — `#4d1368`:对紫色锁箱的配对黑.
- **紫色圆光** (`{colors.accent-purple-pale}` — `#f9d4ff`: 洗背景为编辑点名.
- **黄褐色** (`{colors.accent-yellow-pale}` — `#feeeb2`:文档提示/软调值填充.


## 字体排版

### 字体族
- **NVIDIA-EMEA** is the proprietary brand sans-serif used across every text role on the site. It carries weights 400 (regular) and 700 (bold) and falls back to Arial → Helvetica.
- **字体帅呆了 6 专业版** 和 **字体帅呆了 6 锐利** 专门用于图示(切夫龙、社会格言、面包屑分离器、搜索/菜单图标),尺寸 14–22px.

NVIDIA's type system is unusually flat: most chrome and body roles render at the same line-height (1.25–1.5) with the only meaningful variation coming from weight (400 vs 700) and size. The system relies on weight contrast — not size jumps and not color tinting — to establish hierarchy, which gives marketing copy and technical documentation an editorial newspaper feel.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 700 | 1.25 | 0 | 首屏头条在 `{component.hero-card-dark}` |
| `{typography.display-lg}` | 36px | 700 | 1.25 | 0 | 节标题("Explocure Our AI Solutions"),大调号 |
| `{typography.heading-xl}` | 24px | 700 | 1.25 | 0 | 子节标题, 暗的 CTA 字节头条 |
| `{typography.heading-lg}` | 22px | 400 | 1.75 | 0 | 长式段落,作为标题 |
| `{typography.heading-md}` | 20px | 700 | 1.25 | 0 | 牌组标题, sub-nav 锁定方向 |
| `{typography.heading-sm}` | 18px | 700 | 1.4 | 0 | Side-rail filter group, small section label |
| `{typography.card-title}` | 17px | 700 | 1.47 | 0 | 资源卡标题 产品卡标题 |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 复制件, 默认段落 |
| `{typography.body-strong}` | 16px | 700 | 1.5 | 0 | 内含式强调,主导航链接,标签 |
| `{typography.body-sm}` | 15px | 400 | 1.67 | 0 | 副牌说明 |
| `{typography.button-lg}` | 18px | 700 | 1.25 | 0 | 首屏初等CTA( 首屏初等CTA) Name |
| `{typography.button-md}` | 16px | 700 | 1.25 | 0 | 标准主/副按钮 |
| `{typography.button-sm}` | 14.4px | 700 | 1 | 0.144px | 紧凑的避孕药标签, 中卡二级CTA |
| `{typography.link-md}` | 15px | 400 | 1.5 | 0 | 内置的播音链接 |
| `{typography.caption-md}` | 14px | 700 | 1.43 | 0 | Eyebrow over section heading, breadcrumb (uppercase) |
| `{typography.caption-sm}` | 12px | 400 | 1.25 | 0 | 脚注副本、元数据、表格标题 |
| `{typography.caption-xs}` | 11px | 700 | 1 | 0 | 胶囊形标签, utility-bar 文本 |
| `{typography.utility-xs}` | 10px | 700 | 1.5 | 0 | 法律 fine-print 极下边的栏(uppercase) |

### 原则
The typography is brand-locked: NVIDIA-EMEA is used at every level, no serif, no display variant, no monospace, no italic. Hierarchy is built almost entirely from size and weight — color is reserved for emphasis (`{colors.primary}` on links over dark, `{colors.link-blue}` on light) and never used to separate type tiers.

### 替代字体
NVIDIA-EMEA is proprietary. The closest open-source pairing is **Inter** (weights 400/700) — its x-height and stroke contrast match NVIDIA-EMEA's optical metrics within ~2% at body sizes. **Arial** is the official documented fallback and is acceptable for any system where Inter is unavailable. Avoid Helvetica Now or Helvetica Neue substitutes; their slightly tighter cap heights drift away from the brand's geometry.


## 布局

### 间距系统
- **基部单位:** 8px
- **托肯斯(前题):** `{spacing.xxs}` (2px) · `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (16px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.section}` (64px)
- **Universal section rhythm:** every page in the set uses `{spacing.section}` (64px) as the vertical gap between major content blocks. Card grids use `{spacing.xl}` (24px) gutters; in-card padding sits at `{spacing.xl}` to `{spacing.xxl}` depending on density.
- **首屏专辑 padding:** 80px vertical / 48px horizontal — the largest spacing in the system, reserved for `{component.hero-card-dark}`.

### 网格与容器
- **最大 width:** ~1280px content area at desktop, with 24px gutters that grow to ~48px at ultrawide.
- **列图案 :**
  - Card grids: 4-up at desktop, 3-up at 1024px, 2-up at 768px, 1-up at 480px.
  - 长式文本 : 2- 栏 60/40 桌面、 单列和侧边栏的分割( body + sidebar) < 960px.
  - Footer: 6-up link columns at desktop, collapsing to 2-up on tablet, full accordion on mobile.
- **纸牌方面 :** 产品卡 1:1 或 4:3 配合 16:9 上方的图像 + 1–2 中,将使用“资源卡” 3:2 图像带有更长的描述块.

### 留白规则
白空间是结构的,不是大气的。 `{spacing.section}` 节奏——没有装饰性的分化器,没有空的"呼吸室"带,没有各节间梯度过渡. 空气感来自 `{colors.canvas}` 身体部分在 `{colors.surface-dark}` 章节块,而不是来自任意一个组件内的慷慨铺设。


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flat | No border, no shadow | Canvas-on-canvas blocks, hero chapter content, footer column body |
| 1 —— 细边线边界 | 1px 固态 `{colors.hairline}` | 全部卡片打开 `{colors.canvas}`表格单元格、比较面板 |
| 2 ——毛线坚固. | 1px 固态 `{colors.hairline-strong}` | 分块在 `{colors.surface-dark}` (脚列规则,暗卡边缘) |
| 3 - 柔软的影子 | `0 0 5px 0 rgba(0,0,0,0.3)` | Sticky 滚动时导航底端边缘, sticky 反恐援助栏——很少使用 |

NVIDIA's system has effectively no drop-shadow elevation in card or content surfaces. The only "shadow" in the extracted tokens is a subtle 5px ambient on sticky chrome bars. Cards do not lift; cards are flat rectangles with hairline borders.

### 装饰性深度
深度为 NVIDIA系统来自摄影和 3D- 重装首屏图像而不是来自 CSS 效果 :
- **首屏图像 :** 完全的血压摄影或制作场景(数据中心硬件,神经网可视化,生命科学显微镜)坐在首屏复制后,为可识别性使用暗梯形覆盖.
- **装饰性角方形:** 小型 `{component.corner-square}` (~12px 固态 `{colors.primary}` )锚定在资源和特征卡的左上角或右下角——系统唯一的一贯的装饰装置.
- **Editorial 3D accents:** isometric or wireframe 3D renderings appear as illustration-style fills inside long-form articles, never as chrome.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 首屏章,脚步,深 CTA 条,主导航 |
| `{rounded.xs}` | 1px | 装饰性微规则和插座强调色条 |
| `{rounded.sm}` | 2px | Every interactive element — buttons, cards, inputs, pill tabs, badges |
| `{rounded.full}` | 9999px / 50% | 形象圈 社交漫画点 品牌字号图标 |

The system is aggressively angular. Outside of avatar/icon circles, no element exceeds 2px radius. The 2px is enough to soften the optical aliasing on a sharp edge but small enough that the system reads as engineering-grade rather than consumer-friendly.

### 图片形状
- **首屏图像 :** 满血 16:9 (桌面)裁剪到 4:5 手机上画像
- **纸卡图像 :** 16:9 资源卡顶部的缩略图; 1:1 产品/SKU卡的方形; 3:2 编辑文章卡。
- **装饰性角方形:** 12×12px 标准牌,缩放为 16×16 首屏的呼唤
- **幻象/社会图标:** 32–40px 圆圈为 1px 细边线.


## 组件

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only; variants live as separate `components:` entries in the front matter.

### 按钮

**`button-primary`** ——普及性 NVIDIA 反恐中心
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}`, padding `11px 24px`, height `44px`, rounded `{rounded.sm}`.
- 系统中单曲最重复的组件:首屏CTA,暗CTA条,每张卡片组上"Learn More",每张长式页底上"Sign Up"/"Get Started".
- 国家住在这里 `button-primary-active` - 后台空降为 `{colors.primary-dark}` (`#5a8d00`),文字颜色相同.

**`button-outline`** - 轻型页面底色上的次要
- Background transparent, text `{colors.ink}`, 2px solid `{colors.primary}` border, type `{typography.button-md}`, padding `11px 13px`, rounded `{rounded.sm}`.
- The system's most distinctive secondary CTA: a clear pane bordered in NVIDIA Green. Used for "Read the Documentation", "Watch the Video", "Compare Products" — second-tier actions that still earn the brand color.

**`button-outline-on-dark`** ——纲要 `{colors.surface-dark}`
- Background transparent, text `{colors.on-dark}`, 1px solid `{colors.on-dark}`, type `{typography.button-md}`, rounded `{rounded.sm}`.
- 深色首屏/脚手CTA条中使用的白色黑边变型与主绿色按钮对齐.

**`button-ghost-link`** ——内置箭头链接
- 文字颜色 `{colors.primary}` 带有小右箭头图标,类型 `{typography.button-md}`,没有背景,没有边框,四舍五入 `{rounded.none}`.
- “ 学习更多 + ” 付薪 , 坐在资源卡和长形区块的底部。 箭头为大写和粗体 。 `{typography.caption-md}`- 等同治疗

**`button-disabled`**
- Background `{colors.surface-soft}`, text `{colors.ash}`, rounded `{rounded.sm}` — flat gray.

### 标签芯片( C)

**`pill-tab`** + **`pill-tab-active`**
- 默认 : transparent 文本, 文本 `{colors.ink}`类型 `{typography.button-sm}`, 编译 `10px 18px`,四舍五入 `{rounded.sm}`.
- 活动:背景 `{colors.ink}`文本中,请输入 `{colors.on-dark}` ——选择上反转了标签翻转。在“ AI 资源中的最后一张” 过滤条和类似的分区控制中使用。

**`badge-tag`**
- Background `{colors.surface-soft}`, text `{colors.body}`, type `{typography.caption-md}`, padding `4px 10px`, rounded `{rounded.sm}` (uppercase).
- 文档类型 / 类别标签位于资源卡("WHITE PAPER","WEBINAR","BLOG")的顶端.

### 输入框与表单

**`text-input`** + **`text-input-focused`**
- Default: background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline}`, type `{typography.body-md}`, padding `12px 16px`, height `44px`, rounded `{rounded.sm}`.
- 焦点: 相同的表面,边框变为 2px 固态 `{colors.primary}` ——绿色边框是系统中唯一的焦点信号.

**`search-input`**
- Used in the global search overlay — same treatment as `text-input` but at 40px height with a magnifier glyph at left.

### 纸牌

**`product-card`**
- 集装箱:背景 `{colors.canvas}`, 1px 固态 `{colors.hairline}`, 编译 `{spacing.xl}` (24px),四舍五入 `{rounded.sm}`.
- 版式 : 16:9 产品图像在顶部, `{typography.card-title}` 标题, `{typography.body-sm}` 说明, `{component.button-ghost-link}` "学习更多 ~"付得起底.
- The `{component.corner-square}` sits at the top-left corner.

**`feature-card`**
- 集装箱:背景 `{colors.canvas}`, 1px 固态 `{colors.hairline}`, 编译 `{spacing.xxl}` (32px),四舍五入 `{rounded.sm}`.
- Layout: icon (Font Awesome at 22–24px) at top in `{colors.primary}` followed by `{typography.heading-md}` title and `{typography.body-md}` body.
- 用于 3- 上层或 4- 解释产品能力的上网格(“Agentic AI”、“数据科学”、“推论”、“Conversational AI”)。

**`resource-card`**
- 集装箱:背景 `{colors.canvas}`, 1px 固态 `{colors.hairline}`, 编译 `{spacing.xl}`,四舍五入 `{rounded.sm}`.
- 头条 : `{component.badge-tag}` 文档类型标签。
- 体 : 3:2 缩略图 `{typography.card-title}` 标题, `{typography.body-sm}` 说明。
- 页脚:幽灵链接 "Read More ~" 右键的chevron in `{colors.primary}`.

**`callout-stat`**
- Background `{colors.canvas}` with 1px hairline `{colors.hairline}`, padding `{spacing.xxl}`, rounded `{rounded.sm}`.
- Massive `{typography.display-lg}` (36px) numeric in `{colors.primary}` followed by `{typography.body-md}` caption underneath ("4× faster training", "60% lower cost", etc.). Used inside long-form industry pages.

### 首屏和CTA条

**`hero-card-dark`**
- Background `{colors.surface-dark}` with full-bleed 16:9 photographic/3D image and dark gradient overlay; copy slot at left.
- `{typography.display-xl}` 标题 `{colors.on-dark}`, `{typography.heading-lg}` 单项 `{component.button-primary}` 中导导电站(有时与 `{component.button-outline-on-dark}`).
- 锁定每个主登陆页的顶部.

**`cta-strip-dark`**
- 和首屏一样的表面,但压缩到一个 1- 带子和 `{typography.heading-xl}` 头条+单CTA.
- 坐在内容段之间,作为"准备开始吗?"的桥.

### 装饰性

**`corner-square`**
- 12×12px 固态 `{colors.primary}` 方块固定在牌角上 品牌的标志装饰性动画
- Used on resource cards, feature cards, and editorial callouts. Position varies (top-left, bottom-right) but the size and color are constant.

### 导航

**`utility-bar`**
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, height 32px, type `{typography.caption-sm}`, rounded `{rounded.none}`.
- 右对齐的集群: locale selectionor / "Login" / "Account" 。 总是在页面的顶端显示 。

**`primary-nav`**
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, height 64px, type `{typography.body-strong}`, rounded `{rounded.none}`.
- 版式 : NVIDIA 左侧的单词标记,中端的导航行("Productions / Solutions / Industries / Resources / Supports / Company"),右侧集群(search-glyph + "Login"按钮 + 绿色 CTA "Get Started").

**`breadcrumb-bar`**
- Background `{colors.surface-soft}`, text `{colors.body}`, height 48px, type `{typography.caption-md}` (uppercase).
- 直接位于每个内页的主导航下;chevron分隔器 in `{colors.mute}`.

**`sub-nav-strip`**
- Background `{colors.surface-soft}`, text `{colors.ink}`, height 56px, type `{typography.button-md}`, rounded `{rounded.none}`.
- 科内特定导航锚在内容上方(如"保健-药物发现/医学成像/基因组/病人护理").

**顶部导航( 移动)**
- Hamburger menu icon (left), NVIDIA wordmark (center), search + locale icons (right). Primary nav collapses into a full-screen drawer that slides in from the right.

### Footer

**`footer-section`**
- Background `{colors.surface-dark}`, text `{colors.on-dark-mute}`, padding `{spacing.section}` (64px) vertical / 48px horizontal, rounded `{rounded.none}`.
- 版式 : 6-栏链接网格(产品/软件/资源/公司信息/解决方案/支持),列标题在 `{typography.body-strong}` `{colors.on-dark}` 和链接列表 `{typography.body-sm}` `{colors.on-dark-mute}`.
- 列下: 社会-虹带+ 地方选择器+ 法律/隐私 fine-print 排行为一 `{typography.utility-xs}` (uppercase) `{colors.mute}`.

### 内置

**`link-inline`**
- 身体主播链接 : `{colors.link-blue}` 文本中加下划线。系统中唯一的蓝色 —— 仅以内在链接显示 。 `{typography.body-md}` 3 见第2段。


## 设计建议与禁忌

### 建议做法
- 准备金 `{colors.primary}` 初级CTA、活动状态、装饰角方形和 NVIDIA 将它视为宝贵的资源。
- 堆栈首屏/脚的章节 `{colors.surface-dark}` 和身体科室 `{colors.canvas}` - 换成一段可以预测的节奏
- 锁定 a `{component.corner-square}` 以至每张可复用卡的一角。这是系统的身份标记。
- Use `{rounded.sm}` (2px) on every interactive element. Never go to 0, never go past 4.
- Build hierarchy from font weight (400 vs 700) and size, not from color tinting. Body text stays `{colors.ink}` or `{colors.body}` regardless of context.
- Stack content sections at `{spacing.section}` (64px) rhythm with no decorative dividers between them.
- 平对 `{component.button-primary}` (绿色填充) `{component.button-outline}` (绿色边框),用于初级+二级动作对.

### 应避免的做法
- Don't introduce drop shadows on cards or content surfaces. The only allowed shadow is the 5px ambient on sticky chrome.
- Don't substitute `{colors.success-deep}`, `{colors.accent-green-pale}`, or any other green for `{colors.primary}` in CTAs. The brand green is precise.
- Don't use `{colors.link-blue}` outside of inline body-prose links. It is not a button color, not a chrome color.
- Don't soften the geometry. No pill buttons, no rounded cards, no `{rounded.lg}` or higher anywhere except avatars and social icons.
- Don't pad the hero `{component.hero-card-dark}` symmetrically. Copy hugs the left third; imagery fills the right.
- Don't add a second accent color for variety. The system is intentionally one-color.
- Don't put `{component.button-primary}` on a `{colors.canvas}` background where green-on-white would clash with photo content — use `{component.button-outline}` instead and reserve fill for dark surfaces.


## 响应式布局

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 超广 | 1920px+ | 内容 max-width 暂停 1280px;外沟长到 ~80px |
| 桌面大块 | 1440px | 默认桌面布局 - 4- 上卡网, 6- 缩写页脚 |
| 桌面 | 1280px | 与大,外沟略窄相同 |
| 桌面小块 | 1024px | 4- 上卡崩溃到 3- 上层; sub-nav 保持水平 |
| 平板电脑 | 768px | 3- 上卡崩溃到 2-上;主导航成为汉堡抽屉 |
| 移动 | 480px | 单柱所有东西; 脚下柱倒塌到手风琴 |
| 移动窄 | 320px | 首屏们 `{typography.display-xl}` 显示比例 48px → 32px |

### 触控区域
All interactive elements meet WCAG AA (≥ 44×44px). `{component.button-primary}` sits at 44px height with 24px horizontal padding. `{component.text-input}` sits at 44px. `{component.pill-tab}` sits at ~40px height with extended hit-target padding to 44px. `{component.button-outline}` matches the 44px standard. Footer links are 18–20px line-height with 8–12px vertical padding to keep tap targets at ~36–44px depending on link length.

### 窄屏布局调整
- **初等导航 :** 桌面中心组 – 平板汉堡抽屉 768px.
- **纸牌 grid:** 4-up → 3-up → 2-up → 1-up at 1024, 768, and 480px; 沟槽从 24px 改为: 16px 手机上,我刚从电话里找到的
- **Footer:** 6-up link columns → 2-up at tablet → full accordion at mobile (each column header becomes a tap-to-expand row).
- **首屏副本 :** 桌面 `{typography.display-xl}` (48px) ——平板电脑 36px ■ 流动 32px; line-height 暂停 1.25.
- **Sub-nav 条形:** 桌面水平锚行 → 平板横向卷轴 → 移动崩溃成选定的下拉。
- **科 科 padding:** `{spacing.section}` (64px(台式计算机) – 48px 平板电脑 32px 移动。
- **长式文本 :** 桌面 60/40 车体+侧栏 → 平板/移动单柱,并用侧栏推向下方。

### 图片适配
- 首屏形象使用艺术指导作物: 16:9 桌面交换中的宽首屏 4:5 移动上的肖像,所以主题保持中心,标题文本仍然有覆盖空间.
- 纸牌图像是 fixed 方面(16:9 资源, 1:1 以产品为单位),其比例比值而非断点之间的重生.
- All non-critical imagery is lazy-loaded as the user scrolls into the next grid row.


## 迭代指南

1. 一次聚焦一个组件。 将 YAML 输入从前置事务中拉出, 并验证每个属性解析 。
2. 直接引用组件名称和符号( Q)`{colors.primary}`, `{component.button-primary-active}`, `{rounded.sm}`)——不要用句子解释.
3. 运行 `npx @google/design.md lint DESIGN.md` 编辑后 - `broken-ref`, `contrast-ratio`,以及 `orphaned-tokens` 自动发出警告。
4. 添加新的变体作为单独的组件条目( Q)`-active`, `-disabled`, `-focused`()——不要把他们埋在传言里.
5. 默认正文为 `{typography.body-md}`; 联系范围 `{typography.body-strong}` 用于强调; 储备金 `{typography.display-xl}` 严格地说,首屏篇头条。
6. 保留 `{colors.primary}` 稀有的每个视图——如果一个以上的固绿色CTA出现在同一折叠上,则将一个中和到 `{component.button-outline}`.
7. When introducing a new component, ask whether it can be expressed with the existing card + 2px-radius + corner-square + green-CTA vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.


## 已知缺口

- **Mobile screenshots not captured** — responsive behavior synthesizes NVIDIA's known mobile pattern (hamburger drawer, accordion footer, 1-up card grid, hero downscale) from desktop evidence and the documented breakpoint stack.
- **Hover states not documented** by system policy.
- **对话框/ 模式样式** 超越在捕获表面看不到的本地环境选择器覆盖。
- **窗体字段样式** 用于完整注册/联系表在捕获的表面中不存在——只记录内在搜索和基本文本输入。
- **登录/ 认证的界面框架** 而不是在被俘的页面。

## 设计词元原值

An engineering-grade marketing system organized around two surface modes — a deep black canvas for hero and footer chapters and a flat paper-white canvas for body content — connected by a single, almost violently saturated NVIDIA Green accent that carries every CTA, every active tab, and the small decorative corner squares that mark out cards. The system is unapologetically angular: 2px radius across every surface, tight bold sans-serif typography in NVIDIA's proprietary EMEA cut, and a hairline gray rule that separates dense multi-column technical content. There is no decorative gradient, no atmospheric mesh, no soft drop shadow — just black, white, gray, and green stacked into a structured editorial grid that scales from product cards to massive industry landing pages without bending its rules.

```yaml
---
version: alpha
name: NVIDIA-design-analysis
description: |
  An engineering-grade marketing system organized around two surface modes — a deep black canvas for hero and footer chapters and a flat paper-white canvas for body content — connected by a single, almost violently saturated NVIDIA Green accent that carries every CTA, every active tab, and the small decorative corner squares that mark out cards. The system is unapologetically angular: 2px radius across every surface, tight bold sans-serif typography in NVIDIA's proprietary EMEA cut, and a hairline gray rule that separates dense multi-column technical content. There is no decorative gradient, no atmospheric mesh, no soft drop shadow — just black, white, gray, and green stacked into a structured editorial grid that scales from product cards to massive industry landing pages without bending its rules.

colors:
  primary: "#76b900"
  on-primary: "#000000"
  primary-dark: "#5a8d00"
  ink: "#000000"
  canvas: "#ffffff"
  surface-dark: "#000000"
  surface-soft: "#f7f7f7"
  surface-elevated: "#1a1a1a"
  hairline: "#cccccc"
  hairline-strong: "#5e5e5e"
  body: "#1a1a1a"
  mute: "#757575"
  stone: "#898989"
  ash: "#a7a7a7"
  on-dark: "#ffffff"
  on-dark-mute: "rgba(255,255,255,0.7)"
  link-blue: "#0046a4"
  blue-700: "#0046a4"
  error: "#e52020"
  error-deep: "#650b0b"
  warning: "#df6500"
  warning-bright: "#ef9100"
  success-deep: "#3f8500"
  accent-yellow-pale: "#feeeb2"
  accent-purple: "#952fc6"
  accent-purple-deep: "#4d1368"
  accent-purple-pale: "#f9d4ff"
  accent-green-pale: "#bff230"

typography:
  display-xl:
    fontFamily: NVIDIA-EMEA
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  display-lg:
    fontFamily: NVIDIA-EMEA
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-xl:
    fontFamily: NVIDIA-EMEA
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-lg:
    fontFamily: NVIDIA-EMEA
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  heading-md:
    fontFamily: NVIDIA-EMEA
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-sm:
    fontFamily: NVIDIA-EMEA
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  card-title:
    fontFamily: NVIDIA-EMEA
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.47
    letterSpacing: 0
  body-md:
    fontFamily: NVIDIA-EMEA
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: NVIDIA-EMEA
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: NVIDIA-EMEA
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.67
    letterSpacing: 0
  button-lg:
    fontFamily: NVIDIA-EMEA
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  button-md:
    fontFamily: NVIDIA-EMEA
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: NVIDIA-EMEA
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.144px
  link-md:
    fontFamily: NVIDIA-EMEA
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption-md:
    fontFamily: NVIDIA-EMEA
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0
    textTransform: uppercase
  caption-sm:
    fontFamily: NVIDIA-EMEA
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  caption-xs:
    fontFamily: NVIDIA-EMEA
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0
  utility-xs:
    fontFamily: NVIDIA-EMEA
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
    textTransform: uppercase

rounded:
  none: 0px
  xs: 1px
  sm: 2px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 11px 24px
    height: 44px
  button-primary-active:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 11px 13px
  button-outline-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
  button-ghost-link:
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
  button-disabled:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ash}"
    rounded: "{rounded.sm}"
  pill-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: 10px 18px
  pill-tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  search-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 10px 16px
    height: 40px
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.sm}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 32px
  resource-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.sm}"
    padding: 24px
  hero-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 80px 48px
  cta-strip-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-xl}"
    rounded: "{rounded.none}"
    padding: 64px 48px
  callout-stat:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.sm}"
    padding: 32px
  corner-square:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.none}"
    size: 12px
  utility-bar:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.none}"
    height: 32px
  primary-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    height: 64px
  breadcrumb-bar:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
    height: 48px
  sub-nav-strip:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    height: 56px
  footer-section:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-mute}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 64px 48px
  link-inline:
    textColor: "{colors.link-blue}"
    typography: "{typography.link-md}"
  badge-tag:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.sm}"
    padding: 4px 10px
---
```
