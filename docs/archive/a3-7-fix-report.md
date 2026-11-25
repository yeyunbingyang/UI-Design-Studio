# A3.7 修复与复验记录

首次 CI Run #1：92/93 通过，90 项三视口渲染全部通过；搜索收藏及方案往返通过。唯一失败为组件综合测试的空表单错误信息断言。日志显示预期“请输入名称”，实际为空。根据源码，sandbox 仅允许脚本，不允许表单提交，这是可能根因。

修复：预览按钮改为 type=button，直接触发本地校验，Enter 键复用同一逻辑并检查 isComposing；保留 sandbox=allow-scripts。增加 aria-invalid、清除错误及 Enter 回归断言。提交 782c58a 与 13d2d55。修复尚待真实 CI 确认。

首次报告：https://github.com/yeyunbingyang/UI-Design-Studio/actions/runs/45367498304
最新复验：https://github.com/yeyunbingyang/UI-Design-Studio/actions/runs/45368032811
查询状态：in_progress；结论：尚无

视觉基线仍需人工审核，不把通过渲染检查等同于视觉审美、完整无障碍或授权验收。
