import { useState } from 'react';
import { motion } from 'motion/react';
import { Box, Rocket, Send, Check, X, CheckCircle2 } from 'lucide-react';
import { PRICING_TIERS, PricingTier } from '../data/softlandData';

function renderPlanIcon(icon: PricingTier['icon']) {
  switch (icon) {
    case 'box':
      return <Box className="w-7 h-7" />;
    case 'rocket':
      return <Rocket className="w-7 h-7" />;
    case 'plane':
      return <Send className="w-7 h-7" />;
  }
}

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<PricingTier | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const openPlanModal = (tier: PricingTier) => {
    setSelectedPlan(tier);
    setConfirmed(false);
  };

  return (
    <section id="pricing" className="py-20 bg-[#f4f8fb]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display text-[30px] sm:text-[36px] font-bold text-[#1c2d42] mb-3">
            Pricing
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-center">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`bg-white rounded-2xl p-8 sm:p-10 transition-all duration-300 ${
                tier.featured
                  ? 'border-2 border-[#2d71a1] shadow-[0_20px_50px_rgba(45,113,161,0.16)] lg:py-12 relative z-10'
                  : 'border border-slate-200/80 shadow-[0_8px_28px_rgba(28,45,66,0.05)]'
              }`}
            >
              <div className="text-center mb-7">
                <h3 className="font-display text-xl font-bold text-[#1c2d42] mb-5">
                  {tier.name}
                </h3>
                <div className="w-16 h-16 rounded-full mx-auto mb-5 bg-[#2d71a1]/10 text-[#2d71a1] flex items-center justify-center">
                  {renderPlanIcon(tier.icon)}
                </div>
                <div className="flex items-baseline justify-center gap-1 font-display tabular-nums">
                  <span className="text-2xl font-bold text-[#2d71a1]">$</span>
                  <span className="text-5xl font-bold text-[#2d71a1]">{tier.price}</span>
                  <span className="text-slate-500 text-base font-normal">/ month</span>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8">
                {tier.features.map((feat, fIdx) => (
                  <li
                    key={fIdx}
                    className={`flex items-center gap-3 text-[15px] ${
                      feat.included ? 'text-slate-700' : 'text-slate-400 line-through'
                    }`}
                  >
                    {feat.included ? (
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-slate-300 shrink-0" />
                    )}
                    <span>{feat.text}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => openPlanModal(tier)}
                  className={`w-full sm:w-auto px-8 py-3 rounded-md text-[15px] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    tier.featured
                      ? 'bg-[#2d71a1] hover:bg-[#235b82] text-white shadow-md hover:shadow-lg'
                      : 'bg-white hover:bg-[#2d71a1] text-[#2d71a1] hover:text-white border border-[#2d71a1]'
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Plan Selection Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-[#1c2d42]">
                  {selectedPlan.name}
                </h3>
                <p className="text-sm text-slate-500 tabular-nums">
                  ${selectedPlan.price} / month
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                aria-label="Close plan modal"
                className="p-2 text-slate-400 hover:text-slate-700 rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {confirmed ? (
              <div className="py-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <p className="font-semibold text-[#1c2d42] mb-1">
                  Plan Selection Confirmed
                </p>
                <p className="text-sm text-slate-600 mb-5">
                  You selected the {selectedPlan.name}. Check your email or contact our team below to
                  complete onboarding.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  className="px-6 py-2.5 bg-[#2d71a1] text-white text-sm font-semibold rounded-md cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                  {selectedPlan.features
                    .filter((f) => f.included)
                    .map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{f.text}</span>
                      </li>
                    ))}
                </ul>
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan(null)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmed(true)}
                    className="px-5 py-2.5 bg-[#2d71a1] hover:bg-[#235b82] text-white text-sm font-semibold rounded-md transition-colors cursor-pointer"
                  >
                    Confirm Plan
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
