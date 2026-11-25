# Design Gap Analysis & Human Review / 设计维度差距分析与人工确认

> Status: Required workflow for design-system-generator / 状态：design-system-generator 必需工作流

## 1. Purpose / 目的

After collecting a target product UI, the AI MUST independently audit the evidence against the existing canonical design model and identify missing, incomplete, ambiguous or conflicting information. A reviewable gap report MUST be shown before changing approved specifications, tokens, presets or previews.

采集目标产品 UI 后，AI 必须依据现有规范化设计模型主动检查证据，识别缺失、不完整、歧义或冲突的信息。修改已确认的设计规范、Token、预设或预览之前，必须先展示差距报告。

This is a review workflow, not permission to invent source facts or silently expand the canonical model. Never add a 21st dimension or change stable IDs without a separately approved architecture change.

这是审核流程，不允许编造来源事实或静默扩展规范模型。未经单独批准的架构变更，不得新增第 21 个维度或修改稳定 ID。

## 2. Audit scope / 检查范围

The audit MUST cover:

1. All 20 canonical dimensions: style, theme, color, typography, spacing, radius, border, background, surface, shadow, effects, imagery, icons, layout, navigation, density, components, visualization, interaction, motion.
2. All 9 Core semantic domains and 16 Extended chapters.
3. All applicable Extensions: visual-assets-effects, navigation-ia, interaction-states, interaction-patterns, motion-feedback, accessibility, implementation-validation.
4. Product information architecture, page inventory, key user journeys, reusable components, data visualization, responsive behavior, empty/loading/error/success states, keyboard/accessibility behavior and implementation constraints.
5. All three previews: preview.html, preview-dark.html and application-preview.html.

检查必须覆盖全部 20 个标准维度、9 个 Core 语义域、16 个 Extended 章节、适用的 7 个 Extensions，以及产品信息架构、页面清单、核心流程、组件、可视化、响应式、交互状态、无障碍、工程约束和三个 HTML 预览。

## 3. Evidence and coverage status / 证据与覆盖状态

Each finding MUST distinguish evidence status:
- Observed / 已观察: directly supported by supplied UI, screenshot, source, styles, tokens or official documentation.
- Inferred / 已推断: reasoned from repeated or partial evidence; include rationale and confidence.
- Proposed / 建议: new recommendation, not an existing source fact.
- Unknown / 未知: cannot be resolved from current evidence; specify what additional material would resolve it.

Coverage MUST be one of Covered / 已覆盖, Partial / 部分覆盖, Missing / 未覆盖, Unknown / 证据不足, Conflict / 存在冲突. A dimension not visible in supplied evidence MUST be marked Unknown, not Missing-as-product-fact.

## 4. Required gap report / 差距报告要求

Before asking for approval, show a summary and detailed table. Every report MUST include all 20 dimension IDs, even when no evidence exists.

| Field | Required content |
|---|---|
| GAP ID | Stable report-local ID such as GAP-001 |
| Dimension | Existing dimension ID, Core domain, chapter or Extension |
| Coverage | Covered / Partial / Missing / Unknown / Conflict |
| Evidence | Source page/file/selector and evidence status |
| Gap | Missing, ambiguous or conflicting detail |
| Recommendation | Concrete rule, token, component, state, page or preview change |
| Confidence | High / Medium / Low |
| User input needed | Exact screenshot, URL, file, state or decision requested |
| Output impact | DESIGN.md, tokens, light preview, dark preview, application preview |

Also list completed areas that should not change, source conflicts, unmapped concerns, out-of-scope items, Core/Extended/Extension coverage and product page/state inventory.

同时列出无需修改的完整项目、来源冲突、未映射问题、范围外事项、Core/Extended/Extension 覆盖情况及产品页面/状态清单。

## 5. Human review and user-led research / 人工审核与用户自行查阅

The user may:
- Accept a finding as proposed.
- Accept with edits.
- Request more evidence.
- Reject / keep the current design.
- Defer.
- Conduct their own research and supplement screenshots, URLs, source files or written requirements.

用户可以逐项接受、修改、要求补充证据、拒绝、暂缓，也可以自行查阅后补充截图、URL、源码或文字要求。AI 应自行核实可通过已授权来源和工具查证的事项，并将用户补充材料纳入证据清单、更新建议。

Silence, continuing collection, or providing more screenshots is NOT approval to modify approved artifacts. Only explicitly approved GAP IDs may be applied. Partial approval applies only to accepted IDs; all other findings remain pending. Never overwrite an existing artifact without explicit authorization.

用户未明确表态、要求继续采集或补充截图，均不等于批准修改。只有明确确认的 GAP ID 才能应用；部分确认仅应用已批准项，其余保持待处理。未经明确授权不得覆盖现有文件。

## 6. Apply approved changes / 应用已确认内容

After approval, map every accepted GAP ID to exact DESIGN.md chapters, canonical dimension/token ownership, components/states/responsive/accessibility rules, and changes to preview.html, preview-dark.html and application-preview.html. All outputs MUST derive from one normalized design model. Preserve Observed, Inferred and Proposed distinctions and source attribution.

确认后，将每个已批准 GAP ID 映射到 DESIGN.md 章节、标准维度与 Token 归属、组件/状态/响应式/无障碍规则，以及三个 HTML 预览。所有输出必须来自同一规范化设计模型，并保留证据性质和来源归属。

## 7. Re-validation / 复验

Report accepted, edited, deferred and rejected GAP IDs; 20-dimension coverage before/after; DESIGN.md/Core/Extended/Extension completeness; token parity across all previews; application IA and representative interactions; local opening/responsive/browser checks actually run; and remaining unknowns. Never claim an unperformed test passed.

报告必须列出接受、修改、暂缓和拒绝的 GAP ID，更新前后的 20 维覆盖、文档完整性、三个预览的 Token 一致性、应用信息架构和代表性交互，以及实际执行过的本地打开/响应式/浏览器检查和剩余未知项。不得将未执行的测试写成通过。

## 8. Report skeleton / 报告模板

```markdown
# Design Gap Report / 设计维度差距报告
- Product / 产品：
- Source evidence / 来源证据：
- Review status / 审核状态：Pending / 待确认
## Coverage summary / 覆盖摘要
| Dimension ID | Coverage | Evidence status | Notes |
|---|---|---|---|
| style | | | |
| theme | | | |
| color | | | |
| typography | | | |
| spacing | | | |
| radius | | | |
| border | | | |
| background | | | |
| surface | | | |
| shadow | | | |
| effects | | | |
| imagery | | | |
| icons | | | |
| layout | | | |
| navigation | | | |
| density | | | |
| components | | | |
| visualization | | | |
| interaction | | | |
| motion | | | |
## Findings / 差距明细
| GAP ID | Dimension | Coverage | Evidence | Gap | Recommendation | Confidence | User input | Output impact |
|---|---|---|---|---|---|---|---|---|
## User review / 用户审核
| GAP ID | Decision | User edits / notes |
|---|---|---|
## Apply plan / 应用计划
| Approved GAP ID | DESIGN.md | Tokens | Previews | Validation |
|---|---|---|---|---|
```
