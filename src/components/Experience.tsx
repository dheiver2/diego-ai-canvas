
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Grupo Boticário",
      period: "April 2021 - June 2025",
      location: "Salvador, Bahia, Brasil",
      description: [
        "Co-created a new Framework based on Data Scientists codes to support ML projects and streamline workflows",
        "Developed 5 web scraping projects for competitive intelligence and business strategy",
        "Led entire migration project of ML models for major client using GCP tools (BigQuery, Cloud Storage, Vertex AI, Cloud Functions)",
        "Created and deployed Feature Store framework to improve ML model automation",
        "Built performance dashboards using GitLab, Cloud Scheduler, Cloud Functions, and BigQuery",
        "Rebuilt entire LLM pipeline using Cloud Functions, GKE, GitHub, Cloud Scheduler, OpenAI, and Vector Stores",
        "Automated system monitoring using Zabbix API, improving operational reliability"
      ]
    },
    {
      title: "Data Science Tech I",
      company: "GAVB",
      period: "April 2021 - June 2022",
      location: "Canoas, Rio Grande do Sul, Brazil",
      description: [
        "Developed data science solutions and analytics frameworks",
        "Worked on machine learning model development and deployment",
        "Collaborated on data pipeline optimization projects"
      ]
    },
    {
      title: "Financial Analyst",
      company: "SINPOSBA - Sindicato dos Trabalhadores em Postos de Combustíveis da Bahia",
      period: "October 2018 - April 2021",
      location: "Salvador, Bahia, Brasil",
      description: [
        "Implemented new management system bridging accounting and financial operations",
        "Created comprehensive audit reports and financial documentation",
        "Managed document control processes for accounting operations"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Building impactful AI solutions across different industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2"></div>

              <div className="glass-effect p-6 rounded-lg hover-glow ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-foreground">{exp.company}</h4>
                  </div>
                  <div className="text-sm text-foreground/70 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-foreground/80 flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
