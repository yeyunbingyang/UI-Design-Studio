# Interaction States / 交互状态

**ID:** interaction-states

## Purpose / 用途
Define the visual and semantic states of interactive components and valid transitions between them.

定义交互组件的视觉/语义状态及有效状态转换。

## Activation / 启用条件
Enable whenever the deliverable includes buttons, inputs, menus, navigation controls, selectable items, async operations or stateful components.

交付物包含按钮、输入框、菜单、导航控件、可选择项目、异步操作或有状态组件时启用。

## State catalogue / 状态目录
Consider default, hover, focus-visible, active, selected, disabled, loading, success, error, empty, read-only, expanded/collapsed. Apply only relevant states.

考虑 default、hover、focus-visible、active、selected、disabled、loading、success、error、empty、read-only、expanded/collapsed。仅应用相关状态。

## Output contract / 输出契约
For each important component provide a state matrix with visual treatment, semantic meaning, trigger/entry condition, exit/transition and provenance (Observed/Inferred/Proposed).

每个重要组件提供状态矩阵，记录视觉表现、语义含义、触发/进入条件、退出/转换及来源性质（已观察/已推断/建议）。

## Boundaries / 维度边界
State appearance belongs here; action sequence and workflow belong to interaction-patterns. Static color tokens belong to color; state-dependent usage references those tokens.
