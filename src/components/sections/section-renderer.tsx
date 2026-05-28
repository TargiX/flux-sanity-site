import Link from "next/link";
import { ArrowRight, Check, CheckCircle2, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductVisual } from "@/components/product-visual";
import type {
  CtaLink,
  CtaSection,
  FaqSection,
  FeatureGridSection,
  HeroSection,
  LogoStripSection,
  MarketingPage,
  PageSection,
  PricingSection,
  SplitVisualSection,
  TestimonialsSection,
} from "@/types/page";

function SectionShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`px-5 py-20 sm:px-6 lg:px-8 ${className}`}>{children}</section>;
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 text-pretty text-base leading-7 text-white/62">{body}</p> : null}
    </div>
  );
}

function CtaButtons({ links }: { links?: CtaLink[] }) {
  if (!links?.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        const variant = link.variant === "secondary" || link.variant === "ghost" ? "outline" : "default";

        return (
          <Button key={`${link.href}-${link.label}`} asChild variant={variant} className="rounded-md">
            <Link href={link.href}>
              {link.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

function Hero({ section }: { section: HeroSection }) {
  return (
    <section className="px-5 pb-16 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          {section.eyebrow ? (
            <Badge className="mb-5 rounded-md border-emerald-300/30 bg-emerald-300/12 text-emerald-100">
              {section.eyebrow}
            </Badge>
          ) : null}
          <h1 className="text-balance text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            {section.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/68">{section.body}</p>
          <div className="mt-8">
            <CtaButtons links={section.links} />
          </div>
          {section.metricValue ? (
            <div className="mt-10 flex w-fit items-end gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4">
              <div className="font-mono text-3xl text-emerald-300">{section.metricValue}</div>
              <div className="max-w-36 pb-1 text-sm leading-5 text-white/58">{section.metricLabel}</div>
            </div>
          ) : null}
        </div>
        <ProductVisual />
      </div>
    </section>
  );
}

function LogoStrip({ section }: { section: LogoStripSection }) {
  return (
    <SectionShell className="py-10">
      <div className="mx-auto max-w-7xl border-y border-white/10 py-8">
        {section.title ? <p className="mb-5 text-sm text-white/50">{section.title}</p> : null}
        <div className="grid grid-cols-2 gap-4 text-sm font-medium text-white/64 sm:grid-cols-5">
          {section.logos.map((logo) => (
            <div key={logo} className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function FeatureGrid({ section }: { section: FeatureGridSection }) {
  return (
    <SectionShell>
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={section.eyebrow} title={section.title} body={section.body} />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {section.features.map((feature) => (
            <Card key={feature.title} className="rounded-lg border-white/10 bg-white/[0.04]">
              <CardContent className="p-6">
                {feature.stat ? <div className="mb-7 font-mono text-2xl text-cyan-200">{feature.stat}</div> : null}
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 leading-7 text-white/60">{feature.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function SplitVisual({ section }: { section: SplitVisualSection }) {
  return (
    <SectionShell className="bg-white/[0.03]">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 ${
          section.reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <SectionIntro eyebrow={section.eyebrow} title={section.title} body={section.body} />
          {section.bullets?.length ? (
            <div className="mx-auto mt-8 max-w-xl space-y-3">
              {section.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 rounded-md border border-white/10 bg-black/30 p-4 text-white/72">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-300" aria-hidden="true" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <ProductVisual />
      </div>
    </SectionShell>
  );
}

function Testimonials({ section }: { section: TestimonialsSection }) {
  return (
    <SectionShell>
      <div className="mx-auto max-w-7xl">
        <SectionIntro title={section.title} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {section.quotes.map((quote) => (
            <Card key={quote.name} className="rounded-lg border-white/10 bg-white/[0.04]">
              <CardContent className="p-6">
                <Quote className="size-6 text-rose-300" aria-hidden="true" />
                <p className="mt-5 text-pretty text-xl leading-8 text-white">{quote.quote}</p>
                <p className="mt-7 font-medium text-white">{quote.name}</p>
                <p className="mt-1 text-sm text-white/52">{quote.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Pricing({ section }: { section: PricingSection }) {
  return (
    <SectionShell className="bg-black">
      <div className="mx-auto max-w-7xl">
        <SectionIntro title={section.title} />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {section.plans.map((plan) => (
            <Card
              key={plan.name}
              className={`rounded-lg ${
                plan.highlighted
                  ? "border-emerald-300/45 bg-emerald-300 text-black"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-5 font-mono text-4xl">{plan.price}</div>
                <p className={`mt-4 leading-7 ${plan.highlighted ? "text-black/70" : "text-white/60"}`}>
                  {plan.description}
                </p>
                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="size-4" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function FAQ({ section }: { section: FaqSection }) {
  return (
    <SectionShell>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">{section.title}</h2>
        <div className="space-y-4">
          {section.faqs.map((faq) => (
            <div key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 leading-7 text-white/62">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function CTA({ section }: { section: CtaSection }) {
  return (
    <SectionShell className="pb-24">
      <div className="mx-auto max-w-5xl rounded-lg border border-white/10 bg-white/[0.05] p-8 sm:p-12">
        <h2 className="text-balance text-3xl font-semibold text-white sm:text-5xl">{section.title}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/64">{section.body}</p>
        <div className="mt-8">
          <CtaButtons links={section.links} />
        </div>
      </div>
    </SectionShell>
  );
}

function renderSection(section: PageSection) {
  switch (section._type) {
    case "heroSection":
      return <Hero section={section} />;
    case "logoStripSection":
      return <LogoStrip section={section} />;
    case "featureGridSection":
      return <FeatureGrid section={section} />;
    case "splitVisualSection":
      return <SplitVisual section={section} />;
    case "testimonialsSection":
      return <Testimonials section={section} />;
    case "pricingSection":
      return <Pricing section={section} />;
    case "faqSection":
      return <FAQ section={section} />;
    case "ctaSection":
      return <CTA section={section} />;
    default:
      return null;
  }
}

export function PageSections({ page }: { page: MarketingPage }) {
  return (
    <>
      {page.sections.map((section, index) => (
        <div key={section._key ?? `${section._type}-${index}`}>{renderSection(section)}</div>
      ))}
    </>
  );
}

export function faqJsonLd(page: MarketingPage) {
  const faqs = page.sections
    .filter((section): section is FaqSection => section._type === "faqSection")
    .flatMap((section) => section.faqs);

  if (faqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
