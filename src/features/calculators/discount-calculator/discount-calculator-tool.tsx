"use client";

import { useState } from "react";

export default function DiscountCalculatorTool() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");

  const original = Number(originalPrice);
  const discount = Number(discountPercent);

  const discountAmount = original * (discount / 100);
  const finalPrice = original - discountAmount;

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-6">
        <div>
          <label htmlFor="original-price" className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">
            Original Price
          </label>
          <input
            type="number"
            id="original-price"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="e.g. 1000"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="discount-percent" className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">
            Discount Percentage (%)
          </label>
          <input
            type="number"
            id="discount-percent"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            placeholder="e.g. 20"
            className="input-field"
          />
        </div>

        {original > 0 && discount > 0 && (
          <div className="mt-8 space-y-4">
            <div className="result-card">
              <h3 className="text-[var(--color-text-muted)] text-sm font-medium uppercase tracking-wider mb-2">
                Final Price
              </h3>
              <div className="text-4xl font-extrabold text-[var(--color-accent-text)]">
                {finalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-center animate-scale-in">
                <h4 className="text-[var(--color-text-muted)] text-xs font-medium uppercase tracking-wider mb-1">
                  You Save
                </h4>
                <div className="text-xl font-extrabold text-green-700">
                  {discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="p-4 rounded-xl text-center animate-scale-in" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
                <h4 className="text-[var(--color-text-muted)] text-xs font-medium uppercase tracking-wider mb-1">
                  Discount %
                </h4>
                <div className="text-xl font-extrabold text-[var(--color-text-primary)]">
                  {discount}%
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
