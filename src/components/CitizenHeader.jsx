import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, User, Settings, LogOut , Activity , UserCircle } from "lucide-react";
import ThemeToggle from "./themeToggle";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CitizenHeader = ({ user }) => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [currentTime, setCurrentTime] = useState("");
  const [greeting, setGreeting] = useState("");
  const [openProfile, setOpenProfile] = useState(false);

  // extract first name safely
  const firstName = user?.name ? user.name : "User";

  const getGreeting = (hour) => {
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 13) return "Good Noon";
    if (hour >= 13 && hour < 18) return "Good Afternoon";
    if (hour >= 18 && hour < 21) return "Good Evening";
    return "Good Night";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        `${now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })} • ${now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}`
      );
      setGreeting(getGreeting(now.getHours()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const avatarMotion = {
    scale: openProfile ? 1.15 : 1,
    boxShadow: openProfile
      ? "0 0 0 4px rgba(59,130,246,0.35)"
      : "0 0 0 0px rgba(0,0,0,0)",
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[150px] sm:h-[120px] px-4 sm:px-6
      bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300
      dark:from-gray-900 dark:via-black dark:to-gray-900
      shadow-md z-50">

      <div className="w-full h-full flex items-center justify-between relative">

        {/* LEFT */}
        <div className="flex flex-col justify-center">

          {/* Mobile top row */}
          <div className="flex items-center gap-2 sm:hidden">
            <motion.div
              animate={avatarMotion}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              onClick={() => setOpenProfile(true)}
              className="w-10 h-10 rounded-full flex items-center justify-center
              bg-gradient-to-r from-blue-600 to-red-600"
            >
              <User className="w-5 h-5 text-white" />
            </motion.div>

            <div>
              <h1 className="font-bold text-sm">LegalAI FIR Assistant</h1>
              <span className="text-xs text-green-600 dark:text-green-400">
                ● Citizen Mode
              </span>
            </div>
          </div>

          {/* Arrow + greeting (MOBILE ONLY) */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer mt-5 sm:hidden"
          >
            <ArrowLeft className="w-4 h-4" />
            <div>
              <p className="text-xs font-semibold">
                {greeting}, {firstName}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {user?.email || "user@email.com"}
              </p>
            </div>
          </div>

          {/* Desktop left content */}
          <div
            onClick={() => navigate("/")}
            className="hidden sm:flex items-center gap-3 cursor-pointer mt-5"
          >
            <ArrowLeft className="w-4 h-4" />
            <div>
              <h1 className="font-bold text-sm sm:text-base ml-1">
                LegalAI FIR Assistant
              </h1>
              <span className="text-xs sm:text-sm text-green-600 dark:text-green-400 ml-1">
                ● Citizen Mode
              </span>
            </div>
          </div>

        </div>

        {/* CENTER (DESKTOP USER ONLY) */}
        <div className="hidden sm:flex flex-col items-center text-center">
          <motion.div
            animate={avatarMotion}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            onClick={() => setOpenProfile(true)}
            className="w-10 h-10 mb-2 rounded-full flex items-center justify-center
            bg-gradient-to-r from-blue-600 to-red-600 cursor-pointer"
          >
            <User className="w-5 h-5 text-white" />
          </motion.div>

          <p className="font-semibold text-sm sm:text-base">
            {greeting}, {firstName.split(" ")[0]}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            {user?.email || "user@email.com"}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end gap-1">
          <ThemeToggle />
          <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mt-12">
            {currentTime}
          </p>
        </div>

        {/* DROPDOWN */}
        <AnimatePresence>
          {openProfile && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="
                absolute top-[160px] sm:top-[130px]
                left-0 sm:left-[43%]
                sm:-translate-x-1/2
                w-[70vw] sm:w-[290px]
                rounded-xl bg-white dark:bg-gray-900
                shadow-xl border border-gray-200 dark:border-gray-700
                overflow-hidden
              "
            >
              <div className="p-4 flex items-center gap-3 border-b">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="font-semibold">{firstName}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
              </div>

              <button
                onClick={() => navigate("/details")}
                className="w-full px-4 py-3 flex items-center gap-2
                hover:bg-gray-100 dark:hover:bg-gray-800 text-sm "
              >
                <UserCircle className="w-4 h-4" />
                User Details
              </button>

              <button
                onClick={() => navigate("/activity")}
                className="w-full px-4 py-3 flex items-center gap-2
                hover:bg-gray-100 dark:hover:bg-gray-800 text-sm border-b"
              >
                <Activity className="w-4 h-4" />
                Your Activity
              </button>

              <button
                onClick={() => navigate("/settings")}
                className="w-full px-4 py-3 flex items-center gap-2
                hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>

              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
                className="w-full px-4 py-3 flex items-center gap-2
                hover:bg-red-50 dark:hover:bg-red-900/30
                text-sm text-red-600"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default CitizenHeader;
