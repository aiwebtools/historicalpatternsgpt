
import { Eye } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'Uncovering Hidden Historical Patterns GPT', url: 'https://chatgpt.com/g/g-67df2c4efaa08191a3cd57599826e2b8-uncovering-hidden-historical-patterns-gpt' },
    { name: 'You may also like Oraculum – The Illuminator of Hidden Truths', url: 'https://oraculum.lovable.app/?via=aiwebtools' },
    { name: 'FAQ', url: '#faq' },
    { name: 'Disclaimer', url: '#disclaimer' },
    { name: 'More AI Tools', url: 'https://www.aiwebtools.ai' }
  ];
  
  const legalLinks = [
    { name: 'Privacy Policy', url: 'https://openai.com/policies/privacy-policy/' },
    { name: 'Terms of Service', url: 'https://aiwebtools.ai/terms-of-services' }
  ];
  
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-cyberpunk-blue/20 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Eye size={24} className="text-cyberpunk-blue" />
              <h2 className="text-lg font-bold gradient-text">Uncovering Hidden Historical Patterns GPT</h2>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Revealing the deeper currents that have guided civilization for millennia, beyond surface-level narratives.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:+14758008096"
                className="text-sm text-cyberpunk-blue hover:text-cyberpunk-purple transition-colors duration-200"
              >
                (475) 800-8096
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com"
                className="text-sm text-cyberpunk-blue hover:text-cyberpunk-purple transition-colors duration-200"
              >
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-sm text-white/70 hover:text-cyberpunk-blue transition-colors duration-200"
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
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-sm text-white/70 hover:text-cyberpunk-blue transition-colors duration-200"
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
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple hover:from-cyberpunk-purple hover:to-cyberpunk-blue transition-colors duration-300 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-sm text-white/50">
            <a 
              href="https://www.aiwebtools.ai"
              className="hover:text-cyberpunk-blue transition-colors duration-200"
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
