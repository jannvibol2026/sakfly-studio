"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="glass-nav sticky top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo size={30} className="text-accent-light" />
          <span className="text-lg font-bold tracking-tight text-white">SAKFLY Studio</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <LinkButton href="/auth/login" variant="ghost" size="sm">
            Log in
          </LinkButton>
          <LinkButton href="/auth/register" variant="primary" size="sm">
            Get Started Free
          </LinkButton>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass-nav border-t border-white/5 px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-white/5 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <LinkButton href="/auth/login" variant="secondary" size="md" onClick={() => setOpen(false)}>
              Log in
            </LinkButton>
            <LinkButton href="/auth/register" variant="primary" size="md" onClick={() => setOpen(false)}>
              Get Started Free
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}
