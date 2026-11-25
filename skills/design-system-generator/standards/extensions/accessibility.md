# Accessibility / 无障碍设计

**ID:** accessibility

## Purpose / 用途
Define inclusive interaction and content requirements for keyboard, assistive technology, low-vision, motor and cognitive accessibility.

定义面向键盘、辅助技术、低视力、运动能力和认知差异的包容性设计要求。

## Activation / 启用条件
Enable for production handoff, public-facing products, complex controls, data-heavy workspaces or when explicitly requested.

生产交付、公众产品、复杂控件、数据密集型工作台或用户明确要求时启用。

## Analysis checklist / 分析清单
- Semantic HTML and accessible names/roles/states.
- Keyboard operation, logical focus order, focus-visible and focus restoration.
- Contrast and non-color-only communication.
- Labels, instructions, validation and error announcements.
- Dialog focus management and live-region behavior where appropriate.
- Touch target size and pointer alternatives.
- Reduced motion, zoom/reflow and screen-reader structure.

- 语义化 HTML、无障碍名称/角色/状态。
- 键盘操作、逻辑焦点顺序、focus-visible 和焦点恢复。
- 对比度及非颜色单一信息表达。
- 标签、说明、校验和错误播报。
- 适用时的 Dialog 焦点管理和 live region 行为。
- 触控目标尺寸和指针替代方式。
- 减少动态效果、缩放/重排和屏幕阅读器结构。

## Output contract / 输出契约
Provide component-level accessibility requirements and a manual/test checklist. State audit status honestly. Do not claim WCAG conformance without an actual audit.

输出组件级无障碍要求和人工/自动测试清单。必须如实说明审计状态，未经实际审计不得声称符合 WCAG。

## Boundaries / 维度边界
Accessibility adds requirements across components and interaction; it is not a separate visual theme or token dimension.
