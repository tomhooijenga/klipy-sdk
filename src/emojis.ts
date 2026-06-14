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
import { MediaClient } from "./media-client.ts";

export type EmojiFormat = "png" | "webp";
export type Emoji = MediaItem<"emoji", EmojiFormat>;
export type EmojiFile = MediaFile;
export type EmojiCategory = MediaCategory;
export type EmojiListResponse = MediaListResponse<Emoji>;
export type EmojiCategoriesResponse = MediaCategoriesResponse<EmojiCategory>;
export interface EmojiGenerateResponse extends Response {
  data: {
    id: string;
  }
}

export type EmojiStatusResponse =
  | {
      status: "success";
      id: string;
      result: {
        base64_encoded: string;
        mime_type: string;
      };
    }
  | {
      status: "processing" | "failed";
      result: null;
    };
export type EmojiListOptions = MediaListOptions<EmojiFormat>;
export type EmojiRecentOptions = MediaRecentOptions;
export type EmojiShareOptions = MediaShareOptions;
export type EmojiReportOptions = MediaReportOptions;
export interface EmojiGenerateOptions {
  callbackUrl?: string | URL;
}

export class EmojiClient extends MediaClient<Emoji> {
  public generate<TResponse = EmojiGenerateResponse>(
    prompt: string,
    options: EmojiGenerateOptions,
  ): Promise<TResponse> {
    return this.http.request<TResponse>(`${this.endpoint}/generate`, {
      method: "POST",
      body: JSON.stringify({
        prompt,
        callback_url: options.callbackUrl?.toString(),
      }),
    });
  }

  public status<TResponse = EmojiStatusResponse>(
    jobId: string,
  ): Promise<TResponse> {
    return this.http.request<TResponse>(
      `${this.endpoint}/generated/${encodeURIComponent(jobId)}`,
      { method: "GET" },
    );
  }
}
