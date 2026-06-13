import { HttpClient } from "./http.ts";
import { Response } from "./types.ts";

export interface SearchOptions {
  limit?: number;
}

export interface SearchSuggestionsResponse extends Response {
  data: {
    data: string[];
  };
}

export interface SearchAutocompleteResponse extends Response {
  data: {
    data: string[];
  };
}

export class SearchClient {
  constructor(private readonly http: HttpClient) {}

  public suggestions<TResponse = SearchSuggestionsResponse>(
    query: string,
    options: SearchOptions = {},
  ): Promise<TResponse> {
    return this.http.request<TResponse>(
      `search-suggestions/${encodeURIComponent(query)}${this.http.buildQuery({
        limit: options.limit,
      })}`,
      { method: "GET" },
    );
  }

  public autocomplete<TResponse = SearchAutocompleteResponse>(
    query: string,
    options: SearchOptions = {},
  ): Promise<TResponse> {
    return this.http.request<TResponse>(
      `autocomplete/${encodeURIComponent(query)}${this.http.buildQuery({
        limit: options.limit,
      })}`,
      { method: "GET" },
    );
  }
}
