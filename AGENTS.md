# AGENTS.md

## Project snapshot

- Minimal TypeScript SDK scaffold for Klipy, currently centered on three source files in `src/`.
- Node ESM package (`"type": "module"`) with NodeNext compiler settings in `tsconfig.json`.
- Public export surface is only `KlipyClient` from `src/index.ts`.
- `README.md`, `tests/`, and `examples/` are currently absent from the workspace.

## Architecture and data flow

- `src/client.ts`: `KlipyClient` accepts a single `apiKey: string` and exposes `http: HttpClient`.
- `src/http.ts`: `HttpClient` derives base URL as `https://api.klipy.com/v1/${apiKey}`.
- Requests are dispatched with global `fetch` via `request(endpoint, options)`.
- Responses are always parsed as JSON (`return await response.json()`), with no status/error handling layer.
- Auth is path-based (`/v1/{apiKey}/...`), not header-based.

## Verified developer workflows (current state)

- Install: `npm install`.
- Typecheck: `npm run typecheck`.
- Current failure: `src/client.ts` imports `"./http"`; NodeNext requires explicit `.ts` extension.
- Test run: `npm test` executes Vitest v4.1.7 and exits with "No test files found".
- Example run: `npm run example` fails with `ERR_MODULE_NOT_FOUND` because `examples/basic.ts` does not exist.
- Build script is `npm run build` (`tsc -p tsconfig.json`); expect it to fail while typecheck fails.

## Codebase-specific conventions

- In `src/**/*.ts`, use ESM-style relative imports with explicit `.ts` extensions (NodeNext rule).
- Keep package entrypoint changes aligned through `src/index.ts` and `package.json` `exports`.
- Keep source under `src/` only; `tsconfig.json` uses `rootDir: "src"` and `include: ["src/**/*.ts"]`.
- Do not assume resource modules (`health`, `clips`, etc.) exist; add them explicitly if needed.

## Integration points and dependencies

- Runtime HTTP integration uses platform `fetch`/`RequestInit` only (no axios/got wrapper).
- Tooling deps are lightweight: TypeScript, Vitest, and `tsx` (see `package.json`).
- `endpoints.md` documents `gifs` routes under `/api/v1/{app_key}/gifs/...`; this is the only local API route reference.

## Agent guidance for changes

- First fix compiler blockers (for example, import extensions) before broader refactors.
- If you add tests, place them where Vitest can discover them (`**/*.{test,spec}.?(c|m)[jt]s?(x)`).
- If you keep `npm run example`, create `examples/basic.ts`; otherwise update/remove the script.
- Re-run `npm run typecheck` and `npm test` after edits; both are currently high-signal for repo health.
