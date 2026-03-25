import React, { useState } from "react";

const CATEGORIES = [
  {
    name: "Reviews",
    features: [
      { name: "Review monitoring", starter: true, growth: true, professional: true, enterprise: true },
      { name: "Automated review requests (SMS & email)", starter: true, growth: true, professional: true, enterprise: true },
      { name: "Review response templates", starter: false, growth: true, professional: true, enterprise: true },
      { name: "AI-generated review responses", starter: false, growth: true, professional: true, enterprise: true },
      { name: "Bulk review request campaigns", starter: false, growth: false, professional: true, enterprise: true },
      { name: "Negative review alerts", starter: true, growth: true, professional: true, enterprise: true },
    ],
  },
  {
    name: "Listings",
    features: [
      { name: "Listings management (3 directories)", starter: true, growth: false, professional: false, enterprise: false },
      { name: "Listings management (50+ directories)", starter: false, growth: true, professional: true, enterprise: true },
      { name: "Duplicate listing suppression", starter: false, growth: true, professional: true, enterprise: true },
      { name: "Local SEO optimization", starter: false, growth: true, professional: true, enterprise: true },
    ],
  },
  {
    name: "Messaging",
    features: [
      { name: "Unified inbox", starter: true, growth: true, professional: true, enterprise: true },
      { name: "Webchat widget", starter: false, growth: true, professional: true, enterprise: true },
      { name: "AI chatbot (auto-replies)", starter: false, growth: false, professional: true, enterprise: true },
      { name: "Mass texting / campaigns", starter: false, growth: true, professional: true, enterprise: true },
    ],
  },
  {
    name: "Analytics",
    features: [
      { name: "Basic reporting dashboard", starter: true, growth: true, professional: true, enterprise: true },
      { name: "Competitor benchmarking", starter: false, growth: true, professional: true, enterprise: true },
      { name: "Custom reports & exports", starter: false, growth: false, professional: true, enterprise: true },
      { name: "AI-powered insights", starter: false, growth: false, professional: true, enterprise: true },
      { name: "Executive dashboards", starter: false, growth: false, professional: false, enterprise: true },
    ],
  },
  {
    name: "Integrations & Security",
    features: [
      { name: "Native integrations (10+)", starter: true, growth: false, professional: false, enterprise: false },
      { name: "Native integrations (50+)", starter: false, growth: true, professional: false, enterprise: false },
      { name: "CRM / PMS integrations", starter: false, growth: false, professional: true, enterprise: true },
      { name: "Open API & webhooks", starter: false, growth: false, professional: true, enterprise: true },
      { name: "SSO / SAML", starter: false, growth: false, professional: false, enterprise: true },
      { name: "Custom data residency", starter: false, growth: false, professional: false, enterprise: true },
    ],
  },
];

function Cell({ value }) {
  if (typeof value === "string") {
    return <span className="text-sm text-gray-700 font-medium">{value}</span>;
  }
  if (value) {
    return (
      <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  );
}

export default function FeatureComparison() {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <section className="px-6 py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Compare features</h2>
          <p className="text-gray-500 mt-3">See exactly what's included at each tier.</p>
        </div>

        {/* Header row */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-200">
            <div className="p-4 col-span-1" />
            {["Starter", "Growth", "Professional", "Enterprise"].map((tier) => (
              <div key={tier} className="p-4 text-center">
                <span className="text-sm font-semibold text-gray-700">{tier}</span>
              </div>
            ))}
          </div>

          {/* Categories */}
          {CATEGORIES.map((category) => (
            <div key={category.name} className="border-b border-gray-100 last:border-0">
              {/* Category header */}
              <button
                onClick={() =>
                  setOpenCategory(openCategory === category.name ? null : category.name)
                }
                className="w-full grid grid-cols-5 items-center bg-gray-50 hover:bg-gray-100 transition-colors px-4 py-3"
              >
                <div className="col-span-1 flex items-center gap-2 text-left">
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      openCategory === category.name ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="font-semibold text-sm text-gray-700">{category.name}</span>
                </div>
                {[true, true, true, true].map((_, i) => (
                  <div key={i} className="text-center text-xs text-gray-400">
                    {category.features.filter((f) =>
                      [f.starter, f.growth, f.professional, f.enterprise][i]
                    ).length}/{category.features.length}
                  </div>
                ))}
              </button>

              {/* Feature rows */}
              {(openCategory === category.name || openCategory === null) &&
                category.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="grid grid-cols-5 items-center px-4 py-3 border-t border-gray-50 hover:bg-gray-50"
                  >
                    <div className="col-span-1 text-sm text-gray-600 pl-6">
                      {feature.name}
                    </div>
                    <div className="text-center"><Cell value={feature.starter} /></div>
                    <div className="text-center"><Cell value={feature.growth} /></div>
                    <div className="text-center"><Cell value={feature.professional} /></div>
                    <div className="text-center"><Cell value={feature.enterprise} /></div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
