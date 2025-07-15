
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Real-world applications that showcase my expertise in AI and ML engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-lg hover-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary group-hover:text-primary-foreground transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-effect border-primary/50 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div 
              key={index}
              className="glass-effect p-6 rounded-lg hover-glow"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                {project.title}
              </h3>
              <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-primary/20 text-primary text-xs rounded"
                  >
                    {tech}
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
