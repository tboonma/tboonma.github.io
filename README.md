# tawanb.dev

Static site for Tawan Boonma (Tawan B.): landing pages and portfolio websites on Fastwork. Thai is the default. English is at `/en/`.

## Edit

- `src/data/site.ts` — Fastwork URL, package prices, email, social links, hotel facts
- `src/data/copy.ts` — Thai and English wording for the main page
- `src/data/samples.ts` — wording for the three sample projects

Sentences can include `{hotel}`, `{rooms}`, `{district}`, `{province}`, `{country}`, `{email}`, and the price tokens. Those values come from `site.ts`.

## Commands

Node 22.22 (see `.nvmrc`). `yarn lint` needs Node 22.19 or newer.

```bash
yarn install
yarn dev
yarn lint
yarn build
```

The production build is the `dist/` folder. Vercel runs `yarn build`.

## Placeholders to replace

In `src/data/site.ts`:

- `fastworkUrl` — real Fastwork profile
- `prices.landing` and `prices.portfolio` — real package prices

`prices.sample` and `sampleEmail` are part of the fictional sample pages. Sample pages are marked `noindex` and are not client work.
