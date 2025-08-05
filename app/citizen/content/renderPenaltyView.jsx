"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  AlertCircle,
  Search,
} from "lucide-react";

const legalSections = [
  {
    section: "279",
    title: "Rash Driving",
    description: "Driving in a manner that endangers human life",
    penalty: "Up to 6 months imprisonment or ₹1,000 fine",
    category: "offense",
  },
  {
    section: "283",
    title: "Obstruction in Public Way",
    description: "Causing obstruction or inconvenience on public roads",
    penalty: "₹200 fine",
    category: "offense",
  },
  {
    section: "185 (MV Act)",
    title: "Drunk Driving",
    description: "Driving under the influence of alcohol",
    penalty: "₹10,000 fine or imprisonment up to 6 months",
    category: "traffic",
  },
  {
    section: "66C (IT Act)",
    title: "Identity Theft",
    description: "Fraudulent use of someone's identity online",
    penalty: "Up to 3 years imprisonment and ₹1 lakh fine",
    category: "cyber",
  },
];

const RenderPenaltyView = () => {
  const [violationType, setViolationType] = useState("");

  return (
    <div className="space-y-6 pb-24">
      {/* Penalty Checker Form */}
      <Card className="shadow-xl border-0 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-1">
          <div className="bg-white dark:bg-gray-700 rounded-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl mr-3">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                Penalty Checker
                <Badge className="ml-auto bg-orange-100 text-orange-700">
                  Updated Daily
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                  Select Violation Type
                </label>
                <select
                  value={violationType}
                  onChange={(e) => setViolationType(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                >
                  <option value="">Select violation type</option>
                  <option value="traffic">🚗 Traffic Violation</option>
                  <option value="public">🔊 Public Disturbance</option>
                  <option value="property">🏠 Property Damage</option>
                  <option value="financial">💰 Financial Fraud</option>
                  <option value="cyber">📱 Cyber Crime</option>
                  <option value="other">📋 Other</option>
                </select>
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Search className="h-5 w-5 mr-2" />
                Check Penalty
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>

      {/* Common Penalties */}
      <Card className="shadow-lg border-0 dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
            Common Penalties & Fines
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {legalSections.map((section, index) => (
            <div
              key={index}
              className="p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-2 border-orange-100 hover:border-orange-200 transition-all duration-300 dark:bg-gradient-to-r dark:from-orange-700 dark:to-red-700 dark:border-orange-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                  {section.title}
                </h4>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium">
                  Section {section.section}
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                {section.description}
              </p>
              {section.penalty !== "N/A" && (
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <p className="text-sm font-bold text-red-700">
                    Penalty: {section.penalty}
                  </p>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RenderPenaltyView;
