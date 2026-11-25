# Design Domain Model — 12 Domains

> Status: proposed UI taxonomy for UI Design Studio V1.2. This document groups the existing 20 canonical dimensions into 12 user-facing domains. It does not delete, rename, or merge the underlying configuration dimensions.

## Decision

Adopt **12 Design Domains + 20 Canonical Dimensions + N Resources**.

- **Domains** are the first-level navigation and discovery categories.
- **Canonical dimensions** remain the independent configuration, persistence, validation, and composition units.
- **Resources** remain attached to canonical dimension IDs.
- The existing six architecture layers and thirteen-section style-document format remain unchanged.

## Domain mapping

| Domain ID | Domain | Canonical dimensions |
|---|---|---|
| `style-identity` | Style Identity / 风格定位 | `style` |
| `color-system` | Color System / 色彩系统 | `theme`, `color` |
| `typography` | Typography / 字体排版 | `typography` |
| `spacing-density` | Spacing & Density / 间距与密度 | `spacing`, `density` |
| `shape-border` | Shape & Border / 形状与描边 | `radius`, `border` |
| `surface-effects` | Surface & Effects / 表面与视觉效果 | `background`, `surface`, `shadow`, `effects` |
| `visual-assets` | Visual Assets / 视觉资产 | `imagery`, `icons` |
| `layout-navigation` | Layout & Navigation / 布局与导航 | `layout`, `navigation` |
| `components` | Components / 组件系统 | `components` |
| `data-visualization` | Data Visualization / 数据可视化 | `visualization` |
| `interaction` | Interaction / 交互状态 | `interaction` |
| `motion` | Motion / 动效系统 | `motion` |

## Why these groups

- **Theme + Color** share the color-system workflow, but theme mode and palette mapping remain separate settings.
- **Spacing + Density** share spatial design intent, but spacing tokens and density presets are not interchangeable.
- **Radius + Border** jointly define geometry and edges, while retaining separate token namespaces.
- **Background + Surface + Shadow + Effects** jointly define visual depth and material treatment. They remain four separate subsystems because canvas, material, elevation and effects have different semantics.
- **Imagery + Icons** are grouped as visual assets, but retain independent resource types and rendering rules.
- **Layout + Navigation** are grouped because both shape page composition; navigation behavior remains independently configurable.

## Compatibility contract

1. Do not rename or delete any of the 20 existing dimension IDs.
2. Do not rewrite existing `catalog.json`, `registry.json`, `preset.json`, resource IDs, or saved drafts merely to introduce domains.
3. Domain metadata is additive and lives in `design-system/v2/domains.json`.
4. Composer state continues to use canonical dimension IDs, not domain IDs.
5. A domain click expands or filters its child dimensions; it must not silently apply defaults or mutate the current draft.
6. Selecting one child dimension continues to apply only that dimension.
7. Bulk preset application retains existing lock, override, history, and compatibility-check behavior.
8. Unknown future dimensions must be reported as ungrouped until explicitly assigned; do not silently drop them.

## UI behavior

- Resource Library: show 12 domains as first-level categories; show dimensions as second-level filters; show resources as third-level entries.
- Design Composer: show 12 collapsible groups. Each child dimension retains its own selection, lock, reset, diagnostics and history semantics.
- Search: index domain name, dimension name, resource name, tags and aliases. Search results must identify the owning domain and canonical dimension.
- Counts: display resource counts at domain level as the sum of child-dimension counts; do not duplicate resources.
- Export: continue emitting canonical dimension IDs. Domain metadata may be included as descriptive metadata, never as a replacement for dimension selections.

## Validation requirements

- Each canonical dimension must appear exactly once in the domain map.
- Every mapped dimension ID must exist in `catalog.json`.
- No domain may contain duplicate dimension IDs.
- Every catalog dimension must be mapped, or be explicitly listed as ungrouped with a reason.
- Existing presets and saved drafts must load without migration.
- Changing only the active domain or expanded group must not change the resolved design.
- Changing a child dimension must preserve the existing single-dimension update behavior.

## Migration strategy

This is a **non-breaking additive taxonomy change**, not a schema-breaking dimension merge.

1. Add and validate `domains.json`.
2. Update library and composer navigation to read domain metadata while retaining canonical dimension IDs in state.
3. Add tests for complete one-to-one dimension coverage and unchanged preset serialization.
4. Only after those tests pass, remove duplicated hard-coded category lists from UI code.
5. Do not change the catalog schema version for this grouping-only change.

## Explicit non-goals

- Do not combine token namespaces.
- Do not merge resource registries.
- Do not force a style preset to overwrite all child dimensions.
- Do not imply that all resources are production-ready; retain each resource's status and license metadata.
- Do not change the six architecture layers or thirteen-section style documentation format.
