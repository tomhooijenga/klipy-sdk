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

export type MemeFormat = "png" | "webp";
export type Meme = MediaItem<"static-meme", MemeFormat>;
export type MemeFile = MediaFile;
export type MemeCategory = MediaCategory;
export type MemeListResponse = MediaListResponse<Meme>;
export type MemeCategoriesResponse = MediaCategoriesResponse<MemeCategory>;
export type MemeActionResponse = MediaActionResponse;
export type MemeListOptions = MediaListOptions<MemeFormat>;
export type MemeRecentOptions = MediaRecentOptions;
export type MemeShareOptions = MediaShareOptions;
export type MemeReportOptions = MediaReportOptions;

