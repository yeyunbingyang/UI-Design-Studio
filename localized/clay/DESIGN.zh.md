# Clay · 设计规范

**说明**　正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。



## 概览

Clay.com is the most playful B2B SaaS interface in the GTM-data category. The base atmosphere is **cream-tinted white canvas** (`{colors.canvas}` — #fffaf0) holding dark-navy ink type and **3D-rendered claymation illustrations** (mountains, mascot characters, peach/ochre/lavender landscapes) as the dominant brand voltage. Where most data-platform brands play it cool with grids and gradients, Clay leans hard into hand-crafted-looking 3D illustrations and saturated single-color feature cards.

语音运行类型 **Plain Black** (或替换为: Inter 字重 500-600)——自定义四舍五入的显示面,使用尺寸非常大(.72px 以负数表示 letter-spacing。身体类型 Inter 显示字重 。 500,再也没有胆量——型面的圆形特征使其温暖而不需要字重.

组件电压来自 **饱和的单色特征卡** 中文本 6-color platette:热粉色,深色的色调,薰衣草,桃子,色调,和奶油卡。每张卡片都显示产品UI小尺度的碎片——克莱根特剂运行,测序器流,CMM增富输出. 彩色卡片是每个长卷页上的主要视觉元素.

**关键特征 :**
- 凝胶线白页面底色( 3)`{colors.canvas}` — #fffaf0)温暖的区别 Clay 酷炫的竞争者网站
- 暗海军/黑色初级CTA(`{colors.primary}` — #0a0a0a。按钮四舍五入 `{rounded.md}` (12px)——友好的现代但并非胶囊形.
- 6- 彩色饱和特性卡调色板 : `{colors.brand-pink}`, `{colors.brand-teal}`, `{colors.brand-lavender}`, `{colors.brand-peach}`, `{colors.brand-ochre}`, `{colors.surface-card}` (尖叫声)
- 3D粘土插图(山,人物,抽象形状)作为全血首屏文物——品牌最公认的视觉元素.
- Custom rounded Plain Black display typeface at 500 weight with -1 to -2.5px letter-spacing on display sizes.
- Border radius is generous: `{rounded.md}` (12px) for buttons + inputs, `{rounded.lg}` (16px) for content cards, `{rounded.xl}` (24px) for feature cards. The bigger radius matches the rounded display type's character.
- 产品UI碎片嵌入小尺度的彩色卡片内——代理运行日志,测序器流,浓缩结果.
- 节奏 `{spacing.section}` (96px)在主要乐队之间.
- 页脚是奶油纹(`{colors.surface-soft}`) — Clay 关闭的乐队都保持温暖的光线。


## 配色

### 品牌和 强调色
- **Primary** (`{colors.primary}` — #0a0a0a): All primary CTAs, h1/h2 ink type. Near-black with slight warmth.
- **品牌粉红** (`{colors.brand-pink}` — #ff4d8b:热平克特征卡表面. sequencer / 外传特征页.
- **品牌提尔** (`{colors.brand-teal}` — #1a3a3a:深层绿色特征卡,常见的标价等级.
- **品牌拉风机** (`{colors.brand-lavender}` — #b8a4ed:软薰衣草特征卡.
- **布兰德桃** (`{colors.brand-peach}` — #ffb084:温暖的桃花特征卡.
- **品牌奥克瑞** (`{colors.brand-ochre}` — #e8b94a:芥末 / ochre 特征卡和插图强调色.
- **品牌薄荷** (`{colors.brand-mint}` — #a4d4c5:插图上的薄荷强调色和小徽章.
- **布兰德·珊瑚** (`{colors.brand-coral}` — #ff6b5a:珊瑚强调色用于突出.

### 表面
- **页面底色** (`{colors.canvas}` — #fffaf0:默认的页层,奶油丁丁白.
- **Surface Soft** (`{colors.surface-soft}` — #faf5e8): Footer and CTA-band background.
- **表面卡片** (`{colors.surface-card}` — #f5f0e0:奶油特色卡,证照卡.
- **表面坚固** (`{colors.surface-strong}` — #ebe6d6: 强力奶油,用于强调的乐队.
- **表面暗色( T)** (`{colors.surface-dark}` — #0a1a1a:暗纹近黑为偶发暗卡(稀有).
- **表面暗线** (`{colors.surface-dark-elevated}` — #1a2a2a: 高阶暗卡.
- **细边线** (`{colors.hairline}` — #e5e5e5): 1px 将卡片和输入值置入边框。

### 文本
- **墨水( 墨水 )** (`{colors.ink}` — #0a0a0a:标题和主文.
- **Body Strong** (`{colors.body-strong}` — #1a1a1a): Emphasized body, lead paragraphs.
- **体质** (`{colors.body}` — #3a3a3a: 默认的运行文本.
- **静音** (`{colors.muted}` — #6a6a6a:子头,面包屑,脚部.
- **Muted Soft** (`{colors.muted-soft}` — #9a9a9a): Captions, fine-print.
- **On Primary / On Dark** (`{colors.on-primary}` — #ffffff): Text on primary buttons + dark feature cards (teal).

### 语义
- **成功** (`{colors.success}` — #22c55e:成功州.
- **Warning** (`{colors.warning}` — #f59e0b): Warning callouts.
- **错误** (`{colors.error}` — #ef4444:验证错误.


## 字体排版

### 字体家族
系统运行 **Plain Black** (一个自定义的四舍五入显示面)用于头条和 **Inter** 身体,导航,和UI。 Plain Black 字重 500 负数 letter-spacing 处理每个显示标题; Inter 处理其余的。倒叠堆放 `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` 两者皆有

### 等级

| 调试 | 大小 | 字重 | 线条高度 | 字母间距 | 使用 |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 500 | 1.0 | -2.5px | Homepage h1 ("Go to market with unique data") — Plain Black |
| `{typography.display-lg}` | 56px | 500 | 1.05 | -2px | 科长 -- -- Plain Black |
| `{typography.display-md}` | 40px | 500 | 1.1 | -1px | 子节标题,产品名称 |
| `{typography.display-sm}` | 32px | 500 | 1.15 | -0.5px | CTA-band 头, 特征卡片标题 |
| `{typography.title-lg}` | 24px | 600 | 1.3 | -0.3px | 定价计划名称,更大的特征标题 |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | 牌名,介绍段落 |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Small card titles, list labels |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | 默认运行文本 |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | 页脚身体, fine-print |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | 标签、 标题 |
| `{typography.caption-uppercase}` | 12px | 600 | 1.4 | 1.5px | 区标签,"FEATURED"徽章 |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | 标准按钮标签 |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav 菜单项 |

### 原则
Plain Black 字重 500 +负 letter-spacing 声音很响,要重磅了 700 读作是弹性; 型面的圆形字符增加了温暖, 更大胆的字重会变平。

身体-vs-显示分拆功能: Plain Black 资源 Plain Black 时刻(标题), Inter 用于其他所有(运行文本、用户界面、按钮)。混合它们是一种系统违规。

### Note on Font Substitutes
If Plain Black is unavailable, **Inter** at weight 500 with -0.05em letter-spacing is a usable approximation. **Söhne Breit** at weight Buch is an alternative if licensed. **Recoleta** at weight 500 carries similar rounded-display warmth.


## 布局

### 间距系统
- **基部单位:** 4px.
- **脚本 :** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **科 科 padding:** `{spacing.section}` (96px),主要编辑乐队之间.
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards and pricing tiers; `{spacing.lg}` (24px) for testimonial and product mockup cards.

### 网格容器( C)
- **最大内容 width:** ~1280px centered.
- **编辑机构:** 单身 12-列网格;首屏经常使用 7/5 拆分(h)1 左,插图右).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **定价 grid:** 3-4 up at desktop, 1-up at mobile.

### 白空间哲学
Clay 使用宽大的白空间绕大圆形显示头条和饱和特征卡。 奶油页面底色+彩色卡+ 3D插图创造了一种游戏热度,竞争数据平台网站缺乏这种热度.


## 层次与阴影

| 职等 | 治疗 | 使用 |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, small content cards |
| 饱和卡 | 粉红色/青色/薰衣草/披针/衣物填充——无阴影 | 特性卡 |
| Cream card | `{colors.surface-card}` background — no shadow | Testimonial, secondary cards |
| 暗影的暗影 暗影的暗影的暗影 | 低阿尔法时的阴影 | 州级行政区(区级行政区) |

系统使用无重影. 深度来自奶油页面底色和亮度特征卡之间的饱和色对比.

### 装饰性深度
- **3D 粘土图示** 山,人物,吉祥物用手工制作 3D风格,品牌最公认的深度元素,不是象征物——这些是图画资产.
- **吉祥物字符** 显示为特性卡和CTAs中的内含数字。


## 形状

### 圆角刻度

| 调试 | 数值 | 使用 |
|---|---|---|
| `{rounded.xs}` | 6px | Small badges, dropdown items |
| `{rounded.sm}` | 8px | Small buttons, hairline-border accent |
| `{rounded.md}` | 12px | 标准 CTA 按钮, 文本输入 |
| `{rounded.lg}` | 16px | 内容卡,证卡,定价等级 |
| `{rounded.xl}` | 24px | 特色卡(饱和品牌-彩色卡) |
| `{rounded.pill}` | 9999px | 分类标签, 徽章胶囊形 |
| `{rounded.full}` | 9999px / 50% | 幻象,图标按钮 |


## 组件

### 顶端导航

**`top-nav`** ——凝胶导航棒被钉在顶部. 64px 高个子 `{colors.canvas}` 的背景。 Clay 标志+ 字标记在左,主水平菜单(生产,解决方案,资源,定价,客户)中心,右侧集群,带有"签名"+"Try free" `{component.button-primary}`菜单项目 `{typography.nav-link}` (Inter 14px / 500).

### 按钮

**`button-primary`** — Background `{colors.primary}` (near-black), text `{colors.on-primary}` (white), type `{typography.button}` (Inter 14px / 600), padding 12px × 20px, height 44px, rounded `{rounded.md}` (12px).

**`button-secondary`** ——带有细边线大纲的奶油按钮。背景 `{colors.canvas}`文本中,请输入 `{colors.ink}`, 1px 细边线边界.

**`button-on-color`** ——在饱和的品牌色彩特征卡片上使用白色按钮,形状与主色调相同但反向(白色背景,墨水文本).

**`button-text-link`** ——内置文本按钮,无背景. 用于"签名"和内置链接 CTAs.

**`text-link`** ——内置体链接于 `{colors.ink}` 以下划线表示。

### 纸牌和集装箱

**`hero-band`** 奶油罐头首屏 7-5 grid: h1 + sub-headline + button row on the left, 3D claymation illustration on the right. Vertical padding `{spacing.section}` (96px).

**`hero-illustration-card`** — Right-side artifact holding 3D claymation illustration (mountains, mascot character, abstract shapes). Background `{colors.surface-soft}`, rounded `{rounded.xl}` (24px). The illustration IS the artifact.

**`feature-card-pink`** / **`feature-card-teal`** / **`feature-card-lavender`** / **`feature-card-peach`** / **`feature-card-ochre`** — Saturated single-color feature cards. Background varies per variant; rounded `{rounded.xl}` (24px); padding `{spacing.xl}` (32px). Each card carries an h3 in `{typography.title-md}`, a body description, and a product UI fragment or mascot illustration. Text color flips to `{colors.on-dark}` (white) on pink and teal cards, `{colors.ink}` (dark) on lavender/peach/ochre cards (the lighter saturations have enough contrast for dark text).

**`feature-card-cream`** ——下键特征卡变体在开 `{colors.surface-card}`用于不值得饱和颜色的不太突出的特性。

**`product-mockup-card`** — Card showing actual Clay product UI (Claygent agent runs, sequencer flows, CRM enrichment tables). Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px).

**`testimonial-card`** ——客户报价卡。背景 `{colors.surface-card}` (尖叫声),四舍五入 `{rounded.lg}`, 编译 `{spacing.lg}` (24px)顶行有avatar + name + 角色;下面坐着检验器在 `{typography.body-md}`.

**`pricing-tier-card`** ——标准等级卡。背景 `{colors.canvas}` 带细边线,四舍五入 `{rounded.lg}`, 编译 `{spacing.xl}` (32px).

**`pricing-tier-card-featured`** - 显示的级翻转到 `{colors.brand-teal}` 深绿色的,地面是突出的信号

**`expert-card`** ——在/专家网页上使用。 `{colors.canvas}` 带细边线,四舍五入 `{rounded.lg}`, 编译 `{spacing.lg}`. 载着一个顶级的阿凡达,专家名,专业,和一个"书会"链接.

### 输入表单( F)

**`text-input`** — Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}` (12px), padding 12px × 16px, height 44px. 1px hairline border.

**`text-input-focused`** ——边界厚至墨水以突出.

### 标签/ 徽章

**`category-tab`** + **`category-tab-active`** —— 胶囊形形标签 sub-nav。不活动 : transparent + 调音文本。 活动: 奶油卡背景 + 墨水文本。 铺设 8px × 16px.

**`badge-pill`** · 装有小奶油的胶囊形标签 `{typography.caption}` (13px / 500),四舍五入 `{rounded.pill}`.

### 中导/页脚

**`cta-band-illustrated`** ——前脚手"将成长思想化为现实今天"乐队. `{colors.surface-soft}`,四舍五入 `{rounded.xl}`, 编译 80px. 载h2 输入 `{typography.display-md}`,子线,和 `{component.button-primary}` 通常与一个 3吉祥物或场景的D插图.

**`footer`** — Cream-tinted footer (NOT dark navy unlike most SaaS sites). Background `{colors.surface-soft}`, text `{colors.body}`. 4-column link list. Vertical padding 80px. Often features a horizon-style 3D mountain illustration at the very bottom — Clay's signature footer mountain.


## 设计建议与禁忌

### 执行
- 霜布上每一页都锁定`{colors.canvas}` — #fffaf0)温暖的锡矿区别于 Clay 数据站点的
- 使用 3D粘土图案作为首屏文物. 3D人物和山是品牌。
- 循环饱和特征卡横跨页面——粉红色 —— 茶叶 —— 紫色 —— 桃色 —— 黄绿色 —— 奶油 连续重复相同颜色读作脱节.
- 使用 Plain Black 字重 500 负数 letter-spacing 显示标题。
- 显示产品UI碎片在饱和特性卡内,品牌辨识度由产品驱动,而非抽象.
- 使用奶油页脚(NOT 暗色). Clay 故意用温暖的奶油关闭页面,而不是标准深足SaaS模板.
- 锁定每个带 `{spacing.section}` (96px) 垂直节奏.

### Don't
- Don't use cool grays for canvas. The cream tint is non-negotiable.
- Don't use a 7th brand-color card. The 6-color palette is saturated enough.
- 胆子不要超重 500. Plain Black 时 间 700 读作爆炸性。
- 不得连续重复两次使用同一品牌的彩色卡片.
- 不可用平面矢量艺术来代替粘土插图。 3D角色是品牌声音.
- Don't use a dark footer. The cream footer is part of the system's warm-throughout pacing.
- Don't add hover state styling beyond what the system already encodes.


## 响应式规则

### 断点

| 名称 | 宽度 | 密钥更改 |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 72→36px; hero-illustration-card stacks below; feature grids 1-up; pricing 1-up |
| Tablet | 768–1024px | Top nav tightens; feature cards 2-up; pricing 2-up |
| 桌面 | 1024–1440px | 满 top-nav; 3- 增加特色卡; 3- 上调定价等级 |
| 宽 | > 1440px | 与呼吸室较多的桌面相同; 最大内容 1280px |

### 触控区域
- `{component.button-primary}` at minimum 44 × 44px (matches WCAG AAA).
- `{component.text-input}` 高度为 44px.

### 折叠战略
- 顶级导航崩溃到汉堡 < 768px.
- 首屏们 7-5 网格 → 移动上的单列.
- 特色卡网格减少列而非缩放.
- 饱和特性卡在每个断点保留其彩色填充.
- 定价等级卡崩溃 4 → 2 → 1.


## 迭代指南

1. 一次关注一个组件。请参考其 YAML 密钥( Q)`{component.feature-card-pink}`, `{component.pricing-tier-card-featured}`).
2. 选用合适的品牌色卡为特色:粉红色为出界/序列,teal为企业/地产,薰衣草为AI剂产品,桃花为普通SaaS温和,ochre为社区/专家.
3. 现有组成部分的备选案文(第2款)`-active`, `-disabled`)作为单独的条目进行直播.
4. 使用 `{token.refs}` 到处都是,从不内含六分法。
5. 绝不让文件徘徊。
6. 显示标题保留 Plain Black 500 负数 letter-spacing。身体停留状态 Inter 400.
7. 奶油通透调色板是一种系统合同——不要增加一个暗脚.


## 已知缺口

- Plain Black 已获得许可的 Clay 且不作为公共网页字体提供; Inter 字重 500 负数 letter-spacing 是最接近的替代。
- 3D粘土插图是委托资产,而不是系统符——它们每页都提供.
- 吉祥物字符(在网站各地重复出现的代号字符)是被标注的资产;其确切的血统和命名没有正式化的代号.
- 动画和过渡时间(3卷轴上的D插图参数,特征卡入口动画)不在范围.
- 表格验证状态超出 `{component.text-input-focused}` 不被提取。
- 实际 Clay 产品表面(应用中的数据表,公式编辑器,代理构建器)与营销站点共享一些符号,但添加了许多超出范围的产品特定组件.

## 设计词元原值

A vibrant claymation-meets-data interface for Clay.com (GTM data-orchestration platform). Anchors on white canvas with dark-navy primary CTAs, custom rounded display type, and saturated single-color feature cards — hot pink, deep teal, lavender, peach, ochre — that punctuate long-scroll explainer pages. Brand voltage comes from 3D-rendered claymation illustrations (mountains, characters, mascots) used as full-bleed hero artifacts and the bright multi-color card surfaces showing product UI fragments.

```yaml
---
version: alpha
name: Clay-design-analysis
description: A vibrant claymation-meets-data interface for Clay.com (GTM data-orchestration platform). Anchors on white canvas with dark-navy primary CTAs, custom rounded display type, and saturated single-color feature cards — hot pink, deep teal, lavender, peach, ochre — that punctuate long-scroll explainer pages. Brand voltage comes from 3D-rendered claymation illustrations (mountains, characters, mascots) used as full-bleed hero artifacts and the bright multi-color card surfaces showing product UI fragments.

colors:
  primary: "#0a0a0a"
  primary-active: "#1f1f1f"
  primary-disabled: "#e5e5e5"
  ink: "#0a0a0a"
  body: "#3a3a3a"
  body-strong: "#1a1a1a"
  muted: "#6a6a6a"
  muted-soft: "#9a9a9a"
  hairline: "#e5e5e5"
  hairline-soft: "#f0f0f0"
  canvas: "#fffaf0"
  surface-soft: "#faf5e8"
  surface-card: "#f5f0e0"
  surface-strong: "#ebe6d6"
  surface-dark: "#0a1a1a"
  surface-dark-elevated: "#1a2a2a"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#a0a0a0"
  brand-pink: "#ff4d8b"
  brand-teal: "#1a3a3a"
  brand-lavender: "#b8a4ed"
  brand-peach: "#ffb084"
  brand-ochre: "#e8b94a"
  brand-mint: "#a4d4c5"
  brand-coral: "#ff6b5a"
  success: "#22c55e"
  warning: "#f59e0b"
  error: "#ef4444"

typography:
  display-xl:
    fontFamily: "Plain Black, Inter, sans-serif"
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -2.5px
  display-lg:
    fontFamily: "Plain Black, Inter, sans-serif"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -2px
  display-md:
    fontFamily: "Plain Black, Inter, sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1px
  display-sm:
    fontFamily: "Plain Black, Inter, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "Inter, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "Inter, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 1.5px
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 44px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 44px
  button-on-color:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 44px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 96px
  hero-illustration-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  feature-card-pink:
    backgroundColor: "{colors.brand-pink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  feature-card-teal:
    backgroundColor: "{colors.brand-teal}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  feature-card-lavender:
    backgroundColor: "{colors.brand-lavender}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  feature-card-peach:
    backgroundColor: "{colors.brand-peach}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  feature-card-ochre:
    backgroundColor: "{colors.brand-ochre}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  feature-card-cream:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  product-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card-featured:
    backgroundColor: "{colors.brand-teal}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  category-tab-active:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
  badge-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  expert-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  cta-band-illustrated:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: 80px
  footer:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: 80px
---
```
