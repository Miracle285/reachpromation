import { z } from "zod";

/** Accepts Indian mobile numbers with optional +91 / 0 prefix and spaces or dashes. */
export const mobileSchema = z
  .string()
  .trim()
  .transform((v) => v.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, ""))
  .refine((v) => /^[6-9]\d{9}$/.test(v), { message: "Enter a valid 10-digit mobile number" });

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, { message: `Must be less than ${max} characters` })
    .optional()
    .transform((v) => (v ? v : undefined));

const optionalEmail = z
  .string()
  .trim()
  .max(255)
  .optional()
  .refine((v) => !v || z.string().email().safeParse(v).success, { message: "Enter a valid email address" })
  .transform((v) => (v ? v : undefined));

export const quoteSchema = z.object({
  customer_name: z.string().trim().min(1, { message: "Please enter your name" }).max(100),
  company: optionalText(150),
  mobile: mobileSchema,
  email: optionalEmail,
  service: z.string().trim().min(1, { message: "Please choose a service" }).max(120),
  target_location: optionalText(200),
  estimated_quantity: optionalText(100),
  start_date: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || /^\d{4}-\d{2}-\d{2}$/.test(v), { message: "Enter a valid date" })
    .transform((v) => (v ? v : undefined)),
  requirements: optionalText(2000),
});

export type QuoteInput = z.input<typeof quoteSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name" }).max(100),
  mobile: mobileSchema,
  email: optionalEmail,
  message: z.string().trim().min(1, { message: "Please enter a message" }).max(2000),
});

export type ContactInput = z.input<typeof contactSchema>;

export const QUOTE_THANK_YOU =
  "Thank you for contacting Reach Promotion. Our team will review your requirements and contact you.";
