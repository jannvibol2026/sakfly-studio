import {
  MessageSquare,
  Image as ImageIcon,
  Mic,
  Music,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  mockCurrentUser,
  mockRecentActivity,
  mockGeneratedImages,
  mockGeneratedAudio,
  mockGeneratedMusic,
  mockUsageChart,
} from "@/lib/mock-data";
import { formatDateTime } from "@/lib/utils";

const planLabels: Record<string, string> = {
  free: "Free",
  pro: "Pro",
  proplus: "Pro+",
};

export default function DashboardPage() {
  const creditsRemaining = mockCurrentUser.credits - mockCurrentUser.creditsUsed;
  const usagePct = Math.round((mockCurrentUser.creditsUsed / mockCurrentUser.credits) * 100);
  const maxUsage = Math.max(...mockUsageChart.map((d) => d.value));

  const stats = [
    { label: "Current Plan", value: planLabels[mockCurrentUser.plan], icon: Zap, badge: true },
    { label: "Credits Remaining", value: `${creditsRemaining}`, icon: TrendingUp },
    { label: "Images Generated", value: `${mockGeneratedImages.length}`, icon: ImageIcon },
    { label: "Audio Clips", value: `${mockGeneratedAudio.length + mockGeneratedMusic.length}`, icon: Mic },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          Welcome back, {mockCurrentUser.name.split(" ")[0]} 👋
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Here&apos;s what&apos;s happening with your account today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                <stat.icon size={18} />
              </div>
              {stat.badge && <Badge variant="accent">Active</Badge>}
            </div>
            <p className="mt-4 text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-slate-400">{stat.label}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Weekly usage</h2>
            <Badge variant="outline">Last 7 days</Badge>
          </div>
          <div className="flex h-48 items-end justify-between gap-3">
            {mockUsageChart.map((d) => (
              <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-40 w-full items-end">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-accent/40 to-accent"
                    style={{ height: `${(d.value / maxUsage) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-slate-500">{d.day}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-lg font-semibold text-white">Credit usage</h2>
          <div className="flex items-center justify-center py-2">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full">
              <svg viewBox="0 0 36 36" className="h-32 w-32 -rotate-90">
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="3"
                  strokeDasharray={`${usagePct}, 100`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute text-center">
                <p className="text-xl font-bold text-white">{usagePct}%</p>
                <p className="text-[11px] text-slate-500">used</p>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-slate-400">
            {mockCurrentUser.creditsUsed} of {mockCurrentUser.credits} credits used this cycle
          </p>
        </Card>
      </div>

      <Card>
        <h2 className="mb-4 text-lg font-semibold text-white">Recent activity</h2>
        <div className="divide-y divide-white/5">
          {mockRecentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between gap-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-light">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{activity.action}</p>
                  {activity.details && <p className="text-xs text-slate-500">{activity.details}</p>}
                </div>
              </div>
              <span className="whitespace-nowrap text-xs text-slate-500">
                {formatDateTime(activity.createdAt)}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
