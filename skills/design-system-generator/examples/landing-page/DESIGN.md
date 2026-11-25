---
specVersion: "1.0.0"
documentType: "example"
project: "Product Landing Page"
status: "illustrative-example"
language: "en-zh"
---

# DESIGN.md — Product Landing Page / 产品介绍页

> Illustrative example. Values are recommendations, not measured source facts.  
> 格式示例。数值均为建议值，不代表真实来源测量结果。

## 1. Design Overview — 设计概述
A responsive marketing page that explains a product, builds trust and guides visitors toward one primary conversion action.  
响应式营销页面，用于解释产品价值、建立信任并引导访客完成一个主要转化操作。

**[Proposed / 建议]** Organize content as a clear narrative: value proposition → product proof → benefits → trust → conversion.  
建议按清晰叙事组织内容：价值主张 → 产品证明 → 核心收益 → 信任信息 → 转化行动。

## 2. Visual Identity — 视觉识别
**[Proposed / 建议]** Establish one recognizable visual motif and a restrained accent palette. Large display typography may create hierarchy, but body copy must remain comfortable to read.  
建立一个具有识别度的视觉母题和克制的强调色板。展示型大标题可建立层级，但正文必须保持舒适可读。

## 3. Color System — 色彩体系
Define canvas, elevated surface, primary text, muted text, primary action, border and semantic feedback roles. If both light and dark themes are required, specify each mode explicitly.  
定义画布、抬升表面、主文字、弱化文字、主要操作、边框和语义反馈角色。若需要明暗主题，必须分别明确每种模式。

## 4. Typography — 字体体系
Use a display scale for hero and section headlines, a restrained body scale for explanatory content, and a compact caption scale for metadata. Specify font fallbacks and multilingual behavior.  
Hero 和章节标题使用展示字号体系，说明内容使用克制的正文字号，元信息使用紧凑注释字号。明确字体回退和多语言行为。

## 5. Spacing & Sizing — 间距与尺寸
Use generous section spacing and a readable content width. Define CTA height, text measure, card padding and mobile spacing separately.  
章节之间使用充足留白并限制正文宽度。分别定义 CTA 高度、文字行宽、卡片内边距和移动端间距。

## 6. Shape & Surface — 形状与表面
Cards, media frames and buttons may use different radius tokens. Avoid applying the same radius indiscriminately to every element.  
卡片、媒体容器和按钮可以使用不同圆角 Token，避免所有元素机械使用同一种圆角。

## 7. Background & Effects — 背景与特效
Use gradients, patterns or blur only when they support the brand story and do not reduce text contrast. Decorative effects must not obscure product imagery or CTA.  
渐变、图案或模糊仅在有助于品牌叙事且不降低文字对比度时使用。装饰效果不得遮挡产品图像或 CTA。

## 8. Iconography & Imagery — 图标与图像
Prioritize authentic product screenshots or original illustrations. Define aspect ratio, crop, focal point, responsive behavior and asset rights.  
优先使用真实产品截图或原创插画。定义宽高比、裁切、视觉焦点、响应式行为和素材权利。

## 9. Layout & Grid — 布局与网格
Use a centered content container, consistent section rhythm and a responsive card grid. Hero composition should clearly separate headline, supporting copy, CTA and product proof.  
使用居中内容容器、一致的章节节奏和响应式卡片网格。Hero 构图应清楚区分标题、辅助说明、CTA 和产品证明。

## 10. Navigation — 导航系统
Keep primary navigation concise. On mobile, provide an explicit menu trigger, clear close behavior and preserved access to the primary CTA.  
主导航保持简洁。移动端提供明确菜单入口和关闭方式，并保留主要 CTA 的访问。

## 11. Component System — 组件体系
Document Hero, CTA Button, Feature Card, Testimonial, Logo Strip, Pricing Card and Footer only when they exist or are required by the page scope. Define content limits and variants for each.  
仅在页面实际存在或范围要求时，定义 Hero、CTA 按钮、功能卡片、评价、Logo 区、价格卡片和页脚，并明确内容限制与变体。

## 12. Interaction States — 交互状态
**[Proposed / 建议]** Buttons expose hover, focus-visible, active, disabled and loading states. Navigation links expose current-page state. Form controls expose invalid and success feedback.  
建议按钮具备 hover、focus-visible、active、disabled 和 loading 状态；导航链接具备当前页状态；表单控件提供无效和成功反馈。

## 13. Interaction Patterns — 交互模式
**Primary CTA / 主要转化 — [Proposed / 建议]**
- Trigger: activation by pointer, keyboard or touch.
- Result: navigate to the intended signup, purchase or contact flow.
- Feedback: visible pressed state; loading state if an asynchronous action begins.
- Recovery: preserve form data when navigation or submission fails where feasible.
- Keyboard: semantic button/link with visible focus.
- Edge cases: unavailable destination, duplicate submission, validation failure.

主要 CTA 应支持鼠标、键盘和触控。点击后进入预期注册、购买或联系流程；异步操作开始时提供加载状态；可行时在失败后保留表单内容；处理目标不可用、重复提交和校验失败。

## 14. Motion & Feedback — 动效与反馈
Use motion to clarify section transitions and feedback, not to delay access to content. Provide a reduced-motion alternative and avoid autoplay motion that distracts from the primary action.  
动效用于解释章节变化和操作反馈，不得延迟内容访问。提供减少动态效果方案，避免干扰主要操作的自动播放动画。

## 15. Responsive & Accessibility — 响应式与无障碍
Define mobile navigation, stacking order, image scaling, CTA width, text measure and touch targets. Ensure heading order, link purpose, keyboard access, contrast and reduced-motion behavior.  
定义移动端导航、堆叠顺序、图片缩放、CTA 宽度、文字行宽和触控目标。确保标题层级、链接目的、键盘访问、对比度和减少动态效果行为。

## 16. Implementation Guidelines — 工程实施指南
- Keep a single primary conversion action per major section.
- Use semantic HTML and meaningful link text.
- Optimize image loading and reserve media aspect ratios to prevent layout shift.
- Do not embed unlicensed logos, fonts or customer testimonials.
- Verify desktop, tablet and mobile layouts before release.

每个主要章节保持一个主要转化动作；使用语义化 HTML 和有意义的链接文本；优化图片加载并预留媒体宽高比以避免布局偏移；不得嵌入未授权 Logo、字体或客户评价；发布前验证桌面、平板和移动端布局。

## Appendix A. Canonical Dimension Mapping — 20 维映射
Relevant dimensions: style, theme, color, typography, spacing, radius, border, background, surface, shadow, effects, imagery, icons, layout, navigation, density, components, interaction and motion. Visualization applies only if charts or metrics are present.

## Appendix B. References & Attribution — 参考与归属
Illustrative original example authored for UI-Design-Studio. No third-party brand assets included.  
本示例为 UI-Design-Studio 原创格式演示，不包含第三方品牌素材。
