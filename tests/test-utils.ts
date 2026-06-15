import { vi, expect } from "vitest";

export function stubFetch(
  assertFn: (url: string, init?: RequestInit) => void,
  response?: unknown,
) {
  const spy = vi.fn((url: string, init?: RequestInit) => {
    assertFn(String(url), init);

    return Promise.resolve({
      ok: true,
      status: 200,
      json: async () => response,
    });
  });

  vi.stubGlobal("fetch", spy);

  return spy;
}

/**
 * Assert that the given URL contains the provided query params.
 *
 * - For array values, the helper expects a comma-joined value (as the client builds).
 * - For numbers/booleans the value is converted to string before comparison.
 * - If a value is `undefined` the helper asserts the param is not present.
 */
export function assertUrlHasParams(
  urlString: string,
  params: Record<
    string,
    string | number | boolean | Array<string | number> | undefined
  >,
) {
  const url = new URL(urlString);
  const search = url.searchParams;

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) {
      // Expect the param to be absent
      expect(search.has(key)).toBe(false);
      continue;
    }

    const expected = Array.isArray(value) ? value.join(",") : String(value);
    const actual = search.get(key);

    // Expect the param to be present
    expect(actual).not.toBeNull();

    // Expect the actual value to equal the expected string representation
    expect(actual).toBe(expected);
  }
}
