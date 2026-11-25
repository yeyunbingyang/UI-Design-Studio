---
specVersion: "1.0.0"
documentType: "example"
project: "Resource Management Workspace"
status: "illustrative-example"
language: "en-zh"
---

# DESIGN.md — Resource Management Workspace / 资源管理工作台

> Illustrative example focused on dense desktop workflows and hybrid interaction planning.  
> 格式示例，重点展示桌面高密度工作流和混合式交互规划。

## 1. Design Overview — 设计概述
A workspace for collecting, organizing, reviewing and retrieving files, links and structured resources. Core tasks include capture, search, filtering, bulk management and opening a resource detail view.  
用于收集、组织、审核和检索文件、链接及结构化资源的工作台。核心任务包括快速捕捉、搜索、筛选、批量管理和打开资源详情。

**[Proposed / 建议]** Optimize for fast scanning, persistent context, predictable bulk actions and reversible organization operations.  
建议优先优化快速扫描、上下文保持、可预测的批量操作和可撤销的整理行为。

## 2. Visual Identity — 视觉识别
Use a focused tool-like visual language. Navigation and content hierarchy should remain stable while selection and detail context change. Avoid decorative treatments that compete with resource metadata.  
采用专注、工具化的视觉语言。选择状态和详情上下文变化时，导航与内容层级应保持稳定。避免与资源元信息争夺注意力的装饰处理。

## 3. Color System — 色彩体系
Define semantic roles for canvas, sidebar, content surface, selected row, focus ring, tag, warning, destructive action and success. Tags must not be the sole carrier of category meaning.  
定义画布、侧栏、内容表面、选中行、焦点环、标签、警告、破坏性操作和成功状态的语义角色。标签颜色不得成为类别含义的唯一载体。

## 4. Typography — 字体体系
Use a compact but readable body scale. Resource titles receive stronger emphasis than paths, timestamps and secondary metadata. Use tabular numerals for dates, sizes and counts where useful.  
使用紧凑但易读的正文字号。资源标题的强调程度高于路径、时间戳和辅助元信息。日期、容量和计数可使用等宽数字。

## 5. Spacing & Sizing — 间距与尺寸
Define separate density presets for comfortable and compact views. Keep row height, checkbox hit area, toolbar height and detail-pane padding independently configurable.  
分别定义舒适和紧凑两种密度预设。行高、复选框点击区域、工具栏高度和详情面板内边距应独立配置。

## 6. Shape & Surface — 形状与表面
Use subtle radius for rows and panels; selection should be visible without turning every row into a raised card. Detail drawers need a clear boundary from the list.  
行和面板使用克制圆角；选中状态应清晰，但不应把每一行都做成凸起卡片。详情抽屉应与列表形成明确边界。

## 7. Background & Effects — 背景与特效
Use restrained surface differentiation to separate navigation, list, toolbar and detail pane. Avoid large decorative backgrounds behind dense resource metadata.  
通过克制的表面差异区分导航、列表、工具栏和详情面板。高密度资源元信息背后避免使用大面积装饰背景。

## 8. Iconography & Imagery — 图标与图像
Use consistent file-type and resource-type icons. Thumbnails should preserve aspect ratio and provide a fallback for missing or unsupported previews.  
使用统一的文件类型和资源类型图标。缩略图保持宽高比，并为缺失或不支持预览的资源提供回退显示。

## 9. Layout & Grid — 布局与网格
**[Proposed / 建议]** Desktop: navigation rail + resource list + optional detail drawer. Keep the main toolbar and list header visible while the result region scrolls. Mobile: switch to a single-column navigation/list/detail flow.  
建议桌面端采用导航栏 + 资源列表 + 可选详情抽屉。主工具栏和列表头部保持可见，结果区域独立滚动。移动端转换为单列导航/列表/详情流程。

## 10. Navigation — 导航系统
Use persistent primary navigation and contextual filters. Preserve the current collection and query when opening and closing detail. Provide breadcrumbs only when hierarchy depth justifies them.  
使用持久主导航和上下文筛选。打开和关闭详情时保留当前集合与查询条件。仅在层级深度确有需要时使用面包屑。

## 11. Component System — 组件体系
**Resource Row / 资源行**
- Anatomy: selection control, type icon, title, metadata, tags, overflow actions.
- Variants: default, selected, compact, multi-line.
- Content: title truncates with accessible full text; metadata wraps or moves to secondary line.
- States: hover, focus-visible, selected, disabled, processing, error.

**Bulk Action Bar / 批量操作栏**
- Appears only when one or more resources are selected.
- Shows selection count and only actions valid for the current selection.
- Destructive actions are visually separated and require confirmation when irreversible.

**Detail Drawer / 详情抽屉**
- Shows resource preview, metadata, context and available actions.
- Preserves list scroll and selection when opened.

## 12. Interaction States — 交互状态
**[Proposed / 建议]** Selected rows use a persistent selection indicator and surface; hover is transient and must not obscure selected state. Disabled bulk actions explain the missing prerequisite when it is not self-evident.  
建议选中行使用持续的选中指示和表面；悬停状态为临时状态，不能遮盖选中状态。批量操作被禁用且原因不明显时，应说明缺失的前置条件。

## 13. Interaction Patterns — 交互模式

### Open detail drawer / 打开详情抽屉 — [Proposed / 建议]
- Trigger: activate a resource row or its explicit detail action.
- Preconditions: resource exists and is accessible.
- Result: open a right-side drawer on desktop; show selected resource details.
- Feedback: preserve selected-row highlight and list scroll position.
- Dismissal: close button; Escape; outside click only if no unsaved edits.
- Recovery: if detail fetch fails, keep the drawer open with retry and error explanation.
- Keyboard: focus moves into the drawer; Tab remains within modal drawer if modal; close restores focus to trigger.
- Responsive: on narrow screens use a full-screen detail route or sheet.
- Edge cases: deleted resource, permission loss, stale metadata, unsaved edits.

### Bulk select and archive / 批量选择与归档 — [Proposed / 建议]
- Trigger: select rows, then activate Archive.
- Preconditions: at least one eligible resource selected.
- Result: selected resources move to archive; list updates.
- Feedback: show count and provide undo when supported.
- Dismissal: not applicable.
- Recovery: undo action or restore from archive.
- Keyboard: selection controls and action bar are keyboard operable.
- Responsive: action bar remains reachable without covering essential content.
- Edge cases: partial permission, mixed eligibility, concurrent updates, duplicate request.

### Drag and drop / 拖拽 — [Proposed / 建议]
- Trigger: drag a resource to a valid collection or ordering position.
- Preconditions: user has permission and target accepts the resource.
- Result: update collection or order only after valid drop.
- Feedback: show drag affordance, valid-target highlight and insertion marker.
- Dismissal: Escape or pointer cancellation.
- Recovery: undo move; report invalid target.
- Keyboard: provide Move to… menu or equivalent keyboard operation.
- Responsive: touch alternative through an explicit Move action.
- Edge cases: invalid target, duplicate item, network failure, stale ordering.

## 14. Motion & Feedback — 动效与反馈
Use restrained transitions for drawer entry, row selection and bulk action bar appearance. Do not animate large lists item-by-item. Respect prefers-reduced-motion and provide immediate state changes when motion is disabled.  
抽屉进入、行选择和批量操作栏出现时使用克制过渡。不要逐条动画大型列表。遵循 prefers-reduced-motion；禁用动效时仍须立即呈现状态变化。

## 15. Responsive & Accessibility — 响应式与无障碍
Ensure row actions are not hover-only. Provide accessible names for icon-only controls, visible focus, keyboard selection and a non-drag alternative. Define list semantics and announce selection count changes where appropriate.  
行操作不得只在悬停时出现。图标按钮提供无障碍名称，提供可见焦点、键盘选择和非拖拽替代方式。定义列表语义，并在适当时播报选择数量变化。

## 16. Implementation Guidelines — 工程实施指南
- Separate selection state from hover state.
- Keep filters, sort order and scroll context stable when opening details.
- Use optimistic updates only when rollback is available.
- Make destructive operations explicit and recoverable where possible.
- Test empty, loading, error, permission and stale-data states.
- Preserve keyboard and touch alternatives for drag-and-drop.

选择状态与悬停状态必须分离；打开详情时保留筛选、排序和滚动上下文；仅在可回滚时使用乐观更新；破坏性操作应明确且尽可能可恢复；测试空、加载、错误、权限和过期数据状态；拖拽必须提供键盘和触控替代方式。

## Appendix A. Canonical Dimension Mapping — 20 维映射
Relevant dimensions: style, theme, color, typography, spacing, radius, border, background, surface, shadow, effects, imagery, icons, layout, navigation, density, components, interaction and motion. Visualization is included when the resource workspace displays analytics or charts.

## Appendix B. References & Attribution — 参考与归属
Illustrative original example authored for UI-Design-Studio. Interaction patterns are proposed for demonstration and are not claimed to be existing behavior in a real product.  
本示例为 UI-Design-Studio 原创格式演示。交互模式均为建议示例，不代表某个真实产品已有这些行为。
