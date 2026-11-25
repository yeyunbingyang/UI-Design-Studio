# DESIGN Skill v1.0 — Build Record & Delivery Plan

> Architecture: Core + Extensions / 架构：基础规范 + 扩展规范  
> Status: Specification and Skill package prepared on feature branch / 状态：已在功能分支准备规范与 Skill 包

## Confirmed decisions / 已确认决策

| Item | Decision |
|---|---|
| Architecture | Core + Extensions |
| Core | Nine semantic content domains; compatible with variable upstream Markdown |
| Full document | Four Parts, 16 canonical chapters |
| Extensions | Seven independently loadable modules |
| Output modes | Core Export and Extended Export |
| Language | English + Simplified Chinese |
| Analysis | AI-first, user-supplied screenshots/source/URLs |
| Interaction | Hybrid: Observed + Inferred + Proposed |
| Canonical model | Existing 6 layers and 20 dimensions |
| Legacy docs | Preserve existing 13-section STYLE.md |

## Delivered files / 已交付文件

- `docs/design/design-md-spec-v1.md`: formal Core + Extensions specification.
- `skills/design-system-generator/SKILL.md`: Codex Skill entry point.
- `skills/design-system-generator/standards/design-md-spec-v1.md`: self-contained Skill copy of the formal specification.
- `skills/design-system-generator/standards/core/core-standard.md`: nine semantic Core domains.
- `skills/design-system-generator/standards/mappings/canonical-20-dimensions.md`: stable 20-dimension mapping.
- `skills/design-system-generator/standards/extensions/`: seven independent extension modules.
- `skills/design-system-generator/standards/mappings/awesome-design-md-mapping.md`: upstream compatibility mapping.
- `skills/design-system-generator/standards/extensions/extension-registry.md`: extension registry and activation rules.
- `skills/design-system-generator/templates/core-9/DESIGN.md`: Core Export template.
- `skills/design-system-generator/templates/extended-16/DESIGN.md`: Extended Export template.
- `skills/design-system-generator/templates/previews/preview.html` and `preview-dark.html`: standalone light/dark preview templates.
- Standard generated package includes `DESIGN.md`, both preview HTML files and `README.md`; screenshots are optional and only included when captured.
- `skills/design-system-generator/templates/DESIGN.md`: backward-compatible template pointer.
- `skills/design-system-generator/examples/`: dashboard, landing page and resource-management examples.
- `docs/PRD.md`: updated product requirements and acceptance criteria.

## Compatibility decisions / 兼容决策

1. Awesome DESIGN.md is a curated Markdown collection, not a rigid fixed-heading schema.
2. Core is nine semantic domains; source headings vary and must be parsed as authored.
3. Extended is the canonical 16-chapter/four-Part view.
4. Both exports render from one normalized model.
5. Preserve current 6-layer architecture, 20 stable dimension IDs, and 13-section STYLE.md.
6. Keep imported source, normalized findings and target-project proposals separate.
7. Record upstream repository license separately from third-party asset rights.

## Acceptance / 验收

- [ ] Skill frontmatter and relative references are valid.
- [ ] Core and Extension standards are bilingual and individually loadable.
- [ ] Core template covers all nine domains.
- [ ] Extended template contains the exact 16 chapters in four Parts.
- [ ] Import mapping preserves arbitrary source headings and unknown content.
- [ ] Provenance labels prevent Observed/Inferred/Proposed conflation.
- [ ] Both export modes map to the same 20-dimension model.
- [ ] Existing STYLE.md generator and presets are unchanged.
- [ ] Examples identify recommendations as Proposed and avoid invented source claims.
- [ ] Codex runtime invocation and generated-output evaluation are performed in the target environment.

## Not yet verified / 尚未验证

The repository documentation and Skill package are authored, but Codex has not been executed against the user's local projects in this task. No automated parser, import UI, token renderer or browser visual QA engine is claimed as implemented. Tests requiring the local Windows/Codex environment remain pending.
