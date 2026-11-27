# Yeyunby DesignForge Agent 与研发约定

## 项目架构

本项目是一个统一平台 Monorepo。apps 只包含：
- apps/frontend：React + TypeScript + Vite。
- apps/backend：Python + FastAPI。

不得为 Style Explorer、Design Systems、Page Library、Component Library、Motion Library、Source Center、Research Center 或 AI Workspace 创建独立 App。它们属于统一前端和后端中的业务模块。

数据库使用 SQLite，SQLAlchemy 2.x 负责 ORM，Alembic 负责结构迁移。API 统一使用 /api/v1。

## 目录职责

- content：经过整理、可正式浏览和复用的设计资产。
- sources：外部来源、原始采集、研究证据和许可证信息。
- apps/frontend：页面、业务 Feature、共享组件、API Client 和样式。
- apps/backend：API、业务模块、服务层、Repository、数据库和集成。
- tools：通用采集、转换、迁移和校验脚本。
- docs：PRD、架构、数据模型、迁移和验收规范。
- .agents/skills：Agent Skill 的规范入口。

详见 docs/architecture/DIRECTORY-STRUCTURE.md。

## 前端约定

- 使用 TypeScript，开启 strict。
- pages 只负责路由组合；业务页面和状态放在 features。
- 跨业务复用组件放在 components。
- API 请求统一放在 services，不在组件中散落请求实现。
- 路由、导航、加载、空状态、错误状态和权限反馈保持一致。
- 支持键盘操作、可见焦点和 prefers-reduced-motion。
- 不把真实业务数据硬编码成看似实时的统计数据。
- HTML 预览必须隔离不可信内容。

## 后端约定

- FastAPI 路由负责 HTTP 输入输出和依赖注入。
- 业务规则放在 modules 或 services。
- 数据访问通过 repositories。
- 请求/响应使用 Pydantic Schema。
- 数据模型使用 SQLAlchemy 2.x。
- 数据库结构变化通过 Alembic migration。
- 文件操作限制在配置的资源根目录内，防止路径穿越。
- 长任务采用任务 ID、状态和日志，不阻塞普通 API。
- 密钥、Cookie 和 Token 不进入源码、前端包或 Git。

## 资源与来源

- content 只存已整理或明确标注状态的资源。
- sources 保存来源原件和研究证据。
- 每项外部资源记录 URL、作者/组织、许可证、采集时间和最后核验时间。
- 原始英文 DESIGN.md 不得被中文稿覆盖。
- 迁移时优先复用原 Git blob，确保内容不变。
- AI 生成内容默认进入 draft 或 review，不覆盖 published 资源。

## 现有系统兼容

仓库仍保留旧版静态 HTML、Python WebUI、script/ 和 ToolOrbit Manifest。没有完成新旧功能等价验收前，不得删除或改坏旧入口。迁移脚本必须扫描相对路径、导入、批处理入口和 Manifest 引用。

## 文档同步

- 产品功能或验收范围变化：更新根目录 PRD.md。
- 架构、依赖或目录变化：更新 docs/architecture/。
- 页面视觉与交互变化：更新根目录 DESIGN.md 和 COMPONENTS.md。
- Skill 工作流程变化：更新对应 SKILL.md。
- 安装、运行和部署变化：更新 README.md。

## 验收要求

- 前端：npm run build 与 typecheck。
- 后端：pytest、健康检查和 SQLite 连接检查。
- 资源迁移：文件数量、路径映射和 SHA-256 / Git blob SHA 核验。
- 集成：Vite API 代理、CORS、文件预览安全和旧 ToolOrbit 入口。
- 变更报告必须区分已实现、已验证和规划中，不得把目录骨架描述为完整功能。
