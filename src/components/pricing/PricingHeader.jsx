import React from "react";

export default function PricingHeader({ billingCycle, onBillingCycleChange }) {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          New: Usage-Based Pricing
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Pay only for what you use.
          <br />
          <span className="text-blue-200">Scale as you grow.</span>
        </h1>

        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
          Birdeye's flexible pricing adapts to your business. Start with one
          location, expand across hundreds — you're only charged for the
          locations and features you actually use.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-1 gap-1">
          <button
            onClick={() => onBillingCycleChange("monthly")}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              billingCycle === "monthly"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => onBillingCycleChange("annual")}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              billingCycle === "annual"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
          >
            Annual
            <span className="bg-green-400 text-green-900 text-xs font-bold px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </button>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No setup fees
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free 14-day trial
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Dedicated onboarding
          </span>
        </div>
      </div>
    </section>
  );
}
