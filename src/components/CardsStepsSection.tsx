import { motion } from 'motion/react';
import { ASSETS, STEP_CARDS } from '../data/softlandData';

export function CardsStepsSection() {
  return (
    <section id="cards" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Centered Showcase Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-14 rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-[0_12px_36px_rgba(28,45,66,0.06)] p-4 sm:p-6"
        >
          <img
            src={ASSETS.featureTeam}
            alt="SoftLand workspace collaboration illustration"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[380px] object-contain mx-auto rounded-xl"
          />
        </motion.div>

        {/* 3 Numbered Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {STEP_CARDS.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: step.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white rounded-xl p-8 border border-slate-200/80 hover:border-[#2d71a1]/40 shadow-xs hover:shadow-[0_12px_30px_rgba(45,113,161,0.08)] transition-all duration-300"
            >
              <span className="block font-display text-3xl font-bold text-[#2d71a1] tabular-nums mb-4 transition-transform duration-300 group-hover:translate-x-1">
                {step.number}
              </span>
              <h3 className="font-display text-xl font-bold text-[#1c2d42] mb-2.5">
                {step.title}
              </h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
