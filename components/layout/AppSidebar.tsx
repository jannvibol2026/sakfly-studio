"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  MessageSquare,
  Image as ImageIcon,
  Mic,
  Music,
  CreditCard,
  Settings,
  UserCircle,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { mockCurrentUser } from "@/lib/mock-data";
import { getInitials } from "@/lib/utils";

const navItems = [
  { href: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/app/assistant", label: "AI Assistant", icon: MessageSquare },
  { href: "/app/image", label: "Image Generator", icon: ImageIcon },
  { href: "/app/voice", label: "Voice Generator", icon: Mic },
  { href: "/app/music", label: "Music Generator", icon: Music },
  { href: "/app/billing", label: "Billing", icon: CreditCard },
  { href: "/app/settings", label: "Settings", icon: Settings },
  { href: "/app/profile", label: "Profile", icon: UserCircle },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const SidebarContent = (
    <div className="flex h-full flex-col">
      <Link href="/" className="flex items-center gap-2 px-5 py-5">
        <Logo size={28} className="text-accent-light" />
        <span className="text-base font-bold text-white">SAKFLY Studio</span>
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
        <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
            {getInitials(mockCurrentUser.name)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">{mockCurrentUser.name}</p>
            <p className="truncate text-xs text-slate-400">{mockCurrentUser.email}</p>
          </div>
        </div>
        <Link
          href="/auth/login"
          className="mt-3 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          <LogOut size={16} /> Sign out
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
        <Link href="/" className="flex items-center gap-2">
          <Logo size={26} className="text-accent-light" />
          <span className="text-sm font-bold text-white">SAKFLY Studio</span>
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
