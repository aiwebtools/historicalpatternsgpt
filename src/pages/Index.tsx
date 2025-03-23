
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
      
      <main className="pt-32">
        {/* Moved Embedded Image Section to be above the HeroSection */}
        <section className="section text-center">
          <h2 className="section-heading mb-10">
            Explore <span className="gold-gradient-text">The Truth Hidden In Plain sight</span>
          </h2>
          
          <div className="max-w-3xl mx-auto glass-card p-6 neon-border">
            <a href="https://ideogram.ai/assets/image/lossless/response/C64dUHYfTbCDZYoc7XYIHQ" target="_blank" rel="noopener noreferrer">
              <img src="https://ideogram.ai/assets/image/lossless/response/C64dUHYfTbCDZYoc7XYIHQ" alt="Uncovering Hidden Historical Patterns" className="w-full h-auto rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300" loading="lazy" />
            </a>
            <p className="mt-4 text-white/70">
            </p>
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
