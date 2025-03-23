
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
  
  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white overflow-x-hidden">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
        <DisclaimerSection />
      </main>
      
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
