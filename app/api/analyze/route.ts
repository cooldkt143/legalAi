import {
  GoogleGenerativeAI,
  GenerativeModel,
  GenerateContentResult
} from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// ✅ Ensure your API key is available
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in the environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

// ✅ Retry helper for rate limit errors
async function tryGenerateContent(
  model: GenerativeModel,
  prompt: string,
  retries = 3,
  delay = 5000
): Promise<GenerateContentResult> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      });
      return result;
    } catch (err: any) {
      const isRateLimit = err?.message?.includes("429");
      if (isRateLimit && attempt < retries) {
        console.warn(`Rate limited, retrying in ${delay}ms (attempt ${attempt})...`);
        await new Promise((res) => setTimeout(res, delay));
      } else {
        throw err;
      }
    }
  }
  throw new Error("Failed after maximum retries.");
}

// ✅ POST API Route Handler
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const incidentText: string = body.incidentText;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
    });

    const prompt = `
You are a legal expert assistant. Based on the following incident description, analyze and return the most relevant Indian Penal Code (IPC) or Criminal Procedure Code (CrPC) sections. Respond in JSON format.

Incident Description:
"${incidentText}"
`;

    const result = await tryGenerateContent(model, prompt);

    const responseText: string =
      result.response.candidates?.[0]?.content.parts?.[0]?.text || "";

    return NextResponse.json({
      choices: [{ message: { content: responseText } }],
    });
  } catch (err: any) {
    console.error("Gemini API error:", err);

    if (err.message.includes("429") || err.message.includes("quota")) {
      return NextResponse.json(
        {
          error: "You have exceeded your API usage quota. Please wait or upgrade your Gemini plan.",
          details: err.message,
        },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Failed to analyze incident", details: err.message },
      { status: 500 }
    );
  }
}
