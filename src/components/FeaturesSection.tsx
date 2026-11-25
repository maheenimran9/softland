import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { ASSETS } from '../data/softlandData';

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-[30px] sm:text-[36px] font-bold text-[#1c2d42] mb-3">
            Features
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Feature Item 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-md rounded-2xl bg-[#f4f8fb] p-6 border border-slate-100">
                <img
                  src={ASSETS.featureTeam}
                  alt="Team collaboration and workflow analytics"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h3 className="font-display text-2xl sm:text-[26px] font-bold text-[#1c2d42] leading-snug mb-3 [text-wrap:balance]">
                Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
              </h3>
              <p className="italic text-slate-600 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="space-y-3 text-[15px] text-slate-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2d71a1] shrink-0 mt-0.5" />
                  <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2d71a1] shrink-0 mt-0.5" />
                  <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2d71a1] shrink-0 mt-0.5" />
                  <span>Ullam est qui quos consequatur eos accusamus.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Feature Item 2: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <h3 className="font-display text-2xl sm:text-[26px] font-bold text-[#1c2d42] leading-snug mb-3 [text-wrap:balance]">
                Corporis temporibus maiores provident
              </h3>
              <p className="italic text-slate-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
            >
              <div className="w-full max-w-md rounded-2xl bg-[#f4f8fb] p-6 border border-slate-100">
                <img
                  src={ASSETS.featureSync}
                  alt="Cloud synchronization across desktop and mobile"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Feature Item 3: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-[260px] rounded-[28px] bg-[#0f172a] p-2.5 shadow-xl border border-slate-200">
                <div className="rounded-[20px] overflow-hidden bg-white">
                  <img
                    src={ASSETS.screenAnalytics}
                    alt="SoftLand mobile productivity insights"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h3 className="font-display text-2xl sm:text-[26px] font-bold text-[#1c2d42] leading-snug mb-3 [text-wrap:balance]">
                Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas
              </h3>
              <p className="text-[15px] text-slate-600 leading-relaxed mb-5">
                Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod.
                Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.
              </p>
              <ul className="space-y-3 text-[15px] text-slate-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2d71a1] shrink-0 mt-0.5" />
                  <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2d71a1] shrink-0 mt-0.5" />
                  <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2d71a1] shrink-0 mt-0.5" />
                  <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Feature Item 4: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <h3 className="font-display text-2xl sm:text-[26px] font-bold text-[#1c2d42] leading-snug mb-3 [text-wrap:balance]">
                Quas et necessitatibus eaque impedit ut animi consequatur incidunt in
              </h3>
              <p className="italic text-slate-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
            >
              <div className="w-full max-w-[260px] rounded-[28px] bg-[#0f172a] p-2.5 shadow-xl border border-slate-200">
                <div className="rounded-[20px] overflow-hidden bg-white">
                  <img
                    src={ASSETS.screenWorkspace}
                    alt="SoftLand mobile team milestones feed"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
