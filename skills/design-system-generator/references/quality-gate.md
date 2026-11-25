# Quality Gate / 质量验收

## Mandatory checks / 必检项目

- [ ] All 16 required headings exist in the correct order.
- [ ] English and Simplified Chinese content are equivalent.
- [ ] Every major claim is marked Observed, Inferred or Proposed where provenance matters.
- [ ] No screenshot-only claim pretends to know DOM, CSS, exact breakpoints or unseen states.
- [ ] Token names are semantic, stable and mapped to the existing 20 dimensions.
- [ ] Theme, Color, Background, Surface, Effects, Motion, Components, Interaction, Spacing and Density boundaries are respected.
- [ ] Important components define anatomy, variants, sizes and relevant states.
- [ ] Important interaction flows define trigger, preconditions, result, feedback, dismissal, recovery, keyboard, responsive and edge cases.
- [ ] Responsive behavior is described for the target platform; unknown breakpoints are not invented.
- [ ] Keyboard access, focus-visible, semantics, contrast and reduced motion are addressed where relevant.
- [ ] Proposed behavior is not described as existing functionality.
- [ ] Existing project tokens, component libraries and conventions are preferred over unnecessary dependencies.
- [ ] Open questions and evidence gaps are explicit.
- [ ] No unlicensed third-party assets or credentials are embedded.
- [ ] No claim of browser, visual or accessibility testing unless actually performed.

- [ ] 16 个必需章节齐全且顺序正确。
- [ ] 英文与简体中文内容含义一致。
- [ ] 重要结论按需标记已观察、已推断或建议。
- [ ] 不得根据单张截图声称知道 DOM、CSS、精确断点或不可见状态。
- [ ] Token 命名语义化、稳定，并映射到现有 20 维。
- [ ] 遵守主题、颜色、背景、表面、特效、动效、组件、交互、间距和密度的维度边界。
- [ ] 重要组件定义结构、变体、尺寸和适用状态。
- [ ] 重要交互流程定义触发、前置条件、结果、反馈、关闭、恢复、键盘、响应式和边界情况。
- [ ] 描述目标平台的响应式行为；未知断点不得编造。
- [ ] 按需覆盖键盘访问、焦点可见性、语义、对比度和减少动态效果。
- [ ] 不得将建议描述成已有功能。
- [ ] 优先遵循项目已有 Token、组件库和约定，避免不必要的依赖。
- [ ] 明确列出待解决问题和证据缺口。
- [ ] 不嵌入未授权第三方素材或凭据。
- [ ] 未实际执行浏览器、视觉或无障碍测试，不得声称已完成测试。

## Suggested scoring / 建议评分

| Category | Points |
|---|---:|
| Visual analysis accuracy | 20 |
| Token completeness and consistency | 15 |
| Component specification | 15 |
| Interaction contracts | 20 |
| Responsive and accessibility | 10 |
| Implementation clarity | 10 |
| Structure and bilingual quality | 10 |
| Total | 100 |

Pass: 90+. Revise: 80–89. Rework: below 80. Any critical failure above overrides the score.

通过：90 分及以上；修订：80–89 分；返工：低于 80 分。任何关键失败均优先于总分。
