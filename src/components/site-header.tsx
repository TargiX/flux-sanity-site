import Link from "next/link";
import { ArrowRight, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Product", href: "/case-study" },
  { label: "AI editor", href: "/campaigns/ai-graph-editor" },
  { label: "Pricing", href: "/#pricing" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Flux Graph home">
          <span className="grid size-9 place-items-center rounded-md border border-emerald-300/40 bg-emerald-300 text-black">
            <GitBranch className="size-5" aria-hidden="true" />
          </span>
          <span className="font-semibold tracking-normal">Flux Graph</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/68 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          asChild
          size="sm"
          className="group h-9 rounded-lg border-transparent bg-emerald-300 px-4 font-semibold text-black hover:bg-emerald-200"
        >
          <Link href="/campaigns/ai-graph-editor">
            Get started
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Button>
      </div>
    </header>
  );
}
