# Design Writing Standard / DESIGN 文档写作标准

## Voice and precision / 语言与精度

- Write rules as implementation instructions, not marketing copy.
- Prefer “Use semantic color tokens for text, surface and status roles” over “Use beautiful colors”.
- Every numeric value must carry a unit and provenance. If estimated from an image, prefix it with “approx.” / “约”.
- Avoid vague words (“modern”, “clean”, “premium”, “smooth”) unless followed by observable characteristics.
- Use normative terms consistently: MUST / 必须, SHOULD / 应当, MAY / 可以, MUST NOT / 禁止.
- Keep English first, then Simplified Chinese. The two languages must express equivalent constraints.

- 使用工程实施指令，而非营销文案。
- 优先写“文字、表面和状态角色使用语义化颜色 Token”，不要只写“使用漂亮的颜色”。
- 所有数值必须带单位和来源。若由图片估算，必须标注“approx.” / “约”。
- 避免孤立使用“现代、简洁、高级、流畅”等模糊形容词，除非同时说明可观察特征。
- 统一使用规范性用词：MUST / 必须、SHOULD / 应当、MAY / 可以、MUST NOT / 禁止。
- 英文在前，简体中文紧随其后；两种语言必须表达等价约束。

## Token rules / Token 规则

1. Separate primitive values from semantic roles and component aliases.
2. Use stable semantic names, e.g. `color.text.primary`, `color.surface.canvas`, `space.4`, `radius.control`, `motion.duration.normal`.
3. Do not duplicate a value under multiple names unless aliases are documented.
4. Specify theme modes explicitly; do not infer a light theme from dark values.
5. State fallback fonts and unavailable font licensing.
6. Use consistent units within a scale and explain exceptions.
7. Define status colors by meaning and do not rely on color alone to communicate status.

1. 区分基础值、语义角色和组件别名。
2. 使用稳定的语义名称。
3. 除非明确记录别名，否则不要为同一数值创建多个重复 Token。
4. 明确声明主题模式；不得从深色值自行推断浅色主题。
5. 记录回退字体及字体授权未知情况。
6. 同一尺度使用一致单位，并解释例外。
7. 按含义定义状态颜色，不得只依赖颜色传递状态。

## Component specification / 组件规范

For each important component document: purpose, anatomy, variants, size, tokens, content constraints, states, behavior, responsive adaptation, accessibility, examples and anti-patterns.

每个重要组件应记录：用途、结构、变体、尺寸、Token、内容约束、状态、行为、响应式适配、无障碍、示例和反模式。

## Provenance / 来源标记

Use these inline labels:
- `[Observed / 已观察]`
- `[Inferred / 已推断]`
- `[Proposed / 建议]`

Do not use “Observed” for a design recommendation. A recommendation may cite a reference system, but remains Proposed for the target project until adopted.

使用上述行内标记。设计建议不能标记为“已观察”。建议可以引用成熟设计系统，但在目标项目正式采纳之前，仍属于“建议”。

## Tables and code / 表格与代码

- Keep tables compact and implementation-oriented.
- Include a unit column for measurements when mixed units are possible.
- Code examples must be syntactically plausible and clearly marked as examples if not verified against the target stack.
- Never place secrets, private URLs, or credentials in DESIGN.md.

- 表格应简洁并服务于实施。
- 可能混用单位时，测量值应单独列出单位。
- 代码示例必须在语法上合理；若未在目标技术栈中验证，应明确标记为示例。
- DESIGN.md 不得包含密钥、私有 URL 或凭据。
