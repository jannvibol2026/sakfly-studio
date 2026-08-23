import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/voice
 *
 * Mock endpoint for the Voice Generator (TTS) tool. Accepts text and a
 * voice style, and returns a mock audio reference (no real MP3 is
 * generated in this demo build).
 *
 * TODO: Replace the mock logic below with a real call to Vertex AI TTS:
 *
 *   import { TextToSpeechClient } from "@google-cloud/text-to-speech";
 *   const client = new TextToSpeechClient();
 *   const [response] = await client.synthesizeSpeech({
 *     input: { text },
 *     voice: { languageCode: "en-US", name: voiceStyle },
 *     audioConfig: { audioEncoding: "MP3" },
 *   });
 *   // Upload response.audioContent to Firebase Storage and return its URL.
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const text: string = body.text || "";
  const voiceStyle: string = body.voiceStyle || "Female — Bright";

  if (!text.trim()) {
    return NextResponse.json({ error: "Text is required." }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const id = `aud_${Math.random().toString(36).slice(2, 10)}`;
  const durationSeconds = Math.max(4, Math.round(text.trim().split(/\s+/).length / 2.5));

  return NextResponse.json({
    id,
    text,
    voiceStyle,
    audioUrl: `mock://audio/${id}`,
    durationSeconds,
    model: "vertex-tts (mock)",
    createdAt: new Date().toISOString(),
  });
}
