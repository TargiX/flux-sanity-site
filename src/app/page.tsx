import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageSections, faqJsonLd } from "@/components/sections/section-renderer";
import { getSiteUrl } from "@/lib/site";
import { getPageBySlug } from "@/sanity/lib/pages";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("home");

  if (!page) {
    return {};
  }

  return {
    title: page.seo.title,
    description: page.seo.description,
    alternates: {
      canonical: page.seo.canonical ?? "/",
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: page.seo.canonical ?? "/",
      type: "website",
      images: page.seo.image?.url ? [{ url: page.seo.image.url, alt: page.seo.image.alt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
    },
  };
}

export default async function Home() {
  const page = await getPageBySlug("home");

  if (!page) {
    notFound();
  }

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Flux Graph",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: page.seo.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Flux Graph",
      url: getSiteUrl(),
    },
    faqJsonLd(page),
  ].filter(Boolean);

  return (
    <main>
      <SiteHeader />
      <PageSections page={page} />
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
