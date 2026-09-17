import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import PlaceholderNotice from "@/components/ui/PlaceholderNotice";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const WAYS_TO_HELP = [
  {
    title: "Volunteer",
    icon: "hands" as const,
    description:
      "Lend your time at food distributions, community workshops, and events. Content coming soon — placeholder description of volunteer roles and time commitment.",
    cta: "Sign up to volunteer",
    href: "/contact",
  },
  {
    title: "Partner With Us",
    icon: "people" as const,
    description:
      "Are you an organization, business, or professional who wants to collaborate? Content coming soon — placeholder description of partnership opportunities.",
    cta: "Become a partner",
    href: "/contact",
  },
  {
    title: "Donate",
    icon: "heart" as const,
    description:
      "Financial support helps us fund food distributions and mental health programming directly. Content coming soon — placeholder description of donation impact.",
    cta: "Donate now",
    href: "/donate",
  },
];

function Icon({ name }: { name: "hands" | "people" | "heart" }) {
  const paths: Record<typeof name, string> = {
    hands:
      "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    people:
      "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    heart:
      "M12 21s-6.7-4.35-9.33-8.28C1.02 10.5 1.6 7.36 4.1 5.6 6.2 4.12 8.9 4.6 10.4 6.4L12 8.2l1.6-1.8c1.5-1.8 4.2-2.28 6.3-.8 2.5 1.76 3.08 4.9 1.43 7.12C18.7 16.65 12 21 12 21z",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
      <path d={paths[name]} />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Volunteer, partner with, or donate to Feed the Mind.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="There's a place for you at this table"
        description="Whether you have an hour, a partnership, or a donation to offer, Feed the Mind can put it to work in the community."
      >
        <PlaceholderNotice className="mt-6" />
      </PageHero>

      <Section tone="white">
        <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {WAYS_TO_HELP.map((way) => (
            <StaggerItem key={way.title}>
              <Card className="flex h-full flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-cornflower/10 text-brand-cornflower">
                  <Icon name={way.icon} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-sea">{way.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-sea/70">{way.description}</p>
                <Button href={way.href} variant="outline" className="mt-6 self-start">
                  {way.cta}
                </Button>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section tone="powder">
        <SectionHeading
          eyebrow="Corporate & Group Involvement"
          title="Bring your team, school, or organization"
          description="Content coming soon — placeholder description of group volunteer days, sponsorships, and in-kind donation opportunities for organizations."
        />
      </Section>

      <Section tone="sea">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to get started?</h2>
          <p className="mt-3 text-white/80">
            Reach out and we&rsquo;ll follow up about the best way to plug in.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="inverted">
              Contact Us
            </Button>
            <Button
              href="/donate"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-sea"
            >
              Donate
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
