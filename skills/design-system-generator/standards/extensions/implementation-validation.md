# Implementation & Validation / 工程实施与验证

**ID:** implementation-validation

## Purpose / 用途
Translate design decisions into implementation constraints and a verifiable QA plan for Codex and developers.

将设计决策转化为 Codex 和开发者可执行的工程约束与可验证 QA 计划。

## Activation / 启用条件
Enable for code handoff, active development, design-system implementation, visual QA or production release.

代码交接、实际开发、设计系统实施、视觉 QA 或生产发布时启用。

## Analysis checklist / 分析清单
- Existing stack, component library, token conventions and project structure.
- Token-to-CSS variable mapping and component API boundaries.
- Asset loading, font fallback, responsive implementation and performance.
- Screenshot baselines, viewport coverage and visual regression scope.
- Functional interaction tests, keyboard tests and accessibility checks.
- Unresolved decisions, migration risks and non-goals.

- 现有技术栈、组件库、Token 约定和项目结构。
- Token 到 CSS 变量的映射及组件 API 边界。
- 素材加载、字体回退、响应式实施和性能。
- 截图基线、视口覆盖和视觉回归范围。
- 功能交互测试、键盘测试和无障碍检查。
- 待决事项、迁移风险和非目标。

## Output contract / 输出契约
Provide implementation sequence, existing-dependency preference, code constraints, QA matrix, acceptance criteria and explicit unverified items. Never claim tests were run unless they were.

输出实施顺序、优先复用现有依赖的规则、代码约束、QA 矩阵、验收标准和明确的未验证事项。未实际运行测试不得声称测试已通过。

## Boundaries / 维度边界
Implementation guidelines apply across all 20 dimensions. Do not introduce a new design dimension or duplicate token ownership.
