import { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Play, X, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/softlandData';

export function HeroSection() {
  const [downloadModal, setDownloadModal] = useState<'Google Play' | 'App Store' | null>(null);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-32 md:pb-40 overflow-hidden bg-[#1f3d76]"
    >
      <img
        src={ASSETS.heroBg}
        alt="SoftLand modern architectural background"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(31, 61, 118, 0.92) 0%, rgba(45, 113, 161, 0.88) 55%, rgba(61, 179, 197, 0.85) 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
          {/* Left Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <h1 className="font-display text-white font-bold tracking-tight leading-[1.15] text-[clamp(2.25rem,4vw,3.5rem)] [text-wrap:balance] mb-5">
              Promote Your App with SoftLand
            </h1>
            <p className="text-white/85 text-lg sm:text-[19px] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              We are team of talented designers making websites with Bootstrap
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => setDownloadModal('Google Play')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0f172a]/90 hover:bg-[#0f172a] text-white text-[15px] font-semibold rounded-lg border border-white/15 shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Google Play</span>
              </button>

              <button
                type="button"
                onClick={() => setDownloadModal('App Store')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white text-[15px] font-semibold rounded-lg border border-white/30 shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Smartphone className="w-4 h-4" />
                <span>App Store</span>
              </button>
            </div>
          </motion.div>

          {/* Right Hero Dual Overlapping Phone Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] sm:w-[390px] h-[410px] sm:h-[480px] flex items-center justify-center">
              {/* Back Phone */}
              <div className="absolute right-0 sm:right-2 top-6 w-[190px] sm:w-[235px] aspect-[9/18.5] rounded-[28px] bg-[#0f172a] p-2 shadow-2xl border border-white/20 transform rotate-6 opacity-95">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-white">
                  <img
                    src={ASSETS.screenWorkspace}
                    alt="SoftLand mobile workspace feed screen"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Front Hero Phone */}
              <div className="phone-float-slow relative z-10 -left-8 sm:-left-10 -top-2 w-[205px] sm:w-[250px] aspect-[9/18.5] rounded-[30px] bg-[#0f172a] p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.45)] border border-white/25">
                <div className="w-16 h-1.5 bg-slate-700 rounded-full mx-auto mb-1.5" />
                <div className="w-full h-[calc(100%-12px)] rounded-[22px] overflow-hidden bg-white">
                  <img
                    src={ASSETS.screenAnalytics}
                    alt="SoftLand mobile analytics dashboard screen"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Signature Animated SVG Waves */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[60px] sm:h-[90px] z-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="hero-wave-1">
          <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, 0.15)" />
        </g>
        <g className="hero-wave-2">
          <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, 0.25)" />
        </g>
        <g className="hero-wave-3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#ffffff" />
        </g>
      </svg>

      {/* Store Preview Modal */}
      {downloadModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setDownloadModal(null)}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-[#2d71a1]/10 text-[#2d71a1] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#1c2d42]">
                    SoftLand for {downloadModal}
                  </h3>
                  <p className="text-sm text-slate-500">Ready to install on mobile devices</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDownloadModal(null)}
                aria-label="Close download modal"
                className="p-2 text-slate-400 hover:text-slate-700 rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Download the SoftLand companion app from {downloadModal} to manage your projects,
              collaborate with your team, and track analytics on the go.
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setDownloadModal(null)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg cursor-pointer"
              >
                Close
              </button>
              <a
                href="#pricing"
                onClick={() => setDownloadModal(null)}
                className="px-5 py-2 text-sm font-semibold text-white bg-[#2d71a1] hover:bg-[#235a82] rounded-lg transition-colors"
              >
                View Plans
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
