import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function POST(req) {
  try {
    const { incidentText } = await req.json()

    if (!incidentText) {
      return NextResponse.json({ error: "Missing incident text" }, { status: 400 })
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const result = await model.generateContent([
      `You are a legal assistant AI. Given this incident, return a JSON array of IPC sections with:
      - section
      - title
      - description
      - severity (low/medium/high)
      - confidence (0-100)

      Incident: ${incidentText}`
    ])

    const response = await result.response
    const text = await response.text()

    const match = text.match(/```json\s*(.*?)\s*```/s)
    const json = match ? JSON.parse(match[1]) : JSON.parse(text)

    return NextResponse.json({
      choices: [
        {
          message: {
            content: "```json\n" + JSON.stringify(json, null, 2) + "\n```"
          }
        }
      ]
    })
  } catch (error) {
    console.error("Gemini API Error:", error)
    return NextResponse.json(
      { error: error?.message || "Unknown Gemini API error" },
      { status: 500 }
    )
  }
}
