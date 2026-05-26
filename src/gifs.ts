import {HttpClient} from "./http.ts";
import {PaginatedResponse, Response} from "./types.ts";

export interface Gif {
    id: number;
    slug: string;
    title: string;
    tags: string[]
    type: 'gif';
    blur_preview: string;
    file: Record<GifSize, Record<GifFormat, GifFile>>
}

type GifSize = 'xs' | 'sm' | 'md' | 'hd';
type GifFormat = 'gif' | 'webp' | 'jpg' | 'mp4' | 'webm';

export interface GifFile {
    url: string;
    width: number;
    height: number;
    size: number;
}

export interface GifCategory {
    category: string;
    query: string;
    preview_url: string;
}

export interface GifListResponse extends PaginatedResponse {
    data: PaginatedResponse['data'] & {
        data: Gif[]
    }
}

export interface GifCategoriesResponse extends Response {
    data: {
        data: GifCategory[];
    }
}

export interface GifActionResponse extends Response {
}

export interface GifListOptions {
    page?: number;
    perPage?: number;
    customerId?: string;
    locale?: string;
    contentFilter?: string;
    formatFilter?: GifFormat | GifFormat[];
}

export interface GifRecentOptions {
    page?: number;
    perPage?: number;
}

export interface GifShareOptions {
    customerId?: string;
    q?: string;
}

export interface GifReportOptions {
    customerId?: string;
    reason: string;
}

export class GifsClient {
    constructor(private readonly http: HttpClient) {
    }

    public trending<TResponse = GifListResponse>(options: GifListOptions = {}): Promise<TResponse> {
        return this.http.request<TResponse>(
            `gifs/trending${this.http.buildQuery({
                page: options.page,
                per_page: options.perPage,
                customer_id: options.customerId,
                locale: options.locale,
                content_filter: options.contentFilter,
                format_filter: Array.isArray(options.formatFilter) ? options.formatFilter.join(",") : options.formatFilter,
            })}`,
            {method: "GET"},
        );
    }

    public search<TResponse = GifListResponse>(query: string, options: GifListOptions = {}): Promise<TResponse> {
        return this.http.request<TResponse>(
            `gifs/search${this.http.buildQuery({
                q: query,
                page: options.page,
                per_page: options.perPage,
                customer_id: options.customerId,
                locale: options.locale,
                content_filter: options.contentFilter,
                format_filter: Array.isArray(options.formatFilter) ? options.formatFilter.join(",") : options.formatFilter,
            })}`,
            {method: "GET"},
        );
    }

    public categories<TResponse = GifCategoriesResponse>(locale?: string): Promise<TResponse> {
        return this.http.request<TResponse>(
            `gifs/categories${this.http.buildQuery({locale})}`,
            {method: "GET"},
        );
    }

    public recent<TResponse = GifListResponse>(customerId: string, options: GifRecentOptions = {}): Promise<TResponse> {
        return this.http.request<TResponse>(
            `gifs/recent/${encodeURIComponent(customerId)}${this.http.buildQuery({
                page: options.page,
                per_page: options.perPage,
            })}`,
            {method: "GET"},
        );
    }

    public items<TResponse = GifListResponse>(slugs: string[] | string): Promise<TResponse> {
        const slugValue = Array.isArray(slugs) ? slugs.join(",") : slugs;

        return this.http.request<TResponse>(
            `gifs/items${this.http.buildQuery({slugs: slugValue})}`,
            {method: "GET"},
        );
    }

    public deleteRecent<TResponse = GifActionResponse>(customerId: string, slug: string): Promise<TResponse> {
        return this.http.request<TResponse>(
            `gifs/recent/${encodeURIComponent(customerId)}${this.http.buildQuery({slug})}`,
            {method: "DELETE"},
        );
    }

    public share<TResponse = GifActionResponse>(slug: string, options: GifShareOptions = {}): Promise<TResponse> {
        return this.http.request<TResponse>(
            `gifs/share/${encodeURIComponent(slug)}${this.http.buildQuery({
                customer_id: options.customerId,
                q: options.q,
            })}`,
            {method: "POST"},
        );
    }

    public report<TResponse = GifActionResponse>(slug: string, options: GifReportOptions): Promise<TResponse> {
        return this.http.request<TResponse>(
            `gifs/report/${encodeURIComponent(slug)}${this.http.buildQuery({
                customer_id: options.customerId,
                reason: options.reason,
            })}`,
            {method: "POST"},
        );
    }
}

