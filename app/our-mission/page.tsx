import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Our Mission",
  description: "Feed the Mind's mission is to provide accessible mental health resources, emotional wellness support, and nutritious food to individuals and families experiencing hardship.",
};

export default function OurMissionPage() {
  return (
    <>
      <PageHero eyebrow="Our Mission" title="Nourish. Connect. Grow." />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xl font-medium leading-relaxed text-brand-sea sm:text-2xl">
            Feed the Mind&rsquo;s mission is to provide accessible mental health
            resources, emotional wellness support, and nutritious food to
            individuals and families experiencing hardship.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-brand-sea/80">
            We believe that physical nourishment and emotional well-being are
            both essential to a fulfilling life. Through accessible mental
            health resources, emotional wellness support, and reliable access
            to nutritious food, we strive to build healthier, more supportive
            communities where no one has to struggle alone and asking for help
            feels natural and safe.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-brand-lake/40 bg-brand-powder/20 p-6">
              <h3 className="text-lg font-semibold text-brand-sea">Nourish</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-sea/70">
                Reliable access to nutritious food for individuals and families.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-lake/40 bg-brand-powder/20 p-6">
              <h3 className="text-lg font-semibold text-brand-sea">Connect</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-sea/70">
                Bringing people together with community and professional support.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-lake/40 bg-brand-powder/20 p-6">
              <h3 className="text-lg font-semibold text-brand-sea">Grow</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-sea/70">
                Building healthier, more supportive communities together.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button href="/what-we-do" variant="primary">
              See What We Do
            </Button>
            <Button href="/get-involved" variant="outline">
              Get Involved
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
