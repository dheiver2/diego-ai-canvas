
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-primary/15 rounded-full blur-3xl floating-element" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block mb-4">Diego</span>
              <span className="gradient-text shimmer-effect">Fan</span>
            </h1>
          </div>
          
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-6 font-light">
              Machine Learning Engineer
            </p>
            <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Building intelligent systems with <span className="text-primary font-semibold">AI/ML</span>, 
              <span className="text-accent font-semibold"> Cloud Infrastructure</span>, and 
              <span className="text-primary font-semibold"> Generative AI</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-4 h-auto">
              <Link to="/projects">
                View My Work
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <a 
              href="https://github.com/GAVB-SERVICOS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect p-4 rounded-xl hover-glow group transition-all duration-300"
            >
              <Github className="text-foreground group-hover:text-primary transition-colors" size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/diegofan-636b1b1a2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect p-4 rounded-xl hover-glow group transition-all duration-300"
            >
              <Linkedin className="text-foreground group-hover:text-primary transition-colors" size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNext}
            className="glass-effect p-3 rounded-full hover-glow group transition-all duration-300"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="text-foreground group-hover:text-primary transition-colors" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
