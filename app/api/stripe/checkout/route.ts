import { NextRequest, NextResponse } from "next/server";
import { STRIPE_PRICE_IDS, isStripeConfigured } from "@/lib/stripe";

/**
 * POST /api/stripe/checkout
 *
 * Mock endpoint that would normally create a Stripe Checkout Session for
 * upgrading a user to Pro or Pro+. Returns a fake checkout URL in demo
 * mode since no real Stripe account is configured.
 *
 * TODO: Replace the mock logic below with a real Stripe Checkout session:
 *
 *   import { stripe } from "@/lib/stripe";
 *   const session = await stripe.checkout.sessions.create({
 *     mode: "subscription",
 *     line_items: [{ price: priceId, quantity: 1 }],
 *     success_url: `${process.env.NEXT_PUBLIC_APP_URL}/app/billing?success=true`,
 *     cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/app/billing?canceled=true`,
 *     customer_email: userEmail,
 *   });
 *   return NextResponse.json({ url: session.url });
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const plan: "pro" | "proplus" = body.plan === "proplus" ? "proplus" : "pro";
  const priceId = plan === "proplus" ? STRIPE_PRICE_IDS.proPlus : STRIPE_PRICE_IDS.pro;

  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json({
    success: true,
    configured: isStripeConfigured,
    priceId,
    // In production this would be a real Stripe-hosted checkout URL.
    url: "/app/billing?mock_checkout=true",
  });
}
