"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, ArrowRight, Scale, Sparkles, Star } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role)
    setTimeout(() => {
      router.push(`/${role}`)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 dark:from-gray-900 dark:via-slate-900 dark:to-black relative overflow-hidden transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/20 dark:bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md space-y-8">
          {/* App Header */}
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-full p-4 border border-white/20 dark:border-white/10">
                <Scale className="h-12 w-12 text-white mx-auto" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 dark:from-gray-100 dark:to-blue-300 bg-clip-text text-transparent">
                LegalAI FIR Assistant
              </h1>
              <div className="flex items-center justify-center space-x-1">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <p className="text-blue-100 dark:text-blue-200 text-sm">AI-Powered Legal Intelligence</p>
                <Sparkles className="h-4 w-4 text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Role Selection Cards */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white mb-2">Choose Your Role</h2>
              <p className="text-blue-200 dark:text-blue-300 text-sm">
                Select your role to access personalized features
              </p>
            </div>

            {/* Police Officer Card */}
            <Card
              className={`cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden ${
                selectedRole === "police"
                  ? "ring-2 ring-blue-400 shadow-2xl scale-105 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 dark:from-blue-600/30 dark:to-indigo-600/30"
                  : "bg-white/10 dark:bg-white/5 hover:bg-white/15 dark:hover:bg-white/10"
              } backdrop-blur-lg border border-white/20 dark:border-white/10`}
              onClick={() => handleRoleSelection("police")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-600/20 dark:to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    <p className="text-blue-200 dark:text-blue-300 text-sm leading-relaxed">
                      Advanced FIR tools, case management, and legal database access
                    </p>
                    <div className="flex items-center mt-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-xs text-blue-200 dark:text-blue-300 ml-2">Professional Suite</span>
                    </div>
                  </div>
                  <div className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Citizen Card */}
            <Card
              className={`cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden ${
                selectedRole === "citizen"
                  ? "ring-2 ring-emerald-400 shadow-2xl scale-105 bg-gradient-to-br from-emerald-600/20 to-green-600/20 dark:from-emerald-600/30 dark:to-green-600/30"
                  : "bg-white/10 dark:bg-white/5 hover:bg-white/15 dark:hover:bg-white/10"
              } backdrop-blur-lg border border-white/20 dark:border-white/10`}
              onClick={() => handleRoleSelection("citizen")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-green-600/10 dark:from-emerald-600/20 dark:to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 p-4 rounded-full shadow-lg">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">Citizen</h3>
                    <p className="text-blue-200 dark:text-blue-300 text-sm leading-relaxed">
                      File complaints, know your rights, and get instant legal guidance
                    </p>
                    <div className="flex items-center mt-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-xs text-blue-200 dark:text-blue-300 ml-2">User Friendly</span>
                    </div>
                  </div>
                  <div className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center space-y-2">
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
