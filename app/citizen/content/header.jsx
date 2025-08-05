"use client"; // <-- required in Next.js for client-side navigation

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  const router = useRouter();

  return (
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
            <span className="font-bold text-gray-900 dark:text-white text-lg">
              LegalAI Assistant
            </span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Citizen Mode
              </span>
            </div>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
