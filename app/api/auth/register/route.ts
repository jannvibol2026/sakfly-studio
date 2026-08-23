import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/auth/register
 *
 * Mock endpoint for creating a new account. Validates the payload and
 * returns a fabricated user + token.
 *
 * TODO: Replace the mock logic below with real Firebase Authentication:
 *
 *   import { getFirebaseAuth } from "@/lib/firebase";
 *   import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
 *   const auth = getFirebaseAuth();
 *   const credential = await createUserWithEmailAndPassword(auth!, email, password);
 *   await updateProfile(credential.user, { displayName: name });
 *   // Then create a corresponding `users/{uid}` document in Firestore
 *   // (see lib/schema.ts -> User) with default plan "free" and starter credits.
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { name, email, password } = body as Record<string, string>;

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Name, email, and password are required." }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({
    success: true,
    user: { id: `user_${Math.random().toString(36).slice(2, 8)}`, name, email, plan: "free", credits: 50 },
    token: "mock-jwt-token",
  });
}
