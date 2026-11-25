# Interaction Design Guide / 交互设计指南

## Hybrid rule / 混合规则

The target design's visible or source-backed behavior is documented as Observed. Behavior not present in the evidence may be proposed when it improves task completion, clarity, recovery, accessibility or consistency. Never imply a proposal already exists.

目标设计中可见或有源码支持的行为标记为“已观察”。证据未展示的行为，如果能提升任务完成率、清晰度、恢复能力、无障碍或一致性，可以主动提出建议。不得暗示建议已经存在。

## State model / 状态模型

Consider these states when relevant:
- Default / 默认
- Hover / 悬停
- Focus-visible / 键盘焦点
- Active / 按下
- Selected / 已选中
- Disabled / 禁用
- Loading / 加载中
- Success / 成功
- Error / 错误
- Empty / 空状态
- Read-only / 只读

Do not mechanically assign all states to every component. Select states based on actual component semantics.

不要机械地将所有状态套用到每个组件，应根据组件语义选择适用状态。

## Behavior contract / 行为契约

For each important interaction, specify:
1. Trigger — what starts it.
2. Preconditions — permission, selection or required data.
3. Result — state, data or navigation outcome.
4. Feedback — immediate and completion feedback.
5. Dismissal — how the user closes or exits it.
6. Recovery — undo, retry, reset or correction.
7. Keyboard — focus order, Enter/Space/Escape and shortcuts.
8. Responsive — pointer and touch behavior.
9. Edge cases — empty data, latency, error, conflict, duplicate action.

每个重要交互应明确触发、前置条件、结果、反馈、关闭、恢复、键盘、响应式和边界情况。

## Pattern checklist / 模式清单

Review only patterns relevant to the product:
- Navigation: active item, nested navigation, breadcrumbs, tabs, route changes.
- Forms: labels, validation timing, inline errors, submit/loading/success.
- Selection: single/multi-select, bulk action, select-all, clear selection.
- Overlay: dialog, drawer, popover, menu, focus trap/restore, Escape.
- Data: sorting, filtering, pagination, virtualization, row actions.
- Drag and drop: draggable affordance, valid targets, insertion marker, cancel, keyboard alternative.
- Search: query state, debounce, suggestions, no-results, clear.
- Feedback: toast, inline status, progress, confirmation and destructive actions.
- Recovery: undo, retry, autosave, unsaved changes, conflict resolution.
- Keyboard: shortcuts, command palette, discoverability and conflicts.
- Motion: enter/exit, layout transition, loading and reduced-motion behavior.

按产品需要检查导航、表单、选择、浮层、数据、拖放、搜索、反馈、恢复、键盘和动效模式。

## Reference selection / 参考选择

Use Linear for productivity-workspace patterns; Radix UI for accessible primitives; shadcn/ui for practical component composition; Material Design 3 for adaptive interaction and motion; Atlassian and Ant Design for enterprise workflows and dense data. Choose a pattern, not an entire visual identity. Verify current documentation before specifying a library API.

可根据场景参考 Linear、Radix UI、shadcn/ui、Material Design 3、Atlassian 和 Ant Design。选择的是交互模式，不是整套视觉身份。指定具体库 API 前应核验最新文档。

## Anti-patterns / 反模式

- No hover-only critical actions.
- No color-only status communication.
- No destructive action without clear consequence and recovery policy.
- No modal for trivial inline edits when a lighter pattern is clearer.
- No drag-only workflow without a keyboard or menu alternative.
- No animation that blocks task completion or ignores reduced motion.
- No silent failure; provide actionable feedback.

禁止关键操作只依赖悬停；禁止只用颜色表达状态；破坏性操作必须说明后果和恢复策略；简单编辑不应滥用模态框；拖拽必须有键盘或菜单替代；动效不得阻碍任务或忽略减少动态效果；不得静默失败。
