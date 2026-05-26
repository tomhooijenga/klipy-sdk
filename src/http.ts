export class HttpClient {
  protected get baseUrl() {
    return `https://api.klipy.com/v1/${this.apiKey}`
  }

  constructor(protected readonly apiKey: string) {
  }

  public async request<TResponse = unknown>(endpoint: string, options: RequestInit): Promise<TResponse> {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, options);

    return await response.json() as TResponse;
  }

  public buildQuery(params: Record<string, string | number | undefined>): string {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        searchParams.set(key, String(value));
      }
    }

    const query = searchParams.toString();
    return query === "" ? "" : `?${query}`;
  }
}
