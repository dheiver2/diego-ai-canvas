
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Gumly Framework",
      description: "Internal ML framework designed to streamline data scientists' workflows and accelerate model deployment. Built to support multiple ML projects with standardized processes.",
      tech: ["Python", "Machine Learning", "Framework Design", "Automation"],
      github: "https://github.com/GAVB-SERVICOS/Gumly/blob/main/README.md",
      featured: true
    },
    {
      title: "Web Scraping Intelligence Suite",
      description: "Developed 5 comprehensive web scraping pipelines for competitive intelligence and business strategy. Automated data collection for market analysis.",
      tech: ["Python", "Web Scraping", "Data Analysis", "Automation"],
      featured: true
    },
    {
      title: "ML Model Migration Platform",
      description: "Led complete migration of machine learning models for major client using GCP infrastructure. Implemented CI/CD pipelines for automated model deployment.",
      tech: ["GCP", "Vertex AI", "BigQuery", "CI/CD", "GitLab"],
      featured: true
    },
    {
      title: "Feature Store Framework",
      description: "Created and deployed a new Feature Store framework to solve ML automation problems and improve model performance tracking.",
      tech: ["Feature Engineering", "MLOps", "GCP", "Automation"],
      featured: false
    },
    {
      title: "LLM Pipeline Reconstruction",
      description: "Rebuilt entire LLM pipeline using modern cloud infrastructure, improving performance and scalability for generative AI applications.",
      tech: ["LLM", "GKE", "Cloud Functions", "OpenAI", "Vector Stores"],
      featured: false
    },
    {
      title: "Monitoring Automation System",
      description: "Automated system monitoring using Zabbix API, creating intelligent reports for infrastructure management and operational reliability.",
      tech: ["Python", "Zabbix API", "Automation", "Monitoring"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl floating-element" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="shimmer-effect">Featured <span className="gradient-text">Projects</span></span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Real-world applications that showcase my expertise in AI and ML engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={index}
              className="card-enhanced group animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-semibold mb-4 text-primary group-hover:text-primary-foreground transition-colors duration-300 gradient-text relative z-10">
                {project.title}
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed relative z-10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full gradient-border hover:scale-105 transform transition-all duration-300 animate-slide-up cursor-pointer group/tech relative overflow-hidden"
                    style={{ animationDelay: `${0.5 + index * 0.2 + techIndex * 0.1}s` }}
                  >
                    <span className="relative z-10">{tech}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                  </span>
                ))}
              </div>

              <div className="flex gap-4 relative z-10">
                {project.github && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-effect border-primary/50 hover:bg-primary hover:text-primary-foreground hover:scale-105 transform transition-all duration-300 group/btn relative overflow-hidden"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2 group-hover/btn:animate-pulse-glow" />
                      <span className="relative z-10">View Code</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </a>
                  </Button>
                )}
                <Button 
                  size="sm"
                  className="animate-pulse-glow hover:scale-105 transform transition-all duration-300 group/btn relative overflow-hidden"
                >
                  <ExternalLink size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Live Demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-semibold mb-6 text-primary gradient-text">Outros Projetos</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div 
              key={index}
              className="card-enhanced hover:scale-105 transform transition-all duration-300 animate-scale-in group relative overflow-hidden"
              style={{ animationDelay: `${0.7 + index * 0.15}s` }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-lg font-semibold mb-3 text-primary gradient-text group-hover:scale-105 transform transition-all duration-300 relative z-10">
                {project.title}
              </h3>
              <p className="text-foreground/80 mb-4 text-sm leading-relaxed relative z-10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 relative z-10">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-primary/20 text-primary text-xs rounded gradient-border hover:scale-110 transform transition-all duration-300 animate-slide-up cursor-pointer group/tech relative overflow-hidden"
                    style={{ animationDelay: `${0.8 + index * 0.15 + techIndex * 0.05}s` }}
                  >
                    <span className="relative z-10">{tech}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
