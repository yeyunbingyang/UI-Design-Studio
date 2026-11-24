# A3.1 — Schema V2 设计资产标准

本阶段定义 20 维稳定 ID、候选资源索引、资源及方案 JSON Schema、旧 A2 配置迁移器。候选索引不是已实现或已授权资源库；正式渲染器及风格文档生成将在后续阶段完成。

## 数据与 Tokens

原始值 primitive.color.neon-pink、primitive.spacing.8；语义引用 semantic.color.primary、semantic.surface.panel；组件引用 component.button.background、component.button.radius。主题变体置于 modes.light / modes.dark，系统主题由运行环境解析。引用采用明确路径，禁止循环与无效引用。颜色、字体、尺寸、圆角、描边、画布、表面、阴影、特效、图像、图标、布局、导航、密度、组件、可视化、交互、动效分别归对应维度。Style 提供默认选择，Theme 选择模式；不直接写入其他维度的覆盖值。Spacing 定义尺度，Density 引用尺度。所有最终值应带来源记录。

## 兼容规则（实施契约）

| ID | 触发 | 级别 | 处理 |
|---|---|---|---|
| R01 | 资源 ID 或固定版本不存在 | error | 停止解析 |
| R02 | Token 引用循环或缺失 | error | 停止导出 |
| R03 | 文本对比度不足 | warning | 按实际合成背景检测，建议修正 |
| R04 | 小屏布局/导航不兼容 | warning | 使用明确响应式适配 |
| R05 | 组件依赖或数据适配缺失 | error | 阻止无效导出 |
| R06 | 系统减弱动画偏好 | required | 禁用非必要运动 |
| R07 | 未审核的外部许可 | error | 禁止再分发资源 |
| R08 | 候选资源未实现 | warning | 标记不可运行，不声称真实预览 |

规则引擎尚未实现；迁移器仅验证索引和引用，不等同完整 JSON Schema 验证或浏览器验收。资源索引为当前候选枚举，新增资源须更新 schema 或在后续实现动态注册表解析。资源 schema 的 ID 前缀与 dimensionId 一致性、许可及依赖规则需要额外语义校验。

## 迁移及测试

运行 Node.js（建议 20+）：
```sh
node design-system/v2/migrate-v1.test.mjs
```
迁移函数纯计算，不写入本地文件；保留原配置及未知字段，锁定项按拆分映射扩展。旧材质和风格存在耦合，迁移只保留意图，不保证像素一致。后续实现完整 schema validator、解析器和 Chromium 测试。
