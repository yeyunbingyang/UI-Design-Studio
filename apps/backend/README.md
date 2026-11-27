# DesignForge Backend

统一平台 Python 后端，使用 FastAPI、SQLAlchemy 2.x、Alembic、python-dotenv 和 SQLite。

需要 Python 3.11+。请在 apps/backend 目录中执行：

    python -m venv .venv
    # Windows PowerShell: .venv\Scripts\Activate.ps1
    # macOS / Linux: source .venv/bin/activate
    pip install -e ".[dev]"
    # Windows PowerShell: Copy-Item .env.example .env
    # macOS / Linux: cp .env.example .env
    uvicorn app.main:app --reload --host 127.0.0.1 --port 28717

健康检查：http://127.0.0.1:28717/health
API 文档：http://127.0.0.1:28717/docs

默认 SQLite 文件位于 apps/backend/data/designforge.db。可用 DESIGNFORGE_DATA_DIR 指定数据目录，使用 DATABASE_URL 指定数据库连接。数据库文件、上传文件、运行日志和密钥不提交 Git。数据库结构变更使用 Alembic。
