import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OfficerAssistant from "./officer/OfficerAssistant";
import OfficerGenerate from "./officer/OfficerGenerate";
import OfficerRecord from "./officer/OfficerRecord";
import OfficerLegal from "./officer/OfficerLegal";
import OfficerProfile from "./officer/OfficerProfile";
import ThemeToggle from "./themeToggle";

const OfficerBody = () => {
  const tabs = [
    { name: "Assistant", component: <OfficerAssistant /> },
    { name: "Generate", component: <OfficerGenerate /> },
    { name: "Record", component: <OfficerRecord /> },
    { name: "Legal", component: <OfficerLegal /> },
    { name: "Profile", component: <OfficerProfile /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  // Tab content animation variants
  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // Page fade-in animation
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Theme toggle button */}
      <ThemeToggle />

      {/* Tabs */}
      <div className="flex border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 sticky top-0 z-10">
        {tabs.map((tab) => (
          <motion.button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`
              flex-1 text-center px-4 py-3 font-medium text-sm sm:text-base transition
              rounded-t-md
              ${
                activeTab === tab.name
                  ? "bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-100"
                  : "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }
            `}
            whileTap={{ scale: 0.95 }}
            layout
          >
            {tab.name}
          </motion.button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-4 sm:p-6">
        <AnimatePresence exitBeforeEnter>
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
                >
                  {tab.component}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default OfficerBody;
