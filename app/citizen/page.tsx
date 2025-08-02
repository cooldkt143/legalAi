"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Home,
  Shield,
  FileText,
  MessageCircle,
  Mic,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  Scale,
  Send,
  Search,
  Heart,
  Star,
  Zap,
  CheckCircle,
  Clock,
  Users,
  Award,
  Sparkles,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function CitizenDashboard() {
  const router = useRouter()
  const [activeView, setActiveView] = useState("home")
  const [complaintText, setComplaintText] = useState("")
  const [expandedRight, setExpandedRight] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const quickActions = [
    {
      id: "complaint",
      title: "File a Complaint",
      icon: FileText,
      gradient: "from-blue-500 to-cyan-500",
      description: "Report incidents with AI assistance",
      stats: "24/7 Available",
    },
    {
      id: "rights",
      title: "Know Your Rights",
      icon: Shield,
      gradient: "from-emerald-500 to-green-500",
      description: "Learn your legal rights & protections",
      stats: "50+ Rights Covered",
    },
    {
      id: "penalty",
      title: "Penalty Checker",
      icon: AlertCircle,
      gradient: "from-orange-500 to-red-500",
      description: "Check fines & penalties instantly",
      stats: "Updated Daily",
    },
  ]

  const rights = [
    {
      id: "arrest",
      title: "Rights During Arrest",
      summary: "Essential rights when being arrested",
      details:
        "You have the right to know the reason for arrest, right to legal representation, right to inform family members, and right to medical examination if injured.",
      icon: Shield,
      priority: "high",
    },
    {
      id: "bail",
      title: "Right to Bail",
      summary: "Understanding bail procedures & rights",
      details:
        "Bail is generally available for most offenses. You have the right to apply for bail, and in many cases, it cannot be unreasonably denied.",
      icon: Scale,
      priority: "medium",
    },
    {
      id: "fir",
      title: "FIR Filing Rights",
      summary: "Your rights regarding FIR registration",
      details:
        "Police cannot refuse to register an FIR for cognizable offenses. You have the right to get a copy of the FIR and can approach higher authorities if FIR is not registered.",
      icon: FileText,
      priority: "high",
    },
  ]

  const legalSections = [
    {
      section: "154",
      title: "Filing FIR",
      description: "How to file a First Information Report",
      penalty: "N/A",
      category: "procedure",
    },
    {
      section: "323",
      title: "Simple Hurt",
      description: "Causing hurt to someone",
      penalty: "Up to 1 year imprisonment",
      category: "offense",
    },
    {
      section: "379",
      title: "Theft",
      description: "Taking someone's property without consent",
      penalty: "Up to 3 years imprisonment",
      category: "offense",
    },
  ]

  const renderBottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50 px-4 py-3 shadow-2xl">
      <div className="flex justify-around">
        {[
          { id: "home", icon: Home, label: "Home", color: "text-blue-600" },
          { id: "rights", icon: Shield, label: "Rights", color: "text-emerald-600" },
          { id: "complaint", icon: FileText, label: "Complaint", color: "text-orange-600" },
          { id: "chat", icon: MessageCircle, label: "Chat", color: "text-purple-600" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`flex flex-col items-center space-y-1 p-3 rounded-xl transition-all duration-300 ${
              activeView === item.id
                ? `${item.color} bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg scale-110`
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{item.label}</span>
            {activeView === item.id && <div className="w-1 h-1 bg-current rounded-full"></div>}
          </button>
        ))}
      </div>
    </div>
  )

  const renderHomeView = () => (
    <div className="space-y-6 pb-24">
      {/* Hero Welcome Section */}
      <Card className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 border-0 shadow-2xl overflow-hidden relative dark:bg-gradient-to-br dark:from-blue-700 dark:via-purple-800 dark:to-pink-700 dark:border-gray-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 right-4 opacity-20">
          <Sparkles className="h-20 w-20 text-white" />
        </div>
        <CardContent className="p-8 relative z-10">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-lg"></div>
              <div className="relative bg-white/20 backdrop-blur-lg p-4 rounded-full border border-white/30">
                <Scale className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Welcome to LegalAI</h2>
              <p className="text-blue-100">Your intelligent legal companion</p>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-300 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-blue-100">Trusted by 10K+ users</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quick Actions</h3>
          <Badge className="bg-green-100 text-green-700 border-green-200">
            <Zap className="h-3 w-3 mr-1" />
            AI Powered
          </Badge>
        </div>

        <div className="grid gap-4">
          {quickActions.map((action) => (
            <Card
              key={action.id}
              className="cursor-pointer hover:shadow-xl transition-all duration-500 hover:scale-105 group border-0 shadow-lg overflow-hidden relative dark:bg-gray-800 dark:border-gray-700"
              onClick={() => setActiveView(action.id)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
              ></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div
                    className={`bg-gradient-to-br ${action.gradient} p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <action.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{action.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{action.description}</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {action.stats}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-green-600">Available</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats & Activity */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg dark:bg-gradient-to-br dark:from-green-700 dark:to-emerald-700 dark:border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="bg-green-500 p-3 rounded-full w-fit mx-auto mb-2">
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-green-700">10K+</p>
            <p className="text-xs text-green-600">Active Users</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-lg dark:bg-gradient-to-br dark:from-blue-700 dark:to-cyan-700 dark:border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="bg-blue-500 p-3 rounded-full w-fit mx-auto mb-2">
              <Award className="h-5 w-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-blue-700">24/7</p>
            <p className="text-xs text-blue-600">Support</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="shadow-lg border-0 dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="pb-3">
          <CardTitle className="text-gray-900 dark:text-white flex items-center">
            <Clock className="h-5 w-5 mr-2 text-blue-600" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="bg-gray-100 p-4 rounded-full w-fit mx-auto mb-3">
              <FileText className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">No recent complaints or queries</p>
            <p className="text-xs text-gray-400 mt-1">Your activity will appear here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderComplaintView = () => (
    <div className="space-y-6 pb-24">
      <Card className="shadow-xl border-0 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
          <div className="bg-white dark:bg-gray-700 rounded-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl mr-3">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                File a Complaint
                <Badge className="ml-auto bg-blue-100 text-blue-700">AI Assisted</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                  Complaint Category
                </label>
                <select className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white dark:bg-gray-700 shadow-sm">
                  <option>Select complaint type</option>
                  <option>🔒 Theft</option>
                  <option>💰 Fraud</option>
                  <option>👥 Harassment</option>
                  <option>🚗 Traffic Violation</option>
                  <option>📱 Cyber Crime</option>
                  <option>📋 Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                  Describe the Incident
                </label>
                <div className="relative">
                  <Textarea
                    placeholder="Please provide detailed information about the incident. Our AI will help suggest relevant legal sections..."
                    value={complaintText}
                    onChange={(e) => setComplaintText(e.target.value)}
                    className="border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none min-h-[140px] pr-14"
                  />
                  <Button
                    size="sm"
                    className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                  Incident Location
                </label>
                <Input
                  placeholder="Enter the location where incident occurred"
                  className="border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 h-12"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Send className="h-5 w-5 mr-2" />
                Submit Complaint
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>

      {/* AI Suggestions */}
      <Card className="shadow-lg border-0 dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center">
            <Zap className="h-5 w-5 mr-2 text-yellow-500" />
            AI Legal Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {legalSections.map((section, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-blue-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-blue-700 dark:border-blue-300"
            >
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium">
                  Section {section.section}
                </Badge>
                <Badge
                  variant="outline"
                  className={`${section.category === "offense" ? "border-red-200 text-red-600" : "border-green-200 text-green-600"}`}
                >
                  {section.category}
                </Badge>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">{section.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{section.description}</p>
              {section.penalty !== "N/A" && (
                <p className="text-xs text-red-600 font-medium">⚖️ Penalty: {section.penalty}</p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )

  const renderRightsView = () => (
    <div className="space-y-6 pb-24">
      <div className="relative">
        <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search your rights..."
          className="pl-12 h-14 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Know Your Rights</h3>
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
            <Shield className="h-3 w-3 mr-1" />
            Protected
          </Badge>
        </div>

        {rights.map((right) => (
          <Card
            key={right.id}
            className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
          >
            <CardContent className="p-0">
              <div
                className="p-6 cursor-pointer hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-300"
                onClick={() => setExpandedRight(expandedRight === right.id ? null : right.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div
                      className={`bg-gradient-to-br ${right.priority === "high" ? "from-red-500 to-pink-500" : "from-emerald-500 to-green-500"} p-3 rounded-xl shadow-lg`}
                    >
                      <right.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">{right.title}</h4>
                        <Badge
                          className={`${right.priority === "high" ? "bg-red-100 text-red-700 border-red-200" : "bg-blue-100 text-blue-700 border-blue-200"}`}
                        >
                          {right.priority}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{right.summary}</p>
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedRight === right.id ? (
                      <ChevronDown className="h-6 w-6 text-emerald-500" />
                    ) : (
                      <ChevronRight className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
              {expandedRight === right.id && (
                <div className="px-6 pb-6 bg-gradient-to-r from-emerald-50 to-green-50 border-t border-emerald-100">
                  <p className="text-gray-700 text-sm mt-4 leading-relaxed">{right.details}</p>
                  <div className="flex items-center space-x-2 mt-3">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs text-emerald-600 font-medium">Constitutional Right</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderPenaltyView = () => (
    <div className="space-y-6 pb-24">
      <Card className="shadow-xl border-0 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-1">
          <div className="bg-white dark:bg-gray-700 rounded-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl mr-3">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                Penalty Checker
                <Badge className="ml-auto bg-orange-100 text-orange-700">Updated Daily</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                  Select Violation Type
                </label>
                <select className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-white shadow-sm">
                  <option>Select violation type</option>
                  <option>🚗 Traffic Violation</option>
                  <option>🔊 Public Disturbance</option>
                  <option>🏠 Property Damage</option>
                  <option>💰 Financial Fraud</option>
                  <option>📱 Cyber Crime</option>
                  <option>📋 Other</option>
                </select>
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Search className="h-5 w-5 mr-2" />
                Check Penalty
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>

      <Card className="shadow-lg border-0 dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
            Common Penalties & Fines
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {legalSections.map((section, index) => (
            <div
              key={index}
              className="p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-2 border-orange-100 hover:border-orange-200 transition-all duration-300 dark:bg-gradient-to-r dark:from-orange-700 dark:to-red-700 dark:border-orange-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{section.title}</h4>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium">
                  Section {section.section}
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">{section.description}</p>
              {section.penalty !== "N/A" && (
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <p className="text-sm font-bold text-red-700">Penalty: {section.penalty}</p>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )

  const renderChatView = () => (
    <div className="space-y-6 pb-24">
      <Card className="shadow-xl border-0 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1">
          <div className="bg-white dark:bg-gray-700 rounded-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl mr-3">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                AI Legal Assistant
                <div className="ml-auto flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <Badge className="bg-green-100 text-green-700">Online</Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 dark:bg-gradient-to-r dark:from-purple-700 dark:to-pink-700 dark:border-purple-300">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-800 font-medium mb-1">👋 Hello! I'm your AI Legal Assistant</p>
                    <p className="text-purple-700 text-sm">
                      I can help you with legal questions, rights information, and complaint guidance. How can I assist
                      you today?
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Input
                  placeholder="Ask me anything about legal matters..."
                  className="border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 flex-1 h-12"
                />
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Send className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💡 Quick Questions:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "How to file FIR?",
                    "Bail process",
                    "Legal aid",
                    "Traffic fines",
                    "Property rights",
                    "Consumer protection",
                  ].map((question) => (
                    <Button
                      key={question}
                      variant="outline"
                      size="sm"
                      className="text-xs rounded-full border-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>

      {/* Chat Features */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-lg dark:bg-gradient-to-br dark:from-blue-700 dark:to-cyan-700 dark:border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="bg-blue-500 p-3 rounded-full w-fit mx-auto mb-2">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <p className="text-sm font-bold text-blue-700">Instant</p>
            <p className="text-xs text-blue-600">Responses</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-lg dark:bg-gradient-to-br dark:from-purple-700 dark:to-pink-700 dark:border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="bg-purple-500 p-3 rounded-full w-fit mx-auto mb-2">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <p className="text-sm font-bold text-purple-700">24/7</p>
            <p className="text-xs text-purple-600">Available</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-black transition-all duration-500">
      {/* Enhanced Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 p-4 sticky top-0 z-20 shadow-lg">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/")}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-full">
                <Scale className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-900 dark:text-white text-lg">LegalAI Assistant</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Citizen Mode</span>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {activeView === "home" && renderHomeView()}
        {activeView === "complaint" && renderComplaintView()}
        {activeView === "rights" && renderRightsView()}
        {activeView === "penalty" && renderPenaltyView()}
        {activeView === "chat" && renderChatView()}
      </div>

      {/* Bottom Navigation */}
      {renderBottomNav()}

      {/* Floating Chat Button (when not in chat view) */}
      {activeView !== "chat" && (
        <Button
          className="fixed bottom-24 right-6 rounded-full w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
          onClick={() => setActiveView("chat")}
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>
      )}
    </div>
  )
}
