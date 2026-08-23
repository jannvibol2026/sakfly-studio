import { Star } from "lucide-react";
import { getInitials } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="glass-card flex h-full flex-col rounded-2xl p-6">
      <div className="mb-3 flex gap-1 text-accent-light">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-slate-300">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-sm font-semibold text-accent-light">
          {getInitials(name)}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
