import type { ReactNode } from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function AppPlatformLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-grid-glow lg:flex-row">
      <AppSidebar />
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
