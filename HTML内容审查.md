# HTML 内容审查

## 首屏缩略图验收

运行 `python refresh_sample_navigation.py` 生成 85 张本地 WebP，逐一核对品牌路径和图像尺寸。离线抽看 Notion、Stripe、1win、Warp 和 Cal.com 的首屏结构，确认图中省去介绍正文，详情仍可阅读。桌面验证目录滚动、搜索、键盘进入、返回焦点和图片缺失回退。375px 验证搜索、下拉切换和三个预览标签。

## 按新版标准建立的修复清单

### 本轮修复结果

- 170 份中文实时样张复扫通过，连续 Q 和残留占位码均无命中。源句无法可靠还原时显示原文，其他品牌的英文单元格仍待逐格校订。
- HP 常规和深色样张的五行断点数据及四张层次卡已校订，保留原始断点和投影参数。常规样张在 1440px 和 375px 离线检查，页面宽度与 iframe 视口一致。
- 实时样张中空片段链接改为静态展示，目录和本地交互页面继续沿用既有路由。255 份归档哈希及 85 项双语下载字节通过核对。

### 初次扫描基线

按 [预览 HTML 编写与审查标准](预览HTML编写与审查标准.md) 扫描 174 份项目 HTML。以下数字按文件计数，同一文件可能命中多项。119 份英文单元格候选与 66 份占位链接需要结合源文或控件用途确认。

| 页面与模式 | 章节与元素 | 问题或结果 | 原文依据 | 验证方式 | 状态 |
| --- | --- | --- | --- | --- | --- |
| 86 份样张，含 HP 常规样张 | 正文与表格单元格 | 连续 Q 占位符。HP 出现在手机断点宽度旁。 | HP 归档的响应式布局表 | 全量正则扫描与截图复核 | 待修复 |
| 119 份样张，含 HP 常规样张 | 表格单元格 | 命中至少五个词的纯英文文本。HP 四行布局说明确认为英文残留。 | 对应品牌的英文归档表格 | 自动筛查，逐格语义复核待完成 | 待修复 |
| HP 常规样张 | 层次与深度四张卡 | 卡片名称、用途说明出现误译，需逐卡对照。 | 平面区、细边框、轻投影、浮层及原投影表达式 | 截图复核 | 待修复 |
| HP 常规样张 | 窄屏整体宽度 | iframe 内容宽 360px，视口 343px，需定位溢出元素。 | 原样张响应式规则与本项目窄屏标准 | 375px 离线实测 | 待修复 |
| 66 份项目页面 | `href="#"` 链接 | 逐项确认目录返回、静态占位或应提供目标的操作。 | 页面现有路由与原始链接 | 全量扫描 | 待修复 |
| 174 份项目页面 | ID 与静态片段链接 | 扫描无重复 ID 或缺失的非空片段目标。 | 当前 HTML 中的目标 ID | 全量静态扫描 | 通过 |
| 1win、HP、Together AI 常规样张 | 章节导航与核心内容 | 离线可加载。首个章节链接可通过键盘激活。 | 页面章节导航目标 | 1440px 与 375px 浏览器实测 | 通过 |
| 85 项品牌数据 | 源文件与双语数据 | 255 份归档哈希及 85 项双语下载字节一致。 | 归档索引与磁盘文件 | SHA-256 与字节比对 | 通过 |

技术值逐格比对、全量卡片语义、其他键盘控件及具体字体回退与素材影响仍需逐页复核。本轮浏览器记录的字体加载状态不代表每个品牌字体均可离线取得。

本次逐份登记 170 份中文样张和 3 个本地页面。170 份官网 HTML 作为章节、控件和样式对照，另校验 85 份 Markdown 原件。原件共 255 份，文件字节数与 SHA-256 均与归档索引一致。

## 校订办法

- 首屏标题使用目录风格名，系统说明按归档翻译。常规与深色归档说明有差异时，分别校订。
- 章节和控件沿用归档结构。CSS 色值、字体定义、断点、链接、资源地址及控件参数通过原件对照核验。展示文案用统一的中文术语描述词元、用途和状态。
- 定价、登录、数据表格等通用区块补充组件演示标识。组件参数和示例数据沿用归档。
- 用 `sample_overviews.py` 管理首屏译文，用 `sample_editorial.py` 和 `preview_copy.py` 管理场景说明及术语。执行 `localize_archive.py --html-only` 重新生成样张，随后重建样张导航。

## 验证结果

- 170 份中文样张和 3 个本地页面通过可见文案及本地化属性扫描。扫描包含解码占位符、连续标点和已知误译，如把经销商译成「毒贩」、把列数变化译成「上楼」。22 处连续占位字符已逐项查回英文原文并校订。
- 85 项中英文下载数据与各自磁盘文件一致。507 个导航锚点全部能定位到章节。归档 CSS 与本地样张继承的 CSS 一致。BMW 与 Starbucks 另有一组仅作用于窄屏的本地适配规则。
- 在 1440px 和 375px 离线打开六个重点风格的两种样张并检查首屏、按钮位置和表格区域。常规样张的首个章节链接可跳转。总览门户、BMW 详情、三个预览标签、本地交互试样及 Cal.com 独立页可打开。Dell 1996 的宽表格在自己的容器中横向滚动。
- 全量结果通过结构、参数与异常词扫描。逐句对照集中在下面六个风格的首屏和代表章节，其余页面仍可能出现未被规则识别的生硬译句。

| 风格 | 重点核对 |
| --- | --- |
| BMW | BMW 蓝、矩形按钮、700／300 字重对比及经销商筛选。修复窄屏通栏超出页面的问题。 |
| Claude | 米白底、珊瑚色主按钮、深海军蓝代码样机，以及源字体和预览替代字体。 |
| Airtable | 真实主操作色与蓝色链接词元的分工，色块区分，以及定价区字重和胶囊按钮。 |
| Dell 1996 | 黑色外框、目录色、条带式卡片，以及定价、购物车、表格演示。 |
| Starbucks | 分档品牌绿、字距、按下缩放、会员文案，以及常规和深色表面的差异。修复窄屏字号示例溢出。 |
| Stripe | 品牌与表面底色词元、输入框聚焦、间距基准，以及定价网格的列数变化。 |

## 本轮译文复审

复审覆盖 85 份中文 DESIGN 和 170 份 HTML 样张。生成器优先应用已核对的术语与连接词。Together AI 的「/ 01 / 配色」保留原分隔符与编号。

Warp 的卡片、输入框、标志性组件和组合示例，以及半岛电视台的栏目色条、直播时间轴和响应式说明已对照原文校订。核对了这些段落的色值、字体名、尺寸、断点和词元引用。

本轮按语境修正的条目为中文 DESIGN 181 处、HTML 100 处。共 28 项保留英文。原因包括词义需结合上下文判断，以及译文未通过技术原值检查。下列源句开头可用于定位。

<details>
<summary>保留英文的条目</summary>

- [apple/DESIGN.zh.md](localized/apple/DESIGN.zh.md)
  - A photography-first interface that turns marketing into a museum gallery. Edge-to-edge prod…（筛查项：铬）
- [binance/preview-dark.html](localized/binance/preview-dark.html)
  - Full top-nav; 5-col markets table; trading dashboards in 8/4 split (chart + side rail).（筛查项：铁路）
- [binance/preview.html](localized/binance/preview.html)
  - Full top-nav; 5-col markets table; trading dashboards in 8/4 split (chart + side rail).（筛查项：铁路）
- [dell-1996/preview-dark.html](localized/dell-1996/preview-dark.html)
  - An order-tracking console: a left account rail beside a status panel that pairs a horizonta…（筛查项：铁路）
- [dell-1996/preview.html](localized/dell-1996/preview.html)
  - An order-tracking console: a left account rail beside a status panel that pairs a horizonta…（筛查项：铁路）
- [figma/DESIGN.zh.md](localized/figma/DESIGN.zh.md)
  - Figma&#x27;s marketing canvas is, at the system level, an editor-clean black-and-white frame. Th…（筛查项：铬）
- [meta/preview-dark.html](localized/meta/preview-dark.html)
  - Mobile-first reflow: hero stacks, pill nav becomes hamburger, three-up grids flatten, PDP r…（筛查项：铁路）
  - Single column. Hero drops to display-lg. Pill tabs collapse to hamburger. PDP rail → sticky…（筛查项：铁路）
- [meta/preview.html](localized/meta/preview.html)
  - Mobile-first reflow: hero stacks, pill nav becomes hamburger, three-up grids flatten, PDP r…（筛查项：铁路）
  - Single column. Hero drops to display-lg. Pill tabs collapse to hamburger. PDP rail → sticky…（筛查项：铁路）
- [nerdwallet/DESIGN.zh.md](localized/nerdwallet/DESIGN.zh.md)
  - | Tablet | 768–1023px | Category rail scrolls horizontally; product cards keep their action…（筛查项：铁路）
- [nerdwallet/preview-dark.html](localized/nerdwallet/preview-dark.html)
  - Category rail scrolls horizontally; product cards keep their action column（筛查项：铁路）
- [nerdwallet/preview.html](localized/nerdwallet/preview.html)
  - Category rail scrolls horizontally; product cards keep their action column（筛查项：铁路）
- [nintendo-2001/DESIGN.zh.md](localized/nintendo-2001/DESIGN.zh.md)
  - **Carbon Navy** (`{colors.ink}` — #21242e): Primary text on light chrome, and the fill of t…（筛查项：铁路）
- [nintendo-2001/preview-dark.html](localized/nintendo-2001/preview-dark.html)
  - Darkest command slab — nav, rail, footer（筛查项：铁路）
- [nvidia/DESIGN.zh.md](localized/nvidia/DESIGN.zh.md)
  - NVIDIA&#x27;s type system is unusually flat: most chrome and body roles render at the same line-…（筛查项：铬）
  - The system&#x27;s most distinctive secondary CTA: a clear pane bordered in NVIDIA Green. Used fo…（筛查项：窗帘）
- [ollama/preview.html](localized/ollama/preview.html)
  - SF Pro Rounded for display, system sans for body, ui-monospace for code. The roundness of t…（筛查项：铬）
- [opencode.ai/DESIGN.zh.md](localized/opencode.ai/DESIGN.zh.md)
  - The chrome is austere: warm cream canvas (`{colors.canvas}` — `#fdfcfc` with a faint blush)…（筛查项：铬）
- [pinterest/preview.html](localized/pinterest/preview.html)
  - Pinterest Red primary, gray-cream secondary, transparent tertiary, plus pill-on-image and c…（筛查项：铬）
- [playstation/DESIGN.zh.md](localized/playstation/DESIGN.zh.md)
  - Used in the &quot;Great PS4 &amp; PS5 games&quot; rail and the PS5 games listing grid.（筛查项：铁路）
  - | desktop-small | 1024px | Game tile rail collapses to 3-up; sub-nav remains horizontal |（筛查项：铁路）
- [resend/DESIGN.zh.md](localized/resend/DESIGN.zh.md)
  - Resend&#x27;s marketing surfaces sit on a near-pure black canvas with off-white text and a singl…（筛查项：铬）
- [resend/preview-dark.html](localized/resend/preview-dark.html)
  - Surface-deep background with traffic-light chrome and a Geist Mono body. Tab strip pinned j…（筛查项：铬）
- [resend/preview.html](localized/resend/preview.html)
  - Surface-deep background with traffic-light chrome and a Geist Mono body. Tab strip pinned j…（筛查项：铬）
- [sentry/DESIGN.zh.md](localized/sentry/DESIGN.zh.md)
  - **Window-Chrome UI Mock** — product UI screenshots framed in `{rounded.xxl}` containers, of…（筛查项：铬）
- [theverge/DESIGN.zh.md](localized/theverge/DESIGN.zh.md)
  - **Column patterns**: a 12-column underlying grid that resolves into 3-column hero + 1-colum…（筛查项：铁路）
  - Stacked vertically with 12–16px gap, the rail continuing between them（筛查项：铁路）

</details>

全部生成结果复扫本轮词表。255 份归档哈希通过，85 项中英文阅读区与下载数据一致。桌面与 375px 离线抽查 Warp、1win、Together AI、半岛电视台和 Cal.com，验证章节导航、阅读与下载。

## 平台类型示例

场景复审覆盖 58 个通用试样，其中 38 份使用三列卡片。14 份产品或服务选项已移除旧的套餐和价格说明。无目标的按钮与占位链接改为静态展示，Dell 三列卡片链接到同页装机配置，表格勾选和表单输入仍可操作。

Dell 1996 的场景围绕 Dimension XPS Pro 与 DT-XPS-P166，Notion 的场景围绕产品手册工作区。1440px 与 375px 离线复核了 Dell 1996、Notion、Warp、Stripe、Uber 和 Framer。255 份归档、85 项中英文下载和本地交互样张通过字节核对。

85 项已登记平台类型。170 份样张中共替换 100 处共享四栏页脚及 58 个通用场景。保留原有 CSS、品牌代表场景和导航锚点。归档原件、中英文下载及本地交互样张经过字节核对。

在 1440px 与 375px 离线抽查 Framer、Cal.com、BMW、半岛电视台和 Dell 1996。核对页脚栏目、章节跳转、Dell 电脑配置与数据表勾选，以及 Framer 双语下载。

## 本地页面

| 页面 | 审查记录 |
| --- | --- |
| [总览和品牌详情](preview.html) | 检查门户说明、出处描述、文档标签和样张入口。核对 85 个品牌的中英文下载数据。 |
| [本地交互试样](local-preview.html) | 检查首屏、章节导航、通用场景说明、按钮和表单反馈。定价、账号和表格旁标注本地演示。 |
| [Cal.com 独立样张](design-md/cal/preview.html) | 检查首屏、章节导览、预约示例说明及控件，保留规范与演示的对应关系。 |

## 中文样张逐份登记

自动检查共覆盖 3243 个章节标题、2873 个控件、98 条演示标识和 507 个导航链接。每个文件后的三个数字依次为章节标题、控件和演示标识数。首屏标题与目录风格名一致。扫描范围包含可见文案和本地化属性。

| 风格 | 常规样张 | 深色归档样张 | 首屏处理 |
| --- | --- | --- | --- |
| 深灰底与荧光绿 | [preview.html](localized/1win/preview.html) · 12/7/0 | [preview-dark.html](localized/1win/preview-dark.html) · 12/7/0 | 共用说明 |
| 珊瑚红与生活摄影 | [preview.html](localized/airbnb/preview.html) · 22/15/0 | [preview-dark.html](localized/airbnb/preview-dark.html) · 22/15/0 | 共用说明 |
| 多彩模块编辑风 | [preview.html](localized/airtable/preview.html) · 28/24/0 | [preview-dark.html](localized/airtable/preview-dark.html) · 28/24/0 | 共用说明 |
| 高密度新闻版式 | [preview.html](localized/aljazeera/preview.html) · 10/7/0 | [preview-dark.html](localized/aljazeera/preview-dark.html) · 10/7/0 | 共用说明 |
| 留白与产品摄影 | [preview.html](localized/apple/preview.html) · 18/34/0 | [preview-dark.html](localized/apple/preview-dark.html) · 18/34/0 | 共用说明 |
| 黑底金黄交易台 | [preview.html](localized/binance/preview.html) · 27/20/0 | [preview-dark.html](localized/binance/preview-dark.html) · 27/20/0 | 共用说明 |
| 企业蓝汽车图册 | [preview.html](localized/bmw/preview.html) · 20/37/0 | [preview-dark.html](localized/bmw/preview-dark.html) · 20/37/0 | 共用说明 |
| 黑底三色赛车风 | [preview.html](localized/bmw-m/preview.html) · 24/19/0 | [preview-dark.html](localized/bmw-m/preview-dark.html) · 24/19/0 | 共用说明 |
| 近黑底与疏排大字 | [preview.html](localized/bugatti/preview.html) · 16/13/0 | [preview-dark.html](localized/bugatti/preview-dark.html) · 16/13/0 | 共用说明 |
| 黑白极简预约 | [preview.html](localized/cal/preview.html) · 17/17/0 | [preview-dark.html](localized/cal/preview-dark.html) · 17/17/0 | 共用说明 |
| 暖纸色编辑风 | [preview.html](localized/claude/preview.html) · 20/19/0 | [preview-dark.html](localized/claude/preview-dark.html) · 20/19/0 | 共用说明 |
| 彩色黏土插画 | [preview.html](localized/clay/preview.html) · 18/17/0 | [preview-dark.html](localized/clay/preview-dark.html) · 18/17/0 | 共用说明 |
| 亮黄与技术排版 | [preview.html](localized/clickhouse/preview.html) · 17/18/0 | [preview-dark.html](localized/clickhouse/preview-dark.html) · 17/18/0 | 共用说明 |
| 白底与深绿产品块 | [preview.html](localized/cohere/preview.html) · 19/12/0 | [preview-dark.html](localized/cohere/preview-dark.html) · 19/12/0 | 共用说明 |
| 清晰蓝白金融界面 | [preview.html](localized/coinbase/preview.html) · 21/21/2 | [preview-dark.html](localized/coinbase/preview-dark.html) · 21/21/2 | 共用说明 |
| 深色底与电光蓝 | [preview.html](localized/composio/preview.html) · 18/13/0 | [preview-dark.html](localized/composio/preview-dark.html) · 18/13/0 | 共用说明 |
| 暖白橙色开发者风 | [preview.html](localized/cursor/preview.html) · 21/16/0 | [preview-dark.html](localized/cursor/preview-dark.html) · 21/16/0 | 共用说明 |
| 九十年代目录风 | [preview.html](localized/dell-1996/preview.html) · 36/52/8 | [preview-dark.html](localized/dell-1996/preview-dark.html) · 36/52/8 | 共用说明 |
| 深靛蓝游戏社区风 | [preview.html](localized/discord/preview.html) · 13/11/1 | [preview-dark.html](localized/discord/preview-dark.html) · 13/11/1 | 单独说明 |
| 影棚式设备陈列 | [preview.html](localized/dji/preview.html) · 12/2/1 | [preview-dark.html](localized/dji/preview-dark.html) · 12/2/1 | 单独说明 |
| 暖白与柔和渐变球体 | [preview.html](localized/elevenlabs/preview.html) · 22/20/0 | [preview-dark.html](localized/elevenlabs/preview-dark.html) · 22/20/0 | 共用说明 |
| 白底天蓝光晕 | [preview.html](localized/expo/preview.html) · 22/15/0 | [preview-dark.html](localized/expo/preview-dark.html) · 22/15/0 | 共用说明 |
| 高反差摄影与赛车红 | [preview.html](localized/ferrari/preview.html) · 22/14/0 | [preview-dark.html](localized/ferrari/preview-dark.html) · 22/14/0 | 共用说明 |
| 黑白框架与浅彩色块 | [preview.html](localized/figma/preview.html) · 17/26/0 | [preview-dark.html](localized/figma/preview-dark.html) · 17/26/0 | 单独说明 |
| 蓝黑反差与动效 | [preview.html](localized/framer/preview.html) · 14/23/0 | [preview-dark.html](localized/framer/preview-dark.html) · 14/23/0 | 共用说明 |
| 深色多强调色技术界面 | [preview.html](localized/hashicorp/preview.html) · 19/19/0 | [preview-dark.html](localized/hashicorp/preview-dark.html) · 19/19/0 | 共用说明 |
| 蓝白棱角设备目录 | [preview.html](localized/hp/preview.html) · 26/23/0 | [preview-dark.html](localized/hp/preview-dark.html) · 26/23/0 | 共用说明 |
| 企业蓝与结构网格 | [preview.html](localized/ibm/preview.html) · 15/16/0 | [preview-dark.html](localized/ibm/preview-dark.html) · 15/16/0 | 共用说明 |
| 暖白底与 Fin 橙 | [preview.html](localized/intercom/preview.html) · 12/21/0 | [preview-dark.html](localized/intercom/preview-dark.html) · 12/21/0 | 共用说明 |
| 薄荷色底与黑色胶囊 | [preview.html](localized/jobright/preview.html) · 12/7/0 | [preview-dark.html](localized/jobright/preview-dark.html) · 12/7/0 | 共用说明 |
| 白底品牌紫交易界面 | [preview.html](localized/kraken/preview.html) · 11/4/0 | [preview-dark.html](localized/kraken/preview-dark.html) · 11/4/0 | 共用说明 |
| 纯黑与金色奢华 | [preview.html](localized/lamborghini/preview.html) · 8/4/0 | [preview-dark.html](localized/lamborghini/preview-dark.html) · 8/4/0 | 共用说明 |
| 近黑底与淡紫细节 | [preview.html](localized/linear.app/preview.html) · 11/21/0 | [preview-dark.html](localized/linear.app/preview-dark.html) · 11/21/0 | 共用说明 |
| 奶油色纸感 | [preview.html](localized/lovable/preview.html) · 11/5/0 | [preview-dark.html](localized/lovable/preview-dark.html) · 11/5/0 | 共用说明 |
| 暖底与圆环形构图 | [preview.html](localized/mastercard/preview.html) · 16/9/0 | [preview-dark.html](localized/mastercard/preview-dark.html) · 16/9/0 | 单独说明 |
| 深墨紫金融界面 | [preview.html](localized/mercury/preview.html) · 9/2/0 | [preview-dark.html](localized/mercury/preview-dark.html) · 9/2/0 | 单独说明 |
| 摄影优先的明暗分区 | [preview.html](localized/meta/preview.html) · 30/16/1 | [preview-dark.html](localized/meta/preview-dark.html) · 30/16/1 | 共用说明 |
| 白底与鲜亮渐变卡 | [preview.html](localized/minimax/preview.html) · 35/21/1 | [preview-dark.html](localized/minimax/preview-dark.html) · 35/21/1 | 共用说明 |
| 绿色强调的阅读版式 | [preview.html](localized/mintlify/preview.html) · 36/29/2 | [preview-dark.html](localized/mintlify/preview-dark.html) · 36/29/2 | 共用说明 |
| 亮黄协作画布 | [preview.html](localized/miro/preview.html) · 33/29/2 | [preview-dark.html](localized/miro/preview-dark.html) · 33/29/2 | 共用说明 |
| 落日渐变与暖米白 | [preview.html](localized/mistral.ai/preview.html) · 37/26/1 | [preview-dark.html](localized/mistral.ai/preview-dark.html) · 37/26/1 | 共用说明 |
| 深海蓝与品牌绿 | [preview.html](localized/mongodb/preview.html) · 35/30/2 | [preview-dark.html](localized/mongodb/preview-dark.html) · 35/30/2 | 共用说明 |
| 密集折扣信息流 | [preview.html](localized/mydealz/preview.html) · 13/8/0 | [preview-dark.html](localized/mydealz/preview-dark.html) · 13/8/0 | 单独说明 |
| 云杉绿与金融对照 | [preview.html](localized/nerdwallet/preview.html) · 20/7/0 | [preview-dark.html](localized/nerdwallet/preview-dark.html) · 20/7/0 | 单独说明 |
| 重字与通栏运动摄影 | [preview.html](localized/nike/preview.html) · 17/19/0 | [preview-dark.html](localized/nike/preview-dark.html) · 17/19/0 | 单独说明 |
| 千禧年金属主机风 | [preview.html](localized/nintendo-2001/preview.html) · 13/10/0 | [preview-dark.html](localized/nintendo-2001/preview-dark.html) · 13/10/0 | 单独说明 |
| 纸白与多彩贴纸 | [preview.html](localized/notion/preview.html) · 24/51/7 | [preview-dark.html](localized/notion/preview-dark.html) · 24/51/7 | 共用说明 |
| 深色底与计算绿 | [preview.html](localized/nvidia/preview.html) · 24/23/0 | [preview-dark.html](localized/nvidia/preview-dark.html) · 24/23/0 | 单独说明 |
| 单色等宽终端 | [preview.html](localized/ollama/preview.html) · 13/14/0 | [preview-dark.html](localized/ollama/preview-dark.html) · 13/14/0 | 单独说明 |
| 暖米白等宽版式 | [preview.html](localized/opencode.ai/preview.html) · 13/15/0 | [preview-dark.html](localized/opencode.ai/preview-dark.html) · 13/15/0 | 单独说明 |
| 暖中性色企业界面 | [preview.html](localized/oracle/preview.html) · 13/12/0 | [preview-dark.html](localized/oracle/preview-dark.html) · 13/12/0 | 共用说明 |
| 暖纸底与衬线标题 | [preview.html](localized/oura/preview.html) · 12/8/0 | [preview-dark.html](localized/oura/preview-dark.html) · 12/8/0 | 单独说明 |
| 红色强调的图片瀑布流 | [preview.html](localized/pinterest/preview.html) · 18/26/0 | [preview-dark.html](localized/pinterest/preview-dark.html) · 18/26/0 | 单独说明 |
| 冷色层叠主机界面 | [preview.html](localized/playstation/preview.html) · 17/26/0 | [preview-dark.html](localized/playstation/preview-dark.html) · 17/25/0 | 单独说明 |
| 暖底手绘分析界面 | [preview.html](localized/posthog/preview.html) · 13/29/0 | [preview-dark.html](localized/posthog/preview-dark.html) · 13/29/0 | 单独说明 |
| 深底细线命令面板 | [preview.html](localized/raycast/preview.html) · 17/24/0 | [preview-dark.html](localized/raycast/preview-dark.html) · 17/24/0 | 共用说明 |
| 黑白汽车版式与亮黄 | [preview.html](localized/renault/preview.html) · 17/19/0 | [preview-dark.html](localized/renault/preview-dark.html) · 17/19/0 | 共用说明 |
| 暖底亮橙开发者风 | [preview.html](localized/replicate/preview.html) · 11/18/1 | [preview-dark.html](localized/replicate/preview-dark.html) · 11/18/1 | 共用说明 |
| 深色留白与大衬线标题 | [preview.html](localized/resend/preview.html) · 16/15/1 | [preview-dark.html](localized/resend/preview-dark.html) · 16/15/1 | 共用说明 |
| 黑底钴蓝紫金融风 | [preview.html](localized/revolut/preview.html) · 19/19/0 | [preview-dark.html](localized/revolut/preview-dark.html) · 19/19/0 | 共用说明 |
| 电影摄影与编辑式黑白 | [preview.html](localized/runwayml/preview.html) · 15/15/1 | [preview-dark.html](localized/runwayml/preview-dark.html) · 15/15/1 | 共用说明 |
| 红色强调的内容版式 | [preview.html](localized/sanity/preview.html) · 18/21/1 | [preview-dark.html](localized/sanity/preview-dark.html) · 18/21/1 | 共用说明 |
| 白底与企业蓝区块 | [preview.html](localized/sap/preview.html) · 12/7/0 | [preview-dark.html](localized/sap/preview-dark.html) · 12/7/0 | 共用说明 |
| 深紫背景与电光绿插画 | [preview.html](localized/sentry/preview.html) · 25/20/1 | [preview-dark.html](localized/sentry/preview-dark.html) · 25/20/1 | 共用说明 |
| 电影感深色与亮绿 | [preview.html](localized/shopify/preview.html) · 25/16/1 | [preview-dark.html](localized/shopify/preview-dark.html) · 25/16/1 | 共用说明 |
| 茄紫与暖浅色渐变 | [preview.html](localized/slack/preview.html) · 16/14/0 | [preview-dark.html](localized/slack/preview-dark.html) · 16/14/0 | 共用说明 |
| 黑白通栏航天摄影 | [preview.html](localized/spacex/preview.html) · 17/17/1 | [preview-dark.html](localized/spacex/preview-dark.html) · 17/17/1 | 共用说明 |
| 黑绿对比与专辑封面 | [preview.html](localized/spotify/preview.html) · 12/4/0 | [preview-dark.html](localized/spotify/preview-dark.html) · 12/4/0 | 共用说明 |
| 暖米白与四阶品牌绿 | [preview.html](localized/starbucks/preview.html) · 38/22/1 | [preview-dark.html](localized/starbucks/preview-dark.html) · 37/18/1 | 单独说明 |
| 紫色渐变与轻字重 | [preview.html](localized/stripe/preview.html) · 17/17/1 | [preview-dark.html](localized/stripe/preview-dark.html) · 17/17/1 | 共用说明 |
| 黑白表面与翠绿操作 | [preview.html](localized/supabase/preview.html) · 17/17/1 | [preview-dark.html](localized/supabase/preview-dark.html) · 17/17/1 | 共用说明 |
| 深色紫光与键盘导向 | [preview.html](localized/superhuman/preview.html) · 17/17/1 | [preview-dark.html](localized/superhuman/preview-dark.html) · 17/17/1 | 共用说明 |
| 全屏摄影与精简控件 | [preview.html](localized/tesla/preview.html) · 8/7/0 | [preview-dark.html](localized/tesla/preview-dark.html) · 8/7/0 | 共用说明 |
| 荧光配色的杂志版式 | [preview.html](localized/theverge/preview.html) · 17/11/0 | [preview-dark.html](localized/theverge/preview-dark.html) · 17/11/0 | 共用说明 |
| 近黑底与暖色光效 | [preview.html](localized/together.ai/preview.html) · 17/24/1 | [preview-dark.html](localized/together.ai/preview-dark.html) · 17/24/1 | 单独说明 |
| 黑白图文与通栏摄影 | [preview.html](localized/uber/preview.html) · 33/28/1 | [preview-dark.html](localized/uber/preview-dark.html) · 33/28/1 | 共用说明 |
| 黑白细线技术网格 | [preview.html](localized/vercel/preview.html) · 12/8/0 | [preview-dark.html](localized/vercel/preview-dark.html) · 12/8/0 | 共用说明 |
| 品牌红与重字标题 | [preview.html](localized/vodafone/preview.html) · 22/12/1 | [preview-dark.html](localized/vodafone/preview-dark.html) · 22/12/1 | 共用说明 |
| 纯黑底与翠绿终端风 | [preview.html](localized/voltagent/preview.html) · 19/7/1 | [preview-dark.html](localized/voltagent/preview-dark.html) · 19/7/1 | 单独说明 |
| 深色细线终端 | [preview.html](localized/warp/preview.html) · 17/8/1 | [preview-dark.html](localized/warp/preview-dark.html) · 17/8/1 | 共用说明 |
| 黑白基础与多色分区 | [preview.html](localized/webflow/preview.html) · 26/11/1 | [preview-dark.html](localized/webflow/preview-dark.html) · 26/11/1 | 共用说明 |
| 报刊栏式与墨蓝链接 | [preview.html](localized/wired/preview.html) · 23/8/1 | [preview-dark.html](localized/wired/preview-dark.html) · 23/8/1 | 共用说明 |
| 鼠尾草浅底与亮绿操作 | [preview.html](localized/wise/preview.html) · 25/15/1 | [preview-dark.html](localized/wise/preview-dark.html) · 25/15/1 | 共用说明 |
| 大尺度黑白科技风 | [preview.html](localized/x.ai/preview.html) · 19/9/1 | [preview-dark.html](localized/x.ai/preview-dark.html) · 19/9/1 | 共用说明 |
| 暖白底与亮橙插画 | [preview.html](localized/zapier/preview.html) · 23/7/1 | [preview-dark.html](localized/zapier/preview-dark.html) · 23/7/1 | 共用说明 |
