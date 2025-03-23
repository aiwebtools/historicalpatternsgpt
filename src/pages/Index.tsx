
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import DisclaimerSection from '@/components/DisclaimerSection';
import ConsentPopup from '@/components/ConsentPopup';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Uncovering Hidden Historical Patterns GPT | Revealing Historical Truths";
  }, []);

  return <div className="min-h-screen bg-cyberpunk-dark text-white">
      <Header />
      
      <main className="pt-24">
        {/* Embedded Image Section - Moved to top */}
        <section className="section text-center mt-4 mb-8">
          <div className="max-w-3xl mx-auto glass-card p-6 neon-border">
            <a href="https://ideogram.ai/assets/image/lossless/response/C64dUHYfTbCDZYoc7XYIHQ" target="_blank" rel="noopener noreferrer">
              <img src="https://ideogram.ai/assets/image/lossless/response/C64dUHYfTbCDZYoc7XYIHQ" alt="Uncovering Hidden Historical Patterns" className="w-full h-auto rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300" loading="lazy" />
            </a>
          </div>
        </section>
        
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
        <DisclaimerSection />
      </main>
      
      <Footer />
      <ConsentPopup />
    </div>;
};

export default Index;
