# dev 分支结构迁移与实施计划

## 1. 目标

在不丢失、不改写现有资源和不破坏 ToolOrbit 插件的前提下，将静态资源仓库演进为 React + FastAPI + SQLite 的统一平台。

## 2. 当前基线

迁移前的 dev 包含 design-md（品牌规范）、localized（中文规范和 HTML 样张）、research（官网归档和原始研究材料）、.agents/skills、script 与根目录维护脚本、preview.html、local-preview.html 以及 manifest.json。

## 3. 迁移策略

1. 建立架构文档和 frontend/backend 可运行骨架。
2. 将现有规范、中文样张和研究归档以 Git blob 原样映射到 content 与 docs/sources。
3. 生成资源目录索引，核对源与目标 blob SHA。
4. 前端先读取静态目录索引与资源文件，后端逐步接管数据库索引和管理操作。
5. 旧脚本迁入编写技能前扫描相对路径、导入、批处理入口、端口配置和 Manifest。
6. 新平台完成等价验收后再切换旧入口。
7. 旧目录仅在路径引用、文件哈希、数量和运行测试通过后另行清理。

## 4. 第一批路径映射

| 旧路径 | 新路径 | 策略 |
| --- | --- | --- |
| design-md/<brand>/* | content/design-systems/<brand>/specification/* | 原 blob 复制 |
| localized/<brand>/* | content/design-systems/<brand>/localized/* | 原 blob 复制 |
| research/* | docs/sources/research/* | 原 blob 复制 |
| .agents/skills/* | .agents/skills/* | 保留 |
| script/* | 暂留 script/* | 下一阶段检查后迁移 |
| 根目录 Python 脚本 | .agents/skills/designforge-authoring/scripts/ | 更新相对路径和技能说明 |
| preview.html / local-preview.html | docs/prototypes/ | 保留旧 WebUI 路由 |
| manifest.json | 暂不改动 | 保护 ToolOrbit 兼容性 |

## 5. 内容完整性验收

- 每个复制文件比较源 blob SHA 与目标 blob SHA。
- 比较品牌目录数量、文件数量和关键文件清单。
- 检查英文 DESIGN.md 与中文稿是否分开保存。
- 检查 HTML 预览引用的相对图片、字体和脚本。
- 检查归档 index.json 的相对路径和记录。
- 不格式化、翻译或重写原始归档文件。

## 6. 前后端验收

前端：npm install、npm run build、typecheck；检查路由、窄屏和 API 空状态。
后端：安装依赖、启动 FastAPI；检查 /health 与 /api/v1/health；确认 SQLite 首次创建并执行 SELECT 1。
集成：Vite 代理、CORS、文件预览安全、旧 ToolOrbit 入口和离线 HTML 预览。

## 7. 后续迭代

1. 平台外壳、资源索引和 Dashboard。
2. Style Explorer 与 Design Systems 浏览、搜索、详情和预览。
3. Source Center 与 Research Center。
4. Page Library、Component Library、Motion Library。
5. 导入、审核、版本、收藏和资源管理。
6. AI Workspace、设计维度分析、规范生成和设计审查。
7. 工具链迁移、备份、权限和部署。

## 8. 完成定义

只有在构建、健康检查和资源哈希核验实际通过后，才能标记对应项目完成。规划文档和目录骨架不代表全部业务功能已经实现。
