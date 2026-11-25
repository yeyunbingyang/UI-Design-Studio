---
name: design-system-generator
description: Generate high-quality bilingual DESIGN.md specifications from user-provided screenshots, websites, source code, HTML/CSS, existing design documents, or written requirements. Use when analyzing a product's visual language, defining reusable design tokens and components, planning interaction behavior, or preparing implementation-ready design guidance for Codex.
---

# Design System Generator

Generate a complete, implementation-ready, bilingual (English + Simplified Chinese) `DESIGN.md`. Follow the repository's Design Specification v1.0 at `docs/design/design-md-spec-v1.md` and the supporting references in this skill directory.

## Core contract

- This is an AI-first analysis and documentation skill. The primary work is performed by the coding agent through repository/file inspection and visual reasoning. Do not introduce a crawler, browser automation service, database, or external AI API unless the user explicitly requests one.
- Accept all available input types: screenshots, website URLs, local source repositories, HTML/CSS, component code, existing DESIGN.md/STYLE.md documents, and written requirements.
- The user may provide screenshots directly. Analyze the visible evidence; do not require automated screenshot capture.
- Use a **hybrid interaction method**: document interaction behavior that is explicitly observable or present in source, then separately propose missing or improved behavior based on the product's purpose and mature design-system patterns.
- Keep the UI-Design-Studio model intact: 6 knowledge layers, 20 stable dimensions, and the existing 13-section STYLE.md remain compatible. DESIGN.md v1.0 is a new 16-section implementation-facing document format, not a replacement for the legacy STYLE.md.
- Bilingual means every major section, rule, table heading where practical, and implementation instruction has English and Simplified Chinese. Keep code identifiers, CSS properties, token names, ARIA attributes, and standard technical terms unchanged.
- Never invent measured values, source behavior, library usage, responsive breakpoints, or accessibility compliance. Label each statement as **Observed / 已观察**, **Inferred / 已推断**, or **Proposed / 建议** where provenance matters.

## Workflow

### 1. Identify the target and available evidence

Determine the product type, target platforms, intended users, primary tasks, and supplied inputs. Inspect only user-authorized project files. For a URL, use available page/source information; if the page cannot be inspected, state the limitation and analyze only the provided evidence. Do not claim to have crawled or tested a live website unless that actually occurred.

Create an evidence inventory:
- screenshots and the page/state each represents;
- source files and relevant components/styles;
- existing design documents and tokens;
- user-stated requirements and constraints;
- unavailable or unverified information.

### 2. Analyze visual design (reverse engineering)

Follow `references/visual-analysis-guide.md`. Extract and normalize:
- visual identity and design intent;
- color roles and theme modes;
- typography families, scale, weights, line heights and fallbacks;
- spacing, sizing, radius, borders and surfaces;
- backgrounds, effects, imagery and iconography;
- page grid, containers, layout, navigation and density;
- component anatomy, variants and visible states.

Prefer exact source values when available. For screenshots, describe estimates as estimates and do not pretend pixel measurements are source tokens. Consolidate repeated patterns into semantic tokens rather than listing isolated CSS values.

### 3. Plan interaction behavior (hybrid)

Follow `references/interaction-design-guide.md`. For every important interactive component or flow:
1. Record existing behavior supported by source or supplied evidence as **Observed**.
2. Record reasonable design intent inferred from patterns as **Inferred**.
3. Design missing behavior as **Proposed**, explaining trigger, result, feedback, dismissal/recovery, keyboard behavior, responsive adaptation and edge cases.
4. Do not present Proposed behavior as an existing product feature.
5. Consult `references/design-reference-library.md` for suitable patterns. Reference projects are pattern sources, not visual styles to copy wholesale.

Cover relevant states: default, hover, focus-visible, active, selected, disabled, loading, success, error, empty, and read-only. Do not force irrelevant states onto non-interactive elements.

### 4. Map to UI-Design-Studio's canonical model

Map findings to the existing 20 dimensions without creating a 21st dimension:
`style, theme, color, typography, spacing, radius, border, background, surface, shadow, effects, imagery, icons, layout, navigation, density, components, visualization, interaction, motion`.

Maintain dimension boundaries:
- Style is a preset/identity, not a blanket CSS override.
- Theme selects light/dark/system semantic modes; Color defines palette and semantic roles.
- Spacing defines scales; Density chooses sizing/density mappings.
- Background is the page canvas; Surface is a container/layer treatment.
- Effects are visual treatments; Motion describes time-based behavior.
- Components define anatomy and variants; Interaction defines behavior and states.
- Layout, Navigation and Density remain distinct but coordinated.

If content cannot be mapped, preserve it under an explicit Unmapped / 未映射 note. Do not silently discard it.

### 5. Write DESIGN.md

Use `templates/DESIGN.md` as the canonical structure. Include all 16 numbered sections in the specified order. If a section is not applicable, retain it and state `Not applicable / 不适用` with a short reason. If evidence is missing, state `Not observed / 未观察到` and identify what would be needed to verify it.

Every relevant component specification should include:
- purpose and usage / 目的与使用场景;
- anatomy / 结构;
- variants / 变体;
- tokens and measurable values / Token 与可测量参数;
- states / 状态;
- behavior contract / 行为契约;
- responsive rules / 响应式规则;
- accessibility / 无障碍;
- do / don't / 使用与禁止规则;
- provenance / 来源性质.

### 6. Quality review

Use `references/design-writing-standard.md` and `references/quality-gate.md`.
- Validate all 16 headings and bilingual coverage.
- Check that Observed, Inferred and Proposed are not conflated.
- Check token names are semantic, consistent and mapped to the 20 dimensions.
- Check that proposed interactions have complete behavior contracts.
- Check keyboard, focus-visible, reduced motion, responsive and error/empty states where relevant.
- Identify contradictions, missing evidence, and unresolved decisions.
- Do not claim visual QA, browser testing, accessibility audits, or source verification unless performed.

### 7. Deliverables

By default create:
1. `DESIGN.md` — canonical bilingual design specification.
2. `design-analysis-notes.md` — concise evidence inventory, assumptions, unresolved questions and decisions (only when analysis context is substantial).
3. Optional machine-readable token or component data only when requested or when the repository already has a compatible schema.

Do not overwrite existing project files without explicit instruction. If working in an existing repository, first inspect its conventions and place outputs in the user-designated location. Summarize what is verified, inferred, proposed, and still unknown.

## Output quality

The document must be specific enough that Codex can implement the visual system and interaction contracts without guessing. Prefer concrete semantic rules, token tables, component matrices, state tables and behavior contracts over adjectives such as “modern”, “beautiful”, “smooth” or “premium”.
