# UI Design Studio — 产品需求文档（PRD）

> 文档版本：V1.0 Draft | 日期：2026-11-24 | 状态：待评审
> 本文定义 UI 风格资源与设计系统工作台的新增需求，不代表已实现功能。现有 README 描述 Frontend Design Studio V1.2.0 / M3；本文以兼容其 Codex Skills 和 Playwright Visual QA 为原则，不重置现有版本号。

## 产品定位
面向独立开发者、前端工程师及 AI 编程 Agent 的本地优先 WebUI 设计工作台。将风格发现、可运行预览、组件与页面模板、设计变量、提示词、项目绑定、视觉验收统一管理。不是单纯的截图收藏站，也不是替代 Figma 的完整绘图工具。

## 核心目标
- 同一个真实页面结构可一键切换不同视觉风格，方便横向比较。
- 资源可搜索、收藏、分类、编辑、导入、导出，避免每个项目重复设计。
- 将选定风格转换为机器可读设计规范，供 Codex 等 Agent 复用。
- 保留已有设计简报、实现、Skills 管理和视觉 QA 工作流。
- 优先支持本地运行、离线预览及数据自主控制。

## 用户场景
1. 开发新项目：选择产品类型 → 浏览推荐风格 → 对比同一页面 → 调整设计变量 → 导出项目设计包。
2. 改造旧项目：导入当前设计规范 → 建立视觉基线 → 预览新风格 → 生成 Agent 改造任务 → Playwright 验收。
3. 收集设计资源：录入 GitHub、官网或自有组件 → 标记来源、许可证、适用场景 → 收藏与复用。

## 功能需求
| ID | 模块 | 需求 | 优先级 |
|---|---|---|---|
| FR-01 | 风格库 | 卡片/列表、名称及中英文搜索、标签、分类、收藏、详情、来源和许可证 | P0 |
| FR-02 | 预览实验室 | 同一 Dashboard 切换风格；真实 HTML/CSS 组件、桌面/平板/手机视口、亮暗模式、并排对比 | P0 |
| FR-03 | Design Tokens | 编辑颜色、字体、字号、间距、圆角、边框、阴影、透明度、模糊、动效；实时应用、重置、保存为自定义风格 | P0 |
| FR-04 | 组件库 | Button、Input、Select、Card、Table、Dialog、Tabs、Sidebar、Toast、Chart 等；正常/悬停/聚焦/禁用/加载状态；代码复制 | P0 |
| FR-05 | 页面模板库 | Dashboard、管理后台、知识库、任务中心、资源图库、登录、设置、Landing Page；按风格套用 | P1 |
| FR-06 | 动效库 | 过渡、微交互、进入退出、骨架屏；参数调整、减弱动画模式、代码导出 | P1 |
| FR-07 | 提示词库 | 按风格生成中英文设计提示词、正负约束、组件规则、简短/完整版本；可编辑复制 | P0 |
| FR-08 | 项目管理 | 项目名称、路径、技术栈、关联风格与版本；设计简报、导出记录、QA 记录 | P1 |
| FR-09 | 资源管理 | 本地 JSON 导入导出、校验、重复检测、标签及来源维护；第三方适配器 | P1 |
| FR-10 | Agent 集成 | 导出 SKILL.md、CSS、JSON、Markdown、HTML；复用已有 AGENTS.md 绑定和备份；CLI/MCP 检索接口后续实现 | P0/P2 |
| FR-11 | Visual QA | 接入现有 Playwright 检查、截图基线、差异比较、响应式检查、问题报告与修复任务 | P1 |

## 初始风格目录
首批 12 类：Minimalism（极简）、Glassmorphism（玻璃拟态）、Bento Grid（便当盒布局）、Linear-inspired（精致暗色）、Neumorphism（新拟态）、Neo-Brutalism（新粗野主义）、Apple-inspired（原生桌面感）、Material Design（材质设计）、Swiss Style（瑞士设计）、Cyberpunk/HUD（科技科幻）、Notion-inspired（知识工作台）、Enterprise（企业管理）。
布局范式与视觉主题应分开建模，例如 Bento 可叠加玻璃主题，不强制互斥。品牌风格名称仅作参考，不复制商标或专有资产。

## 信息架构
左侧导航：工作台 / UI 风格库 / 组件库 / 页面模板 / Design Tokens / 动效库 / 提示词库 / 项目管理 / Visual QA / 设置。
风格详情采用三栏：资源导航、中央实时预览、右侧属性与规范；顶部搜索、设备切换、亮暗切换、对比和导出。小屏改为抽屉及分段布局。主界面自身保持统一主题，预览主题在隔离容器内切换。

## 数据模型
- Style：id、slug、nameZh、nameEn、description、tags、category、tokens、previewId、sourceUrl、license、version。
- TokenSet：semanticColors、typography、spacing、radius、shadows、borders、motion、mode。
- Component：id、name、category、variants、states、code、framework、dependencies、license、source。
- Template：id、name、layout、components、supportedStyles、previewEntry、source。
- Project：id、name、rootPath、stack、styleId、styleVersion、overrides、exports、qaRuns。
- 所有资源包含 schemaVersion；用户修改与内置资源分离；导入不静默覆盖，支持迁移和备份。

## 技术方案（建议，待核对已有源码）
优先沿用现有前端栈及 Node.js 本地服务；若需新模块，采用 TypeScript、CSS Variables、Vite 等可维护方案。前端负责资源浏览与编辑，服务负责受控文件读写、项目绑定和 QA。静态资源以 JSON/Markdown/CSS 管理；本地数据可使用 SQLite 或现有存储，不重复建设。预览采用 sandbox iframe 或隔离容器；第三方代码默认不执行，禁止任意文件读取和命令执行；项目写入需显示目标、备份并允许撤销。敏感凭据不进入仓库。
静态展示可选 GitHub Pages；本地服务能力不可假装在纯静态站点可用。保留现有 npm 启动、检查、构建与测试命令，具体实现以源码核验为准。

## 外部资源调研清单
- StyleKit：https://github.com/AnxForever/stylekit
- UI UX Pro Max：https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- shadcn/ui：https://ui.shadcn.com/
- Magic UI：https://magicui.design/
- Aceternity UI：https://ui.aceternity.com/
- Mobbin：https://mobbin.com/；Refero：https://refero.design/；Uiverse：https://uiverse.io/
以上均为候选参考，接入前核验项目可用性、许可证、API、依赖与商业限制。仅导入获授权的内容，保留归属；不批量复制付费图库。

## Agent 工作流
需求分析 → 选择风格/页面 → 生成设计简报 → 保存 Tokens 与组件规则 → 导出设计包 → Codex 实现 → Playwright 截图与 QA → 生成修复任务 → 再验收。
导出包建议包含 design-tokens.json、theme.css、design-spec.md、SKILL.md、preview.html。CLI/MCP 后续提供 list_styles、get_style、search_components、export_design 等接口；写入能力需单独授权。

## 非功能需求
- 可访问性：目标 WCAG 2.2 AA，键盘操作、焦点可见、语义标签、对比度检查；支持 prefers-reduced-motion。
- 响应式：至少验证 375、768、1440px 视口；不得出现非预期横向滚动。
- 性能：本地缓存、按需加载预览、列表虚拟化（大规模资源时）；目标普通本地设备首屏 2 秒内，切换已加载主题 300ms 内，需实测。
- 安全与隐私：本地优先、路径约束、输入校验、HTML 净化、禁止自动执行导入脚本；可离线使用内置资源。
- 可维护：模块化、统一 schema、单元测试、视觉回归测试、错误及空状态、数据迁移与恢复。

## 分阶段实施
| 阶段 | 交付 | 验收 |
|---|---|---|
| M4-A | 核对现有项目、定义 schema、12 类风格元数据、导航及预览原型 | 数据校验通过，同一 Dashboard 可切换至少 6 套风格 |
| M4-B | 完成 12 套风格、Tokens 编辑、基础组件、搜索收藏、导出 | 修改实时生效，重启保留，导出可独立预览 |
| M5 | 页面模板、动效、资源导入、项目绑定 | 模板主题切换、导入导出往返不丢数据、项目文件备份 |
| M6 | Agent 接口、外部适配器与 Visual QA 联动 | CLI/MCP 合约测试、三视口截图、差异报告与修复任务 |
阶段名称是规划，不代表已有发布。

## 验收清单
- [ ] 12 套风格均有统一 Dashboard 预览、明确来源和适用场景。
- [ ] 搜索、筛选、收藏、亮暗切换和设备切换真实可用。
- [ ] Tokens 编辑、保存、重置、导出与重新导入结果一致。
- [ ] 基础组件覆盖交互状态，代码可复制；预览之间样式不污染。
- [ ] 导出的 CSS/JSON/SKILL.md/HTML 内容一致，HTML 可离线打开。
- [ ] 三个视口通过检查，键盘操作与减弱动画可用。
- [ ] 原有 Codex Skills、项目绑定和 Visual QA 工作流无回归。
- [ ] README、启动命令、测试说明、许可证与第三方归属完整。
- [ ] 在目标 Windows 环境完成真实安装、构建和 Chromium 验证。

## 范围边界与待确认
V1 首先完成本地风格库与可运行预览，不承诺实时爬取全部网站、完整 Figma 编辑器、云端多人协作或自动生成全部业务代码。现有 README 提及压缩包，但当前仓库根目录未见 releases/，须在实现前核实源码位置。最终技术栈、发布版本及外部资源授权待评审。
