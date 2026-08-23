"use client";

import { useState } from "react";
import { CreditCard, ExternalLink, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { mockSubscription, mockInvoices } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";

const planLabels: Record<string, string> = { free: "Free", pro: "Pro", proplus: "Pro+" };

export default function BillingPage() {
  const [portalLoading, setPortalLoading] = useState(false);

  async function openBillingPortal() {
    setPortalLoading(true);
    // TODO: replace with real fetch("/api/stripe/checkout" or a dedicated
    // /api/stripe/portal route) that creates a Stripe Billing Portal
    // session and redirects the user to session.url.
    await new Promise((r) => setTimeout(r, 900));
    setPortalLoading(false);
    alert("This would redirect to the Stripe Billing Portal in production.");
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Billing</h1>
        <p className="mt-1 text-sm text-slate-400">Manage your subscription, invoices, and payment method.</p>
      </div>

      <Card>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-white">{planLabels[mockSubscription.plan]} Plan</h2>
              <Badge variant="success">Active</Badge>
            </div>
            <p className="mt-1 text-sm text-slate-400">
              Renews on {formatDate(mockSubscription.currentPeriodEnd)}
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="sm">
              <ArrowDownCircle size={15} /> Downgrade
            </Button>
            <Button size="sm">
              <ArrowUpCircle size={15} /> Upgrade
            </Button>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">Payment method</h2>
            <p className="mt-1 text-sm text-slate-400">Manage cards and billing details via Stripe.</p>
          </div>
          <Button variant="secondary" onClick={openBillingPortal} disabled={portalLoading}>
            <ExternalLink size={15} />
            {portalLoading ? "Redirecting..." : "Open Stripe Portal"}
          </Button>
        </div>
      </Card>

      <Card>
        <h2 className="mb-4 text-lg font-semibold text-white">Invoice history</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/5 text-slate-500">
                <th className="pb-3 font-medium">Invoice</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Plan</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockInvoices.map((inv) => (
                <tr key={inv.id}>
                  <td className="flex items-center gap-2 py-3 text-slate-300">
                    <CreditCard size={14} className="text-accent-light" /> {inv.id}
                  </td>
                  <td className="py-3 text-slate-400">{formatDate(inv.date)}</td>
                  <td className="py-3 text-slate-400">{inv.plan}</td>
                  <td className="py-3 text-slate-300">{formatCurrency(inv.amount)}</td>
                  <td className="py-3">
                    <Badge variant="success">{inv.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
