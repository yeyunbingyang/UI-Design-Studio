"""恢复中文样张的风格导航，并从渲染结果更新总览小样。"""

import argparse
from io import BytesIO
import json
from pathlib import Path
import re

from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[4]
ARCHIVE = ROOT / "docs" / "sources" / "research" / "getdesign-home"
LOCALIZED = ROOT / "localized"
CHROME = Path(r"C:\Program Files\Google\Chrome\Application\chrome.exe")

SECTIONS = (
    ("配色", r"colou?r palette|brand (?:colors?|& accent)|monochrome|tone palette|amber &|one blue|five grays|dual-canvas|light canvas|black canvas|white canvas|rausch \+ ink|cream \+ coral|yellow \+ black|off-white canvas|cream canvas|sky-blue atmosphere|rosso corsa|black-on-white duet|on sage canvas|orange on warm cream|blue \+ monolithic"),
    ("字体", r"typography|type scale|type system|type hierarchy|[a-z]+ sans\s*\+|serif\s*\+|font system|typeface|sf pro display|type next|binancenova|cereal vf|display.*monospace|display.*inter|inter-only|coinbasesans|jetbrains mono|waldenburg|ferrarisans|serif for narrative|weight 900|two faces"),
    ("按钮", r"button variants?|^buttons?$|action layer|button styles|primary.*secondary|pills and rectangles|yellow-on-black|rectangular silhouettes|transparent pill|cta system|pill geometry|four roles"),
    ("卡片", r"cards? (?:& surfaces|examples?|and surfaces)|feature cards?|feature tiles?|^cards?$|content surfaces|cards? at|cream cards|card grid|magazine cards|pill cards|saturated cards"),
    ("表单", r"form elements|inputs and labels|^forms?$|text field|^inputs are"),
    ("布局", r"responsive|breakpoints?|spacing scale|layout system|touch targets"),
)

NAV_CSS = """
.design-preview-nav { min-height:48px; }
.design-preview-nav .nav-brand { white-space:normal; overflow-wrap:anywhere; }
.design-preview-nav .nav-links { display:flex; flex-wrap:wrap; gap:8px clamp(10px,2vw,26px); padding-block:5px; }
.design-preview-nav a { text-decoration:none; }
.design-preview-nav .nav-links a { color:inherit; }
.design-preview-nav .nav-links a:hover { text-decoration:underline; text-underline-offset:3px; }
.design-preview-nav a:focus-visible { outline:2px solid currentColor; outline-offset:4px; }
:is([id^=design-section-],[id=design-overview]) { scroll-margin-top:94px; }
@media (max-width:760px) {
  .design-preview-nav { position:static; display:flex; flex-wrap:wrap; gap:3px 12px; padding:8px 12px; height:auto; }
  .design-preview-nav .nav-left { min-width:0; }
  .design-preview-nav > .nav-links { flex:1 1 100%; display:flex; padding-inline:0; }
  .design-preview-nav .nav-cta { display:none; }
  :is([id^=design-section-],[id=design-overview]) { scroll-margin-top:14px; }
}
"""

MEASURE = r"""(previous) => {
  const title = document.querySelector('h1');
  const parents = [];
  for (let node = title; node; node = node.parentElement) parents.push(node);
  if (!parents.includes(document.body)) parents.push(document.body,document.documentElement);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  const context = canvas.getContext('2d',{willReadFrequently:true});
  context.fillStyle = '#fff';
  context.fillRect(0,0,1,1);
  function layersOf(value) {
    const result = [];
    let depth = 0;
    let start = 0;
    for (let offset = 0; offset < value.length; offset++) {
      if (value[offset] === '(') depth++;
      if (value[offset] === ')') depth--;
      if (value[offset] === ',' && depth === 0) {
        result.push(value.slice(start,offset).trim());
        start = offset + 1;
      }
    }
    result.push(value.slice(start).trim());
    return result;
  }
  let gradients = [];
  for (const node of [...parents].reverse()) {
    const css = getComputedStyle(node);
    if (css.backgroundClip.includes('text')) continue;
    context.fillStyle = css.backgroundColor;
    context.fillRect(0,0,1,1);
    if (!css.backgroundColor.startsWith('rgba(') && css.backgroundColor !== 'transparent') gradients = [];
    const layers = layersOf(css.backgroundImage).filter(image => /^(?:repeating-)?(?:linear|radial|conic)-gradient\(/.test(image) && !image.includes('url('));
    gradients.unshift(...layers);
  }
  const pixel = context.getImageData(0,0,1,1).data;
  const background = '#'+[...pixel].slice(0,3).map(channel=>channel.toString(16).padStart(2,'0')).join('');
  const headings = title ? getComputedStyle(title) : null;
  const titleInk = headings?.webkitTextFillColor || headings?.color;
  const ink = titleInk && !['transparent','rgba(0, 0, 0, 0)'].includes(titleInk) ? titleInk : previous.ink;
  const hero = title?.closest('.hero,header,section') ?? title?.parentElement;
  const button = [...(hero?.querySelectorAll('button,a[role=button],a[class*=btn],a[class*=cta]') ?? [])].find(candidate => {
    const color = getComputedStyle(candidate).backgroundColor;
    return candidate.getBoundingClientRect().width && color !== 'rgba(0, 0, 0, 0)' && color !== 'transparent';
  });
  return {canvas:background,ink,accent:button ? getComputedStyle(button).backgroundColor : previous.accent,
    hasAction:Boolean(button),weight:headings?.fontWeight,
    gradient:gradients.join(', '),font:headings?.fontFamily ?? 'Georgia, serif'};
}"""


def make_tag(soup,tag,description=None,**attributes):
    element = soup.new_tag(tag,attrs=attributes)
    if description:
        element.string = description
    return element


def chapter_links(source,sample):
    english = source.find_all(["h2","h3"])
    headings = sample.find_all(["h2","h3"])
    if len(headings)!=len(english):
        raise ValueError("归档与中文样张的章节数不同")
    rows = [(index,en.get_text(" ",strip=True),zh) for index,(en,zh) in enumerate(zip(english,headings),1)]
    matches = []
    used = set()
    for label,pattern in SECTIONS:
        match = next((row for row in rows if row[0] not in used and re.search(pattern,row[1],re.I)),None)
        if match:
            used.add(match[0])
            matches.append((match[0],label,match[2]))
    if not matches:
        first = next(((index,heading) for index,_,heading in rows if heading.name=="h2"),None)
        if first:
            matches.append((first[0],"样张内容",first[1]))
    links = []
    for index,label,heading in sorted(matches):
        if not heading.get("id"):
            heading["id"] = f"design-section-{index}"
        links.append((label,"#"+heading["id"]))
    return links


def install_navigation(source,sample,title):
    old = sample.find("nav",attrs={"data-design-nav":True})
    if old:
        old.decompose()
    old_style = sample.find("style",attrs={"data-design-nav":True})
    if old_style:
        old_style.decompose()
    template = source.find("nav")
    if not template:
        raise ValueError("归档没有顶部导航样式")
    nav_classes = [*template.get("class",[]),"design-preview-nav"]
    nav = make_tag(sample,"nav",**{"class":nav_classes,"aria-label":"样张章节","data-design-nav":"true"})
    brand = make_tag(sample,"span",title,**{"class":"nav-brand"})
    if template.select_one(".nav-left"):
        brand_container = make_tag(sample,"div",**{"class":"nav-left"})
        brand_container.append(brand)
        nav.append(brand_container)
    else:
        nav.append(brand)
    menu = make_tag(sample,"ul",**{"class":"nav-links"})
    for label,target in chapter_links(source,sample):
        row = make_tag(sample,"li")
        row.append(make_tag(sample,"a",label,href=target))
        menu.append(row)
    nav.append(menu)
    title_node = sample.find("h1")
    if template.select_one(".nav-cta") and title_node:
        if not title_node.get("id"):
            title_node["id"] = "design-overview"
        nav.append(make_tag(sample,"a","概览",href="#"+title_node["id"],**{"class":"nav-cta"}))
    host = sample.body
    for class_name in template.parent.get("class",[]):
        if container:=sample.find(template.parent.name,class_=class_name):
            host = container
            break
    host.insert(0,nav)
    style = make_tag(sample,"style",**{"data-design-nav":"true"})
    style.string = NAV_CSS
    sample.head.append(style)


def refresh_samples(catalog,index,chrome=CHROME):
    from playwright.sync_api import sync_playwright

    for item,entry in zip(catalog,index["entries"],strict=True):
        assert item["slug"]==entry["slug"]
        slug = item["slug"]
        original = ARCHIVE/entry["resources"]["light"]["file"]
        localized = LOCALIZED/slug/"preview.html"
        source = BeautifulSoup(original.read_text(encoding="utf-8-sig"),"html.parser")
        sample = BeautifulSoup(localized.read_text(encoding="utf-8-sig"),"html.parser")
        install_navigation(source,sample,item["title"])
        localized.write_text(str(sample),encoding="utf-8")
        item["reference"] = {
            "detail":entry["detail"],
            "archived":index["updatedAt"],
            "markdown":entry["resources"]["markdown"]["final"],
            "preview":entry["resources"]["light"]["final"],
        }

    with sync_playwright() as browser:
        chrome = browser.chromium.launch(executable_path=str(chrome),headless=True)
        page = chrome.new_page(offline=True,viewport={"width":1120,"height":850})
        for item in catalog:
            page.goto((LOCALIZED/item["slug"]/"preview.html").as_uri(),wait_until="load")
            item["samplePalette"] = page.evaluate(MEASURE,item["palette"])
            capture_directory_hero(page,item)
        chrome.close()


def capture_directory_hero(page,item):
    from PIL import Image

    # 只在截图页面隐藏首屏介绍，样张文件仍保留完整内容。
    bounds = page.evaluate("""() => {
      const title = document.querySelector('h1');
      const hero = title?.closest('.hero');
      if (!hero) return null;
      const intro = [...hero.querySelectorAll('p')].find(
        element => title.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING);
      if (intro) intro.style.setProperty('display','none','important');
      return {width:document.documentElement.clientWidth,
        height:Math.ceil(hero.getBoundingClientRect().bottom + scrollY)};
    }""")
    if not bounds or min(bounds.values())<=0:
        raise ValueError(f"{item['slug']} 的首屏截图范围无效")
    png = page.screenshot(full_page=True,clip={"x":0,"y":0,**bounds},animations="disabled")
    destination = LOCALIZED/item["slug"]/"directory-hero.webp"
    with Image.open(BytesIO(png)) as picture:
        picture.thumbnail((640,1200),Image.Resampling.LANCZOS)
        picture.save(destination,"WEBP",quality=84)
        item["directoryHero"] = {"width":picture.width,"height":picture.height}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--chrome",type=Path,default=CHROME)
    args = parser.parse_args()
    overview = ROOT/"docs"/"prototypes"/"preview.html"
    document = overview.read_text(encoding="utf-8")
    payload = re.search(r'(<script id="archive-data" type="application/json">)(.*?)(</script>)',document,re.S)
    catalog = json.loads(payload[2])
    index = json.loads((ARCHIVE/"index.json").read_text(encoding="utf-8"))
    refresh_samples(catalog,index,args.chrome)
    encoded = json.dumps(catalog,ensure_ascii=False,separators=(",",":")).replace("<",r"\u003c")
    overview.write_text(document[:payload.start(2)]+encoded+document[payload.end(2):],encoding="utf-8")
    print(f"已更新 {len(catalog)} 份章节导航、来源信息与风格小样。")


if __name__=="__main__":
    main()
