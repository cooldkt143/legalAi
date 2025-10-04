import React from "react";
import { Search, Gavel } from "lucide-react";

const records = [
  {
    fir: "FIR-20250807-182727",
    relevance: "medium relevance",
    relevanceColor: "bg-blue-600",
    name: "Rohit Prasad Padhy",
    description: "murder in my locality",
    date: "",
  },
  {
    fir: "FIR-20250807-180459",
    relevance: "medium relevance",
    relevanceColor: "bg-blue-600",
    name: "Deepak Kumar Tripathy",
    description: "Theft of my motorcycle",
    date: "2025-08-07T18:04",
  },
  {
    fir: "FIR-20250802-134807",
    relevance: "high relevance",
    relevanceColor: "bg-green-600",
    name: "Rajendra Rao",
    description:
      "Landmark judgment on digital evidence admissibility under IPC and CrPC sections. Court recognized digital trails as valid primary evidence, significantly impacting cybercrime investigations.",
    date: "2023-08-15",
  },
];

const OfficerRecord = () => {
  return (
    <div className="w-full px-2 sm:px-2 lg:px-2 py-6 pt-10">
      {/* Search bar */}
      <div className="relative w-full mb-6">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by FIR number or Complainant's name..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                     text-gray-900 dark:text-gray-100 placeholder-gray-500 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Records List */}
      <div className="space-y-4">
        {records.map((record, idx) => (
          <div
            key={idx}
            className="flex justify-between items-start w-full p-4 rounded-lg bg-gray-100 
                       dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div>
              {/* FIR & Relevance */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded-md text-xs font-semibold bg-yellow-500 text-black">
                  {record.fir}
                </span>
                <span
                  className={`px-2 py-1 rounded-md text-xs font-semibold text-white ${record.relevanceColor}`}
                >
                  {record.relevance}
                </span>
              </div>

              {/* Name */}
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {record.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {record.description}
              </p>

              {/* Date */}
              {record.date && (
                <p className="text-xs text-gray-500 mt-2">
                  Registered Date: {record.date}
                </p>
              )}
            </div>

            {/* Icon */}
            <div className="flex-shrink-0">
              <button className="p-2 rounded-full bg-yellow-600/20 text-yellow-500 hover:bg-yellow-600/30 transition">
                <Gavel className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficerRecord;
