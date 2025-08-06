"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, FileText, Gavel, BookOpen } from "lucide-react"
import Assistant from "./content/assistant"
import Generate from "./content/generate"
import Record from "./content/Record"
import Legal from "./content/legal"
import { Header } from "./content/header"

export default function PoliceDashboard() {
  const [activeTab, setActiveTab] = useState("fir-assistant")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-slate-900 transition-all duration-500">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-400/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10">
        {/* Sticky Header */}
        <div className="bg-black/20 dark:bg-black/40 backdrop-blur-lg border-b border-white/10 dark:border-white/5 p-4 sticky top-0 z-20">
          <Header />
        </div>

        {/* Main Content */}
        <div className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab List */}
            <TabsList className="fixed left-0 grid w-full grid-cols-4 bg-black/20 dark:bg-black/40 backdrop-blur-lg border border-white/10 dark:border-white/5 p-1 rounded-lg mt:-4 z-10">
              <TabsTrigger
                value="fir-assistant"
                className="text-[8px] sm:text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                <Zap className="h-3 w-4 mr-1" />
                FIR Assistant
              </TabsTrigger>
              <TabsTrigger
                value="draft-fir"
                className="text-[8px] sm:text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                <FileText className="h-3 w-3 mr-1" />
                Generate FIR
              </TabsTrigger>
              <TabsTrigger
                value="judgments"
                className="text-[8px] sm:text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                <Gavel className="h-3 w-3 mr-1" />
                Records
              </TabsTrigger>
              <TabsTrigger
                value="legal-sections"
                className="text-[8px] sm:text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                <BookOpen className="h-3 w-3 mr-1" />
                Legal Sections
              </TabsTrigger>
            </TabsList>

            {/* Tab Contents */}
            <div className="pt-8">
              <TabsContent value="fir-assistant" className="space-y-6 mt-6">
                <Assistant />
              </TabsContent>

              <TabsContent value="draft-fir" className="space-y-6 mt-6">
                <div className="max-w-auto">
                  <Generate />
                </div>
              </TabsContent>

              <TabsContent value="judgments" className="space-y-6 mt-6">
                <Record />
              </TabsContent>

              <TabsContent value="legal-sections" className="space-y-6 mt-6">
                <Legal />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
