"""仅在本机提供设计目录和预览资料。"""

import errno
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import sys
from threading import Thread
from time import perf_counter
from urllib.parse import quote, unquote, urlsplit


ROOT = Path(__file__).resolve().parent.parent
PROTOTYPES = {
    "": "docs/prototypes/preview.html",
    "preview.html": "docs/prototypes/preview.html",
    "local-preview.html": "docs/prototypes/local-preview.html",
}
PUBLIC_FILES = set(PROTOTYPES.values())
PUBLIC_PREFIXES = ("localized/", "content/design-systems/", "docs/sources/research/getdesign-home/")


class DesignHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def setup(self):
        super().setup()
        self.started = perf_counter()

    def end_headers(self):
        self.send_header("Content-Security-Policy", "frame-ancestors http://127.0.0.1:*")
        super().end_headers()

    def log_request(self, code="-", size="-"):
        path = urlsplit(getattr(self, "path", "/")).path
        elapsed = (perf_counter() - self.started) * 1000
        self.log_message("%s %r → %s · %.1f ms", getattr(self, "command", "-"), path, code, elapsed)

    def send_head(self):
        path = unquote(urlsplit(self.path).path)
        if path == "/health":
            self.send_response(204)
            self.end_headers()
            return None
        relative = path.lstrip("/")
        relative = PROTOTYPES.get(relative, relative)
        parts = relative.split("/")
        if (relative not in PUBLIC_FILES and not relative.startswith(PUBLIC_PREFIXES)
                or any(not part or part.startswith(".") or "\\" in part for part in parts)):
            self.send_error(404)
            return None
        target = (ROOT / relative).resolve()
        if ROOT not in target.parents or not target.is_file():
            self.send_error(404)
            return None
        self.path = quote("/" + relative)
        return super().send_head()

    def do_POST(self):
        if urlsplit(self.path).path != "/api/shutdown":
            self.send_error(404)
            return
        origin = f"http://127.0.0.1:{self.server.server_port}"
        if (self.headers.get("Origin") != origin
                or self.headers.get("X-Designforge-Action") != "shutdown"):
            self.send_error(403)
            return
        self.send_response(204)
        self.end_headers()
        Thread(target=self.server.shutdown, daemon=True).start()


def main(host, port):
    if host != "127.0.0.1":
        return 1
    try:
        server = ThreadingHTTPServer((host, port), DesignHandler)
    except OSError as error:
        print(error, file=sys.stderr)
        return 98 if error.errno in (errno.EADDRINUSE, 10048) else 1
    with server:
        print(f"[服务] 已就绪 http://{host}:{server.server_port}/")
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1], int(sys.argv[2])))
