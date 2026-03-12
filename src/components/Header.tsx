
import { useState, useEffect } from 'react';
import { Menu, X, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: 'Hidden Historical Patterns GPT', url: 'https://chatgpt.com/g/g-67df2c4efaa08191a3cd57599826e2b8-uncovering-hidden-historical-patterns-gpt' },
    { name: 'Oraculum', url: 'https://oraculum.lovable.app/?via=aiwebtools' },
    { name: 'FAQ', url: '#faq' },
    { name: 'Disclaimer', url: '#disclaimer' },
    { name: 'More AI Tools', url: 'https://aiwebtools.lovable.app/?via=aiwebtools' }
  ];
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 md:py-6',
      isScrolled
        ? 'bg-black/70 backdrop-blur-lg border-b border-cyberpunk-blue/30'
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="/" className="flex items-center space-x-2">
            <Eye size={isMobile ? 24 : 28} className="text-cyberpunk-blue animate-pulse-glow" />
            <div>
              <h1 className={`${isMobile ? 'text-lg' : 'text-xl'} font-extrabold gradient-text tracking-wider`}>
                {isMobile ? 'Hidden Historical Patterns AI' : 'Hidden Historical Patterns AI'}
              </h1>
              <p className="text-xs text-cyberpunk-blue font-medium">Presented by AiWebTools.ai</p>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-4 mt-2 md:mt-0 flex-wrap justify-center">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url}
                className="nav-button text-sm font-bold tracking-wide px-4 py-2 border-2 border-cyberpunk-blue/50 bg-black/40 hover:bg-cyberpunk-blue/20 transition-all duration-300 hover:border-cyberpunk-blue text-cyberpunk-blue hover:text-white my-1"
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <button
            className="md:hidden text-white absolute top-4 right-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`
        md:hidden fixed inset-x-0 top-[70px] bg-black/90 backdrop-blur-lg border-b border-cyberpunk-blue/30 p-4
        transition-all duration-300 ease-in-out z-50
        ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
      `}>
        <nav className="flex flex-col space-y-3">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              className="font-bold text-cyberpunk-blue border-2 border-cyberpunk-blue/50 px-4 py-2 hover:bg-cyberpunk-blue/20 transition-all duration-300 text-sm"
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
