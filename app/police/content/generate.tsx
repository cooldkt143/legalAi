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

  const handleGenerateFIR = (): void => {
    const newNumber = generateReadableFIRNumber()
    setFirNumber(newNumber)

    console.log({
      firNumber: newNumber,
      dateTime,
      name,
      address,
      phone,
      incidentText,
    })

    // Reset input fields
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
                placeholder={firNumber || "Auto-generated on Generate"}
                className="bg-white/5 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-300">Date & Time</label>
              <Input
                type="datetime-local"
                value={dateTime}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateTime(e.target.value)}
                className="bg-white/5 border-white/20 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-300">Complainant Details</label>
            <Input
              placeholder="Full name of complainant"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              className="bg-white/5 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            <Input
              placeholder="Address of complainant"
              value={address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
              className="bg-white/5 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            <Input
              placeholder="Phone number of complainant"
              value={phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
              className="bg-white/5 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-300">Incident Description</label>
            <Textarea
              placeholder="Detailed description of the incident with all relevant facts..."
              value={incidentText}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setIncidentText(e.target.value)}
              className="bg-white/5 border-white/20 text-white placeholder:text-blue-300 min-h-[140px] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={handleGenerateFIR}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-3"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Generate FIR
            </Button>
            <Button
              variant="outline"
              onClick={() => alert("Draft saved (simulation)")}
              className="border-white/20 text-white hover:bg-white/10"
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
