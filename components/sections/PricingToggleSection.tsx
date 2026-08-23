"use client";

import { useState } from "react";
import { PricingCard } from "@/components/sections/PricingCard";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const plans = {
  monthly: [
    {
      name: "Free",
      price: "$0",
      description: "Explore SAKFLY Studio with limited monthly credits.",
      features: [
        "50 credits / month",
        "AI Assistant (basic, Gemini)",
        "5 image generations",
        "1 voice generation",
        "No music generation",
        "Community support",
      ],
      ctaLabel: "Get Started Free",
      ctaHref: "/auth/register",
    },
    {
      name: "Pro",
      price: "$9",
      description: "For creators who need more power and flexibility.",
      features: [
        "1,000 credits / month",
        "Unlimited AI Assistant (Gemini)",
        "100 image generations (Imagen)",
        "50 voice generations (TTS)",
        "20 music generations (Lyria)",
        "Priority email support",
      ],
      ctaLabel: "Upgrade to Pro",
      ctaHref: "/auth/register",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Pro+",
      price: "$29",
      description: "For teams and power users with heavy generation needs.",
      features: [
        "5,000 credits / month",
        "Unlimited everything",
        "Priority generation queue",
        "Team seats (up to 5)",
        "Advanced usage analytics",
        "Dedicated support",
      ],
      ctaLabel: "Upgrade to Pro+",
      ctaHref: "/auth/register",
    },
  ],
};

export function PricingToggleSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-center gap-4">
          <span className={cn("text-sm font-medium", !annual ? "text-white" : "text-slate-500")}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual((v) => !v)}
            aria-label="Toggle annual billing"
            className={cn(
              "relative h-7 w-14 rounded-full transition-colors",
              annual ? "bg-accent" : "bg-white/10"
            )}
          >
            <span
              className={cn(
                "absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform",
                annual ? "translate-x-8" : "translate-x-1"
              )}
            />
          </button>
          <span className={cn("text-sm font-medium", annual ? "text-white" : "text-slate-500")}>
            Annual
          </span>
          {annual && <Badge variant="success">Save 20%</Badge>}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.monthly.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
              price={
                annual && plan.price !== "$0"
                  ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
                  : plan.price
              }
              period={annual ? "/mo, billed annually" : "/month"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
