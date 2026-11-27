# SQLite 数据模型规划 v1.0

## 1. 数据原则

SQLite 保存结构化元数据和关系；Markdown、HTML、代码、图片等仍保存为文件。核心资源使用稳定 UUID，不以文件名作为唯一身份。文件路径相对于配置的资源根目录保存，避免写死机器绝对路径。

## 2. 核心表规划

| 表 | 主要字段 | 说明 |
| --- | --- | --- |
| categories | id, name, parent_id, resource_type | 树状分类 |
| tags | id, name, slug | 标签 |
| resources | id, resource_type, slug, title, summary, status, metadata_path | 统一资源主表 |
| resource_tags | resource_id, tag_id | 资源标签关联 |
| resource_files | id, resource_id, file_role, relative_path, mime_type, checksum, language | 文件索引 |
| sources | id, source_type, name, url, owner, license, checked_at | 外部来源 |
| resource_sources | resource_id, source_id, relation_type | 资源与来源关联 |
| design_styles | resource_id, style_family, theme, visual_attributes | 风格扩展 |
| design_systems | resource_id, brand, version, language_status | 规范扩展 |
| page_patterns | resource_id, page_type, layout_pattern | 页面扩展 |
| components | resource_id, component_type, framework, package_name | 组件扩展 |
| motion_assets | resource_id, motion_type, duration_ms, easing, reduced_motion | 动效扩展 |
| research_tasks | id, title, scope, status, created_at, updated_at | 研究任务 |
| research_evidence | id, task_id, source_id, resource_id, evidence_path, notes | 研究证据 |
| jobs | id, job_type, status, progress, payload_json, error_text | 采集/导入/生成任务 |
| job_logs | id, job_id, level, message, created_at | 任务日志 |
| favorites | id, resource_id, created_at | 收藏 |
| system_settings | key, value_json, updated_at | 系统配置 |

## 3. 第一版资源类型

design_style、design_system、page_pattern、component、motion、source_collection、research_report。

## 4. 状态流转

inbox -> researching -> draft -> review -> published -> archived。rejected 为独立终态。已发布资源更新应创建版本或变更记录，不静默覆盖。

## 5. 文件与数据库一致性

- 文件写入成功后再提交数据库记录；失败时清理临时文件。
- 文件更新先写临时文件、校验后原子替换。
- 文件 checksum 使用 SHA-256。
- 删除资源默认软删除或归档；物理删除需明确操作。
- 路径必须限制在配置的 content、docs/sources 或 storage 根目录内。
- Alembic 管理表结构版本。
- SQLite 开启外键约束；并发写入任务需队列化或控制事务时长。

## 6. 第一阶段最小数据表

优先实现 resources、categories、tags、resource_tags、resource_files、sources、resource_sources、jobs、job_logs 和 system_settings。其他扩展表随业务模块实现，不提前创建未使用的大量空表。
