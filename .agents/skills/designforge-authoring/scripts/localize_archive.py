"""从官网归档生成离线中文样张及中英文对照文档。"""

import argparse
import base64
import hashlib
import html
import json
from pathlib import Path
import re
import sqlite3

from bs4 import BeautifulSoup, NavigableString
import bleach
import markdown
from design_literals import DesignLiterals
from preview_copy import PreviewEditor, remove_team_credit
from sample_editorial import DEMO_SPECS, ONE_WIN_COPY, REVIEWED_DOCUMENT_COPY, SAMPLE_FIT_CSS
from sample_overviews import DARK_OVERVIEWS, OVERVIEWS
from platform_examples import PLATFORM_BY_BRAND, apply_platform_examples, platform_targets
from translation_review import CONNECTIVES, TranslationReview


ROOT = Path(__file__).resolve().parents[4]
ARCHIVE = ROOT / "docs" / "sources" / "research" / "getdesign-home"
LOCALIZED = ROOT / "localized"
INDEX = ARCHIVE / "index.json"
SAMPLE_FILES = ("preview.html", "preview-dark.html")
GLOSSARY = {
    "Design System Analysis": "设计系统分析", "Overview": "概览",
    "Color Palette": "配色", "Colors": "配色", "Typography": "字体排版",
    "Typography Scale": "字号层级", "Foundations": "设计基础", "Layout": "布局",
    "Foundation": "设计基础", "Brand & Accent": "品牌色与强调色",
    "Cards & Containers": "卡片与容器", "Signature Components": "标志性组件",
    "Inputs & Forms": "输入框与表单", "Examples (illustrative)": "组合示例",
    "Do": "建议做法", "Don't": "应避免的做法", "Photography Geometry": "图片形状",
    "Surface": "界面表面", "Text": "文字颜色", "Semantic": "语义色",
    "Font Family": "字体族", "Hierarchy": "字号层级", "Principles": "原则",
    "Note on Font Substitutes": "替代字体", "Grid & Container": "网格与容器",
    "Whitespace Philosophy": "留白规则", "Responsive Strategy": "响应式布局",
    "Breakpoints": "断点", "Collapsing Strategy": "窄屏布局调整", "Image Behavior": "图片适配",
    "Spacing Scale": "间距层级", "Border Radius": "圆角", "Border Radius Scale": "圆角层级",
    "Elevation & Depth": "层次与深度", "Responsive Behavior": "响应式布局",
    "Components": "组件", "Button Variants": "按钮样式", "Buttons": "按钮",
    "Cards & Surfaces": "卡片与表面", "Form Elements": "表单控件",
    "Pricing Tiers": "定价分级", "Product Selector": "产品选项", "Data Table": "数据表格",
    "Auth Forms": "账号表单", "Modal Dialog": "模态弹窗", "Empty State": "空状态",
    "Toast Stack": "消息提示", "Shopping Cart": "购物车", "App Shell": "应用框架",
    "Known Gaps": "已知缺口", "Iteration Guide": "迭代指南", "Shapes": "形状",
    "Primary": "主要", "Secondary": "次要", "Active": "选中", "Pressed": "按下",
    "Disabled": "禁用", "Default": "默认", "Hover": "悬停", "Focus": "焦点",
    "Get started": "开始使用", "Sign in": "登录", "Sign up": "注册",
    "Cancel": "取消", "Confirm": "确认", "Close": "关闭", "Search": "搜索",
    "Save": "保存", "Select": "选择", "Next": "下一步", "Previous": "上一步",
    "Starter": "入门版", "Pro": "专业版", "Team": "团队版", "Enterprise": "企业版",
    "Success": "成功", "Warning": "警告", "Error": "错误", "Info": "信息",
    "Mobile": "手机", "Tablet": "平板", "Desktop": "桌面", "Laptop": "笔记本",
    "Dashboards": "仪表板", "Dashboard": "仪表板", "Settings": "设置",
    "Plans and features": "套餐与功能", "Form": "表单", "Input": "输入框",
    "Card Examples": "卡片试样", "Badge Pastels": "浅彩徽标",
    "Monochrome with badge pastels": "单色界面与浅彩徽标",
    "Black on white, monochrome action layer": "白底黑字的单色操作层",
    "Light gray feature cards + product UI fragments": "浅灰功能卡与产品界面片段",
    "Pro Plan, Annual": "专业版 · 年付", "Welcome back.": "欢迎回来",
    "Start building.": "开始创作", "Touch Targets": "触控区域",
    "Do's and Don'ts": "设计建议与禁忌", "Color Palette & Roles": "配色与颜色用途",
    "Visual Theme & Atmosphere": "视觉主题与风格", "Typography Rules": "字体排版规则",
    "Layout Principles": "布局原则", "Component Stylings": "组件样式",
    "Get Notion free": "免费使用 Notion", "Request a demo": "申请演示",
    "Photography-first. Interface-invisible.": "摄影优先，让界面退居幕后。",
    "A warm, paper-calm productivity system: an off-white canvas under near-black Inter type, structured by a single confident blue. A playful multi-colour sticker palette carries the personality while the chrome stays quiet — with one inverted deep-indigo hero band.": "纸白背景与近黑色 Inter 字体营造安静的阅读氛围，鲜明的蓝色标记主要操作。多彩贴纸增添活力，界面控件保持克制，深靛蓝首屏以反色形成对比。",
    "A clean, calendar-software-first interface anchored on white canvas with black primary CTAs and custom Cal Sans display typography. Friendly modern SaaS, generous whitespace, soft-rounded cards.": "围绕日历预约设计，白色画布、黑色主按钮和 Cal Sans 展示标题构成清爽的界面。充足的留白和柔和的卡片圆角体现亲切的现代软件风格。",
    "A near-black crypto casino and sportsbook where two action colors carry everything — a vivid green for Registration and primary confirms, an electric blue for secondary actions and live betting. Inter is set at heavy weights, the surface ladder is a flat dark grey, and dense rails of full-bleed game tiles supply all the colour.": "近黑色的游戏和赛事界面使用两种操作色：鲜绿用于注册和主要确认，电蓝用于次要操作和实时赛事。粗字重 Inter 和深灰表面构成界面基础，密集的通栏游戏卡片提供其他色彩。",
    "A loud, playful gaming-native system on a deep-indigo canvas lit by Blurple, electric green, and vibrant magenta gradients. Heavy all-caps ABC Ginto Nord display shouts over generously rounded media and full-bleed colour bands.": "深靛蓝画布上使用品牌蓝紫、电光绿和鲜亮洋红渐变，呈现活泼的游戏社区风格。ABC Ginto Nord 粗体大写标题搭配大圆角媒体和通栏色带。",
    "Discord's native dark system — a deep-indigo canvas lit by an animated Blurple-to-magenta gradient mesh, heavy all-caps ABC Ginto Nord display, electric-green CTAs, and generously rounded media.": "Discord 的原生深色系统用深靛蓝画布衬托蓝紫到洋红的动态渐变网格，配以 ABC Ginto Nord 粗体大写标题、电光绿行动按钮和大圆角媒体。",
}
BRANDS = (
    "Cal.com","Notion","Discord","GitHub","getdesign.md","VoltAgent","Lumora","1win",
    "Airtable","Tesla","Dell","Nintendo","Adobe","Apple","Netflix","Microsoft","Airbnb",
    "Al Jazeera","Binance","BMW M","BMW","Bugatti","Claude","Clay","ClickHouse","Cohere",
    "Coinbase","Composio","Cursor","DJI","ElevenLabs","Expo","Ferrari","Figma","Framer",
    "HashiCorp","HP","IBM","Intercom","Jobright","Kraken","Lamborghini","Linear","Lovable",
    "Mastercard","Mercury","Meta","MiniMax","Mintlify","Miro","Mistral AI","MongoDB","mydealz",
    "NerdWallet","Nike","NVIDIA","Ollama","OpenCode","Oracle","Oura","Pinterest","PlayStation",
    "PostHog","Raycast","Renault","Replicate","Resend","Revolut","Runway","Sanity","SAP",
    "Sentry","Shopify","Slack","SpaceX","Spotify","Starbucks","Stripe","Supabase","Superhuman",
    "The Verge","Together AI","Uber","Vercel","Vodafone","Warp","Webflow","WIRED","Wise","xAI",
    "Zapier","Cal Sans","NotionInter","Notion Sans","SF Pro","JetBrains Mono","Inter","Roboto",
    "Haas Grotesk","Geist","Inter Display",
)
BRAND_PATTERN = r"\b(?:" + "|".join(map(re.escape,sorted(BRANDS,key=len,reverse=True))) + r")\b"
IDENTIFIER = re.compile(r"[a-zA-Z]+(?:[-_][\da-zA-Z]+){1,6}")
TOKEN_NAMES = set()
INVARIANT = re.compile(
    r"`[^`\n]+`|(?:https?://|mailto:)[^\s<>)]+|[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,}"
    r"|\{[\w.-]+\}|#[\da-fA-F]{3,8}\b|(?:rgba?|hsla?)\([^)]+\)"
    r"|" + BRAND_PATTERN +
    r"|[¥$€]?[+−-]?\d+(?:[.,/]\d+)*(?:px|r?em|vh|vw|ms|%|pt|s)?"
    r"|\b[a-zA-Z]+(?:[-_][\da-zA-Z]+){1,6}\b"
    r"|\[[^\]]*\]\([^)]*\)|</?[a-zA-Z][^>]*>"
    r"|\|+|\*\*|__|(?<!\w)\*|\*\s",
    re.IGNORECASE,
)
ENGLISH = re.compile(r"[a-zA-Z]{2,}")
SPLIT_SENTENCES = re.compile(r"(?<=[.!?;])\s+(?=[A-Z“\u201c])")
TRANSLATABLE_ATTRIBUTES = ("title","alt","placeholder","aria-label","aria-description")
EXCLUDE_TAGS = {"style","script","code","pre","kbd","samp","svg","path"}
TERM_FIXES = (("代币","词元"),("令牌","词元"),("排印","排版"),("引导行动","行动按钮"),
              ("按钮变量","按钮变体"),("头版","首屏"))

DOCUMENT_TERMS = (
    (r"\b(?:hero|masthead)\b",r"英雄|英豪","首屏"),
    (r"\bpills?\b",r"药丸|药片|药瓣","胶囊形"),
    (r"\bhairline\b",r"发线|发丝线","细边线"),
    (r"\bcanvas\b",r"帆布|画布","页面底色"),
    (r"\bfooter\b",r"脚尖|脚印|脚底","页脚"),
    (r"\bweight\b",r"体重|重量","字重"),
    (r"\baccents?\b",r"小口音|口音|点心|重音","强调色"),
    (r"\bbrand (?:voltage|energy)\b",r"品牌电压|品牌电流","品牌辨识度"),
    (r"\b(?:call.to.action|ctas?)\b",r"(?:行动|呼吁)委员会","操作按钮"),
    (r"\b(?:dealer|dealership)\b",r"毒贩|交易商","经销商"),
)
UNRELIABLE_DOCUMENT_COPY = re.compile(
    r"[⁇�▁]|[_+=*?!]{24,}|毒贩|品牌电压|品牌电流|药丸|人文主义圣人|小口音|英雄|发线|帆布"
    r"|脚尖|脚印|行动委员会|上楼|卡丁鱼"
)
REPEATED_DOCUMENT_COPY = re.compile(r"([\u4e00-\u9fff]{2,12})(?:[，,。 ]*\1){2,}")
DOCUMENT_EDITORIAL = {
    '''Warp is an "agentic development environment" — a terminal application that wraps an AI agent — and its marketing site mirrors the product's posture: a single dark band running the entire page, warmer than pure black (`{colors.canvas}` `#2b2622` carries a hint of brown-beige from the brand's oklch-defined warmth value), with copy set almost entirely in Inter. The page reads more like a developer's reading-mode editor than a marketing surface.''':
        "Warp 是集成 AI 代理的终端开发环境。营销页使用贯穿页面的暖深色背景，底色 `{colors.canvas}`（`#2b2622`）在 oklch 色彩体系中带轻微褐色倾向。文字主要采用 Inter，阅读体验接近开发者编辑器的阅读模式。",
    "The decoration is restrained. Two terminal screenshots open the hero (split between the two main product modes — agent + terminal). A partner-logo strip (Anthropic / OpenAI / Google / Stanford) sits below the hero on a slightly warmer tile surface. A single testimonial card with a portrait photograph. A press-coverage list. Then the page closes with download tiles for Mac / Linux / Windows. There is no gradient, no atmospheric backdrop, no illustration system.":
        "装饰保持克制。首屏用两张截图分别展示代理与终端模式，下方以偏暖的表面承载合作伙伴标识（Anthropic / OpenAI / Google / Stanford）。随后是带肖像的推荐语和媒体报道列表，页尾提供 Mac / Linux / Windows 下载卡片。页面主要依靠终端截图和产品信息呈现内容。",
    "Type is the second decisive voice. Hero display sits at 64 px Inter weight 400 with `-1.6px` tracking — restrained for a hero, deliberately quiet. The brand carries DM Mono as its monospace face for code blocks, and Instrument Serif italics occasionally appear for editorial moments. Body text is 16 px Inter at line-height 1.5, very readable.":
        "首屏采用 64 px 的 Inter，400 字重，字距为 `-1.6px`。代码块用等宽字体 DM Mono（monospace），部分编辑式文字使用 Instrument Serif 斜体。正文为 16 px 的 Inter，line-height 为 1.5。",
    '''A single primary "color" — really an off-white `{colors.primary}` (`#f7f5f0`) — that doubles as text on canvas and as the button-primary fill. There is no chromatic brand accent.''':
        "暖白主色 `{colors.primary}`（`#f7f5f0`）同时用于页面文字和 button-primary 底色，承担整套界面的强调角色。",
    "Warm dark canvas (`{colors.canvas}` `#2b2622`) is the only page surface. The brand's defining tone is the brown-warmth, not pure black.":
        "页面使用偏褐的暖深底 `{colors.canvas}`（`#2b2622`），形成统一的品牌基调。",
    "Extremely tight button radii — 3 / 4 px (1 / 2× the brand's `{rounded.md}` 4 px base) — the brand never uses generous pill shapes for CTAs. Only icon containers use `{rounded.full}`.":
        "按钮使用小圆角 3 / 4 px。原文记载其比例为 1 / 2×，并列出 `{rounded.md}` 的基准值 4 px。全圆角 `{rounded.full}` 用于图标容器。",
    "Inter sans + DM Mono mono is the canonical pairing. Instrument Serif appears as a third editorial face for occasional italics.":
        "无衬线 Inter 和等宽 DM Mono 是基础字体组合，Instrument Serif 偶尔以斜体用于编辑式排版。",
    "Terminal-mockup imagery is the brand's only consistent decorative system — no gradients, no atmospheric overlays.":
        "终端界面示意是贯穿页面的主要视觉素材。",
    "A subtle warm tint runs through every neutral; even body text and dividers carry a hint of warmth rather than neutral gray.":
        "中性色统一略偏暖，正文和分隔线也保留这一色调。",
    '''**Off White Primary** (`{colors.primary}` — `#f7f5f0`): The brand's "primary" is a warm off-white. Used as button-primary fill, as default text on canvas, as the wordmark color. There is no chromatic brand accent — the off-white IS the brand's distinguishing tone.''':
        "**暖白主色**（`{colors.primary}`，`#f7f5f0`）用于 button-primary 底色、页面默认文字和品牌字标，承担品牌识别。",
    "**Canvas** (`{colors.canvas}` — `#2b2622`): The warm dark page background. Resolved from `oklch(22.0% 0.004 84.6)`. Slightly browner than pure black, slightly warmer than a neutral gray — the warmth IS the brand's identity.":
        "**页面底色**（`{colors.canvas}`，`#2b2622`）由 `oklch(22.0% 0.004 84.6)` 换算，呈略偏褐的暖深色。",
    "**Canvas Soft** (`{colors.canvas-soft}` — `#383330`): A lighter warm-dark fill used for cards, mockup chrome, and partner-logo tiles.":
        "**柔和深底**（`{colors.canvas-soft}`，`#383330`）用于卡片、界面示意的外框及合作伙伴标识图块。",
    "**Hairline** (`{colors.hairline}` — `#3f3a36`): 1 px solid divider on dark surfaces.":
        "**细分隔线**（`{colors.hairline}`，`#3f3a36`）用于深色表面的 1 px 实线。",
    "**Ink** (`{colors.ink}` — `#f7f5f0`): Default text on canvas — same off-white as the primary, intentionally unified.":
        "**主文字色**（`{colors.ink}`，`#f7f5f0`）用于页面默认文字，与暖白主色一致。",
    "**Body Strong** (`{colors.body-strong}` — `#dad2c1`): Mid-emphasis body text.":
        "**强调正文色**（`{colors.body-strong}`，`#dad2c1`）用于中等强调的正文。",
    "**Body** (`{colors.body}` — `#c9c0ad`): Secondary body text — captions, supporting copy, press-coverage rows.":
        "**次级正文色**（`{colors.body}`，`#c9c0ad`）用于图注、辅助说明和媒体报道列表。",
    "**Mute** (`{colors.mute}` — `#aea69c`): Lowest-priority text — timestamps, fine print, footer secondary lines. Resolved from `oklch(71.5% 0.008 84.6)`.":
        "**弱文字色**（`{colors.mute}`，`#aea69c`）由 `oklch(71.5% 0.008 84.6)` 换算。用于时间戳、小字和页脚次要内容。",
    "The brand doesn't surface a separate error / warning / success palette in its marketing pages. Validation cues come from the unified off-white system; in-product semantic colors live in the terminal application proper.":
        "营销页的校验提示沿用统一的暖白色。错误、警告和成功等语义色由终端应用内部定义。",
    'SF Pro Display + SF Pro Text — negative letter-spacing at display sizes for the signature "Apple tight" headline feel.':
        "使用 SF Pro Display 和 SF Pro Text。大字号标题采用负的 letter-spacing，呈现 Apple 标志性的紧凑字距。",
    "If Haas Groot Disp and Haas Grotesk are unavailable, **Inter Display** (variable) is the closest open-source substitute for both — adjust line-height down by ~5% to match Haas's tighter cap-height. For the pricing sub-system, use Inter Display directly. On macOS / iOS, **system-ui** is sufficient; on Windows, the chain falls through to Segoe UI, which is a usable but slightly cooler substitute.":
        "若缺少 Haas Groot Disp 和 Haas Grotesk，可用开源可变字体 **Inter Display** 替代。将 line-height 下调 ~5%，使排版更接近 Haas 较紧凑的大写字母高度。定价区直接使用 Inter Display。macOS / iOS 可使用 **system-ui**。Windows 会回退到 Segoe UI，视觉风格略偏冷。",
}

SUMMARIES = dict(line.split("|",1) for line in """1win|近黑色界面用鲜绿色标记注册与主要确认，电光蓝用于登录、链接和实时投注提示。
airbnb|以房源摄影为视觉主角，白色界面、珊瑚红按钮和圆润卡片构成温暖的旅行体验。
airtable|白底与深色文字形成清晰的编辑式界面，鲜明色块用于区分功能和内容。
aljazeera|密集排布的新闻版面采用醒目标题、平面表面与橙色品牌强调。
apple|大幅产品摄影在明暗表面间交替，克制的蓝色标记可操作内容。
binance|以高密度交易界面为背景，强调黄突出操作与关键信息。
bmw|浅色页面搭配企业蓝主按钮，深海军蓝区块衬托汽车摄影。
bmw-m|纯黑画布、M 系列三色条纹和大幅赛车摄影营造运动感。
bugatti|以近黑背景、宽字距的大写标题和通栏摄影呈现豪华汽车。
cal|白色画布、黑色主操作和 Cal Sans 展示字体构成清爽的日程预约界面。
claude|暖米色背景、陶土色主按钮和编辑式排版营造安静亲切的阅读体验。
clay|饱和的单色功能卡与黏土风插图呈现产品能力，画面活泼而有层次。
clickhouse|黄色重点标记与直观的技术文档布局适合展示数据库产品。
cohere|白色编辑式画布配深绿黑产品区块，保持简洁和技术感。
coinbase|信任导向的金融界面以白底、蓝色操作和易读的表面层级为核心。
composio|近黑表面和电蓝色强调组织集成功能，布局紧凑而清晰。
cursor|暖白色页面、橙色重点和产品界面截图构成克制的编辑式布局。
dell-1996|黑色页框、色块条带、粗体标题与衬线正文还原九十年代目录风格。
discord|深靛蓝表面结合紫蓝操作色和厚重标题，突出聊天及社区功能。
dji|以影棚摄影和冷静的产品卡突出设备，蓝色胶囊按钮承接操作。
elevenlabs|暖白编辑式背景搭配浅色渐变球体，突出声音产品的质感。
expo|以纯白画布、天蓝渐变和黑色主按钮展示开发者工具。
ferrari|用强烈的黑白对比、少量法拉利红和大幅摄影突出汽车。
figma|黑白编辑式框架配浅彩区块，用颜色组织协作设计产品的不同功能。
framer|蓝黑对比、展示型排版和动效导向的页面突出网站创作能力。
hashicorp|近黑画布与产品专属强调色组织基础设施工具和技术内容。
hp|白色画布、亮蓝色和棱角图形构成易读的设备产品目录。
ibm|基于 Carbon 的结构化网格和企业蓝，面向大型产品与信息密集界面。
intercom|暖白色页面以 Fin 橙作重点，突出客户支持与客服助手。
jobright|春日薄荷色背景配黑色胶囊按钮，界面轻快而直接。
kraken|白色表面与醒目的品牌紫构成面向交易场景的视觉层级。
lamborghini|纯黑表面、金色重点和大写标题衬托高性能汽车。
linear.app|近黑表面、细边框和克制的淡紫色强调，呈现精密的项目管理界面。
lovable|纸张般的奶油色底与温和的强调色，形成低噪的界面。
mastercard|奶油色底、环形图案和圆润操作按钮构建亲切的金融视觉语言。
mercury|墨紫色深底与靛蓝按钮构成冷静、简洁的金融产品界面。
meta|以摄影为主，明暗表面与蓝色操作突出内容而保留清晰导航。
minimax|白底、黑色胶囊按钮和鲜亮渐变卡片用于组织模型和产品展示。
mintlify|绿色强调、清晰层级和克制布局服务于面向阅读的技术文档。
miro|明黄色点缀结合画布和卡片，强调可视化协作。
mistral.ai|落日渐变、暖奶油色画布和橙色按钮形成鲜明的模型平台风格。
mongodb|品牌绿、清晰的开发者排版和技术内容卡构成数据平台页面。
mydealz|紧凑的交易信息流结合冷热反馈、投票及状态标签。
nerdwallet|深云杉绿、薄荷色表面与直观的信息对照服务于个人金融内容。
nike|单色表面、大型粗体标题与通栏产品摄影突出运动品牌。
nintendo-2001|长春花蓝的金属面板、琥珀色导航和像素风图形体现千禧年游戏机质感。
notion|纸白底和近黑色排版保持安静，用蓝色主操作和彩色贴纸区分重点。
nvidia|绿色强调与深色背景突出高性能计算、产品和技术信息。
ollama|终端式排版与单色表面，用简洁的组件呈现本地模型工具。
opencode.ai|暖奶油色背景和等宽字体，形成面向终端工作流的编辑式布局。
oracle|暖中性色层次搭配炭黑操作，支持企业软件内容的清晰组织。
oura|暖纸色表面和衬线排版强调柔和、克制的可穿戴设备体验。
pinterest|红色操作与图片优先的瀑布流网格服务于视觉发现。
playstation|多层表面、克制的标题与青色操作组织游戏和主机零售内容。
posthog|暖白编辑式背景、手绘角色与橙黄色操作传递轻松的分析工具风格。
raycast|近黑表面、细边框和命令面板式卡片突出快捷操作。
renault|黑白画布、醒目黄色与品牌字体用于呈现汽车产品。
replicate|暖奶油色底、亮橙色操作与大标题突出开发者工具。
resend|近黑背景、宽松留白和大型编辑式衬线标题展示邮件产品。
revolut|黑色背景、钴蓝紫强调和大标题形成鲜明的金融产品首屏。
runwayml|电影感摄影和黑白编辑式框架突出视频创作能力。
sanity|红色强调结合内容优先的编辑式结构，呈现内容管理平台。
sap|白色画布与蓝色区块组织企业软件和复杂产品信息。
sentry|深紫色画布配电光绿和插画，突出问题监控及开发者操作。
shopify|深色电影感首屏与亮绿色重点突出电商工具与产品信息。
slack|深茄紫、奶油色至淡紫渐变和胶囊按钮塑造团队协作页面。
spacex|黑白高反差、通栏摄影和克制的文字突出航天项目。
spotify|深色表面、鲜绿色操作和大标题衬托专辑艺术与音乐列表。
starbucks|多层绿色、暖奶油色底和胶囊按钮形成舒适的咖啡零售体验。
stripe|紫色渐变、轻盈文字和层次清晰的技术内容组织支付产品。
supabase|白色与近黑表面搭配翠绿按钮，呈现数据开发平台。
superhuman|高对比深色表面、紫色光晕与键盘导向的操作体现邮件工具。
tesla|全屏汽车摄影和精简控件让产品成为视觉主角。
theverge|酸薄荷与紫外色、高辨识度标题和杂志式卡片构成科技媒体风格。
together.ai|近黑首屏配橙、洋红及蓝紫渐变，突出 AI 基础设施。
uber|严格的黑白关系、紧凑标题与通栏影像呈现出行产品。
vercel|黑白对比、Geist 字体和精确的线条构成面向开发者的界面。
vodafone|粗重的大写区块标题与醒目的品牌红组织电信服务内容。
voltagent|纯黑画布和翠绿强调塑造终端导向的 AI 代理框架页面。
warp|深色终端面板和细边框强调命令行工作流。
webflow|近黑文字与白色背景为基础，用多种产品强调色区分功能。
wired|白纸般的底色、衬线标题、等宽小标题和墨蓝链接呈现媒体版式。
wise|亮绿色强调、清晰的表单与对照信息突出跨境转账操作。
x.ai|克制的黑白单色界面和大尺度版式体现技术感。
zapier|亮橙色操作、暖白底和轻松插画构成自动化工具界面。""".splitlines())

STYLE_LABELS = dict(line.split("|",1) for line in """1win|深灰底与荧光绿
airbnb|珊瑚红与生活摄影
airtable|多彩模块编辑风
aljazeera|高密度新闻版式
apple|留白与产品摄影
binance|黑底金黄交易台
bmw|企业蓝汽车图册
bmw-m|黑底三色赛车风
bugatti|近黑底与疏排大字
cal|黑白极简预约
claude|暖纸色编辑风
clay|彩色黏土插画
clickhouse|亮黄与技术排版
cohere|白底与深绿产品块
coinbase|清晰蓝白金融界面
composio|深色底与电光蓝
cursor|暖白橙色开发者风
dell-1996|九十年代目录风
discord|深靛蓝游戏社区风
dji|影棚式设备陈列
elevenlabs|暖白与柔和渐变球体
expo|白底天蓝光晕
ferrari|高反差摄影与赛车红
figma|黑白框架与浅彩色块
framer|蓝黑反差与动效
hashicorp|深色多强调色技术界面
hp|蓝白棱角设备目录
ibm|企业蓝与结构网格
intercom|暖白底与 Fin 橙
jobright|薄荷色底与黑色胶囊
kraken|白底品牌紫交易界面
lamborghini|纯黑与金色奢华
linear.app|近黑底与淡紫细节
lovable|奶油色纸感
mastercard|暖底与圆环形构图
mercury|深墨紫金融界面
meta|摄影优先的明暗分区
minimax|白底与鲜亮渐变卡
mintlify|绿色强调的阅读版式
miro|亮黄协作画布
mistral.ai|落日渐变与暖米白
mongodb|深海蓝与品牌绿
mydealz|密集折扣信息流
nerdwallet|云杉绿与金融对照
nike|重字与通栏运动摄影
nintendo-2001|千禧年金属主机风
notion|纸白与多彩贴纸
nvidia|深色底与计算绿
ollama|单色等宽终端
opencode.ai|暖米白等宽版式
oracle|暖中性色企业界面
oura|暖纸底与衬线标题
pinterest|红色强调的图片瀑布流
playstation|冷色层叠主机界面
posthog|暖底手绘分析界面
raycast|深底细线命令面板
renault|黑白汽车版式与亮黄
replicate|暖底亮橙开发者风
resend|深色留白与大衬线标题
revolut|黑底钴蓝紫金融风
runwayml|电影摄影与编辑式黑白
sanity|红色强调的内容版式
sap|白底与企业蓝区块
sentry|深紫背景与电光绿插画
shopify|电影感深色与亮绿
slack|茄紫与暖浅色渐变
spacex|黑白通栏航天摄影
spotify|黑绿对比与专辑封面
starbucks|暖米白与四阶品牌绿
stripe|紫色渐变与轻字重
supabase|黑白表面与翠绿操作
superhuman|深色紫光与键盘导向
tesla|全屏摄影与精简控件
theverge|荧光配色的杂志版式
together.ai|近黑底与暖色光效
uber|黑白图文与通栏摄影
vercel|黑白细线技术网格
vodafone|品牌红与重字标题
voltagent|纯黑底与翠绿终端风
warp|深色细线终端
webflow|黑白基础与多色分区
wired|报刊栏式与墨蓝链接
wise|鼠尾草浅底与亮绿操作
x.ai|大尺度黑白科技风
zapier|暖白底与亮橙插画""".splitlines())

BRAND_ALIASES = dict(line.split("|",1) for line in """airbnb|爱彼迎
aljazeera|半岛电视台
apple|苹果
binance|币安
bmw|宝马
bmw-m|宝马 M
bugatti|布加迪
dell-1996|戴尔（1996）
dji|大疆
ferrari|法拉利
hp|惠普
lamborghini|兰博基尼
mastercard|万事达卡
nike|耐克
nintendo-2001|任天堂（2001）
nvidia|英伟达
oracle|甲骨文
playstation|索尼 PlayStation
renault|雷诺
starbucks|星巴克
tesla|特斯拉
uber|优步
vodafone|沃达丰""".splitlines())


def navigation_metadata(item):
    """从常规样张的根变量取样，缺项时再查归档 Markdown。"""
    slug = item["slug"]
    source = decode(ARCHIVE/slug/"preview.html")
    document = decode(ARCHIVE/slug/"DESIGN.md")
    roots = re.findall(r":root\s*\{([^}]+)\}",source)
    css_colors = dict(re.findall(r"--([\w-]+)\s*:\s*(#[\da-fA-F]{3,8})(?=[\s;}])",";".join(roots)))
    md_colors = dict(re.findall(r"(?m)^  ([\w-]+):\s*[\"']?(#[\da-fA-F]{3,8})(?=[\"'\s]|$)",document))
    colors = {**md_colors,**css_colors}

    def choose(keys,fallback):
        return next((colors[key] for key in keys if key in colors),fallback)

    canvas = choose(("color-canvas","canvas","color-background","bg","background","neutral-warm","pure-white"),"#fbfaf7")
    hex_value = canvas[1:4] if len(canvas)<6 else canvas[1:7]
    if len(hex_value)==3:
        hex_value = "".join(char*2 for char in hex_value)
    luminance = sum(int(hex_value[index:index+2],16)*weight for index,weight in ((0,.2126),(2,.7152),(4,.0722)))
    ink = choose(("color-foreground","ink","text","text-primary","foreground","carbon-dark"),"#f8f8f4" if luminance<100 else "#232925")
    accent = choose(("color-primary","primary","action-blue","electric-blue","green-accent","accent","brand-primary"),item["color"])
    return {"alias":BRAND_ALIASES.get(slug,""),"style":STYLE_LABELS[slug],"palette":{"canvas":canvas,"ink":ink,"accent":accent}}


def segments(text):
    """将原值和 Markdown 标记作为固定片段，避免模型重新生成。"""
    cursor = 0
    for literal in INVARIANT.finditer(text):
        value = literal[0]
        if IDENTIFIER.fullmatch(value) and value.lower() not in TOKEN_NAMES and not re.fullmatch(BRAND_PATTERN,value,re.I):
            continue
        if literal.start() > cursor:
            yield False,text[cursor:literal.start()]
        link = re.fullmatch(r"\[([^\]]*)\](\([^)]*\))",value)
        if link:
            yield True,"["
            yield False,link[1]
            yield True,"]"+link[2]
        else:
            yield True,value
        cursor = literal.end()
    if cursor < len(text):
        yield False,text[cursor:]


def phrase_parts(text):
    """保留首尾空格，并把长句分隔到模型可处理的范围。"""
    if not text.strip():
        return [(True,text)]
    prefix = text[:len(text)-len(text.lstrip())]
    suffix = text[len(text.rstrip()):]
    body = text.strip()
    pieces = [body] if len(body)<340 else SPLIT_SENTENCES.split(body)
    output = [(True,prefix)]
    for index,piece in enumerate(pieces):
        if index:
            output.append((True," "))
        if len(piece)>650:
            boundaries = re.finditer(r"\S.{0,599}(?:\s+|$)",piece,flags=re.S)
            output.extend((not bool(ENGLISH.search(part[0])),part[0].rstrip()) for part in boundaries)
        else:
            output.append((not bool(ENGLISH.search(piece)),piece))
    output.append((True,suffix))
    return output


class Translation:
    def __init__(self,literals):
        self.literals = literals
        self.required = set()
        self.values = GLOSSARY.copy()
        self.review = TranslationReview()

    def parts(self,text,protect_design=False):
        if text.strip() in GLOSSARY:
            return phrase_parts(text)
        source = self.document_segments(text) if protect_design else segments(text)
        return [part for fixed,piece in source for part in ([(True,piece)] if fixed else phrase_parts(piece))]

    def document_segments(self,text):
        cursor = 0
        for match in self.literals.matches(text):
            yield from segments(text[cursor:match.start()])
            yield True,match[0]
            cursor = match.end()
        yield from segments(text[cursor:])

    def collect(self,text):
        self.required.update(part for fixed,part in self.parts(text) if not fixed and part.casefold() not in CONNECTIVES)

    def collect_document(self,text):
        if text not in DOCUMENT_EDITORIAL and text not in REVIEWED_DOCUMENT_COPY:
            self.required.update(part for fixed,part in self.parts(text,protect_design=True)
                                 if not fixed and part.casefold() not in CONNECTIVES)
        return text

    def phrase(self,part):
        if part.casefold() in CONNECTIVES:
            return CONNECTIVES[part.casefold()]
        return self.values[part]

    def apply(self,text):
        return "".join(part if fixed else self.phrase(part).replace("▁"," ") for fixed,part in self.parts(text))

    def apply_document(self,text):
        edited = REVIEWED_DOCUMENT_COPY.get(text,DOCUMENT_EDITORIAL.get(text))
        if edited is not None:
            return edited if self.literals.retained(text,edited) else text
        terms = [(wrong,correct) for english,wrong,correct in DOCUMENT_TERMS if re.search(english,text,re.I)]
        parts = []
        for fixed,part in self.parts(text,protect_design=True):
            value = part if fixed else self.phrase(part)
            if not fixed:
                for wrong,correct in terms:
                    value = re.sub(wrong,correct,value)
                if UNRELIABLE_DOCUMENT_COPY.search(value) or REPEATED_DOCUMENT_COPY.search(value):
                    return text
            parts.append(value)
        translated = "".join(parts)
        reviewed = self.review.inspect(text,translated,self.literals.retained)
        if reviewed is None or not self.literals.retained(text,reviewed):
            return text
        return reviewed

    def run(self,model,cache,device):
        import ctranslate2
        import sentencepiece as spm
        from opencc import OpenCC

        converter = OpenCC("t2s")
        source = next(model.rglob("sentencepiece.model"),None)
        target = source
        if not source:
            source = next(model.rglob("source.spm"))
            target = next(model.rglob("target.spm"))
        processor = spm.SentencePieceProcessor(model_file=str(source))
        decoder = processor if target==source else spm.SentencePieceProcessor(model_file=str(target))
        engine_dir = next(model.rglob("model.bin")).parent
        database = sqlite3.connect(cache)
        database.execute("create table if not exists translations (source text primary key, result text not null)")
        self.values.update(database.execute("select source,result from translations"))
        self.values.update(GLOSSARY)
        remaining = sorted(self.required-self.values.keys(),key=lambda line:(len(line),line))
        print(f"待翻译 {len(remaining)} 条，共 {len(self.required)} 条。",flush=True)
        if not remaining:
            return
        engines = [device] if device!="auto" else ["cuda","cpu"]
        for option in engines:
            try:
                translator = ctranslate2.Translator(
                    str(engine_dir),device=option,compute_type="int8" if option=="cpu" else "int8_float16",
                    inter_threads=4 if option=="cpu" else 1,intra_threads=2 if option=="cpu" else 0,
                )
                translator.translate_batch([processor.encode("Design system",out_type=str)],beam_size=1)
                print(f"翻译设备：{option}",flush=True)
                break
            except (RuntimeError,ValueError) as error:
                if option==engines[-1]:
                    raise
                print(f"{option} 不可用，切换 CPU：{error}",flush=True)
        for cursor in range(0,len(remaining),192):
            batch = remaining[cursor:cursor+192]
            results = translator.translate_batch(
                [processor.encode(line,out_type=str) for line in batch],
                beam_size=1,max_batch_size=1152,batch_type="tokens",
            )
            translated = []
            for line,result in zip(batch,results):
                value = converter.convert(decoder.decode(result.hypotheses[0])).strip()
                for old,new in TERM_FIXES:
                    value = value.replace(old,new)
                value = value or line
                translated.append((line,value))
            self.values.update(translated)
            database.executemany("insert or replace into translations values (?,?)",translated)
            database.commit()
            if not cursor or cursor%1536==0 or cursor+len(batch)==len(remaining):
                print(f"已翻译 {cursor+len(batch)}/{len(remaining)}",flush=True)
        database.close()


def decode(path):
    return path.read_bytes().decode("utf-8-sig")


def archive_literals():
    families = set()
    for path in ARCHIVE.glob("*/DESIGN.md"):
        source = decode(path)
        TOKEN_NAMES.update(key.lower() for key in re.findall(r"(?m)^  ([a-zA-Z][\w-]+):",source))
        for stack in re.findall(r"(?m)^\s*fontFamily:\s*([^\r\n]+)",source):
            families.update(name.strip(" \"'`") for name in stack.split(",") if name.strip(" \"'`"))
    return DesignLiterals(families | {"SF Pro Display","SF Pro Text","Segoe UI","BlinkMacSystemFont","-apple-system"})


def chinese_markdown(lines,transform):
    fenced = None
    out = []
    for line in lines.splitlines(keepends=True):
        content = line.rstrip("\r\n")
        ending = line[len(content):]
        fence = re.match(r"^\s*(`{3,}|~{3,})",content)
        if fence:
            mark = fence[1][0]
            if not fenced or mark==fenced:
                fenced = None if fenced else mark
        if fenced or fence or re.fullmatch(r"[\s|:\-]+",content or " "):
            out.append(line)
            continue
        mark = re.match(r"^(\s*(?:#{1,6} |\d+\. |[-+*] |> )?)",content)[0]
        out.append(mark+transform(content[len(mark):])+ending)
    return "".join(out)


def markdown_sections(text):
    header = re.match(r"\A---\r?\n(.*?)\r?\n---[ \t]*\r?\n",text,re.S)
    front = header[0] if header else ""
    body = text[len(front):]
    blocks = []
    start = 0
    fence = None
    for match in re.finditer(r"(?m)^.*(?:\n|$)",body):
        line = match[0]
        marker = re.match(r"^\s*(`{3,}|~{3,})",line)
        if marker:
            mark = marker[1][0]
            if not fence or fence==mark:
                fence = None if fence else mark
        if not fence and re.match(r"^## ",line) and match.start()>start:
            blocks.append(body[start:match.start()])
            start = match.start()
    blocks.append(body[start:])
    return front,blocks


def preview_document(raw):
    soup = BeautifulSoup(raw,"html.parser")
    heading = soup.find("h1")
    for element in soup.body.descendants if soup.body else ():
        if element is heading:
            break
        if getattr(element,"name",None)=="nav":
            element.decompose()
            break
    soup.html["lang"] = "zh-CN"
    return soup


def preview_strings(soup):
    for node in soup.find_all(string=True):
        if type(node) is NavigableString and node.strip() and not any(
            tag.name in EXCLUDE_TAGS for tag in node.parents
        ):
            yield node,None,str(node)
    for node in soup.find_all(True):
        for key in TRANSLATABLE_ATTRIBUTES:
            if value:=node.get(key):
                yield node,key,value


def prepare_sample(path):
    soup = preview_document(decode(path))
    remove_team_credit(soup)
    style = STYLE_LABELS[path.parent.name]
    soup.h1.string = style
    soup.title.string = style
    return soup


def sample_copy(soup,translate_intro=False):
    heading = soup.h1
    intro = heading.find_next("p") if heading else None
    # 颜色名称和字体规格属于设计标识，描述与示例文字仍可本地化。
    technical_labels = {id(tag) for tag in soup.select(
        ".swatch-name,.color-name,.color-swatch-name,.token-name,"
        ".type-meta,.type-spec,.type-label,.color-hex"
    )}
    for hex_value in soup.find_all(string=re.compile(r"^\s*#[0-9a-fA-F]{6}\s*$")):
        label = hex_value.parent.find_previous_sibling()
        if label and set(label.get("class", ())) & {"name", "chip-name"}:
            technical_labels.add(id(label))
    for node,key,value in preview_strings(soup):
        if key or not any(parent is heading or (not translate_intro and parent is intro)
                          or parent.name=="title" or id(parent) in technical_labels for parent in node.parents):
            yield node,key,value


def replace_sample_text(element,text):
    """替换说明文字时复用原来的字体、换行和代码元素。"""
    parts = re.split(r"\{\d+\}",text)
    inline = element.find_all(recursive=False)
    if len(parts)!=len(inline)+1:
        raise ValueError(f"样张译文的行内结构与源文不符：{text}")
    for tag in inline:
        tag.extract()
    element.clear()
    element.append(parts[0])
    for tag,part in zip(inline,parts[1:],strict=True):
        element.append(tag)
        element.append(part)


def restore_sample_intro(soup,slug,filename,literals):
    """逐段对应归档首屏说明，保留行内结构和原始参数。"""
    intro = soup.h1.find_next("p")
    text = OVERVIEWS[slug]
    if filename == "preview-dark.html":
        text = DARK_OVERVIEWS.get(slug,text)
    source = intro.get_text().replace("sticky note","note")
    source = re.sub(r"(?<=\d)-line-height\b"," line-height",source)
    replace_sample_text(intro,text)
    lost = literals.values(source)-literals.values(intro.get_text())
    if lost:
        raise ValueError(f"{slug}/{filename} 的首屏说明缺少原值：{dict(lost)}")


def polish_sample(soup,slug):
    """保留窄屏适配和通用场景标识。"""
    if slug in SAMPLE_FIT_CSS:
        fit = soup.new_tag("style",attrs={"data-design-fit":"true"})
        fit.string = SAMPLE_FIT_CSS[slug]
        soup.head.append(fit)
    demos = []
    for heading in soup.find_all(["h2","h3"]):
        source = " ".join(heading.stripped_strings)
        description = next((copy for pattern,copy in DEMO_SPECS if re.fullmatch(pattern,source,re.I)),None)
        if description:
            note = soup.new_tag("p",attrs={"class":"design-demo-note"})
            demos.append((heading,note,"组件演示。"+description+"数据仅用于样式展示。"))
    return demos


def render_markdown(text):
    tags = "h1 h2 h3 h4 h5 h6 p em strong del blockquote ul ol li table thead tbody tr th td pre code a hr br".split()
    rendered = markdown.markdown(text,extensions=["tables","fenced_code","sane_lists"])
    return bleach.clean(rendered,tags=tags,attributes={"a":["href","title"],"ol":["start"]},strip=True)


def front_description(front):
    match = re.search(r"(?m)^description:\s*([^\r\n]*)(?:\r?\n((?:[ \t]+[^\r\n]*\r?\n)*))",front)
    if not match:
        return ""
    value = match[1].strip(' "')
    if value.startswith(("|",">")):
        return " ".join(line.strip() for line in (match[2] or "").splitlines() if line.strip())
    return value


def cal_chinese_sections(blocks,literals):
    reference = (ROOT/"content"/"design-systems"/"cal"/"specification"/"DESIGN.zh-en.md").read_text(encoding="utf-8-sig")
    pairs = re.findall(
        r"(?ms)^## ([^\n]+)｜([^\n]+)\n\n### 中文\n\n(.*?)\n\n<details>\n"
        r"<summary>English · 英文原文</summary>\n\n(.*?)\n\n</details>",
        reference,
    )
    sources = [(heading.removeprefix("## ").strip(),body.replace("\r\n","\n").strip())
               for heading,_,body in (block.partition("\n") for block in blocks if block.strip())]
    expected = [(en,original.strip()) for _,en,_,original in pairs]
    if sources != expected:
        raise ValueError("Cal.com 中文校订稿的英文对照与归档正文不一致。")
    sections = []
    for zh,_,body,original in pairs:
        section = "\n## "+zh+"\n\n"+body.strip()+"\n"
        source_lines = [(line,literals.values(line)) for line in original.splitlines()]
        missing = sum((values for _,values in source_lines),literals.values(""))
        missing -= sum((literals.values(line) for line in body.splitlines()),literals.values(""))
        if missing:
            excerpts = []
            for line,values in source_lines:
                if missing & values:
                    excerpts.append(line)
                    missing -= values
            section += "\n### 技术参数原文\n\n```text\n"+"\n".join(excerpts)+"\n```\n"
        sections.append(section)
    return sections


def design_documents(title,front,blocks,translation,reviewed=None,translated_description=None):
    if reviewed is not None:
        note = "中文按英文规范分章校订，文末保留原始设计词元。"
        sources = [block for block in blocks if block.strip()]
        pairs = zip(sources,reviewed,strict=True)
    else:
        note = "正文含机器初译。检测到译文异常的条目保留英文，文末保留原始设计词元。"
        pairs = ((block,chinese_markdown(block,translation.apply_document)) for block in blocks)
    chinese_parts = [f"# {title} · 设计规范\n\n**说明**　{note}\n"]
    file_parts = [f"# {title} · 中英文对照\n\n**说明**　{note}\n"]
    for original,chinese in pairs:
        file_parts.append("\n"+chinese)
        chinese_parts.append("\n"+chinese)
        file_parts.append('\n<details>\n<summary>英文原文</summary>\n\n<!-- source:body -->\n')
        file_parts.append(original)
        file_parts.append("\n<!-- source:end -->\n\n</details>\n")
    english = render_markdown("".join(blocks))
    if front:
        description = front_description(front)
        translation_note = translated_description if translated_description is not None else translation.apply_document(description) if description else ""
        for parts in (file_parts,chinese_parts):
            parts.append("\n## 设计词元原值\n\n"+(translation_note+"\n\n" if translation_note else ""))
            parts.extend(["```yaml\n",front,"```\n"])
        english += '<h2>Design tokens</h2><pre><code>'+html.escape(front)+'</code></pre>'
    chinese = "".join(chinese_parts)
    return "".join(file_parts),chinese,render_markdown(chinese),english


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--model",type=Path,required=True)
    parser.add_argument("--cache",type=Path,required=True)
    parser.add_argument("--device",choices=["auto","cuda","cpu"],default="auto")
    parser.add_argument("--brand",help="只更新指定品牌，例如 1win。")
    parser.add_argument("--review-log",type=Path,help="记录语境校订和保留英文的条目。")
    scope = parser.add_mutually_exclusive_group()
    scope.add_argument("--documents-only",action="store_true",help="只更新文档与总览数据，保留已有样张 HTML。")
    scope.add_argument("--html-only",action="store_true",help="只校订样张和总览风格名称，保留 DESIGN 文件。")
    args = parser.parse_args()
    page = ROOT/"docs"/"prototypes"/"preview.html"
    overview = page.read_text(encoding="utf-8")
    payload = re.search(r'(<script id="archive-data" type="application/json">)(.*?)(</script>)',overview,re.S)
    catalog = json.loads(payload[2])
    index = json.loads(INDEX.read_text(encoding="utf-8"))
    assert len(catalog)==len(index["entries"])==85
    if set(PLATFORM_BY_BRAND)!={entry["slug"] for entry in index["entries"]}:
        raise ValueError("平台类型映射与归档品牌清单不一致")
    selected = [(item,entry) for item,entry in zip(catalog,index["entries"],strict=True)
                if args.brand is None or item["slug"]==args.brand]
    if not selected:
        parser.error("未找到指定品牌")
    literals = archive_literals()
    translations = Translation(literals)
    editor = PreviewEditor(translations,segments)
    source_data = {}
    for item,entry in selected:
        slug = item["slug"]
        assert slug==entry["slug"] and re.fullmatch(r"[a-z0-9.-]+",slug) and slug not in (".","..")
        for asset in entry["resources"].values():
            content = (ARCHIVE/asset["file"]).read_bytes()
            assert hashlib.sha256(content).hexdigest()==asset["sha256"]
        original = decode(ARCHIVE/slug/"DESIGN.md")
        front,blocks = markdown_sections(original)
        summary = item.get("summaryEn",item["summary"])
        if not args.html_only:
            if slug not in ("cal","1win"):
                for block in blocks:
                    chinese_markdown(block,translations.collect_document)
            if slug != "1win":
                translations.collect_document(front_description(front))
        curated = None
        if not args.html_only:
            if slug == "cal":
                curated = cal_chinese_sections(blocks,literals)
            elif slug == "1win":
                _,reviewed = markdown_sections(decode(Path(__file__).resolve().parents[1]/"references"/"1win.zh.md"))
                curated = [section for section in reviewed if section.strip()]
                for source,translated in zip((block for block in blocks if block.strip()),curated,strict=True):
                    original_values = sum((literals.values(line) for line in source.splitlines()),literals.values(""))
                    translated_values = sum((literals.values(line) for line in translated.splitlines()),literals.values(""))
                    if missing := original_values-translated_values:
                        raise ValueError(f"1win 中文规范缺少原始参数：{dict(missing)}")
        source_data[slug] = (front,blocks,summary,curated)
        if not args.documents_only and slug != "1win":
            for filename in SAMPLE_FILES:
                soup = prepare_sample(ARCHIVE/slug/filename)
                restore_sample_intro(soup,slug,filename,literals)
                for _,_,value in sample_copy(soup):
                    editor.collect(value)
    if translations.required:
        translations.run(args.model,args.cache,args.device)
    for item,_ in selected:
        slug = item["slug"]
        front,blocks,summary,curated = source_data[slug]
        target = LOCALIZED/slug
        target.mkdir(parents=True,exist_ok=True)
        if not args.html_only:
            translations.review.location = f"{slug}/DESIGN.zh.md"
            reviewed_description = (
                "1win 设计语言分析。近黑底色衬托密集的通栏游戏图块、推广卡与直播投注面板。界面使用粗字重 Inter、平坦的深灰表面，以及鲜绿色与电光蓝两种操作色。"
                if slug == "1win" else None
            )
            bilingual,chinese,chinese_view,english_view = design_documents(
                item["title"],front,blocks,translations,curated,reviewed_description
            )
            bilingual_file = target/"DESIGN.zh-en.md"
            if not args.documents_only or not bilingual_file.exists():
                bilingual_file.write_bytes(bilingual.encode("utf-8"))
            content = chinese.encode("utf-8")
            (target/"DESIGN.zh.md").write_bytes(content)
            item.pop("bilingual",None)
            item.pop("reading",None)
            item.update(summaryEn=summary,summary=SUMMARIES[slug],chinese=base64.b64encode(content).decode("ascii"),readingZh=chinese_view,readingEn=english_view)
        item.update(navigation_metadata(item))
        if args.documents_only:
            continue
        for filename in SAMPLE_FILES:
            translations.review.location = f"{slug}/{filename}"
            soup = prepare_sample(ARCHIVE/slug/filename)
            examples = platform_targets(soup)
            if slug != "1win":
                restore_sample_intro(soup,slug,filename,literals)
            demos = polish_sample(soup,slug)
            for node,attribute,value in list(sample_copy(soup,translate_intro=slug=="1win")):
                if slug == "1win":
                    reviewed_text = ONE_WIN_COPY.get(value.strip())
                    translated = value.replace(value.strip(),reviewed_text,1) if reviewed_text is not None else value
                else:
                    translated = editor.apply(value)
                translated = translations.review.inspect(value,translated,literals.retained)
                if translated is None or not literals.retained(value,translated):
                    translated = value
                if attribute:
                    node[attribute] = translated
                else:
                    node.replace_with(translated)
            for heading,note,copy in demos:
                note.string = copy
                heading.insert_after(note)
            apply_platform_examples(soup,slug,examples)
            # 实时样张禁用脚本，空片段链接在此处仅作视觉试样。
            for link in soup.select('a[href="#"]'):
                link.attrs.pop("href")
                link["data-static-example"] = ""
            if slug == "hp":
                for table in soup.select(".responsive-table"):
                    table.select_one("thead th").string = "设备"
                    table.wrap(soup.new_tag("div",attrs={"style":"max-width:100%;overflow-x:auto","tabindex":"0","role":"region","aria-label":"响应式布局表"}))
            (target/filename).write_text(str(soup),encoding="utf-8")
    if not args.documents_only:
        from refresh_sample_navigation import refresh_samples
        refresh_samples([item for item,_ in selected],{**index,"entries":[entry for _,entry in selected]})
    encoded = json.dumps(catalog,ensure_ascii=False,separators=(",",":")).replace("<",r"\u003c")
    current = page.read_text(encoding="utf-8")
    target_payload = re.search(r'(<script id="archive-data" type="application/json">)(.*?)(</script>)',current,re.S)
    page.write_text(current[:target_payload.start(2)]+encoded+current[target_payload.end(2):],encoding="utf-8")
    if not args.html_only:
        print(f"已生成 {len(selected)} 份独立中文文档。",flush=True)
    if not args.documents_only:
        print(f"已生成 {len(selected)*len(SAMPLE_FILES)} 份中文样张。",flush=True)
    if args.review_log:
        report = {"counts":translations.review.counts,"fallbacks":sorted(translations.review.fallbacks)}
        args.review_log.write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")


if __name__=="__main__":
    main()
