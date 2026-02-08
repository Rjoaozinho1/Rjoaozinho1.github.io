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
      company: "Biofy",
      role: "Software Engineer",
      period: "Dec 2024 - Present",
      description: "Developing full-stack applications, building responsive front-end components in React and high-performance backend microservices in Golang and Node.js.",
      achievements: [
        "Designed and implemented scalable application architectures (System Design) for full-stack services and databases (SQL and NoSQL).",
        "Led the development of AI-driven features, including LLM integration, RAGs, agents, and data ingestion/ETL pipelines.",
        "Implemented third-party integrations (e.g., Stripe for payments), configured RabbitMQ for asynchronous messaging, and utilized Docker across all environments.",
        "Created and maintained CI/CD pipelines with GitHub Actions, implementing automated tests for both the React frontend and the Go/Node back-end.",
        "Participated in AI model training and optimization."
      ]
    },
    {
      company: "Telek Sistemas",
      role: "Software Developer",
      period: "Feb 2023 - Dec 2024",
      description: "Built full-stack services and custom chatbots, developing user interfaces in React and back-end services in Golang, Python, and Node.js.",
      achievements: [
        "Utilized PostgreSQL and Docker for production environments.",
        "Integrated systems with various CRMs (Pipedrive, RD Station), ERPs (SAP), Hotmart, and billing system APIs.",
        "Applied event-driven architecture (EDA) and implemented real-time functionalities using WebSockets."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 tracking-tight">
        Work Experience
      </h2>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative grid md:grid-cols-[1fr,2fr] gap-8 md:gap-12 items-start transition-all">
            
            {/* Period & Company (Left Column) */}
            <div className="md:sticky md:top-24">
              <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4 group-hover:bg-orange-100 group-hover:text-orange-700 transition-colors">
                {exp.period}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {exp.company}
              </h3>
              <p className="text-gray-500 font-medium text-lg">{exp.role}</p>
            </div>

            {/* Description & Achievements (Right Column) */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
                {exp.description}
              </p>
              
              <ul className="space-y-4">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-600">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-orange-400 transition-colors flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative Divider */}
      <div className="mt-20 border-t border-gray-100"></div>
    </section>
  )
}

export default Experience
