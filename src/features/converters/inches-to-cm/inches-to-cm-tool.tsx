"use client";

import { useState } from "react";

export default function InchesToCmTool() {
  const [inches, setInches] = useState("");
  
  const inVal = Number(inches);
  const cm = inVal * 2.54;

  const quickRefs = [
    { in: 1, cm: 2.54 },
    { in: 5, cm: 12.7 },
    { in: 10, cm: 25.4 },
    { in: 20, cm: 50.8 },
    { in: 40, cm: 101.6 },
  ];

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-8">
        {/* Converter Form */}
        <div>
          <label htmlFor="inches-input" className="block text-sm font-semibold text-gray-700 mb-2">
            Inches (IN)
          </label>
          <input
            type="number"
            id="inches-input"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            placeholder="Enter inches..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          />
        </div>

        {/* Result Card */}
        {inches && (
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">
              Centimeters (CM)
            </h3>
            <div className="text-4xl font-bold text-blue-900">
              {Number.isInteger(cm) ? cm : parseFloat(cm.toFixed(4))}
            </div>
          </div>
        )}

        {/* Quick Reference Section */}
        <div className="pt-4 border-t border-gray-100">
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-4">
            Quick Reference Table
          </h4>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-2 font-semibold text-gray-700">Inches</th>
                  <th className="px-4 py-2 font-semibold text-gray-700">CM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {quickRefs.map((ref) => (
                  <tr key={ref.in} className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-2 text-gray-600">{ref.in} in</td>
                    <td className="px-4 py-2 text-gray-900 font-medium">{ref.cm} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
