import { HttpClient } from "./http.ts";
import { MediaClient } from "./media-client.ts";
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

export type ClipFormat = "mp4" | "gif" | "webp";
export type Clip = MediaItem<"clip", ClipFormat>;
export type ClipFile = MediaFile;
export type ClipCategory = MediaCategory;
export type ClipListResponse = MediaListResponse<Clip>;
export type ClipCategoriesResponse = MediaCategoriesResponse<ClipCategory>;
export type ClipActionResponse = MediaActionResponse;
export type ClipListOptions = MediaListOptions<ClipFormat>;
export type ClipRecentOptions = MediaRecentOptions;
export type ClipShareOptions = MediaShareOptions;
export type ClipReportOptions = MediaReportOptions;

type ClipApiItem = Omit<Clip, "file"> & {
  file: Record<string, string>;
  file_meta: Record<string, MediaFile>;
};

export class ClipsClient extends MediaClient<Clip, ClipCategory> {
  constructor(http: HttpClient) {
    super(http, "clips");
  }

  public async trending<TResponse = MediaListResponse<Clip>>(
    options: MediaListOptions<
      Extract<keyof Clip["file"][keyof Clip["file"]], string>
    > = {},
  ): Promise<TResponse> {
    const response = await super.trending<MediaListResponse<ClipApiItem>>(
      options,
    );
    return this.normalizeListResponse(response) as unknown as TResponse;
  }

  async search<TResponse = MediaListResponse<Clip>>(
    query: string,
    options: MediaListOptions<
      Extract<keyof Clip["file"][keyof Clip["file"]], string>
    > = {},
  ): Promise<TResponse> {
    const response = await super.search<MediaListResponse<ClipApiItem>>(
      query,
      options,
    );
    return this.normalizeListResponse(response) as unknown as TResponse;
  }

  public async recent<TResponse = MediaListResponse<Clip>>(
    customerId: string,
    options: MediaRecentOptions = {},
  ): Promise<TResponse> {
    const response = await super.recent<MediaListResponse<ClipApiItem>>(
      customerId,
      options,
    );
    return this.normalizeListResponse(response) as unknown as TResponse;
  }

  public async items<TResponse = MediaListResponse<Clip>>(
    slugs: string[] | string,
  ): Promise<TResponse> {
    const response = await super.items<MediaListResponse<ClipApiItem>>(slugs);
    return this.normalizeListResponse(response) as unknown as TResponse;
  }

  /**
   * Clips for unknown reasons have a different structure for the files, so we normalize them into the standard MediaItem shape.
   *
   * "file": {
   *   "mp4": "https://static.klipy.com/ii/48a9760ecdd5307ed701eb96ba85d319/30/b5/gKVsArYH.mp4",
   * },
   * "file_meta": {
   *   "mp4": {
   *     "width": 1280,
   *     "height": 536,
   *   },
   * }
   */
  protected convertClipToMedia(clip: ClipApiItem): void {
    Object.entries(clip.file_meta).forEach(([format, file]) => {
      const url = clip.file[format];
      if (url) {
        file.url = url;
        // size is not reported for clips
        file.size = 0;
      }
    });

    // Clip endpoints return format-indexed file payloads, so we normalize into the SDK Clip shape.
    const file = clip.file_meta as Record<ClipFormat, ClipFile>;
    (clip as unknown as Clip).file = {
      xs: file,
      sm: file,
      md: file,
      hd: file,
    };
    delete (clip as { file_meta?: unknown }).file_meta;
  }

  protected normalizeListResponse(
    response: MediaListResponse<ClipApiItem>,
  ): MediaListResponse<ClipApiItem> {
    response.data.data.forEach((clip) => this.convertClipToMedia(clip));
    return response;
  }
}
