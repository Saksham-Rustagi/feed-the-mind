import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";
import PlaceholderNotice from "@/components/ui/PlaceholderNotice";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Card from "@/components/ui/Card";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const VALUES = [
  { title: "Dignity", description: "Content coming soon — placeholder description of this core value." },
  { title: "Accessibility", description: "Content coming soon — placeholder description of this core value." },
  { title: "Community", description: "Content coming soon — placeholder description of this core value." },
  { title: "Compassion", description: "Content coming soon — placeholder description of this core value." },
];

const TEAM = [
  { name: "Placeholder Name", role: "Executive Director" },
  { name: "Placeholder Name", role: "Program Director" },
  { name: "Placeholder Name", role: "Community Outreach Lead" },
  { name: "Placeholder Name", role: "Board Chair" },
];

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Feed the Mind, our story, values, and the people behind our work.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The story behind Feed the Mind"
        description="A placeholder introduction to who we are — final copy is on the way."
      >
        <PlaceholderNotice className="mt-6" />
      </PageHero>

      {/* Our story */}
      <Section tone="white">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="How Feed the Mind began" />
            <p className="mt-4 text-base leading-relaxed text-brand-sea/75">
              Content coming soon. This section will share the story of how
              Feed the Mind was founded, the need we saw in our community, and
              the journey to where we are today.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-sea/75">
              Content coming soon. A second paragraph will continue the story,
              covering our growth and the communities we&rsquo;ve been able to
              reach so far.
            </p>
          </div>
          <PlaceholderImage label="Our story photo" tone="lake" icon="hands" ratio="video" />
        </div>
      </Section>

      {/* Our values */}
      <Section tone="powder">
        <SectionHeading eyebrow="Our Values" title="What guides our work" align="center" />
        <StaggerGroup className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <Card>
                <h3 className="text-lg font-semibold text-brand-sea">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-sea/70">{value.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Our team */}
      <Section tone="white">
        <SectionHeading eyebrow="Our Team" title="The people behind Feed the Mind" align="center" />
        <StaggerGroup className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <StaggerItem key={member.role} className="text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-brand-cornflower/90 text-white">
                <svg viewBox="0 0 24 24" className="h-12 w-12" fill="currentColor">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.42 0-8 2.24-8 5v2h16v-2c0-2.76-3.58-5-8-5z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-brand-sea">{member.name}</h3>
              <p className="text-sm text-brand-sea/60">{member.role}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>
    </>
  );
}
