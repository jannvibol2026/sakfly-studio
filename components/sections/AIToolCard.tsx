import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface AIToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

export function AIToolCard({ icon: Icon, title, description, href, gradient }: AIToolCardProps) {
  return (
    <Link
      href={href}
      className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40 ${gradient}`}
      />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
          <Icon size={22} />
        </div>
        <h3 className="flex items-center gap-1.5 text-lg font-semibold text-white">
          {title}
          <ArrowUpRight
            size={16}
            className="text-accent-light opacity-0 transition-opacity group-hover:opacity-100"
          />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
    </Link>
  );
}
