import { describe, expect, it } from "vitest";
import { contactSchema, quoteSchema } from "@/lib/enquiry-schemas";
import { telHref, whatsappHref } from "@/lib/site";

const validQuote = { customer_name: "Asha", mobile: "8792021476", service: "Newspaper Insertion" };

describe("quote form rules", () => {
  it("accepts name, mobile and service as the only required fields", () => {
    expect(quoteSchema.safeParse(validQuote).success).toBe(true);
  });

  it("rejects a quote without a service", () => {
    expect(quoteSchema.safeParse({ ...validQuote, service: "" }).success).toBe(false);
  });

  it("normalises +91 and spaces in the mobile number", () => {
    const r = quoteSchema.parse({ ...validQuote, mobile: "+91 87920 21476" });
    expect(r.mobile).toBe("8792021476");
  });

  it("rejects a mobile number that is not 10 digits", () => {
    expect(quoteSchema.safeParse({ ...validQuote, mobile: "12345" }).success).toBe(false);
  });

  it("rejects an invalid email but allows it to be blank", () => {
    expect(quoteSchema.safeParse({ ...validQuote, email: "not-an-email" }).success).toBe(false);
    expect(quoteSchema.safeParse({ ...validQuote, email: "" }).success).toBe(true);
  });
});

describe("contact form rules", () => {
  it("requires a message", () => {
    expect(contactSchema.safeParse({ name: "Asha", mobile: "9164021476", message: "" }).success).toBe(false);
  });
});

describe("contact links", () => {
  it("builds Indian call and WhatsApp links", () => {
    expect(telHref("8431038031")).toBe("tel:+918431038031");
    expect(whatsappHref("8497838431", "Hi")).toBe("https://wa.me/918497838431?text=Hi");
  });
});
