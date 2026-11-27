# 网页采集插件协作约定

- Node.js 24、npm 和 Playwright Chromium。改动后运行 `npm run build` 和 `npm test`。
- 源码、锁文件和入口随私有插件仓库维护。采集内容、SQLite、浏览器和构建输出留在本机。
- 采集请求通过 `backend/network.ts` 转发，测试站地址映射仅存在于测试中。原始档案不通过预览路由提供。
- 变更时同步 [需求](PRD.md)、[界面](DESIGN.md) 和 [实现说明](COMPONENTS.md)。
