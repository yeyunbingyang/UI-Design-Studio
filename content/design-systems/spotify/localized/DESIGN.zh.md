# Spotify · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。

# 设计系统灵感来自 Spotify


## 1。视觉主题和大气

Spotify's web interface is a dark, immersive music player that wraps listeners in a near-black cocoon (`#121212`, `#181818`, `#1f1f1f`) where album art and content become the primary source of color. The design philosophy is "content-first darkness" — the UI recedes into shadow so that music, podcasts, and playlists can glow. Every surface is a shade of charcoal, creating a theater-like environment where the only true color comes from the iconic Spotify Green (`#1ed760`) and the album artwork itself.

The typography uses SpotifyMixUI and SpotifyMixUITitle — proprietary fonts from the CircularSp family (Circular by Lineto, customized for Spotify) with an extensive fallback stack that includes Arabic, Hebrew, Cyrillic, Greek, Devanagari, and CJK fonts, reflecting Spotify's global reach. The type system is compact and functional: 700 (bold) for emphasis and navigation, 600 (semibold) for secondary emphasis, and 400 (regular) for body. Buttons use uppercase with positive letter-spacing (1.4px–2px) for a systematic, label-like quality.

区别是什么 Spotify 表示其避孕药和圆形几何。 500px–9999px 半径(全药), circular 播放按钮 50% 半径,搜索输入为 500px 与重阴影结合(`rgba(0,0,0,0.5) 0px 8px 24px`),用于提升元素和独特的内置边框-阴影组合(`rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset`),结果是一种感觉像一个溢价音频设备的界面——触觉,圆形,并被构建用于触摸.

**关键特征 :**
- 近黑浸暗主题( Q)`#121212`–`#1f1f1f`)——UI在内容后消失.
- Spotify 绿色( G)`#1ed760`)作为单调品牌强调色——从不装饰,总是功能性
- 具有全局脚本支持的SpotifyMixUI/CircularSp字体家族
- Pill buttons (500px–9999px) and circular controls (50%) — rounded, touch-optimized
- 宽度的大写按钮标签 letter-spacing (1.4px–2px)
- 高元素的重阴影( 重阴影)`rgba(0,0,0,0.5) 0px 8px 24px`)
- 语义颜色:负红色( 3)`#f3727f`),警告橙色(`#ffa42b`),宣布为蓝色(`#539df5`)
- 专辑艺术作为主要色彩来源——UI设计为色调


## 2. Color Palette & Roles

### 初等品牌
- **Spotify Green** (`#1ed760`): Primary brand accent — play buttons, active states, CTAs
- **Near Black** (`#121212`): Deepest background surface
- **暗色表面** (`#181818`:卡片、容器、提升表面
- **中暗线** (`#1f1f1f`:按钮背景,交互式表面

### 文字颜色
- **白色** (`#ffffff`): `--text-base`,主文本
- **Silver** (`#b3b3b3`): Secondary text, muted labels, inactive nav
- **近白线** (`#cbcbcb`: 略亮的副文本
- **光线** (`#fdfdfd`: 最大强调值近纯白色

### 语义色
- **负红色** (`#f3727f`): `--text-negative`,错误状态
- **橙色警告( 警告)** (`#ffa42b`): `--text-warning`状态
- **蓝色** (`#539df5`): `--text-announcement`信息状态

### 表面边框( B)
- **暗卡片** (`#252525`: 高卡表面
- **中卡** (`#272727`: 备用卡表面
- **边框灰色** (`#4d4d4d`: 暗边框按钮
- **光线边框** (`#7c7c7c`: 外观按钮边框, 变音链接
- **分隔符** (`#b3b3b3`: 分隔线
- **光面层** (`#eeeeee`: 轻模式按钮( 稀有)
- **Spotify 绿色边框** (`#1db954`: 绿色强调色边框变体

### 阴影
- **重装** (`rgba(0,0,0,0.5) 0px 8px 24px`:对话框、菜单、提升面板
- **中号** (`rgba(0,0,0,0.3) 0px 8px 8px`:卡片,滴滴数
- **设置边框** (`rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset`: 输入边框-阴影组合


## 3. 字法规则

### 字体家庭
- **标题**: `SpotifyMixUITitle`,倒计时: `CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, MS Gothic`
- **用户界面/ 机体**: `SpotifyMixUI`,同样的倒叠

### 字号层级

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| 节标题 | 闪烁密苏里语Name | 24px (1.50rem) | 700 | normal | normal | 粗体标题字重 |
| 特性标题 | 显微分解MixUI | 18px (1.13rem) | 600 | 1.30 (紧) | normal | 半粗体区长 |
| Body Bold | SpotifyMixUI | 16px (1.00rem) | 700 | normal | normal | Emphasized text |
| 体质 | 显微分解MixUI | 16px (1.00rem) | 400 | normal | normal | 标准机构 |
| 按钮大写 | 显微分解MixUI | 14px (0.88rem) | 600–700 | 1.00 (紧) | 1.4px–2px | `text-transform: uppercase` |
| 按钮 | 显微分解MixUI | 14px (0.88rem) | 700 | normal | 0.14px | 标准按钮 |
| 导航链接粗体 | 显微分解MixUI | 14px (0.88rem) | 700 | normal | normal | 导航 |
| Nav Link | SpotifyMixUI | 14px (0.88rem) | 400 | normal | normal | Inactive nav |
| 粗体标题 | 显微分解MixUI | 14px (0.88rem) | 700 | 1.50–1.54 | normal | 粗体元数据 |
| 说明 | 显微分解MixUI | 14px (0.88rem) | 400 | normal | normal | 元数据 |
| Small Bold | SpotifyMixUI | 12px (0.75rem) | 700 | 1.50 | normal | Tags, counts |
| Small | SpotifyMixUI | 12px (0.75rem) | 400 | normal | normal | Fine print |
| 徽章( T) | 显微分解MixUI | 10.5px (0.66rem) | 600 | 1.33 | normal | `text-transform: capitalize` |
| Micro | SpotifyMixUI | 10px (0.63rem) | 400 | normal | normal | Smallest text |

### 原则
- **Bold/regular binary**: Most text is either 700 (bold) or 400 (regular), with 600 used sparingly. This creates a clear visual hierarchy through weight contrast rather than size variation.
- **系统大写按钮**:按钮标签使用大写 + 宽 letter-spacing (1.4px–2px),创建了与内容文本相区别的系统性"标签"语音.
- **缩合大小**: 范围是 10px–24px ——比大多数系统范围狭窄. Spotify'类型是紧凑和功能的,设计用于扫描播放列表,而不是阅读文章.
- **Global script support**: The extensive fallback stack (Arabic, Hebrew, Cyrillic, Greek, Devanagari, CJK) reflects Spotify's 180+ market reach.


## 4. 组件型号

### 按钮

**暗胶囊形**
- Background: `#1f1f1f`
- 文本 : `#ffffff` 或 `#b3b3b3`
- 铺垫: 8px 16px
- 半径 : 9999px (满药)
- 使用:导航胶囊形、辅助动作

**暗大胶囊形**
- Background: `#181818`
- 文本 : `#ffffff`
- 铺垫: 0px 43px
- 半径 : 500px
- Use: Primary app navigation buttons

**轻胶囊形**
- Background: `#eeeeee`
- 文本 : `#181818`
- 半径 : 500px
- 使用:轻度模式CTAs(cookie同意,营销)

**提纲胶囊形**
- Background: transparent
- 文本 : `#ffffff`
- 边框 : `1px solid #7c7c7c`
- 铺垫: 4px 16px 4px 36px (图标的不对称)
- 半径 : 9999px
- 使用: 随从按钮, 二次动作

**Circular 播放( L)**
- Background: `#1f1f1f`
- 文本 : `#ffffff`
- 铺垫: 12px
- 半径 : 50% (圆)
- 使用: 播放/暂停控制

### 卡片与容器
- Background: `#181818` or `#1f1f1f`
- 半径 : 6px–8px
- No visible borders on most cards
- 侧面:轻微背景光亮
- 阴影 : `rgba(0,0,0,0.3) 0px 8px 8px` 升起时

### 投入
- Search input: `#1f1f1f` background, `#ffffff` text
- 半径 : 500px (溢出声)
- 铺垫: 12px 96px 12px 48px (虹觉)
- 焦点:边界变为 `#000000`,大纲 `1px solid`

### 导航
- 带有 SpotifyMixUI 的暗边栏 14px 字重 700 活动, 400 用于非活动
- `#b3b3b3` 闲置项目变色, `#ffffff` 活动
- Circular 图标按钮(50% 半径)
- Spotify 标识为绿色左上角


## 5. 版式原则

### 间距系统
- 基部单位: 8px
- 缩放 : 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 14px, 15px, 16px, 20px

### 网格与容器
- Sidebar (fixed) + main content area
- 网格化的专辑/播放列表卡
- 底部的全宽现播放栏
- 响应内容区域填补剩余空间

### 留白规则
- **暗压缩**: Spotify 包的内容密集——播放列表网格,音轨列表,导航都紧密地间隔。 暗色背景在元素之间提供了视觉休息,不需要大间隔。
- **呼吸室内的内容密度**:这是一个应用,而不是营销网站,每个像素都服务于收听体验.

### 圆角层级
- 最小( 微米)2px:徽章,明确标记
- 浅色( 微弱)4px: 输入,小元素
- 标准( 4)6px: 专辑艺术容器,卡片
- 舒适( 舒适( 舒适) )8px: 区域、对话框
- 中 (单位:千美元)10px–20px: 面板、叠加元素
- Large (100px): Large pill buttons
- Pill (500px): Primary buttons, search input
- 完全胶囊形( E)9999px:导航胶囊形,搜索
- 圆( 圆)50%: 播放按钮、 变形符、 图标


## 6。深度和高度

| 职等 | 治疗 | 使用 |
|-------|-----------|-----|
| Base (Level 0) | `#121212` background | Deepest layer, page background |
| 表面( 级别) 1) | `#181818` 或 `#1f1f1f` | 纸牌、侧边栏、集装箱 |
| 升( 级别) 2) | `rgba(0,0,0,0.3) 0px 8px 8px` | 下拉菜单, 悬浮牌 |
| 对话框( 级别) 3) | `rgba(0,0,0,0.5) 0px 8px 24px` | 模块、叠加、菜单 |
| 套接字( 边界) | `rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset` | 输入边框 |

**影子哲学**: Spotify 将显著的重阴影用于暗主题应用程序。 0.5 透明阴影在 24px 模糊为对话框和菜单创造了戏剧性的“在黑暗中飘扬”效果,而 0.3 透明度在 8px 模糊度提供了更微妙的卡片升降。输入值上独特的内置边框-阴影组合产生了一种沉淀的、触觉性的质量。


## 7。 。 。 。 。 。

### 建议做法
- 使用近黑背景( I)`#121212`–`#1f1f1f`——通过遮荫变异的深度.
- 应用 Spotify 绿色( G)`#1ed760`)只用于游戏控制、活动状态和主要CTA
- Use pill shape (500px–9999px) for all buttons — circular (50%) for play controls
- 应用大写 + 宽 letter-spacing (1.4px–2px按钮标签
- 保持打字紧凑( Q)10px–24px 范围)——这是应用程序,不是杂志.
- 使用重阴影( U)`0.3–0.5 opacity`),用于在暗色背景上提升元素.
- Let album art provide color — the UI itself is achromatic

### 应避免的做法
- Don't use Spotify Green decoratively or on backgrounds — it's functional only
- 初等表面不要用光背景——暗沉是核心
- Don't skip the pill/circle geometry on buttons — square buttons break the identity
- Don't use thin/subtle shadows — on dark backgrounds, shadows need to be heavy to be visible
- Don't add additional brand colors — green + achromatic grays is the complete palette
- Don't use relaxed line-heights — Spotify's typography is compact and dense
- Don't expose raw gray borders — use shadow-based or inset borders instead


## 8. Responsive Behavior

### 断点
| 名称 | 宽度 | 密钥更改 |
|------|-------|-------------|
| 移动小 | <425px | 压缩移动布局 |
| 手机 | 425–576px | 标准移动 |
| 平板 | 576–768px | 2- 柱状网格 |
| 块状大 | 768–896px | 扩展版式 |
| 桌面小数 | 896–1024px | 可见侧边栏 |
| 桌面 | 1024–1280px | 完整的桌面布局 |
| Large Desktop | >1280px | Expanded grid |

### 窄屏布局调整
- Sidebar: full → collapsed → hidden
- 专辑 grid: 5 columns → 3 → 2 → 1
- 现时播放栏:保持大小
- 搜索:维持避孕药输入,宽度调整
- 导航: 移动式边栏 ~ 底栏


## 9. Agent Prompt Guide

### 快速颜色引用
- Background: Near Black (`#121212`)
- 表面:暗卡( 暗卡)`#181818`)
- 文字: 白话( 白话)`#ffffff`)
- 副文本:银(`#b3b3b3`)
- 坐标 : Spotify 绿色( G)`#1ed760`)
- 边框 : `#4d4d4d`
- 错误: 负红色 (E)`#f3727f`)

### 示例组件提示
- "Create a dark card: #181818 background, 8px radius. Title at 16px SpotifyMixUI weight 700, white text. Subtitle at 14px weight 400, #b3b3b3. Shadow rgba(0,0,0,0.3) 0px 8px 8px on hover."
- "Design a pill button: #1f1f1f background, white text, 9999px radius, 8px 16px padding. 14px SpotifyMixUI weight 700, uppercase, letter-spacing 1.4px."
- "Build a circular play button: Spotify Green (#1ed760) background, #000000 icon, 50% radius, 12px padding."
- "Create search input: #1f1f1f background, white text, 500px radius, 12px 48px padding. Inset border: rgb(124,124,124) 0px 0px 0px 1px inset."
- "Design navigation sidebar: #121212 background. Active items: 14px weight 700, white. Inactive: 14px weight 400, #b3b3b3."

### 迭代指南
1. 开始 #121212 ——一切生活于近黑黑暗中.
2. Spotify 绿色只用于功能突出显示( 游戏、 活动、 CDA)
3. 胶囊形一切 - 500px 以大块头而言, 9999px 以小为主, 50% 资源 circular
4. Uppercase + wide tracking on buttons — the systematic label voice
5. 重阴影( 重阴影 )0.3–0.5 光影在黑暗中是看不见的 光影在黑暗中是看不见的
6. 专辑艺术提供所有颜色——UI保持色调
