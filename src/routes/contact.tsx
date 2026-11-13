import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormField, fieldClass } from "@/components/site/FormField";
import { PageHeader } from "@/components/site/PageHeader";
import { contactSchema } from "@/lib/enquiry-schemas";
import { submitContact } from "@/lib/enquiries.functions";
import { BRAND, CONTACTS, formatPhone, telHref, whatsappHref } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta(
      "Contact Reach Promotion | Call or WhatsApp – Bangalore",
      "Call or WhatsApp Reach Promotion in Bangalore for flyer distribution, newspaper insertion, board installation and promotional services.",
    ),
  }),
  component: Contact,
});

type Errors = Partial<Record<"name" | "mobile" | "email" | "message", string>>;

function Contact() {
  const send = useServerFn(submitContact);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as keyof Errors] ??= issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const res = await send({ data: raw });
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        toast.error("Sorry, your message could not be sent. Please call or WhatsApp us.");
      }
    } catch {
      toast.error("Sorry, your message could not be sent. Please call or WhatsApp us.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHeader eyebrow="Contact us" title="Let's talk about your campaign">
        Call or WhatsApp us directly, or send a message and we'll get back to you.
      </PageHeader>

      <section className="container-site grid gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          {CONTACTS.map((c) => (
            <div key={c.name} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Contact person</p>
              <h2 className="mt-1 text-3xl text-primary">{c.name}</h2>
              <ul className="mt-4 space-y-3">
                {c.phones.map((p) => (
                  <li key={p} className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-semibold text-primary">{formatPhone(p)}</span>
                    <span className="flex gap-2">
                      <Button asChild variant="default" size="sm"><a href={telHref(p)}><Phone /> Call</a></Button>
                      <Button asChild variant="whatsapp" size="sm">
                        <a href={whatsappHref(p)} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a>
                      </Button>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary p-6">
            <MapPin className="size-6 shrink-0 text-accent" />
            <div>
              <p className="font-semibold text-primary">Business location</p>
              <p className="text-muted-foreground">{BRAND.location}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-card md:p-8">
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto size-12 text-accent" />
              <h2 className="mt-4 text-3xl text-primary">Message sent</h2>
              <p className="mx-auto mt-3 max-w-sm text-muted-foreground">Thank you for contacting Reach Promotion. Our team will get back to you.</p>
              <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>Send another message</Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div>
                <h2 className="text-3xl text-primary">Send an enquiry</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Need pricing? Use our <Link to="/quote" className="font-semibold text-primary underline decoration-accent underline-offset-4">quote request form</Link>.
                </p>
              </div>
              <FormField id="name" label="Your name" required error={errors.name}>
                <input id="name" name="name" autoComplete="name" maxLength={100} className={fieldClass} />
              </FormField>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="mobile" label="Mobile number" required error={errors.mobile}>
                  <input id="mobile" name="mobile" type="tel" inputMode="tel" autoComplete="tel" maxLength={16} className={fieldClass} />
                </FormField>
                <FormField id="email" label="Email" error={errors.email}>
                  <input id="email" name="email" type="email" autoComplete="email" maxLength={255} className={fieldClass} />
                </FormField>
              </div>
              <FormField id="message" label="Message" required error={errors.message}>
                <Textarea id="message" name="message" rows={5} maxLength={2000} className="bg-card text-base" />
              </FormField>
              <Button type="submit" variant="accent" size="xl" className="w-full" disabled={sending}>
                {sending ? "Sending…" : "Send Message"}
              </Button>
              <p className="text-xs text-muted-foreground">
                We only use your details to respond to your enquiry. See our <Link to="/privacy" className="underline">privacy notice</Link>.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
