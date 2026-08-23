import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/image
 *
 * Mock endpoint for the AI Image Generator tool. Accepts a text prompt and
 * a size, and returns a mock "image" reference (a gradient seed used by
 * the frontend's local GradientThumb component — no real file is created).
 *
 * TODO: Replace the mock logic below with a real call to Vertex AI Imagen:
 *
 *   import { VertexAI } from "@google-cloud/vertexai";
 *   const vertexAI = new VertexAI({
 *     project: process.env.VERTEX_AI_PROJECT_ID,
 *     location: process.env.VERTEX_AI_LOCATION,
 *   });
 *   const model = vertexAI.getGenerativeModel({
 *     model: process.env.VERTEX_AI_IMAGEN_MODEL || "imagegeneration@006",
 *   });
 *   const result = await model.generateImages({ prompt, size });
 *   // Upload result to Firebase Storage and return its public URL.
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const prompt: string = body.prompt || "";
  const size: string = body.size || "1024x1024";

  if (!prompt.trim()) {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 600));

  const id = `img_${Math.random().toString(36).slice(2, 10)}`;

  return NextResponse.json({
    id,
    prompt,
    size,
    imageUrl: `gradient:${id}`,
    model: "imagegeneration@006 (mock)",
    createdAt: new Date().toISOString(),
  });
}
