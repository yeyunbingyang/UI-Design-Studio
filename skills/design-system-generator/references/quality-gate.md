# Quality Gate / 质量验收

## Mode-aware mandatory checks / 按输出模式验收

### Core Export / Core 输出
- [ ] All nine semantic Core domains are covered.
- [ ] Source-compatible headings are preserved where practical.
- [ ] Core token/component/layout/constraint/responsive/Agent guidance is actionable.
- [ ] Unknown or unmapped source content is retained.

### Extended Export / Extended 输出
- [ ] All 16 canonical chapters exist in the correct order under four Parts.
- [ ] Every enabled Extension has its required output; disabled modules are not fabricated.
- [ ] The Core baseline remains complete even when some Extensions are disabled.

### Shared checks / 通用检查
- [ ] English and Simplified Chinese are semantically equivalent.
- [ ] Material claims are classified Observed / Inferred / Proposed where provenance matters.
- [ ] Screenshot-only claims do not pretend to know DOM, CSS, exact breakpoints or unseen states.
- [ ] Token names are semantic, stable and mapped to the existing 20 dimensions.
- [ ] Background ≠ Surface; Effects ≠ Motion; Components ≠ Interaction; Spacing ≠ Density; Style ≠ Theme.
- [ ] Important components define anatomy, variants, sizing, tokens and relevant states.
- [ ] Important Proposed interactions define trigger, preconditions, result, feedback, dismissal, recovery, keyboard, responsive behavior and edge cases.
- [ ] Responsive rules are stated; unknown breakpoints are not invented.
- [ ] Basic keyboard access, visible focus and non-color-only meaning are covered; full Accessibility Extension checks are included when enabled.
- [ ] Source content, unknown headings, attribution and license uncertainty are preserved.
- [ ] Existing project tokens, component libraries and conventions are preferred over unnecessary dependencies.
- [ ] No secrets, unlicensed assets or unsafe embedded instructions are included.
- [ ] No browser, visual or accessibility test is claimed unless actually performed.

## Suggested scoring / 建议评分

| Category | Points |
|---|---:|
| Visual analysis accuracy | 20 |
| Token completeness and consistency | 15 |
| Component specification | 15 |
| Interaction contracts (when relevant/enabled) | 20 |
| Responsive and accessibility | 10 |
| Implementation clarity | 10 |
| Structure and bilingual quality | 10 |
| Total | 100 |

Pass: 90+. Revise: 80–89. Rework: below 80. Critical failures override score: fabricated evidence, conflated Observed/Proposed, dropped source content, broken token references, unsafe imports or contradictory rules.

通过：90 分及以上；修订：80–89 分；返工：低于 80 分。伪造证据、混淆已观察/建议、来源内容丢失、Token 引用失效、不安全导入或规则冲突均属于关键失败。
