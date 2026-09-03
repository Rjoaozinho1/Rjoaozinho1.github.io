interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "DreamSquad",
      role: "AI & Software Engineer",
      period: "Feb 2026 - Present",
      description: "Architected and implemented high-performance systems in Golang, Python (FastAPI/Django), and Node.js, ensuring maximum stability and performance for mission-critical applications.",
      achievements: [
        "Built strong multi-tenant back-ends with applied Machine/Deep Learning, ETL, parallel processing, and serverless workloads.",
        "Delivered mission-critical applications with applied AI workflows and AI Agents using LangChain and Strands.",
        "Built automated and resilient cloud infrastructure on AWS and GCP using DevOps and Infrastructure as Code (IaC).",
        "Applied SRE and FinOps principles to monitoring, observability, and cloud cost optimization.",
        "Creating scalable and high-performance backend services to serve clients' needs."
      ]
    },
    {
      company: "Biofy",
      role: "Software Engineer",
      period: "Dec 2024 - Feb 2026",
      description: "Built strong backend services using Microservices, Event Driven Design, and Hexagonal architecture, with technologies such as Golang, Python, Docker, AWS, and PostgreSQL.",
      achievements: [
        "Architected strong back-end microservices and databases (SQL and NoSQL).",
        "Led projects delivering features with LLM integration, RAGs, data intensive ingestion/ETL pipelines, and model training.",
        "Delivered Stripe, RabbitMQ, and Docker implementations for consistency and availability.",
        "Created and maintained CI/CD pipelines with GitHub Actions, implementing automated tests for the Go/Node back-end.",
        "Participated in AI model training and optimization."
      ]
    },
    {
      company: "Telek Sistemas",
      role: "Software Developer",
      period: "Feb 2023 - Dec 2024",
      description: "Built and delivered full-stack softwares and microservices, developing user interfaces in React and back-end services in Golang, Python, and Node.js.",
      achievements: [
        "Built with technologies such as Docker, Golang, Node.js, React, and Python.",
        "Integrated with databases such as PostgreSQL and MongoDB in production environments.",
        "Developed integrations with CRMs (Pipedrive, RD Station), ERPs (SAP), Hotmart, and billing APIs into production systems.",
        "Applied event-driven architecture (EDA) and implemented real-time functionalities using WebSockets.",
        "Managed and maintained server status, using bare metal and cloud servers.",
        "Dealt with a lot of client day-to-day communication."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 scroll-mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-16 tracking-tight">
        Work Experience
      </h2>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative grid md:grid-cols-[1fr,2fr] gap-8 md:gap-12 items-start transition-all">

            {/* Period & Company (Left Column) */}
            <div className="md:sticky md:top-24">
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium mb-4 group-hover:bg-purple-900/30 group-hover:text-purple-300 transition-colors">
                {exp.period}
              </span>
              <h3 className="text-2xl font-bold text-zinc-100 mb-2 group-hover:text-purple-400 transition-colors">
                {exp.company}
              </h3>
              <p className="text-zinc-500 font-medium text-lg">{exp.role}</p>
            </div>

            {/* Description & Achievements (Right Column) */}
            <div>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6 font-light">
                {exp.description}
              </p>

              <ul className="space-y-4">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-zinc-400">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-purple-500 transition-colors shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Divider */}
      <div className="mt-20 border-t border-zinc-800"></div>
    </section>
  )
}

export default Experience
