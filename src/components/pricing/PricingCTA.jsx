import React from "react";

export default function PricingCTA() {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to grow with Birdeye?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
          Join 150,000+ businesses that use Birdeye to get more reviews, rank
          higher, and win more customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-sm">
            Start Free 14-Day Trial
          </button>
          <button className="border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-sm">
            Talk to Sales
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["bg-orange-400", "bg-teal-400", "bg-pink-400", "bg-yellow-400"].map((c, i) => (
                <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-blue-700`} />
              ))}
            </div>
            <span>150,000+ businesses</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.8/5 on G2</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>SOC 2 Type II certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
