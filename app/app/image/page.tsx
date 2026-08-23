"use client";

import { useState } from "react";
import { Sparkles, Download, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Textarea, Select, Label } from "@/components/ui/Input";
import { GradientThumb } from "@/components/app/GradientThumb";
import { mockGeneratedImages } from "@/lib/mock-data";
import { generateId, sleep, formatDate } from "@/lib/utils";
import type { GeneratedImage } from "@/lib/schema";

const sizes: GeneratedImage["size"][] = ["512x512", "768x768", "1024x1024", "1024x1792"];

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState<GeneratedImage["size"]>("1024x1024");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<GeneratedImage[]>(mockGeneratedImages);

  async function handleGenerate() {
    if (!prompt.trim() || loading) return;
    setLoading(true);

    // Simulated generation delay. TODO: replace with real fetch("/api/image", ...)
    await sleep(1800);

    const newImage: GeneratedImage = {
      id: generateId("img"),
      userId: "user_001",
      prompt: prompt.trim(),
      size,
      imageUrl: `gradient:${generateId("g")}`,
      createdAt: new Date().toISOString(),
    };
    setHistory((prev) => [newImage, ...prev]);
    setPrompt("");
    setLoading(false);
  }

  function downloadPlaceholder(image: GeneratedImage) {
    // Demo-only: downloads a tiny placeholder text file since generation
    // is mocked locally. TODO: replace with real image blob download once
    // /api/image returns a real Imagen-generated file URL.
    const blob = new Blob(
      [`SAKFLY Studio — mock image export\nPrompt: ${image.prompt}\nSize: ${image.size}`],
      { type: "text/plain" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sakfly-image-${image.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">AI Image Generator</h1>
        <p className="mt-1 text-sm text-slate-400">Powered by Vertex AI Imagen · Demo mode</p>
      </div>

      <div className="glass-card rounded-2xl p-6">
        <Label htmlFor="prompt">Describe the image you want to create</Label>
        <Textarea
          id="prompt"
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="A neon cyberpunk city skyline at dusk, ultra detailed, cinematic lighting"
        />
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full sm:w-56">
            <Label htmlFor="size">Image size</Label>
            <Select id="size" value={size} onChange={(e) => setSize(e.target.value as GeneratedImage["size"])}>
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </div>
          <Button onClick={handleGenerate} disabled={loading || !prompt.trim()} className="sm:w-56">
            <Sparkles size={16} />
            {loading ? "Generating..." : "Generate Image"}
          </Button>
        </div>
      </div>

      {loading && (
        <div className="glass-card flex items-center gap-4 rounded-2xl p-6">
          <div className="h-16 w-16 shrink-0 animate-pulse rounded-xl bg-white/10" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-3/4 animate-pulse rounded bg-white/10" />
            <div className="h-3 w-1/2 animate-pulse rounded bg-white/10" />
          </div>
        </div>
      )}

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">History</h2>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <ImageIcon size={14} /> {history.length} images
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {history.map((image) => (
            <div key={image.id} className="glass-card group overflow-hidden rounded-2xl p-3">
              <GradientThumb seed={image.id} className="aspect-square w-full" />
              <p className="mt-3 line-clamp-2 text-xs text-slate-300">{image.prompt}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">{formatDate(image.createdAt)}</span>
                <button
                  onClick={() => downloadPlaceholder(image)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
                  aria-label="Download"
                >
                  <Download size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
