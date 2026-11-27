# 如何把 DESIGN.md 写成 HTML 预览

HTML 预览要让读者看见同一套设计规范在页面里的实际表现。先用首屏建立整体风格，再把颜色、排版、组件和布局拆开对照，最后用一两个场景说明它们如何组合。

## 归档范围与实测

2026 年 11 月 27 日采集 getdesign.md 首页「设计系统分析」清单，共 **85 套、255 份原始文件**。每套包含 `DESIGN.md`、`preview.html` 和 `preview-dark.html`。归档索引记录页面地址、响应状态、字节数和 SHA-256。与项目原有的 84 个品牌目录比对，首页新增的一项是 Discord。 [归档索引](index.json) · [getdesign.md 首页](https://getdesign.md/)

| 检查项 | 结果 |
| --- | --- |
| Markdown 文件头 | 77 份带 YAML 文件头，其中 71 份可直接用 PyYAML 解析，6 份存在解析错误。另有 8 份无 YAML 文件头。 |
| HTML 写法 | 170 份都包含视口声明、内联样式、CSS 自定义属性和媒体查询。 |
| 两种模式 | 83 对 HTML 的章节标题与顺序一致。82 对的根变量不同。Framer、HashiCorp、Linear 的两份 HTML 字节完全相同。 |
| 交互 | 170 份都含原生控件，源文件没有脚本标签或 HTML 事件属性。 |
| 外部依赖 | 168 份引用 Google Fonts。170 份引用 github.com 上的资源。 |

Apple 的 Markdown 标为 Apple，两份官方 HTML 使用 Lumora 标题。浅色样张和 Markdown 共享 #0066cc 操作色及摄影展陈式的描述。归档保留了官网当时返回的内容。 [Apple 详情](https://getdesign.md/apple/design-md) · [浅色样张](apple/preview.html)

### 五套样张怎么取舍

| 品牌 | 浅色 / 深色具名区块数¹ | 值得借鉴的安排 |
| --- | --- | --- |
| Notion | 16 / 16 | 先展现纸白、蓝色操作与靛蓝表面，再展示按钮、表单、定价、表格、弹窗、空状态及提示。适合用来研究应用界面的状态表达。 [浅色](notion/preview.html) · [深色](notion/preview-dark.html) |
| Cal.com | 6 / 6 | 围绕排期产品讲解单色操作、Cal Sans 与 Inter 的分工、浅灰功能卡和真实产品界面片段。适合研究克制的产品展示。 [浅色](cal/preview.html) · [深色](cal/preview-dark.html) |
| Airtable | 12 / 12 | 用彩色区块、彩色卡片和文章网格解释内容的节奏，阴影退居其次。适合研究如何用大面积色块区分页面段落。 [浅色](airtable/preview.html) · [深色](airtable/preview-dark.html) |
| Dell 1996 | 20 / 20 | 保留复古的边框、标签和布局语言，再延伸到购物车、应用框架、表格和账号页。适合研究同一种视觉语言在多场景中的延续。 [浅色](dell-1996/preview.html) · [深色](dell-1996/preview-dark.html) |
| Discord | 10 / 10 | 用紫蓝操作色、深靛蓝表面和粗重标题建立风格，从基础词元、组件逐步过渡到定价示例。 [浅色](discord/preview.html) · [深色](discord/preview-dark.html) |

¹ 具名区块指包含 h1–h4 标题的 `section`。这是结构统计，页面中另有试样和说明。

### 原始文件的离线行为

用禁网 Chrome 在 1280px 和 375px 下打开这五套的明暗文件，共 20 次页面走查。全部都能显示首屏。四个品牌的 Google Fonts 均未加载，五个品牌引用的 GitHub 资源均无法离线取得，排版依靠字体回退。五套都可操作原生输入框，抽查的普通按钮点击后都未改变页面内容。Dell 的两个样张在 375px 视口下内容宽度均为 613px，其他四套未出现整页横向溢出。以上是官方样张的原始行为。

## 从规范到页面

1. **先确定对应文件。** 预览与 `DESIGN.md` 应来自同一版本。首页当前的 Notion 文档使用 `#0075de`，项目里已有的 Notion 文档使用 `#5645d4`。预览本地版本时就用紫色，官网蓝色仅作参考。 [归档 Notion 规范](notion/DESIGN.md) · [项目 Notion 规范](../../design-md/notion/DESIGN.md)
2. **把词元按用途映射成 CSS 变量。** 页面底色、正文、主要操作、操作文字、边框和卡片表面各有独立变量。对应 `{colors.primary}` 之类的引用先解析，再应用给组件。遇到 YAML 无法解析或者缺少结构化参数，回到正文查有出处的值。补用演示值时在样张中标明，原文保持可追溯。
3. **用可看见的试样说明规则。** 颜色要有色块、名称、值和用途。字体要用真正的文字排出层级，并标字号、字重、行高、字距。间距用同一比例的长度条，圆角用形状，层次用平面、细边框和抬高表面的对照。
4. **复用同一套样式展示组件状态。** 按钮、链接、徽标、卡片和输入框使用同一组变量。并排展示默认、按下、禁用和聚焦样式。配套说明哪些状态来自规范，哪些是为演示补充的。真实交互使用原生按钮和表单控件，点击后的变化要能看见、能用键盘触发。
5. **用场景检验组合。** 选择能体现品牌特征的产品区块，再加有代表性的组合组件。排期工具适合日期和时段，内容平台适合列表和卡片，工具型产品适合表格、表单或弹窗。用明确的演示数据，避免把虚构套餐和价格读成产品事实。
6. **明暗和响应式都要实际检查。** 明暗变体优先共用组件结构，分别定义背景、文字、边框和操作色。缺少正式暗色词元时标注「衍生深色样张」。规范中描述的断点与 HTML 自己实现的断点分别记录。在 375px 检查排版、控件和表格。允许表格容器独立滚动，避免整页横向溢出。

## 原创离线 HTML 骨架

将下方代码保存为 `preview.html` 即可运行。使用本机字体，无外部依赖。所有词元和业务内容均为演示，接入品牌时逐项改为该版本的真实值。

```html
<!doctype html>
<html lang="zh-CN">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>研究工作区 · 设计样张</title>
<style>
  /* 演示词元。接入规范时记录每个变量对应的原文词元。 */
  :root {
    color-scheme: light;
    --canvas: #fbfaf8; --surface: #fff; --ink: #202728;
    --primary: #24564e; --on-primary: #fff; --line: #c8d0cb;
    --step: 8px; --radius: 10px; --lift: 0 6px 18px #0002;
  }
  [data-theme="dark"] {
    color-scheme: dark;
    --canvas: #16211f; --surface: #21312d; --ink: #eaf1ed;
    --primary: #a9d7c8; --on-primary: #172822; --line: #5c746c;
    --lift: 0 6px 18px #0008;
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--canvas); color: var(--ink);
         font: 1rem/1.6 system-ui, sans-serif; }
  main { width: min(62rem, calc(100% - 32px)); margin: 32px auto; }
  header, section { margin-bottom: calc(var(--step) * 4); }
  h1 { font-size: clamp(2rem, 5vw, 3rem); line-height: 1.1; }
  .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  article, dialog { padding: 16px; border: 1px solid var(--line);
    border-radius: var(--radius); background: var(--surface); color: var(--ink); }
  dialog { width: min(28rem, calc(100% - 32px)); box-shadow: var(--lift); }
  dialog::backdrop { background: #1119; }
  button { padding: 8px 14px; min-height: 44px; border: 1px solid var(--line);
    border-radius: var(--radius); color: var(--ink); background: var(--surface); font: inherit; }
  .primary { background: var(--primary); color: var(--on-primary); }
  .primary:active { box-shadow: inset 0 0 0 2px currentColor; }
  button:disabled { opacity: .55; }
  :focus-visible { outline: 2px solid var(--primary); outline-offset: 3px; }
  .swatch { background: var(--primary); height: 32px; border-radius: var(--radius); }
  @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
</style>
<main>
  <header>
    <button type="button" id="theme" aria-pressed="false">深色样张</button>
    <h1>研究工作区</h1>
    <p>用同一套词元组织资料卡与操作状态。样式和内容均为演示。</p>
  </header>
  <section aria-labelledby="foundation">
    <h2 id="foundation">基础词元</h2>
    <div class="grid">
      <article><div class="swatch" aria-hidden="true"></div>
        <p>主要操作色 <code id="color">#24564e</code></p></article>
      <article><strong>排版、间距和圆角</strong>
        <p>正文 16px / 1.6，间距基准 8px，卡片圆角 10px。</p></article>
    </div>
  </section>
  <section aria-labelledby="scene">
    <h2 id="scene">场景与状态</h2>
    <div class="grid">
      <article><h3>资料待归档</h3><button type="button" class="primary" id="open">归档资料</button></article>
      <article><h3>暂无可整理资料</h3><button type="button" disabled>归档资料</button></article>
    </div>
    <p id="result" role="status"></p>
  </section>
  <dialog id="confirm" aria-labelledby="confirm-title">
    <h2 id="confirm-title">确认归档这份示例资料？</h2>
    <form method="dialog"><button value="cancel" autofocus>取消</button>
      <button value="confirm" class="primary">确认归档</button></form>
  </dialog>
</main>
<script>
  const page = document.documentElement;
  const theme = document.querySelector('#theme');
  const color = document.querySelector('#color');
  const dialog = document.querySelector('#confirm');
  const openButton = document.querySelector('#open');
  const result = document.querySelector('#result');
  theme.onclick = () => {
    const dark = page.dataset.theme !== 'dark';
    page.dataset.theme = dark ? 'dark' : 'light';
    theme.setAttribute('aria-pressed', String(dark));
    color.textContent = getComputedStyle(page).getPropertyValue('--primary').trim();
  };
  openButton.onclick = () => { dialog.returnValue = 'cancel'; dialog.showModal(); };
  dialog.onclose = () => {
    result.textContent = dialog.returnValue === 'confirm' ? '示例已归档。' : '已取消。';
    openButton.focus();
  };
</script>
</html>
```

### 验收例子

- 在桌面与 375px 手机宽度打不开网络时，页面仍应可读，栅格从双列变单列。
- 切换深色样张后，底色、文字、卡片、按钮和色块一起变化，色块旁同步显示 `#a9d7c8`。
- 用键盘打开「归档资料」，焦点进入弹窗。按 Esc 取消后焦点回到原按钮。确认后出现「示例已归档」反馈。
- 换用品牌数据后，抽查一个色块、一个字体层级、一个组件状态和一个场景。每个都应能追溯到规范中的词元、正文规则或明确标注的演示值。
