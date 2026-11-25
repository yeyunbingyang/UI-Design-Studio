# Interaction Patterns / 交互模式

**ID:** interaction-patterns

## Purpose / 用途
Specify end-to-end behavior contracts for user actions and multi-step flows.

定义用户操作和多步骤流程的端到端行为契约。

## Activation / 启用条件
Enable for forms, dialogs, drawers, popovers, menus, search, filters, tables, selection, drag-and-drop, bulk actions, undo/recovery and keyboard workflows.

表单、对话框、抽屉、Popover、菜单、搜索、筛选、表格、选择、拖拽、批量操作、撤销/恢复和键盘工作流均适用。

## Behavior contract / 行为契约
Every important flow must define Trigger, Preconditions, Result, Feedback, Dismissal, Recovery, Keyboard, Responsive behavior and Edge cases.

每个重要交互必须定义触发、前置条件、结果、反馈、关闭、恢复、键盘、响应式行为和边界情况。

## Output contract / 输出契约
Provide flow steps, component roles, state transitions, failure handling and keyboard/touch alternatives. Mark existing behavior Observed and new behavior Proposed.

输出流程步骤、组件角色、状态转换、失败处理和键盘/触控替代方案。现有行为标记为已观察，新规划行为标记为建议。

## Boundaries / 维度边界
Do not redefine component visual anatomy or motion token values. Reference Components, Interaction States and Motion instead.
