import { describe, it, expect, afterEach, vi } from "vitest";
import { KlipyClient } from "../src";
import { stubFetch, assertUrlHasParams } from "./test-utils.ts";

const EMPTY_RESPONSE = { ok: true, status: 200, json: async () => ({}) };

describe("KlipyClient", () => {
  afterEach(() => vi.restoreAllMocks());

  it("gifs.trending", async () => {
    const fetchSpy = stubFetch((urlStr, init) => {
      expect(urlStr).toContain("/gifs/trending");
      assertUrlHasParams(urlStr, { page: 1, per_page: 10 });
      expect(init?.method).toBe("GET");
    });

    const client = new KlipyClient("TEST_KEY");
    await client.gifs.trending({ page: 1, perPage: 10 });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it("gifs.search", async () => {
    const fetchSpy = stubFetch((urlStr, init) => {
      expect(urlStr).toContain("/gifs/search");
      assertUrlHasParams(urlStr, { q: "funny cats", page: 2, per_page: 5 });
      expect(init?.method).toBe("GET");
    });

    const client = new KlipyClient("TEST_KEY");
    await client.gifs.search("funny cats", { page: 2, perPage: 5 });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it("gifs.recent", async () => {
    const fetchSpy = stubFetch((urlStr, init) => {
      // customer id should be URI encoded in path
      expect(urlStr).toContain("/gifs/recent/test%2Fcustomer");
      assertUrlHasParams(urlStr, { page: 3, per_page: 20 });
      expect(init?.method).toBe("GET");
    });

    const client = new KlipyClient("TEST_KEY");
    await client.gifs.recent("test/customer", { page: 3, perPage: 20 });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it("gifs.items", async () => {
    const fetchSpy = stubFetch((urlStr, init) => {
      expect(urlStr).toContain("/gifs/items");
      // when array is provided, slugs join with comma then are percent-encoded
      assertUrlHasParams(urlStr, { slugs: ["one", "two", "three"] });
      expect(init?.method).toBe("GET");
    });

    const client = new KlipyClient("TEST_KEY");
    await client.gifs.items(["one", "two", "three"]);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it("gifs.deleteRecent", async () => {
    const fetchSpy = stubFetch((urlStr, init) => {
      expect(urlStr).toContain("/gifs/recent/test%2Fcustomer");
      assertUrlHasParams(urlStr, { slug: "recent-slug" });
      expect(init?.method).toBe("DELETE");
    });

    const client = new KlipyClient("TEST_KEY");
    await client.gifs.deleteRecent("test/customer", "recent-slug");

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it("gifs.share", async () => {
    const fetchSpy = stubFetch((urlStr, init) => {
      expect(urlStr).toContain("/gifs/share/some-slug");
      assertUrlHasParams(urlStr, { customer_id: "cid123", q: "hello world" });
      expect(init?.method).toBe("POST");
    });

    const client = new KlipyClient("TEST_KEY");
    await client.gifs.share("some-slug", { customerId: "cid123", q: "hello world" });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it("gifs.report", async () => {
    const fetchSpy = stubFetch((urlStr, init) => {
      expect(urlStr).toContain("/gifs/report/problematic-slug");
      assertUrlHasParams(urlStr, { customer_id: "cidX", reason: "spam" });
      expect(init?.method).toBe("POST");
    });

    const client = new KlipyClient("TEST_KEY");
    await client.gifs.report("problematic-slug", { customerId: "cidX", reason: "spam" });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});

