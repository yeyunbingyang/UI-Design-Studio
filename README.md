# UI Design Studio — 产品需求文档（PRD）

> 文档版本：V1.2 Draft | 日期：2026-11-24 | 状态：待评审
> 本文定义 UI 风格资源与设计系统工作台的新增需求，不代表已实现功能。历史项目说明描述 Frontend Design Studio V1.2.0 / M3；本文以兼容其 Codex Skills 和 Playwright Visual QA 为原则，不重置现有版本号。

## 当前开发状态与设计文档

- 当前产品需求为 **V1.2 / 20 维体系**；旧 M4-A 详细设计和 A2 代码为 V1.1 / 12 维历史基线，尚未升级，不代表新需求已实现。
- [旧版 A2 独立 HTML 原型](prototype/index.html)：下载后用浏览器打开；已通过 JavaScript 语法检查，真实浏览器功能验收待完成。
- [资源分类旧版](docs/design/resource-taxonomy.md) · [组合器旧版](docs/design/composer-spec.md) · [第三方整合旧版](docs/design/resource-integration.md) · [实施计划旧版](docs/design/m4-a-plan.md)
- 下一阶段：A3 schema v2、迁移器、20 维资源模型及霓虹复古示范；再更新原型与测试。

### A3.1 设计资产标准（已提交）

- [资产标准与 Tokens 规则](docs/design/asset-standard-v2.md)
- [20 维候选资源目录（85 项）](design-system/v2/catalog.json)
- [方案 JSON Schema](design-system/v2/preset.schema.json) · [资源 JSON Schema](design-system/v2/resource.schema.json)
- [旧版迁移器](design-system/v2/migrate-v1.mjs) · [迁移测试](design-system/v2/migrate-v1.test.mjs)
- 已核对目录数量及 JSON 解析；Node.js 测试代码已提交但尚未运行，完整规则引擎和浏览器验证待完成。
- A3.2 首套风格资产包已提交，详见下方。

### A3.2 首套标准风格：Vaporwave / Synthwave

- [13 节风格说明](design-system/v2/styles/vaporwave/STYLE.md) · [20 维资源](design-system/v2/styles/vaporwave/resources.json) · [组合预设](design-system/v2/styles/vaporwave/preset.json)
- [Design Tokens](design-system/v2/styles/vaporwave/tokens.json) · [CSS](design-system/v2/styles/vaporwave/theme.css) · [独立 HTML 预览](design-system/v2/styles/vaporwave/preview.html)
- 已检查 20 项资源引用与现有目录、预设枚举一致，预览 JavaScript 语法通过。资源仍为候选，通用解析器、完整 Schema 验证、真实浏览器及无障碍验收尚未完成。
- A3.3 原型已提交，详见下方。

### A3.3 Design Composer V2（原型已提交）

- [新版工作台](prototype/v2/index.html) · [交互模块](prototype/v2/app.mjs) · [组合引擎](design-system/v2/composer-core.mjs) · [测试](design-system/v2/composer-core.test.mjs)
- 在仓库根目录执行 `python -m http.server 8080`，访问 `http://localhost:8080/prototype/v2/`。不可直接以 file:// 启动模块版。
- 动态加载 20 维目录与霓虹预设，提供 7 套组合、锁定、历史、A/B、迁移、主色和圆角覆盖、Tokens 与设计包导出。Style 作为预设标识，不强制覆盖各维度；渲染参数目前由核心模块定义，尚未全面读取独立资源参数文件。
- 已执行 82 项候选的纯 JavaScript 解析及 HTML 生成冒烟检查；3 项图像资源明确禁用。尚未运行 Node 测试套件、Chromium 或完整 Schema/无障碍验收。
- A3.4 已提交，详见下方。

### A3.4 资源参数与风格生成引擎（原型已提交）

- [资源参数注册表](design-system/v2/registry.json)（85 项候选） · [资源参数校验](design-system/v2/resource-params.mjs) · [风格生成引擎](design-system/v2/style-generator.mjs)。
- [Composer V2](prototype/v2/index.html) 已加载注册表，新增 13 节风格规范显示、Markdown 导出及包含代码、配置、Tokens、提示词、来源和诊断的设计包 JSON。
- 已执行 JavaScript 参数变更测试：主色和圆角变化同步传入解析结果，检查 CSS、HTML、Markdown 和 Prompt 输出；13 节生成及 85 项注册表索引检查通过。
- 限制：布局、组件结构等仍使用内置适配器；并非所有资源参数均已开放。注册表是当前原型参数真源，霓虹示范资源包为独立参考，尚未完全统一。资源仍为候选，浏览器、完整 Schema、无障碍、授权及 Node 测试套件待验收。
- A3.5 首批方案库与入库规范已提交，详见下方。

### A3.5 风格方案库扩充（原型已提交）

- [30 套组合方案库](design-system/v2/style-library.json) · [资源入库规范](docs/design/resource-admission.md) · [新版工作台](prototype/v2/index.html)
- 8 个已有风格家族、30 套不同配置、85 项原有候选资产；新增中英文搜索、明暗筛选、收藏、独立预览、自动生成规范及加入组合器。
- 30 套配置已通过纯 JavaScript 解析、HTML 与 13 节文档生成检查；真实浏览器功能、视觉质量及授权仍待验收。
- 下一阶段 A3.6：真实 Playwright 视觉与交互验收、资源参数一致性检查。大规模新增独立资产和第三方接入尚未完成。

### A3.6 自动化验收（已启动，尚未完成）

- [验收记录](docs/design/a3-6-qa-report.md) · [Playwright 测试](tests/qa/composer.spec.mjs) · [首次 CI 运行](https://github.com/yeyunbingyang/UI-Design-Studio/actions/runs/45367498304)
- 已实际执行 39 项 JavaScript 核心检查，全部通过。已提交 93 项浏览器测试及 CI 工作流；首次运行状态以 Actions 页面为准。
- 候选截图不等于批准的视觉基线；完整浏览器验收、修复及授权审核仍待完成。

## 产品定位
面向独立开发者、前端工程师及 AI 编程 Agent 的本地优先 WebUI 设计工作台。将风格发现、可运行预览、组件与页面模板、设计变量、提示词、项目绑定、视觉验收统一管理。不是单纯的截图收藏站，也不是替代 Figma 的完整绘图工具。

## 核心目标
- 将网页拆分为 20 个设计维度，以 Design Composer 为核心实现自由组合、可运行预览与可复用方案。
- 同一个真实页面结构可一键切换不同视觉风格，方便横向比较。
- 资源可搜索、收藏、分类、编辑、导入、导出，避免每个项目重复设计。
- 将选定风格转换为机器可读设计规范，供 Codex 等 Agent 复用。
- 保留已有设计简报、实现、Skills 管理和视觉 QA 工作流。
- 优先支持本地运行、离线预览及数据自主控制。

## 设计体系：6 层规范、20 维资产、13 节风格文档

三个模型服务不同目的，不可混为一谈。6 层为知识与工程架构；20 维为可配置资产；13 节为风格文档的统一展示结构。页面区域（顶栏、侧栏、内容区）属于布局和导航的实例，不是顶层风格分类。

| 设计层级 | 对应可配置维度 |
|---|---|
| Style Identity 风格定位 | Style、Theme |
| Design Foundations 基础设计 | Color、Typography、Spacing、Radius、Border |
| Visual Language 视觉表现 | Background、Surface、Shadow、Effects、Imagery、Icons |
| Components & Interaction 组件交互 | Components、Data Visualization、Interaction、Motion |
| Layout & Composition 页面组织 | Layout、Navigation、Density |
| Implementation 工程实施 | 非选择维度；贯穿全部 20 维的 Tokens、代码、规则、Agent 与 QA |

### 20 维资源目录（稳定 ID）

| ID | 设计维度 | 独立配置内容 |
|---|---|---|
| style | 风格 Style | 极简、霓虹复古、玻璃拟态、包豪斯；以默认组合与规则包表示 |
| theme | 主题 Theme | 浅色、深色、跟随系统；独立于风格 |
| color | 色彩 Color | 色板、语义色、渐变色标、状态色、图表色 |
| typography | 字体 Typography | 字族、字重、字号尺度、行高、字距、中英文回退 |
| spacing | 间距 Spacing | 基础单位、间距尺度、内外边距 |
| radius | 圆角 Radius | 直角、微圆角、大圆角、胶囊；按组件映射 |
| border | 描边 Border | 宽度、线型、语义描边色 |
| background | 背景 Background | 纯色、渐变、网格、扫描线、噪点；页面画布 |
| surface | 表面 Surface | 玻璃、纸张、金属、实色；面板及浮层材质 |
| shadow | 阴影 Shadow | 无、柔阴影、硬阴影；深度级别 |
| effects | 特效 Effects | 发光、模糊、双色重影、故障视觉；静态效果与动效分离 |
| imagery | 图像 Imagery | 写实、矢量、3D、抽象；比例、裁切及处理规范 |
| icons | 图标 Icons | 线性、填充、双色、立体；图标集、线宽、大小 |
| layout | 布局 Layout | Dashboard、Bento、三栏、分屏；骨架、网格、容器、断点 |
| navigation | 导航 Navigation | 顶部、侧栏、Dock、命令面板；位置及响应式行为 |
| density | 密度 Density | 数据密集、标准、宽松；控件高度、行高与信息容量 |
| components | 组件 Components | 按钮、卡片、表格、表单等；结构、变体、局部样式 |
| visualization | 数据可视化 Data Visualization | 图表、指标、进度、看板、甘特、时间线；数据适配 |
| interaction | 交互 Interaction | hover、active、focus-visible、disabled、loading、error；状态与反馈规则 |
| motion | 动效 Motion | 淡入、漂浮、弹性、故障位移；时长、曲线、触发器、减弱动画 |

### 维度边界与组合语义

Style 是默认组合入口，不是强行覆盖其他维度的全局 CSS。Theme 定义语义色模式；Color 定义色板映射。Spacing 定义尺度，Density 选择尺度及控件尺寸映射，不重复存储间距值。Radius、Border、Shadow 各有独立 token 命名空间；Background 管画布，Surface 管容器层，Effects 管装饰效果，Motion 管时间变化。Interaction 描述状态语义与行为，Components 描述结构与变体。布局和导航可组合但受空间与结构约束。数据可视化必须适配数据语义；不允许换肤改变业务数据或功能。

### 统一风格文档（13 节）

所有完整风格都应具有 Style Overview、Colors、Typography、Spacing & Layout、Components、Do's and Don'ts、Surfaces、Elevation、Imagery、Layout、Agent Prompt Guide、Similar Brands、Quick Start。各节引用规范化资源与 token；原文未覆盖的主题、图标、交互状态、动效、响应式、无障碍与 QA 作为补充子节。Spacing & Layout 记录基础空间尺度，Layout 记录页面组织；Quick Start 由解析结果生成，不作为独立数据真源。相似品牌仅为参考，不复制专有标识。

每个资源详情应包括定义、适用场景、可视示例、参数、真实交互预览（适用时）、兼容条件、使用与禁用规则、代码/Token、来源及许可证。每个完整风格额外提供多页面示范和可复制的 Agent 指南。未实现或仅参考的资源须明确标记。

## 产品功能架构

资源目录分为六个入口：完整风格库、基础设计库、视觉效果库、组件库（含数据可视化）、页面布局库、交互动效库；主题归风格库，密度归页面布局库。所有入口共享同一资源索引，避免重复存储。资源库支持单独浏览与预览，不要求先创建完整方案。

### 五大系统能力

| 模块 | 作用 |
|---|---|
| Design Library（设计资源库） | 按 20 维度管理资源、预览、搜索、标签、来源与授权 |
| Design Composer（设计组合器） | 逐维选择、参数编辑、锁定维度、兼容检查、撤销重做、恢复默认 |
| Design Playground（实时预览器） | 同一业务页面真实交互预览、设备切换、主题切换、并排比较 |
| Design Presets（设计方案库） | 保存、命名、收藏、复制、版本化、导入导出完整组合方案 |
| Design Engine（AI 设计引擎） | 按产品类型推荐搭配、解释冲突、生成设计规范与 Agent 任务；连接 Codex 和 QA |

### 设计组合器工作流

选择页面类型 → 选择整体预设或空白方案 → 按维度自由搭配 → 锁定已选维度 → 实时预览与参数微调 → 兼容性及无障碍检查 → 保存方案 → 导出设计包 → Agent 实现与视觉验收。

支持整体套用、单维替换、局部组件覆盖、重置单维、撤销/重做、A/B 对比、方案复制。切换预设前展示受影响维度，保留锁定维度。任何已提供的选择项均应在真实预览中生效，不得只修改提示词而声称预览已更新；尚未实现的选项明确标识。

### 分层架构与组合规则

资源层（字体、图标、配色、素材）→ 规范层（语义 Tokens、间距、材质、动效）→ 组件层（组件结构、变体、状态）→ 结构层（布局、导航、页面模式）→ 方案层（完整组合、项目绑定、导出）。

- 合并优先级：基础默认值 → 风格预设 → 维度选择 → 用户参数覆盖 → 局部组件覆盖；锁定维度在套用预设时保持不变。
- 兼容性检查：布局与导航结构、组件依赖与技术栈、颜色对比度、字体可用性、半透明材质可读性、密度与触控目标、移动断点及减弱动画。
- 区分错误、警告和建议。阻止无效结构或缺失必要依赖的导出；视觉偏好冲突给出建议而非强制覆盖；自动修复需预览并由用户确认。
- 同一配置与资源版本应可确定性重建同一设计；保存来源、版本、依赖与覆盖记录。
- 预览、CSS、JSON、设计规范和提示词由同一解析结果生成，避免多处手工维护。

### 组合器界面

左侧：20 维度资源树、搜索和预设入口；中央：真实 HTML/CSS 页面预览、设备尺寸及 A/B 对比；右侧：当前维度参数、锁定、兼容检查、Token 编辑；顶部：方案名称、撤销重做、保存、导出；底部可折叠：代码与 AI 提示词。小屏采用抽屉与分段面板。

## 关键页面与工作流

- 风格库：以真实页面缩略图、名称、标签、适用场景筛选；详情展示 13 节规范、风格示范、相似风格、套用全套或仅提取一个维度。
- 独立资源库：按类别浏览，每项可查看变体、参数、可运行组件示例、代码和来源；支持加入组合器，不自动改变其他维度。
- Composer：左侧按层分组展示 20 维、当前值与锁定状态；中央可切换 Dashboard、表单、内容页与移动视口；右侧可编辑参数与显示冲突；支持预设差异确认、局部覆盖、A/B 对比及撤销重做。
- 方案库：保存完整快照、版本、来源、锁定项、派生关系；可比较两个版本、复制并恢复。
- 工程输出：同步生成 HTML/CSS/JS、语义 Design Tokens、JSON、Markdown 规范、Agent Prompt/SKILL.md、依赖清单与 QA 报告。

## 用户场景
1. 开发新项目：选择产品类型 → 浏览推荐风格 → 对比同一页面 → 调整设计变量 → 导出项目设计包。
2. 改造旧项目：导入当前设计规范 → 建立视觉基线 → 预览新风格 → 生成 Agent 改造任务 → Playwright 验收。
3. 收集设计资源：录入 GitHub、官网或自有组件 → 标记来源、许可证、适用场景 → 收藏与复用。

## 功能需求
| ID | 模块 | 需求 | 优先级 |
|---|---|---|---|
| FR-01 | 风格库 | 卡片/列表、名称及中英文搜索、标签、分类、收藏、详情、来源和许可证 | P0 |
| FR-02 | 预览实验室 | 同一 Dashboard 切换风格；真实 HTML/CSS 组件、桌面/平板/手机视口、亮暗模式、并排对比 | P0 |
| FR-03 | Design Tokens | 编辑颜色、字体、字号、间距、圆角、边框、阴影、透明度、模糊、动效；实时应用、重置、保存为自定义风格 | P0 |
| FR-04 | 组件库 | Button、Input、Select、Card、Table、Dialog、Tabs、Sidebar、Toast、Chart 等；正常/悬停/聚焦/禁用/加载状态；代码复制 | P0 |
| FR-05 | 页面模板库 | Dashboard、管理后台、知识库、任务中心、资源图库、登录、设置、Landing Page；按风格套用 | P1 |
| FR-06 | 动效库 | 过渡、微交互、进入退出、骨架屏；参数调整、减弱动画模式、代码导出 | P1 |
| FR-07 | 提示词库 | 按风格生成中英文设计提示词、正负约束、组件规则、简短/完整版本；可编辑复制 | P0 |
| FR-08 | 项目管理 | 项目名称、路径、技术栈、关联风格与版本；设计简报、导出记录、QA 记录 | P1 |
| FR-09 | 资源管理 | 本地 JSON 导入导出、校验、重复检测、标签及来源维护；第三方适配器 | P1 |
| FR-10 | Agent 集成 | 导出 SKILL.md、CSS、JSON、Markdown、HTML；复用已有 AGENTS.md 绑定和备份；CLI/MCP 检索接口后续实现 | P0/P2 |
| FR-11 | Visual QA | 接入现有 Playwright 检查、截图基线、差异比较、响应式检查、问题报告与修复任务 | P1 |
| FR-12 | 设计组合器 | 20 维度独立选择、锁定、覆盖、撤销重做、实时组合 | P0 |
| FR-13 | 设计方案库 | 保存、复制、收藏、版本化、导入导出完整方案 | P0 |
| FR-14 | 组合规则引擎 | 确定性合并、兼容性检查、冲突解释与修复建议 | P0 |
| FR-15 | AI 设计引擎 | 按项目类型推荐维度组合、生成设计规范和 Agent 任务 | P1 |

| FR-16 | 风格规范文档 | 13 节统一风格说明、关联资产、实时示例与 Quick Start | P0 |
| FR-17 | 独立资源目录 | 六个资源入口、20 维检索、变体与代码、独立提取并组合 | P0 |
| FR-18 | 主题及状态系统 | 浅/深/系统主题，完整组件状态、键盘和减弱动画 | P0 |
| FR-19 | 资产溯源 | 资源版本、许可证、参数来源、解析结果追踪 | P0 |

## 初始风格目录
首批候选：Vaporwave / Synthwave（霓虹复古）、Bauhaus（包豪斯）、Minimalism（极简）、Glassmorphism（玻璃拟态）、Bento Grid（便当盒布局）、Linear-inspired（精致暗色）、Neumorphism（新拟态）、Neo-Brutalism（新粗野主义）、Apple-inspired（原生桌面感）、Material Design（材质设计）、Swiss Style（瑞士设计）、Cyberpunk/HUD（科技科幻）、Notion-inspired（知识工作台）、Enterprise（企业管理）。
布局范式与视觉主题应分开建模，例如 Bento 可叠加玻璃主题，不强制互斥。品牌风格名称仅作参考，不复制商标或专有资产。

## 信息架构
左侧导航：工作台 / 设计组合器 / 设计方案库 / UI 风格库 / 组件库 / 页面模板 / Design Tokens / 动效库 / 提示词库 / 项目管理 / Visual QA / 设置。
风格详情采用三栏：资源导航、中央实时预览、右侧属性与规范；顶部搜索、设备切换、亮暗切换、对比和导出。小屏改为抽屉及分段布局。主界面自身保持统一主题，预览主题在隔离容器内切换。

## 数据模型

Schema v2 使用稳定维度 ID 与资源版本引用，而非数组索引。StyleDocument：id、version、sections（13 节）、resourceRefs、ruleRefs、previewRefs；StylePreset：默认维度引用与规则；TokenSet 分为 primitive、semantic、component 三层并按 theme 分模式；Token provenance 记录最终值来源。每个维度拥有明确 token 写入范围，跨维引用使用依赖关系，解析循环必须报错。

迁移 v1：layout/navigation/style/color/typography/components/icons/visualization 原值保留并映射为稳定资源 ID；material 拆分 radius、border、surface、shadow、effects；density 拆分 spacing 与 density；motion 拆分 interaction 与 motion；assets 拆分 background 与 imagery；theme 从旧预设显式推导，无法确定则记录默认值及迁移警告。保留原快照，禁止静默丢弃自定义参数，未知扩展字段进入迁移报告。v1 原型仅有索引配置，须按其实际选项表映射，不能假定全部资源已实现。

- DesignDimension：id、nameZh、nameEn、resourceType、optionSchema、dependencies、defaultValue。
- DesignResource：id、dimensionId、name、parameters、preview、source、license、version、compatibility。
- DesignPreset：id、name、pageType、dimensionSelections（20 维）、lockedDimensions、overrides、componentOverrides、resourceVersions、schemaVersion、revision。
- ResolvedDesign：presetId、resolvedTokens、layout、navigation、componentVariants、assets、motion、diagnostics、dependencyManifest。
- CompatibilityRule：id、conditions、severity、message、suggestedFix；旧 Style 数据迁移为默认组合预设，原项目绑定保留。
- Style：id、slug、nameZh、nameEn、description、tags、category、tokens、previewId、sourceUrl、license、version。
- TokenSet：semanticColors、typography、spacing、radius、shadows、borders、motion、mode。
- Component：id、name、category、variants、states、code、framework、dependencies、license、source。
- Template：id、name、layout、components、supportedStyles、previewEntry、source。
- Project：id、name、rootPath、stack、styleId、styleVersion、overrides、exports、qaRuns。
- 所有资源包含 schemaVersion；用户修改与内置资源分离；导入不静默覆盖，支持迁移和备份。

## 技术方案（建议，待核对已有源码）
优先沿用现有前端栈及 Node.js 本地服务；若需新模块，采用 TypeScript、CSS Variables、Vite 等可维护方案。前端负责资源浏览与编辑，服务负责受控文件读写、项目绑定和 QA。静态资源以 JSON/Markdown/CSS 管理；本地数据可使用 SQLite 或现有存储，不重复建设。预览采用 sandbox iframe 或隔离容器；第三方代码默认不执行，禁止任意文件读取和命令执行；项目写入需显示目标、备份并允许撤销。敏感凭据不进入仓库。
静态展示可选 GitHub Pages；本地服务能力不可假装在纯静态站点可用。保留现有 npm 启动、检查、构建与测试命令，具体实现以源码核验为准。

## 外部资源调研清单
- StyleKit：https://github.com/AnxForever/stylekit
- UI UX Pro Max：https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- shadcn/ui：https://ui.shadcn.com/
- Magic UI：https://magicui.design/
- Aceternity UI：https://ui.aceternity.com/
- Mobbin：https://mobbin.com/；Refero：https://refero.design/；Uiverse：https://uiverse.io/
以上均为候选参考，接入前核验项目可用性、许可证、API、依赖与商业限制。仅导入获授权的内容，保留归属；不批量复制付费图库。

## Agent 工作流
需求分析 → 选择页面 → 20 维度组合 → 兼容检查 → 保存设计方案 → 生成设计简报 → 保存 Tokens 与组件规则 → 导出设计包 → Codex 实现 → Playwright 截图与 QA → 生成修复任务 → 再验收。
导出包建议包含 design-preset.json、dependency-manifest.json、design-tokens.json、theme.css、design-spec.md、SKILL.md、preview.html。CLI/MCP 后续提供 list_styles、get_style、search_components、export_design 等接口；写入能力需单独授权。

## 非功能需求
- 可访问性：目标 WCAG 2.2 AA，键盘操作、焦点可见、语义标签、对比度检查；支持 prefers-reduced-motion。
- 响应式：至少验证 375、768、1440px 视口；不得出现非预期横向滚动。
- 性能：本地缓存、按需加载预览、列表虚拟化（大规模资源时）；目标普通本地设备首屏 2 秒内，切换已加载主题 300ms 内，需实测。
- 安全与隐私：本地优先、路径约束、输入校验、HTML 净化、禁止自动执行导入脚本；可离线使用内置资源。
- 可维护：模块化、统一 schema、单元测试、视觉回归测试、错误及空状态、数据迁移与恢复。

## 首个验证样例：霓虹复古风格

以用户提供的 Vaporwave / Synthwave 说明为输入，建立首个 13 节风格文档示范；色板示例：Neon Pink #ff71ce、Seafoam Cyan #01cdfe、Midnight #0d0221、Mint #05ffa1、Violet #b967ff、Sunlight #fffb96。上述为基础色板，不直接等同可访问的语义文本/背景组合。扫描线、网格、发光、双色重影分别归属对应维度；字体、组件交互与动效规则需独立定义。验证组合：霓虹配色 + 玻璃表面 + Bento 布局 + 极简字体 + 故障动效；确保状态反馈、阅读对比度、减少动态效果及移动端布局正常。原始风格说明的授权与出处未核实，不复制完整外部文档或品牌资产。

## 分阶段实施
| 阶段 | 交付 | 验收 |
|---|---|---|
| M4-A | 核对源码、保留 A2 历史原型、定义 schema v2、迁移器、20 维资源索引与霓虹复古示范 | v1→v2 迁移验证，至少 6 套预设可解析，重点独立调整主题、背景、表面、阴影、圆角和描边 |
| M4-B | 完成 20 维度可用选项、至少 12 套完整预设、组合规则、Tokens 编辑、基础组件、方案保存及导出 | 20 维选择实时生效，锁定有效，重启保留，导出可独立预览 |
| M5 | 扩展页面模板、动效、资源导入、项目绑定、AI 搭配建议 | 模板主题切换、导入导出往返不丢数据、项目文件备份 |
| M6 | Agent 接口、外部适配器与 Visual QA 联动 | CLI/MCP 合约测试、三视口截图、差异报告与修复任务 |
阶段名称是规划，不代表已有发布。

## 验收清单
- [ ] 6 层、20 维、13 节文档映射清晰；每个 token 具有唯一归属及来源追踪。
- [ ] 旧版 12 维方案迁移有可回溯报告；迁移后可保存、加载、导出，不覆盖原文件。
- [ ] 霓虹复古混合方案中可独立切换主题、圆角、描边、背景、表面、阴影、特效与动效；不互相误覆盖。
- [ ] 组件交互覆盖 hover、active、focus-visible、disabled、loading、error；动效遵循 reduced-motion。
- [ ] 每个风格详情 13 节完整，未实现选项明确标识，代码与预览一致。
- [ ] 20 个维度均可独立选择并真实生效，至少提供两种有效选项；内置预设覆盖全部维度。
- [ ] 支持 Bento + 玻璃材质 + 自定义配色等跨维组合，不改变业务数据；锁定、撤销、重做及单维重置可用。
- [ ] 对冲突配置显示可理解的诊断，修复前可预览；相同版本及配置可重建相同方案。
- [ ] 方案保存、复制、版本化、导入导出与预览一致；A/B 对比可验证独立维度的变化。
- [ ] 12 套风格均有统一 Dashboard 预览、明确来源和适用场景。
- [ ] 搜索、筛选、收藏、亮暗切换和设备切换真实可用。
- [ ] Tokens 编辑、保存、重置、导出与重新导入结果一致。
- [ ] 基础组件覆盖交互状态，代码可复制；预览之间样式不污染。
- [ ] 导出的 CSS/JSON/SKILL.md/HTML 内容一致，HTML 可离线打开。
- [ ] 三个视口通过检查，键盘操作与减弱动画可用。
- [ ] 原有 Codex Skills、项目绑定和 Visual QA 工作流无回归。
- [ ] README、启动命令、测试说明、许可证与第三方归属完整。
- [ ] 在目标 Windows 环境完成真实安装、构建和 Chromium 验证。

## 范围边界与待确认
首期首先完成本地设计资源库、20 维设计组合器、方案库与可运行预览，不承诺实时爬取全部网站、完整 Figma 编辑器、云端多人协作或自动生成全部业务代码。历史 README 提及压缩包，但当前仓库根目录未见 releases/，须在实现前核实源码位置。最终技术栈、发布版本及外部资源授权待评审。


---

历史项目说明：[原 README](docs/legacy-readme.md) · [独立需求文档](docs/PRD.md)
