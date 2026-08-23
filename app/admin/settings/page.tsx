"use client";

import { useState } from "react";
import { Save, SlidersHorizontal, ToggleLeft } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";

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

export default function SystemSettingsPage() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [signupsEnabled, setSignupsEnabled] = useState(true);
  const [freeCredits, setFreeCredits] = useState("50");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">System Settings</h1>
        <p className="mt-1 text-sm text-slate-400">Platform-wide configuration for SAKFLY Studio.</p>
      </div>

      <Card>
        <h2 className="mb-1 flex items-center gap-2 text-lg font-semibold text-white">
          <ToggleLeft size={18} className="text-accent-light" /> Platform controls
        </h2>
        <div className="divide-y divide-white/5">
          <Toggle
            checked={maintenanceMode}
            onChange={setMaintenanceMode}
            label="Maintenance mode"
            description="Temporarily disable access to the app platform for all non-admin users."
          />
          <Toggle
            checked={signupsEnabled}
            onChange={setSignupsEnabled}
            label="New signups enabled"
            description="Allow new users to register for a SAKFLY Studio account."
          />
        </div>
      </Card>

      <Card>
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
          <SlidersHorizontal size={18} className="text-accent-light" /> Default limits
        </h2>
        <div className="max-w-xs">
          <Label htmlFor="freeCredits">Free plan monthly credits</Label>
          <Input
            id="freeCredits"
            type="number"
            value={freeCredits}
            onChange={(e) => setFreeCredits(e.target.value)}
          />
        </div>
      </Card>

      <div className="flex items-center gap-3">
        <Button onClick={handleSave}>
          <Save size={16} /> Save settings
        </Button>
        {saved && <span className="text-sm text-emerald-400">Saved!</span>}
      </div>
    </div>
  );
}
