# UI Design Studio

UI Design Studio 是面向 Windows 本地使用的设计素材工作台。当前 Alpha 应用提供风格库、设计资源浏览、设计组合器和组件实验室。首期需求聚焦 Codex Skill 确认入库，以及在 WebUI 中浏览和预览素材。

- [现行产品需求](docs/PRD.md)
- [需求与验收清单](docs/需求与验收清单.md)

## 在 Windows 上运行

在本项目根目录打开 PowerShell。启动应用需要 Python，运行测试还需要 Node.js 和 npm。上游 CI 使用 Node.js 22 和 Python 3.12，可作为环境参考。

```powershell
npm run dev -- --bind 127.0.0.1
```

访问 [当前应用 /app/](http://127.0.0.1:8080/app/)。应用通过 HTTP 加载模块和资源。使用 `Ctrl+C` 停止服务。

如果 Windows 保留了 8080 端口，可以改用 `python -m http.server 18080 --bind 127.0.0.1`，再访问 [备用端口的应用入口](http://127.0.0.1:18080/app/)。

## 开发与验收

```powershell
npm test
npm install
npx playwright install chromium
npm run test:qa
```

`npm test` 运行设计系统的 Node.js 测试。浏览器验收需要先安装项目依赖和 Playwright Chromium。`npm run test:all` 按顺序运行两套测试。Playwright 配置固定使用 8080 端口，必要时自行启动 Python 服务。运行前请确认该端口空闲，或正在由本项目使用。若系统保留了该端口，可在临时项目副本中将 Playwright 配置里的 8080 统一改为可用端口后运行。

上游 CI 定义在本插件的 `.github/workflows/` 下。ToolOrbit 主仓库的 GitHub Actions 从自己的仓库根目录读取工作流，因此本插件的工作流需要在上游仓库运行。本地验收使用上面的命令。

## 目录约定

| 目录 | 职责 |
| --- | --- |
| `app/` | 当前应用入口、交互和模块 |
| `design-system/` | 资源目录、注册表、设计方案、解析器和 Node.js 测试 |
| `skills/` | Codex 工作规范、生成模板和示例 |
| `tests/` | Playwright 浏览器验收 |
| `prototype/` | 历史原型和阶段交付页 |
| `docs/` | 现行需求、验收清单、设计记录与历史说明 |

需求范围更新写入 PRD，实际实现和验证证据记入清单。启动方式或目录职责变化时，同步更新本页。依赖、缓存和测试报告按项目忽略规则保留在本机。

## 原型与历史资料

启动服务后，可以访问这些原型。

| 入口 | 用途 |
| --- | --- |
| [A2 独立原型](prototype/index.html) | 早期独立 HTML 样例 |
| [Design Composer V2](prototype/v2/index.html) | 20 维组合器原型 |
| [阶段汇总原型](prototype/latest/index.html) | 当时的原型汇总入口 |
| [Phase 0 提交入口](prototype/phase0-submission/index.html) | 独立评审入口，范围见 [Phase 0 提交记录](docs/phase0-prototype-submission.md) |

保留 [V1.4 阶段记录](README.v1.4-draft.md)、[V1.4 需求草案](docs/PRD.v1.4-draft.md) 和 [早期项目说明](docs/legacy-readme.md)。

历史记录中的两个 A4.2 分别指 [Markdown Importer MVP](docs/design/external-design-intelligence.md) 和 [DESIGN.md Generator Skill](skills/design-system-generator/SKILL.md)。前者属于外部规范导入，当前留在后续范围。后者已有生成规范、模板与示例。
