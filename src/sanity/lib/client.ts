import { createClient } from "next-sanity";

export const apiVersion = "2026-05-28";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
  process.env.SANITY_STUDIO_PROJECT_ID ??
  "placeholder";

export const studioUrl =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000/studio";

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET,
);

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: {
    studioUrl,
  },
});
