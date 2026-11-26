# 插件开发约定

运行界面使用静态 HTML、JavaScript 和 Python 标准库。总览入口为 `preview.html`，WebUI 入口与菜单位于 `script/`。中文规范、样张与章节导航的生成工具位于 [script/authoring/](script/authoring/)，逐页审查记录位于 [docs/](docs/)。

归档原件及 SHA-256 索引保存在 `research/getdesign-home/`。官网资料的本地中文产物保存在 `localized/`，项目自带的本地设计参考保存在 `design-md/`。更新中文产物时，按照生成工具和项目技能修改源文规则。

新增注释和文档用中文，代码标识符用英文。修改界面时同步 [DESIGN.md](DESIGN.md) 和 [COMPONENTS.md](COMPONENTS.md)。行为变化同步 [PRD.md](PRD.md)。发布前验证本机访问、品牌详情、下载、内嵌响应头和服务退出。

编写或校订设计规范、制作 HTML 样张时，使用本插件内的 [designforge-authoring 技能](.agents/skills/designforge-authoring/SKILL.md)。
