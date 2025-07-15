
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Diego Fan</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            AI Engineering | ML Engineering | MLOps | LLMOps
          </p>
          <p className="text-lg text-foreground/60 mb-8 max-w-3xl mx-auto">
            Over 5 years of experience building scalable machine learning and generative AI solutions 
            that deliver real-world impact. Expert in GCP, Python, and end-to-end ML systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className="glass-effect hover-glow border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              size="lg"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail size={20} />
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="glass-effect hover-glow border-foreground/20"
              size="lg"
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown size={20} />
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/diegofan-636b1b1a2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover-glow hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/GAVB-SERVICOS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover-glow hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:diegoeco.fan@gmail.com"
              className="p-3 glass-effect rounded-full hover-glow hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-foreground/60" size={24} />
      </div>
    </section>
  );
};

export default Hero;
