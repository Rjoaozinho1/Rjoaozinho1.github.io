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
      description: "Developing full-stack applications and high-performance microservices.",
      achievements: [
        "Designed scalable architectures for full-stack services and SQL/NoSQL databases.",
        "Led AI-driven features including LLM integration, RAGs, and agents using LangChain.",
        "Implemented secure payment integrations (Stripe) and asynchronous messaging with RabbitMQ.",
        "Maintained CI/CD pipelines with GitHub Actions for automated testing and deployment."
      ]
    },
    {
      company: "Telek Sistemas",
      role: "Software Developer",
      period: "Feb 2023 - Dec 2024",
      description: "Built full-stack services and custom chatbots for business automation.",
      achievements: [
        "Developed UIs in React and back-end services in Golang, Python, and Node.js.",
        "Integrated systems with CRM (Pipedrive, RD Station), ERP (SAP), and Hotmart APIs.",
        "Implemented event-driven architectures (EDA) and real-time features using WebSockets.",
        "Managed production environments using Docker and PostgreSQL."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px bg-gray-200 flex-1"></div>
        <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      <div className="space-y-12 relative">
        {/* Connector Line */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-100 hidden md:block"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative md:pl-16">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full border-4 border-white bg-orange-500 shadow-sm hidden md:block z-10"></div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-orange-600 font-medium">{exp.role}</p>
                </div>
                <div className="px-4 py-1.5 bg-gray-50 text-gray-600 text-sm font-medium rounded-full w-fit">
                  {exp.period}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-3">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
