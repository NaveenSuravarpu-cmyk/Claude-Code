import React, { useState } from "react";

const FAQS = [
  {
    q: "How does usage-based pricing work?",
    a: "You're billed based on the number of active locations on your account each month. Add a location mid-month and you'll only be charged a prorated amount. Remove a location and the credit is applied to your next bill.",
  },
  {
    q: "Can I mix and match features across tiers?",
    a: "Your plan tier determines which features are available. All locations on your account share the same tier. You can upgrade or downgrade your tier at any time, and the change takes effect immediately.",
  },
  {
    q: "What counts as a 'location'?",
    a: "A location is any distinct physical business address or service area managed through Birdeye. Each location has its own listings, reviews, and messaging inbox.",
  },
  {
    q: "Are volume discounts applied automatically?",
    a: "Yes. As soon as your account crosses into the next location bracket, the discounted per-location rate applies to all your locations — not just the new ones.",
  },
  {
    q: "What happens at the end of my free trial?",
    a: "After the 14-day trial you'll be prompted to enter payment details to continue. We won't charge you automatically — you choose the plan that fits.",
  },
  {
    q: "Do you offer custom contracts for enterprise customers?",
    a: "Absolutely. For accounts with 50+ locations we offer custom pricing, SLA agreements, dedicated support, and flexible payment terms. Contact our sales team to get started.",
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between py-5 gap-4"
      >
        <span className="font-semibold text-gray-900 text-sm md:text-base">{faq.q}</span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {open && (
        <p className="pb-5 text-sm text-gray-600 leading-relaxed pr-8">{faq.a}</p>
      )}
    </div>
  );
}

export default function PricingFAQ() {
  return (
    <section className="px-6 py-16 bg-white border-t border-gray-200">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
