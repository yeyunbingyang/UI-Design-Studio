"""识别设计规范和样张中应按原文保留的技术字面量。"""

from collections import Counter
import re


CSS_PROPERTIES = """
align-content align-items align-self animation animation-delay animation-duration animation-timing-function
appearance aspect-ratio backdrop-filter background background-color background-image background-position
background-size block-size border border-bottom border-color border-radius border-style border-width
box-shadow box-sizing color column-gap content display filter flex flex-basis flex-direction flex-grow
flex-shrink flex-wrap font font-family font-feature-settings font-size font-style font-variant-numeric
font-weight gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-row
grid-template-areas grid-template-columns grid-template-rows height inline-size inset justify-content
justify-items left letter-spacing line-clamp line-height list-style margin margin-block margin-inline
max-height max-width min-height min-width mix-blend-mode object-fit opacity outline outline-color
outline-offset overflow overflow-wrap overflow-x overflow-y padding padding-block padding-inline
place-items pointer-events position right row-gap text-align text-decoration text-decoration-color
text-overflow text-shadow text-transform text-underline-offset top transform transform-origin
transition transition-duration transition-property transition-timing-function user-select vertical-align
visibility white-space width word-break z-index
""".split()

CSS_VALUES = """
absolute auto-fill auto-fit balance border-box break-all break-spaces break-word color-mix content-box
currentColor ease-in ease-in-out ease-out ellipsis fit-content fixed flex-end flex-start inline-block
inline-flex inline-grid inherit initial max-content min-content monospace no-wrap nowrap pre-line
pre-wrap relative revert sans-serif space-around space-between space-evenly sticky system-ui
tabular-nums transparent unset
""".split()

CSS_FUNCTIONS = """
attr blur brightness calc clamp color color-mix conic-gradient contrast cubic-bezier drop-shadow
fit-content grayscale hsl hsla hue-rotate invert lab lch linear-gradient matrix max min minmax oklab
oklch radial-gradient repeat repeating-conic-gradient repeating-linear-gradient repeating-radial-gradient
rgb rgba rotate saturate scale sepia skew steps translate translate3d translateX translateY url var
""".split()


def alternatives(values):
    return "|".join(re.escape(value) for value in sorted(set(values),key=lambda value:(-len(value),value)))


class DesignLiterals:
    def __init__(self,font_families):
        # 每个字体族从归档配置提取，长名称优先匹配，避免拆开字体变体。
        font_names = alternatives(font_families)
        value = alternatives(CSS_VALUES)
        property_name = alternatives(CSS_PROPERTIES)
        distinctive = alternatives(name for name in CSS_PROPERTIES if "-" in name)
        expression = r"""[^()"']|"[^"]*"|'[^']*'"""
        for _ in range(4):
            expression = rf"""[^()"']|"[^"]*"|'[^']*'|\((?:{expression})*\)"""
        css_function = rf"\b(?:{alternatives(CSS_FUNCTIONS)})\((?:{expression})*\)"
        media_condition = rf"@(?:media|supports|container)\b(?:[ \t]*(?:only|not|screen|print|all|and|or|\((?:{expression})*\)))+"
        declaration = rf"(?<![\w-])(?-i:{property_name}|--[\w-]+)[ \t]*:[ \t]*(?:{css_function}|[^;|`{{}}\n])+?(?=;|\s*[}}|`]|\s*$)"
        self.pattern = re.compile(
            rf"``+[^`\n]+``+|`[^`\n]+`|\[[^\]\n]*\]\([^\n]*?\)|\{{[\w.-]+\}}|{media_condition}|{declaration}|{css_function}"
            rf"|(?<![\w-])(?:{distinctive}|{value})(?![\w-])"
            r"|(?<![\w-])--[a-z_][\w-]*"
            r"|(?<![\w./])\.[a-z_][\w-]*"
            r"|(?<!:):(?::(?:before|after|placeholder|selection)|(?:hover|active|focus(?:-visible|-within)?|disabled|checked|visited|root|first-child|last-child))\b"
            r"|@(?:media|supports|keyframes|container|font-face|layer)\b|\b(?:prefers-reduced-motion|prefers-color-scheme)\b"
            r"|(?:https?://|mailto:)[^\s<>)]+|</?[a-z][^<>]*>"
            r"|(?<![\w])#[a-f\d]{3,8}\b"
            r"|(?<![\w#])#[a-z_][\w-]*"
            r"|(?<!\w)[+−-]?\d+(?:\.\d+)?(?:[ \t]*(?:px|rem|em|%))?(?:[ \t]*[×→–:][ \t]*[+−-]?\d+(?:\.\d+)?(?:[ \t]*(?:px|rem|em|%))?)+"
            r"|(?<![\w])(?:[<>]=?[ \t]*|[≥≤~≈][ \t]*)?[+−-]?\d+(?:\.\d+)?(?:[ \t]*(?:dvw|dvh|rem|vmin|vmax|px|em|vw|vh|ch|ms|s|deg|%|fr|pt))?(?![\w-])"
            + (rf"|(?<![\w-])(?:{font_names})(?![\w-])" if font_names else ""),
            re.I,
        )
        self.table_value = re.compile(
            r"\b(?:absolute|auto|block|bold|center|flex|grid|hidden|inherit|none|normal|relative|"
            r"uppercase|lowercase|visible)\b",re.I
        )

    def matches(self,text):
        # 独立值、表格单元格或括号参数可确定 CSS 值语义。
        is_table = text.lstrip().startswith("|")

        def boundaries(match):
            before = text[:match.start()].rstrip()
            after = text[match.end():].lstrip()
            return (not before and not after or before.endswith("(") and after.startswith(")")
                    or is_table and before.endswith("|") and after.startswith("|"))

        matches = list(self.pattern.finditer(text))
        matches.extend(match for match in self.table_value.finditer(text) if boundaries(match)
                       and not any(item.start()<match.end() and match.start()<item.end() for item in matches))
        yield from sorted(matches,key=lambda match:match.start())

    def values(self,text):
        return Counter(match[0].strip() for match in self.matches(text))

    def retained(self,source,target):
        return not (self.values(source)-self.values(target))
