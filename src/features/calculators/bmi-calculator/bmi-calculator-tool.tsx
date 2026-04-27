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
  let categoryColor = "text-[var(--color-text-primary)]";

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
      categoryColor = "text-red-500";
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-6">
        <div>
          <label htmlFor="weight" className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 70"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="height" className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 175"
            className="input-field"
          />
        </div>

        {bmi !== null && (
          <div className="result-card mt-8">
            <h3 className="text-[var(--color-text-muted)] text-sm font-medium uppercase tracking-wider mb-2">
              Your BMI Result
            </h3>
            <div className="text-4xl font-extrabold text-[var(--color-text-primary)] mb-2">
              {bmi.toFixed(1)}
            </div>
            <div className={cn("text-xl font-extrabold uppercase tracking-tight", categoryColor)}>
              {category}
            </div>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              A healthy BMI for adults typically ranges from 18.5 to 24.9.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
