import { defineQuery } from "next-sanity";

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "updatedAt": _updatedAt,
    seo {
      title,
      description,
      canonical,
      image {
        alt,
        "url": asset->url
      }
    },
    sections[] {
      ...,
      image {
        alt,
        "url": asset->url
      },
      links[] {
        label,
        href,
        variant
      },
      features[] {
        title,
        body,
        stat
      },
      quotes[] {
        quote,
        name,
        role
      },
      plans[] {
        name,
        price,
        description,
        highlighted,
        features[]
      },
      faqs[] {
        question,
        answer
      },
      logos[]
    }
  }
`);

export const PAGES_SLUGS_QUERY = defineQuery(`
  *[_type == "page" && defined(slug.current)]{
    "slug": slug.current
  }
`);
