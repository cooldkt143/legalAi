import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const legalSections = [
  {
    code: "CrPC 154",
    codeColor: "bg-purple-600",
    usage: "high usage",
    usageColor: "bg-green-600",
    title: "Information in cognizable cases",
    details:
      "Section 154 mandates that every information relating to a cognizable offence must be recorded in writing by a police officer. It ensures timely registration of crimes and is crucial for initiating a police investigation. The informant is entitled to receive a copy of the FIR. If a police officer refuses to register the complaint, the aggrieved party may approach a senior officer. This section is the foundation of procedural justice, ensuring access to legal remedies and protection of victims' rights under the criminal justice system.",
  },
  {
    code: "IPC 302",
    codeColor: "bg-pink-600",
    usage: "high usage",
    usageColor: "bg-green-600",
    title: "Punishment for murder",
    details: "This section prescribes punishment for committing the offence of murder, which may extend to death penalty or life imprisonment.",
  },
  {
    code: "IPC 375",
    codeColor: "bg-pink-600",
    usage: "high usage",
    usageColor: "bg-green-600",
    title: "Rape",
    details: "Defines the offence of rape and prescribes punishment. This is a critical section for safeguarding women's rights.",
  },
  {
    code: "CrPC 161",
    codeColor: "bg-purple-600",
    usage: "medium usage",
    usageColor: "bg-blue-600",
    title: "Examination of witnesses by police",
    details: "Empowers police officers to examine witnesses orally during investigation. However, the witness is not bound to sign any written statement.",
  },
  {
    code: "IPC 420",
    codeColor: "bg-pink-600",
    usage: "high usage",
    usageColor: "bg-green-600",
    title: "Cheating and dishonestly inducing delivery of property",
    details: "Punishes acts of cheating, which results in wrongful gain to the accused and wrongful loss to another person.",
  },
  {
    code: "CrPC 41",
    codeColor: "bg-purple-600",
    usage: "high usage",
    usageColor: "bg-green-600",
    title: "When police may arrest without warrant",
    details: "Provides conditions under which a police officer can arrest a person without prior approval from a magistrate or a warrant.",
  },
];

const OfficerLegal = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full px-2 sm:px-2 lg:px-2 py-6 pt-10">
      {/* Search bar */}
      <div className="relative w-full mb-6">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search IPC, CrPC sections, or rights ..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                     text-gray-900 dark:text-gray-100 placeholder-gray-500 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Legal Sections */}
      <div className="space-y-4">
        {legalSections.map((section, idx) => (
          <div
            key={idx}
            className="w-full rounded-lg bg-gray-100 dark:bg-gray-900 
                       border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="flex justify-between items-center w-full px-4 py-3"
            >
              <div>
                {/* Code & Usage */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-semibold text-white ${section.codeColor}`}
                  >
                    {section.code}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-semibold text-white ${section.usageColor}`}
                  >
                    {section.usage}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 text-left">
                  {section.title}
                </h2>
              </div>

              {/* Expand/Collapse Icon */}
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {/* Details (collapsible) */}
            {openIndex === idx && (
              <div className="px-4 pb-4 text-sm text-gray-700 dark:text-gray-300">
                {section.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficerLegal;
