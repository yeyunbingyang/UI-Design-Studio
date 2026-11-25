# Extension Registry / 扩展规范注册表

Extensions are optional, independently loadable guidance modules. Core is always loaded. Enable a module when explicitly requested or required by product scope/evidence. Record enabled IDs in DESIGN.md frontmatter.

Extensions 是可选、可独立加载的专项规范。Core 始终加载。用户明确要求或产品范围/证据确有需要时启用模块，并在 DESIGN.md Frontmatter 记录启用 ID。

| ID | Module | Enable when | Output |
|---|---|---|---|
| visual-assets-effects | Visual Assets & Effects / 视觉素材与特效 | Product relies on distinctive imagery, icons, gradients, textures, visual effects or media | Asset, icon, imagery and effect rules |
| navigation-ia | Navigation & Information Architecture / 导航与信息架构 | Multiple pages, nested navigation, routes, tabs, complex content hierarchy | IA, route, navigation and active-state rules |
| interaction-states | Interaction States / 交互状态 | Interactive controls or stateful components are in scope | Component state matrix |
| interaction-patterns | Interaction Patterns / 交互模式 | Forms, overlays, tables, search, selection, drag/drop, bulk workflows | Behavior contracts and user flows |
| motion-feedback | Motion & Feedback / 动效与反馈 | Transitions, animations, async feedback or notifications are in scope | Motion tokens and feedback rules |
| accessibility | Accessibility / 无障碍设计 | Production UI, keyboard/touch users, public-facing or complex interactions | Semantics, keyboard, focus, contrast, assistive technology |
| implementation-validation | Implementation & Validation / 工程实施与验证 | Codex implementation, design handoff, production release or visual QA | Implementation mapping, QA and validation plan |

## Shared module contract / 扩展模块统一契约

Each extension file must define purpose/scope, activation criteria, required evidence, analysis checklist, output contract, quality checks and boundaries to avoid duplicating other dimensions.

每个扩展文件必须定义用途/范围、启用条件、所需证据、分析清单、输出契约、质量检查，以及避免与其他维度重复的边界。

## Enablement metadata / 启用元数据

```yaml
specVersion: "1.0.0"
outputMode: "extended" # core | extended
language: "en-zh"
enabledExtensions:
  - navigation-ia
  - interaction-states
  - interaction-patterns
  - motion-feedback
  - accessibility
  - implementation-validation
```

This is an example, not a mandatory set for every project. / 此为示例，不代表每个项目都必须启用这些扩展。
