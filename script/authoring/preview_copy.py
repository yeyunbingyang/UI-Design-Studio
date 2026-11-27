"""按英文原文和设计术语校订 HTML 文案，保留技术参数。"""

import re
from urllib.parse import urlparse
from sample_editorial import EXACT as EDITORIAL_EXACT
from translation_review import CONNECTIVES


EXACT = dict(line.split("|",1) for line in """Brand & Accent|品牌色与强调色
Brand & Accent (extended)|品牌色与扩展强调色
Brand & Accents|品牌色与强调色
Brand|品牌色
Surface|界面表面
Surfaces|界面表面
Surface & Background|表面与背景
Text|文字色
Semantic|语义色
Text & Semantic|文字色与语义色
Color Palette|配色
Colors|配色
Color|配色
Foundation|设计基础
Foundations|设计基础
Component|组件
Components|组件
Composite|组合场景
Composites|组合场景
Responsive|响应式
System|系统规则
Shape|形状
Shapes|形状
Depth|视觉深度
Layout|布局
Form Elements|表单控件
Forms|表单
Buttons|按钮
Cards|卡片
Badges|徽标
Navigation|导航
Typography Scale|字号层级
Typography|字体排版
Button Variants|按钮样式
Card Examples|卡片示例
Cards & Containers|卡片与容器
Containers|容器
Cards & Surfaces|卡片与表面
Signature Components|标志性组件
Pricing Tiers|套餐定价
Product Selector|产品选择器
Responsive Behavior|响应式布局
Elevation & Depth|层次与深度
Elevation|视觉层次
Radius|圆角
Spacing Scale|间距层级
Border Radius Scale|圆角层级
Border Radius|圆角
Touch Targets|触控区域
Collapsing Strategy|窄屏布局调整
Motion & Interaction|动效与交互
Auth Forms|登录与注册表单
Registration|注册
Register|注册
Sign In|登录
Sign Up|注册
Log In|登录
Sign Out|退出登录
Submit|提交
Get Started|开始使用
Learn More|了解更多
Read More|阅读更多
See More|查看更多
Request a demo|申请演示
Book a demo|预约演示
Contact Sales|联系销售
Free|免费版
Pro|专业版
Business|商业版
Teams|团队版
Enterprise|企业版
Single sign-on (SSO)|单点登录（SSO）
Full name|姓名
Work email|工作邮箱
Password|密码
Forgot password?|忘记密码？
Welcome back.|欢迎回来
Email address|电子邮箱
Email|电子邮箱
Search|搜索
Placeholder|占位文字
Default|默认
Pressed|按下
Selected|已选中
Disabled|禁用
Focused|聚焦
Hover|悬停
Active|激活
Ink|文字色
Ink Muted|弱化文字色
Ink Soft|次要文字色
Ink Subtle|弱化文字色
Ink Strong|强调文字色
Ink Deep|深文字色
Canvas|页面底色
Canvas White|白色页面底色
Flat / Canvas|平面 / 页面底色
Card Surface|卡片底色
Eyebrow Label|栏眉
Section eyebrow|章节栏眉
Section eyebrow label|章节栏眉
Hero band|首屏区块
Base unit 4px|间距基准 4px
Primary, secondary, and outline variants.|主按钮、次按钮和描边按钮。
Stronger panel outline.|加深面板边框。
Sticker accent (decorative)|贴纸装饰色。
Gradient stop / illustration accent.|渐变色标 / 插画强调色。
M-stripe accent|M 系列条纹强调色
Card grid 3-up maintained|卡片保持三列
Card grid 3-up → 2-up|卡片从三列改为两列
Card grids: 3-up → 2-up at 1024px → 1-up below 768px.|卡片采用三列布局，在 1024px 改为两列，低于 768px 时改为单列。
Pill buttons render at 40–44px height — at WCAG AAA floor.|胶囊按钮高度为 40–44px。英文原文将该尺寸与 WCAG AAA 触控要求对照。
Pill buttons hit ≥44×44px on mobile. Form fields stay at the 44px minimum. WCAG AAA compliant.|移动端胶囊按钮的触控区域至少为 44×44px，表单控件至少高 44px。英文原文将该尺寸与 WCAG AAA 触控要求对照。
Game Tile|游戏卡片
Promo Card|活动卡片
Betslip Panel|投注单面板
Action Green — Registration CTA, primary confirm, place-bet|操作绿，用于注册、主要确认和投注按钮
Cards, game tiles, panels, utility buttons, inputs|用于卡片、游戏卡片、面板、工具按钮和输入框
Flat ladder — depth from surface shift + faint hairline: canvas → surface.|用页面底色、深浅相邻的表面和低对比度细边框区分层次。
Cream + coral + dark navy|米白、珊瑚色与深海军蓝
Copernicus serif + StyreneB sans|Copernicus 衬线体与 StyreneB 无衬线体
Coral primary, cream secondary|珊瑚色主按钮、米白色次按钮
Cream cards + dark mockups + coral callouts|米白色卡片、深色产品样机与珊瑚色提示
Reason through complexity|推理复杂问题
Code understanding|理解代码
Safe by design|把安全纳入设计
Connect everything Claude needs|为 Claude 接入所需工具
Start building with Claude|开始使用 Claude 构建
Signature Card Surfaces|标志性卡片底色
Haas + Inter Display sub-system|Haas 与 Inter Display 字体体系
Black + white outline pair|黑色实心与白色描边按钮
Color-block page rhythm|色块划分页面节奏
Production apps in prototype speed|以原型开发的速度构建生产应用
Don't just talk. Deploy it.|把想法部署成应用
The path to 10× every person in your organization|让团队成员的工作效率提升 10 倍
Tabbed feature card|带标签页的功能卡片
Cream callout band|米白色提示区块
Bright single-color showcase grid|高饱和单色展示网格
Articles page trending grid|热门文章网格
Inter Display + pill buttons|Inter Display 与胶囊按钮
Inputs and labels|输入框与标签
Hierarchy not rule|用视觉层级区分内容
Ribbon-Card Tints (one per product line)|条带式卡片配色，每条产品线使用一种颜色
Section Eyebrow Blocks|章节栏眉区块
Ribbon Cards|条带式卡片
Stickers & CTA Chrome|贴纸与行动按钮样式
BUY-a-DELL sticker|BUY-a-DELL 购买贴纸
NEW! burst|NEW! 星爆标记
PC Magazine award seal|《PC Magazine》奖章
CTA red panel|红色行动区块
Footer Icon-Label Nav|带图标和标签的页脚导航
Dimension XPS Pro|Dimension XPS Pro
Primary — The Four Greens|主色：四种绿色
Gold (Rewards Ceremony Only)|金色，仅用于奖励场景
Frap — Floating Circular Order Button|Frap 浮动圆形下单按钮
Rewards Status Cards (3-up)|奖励状态卡片，三列排列
Green Level|绿色等级
Gold Level|金色等级
Mission|任务
Gift Card Tiles (photographed as physical product)|以实物摄影呈现的礼品卡
Feature Band (House Green)|深绿底功能区块
Product Detail Components (PDP)|商品详情页组件（PDP）
PDP Breadcrumb|商品详情页的面包屑导航
Size Options Selector|容量选项
Add-in / Milk Select Fields|配料和奶类选择控件
Built-in security|内置安全功能
Near Black|近黑色
Off White|米白色
Warm White|暖白色
Warm Off-White|暖白色
Cool Off-White|冷灰白色
Dark Navy|深海军蓝
Deep Navy|深海军蓝
Navy|海军蓝
Blurple|品牌蓝紫色
Charcoal|炭灰色
Electric Blue|电光蓝
Accent Blue|蓝色强调色
Primary Blue|主蓝色
Coral Accent|珊瑚色强调色
Coral|珊瑚色
Cream|米白色
Slate|石板灰
Pewter|锡灰色
Muted Gold|低饱和金色
Seafoam|海沫绿
Cobalt|钴蓝色
Graphite|石墨灰
Silver|银灰色
Lilac|丁香紫
Lavender|薰衣草紫
Lavender Haze|淡薰衣草紫
Vermilion|朱红色
Lime|黄绿色
Lime Green|黄绿色
Hot Pink|亮粉色
Mauve|淡灰紫
Magenta|洋红色
Teal|蓝绿色
Ivory|象牙白
Sand|沙色
Terracotta|陶土色
Sage|鼠尾草绿
Olive|橄榄绿
Jet Black|纯黑色
Pure White|纯白色
Soft White|柔和白色
Muted Text|弱化文字色
Hairline|细边框
Divider|分隔线""".splitlines())
EXACT.update(EDITORIAL_EXACT)
EXACT.update({
    "Cards": "卡片", "Card": "卡片", "Section": "章节", "Dealer": "经销商",
    "Body": "正文", "Hero": "首屏", "Hamburger menu": "折叠菜单",
    "Hero text": "首屏文字", "Desktop": "桌面端", "Mobile": "手机端",
    "eyebrow": "栏眉", "Body copy": "正文",
})
EXACT = {key.casefold():value for key,value in EXACT.items()}

TERMS = dict(line.split("|",1) for line in """brand accent|品牌强调色
brand & accent|品牌色与强调色
accent colors|强调色
accent color|强调色
accent|强调色
background colors|背景色
background color|背景色
foreground color|前景色
text colors|文字色
text color|文字色
muted text|弱化文字
muted ink|弱化文字色
ink|文字色
canvas colors|页面底色
canvas color|页面底色
canvas|页面底色
hero band|首屏区块
hero section|首屏区块
hero headlines|首屏标题
hero headline|首屏标题
eyebrow labels|栏眉
eyebrow label|栏眉
eyebrow|栏眉
type scale|字号层级
typography scale|字号层级
type hierarchy|文字层级
letter spacing|字距
letter-spacing|字距
font weight|字重
line height|行高
mono|等宽字体
serif typeface|衬线字体
sans-serif|无衬线字体
hairline borders|细边框
hairline border|细边框
hairline dividers|细分隔线
hairline divider|细分隔线
hairline rule|细分隔线
hairline|细边框
outline buttons|描边按钮
outline button|描边按钮
outlined buttons|描边按钮
outlined button|描边按钮
pill buttons|胶囊按钮
pill button|胶囊按钮
pill shape|胶囊形
pill-shaped|胶囊形
pills|胶囊控件
pill|胶囊形
card grid|卡片网格
feature cards|功能卡片
feature card|功能卡片
card surfaces|卡片底色
card surface|卡片底色
cards|卡片
card|卡片
primary action|主要操作
secondary action|次要操作
primary button|主按钮
secondary button|次按钮
nav item|导航项
navigation bar|导航栏
button variants|按钮样式
signature components|标志性组件
signature component|标志性组件
input fields|输入框
input field|输入框
form fields|表单控件
field labels|表单标签
field label|表单标签
focus ring|焦点环
disabled state|禁用状态
pressed state|按下状态
empty state|空状态
loading state|加载状态
helper text|辅助说明
toast|消息提示
spacing scale|间距层级
base unit|基础单位
touch targets|触控区域
touch target|触控区域
breakpoints|响应式断点
breakpoint|响应式断点
drop shadow|投影
box shadow|阴影
border radius|圆角半径
light mode|浅色模式
dark mode|深色模式
full-bleed|通栏
color-block|色块
surface ladder|表面层级
subtle shadow|轻微阴影
gradient stops|渐变色标
gradient stop|渐变色标
3-up|三列
2-up|两列
1-up|单列
4-up|四列
warm off-white|暖白色
cool off-white|冷灰白色
off-white|米白色
near-black|近黑色
pure white|纯白色
pure black|纯黑色
dark navy|深海军蓝
deep navy|深海军蓝
deep indigo|深靛蓝
navy|海军蓝
charcoal|炭灰色
electric blue|电光蓝
electric green|电光绿
coral|珊瑚色
warm cream|暖米白
cream|米白色
slate gray|石板灰
mint green|薄荷绿
lime green|黄绿色
lavender|薰衣草紫
terracotta|陶土色
magenta|洋红色
teal|蓝绿色
gradient|渐变
tints|浅色调
tint|浅色调
CTA|行动按钮""".splitlines())
TERMS = {key.casefold():value for key,value in TERMS.items()}
TERM_RE = re.compile(
    r"(?<![\w-])(?:"+"|".join(map(re.escape,sorted(TERMS,key=len,reverse=True)))+r")(?![\w-])",
    re.I,
)
SENTENCES = re.compile(r"(?<=[.!?])(?=\s+[A-Z])")
PLACEHOLDER = re.compile(r"QZ([A-Z])Q",re.I)
ASCII_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
SOURCE_LITERALS = re.compile(r"\b(?:Pentium|FigJam|BMW iX3|Söhne)\b|(?<![\w/])/[a-z][\w/-]*/|[≥≤↑↓→×°]",re.I)
TECHNICAL = re.compile(r"#[\da-fA-F]{3,8}\b|\b\d+(?:\.\d+)?\s*(?:px|rem|vw|vh|ms|GB|MB|Hz)\b",re.I)
UI_FIXES = (
    (r"帆布","页面底色"),(r"墨水","文字色"),(r"品牌\s*(?:和|与)\s*(?:点心|口音)","品牌色与强调色"),
    (r"(?:贴纸|插画)口音",lambda m:m[0][:-2]+"强调色"),(r"高亮口音|强调口音","强调色"),
    (r"药丸按钮|避孕药按钮|药丸扣子","胶囊按钮"),(r"药丸形|枕头形","胶囊形"),
    (r"纸牌网格|纸牌表面|纸牌组件|纸牌试样",lambda m:"卡片"+m[0][2:]),
    (r"签名组件","标志性组件"),(r"字典缩放","字号层级"),(r"丝带[\s-]*卡丁鱼","条带式卡片"),
    (r"区域眉毛|章节眉毛","章节栏眉"),(r"英雄乐队|英雄板块","首屏区块"),
    (r"发线轮廓|发线边框|发丝线","细边框"),(r"按钮变种|按钮变量","按钮样式"),
    (r"默认状态下的内嵌式","默认内嵌"),(r"大纲按钮","描边按钮"),
    (r"品牌电压","品牌辨识度"),(r"发线","细边线"),
    (r"首屏英雄|营销英雄|英雄面板","首屏区块"),(r"签名卡片","标志性卡片"),
    (r"折叠战略","窄屏布局调整"),(r"触摸目标","触控区域"),
    (r"圆角半径\s*和深度","圆角与层次"),(r"基地单位","基础单位"),
    (r"(\d+)\s*列\s*[-–]\s*上楼\s*(?:[-–]\s*)?",r"\1 列 → "),
    (r"(\d+)\s*-\s*(?:上楼|堆起来|堆积|起来|上边|上层|上)(?=\s|[;；,.。]|$)",r"\1 列"),
    (r"英雄","首屏"),(r"眉毛","栏眉"),(r"行动按钮乐队","操作区"),
    (r"黑暗首屏","深色首屏"),(r"定价崩溃","定价卡片重排"),(r"定价等级","套餐层级"),
    (r"▁+"," "),
    (r"\s*[⁇�]+\s*"," "), (r"\bQZ[A-Z]Q\b",""),
)


def normalized(text):
    return " ".join(text.strip().split()).casefold()


NUMBERED_SECTION = re.compile(r"(\d{1,2})\s*[-—–·./]\s*([a-z][a-z &/-]+)",re.I)
NUMBERED_LABEL = re.compile(r"([a-z][a-z &/-]+)\s*[·—–]\s*(\d{1,2})",re.I)
SLASH_SECTION = re.compile(r"/\s*(\d{1,2})\s*/\s*([a-z][a-z &/-]+)",re.I)


def exact_copy(text):
    key = normalized(text)
    if key in CONNECTIVES:
        return CONNECTIVES[key]
    if key in EXACT:
        return EXACT[key]
    if slashed := SLASH_SECTION.fullmatch(key):
        number,label = slashed.groups()
        return f"/ {number} / {EXACT[label]}" if label in EXACT else None
    numbered = NUMBERED_SECTION.fullmatch(key)
    if numbered:
        number,label = numbered.groups()
    elif numbered := NUMBERED_LABEL.fullmatch(key):
        label,number = numbered.groups()
    else:
        return None
    if translation := EXACT.get(label.strip()):
        return f"{number} · {translation}"
    return None


def editorial_text(source,translated):
    for pattern,replacement in UI_FIXES:
        translated = re.sub(pattern,replacement,translated)
    if re.search(r"\b(?:component|card|grid|surface)\b",source,re.I):
        translated = translated.replace("纸牌","卡片")
    if re.search(r"\baccent(?:s)?\b",source,re.I):
        translated = translated.replace("口音","强调色").replace("点心","强调色")
    if re.search(r"\bpills?\b",source,re.I):
        translated = translated.replace("药丸","胶囊形").replace("避孕药","胶囊形")
    if re.search(r"\bregister|\bregistration\b",source,re.I):
        translated = translated.replace("登记","注册")
    if re.search(r"\bdealer\b",source,re.I):
        translated = translated.replace("毒贩","经销商").replace("交易商","经销商")
    if re.search(r"\b(?:primary|secondary)\b",source,re.I):
        translated = translated.replace("小学","主要").replace("中学","次要")
    if re.search(r"\b(?:body text|body copy|body weight|display|font)\b",source,re.I):
        translated = translated.replace("尸体","正文").replace("圣体","正文").replace("身体的重量","正文字重")
    if re.search(r"\b(?:chrome|mockups?)\b",source,re.I):
        translated = translated.replace("产品铬","产品界面").replace("code-mockup","代码样机")
    if re.search(r"\b(?:eyebrow|headline)\b",source,re.I):
        translated = translated.replace("眉毛","栏眉")
    if re.search(r"\bhero\b",source,re.I):
        translated = translated.replace("英雄","首屏").replace("汉堡导航","折叠菜单")
    if re.search(r"\bbody\b",source,re.I):
        translated = translated.replace("尸体","正文")
    if re.search(r"\bcard(?:s)?\b",source,re.I):
        translated = translated.replace("纸牌","卡片").replace("巢穴卡片","嵌套卡片")
    if re.search(r"\b(?:pill|button|radius)\b",source,re.I):
        translated = translated.replace("药丸","胶囊").replace("避孕药","胶囊")
    translated = re.sub(r"\s+([，。！？；、])",r"\1",translated)
    return translated.strip(" ▁")


class PreviewEditor:
    """在完整句子中翻译语序，用占位码锁定术语和技术值。"""

    def __init__(self,translation,segments):
        self.translation = translation
        self.segments = segments

    def masked(self,text):
        result = []
        restore = []

        def placeholder(value):
            if len(restore)>=len(ASCII_LETTERS):
                return value
            key = f"QZ{ASCII_LETTERS[len(restore)]}Q"
            restore.append((key,value))
            return key

        for fixed,part in self.segments(text):
            if fixed:
                result.append(placeholder(part))
            else:
                position = 0
                for match in SOURCE_LITERALS.finditer(part):
                    result.append(TERM_RE.sub(lambda token:placeholder(TERMS[token[0].lower()]),part[position:match.start()]))
                    result.append(placeholder(match[0]))
                    position = match.end()
                result.append(TERM_RE.sub(lambda token:placeholder(TERMS[token[0].lower()]),part[position:]))
        if len(restore)>=len(ASCII_LETTERS):
            return "",[]
        return "".join(result),restore

    def collect(self,text):
        for part in SENTENCES.split(text):
            if exact_copy(part) or not re.search(r"[a-zA-Z]{2,}",part):
                continue
            masked,_ = self.masked(part.strip())
            if masked:
                self.translation.required.add(masked)
            self.translation.collect(part)

    def apply(self,text):
        whole = exact_copy(text)
        if whole:
            return text[:len(text)-len(text.lstrip())]+whole+text[len(text.rstrip()):]

        def line(part):
            exact = exact_copy(part)
            if exact:
                return exact
            if re.fullmatch(r"(?:x{1,5}[sl]|[sml]|2xl|3xl|4xl|e\.g\.)",part.strip(),re.I):
                return part.strip()
            if not re.search(r"[a-zA-Z]{2,}",part):
                return part.strip()
            masked,restore = self.masked(part.strip())
            value = self.translation.values.get(masked,"")
            expected = {key for key,_ in restore}
            found = [match[0].upper() for match in PLACEHOLDER.finditer(value)]
            if value and len(found)==len(restore) and set(found)==expected and not re.search(r"(.)\1{7}|[⁇�]",value):
                values = dict(restore)
                value = PLACEHOLDER.sub(lambda match:values[match[0].upper()],value)
            else:
                value = self.translation.apply(part.strip())
            return editorial_text(part,value)

        padding_left = text[:len(text)-len(text.lstrip())]
        padding_right = text[len(text.rstrip()):]
        content = " ".join(line(part) for part in SENTENCES.split(text.strip()))
        content = editorial_text(text,content)
        if re.search(r"(?:\bQ\s*){4,}|\bQZ[A-Z]Q\b",content,re.I):
            return text
        present = {re.sub(r"\s+","",value).casefold() for value in TECHNICAL.findall(content)}
        missing = list(dict.fromkeys(value for value in TECHNICAL.findall(text)
                                         if re.sub(r"\s+","",value).casefold() not in present))
        if missing:
            content += "（原文参数："+"、".join(missing)+"）"
        return padding_left+content+padding_right


def remove_team_credit(soup):
    for image in soup.find_all("img",src=True):
        path = urlparse(image["src"])
        if path.netloc.lower()!="github.com" or path.path.lower()!="/voltagent.png":
            continue
        link = image.find_parent("a")
        if link:
            credit = link.parent
            if normalized(credit.get_text(" ",strip=True)) in {"maintained by voltagent team","由 voltagent 团队"}:
                credit.decompose()
