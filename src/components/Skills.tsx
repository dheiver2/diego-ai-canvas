
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Technologies and tools I use to build intelligent systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-effect p-6 rounded-lg hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-foreground/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
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
