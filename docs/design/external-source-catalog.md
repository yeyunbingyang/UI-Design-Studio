# 外部 UI / UX 设计来源目录

> 状态：已登记，待逐项核验与接入。登记来源不等于已导入资源，也不代表资源已获再分发授权。

## 来源清单

| 来源 | 类型 | 用途 | 接入注意事项 |
|---|---|---|---|
| [Aceternity UI](https://ui.aceternity.com/) | 组件与动效参考 | React、Tailwind CSS、动效组件灵感与实现参考 | 逐项核验代码、依赖与许可 |
| [Magic UI](https://github.com/magicuidesign/magicui) | 开源组件库 | 动效组件、页面构建参考；可按 GitHub 文件/仓库追溯 | 以当前仓库及具体文件许可证为准 |
| [Magic UI Pro](https://pro.magicui.design/) | 商业资源 | 高级组件与模板参考 | 遵守购买协议；不抓取、镜像或分发付费内容 |
| [VoltAgent / awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 社区索引 | 发现 DESIGN.md、设计规范及相关资源 | 索引许可证不自动覆盖被索引内容 |
| [GetDesign.md](https://getdesign.md/) | 设计规范发现入口 | 搜索和发现 DESIGN.md 与设计案例 | 追溯每个条目的原始来源和许可 |
| [UI UX Pro Max Skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Agent Skill | 将 UI/UX 设计知识与工作流用于 AI 辅助设计 | 检查 Skill 指令、依赖、许可证及生成资产来源 |

## 入库与使用规则

1. 本目录只登记来源，不自动复制、镜像或打包第三方内容。
2. 每项资源独立记录原始 URL、作者/维护者、版本或提交、获取日期、内容哈希（如有）、许可证及归属声明。
3. 未核验许可证的资源标记为 `review-required`，不得标记为可再分发。
4. 商业/付费资源仅在授权范围内使用，不绕过访问控制，不将付费内容纳入公共资源包。
5. 引入组件前检查技术栈、依赖、可访问性、响应式行为、安全性和维护活跃度。
6. 导入的示例代码默认不自动执行；需经审查后才能进入项目运行路径。
7. 优先保存可追溯的元数据和适配说明，避免无差别复制上游实现。

## 机器可读注册表

完整来源 ID、导入方式、格式、许可状态及备注见 [external-sources.json](../../design-system/v2/external-sources.json)，其结构由 [external-source.schema.json](../../design-system/v2/external-source.schema.json) 约束。
