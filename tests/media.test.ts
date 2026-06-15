import { describe, it, expect, afterEach, vi } from "vitest";
import { KlipyClient } from "../src/index.ts";
import { stubFetch, assertUrlHasParams } from "./test-utils.ts";

describe("Media", () => {
  afterEach(() => vi.restoreAllMocks());

  const mediaTypes = ["gifs", "stickers", "memes", "emojis"] as const;

  for (const media of mediaTypes) {
    const client = new KlipyClient("TEST_KEY");
    const mediaEndpoint = client[media];

    describe(media, () => {
      it("trending", async () => {
        const fetchSpy = stubFetch((urlStr, init) => {
          expect(urlStr).toContain(`/${media}/trending`);
          assertUrlHasParams(urlStr, { page: 1, per_page: 10 });
          expect(init?.method).toBe("GET");
        });

        await mediaEndpoint.trending({ page: 1, perPage: 10 });

        expect(fetchSpy).toHaveBeenCalledTimes(1);
      });

      it("search", async () => {
        const fetchSpy = stubFetch((urlStr, init) => {
          expect(urlStr).toContain(`/${media}/search`);
          assertUrlHasParams(urlStr, { q: "funny cats", page: 2, per_page: 5 });
          expect(init?.method).toBe("GET");
        });

        await mediaEndpoint.search("funny cats", { page: 2, perPage: 5 });

        expect(fetchSpy).toHaveBeenCalledTimes(1);
      });

      it("recent", async () => {
        const fetchSpy = stubFetch((urlStr, init) => {
          // customer id should be URI encoded in path
          expect(urlStr).toContain(`/${media}/recent/test%2Fcustomer`);
          assertUrlHasParams(urlStr, { page: 3, per_page: 20 });
          expect(init?.method).toBe("GET");
        });

        await mediaEndpoint.recent("test/customer", { page: 3, perPage: 20 });

        expect(fetchSpy).toHaveBeenCalledTimes(1);
      });

      it("items", async () => {
        const fetchSpy = stubFetch((urlStr, init) => {
          expect(urlStr).toContain(`/${media}/items`);
          // when array is provided, slugs join with comma then are percent-encoded
          assertUrlHasParams(urlStr, { slugs: ["one", "two", "three"] });
          expect(init?.method).toBe("GET");
        });

        await mediaEndpoint.items(["one", "two", "three"]);

        expect(fetchSpy).toHaveBeenCalledTimes(1);
      });

      it("deleteRecent", async () => {
        const fetchSpy = stubFetch((urlStr, init) => {
          expect(urlStr).toContain(`/${media}/recent/test%2Fcustomer`);
          assertUrlHasParams(urlStr, { slug: "recent-slug" });
          expect(init?.method).toBe("DELETE");
        });

        await mediaEndpoint.deleteRecent("test/customer", "recent-slug");

        expect(fetchSpy).toHaveBeenCalledTimes(1);
      });

      it("share", async () => {
        const fetchSpy = stubFetch((urlStr, init) => {
          expect(urlStr).toContain(`/${media}/share/some-slug`);
          assertUrlHasParams(urlStr, {
            customer_id: "cid123",
            q: "hello world",
          });
          expect(init?.method).toBe("POST");
        });

        await mediaEndpoint.share("some-slug", {
          customerId: "cid123",
          q: "hello world",
        });

        expect(fetchSpy).toHaveBeenCalledTimes(1);
      });

      it("report", async () => {
        const fetchSpy = stubFetch((urlStr, init) => {
          expect(urlStr).toContain(`/${media}/report/problematic-slug`);
          assertUrlHasParams(urlStr, { customer_id: "cidX", reason: "spam" });
          expect(init?.method).toBe("POST");
        });

        await mediaEndpoint.report("problematic-slug", {
          customerId: "cidX",
          reason: "spam",
        });

        expect(fetchSpy).toHaveBeenCalledTimes(1);
      });
    });
  }
});
