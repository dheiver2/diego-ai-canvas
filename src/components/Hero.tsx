
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/40 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/40 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-500/40 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Diego Fan</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/95 mb-4 font-semibold">
            AI Engineering | ML Engineering | MLOps | LLMOps
          </p>
          <p className="text-lg text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Over 5 years of experience building scalable machine learning and generative AI solutions 
            that deliver real-world impact. Expert in GCP, Python, and end-to-end ML systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              className="btn-primary"
              size="lg"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get In Touch
                <Mail size={20} />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline"
              size="lg"
              asChild
            >
              <Link to="/projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown size={20} />
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/diegofan-636b1b1a2", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/GAVB-SERVICOS", label: "GitHub" },
              { icon: Mail, href: "mailto:diegoeco.fan@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a 
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="p-4 glass-effect rounded-full hover-glow hover:text-primary transition-all duration-300 group"
                aria-label={label}
              >
                <Icon size={28} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-foreground/60" size={28} />
      </div>
    </section>
  );
};

export default Hero;
