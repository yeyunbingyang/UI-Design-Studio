---
specVersion: "1.0.0"
documentType: "example"
project: "Operations Dashboard"
status: "illustrative-example"
outputMode: "extended"
enabledExtensions: ["interaction-states", "interaction-patterns", "navigation-ia", "accessibility", "implementation-validation"]
language: "en-zh"
---

# DESIGN.md — Operations Dashboard / 运营数据工作台

> Example only. Values are illustrative, not measured from a real product.  
> 仅为格式示例。以下数值为演示值，并非从真实产品测量所得。

## 1. Design Overview — 设计概述
**Intent / 目标:** A desktop-first operations dashboard for monitoring key metrics, reviewing exceptions and completing routine actions.  
面向运营人员的桌面优先工作台，用于监控关键指标、处理异常和完成日常操作。

**[Proposed / 建议]** Prioritize information hierarchy, scanability, stable navigation and low-friction table actions.  
优先保证信息层级、快速扫描、导航稳定和低成本表格操作。

## 2. Visual Identity — 视觉识别
**[Proposed / 建议]** Use a restrained analytical visual language: neutral surfaces, one primary accent, semantic status colors and clear typographic hierarchy.  
采用克制的数据分析视觉语言：中性表面、单一主强调色、语义状态色和清晰字体层级。

## 3. Color System — 色彩体系
Illustrative semantic tokens:
| Token | Example | Usage |
|---|---|---|
| color.surface.canvas | #F7F8FA | Page background / 页面背景 |
| color.surface.panel | #FFFFFF | Cards and tables / 卡片与表格 |
| color.text.primary | #17202A | Primary text / 主文字 |
| color.text.secondary | #667085 | Supporting text / 辅助文字 |
| color.action.primary | #3659D9 | Primary actions / 主要操作 |
| color.status.success | #16845B | Success / 成功 |
| color.status.warning | #B7791F | Warning / 警告 |
| color.status.danger | #C43D4B | Error / 错误 |

**[Proposed / 建议]** Always pair status color with text or an icon; never communicate status by color alone.  
状态颜色必须搭配文字或图标，不得仅依赖颜色传递状态。

## 4. Typography — 字体体系
**[Proposed / 建议]** Use a neutral sans-serif stack with tabular numerals for KPI values. Suggested scale: page title 28/36px, section title 18/26px, body 14/21px, metadata 12/18px.  
使用中性无衬线字体，KPI 数字启用等宽数字。建议字号：页面标题 28/36px、区块标题 18/26px、正文 14/21px、元信息 12/18px。

## 5. Spacing & Sizing — 间距与尺寸
**[Proposed / 建议]** Use a 4px base scale (4, 8, 12, 16, 24, 32). Table rows 44–48px; compact filters 32–36px. Validate against actual density needs.  
采用 4px 基础间距（4、8、12、16、24、32）。表格行高建议 44–48px，紧凑筛选控件 32–36px，并依据实际信息密度验证。

## 6. Shape & Surface — 形状与表面
**[Proposed / 建议]** Cards use 10px radius, subtle 1px borders and minimal shadow. Keep table surfaces visually continuous.  
卡片建议 10px 圆角、轻微 1px 描边和极弱阴影；表格表面保持连续。

## 7. Background & Effects — 背景与特效
**[Proposed / 建议]** Avoid decorative gradients behind data. Use restrained separators and subtle hover surfaces.  
数据区域避免装饰性渐变，使用克制的分隔线和轻微悬停表面。

## 8. Iconography & Imagery — 图标与图像
Use one consistent outline icon family. Icons supplement labels and do not replace accessible names.  
使用统一的线性图标体系。图标用于补充标签，不得替代无障碍名称。

## 9. Layout & Grid — 布局与网格
**[Proposed / 建议]** Desktop layout: persistent sidebar, top utility bar, KPI row, chart region and data table. Keep the main content scroll independent from the sidebar where appropriate.  
桌面布局建议采用固定侧栏、顶部工具栏、KPI 区、图表区和数据表格。适当保持主内容与侧栏独立滚动。

## 10. Navigation — 导航系统
Active navigation uses both a surface/indicator and text emphasis. On narrow screens, collapse the sidebar into a drawer with a visible menu trigger.  
当前导航同时通过表面/指示条和文字强调。窄屏将侧栏折叠为抽屉，并保留明确菜单入口。

## 11. Component System — 组件体系
**Metric Card / 指标卡片**
- Anatomy: label, value, trend, optional comparison period.
- Tokens: semantic text, surface and status tokens.
- Content: values use tabular numerals; trend includes text and direction icon.
- States: loading skeleton, unavailable, error.
- Avoid: decorative charts without meaningful data.

**Data Table / 数据表格**
- Anatomy: toolbar, column headers, rows, row actions, pagination.
- Variants: default, compact, selectable.
- States: loading, empty, error, selected, disabled action.
- Keep column labels visible and preserve row-action discoverability.

## 12. Interaction States — 交互状态
**[Proposed / 建议]** Rows receive a subtle hover surface; keyboard focus is a visible outline; selected rows use a persistent selection treatment; disabled actions include an explanation when the reason is not obvious.  
建议表格行使用轻微悬停表面；键盘焦点必须清晰可见；选中行保留持续选中样式；禁用操作在原因不明显时提供说明。

## 13. Interaction Patterns — 交互模式
**Filter application / 筛选应用 — [Proposed / 建议]**
- Trigger: user changes a filter.
- Result: update the result set and active-filter summary.
- Feedback: show loading only when latency is perceptible; preserve previous data during refresh where safe.
- Recovery: provide Clear all and per-filter reset.
- Keyboard: all filters are reachable and operable without a pointer.
- Edge cases: no results, invalid date range, request failure.

用户修改筛选条件后更新结果集和已启用筛选摘要。仅在等待明显时显示加载；安全情况下刷新期间保留旧数据。提供清空全部和单项重置。所有筛选可通过键盘操作，并处理无结果、日期范围无效和请求失败。

## 14. Motion & Feedback — 动效与反馈
**[Proposed / 建议]** Use short opacity/color transitions for hover and selection; avoid animated chart movement that impairs comparison. Respect prefers-reduced-motion.  
悬停和选中采用短暂透明度/颜色过渡；避免妨碍数据比较的图表运动。遵循 prefers-reduced-motion。

## 15. Responsive & Accessibility — 响应式与无障碍
**[Proposed / 建议]** At tablet widths, sidebar becomes collapsible; at mobile widths, prioritize KPI summary and filter access, then allow tables to scroll horizontally or switch to a labeled card representation. Exact breakpoints must be validated in implementation.  
平板宽度下侧栏可折叠；手机端优先展示 KPI 摘要和筛选入口，表格可横向滚动或转换为带字段标签的卡片。精确断点须在实施时验证。

## 16. Implementation Guidelines — 工程实施指南
- Use semantic tokens; avoid hard-coded colors inside components.
- Preserve table semantics and keyboard navigation.
- Provide loading, empty and error states for every asynchronous data region.
- Verify contrast, focus visibility and narrow-screen overflow before release.

使用语义 Token，组件内避免硬编码颜色；保留表格语义和键盘导航；每个异步数据区域都提供加载、空和错误状态；发布前验证对比度、焦点可见性和窄屏溢出。

## Appendix A. Canonical Dimension Mapping — 20 维映射
Mapped dimensions: theme, color, typography, spacing, radius, border, background, surface, shadow, icons, layout, navigation, density, components, visualization, interaction, motion. Other dimensions are not observed or not required in this example.

## Appendix B. References & Attribution — 参考与归属
Illustrative original example authored for UI-Design-Studio. No third-party brand assets included.  
本示例为 UI-Design-Studio 原创格式演示，不包含第三方品牌素材。
