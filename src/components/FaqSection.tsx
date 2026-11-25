import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/softlandData';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display text-[30px] sm:text-[36px] font-bold text-[#1c2d42] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? 'border-[#2d71a1]/40 bg-[#f4f8fb]/70 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d71a1] rounded-xl"
                >
                  <span
                    className={`font-display font-semibold text-base sm:text-[17px] transition-colors ${
                      isOpen ? 'text-[#2d71a1]' : 'text-[#1c2d42]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-90 text-[#2d71a1]' : 'text-slate-400'
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6 pb-5 text-[15px] text-slate-600 leading-relaxed"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
