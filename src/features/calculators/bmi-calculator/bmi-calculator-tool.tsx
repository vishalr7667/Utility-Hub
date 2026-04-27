"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function BmiCalculatorTool() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const w = Number(weight);
  const h = Number(height);

  let bmi: number | null = null;
  let category = "";
  let categoryColor = "text-gray-900";

  if (w > 0 && h > 0) {
    const heightInMeters = h / 100;
    bmi = w / (heightInMeters * heightInMeters);

    if (bmi < 18.5) {
      category = "Underweight";
      categoryColor = "text-blue-600";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal weight";
      categoryColor = "text-green-600";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
      categoryColor = "text-yellow-600";
    } else {
      category = "Obese";
      categoryColor = "text-red-600";
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-6">
        <div>
          <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 70"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="height" className="block text-sm font-semibold text-gray-700 mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 175"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          />
        </div>

        {bmi !== null && (
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">
              Your BMI Result
            </h3>
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {bmi.toFixed(1)}
            </div>
            <div className={cn("text-xl font-bold uppercase tracking-tight", categoryColor)}>
              {category}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              A healthy BMI for adults typically ranges from 18.5 to 24.9.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
