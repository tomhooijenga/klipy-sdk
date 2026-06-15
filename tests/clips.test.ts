import { afterEach, describe, expect, it, vi } from "vitest";
import { KlipyClient } from "../src/index.ts";
import clipsList from "./fixtures/clips-list.json" with { type: "json" };

describe("clips", () => {
  afterEach(() => vi.restoreAllMocks());

  const client = new KlipyClient("TEST_KEY");
  const mediaEndpoint = client.clips;

  for (const method of ["trending", "search", "recent"] as const) {
    it(`${method} response normalization`, async () => {
      const fetchSpy = vi.fn((url: string, init?: RequestInit) => {
        return Promise.resolve({
          ok: true,
          status: 200,
          // Deep clone because the response is mutated.
          json: async () => structuredClone(clipsList),
        });
      });

      vi.stubGlobal("fetch", fetchSpy);

      const response = await mediaEndpoint.trending({ page: 1, perPage: 10 });

      expect(fetchSpy).toHaveBeenCalledTimes(1);
      expect(response.result).toBe(true);
      expect(response.data.data).toBeInstanceOf(Array);
      expect(response.data).toHaveProperty("data[0].file.hd.gif", {
        url: "https://static.klipy.com/ii/d0f4326653a6a0faab99b9987b9a194d/06/8b/adW975M3.gif",
        width: 320,
        height: 148,
        size: 0,
      });
      expect(response).not.toHaveProperty("data.data[0].file_meta");
    });
  }
});
