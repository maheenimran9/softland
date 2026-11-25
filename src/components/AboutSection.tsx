import { motion } from 'motion/react';
import { Building2, ClipboardList, Command, TrendingUp, ArrowRight } from 'lucide-react';
import { ABOUT_CARDS, AboutCardItem } from '../data/softlandData';

function renderAboutIcon(icon: AboutCardItem['icon']) {
  switch (icon) {
    case 'buildings':
      return <Building2 className="w-7 h-7" />;
    case 'clipboard':
      return <ClipboardList className="w-7 h-7" />;
    case 'command':
      return <Command className="w-7 h-7" />;
    case 'graph':
      return <TrendingUp className="w-7 h-7" />;
  }
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="inline-block text-sm font-semibold text-[#2d71a1] bg-[#2d71a1]/10 px-3.5 py-1.5 rounded-md mb-4">
              About Us
            </p>
            <h2 className="font-display text-[28px] sm:text-[32px] font-bold text-[#1c2d42] leading-tight mb-4 [text-wrap:balance]">
              Ducimus rerum libero reprehenderit cumque
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-7">
              Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime.
              Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem
              nulla qui assumenda incidunt voluptatem tempora deleniti soluta.
            </p>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#2d71a1] hover:bg-[#235b82] text-white text-[15px] font-semibold rounded-md transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right 2x2 Icon Boxes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ABOUT_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: card.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group bg-white rounded-xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(28,45,66,0.06)] hover:shadow-[0_16px_40px_rgba(45,113,161,0.12)] transition-all duration-300 ${
                  idx % 2 === 1 ? 'sm:translate-y-6' : ''
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-[#2d71a1]/10 text-[#2d71a1] group-hover:bg-[#2d71a1] group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-300">
                  {renderAboutIcon(card.icon)}
                </div>
                <h3 className="font-display text-xl font-bold text-[#1c2d42] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
