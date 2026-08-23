import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/music
 *
 * Mock endpoint for the AI Music Generator tool. Accepts a text prompt and
 * a genre, and returns a mock music track reference.
 *
 * TODO: Replace the mock logic below with a real call to Vertex AI Lyria:
 *
 *   import { VertexAI } from "@google-cloud/vertexai";
 *   const vertexAI = new VertexAI({
 *     project: process.env.VERTEX_AI_PROJECT_ID,
 *     location: process.env.VERTEX_AI_LOCATION,
 *   });
 *   const model = vertexAI.getGenerativeModel({
 *     model: process.env.VERTEX_AI_LYRIA_MODEL || "lyria-001",
 *   });
 *   const result = await model.generateMusic({ prompt, genre });
 *   // Upload result to Firebase Storage and return its public URL.
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const prompt: string = body.prompt || "";
  const genre: string = body.genre || "Lo-fi";

  if (!prompt.trim()) {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 700));

  const id = `mus_${Math.random().toString(36).slice(2, 10)}`;
  const durationSeconds = 60 + Math.round(Math.random() * 60);

  return NextResponse.json({
    id,
    prompt,
    genre,
    audioUrl: `mock://music/${id}`,
    durationSeconds,
    model: "lyria-001 (mock)",
    createdAt: new Date().toISOString(),
  });
}
