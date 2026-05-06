import type { MetadataRoute } from "next";
import { APP_URL, IS_PREVIEW_DEPLOYMENT, IS_PLACEHOLDER_DOMAIN } from "@/lib/site-config";

// Block indexing on:
//   - Vercel preview deployments (any VERCEL_ENV != production)
//   - When the placeholder example.com domain is still configured
// Allow on production with a real domain.
export default function robots(): MetadataRoute.Robots {
  const blockIndexing = IS_PREVIEW_DEPLOYMENT || IS_PLACEHOLDER_DOMAIN;

  if (blockIndexing) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}
