import React from "react";
import { Mic, Send } from "lucide-react";

const OfficerAssistant = () => {
  return (
    <div className="pt-10 w-full">
      <div className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className="bg-blue-600 p-2 rounded-full text-white">🎯</span>
            AI-Powered Incident Analysis
          </h2>
          <span className="text-xs px-2 py-1 bg-green-600 text-white rounded-full">
            Beta
          </span>
        </div>

        {/* Textarea */}
        <div className="relative">
          <textarea
            placeholder="Describe the incident in detail..."
            className="w-full h-32 lg:h-64 
                       bg-gray-100 dark:bg-gray-800 
                       text-gray-900 dark:text-gray-100 
                       rounded-lg p-4 pr-12 resize-none 
                       outline-none border border-gray-300 dark:border-gray-700 
                       focus:border-blue-500 dark:focus:border-blue-500 
                       transition-colors"
          />
          <button className="absolute bottom-3 right-3 bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition">
            <Mic className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Submit button */}
        <button className="mt-6 w-full flex items-center justify-center gap-2 
                           bg-blue-600 hover:bg-blue-700 
                           text-white font-medium py-3 rounded-lg 
                           transition">
          <Send className="w-5 h-5" />
          Analyze Incident with AI
        </button>
      </div>
    </div>
  );
};

export default OfficerAssistant;