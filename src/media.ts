import { PaginatedResponse, Response } from "./types.ts";

export type MediaType = "gif" | "sticker" | "static-meme" | "emoji" | "clip";
export type MediaSize = "xs" | "sm" | "md" | "hd";
export type MediaFormat = "gif" | "webp" | "jpg" | "mp4" | "webm";

export interface MediaFile {
  url: string;
  width: number;
  height: number;
  size: number;
}

export interface MediaItem<
  TType extends MediaType,
  TFormat extends string = MediaFormat,
> {
  id: number;
  slug: string;
  title: string;
  tags: string[];
  type: TType;
  blur_preview: string;
  file: Record<MediaSize, Record<TFormat, MediaFile>>;
}

export interface MediaCategory {
  category: string;
  query: string;
  preview_url: string;
}

export interface MediaListResponse<TItem> extends PaginatedResponse {
  data: PaginatedResponse["data"] & {
    data: TItem[];
  };
}

export interface MediaCategoriesResponse<
  TCategory = MediaCategory,
> extends Response {
  data: {
    data: TCategory[];
  };
}

export interface MediaActionResponse extends Response {}

export interface MediaListOptions<TFormat extends string = MediaFormat> {
  page?: number;
  perPage?: number;
  customerId?: string;
  locale?: string;
  contentFilter?: string;
  formatFilter?: TFormat | TFormat[];
}

export interface MediaRecentOptions {
  page?: number;
  perPage?: number;
}

export interface MediaShareOptions {
  customerId?: string;
  q?: string;
}

export interface MediaReportOptions {
  customerId?: string;
  reason:
    | "nudity"
    | "violence"
    | "hate_speech"
    | "harassment"
    | "spam"
    | "misinformation"
    | "copyright"
    | "offensive"
    | "illegal"
    | "broken"
    | "low_quality"
    | "not_relevant"
    | "impersonation";
}
