import Link from "next/link";
import { StudioClient } from "@/components/studio-client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { isSanityConfigured } from "@/sanity/lib/client";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="min-h-screen bg-black px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Badge className="rounded-md border-emerald-300/30 bg-emerald-300/12 text-emerald-100">
            Sanity Studio
          </Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold sm:text-5xl">
            Connect a Sanity project to open the embedded editor.
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/64">
            The public marketing pages are running from typed fallback content. Add
            Sanity environment variables to enable the real Studio, Draft Mode, and
            Visual Editing workflow.
          </p>
          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-5 font-mono text-sm text-white/72">
            <p>NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id</p>
            <p>NEXT_PUBLIC_SANITY_DATASET=production</p>
            <p>SANITY_API_READ_TOKEN=your-viewer-token</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-md">
              <Link href="/case-study">Review CMS case study</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-md">
              <Link href="/">Back to site</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return <StudioClient />;
}
