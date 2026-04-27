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
          <label htmlFor="cm-input" className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">
            Centimeters (CM)
          </label>
          <input
            type="number"
            id="cm-input"
            value={cm}
            onChange={(e) => setCm(e.target.value)}
            placeholder="Enter centimeters..."
            className="input-field"
          />
        </div>

        {/* Result Card */}
        {cm && (
          <div className="result-card">
            <h3 className="text-[var(--color-text-muted)] text-sm font-medium uppercase tracking-wider mb-2">
              Inches (IN)
            </h3>
            <div className="text-4xl font-extrabold text-[var(--color-accent-text)]">
              {Number.isInteger(inches) ? inches : parseFloat(inches.toFixed(4))}
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
                  <th className="px-4 py-3 font-semibold text-[var(--color-text-secondary)]">CM</th>
                  <th className="px-4 py-3 font-semibold text-[var(--color-text-secondary)]">Inches</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ background: "var(--color-bg-card)" }}>
                {quickRefs.map((ref) => (
                  <tr key={ref.cm} className="hover:bg-[var(--color-accent-light)] transition-colors duration-150">
                    <td className="px-4 py-3 text-[var(--color-text-secondary)]">{ref.cm} cm</td>
                    <td className="px-4 py-3 text-[var(--color-text-primary)] font-medium">{ref.in} in</td>
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
