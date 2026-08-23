import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/auth/reset
 *
 * Mock endpoint for the "forgot password" flow. Always returns success
 * (regardless of whether the email exists) to avoid leaking account
 * existence, matching standard security practice.
 *
 * TODO: Replace the mock logic below with real Firebase Authentication:
 *
 *   import { getFirebaseAuth } from "@/lib/firebase";
 *   import { sendPasswordResetEmail } from "firebase/auth";
 *   const auth = getFirebaseAuth();
 *   await sendPasswordResetEmail(auth!, email);
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { email } = body as Record<string, string>;

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 400));

  return NextResponse.json({
    success: true,
    message: "If an account exists for that email, a password reset link has been sent.",
  });
}
