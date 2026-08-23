"use client";

import { useState } from "react";
import { Save, Image as ImageIcon, Mic, Music, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input, Label, Textarea } from "@/components/ui/Input";
import {
  mockCurrentUser,
  mockGeneratedImages,
  mockGeneratedAudio,
  mockGeneratedMusic,
} from "@/lib/mock-data";
import { getInitials } from "@/lib/utils";

export default function ProfilePage() {
  const [name, setName] = useState(mockCurrentUser.name);
  const [bio, setBio] = useState("AI creator exploring image, voice, and music generation.");
  const [saved, setSaved] = useState(false);

  const stats = [
    { label: "Images generated", value: mockGeneratedImages.length, icon: ImageIcon },
    { label: "Voice clips", value: mockGeneratedAudio.length, icon: Mic },
    { label: "Music tracks", value: mockGeneratedMusic.length, icon: Music },
    { label: "Assistant chats", value: 12, icon: MessageSquare },
  ];

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Profile</h1>
        <p className="mt-1 text-sm text-slate-400">Manage your public profile and view usage analytics.</p>
      </div>

      <Card>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent/20 text-2xl font-semibold text-accent-light">
            {getInitials(name)}
          </div>
          <div className="w-full flex-1 space-y-4">
            <div>
              <Label htmlFor="name">Display name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" rows={3} value={bio} onChange={(e) => setBio(e.target.value)} />
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={handleSave}>
                <Save size={16} /> Save profile
              </Button>
              {saved && <span className="text-sm text-emerald-400">Saved!</span>}
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Usage analytics</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
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
      </div>
    </div>
  );
}
