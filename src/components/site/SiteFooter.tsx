import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { BRAND, CONTACTS, NAV, SERVICES, formatPhone, telHref } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr_1.2fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 font-display text-2xl italic text-primary-foreground">{BRAND.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-navy-foreground-muted">
            Flyer distribution, newspaper insertion, board installation and on-ground promotional services across Bangalore.
          </p>
        </div>
        <div>
          <h3 className="eyebrow font-sans">Quick links</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-navy-foreground-muted hover:text-accent">{n.label}</Link></li>
            ))}
            <li><Link to="/quote" className="text-navy-foreground-muted hover:text-accent">Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow font-sans">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="text-navy-foreground-muted hover:text-accent">{s.title}</Link>
              </li>
            ))}
            <li><Link to="/services" className="font-semibold text-primary-foreground hover:text-accent">View all services →</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow font-sans">Contact</h3>
          <ul className="mt-5 space-y-5 text-sm">
            {CONTACTS.map((c) => (
              <li key={c.name}>
                <p className="font-semibold text-primary-foreground">{c.name}</p>
                {c.phones.map((p) => (
                  <a key={p} href={telHref(p)} className="mt-1 flex items-center gap-2 text-navy-foreground-muted hover:text-accent">
                    <Phone className="size-3.5" /> {formatPhone(p)}
                  </a>
                ))}
              </li>
            ))}
            <li className="flex items-center gap-2 text-navy-foreground-muted"><MapPin className="size-4" /> {BRAND.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-navy-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-accent">Privacy notice</Link>
        </div>
      </div>
    </footer>
  );
}
