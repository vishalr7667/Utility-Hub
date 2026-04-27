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
          <label htmlFor="birthdate" className="block text-sm font-semibold text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
          />
        </div>

        <button
          onClick={calculateAge}
          disabled={!birthDate}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
        >
          Calculate Age
        </button>

        {result && (
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">
              Your Precise Age
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <span className="block text-3xl font-bold text-blue-900">{result.years}</span>
                <span className="text-blue-600 text-xs font-semibold uppercase">Years</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-blue-900">{result.months}</span>
                <span className="text-blue-600 text-xs font-semibold uppercase">Months</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-blue-900">{result.days}</span>
                <span className="text-blue-600 text-xs font-semibold uppercase">Days</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
