
import { ChevronDown } from 'lucide-react';
import ThreeDPyramid from './ThreeDPyramid';

const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyberpunk-blue/10 rounded-full filter blur-[80px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-cyberpunk-purple/10 rounded-full filter blur-[80px] animate-pulse-glow" style={{
        animationDelay: '1s'
      }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <div className="inline-block px-3 py-1 rounded-full bg-cyberpunk-blue/20 backdrop-blur-sm border border-cyberpunk-blue/40 mb-6 animate-fade-in">
              <span className="text-sm font-medium text-cyberpunk-blue">Illuminate The Unseen</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <span className="gradient-text">Uncovering Hidden</span><br />
              <span className="gold-gradient-text">Historical Patterns</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              Analyze historical patterns beyond conventional narratives. Reveal the deeper structures that have guided civilization for millennia.
            </p>
            
            {/* Image Section - Inserted here between text and buttons */}
            <div className="glass-card p-4 mb-8 neon-border animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
              <a href="https://ideogram.ai/assets/image/lossless/response/C64dUHYfTbCDZYoc7XYIHQ" target="_blank" rel="noopener noreferrer">
                <img src="https://ideogram.ai/assets/image/lossless/response/C64dUHYfTbCDZYoc7XYIHQ" alt="Uncovering Hidden Historical Patterns" className="w-full h-auto rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300" loading="lazy" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <a href="https://chatgpt.com/g/g-67df2c4efaa08191a3cd57599826e2b8-uncovering-hidden-historical-patterns-gpt" className="cyber-button w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                <span>Use Hidden Historical Patterns GPT</span>
              </a>
              
              <a href="#how-it-works" className="flex items-center justify-center px-6 py-3 text-white/80 hover:text-white transition-colors w-full sm:w-auto">
                Learn More
                <ChevronDown size={16} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center animate-float">
            <div className="absolute w-full h-full bg-gradient-to-r from-cyberpunk-blue/20 to-cyberpunk-purple/20 rounded-full filter blur-[50px] opacity-70"></div>
            <div className="relative h-[400px] w-[400px] mx-auto">
              <ThreeDPyramid />
              <div className="absolute inset-0 bg-cyberpunk-blue/10 rounded-full animate-pulse opacity-50"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" aria-label="Scroll down">
            <ChevronDown size={32} className="text-cyberpunk-blue" />
          </a>
        </div>
      </div>
    </section>;
};

export default HeroSection;
