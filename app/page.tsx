"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, ArrowRight, Scale, Sparkles, Star } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  const router = useRouter()
  const [logoAnimationDone, setLogoAnimationDone] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role)
    setTimeout(() => {
      router.push(`/${role}`)
    }, 1000) // Delay to allow animations to complete
  }

  useEffect(() => {
    const logoTimer = setTimeout(() => setLogoAnimationDone(true), 1500)
    const contentTimer = setTimeout(() => setContentVisible(true), 2000)
    return () => {
      clearTimeout(logoTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  const isPoliceSelected = selectedRole === "police"
  const isCitizenSelected = selectedRole === "citizen"

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 dark:from-gray-900 dark:via-slate-900 dark:to-black relative overflow-hidden transition-all duration-500">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/20 dark:bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Theme Toggle */}
      {logoAnimationDone && !selectedRole && (
        <div className="absolute top-4 right-4 z-20 transition-opacity smooth duration-700 opacity-100">
          <ThemeToggle />
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Animated Logo (disappears on role select) */}
        <div
          className={`transition-all duration-[700ms] ease-in-out flex justify-center items-center mx-auto ${
            logoAnimationDone 
              ? "scale-100 translate-y-0 opacity-100"
              : "scale-[3] translate-y-20 opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-full p-4 border border-white/20 dark:border-white/10 z-10">
            <Scale className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Main Content - Disappears on role selection */}
        <div
          className={`w-full max-w-md transition-all duration-700 mt-10 ${
            contentVisible && !selectedRole
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 dark:from-gray-100 dark:to-blue-300 bg-clip-text text-transparent">
              LegalAI FIR Assistant
            </h1>
            <div className="flex items-center justify-center space-x-1">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <p className="text-blue-100 dark:text-blue-200 text-sm">AI-Powered Legal Intelligence</p>
              <Sparkles className="h-4 w-4 text-yellow-400" />
            </div>
          </div>

          {/* Choose Role */}
          <div className="space-y-6">
            {/* Police Card */}
            <Card
              className={`relative z-20 transition-all duration-700 group cursor-pointer overflow-hidden ${
                isPoliceSelected
                  ? "scale-[1.2] opacity-100 z-30"
                  : selectedRole
                  ? "opacity-0 scale-95"
                  : "hover:scale-105 hover:shadow-2xl"
              } bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10`}
              onClick={() => handleRoleSelection("police")}
            >
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full shadow-lg">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">Police Officer</h3>
                    <p className="text-blue-200 dark:text-blue-300 text-sm">
                      Advanced FIR tools, case management, and legal database access
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-white/60 group-hover:text-white transition" />
                </div>
              </CardContent>
            </Card>

            {/* Citizen Card */}
            <Card
              className={`relative z-20 transition-all duration-700 group cursor-pointer overflow-hidden ${
                isCitizenSelected
                  ? "scale-[1.2] opacity-100 z-30"
                  : selectedRole
                  ? "opacity-0 scale-95"
                  : "hover:scale-105 hover:shadow-2xl"
              } bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10`}
              onClick={() => handleRoleSelection("citizen")}
            >
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 p-4 rounded-full shadow-lg">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">Citizen</h3>
                    <p className="text-blue-200 dark:text-blue-300 text-sm">
                      File complaints, know your rights, and get instant legal guidance
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-white/60 group-hover:text-white transition" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer - Hides on role select */}
          <div
            className={`text-center mt-8 transition-all duration-700 ${
              selectedRole ? "opacity-0 scale-95" : "opacity-100"
            }`}
          >
            <div className="flex items-center justify-center space-x-2 text-blue-200 dark:text-blue-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs">Secure • AI-Powered • 24/7 Available</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-xs text-blue-300 dark:text-blue-400">Trusted by 10,000+ users nationwide</p>
          </div>
        </div>
      </div>
    </div>
  )
}
