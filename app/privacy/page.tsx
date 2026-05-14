import { UmbrellaNav } from "@/components/umbrella-nav";
import { UmbrellaFooter } from "@/components/umbrella-footer";

export const metadata = { title: "Privacy — Npire" };

export default function PrivacyPage() {
  return (
    <>
      <UmbrellaNav />
      <main className="pt-14">
        <section className="px-6 pt-24 pb-20 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: May 2026</p>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              Npire collects minimal data necessary to operate its products. Depending on the
              product, this may include account authentication information, project or audit
              content you create within the product, or information you provide during
              onboarding. We do not sell your data. We do not share it with third parties
              except as required to operate the service (e.g. Firebase/Google for auth and
              storage).
            </p>
            <p>
              For questions:{" "}
              <a href="mailto:support@npire.net" className="text-foreground hover:underline">
                support@npire.net
              </a>
            </p>
          </div>
        </section>
      </main>
      <UmbrellaFooter />
    </>
  );
}
