import Link from "next/link";
import Logo from "@/components/logo/Logo";
import { NAV_ITEMS, DONATE_ITEM } from "@/lib/nav";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-sea text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="inverted" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Accessible mental health resources, emotional wellness support, and
              nutritious food for individuals and families experiencing hardship.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-powder">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={DONATE_ITEM.href} className="text-sm text-white/80 transition-colors hover:text-white">
                  {DONATE_ITEM.label}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-powder">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href="mailto:hello@feedthemind.org" className="transition-colors hover:text-white">
                  hello@feedthemind.org
                </a>
              </li>
              <li>
                <a href="tel:+15555551234" className="transition-colors hover:text-white">
                  (555) 555-1234
                </a>
              </li>
              <li className="text-white/60">123 Community Way, Anytown, USA</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-powder">
              Follow Us
            </h3>
            <ul className="mt-4 space-y-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Feed the Mind. All rights reserved.</p>
          <p className="italic">Nourish. Connect. Grow.</p>
        </div>
      </div>
    </footer>
  );
}
