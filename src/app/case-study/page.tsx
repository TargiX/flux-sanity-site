import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Eye,
  Rocket,
  Search,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ProductVisual } from "@/components/product-visual";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "CMS Marketing Site Builder Case Study",
  description:
    "A portfolio case study showing a Next.js and Sanity marketing site builder with reusable landing sections, SEO, preview mode, and Vercel deployment.",
  alternates: {
    canonical: "/case-study",
  },
};

const pillars = [
  {
    icon: Database,
    title: "Headless CMS model",
    body: "Sanity owns page content, slugs, SEO, and an ordered array of reusable sections.",
  },
  {
    icon: Eye,
    title: "Editor preview loop",
    body: "Draft Mode and Visual Editing are wired so editors can review unpublished changes in context.",
  },
  {
    icon: Search,
    title: "Technical SEO",
    body: "Metadata, canonical URLs, sitemap, robots, semantic sections, and JSON-LD ship with the renderer.",
  },
  {
    icon: Rocket,
    title: "Deployable workflow",
    body: "The site builds with fallback data locally and can be connected to Sanity/Vercel with environment variables.",
  },
];

const workflow = [
  "A marketer creates a Sanity page document and chooses reusable sections.",
  "The Next.js route fetches the page by slug using next-sanity.",
  "If credentials or content are missing, typed fallback content keeps the build reviewable.",
  "Published content updates the marketing page; Draft Mode enables unpublished preview.",
];

export default function CaseStudyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="px-5 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h1 className="max-w-[10ch] text-balance text-5xl font-semibold leading-[0.94] tracking-normal text-white sm:text-6xl lg:text-[5.75rem]">
              Proof this is a real CMS build.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-white/62">
              Sanity schemas, reusable sections, draft preview, fallback
              content, SEO, and Vercel deployment are wired into one
              recruiter-facing portfolio repo.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild className="rounded-md">
                <Link href="/campaigns/ai-graph-editor">
                  Open campaign page
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-md">
                <Link href="/studio">Open Studio</Link>
              </Button>
            </div>
          </div>
          <ProductVisual />
        </div>
      </section>
      <section className="border-y border-white/10 bg-[#080907] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="bg-[#080907] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-5">
                <pillar.icon
                  className="size-5 text-emerald-300"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs text-white/34">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-12 text-xl font-semibold leading-tight text-white">
                {pillar.title}
              </h2>
              <p className="mt-4 leading-7 text-white/58">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-300/80">
              Implementation
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold text-white sm:text-5xl">
              What this proves to a recruiter
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/64">
              It is not a toy blog. The content model matches a practical
              marketing workflow: create a page, choose sections, write SEO
              metadata, preview drafts, and publish campaign URLs.
            </p>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {workflow.map((item) => (
              <div key={item} className="flex gap-4 py-5">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-emerald-300"
                  aria-hidden="true"
                />
                <p className="leading-7 text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "CMS Marketing Site Builder Case Study",
            about: ["Next.js", "Sanity CMS", "Technical SEO", "Vercel"],
          }),
        }}
      />
    </main>
  );
}
