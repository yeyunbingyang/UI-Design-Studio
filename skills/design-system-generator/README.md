# Design System Generator Skill / DESIGN Skill

## Repository location / 仓库位置

`skills/design-system-generator/`

## Install for Codex / 安装到 Codex

Copy the complete `design-system-generator` directory into your Codex skills directory, preserving all subdirectories:

```powershell
$source = "D:\Projects\UI-Design-Studio\skills\design-system-generator"
$target = Join-Path $HOME ".codex\skills\design-system-generator"
New-Item -ItemType Directory -Force -Path (Split-Path $target) | Out-Null
Copy-Item -Recurse -Force $source $target
```

Restart or refresh Codex so it discovers the Skill. The Skill must remain a complete directory; do not copy only `SKILL.md`, because its standards, references and templates are loaded from relative paths.

重启或刷新 Codex，使其重新发现 Skill。必须复制完整目录，不能只复制 `SKILL.md`，因为规范、参考资料和模板通过相对路径加载。

## Example prompts / 使用示例

```text
Use $design-system-generator to analyze these screenshots and create a bilingual Core DESIGN.md. Separate observed facts, inferences and proposed recommendations.
```

```text
Use $design-system-generator to inspect this React project and create an Extended DESIGN.md. Enable all seven extensions and preserve the existing design tokens and component conventions.
```

```text
Use $design-system-generator to analyze this upstream Awesome DESIGN.md. Preserve the source document, map its variable headings to the nine Core domains and applicable Extensions, and report unmapped content.
```

## Package contents / 包含内容

- `SKILL.md`: Skill entry and workflow.
- `standards/`: formal specification, Core, Extensions, and canonical mappings.
- `references/`: writing, visual analysis, interaction, reference library, design-gap analysis and quality gate.
- `templates/`: Core Export, Extended Export and standalone light/dark token previews and product application preview template.
- `examples/`: dashboard, landing page and resource-management examples.

## Standard output package / 标准输出交付包

Every completed analysis produces:
- `DESIGN.md` — bilingual design specification.
- `preview.html` — standalone light-mode interactive design-token/component preview.
- `preview-dark.html` — standalone dark-mode preview (or clearly labeled proposed dark adaptation).
- `README.md` — package index and usage notes.
- `design-gap-report.md` — conditional report of missing/partial/unknown/conflicting dimensions, evidence and user decisions.

Optional captured screenshots and detailed analysis notes are included only when available or useful. The HTML files must open locally without build tools or network dependencies.

每次完整分析都必须交付 DESIGN.md、浅色 preview.html、深色 preview-dark.html、产品级 application-preview.html 和 README.md；存在缺口、证据不足、冲突或待确认项时，同时交付 design-gap-report.md。截图与详细分析记录按实际情况选交。HTML 必须支持本地直接打开，不依赖构建工具或网络。

## Limitations / 当前限制

This Skill guides AI analysis and document generation. It does not itself provide a web crawler, screenshot capture service, automatic source importer, database, design editor or browser visual QA runner. Codex uses the evidence and tools available in its execution environment; unavailable evidence must be called out explicitly.

本 Skill 用于指导 AI 分析和文档生成。它本身不提供网站爬虫、截图采集服务、自动源码导入器、数据库、设计编辑器或浏览器视觉 QA 执行器。Codex 使用当前执行环境可用的证据和工具；无法获得的证据必须明确说明。


## Design gap review / 设计维度差距审查

After collecting a target UI, the Skill audits the full 20-dimension model, Core/Extended structure, applicable Extensions, product pages/states and the three previews. It reports missing, partial, unknown and conflicting evidence, then waits for explicit approval of individual GAP IDs. Users may also research independently and supplement screenshots, URLs, source files or requirements. Unapproved items remain pending and are not written into the approved DESIGN.md, tokens, presets or previews. See [design-gap-analysis.md](references/design-gap-analysis.md).
