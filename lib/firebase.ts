/**
 * lib/firebase.ts
 *
 * Firebase client + admin initialization for SAKFLY Studio.
 *
 * CLIENT SDK: safe to import from "use client" components (auth forms,
 * profile page, etc). Uses the NEXT_PUBLIC_FIREBASE_* env vars.
 *
 * ADMIN SDK: only import from server-side code (API route handlers,
 * server components). Uses the FIREBASE_* (non-public) env vars and a
 * service account. Never import `firebaseAdmin` from a client component.
 */

import { type FirebaseApp, getApps, initializeApp } from "firebase/app";
import { type Auth, getAuth } from "firebase/auth";
import { type Firestore, getFirestore } from "firebase/firestore";
import { type FirebaseStorage, getStorage } from "firebase/storage";

// ── Client SDK config ──────────────────────────────────────────────
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// TODO: Once real Firebase project credentials are set in .env.local,
// this client app will initialize automatically. Until then, calls to
// auth/firestore/storage below will simply fail gracefully in the UI
// (all pages currently use local mock data, not live Firestore reads).
let clientApp: FirebaseApp | null = null;

function getClientApp(): FirebaseApp | null {
  if (typeof window === "undefined") return null; // never init on server
  if (!firebaseConfig.apiKey) return null; // no real config supplied yet
  if (!clientApp) {
    clientApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  }
  return clientApp;
}

export function getFirebaseAuth(): Auth | null {
  const app = getClientApp();
  return app ? getAuth(app) : null;
}

export function getFirebaseDb(): Firestore | null {
  const app = getClientApp();
  return app ? getFirestore(app) : null;
}

export function getFirebaseStorage(): FirebaseStorage | null {
  const app = getClientApp();
  return app ? getStorage(app) : null;
}

// ── Admin SDK (server-only) ─────────────────────────────────────────
// TODO: Wire up firebase-admin here once a real service account is
// available. Recommended pattern:
//
// import { cert, getApps, initializeApp } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";
// import { getAuth } from "firebase-admin/auth";
//
// const adminApp = getApps().length
//   ? getApps()[0]
//   : initializeApp({
//       credential: cert({
//         projectId: process.env.FIREBASE_PROJECT_ID,
//         clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//         privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//       }),
//     });
//
// export const adminDb = getFirestore(adminApp);
// export const adminAuth = getAuth(adminApp);
//
// All API routes in app/api/** currently return mock data and do NOT
// call adminDb/adminAuth yet — search for "TODO" in each route.ts file
// for the exact insertion point.

export const firebaseEnvConfigured = Boolean(firebaseConfig.apiKey);
