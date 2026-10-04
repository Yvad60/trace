class ApiClient {
  protected BASE_URL_: string = "/api";
  constructor() {}

  async getLatestSynchronizationTime(): Promise<string> {
    return fetch(`${this.BASE_URL_}/sync/latest-time`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch latest synchronization time");
        }
        return response.json();
      })
      .then((data) => data.latestTime);
  }
}

const apiClient = new ApiClient();
export default apiClient;
