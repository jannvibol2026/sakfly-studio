import type { Metadata } from "next";
import { Target, Rocket, Users, Sparkles } from "lucide-react";
import { MarketingChrome } from "@/components/layout/MarketingChrome";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SAKFLY Studio's mission to make advanced AI creation tools accessible to everyone.",
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make advanced AI creation tools — text, image, voice, and music — accessible to every creator, team, and business, regardless of technical background.",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    description:
      "A world where anyone can turn an idea into finished content in minutes, powered by responsible, state-of-the-art AI models.",
  },
  {
    icon: Users,
    title: "Our Community",
    description:
      "SAKFLY Studio is built with continuous feedback from creators, marketers, developers, and small businesses around the world.",
  },
  {
    icon: Sparkles,
    title: "Our Approach",
    description:
      "We combine Google Vertex AI's cutting-edge models with a clean, unified workspace so you never have to juggle multiple tools again.",
  },
];

export default function AboutPage() {
  return (
    <MarketingChrome>
      <section className="px-4 pt-20 pb-14 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          About <span className="text-gradient">SAKFLY Studio</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          SAKFLY Studio was founded on a simple idea: creative and
          productivity AI tools should live in one place, not scattered
          across a dozen apps and subscriptions.
        </p>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="glass-card mx-auto max-w-4xl rounded-3xl p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-white">Our Story</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            SAKFLY Studio started as a small internal tool built by a team of
            developers and designers who were frustrated with switching
            between separate apps for writing, image generation, voice-over
            recording, and music production. We asked: what if all of that
            lived inside a single, beautifully designed workspace, powered by
            the best AI models available?
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">
            That question became SAKFLY Studio — a unified AI creation
            platform built on Google Vertex AI. Today, SAKFLY Studio brings
            together the AI Assistant (Gemini), AI Image Generator (Imagen),
            Voice Generator (TTS), and AI Music Generator (Lyria) into one
            fast, secure, and mobile-friendly product, used by creators,
            marketers, and small teams who want to move quickly without
            sacrificing quality.
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">
            We&apos;re just getting started. Our roadmap includes deeper
            collaboration features, more voice and music styles, and
            expanded integrations — all guided by feedback from our growing
            community of creators.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="glass-card rounded-2xl p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                <value.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="glass-card border-glow mx-auto max-w-4xl rounded-3xl px-8 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Join thousands of creators using SAKFLY Studio
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton href="/auth/register" size="lg">
              Get Started Free
            </LinkButton>
            <LinkButton href="/contact" variant="secondary" size="lg">
              Contact Our Team
            </LinkButton>
          </div>
        </div>
      </section>
    </MarketingChrome>
  );
}
