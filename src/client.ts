import { HttpClient } from "./http.ts";
import { MediaClient } from "./media-client.ts";
import type { Emoji } from "./emojis.ts";
import { EmojiClient } from "./emojis.ts";
import type { Gif } from "./gifs.ts";
import type { Meme } from "./memes.ts";
import type { Sticker } from "./stickers.ts";
import { ClipsClient } from "./clips.ts";
import { SearchClient } from "./search.ts";

export class KlipyClient {
  http: HttpClient;
  clips: ClipsClient;
  emojis: EmojiClient;
  gifs: MediaClient<Gif>;
  memes: MediaClient<Meme>;
  stickers: MediaClient<Sticker>;
  search: SearchClient;

  constructor(protected readonly apiKey: string) {
    this.http = new HttpClient(apiKey);
    this.clips = new ClipsClient(this.http);
    this.emojis = new EmojiClient(this.http, "emojis");
    this.gifs = new MediaClient(this.http, "gifs");
    this.memes = new MediaClient(this.http, "memes");
    this.stickers = new MediaClient(this.http, "stickers");
    this.search = new SearchClient(this.http);
  }
}
