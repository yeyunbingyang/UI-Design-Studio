"""按源文语境修正反复出现的误译，并记录需要复核的原文。"""

from collections import Counter
import re


CONNECTIVES = {"and":"和","or":"或","and/or":"和／或","with":"配合"}

REVIEW_FLAGS = re.compile(
    r"[⁇�▁]|[_+=*?!]{24,}|关闭白话|钢筋混凝土|财务报告和已审计财务报表|品牌电压"
    r"|人文主义圣人|边界拉迪乌斯|铁路|彩色调色板|窗帘|铬|造型师|纸牌和集装箱|签名组件"
)
RAIL_CONTEXTS = (
    (r"(?:right|left|side|icon|sidebar|account|utility|toc|purchase|reservation|sticky)[ -]+rails?\b|\brails? (?:folds under|collapses)","侧栏"),
    (r"(?:live[- ]timeline|timeline|dot[- ]and|dot|silver)[ -]+rails?\b|\brails? (?:between|beside)","时间轴连线"),
    (r"(?:section|vertical|leadership|companion|teal|crimson)[ -]+rails?\b|\brails? (?:occupying|moving above)","栏目色条"),
    (r"(?:game(?: tile)?|card|thumbnail|horizontal|scrolling|carousel|multi-tile)[ -]+rails?\b|\brails? (?:scroll|shorten)","横向列表"),
    (r"(?:tab|navigation|category)[ -]+rails?\b|sub-nav[^.]*\bscroll-rail\b","导航条"),
    (r"\bpayment rails?\b","支付通道"),
)


class TranslationReview:
    def __init__(self):
        self.location = ""
        self.counts = Counter()
        self.fallbacks = set()

    def inspect(self,source,translated,retains):
        findings = REVIEW_FLAGS.findall(translated)
        if not findings:
            return translated
        source, original = source.strip(), translated
        lowered = source.casefold()
        if re.search(r"\band\b",lowered) and not re.search(r"\b(?:financial statements|audited|accounts)\b",lowered):
            translated = translated.replace("财务报告和已审计财务报表","和")
        material_chrome = re.search(r"\b(?:chrome[- ]plated|chrome finish|chrome trim|chrome accent|mirror chrome)\b",lowered)
        if re.search(r"\bChrome\b",source):
            translated = translated.replace("铬浏览器","Chrome 浏览器").replace("谷歌铬","Chrome")
        if "铬" in translated and re.search(r"\bchrome\b",lowered) and not material_chrome and "Chrome" not in source:
            translated = re.sub(r"(?<!镀)铬","界面框架",translated)
            translated = re.sub(r"界面(?:的)?界面框架","界面框架",translated)
        if "铬" in translated and re.search(r"\bchroma\b",lowered) and not re.search(r"\bchrome\b",lowered):
            translated = translated.replace("铬","色度")
        if "铁路" in translated and re.search(r"\brails?\b",lowered) and not re.search(r"\b(?:railway|train|railroad)\b",lowered):
            terms = {replacement for expression,replacement in RAIL_CONTEXTS if re.search(expression,lowered)}
            if len(terms)==1:
                translated = translated.replace("铁路",terms.pop())
                translated = re.sub(r"(左侧|右侧)侧栏",r"\1栏",translated)
                translated = translated.replace("时间轴时间轴连线","时间轴连线").replace("横向横向列表","横向列表")
                translated = translated.replace("支付支付通道","支付通道")
        if "窗帘" in translated and re.search(r"\b(?:terminal|code)[ -]+(?:wells?|panes?)\b|\bstacked panes\b",lowered):
            translated = translated.replace("窗帘","面板")
        if re.search(r"\bcolou?r palette\b",lowered):
            translated = translated.replace("彩色调色板","配色")
        if lowered=="cards & containers":
            translated = translated.replace("纸牌和集装箱","卡片与容器")
        if lowered=="signature components":
            translated = translated.replace("签名组件","标志性组件")

        remaining = REVIEW_FLAGS.findall(translated)
        if remaining and set(remaining)=={"铬"} and material_chrome and retains(source,translated):
            self.counts["保留合法用词"] += 1
            return translated
        if remaining or not retains(source,translated):
            # 附带物料或品牌名称的合法文字可能出现在其他上下文，留给源文复核。
            self.counts["保留原文"] += 1
            self.fallbacks.add((self.location,source,"、".join(dict.fromkeys(remaining or findings))))
            return None
        if translated!=original:
            self.counts["语境校订"] += 1
        return translated
