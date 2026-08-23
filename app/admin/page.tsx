import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { mockAdminUsers, mockActivityLogs, mockRevenueSummary } from "@/lib/mock-data";
import { formatCurrency, formatDateTime } from "@/lib/utils";

export default function AdminOverviewPage() {
  const stats = [
    { label: "Total Users", value: mockAdminUsers.length.toLocaleString(), icon: Users },
    { label: "MRR", value: formatCurrency(mockRevenueSummary.mrr), icon: DollarSign },
    { label: "Active Today", value: "312", icon: Activity },
    { label: "Monthly Growth", value: "+8.2%", icon: TrendingUp },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Admin Overview</h1>
        <p className="mt-1 text-sm text-slate-400">A snapshot of SAKFLY Studio&apos;s platform health.</p>
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
        <h2 className="mb-4 text-lg font-semibold text-white">Recent user activity</h2>
        <div className="divide-y divide-white/5">
          {mockActivityLogs.slice(0, 6).map((log) => (
            <div key={log.id} className="flex items-center justify-between gap-4 py-3">
              <div>
                <p className="text-sm font-medium text-white">
                  {log.userName} <span className="text-slate-500">— {log.action}</span>
                </p>
                {log.details && <p className="text-xs text-slate-500">{log.details}</p>}
              </div>
              <span className="whitespace-nowrap text-xs text-slate-500">{formatDateTime(log.createdAt)}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="mb-4 text-lg font-semibold text-white">Recently joined users</h2>
        <div className="divide-y divide-white/5">
          {mockAdminUsers.slice(0, 5).map((user) => (
            <div key={user.id} className="flex items-center justify-between gap-4 py-3">
              <div>
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-slate-500">{user.email}</p>
              </div>
              <Badge variant={user.status === "active" ? "success" : "danger"}>{user.status}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
