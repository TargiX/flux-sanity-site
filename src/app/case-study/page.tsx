import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, Eye, Rocket, Search } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ProductVisual } from "@/components/product-visual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Badge className="mb-5 rounded-md border-cyan-300/30 bg-cyan-300/12 text-cyan-100">
              Portfolio case study
            </Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-normal text-white sm:text-6xl">
              CMS-powered marketing site builder for Flux Graph.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-white/68">
              This repo demonstrates the exact workflow requested by modern marketing-site roles:
              design execution, headless CMS integration, reusable landing-page templates, SEO, preview, and Vercel deployment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="rounded-lg border-white/10 bg-black/30">
              <CardContent className="p-6">
                <pillar.icon className="size-6 text-emerald-300" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-semibold text-white">{pillar.title}</h2>
                <p className="mt-3 leading-7 text-white/60">{pillar.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">Implementation</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-white">What this proves to a recruiter</h2>
            <p className="mt-5 leading-8 text-white/64">
              It is not a toy blog. The content model matches a practical marketing workflow:
              create a page, choose sections, write SEO metadata, preview drafts, and publish campaign URLs.
            </p>
          </div>
          <div className="space-y-4">
            {workflow.map((item) => (
              <div key={item} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-300" aria-hidden="true" />
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
