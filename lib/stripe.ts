/**
 * lib/stripe.ts
 *
 * Stripe client initialization placeholder for SAKFLY Studio billing.
 * Used by app/api/stripe/checkout and app/api/stripe/webhook route
 * handlers (server-side only — never import this from a client component).
 */

import Stripe from "stripe";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "sk_test_placeholder";

// TODO: Set a real STRIPE_SECRET_KEY in .env.local before going live.
// The placeholder key above allows the app to build/run in demo mode
// without crashing, but any real API call to Stripe will fail until a
// valid secret key is provided.
export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
});

export const STRIPE_PRICE_IDS = {
  pro: process.env.STRIPE_PRICE_PRO || "price_placeholder_pro_monthly",
  proPlus: process.env.STRIPE_PRICE_PROPLUS || "price_placeholder_proplus_monthly",
};

export const isStripeConfigured = Boolean(
  process.env.STRIPE_SECRET_KEY && process.env.STRIPE_SECRET_KEY !== "sk_test_placeholder"
);

// TODO: Implement real helpers here as needed, e.g.:
// export async function createCheckoutSession(customerId: string, priceId: string) { ... }
// export async function createBillingPortalSession(customerId: string) { ... }
// export async function constructWebhookEvent(rawBody: string, signature: string) {
//   return stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET!);
// }
