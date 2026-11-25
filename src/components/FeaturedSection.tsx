import { motion } from 'motion/react';
import { Users, Sun, BarChart3 } from 'lucide-react';
import { FEATURED_HIGHLIGHTS, FeaturedHighlight } from '../data/softlandData';

function renderHighlightIcon(icon: FeaturedHighlight['icon']) {
  switch (icon) {
    case 'users':
      return <Users className="w-8 h-8" />;
    case 'sun':
      return <Sun className="w-8 h-8" />;
    case 'chart':
      return <BarChart3 className="w-8 h-8" />;
  }
}

export function FeaturedSection() {
  return (
    <section id="featured" className="py-20 bg-[#f4f8fb]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display text-[30px] sm:text-[36px] font-bold text-[#1c2d42] mb-3 [text-wrap:balance]">
            Save your time to using SoftLand
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {FEATURED_HIGHLIGHTS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: item.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white rounded-xl p-8 text-center border border-slate-100 shadow-[0_6px_25px_rgba(28,45,66,0.05)] hover:-translate-y-1.5 hover:shadow-[0_14px_35px_rgba(45,113,161,0.12)] transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-105 bg-gradient-to-br from-[#3db3c5] to-[#2d71a1]">
                {renderHighlightIcon(item.icon)}
              </div>
              <h3 className="font-display text-xl font-bold text-[#1c2d42] mb-3">
                {item.title}
              </h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
