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
          <label htmlFor="original-price" className="block text-sm font-semibold text-gray-700 mb-2">
            Original Price
          </label>
          <input
            type="number"
            id="original-price"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="e.g. 1000"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="discount-percent" className="block text-sm font-semibold text-gray-700 mb-2">
            Discount Percentage (%)
          </label>
          <input
            type="number"
            id="discount-percent"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            placeholder="e.g. 20"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          />
        </div>

        {original > 0 && discount > 0 && (
          <div className="mt-8 space-y-4">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">
                Final Price
              </h3>
              <div className="text-4xl font-bold text-blue-900">
                {finalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-xl border border-green-100 text-center">
                <h4 className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">
                  You Save
                </h4>
                <div className="text-xl font-bold text-green-700">
                  {discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <h4 className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">
                  Discount %
                </h4>
                <div className="text-xl font-bold text-gray-700">
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
