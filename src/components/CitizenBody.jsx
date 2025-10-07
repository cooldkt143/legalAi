import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Shield, FileText, MessageCircle, User } from "lucide-react";
import OfficerHeader from "../components/CitizenHeader";
import CitizenMain from "./citizen/CitizenMain";
import CitizenRights from "./citizen/CitizenRights";
import CitizenComplaint from "./citizen/CitizenComplaint";
import CitizenChat from "./citizen/CitizenChat";
import CitizenProfile from "./citizen/CitizenProfile";

const CitizenBody = () => {
  const tabs = [
    { name: "Home", icon: Home, component: <CitizenMain /> },
    { name: "Rights", icon: Shield, component: <CitizenRights /> },
    { name: "Complaint", icon: FileText, component: <CitizenComplaint /> },
    { name: "Chat", icon: MessageCircle, component: <CitizenChat /> },
    { name: "Profile", icon: User, component: <CitizenProfile /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors flex flex-col pt-20"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <OfficerHeader />

      {/* Main Content */}
      <div className="flex-grow flex items-center p-4 sm:p-10 pb-24">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.name && (
                <motion.div
                  key={tab.name}
                  variants={tabVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-5xl"
                >
                  {tab.component}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 z-50">
        <div className="flex justify-around items-center h-20">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.name;

            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex flex-col items-center justify-center gap-1 text-sm transition ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                    isActive
                      ? "bg-blue-100 dark:bg-blue-900"
                      : "bg-transparent"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                {tab.name}
              </button>
            );
          })}
        </div>
      </footer>
    </motion.div>
  );
};

export default CitizenBody;
