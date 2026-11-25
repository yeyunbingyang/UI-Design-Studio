# Awesome DESIGN.md Compatibility Mapping / Awesome DESIGN.md 兼容映射

## Source characteristics / 来源特征

The upstream repository is a curated collection of brand-specific Markdown analyses. The README describes DESIGN.md as plain Markdown for AI agents. Individual brand files use different heading names and nested structures. Do not treat the collection as a fixed nine-heading schema.

上游仓库是品牌设计分析 Markdown 集合。README 将 DESIGN.md 描述为供 AI Agent 使用的纯 Markdown。不同品牌文件的标题名称和嵌套结构并不完全一致，不得将其视为固定九标题 Schema。

## Semantic mapping / 语义映射

| Common upstream topic / 常见上游主题 | Core domain | Extended chapter / 扩展章节 |
|---|---|---|
| Overview, Design System Overview | Design Overview & Identity | 01–02 |
| Colors, Color Palette | Color System | 03 |
| Typography, Font System | Typography | 04 |
| Components, Component Library | Component System | 11; states/patterns in 12–13 |
| Layout, Spacing, Grid | Layout & Spacing | 05, 09 |
| Visual Hierarchy, Elevation, Shapes | Visual Hierarchy, Shape & Surface | 02, 06, 09, 11 |
| Do's and Don'ts, Design Principles | Design Principles & Constraints | 02, 06, 07, 16 |
| Responsive Behavior | Responsive Design | 15 |
| Iteration Guide, Agent Guidelines | Agent Guidelines | 16 |
| Imagery, Photography, Iconography | Extension: Visual Assets & Effects | 08 |
| Navigation, IA, Routes | Extension: Navigation & IA | 10 |
| Hover, Focus, Selected, Loading, Error | Extension: Interaction States | 12 |
| Dialog, Drawer, Form, Search, Drag & Drop | Extension: Interaction Patterns | 13 |
| Transition, Duration, Easing, Reduced Motion | Extension: Motion & Feedback | 14 |
| Keyboard, Semantics, Contrast, Screen Readers | Extension: Accessibility | 15 |
| QA, Screenshot Diff, Implementation Tests | Extension: Implementation & Validation | 16 |

One source section may map to multiple domains. Multiple source sections may map to one domain. Preserve original heading text, ordering and source excerpts in analysis notes.

来源一个章节可以映射多个语义域，多个来源章节也可以共同组成一个语义域。分析记录应保留原始标题、顺序和来源摘录。

## Import contract / 导入契约

1. Parse Markdown heading hierarchy, paragraphs, lists, tables and fenced code blocks.
2. Preserve raw source unchanged alongside normalized analysis.
3. Assign each source block one or more target domain IDs.
4. Record mapping rationale and confidence.
5. Store unknown or ambiguous blocks in Unmapped; never discard them.
6. Keep original brand facts separate from Proposed target-project changes.
7. Record repository URL, file URL, revision/commit, retrieval date and content hash when available.
8. Do not infer a file's license from the collection's repository license alone.

1. 解析 Markdown 标题层级、段落、列表、表格和代码块。
2. 与规范化分析同时保留未经修改的原始来源。
3. 为每个来源内容块分配一个或多个目标语义域 ID。
4. 记录映射理由和置信度。
5. 未知或有歧义的内容进入 Unmapped，不得丢弃。
6. 将品牌原始事实与目标项目的 Proposed 修改建议分开。
7. 尽可能记录仓库 URL、Revision/Commit、获取日期和内容哈希。
8. 不得仅根据集合仓库许可证推断单个文件或第三方素材的授权。

## Example: source variation / 来源结构差异示例

The inspected Apple sample uses Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts, Responsive Behavior, Iteration Guide and Known Gaps. These are mapped by meaning, not ordinal position. This demonstrates why the importer must parse actual headings.

本次检查的 Apple 样板使用 Overview、Colors、Typography、Layout、Elevation & Depth、Shapes、Components、Do's and Don'ts、Responsive Behavior、Iteration Guide 和 Known Gaps 等标题。映射依据是语义而非章节序号。这说明导入器必须解析真实标题。
