import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-white/58 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 Flux Graph. Visual planning for modern teams.</p>
        <div className="flex flex-wrap gap-5">
          <Link href="/case-study" className="transition hover:text-white">
            How it works
          </Link>
          <Link href="/campaigns/ai-graph-editor" className="transition hover:text-white">
            AI editor
          </Link>
          <Link href="/studio" className="transition hover:text-white">
            Studio
          </Link>
        </div>
      </div>
    </footer>
  );
}
