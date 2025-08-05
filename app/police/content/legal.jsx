import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import legalSections from "@/data/legalSections.json"

const Legal = () => {
  const [expandedSection, setExpandedSection] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Enhanced filtering: supports multiple words (e.g., "IPC 420" or "bail CrPC")
  const filteredSections = legalSections.filter((section) => {
    const queryWords = searchQuery.toLowerCase().trim().split(/\s+/)
    const combinedData = `${section.title} ${section.section} ${section.category} ${section.description}`.toLowerCase()
    return queryWords.every((word) => combinedData.includes(word))
  })

  return (
    <div className="fixed left-0 w-full px-4 py-6">
      {/* Search Bar */}
      <div className="relative mb-6 w-full">
        <Search className="absolute left-4 top-4 h-5 w-5 text-blue-300" />
        <Input
          placeholder="Search IPC, CrPC sections, or rights (e.g., 'IPC 420', 'CrPC bail')"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-12 w-full bg-black/20 dark:bg-black/40 backdrop-blur-lg border-white/20 dark:border-white/10 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
        />
      </div>

      {/* Scrollable Section List */}
      <div className="w-full max-h-[80vh] overflow-y-auto space-y-4 pr-2">
        {filteredSections.length === 0 ? (
          <p className="text-center text-blue-300">No matching results found.</p>
        ) : (
          filteredSections.map((section, index) => (
            <Card
              key={index}
              className="w-full bg-black/20 dark:bg-black/40 backdrop-blur-lg border border-white/10 dark:border-white/5 hover:border-blue-500/30 transition-all"
            >
              <CardContent className="p-0">
                {/* Card Header */}
                <div
                  className="p-5 cursor-pointer hover:bg-white/5 transition-colors"
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.section ? null : section.section
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-wrap">
                      <div className="flex items-center space-x-3">
                        {/* Section Badge */}
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium">
                          {section.category} {section.section}
                        </Badge>

                        {/* Usage Badge */}
                        <Badge
                          className={
                            section.usage === "high"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }
                        >
                          {section.usage} usage
                        </Badge>
                      </div>

                      {/* Section Title */}
                      <h4 className="font-bold text-white text-lg">
                        {section.title}
                      </h4>
                    </div>

                    {/* Expand/Collapse Icon */}
                    {expandedSection === section.section ? (
                      <ChevronUp className="h-5 w-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-400" />
                    )}
                  </div>
                </div>

                {/* Card Description */}
                {expandedSection === section.section && (
                  <div className="px-5 pb-5 border-t border-white/10 bg-white/5">
                    <p className="text-blue-200 text-sm mt-4 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

export default Legal
