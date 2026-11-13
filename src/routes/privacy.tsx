import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: pageMeta("Privacy Notice | Reach Promotion", "How Reach Promotion collects and uses the details you share through our enquiry and quote forms."),
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Privacy" title="Privacy notice" />
      <section className="container-site max-w-3xl space-y-6 py-16 text-lg leading-relaxed text-muted-foreground">
        <p>
          When you send an enquiry or request a quote, we collect only the details you enter in the form — such as your name, mobile number, email address, company and campaign requirements.
        </p>
        <p>We use these details only to respond to your enquiry and to prepare your quote. We do not sell or share your details with others.</p>
        <p>Enquiry responses are stored securely and are accessible only to the Reach Promotion team.</p>
        <p>If you would like us to delete your details, please call or WhatsApp us using the numbers on our Contact page.</p>
      </section>
    </>
  );
}
