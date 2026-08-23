"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Download } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Fully local "audio player" for demo purposes — animates a fake progress
 * bar over `durationSeconds` instead of playing a real audio file, since no
 * network/audio backend exists yet. Swap for a real <audio> element once
 * /api/voice or /api/music return a playable file URL.
 */
export function MockAudioPlayer({
  durationSeconds,
  label,
  onDownload,
}: {
  durationSeconds: number;
  label: string;
  onDownload?: () => void;
}) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          const next = p + 100 / (durationSeconds * 10);
          if (next >= 100) {
            setPlaying(false);
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 100;
          }
          return next;
        });
      }, 100);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, durationSeconds]);

  function toggle() {
    if (progress >= 100) setProgress(0);
    setPlaying((p) => !p);
  }

  const elapsed = Math.round((progress / 100) * durationSeconds);

  return (
    <div className="glass flex items-center gap-3 rounded-xl px-4 py-3">
      <button
        onClick={toggle}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? <Pause size={15} /> : <Play size={15} />}
      </button>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs text-slate-300">{label}</p>
        <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/10">
          <div
            className={cn("h-1.5 rounded-full bg-accent-light transition-[width]")}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <span className="shrink-0 text-[11px] tabular-nums text-slate-500">
        {elapsed}s / {durationSeconds}s
      </span>
      {onDownload && (
        <button
          onClick={onDownload}
          className="shrink-0 rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
          aria-label="Download"
        >
          <Download size={14} />
        </button>
      )}
    </div>
  );
}
