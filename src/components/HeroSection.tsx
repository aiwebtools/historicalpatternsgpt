
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
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
            <div className="inline-block px-3 py-1 rounded-none bg-cyberpunk-blue/20 backdrop-blur-sm border border-cyberpunk-blue/40 mb-6 animate-fade-in">
              <span className="text-sm font-bold text-cyberpunk-blue tracking-wider">ILLUMINATE THE UNSEEN</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in tracking-wide" style={{
            animationDelay: '0.2s'
          }}>
              <span className="gradient-text">Uncovering Hidden</span><br />
              <span className="gold-gradient-text">Historical Patterns</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              Analyze historical patterns beyond conventional narratives. Reveal the deeper structures that have guided civilization for millennia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <a href="https://chatgpt.com/g/g-67df2c4efaa08191a3cd57599826e2b8-uncovering-hidden-historical-patterns-gpt" 
                 className="cyber-button w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-none border-2 border-cyberpunk-blue overflow-hidden" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider whitespace-nowrap">USE HIDDEN HISTORICAL PATTERNS GPT</span>
              </a>
              
              <a href="#how-it-works" 
                 className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 md:py-4 text-white hover:text-white transition-colors w-full sm:w-auto whitespace-nowrap border-2 border-cyberpunk-gold/50 hover:border-cyberpunk-gold hover:bg-cyberpunk-gold/10">
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider">LEARN MORE</span>
                <ChevronDown size={16} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center animate-float">
            <div className="absolute w-full h-full bg-gradient-to-r from-cyberpunk-blue/20 to-cyberpunk-purple/20 rounded-full filter blur-[50px] opacity-70"></div>
            
            {/* Interactive Image with Link - Replaces the 3D Pyramid */}
            <a 
              href="https://chatgpt.com/g/g-67df2c4efaa08191a3cd57599826e2b8-uncovering-hidden-historical-patterns-gpt"
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative group"
            >
              <div className="absolute inset-0 border-2 border-cyberpunk-gold opacity-0 group-hover:opacity-100 transition-all duration-300 scale-105 rounded-lg"></div>
              <div className="absolute inset-0 border-2 border-cyberpunk-blue animate-pulse-glow rounded-lg"></div>
              
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/C64dUHYfTbCDZYoc7XYIHQ" 
                alt="Uncovering Hidden Historical Patterns" 
                className="w-full h-auto max-w-[350px] md:max-w-[400px] rounded-lg shadow-lg group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-cyberpunk-gold/80 hover:bg-cyberpunk-gold text-black font-bold py-2 px-6 rounded-none shadow-gold transition-all duration-300 opacity-0 group-hover:opacity-100">
                TRY IT NOW
              </div>
            </a>
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
