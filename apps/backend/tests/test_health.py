from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_endpoint_reports_service_and_database() -> None:
    response = client.get("/health")
    assert response.status_code == 200
    payload = response.json()
    assert payload["status"] == "ok"
    assert payload["database"] == "ok"


def test_versioned_health_endpoint() -> None:
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    assert response.json()["service"] == "designforge-api"
