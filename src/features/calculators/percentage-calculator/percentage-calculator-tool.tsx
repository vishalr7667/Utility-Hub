"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Mode = "value" | "percentage" | "change";

export default function PercentageCalculatorTool() {
  const [mode, setMode] = useState<Mode>("value");

  return (
    <div className="max-w-2xl mx-auto">
      {/* Mode Switcher */}
      <div className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-100 rounded-lg">
        <button
          onClick={() => setMode("value")}
          className={cn(
            "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all",
            mode === "value" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
          )}
        >
          What is X% of Y?
        </button>
        <button
          onClick={() => setMode("percentage")}
          className={cn(
            "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all",
            mode === "percentage" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
          )}
        >
          X is what % of Y?
        </button>
        <button
          onClick={() => setMode("change")}
          className={cn(
            "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all",
            mode === "change" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
          )}
        >
          % Increase/Decrease
        </button>
      </div>

      <div className="bg-white">
        {mode === "value" && <ValueMode />}
        {mode === "percentage" && <PercentageMode />}
        {mode === "change" && <ChangeMode />}
      </div>
    </div>
  );
}

function ValueMode() {
  const [percent, setPercent] = useState("");
  const [total, setTotal] = useState("");
  const result = (Number(percent) / 100) * Number(total);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Percentage (%)</label>
          <input
            type="number"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            placeholder="e.g. 20"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Of Value</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            placeholder="e.g. 500"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>
      <ResultBox 
        label={`${percent || "0"}% of ${total || "0"} is:`} 
        value={percent && total ? result.toLocaleString() : "0"} 
      />
    </div>
  );
}

function PercentageMode() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const result = (Number(val1) / Number(val2)) * 100;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Value 1</label>
          <input
            type="number"
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
            placeholder="e.g. 50"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Is what % of Value 2</label>
          <input
            type="number"
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
            placeholder="e.g. 200"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>
      <ResultBox 
        label={`${val1 || "0"} is what % of ${val2 || "0"}:`} 
        value={val1 && val2 && Number(val2) !== 0 ? `${result.toFixed(2)}%` : "0%"} 
      />
    </div>
  );
}

function ChangeMode() {
  const [oldVal, setOldVal] = useState("");
  const [newVal, setNewVal] = useState("");
  
  const diff = Number(newVal) - Number(oldVal);
  const percentChange = (diff / Math.abs(Number(oldVal))) * 100;
  const isIncrease = diff >= 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Old Value</label>
          <input
            type="number"
            value={oldVal}
            onChange={(e) => setOldVal(e.target.value)}
            placeholder="e.g. 100"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">New Value</label>
          <input
            type="number"
            value={newVal}
            onChange={(e) => setNewVal(e.target.value)}
            placeholder="e.g. 150"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>
      <ResultBox 
        label={`Percentage ${isIncrease ? "increase" : "decrease"} from ${oldVal || "0"} to ${newVal || "0"}:`} 
        value={oldVal && newVal && Number(oldVal) !== 0 ? `${Math.abs(percentChange).toFixed(2)}% ${isIncrease ? "Increase" : "Decrease"}` : "0%"} 
        highlightColor={isIncrease ? "text-green-600" : "text-red-600"}
      />
    </div>
  );
}

function ResultBox({ label, value, highlightColor = "text-blue-600" }: { label: string; value: string; highlightColor?: string }) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
      <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">
        {label}
      </h3>
      <div className={cn("text-3xl font-bold", highlightColor)}>
        {value}
      </div>
    </div>
  );
}
