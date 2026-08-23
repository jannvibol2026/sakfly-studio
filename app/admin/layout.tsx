import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/layout/AdminSidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-grid-glow lg:flex-row">
      <AdminSidebar />
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
