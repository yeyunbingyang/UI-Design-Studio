# Motion & Feedback / 动效与反馈

**ID:** motion-feedback

## Purpose / 用途
Define time-based transitions and user/system feedback that communicate change, progress, completion or failure.

定义通过时间变化传达状态、进度、完成或失败的动效和反馈。

## Activation / 启用条件
Enable when the product uses animated transitions, loading/progress indicators, toast/notification, inline status or responsive layout transitions.

产品使用动画过渡、加载/进度指示器、Toast/通知、行内状态或响应式布局过渡时启用。

## Analysis checklist / 分析清单
- Trigger, property, duration, easing, direction and interruption.
- Enter/exit transitions and layout shifts.
- Loading, progress, success, error and notification feedback.
- Motion hierarchy and performance.
- prefers-reduced-motion behavior and non-motion alternatives.

- 触发条件、变化属性、持续时间、缓动、方向和中断行为。
- 进入/退出过渡和布局变化。
- 加载、进度、成功、错误和通知反馈。
- 动效层级与性能。
- prefers-reduced-motion 行为和非动效替代方案。

## Output contract / 输出契约
Provide motion tokens and a trigger-to-feedback matrix. Specify values only when observed or intentionally proposed; label recommendations Proposed.

输出动效 Token 和触发-反馈矩阵。仅在已观察或明确建议时给出具体数值，并将建议标记为 Proposed。

## Boundaries / 维度边界
Static gradients, glow and textures belong to effects. Time-based transitions and animation belong to motion.
