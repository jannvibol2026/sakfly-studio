"use client";

import { useState } from "react";
import { Save, Moon, Bell, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";
import { mockCurrentUser } from "@/lib/mock-data";

function Toggle({
  checked,
  onChange,
  label,
  description,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <p className="text-sm font-medium text-white">{label}</p>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 rounded-full transition-colors ${checked ? "bg-accent" : "bg-white/10"}`}
        aria-pressed={checked}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

export default function SettingsPage() {
  const [name, setName] = useState(mockCurrentUser.name);
  const [email, setEmail] = useState(mockCurrentUser.email);
  const [notifications, setNotifications] = useState(mockCurrentUser.notificationsEnabled ?? true);
  const [productUpdates, setProductUpdates] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Settings</h1>
        <p className="mt-1 text-sm text-slate-400">Manage your account preferences.</p>
      </div>

      <Card>
        <h2 className="mb-4 text-lg font-semibold text-white">Account details</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="mb-1 flex items-center gap-2 text-lg font-semibold text-white">
          <Bell size={18} className="text-accent-light" /> Notifications
        </h2>
        <div className="divide-y divide-white/5">
          <Toggle
            checked={notifications}
            onChange={setNotifications}
            label="Email notifications"
            description="Get notified about generation completions and account activity."
          />
          <Toggle
            checked={productUpdates}
            onChange={setProductUpdates}
            label="Product updates"
            description="Occasional emails about new features and AI tools."
          />
        </div>
      </Card>

      <Card>
        <h2 className="mb-1 flex items-center gap-2 text-lg font-semibold text-white">
          <Moon size={18} className="text-accent-light" /> Appearance
        </h2>
        <div className="divide-y divide-white/5">
          <Toggle
            checked={darkMode}
            onChange={setDarkMode}
            label="Dark mode"
            description="SAKFLY Studio's native dark blue and purple theme."
          />
        </div>
      </Card>

      <Card>
        <h2 className="mb-1 flex items-center gap-2 text-lg font-semibold text-red-400">
          <ShieldAlert size={18} /> Danger zone
        </h2>
        <p className="mb-4 text-sm text-slate-400">
          Deleting your account permanently removes all generated content and account data.
        </p>
        <Button variant="danger" size="sm">
          Delete account
        </Button>
      </Card>

      <div className="flex items-center gap-3">
        <Button onClick={handleSave}>
          <Save size={16} /> Save changes
        </Button>
        {saved && <span className="text-sm text-emerald-400">Saved!</span>}
      </div>
    </div>
  );
}
