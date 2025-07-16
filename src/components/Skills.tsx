
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "LangGraph", "OpenAI", "Vertex AI"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["Google Cloud Platform", "AWS", "Azure", "Docker", "Kubernetes", "Terraform"]
    },
    {
      title: "MLOps & DevOps",
      skills: ["Apache Airflow", "CI/CD", "GitLab", "GitHub Actions", "Monitoring", "Feature Stores"]
    },
    {
      title: "Data Engineering",
      skills: ["PySpark", "Apache Kafka", "Hadoop", "Snowflake", "BigQuery", "ETL/ELT", "SQL"]
    },
    {
      title: "Backend Development",
      skills: ["FastAPI", "Django", "Flask", "Node.js", "TypeScript", "RESTful APIs"]
    },
    {
      title: "Vector & Search",
      skills: ["Pinecone", "AstraDB", "Supabase", "Elasticsearch", "Vector Search", "RAG Systems"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/30 rounded-full blur-3xl floating-element" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
            Technical <span className="gradient-text shimmer-effect">Skills</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Technologies and tools I use to build intelligent systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-enhanced animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 gradient-text group-hover:scale-105 transition-transform duration-300">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="gradient-border hover:scale-105 transform transition-all duration-300 animate-slide-up cursor-pointer group/badge relative overflow-hidden"
                    style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <span className="relative z-10">{skill}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
