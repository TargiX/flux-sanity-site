import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { getAllPageSlugs } from "@/sanity/lib/pages";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const slugs = await getAllPageSlugs();

  const pageRoutes = slugs.map(({ slug }) => ({
    url: slug === "home" ? siteUrl : `${siteUrl}/campaigns/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: slug === "home" ? 1 : 0.8,
  }));

  return [
    ...pageRoutes,
    {
      url: `${siteUrl}/case-study`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
