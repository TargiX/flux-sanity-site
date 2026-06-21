# Flux Sanity Site

**Live demo:** [sanity.ilyamoskovkin.com](https://sanity.ilyamoskovkin.com)  
**Source:** [github.com/TargiX/flux-sanity-site](https://github.com/TargiX/flux-sanity-site)

A portfolio-grade marketing site builder for a fictional Flux Graph SaaS product.

This repo demonstrates the workflow requested by front-end marketing-site roles: polished responsive implementation, headless CMS modeling, reusable landing-page sections, technical SEO, preview mode, and Vercel deployment.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- shadcn/ui and lucide-react
- Sanity Studio embedded at `/studio`
- `next-sanity` for GROQ, App Router fetching, Live Content, and Draft Mode wiring
- Sanity TypeGen via `npm run sanity:typegen`

## What To Review

- `/` renders the CMS-driven homepage.
- `/campaigns/ai-graph-editor` renders a reusable campaign page from the same page model.
- `/case-study` explains the CMS architecture and portfolio proof points.
- `/studio` loads the embedded Sanity Studio shell.
- `/sitemap.xml` and `/robots.txt` are generated with Next.js metadata routes.

The app uses typed fallback content when Sanity env vars are missing, so the portfolio remains buildable and reviewable without private credentials.

## CMS Model

The Sanity `page` document owns:

- title
- slug
- SEO metadata
- ordered reusable sections

Supported sections:

- hero
- logo strip
- feature grid
- split visual
- testimonials
- pricing
- FAQ
- CTA

## Environment

Copy `.env.example` to `.env.local` and fill Sanity values when connecting a real project:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3000/studio
SANITY_API_READ_TOKEN=
SANITY_STUDIO_PROJECT_ID=
```

Without these values, public pages render from `src/content/fallback.ts`.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run sanity:typegen
```

## Preview Workflow

Draft preview is wired at `/api/draft-mode/enable`. When a Sanity project ID, dataset, and read token are configured, the embedded Studio can use Presentation/Visual Editing to preview draft content in the Next.js frontend.

## Deployment Notes

Deploy to Vercel as a standard Next.js project. Set the same Sanity environment variables in Vercel if the deployment should fetch live CMS content; otherwise it will serve fallback portfolio content.
