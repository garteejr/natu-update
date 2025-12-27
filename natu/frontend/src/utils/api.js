const BASE_URL = import.meta.env.VITE_API_URL || "http://backend:5000/api";

export async function apiFetch(url, options = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}${url}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw {
      status: res.status,
      message: data.error || "Request error",
    };
  }

  return data;
}
