import { BarChart3, Image as ImageIcon, Mic, Music, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { mockUsageChart } from "@/lib/mock-data";

const toolUsage = [
  { tool: "AI Assistant", icon: MessageSquare, value: 42840, pct: 38 },
  { tool: "Image Generator", icon: ImageIcon, value: 31210, pct: 28 },
  { tool: "Voice Generator", icon: Mic, value: 21540, pct: 19 },
  { tool: "Music Generator", icon: Music, value: 16890, pct: 15 },
];

export default function AnalyticsPage() {
  const maxUsage = Math.max(...mockUsageChart.map((d) => d.value));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">View Analytics</h1>
        <p className="mt-1 text-sm text-slate-400">Platform-wide usage across all AI tools.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {toolUsage.map((tool) => (
          <Card key={tool.tool}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
              <tool.icon size={18} />
            </div>
            <p className="mt-4 text-2xl font-bold text-white">{tool.value.toLocaleString()}</p>
            <p className="text-sm text-slate-400">{tool.tool} generations</p>
          </Card>
        ))}
      </div>

      <Card>
        <div className="mb-4 flex items-center gap-2">
          <BarChart3 size={18} className="text-accent-light" />
          <h2 className="text-lg font-semibold text-white">Generation share by tool</h2>
        </div>
        <div className="space-y-4">
          {toolUsage.map((tool) => (
            <div key={tool.tool}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-slate-300">{tool.tool}</span>
                <span className="text-slate-500">{tool.pct}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-accent" style={{ width: `${tool.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="mb-4 text-lg font-semibold text-white">Platform activity (last 7 days)</h2>
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
    </div>
  );
}
