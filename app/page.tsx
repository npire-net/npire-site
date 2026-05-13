import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Layers, Compass, BarChart3 } from "lucide-react";
import { UmbrellaNav } from "@/components/umbrella-nav";
import { UmbrellaFooter } from "@/components/umbrella-footer";
import {
  LAYERS_URL,
  BENCHMARK_URL,
  AMBASSADOR_URL,
} from "@/lib/site-config";

const PRODUCTS = [
  {
    slug: "layers",
    name: "Layers",
    tagline: "Design review, collapsed.",
    blurb:
      "A non-destructive review overlay that drops onto any web app via a single script tag. PMs annotate. Designers spec. QA classifies. Devs read implementation notes. Everyone comments — directly on the live UI. Replaces five tools with one source of truth.",
    icon: Layers,
    accent: "#2563eb",
    status: "Public beta",
    href: LAYERS_URL,
    cta: "Visit Layers",
  },
  {
    slug: "ambassador",
    name: "Ambassador",
    tagline: "Your AI in the meeting. Openly disclosed.",
    blurb:
      "An AI meeting proxy that joins your Meet, Zoom, or Teams calls, listens in real time, and surfaces suggested responses through your phone — so you stay present and in control without being the bottleneck for every routine question. For operators stuck in too many low-leverage conversations.",
    icon: Compass,
    accent: "#15803d",
    status: "Coming soon",
    href: AMBASSADOR_URL,
    cta: "Learn more",
  },
  {
    slug: "benchmark",
    name: "Benchmark",
    tagline: "Competitive UX intelligence, automated.",
    blurb:
      "An AI agent runs your exact task as your exact persona across your competitors' websites and tells you what it perceived — ranked by friction, scored on the UI Clutter Index, the first standardized metric built for competitive UX comparison.",
    icon: BarChart3,
    accent: "#9333ea",
    status: "Now available",
    href: BENCHMARK_URL,
    cta: "See Benchmark",
  },
] as const;

export default function NpireHome() {
  return (
    <>
      <UmbrellaNav />

      <main className="pt-14">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="px-6 pt-24 pb-20 max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Built by an operator
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            AI-native tools, built with thirty years of UX rigor.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Three products from one operator. EMC. Dell. U.S. Navy. Union Bank. DreamWorks. Now Npire.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={LAYERS_URL}
              className="inline-flex items-center justify-center gap-2 px-6 h-11 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              See Layers
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-6 h-11 text-base font-medium rounded-lg border border-border hover:bg-accent transition-colors"
            >
              See products
            </a>
          </div>
        </section>

        {/* ── Products grid ─────────────────────────────────────────────── */}
        <section id="products" className="px-6 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Products</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Three products. One operator.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => {
              const Icon = product.icon;
              return (
                <a
                  key={product.slug}
                  href={product.href}
                  className="group block"
                >
                  <Card className="h-full hover:border-border/80 transition-colors">
                    <CardContent className="pt-6 pb-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className="w-10 h-10 rounded-md flex items-center justify-center"
                          style={{ backgroundColor: `${product.accent}20` }}
                        >
                          <Icon
                            className="h-5 w-5"
                            style={{ color: product.accent }}
                          />
                        </div>
                        <Badge
                          variant={product.status === "Coming soon" ? "outline" : "secondary"}
                          className="text-xs"
                        >
                          {product.status}
                        </Badge>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.tagline}</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.blurb}
                      </p>
                      <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        {product.cta}
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </section>

        {/* ── Founder section ─────────────────────────────────────────── */}
        <section className="px-6 py-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Behind Npire
          </h2>
          <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
            <p>
              A UX architect whose track record spans Combat Information
              Center human factors for the U.S. Navy at SPAWAR, full-stack
              UX leadership for Dell&rsquo;s flagship enterprise capture
              platform, design leadership across Union Bank&rsquo;s mobile
              and wealth platforms, and consulting research for DreamWorks
              Animation. Co-inventor on U.S. Patent 7,783,983. UC San
              Diego, B.A. Cognitive Science.
            </p>
            <p>
              Npire products are built solo on AI-native infrastructure.
              No marketing department. No design committee. One operator
              who&rsquo;s seen what works at scale &mdash; now shipping at
              AI-native speed.
            </p>
          </div>
        </section>
      </main>

      <UmbrellaFooter />
    </>
  );
}
