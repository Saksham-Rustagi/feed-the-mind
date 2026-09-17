import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import HomeHero from "@/components/home/HomeHero";

const EXPLORE_LINKS = [
  {
    href: "/about-us",
    title: "About Us",
    description: "Who we are and the story behind Feed the Mind.",
  },
  {
    href: "/our-mission",
    title: "Our Mission",
    description: "The belief that food and mental well-being go hand in hand.",
  },
  {
    href: "/what-we-do",
    title: "What We Do",
    description: "Our food access and mental health programs, side by side.",
  },
  {
    href: "/get-involved",
    title: "Get Involved",
    description: "Volunteer, partner with us, or support our work.",
  },
  {
    href: "/events",
    title: "Events",
    description: "Upcoming food drives, workshops, and community gatherings.",
  },
  {
    href: "/resources",
    title: "Resources",
    description: "Guides, downloads, and links for food and mental health support.",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Reach our team by email, phone, or social media.",
  },
  {
    href: "/donate",
    title: "Donate",
    description: "Help us nourish, connect, and grow more communities.",
  },
];

const FOOD_ACTIVITIES = ["Food drives", "Food distributions", "Community partnerships", "Food donations"];

const MENTAL_HEALTH_ACTIVITIES = [
  "Mental-health education",
  "Community workshops",
  "Awareness campaigns",
  "Resource sharing",
  "Connections to professionals and organizations",
];

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <StaggerItem as="li" className="flex items-start gap-3">
      <svg
        viewBox="0 0 24 24"
        className="mt-0.5 h-5 w-5 shrink-0 text-brand-cornflower"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" className="fill-brand-powder/50 stroke-none" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l2.5 2.5L16 9" />
      </svg>
      <span className="text-brand-sea/85">{children}</span>
    </StaggerItem>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Overview + shortcuts */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Welcome"
          title="One organization, two essential kinds of nourishment"
          description="Feed the Mind connects communities to reliable food resources and accessible mental health support — because neither should be out of reach. Explore what we do, page by page."
        />
        <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EXPLORE_LINKS.map((link) => (
            <StaggerItem key={link.href}>
              <Link href={link.href} className="group block h-full">
                <Card className="flex h-full flex-col justify-between group-hover:border-brand-cornflower">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-sea">{link.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-sea/70">{link.description}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-cornflower">
                    Learn more
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Food access */}
      <Section tone="powder">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Food Access"
              title="Connecting communities with food resources"
              description="We work to connect communities with food resources and support initiatives that help address food insecurity."
            />
            <StaggerGroup as="ul" className="mt-6 space-y-3">
              {FOOD_ACTIVITIES.map((activity) => (
                <CheckItem key={activity}>{activity}</CheckItem>
              ))}
            </StaggerGroup>
            <Button href="/what-we-do" variant="primary" className="mt-8">
              See our food access programs
            </Button>
          </div>
          <StaggerGroup className="grid grid-cols-2 gap-4">
            <StaggerItem className="aspect-square rounded-2xl bg-brand-cornflower" />
            <StaggerItem className="mt-8 aspect-square rounded-2xl bg-brand-sky" />
            <StaggerItem className="-mt-8 aspect-square rounded-2xl bg-brand-lake" />
            <StaggerItem className="aspect-square rounded-2xl bg-brand-sea" />
          </StaggerGroup>
        </div>
      </Section>

      {/* Mental health support */}
      <Section tone="white">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <StaggerGroup className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <StaggerItem className="aspect-square rounded-2xl bg-brand-sea" />
            <StaggerItem className="mt-8 aspect-square rounded-2xl bg-brand-lake" />
            <StaggerItem className="-mt-8 aspect-square rounded-2xl bg-brand-sky" />
            <StaggerItem className="aspect-square rounded-2xl bg-brand-cornflower" />
          </StaggerGroup>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Mental Health Support"
              title="Emotional wellness, education, and connection"
              description="We build awareness and access around mental health, so support feels within reach for everyone in our community."
            />
            <StaggerGroup as="ul" className="mt-6 space-y-3">
              {MENTAL_HEALTH_ACTIVITIES.map((activity) => (
                <CheckItem key={activity}>{activity}</CheckItem>
              ))}
            </StaggerGroup>
            <Button href="/what-we-do" variant="primary" className="mt-8">
              See our mental health programs
            </Button>
          </div>
        </div>
      </Section>

      {/* Closing banner */}
      <Section tone="sea">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-2xl font-semibold leading-relaxed sm:text-3xl">
            &ldquo;Food insecurity and mental well-being are deeply connected to
            people&rsquo;s ability to learn, work, participate in their
            communities, and pursue their goals.&rdquo;
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/get-involved" variant="inverted">
              Get Involved
            </Button>
            <Button href="/donate" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-sea">
              Donate
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
