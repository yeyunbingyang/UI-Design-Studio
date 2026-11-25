# DESIGN.md Specification v1.0 — Bilingual Design System Standard

> Status: Approved project standard  
> Language: English + Simplified Chinese  
> Structure: 16 mandatory sections  
> Interaction method: Hybrid (reverse-engineer observed behavior + propose missing behavior)  
> Compatibility: UI-Design-Studio 6 knowledge layers / 20 dimensions / legacy 13-section STYLE.md

## 1. Purpose and scope / 目的与范围

DESIGN.md is the canonical, implementation-facing design specification for a product or project. It describes the visual system, design tokens, layout, components, interaction contracts, motion, responsive behavior and implementation constraints in a form that AI coding agents and developers can apply consistently.

DESIGN.md 是面向产品或项目的正式设计实施规范。它描述视觉体系、设计 Token、布局、组件、交互契约、动效、响应式行为和工程约束，使 AI 编程 Agent 与开发者能够一致地实施设计。

This specification is distinct from the existing 13-section STYLE.md. STYLE.md remains the concise style-profile format used by the current Style Library. DESIGN.md is the deeper, 16-section project specification. Both must map to the same canonical 20-dimension model.

本规范不同于现有 13 节 STYLE.md。STYLE.md 继续作为当前风格库使用的精简风格档案；DESIGN.md 是更深入的 16 节项目设计规范。两者必须映射到同一套 20 维规范模型。

## 2. Evidence and provenance / 证据与来源

Every material design statement must be distinguishable as one of:

| Label | Meaning | 中文含义 | Allowed basis |
|---|---|---|---|
| **Observed** | Directly visible or present in supplied source | 已观察：截图或源码直接证实 | Screenshot, DOM/CSS/source, supplied spec, explicit user statement |
| **Inferred** | Reasonable interpretation of repeated evidence | 已推断：由多处证据归纳 | Consistent patterns, repeated layouts, design conventions |
| **Proposed** | New design recommendation | 建议：AI 主动规划 | Product goals, user flows, mature design-system patterns |

Do not present an Inferred or Proposed rule as an existing implementation. Attach a source note for important Observed values. Screenshot-derived measurements must be marked approximate. If the source is unavailable, state the limitation.

不得将推断或建议写成现有实现。重要的已观察数值应附来源说明。由截图估算的尺寸必须标记为近似值。无法访问来源时必须说明限制。

Recommended evidence record:

```yaml
status: observed # observed | inferred | proposed
source: screenshot:dashboard-main.png
location: sidebar / primary navigation
claim: Sidebar uses a fixed-width desktop rail.
value: approximately 248px
confidence: medium
notes: Screenshot estimate; verify against CSS before implementation.
```

Confidence is an evidence-quality hint, not a statistical guarantee. Use High / Medium / Low unless a project-specific numeric confidence scale already exists.

置信度仅用于表达证据质量，不代表统计保证。默认使用 High / Medium / Low；只有项目已有数值置信度标准时才使用数字。

## 3. Canonical structure / 固定章节结构

All 16 headings are mandatory and must remain in this order. A section may state Not applicable / 不适用 or Not observed / 未观察到, but must not be silently omitted.

所有 16 个章节均为必需项，且顺序固定。不适用或未观察到的章节仍须保留并说明原因，不得静默省略。

1. Design Overview — 设计概述
2. Visual Identity — 视觉识别
3. Color System — 色彩体系
4. Typography — 字体体系
5. Spacing & Sizing — 间距与尺寸
6. Shape & Surface — 形状与表面
7. Background & Effects — 背景与特效
8. Iconography & Imagery — 图标与图像
9. Layout & Grid — 布局与网格
10. Navigation — 导航系统
11. Component System — 组件体系
12. Interaction States — 交互状态
13. Interaction Patterns — 交互模式
14. Motion & Feedback — 动效与反馈
15. Responsive & Accessibility — 响应式与无障碍
16. Implementation Guidelines — 工程实施指南

## 4. Required content model / 必需内容模型

Each applicable section should use the following fields where relevant:

| Field | 中文 | Requirement |
|---|---|---|
| Intent | 设计意图 | Why the rule exists and what user need it serves |
| Rules | 设计规则 | Clear positive and negative constraints |
| Specifications | 具体规格 | Tokens, values, scales, measurements and units |
| Variants | 变体 | Supported alternatives and selection conditions |
| States | 状态 | Applicable component states |
| Behavior | 行为 | Trigger, result, feedback, dismissal and recovery |
| Responsive | 响应式 | Breakpoint-specific adaptation |
| Accessibility | 无障碍 | Keyboard, focus, semantics, contrast and reduced motion |
| Provenance | 来源性质 | Observed / Inferred / Proposed and evidence |
| Implementation | 工程实施 | Token names, CSS mapping, component/API constraints |

Do not fill every field mechanically when it is irrelevant. Preserve the section's intent and state why a field is not applicable.

字段按实际情况使用，不应为了填表而机械添加无关内容。若某字段不适用，应说明原因。

## 5. Token naming and mapping / Token 命名与维度映射

Use semantic, role-based tokens rather than opaque visual names. Prefer `color.text.primary`, `color.surface.canvas`, `space.4`, `radius.control`, `motion.duration.normal` over `blue-500`, `gray-900` or arbitrary names. Raw palette values may be retained as primitives; components should consume semantic tokens.

使用语义化、角色导向的 Token，而不是只有颜色外观的名称。优先使用 `color.text.primary`、`color.surface.canvas`、`space.4`、`radius.control`、`motion.duration.normal`，而非直接在组件中写死 `blue-500` 或 `gray-900`。原始色值可作为 primitive 保存，组件应引用 semantic token。

Map to the stable 20 dimensions only:

| Dimension ID | Responsibility |
|---|---|
| style | Visual identity and default preset |
| theme | Light / dark / system semantic mode |
| color | Palette and semantic color roles |
| typography | Font family, type scale and text metrics |
| spacing | Base unit and spacing scale |
| radius | Corner radius scale and component mapping |
| border | Border width, style and semantic color |
| background | Page canvas and background treatments |
| surface | Panel, card, overlay and layer surfaces |
| shadow | Elevation and shadow tokens |
| effects | Static visual effects such as blur, glow and texture |
| imagery | Photography, illustration and image treatment |
| icons | Icon family, size, stroke and usage |
| layout | Page structure, grid, container and breakpoints |
| navigation | Navigation model and responsive behavior |
| density | Information density and control sizing strategy |
| components | Component anatomy, variants and composition |
| visualization | Charts, metrics and data presentation |
| interaction | Component states and behavior contracts |
| motion | Duration, easing, trigger and reduced-motion behavior |

Do not add a 21st dimension. Keep dimension boundaries intact: Background ≠ Surface; Effects ≠ Motion; Components ≠ Interaction; Spacing ≠ Density; Style ≠ Theme.

不得新增第 21 个维度，并保持维度边界：Background 不等于 Surface；Effects 不等于 Motion；Components 不等于 Interaction；Spacing 不等于 Density；Style 不等于 Theme。

## 6. Bilingual writing rules / 双语书写规则

- Write English first, followed immediately by Simplified Chinese for each section, rule group and explanatory paragraph.
- Keep section titles in the canonical bilingual form shown above.
- Keep code, token identifiers, CSS properties, ARIA attributes, API names and library names unchanged.
- Tables should use bilingual column labels where useful; do not duplicate code values just to translate them.
- Avoid awkward word-for-word translation. Chinese should preserve the same implementation meaning.
- Do not translate proper nouns, component names, library names or established technical terms unless a clear Chinese explanation is useful.

- 每个章节、规则组和说明段落先写英文，紧接着写简体中文。
- 章节标题使用本规范规定的中英双语格式。
- 代码、Token 标识符、CSS 属性、ARIA 属性、API 名称和库名称保持原样。
- 表格在有帮助时使用双语列名；不要为了翻译而重复代码值。
- 中文应准确保留实施含义，避免生硬逐字翻译。
- 专有名称、组件名、库名和成熟技术术语不强制翻译，可补充简短中文解释。

## 7. Section requirements / 各章节内容要求

### 1. Design Overview — 设计概述
State product type, audience, primary tasks, platform scope, design goals, constraints and evidence inventory. Include a short design summary and explicit unknowns.
说明产品类型、目标用户、核心任务、平台范围、设计目标、约束条件和证据清单。提供简短设计摘要并明确未知项。

### 2. Visual Identity — 视觉识别
Describe visual direction, brand character, atmosphere, hierarchy, signature motifs and anti-goals. Distinguish brand facts from interpretation.
描述视觉方向、品牌性格、氛围、层级、标志性视觉元素和禁止方向。区分品牌事实与 AI 解读。

### 3. Color System — 色彩体系
Define primitives and semantic roles, light/dark modes, text/surface/border/interactive/status/data colors, contrast constraints and usage restrictions. Provide exact values only when supported.
定义基础色与语义角色、明暗主题、文字/表面/边框/交互/状态/数据颜色、对比度约束和使用限制。只有证据支持时才给出精确数值。

### 4. Typography — 字体体系
Specify font stacks and fallbacks, type scale, weight, line height, letter spacing, multilingual behavior, truncation and hierarchy.
规定字体栈与回退、字号体系、字重、行高、字距、多语言行为、截断和层级。

### 5. Spacing & Sizing — 间距与尺寸
Define base unit, spacing scale, component dimensions, control heights, container sizing and sizing relationships. Separate measured values from recommendations.
定义基础单位、间距尺度、组件尺寸、控件高度、容器尺寸和尺寸关系。区分测量值与建议值。

### 6. Shape & Surface — 形状与表面
Define radius, border, divider, surface layers, material, opacity and elevation relationships. Keep shadows separately tokenized.
定义圆角、边框、分隔线、表面层级、材质、不透明度和层级关系。阴影使用独立 Token。

### 7. Background & Effects — 背景与特效
Describe canvas, gradients, patterns, textures, blur, glow and decorative effects. Define restraint and readability rules; time-based changes belong in Motion.
描述画布、渐变、图案、纹理、模糊、发光和装饰效果。定义克制使用和可读性规则；随时间变化的效果归入 Motion。

### 8. Iconography & Imagery — 图标与图像
Specify icon family, size, stroke, alignment, semantic mapping, illustration/photography style, aspect ratio, crop, focal point and asset provenance.
规定图标家族、尺寸、线宽、对齐、语义映射、插画/摄影风格、宽高比、裁切、焦点和素材来源。

### 9. Layout & Grid — 布局与网格
Define page regions, grid, columns, container widths, alignment, scroll ownership, density and responsive structural changes.
定义页面区域、网格、列数、容器宽度、对齐、滚动归属、信息密度和响应式结构变化。

### 10. Navigation — 导航系统
Define hierarchy, active state, breadcrumbs, tabs, side/top navigation, command/search entry points, mobile adaptation and keyboard access.
定义导航层级、当前状态、面包屑、标签页、侧栏/顶部导航、命令/搜索入口、移动端适配和键盘访问。

### 11. Component System — 组件体系
Document component anatomy, variants, composition, semantic token usage, sizing, content rules and implementation boundaries. Prioritize components relevant to the product.
记录组件结构、变体、组合方式、语义 Token 使用、尺寸、内容规则和实施边界。优先描述项目真正需要的组件。

### 12. Interaction States — 交互状态
Define applicable states such as default, hover, focus-visible, active, selected, disabled, loading, success, error, empty and read-only. Explain transitions and feedback.
定义适用状态，如 default、hover、focus-visible、active、selected、disabled、loading、success、error、empty 和 read-only，并解释状态转换与反馈。

### 13. Interaction Patterns — 交互模式
Specify user flows and behavior contracts for navigation, forms, selection, overlays, data tables, drag-and-drop, search, keyboard shortcuts, undo and recovery.
规定导航、表单、选择、浮层、数据表格、拖放、搜索、键盘快捷键、撤销和恢复等用户流程及行为契约。

### 14. Motion & Feedback — 动效与反馈
Define motion purpose, trigger, property, duration, easing, direction, interruption, loading feedback, notification behavior and prefers-reduced-motion fallback.
定义动效目的、触发条件、变化属性、持续时间、缓动、方向、中断行为、加载反馈、通知行为和 prefers-reduced-motion 降级策略。

### 15. Responsive & Accessibility — 响应式与无障碍
Document supported viewport ranges, breakpoint evidence, reflow, touch targets, keyboard navigation, focus management, semantic structure, contrast and reduced motion. Do not claim WCAG compliance without an audit.
记录支持的视口范围、断点证据、重排、触控目标、键盘导航、焦点管理、语义结构、对比度和减少动态效果。未经审计不得声称符合 WCAG。

### 16. Implementation Guidelines — 工程实施指南
Provide token naming, CSS variable examples, component contracts, framework constraints, asset usage, do/don't rules, implementation sequence, QA checklist and unresolved decisions.
提供 Token 命名、CSS 变量示例、组件契约、框架约束、素材使用、正反规则、实施顺序、QA 清单和待决事项。

## 8. Interaction behavior contract / 交互行为契约

Every important interactive pattern should define:

| Property | 中文 | Description |
|---|---|---|
| Trigger | 触发条件 | User action or system event |
| Preconditions | 前置条件 | Required state or permissions |
| Result | 操作结果 | State/data/navigation outcome |
| Feedback | 操作反馈 | Visual, textual or haptic response |
| Dismissal | 关闭方式 | Escape, outside click, close action, etc. |
| Recovery | 恢复机制 | Undo, retry, reset or correction |
| Keyboard | 键盘行为 | Focus order and shortcuts |
| Responsive | 响应式行为 | Pointer vs touch and small-screen adaptation |
| Edge cases | 边界情况 | Empty, error, conflict, duplicate action, latency |

每个重要交互模式都应描述触发条件、前置条件、结果、反馈、关闭方式、恢复机制、键盘行为、响应式行为和边界情况。

## 9. Reference design systems / 优质设计参考

Use mature systems as pattern references according to product context:
- Linear: dense productivity workspaces and keyboard-oriented workflows.
- Radix UI: accessible primitive behavior, focus and overlay patterns.
- shadcn/ui: practical component composition and implementation examples.
- Material Design 3: interaction states, motion and adaptive layout.
- Atlassian Design System: enterprise workflows and complex data interfaces.
- Ant Design: data-heavy tables, forms and administration patterns.

These references are not mandatory visual templates. Select patterns based on the product's user tasks and preserve the target project's identity. Verify current APIs and documentation before prescribing library-specific implementation.

根据产品场景选择成熟设计系统作为交互模式参考。它们不是必须照搬的视觉模板。必须依据用户任务选择模式，并保留目标项目自身的视觉识别。指定具体库 API 前应核验其当前文档。

## 10. Quality gate / 质量验收

Suggested score (100 points):
- Visual analysis accuracy: 20
- Token completeness and consistency: 15
- Component specification: 15
- Interaction contracts: 20
- Responsive and accessibility: 10
- Implementation clarity: 10
- Document structure and bilingual quality: 10

Suggested result: 90+ pass; 80–89 revise; below 80 rework. Regardless of score, fail if evidence is fabricated, Observed and Proposed are conflated, core interactions are missing, or token conflicts make implementation ambiguous.

建议评分（满分 100）：视觉分析准确性 20、Token 完整性与一致性 15、组件规范 15、交互契约 20、响应式与无障碍 10、工程清晰度 10、文档结构与双语质量 10。90 分以上通过；80–89 分修订；低于 80 分返工。若存在伪造证据、混淆已观察与建议、核心交互缺失或 Token 冲突导致无法实施，无论分数多少均不通过。

## 11. Compatibility / 兼容性

- Keep the existing 6-layer knowledge architecture and 20 stable dimension IDs.
- Keep the existing 13-section STYLE.md and its generator intact unless a separate migration is approved.
- DESIGN.md is an additional, more detailed project specification.
- A project may export both STYLE.md and DESIGN.md from a shared canonical model; neither document should be treated as a separate source of truth.
- Preserve existing IDs, schema versions and preset behavior.

- 保留现有 6 层知识架构和 20 个稳定维度 ID。
- 保留现有 13 节 STYLE.md 及其生成器，除非单独批准迁移。
- DESIGN.md 是新增的、更详细的项目级设计规范。
- 项目可从同一规范化模型同时导出 STYLE.md 和 DESIGN.md；两份文档都不应成为彼此独立的数据真源。
- 保留现有 ID、Schema 版本和预设行为。

## 12. Non-goals / 非目标

This standard does not require automatic web crawling, browser automation, screenshot OCR pipelines, an external LLM API, a database, or automatic implementation. These can be added only when a concrete need and explicit approval exist.

本标准不要求自动网站爬取、浏览器自动化、截图 OCR 流水线、外部 LLM API、数据库或自动实施代码。只有出现明确需求并获得批准后才可增加。

## 13. Versioning / 版本管理

Use semantic versions for the specification. Patch: wording/clarity without structural change. Minor: optional fields or guidance additions. Major: section order, required fields or canonical mapping changes. Each generated DESIGN.md should identify the spec version and generation date.

规范采用语义化版本。Patch 用于不改变结构的措辞修订；Minor 用于增加可选字段或说明；Major 用于章节顺序、必需字段或规范映射变化。每份生成的 DESIGN.md 必须记录规范版本和生成日期。
