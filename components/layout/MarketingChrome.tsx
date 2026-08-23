import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Shared chrome (Navbar + Footer) for all public marketing pages:
 * /, /features, /pricing, /about, /contact, /privacy, /terms.
 */
export function MarketingChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-grid-glow">{children}</main>
      <Footer />
    </>
  );
}
