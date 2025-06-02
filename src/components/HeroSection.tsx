
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-conic from-blue-500/20 via-purple-500/15 to-gold-500/10 rounded-full filter blur-[120px] animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-purple-500/25 via-blue-500/15 to-transparent rounded-full filter blur-[100px] animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-gold-500/10 via-blue-500/10 to-purple-500/10 rounded-full filter blur-[150px] animate-divine-flow"></div>
        
        {/* Sparkle effects */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-sparkle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-gold-400 rounded-full animate-sparkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-sparkle" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 space-y-8">
            <div className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-gold-500/20 backdrop-blur-xl border border-blue-400/40 mb-8 animate-fade-in shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider drop-shadow-lg">ILLUMINATE THE UNSEEN</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight animate-fade-in tracking-wide" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text block mb-2">Uncovering Hidden</span>
              <span className="gold-gradient-text block">Historical Patterns</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 animate-fade-in leading-relaxed drop-shadow-lg" style={{ animationDelay: '0.4s' }}>
              Analyze historical patterns beyond conventional narratives. Reveal the deeper structures that have guided civilization for millennia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a 
                href="https://chatgpt.com/g/g-67df2c4efaa08191a3cd57599826e2b8-uncovering-hidden-historical-patterns-gpt" 
                className="cyber-button w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-xl border-2 border-blue-400 overflow-hidden group" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider whitespace-nowrap relative z-10">USE HIDDEN HISTORICAL PATTERNS GPT</span>
              </a>
              
              <a 
                href="#how-it-works" 
                className="flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 md:py-5 text-white hover:text-white transition-all duration-500 w-full sm:w-auto whitespace-nowrap border-2 border-gold-500/60 hover:border-gold-400 bg-gradient-to-r from-gold-500/20 to-transparent hover:from-gold-500/40 hover:to-gold-500/20 rounded-xl transform hover:scale-105 hover:-translate-y-1 shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:shadow-[0_0_25px_rgba(217,119,6,0.6)]"
              >
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider">LEARN MORE</span>
                <ChevronDown size={18} className="ml-2 animate-bounce" />
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center animate-float-divine">
            <div className="absolute w-full h-full bg-gradient-conic from-blue-500/20 via-purple-500/20 to-gold-500/20 rounded-full filter blur-[80px] opacity-80 animate-spin-slow"></div>
            
            {/* Interactive Image with Enhanced Effects */}
            <a 
              href="https://chatgpt.com/g/g-67df2c4efaa08191a3cd57599826e2b8-uncovering-hidden-historical-patterns-gpt"
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative group"
            >
              <div className="absolute inset-0 border-2 border-gold-400 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105 rounded-2xl animate-pulse-glow"></div>
              <div className="absolute inset-0 border-2 border-blue-400 animate-pulse-glow rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.6)]"></div>
              
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/C64dUHYfTbCDZYoc7XYIHQ" 
                alt="Uncovering Hidden Historical Patterns" 
                className="w-full h-auto max-w-[380px] md:max-w-[450px] rounded-2xl shadow-2xl group-hover:shadow-[0_0_40px_rgba(217,175,55,0.7)] transition-all duration-500 transform group-hover:scale-105 relative z-10"
              />
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:via-gold-300 hover:to-gold-400 text-black font-bold py-3 px-8 rounded-xl shadow-[0_0_20px_rgba(217,119,6,0.6)] transition-all duration-500 opacity-0 group-hover:opacity-100 transform group-hover:scale-110 animate-pulse-glow">
                TRY IT NOW
              </div>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" aria-label="Scroll down" className="block">
            <ChevronDown size={36} className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] hover:text-gold-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
