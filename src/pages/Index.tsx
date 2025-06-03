
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
    // Update document title for SEO
    document.title = "AI Web Tools - Hidden Historical Patterns GPT | Best AI Tools for Historical Analysis";
    
    // Add additional meta tags dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover hidden historical patterns with AI Web Tools. Advanced AI tools for historical analysis, pattern recognition, and research. Free AI tools for education and historical investigation.');
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white overflow-x-hidden">
      {/* SEO-optimized header structure */}
      <Header />
      
      <main role="main">
        {/* Add semantic HTML structure for better SEO */}
        <article>
          <HeroSection />
          <section aria-label="AI Tools Features">
            <FeaturesSection />
          </section>
          <section aria-label="User Testimonials">
            <TestimonialsSection />
          </section>
          <section aria-label="Frequently Asked Questions">
            <FaqSection />
          </section>
          <section aria-label="Terms and Disclaimer">
            <DisclaimerSection />
          </section>
        </article>
      </main>
      
      <Footer />
      <ConsentPopup />
      
      {/* Hidden SEO content for additional keywords */}
      <div className="sr-only" aria-hidden="true">
        <h1>AI Web Tools - Leading Provider of Artificial Intelligence Tools</h1>
        <p>AIWEBTOOLS.AI offers the best AI tools for researchers, educators, and analysts. Our Hidden Historical Patterns GPT is an advanced AI tool for historical analysis and pattern recognition.</p>
        <p>Keywords: AI web tools, artificial intelligence tools, historical analysis AI, pattern recognition tools, free AI tools, educational AI technology, research AI tools, AIWEBTOOLS.AI, AI WEB TOOLS LLC</p>
      </div>
    </div>
  );
};

export default Index;
