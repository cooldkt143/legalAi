import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'records.json')

export async function GET() {
  try {
    const file = fs.readFileSync(filePath, 'utf-8')
    const records = JSON.parse(file)
    return NextResponse.json(records)
  } catch (err) {
    console.error("❌ Error reading records:", err)
    return NextResponse.json([], { status: 500 })
  }
}
