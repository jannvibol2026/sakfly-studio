"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Toggles the `.light` class on <html>. Defaults to dark mode (SAKFLY's
 * native theme). Persists preference to localStorage.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("sakfly-theme");
    const light = stored === "light";
    setIsLight(light);
    document.documentElement.classList.toggle("light", light);
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    window.localStorage.setItem("sakfly-theme", next ? "light" : "dark");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white hover:border-accent/40",
        className
      )}
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
