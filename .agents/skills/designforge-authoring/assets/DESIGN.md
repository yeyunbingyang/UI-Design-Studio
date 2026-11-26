# 纸页 · 设计规范

暖白背景配深绿主操作，标题用衬线体，正文和控件用无衬线体。界面用浅色表面和细边框区分层次，适用于文档与知识库。此文件为原创演示规范，与同目录的 [HTML 样张](preview.html) 对应。

## 基础词元

| 词元 | 值 | 用途 |
| --- | --- | --- |
| `{colors.canvas}` | `#f6f3eb` | 页面背景 |
| `{colors.surface}` | `#fffcf6` | 卡片与次按钮背景 |
| `{colors.ink}` | `#222720` | 标题和正文 |
| `{colors.muted}` | `#4e5b50` | 辅助说明 |
| `{colors.primary}` | `#244c3c` | 主按钮和焦点轮廓 |
| `{colors.pressed}` | `#17352a` | 主按钮悬停和按下 |
| `{colors.border}` | `#cbc8ba` | 表格分隔线和卡片边框 |
| `{colors.on-primary}` | `#ffffff` | 主按钮文字 |
| `{spacing.section}` | `48px` | 桌面章节间距 |
| `{rounded.card}` | `12px` | 试样卡片圆角 |

| 样式 | `font-family` | `font-size` | `font-weight` | `line-height` | `letter-spacing` |
| --- | --- | --- | --- | --- | --- |
| 首屏标题 | `Georgia, "Songti SC", SimSun, serif` | `56px` | `700` | `1.15` | `0` |
| 正文 | `system-ui, "Microsoft YaHei", sans-serif` | `16px` | `400` | `1.65` | `0` |
| 按钮 | `system-ui, "Microsoft YaHei", sans-serif` | `16px` | `600` | `1.65` | `0` |

## 组件和布局

- 主按钮最小高度 `44px`。使用 `{colors.primary}` 和 `{colors.on-primary}`，悬停及按下改用 `{colors.pressed}`。键盘焦点 `:focus-visible` 使用 `2px` 实线轮廓，`outline-offset: 3px`。禁用时降低文字和背景对比，并使用原生 `disabled`。
- 卡片使用 `{colors.surface}`、`1px` 边框及 `{rounded.card}`，内容内边距 `20px`。组件状态试样在宽屏双列展示。
- 在 `@media (max-width: 767px)` 下，试样改为单列，首屏标题缩至 `36px`，章节间距减至 `32px`。本样张切换状态时直接更新，无过渡动画。

## 组合场景

文档列表展示标题、状态和操作的阅读顺序。使用「标记为已读」切换当前示例的状态，反馈由 `role="status"` 朗读。文档标题和内容均为本地演示数据。
