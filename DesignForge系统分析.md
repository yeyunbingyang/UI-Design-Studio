# 系统分析

## 目录

- [系统分析](#系统分析)
  - [总体思想与系统构成](#总体思想与系统构成)
    - [一、平台前端构成](#一平台前端构成)
      - [1. 平台（Platform）](#1-平台platform)
      - [2. 页面（Page）](#2-页面page)
    - [二、知识库及模板资料库](#二知识库及模板资料库)
      - [1. 平台规范模板库](#1-平台规范模板库)
      - [2. 优质页面设计库](#2-优质页面设计库)
      - [3. 优质组件库](#3-优质组件库)
    - [三、整体关系](#三整体关系)
  - [平台](#平台)
    - [产品定义 模板](#产品定义-模板)
    - [系统规范 UI风格](#系统规范-ui风格)
      - [Design Tokens.md](#design-tokensmd)
      - [一份 Design Tokens.md 通常写什么](#一份-design-tokensmd-通常写什么)
      - [预览HTML](#预览html)
        - [规范预览](#规范预览)
        - [模版预览](#模版预览)
    - [产品布局类型](#产品布局类型)
      - [一、导航布局（Navigation Layout）](#一导航布局navigation-layout)
      - [二、内容布局（Content Layout）](#二内容布局content-layout)
      - [三、操作与工作区布局（Workspace Layout）](#三操作与工作区布局workspace-layout)
      - [四、建议建立更完整的产品布局分类体系](#四建议建立更完整的产品布局分类体系)
      - [五、一个重要区别：布局类型 ≠ 页面类型](#五一个重要区别布局类型-页面类型)
  - [页面](#页面)
    - [第一层：页面类型（Page Type）](#第一层页面类型page-type)
    - [第二层：页面内部布局（Layout Pattern）](#第二层页面内部布局layout-pattern)
      - [建立 UI 页面模板库](#建立-ui-页面模板库)
    - [第三层：交互模式（Interaction Pattern）](#第三层交互模式interaction-pattern)
  - [动效质感提升库](#动效质感提升库)
    - [文字动画](#文字动画)
    - [动画](#动画)
    - [高级组件](#高级组件)
    - [微交互](#微交互)
    - [动态背景](#动态背景)
  - [存在问题](#存在问题)
  - [来源整理](#来源整理)
    - [一、DESIGN.md 与设计规范参考](#一designmd-与设计规范参考)
      - [1. VoltAgent / Awesome DESIGN.md](#1-voltagent-awesome-designmd)
      - [2. Google Stitch](#2-google-stitch)
      - [3. getdesign.md](#3-getdesignmd)
    - [二、UI 风格与设计方法参考](#二ui-风格与设计方法参考)
      - [4. StyleKit](#4-stylekit)
      - [5. Taste Skill](#5-taste-skill)
    - [三、UI 组件与动效资源](#三ui-组件与动效资源)
      - [6. Magic UI](#6-magic-ui)
      - [7. React Bits](#7-react-bits)
    - [四、UI/UX 设计智能与规范生成](#四uiux-设计智能与规范生成)
      - [8. UI/UX Pro Max](#8-uiux-pro-max)

## 总体思想与系统构成

本项目围绕两个方面展开：一是梳理一个产品或系统的前端界面由哪些部分构成；二是建立可持续积累和复用的设计知识库及模板资料库。

前者用于明确系统与页面的组织方式，后者用于沉淀统一规范、优秀页面方案和可复用组件，为不同类型的系统提供设计参考。

### 一、平台前端构成

平台前端主要由**平台**和**页面**两个层级构成。

#### 1. 平台（Platform）

平台层关注整个系统的整体组织与统一规范，需要明确：

- **平台规范：** 建立适用于整个系统的统一设计规范。
- **导航类型：** 根据产品类型和功能结构，选择合适的系统导航方式。
  - 管理工具类系统可能采用顶部导航 + 侧边导航。
  - 门户网站可能只采用顶部导航。

#### 2. 页面（Page）

页面层关注系统内部具体页面的功能与组织方式，需要明确：

- **页面类型：** 页面承担什么功能，不同页面可以具有不同的用途。
- **页面布局：** 页面内部如何组织内容，以及如何安排各类组件。

### 二、知识库及模板资料库

知识库及模板资料库用于持续收集、整理和复用设计经验，主要由三个部分构成。

#### 1. 平台规范模板库

沉淀不同平台或产品的统一设计规范。

- 使用 **`DESIGN.md`** 描述平台的设计规范。
- 配套提供 HTML 预览，直观查看规范的实际呈现效果。
- 建立统一的快速预览入口，便于查阅和比较不同平台的 DESIGN。

#### 2. 优质页面设计库

沉淀优秀页面的结构组织方式与交互设计方案。

- **优质布局库：** 收集页面布局及组件组织方式，研究如何组合和安排组件。
- **交互库：** 收集优秀交互方案，整理不同场景下适合采用的组件及组合方式。

#### 3. 优质组件库

沉淀可在不同页面和系统中复用的组件资源。

- **基础组件：** 面向常见功能需求，整理对应的基础组件。
- **高级组件：** 收集具有特殊视觉效果或表现形式的组件。

### 三、整体关系

平台前端构成明确系统的组织层级；知识库及模板资料库则将设计规范、页面方案和组件资源沉淀下来，供后续系统设计与页面构建时查阅和复用。

## 平台

### 产品定义 模板

这个系统是什么平台

系统属于什么产品，例如 SaaS、开发工具、数据平台、内容平台。

### 系统规范 **UI风格**

整个系统需要有统一设计语言及规范【**`DESIGN.md`**】【预览HTML】

目前参考

 https://github.com/VoltAgent/awesome-design-md

https://www.stylekit.top/zh/styles

https://github.com/AnxForever/stylekit

#### Design Tokens.md

[DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/)是 Google Stitch 引入的一个新概念。它是一个纯文本设计系统文档，AI 代理会读取该文档以生成一致的用户界面。

它只是一个 Markdown 文件。无需 Figma 导出，无需 JSON 模式，也无需任何特殊工具。只需将其放入项目根目录，任何 AI 编码代理或 Google Stitch 都能立即理解您的 UI 应该是什么样子。Markdown 是 LLM 最易读取的格式，因此无需解析或配置。

#### 一份 Design Tokens.md 通常写什么

| 构成                   | 指导 AI 做什么                                             | 仓库里的例子                                                 |
| ---------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| **视觉风格**           | 确定页面的整体气质、信息密度和视觉重点                     | Linear 用接近黑色的底色、细边框和产品截图构成技术感较强的页面。 [Linear 概览 (line 258)](X:/ToolOrbit/yeyunby-designui/design-md/linear.app/DESIGN.md:258) |
| **颜色**               | 指定主色、文字色、背景色，以及每种颜色的用途               | Linear 将淡紫色 `#5e6ad2` 用于品牌标识、主要按钮、焦点环和链接强调。 [Linear 颜色规则 (line 480)](X:/ToolOrbit/yeyunby-designui/design-md/linear.app/DESIGN.md:480) |
| **字体**               | 定义标题、正文、标签和代码各用什么字体，以及字号和字重     | Claude 用 Copernicus 做标题、StyreneB 做正文和控件文字，并给出了替代字体。 [Claude 字体规则 (line 359)](X:/ToolOrbit/yeyunby-designui/design-md/claude/DESIGN.md:359) |
| **布局、间距与层次**   | 定义容器宽度、网格、留白、圆角、边框和阴影                 | Claude 用 `4px` 作为间距基准，内容区约 `1200px`，常规区块间距用 `96px`。 [Claude 布局规则 (line 396)](X:/ToolOrbit/yeyunby-designui/design-md/claude/DESIGN.md:396) |
| **组件及状态**         | 定义按钮、卡片、输入框、标签页等组件长什么样               | Claude 主按钮高 `40px`，内边距 `12px 20px`，背景色引用 `{colors.primary}`。Linear 还记录了按钮悬停和按下的样式。 [Claude 按钮 (line 139)](X:/ToolOrbit/yeyunby-designui/design-md/claude/DESIGN.md:139) · [Linear 组件 (line 409)](X:/ToolOrbit/yeyunby-designui/design-md/linear.app/DESIGN.md:409) |
| **响应式规则**         | 说明屏幕变窄时，导航、列数和字号怎么变                     | Claude 在小于 `768px` 时把功能卡片改为单列，首页主标题从 `64px` 缩到 `32px`。 [Claude 响应式规则 (line 543)](X:/ToolOrbit/yeyunby-designui/design-md/claude/DESIGN.md:543) |
| **设计约束与使用提示** | 说明哪些做法符合该风格、哪些要避免，以及哪些细节没有采集到 | Linear 提供逐组件迭代的建议，并注明考察的页面未展示表单错误和校验样式。 [Linear 迭代指南 (line 532)](X:/ToolOrbit/yeyunby-designui/design-md/linear.app/DESIGN.md:532) · [已知缺口 (line 542)](X:/ToolOrbit/yeyunby-designui/design-md/linear.app/DESIGN.md:542) |

备注

https://getdesign.md/design-md 存在目前可能需要继续研究的页面

#### 预览HTML

##### 规范预览

可视化查看规范

##### 模版预览

### 产品布局类型

#### **一、导航布局（Navigation Layout）**

这是你提出的顶部、侧边所属的分类。

[Horizontal Navigation | PatternFly](https://images.openai.com/static-rsc-4/kR0vNmKo-0sBqnBVHrEcvUiQkMnZhy5OF39467D18NIZiwtbipc44SwWxc8uLJv49useB7lev54gd4m8Fa1_TZMdNbwPlwLV0rjVsue7RCgpLut5K5VDkUufEAtqQ2yzgEdfr_FM8QJh3HUDcEY019Iw4pBiyFi6sxiPxy3u_7w?purpose=inline)

**01. 顶部导航（Top Navigation）**

导航入口位于页面顶部，适合功能数量较少、横向分类清晰的系统。

[Shiptrack: Shipment Management Admin Dashboard Saas - Sidebar by Keitoto  on Dribbble](https://images.openai.com/static-rsc-4/p7G4Ny8P4oTwKZjZ63_k0V0HLaopuTdQsWSih3w_4Vfbyhep4zUaT9r53tlvk5gs3J915ZotmKyVnrhoHYYrJtUuw2kY1Q3bymLcGCReurFnNh74ZMQpj1fARCRIXw8BWTwoxN-AF0iyhEwP4fp61GwfMz34ZfBzVx_VYY7R0E0?purpose=inline)

**02. 侧边导航（Sidebar Navigation）**

左侧或右侧纵向导航，适合多模块、多层级管理系统。

[WebUI Layout | NVIDIA UFM-SDN Appliance User Manual](https://images.openai.com/static-rsc-4/x9E7mTSPR8yDDy3v4Y1qAKLUkmg7rslDl4RRd2qXT24M_Dd-vUeMg2rSJs8HfvfMhvwl1SGIk6PjfjtloMQIHxY66-e27x66UnvuZlXj4iBw3IwNYFZoWbtjikRmjYrxSKzJxR8s8iFMwaoN6sE7JfzmS8MqzhIJmndoXghinzY?purpose=inline)

**03. 混合导航（Hybrid Navigation）**

顶部 + 侧边同时存在。顶部负责全局模块，侧边负责当前模块内部页面。

[Bottom Navigation Bar by Raafi G on Dribbble](https://images.openai.com/static-rsc-4/uxim2yGI-GN5dDBUQSIk6QYAh5YVKyJgwVqS5_5O9ulA8RmesKV7fnGz4OowTf36JSCx2bq8Tb_tI6-xKFrqMpyLi4EZZx34kKLgWBuY9cB65XqEsZF8cLg1xorKomTsTNAc4i68cDn2JS9NJGkI0iMTBBydSYaoI8V6aV0oPNk?purpose=inline)

**04. 底部导航（Bottom Navigation）**

导航位于底部，常见于移动端、轻量工具和操作型应用。

[Introducing App Rail: Rethinking navigation from First Principles](https://images.openai.com/static-rsc-4/lYb0YKm1Hn_LqUxKGpb7k3Qspd03iLkghIOdrBn9bSAz--wOKplmkX7dJXHwn8Oc_rC4F7HCL1DVqe99EzToTV0jJ9Nt_ZjZt9D80Mk57v1bLOM0svhThJOflONJeFOd02Aa9u8UNmC0Pvz513hWNuHCWUp1vfdtPYLsRX8oDpw?purpose=inline)

**05. 图标轨道导航（Navigation Rail）**

仅保留一列图标，需要时展开为完整侧边栏，适合桌面工作台。

#### **二、内容布局（Content Layout）**

决定一个页面内部的内容如何组织。

[Webデザインのレイアウトはまず基本パターンから！目的に合った最適なレイアウトは？ | CodeCampus](https://images.openai.com/static-rsc-4/Uu_rrvFC8EaVL7f1KjFT0dsOELP--o35sixSQzjax2BLCs6l1xxkERpZ17a_EvMsnrIZr8zoqIazZK03ivNk7VevmPxl4gC6_ftqc-h6-Aw9WNiihLW69-mHAPwBhBgu8JtyKX-Mf81zj4T8O25U6OTEymqc_MfsRN49n1QN98Y?purpose=inline)

**06. 单栏布局（Single Column）**

一个主内容区域，适合阅读、编辑、表单和详情页面。

[AppStack - Bootstrap 5 Admin & Dashboard Template](https://images.openai.com/static-rsc-4/SOGbFx9dkqORFrcMKRBHBErakb2XiM-WAwnPtty2ttilNh-iHoq-ibIcfyQf77-yeI0WIrK6z5LiHUWk8ewdQZ4IXtXabGrp9FQYvV-HjVz8HLok7ZmaSyPCXA31g_IfBIrDolRi6neQKHs_dOB9SDLhj8nfedfWgBjca3f0LlY?purpose=inline)

**07. 双栏布局（Two Column）**

主内容 + 辅助内容，例如左侧列表、右侧详情。

[Re:Schedule - Productive Meetings](https://images.openai.com/static-rsc-4/ug8hqEzL966Hd80yA54B415_di1yJdTeO61sNn_6hPQTQJSW7IAj5nnpOEXPJTQUmL3WeK6ruzafYvZULxF6_OcFfXzMy5c_7PD0b8d-OSTi4CLXMiOACdSdYlg4yBQgJExuiUjmF2_e2eZ0S85iPbnehrH_IPd419rYKO97yoQ?purpose=inline)

**08. 三栏布局（Three Column）**

导航 + 列表 + 详情，适合邮件、知识库和资源管理。

[Bento UI — что это за тренд и как его применить?  — читайте на UPROCK](https://images.openai.com/static-rsc-4/Z7mIlfhQ2jSitCeS6CPzeFWxb52YZS9xyqdnntqzvKkxS55eszQUFeHVWDxELbRv515gr3W-Gr-7sMLELisQ-ep3O1KycpvbOEGf2neM-aqqakK-bhFwfrcAfVz7ifX-8VncmCCuzkWBqhyMqaD-AE2M-GrqYjwPhLEK6qjSa3k?purpose=inline)

**09. 网格布局（Grid / Bento Grid）**

使用卡片网格组织不同功能模块，适合仪表盘和数据展示。

[Masonry Layout Inspiration by Amit Mojumder | Dribbble](https://images.openai.com/static-rsc-4/eXn6mzUhmvQxNu4XxbqHQUrweOdbeJaRL7hlzYH6EsZlxc9qiGH9pLrDuKTUCRBobFjxg0cS7Boln8pul0iz4KSAt5JUO0qQym71CMlc9vBb7VXbow4qGR7xMs3dsqYNOuoTK1KYeMXJjRYGH7iMG80OO3vuAVAXbgwCFXSvRAQ?purpose=inline)

**10. 瀑布流布局（Masonry）**

内容高度不一致，按列连续排列，适合素材库、图片库和灵感收藏。

#### **三、操作与工作区布局（Workspace Layout）**

这类布局关注用户如何操作，而不是单纯如何浏览。

[ALLO Projects | Where project management meets visual collaboration](https://images.openai.com/static-rsc-4/YXi6IqK6FJSeUSstTSeoPJVGwFhTALKte9rtUsEz46qNi6z3KwIFjALceMfeT_foC5YR8CIo06sBdywGk8FJJCJfm-fm_FtsHGGSMmKmo8zBqiIkjNPBxUAbftub_JH2YMIrBesk_pfev_6xchknsP4ZTgJLDWMykT3aGWokjXA?purpose=inline)

**11. 工作区布局（Workspace Layout）**

主工作区域占据大部分空间，工具栏、面板和辅助操作围绕工作区组织。

[User interface overview | IntelliJ Platform Plugin SDK](https://images.openai.com/static-rsc-4/i3O9f_saJzJQBVtIL9XIN4e339QRJXVjP-at68m3ynBCwSdmy7njEXfXn4mkk_o1WkPRaFTnbyEGTvMXVpgBqb2W5pm0nkXbdjKoP7ldmHFfOLOdUJRBwsmQCMBbD9NWawm07-AAXuLrey-21y7Y6NO4LbsxMA-Cj1tu7Y3Jgug?purpose=inline)

**12. 分屏布局（Split View）**

将屏幕分成多个可独立操作的区域，支持调整比例、拖拽和联动。

#### **四、建议建立更完整的产品布局分类体系**

以上 12 种可以作为基础布局类型，但在 DESIGN.md 或 UI Design Studio 中，我建议采用多维度分类，而不是将它们混为同一级别。

| 一级分类   | 二级分类                         |
| ---------- | -------------------------------- |
| 导航布局   | 顶部、侧边、底部、混合、图标轨道 |
| 内容布局   | 单栏、双栏、三栏、网格、瀑布流   |
| 工作区布局 | 工作台、分屏、画布、全屏         |
| 数据布局   | 表格、列表、看板、时间轴、日历   |
| 展示布局   | 卡片、画廊、瀑布流、数据仪表盘   |
| 操作布局   | 表单、向导、多步骤、抽屉、弹窗   |
| 响应式布局 | 固定、流式、自适应、断点切换     |

#### **五、一个重要区别：布局类型 ≠ 页面类型**

例如一个 CRM 系统：

- 产品布局：顶部导航 + 左侧导航。
- 页面布局：三栏布局。
- 页面类型：客户管理。
- 数据展示：表格。
- 操作方式：右侧抽屉编辑。

它们是不同层次，可以组合使用。

这样未来无论是工具类、管理类、展示类、数据分析类还是创作类系统，都可以通过组合这些布局维度形成完整的产品界面。

**下一步建议：** 将这套体系扩展成的正式「产品布局标准」，为每个布局类型定义结构图、适用场景、组合规则和 HTML 独立预览。

## 页面

### **第一层：页面类型（Page Type）**

系统需要不同页面形成完整系统

这个页面是用来做什么的？

工具 / 管理 / 展示 / 分析 / 监控 / 流程……

| 页面类型 | 具体页面模板                           |
| -------- | -------------------------------------- |
| 工具型   | 编辑器、画布、工作区、预览器           |
| 管理型   | 列表管理、详情管理、资源管理、用户管理 |
| 展示型   | 卡片展览、瀑布流、作品集、产品详情     |
| 分析型   | BI 仪表盘、趋势分析、对比分析、报表    |
| 监控型   | 实时监控、日志、告警、运行状态         |
| 流程型   | 流程设计、审批、执行跟踪、调度         |
| 内容型   | 文档阅读、富文本编辑、知识库、文件浏览 |
| 协作型   | 看板、团队空间、讨论区、活动流         |
| 配置型   | 设置中心、配置表单、集成配置           |
| 交易型   | 商品详情、购物车、订单、支付           |
| 引导型   | 登录、注册、安装向导、多步骤表单       |
| 门户型   | Dashboard 首页、应用入口、工作台首页   |

另外，我建议再增加一个重要概念：**混合型页面（Hybrid Page）**。

真实系统中的页面往往不属于单一类型。例如：

- 首页：门户 + 分析 + 监控。
- 项目详情：管理 + 展示 + 内容。
- 工作流编辑器：工具 + 流程 + 监控。
- 资源管理中心：管理 + 内容 + 工具。

因此，分类时应该支持一个主类型和多个辅助类型，而不是强行给每个页面贴唯一标签。

### **第二层：页面内部布局（Layout Pattern）**

可参考https://www.stylekit.top/zh/styles?type=layout

https://github.com/AnxForever/stylekit

页面需要继续拆分

这个页面如何组织内容？ 需要不同组件构成

表格 / 卡片 / 网格 / 看板 / 时间轴 / 画布 / 分栏……

#### **建立 UI 页面模板库**

12 大类只是第一层。真正对 UI Design Studio 有价值的，是把每一类拆解为可复用的具体页面模板。

例如：

| 页面类型 | 具体页面模板                           |
| -------- | -------------------------------------- |
| 工具型   | 编辑器、画布、工作区、预览器           |
| 管理型   | 列表管理、详情管理、资源管理、用户管理 |
| 展示型   | 卡片展览、瀑布流、作品集、产品详情     |
| 分析型   | BI 仪表盘、趋势分析、对比分析、报表    |
| 监控型   | 实时监控、日志、告警、运行状态         |
| 流程型   | 流程设计、审批、执行跟踪、调度         |
| 内容型   | 文档阅读、富文本编辑、知识库、文件浏览 |
| 协作型   | 看板、团队空间、讨论区、活动流         |
| 配置型   | 设置中心、配置表单、集成配置           |
| 交易型   | 商品详情、购物车、订单、支付           |
| 引导型   | 登录、注册、安装向导、多步骤表单       |
| 门户型   | Dashboard 首页、应用入口、工作台首     |

### **第三层：交互模式（Interaction Pattern）**

用户如何与页面交互？【涉及到功能】【可以进行收录一些良好方案】

拖拽 / 搜索 / 筛选 / 编辑 / 批量操作 / 实时交互……

例如：

| 页面            | 页面类型 | 布局         | 交互       |
| --------------- | -------- | ------------ | ---------- |
| GitScout 榜单   | 展示型   | 表格、卡片   | 排序、筛选 |
| RINGS 调度页    | 工具型   | 时间轴、看板 | 拖拽、调整 |
| Archive Studio  | 管理型   | 表格、网格   | 批量操作   |
| GitScout 分析页 | 分析型   | 图表、仪表盘 | 时间筛选   |
| ComfyUI 工作流  | 工具型   | 节点画布     | 连线、拖拽 |

## 动效质感提升库

参考

https://reactbits.dev/

可以提升组件或UI风格规范的质感或动效

还需要保留其工作室特点、快速浏览改变效果

与 DESIGN.md 的设计维度关联。

### 文字动画

### 动画

### 高级组件

### 微交互

### 动态背景

## 存在问题

一些页面过多动效质感 会缺乏简洁性

如何添加动效质感到 

## 来源整理

本章节集中管理目前收集到的系统 UI 设计经验参考来源。它们是 UI Design Studio 建立设计规范、研究视觉风格、积累页面与组件方案，以及改进 AI 辅助设计工作流时的外部参考资料。

来源按照项目或平台归档。每个来源保留其 GitHub 仓库、官方网站或文档入口，并说明其主要内容及可供本项目参考的方向。这里记录的是参考来源，不代表已经完成采集、安装或集成。

### 一、DESIGN.md 与设计规范参考

#### 1. VoltAgent / Awesome DESIGN.md

- **GitHub：** https://github.com/VoltAgent/awesome-design-md
- **相关站点：** https://getdesign.md/design-md

**来源说明：**

收集来自真实网站和品牌设计体系的 `DESIGN.md` 文件，供设计人员和 AI 编码代理参考。内容通常涉及视觉风格、颜色及其用途、字体层级、组件样式、布局原则、响应式行为和设计约束。

**参考价值：**

- 研究不同品牌如何将视觉语言整理成可阅读、可复用的设计规范。
- 对比不同产品的 DESIGN.md 章节组织方式和描述深度。
- 参考其规范文件与预览页面的配套方式，为本项目的平台规范模板库提供样例。

#### 2. Google Stitch

- **DESIGN.md 文档：** https://stitch.withgoogle.com/docs/design-md/overview/
- **官方介绍：** https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/
- **Stitch Skills：** https://github.com/google-labs-code/stitch-skills

**来源说明：**

Google Stitch 将 `DESIGN.md` 作为可供 AI 理解和复用的设计系统描述文件。它用于表达产品的视觉规则和设计意图，使设计规则能够在不同页面、项目及工具之间复用。Stitch Skills 仓库进一步提供围绕 Stitch 的设计、构建和辅助工作流技能。

**参考价值：**

- 研究 DESIGN.md 的组织方式、描述原则及跨工具复用方式。
- 参考从现有界面提取设计规范、管理设计系统和将设计转换为前端组件的工作流。
- 研究 Agent Skills 如何辅助设计生成、设计系统管理和前端实现。

#### 3. getdesign.md

- **官方网站：** https://getdesign.md/
- **DESIGN.md 目录：** https://getdesign.md/design-md
- **Backend & DevOps 分类示例：** https://getdesign.md/design-md/steep?category=backend-devops

**来源说明：**

提供来自不同网站和产品的 DESIGN.md 设计分析与目录。可按产品或领域查阅设计参考，并将对应的设计描述作为 AI 辅助界面构建时的参考资料。

**参考价值：**

- 查阅不同类型产品的设计规范样例。
- 对比同一类产品在视觉风格、颜色、字体和组件规则上的差异。
- 研究设计规范目录如何分类、检索和展示。
- 为本项目的 DESIGN 快速预览与查阅入口提供参考。

### 二、UI 风格与设计方法参考

#### 4. StyleKit

- **GitHub：** https://github.com/AnxForever/stylekit
- **官方网站：** https://www.stylekit.top/zh
- **风格展示：** https://www.stylekit.top/zh/styles

**来源说明：**

面向 AI 生成网页的开源视觉风格库，提供可浏览的风格参考，以及与风格对应的设计令牌、组件配方和提示词。项目还提供 Agent Skill、MCP 等方式，方便设计风格进入 AI 辅助开发流程。

**参考价值：**

- 浏览和比较不同视觉风格，形成可选择的风格参考集合。
- 研究如何将视觉风格转化为设计令牌、组件规则和可执行的提示。
- 参考风格预览、快速切换和效果展示方式。
- 研究风格资源如何被 AI Agent 或 MCP 工作流调用。

#### 5. Taste Skill

- **GitHub：** https://github.com/Leonxlnx/taste-skill
- **官方网站：** https://www.tasteskill.dev/

**来源说明：**

面向 AI 编码代理的设计能力 Skill，强调艺术指导、参考图像和浏览器检查，帮助代理在界面实现过程中形成更明确的视觉方向，并通过实际页面检查设计结果。

**参考价值：**

- 研究如何把设计方向、参考图像和实现约束转化为 Agent 可执行的指导。
- 参考从设计构思到页面实现，再到浏览器检查的工作流程。
- 研究如何减少通用化、模板化的 AI 页面效果。

### 三、UI 组件与动效资源

#### 6. Magic UI

- **GitHub：** https://github.com/magicuidesign/magicui/tree/main
- **官方网站：** https://magicui.design/
- **Pro 版本：** https://pro.magicui.design/

**来源说明：**

提供面向 React、Tailwind CSS 等前端技术的 UI 组件和视觉效果资源，包含可用于界面构建的组件示例与动效效果。Pro 站点提供其扩展资源。

**参考价值：**

- 收集可复用的高级 UI 组件和视觉表现方案。
- 研究组件的使用方式、代码组织及实际页面效果。
- 为优质组件库补充可参考的组件实现和效果案例。

#### 7. React Bits

- **官方网站：** https://reactbits.dev/

**来源说明：**

提供 React 界面组件、动画和交互效果的展示与使用参考，适合浏览不同视觉效果，并了解其在前端项目中的实现方式。

**参考价值：**

- 收集文字动画、动态背景、微交互和具有特殊视觉表现的组件。
- 通过在线示例快速查看和比较效果。
- 研究如何将动效作为可选增强能力，而不是默认应用到所有页面。
- 为动效质感提升库及高级组件库提供参考。

### 四、UI/UX 设计智能与规范生成

#### 8. UI/UX Pro Max

- **GitHub：** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- **官方网站：** https://www.uupm.cc/#how-it-works

**来源说明：**

面向 AI 编码助手的 UI/UX 设计智能 Skill，提供可检索的设计风格、配色、字体组合、图表类型、UX 指南及不同技术栈的实现建议，并通过工作流辅助生成和应用设计方案。

**参考价值：**

- 研究如何根据产品类型和需求检索适合的设计风格、颜色与字体。
- 参考将设计知识组织为可查询数据，并由 Skill 在开发过程中调用的方式。
- 研究设计规范生成、技术栈适配和界面质量检查的工作流程。
- 为本项目的设计知识库、规范生成能力及 AI 辅助设计流程提供参考。
