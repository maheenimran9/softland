import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'features', 'gallery', 'pricing', 'faq', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#274685]/95 backdrop-blur-md shadow-md py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded"
        >
          SoftLand
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`relative text-[15px] font-medium transition-colors duration-200 whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#6fd1e8] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-white/15 hover:bg-white/25 border border-white/30 rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Contact
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-white rounded-md hover:bg-white/15 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#1f3d76] border-t border-white/15 shadow-xl">
          <nav className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-2">
            {[...NAV_LINKS, { id: 'contact', label: 'Contact' }].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`py-2.5 px-3 rounded-md text-[15px] font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-white/15 text-white'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
