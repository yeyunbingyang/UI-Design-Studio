# Yeyunby DesignForge 系统总体架构与功能模块规范 v1.0

## 1. 产品定位

Yeyunby DesignForge 是面向人和 AI 的 UI 设计研究、设计知识管理、资源展示与设计辅助平台。平台收集外部设计案例和开源项目，将其研究、分类、校验并沉淀为可检索、可预览、可比较、可复用的设计资产，并通过 AI 工作流辅助生成设计规范、分析页面和检查设计质量。

本项目是一个统一平台，不是多个独立网站或业务 App 的集合。

## 2. 已确定技术决策

| 层级 | 决策 |
| --- | --- |
| 仓库 | 单仓库 Monorepo |
| 开发分支 | dev |
| 稳定分支 | main |
| 应用数量 | 一个统一平台 |
| apps 目录 | 仅 frontend、backend |
| 前端 | React + TypeScript + Vite |
| 后端 | Python + FastAPI |
| 数据库 | SQLite |
| ORM | SQLAlchemy 2.x |
| 数据库迁移 | Alembic |
| API | REST / JSON，前缀 /api/v1 |
| 资源内容 | Markdown、JSON、HTML、CSS、图片和源码文件 |
| Agent 能力 | .agents/skills 下的 Skills 与 Agent 工作流 |

## 3. 应用边界

- apps/frontend：所有导航、页面、资源浏览、编辑、搜索、预览、管理和 AI 工作区。
- apps/backend：所有 API、业务规则、资源索引、研究任务、采集任务、文件处理、AI 调用协调和数据库访问。
- SQLite：结构化元数据、关系、任务状态、索引、设置和操作记录。
- content：经过整理、可供平台浏览和复用的正式设计资产。
- docs/sources：外部来源记录、原始归档、研究证据和许可证信息。
- .agents/skills：Agent 可调用的技能说明与配套资源。
- tools：采集、转换、校验、构建和维护脚本。

禁止为 Style Explorer、Design Systems、Page Library 等业务板块创建独立 App。它们均属于统一前端和后端中的业务模块。

## 4. 统一业务模块

### Dashboard｜工作台首页
资源统计、分类分布、最近新增、最近浏览、待审核资源、研究任务和运行状态。

### Style Explorer｜设计风格探索
按名称、类别、视觉特征、主题和标签浏览；展示风格说明、颜色、字体、适用场景和反例；支持筛选、收藏、比较，并关联设计规范、页面和组件。

### Design Systems｜设计规范库
管理品牌 DESIGN.md、中文稿和版本；展示颜色、字体、间距、圆角、阴影、组件、状态、响应式和无障碍规则；提供 Markdown 阅读、Token 可视化、HTML 预览、下载、比较、生成和维度完整性检查。

### Page Library｜页面设计库
管理完整页面案例和页面模式；覆盖展示、工具、管理、数据、内容、认证、设置和工作区等页面类型；记录信息架构、布局、组件组合、交互状态、响应式行为、截图、预览和来源。

### Component Library｜组件资源库
管理基础组件、复合组件和特殊视觉效果组件；记录用途、属性、状态、交互、依赖、框架、许可证和来源；支持 React、CSS、SVG、HTML 实现、运行预览、代码查看和下载。

### Motion Library｜动效资源库
管理文字、背景、滚动、转场、微交互和 3D 动效；记录触发条件、持续时间、缓动、动画属性、性能影响和 reduced-motion 替代行为。

### Source Center｜来源中心
登记网站、GitHub 仓库、文档、设计工具和教程；记录 URL、作者或组织、许可证、采集时间、最后核验时间和可用状态；维护来源与设计资产、页面、组件和研究任务的关联。

### Research Center｜研究中心
创建研究任务，记录问题、范围、目标和状态；保存采集证据、分析过程、对比结果、结论和待确认事项；研究成果经审核后转为正式设计资产。

### AI Workspace｜AI 工作区
检索设计资源、制定研究计划、从网站/截图/代码提取设计维度、生成 DESIGN.md 和 Token、检查缺失与冲突、辅助页面审查。AI 结果默认进入 draft 或 review，不自动覆盖 published 资源。

### Settings｜系统设置
管理分类、标签、存储、导入导出、备份、GitHub/采集器/AI Provider 集成、日志、任务状态、健康检查和系统偏好。

## 5. 资源模型与关系

核心实体：Source、Resource、DesignStyle、DesignSystem、PagePattern、Component、MotionAsset、ResearchTask、ResearchEvidence、ResourceFile、Category、Tag。

关系原则：
1. 一个来源可以产生多个研究任务和设计资源。
2. 一个设计规范可关联多种风格、页面、组件和动效。
3. 一个页面可组合多个组件，并引用一个或多个设计规范。
4. 一个组件可有多个框架实现和演示案例。
5. 研究证据必须可追溯到来源和采集时间。
6. 正式资源必须记录文件路径、版本、来源和审核状态。

## 6. 文件与数据库分工

Git/文件系统保存 Markdown、HTML、代码、SVG、截图、研究报告和来源快照；SQLite 保存资源元数据、分类标签、关联关系、来源记录、研究任务、采集任务、审核状态、收藏、设置和文件索引。大型 HTML、图片和源码不直接存入 SQLite。

运行时数据库、用户上传、下载缓存、日志和密钥存入 backend 的 data/storage 或配置的数据目录，不提交 Git。

## 7. 前后端分层

前端采用 pages + features + shared components + services(API Client) 的组织方式。pages 只组合路由，业务状态放在 features，跨模块复用组件放在 components。

后端采用 API Router + Module/Service + Repository + SQLAlchemy Model + Pydantic Schema 分层。路由处理 HTTP 输入输出，业务规则放在模块或服务层，数据访问通过 Repository 统一管理。

API 统一前缀 /api/v1，健康检查为 /health。长时间采集、导入和 AI 任务采用任务 ID、状态查询和日志，不阻塞普通请求。

## 8. 资源生命周期

统一状态：inbox、researching、draft、review、published、archived、rejected。外部采集和 AI 生成结果默认进入待整理或草稿。正式发布需核对来源、许可证、文件路径和内容质量。

## 9. 安全与运行

- 默认本地服务绑定 127.0.0.1。
- 密钥、Cookie、Token 不进入前端包或 Git。
- 文件操作限制在配置的 content、docs/sources、storage 根目录。
- 外部 HTML 在隔离 iframe 或安全上下文中预览。
- 上传文件校验类型和大小。
- SQLite 开启外键约束；数据库结构变化通过 Alembic 管理。
- 采集行为遵守目标站点条款、访问限制和资源许可证。

## 10. 开发与发布原则

dev 为日常集成分支，main 为稳定分支。apps 下只允许 frontend 与 backend 两个工程。新增功能必须归入现有业务模块。每个功能按需更新前端、API、数据模型、测试和文档。目录骨架不等于业务功能已实现。

## 11. 第一阶段交付

1. 总体架构和目录规范。
2. React 前端、FastAPI 后端最小可运行骨架。
3. SQLite 连接和健康检查。
4. 现有规范、中文样张和原始研究归档的兼容映射。
5. 资源目录索引。
6. 本地开发、测试和运行说明。

本阶段不宣称所有业务模块已经完成。
