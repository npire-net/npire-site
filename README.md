# Npire — umbrella site

The marketing site at `npire.<APP_DOMAIN>`. A three-product portfolio:
**Layers**, **Ambassador**, **Benchmark**.

Sibling repo to [`layers-product/`](https://github.com/ncourey/layers-product).

## Architecture

| URL | Repo | Purpose |
|---|---|---|
| `npire.net` + `www` | this repo (`~/npire-site/`) | Umbrella portfolio |
| `layers.npire.net` | `~/layers-product/landing-page/` | Layers product page |
| `app.npire.net` | `~/layers-product/dashboard/` | Layers SaaS dashboard |
| `ambassador.npire.net` | future repo | Ambassador product |
| `benchmark.npire.net` | future repo | Benchmark product |

Until ambassador / benchmark ship, the umbrella's product cards link to
those subdomains and show a coming-soon placeholder.

## Stack

Next.js 16 (App Router) + Tailwind CSS v4 + shadcn/ui. Same stack as the
Layers landing page so components and patterns are interchangeable.

## Local dev

```sh
npm install
npm run dev      # http://localhost:3000
```

## Env

| Var | Purpose | Default |
|---|---|---|
| `APP_DOMAIN` / `NEXT_PUBLIC_APP_DOMAIN` | Root domain for derived URLs | `example.com` |
| `NEXT_PUBLIC_BRAND_NAME` | Wordmark shown in nav + footer | `[brand TBD]` |
| `VERCEL_ENV` | Vercel-set; controls indexing block | — |

The default domain (`example.com`) is intentional: an IANA reserved name
that won't accidentally route anywhere. Set the real domain on Vercel
when deploying.

## Placeholder content

All copy on `/` is intentionally placeholder pending a brand brief from
Cowork. Look for `[Placeholder copy ...]` markers throughout
`app/page.tsx`. Replace those when the brief lands; the structure is final.

## Security headers

`next.config.ts` ships CSP, HSTS, X-Frame-Options DENY, Referrer-Policy,
Permissions-Policy, and X-Content-Type-Options on every response.

## Deploy

Vercel project: `npire-site`. After registering with Cloudflare, the
domain-migration script in `~/layers-product/docs/scripts/migrate-domain.mjs`
attaches `npire.net` and `www.npire.net` to this Vercel project
automatically.
