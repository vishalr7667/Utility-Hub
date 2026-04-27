"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Mode = "value" | "percentage" | "change";

export default function PercentageCalculatorTool() {
  const [mode, setMode] = useState<Mode>("value");

  const modes: { key: Mode; label: string }[] = [
    { key: "value", label: "What is X% of Y?" },
    { key: "percentage", label: "X is what % of Y?" },
    { key: "change", label: "% Increase/Decrease" },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Mode Switcher */}
      <div className="flex flex-wrap gap-1.5 mb-8 p-1.5 rounded-xl" style={{ background: "var(--color-bg)" }}>
        {modes.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={cn(
              "flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200",
              mode === key
                ? "bg-[var(--color-bg-card)] text-[var(--color-accent)] shadow-sm"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div>
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
          <label className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">Percentage (%)</label>
          <input type="number" value={percent} onChange={(e) => setPercent(e.target.value)} placeholder="e.g. 20" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">Of Value</label>
          <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} placeholder="e.g. 500" className="input-field" />
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
          <label className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">Value 1</label>
          <input type="number" value={val1} onChange={(e) => setVal1(e.target.value)} placeholder="e.g. 50" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">Is what % of Value 2</label>
          <input type="number" value={val2} onChange={(e) => setVal2(e.target.value)} placeholder="e.g. 200" className="input-field" />
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
          <label className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">Old Value</label>
          <input type="number" value={oldVal} onChange={(e) => setOldVal(e.target.value)} placeholder="e.g. 100" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">New Value</label>
          <input type="number" value={newVal} onChange={(e) => setNewVal(e.target.value)} placeholder="e.g. 150" className="input-field" />
        </div>
      </div>
      <ResultBox 
        label={`Percentage ${isIncrease ? "increase" : "decrease"} from ${oldVal || "0"} to ${newVal || "0"}:`} 
        value={oldVal && newVal && Number(oldVal) !== 0 ? `${Math.abs(percentChange).toFixed(2)}% ${isIncrease ? "Increase" : "Decrease"}` : "0%"} 
        highlightColor={isIncrease ? "text-green-600" : "text-red-500"}
      />
    </div>
  );
}

function ResultBox({ label, value, highlightColor = "text-[var(--color-accent-text)]" }: { label: string; value: string; highlightColor?: string }) {
  return (
    <div className="result-card">
      <h3 className="text-[var(--color-text-muted)] text-sm font-medium uppercase tracking-wider mb-2">
        {label}
      </h3>
      <div className={cn("text-3xl font-extrabold", highlightColor)}>
        {value}
      </div>
    </div>
  );
}
