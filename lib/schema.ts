/**
 * lib/schema.ts
 *
 * TypeScript interfaces describing SAKFLY Studio's Firestore collections.
 * These mirror the documents that will exist in production Firestore once
 * lib/firebase.ts admin helpers are wired up. All app/ pages currently use
 * mock objects that satisfy these shapes.
 */

export type PlanId = "free" | "pro" | "proplus";

export type SubscriptionStatus =
  | "active"
  | "trialing"
  | "past_due"
  | "canceled"
  | "incomplete";

/** Firestore collection: users/{uid} */
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: "user" | "admin";
  plan: PlanId;
  credits: number;
  creditsUsed: number;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  darkMode?: boolean;
  notificationsEnabled?: boolean;
}

/** Firestore collection: subscriptions/{id} */
export interface Subscription {
  id: string;
  userId: string;
  plan: PlanId;
  status: SubscriptionStatus;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  priceId?: string;
  currentPeriodStart: string; // ISO date
  currentPeriodEnd: string; // ISO date
  cancelAtPeriodEnd: boolean;
  createdAt: string;
}

/** Firestore collection: generatedImages/{id} */
export interface GeneratedImage {
  id: string;
  userId: string;
  prompt: string;
  size: "512x512" | "768x768" | "1024x1024" | "1024x1792";
  imageUrl: string;
  createdAt: string;
}

/** Firestore collection: generatedAudio/{id} */
export interface GeneratedAudio {
  id: string;
  userId: string;
  text: string;
  voiceStyle: string; // e.g. "male-warm", "female-bright"
  audioUrl: string;
  durationSeconds: number;
  createdAt: string;
}

/** Firestore collection: generatedMusic/{id} */
export interface GeneratedMusic {
  id: string;
  userId: string;
  prompt: string;
  genre: string;
  audioUrl: string;
  durationSeconds: number;
  createdAt: string;
}

/** Firestore collection: chatSessions/{id} */
export interface ChatSession {
  id: string;
  userId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

/** Firestore subcollection: chatSessions/{id}/messages/{messageId} */
export interface ChatMessage {
  id: string;
  sessionId: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

/** Firestore collection: contactMessages/{id} */
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: "new" | "read" | "responded";
}

/** Firestore collection: activityLogs/{id} — used by the admin panel */
export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  details?: string;
  createdAt: string;
}
