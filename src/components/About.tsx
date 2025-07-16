
import { Code2, Database, Cloud, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Engineering",
      description: "Full ML lifecycle from data prep to deployment and monitoring"
    },
    {
      icon: Cloud,
      title: "Cloud & MLOps",
      description: "GCP, AWS, Docker, Kubernetes, CI/CD, and scalable ML systems"
    },
    {
      icon: Code2,
      title: "Generative AI",
      description: "LangChain, LangGraph, RAG systems, and LLM deployment"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL pipelines, PySpark, Kafka, real-time data processing"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="animate-slide-up">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text relative">
            <span className="shimmer-effect">Sobre Mim</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="card-enhanced animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/20 rounded-lg mr-3 animate-pulse-glow">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">Desenvolvedor Apaixonado</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Com mais de 3 anos de experiência em desenvolvimento web, transformo ideias em soluções digitais inovadoras.
              </p>
            </div>
            
            <div className="card-enhanced animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-accent/20 rounded-lg mr-3 animate-pulse-glow">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">Inovação Constante</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Sempre em busca de novas tecnologias e metodologias para criar soluções mais eficientes e impactantes.
              </p>
            </div>
            
            <div className="card-enhanced animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/20 rounded-lg mr-3 animate-pulse-glow">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">Trabalho em Equipe</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Acredito que as melhores soluções surgem da colaboração e troca de conhecimentos entre profissionais.
              </p>
            </div>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              My journey began at <strong>Grupo Boticário</strong>, where I mastered deploying ML models to production, 
              automating workflows, and connecting data science with engineering. I've become an expert in 
              Google Cloud Platform, building scalable solutions that bridge the gap between research and real-world applications.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              I specialize in creating end-to-end machine learning systems, from initial data processing to 
              production deployment. My experience spans traditional ML models, modern generative AI systems, 
              and everything in between.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Before diving into AI, I worked as a <strong>Financial Analyst</strong>, which developed my analytical 
              mindset and attention to detail - skills that continue to enhance my approach to data-driven problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass-effect p-6 rounded-lg hover-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
