# Tesla · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。

# 设计系统灵感来自 Tesla


## 1。视觉主题和大气

Tesla's website is an exercise in radical subtraction — a digital showroom where the product is everything and the interface is almost nothing. The page opens with a full-viewport hero that fills the entire screen with cinematic car photography: three vehicles arranged on polished concrete against a hazy cityscape sky, with a single model name floating above in translucent white type. There are no decorative borders, no gradients, no patterns, no shadows. The UI exists only to provide just enough navigational structure to get out of the way. Every pixel that isn't product imagery is white space, and that restraint is the design system's most powerful statement.

颜色哲学几乎是 灰白:一个蓝色(`#3E6AE1`),对于主要的行动呼吁,对于文本等级来说,三阴暗灰色,对于其他一切来说,则白. 整个情感字重由摄影——漫展的景观镜头,工作室的光线车辆简介,以及大气环境组成,这些元素跨越每个景点-高通段,向边缘延伸至边缘. 紫外线铬溶解成图像 导航栏在首屏上方浮出水面,没有明显的背景,边框,或者阴影——即: TESLA 字标记和五个导航标签在空间中就存在,信任它们下面的内容来提供足够的对比.

Typography recently transitioned from Gotham to Universal Sans — a custom family split into "Display" for headlines and "Text" for body/UI elements — unifying the website, mobile app, and in-car software into a single typographic voice. The Display variant renders hero titles at 40px weight 500, while the Text variant handles everything from navigation (14px/500) to body copy (14px/400). The font carries a geometric precision with slightly humanist terminals that feels engineered rather than designed — exactly matching Tesla's brand identity of technology that doesn't need to announce itself. There are no text shadows, no text gradients, no decorative type treatments. Every letterform earns its place through clarity alone.

**关键特征 :**
- Full-viewport hero sections (100vh) dominated by cinematic car photography with minimal overlay UI
- Near-zero UI decoration: no shadows, no gradients, no borders, no patterns anywhere on the page
- 单声调颜色——电色蓝色( 3)`#3E6AE1`) ——专用于主CTA按钮.
- 通用三指字体家族( Display + Text) 统一网络, app, 和车内接口
- 摄影-第一演示,产品图像具有所有的情感字重
- 冷冻玻璃导航概念 transparent/ 浮在首屏内容之上的白色导航
- 0.33s 立方位比对转换为所有交互状态变化的通用时间
- 由木马驱动的首屏, 带有点指标和边缘箭头导航, 用于多个车辆展示
- “问一个问题” 持续聊天人栏, 固定在视图底端


## 2. Color Palette & Roles

### 主要
- **Electric Blue** (`#3E6AE1`): Primary CTA button background — a confident, mid-saturation blue (rgb 62, 106, 225) that stands alone as the only chromatic color in the entire interface. Used exclusively for "Order Now" and other primary action buttons
- **纯白** (`#FFFFFF`:所有表面,面板,导航,和二级按钮的主要背景颜色填充——让摄影呼吸的页面底色

### 中学和中学
- **宣传蓝** (`#3E6AE1`:蓝色也用于宣传文本(")0% 与CTA相同, 将首屏形象展示在影片上,
- No secondary accent colors exist. Tesla deliberately avoids color variety to maintain extreme visual discipline

### 表面背景( B)
- **White Canvas** (`#FFFFFF`): Page background, navigation panel, dropdown menus, and all surface containers
- **浅灰** (`#F4F4F4`: 细微的可换表面,用于区块的分化——几乎看不到纯白色的转变(rgb) 244, 244, 244)
- **碳暗线** (`#171A20`: 首屏文字覆盖和潜在暗模式背景的暗表面颜色(rgb) 23, 26, 32)——一个温暖的近黑,带有蓝色底色的.
- **冰冻玻璃** (`rgba(255, 255, 255, 0.75)`: 用于导航的半透明白色 backdrop-filter 滚动上的效果

### 中立文本( T)
- **Carbon Dark** (`#171A20`): Primary heading and navigation text — the darkest text value (rgb 23, 26, 32), used for model names, nav labels, and hero titles on light backgrounds
- **Graphite** (`#393C41`): Body text and secondary content (rgb 57, 60, 65) — the default paragraph color, slightly warmer than pure gray
- **皮尔特** (`#5C5E62`: 子链接的三级文本,二级导航链接如"Learn"和"Order"(rgb) 92, 94, 98)
- **银雾** (`#8E8E8E`: 输入字段和禁用状态中的占位符文本(rgb) 142, 142, 142)
- **云灰色** (`#EEEEEE`: 轻边框和分隔线(rgb) 238, 238, 238)
- **淡银** (`#D0D1D2`:亚基边界和划界(rgb) 208, 209, 210)

### 语义和调值
- Tesla's marketing site avoids semantic color coding (no green/red/yellow status indicators). Error, success, and warning states follow standard browser defaults in form contexts
- 蓝色的CTA(`#3E6AE1`)作为唯一的交互式颜色信号

### 渐变系统
- 接口中任何地方都不使用梯度
- 深度完全通过摄影,白空间,以及全血影像和干净白色表面之间的二进制对比来实现.
- 导航通过不透明(冷冻玻璃效应)而不是梯度或阴影实现层化


## 3. 字法规则

### 字体家族
- **显示**: `Universal Sans Display`, -apple-system, Arial, sans-serif 用于首屏头衔和大型模型名称。 sans-serif 精确的工程比例,最近替换 Gotham 统一 Tesla数字生态系统(网站、移动应用程序、车辆界面)
- **文本/UI 数据**: `Universal Sans Text`, -apple-system, Arial, sans-serif 用于导航、机身复制、按钮和所有UI文本。优化可视性,尺寸较小,比例略大于“显示”变体
- **No OpenType features** detected — typography is completely unembellished
- **No italic variants** observed on the marketing site

### 等级

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| 首屏头衔 | 40px (2.50rem) | 500 | 48px (1.20) | normal | 显示世界三星, 黑色首屏图像上显示白色 |
| 产品名称 | 17px (1.06rem) | 500 | 20px (1.18) | normal | 通用圣人文字, 导航面板和卡片中的模型名称 |
| 导航项目 | 14px (0.88rem) | 500 | 16.8px (1.20) | normal | 通用三圣文字,主要导航标签 |
| 文字 | 14px (0.88rem) | 400 | 20px (1.43) | normal | 通用圣物文本、段落和描述性内容 |
| 按钮标签 | 14px (0.88rem) | 500 | 16.8px (1.20) | normal | 通用三进制文本, CTA 按钮文本 |
| 子链接 | 14px (0.88rem) | 400 | 20px (1.43) | normal | 三级链接(学习、秩序、经验) |
| 宣传文本 | 22px (1.38rem) | 400 | 20px (0.91) | normal | 白文本宣传首屏(")0% APR 可用"). |
| 分类标签 | 16px (最高) | 500 | — | normal | 分类牌上的白文本标签("运动轿车") 互联网档案馆的存档,存档日期2013-09-02. |

### 原则
- **"Normal" letter-spacing everywhere**: Unlike most modern tech brands that use negative tracking for headlines, Tesla uses default letter-spacing at every level. This reflects a philosophy that the typeface should speak for itself without manipulation
- **字重限制**:只有两个字重出现—— 500 (中)标题/UI和 400 (正规)身体。700),无光(300)系统避免了打字剧情.
- **统一字体大小**: 多数UI 文本集群, 地点: 14px 仅拥有首屏头衔( E)40px)和促销文本(22px) 断开。这种极端的统一性创造了一种设计的一致性感。
- **显示文本分割**:双变体系统(Display for hero,Text for UI)产生细微的光学校正,没有明显的结构差异——它们在不同尺寸上作为相同的型号出现.
- **No text transforms**: No uppercase text appears in the main navigation or CTAs — the lowercase approach reinforces Tesla's understated confidence


## 4. 组件型号

### 按钮
All buttons use barely-rounded rectangles (4px border-radius) — creating a sharp, technical aesthetic that mirrors the precision of the vehicles.

**Primary CTA** — The main action button:
- Default: bg `#3E6AE1` (Electric Blue), text `#FFFFFF`, fontSize 14px, fontWeight 500, padding 4px with inner content centering, borderRadius 4px, minHeight 40px, width 200px
- 边框 : 3px 固态 transparent (保留焦点/活动边框动画的空间)
- 框阴影 : `rgba(0,0,0,0) 0px 0px 0px 2px inset` (静时隐身,动画显眼)
- 过渡 : `border-color 0.33s, background-color 0.33s, color 0.33s, box-shadow 0.25s`
- 弯腰:蓝色背景的微妙暗化
- 用于: "现在命令"行动呼吁

**中学** - 备选动作按钮:
- 默认: bg `#FFFFFF`文本中,请输入 `#393C41` (图形),与主的尺寸和边框模式相同
- 过渡:与初级(0.33s)
- 用于: 与初级CTA同时进行的“View编目”

**导航按钮** ——顶部导航器件:
- Default: bg transparent, text `#171A20` (Carbon Dark), fontSize 14px, fontWeight 500, borderRadius 4px, padding 4px 16px, minHeight 32px
- 过渡 : `color 0.33s, background-color 0.33s`
- 积极/扩大:微妙的背景突出
- 用于:"汽车","能源","查尔格","发现","跳"

**文本链接** 内在行动:
- Default: text `#5C5E62` (Pewter), fontSize 14px, fontWeight 400, no background, no border
- 挂起: 下划线装饰 box-shadow 过渡
- 过渡 : `box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75), color 0.33s`
- 用于: 滴水面板中的"Learn","Order","Experience","New","Pre-own"链接

### 纸牌和集装箱

**车辆卡** (导航仪):
- Background: transparent (inherits panel white)
- 边框:无
- Shadow: none
- 内容:车辆图像(transparent PNG)+ 模型名称以以下+两个文本链接为中心
- 版式 : 3- 下拉面板内的柱状网格
- 牌本身上没有悬浮动画——交互是通过下面的文本链接

**类别卡** (主页下一节):
- Background: full-bleed landscape photography
- 边界半径: 大约 12px (微细四舍五入)
- 重叠流:隐藏( 剪切图像到圆角)
- 文字:左上角的白色标签("运动轿车","Midsize SUV")
- Size: large format, approximately 2:1 aspect ratio
- No shadow, no border, no overlay gradient — text relies on image darkness for contrast

### 输入表单( F)
- Background: transparent
- 文本 color: `#171A20` (卡本黑暗)
- 占位符 color: `#8E8E8E` (银雾)
- 边框:最小, 继承浏览器默认的
- 字体: 通用三色文字, 14px
- "问一个问题"的聊天员输入栏坐落在景点底部,底部有干净的白色背景和微妙的边框

### 导航
- **桌面**: 以水平导航为中心 TESLA 左侧的字签(空格大写字母),中和的5个类别按钮,以及右侧的3个图标按钮(帮助, global/language, count)
- **Background**: White (transitions from transparent over dark hero to opaque white on scroll via class toggle `tds-site-header--white-background`)
- **Dropdown panel**: Full-width white panel with 3-column vehicle grid + right sidebar text links, no shadow, no border — appears seamlessly below the nav
- **Sticky behavior**: `sticky-without-slide` class — stays at top without slide-in animation
- **手机**:汉堡崩塌模式
- **No visible separator** between nav and content — the nav blends with the hero

### 图像处理
- **Hero**: Full-viewport (100vh) sections with cinematic photography — edge-to-edge, no padding, no margin
- **车辆图像**: Transparent PNG 以白色背景制作 降级面板,工作室质量 3/4 角度射击
- **类别卡**: 景观摄影, 大约 2:1 圆角比例(12px)
- **木马**: 自动推进点指标(3 点)和左/右箭头在边缘导航
- **Lazy loading**: Below-fold sections use lazy loading, rendering as blank white until scrolled into view

### 持续聊天栏
- 连接到下方, 可见于所有区域
- 白色背景, 带有细微的边框
- 包含:聊天图标+“询问”标签+占位符文本(“什么是狗模式?” )+发送图标+“今天的驱动器时间表”二级 CMA
- 计划CTA有带纹/蓝色图标的强调色


## 5. 版式原则

### 间距系统
- **基地单位**: 8px
- **共同价值**: 8px (0.5rem), 16px (1rem), 21.44px (1.34rem)
- **按钮绑定**: 4px 内容以弹性箱为中心, 4px 16px 导航项目
- **分区编栏**: 内容垂直居中的全部视图端口部分
- **纸牌间隙**大约 16px 类别卡之间的间距

### 网格容器( C)
- **最大宽度**大约 1383px (大多数内容使用的全视图宽度)
- **首屏们**:满血,边缘对尖, 100vh 节次
- **导航面板**: 3- 右配文本边栏的车辆卡的列网格(~70/30 拆分)
- **类别卡**: 2- 上水平布局(大左卡+小右卡)

### 白空间哲学
Tesla uses whitespace as a luxury signal. The generous vertical spacing between sections (each section is a full viewport height) means you can only see one "message" at a time — one car, one model name, one CTA pair. This creates a gallery-like browsing experience where each scroll is a deliberate transition, not a continuous feed. White space is not empty — it's the frame that elevates each vehicle to the status of art piece.

### 圆角刻度
| Value | Context |
|-------|---------|
| 0px | 多数元素——锐边是默认值 |
| 4px | 按钮(初级、二级、导航项目)——几乎看不到圆形 |
| ~12px | 类别卡——显著但限制在较大表面四舍五入 |
| 50% | 木卫一点指标——完美的圆圈 |


## 6。深度和高度

| 职等 | 治疗 | 使用 |
|-------|-----------|-----|
| Level 0 (Flat) | No shadow, no border | Default state for all elements — cards, panels, buttons at rest |
| Level 1 (Frost) | `rgba(255,255,255,0.75)` backdrop | Navigation bar on scroll — frosted glass transparency |
| 职等 2 (汇总) | `rgba(128,128,128,0.65)` | 模块覆盖和地区/饼干弹出 |
| 职等 3 (声) | `rgba(0,0,0,0.05)` | 稀有悬浮状态的最小阴影提示 |

### 影子哲学
Tesla其高程方法本质上是"无"的,网站避免了完全在主界面中的框阴影. 深度通过三种备选策略进行沟通:
1. **Z-index 层层**: 数据 sticky 导航通过定位而不是阴影 置于首屏的高度
2. **Opacity-based transparency**: The frosted glass nav and overlay modals use background-color opacity rather than shadow to indicate layering
3. **摄影-深入**:全血影像通过视角,照明和组成来创造自己的视觉深度——使得UI阴影变得多余.

### 装饰性深度
- 铀浓缩物元素没有梯度、光线或大气影响
- 首屏形象本身提供了所有视觉丰富的——日落天空,汽车表面反射光,工作室照明的地面阴影.
- 旋转木马箭头按钮使用半透明的白色背景,在首屏图像上方漂浮,而不会破坏图像


## 7。 。 。 。 。 。

### 执行
- Let photography dominate every screen — the product IS the design
- 使用电色蓝色( U)`#3E6AE1`专门用于初级协定——绝不用于装饰目的
- 维护主要内容块的视图高强度区域——每个屏幕一个消息
- 保持打字的字重 400-500 仅此而已,没有大胆,没有光线,没有极端
- 使用 4px border-radius 对所有交互式要素的精确度而不是玩耍度
- 相信白空间是一种奢侈的信号——永远不要因为空空而填充可用的空间
- 保持所有过渡 0.33s ——运动的一致性与颜色的一致性同样重要.
- 使用 transparent 白色背景的巴布亚新几内亚车辆图像,用于产品展示
- 横向居于模型名称下的CTA中心——垂直节奏为模型 +字幕 → 按钮
- Maintain the Display/Text font split — Display for hero-scale text only, Text for everything else

### Don't
- 将阴影添加到任何元素中——通过阴影的升华与平面,画廊美学相矛盾
- Use more than one chromatic color besides the blue CTA — the palette is intentionally monochrome-plus-one
- 将梯度,图案,或装饰背景应用到表面——白色和摄影是唯一的背景
- 使用大于 40px 网络上——连首屏的尺度,印刷都刻意加以限制.
- Add borders to cards or containers — separation is achieved through spacing, not lines
- 使用大写文本转换—— Tesla'信心通过小写平静来表达
- 引入圆形溢出按钮或大型边框线条—— 4px 半径是故意的,准确的
- 以其他类型面来覆盖世界三星家族——跨平台一致性是一个核心品牌价值
- 添加悬浮动画, 并带有缩放/翻译变换—— Tesla其交互是只显示颜色( 背景和边框过渡)
- Clutter the viewport with multiple CTAs — every screen should have at most two action buttons


## 8. Responsive Behavior

### 断点
| 名称 | 宽度 | 密钥更改 |
|------|-------|-------------|
| 手机 | <768px | 单列布局,汉堡导航取代水平标签,首屏文本缩放为 ~28px, CTA 按钮垂直堆叠, 分类卡变为全宽 |
| 平板 | 768-1024px | 2-柱式导航面板,首屏保持全视门高度,CTA保持侧式,减少水平的垫板 |
| 桌面 | 1024-1440px | 完全水平导航, 3- 列车网格在下降,首屏在 40px,并列CTAs at at 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, , , , 3, 200px/160px 宽度 |
| Large Desktop | >1440px | Content remains centered, hero photography scales to fill wider viewports, max-width container for nav panel content |

### 触控区域
- 初级 CTA 按钮 : 200px × 40px 最低(远高于) 44×44px 要求)
- 导航按钮:最小值 32px 高与高与高 4px 16px 贴板——适当触摸目标
- 木马箭: ~44px 视点边缘的平方白色半透明按钮
- 文本链接("Learn","命令"): 14px 文本中应包含充分的内容 line-height 触摸间隔

### 折叠战略
- **导航**: 水平分类按钮( 车、 能源、 充电、 发现、 商店) 崩溃为移动上的汉堡/ 绘画菜单
- **Hero CTA pair**: Side-by-side buttons on desktop stack vertically on mobile
- **类别卡**: 2- 水平布局向单柱全宽移动倒塌
- **车辆网**: 3-桌面导航面板中的列网格变为 2- 单柱在平板上,单柱在移动
- **间距**: 节垂直贴补仍然慷慨( Viewport-hight 段),但水平贴补减少

### 图像行为
- 首屏的画面反应充分,在每个断点上填满整个视门
- 使用车辆木马图像 `object-fit: cover` 保持电影的跨宽度构成
- Transparent PNG vehicle images in the nav panel scale proportionally within their grid cells
- 分类卡图像保持其景观比和剪辑通过 `overflow: hidden` 与 border-radius


## 9. Agent Prompt Guide

### 快速颜色引用
- 初级CTA:"电蓝(英语:Electric Blue (film))"(Electronic Blue).#3E6AE1)"
- Background: "Pure White (#FFFFFF)"
- 标题文本: "Carbon Dark (#171A20)"
- Body text: "Graphite (#393C41)"
- Tertiary text: "Pewter (#5C5E62)"
- 占位符:"银雾(Silver Fog)"#8E8E8E)"
- 备用表面:"光灰(Light Ash)"(Light Ash).#F4F4F4)"
- 暗色表面:"卡邦暗色(英语:#171A20)"

### 示例组件提示
- "Create a hero section with a full-viewport background image, centered 'Model Y' title in Universal Sans Display at 40px weight 500 in white, a subtitle line below, and two buttons side by side: a primary Electric Blue (#3E6AE1) 'Order Now' button and a secondary white 'View Inventory' button, both with 4px border-radius and 40px height"
- "Design a navigation bar with a spaced-letter wordmark on the left, five text buttons (14px, weight 500, Carbon Dark #171A20) centered, and three icon buttons on the right, all on a white background with no shadow or border"
- "Build a vehicle card grid with 3 columns, each card showing a transparent-background car image above a model name (17px, weight 500, Carbon Dark) and two text links (14px, weight 400, Pewter #5C5E62) labeled 'Learn' and 'Order', on a pure white surface with no borders or shadows"
- "制作一张有全血的风景摄影的分类卡, 12px border-radius, 外溢隐藏, 并用白色文本标签(“ 运动轿车”) 定位在左上角, 且没有覆盖梯度 。
- “设计一个带有聊天输入的持久底条(“请问”占位符)、一个发送图标和一个带有一个“今日驱动器”的二级CTA('Schedule a Drive Today')图标,将它固定在白色背景的视图底部。”

### 迭代指南
When refining existing screens generated with this design system:
1. Focus on ONE component at a time — Tesla's system is so minimal that each element must be pixel-perfect
2. Reference specific color names and hex codes from this document — there are only 6-7 colors in the entire system
3. Use natural language descriptions, not CSS values — "barely rounded corners" not "border-radius: 4px"
4. 描述所期望的"feel"与具体的测量方法——"各节之间类似格莱利的沉默"比"边-底"更好地沟通白空间哲学: 100vh"
5. 总是要验证摄影在做情感重力提升——如果UI本身感觉"设计",那太过分了.
