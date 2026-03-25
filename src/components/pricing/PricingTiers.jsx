import React from "react";
import { TIERS, getTierForLocations, getPriceForLocations } from "./pricingUtils";

const COLOR_MAP = {
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    button: "bg-blue-600 hover:bg-blue-700 text-white",
    ring: "ring-blue-200",
    icon: "text-blue-500",
  },
  indigo: {
    badge: "bg-indigo-600 text-white border-indigo-600",
    button: "bg-indigo-600 hover:bg-indigo-700 text-white",
    ring: "ring-indigo-400",
    icon: "text-indigo-500",
  },
  violet: {
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    button: "bg-violet-600 hover:bg-violet-700 text-white",
    ring: "ring-violet-200",
    icon: "text-violet-500",
  },
  gray: {
    badge: "bg-gray-50 text-gray-700 border-gray-200",
    button: "bg-gray-900 hover:bg-gray-800 text-white",
    ring: "ring-gray-200",
    icon: "text-gray-500",
  },
};

function CheckIcon({ className }) {
  return (
    <svg className={`w-4 h-4 shrink-0 ${className}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function TierCard({ tier, locations, billingCycle, isActive }) {
  const colors = COLOR_MAP[tier.color];
  const pricing = getPriceForLocations(locations, billingCycle);
  const isEnterprise = tier.id === "enterprise";

  return (
    <div
      className={`relative flex flex-col bg-white rounded-2xl border-2 transition-all duration-200 ${
        isActive
          ? `border-indigo-500 shadow-xl ring-4 ${colors.ring}`
          : "border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300"
      } ${tier.popular ? "scale-[1.02]" : ""}`}
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm">
            Most Popular
          </span>
        </div>
      )}

      {/* Active indicator */}
      {isActive && (
        <div className="absolute -top-3.5 right-4">
          <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            Your Plan
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Tier header */}
        <div className="mb-6">
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${colors.badge} mb-3`}>
            {tier.locationRange[1] === Infinity
              ? `${tier.locationRange[0]}+ locations`
              : `${tier.locationRange[0]}–${tier.locationRange[1]} locations`}
          </span>
          <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{tier.tagline}</p>
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          {isEnterprise ? (
            <div>
              <p className="text-3xl font-bold text-gray-900">Custom</p>
              <p className="text-sm text-gray-500 mt-1">Tailored to your needs</p>
            </div>
          ) : (
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">
                  ${tier.pricePerLocation}
                </span>
                <span className="text-gray-500 text-sm">/location/mo</span>
              </div>
              {billingCycle === "annual" && (
                <p className="text-xs text-green-600 font-medium mt-1">
                  Billed annually · 20% off
                </p>
              )}
              <div className="mt-3 bg-gray-50 rounded-lg px-3 py-2 text-sm">
                <span className="text-gray-500">For {locations} location{locations > 1 ? "s": ""}: </span>
                <span className="font-semibold text-gray-900">
                  ${pricing.total?.toLocaleString()}/mo
                </span>
                {tier.volumeDiscount > 0 && (
                  <span className="ml-1 text-green-600 font-medium">
                    ({tier.volumeDiscount}% vol. discount)
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-2.5 flex-1 mb-6">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
              <CheckIcon className={colors.icon} />
              {feature}
            </li>
          ))}
        </ul>

        {/* Limits */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6 grid grid-cols-2 gap-3 text-xs">
          {Object.entries(tier.limits).map(([key, val]) => (
            <div key={key}>
              <p className="text-gray-400 font-medium uppercase tracking-wide">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </p>
              <p className="font-semibold text-gray-700 mt-0.5">{val}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-150 ${colors.button} ${
            isEnterprise ? "border-2 border-gray-900 bg-white !text-gray-900 hover:bg-gray-900 hover:!text-white" : ""
          }`}
        >
          {isEnterprise ? "Contact Sales" : isActive ? "Current Plan" : "Start Free Trial"}
        </button>
      </div>
    </div>
  );
}

export default function PricingTiers({ locations, billingCycle }) {
  const activeTier = getTierForLocations(locations);

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Choose your plan</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Pricing scales automatically as you add locations. Move between tiers
            at any time — no contracts, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {TIERS.map((tier) => (
            <TierCard
              key={tier.id}
              tier={tier}
              locations={locations}
              billingCycle={billingCycle}
              isActive={tier.id === activeTier.id}
            />
          ))}
        </div>

        {/* Volume discount callout */}
        <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-gray-900">Growing fast?</h4>
            <p className="text-sm text-gray-600 mt-1">
              Volume discounts kick in automatically as you add more locations. The more
              you scale, the less you pay per location.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            {[
              { label: "3–9 locations", discount: "10% off" },
              { label: "10–49 locations", discount: "20% off" },
              { label: "50+ locations", discount: "30% off" },
            ].map(({ label, discount }) => (
              <div key={label} className="text-center bg-white border border-blue-100 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-xs text-gray-500">{label}</p>
                <p className="text-sm font-bold text-indigo-600 mt-0.5">{discount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
