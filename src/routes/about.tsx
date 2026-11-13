import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Target, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import teamImg from "@/assets/service-marketing.jpg";
import { WHY_CHOOSE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      "About Reach Promotion | Promotional Services Company in Bangalore",
      "Reach Promotion is a Bangalore-based distribution and promotional services company with four years of experience in flyer distribution, newspaper insertion and installations.",
    ),
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About us" title="About Reach Promotion">
        A Bangalore-based distribution and promotional services company with four years of industry experience.
      </PageHeader>

      <section className="container-site grid gap-12 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p className="text-foreground">
            Reach Promotion is a Bangalore-based distribution and promotional services company with four years of industry experience. We provide reliable flyer distribution, newspaper insertion, installation and promotional support services across Bangalore.
          </p>
          <p>
            Our focus is on strong local market coverage, timely service, professional coordination and customer-focused support. We help businesses, educational institutions and brands connect with their target audiences through effective on-ground promotional activities.
          </p>
          <Button asChild variant="accent" size="lg"><Link to="/services">See what we do</Link></Button>
        </div>
        <img src={teamImg} alt="Team planning a promotional campaign on a city map" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full rounded-lg object-cover shadow-card" />
      </section>

      <section className="bg-secondary">
        <div className="container-site grid gap-6 py-20 md:grid-cols-3 md:py-24">
          <div className="rounded-lg border border-border bg-card p-8 shadow-card">
            <Target className="size-7 text-accent" />
            <h2 className="mt-5 text-3xl text-primary">Our mission</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To become a trusted distribution and promotional services partner in Bangalore by providing reliable service, strong market coverage and customer-focused support.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-8 shadow-card">
            <Handshake className="size-7 text-accent" />
            <h2 className="mt-5 text-3xl text-primary">Our approach</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We start by understanding your goals, plan the right activity and locations, execute with coordinated teams, and keep you updated until the campaign is complete.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-8 shadow-card">
            <MapPin className="size-7 text-accent" />
            <h2 className="mt-5 text-3xl text-primary">Where we operate</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We work across Bangalore — residential areas, markets and retail outlets, colleges and student areas, and event venues.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site py-20 md:py-24">
        <SectionHeading eyebrow="Why work with us" title="What you can count on" />
        <ul className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
          {WHY_CHOOSE.map((p) => (
            <li key={p} className="flex items-start gap-3 border-b border-border pb-4 text-lg text-primary">
              <Check className="mt-1 size-5 shrink-0 text-accent" /> {p}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
