import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: pageMeta(
      "Our Work & Gallery | Reach Promotion Bangalore",
      "Photos of flyer distribution, pole board installation, newspaper insertion, banner installation, college promotions and promotional events in Bangalore.",
    ),
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const items = active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active);
  const categories: (GalleryCategory | "All")[] = ["All", ...GALLERY_CATEGORIES];

  return (
    <>
      <PageHeader eyebrow="Our work" title="Project gallery">
        A look at our distribution, installation and promotional activities around Bangalore.
      </PageHeader>

      <section className="container-site py-14 md:py-20">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                active === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-primary hover:border-accent hover:text-accent",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-12 rounded-lg border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
            Photos for this category are coming soon.
          </p>
        ) : (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((g) => (
              <li key={g.caption}>
                <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
                  <img src={g.image} alt={g.caption} loading="lazy" width={1200} height={912} style={{ objectPosition: g.position }} className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{g.category}</p>
                    <p className="mt-1.5 text-sm text-primary">{g.caption}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
      </section>

      <CtaBand />
    </>
  );
}
