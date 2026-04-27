"use client";

import { useState } from "react";

export default function AgeCalculatorTool() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const today = new Date();
    const birth = new Date(birthDate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      // Get days in the previous month
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-6">
        <div>
          <label htmlFor="birthdate" className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="input-field"
          />
        </div>

        <button
          onClick={calculateAge}
          disabled={!birthDate}
          className="btn-primary"
        >
          Calculate Age
        </button>

        {result && (
          <div className="result-card mt-8">
            <h3 className="text-[var(--color-text-muted)] text-sm font-medium uppercase tracking-wider mb-4">
              Your Precise Age
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <span className="block text-3xl font-extrabold text-[var(--color-accent-text)]">{result.years}</span>
                <span className="text-[var(--color-accent)] text-xs font-semibold uppercase">Years</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-[var(--color-accent-text)]">{result.months}</span>
                <span className="text-[var(--color-accent)] text-xs font-semibold uppercase">Months</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-[var(--color-accent-text)]">{result.days}</span>
                <span className="text-[var(--color-accent)] text-xs font-semibold uppercase">Days</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
