import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/** Public publishable key for Razorpay Checkout. Safe to expose to the browser. */
export const getRazorpayKeyId = createServerFn({ method: "GET" }).handler(async () => {
  const keyId = process.env.RAZORPAY_KEY_ID;
  if (!keyId) throw new Error("Razorpay is not configured yet. Please add RAZORPAY_KEY_ID.");
  return { keyId };
});

const PURPOSES = [
  "Banquet Advance",
  "Event / Wedding Deposit",
  "Tirumala Darshan Package",
  "Group Settlement",
  "Other",
] as const;

const orderSchema = z.object({
  amount: z.number().int().min(100, "Minimum ₹100").max(5_00_000_00, "Amount too large"), // in paise (min ₹1, here ₹100)
  purpose: z.enum(PURPOSES),
  notes: z.string().trim().max(500).optional().default(""),
  customer: z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(255),
    phone: z.string().trim().regex(/^[0-9+\-\s]{7,20}$/, "Invalid phone"),
  }),
});

export const createRazorpayOrder = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => orderSchema.parse(data))
  .handler(async ({ data }) => {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      throw new Error("Razorpay is not configured. Please add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.");
    }

    const auth = btoa(`${keyId}:${keySecret}`);
    const receipt = `nv_${Date.now().toString(36)}`;
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount: data.amount,
        currency: "INR",
        receipt,
        notes: {
          purpose: data.purpose,
          customer_name: data.customer.name,
          customer_phone: data.customer.phone,
          note: data.notes ?? "",
        },
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("[razorpay] order create failed", res.status, text);
      throw new Error("Could not create payment order. Please try again or call us.");
    }
    const order = (await res.json()) as { id: string; amount: number; currency: string };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("payments").insert({
      purpose: data.purpose,
      amount_paise: data.amount,
      currency: "INR",
      customer_name: data.customer.name,
      customer_email: data.customer.email,
      customer_phone: data.customer.phone,
      notes: data.notes ?? null,
      razorpay_order_id: order.id,
      status: "created",
    });
    if (error) {
      console.error("[razorpay] db insert failed", error);
      // Don't block payment if logging fails, but warn server-side.
    }

    return { orderId: order.id, amount: order.amount, currency: order.currency, keyId };
  });

const verifySchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

export const verifyRazorpayPayment = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => verifySchema.parse(data))
  .handler(async ({ data }) => {
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) throw new Error("Razorpay is not configured.");

    // HMAC-SHA256(order_id|payment_id) using key_secret — Razorpay's documented verification.
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      enc.encode(keySecret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    );
    const sigBuf = await crypto.subtle.sign(
      "HMAC",
      key,
      enc.encode(`${data.razorpay_order_id}|${data.razorpay_payment_id}`),
    );
    const expected = Array.from(new Uint8Array(sigBuf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    const ok = expected === data.razorpay_signature.toLowerCase();

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin
      .from("payments")
      .update({
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_signature: data.razorpay_signature,
        status: ok ? "paid" : "failed",
        updated_at: new Date().toISOString(),
      })
      .eq("razorpay_order_id", data.razorpay_order_id);

    if (!ok) throw new Error("Payment signature verification failed.");
    return { ok: true as const };
  });
