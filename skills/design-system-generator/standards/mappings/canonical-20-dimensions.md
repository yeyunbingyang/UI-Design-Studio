# Canonical 20-Dimension Mapping / 20 维规范映射

The existing 20 dimension IDs remain the only canonical design-asset dimensions. DESIGN.md chapters, Core domains, Extensions and 12 navigation domains are documentation or navigation groupings, not additional dimensions.

现有 20 个维度 ID 仍是唯一规范化设计资产维度。DESIGN.md 章节、Core 语义域、Extensions 和 12 个导航领域均属于文档或导航分组，不是新增维度。

## Machine-readable source / 机器可读映射

- Mapping: `design-system/v2/design-dimension-mapping.json`
- JSON Schema: `design-system/v2/design-dimension-mapping.schema.json`
- Architecture contract: `docs/design/design-schema-mapping.md`
- Canonical dimension inventory: `design-system/v2/catalog.json`
- Navigation grouping: `design-system/v2/domains.json`

The JSON mapping defines all 20 dimensions, one primary chapter per dimension, secondary chapter references, 9 Core semantic domains, 16 Extended chapters, 12 navigation-domain references and 7 Extension mappings.

JSON 映射文件定义全部 20 个维度、每个维度唯一主章节、次级章节引用、9 个 Core 语义域、16 个 Extended 章节、12 个导航领域引用及 7 个 Extension 映射。

## Canonical dimensions / 标准维度

| ID | Responsibility / 职责 | Primary chapter / 主章节 |
|---|---|---:|
| style | Visual identity and style preset / 风格定位与风格预设 | 01 |
| theme | Light/dark/system semantic mode / 明暗/系统主题模式 | 03 |
| color | Palette and semantic color roles / 色板与语义色 | 03 |
| typography | Font family and type scale / 字体与字号体系 | 04 |
| spacing | Base unit and spacing scale / 基础单位与间距尺度 | 05 |
| radius | Radius scale / 圆角尺度 | 06 |
| border | Border width/style/color / 描边宽度、样式与颜色 | 06 |
| background | Page canvas / 页面画布 | 07 |
| surface | Cards, panels, overlays / 卡片、面板与浮层表面 | 06 |
| shadow | Elevation and shadow / 层级与阴影 | 06 |
| effects | Static visual effects / 静态视觉特效 | 07 |
| imagery | Images, photography, illustration / 图片、摄影与插画 | 08 |
| icons | Icon family, size, stroke / 图标家族、尺寸与线宽 | 08 |
| layout | Grid, containers, page structure / 网格、容器与页面结构 | 09 |
| navigation | Routes, IA and navigation model / 路由、信息架构与导航模型 | 10 |
| density | Information density / 信息密度 | 05 |
| components | Component anatomy and variants / 组件结构与变体 | 11 |
| visualization | Charts and data presentation / 图表与数据呈现 | 11 |
| interaction | Component states and behavior / 组件状态与行为 | 12 |
| motion | Time-based behavior and transitions / 时间变化行为与过渡 | 14 |

## Boundary rules / 维度边界

- Background ≠ Surface.
- Effects ≠ Motion.
- Components ≠ Interaction.
- Spacing ≠ Density.
- Style ≠ Theme.
- Navigation ≠ Layout.
- Accessibility ≠ a visual token dimension.
- Implementation & Validation ≠ a design token dimension.

- Background 不等于 Surface。
- Effects 不等于 Motion。
- Components 不等于 Interaction。
- Spacing 不等于 Density。
- Style 不等于 Theme。
- Navigation 不等于 Layout。
- Accessibility 不是视觉 Token 维度。
- Implementation & Validation 不是设计 Token 维度。

## Cross-cutting extensions / 横切型扩展

Accessibility and Implementation & Validation constrain multiple dimensions but do not own new tokens or create new dimensions.

Accessibility 与 Implementation & Validation 约束多个维度，但不拥有新的 Token，也不创建新的设计维度。

| Extension | Applies across |
|---|---|
| accessibility | typography, color, layout, navigation, components, interaction, motion |
| implementation-validation | all 20 dimensions; no new token ownership / 全部 20 个维度，不新增 Token 归属 |

## Ownership rules / 归属规则

1. Every dimension has exactly one `primaryChapter`.
2. Secondary chapter references must point to the primary definition and must not duplicate token ownership.
3. Core semantic domains and Extended chapters are two documentation views over the same 20 dimensions.
4. The 12 navigation domains group dimensions for browsing; Composer state and persisted presets continue to use canonical dimension IDs.
5. Unknown imported sections and unmapped content must be preserved and reported.
6. The mapping file describes relationships; actual token values remain in the resolved design instance and resource model.
