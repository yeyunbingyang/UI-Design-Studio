# Core Standard / Core 基础规范

Core is mandatory in every DESIGN.md output. It contains nine semantic content domains. These are not rigid upstream Markdown headings: preserve the source's actual headings where practical and map content semantically.

Core 是每份 DESIGN.md 输出的必需内容，包含九个语义内容域。这些不是上游固定 Markdown 标题；应尽量保留来源实际标题，并按语义映射。

| # | Core domain / 核心域 | Required content / 必需内容 | Full spec chapters |
|---|---|---|---|
| 1 | Design Overview & Identity / 设计概述与视觉识别 | Product context, audience, goals, visual direction, brand character, hierarchy | 01–02 |
| 2 | Color System / 色彩体系 | Primitive palette, semantic roles, modes, status colors, contrast intent | 03 |
| 3 | Typography / 字体体系 | Font families/fallbacks, scale, weight, line-height, hierarchy | 04 |
| 4 | Component System / 组件体系 | Key component anatomy, variants, sizing, content rules, token usage | 11 |
| 5 | Layout & Spacing / 布局与间距 | Grid, containers, spacing scale, sizing, density, scroll ownership | 05, 09 |
| 6 | Visual Hierarchy, Shape & Surface / 视觉层级、形状与表面 | Elevation, radius, border, surface, shadows, grouping and emphasis | 02, 06, 09, 11 |
| 7 | Design Principles & Constraints / 设计原则与约束 | Do/don't, consistency rules, anti-patterns, platform constraints | 02, 06, 07, 16 |
| 8 | Responsive Design / 响应式设计 | Supported viewports, reflow, navigation/layout adaptation, touch considerations | 15 |
| 9 | Agent Guidelines / AI Agent 实施指南 | How to apply tokens/components, preserve intent, avoid regressions, implementation boundaries | 16 |

## Core writing rules / Core 写作规则

- Every domain must have useful content or an explicit Not observed / Not applicable note.
- Prefer concise implementation rules over brand-marketing prose.
- Distinguish source facts from AI interpretation and proposals.
- Preserve original token names and exact values when supported; do not silently normalize away source-specific details.
- Use semantic aliases in generated implementation guidance; keep raw values in primitive tables.
- State responsive behavior even if only desktop is evidenced; label unknown breakpoints and do not invent exact values.
- Include basic accessibility constraints in Core where they affect basic usability (semantic controls, keyboard reachability, visible focus, non-color-only meaning). Full audit guidance belongs to the Accessibility Extension.

- 每个核心域必须有有效内容，或明确标注未观察/不适用。
- 优先采用简洁、可执行的工程规则，避免品牌营销文案。
- 区分来源事实、AI 解读和建议。
- 有证据时保留原始 Token 名称和值，不得静默抹平来源特征。
- 工程建议使用语义别名；原始数值保留在基础值表。
- 即使证据仅覆盖桌面端，也要说明响应式行为；未知断点必须标记未知，不得编造精确数值。
- 基础可用性约束属于 Core，例如语义控件、键盘可达、焦点可见、不能只靠颜色传递含义；完整审计指南属于 Accessibility Extension。

## Core component minimum / Core 组件最低要求

For each key component, describe purpose, anatomy, variants, relevant dimensions/tokens, content constraints and visible states. Detailed behavior contracts are expanded by Interaction Extensions.

每个关键组件至少描述用途、结构、变体、相关维度/Token、内容约束和可见状态。详细行为契约由交互扩展深化。
