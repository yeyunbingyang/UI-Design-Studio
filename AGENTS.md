# 插件开发约定

本项目使用静态 HTML、JavaScript 和 Python 标准库。总览入口为 `preview.html`，WebUI 入口与菜单位于 `script/`。归档原件保存在 `research/getdesign-home/`，中文样张在 `localized/`。

新增注释和文档用中文，代码标识符用英文。修改界面时同步 [DESIGN.md](DESIGN.md) 和 [COMPONENTS.md](COMPONENTS.md)。行为变化同步 [PRD.md](PRD.md)。发布前验证本机访问、品牌详情、下载、内嵌响应头和服务退出。

编写或校订设计规范、制作 HTML 样张时，使用本插件内的 [designforge-authoring 技能](.agents/skills/designforge-authoring/SKILL.md)。
