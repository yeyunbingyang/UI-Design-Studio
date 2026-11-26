# yeyunby-designforge

供人和 AI 查阅的 UI 设计参考库。设计资源来自 [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)，按品牌存放在 [design-md/](design-md/) 中。

## 使用方法

在 ToolOrbit 的公共插件中打开 `design-yeyunby-designforge`，或双击 `design-yeyunby-designforge.bat`，通过综合菜单启动 WebUI。独立服务默认使用端口 `28716`，界面提供「退出服务」。运行需要 Python 3.8 或更新版本，使用标准库。菜单日志保存在 `.runtime/logs/`。

也可直接打开 [静态总览](preview.html) 离线浏览。

1. 选择适合目标页面的 `DESIGN.md`。它记录了对应品牌的配色、字体、布局和组件规则。
2. 将文件复制到目标项目根目录。
3. 告诉 AI「先读取根目录的 `DESIGN.md`，按其中的设计规则实现这个页面。内容和功能以项目需求为准。」

[需求文档](PRD.md) · [MIT 许可证](LICENSE)

## 独立维护

在 Designforge 独立仓库检出 `main` 后提交和推送插件改动。ToolOrbit 中的插件安装目录供运行和集成验证使用。运行日志、环境配置和缓存按仓库的忽略规则留在本机。

涉及归档或中文规范时，核对 `research/getdesign-home/index.json` 的 SHA-256，以及总览内嵌的中文下载与 `localized/` 中的文件是否一致。
