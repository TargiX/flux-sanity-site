import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
  process.env.SANITY_STUDIO_PROJECT_ID ??
  "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const previewOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default defineConfig({
  name: "flux-sanity-site",
  title: "Flux Graph Marketing",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        initial: previewOrigin,
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
      resolve: {
        mainDocuments: [
          {
            route: "/",
            filter: `_type == "page" && slug.current == "home"`,
          },
          {
            route: "/campaigns/:slug",
            filter: `_type == "page" && slug.current == $slug`,
            params: ({ params }) => ({ slug: params.slug }),
          },
        ],
        locations: {
          page: {
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc) => {
              if (!doc?.slug) {
                return { message: "Add a slug to preview this page." };
              }

              return {
                locations: [
                  {
                    title: doc.title ?? "Untitled page",
                    href: doc.slug === "home" ? "/" : `/campaigns/${doc.slug}`,
                  },
                ],
              };
            },
          },
        },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
