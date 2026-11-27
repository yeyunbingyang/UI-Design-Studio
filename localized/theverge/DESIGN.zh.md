# The Verge · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。

# 设计系统灵感来自 The Verge


## 1。视觉主题和大气

The Verge's 2024 重新设计感觉像一个人 wired 康德纳斯特杂志到晶体调制音板。页面底色几乎是黑色的(`#131313`头条是用一个残酷的 沉重的展示面孔(马努卡) 来打造的,直到 107px,整个页面被酸薄荷胡椒 `#3cffd0` 和紫外线 `#5200ff` 表现得不像品牌颜色 更像危险带 故事牌不是静态的灰色牌——它们是饱和的,满血的颜色块(黄,粉,橙,蓝,紫),感觉像贴上彩色的狂欢传单排列成一个时间表. 心情是"开发者控制台与俱乐部之夜相遇技术小报":严肃到足以覆盖国会听证会,声音足够大,足以审查合成器.

What makes this system unmistakable is the **StoryStream** timeline: a vertical feed where every post is a rounded rectangle — often 20–40px radius — filled edge-to-edge with color, framed by a thin border, and marked by a mono-uppercase timestamp on its left rail. Stories don't float on a grid; they stack on a dashed vertical rule like commits in a git log. Above that, a massive **"The Verge" wordmark** dominates the masthead in Manuka at hero scale, letting the reader know before any headline loads that this is editorial territory, not a template.

There is no "light mode" on the homepage — the dark canvas is the product, and the only time the palette inverts is when a single story tile takes a mint or yellow fill. The depth is almost entirely flat: **hairline 1px borders** (`#ffffff`, `#3cffd0`, or `#5200ff`) do the work that shadows would do on a Material-flavored site. Every container is either `#131313` with a 1px outline, a fully saturated accent block, or a slate-gray `#2d2d2d` secondary surface.

**关键特征 :**
- 近黑编辑布(`#131313`)作为默认表面——主页上没有光模式
- 酸性薄荷 `#3cffd0` + 紫外线 `#5200ff` 永远不要安静的背景洗涤
- 大规模 Manuka 显示头条标题至 107px ——主流科技媒体中唯一最响亮的类动作.
- 圆形胶囊形卡: 20/24/30/40px 光线角,永远不要平方
- 黑色页面上充满饱和的彩块故事瓦片(薄荷、紫色、黄色、粉红色、橙色、电动蓝色)
- 时光网上"故事史诗"的资料(简体中文) 单大写时间戳而非传统杂志网格
- 平缓深度 —— 1px 白薄荷、紫色的边框 做影子在别处的工作


## 2. Color Palette & Roles

### 小学(Brand 危险)
- **薄荷糖( 果糖)** (`#3cffd0`): The Verge标记酸薄膜强调色。 用作 CTA 按钮填充、 链接下划线、 活动标签边框、 以及高关注度的故事- 砖背景 。 把它当作霓虹安全涂料的视觉等效物 。 缓缓地应用于屏幕上最重要的元素 。
- **紫外线** (`#5200ff`: 互补品牌危险。用于二次颜色块牌、促销跨度和偶尔的概述按钮。 0.9 α以软化阴极强度.

### 中学和中学
- **控制台密尔特边框** (`#309875`:卡片轮廓和按钮边框上使用的果冻薄荷的更暗变体,纯薄荷会过饱和.
- **深链接蓝色** (`#3860be`: 链接 *悬浮* 颜色——一瞬间蓝色出现在站点上,它取代了在每一个链接样式上徘徊的薄荷/白/黑.
- **聚焦青春** (`#1eaedb`: 预留按钮焦点环。从未在键盘焦点状态之外显示 。
- **紫色规则** (`#3d00bf`: 一种较深的紫外线变体,用作StoryStream上的垂直边框 `<li>` 项目。

### 表面背景( B)
- **黑漆漆的画像** (`#131313`:整个主页的默认暗面,几乎是但并不完全纯黑的——只有足够温暖的感受,可以像印刷的新闻印刷负数而不是OLED空穴.
- **表面板块** (`#2d2d2d`:二级牌背景,当故事牌不需要是饱和的彩色块时使用.
- **Image Frame** (`#313131`): The 1px border that wraps inline imagery.
- **危险白色** (`#ffffff`: 用作故事片填充,按钮边框,以及主文本,当白色作为大块出现时,是一个编辑决定——在那个砖块上"点亮".
- **Absolute 黑色** (`#000000`:保留在薄荷/黄/白瓷砖上的文字——唯一出现的地方.

### 中立文本( T)
- **初级文本** (`#ffffff`:头条和显示在页面底色上的文字.
- **次要文本** (`#949494`: 旁线, 时间戳, 照片记分。 中线锁定元数据层的中线 。
- **静音文本** (`#e9e9e9`: 暗板按钮上的按钮文本,略为脱白以减少屏幕的光泽.
- **倒转文本** (`#131313`:仅用于强调色瓦片(薄荷,黄,白),以保持对比可辨.

### 语义和调值
- **焦点环** (`#1eaedb`:只关注键盘.
- **重叠黑色** (`rgba(0, 0, 0, 0.33)`: 浅色 1px 环作为堆叠牌上静静的阴影替代物.
- **暗灰色** (`#8c8c8c`:主动/按下按钮背景——"压下"状态.

### 渐变系统
The Verge uses **zero decorative gradients**. The only gradient-like treatment is the transition from a saturated accent story tile (mint/purple/yellow) back to the `#131313` canvas between rows. Color is applied in solid blocks, not as washes. This is a deliberate choice — the site's hazard-tape visual identity would dissolve if anything faded.


## 3. 字法规则

### 字体族
- **Manuka** (Klim Type Foundry) — fallback: Impact, Helvetica. The signature display face for The Verge wordmark and feature headlines. A heavy-weight (900) industrial sans-serif with a condensed, almost-athletic stance. Runs at 60–107px on the homepage, never smaller.
- **聚三联体** (潘格拉姆·潘格拉姆 / 尼古拉斯·弗罗贝尔)——倒计时: Helvetica, Arial。UI和二级头条工作马。覆盖加权数 300 / 500 / 700 整个系统从踢球手的字幕到甲板
- **单体保利桑斯** ——倒置:Courier New,Courier. 单间兄弟,专用于ALL-CAPS标签:踢球手,时间戳,分类标签,按钮标签,这种单间上架的使用是继Manuka之后第二可识别的Verge细节.
- **FK 罗马标准** (弗洛里安·卡斯腾)——倒计时: Georgia. A serif 用于特定的身体/封装处理(文章节选,某些检讨拉动)。在 PolySans 堆栈中添加“打印-磁场”反点。
- **Roboto** ——倒计时: `-apple-system`, `system-ui`。用于部件和遗留模块的用户界面字体。

### 字号层级

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| 首屏文字标记/ 显示 | 玛努卡 | 107px / 6.69rem | 900 | 0.80 | 1.07px | 顶版版 "The Verge" 标志和专题头条 |
| 二级显示 | 玛努卡 | 90px / 5.63rem | 900 | 0.80 | — | 科级专题头条 |
| Tertiary Display | Manuka | 60px / 3.75rem | 900 | 0.80 | — | Inline feature callouts |
| Large Headline | PolySans | 34px / 2.13rem | 700 | 1.00 | — | Section and module headlines |
| Heading Wide | PolySans | 32px / 2.00rem | 400 | 1.10 | 0.32px | Sub-heroes, promotional units |
| Heading Medium | PolySans | 24px / 1.50rem | 700 | 1.00 | — | Story tile headlines in the main feed |
| 标题小 | 聚三联体 | 20px / 1.25rem | 700 | 1.00 | — | 压缩瓦片头条 |
| 轻写标签 | 聚三联体 | 19px / 1.19rem | 300 | 1.20 | 1.9px | 瘦小的资本化眉毛——一个独特的Verge动作 |
| All-Caps Label XL | PolySans | 18px / 1.13rem | 400 | 1.10 | 1.8px | UPPERCASE section kickers |
| 粗体体 | 聚三联体 | 16px / 1.00rem | 700 | 1.00 | — | 甲板内加亮度 |
| 身体放松了 身体放松了 | 聚三联体 | 16px / 1.00rem | 500 | 1.60 | — | 长形读体 |
| 内置标签 | 聚三联体 | 15px / 0.94rem | 400 | 1.20 | 0.15px | 用户界面标签和次要头条 |
| 体形契约 | 聚三联体 | 13px / 0.81rem | 400 | 1.60 | — | 次要标题和甲板 |
| 眉毛全张 | 聚三联体 | 12px / 0.75rem | 400 | 1.30 | 1.8px | UPPERCASE 上方的纸牌头条 |
| 标签 | 聚三联体 | 12px / 0.75rem | 400 | 1.20 | 0.72px | UPPERCASE 分类标签 |
| 标题微 | 聚三联体 | 11px / 0.69rem | 400 | 1.20 | 1.1px | 上层线条 |
| Meta 纳诺 | 聚三联体 | 10px / 0.63rem | 500 | 1.40 | 1.5px | UPPERCASE 时间戳微文本 |
| 单按钮标签 | 单体保利桑斯 | 12px / 0.75rem | 600 | 2.00 | 1.5px | UPPERCASE 按钮文本, 打开的线索 |
| 单时标 | 单体保利桑斯 | 11px / 0.69rem | 500/600 | 1.20 | 1.1–1.8px | UPPERCASE 故事结构时标 |
| Serif Body | FK Roman Standard | 16px / 1.00rem | 400 | 1.30 | -0.16px | Review decks, print-voice excerpts |
| Serif 说明 | FK 罗马标准 | 20px / 1.25rem | 400 | 1.20 | — | 杂志式的拉引号 |

### 原则
- **Manuka is always the hero, never the UI.** If you see Manuka below 60px you're looking at a bug. It exists to *shout the brand*, not to label a button.
- **PolySans is the workhorse, PolySans Mono is its uniformed sibling.** Mono is used exclusively for UPPERCASE labels, timestamps, tags, and certain buttons. Lowercase mono doesn't exist in this system.
- **Thin-weight (300) capitalized headlines** are a signature Verge move. The 19–20px weight-300 with 1.9px tracking creates a "fashion magazine whisper" that contrasts with the 107px Manuka shout above it. This whisper-vs-shout contrast is the typographic fingerprint.
- **Letter-spacing has two registers**: positive (0.72–1.9px) for ALL-CAPS mono and sans labels, negative (`-0.16px`) for the rare serif appearances, barely-positive (0.32px, 1.07px) for massive display. Plain 0 letter-spacing is rare.
- **FK罗马标准是编辑上的例外**保留它用于长式的印刷音效瞬间——评论、评论、头部散文。
- **Line heights are tight** (0.80–1.30) for every display and label, relaxed (1.60–2.00) only for reading body and mono button labels. The leading jump is intentional — it gives the page a "telegraph ticker" rhythm.

### 替代字体
The 0.80 line-height on Manuka display (107px, 90px, 60px) assumes the **proprietary Manuka face from Klim Type Foundry**, which has aggressively tight vertical metrics designed for athletic stance at large sizes. If you substitute with wide-metric open-source condensed displays like **Anton**, **Oswald**, **Bebas Neue**, or **Archivo Black**, loosen display line-heights by approximately **+0.10 to +0.15** to prevent ascender/descender collisions (e.g., 0.80 → 0.95). PolySans substitutes (Space Grotesk, DM Sans, Hanken Grotesk) work at the token values without adjustment — their metrics are close enough. PolySans Mono substitutes (Space Mono, JetBrains Mono) and FK Roman substitutes (Newsreader, Literata) also work without adjustment.


## 4. 组件型号

### 按钮

**小学——薄荷薄荷药**
- Background: `#3cffd0` (Jelly Mint)
- 文本 : `#000000` (Absolute 黑色, 聚三联体 16px / 700 或 聚三苯单体 12px / 600 更新
- 边框:无( 纯填充)
- 边框半径 : `24px` ——全圆形胶囊形.
- 铺垫: `10px 24px`
- 大纲 : `none` 休养
- 侧面:背景变化至 `rgba(255, 255, 255, 0.2)` (透明白色),文本保持黑色,添加一个 1px `#c2c2c2` 环形阴影
- 活动:背景 `rgba(140, 140, 140, 0.87)`,不透明 `0.5`,环影 `#8c8c8c`
- Focus: background `#1eaedb`, white text, 1px solid `#0500ff` border, translucent white focus ring
- 过渡 : ~180ms 方便的背景和阴影

**二级——暗色石膏药**
- Background: `#2d2d2d` (Surface Slate)
- 文本 : `#e9e9e9` (已校正文本), PolySans 语句 16px / 400
- 边框:无
- 边框半径 : `24px`
- 铺垫: `10px 24px`
- 大纲 : `rgb(233, 233, 233) none 0px`
- Hover: same translucent white invert as primary — `rgba(255, 255, 255, 0.2)` bg, black text, 1px `#c2c2c2` ring
- 重点:与初级相同青色焦点治疗

**三级—— 粗制薄荷**
- Background: transparent
- 文本 : `#3cffd0`, PolySans Mono 单词 12px / 600 上层楼, 1.5px 跟踪
- 边框 : `1px solid #3cffd0`
- 边框半径 : `40px` 二级轮廓样式的更大胶囊形
- 铺垫:~`10px 20px`
- 旋转:倒置以装填薄荷,黑色文本
- 过渡 : 150ms 简单

**紫外线(促进)**
- Background: transparent
- 文本 : `#5200ff` 或 `#ffffff`
- 边框 : `1px solid #5200ff`
- 边框半径 : `30px`
- 用于“订阅”或“加入流派”风格的宣传招牌

**Pill Tag (Non-interactive)**
- Background: saturated accent (`#3cffd0`, `#5200ff`, yellow, etc.)
- 文字: 黑色或白色, 取决于背景亮度
- 边框半径 : `20px` (比按钮更紧的半径——这是 *文本丸*)
- 字体: PolySans Mono 单词 11px / 600 上层楼, 1.8px 跟踪
- 铺垫:~`4px 10px`

### 卡片与容器

**故事结构图**
- Background: either `#131313` + 1px white border, OR a saturated accent fill (mint, purple, yellow, pink, orange, white)
- 边框半径 : `20px` (标准)或 `24px` (地貌) (中文(简体) ).
- 边框 : `1px solid #ffffff` (在黑暗中)或(在黑暗中) `0px 0px 1px solid #3cffd0` (薄荷)或无(饱和填充)
- 铺垫: ~24–32px 内部
- 重置:没有升降机,没有比例尺——头条文字颜色从白色过渡到白色 `#3860be` (深链接蓝色)
- 过渡 : 150ms 仅以颜色为方便

**特性卡( Top Story)**
- Background: `#131313` with 1px hairline border, OR full-bleed color accent
- 边框半径 : `24px`
- 铺垫: 32px+
- 内部图像: 剪切以匹配外部半径( N)`3px` 或 `4px` 巢穴内半径).
- Hover: text color shift only; the image remains static

**故事串列( 时线)**
- 垂直破折或固态规则(1px `#3d00bf` 或 `#ffffff`)沿着每个物品的左边缘运行,标记时间线脊柱
- 时间戳坐在摩诺的左侧栏上 11px / 500 / 更新的密码 / 1.1px 跟踪
- Each entry is a pill-cornered rectangle separated from its neighbors by 12–16px vertical gap

### 输入框与表单
- **Default**: `#131313` background, 1px solid `#ffffff` or `#949494` border, `2px` border radius (tight, newspaper-form feel), PolySans 15px text in `#ffffff`, placeholder in `#949494`.
- **Focus**: border transitions to `#3cffd0` (jelly mint) with optional `1px solid #5200ff` inner ring on deep focus. No glow.
- **错误**: 边界转弯 `#5200ff` (紫色——这里用作错误/警戒强调色,而不是通常的红色).
- **过渡**: ~150ms 轻松 border-color.

### 导航

- **Top nav**: thin `#131313` bar with the Verge wordmark (Manuka) left-aligned, a search icon and a few UPPERCASE mono category links (12–14px, PolySans Mono, 1.5–1.8px tracking), and a single mint-pill CTA (usually "Subscribe") pinned right.
- **单词标记**: 卷首大片——主页处理 "The Verge" 标志作为首屏元素,而不是 32px 转角标志.
- **Hover**: every link transitions from `#ffffff` to `#3860be` (deep link blue). No underline — it's a color-only response.
- **活动区域**: 以 a 标记 1px 薄荷下划线( 设置) box-shadow `0px -1px 0px 0px inset #3cffd0`)
- **Mobile**: the wordmark shrinks, category nav collapses into a hamburger drawer. Inside the drawer, links are mono-uppercase and stack with 16–20px gaps.

### 图像处理

- **光谱比率**: 16:9 主宰首屏和特写形象, 4:3 以给养中的人, 1:1 用于缩略图和作者的缩略图。
- **Corners**: always rounded to match the parent card — `3px`, `4px`, or inherit `20px` / `24px` from the tile.
- **框架**: 1px `#313131` 或 `#ffffff` 发条围绕摄影,给出"自足的极光"感觉.
- **满血**:仅位于颜色块瓦片内,图像运行到强调色填充的插边.
- **悬停**:静态——没有缩放,没有尺度,没有不透明移,下面的头条是唯一的交互式响应.
- **懒惰装入**: `loading="lazy"` 头顶的顶部,只爱好于头顶的首屏。

### 故事史诗 时间线项目( 分析)

- 纵向栏目色条线(1px `#3d00bf` 或 `#ffffff` 打开 `#131313`)
- 单倍制图章在 PolySans Mono 左边 11px / 更新
- 摇篮式车牌(20px 半径),带有踢球手,头条,和可选甲板
- Stacked vertically with 12–16px gap, the rail continuing between them
- 经常与满腔强调色瓦片交织,"打破"时间节奏,以强调


## 5. 版式原则

### 间距系统
- **基地单位**: 8px.
- **缩放**: 1, 2, 4, 5, 6, 8, 9, 10, 12, 14, 15, 16, 20, 24, 25px.
- **分区编栏**: 32–64px 垂直于主要种子区域。 StoryStream 项本身更紧凑 。 12–16px 差距。
- **贴纸**: 20–32px 内置。 特性卡扩展为 40–48px.
- **内置间隔**: 踢球手们坐着 ~6–10px 头条之上;头条坐 ~10–14px 甲板上方; 时间戳坐 ~6–8px 甲板下方的车
- **微型**: 数据 2/4/5/6/9/10px 数值在按钮、胶囊形和紧贴标签的集群内使用,而不是在编辑网格内使用。

### 网格与容器
- **最大宽度**: ~1280–1300px (当值检测到断点时, 1200/1280/1300).
- **Column patterns**: a 12-column underlying grid that resolves into 3-column hero + 1-column StoryStream rail + feature panels. The homepage feels freeform because color-block tiles frequently span 2–3 columns on a whim.
- **集装箱贴板**: 24px 移动/ 48px 桌面位于外缘。
- **盖特斯**: 16–24px 列之间,紧凑(8–12px) 故事史诗条目中.

### 留白规则
The Verge 将白空间视为一个俱乐部DJ将沉默——作为响亮时刻之间的戏剧性重置。页面底色是如此的暗,强调色如此饱和,甚至连 32px 空的缩放 `#131313` 介于两块牌之间的调色板净化器。页面不是像 Apple 或 Stripe就是这样,这是 **节奏**白色空间带有节奏,而不是优雅。

### 圆角层级
- **2px** ——输入,小徽章(脚像打字机标签).
- **3px** ——内置图像(足够软化页面底色)
- **4px** ——嵌入式卡片图像和小按钮变体
- **20px** ——标准胶囊形和彩块瓦片
- **24px** ——特色瓦片半径和主扣胶囊形
- **30px** ——大型宣传按钮.
- **40px** 概述的CTA胶囊形(系统中最响的胶囊形)
- **50%** ——阿凡达圆形,图标按钮,以及某些圆形徽章.

Eight discrete radius values — a **lot** for a single site. This is deliberate: the rhythm between 2px typewriter tags, 20px pill cards, and 40px outlined buttons creates a "nested scale" feel where every component announces its hierarchy through its corners.


## 6。深度和高度

| 职等 | 治疗 | 使用 |
|---|---|---|
| 0 | No border, no shadow | Default `#131313` canvas text |
| 1 | `rgba(0,0,0,0) 0px 0px 0px 0px inset` (占位符) | 重置交互式元素状态 |
| 2 | `1px solid #ffffff` 或 `#313131` 细边线 | 图像框架和静态卡片轮廓 |
| 3 | `1px solid #3cffd0` 细边线 | 活动按钮大纲, 突出故事牌 |
| 4 | `1px solid #5200ff` 细边线 | 晋升/候补国家大纲 |
| 5 | `rgba(0, 0, 0, 0.33) 0px 0px 0px 1px` | 单“大气”环——适用于层卡 |
| 6 | `0px -1px 0px 0px inset` (薄荷/黑/白) | 活动标签下划线——签名 Verge 移动 |
| 7 | 饱和强调色填充( Q)`#3cffd0`, `#5200ff`白色、黄色、粉红色) | 故事片高程通过颜色而不是阴影 |

The Verge's depth philosophy is **color-as-elevation**. When something needs to stand out, it doesn't get a shadow — it gets a mint fill or a 1px hazard-color border. There are 14 shadow entries in the extracted tokens, but all of them are either inset underlines (0px -1px inset) or near-transparent 1px rings — none of them are traditional elevation shadows. The `#131313` canvas stays perfectly flat throughout, and hierarchy is carried by color saturation.

### 装饰性深度
- **1px 设置下划线** 活动标签/导航链接(根据上下文不同,是薄荷、黑或白)
- **浅 `rgba(0, 0, 0, 0.33)` 1px 环** 堆叠的牌上——唯一略微类似阴影的效果
- **No gradients, no glows, no atmospheric blurs** anywhere. The hazard-tape aesthetic would break if anything faded softly.


## 7。 。 。 。 。 。

### 建议做法
- **建议做法** 使用情况 `#131313` 。没有光线模式。
- **建议做法** 使用 Jelly Mint (请检查url=值 (帮助)`#3cffd0`)和韦尔吉紫罗兰(Verge Ultraviolet)("紫罗兰").`#5200ff`)作为危险强调色——按钮,边框,活动状态,以及饱和的色块瓦片.
- **Do** use Manuka exclusively at 60px+ for hero headlines. Treat anything smaller as a bug.
- **建议做法** 环绕一切: 20px 给卡片, 24px 用于特征卡, 30–40px 胶囊形扣子。
- **Do** use PolySans Mono for UPPERCASE labels, timestamps, kickers, and button text. Lowercase mono doesn't exist here.
- **建议做法** 应用 1.5–1.9px letter-spacing 给每个全卡通标签,这是Verge的签名。
- **建议做法** 使用饱和的色块瓦片(薄荷,紫色,黄色,粉色,橙色,白色)提升一个故事——永远不放出阴影.
- **建议做法** 使用情况 `#3860be` (深链接蓝色)作为每个链接上的悬浮颜色,无论底色如何.
- **建议做法** 应用 StoryStream 时间线条( Q)1px 破损/固态 `#3d00bf` 或白色),在种子视图上。
- **建议做法** 使用稀重(300(多配偶协会) 19–20px 配合 1.9px 追踪“时尚-低音”资本化眉毛的——与“时尚-低音”的对比 107px 玛努卡的呼喊是整个声音。

### 应避免的做法
- **应避免的做法** 使用浅色背景。暗色页面底色是产品。
- **应避免的做法** 添加( E) `box-shadow` 。使用时 1px 边框或饱和强调色代替。
- **应避免的做法** 。每个交互和内容容器均四舍五入。
- **应避免的做法** 使用马努卡进行UI,按钮,或身体复制,严格显示.
- **Don't** use lowercase mono. PolySans Mono is always UPPERCASE.
- **Don't** let mint and ultraviolet appear as background washes — they're hazard accents, not canvas tints.
- **应避免的做法** 任意使用渐变。系统仅是坚实的颜色块。
- **Don't** introduce new accent colors outside the declared mint / purple / yellow / pink / orange tile palette.
- **应避免的做法** Manuka配对 FK罗马标准在同一标题组中——Manuka是唯一的显示呼喊, serif 拖拉机是留给身体的
- **应避免的做法** 使用情况 `#3cffd0` 文本在 a 上显示 `#131313` 下层背景 16px ——对比度小的震动.


## 8. Responsive Behavior

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| 小型移动 | <400px | 单列,马努卡首屏的鳞片下至 ~48–54px, 故事结构的侧栏崩溃到内含时间戳 |
| 手机 | 400–549px | 单柱,彩块砖堆满的网,导航是汉堡抽屉 |
| 大型移动 | 550–767px | 仍然单列但垫开,瓦片的光度停留在 20px |
| 平板 | 768–1023px | 2- 列 故事史特朗 带有特征卡 横跨 字签缩写 ~50% |
| Small Desktop | 1024–1179px | Full 3–4 column editorial grid, mint pill CTA restored to nav |
| 桌面 | 1180–1299px | 最大贴纸, 满载首屏标注的 Manuka 单词标记 |
| Large Desktop | ≥1300px | Container caps at ~1280–1300px, whitespace expands at the margins, no further scaling |

检测到底盘扫 26 中间断点( 中点)1300 → 1280 → 1200 → 1181 → 1180 → 1179 → 1024 → 1023 → 901 → 900 → 897 → 896 → 890 → 769 → 768 → 620 → 605 → 600 → 550 → 549 → 530 → 426 → 425 → 400 → 320). The Verge 调整其几乎每个主要设备边界的网格——一种异常积极的响应策略。

### 触控区域
- 初等药扣是 ~44px 最低高度( 4 个)10px 垂直粘贴+ 16px 文本 + 键 2px ——与WCAG AA.
- Mono uppercase nav links are smaller (~28–32px tall) — for derivative work, pad to 44px on mobile.
- 圆形图标按钮是 40–44px 圆圈, 触摸友好。

### 窄屏布局调整
- **Nav**: wordmark scales from hero (Manuka 60–107px) to ~24–32px on mobile. Category links collapse to a hamburger drawer below 900px.
- **网格**: 4- 科尔 - 3- 科尔 - 2- 科尔 - 1- 校对: 周深的特色卡 2 桌面上的列向移动的全宽单列重排。
- **间距**: 节贴紧从 64px → 32px → 20px砖块内部垫板收紧 32px → 20px.
- **Type**: Manuka hero scales from 107px to ~48–54px on mobile. PolySans headlines scale from 34px → 24px. Mono labels stay pinned at 11–12px (they don't shrink further or they become unreadable).
- **颜色牌**: 强调色故事块在移动上永远不会失去饱和度——它们只是重回全宽.

### 图片适配
- 电源光栅 `srcset`,保留了侧面比。
- No art-direction swaps — same crop scales across all viewports.
- `loading="lazy"` 以一切事物为依归, `eager` 头盔首屏。
- 颜色块牌内的图像 inherit 砖块的内半径( 3) :4px 或 20px 窝窝).


## 9. Agent Prompt Guide

### 快速颜色引用
- **小学**:"杰利薄荷(英语:`#3cffd0`)"
- **Background (Canvas)**: "Canvas Black (`#131313`)"
- **百分(二级危害)**:"紫外线(英语:Verge Ultraviolet)("紫外线").`#5200ff`)"
- **标题文本**:"胡撒地白("汉书·卷四·列传第二十五")`#ffffff`)"
- **文字**:"胡撒地白("汉书·卷四·列传第二十五")`#ffffff`)"(主)或"混音文字(`#e9e9e9`)"
- **次级文本/元数据**: "第二文本(第1行) "`#949494`)"
- **纸牌边框**:"胡撒地白("汉书·卷四·列传第二十五")`#ffffff`)"黑暗上的细边线,"Console Mint Bronger(英语:Console Mint Bordinal (film))"("黑魔").`#309875`)"在薄荷变种上
- **连接**:"深连线蓝(`#3860be`)"

### 示例组件提示
1. *"Create a StoryStream timeline item on a `#131313` canvas: a 20px-radius rectangle with a 1px solid `#ffffff` border, a PolySans Mono 11px / 600 / UPPERCASE / 1.1px tracking timestamp on the left rail, a 12px PolySans UPPERCASE kicker in mint (`#3cffd0`), and a 24px / 700 PolySans headline in white below. No shadow, no lift — hover only shifts the headline color to `#3860be`."*
2. *"设计一个主订阅按钮,并配有Jelly Mint(`#3cffd0`)填充,黑文本,以PolySans Mono语写 12px / 600 / 更新的密码 / 1.5px 跟踪, 24px 边界半径, 10px × 24px 状态转换为 `rgba(255, 255, 255, 0.2)` 带有背景 1px `#c2c2c2` 环影 180ms 轻松"。*
3. *"Build a feature hero with a 107px Manuka 900 headline in white with 1.07px letter-spacing and 0.80 line-height, a thin-weight 300 PolySans 20px capitalized kicker above with 1.9px tracking, on a `#131313` canvas with 64px vertical padding."*
4. *"Create a color-block accent tile filled with Verge Ultraviolet (`#5200ff`) at 0.9 alpha, 24px border radius, white text, a PolySans Mono 11px UPPERCASE category label with 1.5px tracking at the top, and a 32px PolySans 400 capitalized headline with 0.32px tracking below."*
5. *"Design a dark slate secondary button with a `#2d2d2d` background, `#e9e9e9` PolySans 16px text, 24px radius pill shape, 10px × 24px padding. Hover matches the primary button — translucent white `rgba(255, 255, 255, 0.2)` bg with black text."*

### 迭代指南
When refining existing screens generated with this design system:
1. **Audit the canvas.** If you see a light background anywhere on the homepage, flatten it to `#131313`. There is no light mode.
2. **Audit corners.** Every rectangle should land on 2/3/4/20/24/30/40px or 50%. Square corners break the voice.
3. **Audit shadows.** Strip every `box-shadow` that isn't a 1px inset underline or a 1px hazard-color border. The Verge uses color for elevation, not shadow.
4. **Audit type roles.** Manuka only ≥60px. PolySans Mono only UPPERCASE. PolySans 300 at 19–20px should have 1.9px tracking. FK Roman only for body/magazine moments, never UI.
5. **审计强调色使用.** 薄荷和紫外线应作为危险强调色——按钮出现, 1px 边框、 活动下划线、 饱和的瓷砖填充。如果这些砖块是作为背景洗涤或梯度淡化而出现的, 则正确到固态块。
6. **Audit labels.** Every kicker, timestamp, category tag, and button label should be ALL CAPS with 1.1–1.9px letter-spacing. Missing tracking = missing voice.
7. **Audit link hover.** Every link, regardless of its base color, should hover to `#3860be` deep link blue with no underline. Any other hover color is drift.
