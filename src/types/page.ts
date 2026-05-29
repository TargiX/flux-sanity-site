export type LinkVariant = "primary" | "secondary" | "ghost";

export type CtaLink = {
  label: string;
  href: string;
  variant?: LinkVariant;
};

export type Seo = {
  title: string;
  description: string;
  canonical?: string;
  image?: {
    url?: string;
    alt?: string;
  };
};

export type SanityImage = {
  url?: string;
  alt?: string;
};

export type HeroSection = {
  _type: "heroSection";
  _key?: string;
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  body: string;
  links?: CtaLink[];
  metricLabel?: string;
  metricValue?: string;
};

export type LogoStripSection = {
  _type: "logoStripSection";
  _key?: string;
  title?: string;
  logos: string[];
};

export type FeatureGridSection = {
  _type: "featureGridSection";
  _key?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  features: Array<{
    title: string;
    body: string;
    stat?: string;
  }>;
};

export type SplitVisualSection = {
  _type: "splitVisualSection";
  _key?: string;
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  image?: SanityImage;
  reverse?: boolean;
};

export type TestimonialsSection = {
  _type: "testimonialsSection";
  _key?: string;
  title: string;
  quotes: Array<{
    quote: string;
    name: string;
    role: string;
  }>;
};

export type PricingSection = {
  _type: "pricingSection";
  _key?: string;
  title: string;
  plans: Array<{
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
  }>;
};

export type FaqSection = {
  _type: "faqSection";
  _key?: string;
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export type CtaSection = {
  _type: "ctaSection";
  _key?: string;
  title: string;
  body: string;
  links?: CtaLink[];
};

export type PageSection =
  | HeroSection
  | LogoStripSection
  | FeatureGridSection
  | SplitVisualSection
  | TestimonialsSection
  | PricingSection
  | FaqSection
  | CtaSection;

export type MarketingPage = {
  title: string;
  slug: string;
  seo: Seo;
  sections: PageSection[];
  updatedAt?: string;
};
