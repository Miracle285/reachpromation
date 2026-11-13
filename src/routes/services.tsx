import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { PRIMARY_PHONE, SERVICES, whatsappHref } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: pageMeta(
      "Our Services | Flyer Distribution, Newspaper Insertion & Board Installation in Bangalore",
      "Flyer distribution, newspaper insertion, college flyer distribution, no parking and Sunpack board installation, banners, event volunteers and product distribution in Bangalore.",
    ),
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader eyebrow="Our services" title="Promotional services across Bangalore">
        Ten ways to put your brand in front of the right people — on their doorstep, at college gates, on the street and at events.
      </PageHeader>

      <nav aria-label="Services" className="sticky top-[4.5rem] z-30 border-b border-border bg-background/95 backdrop-blur md:top-[6.75rem]">
        <div className="container-site flex gap-2 overflow-x-auto py-3">
          {SERVICES.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-primary hover:border-accent hover:text-accent">
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-site divide-y divide-border">
        {SERVICES.map((s, i) => (
          <section key={s.slug} id={s.slug} className="grid scroll-mt-48 gap-10 py-16 md:grid-cols-2 md:items-center md:py-20">
            <img
              src={s.image}
              alt={s.alt}
              loading="lazy"
              width={1200}
              height={912}
              className={`aspect-[4/3] w-full rounded-lg object-cover shadow-card ${i % 2 === 1 ? "md:order-2" : ""}`}
            />
            <div>
              <p className="eyebrow">Service {String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-4xl text-primary md:text-5xl">{s.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-6 space-y-2.5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 font-medium text-primary">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="lg">
                  <Link to="/quote" search={{ service: s.title }}>Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={whatsappHref(PRIMARY_PHONE, `Hello Reach Promotion, I would like to enquire about ${s.title}.`)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle /> Ask on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
