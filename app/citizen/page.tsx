"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MessageCircle, ArrowLeft, Scale, Home, Shield, FileText } from "lucide-react";

import RenderHomeView from "./content/RenderHomeView";
import RenderComplaintView from "./content/RenderComplaintView";
import RenderRightsView from "./content/RenderRightsView";
import RenderPenaltyView from "./content/RenderPenaltyView";
import RenderChatView from "./content/RenderChatView";


export default function CitizenDashboard() {
  const router = useRouter();
  const [activeView, setActiveView] = useState("home");

  const renderBottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white/20 dark:bg-gray-900/20 backdrop-blur-md border-t border-gray-200/30 dark:border-gray-700/30 px-4 py-3 shadow-lg z-20">
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
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-black transition-all duration-500">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 p-4 sticky top-0 z-20 shadow-lg">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/")}
            className="hidden sm:block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
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

      {/* Main View */}
      <div className="p-4">
        {activeView === "home" && <RenderHomeView setActiveView={setActiveView} />}
        {activeView === "complaint" && <RenderComplaintView />}
        {activeView === "rights" && <RenderRightsView />}
        {activeView === "penalty" && <RenderPenaltyView />}
        {activeView === "chat" && <RenderChatView />}

      </div>

      {/* Navigation */}
      {renderBottomNav()}

      {/* Floating Chat Button */}
      {activeView !== "chat" && (
        <Button
          className="fixed bottom-24 right-6 rounded-full w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
          onClick={() => setActiveView("chat")}
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>
      )}
    </div>
  );
}
