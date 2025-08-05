import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Gavel } from "lucide-react"

const Record = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const judgments = [
    {
      title: "Rajendra Rao",
      court: "FIR-20250802-134807",
      summary: "Landmark judgment on digital evidence in FIR",
      relevance: "high",
      date: "2023-08-15",
    },
    {
      title: "Umesh Bhatt",
      court: "FIR-20250716-134708",
      summary: "Guidelines for recording witness statements",
      relevance: "medium",
      date: "2022-12-10",
    },
        {
      title: "Umesh Bhatt",
      court: "FIR-20250716-134708",
      summary: "Guidelines for recording witness statements",
      relevance: "medium",
      date: "2022-12-10",
    },
        {
      title: "Umesh Bhatt",
      court: "FIR-20250716-134708",
      summary: "Guidelines for recording witness statements",
      relevance: "medium",
      date: "2022-12-10",
    },
        {
      title: "Umesh Bhatt",
      court: "FIR-20250716-134708",
      summary: "Guidelines for recording witness statements",
      relevance: "medium",
      date: "2022-12-10",
    },
  ]

  return (
    <div >
      {/* Search Input */}
      <div className="relative mb-6 w-full">
        <Search className="absolute left-4 top-4 h-5 w-5 text-blue-300" />
        <Input
          placeholder="Search by FIR number or Complainant's name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-sm md:text-lg w-full pl-12 h-12 bg-black/20 dark:bg-black/40 backdrop-blur-lg border-white/20 dark:border-white/10 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
        />
      </div>
      <div className="w-full min-h-screen p-6 bg-background">

        {/* Judgment Cards */}
        <div className="space-y-4">
          {judgments
            .filter((j) =>
              `${j.title} ${j.court}`.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((judgment, index) => (
              <Card
                key={index}
                className="w-full bg-black/20 dark:bg-black/40 backdrop-blur-lg border border-white/10 dark:border-white/5 hover:border-yellow-500/30 transition-all"
              >
                <CardContent className="p-6 flex justify-between items-start flex-col sm:flex-row">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                        {judgment.court}
                      </Badge>
                    </div>
                    <h4 className="font-bold text-white mb-2 text-xl">{judgment.title}</h4>
                    <p className="text-blue-200 text-sm mb-3">{judgment.summary}</p>
                    <p className="text-xs text-blue-300">Registered Date: {judgment.date}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                      <Gavel className="h-5 w-5 text-yellow-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Record
