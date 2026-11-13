import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services"
      hash={service.slug}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-transform hover:-translate-y-0.5"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={service.image} alt={service.alt} loading="lazy" width={1200} height={912} style={{ objectPosition: service.imagePosition }} className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-2xl text-primary">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent">
          Learn more <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
