
import { Eye } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  
  const footerLinks = [
    { name: 'Hidden Historical Patterns GPT', url: 'https://chatgpt.com/g/g-67df2c4efaa08191a3cd57599826e2b8-uncovering-hidden-historical-patterns-gpt' },
    { name: 'Oraculum', url: 'https://oraculum.lovable.app/?via=aiwebtools' },
    { name: 'FAQ', url: '#faq' },
    { name: 'Disclaimer', url: '#disclaimer' },
    { name: 'More AI Tools', url: 'https://www.aiwebtools.ai' }
  ];
  
  const legalLinks = [
    { name: 'Privacy Policy', url: 'https://openai.com/policies/privacy-policy/' },
    { name: 'Terms of Service', url: 'https://aiwebtools.lovable.app/disclaimers' }
  ];
  
  return (
    <footer className="bg-black/30 backdrop-blur-xl border-t border-gradient-to-r from-purple-500/30 via-blue-500/30 to-gold-500/30 pt-12 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gold-900/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-purple-500/10 via-blue-500/10 to-gold-500/10 rounded-full filter blur-[100px] animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-gold-500/15 to-transparent rounded-full filter blur-[80px] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Eye size={isMobile ? 22 : 26} className="text-blue-400 animate-pulse drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-gold-400 bg-clip-text text-transparent drop-shadow-lg">Hidden Historical Patterns AI</h2>
            </div>
            <p className="text-sm text-blue-300 font-semibold drop-shadow-md">Presented by AiWebTools.ai</p>
            <p className="text-sm md:text-base text-white/90 mb-6 leading-relaxed drop-shadow-sm">
              Revealing the deeper currents that have guided civilization for millennia, beyond surface-level narratives.
            </p>
            <p className="text-xs text-gold-300 font-medium bg-gradient-to-r from-gold-500/20 to-transparent p-3 rounded-lg border border-gold-500/30">
              For informational, educational, and research purposes only
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
              <a 
                href="tel:+14758008096"
                className="text-sm md:text-base font-semibold tracking-wide text-blue-300 hover:text-purple-300 transition-all duration-300 hover:underline drop-shadow-md hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]"
              >
                (475) 800-8096
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com"
                className="text-sm md:text-base font-semibold tracking-wide text-blue-300 hover:text-purple-300 transition-all duration-300 hover:underline drop-shadow-md hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]"
              >
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-white mb-6 drop-shadow-lg">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-sm md:text-base font-semibold tracking-wide text-white/90 hover:text-blue-300 transition-all duration-300 hover:translate-x-2 transform inline-block drop-shadow-md hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-white mb-6 drop-shadow-lg">Legal</h3>
            <ul className="space-y-4 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-sm md:text-base font-semibold tracking-wide text-white/90 hover:text-blue-300 transition-all duration-300 hover:translate-x-2 transform inline-block drop-shadow-md hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://www.aiwebtools.ai"
              className="inline-flex items-center justify-center rounded-lg px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 via-purple-600 to-gold-600 hover:from-purple-600 hover:via-gold-600 hover:to-blue-600 transition-all duration-500 shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(217,119,6,0.7)] transform hover:scale-105 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </div>
        </div>
        
        <div className="border-t border-gradient-to-r from-purple-500/30 via-blue-500/30 to-gold-500/30 pt-8">
          <p className="text-center text-sm md:text-base text-white/70 drop-shadow-md">
            <a 
              href="https://www.aiwebtools.ai"
              className="hover:text-blue-300 transition-all duration-300 font-semibold hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
