import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/stripe/webhook
 *
 * Mock Stripe webhook receiver. In production, Stripe calls this endpoint
 * for subscription lifecycle events (checkout completed, invoice paid,
 * subscription updated/canceled, etc).
 *
 * TODO: Replace the mock logic below with real webhook verification and
 * handling:
 *
 *   import { stripe } from "@/lib/stripe";
 *   const signature = req.headers.get("stripe-signature")!;
 *   const rawBody = await req.text();
 *   const event = stripe.webhooks.constructEvent(
 *     rawBody,
 *     signature,
 *     process.env.STRIPE_WEBHOOK_SECRET!
 *   );
 *
 *   switch (event.type) {
 *     case "checkout.session.completed":
 *       // Update the user's plan + subscription doc in Firestore.
 *       break;
 *     case "invoice.paid":
 *       // Record a new invoice.
 *       break;
 *     case "customer.subscription.deleted":
 *       // Downgrade the user to the free plan.
 *       break;
 *   }
 */
export async function POST(req: NextRequest) {
  // NOTE: signature verification is skipped in this mock implementation.
  const body = await req.json().catch(() => ({}));

  return NextResponse.json({
    received: true,
    mockEventType: body.type || "unknown",
  });
}
