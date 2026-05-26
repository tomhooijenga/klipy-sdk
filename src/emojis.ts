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

export type EmojiFormat = "png" | "webp";
export type Emoji = MediaItem<"emoji", EmojiFormat>;
export type EmojiFile = MediaFile;
export type EmojiCategory = MediaCategory;
export type EmojiListResponse = MediaListResponse<Emoji>;
export type EmojiCategoriesResponse = MediaCategoriesResponse<EmojiCategory>;
export type EmojiActionResponse = MediaActionResponse;
export type EmojiListOptions = MediaListOptions<EmojiFormat>;
export type EmojiRecentOptions = MediaRecentOptions;
export type EmojiShareOptions = MediaShareOptions;
export type EmojiReportOptions = MediaReportOptions;

