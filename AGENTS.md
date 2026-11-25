# UI Design Studio 项目指令

## 开工前

- 先读 [现行产品需求](docs/PRD.md) 和 [需求与验收清单](docs/需求与验收清单.md)，再检查相关实现。历史需求和 `prototype/` 下的原型用于追溯决策，当前应用入口为 `app/index.html`。
- 使用中文沟通，新增文档、界面文字、注释和文档字符串使用中文。代码标识符沿用英文。复用现有模块，仅修改任务所需的文件。
- 本项目维护独立的 UI Design Studio 上游。提交或推送前，确认仓库根目录和目标远端指向 UI Design Studio。项目位于 ToolOrbit 的公共插件目录时，可在本项目目录开发，发布时使用独立的 UI Design Studio Git 检出。

## 技能与素材库

- 生成或更新 `DESIGN.md` 时，读取 [design-system-generator](skills/design-system-generator/SKILL.md) 并按其流程执行。
- `design-resource-intake`（设计素材入库）是已定名的首期入库 Skill，计划入口为 `skills/design-resource-intake/SKILL.md`。实施该 Skill 或处理入库需求时，先读 [资源入库规范](docs/design/resource-admission.md) 和 [资源 Schema](design-system/v2/resource.schema.json)。入库前向维护者展示来源、授权状态、预览方式和拟写入内容，确认后同步更新 `design-system/v2/registry.json` 与 `design-system/v2/catalog.json`。
- 保持 20 个维度 ID 和已引用的资源版本稳定。同 ID 同版本的相同内容视为重复，存在差异时报告冲突。按 [现行产品需求](docs/PRD.md) 记录候选状态与审核证据。

## 修改与验证

- 范围和验收条件变更时更新 PRD。实现状态与实际验证结果写入清单。启动方式和目录约定变更时更新 [README](README.md)。
- 阶段性报告与旧方案收进 [历史资料目录](docs/archive/README.md)。归档前检查 README、技能和测试的引用。需要追溯旧版现行文档时使用固定 Git 提交。
- 从本项目根目录执行。设计系统或资源变更运行 `npm test`。应用和预览行为变更运行相关 Playwright 用例，命令与 Windows 备用端口见 README。
