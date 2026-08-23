import { Check } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
}

export function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl p-8 transition-all duration-300",
        highlighted
          ? "glass-card border-glow scale-[1.02] border-accent/50"
          : "glass-card hover:border-accent/30"
      )}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white shadow-glow">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="mt-1 text-sm text-slate-400">{description}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white">{price}</span>
        {price !== "$0" && <span className="text-sm text-slate-400">{period}</span>}
      </div>

      <ul className="mt-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Check size={16} className="mt-0.5 shrink-0 text-accent-light" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <LinkButton
        href={ctaHref}
        variant={highlighted ? "primary" : "secondary"}
        size="lg"
        className="mt-8 w-full"
      >
        {ctaLabel}
      </LinkButton>
    </div>
  );
}
