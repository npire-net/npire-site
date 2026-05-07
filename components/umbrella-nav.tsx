import { Layers, ArrowRight } from "lucide-react";
import { BRAND_NAME, LAYERS_URL, AMBASSADOR_URL, BENCHMARK_URL, DASHBOARD_URL } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Layers", href: LAYERS_URL, external: true },
  { label: "Ambassador", href: AMBASSADOR_URL, external: true },
  { label: "Benchmark", href: BENCHMARK_URL, external: true },
];

export function UmbrellaNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-14 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <a href="/" className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded bg-primary flex items-center justify-center shrink-0">
          <Layers className="h-3.5 w-3.5 text-primary-foreground" />
        </div>
        <span className="flex flex-col leading-tight">
          <span className="font-semibold text-sm tracking-tight">{BRAND_NAME}</span>
          <span className="hidden sm:inline text-[10px] text-muted-foreground tracking-tight">
            Software for the work, not the demo.
          </span>
        </span>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
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
        className="inline-flex items-center gap-1.5 px-3 h-8 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Dashboard
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </header>
  );
}
