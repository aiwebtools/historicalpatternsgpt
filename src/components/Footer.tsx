
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
    { name: 'Terms of Service', url: 'https://aiwebtools.ai/terms-of-services' }
  ];
  
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-cyberpunk-blue/20 pt-8 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Eye size={isMobile ? 20 : 24} className="text-cyberpunk-blue" />
              <h2 className="text-base md:text-lg font-bold gradient-text">Hidden Historical Patterns AI</h2>
            </div>
            <p className="text-xs text-cyberpunk-blue font-medium">Presented by AiWebTools.ai</p>
            <p className="text-xs md:text-sm text-white/70 mb-4 mt-2">
              Revealing the deeper currents that have guided civilization for millennia, beyond surface-level narratives.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:+14758008096"
                className="text-xs md:text-sm font-medium tracking-wide text-cyberpunk-blue hover:text-cyberpunk-purple transition-colors duration-200 hover:underline"
              >
                (475) 800-8096
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com"
                className="text-xs md:text-sm font-medium tracking-wide text-cyberpunk-blue hover:text-cyberpunk-purple transition-colors duration-200 hover:underline"
              >
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base md:text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-xs md:text-sm font-medium tracking-wide text-white/80 hover:text-cyberpunk-blue transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base md:text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-xs md:text-sm font-medium tracking-wide text-white/80 hover:text-cyberpunk-blue transition-colors duration-200 hover:translate-x-1 transform inline-block"
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
              className="inline-flex items-center justify-center rounded-none px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium tracking-wider text-white bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple hover:from-cyberpunk-purple hover:to-cyberpunk-blue transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-xs md:text-sm text-white/50">
            <a 
              href="https://www.aiwebtools.ai"
              className="hover:text-cyberpunk-blue transition-colors duration-200 font-medium"
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
