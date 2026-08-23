import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/auth/login
 *
 * Mock endpoint for email/password login. In this demo build, any
 * well-formed email + non-empty password succeeds.
 *
 * TODO: Replace the mock logic below with real Firebase Authentication:
 *
 *   import { getFirebaseAuth } from "@/lib/firebase";
 *   import { signInWithEmailAndPassword } from "firebase/auth";
 *   const auth = getFirebaseAuth();
 *   const credential = await signInWithEmailAndPassword(auth!, email, password);
 *
 * Note: for a server route you would more likely verify an ID token minted
 * client-side, or use the Firebase Admin SDK to manage sessions/cookies.
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { email, password } = body as Record<string, string>;

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 400));

  return NextResponse.json({
    success: true,
    user: { id: "user_001", email, name: "Demo User" },
    token: "mock-jwt-token",
  });
}
