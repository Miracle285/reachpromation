import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/PageHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import heroImg from "@/assets/hero-billboard.jpg";
import { CLIENTS, PROCESS, SERVICES, WHY_CHOOSE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "Reach Promotion | Flyer Distribution & Outdoor Advertising in Bangalore",
      "Reach Promotion provides flyer distribution, newspaper insertion, pole board installation and promotional services across Bangalore.",
    ),
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <img src={heroImg} alt="Outdoor billboards along a busy Bangalore road at sunset" width={1920} height={1088} className="absolute inset-0 -z-20 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-site py-24 md:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">
              <MapPin className="size-3.5 text-accent" /> Bangalore, Karnataka
            </p>
            <h1 className="mt-6 text-5xl font-semibold md:text-7xl">
              Take Your Brand to <em className="text-accent">Greater Heights.</em>
            </h1>
            <p className="mt-6 text-xl font-medium text-primary-foreground">
              Your Trusted Outdoor Advertising &amp; Promotional Partner in Bangalore.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground-muted">
              We help businesses connect with their target audience through professional flyer distribution, newspaper insertion, pole board installation and on-ground promotional activities.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="xl"><Link to="/quote">Get a Free Quote</Link></Button>
              <Button asChild variant="onDark" size="xl"><Link to="/services">Explore Our Services</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-site py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Our services" title="Promotion that reaches people where they are">
            From doorsteps to college gates, we put your message in front of the right audience across Bangalore.
          </SectionHeading>
          <Button asChild variant="outline" size="lg"><Link to="/services">All services <ArrowRight /></Link></Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {SERVICES.slice(6).map((s) => (
            <li key={s.slug}>
              <Link to="/services" hash={s.slug} className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:border-accent hover:text-accent">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Why choose */}
      <section className="bg-secondary">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Why Reach Promotion" title="A dependable partner on the ground">
              We know Bangalore's neighbourhoods, markets and student areas — and we turn up on time.
            </SectionHeading>
            <div className="mt-10 flex items-baseline gap-4 border-l-4 border-accent pl-5">
              <span className="font-display text-7xl font-bold text-primary">4</span>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">years of industry<br />experience</span>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {WHY_CHOOSE.map((point) => (
              <li key={point} className="flex gap-3 rounded-lg border border-border bg-card p-5 shadow-card">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-3.5" /></span>
                <span className="font-medium text-primary">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section className="container-site py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Our experience" title="Experience That Builds Trust.">
            Over the past four years, we have developed practical experience in distribution and promotional services across Bangalore. We understand local market requirements and focus on reliable coordination and professional execution.
          </SectionHeading>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Organisations we have worked with</p>
            <ul className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
              {CLIENTS.map((c) => (
                <li key={c} className="grid min-h-28 place-items-center bg-card px-4 text-center font-display text-2xl font-semibold text-primary">{c}</li>
              ))}
            </ul>
            <Link to="/experience" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent">
              More about our experience <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-background">
        <div className="container-site py-20 md:py-28">
          <SectionHeading eyebrow="How we work" title="Our working process" align="center" />
          <ol className="mt-14 grid gap-6 md:grid-cols-5">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="font-display text-5xl font-bold text-accent">0{i + 1}</span>
                <div className="mt-3 h-px w-full bg-border" />
                <h3 className="mt-4 text-2xl text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
