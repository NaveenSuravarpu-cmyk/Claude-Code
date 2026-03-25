import React, { useState } from "react";
import PricingHeader from "./PricingHeader";
import UsageCalculator from "./UsageCalculator";
import PricingTiers from "./PricingTiers";
import FeatureComparison from "./FeatureComparison";
import PricingFAQ from "./PricingFAQ";
import PricingCTA from "./PricingCTA";

export default function UsageBasedPricing() {
  const [selectedLocations, setSelectedLocations] = useState(1);
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" | "annual"

  return (
    <div className="min-h-screen bg-white font-sans">
      <PricingHeader
        billingCycle={billingCycle}
        onBillingCycleChange={setBillingCycle}
      />
      <UsageCalculator
        locations={selectedLocations}
        onLocationsChange={setSelectedLocations}
        billingCycle={billingCycle}
      />
      <PricingTiers
        locations={selectedLocations}
        billingCycle={billingCycle}
      />
      <FeatureComparison />
      <PricingFAQ />
      <PricingCTA />
    </div>
  );
}
