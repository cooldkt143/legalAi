import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const OfficerGenerate = () => {
  const [firNumber] = useState(
    `FIR-${new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 12)}`
  );

  return (
    <div className="pt-10 w-full">
      <div className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-green-600 p-2 rounded-full text-white">📄</span>
          <h2 className="text-lg font-semibold">Smart FIR Generator</h2>
        </div>

        {/* FIR Number & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">FIR Number</label>
            <input
              type="text"
              value={firNumber}
              readOnly
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none 
                         focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date & Time</label>
            <input
              type="datetime-local"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none 
                         focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Complainant Details */}
        <h3 className="text-md font-semibold mb-2">Complainant Details</h3>
        <div className="space-y-3 mb-6">
          <input
            type="text"
            placeholder="Full name of complainant"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none 
                       focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
          />
          <input
            type="text"
            placeholder="Address of complainant"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none 
                       focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
          />
          <input
            type="text"
            placeholder="Phone number of complainant"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none 
                       focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Incident Description */}
        <h3 className="text-md font-semibold mb-2">Incident Description</h3>
        <textarea
          placeholder="Detailed description of the incident with all relevant facts..."
          className="w-full h-32 lg:h-40 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none resize-none 
                     focus:border-blue-500 dark:focus:border-blue-500 transition-colors mb-6"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 
                             text-white font-medium py-3 rounded-lg transition">
            <CheckCircle className="w-5 h-5" />
            Generate FIR
          </button>
          <button className="flex-1 border border-gray-300 dark:border-gray-700 
                             bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
                             text-gray-900 dark:text-gray-100 font-medium py-3 rounded-lg transition">
            Save Template Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficerGenerate;