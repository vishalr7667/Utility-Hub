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
          <label htmlFor="inches-input" className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">
            Inches (IN)
          </label>
          <input
            type="number"
            id="inches-input"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            placeholder="Enter inches..."
            className="input-field"
          />
        </div>

        {/* Result Card */}
        {inches && (
          <div className="result-card">
            <h3 className="text-[var(--color-text-muted)] text-sm font-medium uppercase tracking-wider mb-2">
              Centimeters (CM)
            </h3>
            <div className="text-4xl font-extrabold text-[var(--color-accent-text)]">
              {Number.isInteger(cm) ? cm : parseFloat(cm.toFixed(4))}
            </div>
          </div>
        )}

        {/* Quick Reference Section */}
        <div className="pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
          <h4 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-tight mb-4">
            Quick Reference Table
          </h4>
          <div className="overflow-hidden rounded-xl border" style={{ borderColor: "var(--color-border)" }}>
            <table className="w-full text-sm text-left">
              <thead style={{ background: "var(--color-bg)" }}>
                <tr className="border-b" style={{ borderColor: "var(--color-border)" }}>
                  <th className="px-4 py-3 font-semibold text-[var(--color-text-secondary)]">Inches</th>
                  <th className="px-4 py-3 font-semibold text-[var(--color-text-secondary)]">CM</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ background: "var(--color-bg-card)" }}>
                {quickRefs.map((ref) => (
                  <tr key={ref.in} className="hover:bg-[var(--color-accent-light)] transition-colors duration-150">
                    <td className="px-4 py-3 text-[var(--color-text-secondary)]">{ref.in} in</td>
                    <td className="px-4 py-3 text-[var(--color-text-primary)] font-medium">{ref.cm} cm</td>
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
