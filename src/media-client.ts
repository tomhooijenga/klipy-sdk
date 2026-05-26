import { HttpClient } from "./http.ts";
import {
  MediaActionResponse,
  MediaCategoriesResponse,
  MediaCategory,
  MediaItem,
  MediaListOptions,
  MediaListResponse,
  MediaRecentOptions,
  MediaReportOptions,
  MediaShareOptions,
  MediaType,
} from "./media.ts";

type MediaEndpoint = "gifs" | "stickers" | "memes";

export class MediaClient<TItem extends MediaItem<MediaType, string>, TCategory = MediaCategory> {
  constructor(
    private readonly http: HttpClient,
    private readonly endpoint: MediaEndpoint,
  ) {}

  public trending<TResponse = MediaListResponse<TItem>>(options: MediaListOptions<Extract<keyof TItem["file"][keyof TItem["file"]], string>> = {}): Promise<TResponse> {
    return this.http.request<TResponse>(
      `${this.endpoint}/trending${this.http.buildQuery({
        page: options.page,
        per_page: options.perPage,
        customer_id: options.customerId,
        locale: options.locale,
        content_filter: options.contentFilter,
        format_filter: Array.isArray(options.formatFilter) ? options.formatFilter.join(",") : options.formatFilter,
      })}`,
      { method: "GET" },
    );
  }

  public search<TResponse = MediaListResponse<TItem>>(query: string, options: MediaListOptions<Extract<keyof TItem["file"][keyof TItem["file"]], string>> = {}): Promise<TResponse> {
    return this.http.request<TResponse>(
      `${this.endpoint}/search${this.http.buildQuery({
        q: query,
        page: options.page,
        per_page: options.perPage,
        customer_id: options.customerId,
        locale: options.locale,
        content_filter: options.contentFilter,
        format_filter: Array.isArray(options.formatFilter) ? options.formatFilter.join(",") : options.formatFilter,
      })}`,
      { method: "GET" },
    );
  }

  public categories<TResponse = MediaCategoriesResponse<TCategory>>(locale?: string): Promise<TResponse> {
    return this.http.request<TResponse>(
      `${this.endpoint}/categories${this.http.buildQuery({ locale })}`,
      { method: "GET" },
    );
  }

  public recent<TResponse = MediaListResponse<TItem>>(customerId: string, options: MediaRecentOptions = {}): Promise<TResponse> {
    return this.http.request<TResponse>(
      `${this.endpoint}/recent/${encodeURIComponent(customerId)}${this.http.buildQuery({
        page: options.page,
        per_page: options.perPage,
      })}`,
      { method: "GET" },
    );
  }

  public items<TResponse = MediaListResponse<TItem>>(slugs: string[] | string): Promise<TResponse> {
    const slugValue = Array.isArray(slugs) ? slugs.join(",") : slugs;

    return this.http.request<TResponse>(
      `${this.endpoint}/items${this.http.buildQuery({ slugs: slugValue })}`,
      { method: "GET" },
    );
  }

  public deleteRecent<TResponse = MediaActionResponse>(customerId: string, slug: string): Promise<TResponse> {
    return this.http.request<TResponse>(
      `${this.endpoint}/recent/${encodeURIComponent(customerId)}${this.http.buildQuery({ slug })}`,
      { method: "DELETE" },
    );
  }

  public share<TResponse = MediaActionResponse>(slug: string, options: MediaShareOptions = {}): Promise<TResponse> {
    return this.http.request<TResponse>(
      `${this.endpoint}/share/${encodeURIComponent(slug)}${this.http.buildQuery({
        customer_id: options.customerId,
        q: options.q,
      })}`,
      { method: "POST" },
    );
  }

  public report<TResponse = MediaActionResponse>(slug: string, options: MediaReportOptions): Promise<TResponse> {
    return this.http.request<TResponse>(
      `${this.endpoint}/report/${encodeURIComponent(slug)}${this.http.buildQuery({
        customer_id: options.customerId,
        reason: options.reason,
      })}`,
      { method: "POST" },
    );
  }
}

