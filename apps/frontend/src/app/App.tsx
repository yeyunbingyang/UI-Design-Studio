import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import {
  Activity, Archive, Atom, BookOpen, Boxes, Compass, FileStack,
  LayoutDashboard, Library, Search, Settings, Sparkles, WandSparkles,
} from "lucide-react";

const navigation = [
  { label: "工作台", path: "/", icon: LayoutDashboard },
  { label: "设计风格", path: "/styles", icon: Compass },
  { label: "设计规范", path: "/design-systems", icon: BookOpen },
  { label: "页面设计库", path: "/pages", icon: FileStack },
  { label: "组件资源库", path: "/components", icon: Boxes },
  { label: "动效资源库", path: "/motions", icon: Activity },
  { label: "来源中心", path: "/sources", icon: Archive },
  { label: "研究中心", path: "/research", icon: Library },
  { label: "AI 工作区", path: "/ai", icon: WandSparkles },
];

const modules = [
  ["设计风格", "探索视觉语言、风格特征与适用场景", "/styles"],
  ["设计规范", "浏览 DESIGN.md、Token 与 HTML 预览", "/design-systems"],
  ["页面设计库", "沉淀页面类型、信息架构与布局模式", "/pages"],
  ["组件资源库", "发现可复用组件、实现代码与交互演示", "/components"],
  ["动效资源库", "研究微交互、转场、背景与高级动效", "/motions"],
  ["来源中心", "管理网站、GitHub 项目、许可证与采集记录", "/sources"],
  ["研究中心", "跟踪研究任务、证据、分析和结论", "/research"],
  ["AI 工作区", "辅助研究、生成规范和检查设计维度", "/ai"],
];

function Shell() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><Atom size={19} /></div>
          <div><strong>DesignForge</strong><span>YEYUNBY DESIGN PLATFORM</span></div>
        </div>
        <div className="nav-caption">WORKSPACE</div>
        <nav className="main-nav">
          {navigation.map(({ label, path, icon: Icon }) => (
            <NavLink key={path} to={path} end={path === "/"}>
              <Icon size={17} strokeWidth={1.8} /><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <NavLink to="/settings"><Settings size={17} /><span>系统设置</span></NavLink>
          <div className="local-status"><i />本地工作区</div>
        </div>
      </aside>
      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb">DesignForge <span>/</span> 设计研究平台</div>
          <div className="top-actions"><span className="version">DEV · 0.1.0</span><button className="icon-button" aria-label="搜索"><Search size={18} /></button></div>
        </header>
        <section className="page-content"><Outlet /></section>
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <div className="hero">
        <div className="eyebrow"><Sparkles size={14} /> DESIGN KNOWLEDGE WORKSPACE</div>
        <h1>把优秀设计，<em>变成可复用的能力。</em></h1>
        <p>研究视觉风格、设计规范、页面结构、组件与动效，建立人和 AI 都能使用的设计知识库。</p>
        <div className="hero-meta"><span><i />统一设计资源平台</span><span>React · Python · SQLite</span></div>
      </div>
      <div className="section-heading"><div><span className="eyebrow">EXPLORE THE LIBRARY</span><h2>探索设计资源</h2></div><span className="section-note">统一入口 · 模块化组织</span></div>
      <div className="module-grid">
        {modules.map(([title, description, path], index) => (
          <NavLink className="module-card" to={path} key={path}>
            <div className="card-index">0{index + 1}</div>
            <h3>{title}</h3><p>{description}</p><span className="card-link">进入模块 <span>↗</span></span>
          </NavLink>
        ))}
      </div>
      <div className="bottom-note">资源内容由 Markdown、HTML 与文件资产管理，结构化索引由 SQLite 提供。</div>
    </>
  );
}

const pageMeta: Record<string, { title: string; description: string }> = {
  styles: { title: "设计风格探索", description: "按视觉特征发现、比较和预览 UI 风格。" },
  "design-systems": { title: "设计规范库", description: "管理 DESIGN.md、设计 Token、中英文文档与实时样张。" },
  pages: { title: "页面设计库", description: "收集页面案例、页面类型、信息架构和布局模式。" },
  components: { title: "组件资源库", description: "整理基础组件、复合组件、源码实现和交互示例。" },
  motions: { title: "动效资源库", description: "管理微交互、转场、背景效果和高级动效。" },
  sources: { title: "来源中心", description: "登记外部网站、GitHub 项目、许可证与原始来源。" },
  research: { title: "研究中心", description: "管理研究任务、采集证据、分析结果和正式归档。" },
  ai: { title: "AI 工作区", description: "辅助研究、设计规范生成和完整性审查。" },
  settings: { title: "系统设置", description: "管理分类、存储路径、集成、运行状态和系统偏好。" },
};

function ModuleRoute({ moduleKey }: { moduleKey: string }) {
  const meta = pageMeta[moduleKey];
  return (
    <div className="module-placeholder">
      <div className="eyebrow">DESIGNFORGE MODULE</div>
      <h1>{meta.title}</h1><p>{meta.description}</p>
      <div className="placeholder-panel"><strong>模块入口已建立</strong><span>此模块将在后续迭代中接入资源索引、API、详情预览和管理操作。</span></div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Dashboard />} />
        <Route path="styles" element={<ModuleRoute moduleKey="styles" />} />
        <Route path="design-systems" element={<ModuleRoute moduleKey="design-systems" />} />
        <Route path="pages" element={<ModuleRoute moduleKey="pages" />} />
        <Route path="components" element={<ModuleRoute moduleKey="components" />} />
        <Route path="motions" element={<ModuleRoute moduleKey="motions" />} />
        <Route path="sources" element={<ModuleRoute moduleKey="sources" />} />
        <Route path="research" element={<ModuleRoute moduleKey="research" />} />
        <Route path="ai" element={<ModuleRoute moduleKey="ai" />} />
        <Route path="settings" element={<ModuleRoute moduleKey="settings" />} />
      </Route>
    </Routes>
  );
}
