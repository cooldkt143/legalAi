"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Gavel } from "lucide-react"

type RecordItem = {
  title: string
  court: string
  relevance: "high" | "medium" | "low"
  summary: string
  date: string
}

const Record: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [records, setRecords] = useState<RecordItem[]>([])

  const fetchRecords = async () => {
    try {
      const res = await fetch("/api/records")
      const data = await res.json()
      setRecords(data)
    } catch (error) {
      console.error("Error loading records:", error)
    }
  }

  useEffect(() => {
    fetchRecords()

    const interval = setInterval(fetchRecords, 2000) // auto-refresh every 2 seconds
    return () => clearInterval(interval)
  }, [])

  const filteredRecords = records.filter((record) =>
    `${record.title} ${record.court}`.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="fixed left-0 w-full h-screen flex flex-col p-6 bg-background">
      <div className="relative mb-4 w-full">
        <Search className="absolute left-4 top-4 h-5 w-5 text-blue-300" />
        <Input
          placeholder="Search by FIR number or Complainant's name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-sm md:text-lg w-full pl-12 h-12 bg-black/20 text-white"
        />
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {filteredRecords.map((record, index) => (
          <Card
            key={index}
            className="w-full bg-black/20 border border-white/10 hover:border-yellow-500/30"
          >
            <CardContent className="p-6 flex justify-between items-start flex-col sm:flex-row">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2 flex-wrap">
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                    {record.court}
                  </Badge>
                  <Badge
                    className={
                      record.relevance === "high"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : record.relevance === "medium"
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                    }
                  >
                    {record.relevance} relevance
                  </Badge>
                </div>
                <h4 className="font-bold text-white mb-2 text-xl">{record.title}</h4>
                <p className="text-blue-200 text-sm mb-3 leading-relaxed">{record.summary}</p>
                <p className="text-xs text-blue-300">Registered Date: {record.date}</p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/30">
                  <Gavel className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Record
