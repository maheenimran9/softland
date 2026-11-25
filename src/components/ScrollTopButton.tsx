import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-[#2d71a1] hover:bg-[#235b82] text-white shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d71a1] focus-visible:ring-offset-2 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
