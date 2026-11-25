import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { ASSETS } from '../data/softlandData';

interface GallerySlide {
  id: string;
  title: string;
  caption: string;
  image: string;
}

const GALLERY_SLIDES: GallerySlide[] = [
  {
    id: 'gallery-1',
    title: 'Analytics Dashboard',
    caption: 'Real-time team productivity and goal tracking',
    image: ASSETS.screenAnalytics,
  },
  {
    id: 'gallery-2',
    title: 'Team Collaboration',
    caption: 'Instant updates, code merges, and milestone feeds',
    image: ASSETS.screenWorkspace,
  },
  {
    id: 'gallery-3',
    title: 'Workflow Insights',
    caption: 'Weekly sprint performance and velocity breakdown',
    image: ASSETS.screenAnalytics,
  },
  {
    id: 'gallery-4',
    title: 'Project Milestones',
    caption: 'Clear ownership and timeline visibility across teams',
    image: ASSETS.screenWorkspace,
  },
  {
    id: 'gallery-5',
    title: 'Task Reporting',
    caption: 'Automated daily summaries and workload balance',
    image: ASSETS.screenAnalytics,
  },
];

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxSlide, setLightboxSlide] = useState<GallerySlide | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? GALLERY_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === GALLERY_SLIDES.length - 1 ? 0 : prev + 1));
  };

  // Compute 3 visible items centered around activeIndex for desktop carousel feel
  const getVisibleSlides = () => {
    const len = GALLERY_SLIDES.length;
    const prevIdx = (activeIndex - 1 + len) % len;
    const nextIdx = (activeIndex + 1) % len;
    return [
      { slide: GALLERY_SLIDES[prevIdx], idx: prevIdx, position: 'left' as const },
      { slide: GALLERY_SLIDES[activeIndex], idx: activeIndex, position: 'center' as const },
      { slide: GALLERY_SLIDES[nextIdx], idx: nextIdx, position: 'right' as const },
    ];
  };

  return (
    <section id="gallery" className="py-20 bg-[#f4f8fb]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display text-[30px] sm:text-[36px] font-bold text-[#1c2d42] mb-3">
            Gallery
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous app screenshot"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#1c2d42] hover:bg-[#2d71a1] hover:text-white hover:border-[#2d71a1] flex items-center justify-center shadow-sm transition-colors duration-200 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d71a1]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-4xl w-full">
              {getVisibleSlides().map(({ slide, idx, position }) => {
                const isCenter = position === 'center';
                return (
                  <button
                    key={`${slide.id}-${position}`}
                    type="button"
                    onClick={() => {
                      if (isCenter) {
                        setLightboxSlide(slide);
                      } else {
                        setActiveIndex(idx);
                      }
                    }}
                    className={`group relative text-left transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d71a1] rounded-[30px] ${
                      isCenter
                        ? 'scale-100 opacity-100 z-10'
                        : 'hidden md:block scale-90 opacity-70 hover:opacity-95'
                    }`}
                  >
                    <div
                      className={`rounded-[30px] p-2.5 bg-[#0f172a] transition-shadow duration-300 ${
                        isCenter
                          ? 'ring-4 ring-[#2d71a1]/30 shadow-[0_24px_50px_rgba(45,113,161,0.22)]'
                          : 'shadow-lg'
                      }`}
                    >
                      <div className="relative rounded-[22px] overflow-hidden bg-white aspect-[9/16]">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        {isCenter && (
                          <div className="absolute inset-0 bg-[#1c2d42]/0 group-hover:bg-[#1c2d42]/20 transition-colors duration-200 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-[#1c2d42] px-3 py-1.5 rounded-md text-xs font-semibold shadow-md inline-flex items-center gap-1.5">
                              <Maximize2 className="w-3.5 h-3.5" />
                              Preview
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    {isCenter && (
                      <div className="text-center mt-4">
                        <p className="font-display font-semibold text-[#1c2d42] text-base">
                          {slide.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">{slide.caption}</p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next app screenshot"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#1c2d42] hover:bg-[#2d71a1] hover:text-white hover:border-[#2d71a1] flex items-center justify-center shadow-sm transition-colors duration-200 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d71a1]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {GALLERY_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View screenshot ${idx + 1}: ${slide.title}`}
                className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-7 bg-[#2d71a1]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxSlide && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLightboxSlide(null)}
        >
          <div
            className="relative bg-white rounded-2xl p-4 sm:p-6 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxSlide(null)}
              aria-label="Close lightbox"
              className="absolute top-3 right-3 p-2 text-slate-500 hover:text-slate-800 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-xl overflow-hidden border border-slate-200 mb-4 max-h-[65vh]">
              <img
                src={lightboxSlide.image}
                alt={lightboxSlide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-display font-bold text-lg text-[#1c2d42]">
              {lightboxSlide.title}
            </h3>
            <p className="text-sm text-slate-600 mt-1">{lightboxSlide.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
