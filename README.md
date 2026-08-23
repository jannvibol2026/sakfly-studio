# SAKFLY Studio

**Create, Generate, and Innovate with AI.**

SAKFLY Studio is a complete AI creation platform SaaS built with Next.js 15
(App Router, TypeScript, Tailwind CSS). It unifies four AI tools —
**AI Assistant** (Vertex AI Gemini), **AI Image Generator** (Vertex AI
Imagen), **Voice Generator** (Vertex AI TTS), and **AI Music Generator**
(Vertex AI Lyria) — in one dashboard, alongside a full marketing site,
authentication flow, billing, and an admin panel.

This repository ships in **demo/mock mode**: every AI generation call,
auth flow, and payment flow is simulated with `setTimeout`-based delays and
local mock data, so the app builds and runs with zero external services.
Real credentials can be added later to activate live functionality — see
[Where to add real credentials](#where-to-add-real-credentials) below.

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 (custom dark blue / purple glassmorphism theme)
- **Icons:** lucide-react
- **Planned integrations:** Firebase (Auth + Firestore + Storage), Stripe
  (billing), Google Vertex AI (Gemini, Imagen, TTS, Lyria)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local
# Edit .env.local with real values once you're ready to connect
# real services (see below). The app runs fine with placeholders.

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the marketing
site. The app platform lives at `/app/dashboard` and the admin panel at
`/admin` — both work immediately with mock data, no login required in this
demo build.

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # run ESLint
```

## Project structure

```
app/
  page.tsx                 Marketing home page
  features/ pricing/ about/ contact/ privacy/ terms/   Marketing pages
  auth/login, auth/register, auth/reset-password        Auth pages
  app/dashboard, app/assistant, app/image, app/voice,
  app/music, app/billing, app/settings, app/profile      App platform (sidebar layout)
  admin/                                                 Admin panel (sidebar layout)
  api/                                                   Route handlers (all mocked, see TODOs)
components/
  ui/          Button, Card, Input, Badge, Logo, ThemeToggle
  layout/      Navbar, Footer, AppSidebar, AdminSidebar, MarketingChrome
  sections/    FeatureCard, PricingCard, TestimonialCard, FAQItem, AIToolCard, forms
  app/         Chat markdown renderer, mock audio player, gradient image thumbnails
lib/
  firebase.ts  Firebase client/admin init (placeholders + TODOs)
  stripe.ts    Stripe client init (placeholder + TODOs)
  schema.ts    Firestore collection TypeScript interfaces
  mock-data.ts Centralized demo/mock data used across dashboards
  utils.ts     Small shared helpers (cn, date/currency formatting, etc.)
```

## Where to add real credentials

Every integration point is marked with a `// TODO:` comment in the source.
Search the codebase for `TODO:` to find every insertion point. The main
ones are:

| Service | Files | What to do |
|---|---|---|
| **Vertex AI Gemini** (AI Assistant) | `app/api/assistant/route.ts` | Call `VertexAI().getGenerativeModel(...)` with `VERTEX_AI_*` env vars |
| **Vertex AI Imagen** (Image Generator) | `app/api/image/route.ts` | Call Imagen's `generateImages`, upload to Firebase Storage |
| **Vertex AI TTS** (Voice Generator) | `app/api/voice/route.ts` | Call `TextToSpeechClient.synthesizeSpeech`, upload MP3 to storage |
| **Vertex AI Lyria** (Music Generator) | `app/api/music/route.ts` | Call Lyria's music generation endpoint, upload to storage |
| **Firebase Auth** | `lib/firebase.ts`, `app/api/auth/login`, `app/api/auth/register`, `app/api/auth/reset` | Fill in `NEXT_PUBLIC_FIREBASE_*` / `FIREBASE_*` env vars, wire up `signInWithEmailAndPassword`, `createUserWithEmailAndPassword`, `sendPasswordResetEmail` |
| **Firestore** | `lib/firebase.ts`, `lib/schema.ts` | Initialize `firebase-admin`, replace `lib/mock-data.ts` reads with real Firestore queries matching the schemas in `lib/schema.ts` |
| **Stripe billing** | `lib/stripe.ts`, `app/api/stripe/checkout/route.ts`, `app/api/stripe/webhook/route.ts` | Set `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_PRO`, `STRIPE_PRICE_PROPLUS`; implement real Checkout Session + webhook handling |
| **Contact form email** | `app/api/contact/route.ts` | Wire up an email provider (Resend, SendGrid, etc.) using `CONTACT_EMAIL_TO` / `EMAIL_SERVER_API_KEY` |

All environment variable names are documented with placeholder values in
[`.env.example`](./.env.example). Never commit real secrets — copy this
file to `.env.local`, which is git-ignored.

## Deployment (Vercel)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project into [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example` (with real values) in
   the Vercel project settings under **Settings → Environment Variables**.
4. Deploy. Vercel will automatically detect Next.js and run `npm run build`.
5. For `GOOGLE_APPLICATION_CREDENTIALS` (Vertex AI service account), prefer
   storing the JSON key contents in a single environment variable (e.g.
   `GOOGLE_SERVICE_ACCOUNT_JSON`) and parsing it at runtime, since Vercel's
   filesystem is read-only/ephemeral — a local file path only works for
   local development.

## Notes on the demo/mock mode

- No network calls are made for AI generation; all four tools use
  `setTimeout`-simulated delays and local mock data/gradients.
- The Image Generator renders deterministic local SVG/gradient
  placeholders (`components/app/GradientThumb.tsx`) instead of real images.
- The Voice and Music Generators use a locally animated mock audio player
  (`components/app/MockAudioPlayer.tsx`) instead of real `<audio>` playback.
- Auth pages and API routes accept any well-formed input and simulate
  success — there is no real session/token verification yet.
- Admin panel and dashboard data comes from `lib/mock-data.ts`.

## License

Proprietary — © SAKFLY Studio. All rights reserved.
