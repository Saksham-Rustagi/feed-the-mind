import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PlaceholderNotice from "@/components/ui/PlaceholderNotice";
import { DONATE_URL } from "@/lib/donate";

const AMOUNTS = ["$25", "$50", "$100", "$250"];

const IMPACT = [
  { title: "Food Access", description: "Helps fund food drives, distributions, and community partnerships." },
  { title: "Mental Health", description: "Supports workshops, education, and connections to professional care." },
  { title: "Community Programs", description: "Keeps events, outreach, and resource sharing free and accessible." },
];

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Feed the Mind's food access and mental health programs.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Help us nourish, connect, and grow"
        description="Every gift helps a neighbor access food, mental health support, or both. Our online giving is being finalized — the button below is a placeholder until it goes live."
      >
        <PlaceholderNotice text="Payment processor coming soon" className="mt-6" />
      </PageHero>

      {/* Prominent donate section */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl rounded-3xl border border-brand-lake/40 bg-gradient-to-b from-brand-powder/30 to-white p-8 text-center shadow-sm sm:p-12">
          <h2 className="text-2xl font-bold text-brand-sea sm:text-3xl">Make a Donation</h2>
          <p className="mt-3 text-brand-sea/75">
            Choose an amount to get started, or enter your own on the next step.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {AMOUNTS.map((amount, i) => (
              <a
                key={amount}
                href={DONATE_URL}
                aria-label={`Donate ${amount}`}
                className={`rounded-xl border-2 px-4 py-4 text-lg font-semibold transition-colors ${
                  i === 1
                    ? "border-brand-cornflower bg-brand-cornflower text-white"
                    : "border-brand-lake/60 text-brand-sea hover:border-brand-cornflower"
                }`}
              >
                {amount}
              </a>
            ))}
          </div>

          <Button href={DONATE_URL} variant="primary" className="mt-8 w-full px-10 py-4 text-base sm:w-auto">
            Donate Now
          </Button>

          <p className="mt-4 text-xs text-brand-sea/50">
            Donate button placeholder — will link to our secure payment
            processor (PayPal, Donorbox, or Stripe) once configured.
          </p>
        </div>
      </Section>

      {/* Where it goes */}
      <Section tone="powder">
        <SectionHeading eyebrow="Your Impact" title="Where your donation goes" align="center" />
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {IMPACT.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-brand-sea">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-sea/70">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Other ways to give */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Other Ways to Give"
            title="Recurring gifts, in-kind donations & more"
            description="Content coming soon — placeholder text about monthly giving, employer matching, in-kind food donations, and planned giving."
            align="center"
          />
          <Button href="/contact" variant="outline" className="mt-8">
            Contact us about giving options
          </Button>
        </div>
      </Section>
    </>
  );
}
