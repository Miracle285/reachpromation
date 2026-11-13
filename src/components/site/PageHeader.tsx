import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="container-site py-16 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl text-primary md:text-6xl">{title}</h1>
        {children ? <div className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</div> : null}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, children, align = "left" }: { eyebrow: string; title: string; children?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl text-primary md:text-5xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{children}</p> : null}
    </div>
  );
}
