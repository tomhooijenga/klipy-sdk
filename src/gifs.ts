import {
  MediaActionResponse,
  MediaCategoriesResponse,
  MediaCategory,
  MediaFile,
  MediaItem,
  MediaListOptions,
  MediaListResponse,
  MediaRecentOptions,
  MediaReportOptions,
  MediaShareOptions,
} from "./media.ts";

export type GifFormat = "gif" | "webp" | "jpg" | "mp4" | "webm";
export type Gif = MediaItem<"gif", GifFormat>;
export type GifFile = MediaFile;
export type GifCategory = MediaCategory;
export type GifListResponse = MediaListResponse<Gif>;
export type GifCategoriesResponse = MediaCategoriesResponse<GifCategory>;
export type GifActionResponse = MediaActionResponse;
export type GifListOptions = MediaListOptions<GifFormat>;
export type GifRecentOptions = MediaRecentOptions;
export type GifShareOptions = MediaShareOptions;
export type GifReportOptions = MediaReportOptions;
