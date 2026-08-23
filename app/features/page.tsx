import type { Metadata } from "next";
import {
  MessageSquare,
  Image as ImageIcon,
  Mic,
  Music,
  ShieldCheck,
  Zap,
  LayoutDashboard,
  Download,
  History,
} from "lucide-react";
import { MarketingChrome } from "@/components/layout/MarketingChrome";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore every SAKFLY Studio feature: AI Assistant, Image Generator, Voice Generator, Music Generator, and more.",
};

const features = [
  {
    icon: MessageSquare,
    title: "AI Assistant",
    description:
      "Multi-turn conversations powered by Vertex AI Gemini. Includes chat history, markdown-rendered responses, file uploads, and one-click copy/export.",
  },
  {
    icon: ImageIcon,
    title: "AI Image Generator",
    description:
      "Text-to-image generation with Vertex AI Imagen. Choose from multiple output sizes, download results instantly, and browse your full image history.",
  },
  {
    icon: Mic,
    title: "Voice Generator",
    description:
      "Natural text-to-speech with Vertex AI TTS. Pick from multiple male and female voice styles, preview in-browser, and download as MP3.",
  },
  {
    icon: Music,
    title: "AI Music Generator",
    description:
      "Generate original music tracks from a text prompt using Vertex AI Lyria. Select a genre, preview instantly, and download your track.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud Platform",
    description:
      "Firebase Authentication and encrypted cloud storage keep your account, prompts, and generated content private and protected.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description:
      "Optimized generation pipelines and a priority queue for Pro and Pro+ users mean shorter wait times, even during peak usage.",
  },
  {
    icon: LayoutDashboard,
    title: "Responsive Dashboard",
    description:
      "A clean, mobile-first dashboard gives you quick access to every AI tool, your usage stats, and account settings from any device.",
  },
  {
    icon: Download,
    title: "Download Generated Content",
    description:
      "Every image, voice clip, and music track you generate can be downloaded in a single click — no watermarks, no restrictions.",
  },
  {
    icon: History,
    title: "User History Tracking",
    description:
      "Full history tracking across all four AI tools lets you revisit, reuse, and manage everything you've ever generated.",
  },
];

export default function FeaturesPage() {
  return (
    <MarketingChrome>
      <section className="px-4 pt-20 pb-10 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Built for creators, <span className="text-gradient">powered by AI</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Every tool in SAKFLY Studio is designed to work together — one
          account, one dashboard, four powerful AI capabilities.
        </p>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="glass-card border-glow mx-auto max-w-4xl rounded-3xl px-8 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to try every feature yourself?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Create a free account and start generating text, images, voice,
            and music in minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton href="/auth/register" size="lg">
              Get Started Free
            </LinkButton>
            <LinkButton href="/pricing" variant="secondary" size="lg">
              View Pricing
            </LinkButton>
          </div>
        </div>
      </section>
    </MarketingChrome>
  );
}
