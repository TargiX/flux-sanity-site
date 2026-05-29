import { defineField, defineType } from "sanity";

export const ctaLink = defineType({
  name: "ctaLink",
  title: "CTA link",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "Href", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: ["primary", "secondary", "ghost"],
      },
      initialValue: "primary",
    }),
  ],
});

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(160),
    }),
    defineField({ name: "canonical", title: "Canonical path", type: "string" }),
    defineField({
      name: "image",
      title: "Open Graph image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
  ],
});

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "titleHighlight",
      title: "Title highlight",
      description: "Optional second line of the headline, rendered in the brand accent color.",
      type: "string",
    }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "metricLabel", title: "Metric label", type: "string" }),
    defineField({ name: "metricValue", title: "Metric value", type: "string" }),
    defineField({ name: "links", title: "Links", type: "array", of: [{ type: "ctaLink" }] }),
  ],
});

export const logoStripSection = defineType({
  name: "logoStripSection",
  title: "Logo strip",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "logos",
      title: "Logos",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});

export const featureGridSection = defineType({
  name: "featureGridSection",
  title: "Feature grid",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        defineField({
          name: "feature",
          title: "Feature",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "body", title: "Body", type: "text", rows: 3, validation: (rule) => rule.required() }),
            defineField({ name: "stat", title: "Stat", type: "string" }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});

export const splitVisualSection = defineType({
  name: "splitVisualSection",
  title: "Split visual",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "bullets", title: "Bullets", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "image",
      title: "Optional image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({ name: "reverse", title: "Reverse layout", type: "boolean", initialValue: false }),
  ],
});

export const testimonialsSection = defineType({
  name: "testimonialsSection",
  title: "Testimonials",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "quotes",
      title: "Quotes",
      type: "array",
      of: [
        defineField({
          name: "quote",
          title: "Quote",
          type: "object",
          fields: [
            defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (rule) => rule.required() }),
            defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "role", title: "Role", type: "string", validation: (rule) => rule.required() }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});

export const pricingSection = defineType({
  name: "pricingSection",
  title: "Pricing",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "plans",
      title: "Plans",
      type: "array",
      of: [
        defineField({
          name: "plan",
          title: "Plan",
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "price", title: "Price", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (rule) => rule.required() }),
            defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "highlighted", title: "Highlighted", type: "boolean", initialValue: false }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        defineField({
          name: "faq",
          title: "FAQ",
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 3, validation: (rule) => rule.required() }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "body", title: "Body", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "links", title: "Links", type: "array", of: [{ type: "ctaLink" }] }),
  ],
});
