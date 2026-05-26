import { HttpClient } from "./http.ts";
import { PaginatedResponse, Response } from "./types.ts";

export interface Sticker {
  id: number;
  slug: string;
  title: string;
  tags: string[];
  type: "sticker";
  blur_preview: string;
  file: Record<StickerSize, Record<StickerFormat, StickerFile>>;
}

type StickerSize = "xs" | "sm" | "md" | "hd";
type StickerFormat = "gif" | "webp" | "jpg" | "mp4" | "webm";

export interface StickerFile {
  url: string;
  width: number;
  height: number;
  size: number;
}

export interface StickerCategory {
  category: string;
  query: string;
  preview_url: string;
}

export interface StickerListResponse extends PaginatedResponse {
  data: PaginatedResponse["data"] & {
    data: Sticker[];
  };
}

export interface StickerCategoriesResponse extends Response {
  data: {
    data: StickerCategory[];
  };
}

export interface StickerActionResponse extends Response {}

export interface StickerListOptions {
  page?: number;
  perPage?: number;
  customerId?: string;
  locale?: string;
  contentFilter?: string;
  formatFilter?: StickerFormat | StickerFormat[];
}

export interface StickerRecentOptions {
  page?: number;
  perPage?: number;
}

export interface StickerShareOptions {
  customerId?: string;
  q?: string;
}

export interface StickerReportOptions {
  customerId?: string;
  reason: string;
}

export class StickersClient {
  constructor(private readonly http: HttpClient) {}

  public trending<TResponse = StickerListResponse>(options: StickerListOptions = {}): Promise<TResponse> {
    return this.http.request<TResponse>(
      `stickers/trending${this.http.buildQuery({
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

  public search<TResponse = StickerListResponse>(query: string, options: StickerListOptions = {}): Promise<TResponse> {
    return this.http.request<TResponse>(
      `stickers/search${this.http.buildQuery({
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

  public categories<TResponse = StickerCategoriesResponse>(locale?: string): Promise<TResponse> {
    return this.http.request<TResponse>(
      `stickers/categories${this.http.buildQuery({ locale })}`,
      { method: "GET" },
    );
  }

  public recent<TResponse = StickerListResponse>(customerId: string, options: StickerRecentOptions = {}): Promise<TResponse> {
    return this.http.request<TResponse>(
      `stickers/recent/${encodeURIComponent(customerId)}${this.http.buildQuery({
        page: options.page,
        per_page: options.perPage,
      })}`,
      { method: "GET" },
    );
  }

  public items<TResponse = StickerListResponse>(slugs: string[] | string): Promise<TResponse> {
    const slugValue = Array.isArray(slugs) ? slugs.join(",") : slugs;

    return this.http.request<TResponse>(
      `stickers/items${this.http.buildQuery({ slugs: slugValue })}`,
      { method: "GET" },
    );
  }

  public deleteRecent<TResponse = StickerActionResponse>(customerId: string, slug: string): Promise<TResponse> {
    return this.http.request<TResponse>(
      `stickers/recent/${encodeURIComponent(customerId)}${this.http.buildQuery({ slug })}`,
      { method: "DELETE" },
    );
  }

  public share<TResponse = StickerActionResponse>(slug: string, options: StickerShareOptions = {}): Promise<TResponse> {
    return this.http.request<TResponse>(
      `stickers/share/${encodeURIComponent(slug)}${this.http.buildQuery({
        customer_id: options.customerId,
        q: options.q,
      })}`,
      { method: "POST" },
    );
  }

  public report<TResponse = StickerActionResponse>(slug: string, options: StickerReportOptions): Promise<TResponse> {
    return this.http.request<TResponse>(
      `stickers/report/${encodeURIComponent(slug)}${this.http.buildQuery({
        customer_id: options.customerId,
        reason: options.reason,
      })}`,
      { method: "POST" },
    );
  }
}

