// src/services/api/client.ts

const BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://api.example.com";

class ApiClient {
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };
    const token = localStorage.getItem("authToken");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "An error occurred");
    }
    return response.json();
  }

  public async get<T>(url: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "GET",
      headers: this.getHeaders(),
    });
    return this.handleResponse(response);
  }

  public async post<T>(url: string, data: any): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    return this.handleResponse(response);
  }

  public async put<T>(url: string, data: any): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "PUT",
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    return this.handleResponse(response);
  }

  public async delete<T>(url: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    });
    return this.handleResponse(response);
  }
}

export const apiClient = new ApiClient();
