# Dell (1996) · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Dell's December 1996 home page is a perfectly preserved fossil of catalog-era enterprise web design — the moment when a Fortune-100 brand decided the web was *important enough* to invest in, but two years before CSS would be widely adopted and three years before "design system" was a phrase anyone used. Every visual choice on the page is a downstream consequence of that constraint: layout via HTML tables, type via the browser's built-in font stack (Arial Black / Helvetica / Times Roman), color via 8-bit-safe flat fills, and decoration via hand-cut GIF "stickers" (the NEW! burst, the round PC Magazine Readers' Choice seal, the beveled "BUY a DELL" yellow tab). The page is bordered — literally bordered, in a 1-cell-wide black HTML table — and inside that frame, every product line gets a "ribbon card": a white title bar with a sharp black underline, a tinted body block in one of eight catalog colors (sage, salmon, peach, lime, sky, steel, periwinkle, olive), and a beveled product photograph notched into the right edge of the card.

The brand voice carries through in two anchors: a vivid Dell-red CTA panel on the left of the homepage (cream-yellow Times Roman copy on a `{colors.primary}` fill, set inside the black frame) and a screaming red phone number — `1-800-213-DELL` — pinned to the top-right of every page, because in 1996 the website was a brochure that ended with a phone call. The footer is a row of four hand-drawn icon-labels (FIND / HOME / ONLINE STORE / SERVICE & SUPPORT) linked by a thin green horizontal rule, and a single classic-Mosaic-blue underlined "Copyright" link sitting above the legal small print in Times Roman.

**关键特征 :**
- 字面页框:每页都坐落在 a `{colors.frame-ink}` (黑色)外部边界 ~8 px 厚度 – 设计将浏览器窗口视为打印图片框
- 平面颜色块 "肋骨卡" 给每个产品家族打上一个专用目录颜色(`{colors.tint-sage}` 纬度, `{colors.tint-salmon}` 欧普蒂普莱克斯GX, `{colors.tint-periwinkle}` 电源Edge, `{colors.tint-sky}` Dellware等)——无梯度,无阴影,无透明度
- Chunky display typography in `{typography.display}` (Arial Black 36 / weight 900) for section title blocks; `{typography.heading-2}` (Helvetica Bold 16) for product row titles; `{typography.body}` Times Roman 14 for everything else
- 手剪 GIF "杆子" 覆盖布局: 黄色 "BUY a" DELL"右上方的标签,角度为"NEW!" 闪烁在新产品行上,圆红色PC杂志读者选择封条上
- `{colors.primary}` (Dell 红色)只保留两件事情:主页CTA面板和右上方电话号码——永远不装饰
- 带经典蓝的页脚图标导航( S)`{colors.link}` #0000ee)锚线下划线——不可模糊的网景 3.x 链接颜色


## 配色

### 品牌和 强调色
- **Dell 红色** (`{colors.primary}` — #e91d2a:品牌的签名红色. 预留主页CTA面板("At") 页面存档备份,存于互联网档案馆. Dell.com,我们会帮助你找到正确的系统...),右上方的电话号码,以及PC杂志读者选择的封条环,从未作为卡片体填充.
- **Dell 黄色** (`{colors.yellow-sticker}` — #fcc20f: 贴纸黄色——"BUY a" DELL" 标语在顶部,角"NEW!" 闪烁了重叠的新产品行.
- **Dell Purple** (`{colors.purple-stripe}` — #6a26a4): The accent stripe behind the lowercase ".com" / "DELL" wordmark text — appears inside the "BUY a DELL" sticker chrome only.

### 表面
- **框架墨水** (`{colors.frame-ink}` — #000000:纯黑色。页面框架、顶端横幅背景、按钮填充以及全部 1 px 丝带卡发条.
- **页面底色** (`{colors.canvas}` — #ffffff: 框内真白,页面,丝带卡标题栏填充,图标标签导航背景.

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — #000000: 身体文本,标题,访问前的链接副本。纯黑色; 内无暖近黑色软化 1996.
- **链接** (`{colors.link}` — #0000ee: 经典 Mosaic / 网景 3.x 默认链接蓝色。 下划线内主播( “ Copyright ” , “( 使用条件 ) ) , 下划线内“ from Dell‘获奖服务与支援团队').

### 丝带-卡德丁丁家族
八个目录颜色,每个产品线一个——这些是页面的色调个性:
- **Olive** (`{colors.tint-olive}` — #8e8a25): "DIMENSION DESKTOPS" eyebrow block
- **贤者** (`{colors.tint-sage}` — #b3bd95: 纬度记事本丝带体
- **沙门** (`{colors.tint-salmon}` — #d77a7a:"OPTIPLEX DESKTOP SYSTES"眉毛+GX系列体
- **桃子( 桃子)** (`{colors.tint-peach}` — #e6915d:尺寸卡体 + OptiPlex Gs 体
- **莱姆** (`{colors.tint-lime}` — #c0d4a7: OptiPlex G系列车体
- **天空( S)** (`{colors.tint-sky}` — #9ab6c8: 戴尔沃丝带体
- **Steel** (`{colors.tint-steel}` — #a5b8c0): Dimension XPS Pro ribbon body
- **佩里温克勒** (`{colors.tint-periwinkle}` — #8c9ae0: PowerEdge丝带体

锡是饱和的,但并不生动——它们坐落在真正的中性铬下方,这是GIF时代的网络安全帕莱特四分法的标志.


## 字体排版

### 字体家族

三个系统上层的家庭,没有网友(网友尚未存在):

- **Arial Black** (倒计时 : Helvetica, system-ui ——只显示标题。粗体的缩写部分眉毛(“DIMENSION DESKTOPS”、“OPTIPLEX DESKTOP SYS”)是 Arial Black 字重 900,设置在全头与正常跟踪。
- **Helvetica** (倒计时 : Arial, system-ui sans)——产品排标题,按钮标签,上旗"BUILD YouRON COMPETER. ONLINE"头条,总是粗体((BUILD YouRON COMPETER. ONLLINE).700),总是全能的.
- **Times New Roman** (倒计时: serif)——身体复制。每个段落,每个标题,每个内线主播都坐落在默认的时代罗马语中。这些塞里夫斯即刻日期设计——现代网络上的身体文本几乎永远没有 serif.

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 使用 |
|---|---|---|---|---|
| `{typography.display}` | 36px | 900 | 1.0 | 部分眉毛标题("DIMENSION DESKTOPS","OPTIPLEX DESKTOP SYS") . |
| `{typography.heading-1}` | 24px | 900 | 1.05 | 子页面首屏头条 |
| `{typography.heading-2}` | 16px | 700 | 1.2 | 顶端横幅复制,产品线H1 ("可靠PC用于高性能计算"). |
| `{typography.heading-3}` | 14px | 700 | 1.2 | 带卡标题栏(“OPTIPLEX GX PRO”,“DIMENION XPS”) |
| `{typography.body}` | 14px | 400 | 1.4 | 默认段落复制, 丝带卡体, CTA 面板复制 |
| `{typography.body-sm}` | 12px | 400 | 1.4 | "这个网站最好用浏览器版本查看" 3.0 和更高的。" |
| `{typography.caption}` | 11px | 400 | 1.35 | Footer copyright text |
| `{typography.button}` | 12px | 700 | 1.0 | 按钮标签,"NEW!"贴纸,BUY-a-DELL贴纸 |
| `{typography.ui-label}` | 12px | 700 | 1.0 | 图标标签 导航大写标签 (“ FIND ”、“ HOME ”、“ ONLINE STORE ”、“ 服务和支持 ”) |

### 原则
- 英国大学的桑斯 serif 身体的 现代公约的反面 和死亡的赠与中...90s 排字术.
- 显示权重是极端的( E)900 / Black),且再也没有变软. "Dimension"/"OptiPlex"眉毛块倚着字体船最重的字重.
- No letter-spacing tracking adjustments — pixel-fonts in 1996 didn't reward it. Everything is set at the browser's default kern.
- Line-height 显示时紧紧( E)1.0)和关于身体的常规(第1款)1.4)——从印刷-磁铁编目布局中被搁置.

### Note on Font Substitutes
All three families are operating-system defaults on every consumer OS shipped in 1996 (Windows 95: Arial / Times New Roman; Mac OS 7.5+: Helvetica / Times). The brand had no fallback strategy because no fallback was needed — the fonts were always present. Modern reproductions can stay on this exact stack (Arial Black / Helvetica / Times New Roman) for authenticity.


## 布局

### 间距系统

- **基地单位**: 4 px (与 2 / 6 / 10 中间体)。 1996 页面布局由 HTML 表格单元格粘贴驱动(`cellpadding="4"` / `cellspacing="0"`而不是一个设计尺度。
- **脚本**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.s}` 6px · `{spacing.sm}` 8px · `{spacing.m}` 10px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 20px · `{spacing.xxl}` 24px · `{spacing.section-sm}` 32px · `{spacing.section}` 40px · `{spacing.section-lg}` 48px.
- **纸牌内部贴纸**: `{spacing.md}` 12 px 垂直/ 垂直 `{spacing.lg}` 16 px 水平在丝带卡体上。
- **节垂直节奏**: `{spacing.section}` 40 px 产品-肋骨堆栈之间; `{spacing.section-sm}` 32 px 介于眉毛颜色块和它的首张丝带卡之间.

### 网格容器( C)
- 固定的圆形桌布局 760 px 范围——事实上 1996 标准目标 800×600 显示器带有一个小卷轴条沟。
- Two-column outer structure: left rail (~28 %) carries the homepage icon-link grid + CTA red panel; right column (~72 %) carries the product ribbon stack.
- 现代意义上的电网系统没有——每个区段都是自己的. `<table>` 带有硬码列宽的声明。

### 白空间哲学
Tight by modern standards. Catalog density wins over editorial breath — every pixel inside the black frame is doing work (illustration, color block, headline, body). The compensating decompression happens *inside* each ribbon card: white title bar + tinted body block + product photo notch creates internal breathing room without enlarging the overall page.

### 反应战略

#### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 期间默认 | 800 × 600 | Fixed 760 px ,为时代标准显示器设计 |
| 现代桌面 | 1280+ px 键 | 排布布布局以宽大的侧沟为中心——模仿"屏幕中间的磁场传播". |
| 平板 | 768 px | 黑框压缩为 4 px; 带状卡片在内部全宽堆叠 |
| Mobile | < 480 px | Black frame to 2 px; two-column structure collapses to single column; left rail icon grid stacks above the right-column product stack |

#### 触控区域
1996 had no notion of touch — the original designs assume mouse-only. Modern reproductions need to widen the icon-label nav targets to 44 × 44 px minimum at mobile (the 1996 icons sat at ~24 × 24 with 8 px label below, well under modern guidelines).

#### 折叠战略
- At ≤ 768 px, the homepage's left-rail icon-link grid (Online Store / Service / Why Dell? / Government / Worldwide / Order Status / Company Info / U.S. Careers) collapses from a 2 × 4 grid to a single-column stack
- 带卡右尖产品图片 Notch 成为移动时的顶端对齐全宽图像
- 顶部横幅的标记线("BUILD Your OMN Computer.ONLINE")缩小了一个类型级;电话号码包裹在BUY-a-DELL贴纸下方.
- Footer icon-label nav stays 4-up at all widths — the icons are small enough to survive

#### 图像行为
Product photos are bitmap GIFs with hand-applied bevel shadows — they were authored at fixed pixel widths (typically 80–120 px wide). The right-edge notch effect was achieved by table-cell negative spacing. Modern reproductions should keep the bevel shadow effect (it's signature) but use SVG drop-shadow or CSS `filter: drop-shadow(2px 2px 0 #000)` to recreate it crisply at high-DPI.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 — Flush | No shadow, no border | Body text, copyright row, footer band background |
| 1 —— 细边线 | `1px solid {colors.frame-ink}` | 带卡外缘, 桌球分隔符 |
| 2 - 框架 | `8px solid {colors.frame-ink}` | 电话 page-frame 整个视图的边框 |
| 3 - 贝维尔 | 硬锋 1 px 突出显示 + 1 px GIF 标签和产品照片上的阴影 | "Buy a (英语) DELL黄色贴纸,新! 闪亮,奖章,产品照片 |

There are **no soft shadows** in the 1996 design — every depth cue is either a hard 1 px border or a hand-painted bevel inside a GIF. Modern reproductions that need to feel period-accurate must resist the urge to add Material-style elevation or atmospheric drop shadows.

### 装饰性深度
贝壳和框架带有整个深度词汇:
- 电话 **页面框架** 是最强的深度提示——它告诉观众"这是一个包含的文档,而不是一个连续的页面底色".
- **贴纸上的贝壳** (买单a) DELL将他们推向页面表面,
- **产品照片** 携带自己的手绘贝子+滴影,烘烤成GIF本身.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 通用默认——按钮,卡片,输入,横幅,页面框,丝带卡体,眉毛块 |
| `{rounded.full}` | 9999px | Circular 奖章(PC Magazine Readers' Choice),Home图标上的圆形"h"标签 |

电话 1996 设计是有效的 **双** 半径模式:方(每样)和圆(装饰性封条贴)。 4 / 8 / 12 px 微妙半径级——该词汇属于后波茨特拉克网络.

### 摄影几何
Product photos are rectangular GIFs with their own internal beveled "monitor" framing — they sit at native pixel dimensions, never scaled. Aspect ratios cluster around 4:3 (the era's standard CRT shape). Avatars don't exist on this site — staff photography was reserved for "About Dell" pages not captured in these snapshots.


## 组件

> **No hover states documented.** Per the global no-hover policy, every component below documents Default state only.

### 框架封条( B)

**`page-frame`** ——整个景点周围的字面黑边.
- Background `{colors.frame-ink}`, padding `{spacing.sm}` 8 px on every side, no radius.
- 页面坐落 *内* 将它视为不可转让的集装箱铬;在移动中折叠是可以接受的(至) ~4 px),但移除它会完全失去品牌.

**`top-banner`** ——纯黑条条横跨顶端,白色"BUILD your own Computer. ONLINE"头条+子标线,黄色"BUY a" DELL贴在右边,红色1-800-213-DELL" 电话号码。
- Background `{colors.frame-ink}`, text `{colors.canvas}`, type `{typography.heading-2}`, padding 12 px vertical / 16 px horizontal, no radius.

### 区域眉毛块

**`section-eyebrow-olive`** ——大锡色块,持有块状的节块标题(“DIMENSION DESKTOPS”). 使用在维度产品页的顶部.
- Background `{colors.tint-olive}`, text `{colors.ink}`, type `{typography.display}` (Arial Black 36 / 900), padding 24 × 16, no radius.

**`section-eyebrow-salmon`** ——与OptiPlex线的鲑鱼-平克填充("OPTIPLEX DESKTOP SYS")的同色铬.
- Background `{colors.tint-salmon}`, otherwise identical to the olive variant.

### 丝带卡

品牌的标志组件,每个产品一行的"卡"是三块的堆叠:
1. **`ribbon-card-title`** — white horizontal title bar with the product variant name in Helvetica Bold all-caps (e.g. "OPTIPLEX GX PRO", "DIMENSION XPS", "POWEREDGE SERVERS"). 1 px bottom border in `{colors.frame-ink}`.
   - Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.heading-3}`, padding 6 × 12, no radius.
2. **`ribbon-card-body-<tint>`** — color-block body in one of eight tints, holding the short marketing pitch in `{typography.body}` (Times Roman 14). Padding 12 × 16. The product photograph notches into the right edge with a transparent GIF cutout.
3. **图片符号** - 吉利弗坐在最右边 ~25 % 上下悬挂的像卡片一样 被钉在软木板上

Each tint variant is its own component entry. Pick the one that matches the product family:

- **`ribbon-card-body-sage`** — `{colors.tint-sage}` 填充, 用于纬度记事本行
- **`ribbon-card-body-salmon`** — `{colors.tint-salmon}` 填充, 用于 OptiPlex GX 系列列
- **`ribbon-card-body-peach`** — `{colors.tint-peach}` 填充, 用于尺寸行和 OptiPlex Gs
- **`ribbon-card-body-lime`** — `{colors.tint-lime}` 填充, 用于 OptiPlex G 系列列
- **`ribbon-card-body-sky`** — `{colors.tint-sky}` fill, used for Dellware rows
- **`ribbon-card-body-steel`** — `{colors.tint-steel}` fill, used for Dimension XPS Pro rows
- **`ribbon-card-body-periwinkle`** — `{colors.tint-periwinkle}` 填充, 用于 PowerEdge 服务器行

All seven share identical chrome: 1 px solid `{colors.frame-ink}` border, `{spacing.md}` × `{spacing.lg}` (12 × 16) padding, `{rounded.none}` (sharp corners), `{typography.body}` Times Roman 14 inside. Only the fill color changes per product family.

### 呼叫行动

**`cta-block-red`** ——主页生动. Dell-红色面板( "at") Dell.com,我们会帮助你找到正确的系统,配置它,定价,并命令它...").
- Background `{colors.primary}`, text `{colors.on-primary}` (white), 1 px solid frame-ink border, type `{typography.body}` (Times Roman 14), padding 16 px, no radius.
- One per page maximum. The brand's most aggressive attention-grab — never use it for anything except a top-tier sales message.

**`phone-callout`** ——右上方电话号码(").1-800-213-DELL")在黑色横幅上变成红色.
- Background `{colors.frame-ink}`, text `{colors.primary}`, type `{typography.heading-2}` Helvetica Bold 16, padding 4 × 8, no radius. Pinned to the right of the top banner on every page.

### 贴纸(通用信息框架式的覆盖)

**`buy-a-dell-sticker`** 黄色长方形贴纸,上面写着“BUY a” DELL" , 以 Helvetica 粗体,"A"套装在小紫色 stripe,则 "DELL" 黑字标记。将字标固定在每页的右上方。
- Background `{colors.yellow-sticker}`, text `{colors.ink}`, 1 px black border, type `{typography.button}`, padding 4 × 8, no radius.

**`new-burst-sticker`** — angled yellow burst with "NEW!" in Helvetica Bold black, overlapping the right side of new product ribbon-cards. Slight rotation (~15°) gives it the pinned-on-with-tape feel.
- Background `{colors.yellow-sticker}`, text `{colors.ink}`, type `{typography.button}`, padding 4 × 8, no radius (rotation applied separately).

**`cert-seal`** ——圆红奖章:中心读作"PC MAGAZINE",由"Servicce ^ Reliability → READERS' CHOICE"环绕,内侧为白色场和红色的边框环,坐落在产品页的右栏.
- Background `{colors.primary}`, text `{colors.canvas}`, type `{typography.button}`, rounded `{rounded.full}`, 64 px size.

### 导航

**`icon-label-nav`** ——页底导航行:四个手绘图标(眼镜-FIND / house-HOME / 黄棒-ONLINE STORE / 扳手-SERVICE 与支持),通过细绿色水平规则连接,每个图标都有大写 Helvetica 标签下面。
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.ui-label}`, padding 8 px around each icon-label pair, no radius.
- 连接绿色规则是GIF图像的一部分,而不是CSS边框.

### 输入按钮( B)

**`text-input`** —— 边框 HTML 输入。白色填充, 1 px 坚固的黑色边界, 时代罗马 14 里面,我们进去了。
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid frame-ink, type `{typography.body}`, padding 4 × 6, no radius.
- 用于搜索和“配置和购买”表格(这三种抓取中不可见,但符合时代的 HTML) 3.2 窗体部件)。

**`button-primary`** 黑色的、装满白色的按钮 Helvetica 粗体大写标签 。
- Background `{colors.frame-ink}`, text `{colors.on-primary}`, 1 px solid frame-ink, type `{typography.button}`, padding 6 × 16, no radius.

**`button-secondary`** 白色的装填图示按钮 相同的染色体带有反向颜色
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid frame-ink, type `{typography.button}`, padding 6 × 16, no radius.

**`button-text-link`** 光线下划线锚 以经典的莫萨伊克蓝。
- Text `{colors.link}` #0000ee, type `{typography.link}` Times Roman 14, underline on default. No padding, no radius.

### Footer

**`footer-band`** — the bottom of every page: icon-label nav row, classic-blue Copyright link, "(Terms of Use)" parenthetical, browser-compatibility small print, and the Microsoft BackOffice / Internet Explorer logo banners.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px top border in frame-ink, type `{typography.body-sm}`, padding 16 px.

### 实例(说明性)

> 自动生成的工具包-模拟演示表面(`scripts/derive-examples-block.mjs`。每个 `ex-*` 条目参考: 下游消费者的品牌原始产品(`/preview-design`, `/generate-kit`) 重新皮肤相同 10 表面一致。 `TO_FILL` 标记表示缺失原始人——在LLM判断传中解析.

**`ex-pricing-tier`** ——默认定价等级卡。 feature-card 与基白色表面的铬.
- 属性 : `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** ——地貌/高亮的层次——极性-浮点表面(暗色填充+光线文字在光线模式下,浅色填充+暗色文字在暗线模式下).
- 属性 : `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** ——什么是包含的汇总卡——重新用于SaaS/B2B纵横(NOT为字形产品画廊).
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** ——订阅摘要——重新用于SaaS/B2B(每件加件的行项目,而非字面车).
- 属性 : `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** ——App Shell 实例中的侧边栏导航行. Active State 使用品牌主标.
- 属性 : `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- 属性 : `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** ——签入/签入卡. 复用. feature-card 铬 text-input 原始人在里面,他们都在里面
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** ——模度对话框表面——与 feature-card 以高的阴影盟誓,
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** ——空状态插图框架.
- 属性 : `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** ——通知表面. feature-card 形状 + 中阴影。
- 属性 : `backgroundColor`, `rounded`, `padding`, `typography`



## 设计建议与禁忌

### 执行
- Keep the literal `{components.page-frame}` black border on every page — this is the brand's single most identifiable container chrome.
- 准备金 `{colors.primary}` (Dell 红色) `{components.cta-block-red}` 面板和 `{components.phone-callout}` 其它用途都稀释了紧急信号
- 使用八种丝带卡色(`{colors.tint-olive}` /圣贤/沙门/桃李/石灰/天/钢/旁冬克)为一. *家庭* ——选择每条产品线一条,并坚持该线跨线营销表面.
- 设定每个显示标题 `{typography.display}` (Arial Black 36 / 字重 900),品牌的排版记录器取决于相对于平面颜色的极端字重.
- 保存复制件进入 `{typography.body}` 罗马时代 14 ——取代现代桑语会完全失去目录的感觉.
- 将每个 CTA / 按钮显示在 `{rounded.none}` (0 px) 现代软辐射按钮背叛了时代.
- Use hand-painted bevels / hard-edge GIF shadows on stickers and product photos. Never substitute a soft CSS shadow.

### Don't
- Don't introduce a chromatic accent outside the eight catalog tints + Dell red + Dell yellow + classic link blue. The palette is closed by design.
- Don't soften any corner. `{rounded.none}` is the universal modifier; only award seals get `{rounded.full}`.
- Don't replace Times Roman body with Arial / Helvetica / Inter / a webfont — the serif body is the era's signature.
- Don't add soft drop-shadows or atmospheric gradients. The brand has hard borders and flat fills; everything else reads as anachronism.
- Don't crop or "tuck" product photos with `border-radius` or `clip-path`. The notch into the ribbon-card right edge is the framing — the photo itself stays a hard rectangle.
- Don't pair two `{components.cta-block-red}` panels on the same page. The red fill is meant to be the singular attention pole.
- Don't strip the `{components.phone-callout}` from the top banner. In 1996 the website existed to drive phone-call orders; the phone number IS the navigation.

## 设计词元原值

启发人们理解 Dell.com的(简体中文) 1996 设计语言——环绕字面黑页框构建的目录时代企业网络设计,生动平整的色块"肋骨卡"以圣格,沙门,旁温克勒,天,桃和石灰,块状的Helvetica-黑色显示标题,时代罗马体复制,以及整个视觉词汇,图片中包含Photoshop前手剪GIF贴纸(NEW! burning,授予封条,贝氏产品照片).

```yaml
---
version: alpha
name: Dell 1996 Analysis
description: An inspired interpretation of Dell.com's 1996 design language — a catalog-era enterprise web design built around a literal black page frame, vivid flat color-block "ribbon cards" tinted in sage, salmon, periwinkle, sky, peach and lime, chunky Helvetica-Black display titles, Times Roman body copy, and an entire visual vocabulary of pre-Photoshop hand-cut GIF stickers (NEW! bursts, award seals, beveled product photos).

colors:
  primary: "#e91d2a"
  on-primary: "#ffffff"
  canvas: "#ffffff"
  surface: "#ffffff"
  ink: "#000000"
  frame-ink: "#000000"
  yellow-sticker: "#fcc20f"
  purple-stripe: "#6a26a4"
  link: "#0000ee"

  # Ribbon-card tint family (one per product line)
  tint-olive: "#8e8a25"
  tint-sage: "#b3bd95"
  tint-salmon: "#d77a7a"
  tint-peach: "#e6915d"
  tint-lime: "#c0d4a7"
  tint-sky: "#9ab6c8"
  tint-steel: "#a5b8c0"
  tint-periwinkle: "#8c9ae0"

typography:
  display:
    fontFamily: Arial Black
    fontSize: 36px
    fontWeight: 900
    lineHeight: 1.0
    letterSpacing: 0
  heading-1:
    fontFamily: Arial Black
    fontSize: 24px
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: 0
  heading-2:
    fontFamily: Helvetica
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading-3:
    fontFamily: Helvetica
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  body:
    fontFamily: Times New Roman
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-sm:
    fontFamily: Times New Roman
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption:
    fontFamily: Times New Roman
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  button:
    fontFamily: Helvetica
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  link:
    fontFamily: Times New Roman
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  ui-label:
    fontFamily: Helvetica
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0

rounded:
  none: 0px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  s: 6px
  sm: 8px
  m: 10px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
  section-sm: 32px
  section: 40px
  section-lg: 48px

components:
  # ─── Brand-native components ───
  page-frame:
    backgroundColor: "{colors.frame-ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: 8px

  top-banner:
    backgroundColor: "{colors.frame-ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  section-eyebrow-olive:
    backgroundColor: "{colors.tint-olive}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: 24px 16px

  section-eyebrow-salmon:
    backgroundColor: "{colors.tint-salmon}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: 24px 16px

  ribbon-card-title:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.heading-3}"
    rounded: "{rounded.none}"
    padding: 6px 12px

  ribbon-card-body-sage:
    backgroundColor: "{colors.tint-sage}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-salmon:
    backgroundColor: "{colors.tint-salmon}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-peach:
    backgroundColor: "{colors.tint-peach}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-lime:
    backgroundColor: "{colors.tint-lime}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-sky:
    backgroundColor: "{colors.tint-sky}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-steel:
    backgroundColor: "{colors.tint-steel}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-periwinkle:
    backgroundColor: "{colors.tint-periwinkle}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  cta-block-red:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 16px

  phone-callout:
    backgroundColor: "{colors.frame-ink}"
    textColor: "{colors.primary}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.none}"
    padding: 4px 8px

  buy-a-dell-sticker:
    backgroundColor: "{colors.yellow-sticker}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 4px 8px

  new-burst-sticker:
    backgroundColor: "{colors.yellow-sticker}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 4px 8px

  cert-seal:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    size: 64px

  icon-label-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.none}"
    padding: 8px

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 4px 6px

  button-primary:
    backgroundColor: "{colors.frame-ink}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 6px 16px

  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 6px 16px

  button-text-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.link}"
    typography: "{typography.link}"
    rounded: "{rounded.none}"

  footer-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body-sm}"
    padding: 16px

  # ─── Examples (illustrative, kit-mirror) — injected by derive-examples-block.mjs ───

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with the base white surface."
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    item-divider: "{colors.frame-ink}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.surface}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.s} {spacing.md}"
    rowBorder: "{colors.frame-ink}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---
```
