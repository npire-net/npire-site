/**
 * Single source of truth for domain-derived URLs in the Npire umbrella site.
 *
 * Default `example.com` is intentional — IANA reserved, won't accidentally
 * resolve anywhere if the env var isn't set.
 */

const DEFAULT_DOMAIN = "example.com";

function readDomain(): string {
  const fromEnv =
    (typeof process !== "undefined" &&
      (process.env.APP_DOMAIN || process.env.NEXT_PUBLIC_APP_DOMAIN)) ||
    DEFAULT_DOMAIN;
  return fromEnv.replace(/^https?:\/\//, "").replace(/\/+$/, "");
}

export const APP_DOMAIN = readDomain();
export const APP_URL = `https://${APP_DOMAIN}`;
export const LAYERS_URL = `https://layers.${APP_DOMAIN}`;
export const DASHBOARD_URL = `https://app.${APP_DOMAIN}`;
export const AMBASSADOR_URL = `https://ambassador.${APP_DOMAIN}`;
export const BENCHMARK_URL = `https://benchmark.${APP_DOMAIN}`;
export const SUPPORT_EMAIL = `hello@${APP_DOMAIN}`;

export const IS_PLACEHOLDER_DOMAIN = APP_DOMAIN === DEFAULT_DOMAIN;

/**
 * Umbrella brand name shown in the nav and footer wordmark. Env-driven.
 * Default is an obvious stub — if this leaks to prod, the env var isn't
 * set yet.
 */
export const BRAND_NAME =
  (typeof process !== "undefined" &&
    (process.env.NEXT_PUBLIC_BRAND_NAME || process.env.BRAND_NAME)) ||
  "[brand TBD]";

/**
 * True when running on a Vercel preview deployment (not production).
 * Used by app/robots.ts to block indexing on previews.
 */
export const IS_PREVIEW_DEPLOYMENT =
  typeof process !== "undefined" &&
  process.env.VERCEL_ENV !== undefined &&
  process.env.VERCEL_ENV !== "production";
