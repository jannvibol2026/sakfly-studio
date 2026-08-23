/**
 * lib/mock-data.ts
 *
 * Centralized demo/mock data used across the /app and /admin dashboards so
 * the product feels alive without any real backend. Replace with real
 * Firestore reads once lib/firebase.ts admin SDK is wired up.
 */

import type {
  ActivityLog,
  ContactMessage,
  GeneratedAudio,
  GeneratedImage,
  GeneratedMusic,
  Subscription,
  User,
} from "./schema";

export const mockCurrentUser: User = {
  id: "user_001",
  name: "Sokha Chan",
  email: "sokha.chan@example.com",
  role: "user",
  plan: "pro",
  credits: 850,
  creditsUsed: 150,
  createdAt: "2026-02-14T08:00:00.000Z",
  updatedAt: "2026-08-20T10:30:00.000Z",
  darkMode: true,
  notificationsEnabled: true,
};

export const mockRecentActivity: ActivityLog[] = [
  {
    id: "log_1",
    userId: "user_001",
    userName: "Sokha Chan",
    action: "Generated image",
    details: "\"A neon cyberpunk city skyline at dusk\"",
    createdAt: "2026-08-23T11:12:00.000Z",
  },
  {
    id: "log_2",
    userId: "user_001",
    userName: "Sokha Chan",
    action: "Asked AI Assistant",
    details: "\"Summarize this quarter's marketing plan\"",
    createdAt: "2026-08-23T09:41:00.000Z",
  },
  {
    id: "log_3",
    userId: "user_001",
    userName: "Sokha Chan",
    action: "Generated voice-over",
    details: "Voice: Female — Bright, 42s",
    createdAt: "2026-08-22T17:05:00.000Z",
  },
  {
    id: "log_4",
    userId: "user_001",
    userName: "Sokha Chan",
    action: "Generated music track",
    details: "Genre: Lo-fi Chill, 1m 30s",
    createdAt: "2026-08-21T20:22:00.000Z",
  },
  {
    id: "log_5",
    userId: "user_001",
    userName: "Sokha Chan",
    action: "Upgraded plan",
    details: "Free → Pro",
    createdAt: "2026-08-14T08:00:00.000Z",
  },
];

export const mockGeneratedImages: GeneratedImage[] = [
  {
    id: "img_1",
    userId: "user_001",
    prompt: "A neon cyberpunk city skyline at dusk, ultra detailed",
    size: "1024x1024",
    imageUrl: "gradient:1",
    createdAt: "2026-08-23T11:12:00.000Z",
  },
  {
    id: "img_2",
    userId: "user_001",
    prompt: "Minimalist mountain range with a purple gradient sky",
    size: "1024x1024",
    imageUrl: "gradient:2",
    createdAt: "2026-08-22T09:30:00.000Z",
  },
  {
    id: "img_3",
    userId: "user_001",
    prompt: "Futuristic AI robot assistant, studio lighting",
    size: "768x768",
    imageUrl: "gradient:3",
    createdAt: "2026-08-20T14:02:00.000Z",
  },
  {
    id: "img_4",
    userId: "user_001",
    prompt: "Abstract geometric wallpaper, dark blue and violet",
    size: "512x512",
    imageUrl: "gradient:4",
    createdAt: "2026-08-18T19:47:00.000Z",
  },
];

export const mockGeneratedAudio: GeneratedAudio[] = [
  {
    id: "aud_1",
    userId: "user_001",
    text: "Welcome to SAKFLY Studio, where your ideas come to life.",
    voiceStyle: "Female — Bright",
    audioUrl: "mock://audio/1",
    durationSeconds: 8,
    createdAt: "2026-08-22T17:05:00.000Z",
  },
  {
    id: "aud_2",
    userId: "user_001",
    text: "This is a product walkthrough narration for the new dashboard.",
    voiceStyle: "Male — Warm",
    audioUrl: "mock://audio/2",
    durationSeconds: 14,
    createdAt: "2026-08-19T13:11:00.000Z",
  },
];

export const mockGeneratedMusic: GeneratedMusic[] = [
  {
    id: "mus_1",
    userId: "user_001",
    prompt: "Lo-fi chill beat for late-night coding sessions",
    genre: "Lo-fi",
    audioUrl: "mock://music/1",
    durationSeconds: 90,
    createdAt: "2026-08-21T20:22:00.000Z",
  },
  {
    id: "mus_2",
    userId: "user_001",
    prompt: "Epic cinematic trailer music with rising strings",
    genre: "Cinematic",
    audioUrl: "mock://music/2",
    durationSeconds: 75,
    createdAt: "2026-08-17T10:00:00.000Z",
  },
];

export const mockSubscription: Subscription = {
  id: "sub_001",
  userId: "user_001",
  plan: "pro",
  status: "active",
  stripeCustomerId: "cus_placeholder",
  stripeSubscriptionId: "sub_placeholder",
  priceId: "price_placeholder_pro_monthly",
  currentPeriodStart: "2026-08-14T00:00:00.000Z",
  currentPeriodEnd: "2026-09-14T00:00:00.000Z",
  cancelAtPeriodEnd: false,
  createdAt: "2026-08-14T00:00:00.000Z",
};

export const mockInvoices = [
  { id: "inv_1003", date: "2026-08-14T00:00:00.000Z", amount: 9, status: "Paid", plan: "Pro" },
  { id: "inv_1002", date: "2026-07-14T00:00:00.000Z", amount: 9, status: "Paid", plan: "Pro" },
  { id: "inv_1001", date: "2026-06-14T00:00:00.000Z", amount: 0, status: "Paid", plan: "Free" },
];

export const mockAdminUsers: (User & { status: "active" | "suspended" })[] = [
  { ...mockCurrentUser, status: "active" },
  {
    id: "user_002",
    name: "Dara Lim",
    email: "dara.lim@example.com",
    role: "user",
    plan: "proplus",
    credits: 4200,
    creditsUsed: 1800,
    createdAt: "2026-01-05T00:00:00.000Z",
    updatedAt: "2026-08-19T00:00:00.000Z",
    status: "active",
  },
  {
    id: "user_003",
    name: "Ratana Sok",
    email: "ratana.sok@example.com",
    role: "user",
    plan: "free",
    credits: 50,
    creditsUsed: 48,
    createdAt: "2026-05-22T00:00:00.000Z",
    updatedAt: "2026-08-10T00:00:00.000Z",
    status: "active",
  },
  {
    id: "user_004",
    name: "Bopha Meas",
    email: "bopha.meas@example.com",
    role: "admin",
    plan: "proplus",
    credits: 9000,
    creditsUsed: 2100,
    createdAt: "2025-11-30T00:00:00.000Z",
    updatedAt: "2026-08-22T00:00:00.000Z",
    status: "active",
  },
  {
    id: "user_005",
    name: "Vichet Ouk",
    email: "vichet.ouk@example.com",
    role: "user",
    plan: "free",
    credits: 50,
    creditsUsed: 12,
    createdAt: "2026-08-01T00:00:00.000Z",
    updatedAt: "2026-08-15T00:00:00.000Z",
    status: "suspended",
  },
];

export const mockActivityLogs: ActivityLog[] = [
  ...mockRecentActivity,
  {
    id: "log_6",
    userId: "user_002",
    userName: "Dara Lim",
    action: "Generated image",
    details: "\"Product mockup on marble background\"",
    createdAt: "2026-08-23T08:15:00.000Z",
  },
  {
    id: "log_7",
    userId: "user_003",
    userName: "Ratana Sok",
    action: "Signed up",
    details: "Plan: Free",
    createdAt: "2026-08-22T12:00:00.000Z",
  },
  {
    id: "log_8",
    userId: "user_004",
    userName: "Bopha Meas",
    action: "Updated system settings",
    details: "Maintenance mode: off",
    createdAt: "2026-08-21T09:00:00.000Z",
  },
];

export const mockContactMessages: ContactMessage[] = [
  {
    id: "msg_1",
    name: "Lina Prak",
    email: "lina.prak@example.com",
    subject: "Enterprise plan question",
    message: "Do you offer custom enterprise pricing for teams over 50 seats?",
    createdAt: "2026-08-20T10:00:00.000Z",
    status: "new",
  },
  {
    id: "msg_2",
    name: "Kosal Heng",
    email: "kosal.heng@example.com",
    subject: "API access",
    message: "Is there a public API for the AI Assistant tool?",
    createdAt: "2026-08-18T15:30:00.000Z",
    status: "read",
  },
];

export const mockRevenueSummary = {
  mrr: 18420,
  arr: 221040,
  totalCustomers: 1284,
  churnRate: 2.3,
  monthlyGrowth: [
    { month: "Mar", revenue: 11200 },
    { month: "Apr", revenue: 12800 },
    { month: "May", revenue: 13950 },
    { month: "Jun", revenue: 15600 },
    { month: "Jul", revenue: 17100 },
    { month: "Aug", revenue: 18420 },
  ],
};

export const mockUsageChart = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 58 },
  { day: "Wed", value: 35 },
  { day: "Thu", value: 71 },
  { day: "Fri", value: 64 },
  { day: "Sat", value: 28 },
  { day: "Sun", value: 46 },
];
