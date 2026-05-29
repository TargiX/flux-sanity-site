import type { MarketingPage } from "@/types/page";

export const fallbackPages: MarketingPage[] = [
  {
    title: "Flux Graph",
    slug: "home",
    updatedAt: "2026-05-28T00:00:00.000Z",
    seo: {
      title: "Flux Graph | CMS-powered visual planning",
      description:
        "A CMS-driven marketing site for a visual planning platform, built with Next.js, Sanity, reusable landing-page sections, preview mode, and technical SEO.",
      canonical: "/",
    },
    sections: [
      {
        _type: "heroSection",
        eyebrow: "CMS-powered marketing system",
        title: "Ship CMS pages",
        titleHighlight: "that feel custom.",
        body: "A portfolio-grade marketing system for Flux Graph: Sanity-authored pages, reusable sections, preview mode, and SEO that ships cleanly on Vercel.",
        metricLabel: "reusable CMS sections",
        metricValue: "8 blocks",
        links: [
          {
            label: "View campaign",
            href: "/campaigns/ai-graph-editor",
            variant: "primary",
          },
          {
            label: "Read case study",
            href: "/case-study",
            variant: "secondary",
          },
        ],
      },
      {
        _type: "logoStripSection",
        title: "A compact stack for real marketing-site work.",
        logos: ["Vercel", "Sanity", "Next.js", "Shadcn", "TypeScript"],
      },
      {
        _type: "featureGridSection",
        eyebrow: "Reusable sections",
        title: "Editors compose the page. The frontend keeps the taste.",
        body: "Each CMS block maps to a typed React section with fixed design rules, responsive behavior, metadata, and fallback content.",
        features: [
          {
            title: "Composable page builder",
            body: "Hero, feature grids, proof, pricing, FAQ, CTA, and visual product sections can be reordered per campaign.",
            stat: "8 section types",
          },
          {
            title: "Preview workflow",
            body: "Draft Mode and Visual Editing are wired for editors to review unpublished changes in context.",
            stat: "Live drafts",
          },
          {
            title: "Technical SEO",
            body: "Metadata, canonical URLs, sitemap, robots, semantic structure, and JSON-LD are generated from page content.",
            stat: "SEO-ready",
          },
        ],
      },
      {
        _type: "splitVisualSection",
        eyebrow: "Product signal",
        title: "The product shows up before the pitch deck does.",
        body: "The first viewport is built around a real interface metaphor: graph nodes, content blocks, draft status, and SEO readiness in one inspectable canvas.",
        bullets: [
          "Responsive product visual built in React and CSS",
          "Accessible content structure for screen readers",
          "Designed to survive CMS copy length changes",
        ],
      },
      {
        _type: "testimonialsSection",
        title: "A CMS workflow that still looks designed",
        quotes: [
          {
            quote:
              "We can spin up audience-specific pages without opening a ticket, while the frontend still feels custom-designed.",
            name: "Maya Chen",
            role: "Head of Growth, Northstar Labs",
          },
          {
            quote:
              "The CMS model mirrors the way our campaigns are planned: page, sections, proof, and SEO all in one place.",
            name: "Julian Reyes",
            role: "Product Marketing Lead",
          },
        ],
      },
      {
        _type: "pricingSection",
        title: "Campaign-ready packaging",
        plans: [
          {
            name: "Launch",
            price: "$49",
            description:
              "For solo teams validating a focused product narrative.",
            features: ["CMS landing pages", "SEO metadata", "Preview workflow"],
          },
          {
            name: "Scale",
            price: "$149",
            description: "For teams creating repeatable campaign systems.",
            features: [
              "Reusable sections",
              "Campaign templates",
              "Structured data",
            ],
            highlighted: true,
          },
          {
            name: "Enterprise",
            price: "Custom",
            description: "For organizations with advanced governance needs.",
            features: [
              "Editorial workflow",
              "Custom schemas",
              "Vercel deployment",
            ],
          },
        ],
      },
      {
        _type: "faqSection",
        title: "CMS integration details",
        faqs: [
          {
            question: "Can the site build without Sanity credentials?",
            answer:
              "Yes. The data layer falls back to typed seed content when environment variables are missing, so previews, builds, and portfolio review remain reliable.",
          },
          {
            question: "Can marketers create new pages?",
            answer:
              "Yes. Campaign pages are Sanity documents with a slug, SEO fields, and an ordered array of reusable sections.",
          },
          {
            question: "Is draft preview included?",
            answer:
              "Yes. The repo includes the Draft Mode enable route and Visual Editing wiring for a real Sanity project.",
          },
        ],
      },
      {
        _type: "ctaSection",
        title: "A portfolio case built for the exact CMS brief.",
        body: "Polished frontend execution, Sanity modeling, reusable landing pages, preview, SEO, and Vercel deployment in one small repo.",
        links: [
          { label: "Open case study", href: "/case-study", variant: "primary" },
          {
            label: "Try campaign page",
            href: "/campaigns/ai-graph-editor",
            variant: "secondary",
          },
        ],
      },
    ],
  },
  {
    title: "AI Graph Editor Campaign",
    slug: "ai-graph-editor",
    updatedAt: "2026-05-28T00:00:00.000Z",
    seo: {
      title: "AI Graph Editor Campaign",
      description:
        "A CMS-authored campaign page for Flux Graph's AI graph editor, showing reusable marketing sections and technical SEO.",
      canonical: "/campaigns/ai-graph-editor",
    },
    sections: [
      {
        _type: "heroSection",
        eyebrow: "Campaign page template",
        title: "Turn a blank canvas",
        titleHighlight: "into a product map.",
        body: "The same Sanity page model powers targeted campaign pages, with per-page metadata and reusable sections.",
        metricLabel: "Time to first map",
        metricValue: "<2 min",
        links: [
          {
            label: "Review CMS model",
            href: "/case-study",
            variant: "primary",
          },
          { label: "Back home", href: "/", variant: "ghost" },
        ],
      },
      {
        _type: "featureGridSection",
        eyebrow: "Audience-specific messaging",
        title: "A dedicated narrative for AI-assisted planning.",
        body: "The page can swap proof points, features, FAQs, and calls to action while using the same frontend renderer.",
        features: [
          {
            title: "Prompt to graph",
            body: "Generate first-pass journey maps from rough product notes, then edit nodes directly.",
            stat: "AI-assisted",
          },
          {
            title: "Variant testing",
            body: "Publish campaign variants with different hero copy, proof, and CTA language.",
            stat: "CMS-driven",
          },
          {
            title: "Search-friendly pages",
            body: "Each campaign owns metadata, canonical URL, FAQ schema, and sitemap visibility.",
            stat: "Indexed",
          },
        ],
      },
      {
        _type: "splitVisualSection",
        eyebrow: "Workflow",
        title: "From draft to published page with a real editor loop.",
        body: "Editors update copy in Sanity, preview the unpublished page in context, then publish without asking engineering to rebuild a bespoke route.",
        bullets: [
          "Sanity document controls slug, SEO, and ordered sections",
          "Next.js renderer maps CMS blocks to typed components",
          "Fallback content keeps local builds reliable",
        ],
        reverse: true,
      },
      {
        _type: "faqSection",
        title: "Campaign FAQ",
        faqs: [
          {
            question: "Can this become a template for more campaigns?",
            answer:
              "Yes. The slug-based route renders any Sanity page document, so new campaigns only need content and section choices.",
          },
          {
            question: "What happens if a section is incomplete?",
            answer:
              "The renderer uses conservative defaults and skips unknown section types, keeping pages resilient during editing.",
          },
        ],
      },
      {
        _type: "ctaSection",
        title: "This is the recruiter-facing proof point.",
        body: "It is a real CMS architecture in a small, polished portfolio repo: exactly the headless marketing-site integration the role asks for.",
        links: [
          {
            label: "Read implementation notes",
            href: "/case-study",
            variant: "primary",
          },
        ],
      },
    ],
  },
];

export function getFallbackPage(slug: string) {
  return fallbackPages.find((page) => page.slug === slug) ?? null;
}
