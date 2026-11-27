# Yeyunby DesignForge

面向人和 AI 的 UI 设计研究、设计知识管理、资源展示与设计辅助平台。

## 为什么构建 DesignForge

我构建 DesignForge，是想梳理一个产品从整体平台到具体页面是怎么设计的，再把查到的规范、案例和组件整理成一套可持续积累的设计资料库，供我和 AI 在做新项目时查阅、比较和复用。

- **平台设计**负责梳理产品的 UI 风格、统一设计规范、整体布局和导航方式。
- **页面设计**按页面类型、页面布局和交互模式整理案例，方便按具体场景查找。
- **设计资料库**收录设计规范、页面方案、组件和动效。设计规范配有 HTML 样张，便于对照规范和实际效果。

我的原始构想和功能拆分记录在 [DesignForge 系统分析](DesignForge系统分析.md)。

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
- docs/sources：外部来源、原始归档和研究证据。
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

## 原型与需求文档

- [现行产品需求（PRD）](docs/product/PRD.md) 记录产品目标、功能范围和验收要求。
- [历史需求（PRD）](docs/product/PRD-legacy.md) 记录旧版设计系统总览、样张和归档的需求。
- [设计系统总览原型](docs/prototypes/preview.html) 展示品牌目录、设计规范和样张预览。ToolOrbit 当前打开此页面。
- [品牌交互样张原型](docs/prototypes/local-preview.html) 展示品牌的设计词元、组件状态和交互示例。

## 其他项目文档

- [界面规范](docs/design/DESIGN.md)
- [组件规范](docs/design/COMPONENTS.md)
- [来源归档](docs/sources/README.md)
- [系统总体架构](docs/architecture/SYSTEM-ARCHITECTURE-v1.0.md)
- [目录结构](docs/architecture/DIRECTORY-STRUCTURE.md)
- [SQLite 数据模型](docs/architecture/DATA-MODEL-v1.0.md)
- [迁移计划](docs/architecture/MIGRATION-PLAN.md)
- [Agent 研发约定](AGENTS.md)

## 分支策略

dev 是日常开发与集成分支；main 保留稳定版本。功能改动基于 dev 开发并回归验证后合入 dev。

## 许可与来源

项目保留各资源原始来源、作者和许可证信息。外部素材和代码必须遵守原始许可证，不因归档而自动成为本项目原创内容。
