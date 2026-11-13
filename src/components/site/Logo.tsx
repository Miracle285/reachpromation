import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Reach Promotion — home">
      <span className="grid size-9 place-items-center rounded-md bg-accent text-accent-foreground">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 18 L12 6 L20 18" />
          <path d="M8 18 L12 12 L16 18" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-xl font-bold tracking-tight", tone === "light" ? "text-primary-foreground" : "text-primary")}>
          Reach Promotion
        </span>
        <span className={cn("mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em]", tone === "light" ? "text-navy-foreground-muted" : "text-muted-foreground")}>
          Bangalore
        </span>
      </span>
    </Link>
  );
}
