import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageSections, faqJsonLd } from "@/components/sections/section-renderer";
import { getAllPageSlugs, getPageBySlug } from "@/sanity/lib/pages";

type CampaignPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();

  return slugs.filter((page) => page.slug !== "home").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: CampaignPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.seo.title,
    description: page.seo.description,
    alternates: {
      canonical: page.seo.canonical ?? `/campaigns/${slug}`,
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: page.seo.canonical ?? `/campaigns/${slug}`,
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

export default async function CampaignPage({ params }: CampaignPageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page || page.slug === "home") {
    notFound();
  }

  const jsonLd = faqJsonLd(page);

  return (
    <main>
      <SiteHeader />
      <PageSections page={page} />
      <SiteFooter />
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </main>
  );
}
