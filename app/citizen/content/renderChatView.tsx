"use client";

import React, { useState } from "react";
import {
  FileText,
  Shield,
  AlertCircle,
  Scale,
  MessageCircle,
  Send,
  Zap,
  Heart,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define type for quickActions
interface QuickAction {
  id: string;
  title: string;
  icon: React.ElementType;
  gradient: string;
  description: string;
  stats: string;
}

const ChatView: React.FC = () => {
  const [complaintText, setComplaintText] = useState<string>("");
  const [activeView, setActiveView] = useState<string>("home");
  const [expandedRight, setExpandedRight] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const quickActions: QuickAction[] = [
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

  return (
    <div className="space-y-6 pb-24">
      {/* AI Chat Header */}
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
                    <p className="text-gray-800 font-medium mb-1">
                      👋 Hello! I'm your AI Legal Assistant
                    </p>
                    <p className="text-gray-900 text-sm">
                      I can help you with legal questions, rights information, and complaint guidance. How can I assist
                      you today?
                    </p>
                  </div>
                </div>
              </div>

              {/* Input Field */}
              <div className="flex space-x-3">
                <Input
                  placeholder="Ask me anything about legal matters..."
                  className="border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 flex-1 h-12"
                />
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Send className="h-5 w-5" />
                </Button>
              </div>

              {/* Quick Questions */}
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

      {/* Chat Feature Stats */}
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
  );
};

export default ChatView;
