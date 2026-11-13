import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV, PRIMARY_PHONE, formatPhone, telHref } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <span className="text-navy-foreground-muted">Outdoor advertising &amp; promotional services across Bangalore</span>
          <a href={telHref(PRIMARY_PHONE)} className="flex items-center gap-1.5 font-semibold hover:text-accent">
            <Phone className="size-3.5" /> {formatPhone(PRIMARY_PHONE)}
          </a>
        </div>
      </div>
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:underline data-[status=active]:decoration-accent data-[status=active]:decoration-2 data-[status=active]:underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="accent" className="hidden sm:inline-flex">
            <Link to="/quote">Get a Quote</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-background">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    className="rounded-md px-3 py-3 font-display text-2xl font-semibold text-foreground hover:bg-secondary data-[status=active]:text-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3 px-3">
                <Button asChild variant="accent" size="lg">
                  <Link to="/quote" onClick={() => setOpen(false)}>Get a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={telHref(PRIMARY_PHONE)}><Phone /> Call {formatPhone(PRIMARY_PHONE)}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
