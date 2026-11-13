import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormField, fieldClass } from "@/components/site/FormField";
import { PageHeader } from "@/components/site/PageHeader";
import { QUOTE_THANK_YOU, quoteSchema } from "@/lib/enquiry-schemas";
import { submitQuote } from "@/lib/enquiries.functions";
import { PRIMARY_PHONE, SERVICES, formatPhone, telHref, whatsappHref } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>): { service?: string } =>
    typeof search["service"] === "string" ? { service: search["service"] } : {},
  head: () => ({
    meta: pageMeta(
      "Get a Quote | Flyer Distribution & Promotional Services Bangalore",
      "Request a free quote from Reach Promotion for flyer distribution, newspaper insertion, board installation and promotional campaigns in Bangalore.",
    ),
  }),
  component: Quote,
});

type Field = "customer_name" | "company" | "mobile" | "email" | "service" | "target_location" | "estimated_quantity" | "start_date" | "requirements";
type Errors = Partial<Record<Field, string>>;

function Quote() {
  const { service: preselected } = Route.useSearch();
  const defaultService = SERVICES.some((s) => s.title === preselected) ? preselected : "";
  const send = useServerFn(submitQuote);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = quoteSchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as Field] ??= issue.message;
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
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        toast.error("Sorry, your request could not be sent. Please call or WhatsApp us.");
      }
    } catch {
      toast.error("Sorry, your request could not be sent. Please call or WhatsApp us.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHeader eyebrow="Get a quote" title="Request a free quote">
        Tell us about your campaign and our team will get back to you with the details.
      </PageHeader>

      <section className="container-site grid gap-10 py-16 md:py-20 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-lg border border-border bg-card p-6 shadow-card md:p-10">
          {sent ? (
            <div className="py-12 text-center" role="status">
              <CheckCircle2 className="mx-auto size-14 text-accent" />
              <h2 className="mt-5 text-4xl text-primary">Request received</h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">{QUOTE_THANK_YOU}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button variant="outline" onClick={() => setSent(false)}>Submit another request</Button>
                <Button asChild variant="default"><Link to="/">Back to home</Link></Button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="customer_name" label="Customer name" required error={errors.customer_name}>
                  <input id="customer_name" name="customer_name" autoComplete="name" maxLength={100} className={fieldClass} />
                </FormField>
                <FormField id="company" label="Company / Organisation" error={errors.company}>
                  <input id="company" name="company" autoComplete="organization" maxLength={150} className={fieldClass} />
                </FormField>
                <FormField id="mobile" label="Mobile number" required error={errors.mobile}>
                  <input id="mobile" name="mobile" type="tel" inputMode="tel" autoComplete="tel" maxLength={16} className={fieldClass} />
                </FormField>
                <FormField id="email" label="Email address" error={errors.email}>
                  <input id="email" name="email" type="email" autoComplete="email" maxLength={255} className={fieldClass} />
                </FormField>
              </div>
              <FormField id="service" label="Required service" required error={errors.service}>
                <select id="service" name="service" defaultValue={defaultService} className={fieldClass}>
                  <option value="" disabled>Choose a service</option>
                  {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                  <option value="Other / Not sure">Other / Not sure</option>
                </select>
              </FormField>
              <div className="grid gap-5 sm:grid-cols-3">
                <FormField id="target_location" label="Target location" error={errors.target_location}>
                  <input id="target_location" name="target_location" placeholder="e.g. Jayanagar" maxLength={200} className={fieldClass} />
                </FormField>
                <FormField id="estimated_quantity" label="Estimated quantity" error={errors.estimated_quantity}>
                  <input id="estimated_quantity" name="estimated_quantity" placeholder="e.g. 10,000 flyers" maxLength={100} className={fieldClass} />
                </FormField>
                <FormField id="start_date" label="Campaign start date" error={errors.start_date}>
                  <input id="start_date" name="start_date" type="date" className={fieldClass} />
                </FormField>
              </div>
              <FormField id="requirements" label="Additional requirements" error={errors.requirements}>
                <Textarea id="requirements" name="requirements" rows={5} maxLength={2000} className="bg-card text-base" />
              </FormField>
              <Button type="submit" variant="accent" size="xl" className="w-full sm:w-auto" disabled={sending}>
                {sending ? "Sending…" : "Request a Quote"}
              </Button>
              <p className="text-xs text-muted-foreground">
                We only use your details to respond to your request. See our <Link to="/privacy" className="underline">privacy notice</Link>.
              </p>
            </form>
          )}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-lg bg-primary p-7 text-primary-foreground">
            <h2 className="text-3xl">Prefer to talk?</h2>
            <p className="mt-2 text-navy-foreground-muted">Call or WhatsApp us for a quick discussion about your campaign.</p>
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild variant="accent" size="lg"><a href={telHref(PRIMARY_PHONE)}><Phone /> {formatPhone(PRIMARY_PHONE)}</a></Button>
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappHref(PRIMARY_PHONE, "Hello Reach Promotion, I would like a quote for a promotional campaign.")} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp us</a>
              </Button>
            </div>
          </div>
          <Link to="/contact" className="block rounded-lg border border-border bg-card p-5 text-sm font-semibold text-primary hover:border-accent">
            See all contact numbers →
          </Link>
        </aside>
      </section>
    </>
  );
}
