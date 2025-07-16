
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/50 rounded-full mix-blend-multiply filter blur-xl floating-element"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/50 rounded-full mix-blend-multiply filter blur-xl floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-500/50 rounded-full mix-blend-multiply filter blur-xl floating-element" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-20 w-64 h-64 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-2xl floating-element" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-2xl floating-element" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight relative">
              <span className="inline-block animate-scale-in" style={{ animationDelay: '0.2s' }}>Hi, I'm</span>
              {' '}
              <span className="inline-block animate-scale-in shimmer-effect gradient-text" style={{ animationDelay: '0.4s' }}>Diego Fan</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
            </h1>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/95 mb-4 lg:mb-6 font-semibold relative">
              <span className="relative z-10">AI Engineering | ML Engineering | MLOps | LLMOps</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
            </p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
              Over 5 years of experience building scalable machine learning and generative AI solutions 
              that deliver real-world impact. Expert in GCP, Python, and end-to-end ML systems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 justify-center mb-8 lg:mb-16 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <Button 
              className="btn-primary text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 gradient-border hover:scale-105 transform transition-all duration-300 animate-pulse-glow group relative overflow-hidden"
              size="lg"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2 lg:gap-3">
                <span className="relative z-10">Get In Touch</span>
                <Mail size={20} className="lg:w-6 lg:h-6 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 hover:scale-105 transform transition-all duration-300 relative overflow-hidden group"
              size="lg"
              asChild
            >
              <Link to="/projects" className="flex items-center gap-2 lg:gap-3">
                <span className="relative z-10">View My Work</span>
                <ArrowDown size={20} className="lg:w-6 lg:h-6 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-4 lg:space-x-8 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/diegofan-636b1b1a2", label: "LinkedIn", delay: '1s' },
              { icon: Github, href: "https://github.com/GAVB-SERVICOS", label: "GitHub", delay: '1.2s' },
              { icon: Mail, href: "mailto:diegoeco.fan@gmail.com", label: "Email", delay: '1.4s' }
            ].map(({ icon: Icon, href, label, delay }) => (
              <a 
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="p-3 lg:p-5 glass-effect rounded-full hover-glow hover:text-primary transition-all duration-300 group hover:scale-110 transform animate-rotate-in relative"
                aria-label={label}
                style={{ animationDelay: delay }}
              >
                <Icon size={28} className="lg:w-8 lg:h-8 group-hover:animate-pulse-glow transition-transform" />
                <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
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
