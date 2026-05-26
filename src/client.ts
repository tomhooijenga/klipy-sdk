import { HttpClient } from "./http.ts";
import { MediaClient } from "./media-client.ts";
import type { Gif } from "./gifs.ts";
import type { Meme } from "./memes.ts";
import type { Sticker } from "./stickers.ts";

export class KlipyClient {
  http: HttpClient;
  gifs: MediaClient<Gif>;
  memes: MediaClient<Meme>;
  stickers: MediaClient<Sticker>;

  constructor(protected readonly apiKey: string) {
    this.http = new HttpClient(apiKey);
    this.gifs = new MediaClient(this.http, "gifs");
    this.memes = new MediaClient(this.http, "memes");
    this.stickers = new MediaClient(this.http, "stickers");
  }
}