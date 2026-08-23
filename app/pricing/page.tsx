import type { Metadata } from "next";
import { MarketingChrome } from "@/components/layout/MarketingChrome";
import { PricingToggleSection } from "@/components/sections/PricingToggleSection";
import { FAQItem } from "@/components/sections/FAQItem";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for SAKFLY Studio. Free, Pro, and Pro+ plans for every kind of creator.",
};

const pricingFaqs = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade at any time from the Billing page in your dashboard. Changes take effect immediately, with prorated billing.",
  },
  {
    question: "Do unused credits roll over?",
    answer:
      "Credits reset at the start of each billing cycle and do not roll over. We recommend choosing the plan that best matches your monthly usage.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer:
      "Yes — switch to annual billing to save 20% compared to paying monthly, applied automatically at checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards through Stripe, our secure payment processor.",
  },
];

export default function PricingPage() {
  return (
    <MarketingChrome>
      <section className="px-4 pt-20 pb-6 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Plans that <span className="text-gradient">scale with you</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Start for free, then upgrade whenever you need more credits, more
          speed, or more advanced generation features.
        </p>
      </section>

      <PricingToggleSection />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-white">Pricing FAQ</h2>
          <div className="mt-10 space-y-4">
            {pricingFaqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </MarketingChrome>
  );
}
