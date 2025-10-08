import React from "react";
import { Send, Sparkles, Heart } from "lucide-react";
import ThemeToggle from "../themeToggle";

const CitizenChat = () => {
  return (
    <div className=" flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-8 transition-colors overflow-hidden">
      {/* Chat Container */}
      <div className="flex-1 w-full bg-white dark:bg-gray-800 border border-pink-500 rounded-2xl p-6 sm:p-8 shadow-lg overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
              <span className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                💬
              </span>
              AI Legal Assistant
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-sm">●</span>
            <span className="text-sm">Online</span>
          </div>
        </div>

        {/* Greeting Message */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl p-4 sm:p-5 mb-6">
          <p className="flex items-center gap-2 text-base sm:text-lg">
            <Sparkles className="w-5 h-5" />
            <span>
              <strong>Hello!</strong> I'm your AI Legal Assistant.
            </span>
          </p>
          <p className="text-sm sm:text-base mt-1 opacity-90">
            I can help you with legal questions, rights information, and
            complaint guidance. How can I assist you today?
          </p>
        </div>

        {/* Input Section */}
        <div className="flex items-center bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden mb-6 w-full">
          <input
            type="text"
            placeholder="Ask me anything about legal matters..."
            className="flex-1 bg-transparent px-4 py-3 outline-none text-gray-900 dark:text-gray-100"
          />
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 sm:p-4 hover:opacity-90 transition">
            <Send size={18} />
          </button>
        </div>

        {/* Quick Questions */}
        <div>
          <p className="text-sm sm:text-base font-medium mb-3 flex items-center gap-1">
            💡 Quick Questions:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "How to file FIR?",
              "Bail process",
              "Legal aid",
              "Traffic fines",
              "Property rights",
              "Consumer protection",
            ].map((q, i) => (
              <button
                key={i}
                className="px-4 py-2 text-sm rounded-full border border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-800 transition"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div className="rounded-xl p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md w-full">
          <Sparkles className="w-6 h-6 mb-2" />
          <h3 className="text-lg font-semibold">Instant</h3>
          <p className="text-sm opacity-90">Responses</p>
        </div>

        <div className="rounded-xl p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md w-full">
          <Heart className="w-6 h-6 mb-2" />
          <h3 className="text-lg font-semibold">24/7</h3>
          <p className="text-sm opacity-90">Available</p>
        </div>
      </div>
    </div>
  );
};

export default CitizenChat;