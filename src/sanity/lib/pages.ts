import { fallbackPages, getFallbackPage } from "@/content/fallback";
import type { MarketingPage } from "@/types/page";
import { isSanityConfigured } from "./client";
import { sanityFetch } from "./live";
import { PAGE_QUERY, PAGES_SLUGS_QUERY } from "./queries";

type SlugResult = { slug: string };

export async function getPageBySlug(slug: string): Promise<MarketingPage | null> {
  if (isSanityConfigured) {
    try {
      const result = (await sanityFetch({
        query: PAGE_QUERY,
        params: { slug },
        tags: [`page:${slug}`],
      })) as { data: MarketingPage | null };

      if (result.data) {
        return result.data;
      }
    } catch (error) {
      console.warn(`Falling back to seed content for "${slug}"`, error);
    }
  }

  return getFallbackPage(slug);
}

export async function getAllPageSlugs(): Promise<SlugResult[]> {
  if (isSanityConfigured) {
    try {
      const result = (await sanityFetch({
        query: PAGES_SLUGS_QUERY,
        perspective: "published",
        stega: false,
      })) as { data: SlugResult[] };

      if (result.data.length > 0) {
        return result.data;
      }
    } catch (error) {
      console.warn("Falling back to seed slugs", error);
    }
  }

  return fallbackPages.map((page) => ({ slug: page.slug }));
}
