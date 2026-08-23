"use client";

import { useState } from "react";
import { Search, MoreVertical, ShieldBan, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { mockAdminUsers } from "@/lib/mock-data";
import { formatDate, getInitials } from "@/lib/utils";

const planBadge: Record<string, "default" | "accent" | "success"> = {
  free: "default",
  pro: "accent",
  proplus: "success",
};

export default function ManageUsersPage() {
  const [query, setQuery] = useState("");

  const filtered = mockAdminUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Manage Users</h1>
        <p className="mt-1 text-sm text-slate-400">{mockAdminUsers.length} total registered users</p>
      </div>

      <div className="relative max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users..."
          className="pl-9"
        />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/5 text-slate-500">
                <th className="pb-3 font-medium">User</th>
                <th className="pb-3 font-medium">Plan</th>
                <th className="pb-3 font-medium">Credits</th>
                <th className="pb-3 font-medium">Joined</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((user) => (
                <tr key={user.id}>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-xs font-semibold text-accent-light">
                        {getInitials(user.name)}
                      </div>
                      <div>
                        <p className="font-medium text-white">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3">
                    <Badge variant={planBadge[user.plan]}>{user.plan}</Badge>
                  </td>
                  <td className="py-3 text-slate-400">
                    {user.credits - user.creditsUsed} / {user.credits}
                  </td>
                  <td className="py-3 text-slate-400">{formatDate(user.createdAt)}</td>
                  <td className="py-3">
                    <Badge variant={user.status === "active" ? "success" : "danger"}>{user.status}</Badge>
                  </td>
                  <td className="py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-emerald-400"
                        aria-label="Activate"
                        title="Activate"
                      >
                        <ShieldCheck size={15} />
                      </button>
                      <button
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-red-400"
                        aria-label="Suspend"
                        title="Suspend"
                      >
                        <ShieldBan size={15} />
                      </button>
                      <button className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="More">
                        <MoreVertical size={15} />
                      </button>
                    </div>
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
