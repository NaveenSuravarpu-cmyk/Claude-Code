import React, { useMemo } from "react";
import { getPriceForLocations } from "./pricingUtils";

const LOCATION_STEPS = [1, 2, 3, 5, 10, 25, 50, 100, 250, 500];

export default function UsageCalculator({ locations, onLocationsChange, billingCycle }) {
  const pricing = useMemo(
    () => getPriceForLocations(locations, billingCycle),
    [locations, billingCycle]
  );

  const sliderIndex = LOCATION_STEPS.indexOf(locations);

  function handleSliderChange(e) {
    const idx = Number(e.target.value);
    onLocationsChange(LOCATION_STEPS[idx]);
  }

  return (
    <section className="bg-gray-50 border-b border-gray-200 px-6 py-14">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Estimate your monthly cost
          </h2>
          <p className="text-gray-500 mt-2">
            Drag the slider to see pricing for your number of locations.
          </p>
        </div>

        {/* Slider card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Location count display */}
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Locations
              </p>
              <p className="text-5xl font-bold text-blue-600 mt-1">
                {locations}
                {locations === 500 && <span className="text-2xl text-gray-400 ml-1">+</span>}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Estimated Total
              </p>
              <p className="text-5xl font-bold text-gray-900 mt-1">
                ${pricing.total.toLocaleString()}
                <span className="text-base font-normal text-gray-400">/mo</span>
              </p>
              {billingCycle === "annual" && (
                <p className="text-sm text-green-600 font-medium mt-1">
                  Saves ${pricing.annualSavings.toLocaleString()}/yr
                </p>
              )}
            </div>
          </div>

          {/* Slider */}
          <input
            type="range"
            min={0}
            max={LOCATION_STEPS.length - 1}
            step={1}
            value={sliderIndex === -1 ? 0 : sliderIndex}
            onChange={handleSliderChange}
            className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />

          {/* Step labels */}
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>1</span>
            <span>10</span>
            <span>50</span>
            <span>100</span>
            <span>500+</span>
          </div>

          {/* Breakdown */}
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Base Platform
              </p>
              <p className="text-lg font-semibold text-gray-700 mt-1">
                ${pricing.base}/mo
              </p>
            </div>
            <div className="text-center border-x border-gray-100">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Per Location
              </p>
              <p className="text-lg font-semibold text-gray-700 mt-1">
                ${pricing.perLocation}/mo
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Volume Discount
              </p>
              <p className="text-lg font-semibold text-green-600 mt-1">
                {pricing.discount > 0 ? `-${pricing.discount}%` : "—"}
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          Prices shown are estimates. Contact sales for custom enterprise pricing.
        </p>
      </div>
    </section>
  );
}
