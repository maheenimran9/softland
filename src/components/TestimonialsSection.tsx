import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/softlandData';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || prefersReduced) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const item = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display text-[30px] sm:text-[36px] font-bold text-[#1c2d42] mb-3">
            Testimonials
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </motion.div>

        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="bg-[#f4f8fb] rounded-2xl p-8 sm:p-12 border border-slate-100 shadow-[0_10px_35px_rgba(28,45,66,0.05)] text-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Avatar Initials Circle */}
                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br from-[#2d71a1] to-[#3db3c5] text-white font-display font-bold text-xl flex items-center justify-center shadow-md ring-4 ring-white">
                  {item.initials}
                </div>

                <h3 className="font-display text-xl font-bold text-[#1c2d42]">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-500 mb-3">{item.role}</p>

                {/* Star Rating */}
                <div className="flex items-center justify-center gap-1 text-amber-400 mb-5">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="text-slate-700 text-base sm:text-[17px] italic leading-relaxed max-w-2xl mx-auto">
                  <Quote className="w-5 h-5 inline-block text-[#2d71a1]/50 mr-2 -mt-2" />
                  {item.quote}
                  <Quote className="w-5 h-5 inline-block text-[#2d71a1]/50 ml-2 -mt-2 rotate-180" />
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next Arrows */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200/70">
              <button
                type="button"
                onClick={() =>
                  setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
                }
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#1c2d42] hover:bg-[#2d71a1] hover:text-white transition-colors flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    aria-label={`Show testimonial from ${t.name}`}
                    className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                      idx === current
                        ? 'w-6 bg-[#2d71a1]'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#1c2d42] hover:bg-[#2d71a1] hover:text-white transition-colors flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
