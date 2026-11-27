# Backend Business Modules

所有业务模块属于同一个 FastAPI 服务，不拆分为独立服务。

模块边界：dashboard、styles、design_systems、pages、components、motions、sources、research、ai、settings。每个模块按实际复杂度逐步增加 router、schemas、models、repository 和 service。跨模块流程放在 services 层，数据库访问通过 repositories 统一管理。
