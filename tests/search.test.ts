import { describe, it, expect, afterEach, vi } from "vitest";
import { KlipyClient } from "../src/index.ts";
import { stubFetch, assertUrlHasParams } from "./test-utils.ts";

const suggestionsResponse = {
  result: true,
  data: ["one", "two", "three"],
} as const;

describe("Search", () => {
  afterEach(() => vi.restoreAllMocks());

  const { search } = new KlipyClient("TEST_KEY");

  it("suggestions", async () => {
    const fetchSpy = stubFetch((url, init) => {
      expect(url).toContain(`/search-suggestions/funny%20cats`);
      assertUrlHasParams(url, { limit: 5 });
      expect(init?.method).toBe("GET");
    }, suggestionsResponse);

    await search.suggestions("funny cats", { limit: 5 });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it("autocomplete", async () => {
    const fetchSpy = stubFetch((url, init) => {
      expect(url).toContain(`/autocomplete/hello%2Fworld`);
      assertUrlHasParams(url, { limit: 5 });
      expect(init?.method).toBe("GET");
    }, suggestionsResponse);

    await search.autocomplete("hello/world", { limit: 5 });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});
