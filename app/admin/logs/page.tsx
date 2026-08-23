import { ScrollText } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { mockActivityLogs } from "@/lib/mock-data";
import { formatDateTime, getInitials } from "@/lib/utils";

export default function ActivityLogsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">User Activity Logs</h1>
        <p className="mt-1 text-sm text-slate-400">Complete audit trail of user actions across the platform.</p>
      </div>

      <Card>
        <div className="mb-4 flex items-center gap-2">
          <ScrollText size={18} className="text-accent-light" />
          <h2 className="text-lg font-semibold text-white">All activity</h2>
        </div>
        <div className="divide-y divide-white/5">
          {mockActivityLogs.map((log) => (
            <div key={log.id} className="flex items-start gap-3 py-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-semibold text-accent-light">
                {getInitials(log.userName)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-white">
                  <span className="font-medium">{log.userName}</span>{" "}
                  <span className="text-slate-400">{log.action}</span>
                </p>
                {log.details && <p className="text-xs text-slate-500">{log.details}</p>}
              </div>
              <span className="whitespace-nowrap text-xs text-slate-500">{formatDateTime(log.createdAt)}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
