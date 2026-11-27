import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv

BACKEND_ROOT = Path(__file__).resolve().parents[2]
load_dotenv(BACKEND_ROOT / ".env")


def _csv_env(name: str, default: str) -> list[str]:
    return [item.strip() for item in os.getenv(name, default).split(",") if item.strip()]


@dataclass(frozen=True)
class Settings:
    app_env: str
    app_host: str
    app_port: int
    cors_origins: list[str]


settings = Settings(
    app_env=os.getenv("APP_ENV", "development"),
    app_host=os.getenv("APP_HOST", "127.0.0.1"),
    app_port=int(os.getenv("APP_PORT", "28717")),
    cors_origins=_csv_env("CORS_ORIGINS", "http://127.0.0.1:5173"),
)
