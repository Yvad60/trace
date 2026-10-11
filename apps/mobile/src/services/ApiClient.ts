import { type TransactionSmsMessages } from "./SMSReader";

class ApiClient {
  private readonly baseUrl = "http://172.18.2.16:8083/api/v1";

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
