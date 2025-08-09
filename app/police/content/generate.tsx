"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileText, CheckCircle } from "lucide-react"

const Generate: React.FC = () => {
  const [firNumber, setFirNumber] = useState<string>("")
  const [dateTime, setDateTime] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [incidentText, setIncidentText] = useState<string>("")

  const pad = (n: number): string => n.toString().padStart(2, "0")

  const generateReadableFIRNumber = (): string => {
    const now = new Date()
    return `FIR-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(
      now.getHours()
    )}${pad(now.getMinutes())}${pad(now.getSeconds())}`
  }

  useEffect(() => {
    const initialNumber = generateReadableFIRNumber()
    setFirNumber(initialNumber)
  }, [])

  const handleGenerateFIR = async (): Promise<void> => {
    const newNumber = generateReadableFIRNumber()
    setFirNumber(newNumber)

    const firData = {
      title: name,
      court: newNumber,
      summary: incidentText,
      relevance: "medium",
      date: dateTime,
    }

    try {
      const res = await fetch("/api/save-fir", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(firData),
      })

      const result = await res.json()
      if (result.success) {
        alert("✅ FIR successfully saved!")
        localStorage.setItem("fir-updated", Date.now().toString())
      } else {
        alert("❌ Failed to save FIR.")
      }
    } catch (error) {
      console.error("Error while saving FIR:", error)
      alert("Something went wrong while saving the FIR.")
    }

    // Reset fields
    setDateTime("")
    setName("")
    setAddress("")
    setPhone("")
    setIncidentText("")
  }

  return (
    <div className="sm:p-6 md:p-2 w-auto sm:h-full md:h-auto">
      <Card className="w-auto bg-black/20 dark:bg-black/40 backdrop-blur-lg border border-white/10 dark:border-white/5 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg mr-3">
              <FileText className="h-5 w-5 text-white" />
            </div>
            Smart FIR Generator
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-300">FIR Number</label>
              <Input
                value={firNumber}
                readOnly
                placeholder="Auto-generated on Generate"
                className="bg-white/5 border-white/20 text-white placeholder:text-blue-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-300">Date & Time</label>
              <Input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="bg-white/5 border-white/20 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-300">Complainant Details</label>
            <Input
              placeholder="Full name of complainant"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              placeholder="Address of complainant"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              placeholder="Phone number of complainant"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white/5 border-white/20 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-300">Incident Description</label>
            <Textarea
              placeholder="Detailed description of the incident with all relevant facts..."
              value={incidentText}
              onChange={(e) => setIncidentText(e.target.value)}
              className="bg-white/5 border-white/20 text-white min-h-[140px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={handleGenerateFIR}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium py-3"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Generate FIR
            </Button>
            <Button
              variant="outline"
              onClick={() => alert("Draft saved (simulation)")}
              className="border-white/20 text-white"
            >
              Save Template Draft
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Generate
