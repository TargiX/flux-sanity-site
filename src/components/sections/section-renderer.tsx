import Link from "next/link";
import { ArrowRight, Check, CheckCircle2, Quote } from "lucide-react";
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
  return (
    <section className={`px-5 py-24 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
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
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-white sm:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-pretty text-base leading-7 text-white/60">
          {body}
        </p>
      ) : null}
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
        const isPrimary =
          link.variant !== "secondary" && link.variant !== "ghost";

        return (
          <Button
            key={`${link.href}-${link.label}`}
            asChild
            variant={isPrimary ? "default" : "outline"}
            className={
              isPrimary
                ? "group h-11 rounded-lg border-transparent bg-emerald-300 px-5 text-[0.9rem] font-semibold text-black shadow-[0_0_0_1px_rgba(110,231,183,0.25)] hover:bg-emerald-200"
                : "h-11 rounded-lg border-white/15 bg-white/[0.02] px-5 text-[0.9rem] font-medium text-white/90 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
            }
          >
            <Link href={link.href}>
              {link.label}
              {isPrimary ? (
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              ) : null}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

function Hero({ section }: { section: HeroSection }) {
  return (
    <section className="px-5 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[760px] lg:grid-cols-[0.72fr_1.28fr]">
        <div className="relative z-10">
          {section.eyebrow ? (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300/90">
              <span className="size-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
              {section.eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-[12ch] text-balance text-5xl font-semibold leading-[0.94] tracking-normal text-white sm:text-6xl lg:text-[5.75rem]">
            {section.title}
            {section.titleHighlight ? (
              <>
                {" "}
                <span className="text-emerald-300">{section.titleHighlight}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-white/62">
            {section.body}
          </p>
          <div className="mt-9">
            <CtaButtons links={section.links} />
          </div>
          {section.metricValue ? (
            <div className="mt-12 flex max-w-md items-center gap-5 border-l border-emerald-300/55 pl-5">
              <div className="font-mono text-3xl tracking-normal text-emerald-300 sm:text-4xl">
                {section.metricValue}
              </div>
              <div className="max-w-40 text-sm leading-5 text-white/52">
                {section.metricLabel}
              </div>
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
    <SectionShell className="py-8">
      <div className="mx-auto grid max-w-7xl gap-6 border-y border-white/10 py-7 md:grid-cols-[0.65fr_1.35fr] md:items-center">
        {section.title ? (
          <p className="max-w-sm text-sm leading-6 text-white/48">
            {section.title}
          </p>
        ) : null}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium text-white/56 sm:grid-cols-5">
          {section.logos.map((logo) => (
            <div key={logo} className="text-left md:text-center">
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
    <SectionShell className="bg-[#080907]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow={section.eyebrow}
          title={section.title}
          body={section.body}
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-3">
          {section.features.map((feature, index) => (
            <div key={feature.title} className="bg-[#080907] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-xs text-white/34">
                  0{index + 1}
                </span>
                {feature.stat ? (
                  <span className="font-mono text-sm text-cyan-200">
                    {feature.stat}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-16 text-2xl font-semibold leading-tight text-white">
                {feature.title}
              </h3>
              <p className="mt-4 leading-7 text-white/58">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function SplitVisual({ section }: { section: SplitVisualSection }) {
  return (
    <SectionShell>
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] ${
          section.reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          {section.eyebrow ? (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300/80">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="max-w-xl text-balance text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            {section.title}
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-white/60">
            {section.body}
          </p>
          {section.bullets?.length ? (
            <div className="mt-9 max-w-xl divide-y divide-white/10 border-y border-white/10">
              {section.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 py-4 text-white/72">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-emerald-300"
                    aria-hidden="true"
                  />
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
    <SectionShell className="bg-[#080907]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro title={section.title} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {section.quotes.map((quote) => (
            <Card
              key={quote.name}
              className="group rounded-2xl border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] transition-colors hover:border-emerald-300/30"
            >
              <CardContent className="p-7 sm:p-8">
                <Quote
                  className="size-6 text-emerald-300/80"
                  aria-hidden="true"
                />
                <p className="mt-7 text-pretty text-2xl leading-9 text-white">
                  {quote.quote}
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-sm font-semibold text-emerald-200"
                    aria-hidden="true"
                  >
                    {quote.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-medium text-white">{quote.name}</p>
                    <p className="text-sm text-white/52">{quote.role}</p>
                  </div>
                </div>
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
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-5 font-mono text-4xl">{plan.price}</div>
                <p
                  className={`mt-4 leading-7 ${plan.highlighted ? "text-black/70" : "text-white/60"}`}
                >
                  {plan.description}
                </p>
                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
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
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <h2 className="text-balance text-4xl font-semibold text-white sm:text-5xl">
          {section.title}
        </h2>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {section.faqs.map((faq) => (
            <div
              key={faq.question}
              className="grid gap-3 py-7 md:grid-cols-[0.55fr_1fr] md:gap-8"
            >
              <h3 className="font-semibold text-white">{faq.question}</h3>
              <p className="leading-7 text-white/62">{faq.answer}</p>
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
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-white/10 pt-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
          {section.title}
        </h2>
        <div>
          <p className="max-w-xl text-lg leading-8 text-white/64">
            {section.body}
          </p>
          <div className="mt-8">
            <CtaButtons links={section.links} />
          </div>
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
        <div key={section._key ?? `${section._type}-${index}`}>
          {renderSection(section)}
        </div>
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
