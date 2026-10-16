import { type TransactionSmsMessages } from "./SMSReader";

function requireEnvVar(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`${name} is not set. Check your .env files.`);
  }
  return value;
}

class ApiClient {
  private readonly baseUrl = requireEnvVar(
    "EXPO_PUBLIC_API_BASE_URL",
    process.env.EXPO_PUBLIC_API_BASE_URL,
  );
  private readonly apiKey = requireEnvVar("EXPO_PUBLIC_API_KEY", process.env.EXPO_PUBLIC_API_KEY);

  private request(path: string, init: RequestInit = {}): Promise<Response> {
    return fetch(`${this.baseUrl}${path}`, {
      ...init,
      headers: {
        ...init.headers,
        "X-API-Key": this.apiKey,
      },
    });
  }

  async getLatestSynchronizationTime(): Promise<string> {
    const response = await this.request("/sync/latest-time");
    if (!response.ok) {
      throw new Error("Failed to fetch latest synchronization time");
    }
    const data = await response.json();
    return data.latestTime;
  }

  async sendTransactions(smsTransactions: TransactionSmsMessages) {
    const response = await this.request("/trace/migrate-sms-transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(smsTransactions),
    });
    if (!response.ok) {
      throw new Error("Failed to migrate SMS transactions");
    }
    return response.json();
  }
}

const apiClient = new ApiClient();
export default apiClient;
