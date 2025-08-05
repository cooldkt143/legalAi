"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mic, Send, Zap, Target, CheckCircle, AlertTriangle, Loader } from "lucide-react"

function getSeverityColor(severity) {
  switch (severity?.toLowerCase()) {
    case "high":
      return "bg-red-600/30 text-red-400 border-red-600/30"
    case "medium":
      return "bg-yellow-600/30 text-yellow-300 border-yellow-600/30"
    case "low":
      return "bg-green-600/30 text-green-300 border-green-600/30"
    default:
      return "bg-gray-600/30 text-gray-300 border-gray-600/30"
  }
}

const Assistant = () => {
  const [incidentText, setIncidentText] = useState("")
  const [recommendedSections, setRecommendedSections] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const analyzeIncident = async () => {
    if (!incidentText.trim()) return
    setLoading(true)
    setError("")
    setRecommendedSections([])

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ incidentText }),
      })

      const data = await response.json()

      if (data.error) {
        setError("API error: " + data.error)
        return
      }

      const text = data.choices?.[0]?.message?.content || ""
      const match = text.match(/```json\s*(.*?)\s*```/s)
      const json = match ? JSON.parse(match[1]) : JSON.parse(text)

      setRecommendedSections(json)
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full space-y-6">
      <Card className="w-full bg-black/20 border border-white/10 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg mr-3">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div className="text-lg sm:text-2xl font-bold">
              AI-Powered Incident Analysis
            </div>
            <Badge className="ml-auto bg-green-500/20 text-green-400">Beta</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative group">
            <Textarea
              placeholder="Describe the incident in detail..."
              value={incidentText}
              onChange={(e) => setIncidentText(e.target.value)}
              className="md:h-[200px] bg-white/5 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            <Button
              size="sm"
              className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-500 to-indigo-600"
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={analyzeIncident}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
          >
            {loading ? (
              <>
                <Loader className="animate-spin h-4 w-4 mr-2" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Analyze Incident with AI
              </>
            )}
          </Button>
          {error && <p className="text-red-400">{error}</p>}
        </CardContent>
      </Card>

      {recommendedSections.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Zap className="h-5 w-5 mr-2 text-yellow-400" />
              AI Recommendations
            </h3>
            <Badge className="bg-blue-500/20 text-blue-400">
              {recommendedSections.length} matches found
            </Badge>
          </div>

          {recommendedSections.map((section, idx) => (
            <Card
              key={idx}
              className="bg-black/20 border border-white/10 hover:border-blue-500/30"
            >
              <CardContent className="p-5">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex space-x-3 mb-3 items-center">
                      <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                        Section {section.section}
                      </Badge>
                      <Badge className={`${getSeverityColor(section.severity)} font-medium`}>
                        {section.severity?.toUpperCase()}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="text-xs text-green-400">{section.confidence}% match</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-lg">{section.title}</h4>
                    <p className="text-blue-200 text-sm">{section.description}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                      <AlertTriangle className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default Assistant
