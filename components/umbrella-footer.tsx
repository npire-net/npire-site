import { Layers } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  BRAND_NAME,
  SUPPORT_EMAIL,
  LAYERS_URL,
  BENCHMARK_URL,
} from "@/lib/site-config";

const AMBASSADOR_EARLY_ACCESS = `mailto:${SUPPORT_EMAIL}?subject=Ambassador%20early%20access`;

const FOOTER_LINKS = [
  { label: "Layers", href: LAYERS_URL },
  { label: "Ambassador", href: AMBASSADOR_EARLY_ACCESS },
  { label: "Benchmark", href: BENCHMARK_URL },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function UmbrellaFooter() {
  return (
    <footer className="border-t border-border px-6 py-10 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
            <Layers className="h-3 w-3 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold">{BRAND_NAME}</span>
          <Separator orientation="vertical" className="h-4 mx-2" />
          <span className="text-xs text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {SUPPORT_EMAIL}
          </a>
        </nav>
      </div>
    </footer>
  );
}
