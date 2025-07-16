
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
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-foreground/85 max-w-3xl mx-auto leading-relaxed">
            Machine Learning Engineer passionate about building intelligent systems that solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold mb-8 gradient-text">My Journey</h2>
            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                My journey began at <strong>Grupo Boticário</strong>, where I mastered deploying ML models to production, 
                automating workflows, and connecting data science with engineering. I've become an expert in 
                Google Cloud Platform, building scalable solutions that bridge the gap between research and real-world applications.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I specialize in creating end-to-end machine learning systems, from initial data processing to 
                production deployment. My experience spans traditional ML models, modern generative AI systems, 
                and everything in between.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Before diving into AI, I worked as a <strong>Financial Analyst</strong>, which developed my analytical 
                mindset and attention to detail - skills that continue to enhance my approach to data-driven problem-solving.
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 gradient-text">What I Do</h2>
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="card-enhanced flex items-start space-x-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 glass-effect rounded-xl flex items-center justify-center bg-primary/10">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-border/30">
          <p className="text-muted-foreground">
            Ready to build something amazing together? Let's connect and discuss your next AI project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
