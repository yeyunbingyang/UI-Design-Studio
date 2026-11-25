# DESIGN Skill v1.0 — Build Record & Implementation Plan

> Status: Initial documentation and Skill package committed on feature branch.  
> 本文记录 DESIGN Skill v1.0 的交付范围、兼容关系与后续验证计划。

## Confirmed decisions / 已确认决策

| Item | Decision |
|---|---|
| Structure | 16 mandatory sections |
| Language | English + Simplified Chinese |
| Interaction | Hybrid: observed behavior + AI-proposed behavior |
| Deliverables | Complete Skill + writing specification + template + examples |
| Execution | Codex performs analysis; user may supply screenshots, URLs, source and existing docs |
| Architecture | No mandatory crawler, database or external AI API |

## Package contents / 交付内容

- `skills/design-system-generator/SKILL.md`: Skill entry point.
- `skills/design-system-generator/references/`: writing, visual analysis, interaction, reference and quality guidance.
- `skills/design-system-generator/templates/DESIGN.md`: canonical bilingual 16-section template.
- `skills/design-system-generator/examples/`: dashboard, landing page and resource-management examples.
- `docs/design/design-md-spec-v1.md`: formal specification.
- This file: compatibility and build record.

## Compatibility with existing UI-Design-Studio / 与现有体系兼容

- Retain 6 knowledge layers and 20 stable dimension IDs.
- Retain the existing 13-section `STYLE.md` and `style-generator.mjs`.
- DESIGN.md v1.0 is an additional project-level implementation spec; it does not replace STYLE.md.
- Future dual export should use the same canonical design data. Avoid maintaining conflicting tokens in two independent documents.
- Existing 20-dimension resource IDs and preset IDs must not be renamed by this Skill.

## Skill invocation examples / Skill 调用示例

```text
Use $design-system-generator to analyze the supplied screenshots and source files, then create a bilingual DESIGN.md following the 16-section v1.0 specification.
```

```text
Use $design-system-generator to review the current project. Separate observed visual facts from inferred design intent and proposed interaction behavior. Do not modify application code.
```

```text
Use $design-system-generator to inspect the existing DESIGN.md and update only the interaction contracts and responsive rules. Preserve all existing token names and section order.
```

## Acceptance / 验收

- [ ] Skill frontmatter contains a clear name and trigger description.
- [ ] Skill links to its supporting references using relative paths.
- [ ] The 16-section template matches the formal specification.
- [ ] Three examples cover dashboard, landing page and resource-management contexts.
- [ ] Bilingual equivalence and provenance rules are explicit.
- [ ] Hybrid interaction planning is explicit.
- [ ] Existing STYLE.md and 20-dimension data are not overwritten.
- [ ] A Codex invocation test is performed in the target local environment.
- [ ] Generated output passes the quality gate.

## Not yet verified / 尚未验证

This documentation package does not claim that Codex has executed the Skill, that a generated project DESIGN.md has passed evaluation, or that any application UI has been changed. Runtime invocation and evaluation should be performed in the user's Codex environment.
