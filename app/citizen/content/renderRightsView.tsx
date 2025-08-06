import React, { useState } from "react";
import {
  FileText,
  Shield,
  Scale,
  Search,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  LucideIcon,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Define the structure of a right item
interface Right {
  id: string;
  title: string;
  summary: string;
  details: string;
  icon: LucideIcon; // From lucide-react, for dynamic icon usage
  priority: "high" | "medium" | "low";
}

const RightsView: React.FC = () => {
  const [activeView, setActiveView] = useState<string>("home");
  const [complaintText, setComplaintText] = useState<string>("");
  const [expandedRight, setExpandedRight] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const rights: Right[] = [
    {
      id: "arrest",
      title: "Rights During Arrest",
      summary: "Essential rights when being arrested",
      details:
        "You have the right to know the reason for arrest, right to legal representation, right to inform family members, and right to medical examination if injured.",
      icon: Shield,
      priority: "high",
    },
    {
      id: "bail",
      title: "Right to Bail",
      summary: "Understanding bail procedures & rights",
      details:
        "Bail is generally available for most offenses. You have the right to apply for bail, and in many cases, it cannot be unreasonably denied.",
      icon: Scale,
      priority: "medium",
    },
    {
      id: "fir",
      title: "FIR Filing Rights",
      summary: "Your rights regarding FIR registration",
      details:
        "Police cannot refuse to register an FIR for cognizable offenses. You have the right to get a copy of the FIR and can approach higher authorities if FIR is not registered.",
      icon: FileText,
      priority: "high",
    },
  ];

  return (
    <div className="space-y-6 pb-24">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search your rights..."
          className="pl-12 h-14 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Rights List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Know Your Rights</h3>
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
            <Shield className="h-3 w-3 mr-1" />
            Protected
          </Badge>
        </div>

        {rights
          .filter((right) =>
            right.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((right) => (
            <Card
              key={right.id}
              className="overflow-hidden shadow-lg border-0 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
            >
              <CardContent className="p-0">
                <div
                  className="p-6 cursor-pointer hover:from-emerald-50 hover:to-green-50 transition-all duration-300"
                  onClick={() =>
                    setExpandedRight(expandedRight === right.id ? null : right.id)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <div
                        className={`bg-gradient-to-br ${
                          right.priority === "high"
                            ? "from-red-500 to-pink-500"
                            : "from-emerald-500 to-green-500"
                        } p-3 rounded-xl shadow-lg`}
                      >
                        <right.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                            {right.title}
                          </h4>
                          <Badge
                            className={`${
                              right.priority === "high"
                                ? "bg-red-100 text-red-700 border-red-200"
                                : "bg-blue-100 text-blue-700 border-blue-200"
                            }`}
                          >
                            {right.priority}
                          </Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {right.summary}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedRight === right.id ? (
                        <ChevronDown className="h-6 w-6 text-emerald-500" />
                      ) : (
                        <ChevronRight className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedRight === right.id && (
                  <div className="px-6 pb-6 bg-gradient-to-r from-emerald-50 to-green-50 border-t border-emerald-100">
                    <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                      {right.details}
                    </p>
                    <div className="flex items-center space-x-2 mt-3">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-xs text-emerald-600 font-medium">
                        Constitutional Right
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default RightsView;
