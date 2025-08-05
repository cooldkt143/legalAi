"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scale,
  Sparkles,
  Star,
  Zap,
  CheckCircle,
  Users,
  Award,
  ChevronRight,
  Shield,
  FileText,
  AlertCircle,
} from "lucide-react";

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
];

const RenderHomeView = ({ setActiveView }) => {
  return (
    <div className="space-y-6 pb-40 sm:pb-24"> {/* FIX: Prevent overlap with footer */}
      {/* Hero Section */}
      <Card className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 border-0 shadow-2xl overflow-hidden relative">
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

      {/* Quick Actions */}
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
              className="cursor-pointer hover:shadow-xl transition-all duration-500 group border-0 shadow-lg overflow-hidden relative"
              onClick={() => setActiveView(action.id)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-br ${action.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition`}>
                    <action.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{action.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{action.description}</p>
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

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="bg-green-500 p-3 rounded-full w-fit mx-auto mb-2">
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-green-700">10K+</p>
            <p className="text-xs text-green-600">Active Users</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="bg-blue-500 p-3 rounded-full w-fit mx-auto mb-2">
              <Award className="h-5 w-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-blue-700">24/7</p>
            <p className="text-xs text-blue-600">Support</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RenderHomeView;
