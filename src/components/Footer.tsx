import { Globe, Share2, MessageSquare, AtSign } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1c2d42] text-white py-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        <h3 className="font-display text-3xl font-bold tracking-tight mb-3">SoftLand</h3>
        <p className="text-white/75 text-sm sm:text-[15px] max-w-xl mx-auto italic mb-7">
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime
          saepe commodi placeat.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mb-9">
          <a
            href="#hero"
            aria-label="SoftLand Community"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2d71a1] text-white flex items-center justify-center transition-colors duration-200"
          >
            <Globe className="w-4 h-4" />
          </a>
          <a
            href="#about"
            aria-label="SoftLand Updates"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2d71a1] text-white flex items-center justify-center transition-colors duration-200"
          >
            <Share2 className="w-4 h-4" />
          </a>
          <a
            href="#features"
            aria-label="SoftLand Support"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2d71a1] text-white flex items-center justify-center transition-colors duration-200"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            aria-label="Email SoftLand"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2d71a1] text-white flex items-center justify-center transition-colors duration-200"
          >
            <AtSign className="w-4 h-4" />
          </a>
        </div>

        <div className="border-t border-white/10 pt-7 text-xs sm:text-sm text-white/70 space-y-1.5">
          <p>
            &copy; Copyright <strong className="text-white font-semibold">SoftLand</strong>. All
            Rights Reserved
          </p>
          <p className="text-white/60">
            App Showcase &amp; SaaS Landing Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
