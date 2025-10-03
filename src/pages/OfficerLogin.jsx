import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import ThemeToggle from "../components/themeToggle";
import { useNavigate } from "react-router-dom";

const OfficerLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "police" && password === "1234") {
      navigate("/officerHome");
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300
                    dark:from-gray-900 dark:via-slate-900 dark:to-black
                    relative overflow-hidden transition-colors duration-500
                    text-gray-900 dark:text-white">
      <ThemeToggle />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50
                   backdrop-blur-xl p-8 rounded-2xl w-full max-w-md relative"
        style={{
          boxShadow:
            "0 8px 30px rgba(59, 130, 246, 0.3), 0 0 10px rgba(59, 130, 246, 0.2) inset",
        }}
      >
        {/* Shield Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="mx-auto mb-4 w-16 h-16 flex items-center justify-center
                     bg-blue-600 dark:bg-blue-800 rounded-full shadow-lg"
        >
          <Shield className="w-8 h-8 text-white" />
        </motion.div>

        <h2 className="text-2xl font-bold mb-6 text-center">Police Officer Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold
                       transition-colors duration-300"
          >
            Login
          </motion.button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
          Forgot your password? Contact admin.
        </p>
      </motion.div>
    </div>
  );
};

export default OfficerLogin;
