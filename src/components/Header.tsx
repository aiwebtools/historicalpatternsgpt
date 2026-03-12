
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
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-6',
      isScrolled
        ? 'bg-black/70 backdrop-blur-lg border-b border-cyberpunk-blue/30'
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2 min-w-0">
            <Eye size={isMobile ? 22 : 28} className="text-cyberpunk-blue animate-pulse-glow flex-shrink-0" />
            <div className="min-w-0">
              <h1 className={`${isMobile ? 'text-base' : 'text-xl'} font-extrabold gradient-text tracking-wider truncate`}>
                Hidden Historical Patterns AI
              </h1>
              <p className="text-xs text-cyberpunk-blue font-medium">Presented by AiWebTools.ai</p>
            </div>
          </a>
          
          <button
            className="md:hidden text-white p-2 -mr-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <nav className="hidden md:flex items-center space-x-3 flex-wrap justify-end">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url}
                className="nav-button text-sm font-bold tracking-wide px-3 py-2 border-2 border-cyberpunk-blue/50 bg-black/40 hover:bg-cyberpunk-blue/20 transition-all duration-300 hover:border-cyberpunk-blue text-cyberpunk-blue hover:text-white whitespace-nowrap"
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[56px] bg-black/95 backdrop-blur-lg border-b border-cyberpunk-blue/30 p-4 z-50">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="font-bold text-cyberpunk-blue border-2 border-cyberpunk-blue/50 px-4 py-3 hover:bg-cyberpunk-blue/20 transition-all duration-200 text-sm active:bg-cyberpunk-blue/30"
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
