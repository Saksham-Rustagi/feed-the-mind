import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PlaceholderNotice from "@/components/ui/PlaceholderNotice";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const FOOD_RESOURCES = [
  { title: "Local Food Pantry Directory", type: "Guide" },
  { title: "SNAP Benefits Application Guide", type: "Guide" },
  { title: "Community Meal Program Schedule", type: "Download" },
  { title: "Food Assistance Hotlines", type: "Link" },
];

const MENTAL_HEALTH_RESOURCES = [
  { title: "Finding a Mental Health Provider", type: "Guide" },
  { title: "Crisis & Support Hotlines", type: "Link" },
  { title: "Understanding Emotional Wellness", type: "Download" },
  { title: "Support Group Directory", type: "Guide" },
];

const TYPE_ICON: Record<string, string> = {
  Guide: "M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5a2.5 2.5 0 0 0-2.5 2.5V4.5zM6.5 19H19v1H6.5a1.5 1.5 0 0 1 0-3H19",
  Download: "M12 3v10.5m0 0l-4-4m4 4l4-4M4 19h16",
  Link: "M10.5 13.5l3-3M8 16l-2.5 2.5a3 3 0 1 1-4.24-4.24L4 11.5m12-3l2.76-2.76a3 3 0 1 0-4.24-4.24L11.5 4",
};

function ResourceList({ items }: { items: { title: string; type: string }[] }) {
  return (
    <StaggerGroup as="ul" className="space-y-3">
      {items.map((item) => (
        <StaggerItem as="li" key={item.title}>
          <a
            href="#"
            className="flex items-center gap-4 rounded-xl border border-brand-lake/40 bg-white p-4 transition-colors hover:border-brand-cornflower hover:bg-brand-powder/10"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cornflower/10 text-brand-cornflower">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d={TYPE_ICON[item.type]} />
              </svg>
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold text-brand-sea">{item.title}</span>
              <span className="text-xs uppercase tracking-wide text-brand-sea/50">{item.type} &middot; placeholder link</span>
            </span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-sea/40" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </a>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

export const metadata: Metadata = {
  title: "Resources",
  description: "Food access and mental health resources, guides, and links from Feed the Mind.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Tools and information to help you today"
        description="A growing library of guides, downloads, and links for food access and mental health support. Real resources will be linked here as they're published."
      >
        <PlaceholderNotice className="mt-6" />
      </PageHero>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Food Access" title="Food resources" />
            <div className="mt-6">
              <ResourceList items={FOOD_RESOURCES} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Mental Health" title="Mental health resources" />
            <div className="mt-6">
              <ResourceList items={MENTAL_HEALTH_RESOURCES} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="powder">
        <Card className="mx-auto max-w-3xl bg-white text-center">
          <h2 className="text-xl font-bold text-brand-sea">In crisis or need immediate help?</h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-sea/70">
            Content coming soon — placeholder text with crisis line numbers and
            emergency resource information.
          </p>
        </Card>
      </Section>
    </>
  );
}
