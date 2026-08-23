"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ShieldCheck,
  Users,
  Layers,
  BarChart3,
  ScrollText,
  DollarSign,
  Repeat,
  SlidersHorizontal,
  Menu,
  X,
  ArrowLeftCircle,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Overview", icon: ShieldCheck },
  { href: "/admin/users", label: "Manage Users", icon: Users },
  { href: "/admin/plans", label: "Manage Plans", icon: Layers },
  { href: "/admin/analytics", label: "View Analytics", icon: BarChart3 },
  { href: "/admin/logs", label: "Activity Logs", icon: ScrollText },
  { href: "/admin/revenue", label: "Revenue Dashboard", icon: DollarSign },
  { href: "/admin/subscriptions", label: "Subscriptions", icon: Repeat },
  { href: "/admin/settings", label: "System Settings", icon: SlidersHorizontal },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const SidebarContent = (
    <div className="flex h-full flex-col">
      <Link href="/" className="flex items-center gap-2 px-5 py-5">
        <Logo size={28} className="text-accent-light" />
        <div className="leading-tight">
          <p className="text-sm font-bold text-white">SAKFLY Studio</p>
          <p className="text-[11px] uppercase tracking-wider text-accent-light">Admin</p>
        </div>
      </Link>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-accent/15 text-white border border-accent/30"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/5 p-4">
        <Link
          href="/app/dashboard"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          <ArrowLeftCircle size={16} /> Back to app
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <aside className="glass hidden h-screen w-64 shrink-0 border-r border-white/5 lg:block">
        {SidebarContent}
      </aside>

      <div className="glass-nav sticky top-0 z-40 flex items-center justify-between px-4 py-3 lg:hidden">
        <Link href="/admin" className="flex items-center gap-2">
          <Logo size={26} className="text-accent-light" />
          <span className="text-sm font-bold text-white">Admin</span>
        </Link>
        <button onClick={() => setOpen(true)} aria-label="Open menu" className="p-2 text-white">
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="glass relative h-full w-72 border-r border-white/5">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-4 top-5 p-1 text-slate-300"
            >
              <X size={20} />
            </button>
            {SidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
