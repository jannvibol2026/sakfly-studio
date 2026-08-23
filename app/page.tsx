import type { Metadata } from "next";
import Link from "next/link";
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
  Sparkles,
} from "lucide-react";
import { MarketingChrome } from "@/components/layout/MarketingChrome";
import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { AIToolCard } from "@/components/sections/AIToolCard";
import { PricingCard } from "@/components/sections/PricingCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { FAQItem } from "@/components/sections/FAQItem";

export const metadata: Metadata = {
  title: "SAKFLY Studio — Create, Generate, and Innovate with AI",
  description:
    "Your complete AI creation platform. Generate text, images, voice, and music using the power of Google Vertex AI in one powerful workspace.",
};

const coreFeatures = [
  {
    icon: MessageSquare,
    title: "AI Assistant",
    description: "Multi-turn conversations powered by Vertex AI Gemini with markdown-rich responses.",
  },
  {
    icon: ImageIcon,
    title: "AI Image Generator",
    description: "Turn text prompts into stunning visuals with Vertex AI Imagen in seconds.",
  },
  {
    icon: Mic,
    title: "Voice Generator",
    description: "Natural, expressive text-to-speech in multiple voice styles via Vertex AI TTS.",
  },
  {
    icon: Music,
    title: "AI Music Generator",
    description: "Compose original tracks from a text description using Vertex AI Lyria.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud Platform",
    description: "Enterprise-grade security with Firebase Auth and encrypted cloud storage.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Optimized pipelines deliver generations quickly, even under heavy workloads.",
  },
];

const aiTools = [
  {
    icon: MessageSquare,
    title: "AI Assistant",
    description: "Chat naturally, upload files, and get markdown-formatted answers powered by Gemini.",
    href: "/app/assistant",
    gradient: "bg-accent",
  },
  {
    icon: ImageIcon,
    title: "AI Image Generator",
    description: "Describe any scene and generate high-resolution images with Imagen.",
    href: "/app/image",
    gradient: "bg-fuchsia-500",
  },
  {
    icon: Mic,
    title: "Voice Generator",
    description: "Convert text into natural speech with a range of male and female voice styles.",
    href: "/app/voice",
    gradient: "bg-blue-500",
  },
  {
    icon: Music,
    title: "AI Music Generator",
    description: "Generate original music tracks across genres from a simple text prompt.",
    href: "/app/music",
    gradient: "bg-emerald-500",
  },
];

const testimonials = [
  {
    quote:
      "SAKFLY Studio replaced four separate tools for our content team. The Assistant and Image Generator alone save us hours every week.",
    name: "Maly Chan",
    role: "Head of Content, Brightleaf Media",
  },
  {
    quote:
      "The voice generator sounds incredibly natural. We use it for every product walkthrough now — clients can't tell it's AI.",
    name: "Ethan Reyes",
    role: "Founder, LoopWave Studios",
  },
  {
    quote:
      "As a solo creator, having text, image, voice, and music generation in one dashboard is a massive productivity unlock.",
    name: "Priya Nathan",
    role: "Independent Filmmaker",
  },
];

const faqs = [
  {
    question: "What is SAKFLY Studio?",
    answer:
      "SAKFLY Studio is an all-in-one AI creation platform that brings together text, image, voice, and music generation in a single workspace, powered by Google Vertex AI.",
  },
  {
    question: "Which AI models power the platform?",
    answer:
      "We use Vertex AI Gemini for the AI Assistant, Vertex AI Imagen for image generation, Vertex AI TTS for voice generation, and Vertex AI Lyria for music generation.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. The Free plan gives you limited monthly credits across all four AI tools so you can try SAKFLY Studio with no cost and no commitment.",
  },
  {
    question: "Can I cancel or change my plan anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from the Billing page inside your dashboard.",
  },
  {
    question: "Is my content and data secure?",
    answer:
      "Yes. SAKFLY Studio uses Firebase Authentication and encrypted cloud storage, and we never share your generated content or prompts with third parties.",
  },
];

export default function HomePage() {
  return (
    <MarketingChrome>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <Badge variant="accent" className="border border-accent/30 px-4 py-1.5">
              <Sparkles size={14} /> Powered by Google Vertex AI
            </Badge>
          </div>
          <h1 className="animate-fade-in text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Your Complete{" "}
            <span className="text-gradient">AI Creation Platform</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-in text-lg text-slate-400">
            Generate text, images, voice, and music using the power of Google
            Vertex AI in one powerful workspace.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton href="/auth/register" size="lg">
              Get Started Free
            </LinkButton>
            <LinkButton href="/pricing" variant="secondary" size="lg">
              View Pricing
            </LinkButton>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl animate-float">
          <div className="glass-card border-glow rounded-2xl p-3 sm:p-6">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <div className="h-3 w-3 rounded-full bg-red-400/70" />
              <div className="h-3 w-3 rounded-full bg-amber-400/70" />
              <div className="h-3 w-3 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs text-slate-500">app.sakflystudio.com/app/dashboard</span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
              {aiTools.map((tool) => (
                <div key={tool.title} className="rounded-xl bg-white/5 p-4 text-left">
                  <tool.icon size={18} className="text-accent-light" />
                  <p className="mt-3 text-xs font-medium text-white">{tool.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Everything you need to create
            </h2>
            <p className="mt-4 text-slate-400">
              A single platform for every stage of your creative and
              productivity workflow.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools overview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Four powerful AI tools</h2>
            <p className="mt-4 text-slate-400">
              Explore the AI Assistant, Image Generator, Voice Generator, and
              Music Generator — all inside one dashboard.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiTools.map((tool) => (
              <AIToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-slate-400">Start free. Upgrade any time as you grow.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <PricingCard
              name="Free"
              price="$0"
              description="Explore SAKFLY Studio with limited monthly credits."
              features={["50 credits / month", "AI Assistant (basic)", "5 image generations", "Community support"]}
              ctaLabel="Get Started Free"
              ctaHref="/auth/register"
            />
            <PricingCard
              name="Pro"
              price="$9"
              description="For creators who need more power and flexibility."
              features={["1,000 credits / month", "Unlimited AI Assistant", "100 image generations", "Voice + Music generation", "Priority support"]}
              ctaLabel="Upgrade to Pro"
              ctaHref="/pricing"
              highlighted
              badge="Most Popular"
            />
            <PricingCard
              name="Pro+"
              price="$29"
              description="For teams and power users with heavy generation needs."
              features={["5,000 credits / month", "Unlimited everything", "Priority generation queue", "Team seats", "Dedicated support"]}
              ctaLabel="Upgrade to Pro+"
              ctaHref="/pricing"
            />
          </div>
          <div className="mt-8 text-center">
            <LinkButton href="/pricing" variant="ghost">
              Compare all plan details →
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Loved by creators worldwide</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Frequently asked questions</h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="glass-card border-glow mx-auto max-w-5xl rounded-3xl px-8 py-14 text-center">
          <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
            <LayoutDashboard size={22} />
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Have questions? We&apos;d love to help.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Reach out to our team for support, partnership inquiries, or
            feedback about SAKFLY Studio.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton href="/contact" size="lg">
              Contact Us
            </LinkButton>
            <LinkButton href="/features" variant="secondary" size="lg">
              <Download size={16} /> Explore Features
            </LinkButton>
          </div>
          <div className="mt-8 flex justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <History size={14} /> Full history tracking
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} /> Secure by design
            </span>
          </div>
        </div>
      </section>
    </MarketingChrome>
  );
}
