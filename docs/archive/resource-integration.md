# 第三方资源整合方案 — M4-A

采用适配器而不是直接混合第三方代码。首期优先内置资源和人工审核导入；网络同步、CLI、MCP 后续扩展。

| 候选 | 用途 | 接入方式（待核验） |
|---|---|---|
| [StyleKit](https://github.com/AnxForever/stylekit) | 风格及规范 | 元数据/许可允许的 Tokens 映射 |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | AI 设计建议 | 独立 Skill 适配，保留上游规则 |
| [shadcn/ui](https://ui.shadcn.com/) | 组件参考 | 按组件注册表与依赖适配 |
| [Magic UI](https://magicui.design/) / [Aceternity UI](https://ui.aceternity.com/) | 动效与视觉组件 | 审核单个组件后引入 |
| [Lucide](https://lucide.dev/) / [Iconify](https://iconify.design/) | 图标 | 图标标识映射、按集核验许可 |
| [Mobbin](https://mobbin.com/) / [Refero](https://refero.design/) | 商业设计参考 | 默认外链和用户笔记，不镜像付费内容 |
| [Uiverse](https://uiverse.io/) | CSS 组件 | 按具体资源核验许可并隔离预览 |

上述是调研候选，不表示已验证当前版本、API、许可或可用性。

## 导入流程

登记来源 → 核验许可证及再分发权限 → 获取元数据 → 映射到 12 维 schema → 校验与去重 → 依赖审查 → 安全隔离预览 → 用户确认 → 写入资源库。

适配器建议接口：discover、fetchMetadata、normalize、validate；网络下载与安装分开，安装默认禁用。记录 upstreamId、upstreamVersion、sourceUrl、license、attribution、checksum、dependencies、importedAt。相同来源与 ID 去重，更新先比较差异。

## 安全与维护

禁止执行未审核脚本；清理 HTML/SVG 中的危险元素和事件属性；限制远程资源、路径及网络权限；字体和图片支持本地授权副本。框架依赖版本隔离，无法适配的组件标记为参考而非可用组件。更新可回滚，用户覆盖不被上游刷新覆盖。

## Agent 集成

统一数据层供 UI、CLI、MCP、Skills 读取。建议接口 list_dimensions、search_resources、get_resource、validate_preset、export_design；后续提供明确授权的写入接口。SKILL.md 描述何时查询资源、如何组合、如何验证，不包含密钥。CLI/MCP 使用同一 schema 和解析器。

验收：手工导入一份合法 JSON 资源、重复导入提示、缺失许可证进入待审核、恶意脚本不执行、升级不覆盖用户副本、导出保留归属。
