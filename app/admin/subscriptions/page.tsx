import { Repeat } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { mockAdminUsers, mockSubscription } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

const statusBadge: Record<string, "success" | "warning" | "danger" | "default"> = {
  active: "success",
  trialing: "warning",
  past_due: "danger",
  canceled: "default",
  incomplete: "warning",
};

export default function SubscriptionManagementPage() {
  const subscriptions = mockAdminUsers.map((user, i) => ({
    id: `sub_${i + 1}`,
    user,
    plan: user.plan,
    status: i === 0 ? mockSubscription.status : ("active" as const),
    renewsOn: mockSubscription.currentPeriodEnd,
  }));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Subscription Management</h1>
        <p className="mt-1 text-sm text-slate-400">All active and past subscriptions across SAKFLY Studio.</p>
      </div>

      <Card>
        <div className="mb-4 flex items-center gap-2">
          <Repeat size={18} className="text-accent-light" />
          <h2 className="text-lg font-semibold text-white">Subscriptions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/5 text-slate-500">
                <th className="pb-3 font-medium">Subscription</th>
                <th className="pb-3 font-medium">User</th>
                <th className="pb-3 font-medium">Plan</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Renews</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {subscriptions.map((sub) => (
                <tr key={sub.id}>
                  <td className="py-3 text-slate-300">{sub.id}</td>
                  <td className="py-3">
                    <p className="font-medium text-white">{sub.user.name}</p>
                    <p className="text-xs text-slate-500">{sub.user.email}</p>
                  </td>
                  <td className="py-3 text-slate-400 capitalize">{sub.plan}</td>
                  <td className="py-3">
                    <Badge variant={statusBadge[sub.status]}>{sub.status}</Badge>
                  </td>
                  <td className="py-3 text-slate-400">{formatDate(sub.renewsOn)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
