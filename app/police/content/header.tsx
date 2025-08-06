"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Shield, ArrowLeft, Clock } from "lucide-react";

export const Header: React.FC = () => {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Time in 12-hour format with AM/PM
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);

      // Date as e.g. "Sat, Aug 2"
      const dateString = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      setCurrentDate(dateString);

      // Greeting logic
      const hour = now.getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting("Good morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good afternoon");
      } else if (hour >= 17 && hour < 21) {
        setGreeting("Good evening");
      } else {
        setGreeting("Good night");
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push("/")}
          className="hidden sm:block text-blue-300 dark:text-blue-400 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
        </Button>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-full">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
          <div>
            <span className="font-bold text-white text-lg">LegalAI FIR Assistant</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-blue-300 dark:text-blue-400">Professional Mode</span>
            </div>
          </div>
        </div>

        <ThemeToggle />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="text-blue-200 dark:text-blue-300 font-medium">
            {greeting}, Officer
          </p>
          <p className="text-xs text-blue-300 dark:text-blue-400">Badge #12345 • Mumbai Police</p>
        </div>
        <div className="flex items-center space-x-4 text-xs text-blue-300 dark:text-blue-400">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>
              {currentTime} • {currentDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
