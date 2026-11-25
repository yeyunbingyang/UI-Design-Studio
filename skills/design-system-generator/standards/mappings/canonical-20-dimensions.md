# Canonical 20-Dimension Mapping / 20 维规范映射

The existing 20 dimension IDs remain the only canonical design-asset dimensions. Core domains and Extensions are documentation/analysis groupings, not additional dimensions.

现有 20 个维度 ID 仍是唯一规范化设计资产维度。Core 语义域和 Extensions 是文档/分析分组，不是新增维度。

| ID | Responsibility / 职责 | Core / Extension coverage |
|---|---|---|
| style | Visual identity and style preset / 风格定位与风格预设 | Core 01–02 |
| theme | Light/dark/system semantic mode / 明暗/系统主题模式 | Core 03, 06 |
| color | Palette and semantic color roles / 色板与语义色 | Core 03 |
| typography | Font family and type scale / 字体与字号体系 | Core 04 |
| spacing | Base unit and spacing scale / 基础单位与间距尺度 | Core 05, 09 |
| radius | Radius scale / 圆角尺度 | Core 06 |
| border | Border width/style/color / 描边宽度、样式与颜色 | Core 06 |
| background | Page canvas / 页面画布 | Extension visual-assets-effects, chapter 07 |
| surface | Cards, panels, overlays / 卡片、面板与浮层表面 | Core 06 |
| shadow | Elevation and shadow / 层级与阴影 | Core 06 |
| effects | Static visual effects / 静态视觉特效 | Extension visual-assets-effects, chapter 07 |
| imagery | Images, photography, illustration / 图片、摄影与插画 | Extension visual-assets-effects, chapter 08 |
| icons | Icon family, size, stroke / 图标家族、尺寸与线宽 | Extension visual-assets-effects, chapter 08 |
| layout | Grid, containers, page structure / 网格、容器与页面结构 | Core 05, 09 |
| navigation | Routes, IA and navigation model / 路由、信息架构与导航模型 | Extension navigation-ia, chapter 10 |
| density | Information density / 信息密度 | Core 05, 09 |
| components | Component anatomy and variants / 组件结构与变体 | Core 04, 11 |
| visualization | Charts and data presentation / 图表与数据呈现 | Core 04/06; product-specific component specs |
| interaction | Component states and behavior / 组件状态与行为 | Extensions interaction-states and interaction-patterns, chapters 12–13 |
| motion | Time-based behavior and transitions / 时间变化行为与过渡 | Extension motion-feedback, chapter 14 |

## Cross-cutting extensions / 横切型扩展

Accessibility and Implementation & Validation are cross-cutting quality systems, not new design dimensions. They constrain or validate multiple dimensions.

Accessibility 与 Implementation & Validation 是横切质量体系，不是新的设计维度。它们约束或验证多个维度。

| Extension | Applies across |
|---|---|
| accessibility | components, interaction, motion, typography, color, layout, navigation |
| implementation-validation | all 20 dimensions; no new token ownership |

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
