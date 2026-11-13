import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRIMARY_PHONE, whatsappHref } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-site grid items-center gap-8 py-16 md:grid-cols-[1.4fr_1fr] md:py-20">
        <div>
          <p className="eyebrow">Let's work together</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Ready to Promote Your Business?</h2>
          <p className="mt-4 max-w-xl text-navy-foreground-muted md:text-lg">
            Let Reach Promotion help your brand connect with more customers through effective promotional activities.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Button asChild variant="accent" size="xl"><Link to="/quote">Request a Quote</Link></Button>
          <Button asChild variant="onDark" size="xl"><Link to="/contact">Contact Us</Link></Button>
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappHref(PRIMARY_PHONE)} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
