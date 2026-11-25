# 设计资源分类体系 — M4-A

状态：设计草案；不是已实现功能。所有资源采用稳定 ID、中英文名称、标签、版本、来源、许可证及预览入口。

## 12 维资源目录

| ID | 维度 | 二级分类 | 首批候选 |
|---|---|---|---|
| layout | 页面布局 | 页面骨架、内容网格、响应式 | 侧栏、顶栏、三栏、Bento、分屏、沉浸式 |
| navigation | 导航 | 主导航、次级导航、快捷操作 | 折叠侧栏、顶部菜单、图标栏、Dock、面包屑、命令面板 |
| style | 视觉风格 | 视觉语言、默认组合 | 极简、玻璃、Linear-inspired、新拟态、粗野、科技、Apple-inspired、Material、瑞士、Notion-inspired、企业 |
| color | 色彩 | 基础色板、语义色、主题模式 | 商务蓝、莫兰迪、灰阶、紫蓝、暖色、赛博 |
| typography | 字体 | 字族、排版尺度、字重 | 系统字体、Inter+中文黑体、衬线、等宽 |
| components | 组件 | 操作、输入、反馈、数据、容器 | Button、Input、Select、Card、Table、Dialog、Tabs、Toast |
| material | 形状材质 | 表面、轮廓、层次 | 平面、玻璃、柔阴影、硬边框、渐变 |
| icons | 图标 | 图标集、表现形式 | Lucide、Tabler、Phosphor、Material Symbols |
| density | 间距密度 | 间距尺度、控件高度 | 紧凑、标准、宽松 |
| visualization | 数据展示 | 统计、关系、进度、媒体 | 柱状、折线、表格、看板、甘特、图库、时间线 |
| motion | 动效交互 | 状态反馈、转场、拖拽 | 无动画、淡入、滑动、缩放、弹性 |
| assets | 内容素材 | 插图、图片、背景、品牌 | 极简图标、矢量、3D 插画、摄影、抽象渐变 |

Bento 归于布局，同时允许作为预设检索标签。组件实现框架不等于视觉主题。数据展示模式必须适配业务数据结构。

## 通用资源字段

```json
{
  "id": "color.business-blue",
  "dimensionId": "color",
  "nameZh": "商务蓝",
  "nameEn": "Business Blue",
  "version": "1.0.0",
  "schemaVersion": 1,
  "tags": ["dashboard", "enterprise"],
  "parameters": {"primary": "#2563eb"},
  "preview": {"kind": "builtin", "entry": "dashboard"},
  "source": {"kind": "builtin"},
  "license": {"status": "pending-review"},
  "compatibility": {"requires": [], "conflicts": []}
}
```

示例仅为 schema 说明，不代表授权已确认。外部资源需额外记录原始 URL、上游版本、获取日期、归属、许可文本及依赖。不可执行的资源只能以元数据或安全预览形式展示。

## 资源生命周期

候选 → 审核 → 可用 → 废弃。内置资源只读，编辑产生用户副本；升级不覆盖用户修改；按 ID 和版本解析依赖。搜索支持中英文、标签、用途、维度、授权状态；收藏与最近使用独立存储。

## 预设与规则

完整预设引用 12 个维度的资源版本；缺失项使用明确的默认值。建议先内置企业后台、极简知识库、玻璃工作台、暗色开发工具、粗野创意站、科技监控六个示范组合，再扩展至 12 套。对同一布局建立不同颜色、材质、密度组合，用于验证维度独立性。

验收：12 个维度有稳定 ID 与可校验 schema；首批每维至少两种候选；所有可用资源具有可追溯来源，缺失依赖不会静默回退。
