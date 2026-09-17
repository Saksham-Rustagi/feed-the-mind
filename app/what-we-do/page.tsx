import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import PlaceholderNotice from "@/components/ui/PlaceholderNotice";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const FOOD_PROGRAMS = [
  { title: "Food Drives", description: "Content coming soon — placeholder description of this program." },
  { title: "Food Distributions", description: "Content coming soon — placeholder description of this program." },
  { title: "Community Partnerships", description: "Content coming soon — placeholder description of this program." },
  { title: "Food Donations", description: "Content coming soon — placeholder description of this program." },
];

const MENTAL_HEALTH_PROGRAMS = [
  { title: "Mental-Health Education", description: "Content coming soon — placeholder description of this program." },
  { title: "Community Workshops", description: "Content coming soon — placeholder description of this program." },
  { title: "Awareness Campaigns", description: "Content coming soon — placeholder description of this program." },
  { title: "Resource Sharing", description: "Content coming soon — placeholder description of this program." },
  { title: "Connections to Professionals & Organizations", description: "Content coming soon — placeholder description of this program." },
];

export const metadata: Metadata = {
  title: "What We Do",
  description: "Explore Feed the Mind's food access and mental health support programs.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Two kinds of support, working together"
        description="Our programs fall into two connected pillars: food access and mental health support. Final program details are on the way."
      >
        <PlaceholderNotice className="mt-6" />
      </PageHero>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-brand-lake/40 bg-brand-lake/40 lg:grid-cols-2">
          {/* Food Access column */}
          <div className="flex flex-col gap-6 bg-white p-8 sm:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-cornflower/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-cornflower">
                Pillar One
              </span>
              <h2 className="mt-3 text-2xl font-bold text-brand-sea sm:text-3xl">Food Access</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-sea/75">
                We work to connect communities with food resources and support
                initiatives that help address food insecurity.
              </p>
            </div>
            <StaggerGroup as="ul" className="space-y-4">
              {FOOD_PROGRAMS.map((program) => (
                <StaggerItem as="li" key={program.title} className="rounded-xl bg-brand-powder/20 p-4">
                  <h3 className="text-base font-semibold text-brand-sea">{program.title}</h3>
                  <p className="mt-1 text-sm text-brand-sea/70">{program.description}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* Mental Health column */}
          <div className="flex flex-col gap-6 bg-white p-8 sm:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-cornflower/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-cornflower">
                Pillar Two
              </span>
              <h2 className="mt-3 text-2xl font-bold text-brand-sea sm:text-3xl">Mental Health</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-sea/75">
                We build awareness, education, and connection so mental health
                support feels accessible to everyone in our community.
              </p>
            </div>
            <StaggerGroup as="ul" className="space-y-4">
              {MENTAL_HEALTH_PROGRAMS.map((program) => (
                <StaggerItem as="li" key={program.title} className="rounded-xl bg-brand-powder/20 p-4">
                  <h3 className="text-base font-semibold text-brand-sea">{program.title}</h3>
                  <p className="mt-1 text-sm text-brand-sea/70">{program.description}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-bold text-brand-sea sm:text-3xl">
            Want to support either pillar?
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/get-involved" variant="primary">
              Get Involved
            </Button>
            <Button href="/donate" variant="outline">
              Donate
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
