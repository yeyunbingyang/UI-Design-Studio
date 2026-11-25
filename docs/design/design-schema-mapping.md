# DESIGN Schema & Dimension Mapping / DESIGN 规范与设计维度映射

> Version / 版本：1.0.0
> Status / 状态：Proposed canonical architecture / 规范架构提案
> Machine-readable mapping / 机器可读映射：`design-system/v2/design-dimension-mapping.json`

## 1. Decision / 架构决定

**DESIGN.md and the canonical 20 design dimensions are two representations of the same design model.** DESIGN.md is the human- and Agent-readable documentation view. The 20 dimensions are the structured configuration, persistence, validation and composition view.

**DESIGN.md 与标准 20 个设计维度是同一套设计模型的两种表达形式。** DESIGN.md 面向人和 AI Agent 阅读；20 个维度负责结构化配置、持久化、校验与组合。

The relationship is many-to-many: one chapter can reference several dimensions, and one dimension can be documented in several chapters. Each dimension MUST have exactly one primary chapter that owns its canonical definition. Secondary chapters reference the primary definition and MUST NOT redefine its tokens.

两者采用多对多映射：一个章节可以关联多个维度，一个维度也可以在多个章节中出现。每个维度必须且只能有一个主章节，负责其规范定义；其他章节只能引用主定义，不得重复定义 Token。

## 2. Keep the models distinct / 保持模型边界

| Model | Count | Responsibility / 职责 | Data role |
|---|---:|---|---|
| Navigation domains / 导航领域 | 12 | Library and Composer navigation grouping / 资源库与组合器导航分组 | Taxonomy metadata only / 仅分类元数据 |
| Canonical dimensions / 标准维度 | 20 | Independent configuration, persistence and validation / 独立配置、持久化与校验 | Canonical configuration units / 规范配置单位 |
| DESIGN Core domains / DESIGN 基础语义域 | 9 | Compact Core export and import compatibility / Core 精简输出与导入兼容 | Documentation grouping / 文档分组 |
| Extended chapters / Extended 章节 | 16 | Full DESIGN.md structure / 完整 DESIGN.md 结构 | Documentation grouping / 文档分组 |
| Extensions / 扩展模块 | 7 | Optional deep guidance and cross-cutting validation / 可选专项指导与横切校验 | Documentation modules, not dimensions / 文档模块，不是维度 |

The 12 navigation domains MUST NOT replace canonical dimension IDs in Composer state, resources, presets, saved drafts or exports. The 9 Core domains and 16 Extended chapters MUST NOT become additional configuration dimensions.

12 个导航领域不得替代组合器状态、资源、预设、草稿或导出文件中的标准维度 ID。9 个 Core 语义域和 16 个 Extended 章节也不得成为新的配置维度。

## 3. Source-of-truth boundaries / 真源边界

- `design-system/v2/catalog.json`: canonical dimension inventory and available resource references / 标准维度清单及可用资源引用。
- `design-system/v2/registry.json`: resource definitions, parameters, versions, provenance and license status / 资源定义、参数、版本、来源与许可证状态。
- `design-system/v2/domains.json`: 12-domain navigation taxonomy / 12 个导航领域分类。
- `design-system/v2/design-dimension-mapping.json`: document-to-dimension mapping metadata; it does not own token values / 文档与维度映射元数据，不拥有 Token 数值。
- A resolved project design instance (the normalized Design Model / ResolvedDesign) is the source for one generated DESIGN.md, preview pair, token export and Composer snapshot / 单个项目最终解析出的规范化设计模型，是该项目 DESIGN.md、双主题预览、Token 导出和 Composer 快照的共同数据源。

Do not use a documentation mapping file as a substitute for the resource registry or the resolved design instance. Do not hand-maintain different token values in Markdown, HTML, CSS and JSON.

不得用文档映射文件代替资源注册表或项目解析结果。不得在 Markdown、HTML、CSS 和 JSON 中分别手工维护互不一致的 Token 数值。

## 4. Extended chapter mapping / 16 章节映射

| Chapter | Primary responsibility / 主要职责 | Referenced dimensions / 关联维度 |
|---|---|---|
| 01 Design Overview / 设计概述 | Product context and design intent / 产品背景与设计意图 | style |
| 02 Visual Identity / 视觉识别 | Brand expression and identity assets / 品牌表达与识别资产 | style, imagery, icons |
| 03 Color System / 色彩体系 | Appearance modes and semantic palette / 外观模式与语义色板 | theme, color |
| 04 Typography / 字体体系 | Font families and type scale / 字族与字号体系 | typography |
| 05 Spacing & Sizing / 间距与尺寸 | Spatial scale and density mapping / 空间尺度与密度映射 | spacing, density |
| 06 Shape & Surface / 形状与表面 | Geometry, borders, materials and elevation / 几何、描边、材质与层级 | theme, radius, border, surface, shadow |
| 07 Background & Effects / 背景与视觉特效 | Page canvas and visual treatment / 页面画布与视觉处理 | background, surface, shadow, effects |
| 08 Iconography & Imagery / 图标与图像 | Icon and image systems / 图标与图像体系 | icons, imagery |
| 09 Layout & Grid / 布局与网格 | Page composition and spatial application / 页面构图与空间应用 | layout, spacing, density |
| 10 Navigation / 导航系统 | Information architecture and navigation / 信息架构与导航 | navigation, layout |
| 11 Component System / 组件体系 | Component anatomy, variants and visualization patterns / 组件结构、变体与可视化模式 | components, visualization, radius, border, surface, shadow |
| 12 Interaction States / 交互状态 | State semantics and component behavior / 状态语义与组件行为 | interaction, components |
| 13 Interaction Patterns / 交互模式 | Multi-step user flows / 多步骤用户流程 | interaction, navigation, components |
| 14 Motion & Feedback / 动效与反馈 | Time-based motion and feedback / 时间动效与反馈 | motion, effects, interaction |
| 15 Responsive & Accessibility / 响应式与无障碍 | Cross-cutting constraints / 横切约束 | layout, navigation, typography, color, components, interaction, motion |
| 16 Implementation Guidelines / 实施指南 | Implementation and validation across all dimensions / 全维度工程实施与验证 | all 20 dimensions |

This table is a reading map, not permission to duplicate token ownership. For example, chapter 11 may show a component's radius but the radius token remains defined by the `radius` dimension and its primary chapter 06.

此表是阅读映射，不代表允许重复拥有 Token。例如第 11 章可以展示组件圆角，但圆角 Token 仍由 `radius` 维度及其主章节 06 定义。

## 5. Primary chapter ownership / 主章节归属

| Dimension ID | Primary chapter | Secondary references |
|---|---:|---|
| style | 01 | 02 |
| theme | 03 | 06 |
| color | 03 | — |
| typography | 04 | 15 |
| spacing | 05 | 09 |
| radius | 06 | 11 |
| border | 06 | 11 |
| background | 07 | — |
| surface | 06 | 07, 11 |
| shadow | 06 | 07, 11 |
| effects | 07 | 14 |
| imagery | 08 | 02 |
| icons | 08 | 02 |
| layout | 09 | 10, 15 |
| navigation | 10 | 13, 15 |
| density | 05 | 09 |
| components | 11 | 12, 13, 15 |
| visualization | 11 | 16 |
| interaction | 12 | 13, 14, 15 |
| motion | 14 | 15 |

The authoritative machine-readable mapping contains the full bilingual labels, chapter references, Core-domain references, domain references, extension coverage and invariants.

完整机器可读映射文件还包含双语名称、章节引用、Core 语义域引用、导航领域引用、扩展覆盖关系和不变量。

## 6. Bidirectional transformation contract / 双向转换契约

### A. DESIGN.md → normalized design model / DESIGN.md 导入

1. Parse actual Markdown headings and content; do not rely on fixed upstream headings / 解析真实 Markdown 标题和正文，不依赖上游固定标题。
2. Preserve source text, unknown sections, citations and license notes / 保留原文、未知章节、引用及许可证说明。
3. Map statements and values to canonical dimension IDs and primary chapters / 将规则和数值映射到标准维度 ID 与主章节。
4. Extract tokens, components, variants, interaction contracts, responsive constraints and provenance / 提取 Token、组件、变体、交互契约、响应式约束及来源。
5. Record confidence and evidence status: Observed, Inferred or Proposed / 记录置信度和证据状态。
6. Report unmapped, ambiguous and conflicting content; never silently discard it / 报告无法映射、歧义及冲突内容，不得静默丢弃。
7. Produce a reviewable normalized design instance before applying it to Composer / 先生成可审查的规范化设计实例，再应用到 Composer。

### B. Canonical dimensions → DESIGN.md / 维度导出

1. Read the resolved 20-dimension configuration and referenced resource versions / 读取已解析的 20 维配置及资源版本。
2. Resolve each dimension's primary chapter and secondary references / 解析每个维度的主章节及次级引用。
3. Generate the 9-domain Core export or the 16-chapter Extended export / 生成 9 语义域 Core 或 16 章节 Extended。
4. Write each canonical token definition once; use references in secondary chapters / 每个规范 Token 只定义一次，其他章节使用引用。
5. Preserve provenance, unknowns, extensions and implementation constraints / 保留来源、未知项、扩展和工程约束。
6. Derive light/dark HTML previews and machine-readable exports from the same resolved model / 从同一解析模型生成浅色/深色 HTML 预览和机器可读导出。

### Conflict and round-trip rules / 冲突与往返规则

- Importing DESIGN.md MUST NOT silently overwrite a saved preset or current Composer draft / 导入 DESIGN.md 不得静默覆盖已有预设或当前草稿。
- Show a dimension-level diff, conflict list and proposed resolution before applying / 应用前展示维度差异、冲突列表和建议处理方式。
- Unknown content is retained in an extension/notes area and reported / 未知内容保留在扩展/备注区并生成报告。
- A round-trip may normalize formatting, but MUST preserve semantic values, dimension IDs, token ownership, evidence and source attribution / 往返转换可以规范化格式，但必须保留语义数值、维度 ID、Token 归属、证据及来源归属。
- A mapping change is versioned; historical exports retain their mapping version / 映射变更必须版本化，历史导出保留原映射版本。

## 7. Mapping invariants / 映射不变量

1. Exactly 20 canonical dimension IDs remain stable.
2. Every dimension maps to exactly one primary chapter.
3. A dimension may appear in multiple secondary chapters.
4. The 12 navigation domains each group dimensions exactly once; they do not own configuration.
5. The 9 Core domains and 16 Extended chapters are alternate documentation views over the same model.
6. Accessibility and Implementation & Validation are cross-cutting quality modules, not dimensions and not token owners.
7. The mapping file does not contain actual token values or resource parameters.
8. DESIGN.md, both HTML previews, CSS, JSON exports and Composer state derive from one resolved design instance.
9. Any unmapped content or future dimension is surfaced as a diagnostic; it is never silently dropped.

## 8. Validation / 验证

The mapping validator MUST check:
- Exact coverage of the existing 20 dimension IDs from `catalog.json`.
- Every dimension's primary chapter exists and is included in its chapter references.
- All chapter and Core-domain references are valid.
- The 12-domain map covers each current canonical dimension exactly once.
- Extension references use only known chapter and dimension IDs.
- Cross-cutting modules do not claim token ownership.
- Existing resource IDs, presets and saved Composer drafts remain unchanged.

映射校验器必须检查：与 catalog 中 20 个 ID 完全一致；每个维度主章节有效且包含在章节引用中；章节和 Core 引用有效；12 个导航领域对现有维度恰好覆盖一次；扩展引用有效；横切模块不拥有 Token；现有资源 ID、预设及 Composer 草稿保持不变。
