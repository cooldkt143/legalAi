import React, { useState, useEffect } from "react";
import { Search, Gavel } from "lucide-react";
import recordData from "../../data/record.json";

const OfficerRecord = () => {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setRecords(recordData);
  }, []);

  // Filter based on FIR number or complainant's name
  const filteredRecords = records.filter(
    (record) =>
      record.firNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.complainant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Records List */}
      <div className="space-y-4">
        {filteredRecords.map((record, idx) => (
          <div
            key={idx}
            className="flex justify-between items-start w-full p-4 rounded-lg bg-gray-100 
                       dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div>
              {/* FIR Number */}
              <span className="px-2 py-1 rounded-md text-xs font-semibold bg-yellow-500 text-black">
                {record.firNumber}
              </span>

              {/* Complainant Name */}
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-2">
                {record.complainant.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                {record.complainant.description}
              </p>

              {/* Date */}
              {record.dateTime && (
                <p className="text-xs text-gray-500 mt-2">
                  Registered Date: {record.dateTime}
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
