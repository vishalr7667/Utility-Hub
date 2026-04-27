"use client";

import { useState } from "react";

export default function CmToInchesTool() {
  const [cm, setCm] = useState("");
  
  const centimeters = Number(cm);
  const inches = centimeters / 2.54;

  const quickRefs = [
    { cm: 1, in: 0.3937 },
    { cm: 5, in: 1.9685 },
    { cm: 10, in: 3.9370 },
    { cm: 50, in: 19.6850 },
    { cm: 100, in: 39.3701 },
  ];

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-8">
        {/* Converter Form */}
        <div>
          <label htmlFor="cm-input" className="block text-sm font-semibold text-gray-700 mb-2">
            Centimeters (CM)
          </label>
          <input
            type="number"
            id="cm-input"
            value={cm}
            onChange={(e) => setCm(e.target.value)}
            placeholder="Enter centimeters..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          />
        </div>

        {/* Result Card */}
        {cm && (
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">
              Inches (IN)
            </h3>
            <div className="text-4xl font-bold text-blue-900">
              {Number.isInteger(inches) ? inches : parseFloat(inches.toFixed(4))}
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
                  <th className="px-4 py-2 font-semibold text-gray-700">CM</th>
                  <th className="px-4 py-2 font-semibold text-gray-700">Inches</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {quickRefs.map((ref) => (
                  <tr key={ref.cm} className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-2 text-gray-600">{ref.cm} cm</td>
                    <td className="px-4 py-2 text-gray-900 font-medium">{ref.in} in</td>
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
