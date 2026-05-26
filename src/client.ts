import { HttpClient } from "./http.ts";
import { GifsClient } from "./gifs.ts";
import { StickersClient } from "./stickers.ts";

export class KlipyClient {

  http: HttpClient;
  gifs: GifsClient;
  stickers: StickersClient;

  constructor(protected readonly apiKey: string) {
    this.http = new HttpClient(apiKey);
    this.gifs = new GifsClient(this.http);
    this.stickers = new StickersClient(this.http);
  }
}