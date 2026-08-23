"use client";

import { useState } from "react";
import { Music as MusicIcon, History } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Textarea, Select, Label } from "@/components/ui/Input";
import { MockAudioPlayer } from "@/components/app/MockAudioPlayer";
import { mockGeneratedMusic } from "@/lib/mock-data";
import { generateId, sleep, formatDate } from "@/lib/utils";
import type { GeneratedMusic } from "@/lib/schema";

const genres = ["Lo-fi", "Cinematic", "Electronic", "Ambient", "Hip-Hop", "Acoustic", "Orchestral"];

export default function MusicGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [genre, setGenre] = useState(genres[0]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<GeneratedMusic[]>(mockGeneratedMusic);

  async function handleGenerate() {
    if (!prompt.trim() || loading) return;
    setLoading(true);

    // TODO: replace with real fetch("/api/music", { method: "POST", body: ... })
    // that calls Vertex AI Lyria and returns a playable track URL.
    await sleep(2000);

    const newTrack: GeneratedMusic = {
      id: generateId("mus"),
      userId: "user_001",
      prompt: prompt.trim(),
      genre,
      audioUrl: `mock://music/${generateId("m")}`,
      durationSeconds: 60 + Math.round(Math.random() * 60),
      createdAt: new Date().toISOString(),
    };
    setHistory((prev) => [newTrack, ...prev]);
    setPrompt("");
    setLoading(false);
  }

  function downloadPlaceholder(track: GeneratedMusic) {
    const blob = new Blob(
      [`SAKFLY Studio — mock music export\nPrompt: ${track.prompt}\nGenre: ${track.genre}`],
      { type: "text/plain" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sakfly-music-${track.id}.mp3.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">AI Music Generator</h1>
        <p className="mt-1 text-sm text-slate-400">Powered by Vertex AI Lyria · Demo mode</p>
      </div>

      <div className="glass-card rounded-2xl p-6">
        <Label htmlFor="prompt">Describe the music you want to create</Label>
        <Textarea
          id="prompt"
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="A lo-fi chill beat for late-night coding sessions, mellow piano and soft drums"
        />
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full sm:w-56">
            <Label htmlFor="genre">Genre</Label>
            <Select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </Select>
          </div>
          <Button onClick={handleGenerate} disabled={loading || !prompt.trim()} className="sm:w-56">
            <MusicIcon size={16} />
            {loading ? "Composing..." : "Generate Music"}
          </Button>
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">History</h2>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <History size={14} /> {history.length} tracks
          </span>
        </div>
        <div className="space-y-3">
          {history.map((track) => (
            <div key={track.id} className="glass-card rounded-2xl p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-slate-300 line-clamp-1">{track.prompt}</p>
                <span className="whitespace-nowrap text-xs text-slate-500">{formatDate(track.createdAt)}</span>
              </div>
              <MockAudioPlayer
                label={`${track.genre} track`}
                durationSeconds={track.durationSeconds}
                onDownload={() => downloadPlaceholder(track)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
