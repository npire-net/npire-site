import { UmbrellaNav } from "@/components/umbrella-nav";
import { UmbrellaFooter } from "@/components/umbrella-footer";

export const metadata = { title: "Terms — Npire" };

export default function TermsPage() {
  return (
    <>
      <UmbrellaNav />
      <main className="pt-14">
        <section className="px-6 pt-24 pb-20 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Use</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: May 2026</p>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              By using Npire products, you agree to use them for lawful purposes only. Npire
              products are provided as-is during beta. We reserve the right to modify or
              discontinue any product with reasonable notice.
            </p>
            <p>
              For questions:{" "}
              <a href="mailto:hello@npire.net" className="text-foreground hover:underline">
                hello@npire.net
              </a>
            </p>
          </div>
        </section>
      </main>
      <UmbrellaFooter />
    </>
  );
}
