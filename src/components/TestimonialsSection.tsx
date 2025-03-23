
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Alexandra Morgan",
      title: "Historian & Researcher",
      content: "This tool has completely transformed my research process. I've uncovered connections between historical events that I had never considered before. It's like having an AI research assistant that thinks outside the conventional historical framework.",
      stars: 5
    },
    {
      name: "Michael Chen",
      title: "History Professor",
      content: "As someone who has taught history for over two decades, I was skeptical at first. But this AI tool presents alternative perspectives that challenge my students to think critically about historical narratives. It's now an essential part of my teaching toolkit.",
      stars: 5
    },
    {
      name: "Sarah Williams",
      title: "Independent Researcher",
      content: "The pattern recognition capabilities are remarkable. I've been researching financial systems throughout history, and this tool helped me identify recurring mechanisms of control that span centuries. Highly recommended for anyone seeking deeper understanding.",
      stars: 4
    }
  ];
  
  return (
    <section className="section bg-black/30 backdrop-blur-sm py-24">
      <h2 className="section-heading mb-16">
        What <span className="gold-gradient-text">Researchers</span> Are Saying
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="glass-card p-8 transition-all duration-300 hover:neon-border"
          >
            <div className="flex space-x-1 mb-4">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-cyberpunk-gold text-cyberpunk-gold" />
              ))}
              {[...Array(5 - testimonial.stars)].map((_, i) => (
                <Star key={i + testimonial.stars} className="w-5 h-5 text-gray-500" />
              ))}
            </div>
            
            <p className="text-white/80 mb-6">"{testimonial.content}"</p>
            
            <div>
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-cyberpunk-blue">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join thousands of researchers, historians, and truth-seekers who are uncovering the hidden patterns of history.
        </p>
        
        <a 
          href="https://chatgpt.com/g/g-67df2c4efaa08191a3cd57599826e2b8-uncovering-hidden-historical-patterns-gpt"
          className="cyber-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Try It Now</span>
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
