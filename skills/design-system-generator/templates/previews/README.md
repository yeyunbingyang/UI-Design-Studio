# Preview templates / 预览模板

These are standalone HTML starting points for the mandatory preview files in every generated design package.

- Copy `preview.html` to the output package root.
- Copy `preview-dark.html` beside it.
- Replace every `{{...}}` placeholder and the illustrative CSS variables with values from the generated DESIGN.md.
- Add all product-specific component examples that materially represent the analyzed system.
- Keep both files dependency-free and locally openable.
- Verify tabs, buttons, inputs, responsive behavior and token parity.
- Do not leave placeholder copy, sample values or generic chart content in the final package.

这是每份设计分析交付包必须包含的独立 HTML 预览起始模板。复制后必须用 DESIGN.md 中的实际 Token 和产品组件替换占位符，不得将模板原样作为最终交付。


## Bilingual preview contract / 双语预览契约

Every generated preview MUST display English and Simplified Chinese together. This is a bilingual side-by-side/stacked reading experience, not a language toggle and not two separate language files.

- Show English first, then the equivalent Simplified Chinese immediately below it.
- Apply this to the page title, section headings, explanatory copy, token names, component names, buttons, form labels/placeholders/options, tabs, tooltips, empty/error/success/loading messages, evidence notes, attribution and all JavaScript-rendered content.
- Mark Chinese spans with `lang="zh-Hans"` and keep the document's default language as English.
- Keep product names, brand names, token IDs, CSS properties, code, ARIA attribute names and API identifiers unchanged; translate their human-readable descriptions.
- User-provided product copy may be retained in its original language, but the preview's explanatory UI and design-system labels must remain bilingual.
- Use the same bilingual content and ordering in light and dark previews.
- Never leave English-only labels in generated examples or dynamically inserted tab/palette content.

每份预览必须同时展示英文和简体中文，不是语言切换按钮，也不是分别生成两种语言文件。英文在前，中文紧随其后；适用于页面标题、章节标题、说明、Token 名称、组件名称、按钮、表单标签/占位符/选项、标签页、提示、空/错误/成功/加载状态、证据说明、来源归属，以及 JavaScript 动态生成内容。中文使用 `lang="zh-Hans"`。产品名、品牌名、Token ID、CSS 属性、代码、ARIA 属性名和 API 标识保持原样，只翻译面向用户的说明文字。浅色和深色预览必须保持相同的双语内容和顺序。
