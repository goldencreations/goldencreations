import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

async function resolveBaseUrl(): Promise<string> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "goldencreationss.com";
  const protocol = h.get("x-forwarded-proto") ?? "https";
  return `${protocol}://${host}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await resolveBaseUrl();
  const routes = [
    "/",
    "/why-us",
    "/services",
    "/portfolio",
    "/testimonials",
    "/packages",
    "/contact",
    "/kadi-za-mialiko",
    "/mialiko-ya-kidigitali",
    "/kadi-za-mialiko-ya-harusi",
    "/mialiko-ya-sendoff",
    "/kadi-za-kitchen-party",
    "/mialiko-ya-siku-ya-kuzaliwa",
    "/mialiko-ya-kikazi",
  ];

  return routes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
