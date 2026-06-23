# klipy-sdk

TypeScript SDK for the Klipy API.

This package provides a small, typed client for working with Klipy media endpoints from Node.js (ESM).

## Installation

```bash
npm install klipy-sdk
```

## Quick start

```ts
import { KlipyClient } from "klipy-sdk";

const klipy = new KlipyClient(process.env.KLIPY_API_KEY ?? "");

const trending = await klipy.gifs.trending({
  perPage: 10,
});

console.log(trending.data.data.map((media) => media.file.md.gif.url));
```

## Endpoints

- `klipy.gifs`
  - `trending(options?)`
  - `search(query, options?)`
  - `categories(locale?)`
  - `recent(customerId, options?)`
  - `items(slugs)`
  - `deleteRecent(customerId, slug)`
  - `share(slug, options?)`
  - `report(slug, options)`
- `klipy.stickers`
  - `trending(options?)`
  - `search(query, options?)`
  - `categories(locale?)`
  - `recent(customerId, options?)`
  - `items(slugs)`
  - `deleteRecent(customerId, slug)`
  - `share(slug, options?)`
  - `report(slug, options)`
- `klipy.memes`
  - `trending(options?)`
  - `search(query, options?)`
  - `categories(locale?)`
  - `recent(customerId, options?)`
  - `items(slugs)`
  - `deleteRecent(customerId, slug)`
  - `share(slug, options?)`
  - `report(slug, options)`
- `klipy.emojis`
  - `trending(options?)`
  - `search(query, options?)`
  - `categories(locale?)`
  - `recent(customerId, options?)`
  - `items(slugs)`
  - `deleteRecent(customerId, slug)`
  - `share(slug, options?)`
  - `report(slug, options)`
- `klipy.clips`
  - `trending(options?)`
  - `search(query, options?)`
  - `categories(locale?)`
  - `recent(customerId, options?)`
  - `items(slugs)`
  - `deleteRecent(customerId, slug)`
  - `share(slug, options?)`
  - `report(slug, options)`
- `klipy.search`
  - `suggestions(query, options?)`
  - `autocomplete(query, options?)`

# Helpful links

- [Klipy api docs](https://docs.klipy.com/getting-started)
- [Getting a Klipy api key](https://partner.klipy.com/)
