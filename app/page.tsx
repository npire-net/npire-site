import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Layers, Compass, BarChart3 } from "lucide-react";
import { UmbrellaNav } from "@/components/umbrella-nav";
import { UmbrellaFooter } from "@/components/umbrella-footer";
import { LAYERS_URL, AMBASSADOR_URL, BENCHMARK_URL } from "@/lib/site-config";

// Placeholder umbrella copy. CW is delivering positioning + copy in a
// separate markdown brief. Until that lands, every paragraph here is
// clearly stub-flagged so it doesn't get mistaken for finished copy.
const PRODUCTS = [
  {
    slug: "layers",
    name: "Layers",
    tagline: "Design review overlay for product teams",
    blurb:
      "[Placeholder copy.] One script tag puts a floating review pill on your staging site. PMs annotate, QA classifies, designers confirm specs, developers read notes — all directly on the live UI.",
    icon: Layers,
    accent: "#2563eb",
    status: "Public beta",
    href: LAYERS_URL,
    external: true,
  },
  {
    slug: "ambassador",
    name: "Ambassador",
    tagline: "[Tagline placeholder]",
    blurb:
      "[Placeholder copy — CW is finalizing positioning.] Ambassador will be revealed when the brand work lands. Until then, this card is structural.",
    icon: Compass,
    accent: "#15803d",
    status: "Coming soon",
    href: AMBASSADOR_URL,
    external: true,
  },
  {
    slug: "benchmark",
    name: "Benchmark",
    tagline: "[Tagline placeholder]",
    blurb:
      "[Placeholder copy — CW is finalizing positioning.] Benchmark will be revealed when the brand work lands. Until then, this card is structural.",
    icon: BarChart3,
    accent: "#9333ea",
    status: "Coming soon",
    href: BENCHMARK_URL,
    external: true,
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
            {/* Placeholder tag — CW will replace */}
            A small studio shipping focused tools
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            {/* Placeholder headline — CW will replace */}
            Tools for product teams
            <br />
            <span className="text-muted-foreground">who care how it ships.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {/* Placeholder description — CW will replace */}
            Three independent products, one shared point of view: review and
            measure your product against the design, not the spec doc.
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
              Browse all products
            </a>
          </div>
        </section>

        {/* ── Products grid ─────────────────────────────────────────────── */}
        <section id="products" className="px-6 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Products</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {/* Placeholder section title */}
              Three tools. One studio.
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
                          variant={product.status === "Public beta" ? "secondary" : "outline"}
                          className="text-[10px]"
                        >
                          {product.status}
                        </Badge>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-xs text-muted-foreground">{product.tagline}</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.blurb}
                      </p>
                      <div className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </section>

        {/* ── Founder section (placeholder) ─────────────────────────────── */}
        <section className="px-6 py-16 max-w-3xl mx-auto">
          <div className="rounded-lg border border-dashed border-border bg-muted/30 p-8 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-3">
              Placeholder — founder section
            </p>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              CW is drafting the founder bio + photo placement separately.
              This block is structural; real copy lands when the brief is
              delivered.
            </p>
          </div>
        </section>
      </main>

      <UmbrellaFooter />
    </>
  );
}
