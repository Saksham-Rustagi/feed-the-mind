import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const CONTACT_DETAILS = [
  {
    label: "Email",
    value: "hello@feedthemind.org",
    href: "mailto:hello@feedthemind.org",
    icon: "M2.94 6.94A2 2 0 0 1 4.5 6h15a2 2 0 0 1 1.56.94L12 12.5 2.94 6.94zM2 8.24V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.24l-9.44 5.9a1 1 0 0 1-1.12 0L2 8.24z",
  },
  {
    label: "Phone",
    value: "(555) 555-1234",
    href: "tel:+15555551234",
    icon: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.6 21 3 12.4 3 2c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8z",
  },
  {
    label: "Address",
    value: "123 Community Way, Anytown, USA",
    href: undefined,
    icon: "M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
  },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Feed the Mind by email, phone, or social media.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Reach out with questions, partnership ideas, or ways to get involved. Contact details below are placeholders for now."
      />

      <Section tone="white">
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CONTACT_DETAILS.map((detail) => {
            const content = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-cornflower/10 text-brand-cornflower">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d={detail.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-sea/60">
                  {detail.label}
                </h3>
                <p className="mt-1 text-base font-medium text-brand-sea">{detail.value}</p>
              </>
            );
            return (
              <StaggerItem key={detail.label}>
                <Card className="flex flex-col items-center text-center">
                  {detail.href ? (
                    <a href={detail.href} className="flex flex-col items-center">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <div className="mt-12 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-sea/60">
            Follow along on social media
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-brand-cornflower px-5 py-2 text-sm font-semibold text-brand-cornflower transition-colors hover:bg-brand-cornflower hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-brand-powder/25 p-6 text-center">
          <h2 className="text-base font-semibold text-brand-sea">Office Hours</h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-sea/70">
            Placeholder hours — Monday&ndash;Friday, 9:00 AM&ndash;5:00 PM.
          </p>
        </div>
      </Section>
    </>
  );
}
