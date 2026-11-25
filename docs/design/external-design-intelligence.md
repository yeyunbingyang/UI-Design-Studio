# External Design Intelligence（外部设计知识引擎）

> 版本：A4.1 Proposal / 2026-11-25  
> 状态：架构与需求已纳入；自动抓取、Markdown 解析和 UI 尚未实现。  
> 上游参考：VoltAgent/awesome-design-md（MIT 仓库目录；每条被导入资产仍须独立核验来源与许可）。

## 1. 目标与定位

将外部网站设计规范（尤其是 DESIGN.md）转化为 UI-Design-Studio 可检索、可比较、可组合、可追溯的设计资产。不是把第三方 Markdown 原样堆入仓库，也不是把外部网站 CSS 直接注入 Studio。

核心流程：

发现来源 → 获取原文 → 解析 DESIGN.md → 映射 20 维 → 人工审核 → 生成内部资源/预设 → Playground 对比 → Composer 组合 → 导出 DESIGN.md / Tokens / CSS / Agent 包。

## 2. 与现有架构的关系

- 6 层设计知识架构、20 维资源模型、13 节风格文档继续作为内部标准，不新增第 21 维。
- External Source 是资源来源与导入渠道，不是设计维度。
- DESIGN.md 是外部输入格式；内部 canonical model 才是运行时真源。
- Design Library 保存审核后的资源；Design Presets 保存完整组合；Composer 只消费规范化资源；Playground 负责视觉与交互验证。
- 外部来源的原文、解析结果、映射结果、人工修订分别保存，确保可回溯。

## 3. 新增能力

### 3.1 Source Explorer（来源发现）

来源类型：
- Awesome 列表仓库：例如 VoltAgent/awesome-design-md。
- 单个 DESIGN.md：GitHub 文件、公开 raw 文件或用户本地上传。
- 官方设计系统文档：仅作为参考来源，不默认视为可再分发。
- 用户自建规范：Markdown、JSON、CSS/Tokens。

来源记录字段：
`sourceId`、`kind`、`name`、`repositoryUrl`、`documentUrl`、`rawUrl`、`homepageUrl`、`discoveredAt`、`lastCheckedAt`、`revision`、`license`、`attribution`、`status`。

来源状态：discovered → fetched → parsed → mapped → review → approved / rejected / stale。

### 3.2 DESIGN.md Importer（规范导入器）

导入入口：
1. 粘贴 GitHub 仓库/文件 URL。
2. 粘贴 Markdown 原文。
3. 上传本地 .md 文件。
4. 从已登记的 Awesome 列表选择来源。

首期不承诺自动爬取任意网站；只支持明确 URL、GitHub 文件和本地文件。抓取须遵循 robots、服务条款、速率限制与访问权限；不绕过登录、付费墙或访问控制。

解析器需容忍标题、表格、列表、代码块和非标准章节；保留原始 Markdown。无法识别的内容放入 `unmappedSections`，不得静默丢弃。

### 3.3 20 维语义映射

| DESIGN.md 信息 | 内部维度 | 规范化内容 |
|---|---|---|
| Brand / Visual direction | style | 风格描述、关键词、适用场景 |
| Light / Dark | theme | 模式及模式切换规则 |
| Palette / Semantic colors | color | 原始色板、语义 Token、状态色 |
| Fonts / Type scale | typography | 字族、字重、字号、行高 |
| Spacing / Grid | spacing + layout | 尺度与布局约束，分别存储 |
| Radius / Border | radius + border | 圆角与描边独立映射 |
| Background / Surface | background + surface | 画布与容器材质分离 |
| Elevation / Shadow | shadow | 阴影层级 |
| Effects | effects | 模糊、发光、纹理；不把动效混入 |
| Icons / Imagery | icons + imagery | 风格、来源、比例和使用约束 |
| Components | components | 组件结构、变体与样式 |
| Charts / Data display | visualization | 图表与数据展示规则 |
| Interaction states | interaction | hover、focus、disabled、loading 等 |
| Animation / Transition | motion | 时长、曲线、触发及 reduced-motion |
| Responsive / Breakpoints | layout + navigation + density | 断点、导航变化与信息密度 |

每条映射必须带 `confidence`（0–1）、`evidence`（原文片段/章节）、`mappingStatus`（auto / reviewed / overridden / unmapped）。自动推断不得伪装成原文明确声明。

### 3.4 13 节文档生成

将规范化模型生成现有 13 节 STYLE.md：
1. Style Overview
2. Colors
3. Typography
4. Spacing & Layout
5. Components
6. Do's and Don'ts
7. Surfaces
8. Elevation
9. Imagery
10. Layout
11. Agent Prompt Guide
12. Similar Brands
13. Quick Start

补充元数据：Source & Attribution、License Review、Responsive、Accessibility、Interaction States、Motion、QA Evidence。补充节不能改变既有 13 节的稳定顺序。

### 3.5 视觉对比与组合

- 将导入风格套用到统一的 Dashboard、Landing Page、表单、内容页四类基准页面。
- 支持原始规范预览、规范化结果预览、与现有方案 A/B 对比。
- 允许只提取颜色、字体、图标、组件等单维资源，不必整套导入。
- 导入结果作为新预设，不覆盖已有预设；合并前展示 20 维差异。
- 预览必须由同一解析结果驱动 Tokens、CSS、HTML 和 Markdown。

## 4. 内部数据模型

建议每份导入资产采用如下 envelope：

```json
{
  "schemaVersion": "1.0.0",
  "assetId": "external.linear.app",
  "kind": "design-system",
  "name": "Linear",
  "source": {
    "sourceId": "awesome-design-md",
    "documentUrl": "https://getdesign.md/linear.app/design-md",
    "repositoryUrl": "https://github.com/VoltAgent/awesome-design-md",
    "revision": null,
    "retrievedAt": null
  },
  "license": {
    "status": "unverified",
    "spdx": null,
    "attribution": null,
    "redistributionAllowed": false
  },
  "content": {
    "rawMarkdown": null,
    "rawHash": null,
    "normalized": {}
  },
  "mapping": {
    "dimensions": {},
    "unmappedSections": [],
    "reviewStatus": "pending"
  },
  "validation": {
    "schema": "pending",
    "visual": "not-run",
    "accessibility": "not-run"
  }
}
```

以上为数据契约示例，不代表当前已有解析器或真实 Linear 数据。

## 5. 授权、来源与安全规则

- 仓库许可证不自动覆盖被收录网站的品牌、商标、图片、字体、代码或第三方内容。
- 必须分别记录目录仓库许可证、单个 Markdown 文件的许可证声明、原网站资产许可证；未知即标记 unverified。
- 默认只保存必要的设计事实、抽象 Token 与来源链接；不镜像受限制的图片、字体、品牌素材或完整网页。
- 未审核许可的资源可以本地研究和预览，但禁止随设计包再分发。
- 外部 Markdown、HTML、CSS、SVG 均视为不可信输入；预览放入隔离 iframe，禁止执行导入内容中的脚本和事件处理器。
- 导入时限制文件大小、递归深度、外链数量和下载体积；拒绝 file://、localhost、私网地址及重定向到内网的 URL，防止 SSRF。
- 对 HTML/Markdown 输出进行转义；不将来源文档中的指令当作系统或 Agent 指令执行。

## 6. UI 页面设计

新增导航入口：**外部设计源**，包含：

1. 发现：Awesome 清单、已知来源、最近更新、来源筛选。
2. 导入：URL / Markdown / 本地文件三种入口。
3. 解析工作台：左侧原文、中央 20 维映射、右侧诊断与置信度。
4. 审核：逐维确认、编辑、排除、许可证状态与归属信息。
5. 对比：原始规范 vs 规范化规范、导入前后、两个来源 A/B。
6. 入库：保存为风格、单维资源或完整预设。
7. 来源详情：仓库、文档 URL、版本、许可证、归属、同步历史。

资源卡片统一显示：来源、许可状态、审核状态、支持维度、最近验证时间。筛选必须区分“可预览”“可组合”“可导出”“可再分发”。

## 7. 实施阶段

### A4.1（本次纳入）
- 冻结外部设计知识引擎定位、数据契约、20 维映射、许可和安全边界。
- 建立 Awesome DESIGN.md 来源清单。
- 更新 PRD 与 README，明确当前为设计/需求纳入，非功能已完成。

### A4.2（Importer MVP）
- GitHub 文件 URL、raw URL、本地 Markdown 导入。
- Markdown 章节解析、原文保留、20 维初步映射。
- 解析报告、未映射内容、置信度与人工审核。
- 单元测试覆盖章节变体、空内容、代码块、恶意 HTML 和无效链接。

### A4.3（Design Source UI）
- 来源列表、导入向导、映射审核、许可状态和来源详情。
- 本地存储与 JSON 备份；不改变现有 Composer 数据结构。

### A4.4（Visual Validation）
- 统一基准页面、三视口截图、A/B 对比、可访问性检查。
- 只有通过审核的资源才可标记为 verified。

### A4.5（Agent Export）
- 生成内部 13 节 STYLE.md、DESIGN.md、Tokens、CSS、SKILL.md。
- 生成 attribution 与 license report；按许可决定导出内容。

## 8. 验收标准

- [ ] 不增加第 21 维；所有导入数据映射到现有 20 维或明确 unmapped。
- [ ] 原文、解析结果、人工覆盖和来源版本可追溯。
- [ ] 未映射章节不丢失；自动映射具有置信度和证据。
- [ ] 同一规范化数据生成的预览、Tokens、CSS、Markdown 一致。
- [ ] 导入不覆盖现有方案，差异可查看，锁定维度规则仍有效。
- [ ] 许可未知时禁止标记为可再分发。
- [ ] 外部内容不执行脚本；预览 iframe 隔离。
- [ ] 导入、映射、审核、预览、导出均有测试。
- [ ] README 明确区分已实现、已设计、待实现。

## 9. 本阶段明确不做

- 不直接复制 Awesome 仓库内全部第三方设计资产。
- 不声称对所有网页自动逆向出完整设计系统。
- 不自动下载或再分发商标、字体、图片和品牌素材。
- 不让 AI 自动决定许可状态或未经审核直接发布。
- 不改变当前 20 维、13 节和既有方案 ID。
