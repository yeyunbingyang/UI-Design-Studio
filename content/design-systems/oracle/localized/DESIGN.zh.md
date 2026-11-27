# Oracle · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Oracle网络系统对于企业品牌来说是不寻常的,因为它几乎不用颜色。 页面地面是六步阶梯的暖中性,从纯白色到三个离白到暖近黑,这一梯梯几乎都完成了结构工作. 不同部分不是通过牌或规则或阴影来区分,而是通过它们坐的梯子的哪一圈,堆满的血和方角来区分,因此页面读作一系列的直肠转动而不是堆积的容器.

The famous Oracle red appears exactly once per page, in the masthead wordmark, and nowhere else. Every action on the site is carried by `{colors.primary}`, a warm dark charcoal, in a small 4px-radius button that never grows louder than its label. The restraint is deliberate and total: there is no coloured CTA, no accent-tinted card, no gradient. When colour does arrive it arrives at full-band scale, a whole section width of `{colors.band-teal}` or `{colors.band-forest}`, and then the page returns to neutral.

What gives the system its character is the type. Two display registers run side by side. The corporate index sets its headings in Oracle Sans at weight 300, very large and very light, while the product pages set theirs in Georgia, a bookish transitional serif that is genuinely surprising on a database landing page. Beneath both, Oracle Sans handles everything else across a wide weight range, dropping to 350 for running copy and jumping all the way to 800 for section headings, so the contrast between a paragraph and the heading above it is enormous without either changing size very much. A single gold rule, 40 by 4 pixels, sits under the hero headline. It is the only decorative mark in the system, and against this much neutral it does a lot of work.

**关键特征 :**
- 6龙的温和中性梯子... `{colors.canvas}` → `{colors.canvas-soft}` → `{colors.canvas-tint}` → `{colors.canvas-warm}` → `{colors.hairline}` → `{colors.ink-deep}` 几乎每个表面都携带着
- `{colors.brand-mark}` 保留给词标记, 并在界面中无处使用
- 每一件都用热炭做 `{colors.primary}` 时 间 `{rounded.xs}`,没有彩色的 CTA 任何地方
- Two display registers, being Oracle Sans at weight 300 on the corporate index and Georgia serif across the product pages
- 极致的字重跳跃,从 350/400 将复制直接运行到 800 节标题
- 完全血型的方角带无阴影——深度仅来自直径步
- A 40 × 4px `{colors.accent-gold}` 系统唯一的装饰品
- 色调只部署在全波段范围,从未部署在控制器上


## 配色

### 品牌色与强调色
- **Oracle Red** (`{colors.brand-mark}` — #c74634): the wordmark, and only the wordmark. It appears in the masthead at the top of every page and is not used for any button, link, border, band or highlight. Elsewhere on the page red shows up only inside photography and inside logos printed on product hardware.
- **动作木炭** (`{colors.primary}` — #312d2a: 站点上每个主要行动背后的填充,温暖而非中立,清晰的步骤轻于 `{colors.ink}` 以文字块的形式读取。
- **Action Charcoal Pressed** (`{colors.primary-pressed}` — #47423e): the active state of that button.
- **小学** (`{colors.on-primary}` — #ffffff: 填充动作上的标签, 以及每个反向表面的文字颜色.
- **黄金规则** (`{colors.accent-gold}` — #f0cc71): a 40 × 4px 栏杆坐在每页产品标题下的首屏头条下,系统是一块装饰品。
- **Gold Tab** (`{colors.accent-gold-soft}` — #f7e0a1): a paler gold, 5px tall, marking the selected item in the dark product sub-navigation.

### 界面表面
表面设定是编号的阶梯,其径距足够接近,一个波段变化读作光线的变换,而不是新的面板.

- **页面底色** (`{colors.canvas}` — #ffffff: 桅头,页脚,内容卡,以及最亮的节段乐队.
- **软画帘** (`{colors.canvas-soft}` — #fbf9f8:最常用的产品页部分填充,一个几乎无法接受的从白色上跳出.
- **风景小屋** (`{colors.canvas-tint}` — #f5f4f2:下一步,用于辅助区段和联系人首屏.
- **圆筒暖** (`{colors.canvas-warm}` — #f1efed:最温暖,使用最多的锡,承载着公司索引页几乎到尾,以及每个产品首屏乐队.
- **细边线** (`{colors.hairline}` — #e4e1dd: 瓦片和禁用控制边框, 暗端之前的最后一个中性横线 。
- **分隔符** (`{colors.divider}` — #e9e7e4: 计数器 2px 垂直规则,将联系页的频道列分开。
- **Field Border** (`{colors.field-border}` — #d4cfca): the 1px border around the masthead search field, one clear step darker than `{colors.hairline}` so an input reads as interactive against a card that merely reads as a container.
- **墨水深处** (`{colors.ink-deep}` — #211e1c: 梯形的暗端,用作产品子导航后的全宽带.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — #161513:每一条方向和每一行身体复制品,一个温暖的近黑,永远不纯黑,它保持了非常的光芒. 300- 字重级的显示尺寸 由看起来严酷。
- **链接** (`{colors.link}` — #006b8f: 将链接内置在体型复制和信道列中。一个深色的蓝色,没有下划线,大小和字重与周围的文字相同——只有颜色才具有承受力。
- On dark bands, text inverts to `{colors.on-primary}` and there is no intermediate tone; the system has one text colour per polarity.

### 语义色
- **焦点** (`{colors.focus}` — #227e9e:焦点指示器,一次声明,并同样应用于光和暗表面,因此键盘用户在任何地方都能看到相同的环.
- **错误** (`{colors.error}` — #d63b25: 验证消息和错误字段文本.
- **已禁用墨水** (`{colors.disabled-ink}` — #aea8a2: 禁用控件上的标签,与 `{colors.canvas-soft}` 填充和补充 `{colors.hairline}` 边框。

### 带颜色
色调只作为整段带,从不作为控制,卡片或边框进入系统.
- **乐队Teal** (`{colors.band-teal}` — #d6e5e5: 一块苍白的条纹, 大致 120 改为: 160px 高,用来打破一跑的中性段。
- **乐队森林** (`{colors.band-forest}` — #33553c: 深绿色带,带白文本和多栏链接列表,围绕 390px 高个子。


## 字体排版

### 字体族
Three families, with a clear division of labour.

**Oracle Sans** is the workhorse — a variable humanist sans with open apertures and a slightly squared construction. Its variable axis is exercised hard: the declared base weight is 350, running copy sits at 350 or 400, and section headings jump all the way to 800. It also supplies the corporate index's display sizes at weight 300.

**Georgia** is the display serif on the product pages. It carries h1, h2 and h3 at 36 to 56px in regular weight, with its bracketed serifs and ball terminals reading as distinctly bookish next to the sans beneath it. It is declared as an explicit stack led by Georgia, so it renders as Georgia on virtually every machine rather than falling back.

**Consolas** 宣布为 monospace 并且从未出现在页的界面框架。

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-serif-xl}` | 56px | 400 | 67.2px | 0 | 产品首屏头条, Georgia |
| `{typography.display-serif-lg}` | 40px | 400 | 48px | 0 | 科头条, Georgia |
| `{typography.display-serif-md}` | 36px | 400 | 43.2px | 0 | 产品页头条和节头条, Georgia |
| `{typography.display-sans-lg}` | 40px | 300 | 52px | 0 | 公司指数部分头条, Oracle Sans 光线 |
| `{typography.display-sans-md}` | 32px | 300 | 44px | 0 | 公司索引页头条, Oracle Sans 光线 |
| `{typography.heading-xl}` | 28px | 800 | 33.6px | 0 | 产品部分标题 |
| `{typography.heading-lg}` | 24px | 800 | 28.8px | 0 | 科和科 channel-column 标题 |
| `{typography.heading-md}` | 20px | 800 | 24px | 0 | 分节标题 |
| `{typography.heading-sm}` | 18px | 800 | 21.6px | 0 | 纸牌标题 |
| `{typography.heading-card}` | 24px | 600 | 32px | 0 | 公司指数卡标题 |
| `{typography.lead}` | 24px | 400 | 33.6px | 0 | 站在首屏的第一段下方 |
| `{typography.body}` | 16px | 400 | 22.4px | 0 | 产品页面运行副本和链接 |
| `{typography.body-loose}` | 16px | 350 | 24px | 0 | 公司指数运行副本,按申报的基准字重 |
| `{typography.body-strong}` | 16px | 700 | 22.4px | 0 | 重点清单项目和内置引入 |
| `{typography.label}` | 14px | 500 | 16.8px | 0 | 按钮标签 |
| `{typography.label-strong}` | 14px | 600 | 20px | 0 | 导航牌标签 |
| `{typography.caption}` | 12px | 400 | 20px | 0 | Footer links and fine print |

### 原则
Letter-spacing 没有任何例外。没有跟踪的眉毛,没有收紧的显示线,没有小盖子标签。 12px 改为: 56px.

Line-height moves in two registers. Display and heading roles run at a tight 1.2 (67.2/56, 48/40, 28.8/24, 21.6/18 all resolve to exactly 1.2), while body roles open up to 1.4 (22.4/16) or 1.5 (24/16). The split is clean: anything that is a heading is set tight, anything that is read in sentences is set loose.

The weight range is the most distinctive thing about the system. Running copy sits at 350 or 400 and section headings sit at 800, with almost nothing in between, so hierarchy is carried by weight far more than by size. A 24px 800-weight heading over 16px 400-weight body is a much sharper break than the 1.5× size ratio alone would suggest. The 300-weight display sizes on the corporate index run in the opposite direction, being lighter than the body text they sit above.

### 替代字体
**Oracle Sans** is a proprietary variable face. The closest open substitute is **Inter**, which shares the humanist skeleton and open apertures and offers a full variable weight axis including the 350 and 800 stops this system depends on; **Source Sans 3** is a warmer alternative but tops out lower and needs the 800 roles dropped to 700. **Georgia** ships with virtually every operating system and needs no substitution; if a webfont is required, **Gelasio** is metric-compatible with it. **Consolas** substitutes cleanly with **JetBrains Mono**. Keep the 1.2 heading line-height, the 1.4 body line-height, and zero tracking on any substitute.


## 布局

### 间距系统
- **基地单位**: 8px,虽然工作步骤在小端更细,在大端则跳得更硬.
- **脚本**: `{spacing.xs}` 10px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 18px · `{spacing.xl}` 20px · `{spacing.xxl}` 24px · `{spacing.xxxl}` 32px · `{spacing.section}` 48px · `{spacing.gutter}` 72px
- `{spacing.section}` 是一个通用节奏常数。每页的每个全宽部分都加插 `48px 0`,这让乐队 堆叠它的规律。
- `{spacing.xxxl}` is the grid gutter and the corporate index card interior; `{spacing.xxl}` is the product card interior.
- 按钮绑定是一个 fixed `10px 16px` 标题中包含 18px 底边 。

### 网格与容器
- **外部集装箱**: 1744px 最大值,带有 72px 侧沟。
- **上下文容器**: 1600px 最多可以使用一个带内的内容。
- **最小容器**: 272px,这是地板 排版崩溃 向最窄的手机。
- **网格间隙**: 32px 列之间,由企业索引瓦片行,通道列和产品卡网格使用.
- **Masthead**: 85px tall, full width, white. **Product sub-navigation**: 64px, full width, sticky. **Footer**: 105px, full width, white.
- 部分是满血和方角的;容器只限制其中的内容,从来不是乐队本身.

### 留白规则
空间是用来使直径梯子可以辨认的。由于相邻的波段可以小到四到五个点的光度不同,因此每个波段都需要足够的垂直空间,以便眼睛能够把它登记为单独的区域——因此,统一 48px 和愿意提供 160px Teal 将整段带剥离给自己。在一个带内,反之亦然:内容被装入一个带内。 1600px 列为 32px 沟槽和相对紧凑的卡片贴垫,因此宽大的外侧节奏读作结构而非空虚.

### 响应式布局

#### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 小型移动 | ≤ 450px | 整个单列; 桅头坍塌为汉堡、 文字标记和图标; 瓦片行堆栈 |
| 手机 | 451–600px | 系统最重的断点——子导航成为卷轴条,卡网走 1- 上,首屏类型 下降到它的地板上 |
| Tablet | 601–770px | The second heaviest — grids go 2-up, the search field collapses to an icon, channel columns stack and lose their dividers |
| Laptop | 771–974px | 2-up and 3-up grids, side gutters tighten from 72px toward the container minimum |
| 桌面 | 975–1344px | 完整的多列网格,子导航显示所有内在项 |
| 宽 | 1345–1744px | 内容到达 1600px 上下文封顶; 带继续全流 |
| 超全天范围 | ≥ 1744px | 外容器盖;剩余宽度由两边填充的波段吸收 |

#### 触控区域
`{components.button-primary}` 站点 37px 高高的,在它的顶端 10px 垂直粘贴和 14px 标签,该标签位于 44×44 WCAG AAA最低,依靠周边的边距来进行舒适的敲击. `{components.text-input}` 和 `{components.product-subnav}` 都清楚了, 舒适的,大约 46px 和 64px 分别是, `{components.nav-tile}`。对于重建,将按钮的垂直粘贴提升到 14px 把它带到 45px 而不改变系统中的任何其他值。

#### 窄屏布局调整
桅头是变化最多的元素:在桌面上它携带一个汉堡,词签,宽搜索字段和三个工具图标,下面的平板将搜索字段倒塌为图标,而其余则保持位置. 产品子导航将全血带保持在每一个宽度,并变成横向滚动条而不是包,所以活动 `{components.subnav-active-bar}` 保持可见。卡片网格步骤 4- 最多为 3- 最多为 2- 最多为 1- 穿过梯子,接触页上的频道栏放下了它们 `{colors.divider}` 垂直规则,因为堆叠的块之间的垂直规则读作错误。 `{spacing.section}` 远比大多数系统都长,只在移动断点进行压缩。

#### 图片适配
Photography is full-bleed inside its container and square-cornered when it fills a band, but takes `{rounded.md}` when it sits inside a product card and `{rounded.xl}` when it fills half of a corporate index content card. Video thumbnails carry a circular `{components.play-button-circular}` overlay. The contact hero uses a cut-out photographic strip with a soft feathered lower edge rather than a hard crop. Decorative pattern overlays — fine topographic contour lines, large open swirls — sit behind hero content at very low contrast and are treated as part of the band fill rather than as images.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 | Flat fill on the neutral ladder | Every band, section, nav and footer — the default |
| 1 | 梯子上下一个 | 彩色带上的卡片 暗暗的潜水带 |
| 2 | 1px `{colors.hairline}` 边框 | 导航牌和禁用控件 |

系统携带 **一点影子都没有**。没有牌,没有牌 sticky 子导航,不是在桅首,也不是在模式上。深度完全由中性梯子上的位置产生:一个白色卡片在 a `{colors.canvas-warm}` 乐队读作升起,因为它比较轻,而且 `{colors.ink-deep}` 子导航读作一个不同的平面,因为它更暗。如果两个表面坐落在同一个直径上,则 a 1px `{colors.hairline}` 边框则进行分隔。

页面的染色体没有梯度,系统中唯一的直肠过渡是剪切首屏照片的羽毛下缘和结束一些首屏乐队的角对角,两者都属于图像,而不是表面.

### 装饰性深度
首屏乐队的图案覆盖度很低——一个产品页上高密度的地形轮廓线,另一个产品页上大的开放的轮廓线——从乐队填充量中划出一两点。它们读作纹理而不是图像,它们是一大片区域的原因。 `{colors.canvas-warm}` 并不感到空空。有些首屏乐队以角对角而不是水平边缘结束,让下面的乐队切入其中。


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | Every band, section, masthead, sub-navigation and footer |
| `{rounded.xs}` | 4px | Every button, and every anchor styled as a button |
| `{rounded.sm}` | 6px | 头部搜索字段和小列项 |
| `{rounded.md}` | 8px | 产品页面卡和媒体框架 |
| `{rounded.lg}` | 12px | 公司索引导航牌 |
| `{rounded.xl}` | 15px | 公司指数内容卡及其内部统计表面板 |
| `{rounded.full}` | 9999px | 电话 circular 视频播放控制 |

尺寸在小端处的细微度是异常的 4, 6 和 8 全部在使用中,并且每个被分配到不同的控制家族——按钮,字段,卡片。两个大步骤是模板专用的,而不是可互换的:公司索引使用 15px 整个产品页使用时 8px,所以卡片的半径可以告诉你您在哪个模板上。 15px 价值值得注意,因为它是一种故意的奇怪现象,因为 16px 这将是传统的选择,系统一贯使用 15.

### 图片形状
Images inside product cards take `{rounded.md}`; images filling half a corporate index card take `{rounded.xl}`. Full-band photography is square-cornered. Aspect ratios are not fixed — video thumbnails run roughly 16:9, hero photography is a wide strip, and card imagery fills whatever the card gives it. The system never crops to a circle except for the play control.


## 组件

> 下方每个组件都显示其默认状态。 `components:` 头条

### 头部导航( N)

**`masthead`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, 85px tall
- Full width and identical on every page. Carries a hamburger, the wordmark, a wide search field and three utility icons

**`logo-wordmark`**
- 文字颜色 `{colors.brand-mark}`类型 `{typography.heading-lg}`,四舍五入 `{rounded.none}`
- 界面中唯一的红色外观

**`text-input`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, 1px `{colors.field-border}` border, rounded `{rounded.sm}`, padding `12px 18px`
- 头部搜索区域。 首选项是 : 48px 左侧贴纸

**`product-subnav`**
- Background `{colors.ink-deep}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.none}`, 64px tall
- A sticky 产品页上头部以下的全血条,为产品保留部分链接

**`product-subnav-light`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, 64px tall
- 光极性中相同的条, 活动项用墨线而不是金条标注

**`subnav-active-bar`**
- Background `{colors.accent-gold-soft}`, rounded `{rounded.none}`, 67 × 5px
- Marks the selected item in the dark sub-navigation

### 按钮

系统每个按钮都是 `{rounded.xs}` 配合 `10px 16px` 垫子和 a `{typography.label}` 标签。只有变体之间的填充和边框变化。

**`button-primary`**
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.label}`, rounded `{rounded.xs}`, padding `10px 16px`
- 到处都是主要动作,经常标注为锚而不是按钮元素

**`button-primary-pressed`**
- Background `{colors.primary-pressed}`, otherwise identical

**`button-primary-disabled`**
- Background `{colors.canvas-soft}`, text `{colors.disabled-ink}`, 1px `{colors.hairline}` border, rounded `{rounded.xs}`, padding `10px 16px`

**`button-secondary`**
- Transparent 文本填充, 文本 `{colors.ink}`, 1px `{colors.ink}` 边框,四舍五入 `{rounded.xs}`, 编译 `10px 16px`
- 被描述的同伴,总是与初级的右配角

**`button-tertiary`**
- 文字颜色 `{colors.ink}`,四舍五入 `{rounded.xs}`, 编译 `10px 16px`
- 填充为 8% 洗过 `{colors.ink}` 以任何表面为表率,而以软块而非定边为表率。

**`button-primary-inverse`**
- Background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.xs}`, padding `10px 16px`
- 暗带上的主要动作——极性翻转而非颜色变化

**`button-secondary-inverse`**
- Transparent 文本填充, 文本 `{colors.on-primary}`, 1px `{colors.on-primary}` 边框,四舍五入 `{rounded.xs}`, 编译 `10px 16px`

### 带和段

六个乐队的变体都是满血的 圆角的 和加的 `48px 0`。它们只在填报时有所不同。

**`hero-band`**
- Background `{colors.canvas-warm}`, text `{colors.ink}`, type `{typography.display-serif-md}`, rounded `{rounded.none}`, padding `48px`
- 打开每页产品。带一个低相容图案覆盖,并经常在角对角上结束

**`hero-eyebrow-rule`**
- Background `{colors.accent-gold}`, rounded `{rounded.none}`, 40 × 4px
- 直接坐在首屏头条下面 系统唯一的装饰品

**`section-band-white`** · **`section-band-soft`** · **`section-band-tint`** · **`section-band-warm`**
- Backgrounds `{colors.canvas}`, `{colors.canvas-soft}`, `{colors.canvas-tint}` and `{colors.canvas-warm}` respectively
- All text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding `48px`
- 四个中性径流。 页面通过交替构建; 相邻径流之间的转移是故意小的

**`section-band-teal`**
- Background `{colors.band-teal}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding `48px`
- 短的色带,周围 120 改为: 160px 高, 用来中断长中性运行

**`section-band-forest`**
- Background `{colors.band-forest}`, text `{colors.on-primary}`, type `{typography.body}`, rounded `{rounded.none}`, padding `48px`
- 深色带,带白文本和多栏链接列表

### 纸牌和媒体( M)

**`content-card`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-loose}`, rounded `{rounded.xl}`, padding `{spacing.xxxl}`
- 公司指数工作马。一张宽卡片,上面有标题、副本、主动作和半宽图像

**`stat-panel`**
- Background `{colors.canvas-warm}`, text `{colors.ink}`, type `{typography.body-loose}`, rounded `{rounded.xl}`, padding `{spacing.xl}`
- 一张有锡的卡片 里面嵌着一张内容卡片 里面有一张短的子弹形的图表

**`product-card`** 和 **`product-card-warm`**
- Backgrounds `{colors.canvas}` and `{colors.canvas-warm}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding `{spacing.xxl}`
- 产品页等值,位于较小的半径. 牌坐白带时使用暖变体.

**`nav-tile`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.label-strong}`, 1px `{colors.hairline}` border, rounded `{rounded.lg}`, padding `{spacing.md}`
- 公司指数主页下方的八块产品条目牌排, 被分组在两个光标下

**`media-frame`**
- Background `{colors.canvas}`, rounded `{rounded.md}`
- 嵌入式视频或产品截图的帧

**`play-button-circular`**
- Background `{colors.ink}`, icon `{colors.on-primary}`, rounded `{rounded.full}`, 40px
- 唯一的一个 circular 系统中的元素

### 内容链接( L)

**`channel-column`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.heading-lg}`, 2px `{colors.divider}` rule, rounded `{rounded.none}`, padding `{spacing.xxl}`
- 联系页面上一个三重组合。每个列都有一个细长的大纲图标,一个 800- 字重级,短段和一段 `{components.link-inline}`,用全高垂直规则分隔

**`link-inline`**
- 文字颜色 `{colors.link}`类型 `{typography.body}`,四舍五入 `{rounded.none}`
- 设定时无下划线,大小和字重与周围副本相同

### Footer

**`footer`**
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.none}`, 105px tall
- 单水平行 fine-print 链接在一行社会图标上方。没有规则、没有填充变化、没有列结构

**`footer-link`**
- 文字颜色 `{colors.ink}`类型 `{typography.caption}`,四舍五入 `{rounded.none}`
- 墨水而不是墨水, 装入墨水里 `{colors.link}`,这就是保持脚的安静

### 组合示例

> These ten surfaces are kit-mirror demonstrations, not components found on the brand's own pages. Each is composed from the primitives above so downstream consumers re-skin the shapes this system actually uses — the square `{rounded.none}` band, the `{rounded.xs}` button, the `{rounded.md}` card, and a neutral ladder that separates surfaces by tone and a hairline rule instead of by shadow.

**`ex-pricing-tier`** ——默认等级卡
- Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding `{spacing.xxl}`
- 中导师 `{components.button-secondary}`

**`ex-pricing-tier-featured`** ——突出的层次.
- Background `{colors.primary}`, text `{colors.on-primary}`, rounded `{rounded.md}`, padding `{spacing.xxl}`
- 极性飞向动作木炭,同样的反转 `{components.section-band-forest}` 执行,并使用 `{components.button-primary-inverse}`

**`ex-product-selector`** 包括的简卡
- Background `{colors.canvas-soft}`, text `{colors.ink}`, rounded `{rounded.md}`, padding `{spacing.xxl}`
- 梯子上方有一条排行借款 `{components.nav-tile}` 界面框架

**`ex-cart-drawer`** ——订阅摘要.
- Background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.md}`, padding `{spacing.xxl}`, line items separated by `{colors.divider}`
- 同样的温柔规则 `{components.channel-column}` 列之间的使用

**`ex-app-shell-row`** 侧边栏导航列
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, active indicator `{colors.primary}`

**`ex-data-table-cell`** 桌头和身体界面框架
- 标题背景 `{colors.canvas-tint}` 输入 `{typography.caption}`,体细胞 `{typography.body}`单元格粘贴 `{spacing.sm} {spacing.md}`边框 `{colors.hairline}`

**`ex-auth-form-card`** ——签入卡
- Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding `{spacing.xxl}`
- 输入取 `{components.text-input}` 治疗

**`ex-modal-card`** ——模式对话框表面
- Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding `{spacing.xxl}`
- No shadow, since the system has none — the modal is bounded by its rule alone

**`ex-empty-state-card`** ——空状态框架
- Background `{colors.canvas-soft}`, text `{colors.ink}`, rounded `{rounded.md}`, padding `{spacing.section}`, caption in `{typography.body}`

**`ex-toast`** - 土司通知表面
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.xl}`


## 设计建议与禁忌

### 建议做法
- Build page structure from the neutral ladder. Moving a section one rung is the system's way of saying "new region".
- 保留 `{colors.brand-mark}` 缺乏它能赋予它力量的就是它
- 运行每个动作通过 `{colors.primary}` 时 间 `{rounded.xs}` 配合 `10px 16px` 贴吧,不管背景如何
- Flip polarity rather than changing colour when an action lands on a dark band — use `{components.button-primary-inverse}`.
- 坚持住 `{spacing.section}` 时 间 48px 每一个全宽的带子上; 统一的节奏是小的直径步子可以辨别出来的原因。
- 重心随身携带 400- 给...800 跳跃在身体和方向之间是系统的主要结构信号.
- 保留 letter-spacing 在每个角色上,每个大小都保持零
- Deploy chromatic colour only at whole-band scale, as `{components.section-band-teal}` or `{components.section-band-forest}`.

### 应避免的做法
- Don't add shadows. The system has none, and elevation is expressed by position on the neutral ladder.
- Don't use pure black. `{colors.ink}` is warm and deliberately a few points off it.
- Don't round a band, a section, a masthead or a footer — `{rounded.none}` on full-width chrome is the rule.
- 不得混双牌罗底. `{rounded.xl}` 属于公司指数, `{rounded.md}` 中,将模板打开。
- Don't set a headline in Oracle Sans on a product page or in Georgia on the corporate index — the two registers do not cross templates.
- Don't underline `{components.link-inline}`; `{colors.link}` alone carries the affordance.
- 梯子之间不要添加第四个或第五个锡。它们已经足够接近, 以至于另一步是看不见的 。
- Don't give `{components.hero-eyebrow-rule}` a second colour or a second instance per page; one 40 × 4px gold bar is the whole ornament budget.

## 设计词元原值

分析 Oracle设计语言——一种建立在温和中性梯子而不是配色上的企业系统。六种编号的灰色几乎每个表面都携带,一种黑色的木炭携带每个动作,而著名的红色则被单为单词标记而保留。两个显示的登记册共存,是公司指数上非常轻的圣物和一种 Georgia serif 唯一一个色调的瞬间 是一个头条下的薄金规则 以及偶尔出现的全宽带 带状或森林绿色

```yaml
---
version: alpha
name: Oracle Analysis
description: An analysis of Oracle's design language — an enterprise system built on a warm neutral ladder rather than a colour palette. Six numbered greys carry almost every surface, a single dark charcoal carries every action, and the famous red is held back for the wordmark alone. Two display registers coexist, being a very light sans on the corporate index and a Georgia serif across the product pages, and the only chromatic moments are a thin gold rule under a headline and the occasional full-width band of teal or forest green.

colors:
  primary: "#312d2a"
  primary-pressed: "#47423e"
  on-primary: "#ffffff"
  brand-mark: "#c74634"
  ink: "#161513"
  ink-deep: "#211e1c"
  canvas: "#ffffff"
  canvas-soft: "#fbf9f8"
  canvas-tint: "#f5f4f2"
  canvas-warm: "#f1efed"
  hairline: "#e4e1dd"
  divider: "#e9e7e4"
  field-border: "#d4cfca"
  link: "#006b8f"
  accent-gold: "#f0cc71"
  accent-gold-soft: "#f7e0a1"
  band-teal: "#d6e5e5"
  band-forest: "#33553c"
  focus: "#227e9e"
  error: "#d63b25"
  disabled-ink: "#aea8a2"

typography:
  display-serif-xl:
    fontFamily: Georgia
    fontSize: 56px
    fontWeight: 400
    lineHeight: 67.2px
    letterSpacing: 0
  display-serif-lg:
    fontFamily: Georgia
    fontSize: 40px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: 0
  display-serif-md:
    fontFamily: Georgia
    fontSize: 36px
    fontWeight: 400
    lineHeight: 43.2px
    letterSpacing: 0
  display-sans-lg:
    fontFamily: Oracle Sans
    fontSize: 40px
    fontWeight: 300
    lineHeight: 52px
    letterSpacing: 0
  display-sans-md:
    fontFamily: Oracle Sans
    fontSize: 32px
    fontWeight: 300
    lineHeight: 44px
    letterSpacing: 0
  heading-xl:
    fontFamily: Oracle Sans
    fontSize: 28px
    fontWeight: 800
    lineHeight: 33.6px
    letterSpacing: 0
  heading-lg:
    fontFamily: Oracle Sans
    fontSize: 24px
    fontWeight: 800
    lineHeight: 28.8px
    letterSpacing: 0
  heading-md:
    fontFamily: Oracle Sans
    fontSize: 20px
    fontWeight: 800
    lineHeight: 24px
    letterSpacing: 0
  heading-sm:
    fontFamily: Oracle Sans
    fontSize: 18px
    fontWeight: 800
    lineHeight: 21.6px
    letterSpacing: 0
  heading-card:
    fontFamily: Oracle Sans
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: 0
  lead:
    fontFamily: Oracle Sans
    fontSize: 24px
    fontWeight: 400
    lineHeight: 33.6px
    letterSpacing: 0
  body:
    fontFamily: Oracle Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22.4px
    letterSpacing: 0
  body-loose:
    fontFamily: Oracle Sans
    fontSize: 16px
    fontWeight: 350
    lineHeight: 24px
    letterSpacing: 0
  body-strong:
    fontFamily: Oracle Sans
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22.4px
    letterSpacing: 0
  label:
    fontFamily: Oracle Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 16.8px
    letterSpacing: 0
  label-strong:
    fontFamily: Oracle Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0
  caption:
    fontFamily: Oracle Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 15px
  full: 9999px

spacing:
  xs: 10px
  sm: 12px
  md: 16px
  lg: 18px
  xl: 20px
  xxl: 24px
  xxxl: 32px
  section: 48px
  gutter: 72px

components:
  masthead:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    height: 85px
  logo-wordmark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.brand-mark}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.none}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    borderColor: "{colors.field-border}"
    rounded: "{rounded.sm}"
    padding: 12px 18px
  product-subnav:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    height: 64px
  product-subnav-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    height: 64px
  subnav-active-bar:
    backgroundColor: "{colors.accent-gold-soft}"
    rounded: "{rounded.none}"
    height: 5px
    width: 67px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-primary-disabled:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.disabled-ink}"
    typography: "{typography.label}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-secondary:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    borderColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-tertiary:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-primary-inverse:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  button-secondary-inverse:
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    borderColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
    padding: 10px 16px
  hero-band:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.display-serif-md}"
    rounded: "{rounded.none}"
    padding: 48px
  hero-eyebrow-rule:
    backgroundColor: "{colors.accent-gold}"
    rounded: "{rounded.none}"
    width: 40px
    height: 4px
  section-band-white:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  section-band-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  section-band-tint:
    backgroundColor: "{colors.canvas-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  section-band-warm:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  section-band-teal:
    backgroundColor: "{colors.band-teal}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  section-band-forest:
    backgroundColor: "{colors.band-forest}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 48px
  content-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-loose}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxxl}"
  stat-panel:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body-loose}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  product-card-warm:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  nav-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label-strong}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  media-frame:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
  play-button-circular:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    size: 40px
  channel-column:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-lg}"
    borderColor: "{colors.divider}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxl}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    height: 105px
  footer-link:
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"

  # ─── Examples (illustrative) — kit-mirror demonstration surfaces ───
  ex-pricing-tier:
    description: "Default pricing tier card. Product-card chrome with a hairline border, since the system separates same-rung surfaces with a rule rather than a shadow."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to the action charcoal with white text, the same inversion the dark bands perform."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-product-selector:
    description: "What's-included summary card, one rung up the neutral ladder. Rows borrow the navigation-tile chrome."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-cart-drawer:
    description: "Subscription summary. Line items are separated by the same warm rule the contact page uses between columns."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
    item-divider: "{colors.divider}"
  ex-app-shell-row:
    description: "Sidebar nav row at the product-card radius. Active state is marked by the action charcoal, the system's only emphasis fill."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Data-table header and body chrome. The header sits one rung up the ladder and rows are divided by a hairline."
    headerBackground: "{colors.canvas-tint}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in card. Product-card chrome with the masthead search field's input treatment inside."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-modal-card:
    description: "Modal dialog surface — product-card chrome with a hairline border and no shadow, because the system has none."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-empty-state-card:
    description: "Empty-state frame one rung up the ladder, padded to the section rhythm."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.section}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification — the product-card radius on a white surface, bounded by a hairline instead of an elevation."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.xl}"
    typography: "{typography.body}"

---
```
