# Kraken · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。

# 设计系统灵感来自 Kraken


## 1。视觉主题和大气

Kraken's website is a clean, trustworthy crypto exchange that uses purple as its commanding brand color. The design operates on white backgrounds with Kraken Purple (`#7132f5`, `#5741d8`, `#5b1ecf`) creating a distinctive, professional crypto identity. The proprietary Kraken-Brand font handles display headings with bold (700) weight and negative tracking, while Kraken-Product (with IBM Plex Sans fallback) serves as the UI workhorse.

**关键特征 :**
- Kraken Purple (`#7132f5`) as primary brand with darker variants (`#5741d8`, `#5b1ecf`)
- Kraken- Brand( 播放) + Kraken- 生产(UI)双字体系统
- 近黑( 4)`#101114`具有凉爽的蓝灰色中性比例的文本
- 12px 半径按钮(圆形但非胶囊形)
- 暗影( 微小的阴影 )`rgba(0,0,0,0.03) 0px 4px 24px`)——低语层.
- 绿色强调色( E)`#149e61`) 用于正/成功状态


## 2. Color Palette & Roles

### 主要
- **Kraken 紫色** (`#7132f5`:初级CTA,品牌强调色,链接
- **紫色暗色( 紫色 )** (`#5741d8`:按钮边框, 概述的变体
- **紫深镇** (`#5b1ecf`(最深的紫色) (中文(简体) ).
- **紫色潜水艇** (`rgba(133,91,251,0.16)`紫色在吗? 16% - 微妙的按钮背景
- **Near Black** (`#101114`): Primary text

### 中立
- **酷灰色** (`#686b82`: 初级中立,边界位于 24% 透明度
- **银蓝** (`#9497a9`: 次要文本,变音元素
- **白色** (`#ffffff`: 初级表面
- **边框灰色** (`#dedee5`: 分隔线

### 语义
- **绿色** (`#149e61`: 成功/成绩 16% 徽章不透明
- **绿色暗色** (`#026b3f`: 徽章文本


## 3. 字法规则

### 字体家庭
- **显示**: `Kraken-Brand`,倒计时: `IBM Plex Sans, Helvetica, Arial`
- **用户界面/ 机体**: `Kraken-Product`,倒计时: `Helvetica Neue, Helvetica, Arial`

### 等级

| 作用 | 字体 | 大小 | 字重 | 线条高度 | 字母间距 |
|------|------|------|--------|-------------|----------------|
| 显示首屏 | Kraken- 布兰德 | 48px | 700 | 1.17 | -1px |
| 科 长 | Kraken- 布兰德 | 36px | 700 | 1.22 | -0.5px |
| 副标题 | Kraken- 布兰德 | 28px | 700 | 1.29 | -0.5px |
| 特征标题 | Kraken- 生产 | 22px | 600 | 1.20 | normal |
| 体质 | Kraken- 生产 | 16px | 400 | 1.38 | normal |
| 中体 | Kraken- 生产 | 16px | 500 | 1.38 | normal |
| 按钮 | Kraken- 生产 | 16px | 500–600 | 1.38 | normal |
| 说明 | Kraken- 生产 | 14px | 400–700 | 1.43–1.71 | normal |
| Small | Kraken-Product | 12px | 400–500 | 1.33 | normal |
| 微量 | Kraken- 生产 | 7px | 500 | 1.00 | uppercase |


## 4. 组件型号

### 按钮

**初级紫色**
- Background: `#7132f5`
- 文本 : `#ffffff`
- 铺垫: 13px 16px
- 半径 : 12px

**紫色图示**
- Background: `#ffffff`
- 文本 : `#5741d8`
- 边框 : `1px solid #5741d8`
- 半径 : 12px

**紫色潜水艇**
- Background: `rgba(133,91,251,0.16)`
- 文本 : `#7132f5`
- 铺垫: 8px
- 半径 : 12px

**白按钮**
- Background: `#ffffff`
- 文本 : `#101114`
- 半径 : 10px
- 阴影 : `rgba(0,0,0,0.03) 0px 4px 24px`

**二级灰**
- Background: `rgba(148,151,169,0.08)`
- 文本 : `#101114`
- 半径 : 12px

### 徽章
- 成功 : `rgba(20,158,97,0.16)` 目标 `#026b3f` 文本, 单词 6px 半径
- 中立 : `rgba(104,107,130,0.12)` 目标 `#484b5e` 文本, 单词 8px 半径


## 5. 版式原则

### 间距 : 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 13px, 15px, 16px, 20px, 24px, 25px
### 边框半径 : 3px, 6px, 8px, 10px, 12px, 16px, 9999px, 50%


## 6。深度和高度
- 浅意 : `rgba(0,0,0,0.03) 0px 4px 24px`
- 微量 : `rgba(16,24,40,0.04) 0px 1px 4px`


## 7。 。 。 。 。 。

### 执行
- 使用 Kraken 紫色( 紫色)#7132f5)用于CTAs和链接
- 应用 12px 在所有按钮上半径
- 使用 Kraken- 带过来 Kraken- 生产尸体

### Don't
- Don't use pill buttons — 12px is the max radius for buttons
- 千万别在定号外用其他紫色


## 8. Responsive Behavior
断点 : 375px, 425px, 640px, 768px, 1024px, 1280px, 1536px


## 9. Agent Prompt Guide

### 快速颜色引用
- 品牌 : Kraken 紫色( 紫色)`#7132f5`)
- 暗变体 : `#5741d8`
- 文字: 近黑 (`#101114`)
- 副文本: `#9497a9`
- 白种( 白种)`#ffffff`)

### 示例组件提示
- "Create hero: white background. Kraken-Brand 48px weight 700, letter-spacing -1px. Purple CTA (#7132f5, 12px radius, 13px 16px padding)."
