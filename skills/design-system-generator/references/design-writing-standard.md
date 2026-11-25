# Design Writing Standard / DESIGN 文档写作标准

## Mode and structure / 模式与结构
- Core is mandatory and covers nine semantic content domains, not nine fixed upstream headings.
- Extended uses the canonical 16 chapters grouped into four Parts.
- The upstream Awesome DESIGN.md collection is variable Markdown; parse actual headings and preserve unknown sections.
- Core Export and Extended Export must be rendered from the same normalized design model.

- Core 为必需内容，覆盖九个语义内容域，而非上游固定九个标题。
- Extended 使用四个 PART 下的 16 个规范章节。
- 上游 Awesome DESIGN.md 是结构可变的 Markdown；必须解析真实标题并保留未知章节。
- Core Export 和 Extended Export 必须来自同一份规范化设计模型。

## Voice and precision / 语言与精度
- Write implementation instructions, not marketing copy.
- Prefer “Use semantic color tokens for text, surface and status roles” over “Use beautiful colors”.
- Every numeric value must carry a unit and provenance. Screenshot estimates must be labeled approximate / 约.
- Avoid vague adjectives unless followed by observable characteristics.
- Use MUST / 必须, SHOULD / 应当, MAY / 可以, MUST NOT / 禁止 consistently.
- Write English first, followed by equivalent Simplified Chinese.

- 使用工程实施指令，而非营销文案。
- 优先写“文字、表面和状态角色使用语义化颜色 Token”，不要只写“使用漂亮的颜色”。
- 所有数值必须带单位和来源；截图估算必须标记 approximate / 约。
- 避免孤立使用模糊形容词，除非补充可观察特征。
- 统一使用 MUST / 必须、SHOULD / 应当、MAY / 可以、MUST NOT / 禁止。
- 英文在前，紧接着提供含义一致的简体中文。

## Token rules / Token 规则
1. Separate primitive values from semantic roles and component aliases.
2. Use stable semantic names such as `color.text.primary`, `color.surface.canvas`, `space.4`, `radius.control`, `motion.duration.normal`.
3. Do not duplicate values under multiple names unless aliases are documented.
4. Specify theme modes explicitly.
5. State fallback fonts and unknown licensing.
6. Use consistent units within a scale and explain exceptions.
7. Define status colors by meaning; never rely on color alone.

1. 区分基础值、语义角色和组件别名。
2. 使用稳定语义名称。
3. 除非明确记录别名，否则不要为同一数值创建多个重复 Token。
4. 明确声明主题模式。
5. 记录回退字体及未知授权。
6. 同一尺度使用一致单位，并解释例外。
7. 按含义定义状态颜色，不得只依赖颜色传递状态。

## Component and interaction writing / 组件与交互写作
For important components, document purpose, anatomy, variants, sizes, tokens, content rules and relevant states. For important interactions, add trigger, preconditions, result, feedback, dismissal, recovery, keyboard, responsive behavior and edge cases.

重要组件记录用途、结构、变体、尺寸、Token、内容规则和适用状态。重要交互还需记录触发、前置条件、结果、反馈、关闭、恢复、键盘、响应式行为和边界情况。

## Provenance / 来源标记
Use `[Observed / 已观察]`, `[Inferred / 已推断]`, `[Proposed / 建议]`. A reference pattern may inform a proposal, but remains Proposed for the target project until adopted.

使用上述来源标记。参考案例可以为建议提供依据，但在目标项目正式采纳之前，仍属于 Proposed。

## Tables and code / 表格与代码
Keep tables implementation-oriented. Include units for measurements. Code examples must be plausible and marked as illustrative when not verified against the target stack. Never include secrets or private credentials.

表格应服务于工程实施；测量值必须包含单位。未在目标技术栈验证的代码示例应标记为演示。不得包含密钥或私有凭据。
