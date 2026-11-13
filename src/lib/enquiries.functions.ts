import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { contactSchema, quoteSchema } from "./enquiry-schemas";

function publicClient() {
  const url = process.env["SUPABASE_URL"]!;
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await publicClient().from("quote_requests").insert({
      customer_name: data.customer_name,
      company: data.company ?? null,
      mobile: data.mobile,
      email: data.email ?? null,
      service: data.service,
      target_location: data.target_location ?? null,
      estimated_quantity: data.estimated_quantity ?? null,
      start_date: data.start_date ?? null,
      requirements: data.requirements ?? null,
    });
    if (error) {
      console.error("quote insert failed", error.message);
      return { ok: false as const };
    }
    return { ok: true as const };
  });

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await publicClient().from("contact_messages").insert({
      name: data.name,
      mobile: data.mobile,
      email: data.email ?? null,
      message: data.message,
    });
    if (error) {
      console.error("contact insert failed", error.message);
      return { ok: false as const };
    }
    return { ok: true as const };
  });
