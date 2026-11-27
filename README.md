# Yeyunby DesignForge

面向人和 AI 的 UI 设计研究、设计知识管理、资源展示与设计辅助平台。

## 技术架构

| 层级 | 技术 |
| --- | --- |
| 前端 | React + TypeScript + Vite |
| 后端 | Python + FastAPI |
| 数据库 | SQLite |
| ORM / Migration | SQLAlchemy 2.x / Alembic |
| API | REST / JSON，统一前缀 /api/v1 |
| 资源 | Markdown、JSON、HTML、CSS、图片和源码 |

这是一个单仓库统一平台。apps 只包含 apps/frontend 与 apps/backend；Style Explorer、Design Systems、Page Library、Component Library、Motion Library、Source Center、Research Center、AI Workspace 和 Settings 均属于同一个平台内部的业务模块。

## 目录

- apps/frontend：统一 React 网站。
- apps/backend：统一 FastAPI 服务和 SQLite 数据访问。
- content：已整理的正式设计资源。
- sources：外部来源、原始归档和研究证据。
- tools：采集、迁移、转换和校验工具。
- .agents/skills：Agent Skills。
- docs：产品、架构、数据模型和迁移文档。

## 本地开发

### 前端

需要 Node.js 20+。

    cd apps/frontend
    npm install
    npm run dev

默认地址：http://127.0.0.1:5173

### 后端

需要 Python 3.11+。

    cd apps/backend
    python -m venv .venv
    # Windows PowerShell: .venv\Scripts\Activate.ps1
    # macOS / Linux: source .venv/bin/activate
    pip install -e ".[dev]"
    uvicorn app.main:app --reload --host 127.0.0.1 --port 28717

健康检查：http://127.0.0.1:28717/health
API 文档：http://127.0.0.1:28717/docs

### 旧版兼容入口

原有 ToolOrbit 插件入口、script/、preview.html 和 local-preview.html 暂时保留。新平台完成等价验收前，不删除旧入口。

- [旧版静态总览](preview.html)
- [旧版本地交互样张](local-preview.html)

## 文档

- [产品需求](PRD.md)
- [系统总体架构](docs/architecture/SYSTEM-ARCHITECTURE-v1.0.md)
- [目录结构](docs/architecture/DIRECTORY-STRUCTURE.md)
- [SQLite 数据模型](docs/architecture/DATA-MODEL-v1.0.md)
- [迁移计划](docs/architecture/MIGRATION-PLAN.md)
- [Agent 研发约定](AGENTS.md)

## 分支策略

dev 是日常开发与集成分支；main 保留稳定版本。功能改动基于 dev 开发并回归验证后合入 dev。

## 许可与来源

项目保留各资源原始来源、作者和许可证信息。外部素材和代码必须遵守原始许可证，不因归档而自动成为本项目原创内容。
