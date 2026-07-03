import type { MetadataRoute } from "next";

const base = "https://www.fourcrossesvets.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/small-animals", priority: 0.9 },
    { path: "/farm", priority: 0.9 },
    { path: "/equine", priority: 0.9 },
    { path: "/health-plan", priority: 0.8 },
    { path: "/team", priority: 0.7 },
    { path: "/prices", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
