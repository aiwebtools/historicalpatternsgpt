
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What is Uncovering Hidden Historical Patterns GPT?",
      answer: "It's an advanced AI tool designed to analyze historical events, symbols, institutions, and power structures beyond conventional narratives. It helps reveal patterns of continuity, suppression, and control, emphasizing how historical forces shape the present."
    },
    {
      question: "How does it differ from other historical analysis tools?",
      answer: "Unlike traditional historical analysis tools, this AI doesn't simply repeat accepted history but examines what is omitted, distorted, or hidden. It uses pattern recognition to identify recurring symbols and institutions across different time periods and civilizations."
    },
    {
      question: "Is this just promoting conspiracy theories?",
      answer: "No. The tool avoids unverifiable speculation and remains grounded in evidence-based analysis. Every assertion is supported by historical facts, patterns, and sources. The objective is to empower awareness and critical thinking, not to incite division or paranoia."
    },
    {
      question: "What kind of historical questions can I ask?",
      answer: "You can ask about historical events, secret societies, symbolism, financial systems, power structures, and how they connect to modern systems. The tool is particularly effective at identifying patterns across different historical periods."
    },
    {
      question: "How accurate is the information provided?",
      answer: "The tool provides mainstream accounts alongside alternative perspectives, always citing sources. It encourages users to cross-check information and think critically rather than accepting any single narrative as absolute truth."
    },
    {
      question: "Is there any bias in the analysis?",
      answer: "The tool is designed to question all narratives, including both mainstream and alternative ones. It encourages looking at history from multiple perspectives rather than promoting any single ideology or viewpoint."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="section">
      <h2 className="section-heading">
        Frequently Asked <span className="gold-gradient-text">Questions</span>
      </h2>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full text-left p-5 glass-card flex justify-between items-center transition-all duration-300 ${activeIndex === index ? 'neon-border' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <span className="font-semibold text-lg text-white">{faq.question}</span>
              {activeIndex === index ? 
                <ChevronUp className="w-5 h-5 text-cyberpunk-blue" /> : 
                <ChevronDown className="w-5 h-5 text-cyberpunk-blue" />
              }
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 bg-black/50 border-t-0 border border-cyberpunk-blue/30 rounded-b-lg">
                <p className="text-white/80">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
