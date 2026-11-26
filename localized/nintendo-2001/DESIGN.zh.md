# Nintendo (2001) · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Nintendo.com circa 2001 is the web rendered as **console hardware**. Where most sites of the era reached for either grunge texture or corporate gradients, this interface builds itself out of **brushed-periwinkle metal plates** — every region is a discrete beveled panel, edge-lit with a brighter highlight on top and a `{colors.chrome-indigo}` shadow line beneath, as if stamped from the same injection-molded plastic as a Game Boy. The whole page reads as one machine faceplate: a body of `{colors.canvas}` periwinkle chrome carrying inset modules, with the corners of the largest panels physically **chamfered** (cut at 45°) rather than rounded, reinforcing the manufactured-object feeling.

The system runs on a tight three-voice contrast. The structural voice is the cool periwinkle-to-indigo chrome (`{colors.canvas}`, `{colors.periwinkle}`, `{colors.chrome-indigo}`). The authority voice is `{colors.carbon}` carbon-navy — the top navigation bar, the right-rail action buttons, and the footer, all near-black slabs printed with a faint **halftone dot-matrix texture** that evokes a speaker grille. The energy voice is warm and reserved for one job only: telling you where to go. `{colors.nav-gold}` lights the primary menu words, `{colors.amber}` fills the utility chips and badges, and `{colors.signal}` orange marks every "forward" cue — the round arrow buttons, the chevron chips beside each headline, the Submit button. Warmth in this system always means *action*; the cool chrome never carries it.

大气层来自 **首屏字段**打破了围观的平静 以全血产品摄影 而不是文字背景 电路板青铜器在系统上 运动板在运动场上 红色的 软薰衣草在家庭上 每一个都顶着粗壮的 `{typography.display}` 白话符号,带有沉重的轮廓和硬投影,是游戏盒封面类型的视觉标志。一个像素耳的马里奥从头部向下倾斜,上面写着“欢迎来到” Nintendo.com!" 语音泡沫,将整个机器锁定在品牌的玩乐角色声音.

**关键特征 :**
- Every UI region is a **beveled metal plate** in `{colors.canvas}` periwinkle, edge-lit on top and shadow-lined with `{colors.chrome-indigo}` below — the page is assembled, not laid out.
- **硬条( 剪切- 角板) 面板几何** 最大模块上; 大部分铬是尖端的(`{rounded.none}`),并预留圆形的标志胶囊形,无线电点和圆形的圆形徽章(`{rounded.full}`).
- A **碳导航指令层** (`{colors.carbon}`)用半圆点纹理搭载顶端的导航,右侧的按键,以及页脚.
- 温暖是按 **仅指向信号**: `{colors.nav-gold}` 菜单单词, `{colors.amber}` 用于通用芯片/护栏, `{colors.signal}` 用于每个前方/下方提示。
- **摄影首屏球场** 循环一个特定页面强调色符号( Q)`{colors.lavender}` 家庭 ∗ `{colors.systems-teal}` 系统 ∗∗ `{colors.games-red}` 游戏) `{typography.display}` 框艺术字标记。
- 密集的, **模块化网格** ——桅杆头,双向导航栏,首屏,然后是堆叠式列表/地貌板的三分之二内容栏,旁边是三分之一的右动作栏杆——装满了最小的白空间.
- **字符引导**:马里奥吉祥物语音-泡泡乳头和ESRB徽章将铬以品牌个性化和监管信任标记框框定.


## 配色

调色板是 **冷金属底盘,配有配有的温暖信号**,读作三层: 万物所建的近温克勒铬,碳指令板,以及温和的探路强调色,这些强调色是稳态界面中唯一饱和的颜色.

### 品牌和 强调色
- **Nintendo 红色** (`{colors.primary}` — #e60012:赛马场标志词标和品牌主播胡伊. 曾少许使用纯品牌身份,并加倍使用验证/警示颜色. 从未在标志牌外出现表面填充.
- **Signal Orange** (`{colors.signal}` — #f68d1f): The "go forward" color. Fills every round arrow button, every chevron chip beside a headline, the Submit button, and the "Play It On" platform badges. If something advances you, it is orange.
- **琥珀( 琥珀)** (`{colors.amber}` — #ecab37: 通用能量。 充值代码库/ 游戏查找器/ 芯片, 输入 info-box 标头标签,扫荡星空,以及ESRB隐私认证徽章。通过更金色和预留的标志橙来区别于信号橙 *工具和标记* 而不是 *前进运动*。
- **导航金** (`{colors.nav-gold}` — #e48600:深橙色金色专供主导航词(Games, Systems, News, Nsider, Downloads)在碳棒上发光.

### 表面
- **金属矿** (`{colors.canvas}` — #7a8aba:主接口体——每个模块所插入的刷-金属铬.
- **轻点的Perwinkle** (`{colors.periwinkle}` — #8ba1d4: 抬高的中间板(弹道板,系统瓦)——比高架页面底色更亮的一步.
- **淡色天空( T)** (`{colors.sky}` / `{colors.canvas-soft}` — #9fbee7:二级导航带和光插板填充.
- **淡淡的薰衣草** (`{colors.lavender}` — #acace7:主场首屏和侧促卡.
- **淡冰层** (`{colors.ice}` — #c0d5e6:新闻首屏面板场.
- **克罗姆·因迪戈** (`{colors.chrome-indigo}` — #3d4f97:每个板块下有贝形边框/阴影线,以及导航标签的领先角度边缘.
- **静音 Indigo** (`{colors.muted-indigo}` — #60619c:无活性标签和下垂铬。
- **Platinum Gray** (`{colors.platinum}` — #dedede): The list-row and inset content surface — news headlines and archive rows sit on this cool platinum.
- **White** (`{colors.surface}` — #ffffff): Content cards, form fields, the logo pill, and list-row highlight.

### 文本
- **碳海军** (`{colors.ink}` — #21242e: 轻铬上的主文本,和暗指令层的填充(导航栏,铁路按钮,脚).
- **Chrome Indigo** (`{colors.ink-soft}` — #3d4f97): Secondary text and small-caps chrome labels.
- **白色** (`{colors.on-primary}` — #ffffff: 碳,红,橙色铬的文字.

### 语义
- **错误/ 提醒** (`{colors.error}` — #e60012:验证和破坏性状态再利用品牌红色.
- **系统** (`{colors.systems-teal}` — #206479: Page-accent tint——系统首屏的电路板青色场.
- **游戏红色** (`{colors.games-red}` — #a7282b: Page-accent tint——游戏首屏运动会的动作破败赛车场.


## 字体排版

### 字体家族
时代的网络安全现实是 **Arial / Helvetica** 整个系统没有网络信息。系统不是从类型面选择而从 *处理*:每个铬标签上都有一个紧凑的大写跟踪,并具有重度的简写和阴影显示样式,用于模仿控制台盒艺术标志类型的首屏字标记。 Arial;链接是同一个家族,在粗字重 `{colors.ink-soft}`.

微标签( 垂直左栏标签, footer fine print) 渲染小位图的软像素特性 Arial 期间的——供忠实的复制,对对 Arial 带有像素面像素的 **丝绸屏** 或 减 减 **自愿323** 现场 10–11px 标签大小。

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display}` | 44px | 900 | 1 | 0 | 首屏盒艺术字标记(白色,重轮廓+硬投影) |
| `{typography.hero-tagline}` | 15px | 700 | 1.3 | 0 | 首屏支持线("高明的图形,伟大的声音......"). |
| `{typography.nav-link}` | 13px | 700 | 1 | 0.5px | Primary nav menu words, uppercase |
| `{typography.ui-label}` | 11px | 700 | 1.1 | 0.5px | Section header labels, panel titles, button text — uppercase |
| `{typography.link}` | 12px | 700 | 1.4 | 0 | 新闻头条链接,"多读" |
| `{typography.body}` | 12px | 400 | 1.4 | 0 | 描述,民意调查文本, info-box 复制 |
| `{typography.micro}` | 10px | 400 | 1.3 | 0 | Footer copyright, calendar cells, fine print |

### 原则
- **Uppercase + tracking is the chrome voice.** Every structural label — nav words, panel headers ("Official News", "Featured Sites", "Player's Poll"), button text — is uppercase Arial Bold with a half-pixel of tracking. It reads like silkscreened legends on a controller.
- **显示类型被概括, 永远不平。** 首屏字签总是带有厚厚的对比图大纲和硬反射阴影,所以它们从摄影场——盒式艺术大会中弹出.
- **身体保持小而安静.** 时 12px,描述性副本从不与铬竞争;等级完全由标签和摄影所承载.

### Note on Font Substitutes
Arial is freely available system-wide and needs no substitute. To recreate the period bitmap rendering of micro-labels, layer a pixel font (**Silkscreen**, **VT323**, or **Press Start 2P** for the chunkiest legends) at 10–11px and disable anti-aliasing. The display wordmarks are bespoke logotypes; the closest open substitute is **Archivo Black** (italicized) or **Arial Black** with a CSS text-stroke outline and `text-shadow` offset.


## 布局

### 间距系统
- **基地单位**: 8px (`{spacing.sm}`)——列表行与格格格间沟节奏.
- **脚本**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.section}` 48px
- Panels carry **12px interior padding** (`{spacing.md}`); larger content modules use **16px** (`{spacing.lg}`). Inter-module gaps run 16–24px. The layout is deliberately dense — whitespace is a structural seam between plates, not a luxury.

### 网格容器( C)
- **Fixed-width canvas** ~780–830px wide (a desktop-era fixed table layout, centered). No fluid scaling — the interface is sized to a single target window like an application.
- **头巾行**:马里奥吉祥物+语音泡(左)和搜索模块(右)浮在铬上方.
- **双向导航条**: 碳主条(logo +) 5 部分词 + 代码库/ 游戏搜索器工具芯片)堆叠在一个 periwinkle 二级条(父母、客户服务、公司、全球、隐私、存储、联系人)上。
- **Body**: a full-width hero panel, then a **two-column split** — a ~two-thirds content column of stacked panels (Official News list, Featured Sites 2×2 grid, etc.) beside a ~one-third **right action rail** (Login / Subscribe / Newsletter / Help buttons, an info box, a side promo card).
- **左侧铁路**: 薄的垂直条形旋转制表符(Top 10,Top lefts,玩家选择,ESRB 评分)剪切到铬边.

### 白空间哲学
Empty space is **engineered seam**, not breathing room. Modules butt against each other separated by thin `{colors.chrome-indigo}` bevel lines and a few pixels of canvas, so the eye reads grouped plates. The density is intentional: it makes the page feel like a packed control panel where everything is one click away.

### 反应战略

#### 断点
| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Desktop (only) | ~780–830px fixed | The native, sole target — a fixed-width application-style layout |
| Narrow window | < 780px | Horizontal scroll (no reflow); the table layout does not collapse |

This is a **pre-responsive, fixed-canvas** design. It was authored for a single desktop window size and does not reflow. A faithful *modern* re-implementation would preserve the fixed chrome metaphor on desktop and, below ~720px, stack the right action rail beneath the content column and collapse the dual nav bars into a single carbon bar with a disclosure toggle.

#### 触控区域
原版(只使用鼠标的时代)不是考虑;按钮和芯片是 18–28px 高。现代端口必须扩大 `{components.button-primary}`, `{components.button-icon-arrow}`,以及 `{components.radio-option}` 撞击区域到 a 44×44px 最低点

#### 折叠战略
On a modern narrow viewport: dual nav bars → single carbon bar + menu disclosure; two-column body → single stacked column with the right rail moving below content; the left rotated-tab strip → a horizontal scroll chip row or removed; fixed hero → fluid full-bleed hero retaining the outlined wordmark.

#### 图像行为
Hero fields are **full-bleed photographic plates** clipped to the panel's beveled rectangle; featured-site and game tiles are fixed-pixel thumbnails (~95×60px) in a tight grid. No lazy loading (era predates it). Product renders sit on textured backdrops rather than transparent cutouts.


## 层次与阴影

系统深度是 **物理贝壳模拟**,而不是软阴影。没有模糊的滴影词汇;相反,每个板块都得到幻觉,成为一块被模具塑胶的升起的碎片。

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 ——内置 | 重新被页面底色; 更暗 `{colors.chrome-indigo}` 上边缘, 下边缘较轻 | 列出行、 窗体字段、 页面底色正文本身 |
| 1 - 板块 | 浮点数面板; 较轻的顶部突出显示, `{colors.chrome-indigo}` 下方的阴影线 | 内容面板、系统瓦片、信息框 |
| 2 - 筹码 | 带有亮亮的顶端+硬底阴影的贝形按钮 | 工具芯片、 Go/ 下载按钮、 导航标签 |
| 3 - 指挥板 | `{colors.carbon}` 近黑半色素的纹理,坐着"以上"染色体 | 顶端导航栏,右侧按钮,脚 |

### 装饰性深度
Depth is also carried by **texture and photography**: the halftone dot-matrix on carbon slabs reads as a recessed speaker grille; hero fields use motion-blur, circuit-board patterns, and product renders with their own cast shadows to create literal pictorial depth; chamfered corners on the outer chrome suggest a machined faceplate edge. The left-rail rotated tabs appear to tuck *behind* the main chrome, a small but effective layered cue.


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 默认的——导航栏,脚,大多数铬板(整数/切数,不四舍五入) |
| `{rounded.xs}` | 2px | 工具按钮、窗体字段、徽章 |
| `{rounded.sm}` | 4px | Small panels, featured tiles, list rows |
| `{rounded.md}` | 6px | 内容面板、首屏面板 |
| `{rounded.lg}` | 10px | 外侧面板、吉祥物泡沫 |
| `{rounded.full}` | 9999px | 木牌赛车场胶囊形、无线电点、圆形徽章 |

签名是 **锐度与圆度**铬硬化且经常 *干燥的* (橡皮刀切开在 45°,而不是曲线)——这是制造的面板外观. 圆形只出现于它信号物理控制的地方:全溢的标志,圆形无线电按钮,以及圆形信号-橙箭徽. 现代的复制应该抵制软化每个角落的冲动;尖板和少数丸元素之间的张力是整个角色.

### 摄影几何
Hero photography fills beveled rectangles at roughly 4:1 (banner) and 16:9 proportions, full-bleed within the panel. Featured-site and game thumbnails are near-4:3 fixed tiles (~95×60px) framed by a 1–2px `{colors.chrome-indigo}` edge with `{rounded.sm}` corners. The mascot is a transparent cutout overlapping the masthead, breaking the rectangular grid for personality.


## 组件

> 不存在悬浮状态。下面的每个光谱覆盖默认和(在提取时)按下/主动。 `components:` 条目。

### 导航

**`nav-bar`** ——主顶级导航.
- `{colors.carbon}` slab with a faint halftone-dot texture, ~28px tall, carrying the `{components.logo-pill}` at left, the five `{colors.nav-gold}` section words in `{typography.nav-link}` uppercase, and the amber Code Bank / Game Finder utility chips at right. Sharp corners (`{rounded.none}`), `{spacing.sm}` padding.

**`subnav-strip`** ——二次导航.
- A `{colors.canvas-soft}` 位于导航栏下方的苍白天空条,载有各种功能链接(父母、客户服务、公司、全球、隐私、存储、联系人) `{typography.ui-label}` `{colors.ink}`被薄的分裂者分隔 尖锐的 `{spacing.xs}` 贴纸

**`left-rail-tab`** —— 旋转的段落标签
- 细长的垂直条形 `{colors.carbon}` 选项卡(Top 10,顶层租赁,玩家选择,ESRB评分),垂直旋转 `{typography.ui-label}` 文本在 `{colors.canvas-soft}`剪到左侧铬边缘 尖角 `{spacing.xs}` 贴纸

### 品牌和面具头

**`logo-pill`** — Nintendo 赛车道标志
- 字号 `{colors.primary}` 红色的套装在白色内部 `{rounded.full}` 赛马场胶囊形, 简写,坐在导航栏左边 `{spacing.xs}` 贴纸

**`mascot-bubble`** -马里奥欢迎演讲泡泡
- A white `{rounded.lg}` rounded-rectangle speech bubble with a tail, carrying "Welcome to Nintendo.com!" in `{typography.micro}` `{colors.carbon}`, paired with the Mario cutout in the masthead. `{spacing.sm}` padding.

### 按钮

**`button-primary`** ——琥珀通用设备/去芯片
- `{colors.amber}` 满, `{colors.carbon}` 文本在 `{typography.ui-label}`, `{rounded.xs}` 转角 `{spacing.md}` ,并带有一个带贝子的顶部突出显示。每日工具按钮(Code Bank, Game Finder, Go)。
- Pressed state in **`button-primary-pressed`** — fill deepens to `{colors.nav-gold}`.

**`button-submit`** ——前进/提交
- `{colors.signal}` 橙色填满 `{colors.on-primary}` 白文本在 `{typography.ui-label}`, `{rounded.xs}`, `{spacing.lg}` padding。“ 承诺” 动作( 投放提交, 继续存档) 。

**`button-secondary`** ——右侧动作按钮
- `{colors.carbon}` 近黑板, `{colors.on-primary}` 白文本在 `{typography.ui-label}`锐利 `{rounded.none}` 转角 `{spacing.md}` adding,带有一个小的首选项图标。用于登录 / 订阅 / 通讯 / 帮助右侧的栏杆 。

**`button-icon-arrow`** ——圆形前箭头
- A 22px `{colors.signal}` 橙色( 橙色) `{rounded.full}` 带有白色切夫龙的碟片——首屏面板和节链接上的主要"走"支付.

**`button-arrow-chip`** ——头条切夫龙芯片.
- 来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,来,,来,,,来,,来,来,来,,,来,来,,,来 18px `{colors.signal}` 橙色( 橙色) `{rounded.xs}` 芯片,带有白色前切夫龙,每块的右端坐落 `{components.news-row}` 以推进文章。

### 输入表单( F)

**`search-field`** ——马斯特黑德搜索输入.
- 白色 `{colors.surface}` 字段,请 `{colors.ink}` 文本在 `{typography.body}`, `{rounded.xs}` 转角 1px `{colors.hairline}` 边框, ~20px 高,配对"All"类降级和琥珀Go芯片.

**`text-input`** ——通用文本字段
- 底盘与 `search-field`白满的, `{colors.ink}` 文本, 单词 `{rounded.xs}`, `{colors.hairline}` 1px 边框, `{spacing.xs}` padding. 以登录形式(用户名/密码/电子邮件),新闻存档关键字和日期字段使用。

**`select-dropdown`** —— 本地选择( “ 点击可选择 ” )
- A white `{colors.surface}` field with `{colors.ink}` text in `{typography.body}`, `{rounded.xs}` corners, and a hard 1px `{colors.carbon}` border (sharper than the inputs) closing on a beveled native dropdown-chevron button at the right edge. ~24px tall, `{spacing.xs}` padding. Used for the Register form's Month / Year pickers.

**`field-label`** —— 内含表单标签
- A bold `{colors.ink}` label in `{typography.link}` (Arial Bold 12px) sitting left of its input (Username, Password, E-mail, Month, Year). `{rounded.none}`, `{spacing.xxs}` padding.

**`radio-option`** - Poll无线电按钮
- A 12px 白色 `{rounded.full}` 无线电点与一个 `{colors.hairline}` 环, 配对 `{typography.body}` 选项文本。在玩家的“民意调查”中使用。

**`form-panel`** - 表格容器(Login/登记册)
- A `{colors.platinum}` 光线 `{rounded.md}` 带有窗体的面板,盖上 `{components.section-label-bar}` 头号(QQLOG IN / QQREGISTER). `{spacing.lg}` 内部。 登录页面对齐两个并排 。

**`dotted-divider`** ——点细边线规则.
- A 1px dotted `{colors.muted-indigo}` separator rule used between form sub-sections (the "Note:" line, "Forgot Your Password?"). A recurring Y2K-chrome detail — dotted rather than solid.

### 纸牌面板( G)

**`hero-panel`** ——摄影首屏板.
- A `{rounded.md}` 装满满全血产品摄影的带页矩形的网球(`{colors.lavender}` / `{colors.systems-teal}` / `{colors.games-red}`),后面加上一个概述 `{typography.display}` 单词标记和 a `{components.button-icon-arrow}` 呼叫行动。 `{spacing.lg}` 内地.

**`section-label-bar`** ——小组首屏
- A `{colors.canvas}` 带有小网格/列表格和大写头条 `{typography.ui-label}` 标题("官方新闻","精选网站","Player's Poll"). 尖角, `{spacing.sm}` 标出每个内容模块。

**`news-row`** – 标题列表行
- A `{colors.platinum}` `{rounded.sm}` row with a small category icon, a `{typography.link}` headline in `{colors.ink-soft}`, and a trailing `{components.button-arrow-chip}`. `{spacing.sm}` padding. Stacked into the Official News / Other Headlines lists.

**`featured-tile`** ——特色场馆缩略图.
- A `{colors.carbon}`-framed `{rounded.sm}` tile (~95×60px) holding a screenshot thumbnail with a `{typography.micro}` URL caption (e.g. www.pokemon.com). Tight `{spacing.xxs}` padding, arranged in a 2×2 grid.

**`poll-panel`** – 玩家的Poll 模块
- A `{colors.periwinkle}` 提高 `{rounded.md}` 提出问题、列名 `{components.radio-option}` 选择,最后以 `{components.button-submit}`. `{spacing.md}` 内地.

**`info-box`** ——"什么是"解释卡
- A white `{colors.surface}` `{rounded.sm}` card with an amber header tab ("What Is — Game Finder") and `{typography.body}` explanatory copy. `{spacing.md}` padding. Sits in the right rail.

**`promo-card`** 辅助产品推广
- A `{colors.lavender}` `{rounded.sm}` 持卡,在右侧铁路上,在小产品渲染上携带一个概述的产品字号标记(如Game Boy Advance). `{spacing.md}` 贴纸

**`system-tile`** ——硬件网格瓦(系统页).
- A `{colors.periwinkle}` `{rounded.sm}` tile holding a console render over a circuit-board backdrop with an outlined system name (Nintendo 64, Super Nintendo, Game Boy). `{spacing.sm}` padding, arranged in a 2×3 grid.

**`link-row-card`** ——公用事业链接卡(系统页).
- A white `{rounded.sm}` card with an amber label tab (Technical Help, Store Locator, Online Store), a character icon, and a one-line `{typography.body}` description. `{spacing.sm}` padding.

**`calendar-widget`** 月历(新闻页)
- A white `{rounded.sm}` grid calendar in `{typography.micro}`, with a `{colors.carbon}` caption header (e.g. "June 01"), highlighted event dates, and a month-select dropdown. `{spacing.sm}` padding.

### 标注脚下( F)

**`esrb-badge`** ——ESRB隐私认证标识.
- 一点 `{colors.amber}` `{rounded.xs}` 徽章读作“ESRB——隐私认证” `{typography.micro}` `{colors.carbon}`被钉在脚上

**`esrb-rating-square`** ——游戏内容评分平方
- A 20px 白色 `{rounded.xs}` 平方形,将内容标定字母(E, T)印在 `{typography.ui-label}` `{colors.carbon}`,每张游戏卡。

**`footer-bar`** — Page footer
- A `{colors.carbon}` chamfered slab with the "©1997–2001 Nintendo…" copyright in `{typography.micro}` `{colors.canvas-soft}`, the ESRB badge, and a privacy link. Sharp corners, `{spacing.lg}` padding.

### 实例(说明性)

> 奇幻怪兽的演示表面,每个 `ex-*` 条目参考: 下游消费者的品牌原始产品(`/preview-design`, `/generate-kit`) 重新皮肤相同 10 表面一致。

**`ex-pricing-tier`** ——默认定价等级卡。 feature-card 带品牌的铬 canvas-soft 表面。
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
- 将每个区域建设成 **贝壳板**: a `{colors.canvas}` 身体上缘更亮一点 `{colors.chrome-indigo}` 阴影线下面,"组合机器"的感觉取决于它.
- 预留的暖色 **仅查找路径** — `{colors.nav-gold}` 以导航词, `{colors.amber}` 用于公用事业/障碍, `{colors.signal}` 。冷却铬从不带动作颜色。
- Keep structural labels **uppercase Arial Bold with 0.5px tracking** (`{typography.ui-label}`) — it is the silkscreen-legend voice of the whole system.
- Render hero wordmarks as **outlined + drop-shadowed `{typography.display}`** over full-bleed photographic fields tinted per page.
- 使用 `{colors.carbon}` 带有半音调纹理的 **命令层** (导航,右栏,脚步)将"系统控制"与"内容"分开.
- Let panels **butt together** with thin bevel seams; density is the intended texture.
- 默认角到 **锐度/密闭** (`{rounded.none}`);只花圆形的标志胶囊形,无线电点,和圆形的窄形徽章.

### Don't
- Don't soften every corner — turning the sharp chrome into a uniformly rounded card system erases the manufactured-faceplate identity.
- Don't introduce a **soft blurred drop-shadow** elevation language; depth here is hard bevels and pictorial photography, not Material elevation.
- Don't let `{colors.signal}` and `{colors.amber}` bleed into decorative use — warm color must always mean "act here."
- Don't add accent colors outside the page-tint heroes (`{colors.systems-teal}`, `{colors.games-red}`); the steady-state chrome is strictly cool periwinkle + carbon.
- Don't widen body copy or whitespace into an airy modern layout; the packed, fixed-canvas density is the brand.
- Don't flatten the dual-nav structure (gold primary words over the pale secondary strip) into one bar — the layered command hierarchy is signature.
- Don't render hero or system wordmarks as flat text; without the outline + shadow they lose the box-art reference entirely.

## 设计词元原值

分析 Nintendo.com的(简体中文) 2001 设计语言——一个刷孔式的"锥形铬"接口,每个面板都是一个被浸泡的金属板,导航发光琥珀超过半圆点的碳棒,粗体的图示型则坐落在电路板首屏场上. A Y.2K硬件美学,将网页像游戏系统的面板一样对待.

```yaml
---
version: alpha
name: Nintendo.com (2001) Analysis
description: An analysis of Nintendo.com's 2001 design language — a brushed-periwinkle "console chrome" interface where every panel is a beveled metal plate, navigation glows amber over a halftone-dotted carbon bar, and bold outlined display type sits on circuit-board hero fields. A Y2K hardware aesthetic that treats the web page like the faceplate of a game system.

colors:
  primary: "#e60012"          # Nintendo Red — racetrack logo, alert
  signal: "#f68d1f"           # Signal Orange — forward cues, submit, "Play It On"
  amber: "#ecab37"            # Amber — utility buttons, info-box tabs, badges
  nav-gold: "#e48600"         # Nav Gold — top-nav menu links
  canvas: "#7a8aba"           # Periwinkle metallic — primary interface body
  canvas-soft: "#9fbee7"      # Pale Sky — secondary-nav strip, light inset panels
  sky: "#9fbee7"              # Pale Sky alias
  lavender: "#acace7"         # Pale Lavender — home hero field
  ice: "#c0d5e6"              # Pale Ice — news hero field
  periwinkle: "#8ba1d4"       # Light Periwinkle — raised mid panels
  chrome-indigo: "#3d4f97"    # Chrome Indigo — beveled borders, tab edges
  muted-indigo: "#60619c"     # Muted Indigo — inactive tabs, secondary chrome
  platinum: "#dedede"         # Platinum Gray — list-row / inset content surface
  surface: "#ffffff"          # White — content cards, list-row highlight
  carbon: "#21242e"           # Carbon Navy — nav bar, dark buttons, footer, ink
  hairline: "#5a5f8c"         # blended bevel divider
  ink: "#21242e"              # primary text on light
  ink-soft: "#3d4f97"         # secondary text / chrome labels
  on-primary: "#ffffff"       # text on dark/red/orange chrome
  systems-teal: "#206479"     # Systems hero circuit-board cyan
  games-red: "#a7282b"        # Games F-1 racing hero
  error: "#e60012"            # validation / destructive (shares brand red)

typography:
  nav-link:
    fontFamily: Arial
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.5px
  ui-label:
    fontFamily: Arial
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.5px
  display:
    fontFamily: Arial Black
    fontSize: 44px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: 0
  hero-tagline:
    fontFamily: Arial
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  body:
    fontFamily: Arial
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  link:
    fontFamily: Arial
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  micro:
    fontFamily: Arial
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 10px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 48px

components:
  nav-bar:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.nav-gold}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
    height: 28px
  subnav-strip:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  logo-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.display}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.carbon}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
  button-primary-pressed:
    backgroundColor: "{colors.nav-gold}"
    textColor: "{colors.carbon}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
  button-submit:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.xs}"
    padding: "{spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  button-icon-arrow:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    size: 22px
  button-arrow-chip:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs}"
    size: 18px
  search-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs}"
    height: 20px
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs}"
    height: 20px
  select-dropdown:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs}"
    height: 24px
  field-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.link}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs}"
  form-panel:
    backgroundColor: "{colors.platinum}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  dotted-divider:
    backgroundColor: "{colors.muted-indigo}"
    textColor: "{colors.muted-indigo}"
    rounded: "{rounded.none}"
    height: 1px
  hero-panel:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.surface}"
    typography: "{typography.display}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  section-label-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  news-row:
    backgroundColor: "{colors.platinum}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.link}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  featured-tile:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.on-primary}"
    typography: "{typography.micro}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs}"
  poll-panel:
    backgroundColor: "{colors.periwinkle}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  radio-option:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    size: 12px
  info-box:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  promo-card:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  system-tile:
    backgroundColor: "{colors.periwinkle}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  link-row-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  calendar-widget:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.micro}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  left-rail-tab:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.canvas-soft}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  footer-bar:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.canvas-soft}"
    typography: "{typography.micro}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  esrb-badge:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.carbon}"
    typography: "{typography.micro}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs}"
  esrb-rating-square:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.carbon}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.xs}"
    size: 20px
  mascot-bubble:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.carbon}"
    typography: "{typography.micro}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"

  # ─── Examples (illustrative) — kit-mirror demonstration surfaces ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.ui-label}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body}"

---
```
