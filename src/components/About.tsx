
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
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Passionate about transforming complex problems into intelligent solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
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
