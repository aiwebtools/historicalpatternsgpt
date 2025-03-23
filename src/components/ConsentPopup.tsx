
import { useState, useEffect } from 'react';

const ConsentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('has-consented');
    
    if (!hasConsented) {
      setIsOpen(true);
    }
  }, []);
  
  const handleConsent = () => {
    localStorage.setItem('has-consented', 'true');
    setIsOpen(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in p-4">
      <div className="glass-card max-w-lg w-full p-6 md:p-8 relative">
        <h3 className="text-xl font-bold mb-4 text-white">Disclaimer</h3>
        
        <p className="text-white/80 mb-6">
          By using "Uncovering Hidden Historical Patterns GPT," you acknowledge that:
        </p>
        
        <ul className="list-disc list-inside space-y-2 text-white/80 mb-6">
          <li>This tool is for educational and informational purposes only</li>
          <li>The content should be critically evaluated and cross-referenced</li>
          <li>You will exercise independent judgment when interpreting historical information</li>
          <li>The tool presents alternative perspectives for consideration, not absolute truths</li>
        </ul>
        
        <button
          onClick={handleConsent}
          className="w-full cyber-button"
        >
          <span>I Agree</span>
        </button>
      </div>
    </div>
  );
};

export default ConsentPopup;
