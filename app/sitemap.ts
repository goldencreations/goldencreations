import type { MetadataRoute } from "next";

const BASE_URL = "https://goldenecard.co.tz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/why-us",
    "/services",
    "/portfolio",
    "/testimonials",
    "/packages",
    "/contact",
  ];

  return routes.map((route, index) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
