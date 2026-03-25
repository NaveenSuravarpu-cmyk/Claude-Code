/**
 * Birdeye usage-based pricing logic.
 *
 * Tier structure:
 *  - Starter:     1–2 locations
 *  - Growth:      3–9 locations
 *  - Professional: 10–49 locations
 *  - Enterprise:  50+ locations
 */

export const TIERS = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for single-location businesses",
    locationRange: [1, 2],
    basePrice: 299,
    pricePerLocation: 299,
    annualDiscount: 0.20,
    volumeDiscount: 0,
    color: "blue",
    features: [
      "Review management (Google, Facebook, Yelp)",
      "Automated review requests via SMS & email",
      "Basic listings management (3 directories)",
      "Messaging inbox",
      "Reporting dashboard",
      "Mobile app access",
      "Email support",
    ],
    limits: {
      reviewRequests: "500/mo",
      contacts: "1,000",
      teamMembers: "3",
      integrations: "10+",
    },
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Built for multi-location teams",
    locationRange: [3, 9],
    basePrice: 249,
    pricePerLocation: 249,
    annualDiscount: 0.20,
    volumeDiscount: 10,
    color: "indigo",
    popular: true,
    features: [
      "Everything in Starter",
      "Listings management (50+ directories)",
      "Competitor monitoring",
      "Social media management",
      "Review response templates & AI suggestions",
      "Webchat widget",
      "Surveys & NPS",
      "Priority email & chat support",
    ],
    limits: {
      reviewRequests: "2,000/mo",
      contacts: "5,000",
      teamMembers: "10",
      integrations: "50+",
    },
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For growing multi-location brands",
    locationRange: [10, 49],
    basePrice: 199,
    pricePerLocation: 199,
    annualDiscount: 0.20,
    volumeDiscount: 20,
    color: "violet",
    features: [
      "Everything in Growth",
      "Advanced analytics & custom reports",
      "AI-powered insights",
      "Bulk review request campaigns",
      "Referral marketing",
      "Advanced integrations (CRM, PMS, etc.)",
      "Dedicated customer success manager",
      "Phone & Slack support",
    ],
    limits: {
      reviewRequests: "Unlimited",
      contacts: "25,000",
      teamMembers: "Unlimited",
      integrations: "100+",
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Custom solutions for large organizations",
    locationRange: [50, Infinity],
    basePrice: null, // custom
    pricePerLocation: null,
    annualDiscount: 0.20,
    volumeDiscount: 30,
    color: "gray",
    features: [
      "Everything in Professional",
      "Custom contract & SLA",
      "SSO & advanced security",
      "White-labeling options",
      "Custom API access & webhooks",
      "Multi-brand management",
      "Executive business reviews",
      "24/7 priority support",
    ],
    limits: {
      reviewRequests: "Unlimited",
      contacts: "Unlimited",
      teamMembers: "Unlimited",
      integrations: "Custom",
    },
  },
];

export function getTierForLocations(count) {
  return TIERS.find(
    (t) => count >= t.locationRange[0] && count <= t.locationRange[1]
  ) || TIERS[TIERS.length - 1];
}

export function getPriceForLocations(count, billingCycle = "monthly") {
  const tier = getTierForLocations(count);

  if (!tier.pricePerLocation) {
    return { total: null, base: null, perLocation: null, discount: tier.volumeDiscount, annualSavings: null };
  }

  const rawTotal = tier.pricePerLocation * count;
  const discountMultiplier = 1 - tier.volumeDiscount / 100;
  const afterVolumeDiscount = rawTotal * discountMultiplier;

  const annualMultiplier = billingCycle === "annual" ? 1 - tier.annualDiscount : 1;
  const total = Math.round(afterVolumeDiscount * annualMultiplier);

  const monthlyTotal = Math.round(afterVolumeDiscount);
  const annualSavings =
    billingCycle === "annual"
      ? Math.round((monthlyTotal - total) * 12)
      : 0;

  return {
    total,
    base: tier.basePrice,
    perLocation: Math.round(tier.pricePerLocation * annualMultiplier * discountMultiplier),
    discount: tier.volumeDiscount + (billingCycle === "annual" ? 20 : 0),
    annualSavings,
  };
}
