import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PlaceholderNotice from "@/components/ui/PlaceholderNotice";

const UPCOMING_EVENTS = [
  {
    title: "Community Food Drive",
    date: "Date to be announced",
    location: "Location to be announced",
    category: "Food Access",
    description: "Content coming soon — placeholder description of this event.",
  },
  {
    title: "Mental Wellness Workshop",
    date: "Date to be announced",
    location: "Location to be announced",
    category: "Mental Health",
    description: "Content coming soon — placeholder description of this event.",
  },
  {
    title: "Neighborhood Food Distribution",
    date: "Date to be announced",
    location: "Location to be announced",
    category: "Food Access",
    description: "Content coming soon — placeholder description of this event.",
  },
  {
    title: "Community Awareness Day",
    date: "Date to be announced",
    location: "Location to be announced",
    category: "Mental Health",
    description: "Content coming soon — placeholder description of this event.",
  },
];

const CATEGORY_CLASSES: Record<string, string> = {
  "Food Access": "bg-brand-cornflower/10 text-brand-cornflower",
  "Mental Health": "bg-brand-sky/15 text-brand-sea",
};

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming Feed the Mind events, from food drives to mental wellness workshops.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Join us in person"
        description="From food drives to workshops, here's what's coming up. Full event details will be added as they're scheduled."
      >
        <PlaceholderNotice className="mt-6" />
      </PageHero>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {UPCOMING_EVENTS.map((event) => (
            <Card key={event.title} className="flex flex-col">
              <span
                className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${CATEGORY_CLASSES[event.category]}`}
              >
                {event.category}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-brand-sea">{event.title}</h3>
              <dl className="mt-3 space-y-1 text-sm text-brand-sea/70">
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Date</dt>
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-cornflower" fill="currentColor">
                    <path d="M7 2v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zM5 9h14v9H5V9z" />
                  </svg>
                  <dd>{event.date}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Location</dt>
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-cornflower" fill="currentColor">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <dd>{event.location}</dd>
                </div>
              </dl>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-sea/70">{event.description}</p>
              <Button href="/contact" variant="outline" className="mt-5 self-start">
                Learn more
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="powder">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-brand-sea sm:text-3xl">
            Want to host or co-organize an event with us?
          </h2>
          <p className="mt-3 text-brand-sea/75">
            Content coming soon — placeholder text about event partnerships.
          </p>
          <Button href="/contact" variant="primary" className="mt-8">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
