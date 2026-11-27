"""按产品类型调整归档里的共享模板，沿用品牌自身的组件和样式。"""

PLATFORM_GROUPS = {
    "开发工具": "composio cursor expo hashicorp lovable mintlify ollama opencode.ai raycast replicate resend sentry supabase together.ai vercel voltagent warp",
    "办公与创作 SaaS": "cal claude cohere elevenlabs figma framer intercom jobright linear.app minimax miro mistral.ai notion runwayml slack superhuman webflow x.ai zapier",
    "数据与企业平台": "airtable clay clickhouse ibm mongodb oracle posthog sanity sap",
    "媒体资讯": "aljazeera theverge wired",
    "旅行与本地服务": "airbnb uber",
    "零售电商": "mydealz nike shopify starbucks",
    "消费硬件与通信": "apple dell-1996 dji hp meta nintendo-2001 nvidia oura playstation vodafone",
    "汽车与航天": "bmw bmw-m bugatti ferrari lamborghini renault spacex tesla",
    "金融交易": "binance coinbase kraken mastercard mercury nerdwallet revolut stripe wise",
    "内容与社区": "discord pinterest spotify",
    "博彩": "1win",
}
PLATFORM_BY_BRAND = {
    brand: platform for platform, names in PLATFORM_GROUPS.items() for brand in names.split()
}

FOOTERS = {
    "开发工具": "开发环境|项目配置|运行环境|团队协作;开发资源|快速开始|技术文档|示例项目;交付运维|部署记录|运行日志|状态监控;支持|使用指南|更新记录|问题反馈",
    "办公与创作 SaaS": "工作区|个人项目|团队空间|权限管理;工作流程|内容编辑|协作分享|发布管理;资源|模板库|入门教程|使用案例;支持|帮助中心|更新记录|问题反馈",
    "数据与企业平台": "数据管理|数据接入|数据目录|数据质量;分析与协作|报表|工作流|团队空间;平台资源|接口文档|部署指南|合规说明;支持|服务状态|帮助中心|问题反馈",
    "媒体资讯": "报道|要闻|地区新闻|专题;内容|深度报道|多媒体|新闻简报;栏目服务|搜索|历史报道|订阅设置;关于与支持|编辑说明|联系编辑部|问题反馈",
    "旅行与本地服务": "发现|服务地区|热门地点|行程建议;预订|服务选择|行程安排|预订记录;服务伙伴|合作指南|服务规则|安全说明;支持|帮助中心|行程变更|问题反馈",
    "零售电商": "商城|商品分类|新品|活动;交易|购物车|订单|配送;服务|库存查询|退换货|售后帮助;支持|品牌信息|常见问题|问题反馈",
    "消费硬件与通信": "产品|产品系列|配件|规格对比;购买|配置选项|配送|订单;服务|设备设置|保修|更新;支持|设备文档|维修|问题反馈",
    "汽车与航天": "车型|车型总览|车型对比|技术规格;配置|配置选项|体验预约|交付说明;车主服务|保养|充电|配件;支持|使用手册|服务网点|联系支持",
    "金融交易": "产品|账户|转账|交易工具;记录|交易状态|收支明细|对账记录;信息|费用说明|风险说明|帮助文档;支持|账户安全|服务状态|联系我们",
    "内容与社区": "发现|热门内容|专题|关注;社区|活动|讨论|创作者;个人空间|收藏|通知|内容设置;支持|社区规范|帮助中心|举报反馈",
    "博彩": "内容|赛事列表|游戏分类|直播状态;账户|个人资料|消息|历史记录;规则|服务规则|年龄限制|自我限制;支持|理性参与|安全中心|问题反馈",
}
BRAND_FOOTERS = {
    "framer": "网站搭建|页面编辑|响应式布局|组件管理;发布与托管|网站发布|域名管理|版本记录;模板与学习|模板库|入门指南|建站示例;支持|产品文档|服务状态|问题反馈",
    "cal": "预约|预约入口|事件类型|预约管理;日历|日历连接|可用时间|时区设置;团队|团队预约|成员分配|集成;支持|帮助指南|开发者文档|问题反馈",
    "spacex": "任务|任务总览|任务记录|任务更新;飞行器|型号|技术规格|任务适配;资料|任务指南|影像|公开动态;支持|联系渠道|常见问题|问题反馈",
    "dell-1996": "电脑产品|桌面电脑|工作站|配件;选配与购买|电脑配置|库存查询|订单状态;客户服务|驱动与文档|设备维护|保修;支持|服务网点|常见问题|联系支持",
}

# 三列共用同一组标签、说明和操作槽。保留计划型产品的示例数值，选项型产品使用序号。
OFFER_GROUPS = {
    "开发工具": ("开发环境套餐", True, "个人开发|沙盒运行|本地项目|社区帮助;团队开发|共享环境|构建日志|团队权限|协作配置;企业交付|专属环境|审计记录|访问控制|交付支持"),
    "办公与创作 SaaS": ("工作区套餐", True, "个人工作区|创建项目|使用模板|个人分享;团队工作区|共享项目|协作编辑|成员权限|版本记录;组织工作区|多个工作区|统一身份|审计记录|组织管理"),
    "数据与企业平台": ("数据平台方案", True, "基础分析|数据导入|查询记录|基础报表;团队分析|共享数据集|任务调度|监控告警|团队权限;企业治理|数据目录|审计记录|分级权限|部署支持"),
    "媒体资讯": ("阅读与资讯选项", False, "新闻阅读|要闻速览|栏目导航|收藏文章;专题阅读|深度报道|专题索引|图文档案|阅读进度;新闻简报|选择主题|消息设置|历史简报|订阅管理"),
    "旅行与本地服务": ("出行服务选项", False, "单人出行|起点与终点|服务地区|行程明细;多人出行|乘客人数|行李需求|接送地点|行程安排;预约用车|出发时段|接送安排|预订记录|联系客服"),
    "零售电商": ("商城服务选项", False, "选购商品|分类浏览|商品规格|库存查询;订单管理|下单信息|配送方式|物流进度|订单明细;售后服务|退换货|申请记录|退款状态|客服支持"),
    "消费硬件与通信": ("产品与服务选项", False, "基础型号|规格参数|标准配置|产品资料;进阶型号|配置对比|选配清单|配件信息|服务说明;服务保障|设备文档|保修信息|维修记录|客户支持"),
    "汽车与航天": ("平台选项", False, "型号总览|技术规格|能力介绍|资料查看;配置对比|配置选项|方案对比|适用场景|示意参数;支持服务|服务内容|支持资料|服务记录|联系渠道"),
    "金融交易": ("账户与交易选项", False, "账户管理|账户总览|余额变动|安全设置;交易查询|交易类型|处理状态|交易明细|费用说明;对账与支持|对账记录|账单导出|风险提示|客服支持"),
    "内容与社区": ("内容与社区选项", False, "内容浏览|频道导航|内容收藏|新内容提醒;社区协作|话题讨论|成员管理|活动信息|内容分享;创作者工具|发布内容|维护频道|审核记录|反馈管理"),
    "博彩": ("赛事信息选项", False, "赛事列表|赛事分类|赛事日程|直播状态;历史记录|信息查询|记录筛选|状态展示|个人设置;安全与支持|规则说明|年龄验证|自我限制|帮助入口"),
}
BRAND_OFFERS = {
    "warp": ("终端工作区套餐", True, "个人终端|本机工作区|命令历史|个人配置;团队终端|共享命令|团队工作区|权限设置|协作配置;组织部署|工作区管理|身份集成|审计记录|部署支持"),
    "supabase": ("数据库环境套餐", True, "开发环境|测试数据库|项目配置|本地调试;团队环境|数据库备份|团队权限|访问日志|任务监控;生产环境|容量规划|故障恢复|审计记录|迁移支持"),
    "shopify": ("店铺运营套餐", True, "单店运营|商品管理|库存记录|订单查询;团队运营|多渠道上架|员工权限|库存同步|售后管理;企业运营|多个店铺|统一库存|运营报表|对接支持"),
    "spacex": ("任务选项", False, "任务概览|任务简介|预定时段|公开资料;飞行器|型号与规格|任务适配|技术资料|飞行记录;任务支持|任务指南|任务协调|公开更新|联系渠道"),
    "vodafone": ("通信套餐", True, "基础通信|通信服务|用量查询|资费说明;家庭通信|多设备接入|家庭服务|用量明细|服务管理;企业通信|企业账户|批量设备|服务报告|客户支持"),
    "dell-1996": ("台式电脑配置选项", False, "基础配置|处理器|内存|硬盘;扩展配置|处理器选项|内存扩展|硬盘选配|显示器选配;服务选项|设备文档|安装支持|保修条款|售后服务"),
}

SHARED_FOOTER = ("VoltAgent Framework","VoltOps LLM Observability","Production","Platform")
SHARED_INTROS = {
    "Pricing Tiers": "Three-up plan grid",
    "Shopping Cart": "Right-anchored drawer",
    "Data Table": "Mono uppercase column headers",
    "Auth Forms": "Centered cards on canvas",
    "Modal Dialog": "Centered card over",
    "Empty State": "Outlined icon tile",
    "Toast Stack": "Four semantic variants",
}


def platform_targets(soup):
    """在翻译前按英文模板和结构定位共享模块。"""
    footers = []
    for footer in soup.select("footer"):
        columns = footer.select(".footer-grid > .footer-col")
        if tuple(col.find("h6").get_text(strip=True) if col.find("h6") else "" for col in columns)==SHARED_FOOTER:
            footers.append(footer)
    sections = []
    for section in soup.select(".ex-section"):
        heading = section.find(["h2","h3"])
        intro = section.select_one(".ex-intro")
        if heading and intro:
            kind = heading.get_text(" ",strip=True)
            if marker := SHARED_INTROS.get(kind):
                if intro.get_text(" ",strip=True).startswith(marker):
                    sections.append((kind,section))
    return footers,sections


def set_texts(nodes,values):
    for node,value in zip(nodes,values,strict=True):
        node.string = value


def set_item_text(node,value):
    """仅替换列表正文，保留用于展示的图标和圆点。"""
    text = next((part for part in node.find_all(string=True,recursive=False) if part.strip()),None)
    if text is None:
        node.append(value)
    else:
        text.replace_with(value)


def update_pricing(section,brand,platform,product_target):
    default = OFFER_GROUPS[platform]
    heading,monthly,raw_cards = BRAND_OFFERS.get(brand,default)
    section.find(["h2","h3"]).string = heading
    section.select_one(".ex-intro").string = (
        "比较不同套餐的适用对象和能力，所示月费为模拟数据。"
        if monthly else "比较三个选项的用途与包含内容，中间卡片示范强调状态。"
    )
    descriptions = {
        "warp": ("管理本机项目与个人命令历史。","在团队之间共享常用命令，并按角色管理权限。","为组织统一配置工作区、身份和审计记录。"),
        "dell-1996": ("查看 Dimension XPS Pro 的基础硬件。","为 Dimension XPS Pro 比较内存、存储和显示器选配。","查看 Dimension XPS Pro 的安装、保修和售后支持。"),
        "stripe": ("查阅账户余额与安全设置。","按交易类型查阅处理状态和费用。","整理账单和对账记录，查看支持入口。"),
        "uber": ("查看单人行程的起终点与服务地区。","按乘客人数和行李需求安排接送。","选择未来的出发时段并查看预订记录。"),
    }.get(brand)
    cards = section.select(".ex-tier-card")
    for index,(card,details) in enumerate(zip(cards,raw_cards.split(";"),strict=True),1):
        name,*features = details.split("|")
        label = card.select_one(".ex-mono")
        label.string = name
        price = card.select_one(".ex-tier-price")
        unit = price.find_next_sibling()
        if monthly:
            unit.string = "/ 月 · 示例"
        else:
            price.string = f"{index:02d}"
            unit.string = "选项"
        card.find("p").string = descriptions[index-1] if descriptions else f"适合需要{features[0]}与{features[1]}的场景。"
        for item,feature in zip(card.select(".ex-features li"),features,strict=True):
            set_item_text(item,feature)
        for badge in label.find_next_siblings("span"):
            if badge.get_text(strip=True):
                badge.string = "推荐示例"
        action = card.select_one(".ex-tier-cta")
        if product_target:
            action.name = "a"
            action["href"] = f"#{product_target}"
            action.string = "查看装机配置"
        else:
            action.string = "静态试样"


CONSOLE_EXAMPLES = {
    "dell-1996": ("订单账户","装机配置","电脑配置清单","处理器升级|内存扩展|硬盘选配|显示器配置|设备服务","确认保存配置？","将|扩展配置|保存到|订单账户|，随后可查看或继续调整。","还没有保存的配置","选择处理器、内存与存储后，可在此查看保存的配置。","添加配置"),
    "notion": ("工作区账号","工作区","工作区条目","整理入门文档|审核项目计划|归档会议纪要|维护知识库|更新模板","确认归档页面？","将|项目计划|移至|工作区归档|，随后可在归档列表中查看。","工作区还没有页面","创建首个页面后，可在工作区继续编辑与分享。","创建页面"),
}

WORKSPACES = {"dell-1996": "Dimension XPS Pro · DT-XPS-P166", "notion": "产品手册工作区"}


def update_console_section(kind,section,brand):
    account,subject,table_title,items,confirm,confirm_body,empty,empty_body,empty_action = CONSOLE_EXAMPLES[brand]
    heading = section.find(["h2","h3"])
    workspace = WORKSPACES[brand]
    if kind=="Data Table":
        heading.string = table_title
        set_texts(section.select("thead th")[1:],("编号","负责人",subject,"状态","更新时间 ↓"))
        for index,(row,item) in enumerate(zip(section.select("tbody tr"),items.split("|"),strict=True),1):
            cells = row.select("td")
            set_texts(cells[1:4],(f"{'CFG' if brand=='dell-1996' else 'DOC'}-{index:03d}",f"成员 {index:02d}",item))
        for state,value in (("ok","已完成"),("pending","待处理"),("fail","处理失败")):
            for label in section.select(f".ex-status.{state}"):
                label.string = value
        section.select_one(".ex-intro").string = f"{workspace}的示例记录，展示行底色、状态徽标与分页布局。"
        section.select_one(".ex-pager").parent.parent.find("span").string = "1–5 · 示例条目"
    elif kind=="Auth Forms":
        heading.string = f"{account}示例"
        section.select_one(".ex-intro").string = f"{workspace}的登录与注册表单试样，展示字段和主要操作。"
        set_texts(section.select("div.ex-mono"),("登录","注册"))
        fields = section.select(".ex-field-label")
        set_texts(fields,("账号邮箱","密码","姓名","账号邮箱","密码"))
        for field in section.select('input[type="email"]'):
            field["placeholder"] = "demo@example.invalid"
        section.select_one('input[type="text"]')["placeholder"] = "示例成员"
        set_texts(section.select("h3"),(f"登录{account}",f"创建{account}"))
        set_texts(section.select("button.ex-outlined"),("使用组织账号登录","使用组织账号注册"))
        terms = next(span for span in section.select("label span") if span.find("a"))
        agreement,privacy = terms.find_all("a")
        agreement.string,privacy.string = "服务条款","隐私政策"
        fragments = [text for text in terms.find_all(string=True,recursive=False) if text.strip()]
        for text in fragments:
            text.extract()
        terms.insert(0,"我已阅读并同意")
        privacy.insert_before("和")
        terms.append("。")
    elif kind=="Modal Dialog":
        section.find("h4").string = confirm
        section.select_one(".ex-intro").string = f"{workspace}的确认弹窗试样，展示取消与确认操作的位置。"
        emphasis = section.select("strong")
        body = emphasis[0].parent
        opening,first,middle,second,closing = confirm_body.split("|")
        body.clear()
        body.append(opening)
        emphasis[0].string = "DT-XPS-P166 扩展配置" if brand=="dell-1996" else first
        body.append(emphasis[0])
        body.append(middle)
        emphasis[1].string = "产品手册工作区的归档列表" if brand=="notion" else second
        body.append(emphasis[1])
        body.append(closing)
        section.select_one("button.ex-primary").string = "确认示例"
        section.select_one("button.ex-textlink").string = "取消"
    elif kind=="Empty State":
        section.select_one(".ex-intro").string = f"{workspace}初次使用时的空状态，展示说明和下一步提示。"
        title = section.find("h4")
        title.string = empty
        title.find_next_sibling("p").string = empty_body
        section.select_one("button.ex-primary").string = empty_action
        section.select_one(".ex-mono").string = "/0.1 · 空状态"
    elif kind=="Toast Stack":
        messages = (
            ("信息","正在同步页面","产品手册工作区正在同步项目计划。"),
            ("成功","页面已归档","可在产品手册工作区的归档列表查看项目计划。"),
            ("警告","工作区存储即将用完","清理产品手册工作区的旧附件后可继续上传。"),
            ("错误","页面同步失败","项目计划的本地编辑已保留，可在连接恢复后重试。"),
        )
        for toast,copy in zip(section.select(".ex-toast"),messages,strict=True):
            content = toast.select_one(".ex-mono")
            set_texts((content,*content.parent.find_next_siblings("div")),copy)
            toast.find("button")["aria-label"] = "关闭提示"
    else:
        heading.string = "电脑配件购物车"
        section.find("h4").string = "电脑配件购物车"
        section.select_one(".ex-intro").string = f"{workspace}的选配清单，展示数量、价格与小计。"
        section.select_one(".ex-cart-drawer .ex-mono").string = "/0.1 · 购物车"
        for row,(item,spec) in zip(section.select("li"),(
            ("内存扩展套件","桌面电脑内存"),("键盘与鼠标套装","有线配件"),("外置存储设备","备份配件"),
        ),strict=True):
            labels = row.select("span")
            set_texts(labels[1:4],(item,spec,"数量 1"))
        section.select_one(".ex-cart-drawer p").string = "所示配件价格与小计均为模拟数据。"
        section.select_one(".ex-cart-drawer button.ex-primary").string = "查看订单示例"
        section.select_one(".ex-cart-drawer a").string = "继续浏览配件"


def apply_platform_examples(soup,brand,targets):
    platform = PLATFORM_BY_BRAND[brand]
    soup.body["data-platform-type"] = platform
    footers,sections = targets
    for footer in footers:
        columns = BRAND_FOOTERS.get(brand,FOOTERS[platform]).split(";")
        for column,content in zip(footer.select(".footer-grid > .footer-col"),columns,strict=True):
            set_texts(column.select("h6, span"),content.split("|"))
        footer["data-platform-example"] = "footer"
        label = soup.new_tag("p",attrs={"class":"design-demo-note"})
        label.string = f"栏目演示 · {platform}"
        footer.select_one(".footer-grid").insert_before(label)
    for kind,section in sections:
        section["data-platform-example"] = kind
        note = section.select_one(".design-demo-note")
        if note is None:
            note = soup.new_tag("p",attrs={"class":"design-demo-note"})
            section.find(["h2","h3"]).insert_after(note)
        note.string = "静态试样。所示资料为演示数据。"
        if kind=="Pricing Tiers":
            target = None
            if brand=="dell-1996":
                target = "design-example-pc-config"
                heading = next(h for h in soup.select(".ex-section .ex-h2") if h.get_text(strip=True)=="产品选择器")
                heading["id"] = target
            update_pricing(section,brand,platform,target)
        else:
            update_console_section(kind,section,brand)
        for control in section.select('button, a[href="#"]'):
            control.name = "span"
            for attr in ("href","type","aria-label","aria-current","onclick","tabindex","disabled"):
                control.attrs.pop(attr,None)
