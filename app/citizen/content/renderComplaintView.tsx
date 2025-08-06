"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Mic,
  Send,
  Zap,
} from "lucide-react";

// Define the type for legal sections
interface LegalSection {
  section: string;
  title: string;
  description: string;
  penalty: string;
  category: "offense" | "procedure" | string;
}

const legalSections: LegalSection[] = [
  {
    section: "154",
    title: "Filing FIR",
    description: "How to file a First Information Report",
    penalty: "N/A",
    category: "procedure",
  },
  {
    section: "323",
    title: "Simple Hurt",
    description: "Causing hurt to someone",
    penalty: "Up to 1 year imprisonment",
    category: "offense",
  },
  {
    section: "379",
    title: "Theft",
    description: "Taking someone's property without consent",
    penalty: "Up to 3 years imprisonment",
    category: "offense",
  },
];

const RenderComplaintView: React.FC = () => {
  const [complaintText, setComplaintText] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <div className="space-y-6 pb-24">
      {/* Complaint Form */}
      <Card className="shadow-xl border-0 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
          <div className="bg-white dark:bg-gray-700 rounded-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl mr-3">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                File a Complaint
                <Badge className="ml-auto bg-blue-100 text-blue-700">AI Assisted</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                  Complaint Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl"
                >
                  <option>Select complaint type</option>
                  <option>🔒 Theft</option>
                  <option>💰 Fraud</option>
                  <option>👥 Harassment</option>
                  <option>🚗 Traffic Violation</option>
                  <option>📱 Cyber Crime</option>
                  <option>📋 Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                  Describe the Incident
                </label>
                <div className="relative">
                  <Textarea
                    placeholder="Please describe the incident in detail..."
                    value={complaintText}
                    onChange={(e) => setComplaintText(e.target.value)}
                    className="min-h-[140px] pr-14 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl"
                  />
                  <Button
                    size="sm"
                    className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-500"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                  Incident Location
                </label>
                <Input
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl h-12"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 rounded-xl">
                <Send className="h-5 w-5 mr-2" />
                Submit Complaint
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>

      {/* AI Suggestions */}
      <Card className="shadow-lg border-0 dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center">
            <Zap className="h-5 w-5 mr-2 text-yellow-500" />
            AI Legal Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {legalSections.map((section, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-blue-100 dark:from-gray-700 dark:to-blue-700 dark:border-blue-300"
            >
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium">
                  Section {section.section}
                </Badge>
                <Badge
                  variant="outline"
                  className={
                    section.category === "offense"
                      ? "border-red-200 text-red-600"
                      : "border-green-200 text-green-600"
                  }
                >
                  {section.category}
                </Badge>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">{section.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{section.description}</p>
              {section.penalty !== "N/A" && (
                <p className="text-xs text-red-600 font-medium">⚖️ Penalty: {section.penalty}</p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RenderComplaintView;
