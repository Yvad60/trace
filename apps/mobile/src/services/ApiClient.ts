import { type TransactionSmsMessages } from "./SMSReader";

class ApiClient {
  private readonly baseUrl = (() => {
    const url = process.env.EXPO_PUBLIC_API_BASE_URL;
    if (!url) {
      throw new Error("EXPO_PUBLIC_API_BASE_URL is not set. Check your .env files.");
    }
    return url;
  })();

  async getLatestSynchronizationTime(): Promise<string> {
    const response = await fetch(`${this.baseUrl}/sync/latest-time`);
    if (!response.ok) {
      throw new Error("Failed to fetch latest synchronization time");
    }
    const data = await response.json();
    return data.latestTime;
  }

  async sendTransactions(smsTransactions: TransactionSmsMessages) {
    const response = await fetch(`${this.baseUrl}/trace/migrate-sms-transactions`, {
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
