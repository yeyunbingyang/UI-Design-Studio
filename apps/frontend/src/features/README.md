# Frontend Features

业务界面按功能域组织，所有 Feature 运行在同一个 React 应用和共享 Shell 中。

规划模块：
- dashboard：工作台概览。
- style-explorer：视觉风格发现、筛选和比较。
- design-systems：DESIGN.md、Token、版本和预览。
- page-library：页面案例和布局模式。
- component-library：组件目录、源码和交互演示。
- motion-library：动效目录和预览。
- source-center：外部来源和许可证管理。
- research-center：研究任务、证据和结论。
- ai-workspace：AI 研究、规范生成和设计审查。
- settings：系统配置、存储和集成。

页面入口位于 app 路由；Feature 负责自身的业务组件、hooks、状态和局部 API 协作。
