import { ArrowRight } from "lucide-react";
import { BRAND_NAME, LAYERS_URL, BENCHMARK_URL, AMBASSADOR_URL, DASHBOARD_URL } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Layers", href: LAYERS_URL, external: true },
  { label: "Ambassador", href: AMBASSADOR_URL, external: true },
  { label: "Benchmark", href: BENCHMARK_URL, external: true },
];

export function UmbrellaNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <a href="/" className="flex flex-col leading-tight gap-0.5">
        <span className="font-semibold text-base tracking-tight">{BRAND_NAME}</span>
        <span className="hidden sm:inline text-sm text-muted-foreground tracking-tight">
          Software for the work, not the demo.
        </span>
      </a>
      <nav className="hidden md:flex items-center gap-10 text-base text-muted-foreground">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href={DASHBOARD_URL}
        className="inline-flex items-center gap-1.5 px-4 h-9 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Dashboard
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </header>
  );
}
