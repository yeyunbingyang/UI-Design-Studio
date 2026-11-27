import os
from pathlib import Path

from sqlalchemy import create_engine, text
from sqlalchemy.orm import DeclarativeBase, sessionmaker

BACKEND_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_DATA_DIR = BACKEND_ROOT / "data"
DATA_DIR = Path(os.getenv("DESIGNFORGE_DATA_DIR", str(DEFAULT_DATA_DIR))).resolve()
DATA_DIR.mkdir(parents=True, exist_ok=True)

DEFAULT_DATABASE_URL = "sqlite:///" + (DATA_DIR / "designforge.db").as_posix()
DATABASE_URL = os.getenv("DATABASE_URL", DEFAULT_DATABASE_URL)

connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}
engine = create_engine(DATABASE_URL, connect_args=connect_args, pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)


class Base(DeclarativeBase):
    pass


def check_database() -> bool:
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
        return True
    except Exception:
        return False
