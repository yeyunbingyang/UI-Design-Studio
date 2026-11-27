# 目录结构与文件归属规范

## 1. 根目录

    yeyunby-designforge/
    ├── apps/
    │   ├── frontend/
    │   └── backend/
    ├── content/
    │   ├── catalog/
    │   ├── design-systems/
    │   ├── visual-styles/
    │   ├── page-patterns/
    │   ├── component-patterns/
    │   └── motion/
    ├── docs/
    │   ├── README.md
    │   ├── architecture/
    │   ├── design/
    │   ├── product/
    │   ├── prototypes/
    │   └── sources/
    ├── localized/
    ├── script/
    ├── tools/
    ├── .agents/skills/
    ├── design-yeyunby-designforge.bat
    ├── AGENTS.md
    └── manifest.json

apps 只包含统一平台的 frontend 和 backend，不创建 showcase、studio、api 等并列业务应用。

## 2. 前端

    apps/frontend/
    ├── public/
    ├── src/
    │   ├── app/                 # 路由、Providers、布局和应用配置
    │   ├── pages/               # 路由级页面组合
    │   ├── features/            # 业务功能模块
    │   │   ├── dashboard/
    │   │   ├── style-explorer/
    │   │   ├── design-systems/
    │   │   ├── page-library/
    │   │   ├── component-library/
    │   │   ├── motion-library/
    │   │   ├── source-center/
    │   │   ├── research-center/
    │   │   ├── ai-workspace/
    │   │   └── settings/
    │   ├── components/          # 跨业务复用 UI、导航、预览和反馈组件
    │   ├── services/            # API Client
    │   ├── stores/
    │   ├── hooks/
    │   ├── types/
    │   ├── utils/
    │   ├── styles/
    │   └── assets/
    ├── tests/
    └── package.json

pages 只负责路由组合；features 承载业务界面和状态；components 放跨业务复用组件；services 放 API 请求。

## 3. 后端

    apps/backend/
    ├── app/
    │   ├── main.py
    │   ├── core/
    │   ├── api/v1/
    │   ├── modules/
    │   │   ├── dashboard/
    │   │   ├── styles/
    │   │   ├── design_systems/
    │   │   ├── pages/
    │   │   ├── components/
    │   │   ├── motions/
    │   │   ├── sources/
    │   │   ├── research/
    │   │   ├── ai/
    │   │   └── settings/
    │   ├── database/
    │   │   ├── models/
    │   │   ├── repositories/
    │   │   └── migrations/
    │   ├── services/
    │   ├── integrations/
    │   └── schemas/
    ├── data/                    # SQLite 运行时文件，不提交 Git
    ├── storage/                 # 上传、截图、导出等运行时文件
    ├── tests/
    └── pyproject.toml

每个业务模块按复杂度增加 router、schemas、models、repository 和 service，不为形式强行创建空文件。

## 4. 内容资源

    content/
    ├── catalog/
    ├── design-systems/<slug>/
    │   ├── specification/
    │   ├── localized/
    │   ├── previews/
    │   ├── assets/
    │   └── metadata.json
    ├── visual-styles/<slug>/
    ├── page-patterns/<category>/<slug>/
    ├── component-patterns/<category>/<slug>/
    └── motion/<category>/<slug>/

正式资源应尽可能提供 metadata.json，记录 id、slug、title、resource_type、status、tags、source_ids、license、created_at、updated_at 和 files。未知信息标记 unknown，不得猜测。

## 5. 来源目录

    docs/sources/
    ├── websites/<source-slug>/
    ├── github/<owner-repo>/
    └── research/<research-project>/

保存来源信息、原始材料、采集快照、许可证和研究证据。正式资源通过稳定 source_id 关联来源。

## 6. Skills 与工具

- Agent Skills 以 .agents/skills/<skill-name>/SKILL.md 为规范入口。
- Skill 模板、示例和静态资源放在其自身 assets/ 或 references/。
- tools/ 放通用采集、迁移、转换、校验和维护脚本。
- 本地化与样张维护脚本位于 .agents/skills/designforge-authoring/scripts/。script/ 存放 ToolOrbit 兼容入口。

## 7. 文件归属

| 内容 | 归属 |
| --- | --- |
| React 页面与组件 | apps/frontend |
| FastAPI 路由与业务逻辑 | apps/backend |
| SQLite 数据库 | apps/backend/data，运行时生成 |
| 上传与生成文件 | apps/backend/storage，运行时生成 |
| 正式设计资产 | content |
| 外部原始资料与研究证据 | docs/sources |
| Agent Skill | .agents/skills |
| 通用脚本 | tools |
| PRD、架构和开发文档 | docs |
| 测试 | 对应工程 tests 或根 tests |

## 8. 迁移约束

先复制并校验，再切换读取路径，最后才考虑删除旧路径。英文原件不得被译文覆盖。迁移记录 old_path、new_path 和 blob SHA 或内容哈希。验收文件数量、哈希、HTML 相对链接、脚本引用和 ToolOrbit Manifest。docs/prototypes/ 下的旧版原型和插件入口在替代功能验收前继续保留。
