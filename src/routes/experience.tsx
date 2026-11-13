import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import eduImg from "@/assets/service-edu-fair.jpg";
import collegeImg from "@/assets/service-college.jpg";
import { CLIENTS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: pageMeta(
      "Our Experience & Associations | Reach Promotion Bangalore",
      "Four years of flyer distribution and promotional experience in Bangalore, working with organisations including Global Degrees, AECC Study Abroad, Study Australia and CANOM.",
    ),
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHeader eyebrow="Our experience" title="Our Experience and Associations">
        Over the past four years, we have developed practical experience in distribution and promotional services across Bangalore.
      </PageHeader>

      <section className="container-site py-20 md:py-24">
        <SectionHeading eyebrow="Associations" title="Organisations we have worked with" />
        <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
          {CLIENTS.map((c) => (
            <li key={c} className="grid min-h-40 place-items-center bg-card p-6 text-center font-display text-3xl font-semibold text-primary">{c}</li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary">
        <div className="container-site grid gap-12 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={collegeImg} alt="Flyer distribution outside a college" loading="lazy" width={1200} height={912} className="aspect-[3/4] w-full rounded-lg object-cover shadow-card" />
            <img src={eduImg} alt="Volunteers at an education fair" loading="lazy" width={1200} height={912} className="mt-10 aspect-[3/4] w-full rounded-lg object-cover shadow-card" />
          </div>
          <div>
            <SectionHeading eyebrow="Previous work" title="Where our experience comes from" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Much of our work has been with education and study-abroad organisations — distributing flyers at colleges and student areas, and supporting educational fairs with volunteers and on-ground promotion.
              </p>
              <p>
                Alongside this, we carry out door-to-door flyer distribution, newspaper insertion, and board and banner installations for local businesses across Bangalore. We understand local market requirements and focus on reliable coordination and professional execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
