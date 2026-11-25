# Design Reference Library / 优质设计参考库

This file is a curated pattern index, not a mandate to copy visual styles. Use the reference that matches the target product's tasks and complexity.

本文件是交互与组件模式索引，不是要求复制参考项目的视觉风格。应根据目标产品的任务和复杂度选择参考。

| Reference | Best for | Inspect |
|---|---|---|
| Linear — https://linear.app/ | Productivity workspaces | Keyboard workflows, command/search, dense navigation, issue lists |
| Radix UI — https://www.radix-ui.com/primitives | Accessible interaction primitives | Dialog, Popover, Dropdown, focus management, keyboard behavior |
| shadcn/ui — https://ui.shadcn.com/ | Component composition | Form, table, command, sheet, data table patterns |
| Material Design 3 — https://m3.material.io/ | Cross-platform interaction | State layers, motion, adaptive layout, accessibility |
| Atlassian Design System — https://atlassian.design/ | Enterprise workflows | Navigation, tables, filters, status, collaboration |
| Ant Design — https://ant.design/ | Data-heavy admin tools | Table, Form, Tree, Select, Drawer, message/notification |
| GitHub Primer — https://primer.style/ | Developer tools | Navigation, issues, menus, forms, keyboard accessibility |

## Selection rules / 选择规则

1. Match the pattern to the user's task, not the reference brand's popularity.
2. Prefer platform-native and already-installed component libraries when the target project has one.
3. Do not prescribe a new dependency if the same behavior can be implemented consistently with the existing stack.
4. Verify current API names and accessibility guidance before giving library-specific instructions.
5. Cite or link the reference in analysis notes when a concrete pattern materially informs a Proposed rule.
6. Do not copy proprietary logos, illustrations, screenshots, fonts or code without permission.

1. 根据用户任务选择模式，而不是根据品牌热度。
2. 目标项目已有组件库时，优先使用平台原生能力和现有依赖。
3. 若现有技术栈能够一致实现，不要无故增加新依赖。
4. 提供库级实施指令前，核验当前 API 和无障碍规范。
5. 具体参考模式影响了 Proposed 规则时，在分析记录中注明链接。
6. 未获授权不得复制专有 Logo、插画、截图、字体或代码。


## Awesome DESIGN.md collection / Awesome DESIGN.md 样板集合

- Repository: https://github.com/VoltAgent/awesome-design-md
- Directory: https://github.com/VoltAgent/awesome-design-md/tree/main/design-md
- Online catalog: https://getdesign.md/
- Purpose: brand-specific design analyses, useful for studying visual identity, color, typography, layout, component patterns and agent-facing design instructions.
- Source shape: individual Markdown files vary in heading names and nesting. Parse actual Markdown; do not assume a fixed nine-heading template.
- The repository README badge showed 84 DESIGN.md entries at the time this repository was inspected; treat the count as dynamic and refresh from upstream when needed.
- The repository includes a LICENSE file declaring MIT for repository-licensed material. This does not automatically license third-party brand assets or website content embedded or referenced by each sample.
- Prefer abstract rules, token concepts and source links. Keep attribution. Do not redistribute logos, fonts, images or copied site content unless their individual rights permit it.

- 用途：品牌设计分析样板，可用于研究视觉识别、色彩、字体、布局、组件模式和面向 Agent 的设计说明。
- 来源结构：各 Markdown 文件的标题名称和嵌套方式不同。必须解析真实 Markdown，不得假设固定九标题模板。
- 本次检查时仓库 README 徽标显示 84 份 DESIGN.md；数量会变化，需要时应从上游刷新。
- 仓库包含声明 MIT 的 LICENSE 文件，但这不会自动覆盖每个样板内嵌或引用的第三方品牌素材和网站内容。
- 优先提取抽象规则、Token 概念和来源链接，保留归属。未经单独授权不得再分发 Logo、字体、图片或复制的网站文案。
