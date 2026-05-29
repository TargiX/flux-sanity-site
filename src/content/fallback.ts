import type { MarketingPage } from "@/types/page";

export const fallbackPages: MarketingPage[] = [
  {
    title: "Flux Graph",
    slug: "home",
    updatedAt: "2026-05-28T00:00:00.000Z",
    seo: {
      title: "Flux Graph | Visual planning for systems, content, and GTM",
      description:
        "Flux Graph turns complex systems, content, and go-to-market work into a living map. See dependencies, align every team, and ship with clarity.",
      canonical: "/",
    },
    sections: [
      {
        _type: "heroSection",
        eyebrow: "Visual planning platform",
        title: "Plan complex.",
        titleHighlight: "Ship with clarity.",
        body: "Flux Graph turns tangled systems, content, and go-to-market work into a living map. See how everything connects, align every team, and move faster together.",
        metrics: [
          { value: "2.4×", label: "faster to align cross-functional plans" },
          { value: "68%", label: "fewer status meetings chasing context" },
          { value: "900+", label: "teams planning what matters most" },
          { value: "SOC 2", label: "enterprise-grade security from day one" },
        ],
        links: [
          {
            label: "Start for free",
            href: "/campaigns/ai-graph-editor",
            variant: "primary",
          },
          {
            label: "See how it works",
            href: "/case-study",
            variant: "secondary",
          },
        ],
      },
      {
        _type: "logoStripSection",
        title: "Connects with the tools your team already works in.",
        logos: ["Slack", "Linear", "Notion", "Figma", "GitHub"],
      },
      {
        _type: "featureGridSection",
        eyebrow: "Features",
        title: "Everything you need to plan with confidence",
        body: "From the first sketch to a shipped initiative, Flux Graph keeps the whole plan visible, connected, and up to date.",
        features: [
          {
            title: "Map dependencies visually",
            body: "Drag work into a graph and see how initiatives, owners, and deadlines connect at a glance — no more buried docs.",
            stat: "Live graph",
          },
          {
            title: "Align every team",
            body: "Shared canvases keep product, content, and GTM working from a single source of truth, updated in real time.",
            stat: "Real-time",
          },
          {
            title: "Track what moves the needle",
            body: "Built-in signals surface blocked work and highlight the initiatives actually driving outcomes.",
            stat: "Insights",
          },
        ],
      },
      {
        _type: "splitVisualSection",
        eyebrow: "Built for clarity",
        title: "See the whole plan before it slips.",
        body: "Flux Graph replaces scattered docs and status threads with one inspectable map, so dependencies, owners, and risk are obvious to everyone from day one.",
        bullets: [
          "Real-time canvas your whole team can edit together",
          "Dependency and ownership tracking on every node",
          "Shareable views for execs, teams, and stakeholders",
        ],
      },
      {
        _type: "testimonialsSection",
        title: "Loved by teams who plan ahead",
        quotes: [
          {
            quote:
              "We replaced three status meetings a week with one shared map. Everyone finally sees the same plan.",
            name: "Maya Chen",
            role: "Head of Growth, Northstar Labs",
          },
          {
            quote:
              "Flux Graph is the first tool where our product, content, and GTM plans actually live in one place.",
            name: "Julian Reyes",
            role: "Director of Product Marketing",
          },
        ],
      },
      {
        _type: "pricingSection",
        title: "Pricing that scales with your team",
        plans: [
          {
            name: "Launch",
            price: "$49",
            description: "For small teams mapping their first initiatives.",
            features: [
              "Unlimited maps",
              "Up to 10 collaborators",
              "Core integrations",
            ],
          },
          {
            name: "Scale",
            price: "$149",
            description: "For growing teams running many plans at once.",
            features: [
              "Everything in Launch",
              "Unlimited collaborators",
              "Advanced views & insights",
            ],
            highlighted: true,
          },
          {
            name: "Enterprise",
            price: "Custom",
            description: "For organizations with security and governance needs.",
            features: ["SSO & SCIM", "Audit logs", "Dedicated support"],
          },
        ],
      },
      {
        _type: "faqSection",
        title: "Frequently asked questions",
        faqs: [
          {
            question: "How long does it take to get started?",
            answer:
              "Most teams have their first map live in under five minutes. Start from a template or import an existing plan and invite your team.",
          },
          {
            question: "Can the whole team collaborate at once?",
            answer:
              "Yes. Canvases update in real time, so everyone edits, comments, and reviews the same plan together without version conflicts.",
          },
          {
            question: "Is my data secure?",
            answer:
              "Flux Graph is SOC 2 Type II compliant, with SSO, granular permissions, and audit logging available on enterprise plans.",
          },
        ],
      },
      {
        _type: "ctaSection",
        title: "Bring your next plan into focus.",
        body: "Start mapping in minutes. Invite your team, connect your tools, and watch the plan come together in one shared view.",
        links: [
          {
            label: "Start for free",
            href: "/campaigns/ai-graph-editor",
            variant: "primary",
          },
          {
            label: "Talk to sales",
            href: "/case-study",
            variant: "secondary",
          },
        ],
      },
    ],
  },
  {
    title: "AI Graph Editor",
    slug: "ai-graph-editor",
    updatedAt: "2026-05-28T00:00:00.000Z",
    seo: {
      title: "Flux Graph AI Graph Editor | From notes to a clear plan",
      description:
        "Describe what you're shipping and let Flux Graph's AI draft the first plan — nodes, owners, and dependencies — ready for your team to refine.",
      canonical: "/campaigns/ai-graph-editor",
    },
    sections: [
      {
        _type: "heroSection",
        eyebrow: "New · AI graph editor",
        title: "From rough notes",
        titleHighlight: "to a clear plan.",
        body: "Describe what you're shipping in plain language. Flux Graph's AI drafts the first map — nodes, owners, and dependencies — ready for your team to refine.",
        metricLabel: "from prompt to first map",
        metricValue: "<2 min",
        links: [
          {
            label: "Try the AI editor",
            href: "/case-study",
            variant: "primary",
          },
          { label: "Back to home", href: "/", variant: "ghost" },
        ],
      },
      {
        _type: "featureGridSection",
        eyebrow: "AI-assisted planning",
        title: "Plan at the speed of thought.",
        body: "Turn messy inputs into a structured plan in seconds, then keep editing with full control.",
        features: [
          {
            title: "Prompt to graph",
            body: "Generate a first-pass plan from rough product notes, then edit every node directly.",
            stat: "AI-assisted",
          },
          {
            title: "Smart suggestions",
            body: "Flux Graph proposes likely dependencies and owners as your plan grows.",
            stat: "Adaptive",
          },
          {
            title: "Always editable",
            body: "The AI gives you a starting point — you stay in control of the final map.",
            stat: "Yours",
          },
        ],
      },
      {
        _type: "splitVisualSection",
        eyebrow: "Workflow",
        title: "From blank canvas to shared plan in minutes.",
        body: "Start with a prompt, refine the generated map with your team, and share a single source of truth — no setup required.",
        bullets: [
          "Generate a starting map from plain-language notes",
          "Refine nodes, owners, and dependencies in real time",
          "Share read-only views with stakeholders instantly",
        ],
        reverse: true,
      },
      {
        _type: "faqSection",
        title: "About the AI editor",
        faqs: [
          {
            question: "Does the AI replace my planning?",
            answer:
              "No. It drafts a first version so you can skip the blank canvas — you refine, reorganize, and own the final plan.",
          },
          {
            question: "What can I generate a map from?",
            answer:
              "Paste rough notes, a brief, or a list of initiatives, and Flux Graph structures them into a connected, editable map.",
          },
        ],
      },
      {
        _type: "ctaSection",
        title: "Start your first map with AI.",
        body: "Turn a prompt into a working plan in minutes, then bring your team in to refine it together.",
        links: [
          {
            label: "Try Flux Graph free",
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
