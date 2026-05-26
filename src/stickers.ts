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

export type StickerFormat = "gif" | "webp" | "jpg" | "mp4" | "webm";
export type Sticker = MediaItem<"sticker", StickerFormat>;
export type StickerFile = MediaFile;
export type StickerCategory = MediaCategory;
export type StickerListResponse = MediaListResponse<Sticker>;
export type StickerCategoriesResponse = MediaCategoriesResponse<StickerCategory>;
export type StickerActionResponse = MediaActionResponse;
export type StickerListOptions = MediaListOptions<StickerFormat>;
export type StickerRecentOptions = MediaRecentOptions;
export type StickerShareOptions = MediaShareOptions;
export type StickerReportOptions = MediaReportOptions;

