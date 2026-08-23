"use client";

import { useState } from "react";
import { Mic, History } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Textarea, Select, Label } from "@/components/ui/Input";
import { MockAudioPlayer } from "@/components/app/MockAudioPlayer";
import { mockGeneratedAudio } from "@/lib/mock-data";
import { generateId, sleep, formatDate } from "@/lib/utils";
import type { GeneratedAudio } from "@/lib/schema";

const voiceStyles = [
  "Female — Bright",
  "Female — Warm",
  "Female — Calm",
  "Male — Warm",
  "Male — Deep",
  "Male — Energetic",
];

export default function VoiceGeneratorPage() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState(voiceStyles[0]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<GeneratedAudio[]>(mockGeneratedAudio);

  async function handleGenerate() {
    if (!text.trim() || loading) return;
    setLoading(true);

    // TODO: replace with real fetch("/api/voice", { method: "POST", body: ... })
    // that calls Vertex AI TTS and returns a playable audio URL.
    await sleep(1500);

    const newAudio: GeneratedAudio = {
      id: generateId("aud"),
      userId: "user_001",
      text: text.trim(),
      voiceStyle: voice,
      audioUrl: `mock://audio/${generateId("m")}`,
      durationSeconds: Math.max(4, Math.round(text.trim().split(/\s+/).length / 2.5)),
      createdAt: new Date().toISOString(),
    };
    setHistory((prev) => [newAudio, ...prev]);
    setText("");
    setLoading(false);
  }

  function downloadPlaceholder(audio: GeneratedAudio) {
    const blob = new Blob(
      [`SAKFLY Studio — mock voice export\nText: ${audio.text}\nVoice: ${audio.voiceStyle}`],
      { type: "text/plain" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sakfly-voice-${audio.id}.mp3.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Voice Generator</h1>
        <p className="mt-1 text-sm text-slate-400">Powered by Vertex AI TTS · Demo mode</p>
      </div>

      <div className="glass-card rounded-2xl p-6">
        <Label htmlFor="text">Text to convert to speech</Label>
        <Textarea
          id="text"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Welcome to SAKFLY Studio, where your ideas come to life."
        />
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full sm:w-64">
            <Label htmlFor="voice">Voice style</Label>
            <Select id="voice" value={voice} onChange={(e) => setVoice(e.target.value)}>
              {voiceStyles.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </Select>
          </div>
          <Button onClick={handleGenerate} disabled={loading || !text.trim()} className="sm:w-56">
            <Mic size={16} />
            {loading ? "Generating..." : "Generate Voice"}
          </Button>
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">History</h2>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <History size={14} /> {history.length} clips
          </span>
        </div>
        <div className="space-y-3">
          {history.map((audio) => (
            <div key={audio.id} className="glass-card rounded-2xl p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-slate-300 line-clamp-1">{audio.text}</p>
                <span className="whitespace-nowrap text-xs text-slate-500">{formatDate(audio.createdAt)}</span>
              </div>
              <MockAudioPlayer
                label={audio.voiceStyle}
                durationSeconds={audio.durationSeconds}
                onDownload={() => downloadPlaceholder(audio)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
