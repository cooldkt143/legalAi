import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'records.json')

export async function POST(req: Request) {
  const newFir = await req.json()

  try {
    const file = fs.readFileSync(filePath, 'utf-8')
    const records = JSON.parse(file)

    records.unshift(newFir)

    fs.writeFileSync(filePath, JSON.stringify(records, null, 2), 'utf-8')

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("❌ Error writing FIR:", err)
    return NextResponse.json({ success: false, message: "Failed to save FIR" }, { status: 500 })
  }
}
