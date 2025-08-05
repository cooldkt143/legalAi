import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronDown, ChevronUp } from "lucide-react"

const Legal = () => {
  const [expandedSection, setExpandedSection] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const legalSections = [
    {
      section: "154",
      title: "Information in cognizable cases",
      category: "CrPC",
      description: "Every information relating to the commission of a cognizable offence...",
      usage: "high",
    },
    {
      section: "161",
      title: "Examination of witnesses by police",
      category: "CrPC",
      description: "Any police officer making an investigation may examine orally any person...",
      usage: "medium",
    },
    {
      section: "302",
      title: "Punishment for murder",
      category: "IPC",
      description: "Whoever commits murder shall be punished with death, or imprisonment for life...",
      usage: "high",
    },
  ]

  return (
    <div>
      {/* Search Bar */}
      <div className="relative mb-6 w-full">
        <Search className="absolute left-4 top-4 h-5 w-5 text-blue-300" />
        <Input
          placeholder="Search IPC, CrPC sections..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-12 w-full bg-black/20 dark:bg-black/40 backdrop-blur-lg border-white/20 dark:border-white/10 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
        />
      </div>
      <div className="w-full min-h-screen p-6 bg-background">
        {/* Section Cards */}
        <div className="space-y-4 w-full">
          {legalSections
            .filter((section) =>
              `${section.title} ${section.section} ${section.category}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
            .map((section, index) => (
              <Card
                key={index}
                className="w-full bg-black/20 dark:bg-black/40 backdrop-blur-lg border border-white/10 dark:border-white/5 hover:border-blue-500/30 transition-all"
              >
                <CardContent className="p-0">
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
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium">
                            {section.category} {section.section}
                          </Badge>
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
                        <h4 className="font-bold text-white text-lg">{section.title}</h4>
                      </div>
                      {expandedSection === section.section ? (
                        <ChevronUp className="h-5 w-5 text-blue-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-blue-400" />
                      )}
                    </div>
                  </div>
                  {expandedSection === section.section && (
                    <div className="px-5 pb-5 border-t border-white/10 bg-white/5">
                      <p className="text-blue-200 text-sm mt-4 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Legal
