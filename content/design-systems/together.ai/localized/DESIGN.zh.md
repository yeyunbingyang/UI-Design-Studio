# Together AI · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。




## 概览

Together AI 是一个AI云基础设施平台——模型推论,GPU集群,微调,所有使"AI本土云"交付给开发团队的管道,品牌的网络表面信号正是这种姿态:上方是近黑首屏,中间是白色技术内容的长丝带,中间是单一的重复片品牌界面框架——三色橙色的magenta-periwinkle梯度丝带——完成"我们不仅仅是另一个灰色企业SaaS"的全部工作. 没有任何其他的插图系统. 梯度是品牌.

Type is the second decisive voice. Two faces carry every page: a custom geometric display sans (extracted as `The Future`) for headlines and body, set at weight 500 with tight, slightly-negative letter-spacing so 64-pixel hero type feels poured rather than typed; and an uppercase monospace eyebrow (`PP Neue Montreal Mono`) that labels every section, every button, and every cell header. Headlines are sentence-case; everything technical is uppercase mono. That contrast is the brand's tonal joke — the platform is serious enough to use a monospace label, modern enough to not put the headline in it.

表面交替激烈:a `{colors.canvas-dark}` (`#010120`) 乐队为首屏/研究/"围在前沿研究中"——之后是 `{colors.canvas}` 用于产品、定价和检验的(白色) `{colors.hairline}` 用于表格标题行和切换背景。 `{colors.accent-mint}` 彩色的Stat瓷砖将白色中间部分打破。纸牌一般是简单圆形的(`{rounded.sm}` 4 px),有细边线边界——从不与影子一起漂浮.

**关键特征 :**
- 单黑色 `{colors.primary}` 反毒胶囊形携带每个转换目标, 跨越定价、页脚、登录。 `{colors.accent-mint}` 白胶囊形的变体只用于首屏环境
- A three-color brand gradient (`{colors.accent-orange}` → `{colors.accent-magenta}` → `{colors.accent-periwinkle}`) is the entire decorative system — used as the hero ribbon graphic and never reduced to a swatch elsewhere.
- All-caps mono eyebrows and button labels in `{typography.mono-caps-eyebrow}` / `{typography.mono-caps-button}` everywhere — section titles, model row headers, "ON-DEMAND" labels in pricing tables.
- 轻圆的卡片界面框架在 `{rounded.sm}` 4 px; 关闭一个 `{rounded.xs}` 3.25 px 将定价-塔布胶囊形作为更严格的制度; `{rounded.full}` 仅用于浮式聊天发射器 Orb.
- 双表面模式- 交替 `{colors.canvas-dark}` 和 `{colors.canvas}` 带; 灰色之间没有内置。 单软表面 `{colors.hairline}` 仅用于标记表格头行。
- 一大块 `together.ai` 每一页的底部的文字标记条,设置在 `{typography.display-xxl}` 和几乎在天花板上加了锡(`{colors.hairline}`),作为"我们在这里"的签注,双倍的作为脚步分隔符.


## 配色

### 品牌色与强调色
- **墨黑笔** (`{colors.primary}` — `#000000`:单色主CTA颜色 黑丸搭载"签名","接触销售","现在就开始",每页脚CTA.
- **橙色品牌( Brand Orange) Name** (`{colors.accent-orange}` — `#fc4c02`:三色品牌梯度的一段,出现在首屏丝带图形中;从未单独作为UI填充.
- **白红** (`{colors.accent-magenta}` — `#ef2cc1`:梯度的第二段.
- **布兰德·佩里温克勒** (`{colors.accent-periwinkle}` — `#bdbbff`:梯度的第三段;也用作一些stat牌的软填充.
- **品牌薄荷** (`{colors.accent-mint}` — `#c8f6f9`: 生活在梯度以外的糊状青铜片——用于首屏二级-CTA胶囊形和 `stats-card-tinted` 瓷砖。

### 界面表面
- **页面底色** (`{colors.canvas}` — `#ffffff`: 默认产品/定价/docs背景.
- **细边线/ 软罐头** (`{colors.hairline}` — `#ebebeb`:该品牌的单一软表面基调——用于 data-table 头排, 切换-溢出轨迹, 以及 1 px 表格行之间的分隔符。
- **暗色画** (`{colors.canvas-dark}` — `#010120`:品牌的暗黑首屏表面;出现在 `hero-band-dark` 和 `research-band-dark`.
- **细边线** (`{colors.hairline}` — `#ebebeb`): 1 px 光表面的分隔器——桌排、卡片界面框架、徽章边框。
- **黑暗的细边线** (`{colors.surface-dark-soft}` — `#26263a`): 1 px 显示分隔符和徽章背景 `{colors.canvas-dark}` 表面;由品牌的半透明-白色-暗色细边线预混合而成.
- **表面暗软** (`{colors.surface-dark-soft}` — `#313641`:暗带卡内使用稍轻的暗填.

### 文字颜色
- **墨水( 墨水 )** (`{colors.ink}` — `#000000`:光表面的每一个标题和身体段落.
- **Body** (`{colors.body}` — `#999999`): Secondary text — captions, table cell secondary values, footer link text. Pre-blended from the brand's translucent-black 40 % body color.
- **已静音** (`{colors.body}` — `#999999`:全能的,总和 mono-eyebrow 光面上的文字颜色也在这个符号上骑着——没有单独的"mute"音调,品牌保持了副文字与标题文本一致.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text on `{colors.canvas-dark}` surfaces.

### 语义色
The brand does not maintain a separate error / success palette in its public surface; validation cues use the primary black or the brand gradient depending on context. No explicit error red, success green, or warning yellow is documented here — adopting framework defaults is appropriate.

### 品牌渐变
The brand's signature decoration is a three-stop gradient drawn from `{colors.accent-orange}` → `{colors.accent-magenta}` → `{colors.accent-periwinkle}`, applied as the only piece of decorative chrome (the hero ribbon graphic). Treat the gradient as one unified object — do not crop it down to a single colour, do not reorder the stops, and do not add a fourth stop. Used at large scale; never miniaturised to icon size.


## 字体排版

### 字体族
整个系统由两个家庭负责:

1. **A custom geometric display sans** (extracted as `The Future`) for every headline, lead paragraph, body, button label that is not uppercase, and inline link. Weights 400 and 500 are the working pair; the face never appears in bold (700) or heavier. Tight negative letter-spacing (`-1.92 px` at 64 px display, `-0.16 px` at 16 px body) gives the face its slightly-condensed, poured-on-the-page feel.
2. **An uppercase mono caption face** (extracted as `PP Neue Montreal Mono`) for every eyebrow, button label, table-header cell, and pricing-table tab. Weight 500 at 11–16 px; always uppercase; positive letter-spacing (`0.05 – 0.55 px`). The mono carries the brand's technical voice — every label that says "PRICING", "INFERENCE", "MODEL", "GPU", "GA-DEC '25" is set in this face.

### 字号层级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 64px | 500 | 70.4px | -1.92px | 首屏头条("在AI土著云上建造下一步什么"). |
| `{typography.display-xl}` | 40px | 500 | 48px | -0.8px | 区头条新闻("The Together AI 平台,“开始在 Together AI"). |
| `{typography.display-lg}` | 28px | 500 | 32.2px | -0.42px | 副片头条和统计数字。 |
| `{typography.display-md}` | 22px | 500 | 25.3px | -0.22px | 牌号, research-card 标题。 |
| `{typography.body-lg}` | 18px | 400 | 23.4px | -0.18px | 标题下的主要段落。 |
| `{typography.body-lg-strong}` | 18px | 500 | 23.4px | -0.18px | 重点在主要段落内。 |
| `{typography.body-md}` | 16px | 400 | 20.8px | -0.16px | 默认正文段落. |
| `{typography.body-md-strong}` | 16px | 500 | 20.8px | -0.16px | 粗体内内脏. |
| `{typography.caption}` | 14px | 400 | 19.6px | 0 | 精细的指纹,页脚的副文本。 |
| `{typography.caption-strong}` | 14px | 500 | 19.6px | 0 | 粗体的字幕。 |
| `{typography.mono-caps-button}` | 16px | 500 | 16px | 0.08px | Primary button labels — uppercase, mono. |
| `{typography.mono-caps-eyebrow}` | 11px | 500 | 11px | 0.55px | 区划眉毛,桌头细胞标签. |
| `{typography.mono-caps-label}` | 11px | 500 | 15.4px | 0.055px | 文本上下文中的内嵌标签 。 |
| `{typography.mono-caption}` | 10px | 400 | 14px | 0.05px | Mono精细打印(内置代码编辑器模拟). |

### 原则
- **Two-face contrast is the voice.** Display sans for narrative; uppercase mono for technical labels. Never let the mono carry a paragraph; never let the display sans carry a button label.
- **负数 letter-spacing 只在展示的圣歌上。** 单面使用小正向跟踪;反转这个错误.
- **Headlines stay sentence-case.** Every uppercase moment belongs to the mono face. Mixing all-caps display would muddy the contrast.

### 替代字体
两种主要面孔是专有的。 开源替代:
- **Display sans** — *Inter* (400 / 500) with `font-feature-settings: "ss01"` enabled comes closest; tighten letter-spacing by ~0.6 % at display sizes to land on the brand's compressed feel. *Geist* is the second-best option but reads slightly wider.
- **Uppercase mono eyebrow** — *JetBrains Mono* or *Geist Mono* (weight 500) at 11 px with `text-transform: uppercase` matches the brand's voice once tracking is bumped to `0.04em`.


## 布局

### 间距系统
- **基地单位**: 4 px。几乎每个捕获值都是一个倍数。 4,但两个例外(7.2 px, 55.2 px),是差距乘法衍生物,而不是布局决定.
- **脚本**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px · `{spacing.4xl}` 44 px · `{spacing.5xl}` 48 px · `{spacing.6xl}` 55.2 px · `{spacing.section}` 80 px.
- **分区编栏**: 使用营销带 `{spacing.section}` 80 px 桌面上上下下。 主角和“ 研究” 暗带保留 80 px 节奏; 定价表收紧到 `{spacing.5xl}` 以保持密度数据可辨读性。
- **纸牌内部贴纸**: 研究卡和证照卡坐在那里 `{spacing.2xl}` 24 px 内部; stat-card 使用瓷砖 `{spacing.3xl}` 32 px 给大数字呼吸空间。
- **内含空档**: 按钮 + 导航行使用 `{spacing.md}` 12 px 兄弟姐妹之间; 使用芯片组 `{spacing.sm}` 8 px.

### 网格与容器
- **最大宽度**: ~1280 px 桌面容器; 任何超此选项。 内容中心水平沟槽 `{spacing.3xl}` 32 px 桌面上, `{spacing.lg}` 16 px 手机上,我刚从电话里找到的
- **列图案**:
  - Research / testimonial grids: 3-up at desktop, 1-up at mobile.
  - 硬盘 grid: 3-up at desktop, 1-up at mobile.
  - Article-card grid: 2-up at desktop, 1-up at mobile.
  - 定价数据表:全宽,移动式的模型行堆栈.
  - Hero: 50 / 50 split (headline left, ribbon graphic right) at desktop; stacked at mobile with graphic above.

### 留白规则
Surface contrast does most of the separation. A dark band ends → 80 px of breathing room → next light band begins. Inside a band, headline and lead paragraph hug close (`{spacing.lg}` 16 px between them), then a wider gap before the supporting visual or CTA cluster. Inside pricing data tables, the brand keeps rows tight (`{spacing.md}` 12 px vertical) — the table reads more like a sheet than a marketing component.

### 响应式布局

#### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile | < 479px | Hero stacks; nav collapses to hamburger; all multi-col grids drop to 1-up. |
| Mobile-Large | 479–767px | Same as Mobile; some tables enable horizontal scroll. |
| 平板 | 768–991px | 文章网格移动到 2- 上; 遗迹网格 3- 只有在容器内才能上 > 900 px,否则 1- 起来 |
| 桌面 | 992–1279px | 满 3- 上层研究网格, 2- 上条网格,首屏 50/50 分头。 |
| 桌面全长 | ≥ 1280px | 集装箱盖,在 1280 px; 组合在内容中心时保持颜色的边缘对角。 |

#### 触控区域
The mono-cap button label is set at 16 px; combined with `{spacing.xs}` 4 px top / bottom and a 24 px horizontal padding, the primary pill renders at roughly 32 px tall. On mobile viewports, button height is inflated to ≥ 44 px through extra vertical padding inside the touch row — meeting WCAG AAA. The circular icon button (`button-icon-circular`) renders at 44 × 44 px minimum at all viewports.

#### 窄屏布局调整
- **导航**:全链接行+黑色"签名"丸+桌面"开始"丸. 折叠到标志+移动时的汉堡;菜单作为全覆盖抽屉打开,垂直堆叠的链接列表相同.
- **Hero**: at desktop, headline left + gradient ribbon right (50 / 50). At mobile, headline stacks above a smaller-scale ribbon — never below.
- **Research band**: 4-up grid at desktop drops to 2-up at tablet, 1-up at mobile. Card chrome stays identical.
- **Pricing data table**: at desktop, full-width with all columns visible. At tablet, sub-tab row enables horizontal scroll. At mobile, cell rows stack model-name above price block.
- **Footer wordmark banner**: scales fluidly — the giant `together.ai` wordmark stays edge-to-edge regardless of viewport.

#### 图片适配
- **首屏丝带图形**:作为SVG制成,与首屏容器一起流畅地缩放;从不收割,从不重新定位.
- **证词肖像**平方或圆形 4:5 肖像画,硬画在顶部; 连续的方形框架横跨网格.
- **文章缩略图**: 16:9 样式,将卡片顶部填充 `{rounded.sm}` 画面上只有角落
- **标记栏**:客户标志在包装的弹性行中作为灰色比例的SVG渲染.


## 层次与深度

| 职等 | 治疗 | 使用 |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Most cards on light surfaces lean on hairline borders, not shadow. |
| 职等 1 —— 细边线 | 1 px 固态 `{colors.hairline}` 打开 `{colors.canvas}` 牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌 | 证证卡 物品卡 data-table 排行数. |
| 职等 2 - 黑暗的细边线 | 1 px 固态 `{colors.surface-dark-soft}` 打开 `{colors.canvas-dark}` 牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌,牌 | 研究带卡, on-dark 徽章,请检查url=值 (帮助). |
| 职等 3 软投篮 | `rgba(1, 1, 32, 0.1) 0px 4px 10px 0px` 几乎看不见的影子 与品牌的锡 dark-navy. | 浮点数元素(一个出现时的聊天发射器或圆形,粘着的底部导航行). |

### 装饰性深度
- **渐变丝带作为深度**:主角的三站梯度丝带是页面唯一真正的大气效应,它通过层层的半透明形状循环,暗示深度而不离开品牌调色板.
- **代码编辑器模拟为节点深度断开**: 暗码编辑器表面在否则-白色产品乐队内起到单步升降的作用,镜像首屏的极性翻转.
- **Wordmark banner as terminal depth**: the giant `together.ai` letters at the bottom are technically inside `{colors.canvas}` but tinted toward `{colors.hairline}` so they read as a faint stencil, giving the page a final "you have arrived" sign-off.


## 形状

### 圆角层级

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.none}` | 0px | 首屏 / 研究全血乐队; foper wordmark blag. |
| `{rounded.xs}` | 3.25px | 定价页略加收紧的子塔布和大纲按钮. |
| `{rounded.sm}` | 4px | 品牌的犬形半径——扣子,徽章,牌, data-table 排队, 块牌。 |
| `{rounded.md}` | 8px | "全高档云"部分内设特色塔布药,更大定价塔布容器. |
| `{rounded.full}` | 9999px | 浮式聊天发射器或( )`button-icon-circular`),系统内唯一一个完全溢出形状. |

### 图片形状
- **Hero ribbon**: SVG gradient, free-form; no aspect-ratio constraint.
- **客户标志**: 矢量,在一致高度下制成灰度(~24 px)在包装的弹性行中.
- **证词肖像**: 1:1 平方作物有硬角——无阿凡达药.
- **文章缩略图**: 16:9 配合 `{rounded.sm}` 4 px 仅图像上的顶角半径;卡片染色体保持正方形.


## 组件

### 按钮

**`button-primary`** 黑胶囊形,每服一次
- Background `{colors.primary}`, text `{colors.on-primary}`, label set in `{typography.mono-caps-button}` (uppercase mono, 16 px / 500 / 0.08 px tracking), shape `{rounded.sm}` 4 px, padding `{spacing.xs} {spacing.2xl}`. No shadow.

**`button-secondary-mint`** 首屏二级CTA胶囊形
- Background `{colors.accent-mint}`, text `{colors.ink}`, same typography and shape as `button-primary`. Only appears in hero contexts.

**`button-secondary-white`** 白药配对 `button-secondary-mint` 首屏的内心
- Background `{colors.canvas}`, text `{colors.ink}`, same typography and shape. Always sits adjacent to the mint or primary button.

**`button-ghost-on-dark`** ——暗黑首屏/研究表面上使用的半透明按钮.
- Background `{colors.surface-dark-soft}`, text `{colors.on-dark}`, shape `{rounded.sm}` 4 px. Used for "Read more" / "Watch the announcement" affordances on dark bands.

**`button-outline`** ——在定价页和特性切换中使用白对白大纲按钮.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, shape `{rounded.xs}` 3.25 px.

**`button-icon-circular`** ——每页右下方浮点滴的聊天发射器或圆形.
- Background `{colors.primary}`, white icon, shape `{rounded.full}`. The only fully-pill shape in the system.

### 卡片与容器

**`research-card`** - 电话 4- 黑暗的"前沿研究"乐队的电网卡
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, 1 px solid `{colors.surface-dark-soft}` border, padding `{spacing.2xl}`, shape `{rounded.sm}` 4 px. Inside: mono eyebrow tag + display headline + body paragraph.

**`testimonial-card`** - 电话 3- 上"AI原住民在 Together AI"牌头.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl}`, shape `{rounded.sm}` 4 px. Inside: 1:1 portrait crop + display-md name + body quote + mono caption stat row.

**`article-card`** - 电话 2- 上"有什么新情况" Together AI" 文章卡.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.2xl}`, shape `{rounded.sm}` 4 px. Inside: 16:9 image at top + mono eyebrow tag + display-md title + body summary + mono caption byline.

**`code-editor-mockup`** ——产品带内暗码预览表面.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, body in `{typography.mono-caption}`, padding `{spacing.2xl}`, shape `{rounded.sm}` 4 px. Window chrome stays minimal — no traffic-light dots, no title bar.

**`stats-card-tinted`** ——白色中段乐队上贴的贴心式的stat瓷砖(薄荷,桃子,柏里温克勒).
- Background `{colors.accent-mint}` (or sibling accent tints), text `{colors.ink}`, big number in `{typography.display-xl}` + label in `{typography.mono-caps-eyebrow}`, padding `{spacing.3xl}`, shape `{rounded.sm}` 4 px.

### 输入框与表单

**`text-input`** ——启动加速器申请表上的表单输入.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, body set in `{typography.body-md}`, shape `{rounded.sm}` 4 px.

### 导航

**`nav-bar`** - 电话 sticky 顶级导航
- Background `{colors.canvas-dark}` on the hero band, switches to `{colors.canvas}` once the user scrolls past the hero. Text `{colors.on-dark}` on dark, `{colors.ink}` on white. Layout: logo left, link row centre, "Contact sales" + "Sign in" right.

**`nav-link`** ——内侧中枢链接行 `nav-bar`.
- 文字颜色 `{colors.on-dark}` (或 减 减 ) `{colors.ink}` 滚动后),设置在 `{typography.body-md}` 400 重。链接与 `{spacing.2xl}` 24 px 兄弟姐妹之间。

**`footer`** ——底部( 下部) 4- 列队导航
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.section} {spacing.3xl}`. Eyebrow labels in `{typography.mono-caps-eyebrow}`; link rows in `{typography.body-md}`.

### 标志性组件

**`hero-band-dark`** ——暗海军首屏开启每张产品/营销页面.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.section} {spacing.3xl}`. Headline in `{typography.display-xxl}` (sentence case, never all-caps). Eyebrow in `{typography.mono-caps-eyebrow}`. Two-column layout: headline + CTA cluster on left, gradient ribbon SVG on right.

**`research-band-dark`** ——主持"环绕在前沿研究"的黑暗海军乐队. 4- 上卡网 - 上卡网 - Up card grade.
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, padding `{spacing.section} {spacing.3xl}`. Section headline in `{typography.display-xl}` followed by the `research-card` grid.

**`feature-tab-pill`** ——"全书·卷云"部分内附图胶囊形行.
- Background `{colors.canvas}`, text `{colors.ink}`, label in `{typography.body-md-strong}`, padding `{spacing.md} {spacing.2xl}`, shape `{rounded.md}` 8 px. Tab group sits on `{colors.hairline}` rail.

**`pricing-sub-tab`** ——定价页模型表(TEXT /VISION / IMAGE / AUDIO / VIDEO)中的二级标签行.
- Background `{colors.canvas}`, text `{colors.ink}`, label in `{typography.body-md}`, padding `{spacing.sm} {spacing.lg}`, shape `{rounded.xs}` 3.25 px.

**`data-table-row`** ——定价无服务器参考表内的模型行.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` bottom border, padding `{spacing.md} {spacing.lg}`. Inside: model icon + model name (display sans) + input cost cell + output cost cell.

**`data-table-header`** ——桌头行.
- Background `{colors.hairline}`, text `{colors.body}`, set in `{typography.mono-caps-eyebrow}` (uppercase mono), padding `{spacing.md} {spacing.lg}`.

**`toggle-pill-group`** ——微调表上方的"标准定价/批发定价"分块控制.
- Background `{colors.hairline}` rail, individual pills `{colors.canvas}` (inactive) or `{colors.primary}` (active), label in `{typography.mono-caps-button}`, shape `{rounded.sm}` 4 px, rail padding `{spacing.xs}`.

**`badge-neutral`** ——光表面的内含标记胶囊形.
- Background `{colors.hairline}`, text `{colors.ink}`, body in `{typography.body-md}`, 1 px solid `{colors.hairline}` border, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.sm}` 4 px.

**`badge-subtle-on-dark`** ——暗黑首屏/研究表面的内线标记胶囊形.
- Background `{colors.surface-dark-soft}`, text `{colors.on-dark}`, body in `{typography.body-md}`, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.sm}` 4 px.

**`footer-wordmark-banner`** — the massive `together.ai` wordmark at the bottom of every page.
- Background `{colors.canvas}`, wordmark colour `{colors.hairline}` (faint stencil tint), set in `{typography.display-xxl}` scaled fluidly to the viewport width. Edge-to-edge, square corners. Acts as the final page sign-off.

### 组合示例

> 以下组合场景由 `scripts/derive-examples-block.mjs` 生成。各 `ex-*` 条目复用品牌基础样式，供 `/preview-design` 和 `/generate-kit` 以统一风格呈现同一套 10 个示例。`TO_FILL` 提示有待核对的基础样式。

**`ex-pricing-tier`**：默认套餐卡，沿用功能卡结构和品牌 canvas-soft 底色。
- 属性 : `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`**：推荐套餐卡。浅色模式中用深底浅字，深色模式中用浅底深字。
- 属性 : `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`**：面向 SaaS / B2B 场景的套餐权益摘要卡。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`**：SaaS / B2B 订阅摘要，每个附加项单独列出。
- 属性 : `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`**：应用框架示例里的侧栏导航行，以品牌主色标识选中状态。
- 属性 : `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`**：数据表格中 th 与 td 的默认样式。表头采用大写等宽字，正文采用 body-sm。
- 属性 : `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`**：登录与注册卡，复用功能卡和 text-input。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`**：对话框表面，沿用功能卡样式并加浮层投影。
- 属性 : `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`**：空状态插图容器。
- 属性 : `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`**：轻提示，沿用功能卡圆角并使用中等投影。
- 属性 : `backgroundColor`, `rounded`, `padding`, `typography`



## 设计建议与禁忌

### 建议做法
- Reserve `{colors.primary}` (`#000000`) for every primary CTA. One black pill per visible viewport — that consistency is the brand's whole conversion story.
- 设置每个区域眉毛和按钮标签 `{typography.mono-caps-button}` / `{typography.mono-caps-eyebrow}` ——大写单数,正数跟踪.
- 标牌梯度对齐(`{colors.accent-orange}` → `{colors.accent-magenta}` → `{colors.accent-periwinkle}`),仅以首屏尺度表示. 梯度是品牌界面框架; 绝不缩窄到图标大小.
- 循环页面表面 `{colors.canvas-dark}` → `{colors.canvas}` → `{colors.canvas-dark}` 节奏;暗光对比比任何阴影都更能带高.
- Use `{rounded.sm}` 4 px as the canonical card / button radius across the system; reserve `{rounded.full}` for the single floating chat-launcher orb.
- Render the giant `together.ai` wordmark banner at the bottom of every long page in `{typography.display-xxl}`, tinted toward `{colors.hairline}` so it reads as a stencil — not as a heavy footer title.

### 应避免的做法
- Don't introduce a fifth accent colour. The three-stop gradient + mint pill is the entire decorative palette; new accents flatten the brand.
- Don't set body paragraphs in the mono face. The mono is for labels only; long-form mono reads as a console log, not as marketing copy.
- Don't centre-align body paragraphs under a left-aligned display headline. The brand keeps text-block alignment consistent within a copy stack.
- Don't drop a soft drop-shadow on light-surface cards. The brand uses hairlines and surface contrast for elevation; soft shadows belong only on the floating chat-launcher orb.
- Don't reduce the brand gradient to a single-colour fill, reorder its stops, or add a fourth stop. The gradient is a fixed object.
- Don't switch the primary button shape to a full pill `{rounded.full}`. The brand's CTA shape is a slightly-rounded rectangle, never a full pill.
- Don't set headlines in the all-caps mono. Every all-caps moment belongs to the mono face; every headline belongs to the display sans in sentence case.

## 设计词元原值

启发人们理解 Together AI'设计语言——AI基础设施平台,其表面替代在近黑首屏乐队(以三色橙色-马琴塔-佩里温克勒梯度作为品牌染色体的单片)和明亮的白色研究/定价/docs乐队之间,由定制显示色素和大写单眉脸进行织合.

```yaml
---
version: alpha
name: Together AI-design-analysis
description: An inspired interpretation of Together AI's design language — an AI infrastructure platform whose surface alternates between near-black hero bands (with a three-color orange-magenta-periwinkle gradient as the single piece of brand chrome) and bright white research / pricing / docs bands, knit together by a custom display sans and an uppercase mono eyebrow face.

colors:
  primary: "#000000"
  on-primary: "#ffffff"
  ink: "#000000"
  body: "#959494"
  hairline: "#959494"
  canvas: "#ffffff"
  canvas-dark: "#010120"
  surface-dark-soft: "#313641"
  on-dark: "#ffffff"
  accent-orange: "#fc4c02"
  accent-magenta: "#ef2cc1"
  accent-periwinkle: "#bdbbff"
  accent-mint: "#c8f6f9"

typography:
  display-xxl:
    fontFamily: The Future, Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 64px
    fontWeight: 500
    lineHeight: 70.4px
    letterSpacing: -1.92px
  display-xl:
    fontFamily: The Future, Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -0.8px
  display-lg:
    fontFamily: The Future, Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 28px
    fontWeight: 500
    lineHeight: 32.2px
    letterSpacing: -0.42px
  display-md:
    fontFamily: The Future, Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 22px
    fontWeight: 500
    lineHeight: 25.3px
    letterSpacing: -0.22px
  body-lg:
    fontFamily: The Future, Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 23.4px
    letterSpacing: -0.18px
  body-lg-strong:
    fontFamily: The Future, Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 23.4px
    letterSpacing: -0.18px
  body-md:
    fontFamily: The Future, Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 20.8px
    letterSpacing: -0.16px
  body-md-strong:
    fontFamily: The Future, Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20.8px
    letterSpacing: -0.16px
  caption:
    fontFamily: The Future, Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 19.6px
  caption-strong:
    fontFamily: The Future, Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 19.6px
  mono-caps-button:
    fontFamily: PP Neue Montreal Mono, ui-monospace, SF Mono, Menlo, monospace
    fontSize: 16px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.08px
  mono-caps-eyebrow:
    fontFamily: PP Neue Montreal Mono, ui-monospace, SF Mono, Menlo, monospace
    fontSize: 11px
    fontWeight: 500
    lineHeight: 11px
    letterSpacing: 0.55px
  mono-caps-label:
    fontFamily: PP Neue Montreal Mono, ui-monospace, SF Mono, Menlo, monospace
    fontSize: 11px
    fontWeight: 500
    lineHeight: 15.4px
    letterSpacing: 0.055px
  mono-caption:
    fontFamily: PP Neue Montreal Mono, ui-monospace, SF Mono, Menlo, monospace
    fontSize: 10px
    fontWeight: 400
    lineHeight: 14px
    letterSpacing: 0.05px

rounded:
  none: 0px
  xs: 3.25px
  sm: 4px
  md: 8px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 44px
  5xl: 48px
  6xl: 55.2px
  section: 80px

components:
  nav-bar:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    padding: "{spacing.lg} {spacing.3xl}"
  nav-link:
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.2xl}"
  button-secondary-mint:
    backgroundColor: "{colors.accent-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.2xl}"
  button-secondary-white:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.2xl}"
  button-ghost-on-dark:
    backgroundColor: "{colors.surface-dark-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.sm}"
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "rgba(0, 0, 0, 0.08)"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.xs}"
  button-icon-circular:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "rgba(0, 0, 0, 0.08)"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
  badge-neutral:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "rgba(0, 0, 0, 0.08)"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  badge-subtle-on-dark:
    backgroundColor: "{colors.surface-dark-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  hero-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xxl}"
    padding: "{spacing.section} {spacing.3xl}"
  research-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section} {spacing.3xl}"
  feature-tab-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md-strong}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.2xl}"
  pricing-sub-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "{spacing.sm} {spacing.lg}"
  stats-card-tinted:
    backgroundColor: "{colors.accent-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
  research-card:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    borderColor: "rgba(255, 255, 255, 0.12)"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  testimonial-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  article-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  code-editor-mockup:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.mono-caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  data-table-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "rgba(0, 0, 0, 0.08)"
    typography: "{typography.body-md}"
    padding: "{spacing.md} {spacing.lg}"
  data-table-header:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.mono-caps-eyebrow}"
    padding: "{spacing.md} {spacing.lg}"
  toggle-pill-group:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-caps-button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.section} {spacing.3xl}"
  footer-wordmark-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.display-xxl}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Mirrors article-card chrome on canvas-soft surface with a hairline border."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "rgba(0, 0, 0, 0.08)"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to canvas-dark with white text."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
  ex-product-selector:
    description: "What's Included summary card — repurposed for the brand's GPU / inference packaging tiers."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
  ex-cart-drawer:
    description: "Subscription summary — line items per add-on (NOT a literal e-commerce cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses brand primary as a left-edge indicator bar."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  ex-data-table-cell:
    description: "Mirrors the brand's pricing-page table. Header uses mono-caps-eyebrow uppercase; body uses body-md."
    headerBackground: "{colors.hairline}"
    headerTypography: "{typography.mono-caps-eyebrow}"
    bodyTypography: "{typography.body-md}"
    cellPadding: "{spacing.md} {spacing.lg}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Mirrors article-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as article-card; relies on tinted scrim instead of card shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.3xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame. Generous padding on canvas-soft surface."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.5xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — flat-cornered article-card chrome with a soft brand-tinted drop shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-md}"

---
```
