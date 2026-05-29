import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroGraphBadge } from "@/components/hero-graph-badge";
import { ProductVisual } from "@/components/product-visual";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Flux Graph works | Visual planning for teams",
  description:
    "See how Flux Graph turns rough ideas into a living plan: map dependencies, align every team, track what matters, and share a single source of truth.",
  alternates: {
    canonical: "/case-study",
  },
};

const pillars = [
  {
    icon: GitBranch,
    title: "Map the work",
    body: "Lay out initiatives, owners, and deadlines as a graph and see how every piece connects.",
  },
  {
    icon: Users,
    title: "Align the team",
    body: "Product, content, and GTM plan on one real-time canvas instead of scattered docs and threads.",
  },
  {
    icon: Sparkles,
    title: "Surface what matters",
    body: "Built-in signals flag blocked work and highlight the initiatives driving real outcomes.",
  },
  {
    icon: Share2,
    title: "Share with anyone",
    body: "Send read-only views to execs and stakeholders so everyone sees the same plan, always current.",
  },
];

const workflow = [
  "Start from a template or describe your initiative and let the AI editor draft the first map.",
  "Add owners, dependencies, and deadlines — the graph keeps everything connected as it grows.",
  "Invite your team to refine the plan together in real time, with comments and live updates.",
  "Share a read-only view with stakeholders and keep shipping as the plan evolves.",
];

export default function CaseStudyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="px-5 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.08fr]">
          <div>
            <div className="mb-6">
              <HeroGraphBadge label="How it works" />
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              One map for the
              <span className="block text-emerald-300">whole plan.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-white/62">
              Flux Graph brings tangled systems, content, and go-to-market work
              into a single live view — so every team can see how the plan fits
              together and where it&apos;s headed.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                className="group h-11 rounded-lg border-transparent bg-emerald-300 px-5 text-[0.9rem] font-semibold text-black hover:bg-emerald-200"
              >
                <Link href="/campaigns/ai-graph-editor">
                  Start for free
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-lg border-white/15 bg-white/[0.02] px-5 text-[0.9rem] font-medium text-white/90 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
              >
                <Link href="/#pricing">View pricing</Link>
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
              The workflow
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold text-white sm:text-5xl">
              From first idea to shared plan
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/64">
              Flux Graph fits the way teams actually plan: sketch the work,
              connect the dependencies, bring people in, and keep one source of
              truth current as the initiative ships.
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
            "@type": "WebPage",
            name: "How Flux Graph works",
            about: [
              "Visual planning",
              "Team collaboration",
              "Dependency mapping",
            ],
          }),
        }}
      />
    </main>
  );
}
