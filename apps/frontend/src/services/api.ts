const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "/api/v1";

export async function getHealth(): Promise<{ status: string; database: string }> {
  const response = await fetch(API_BASE_URL + "/health");
  if (!response.ok) throw new Error("API health check failed: " + response.status);
  return response.json();
}
