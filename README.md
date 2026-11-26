# Yeyunby DesignForge

> **Design Research · Design Systems · UI Patterns · Components · Motion · AI Workflow**

Yeyunby DesignForge 是一个面向 UI 设计研究与设计系统构建的知识平台。项目以真实产品界面、设计规范、页面方案、组件资源和交互案例为参考，通过持续采集、分析、整理与归档，将分散的 UI 设计经验沉淀为可查阅、可比较、可复用的设计知识与模板资产。

项目不仅关注单个页面如何设计，也关注一个完整产品或系统的前端由哪些层级构成，以及如何通过统一规范、页面组织方式、组件组合和交互模式，形成一致且可扩展的界面体系。

---

## 目录

- [项目概述](#项目概述)
- [项目目标](#项目目标)
- [核心构成](#核心构成)
  - [平台前端构成](#一平台前端构成)
  - [知识库及模板资料库](#二知识库及模板资料库)
  - [页面设计研究体系](#三页面设计研究体系)
  - [动效与视觉效果资源库](#四动效与视觉效果资源库)
- [核心工作内容](#核心工作内容)
- [设计参考来源](#设计参考来源)
- [项目建设原则](#项目建设原则)
- [项目定位总结](#项目定位总结)

---

## 项目概述

在开发不同类型的产品时，界面设计通常涉及多个层面：平台整体规范、系统导航、页面类型、页面布局、组件选择、交互方式以及视觉效果。优秀的设计经验又分散在设计系统文档、开源项目、组件网站、真实产品和设计案例中。

Yeyunby DesignForge 希望将这些内容组织成一个持续积累的设计研究与资产库，形成从**设计参考采集 → 设计分析 → 规范整理 → 页面与组件沉淀 → 预览查阅 → AI 辅助应用**的工作体系。

项目当前以知识体系、参考资料和模板建设为基础，逐步形成可供后续产品设计与前端实现使用的统一资源平台。文档中列出的能力和资源是项目规划与研究范围，不代表所有功能均已实现或所有外部资源均已集成。

## 项目目标

- **建立统一的设计规范体系：** 通过 `DESIGN.md` 描述平台的视觉语言、设计令牌、组件规则和使用约束，并提供配套 HTML 预览。
- **建立快速查阅入口：** 将不同平台或产品的 DESIGN 规范集中展示，便于快速浏览、比较和选择。
- **积累优秀页面方案：** 研究页面结构、组件组织方式和适用场景，形成可复用的页面设计参考。
- **积累组件与交互资源：** 收录基础组件、高级组件及成熟交互模式，明确不同需求下适合采用的组件与组合方式。
- **沉淀动效与视觉效果：** 收集文字动画、微交互、动态背景和特殊视觉组件，并研究其适用边界。
- **支持 AI 辅助设计：** 将设计经验整理为 AI 易于理解和调用的文档、模板及 Skills，为设计规范生成和界面构建提供依据。

## 核心构成

### 一、平台前端构成

平台前端主要由**平台（Platform）**和**页面（Page）**两个层级构成。

#### 1. 平台（Platform）

平台层关注整个系统的整体组织与统一规范，需要明确：

- **平台规范：** 建立适用于整个系统的统一设计规范。
- **导航类型：** 根据产品类型和功能结构，选择合适的系统导航方式。
  - 管理工具类系统可能采用顶部导航 + 侧边导航。
  - 门户网站可能只采用顶部导航。

#### 2. 页面（Page）

页面层关注系统内部具体页面的功能与组织方式，需要明确：

- **页面类型：** 页面承担什么功能，不同页面可以具有不同用途。
- **页面布局：** 页面内部如何组织内容，以及如何安排各类组件。

### 二、知识库及模板资料库

知识库及模板资料库用于持续收集、整理和复用设计经验，主要由三个部分构成。

#### 1. 平台规范模板库（Design System Library）

沉淀不同平台或产品的统一设计规范。

- 使用 **`DESIGN.md`** 描述平台的设计规范。
- 配套提供 HTML 预览，直观查看规范的实际呈现效果。
- 建立统一的快速预览入口，便于查阅和比较不同平台的 DESIGN。
- 研究设计令牌、视觉风格、颜色、字体、布局、组件状态、响应式规则及设计约束等规范内容。

#### 2. 优质页面设计库（Page Design Library）

沉淀优秀页面的结构组织方式与交互设计方案。

- **页面方案：** 收集优秀产品页面，分析其页面结构、内容层次和功能组织。
- **布局组织：** 研究页面内部如何组织内容，以及如何组合和安排组件。
- **交互库：** 收集优秀交互方案，整理不同场景下适合采用的组件及组合方式。
- **页面模板：** 将具有复用价值的页面方案整理为可查阅的模板。

#### 3. 优质组件库（Component Library）

沉淀可在不同页面和系统中复用的组件资源。

- **基础组件：** 面向常见功能需求，整理对应的基础组件。
- **高级组件：** 收集具有特殊视觉效果或表现形式的组件。
- **组件参考：** 记录组件来源、使用方式、适用场景和实际效果。
- **组件组合：** 研究多个组件如何组合以满足具体页面功能。

### 三、页面设计研究体系

页面设计研究从三个层次理解页面，避免将页面用途、内容组织方式和交互方式混为一谈。

#### 1. 页面类型（Page Type）

回答：**这个页面是用来做什么的？**

| 页面类型 | 具体页面示例 |
| --- | --- |
| 工具型 | 编辑器、画布、工作区、预览器 |
| 管理型 | 列表管理、详情管理、资源管理、用户管理 |
| 展示型 | 卡片展览、瀑布流、作品集、产品详情 |
| 分析型 | BI 仪表盘、趋势分析、对比分析、报表 |
| 监控型 | 实时监控、日志、告警、运行状态 |
| 流程型 | 流程设计、审批、执行跟踪、调度 |
| 内容型 | 文档阅读、富文本编辑、知识库、文件浏览 |
| 协作型 | 看板、团队空间、讨论区、活动流 |
| 配置型 | 设置中心、配置表单、集成配置 |
| 交易型 | 商品详情、购物车、订单、支付 |
| 引导型 | 登录、注册、安装向导、多步骤表单 |
| 门户型 | Dashboard 首页、应用入口、工作台首页 |

真实系统中的页面往往不属于单一类型，因此研究和归类时应允许混合型页面，支持一个主类型和多个辅助类型。

#### 2. 页面内部布局（Layout Pattern）

回答：**这个页面如何组织内容？**

页面内部可以由不同内容组织方式和组件构成，例如表格、卡片、网格、看板、时间轴、画布和分栏等。项目将通过页面案例研究这些组织方式的结构、适用场景及组件组合方法，并逐步建立 UI 页面模板库。

#### 3. 交互模式（Interaction Pattern）

回答：**用户如何与页面交互？**

研究和收录拖拽、搜索、筛选、编辑、批量操作、实时交互等模式，分析它们适合解决什么问题，以及需要哪些组件配合。

| 页面示例 | 页面类型 | 内容组织示例 | 交互示例 |
| --- | --- | --- | --- |
| GitScout 榜单 | 展示型 | 表格、卡片 | 排序、筛选 |
| RINGS 调度页 | 工具型 | 时间轴、看板 | 拖拽、调整 |
| Archive Studio | 管理型 | 表格、网格 | 批量操作 |
| GitScout 分析页 | 分析型 | 图表、仪表盘 | 时间筛选 |
| ComfyUI 工作流 | 工具型 | 节点画布 | 连线、拖拽 |

### 四、动效与视觉效果资源库（Motion & Visual Effects Library）

收集可用于提升界面表现力的动效、微交互和特殊视觉组件，并保留工作室式的快速浏览与效果对比体验。

计划研究和整理的内容包括：

- **文字动画**
- **常规动画**
- **高级组件**
- **微交互**
- **动态背景**

动效资源需要与 DESIGN.md 的设计维度建立关联，便于在具体设计规范或页面中按需参考。

**设计注意事项：** 动效属于可选择的视觉增强能力，不应默认应用到所有页面。需要考虑页面功能、信息密度和使用场景，避免因过多动效影响简洁性、可读性和操作效率。

## 核心工作内容

项目围绕以下工作持续推进：

1. **采集设计来源：** 收集设计规范、设计系统、优秀页面、组件、动效和 AI 设计工具等参考资源。
2. **分析设计经验：** 研究来源的内容组织、设计方法、组件实现和适用场景。
3. **整理知识资产：** 将有价值的内容归入规范模板库、页面设计库、组件库、交互库或动效资源库。
4. **建立预览能力：** 为 DESIGN.md、页面模板和组件效果提供直观的 HTML 或在线预览入口。
5. **建立关联关系：** 让设计规范、页面结构、组件组合、交互模式和动效资源能够相互关联。
6. **支持 AI 工作流：** 将整理后的设计知识用于设计规范生成、方案选择和前端界面构建。

## 设计参考来源

以下来源用于研究和参考。收录不代表已经安装、集成或完整采集。

### 一、DESIGN.md 与设计规范参考

| 来源 | 入口 | 主要参考方向 |
| --- | --- | --- |
| VoltAgent / Awesome DESIGN.md | [GitHub](https://github.com/VoltAgent/awesome-design-md) · [GetDesign 目录](https://getdesign.md/design-md) | 真实产品的 DESIGN.md 样例、规范结构与设计规则 |
| Google Stitch | [DESIGN.md 文档](https://stitch.withgoogle.com/docs/design-md/overview/) · [官方介绍](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/) · [Stitch Skills](https://github.com/google-labs-code/stitch-skills) | DESIGN.md 的组织、复用及 AI 设计工作流 |
| getdesign.md | [官方网站](https://getdesign.md/) · [规范目录](https://getdesign.md/design-md) | 不同产品的规范案例、目录分类与快速查阅 |

### 二、UI 风格与设计方法参考

| 来源 | 入口 | 主要参考方向 |
| --- | --- | --- |
| StyleKit | [GitHub](https://github.com/AnxForever/stylekit) · [官方网站](https://www.stylekit.top/zh) · [风格展示](https://www.stylekit.top/zh/styles) | 视觉风格、设计令牌、组件配方、风格预览与 AI 调用 |
| Taste Skill | [GitHub](https://github.com/Leonxlnx/taste-skill) · [官方网站](https://www.tasteskill.dev/) | 艺术指导、参考图像、设计实现与浏览器检查 |
| Material Design 3 | [官方网站](https://m3.material.io/) | 设计系统、组件规范与设计指导 |
| IBM Carbon Design System | [官方网站](https://www.carbondesignsystem.com/) | 企业级设计系统与组件规范 |
| U.S. Web Design System | [官方网站](https://designsystem.digital.gov/) | Web 设计规范、组件与可访问性 |

### 三、UI 组件与动效资源

| 来源 | 入口 | 主要参考方向 |
| --- | --- | --- |
| Magic UI | [GitHub](https://github.com/magicuidesign/magicui) · [官方网站](https://magicui.design/) · [Pro](https://pro.magicui.design/) | React 组件、特殊视觉效果与动效 |
| React Bits | [官方网站](https://reactbits.dev/) | 文字动画、微交互、动态背景和高级组件 |
| Aceternity UI | [官方网站](https://ui.aceternity.com/) | 高表现力 UI 组件与页面效果 |
| shadcn/ui | [官方网站](https://ui.shadcn.com/) | 可组合、可定制的前端组件 |
| Radix Primitives | [官方网站](https://www.radix-ui.com/primitives) | 无样式基础组件与交互原语 |
| Uiverse | [官方网站](https://uiverse.io/) | 社区组件与 CSS 效果参考 |
| Motion | [文档](https://motion.dev/docs) | 前端动画与交互动效 |

### 四、UI/UX 设计智能与规范生成

| 来源 | 入口 | 主要参考方向 |
| --- | --- | --- |
| UI/UX Pro Max | [GitHub](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · [官方网站](https://www.uupm.cc/#how-it-works) | 设计风格、配色、字体、UX 指南、技术栈建议与规范生成 |

### 五、其他设计基础与素材来源

| 类别 | 来源 |
| --- | --- |
| 设计规范与令牌 | [Ant Design](https://ant.design/) · [Radix Colors](https://www.radix-ui.com/colors) · [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) · [Design Tokens Community Group](https://www.designtokens.org/) |
| 字体与图标 | [Google Fonts](https://github.com/google/fonts) · [Lucide](https://lucide.dev/) · [Iconify Icon Sets](https://github.com/iconify/icon-sets) |
| CSS 与视觉效果 | [MDN CSS 渐变](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/gradient) |
| 图表与数据展示 | [Apache ECharts](https://echarts.apache.org/en/index.html) |
| 图片与素材 | [Unsplash](https://unsplash.com/license) · [Pexels](https://www.pexels.com/license/) |
| 页面案例与灵感 | [Mobbin](https://mobbin.com/) · [Refero](https://refero.design/) |
| 可访问性 | [W3C ARIA APG](https://www.w3.org/WAI/ARIA/apg/) · [WCAG 2.2](https://www.w3.org/TR/WCAG22/) |

### 六、GetDesign 重点走查入口

- [网站目录](https://getdesign.md/design-md)
- [定制请求](https://getdesign.md/request)
- [目录通行证](https://getdesign.md/design-md-pass)
- [Eraser 目录详情](https://getdesign.md/design-md/eraser)
- [Lottiefiles 目录详情](https://getdesign.md/design-md/lottiefiles)
- [Linear 公开规范](https://getdesign.md/linear.app/design-md)
- [Linear 浅色预览](https://getdesign.md/design-md/linear.app/preview)
- [Linear 深色预览](https://getdesign.md/design-md/linear.app/preview-dark)
- [Zapier 公开规范](https://getdesign.md/zapier/design-md)
- [Zapier 浅色预览](https://getdesign.md/zapier/preview)
- [Zapier 深色预览](https://getdesign.md/zapier/preview-dark)

## 项目建设原则

- **先研究，再采纳：** 外部来源先作为参考资料记录，经过研究和判断后再决定是否纳入项目规范或资源库。
- **规范与案例分开：** DESIGN.md 描述设计规则；页面、组件和交互案例提供具体参考，两者相互关联但不混为一类。
- **预览与文档配套：** 重要设计规范和可复用资源尽可能提供直观预览，降低查阅和比较成本。
- **按需使用效果：** 组件和动效应服务于页面功能与信息表达，避免为了视觉效果而堆叠。
- **持续维护来源：** 记录来源入口、用途和参考价值，并区分已研究、已采纳与尚待研究的内容。

## 项目定位总结

**Yeyunby DesignForge 是 Yeyunby 旗下的 UI 设计研究与设计系统构建平台。**

它通过设计规范、页面方案、组件资源、交互模式和动效案例的持续研究与沉淀，建立一个可查阅、可比较、可复用，并能够支持 AI 辅助设计与前端实现的知识体系。

项目的核心方向是：**把分散的优秀 UI 设计经验，整理为结构化的设计知识与可复用资产。**
