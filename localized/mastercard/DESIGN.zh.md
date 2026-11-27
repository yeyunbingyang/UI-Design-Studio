# Mastercard · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。

# 设计系统灵感来自 Mastercard


## 1。视觉主题和大气

Mastercard's experience reads like a warm, editorial magazine built from soft stone and signal orange. The canvas is a muted putty-cream (`#F3F0EE`) — not white, not gray, but a color that feels like the paper of a premium annual report. On top of that canvas, everything that matters is shaped like a stadium, a pill, or a perfect circle. The dominant visual gesture is the **oversized radius**: heroes carry 40-point corners, cards go fully pill-shaped, service images are cropped into circular orbits, and buttons either complete the pill or fit snugly at 20 points. There are almost no sharp corners anywhere on the page.

The second gesture is **orbit and trajectory**. Circular image masks don't sit still — they're connected by thin, hand-drawn-feeling orange arcs that span entire viewport widths, implying a constellation of services rather than a list. Each circle has a small attached "satellite" — a white micro-CTA holding an arrow icon — docked onto its perimeter like a moon. This is the most distinctive thing about Mastercard's current design language: the circles feel like they're in motion even though the page is still.

Typography is rendered entirely in **MarkForMC**, Mastercard's proprietary geometric sans. Headlines are set at a medium weight (500) with tight negative letter-spacing (-2%), giving them confidence without shouting. Body copy runs at the same family in a slightly lighter weight (450) — a weight you rarely see on the web, chosen because it reads softer than regular 400 without feeling thin. The whole system — warm cream surfaces, pill shapes, circular portraits, traced-orange orbits, black CTAs — feels simultaneously institutional (a 60-year-old payments network) and editorial (a modern brand magazine), which is exactly the tension Mastercard wants to hold.

**关键特征 :**
- 暖奶油页面底色(`#F3F0EE`)取代传统白色——每个表面都是有色的,从不无菌.
- Extreme border-radius as design language: 40px, 99px, 1000px dominate; anything square is a cookie-banner third-party
- Circular 附有白色卫星-CTA和溯源-橙色轨道路径的图像肖像
- 鬼"水印"头条(标注在标题的尖叫文字) 层叠在圆形肖像后面
- 黑色初级CTA 20px 半径在体内——饼干-宽橙保持为同意流.
- 浮药形导航,停靠在风景港顶部下方,肩部圆形
- 眉毛标签,带有细小的强调色点+大写粗体跟踪——用作区划信号
- 深暖黑脚( 深色)`#141413`),四栏链接布局和大对话头条


## 2. Color Palette & Roles

### 主要
- **Mastercard 红色** (`#EB001B`: 左圆形 Mastercard 标记——只用于品牌标志,从不作为UI颜色.
- **Mastercard 黄色** (`#F79E1B`: 右圆形 Mastercard 标记——只用于品牌标志,从不作为UI颜色.
- **墨黑笔** (`#141413`: 用于初级CTA的暖近黑色,奶油上头条文字,以及页脚表面. Slitly warm(the smightly warm) : `13` 蓝色价值拉向奶油),所以它从来没有感觉喷气黑在暖页面底色上.

### 中学和中学
- **信号橙** (`#CF4500`: 烧/锈 CTA橙色用于同意动作和眉毛点,比品牌黄,亮于墨,是页面的单一攻击性颜色,必须节制使用.
- **光信号橙** (`#F37338`:一种较轻的胡萝卜橙色,用于木马活性指标和装饰性轨道弧,总是起到注意提示的作用,从不作为身体颜色.
- **Clay 棕色** (`#9A3A0A`: 用于二级链接式按钮的深锈(如饼干细节). 墨水和信号橙之间的坐位.

### 表面背景( B)
- **油菜酱** (`#F3F0EE`:页页面底色,温暖,平调,默认的机身背景。所有编辑部分都坐在这个上。
- **升起的奶油** (`#FCFBFA`:比页面底色轻一步——用于筑巢的"升华"部分,希望感觉像纸铺在纸上.
- **白色** (`#FFFFFF`:预留用于浮航丸,模式卡,二级按钮填充,以及附在图像肖像上的小型卫星-CTA圈.
- **软骨** (`#F4F4F4`: 少数部分次区域内使用的冷却-灰色替代表面。

### 中立文本( T)
- **墨黑笔** (`#141413`:主头和体文字色.
- **木炭矿** (`#262627`:一种稍柔的黑色,用于一些文本的替代文本.
- **板块灰** (`#696969`: 哑音的二级文本——眉毛标签替代,已禁用状态,"Privacy Choices"下行文本.
- **Granite** (`#555555`) and **Graphite** (`#565656`): Deeper gray for inline body accents and link alternates.
- **尘陶普** (`#D1CDC7`: 用于禁用或"低声"文本(如占位符式空状态标签)的非常哑的奶油-gray. 奶油上低对比度;只用于低度内容.

### 语义和调值
- **链接蓝色** (`#3860BE`:一种深浅的灰尘蓝色,用于内线链接和信息点名. 饱和度足以读作链接而不作霓虹.
- **Priceless Red + Yellow**: The full-color Mastercard logo mark is the only place the brand's red and yellow appear together; they lock the identity to the page without acting as a UI palette.

### 渐变系统
Mastercard 使用核心UI中不使用程序梯度。“渐变”的视觉印象来自两个地方:
- **Circular 图像肖像** 暖橙色照片对象(一张牌、一朵葵花、一朵饮料) 淡化到其边缘的奶油布上
- **深纸牌阴影** 内容提升( 更新)`rgba(0,0,0,0.08) 0px 24px 48px`)在丸形媒体下产生软光环


## 3. 字法规则

### 字体族
- **主要**: `MarkForMC` — Mastercard专有几何语源。每页上的标题、段落、按钮、导航链接和页脚链接。
- **次要**: `MarkOffcForMC` ——少数场合(法律文本,部分形式)使用的"官"切.
- **倒数堆栈**: `SofiaSans, Arial, sans-serif` 索菲亚·桑斯是一个合理的开源站; Arial 是一个网络安全倒计时的最后一个。

### 字号层级

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| H1 (首屏) 谢天谢地,我... | 64px | 500 | 64px | -1.28px (-2%) | 设定为 `1:1` line-height 用于多线首屏的非常紧的垂直节奏 |
| H2 (第1款) | 36px | 500 | 44px | -0.72px (-2%) | 用于鬼水标记头条和章节标题 |
| H3 (卡片标题) | 24px | 500 | 28.8px (1.2) | -0.48px (-2%) | 服务/解决方案卡内的标题 |
| H4 (副标题) | 14px | 700 | 18.2px (1.3) | normal | 很少用于营销表面 |
| Eyebrow (H5) | 14px | 700 | 14px | 0.56px (+4%) | Uppercase, paired with a tiny accent dot (e.g., "• SERVICES") |
| 正文段落 | 16px | 450 | 22.4px (1.4) | normal | 半步脚 450 字重是MarkForMC的签名——比 500, 坚固于 400 |
| Nav link / Button label | 16px | 500 | 16px | -0.48px (-3%) | Tight, compact, no text-transform |
| Footer link | 14px | 450 | ~20px | normal | Lighter weight on dark footer for airier density |
| Footer column header | 12–14px | 700 | 14px | 0.56px (+4%) | Uppercase, muted gray, short tracking |

### 原则
- **Weight 450 is load-bearing**. Most brands use 400/500/700; Mastercard uses 450 for body copy, which creates an unusually soft reading tone. Replacing it with 400 flattens the identity.
- **头条新闻的负面追踪** (-2%)给出文本的编辑密度——词句将在一起锁起来而不是呼吸.
- **仅在眉毛尺度上进行大写跟踪** (14px / 700 / +4% ),不要在其它地方使用大写;没有大喊小标题。
- **单峰系统**。 抵制为对比性添加第二个字型的冲动。对比性来自比例、字重和 letter-spacing,而不是从 serif 或显示强调色。
- **Line-height ratio drops with size**. H1 is 1:1, H3 is 1.2, body is 1.4. Tight display, comfortable reading.

### 替代字体
MarkForMC is proprietary and licensed. When rebuilding a matching aesthetic without access to the original:
- **索菲亚·桑斯** (Google Fonts)是最接近的开源匹配——它已经进入了 Mastercard已经宣布为倒数堆。
- **Inter** 重量 450/500/700 做为通用的立体;期望稍高的x高和松散的字母形状.
- **诺伊 Haas 格罗特斯克** 或 **Geist** 能够大致显示商业项目中的几何感觉。
- 不论使用哪一种替代品,都保留 **-2% letter-spacing 头条新闻** 编辑 **450 字重** (使用时 `font-weight: 450` 带有可变字体,或替换 `font-weight: 400` 紧紧地拉紧 letter-spacing 由 ~-0.5% —— 补偿。


## 4. 组件型号

### 按钮

**小学-墨水胶囊形**
- Background: Ink Black (`#141413`)
- 文本: 风景名胜区`#F3F0EE`)——不纯白.
- 边框 : 1.5px 固态墨黑( 和 bg 相同, 创建脆边)
- 半径 : 20px
- 铺垫: 6px 24px
- 字体: MarkForMC 软件 16px / 字重 500 / letter-spacing -0.32px
- Default: as above; solid warm-black pill on cream canvas
- Active / pressed: subtle inward-shrink or 2px offset (not a hover variant)
- 用于:页面机体中的所有营销CTA("更多学习","探索","发现")

**中学-纲要胶囊形**
- 白种( 白种)`#FFFFFF`)
- 文字:墨黑( 笔名)`#141413`)
- 边框 : 1.5px 坚固的墨黑
- 半径 : 20px
- 铺垫: 6px 24px
- 字体: MarkForMC 软件 16px / 字重 450 / line-height 20.8px
- 默认: 白话片, 带有脆墨片轮廓
- Active / pressed: subtle compression
- 用于: 二次动作与主功能或独立功能CTA对齐

**同意/信号——橙色胶囊形**
- Background: Signal Orange (`#CF4500`)
- 文字: 白话( 白话)`#FFFFFF`)
- 边框 : 0
- 半径 : 24px
- 铺垫: 1px 30px (非常紧的垂直,宽的水平)
- 字体: MarkForMC 软件 13px / 字重 400 / letter-spacing 0.13px
- Default: as above; bright rust pill with white text
- Use for: cookie consent, privacy preference, and other legally-distinct confirmations. **Do not** use this orange for marketing CTAs — it reads as a compliance color.

**卫星 - Circular 微型CTA**
- 白种( 白种)`#FFFFFF`)
- 图标:墨黑箭头( 3)`→`时 . ~20px
- 边框:无
- 半径 : 50% (完美的圆圈)
- 大小 : ~50–60px 直径
- 影子:没有,或者非常微妙(肖像的影子带有高地)
- 默认: 将它停靠在 a 的右下边缘 circular 肖像画,画像圆形外的侧面
- 用于: 服务/溶卡的主要切入点; 总是与一个对齐 circular 肖像画

**图标- 仅圆形按钮( 木马, 播放/ 暂停)**
- Background: transparent or white
- 图标 : 10–20px 居中
- Border: 1px solid Ink Black (when on cream) or none (when over media)
- 半径 : 50%
- 大小 : 40px 木马控制器的最小直径; 80px 首屏视频播放
- 用于: 木马帕吉尼化/游戏暂停、首屏视频播放、搜索切换

### 卡片与容器

**首屏媒体框架( Stadium)**
- Background: Dark video or full-bleed imagery (typically black `#000000` or `#2B2B2B` behind video)
- Radius: 40px all corners (creates a stadium shape on wide viewports)
- 宽度:~ 完全视图切换 ~48px 水沟两边各有一条
- 高度 : ~60–70% 视图
- Shadow: none (sits directly on canvas)
- 角落:极端 40px 介质元素的半径是最标志性的 Mastercard 手势——不要少

**服务/ 溶解肖像卡**
- 形状: 完美的圆( radios) 50%)或椭圆(弧度) 999px / 1000px)
- 直径 : 260–340px 桌面; 软件 ~220px 移动
- 图像裁剪: 方形来源, 裁剪成圆形
- 附加元素: 白卫星 circular CTA(见上文)对接的右下角, ~40% 画像外
- Eyebrow below: accent dot + uppercase label (e.g., "• SERVICES", "• SOLUTIONS")
- 标题如下:H3 (24px / 字重 500 / -2% 跟踪, 1–2 最大行数
- 装饰性轨道:薄 ~1px 光信号橙线从这张卡向外延伸到下一卡, 意味着连接

**胶囊形卡**
- 半径 : 1000px (满药)或 40px 角(圆形体育场)
- 宽度 : ~40–60% 视图
- 高度 : ~380–420px (纵向溢出方向)
- 内容: 带有小块覆盖芯片标签的全血摄影
- 内芯片:白药(~ 999px 半径、 墨黑文本、 粘贴 8px 20px,用于“故事”等分类标签
- Large inline CTA inside: Ink Pill button, oversized (padding 16px 40px, radius 40px)

**鬼水印文字块**
- 字体: MarkForMC 软件 72–128px / 字重 500 紧 -2% 跟踪
- 颜色: 页面底色凝胶稍变暗( C)`#E8E2DA` 或类似的-奶油加奶油)
- 位置: 画像圈后面层, 取景器边缘流血
- 目的:设定部分主题而不与前景副本竞争

### 输入框与表单
最小形式在营销页面上表面。 导航头中的搜索输入是 :
- Initial 状态: a 48px circular 按钮,带有放大镜图标
- Expanded state: horizontal input field, border `1px solid` Ink Black at ~50% opacity, radius 999px, padding 12px 24px, white background

**国家/语言选择器(脚步)**
- Background: Ink Black (same as footer)
- 文字: 白话
- 边框 : 1px 固态 `rgba(255,255,255,0.4)`
- 半径 : 999px (满药)
- 图标:右侧下切夫龙

### 导航

**浮式导航 Pill( 桌面)**
- 集装箱:白色至透明-白色胶囊形,漂浮在景点顶部以下,并带有一种 ~24px 顶边距
- 半径 : 999px / 1000px (满药)
- 铺垫: ~16px 40px 内部
- 阴影:非常柔软( Name`rgba(0, 0, 0, 0.04) 0px 4px 24px 0px`)——只要能把它从奶油页面底色上抬出来.
- 内容 : Mastercard 左上方的标志,主链接组中心(“为你”、“为企业”、“为世界”、“为创新者”、“新闻与趋势”),右侧的搜索图标
- Link spacing: ~48–56px gap between primary links
- 链接样式:墨黑,字重 500, 16px,没有下划线,没有丸子周围,直到活动

**移动导航**
- The same pill shape but collapsed to: logo + hamburger menu button + search icon only
- 菜单打开为全屏覆盖,主链接垂直叠叠

### 图像处理

- **使用的光谱比率**: 1:1 (所有服务肖像——被剪成圆形), ~3:4 或 ~4:5 (木卫一胶囊形), 16:9 或更大(首屏录像机)
- **满血对加**:首屏在全景港有沟槽;服务肖像总是以柱子为中心,周围宽敞的白空间;页脚图像很少见.
- **化妆**: 侵略性 circular 遮掩是定义处理法——方源图像被裁剪成完美的匹配直径圆圈. 永不使用矩形服务图像.
- **懒惰装入**编号: 标准 `loading="lazy"` 与奶油色的占位符的柔软模糊过渡,在装载时保留暖色板

### 装饰性轨道线

A signature motif: thin (~1–1.5px) single-weight curved lines in Light Signal Orange (`#F37338`) tracing arcs between circular portraits. These lines:
- 服务卡之间没有字形箭头的连接充分
- 宽度从 ~200px 最高至全视图端口弧
- 感觉手拉( 微不规则) 而不是完美的 CSS 曲线
- 仅出现在带 circular 肖像内容——从不写在胶囊形上,从不写在页脚上

### Footer

- Background: Ink Black (`#141413`)
- 文字: 白话
- 铺垫: 48px 水平 100px 下层 148px (非常高的底层空间)
- Structure: large conversational H2 ("We're always here when you need us") left-aligned, then a 4-column link grid below
- 列头:大写、哑音、字重 700, letter-spacing +4%
- 链接行:白色, 字重 450, 14px; 条目前缀为小图标(支持泡,卡,地图针,问号),用于"NEEED帮助?"栏.
- External link marker: a small upper-right arrow (`↗`) after link text
- 下行( 下行为 a) 1px 白-不开放分页:版权+隐私小印+国语丸降+四个社会图标(LinkedIn,Facebook,X,YouTube) 互联网档案馆的存档,存档日期2013-03-02.


## 5. 版式原则

### 间距系统
- **基地单位**: 8px (通过Dembrandt提取和计算样式确认)
- **缩放**: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 权力 8)
- **区域垂直粘贴**: ~96–128px 桌面上的主要部分之间; ~48–64px 移动
- **Card internal padding**: 32–40px on desktop, ~24px on mobile
- **Nav top margin**: ~24px from viewport top (the pill floats, doesn't touch)

### 网格与容器
- **最大内容宽度**: ~1200–1280px 以 ~48–100px 水平沟道
- **列图案**: 12- 隐含的栏目,但实际的布局 2- 不对称(左大标题,右支持文本), 1- 上全血(首屏,视频),或错开的单相画(服务卡坐落在不同的网格位置,产生"星座"的感觉)
- **Footer grid**: 4 equal columns on desktop, collapses to single column accordion on mobile

### 留白规则
Mastercard 将白空间作为结构,而不是缺空。典型的服务部分有:
- 占据顶部的鬼头条 ~40% 部分(主要是空奶油)
- 单人 circular 肖像画定位 ~60% 下, 左右不对称
- ~300–500px 图片和下一节之间的空白页面底色
This deliberate emptiness tells the eye "slow down, read one thing at a time" — the opposite of dense dashboard UIs.

### 圆角层级

| 半径 | 使用 |
|--------|-----|
| 3–6px | 微小装饰元素, 饼干旗的微芯片 |
| 20px | 一级和二级体 CDA(签名按钮半径) |
| 24px | 同意/橙丸按钮、模式内芯片 |
| 40px | 首屏媒体框架,大块集装箱角,H2 避孕药标签 |
| 50% | Circular 肖像、仅限图标按钮、卫星 CTA |
| 99px / 999px / 1000px | Full pill shapes — navigation, carousel cards, footer country selector, primary inline chips |

比例表很不寻常:大多数系统都使用 4/8/12/16. Mastercard 跳过这些并承诺 **或小( 或小( 4)≤6),中大(20–40),或全溢(99+)**中间位置 8–12 也因此UI觉得“精细和实用性”,


## 6。深度和高度

| 职等 | 治疗 | 使用 |
|-------|-----------|-----|
| 0 | No shadow | The default — 95% of surfaces sit directly on cream canvas |
| 1 | `rgba(0, 0, 0, 0.04) 0px 4px 24px 0px` | 浮航丸——几乎没有升降机 |
| 2 | `rgba(0, 0, 0, 0.08) 0px 24px 48px 0px` | 首屏媒体架,高卡片——软大光环而非硬落. |
| 3 | `rgba(0, 0, 0, 0.25) 0px 70px 110px 0px` | 稀有; 特征瓦片上戏剧性的高地 |

### 影子哲学
Mastercard 使用阴影作为 **大气衬垫**,而不是方向光。 2 阴影有一个 48px 仅传播 8% 透明度——它几乎作为暗像素存在,但创造了一种"卡在页面底色上方的呼吸"的感觉,系统任何地方几乎没有硬的,紧凑的阴影,边线比阴影更倾向于功能划分(形式输入,页脚分隔).

### 装饰性深度
- **轨道弧** (光信号橙, ~1px: 横跨各节的微量连接路径
- **鬼水印头条**: 奶油贴纸文本使各部分几乎具有压纸的质量
- **圆形图像淡出**: 热口号摄影在边缘 circular 肖像片溶解到页面底色中,暗示着大气的软深度


## 7。 。 。 。 。 。

### 建议做法
- Use Canvas Cream (`#F3F0EE`) as the default body background — never pure white
- 遮罩服务/地形图象为完美的圆圈,而非矩形或圆形矩形
- 将一颗白色卫星 CTA 附加在每颗卫星的右下角 circular 肖像画
- 以 MarkForMC 字重设置头条 500 配合 -2% letter-spacing
- 使用重 450 (无) 400) 用于正文段落
- 将初级CTA作为墨黑胶囊形(20px 半径),带有奶油文字
- 仅在同意、法律或遵守行动时使用信号橙
- 将导航浮在风景点顶部下方的圆形白色胶囊形上,而不是冲在y=0
- Build page rhythm from three surface tones: canvas cream → lifted cream → ink footer
- Use thin Light Signal Orange arcs between service cards to imply connection

### 应避免的做法
- Don't use pure white as a page background — it breaks the warm editorial tone
- Don't round image frames at 8–16px — Mastercard either uses full-pill, 40px, or full-circle. In-between radii look generic
- 使用信号橙来销售CTA ——它读作饼干同意的橙色,淡化了合法的颜色信号
- Don't mix typefaces — no serif accent, no script, no secondary display font
- Don't crowd the nav with more than six top-level links — the pill is meant to feel airy
- Don't drop hard shadows — all elevation should use 48px+ spread and ≤10% opacity
- Don't use uppercase for anything larger than the 14px eyebrow label
- 眉毛标签前不要忽略强调色点——这是身份
- Don't place circular portraits on a grid — their magic comes from asymmetric placement


## 8. Responsive Behavior

### 断点

| 名称 | 宽度 | 密钥更改 |
|------|-------|-------------|
| Mobile | ≤ 767px | Nav pill shows logo + menu + search only; primary links hide behind hamburger; service portraits stack single-column centered; hero headline drops from 64px to ~40px; footer columns collapse into a vertical accordion |
| Tablet | 768–1023px | Nav pill shows 2–3 primary links truncated; service portraits arrange 2-up; hero headline ~48px |
| Desktop | ≥ 1024px | Full nav with 5 primary links centered; service portraits asymmetrically placed with decorative orbital lines; hero headline 64px |
| 宽 | ≥ 1440px | 内容 max-width 盖子在 ~1280px;沟槽对称生长;轨道线进一步延伸 |

### 触控区域
全部交互要素均可以轻松超过 44×44px. CTA号卫星(圆形+箭头)是 ~50–60px。导航胶囊形按钮是 ~48px 高,移动汉堡包和搜索是 48×48px。下面没有链接或按钮 40px 任何断点

### 窄屏布局调整
- **导航**:全丸 → 配汉堡的紧凑胶囊形 胶囊形形状保存在断点上——总是圆形,总是漂浮.
- **Service grid**: asymmetric constellation → 2-up → 1-up stack. Orbital arcs are removed on mobile (they only work with asymmetric placement).
- **间距**: 区域垂直粘贴压缩 128px 改为: 48px 手机上,我刚从电话里找到的
- **内容**:两栏首屏(左头线/右支持文本)变为堆叠(上头线,下方支持文本).
- **Footer**: 4 columns → 1 column accordion with chevron toggles per section.

### 图片适配
Circular portraits scale proportionally (maintaining the perfect circle at every size). Hero video frames maintain their 40px radius at every breakpoint, but the frame itself shrinks with the viewport. Lazy loading is standard with a cream-tinted blur-up placeholder, preserving the palette during load.


## 9. Agent Prompt Guide

### 快速颜色引用
- 初级CTA:"墨黑(英语:`#141413`)——用于初级胶囊形扣和脚的暖气近黑".
- Background: "Canvas Cream (`#F3F0EE`) — warm putty body canvas, never pure white"
- 升起的表面:"脂油(英语:Lifted Cream (film))"("脂油").`#FCFBFA`)——比筑巢区段的页面底色轻一步".
- 标题文本: "墨黑( 墨黑)`#141413`)"
- Body text: "Ink Black (`#141413`) at weight 450"
- 静音文本:"Slate Gray(`#696969`)"
- 信号/同意: " Signal Orange( / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /`#CF4500`——饼干同意和诉讼准备金".
- Accent arc: "Light Signal Orange (`#F37338`) — orbital decorative lines only"
- 边框/ 大纲 : “ 墨黑 at 1.5px 胶囊形扣子; 1px 低透明度的别处"
- 页脚:"墨黑(`#141413`)与白文本".

### 示例组件提示
- "Create a circular portrait card 300px in diameter, with a square photograph cropped to a perfect circle. Attach a 56px white satellite button with a dark arrow icon at the bottom-right, so it protrudes ~40% outside the portrait. Below the portrait, add an eyebrow label with a Light Signal Orange dot and uppercase 'SERVICES' text in MarkForMC weight 700 at 14px. Below the eyebrow, set a 24px / weight 500 title in Ink Black."
- "设计主CTA按钮:墨黑(`#141413`()背景, Canvas Cream (英语).`#F3F0EE`文本, 20px border-radius, 6px 垂直和 24px 水平粘贴, MarkForMC 字体在 16px 字重 500 配合 -2% letter-spacing."
- "制造了漂浮的导航胶囊形:白色背景与 `rgba(0, 0, 0, 0.04) 0px 4px 24px 0px` 阴影 999px border-radius, ~16px 垂直和 40px 水平内粘贴。 定位它 24px 位于风景港顶部,以中央为中心, Mastercard 左侧的标志, 以 48px 差额,a circular 48px 右侧的搜索按钮".
- "创造首屏媒体框架: 40px border-radius 在所有角落,全视角宽度减 48px 沟槽, ~60% 观光港高度,视频内容的黑暗背景,直接放在奶油布上,没有阴影".
- "Design a footer: Ink Black (`#141413`) background, white text, 4-column link grid with uppercase muted column headers at 14px weight 700 +4% tracking. Include a large conversational H2 above the grid, a 1px white-at-30%-opacity horizontal divider below, and a bottom row with copyright, legal small-print links, a pill-shaped country selector, and four social icons."

### 迭代指南
When refining existing screens generated with this design system:
1. 一次关注一个组件——不要同时重新设计多个表面
2. 引用此文档中的特定颜色名称和十六进制代码
3. Use natural language ("warm putty cream", "stadium pill", "circular portrait with satellite CTA") alongside technical values
4. 说明理想的“feel”(编辑、软、体制)与具体测量办法并列
5. When in doubt, reach for one of three radii: 20px (buttons), 40px (hero/stadium), or 999px (pill/nav)
6. Canvas 奶油的默认背景( Name`#F3F0EE`),而不是白色——这一单一的改变将整个情绪转向了 Mastercard

### 已知缺口
- The live page uses MarkForMC, a proprietary licensed typeface. Sofia Sans is the closest open-source substitute and is listed in Mastercard's own fallback stack.
- 平板断点细节( Q)768–1023px中间布局可能因区而异。
- 后面鬼水印头条用的"低声"奶油调 circular 肖像画的读取 `#E8E2DA` 和 `#D1CDC7` ; 准确值各节不同。
- 第三方同意橙色(`#CF4500`)是(这是) Mastercard与任何营销CTA颜色不相混淆
- 电话 Mastercard 标志( 红色) `#EB001B` + 黄色 `#F79E1B`)是品牌资产,而不是UI调色板条目.
