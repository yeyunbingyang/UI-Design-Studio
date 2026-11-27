# Applications

apps/ 只承载统一平台的两个运行工程：

- frontend：React + TypeScript + Vite，负责全部平台页面与交互。
- backend：Python + FastAPI，负责全部 API、业务逻辑和 SQLite 数据访问。

不在 apps 下按业务模块创建独立 App 或微服务。设计风格、规范、页面、组件、动效、来源、研究、AI 和系统设置均属于同一个平台。
