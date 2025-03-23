
import { Eye, Pyramid, Shield, Globe, BookOpen, Brain } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-cyberpunk-blue" />,
      title: "Pattern Recognition",
      description: "Identify recurring symbols, institutions, and financial mechanisms across different time periods and civilizations."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-cyberpunk-blue" />,
      title: "Source Comparison",
      description: "Cross-reference mainstream historical sources with alternative accounts and primary documents to detect inconsistencies."
    },
    {
      icon: <Shield className="w-8 h-8 text-cyberpunk-blue" />,
      title: "Control Mechanisms",
      description: "Examine how historical education is shaped by power structures and identify controlled opposition movements."
    },
    {
      icon: <Pyramid className="w-8 h-8 text-cyberpunk-blue" />,
      title: "Symbolism Analysis",
      description: "Decipher the recurring use of symbols and trace the migration of power through esoteric orders and fraternal societies."
    },
    {
      icon: <Brain className="w-8 h-8 text-cyberpunk-blue" />,
      title: "Critical Thinking",
      description: "Develop the ability to question narratives and see beyond the surface-level historical accounts."
    },
    {
      icon: <Globe className="w-8 h-8 text-cyberpunk-blue" />,
      title: "Global Perspective",
      description: "Understand how trade routes, central banking, and elite families maintain control across centuries and continents."
    }
  ];
  
  return (
    <section id="features" className="section">
      <h2 className="section-heading">
        Illuminate The <span className="gold-gradient-text">Hidden Patterns</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="glass-card p-6 transition-all duration-300 hover:neon-border hover:scale-105"
          >
            <div className="w-14 h-14 rounded-full bg-cyberpunk-blue/20 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
            <p className="text-white/70">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 glass-card p-8 md:p-12" id="how-it-works">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-cyberpunk-blue/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-cyberpunk-blue">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Ask Your Questions</h3>
            <p className="text-white/70">Start with your historical inquiry or area of interest. The more specific, the better.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-cyberpunk-blue/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-cyberpunk-blue">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Advanced Analysis</h3>
            <p className="text-white/70">AI examines historical sources, identifies patterns, and compares conflicting narratives.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-cyberpunk-blue/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-cyberpunk-blue">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Discover Insights</h3>
            <p className="text-white/70">Receive detailed analysis that reveals the deeper currents shaping historical narratives.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://chatgpt.com/g/g-67df2c4efaa08191a3cd57599826e2b8-uncovering-hidden-historical-patterns-gpt"
            className="cyber-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Start Uncovering Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
