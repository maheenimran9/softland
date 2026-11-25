import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedSection } from './components/FeaturedSection';
import { CardsStepsSection } from './components/CardsStepsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollTopButton } from './components/ScrollTopButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#444444] antialiased selection:bg-[#2d71a1]/20 selection:text-[#1c2d42]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedSection />
        <CardsStepsSection />
        <FeaturesSection />
        <GallerySection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
