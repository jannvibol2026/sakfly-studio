import { DollarSign, Users, TrendingDown, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { mockRevenueSummary } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function RevenueDashboardPage() {
  const maxRevenue = Math.max(...mockRevenueSummary.monthlyGrowth.map((m) => m.revenue));

  const stats = [
    { label: "Monthly Recurring Revenue", value: formatCurrency(mockRevenueSummary.mrr), icon: DollarSign },
    { label: "Annual Recurring Revenue", value: formatCurrency(mockRevenueSummary.arr), icon: TrendingUp },
    { label: "Total Customers", value: mockRevenueSummary.totalCustomers.toLocaleString(), icon: Users },
    { label: "Churn Rate", value: `${mockRevenueSummary.churnRate}%`, icon: TrendingDown },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Revenue Dashboard</h1>
        <p className="mt-1 text-sm text-slate-400">Financial performance across all subscription plans.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
              <stat.icon size={18} />
            </div>
            <p className="mt-4 text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-slate-400">{stat.label}</p>
          </Card>
        ))}
      </div>

      <Card>
        <h2 className="mb-4 text-lg font-semibold text-white">Revenue growth (last 6 months)</h2>
        <div className="flex h-56 items-end justify-between gap-4">
          {mockRevenueSummary.monthlyGrowth.map((m) => (
            <div key={m.month} className="flex flex-1 flex-col items-center gap-2">
              <span className="text-xs text-slate-400">{formatCurrency(m.revenue)}</span>
              <div className="flex h-40 w-full items-end">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-accent/40 to-accent"
                  style={{ height: `${(m.revenue / maxRevenue) * 100}%` }}
                />
              </div>
              <span className="text-xs text-slate-500">{m.month}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
