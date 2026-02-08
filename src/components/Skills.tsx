
interface SkillCategory {
  title: string
  skills: string[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Frameworks",
      skills: ["Golang", "Python (FastAPI, Django)", "Node.js (JS, TS)", "React"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["LangChain", "LangSmith", "Agno", "RAG", "Agents", "Embeddings", "Deep Learning"]
    },
    {
      title: "Database & Messaging",
      skills: ["PostgreSQL", "Cassandra", "Oracle Database", "Redis", "RabbitMQ"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "OCI (Oracle)"]
    }
  ]

  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px bg-gray-200 flex-1"></div>
        <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-orange-200 transition-colors">
            <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-50">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <div key={i} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-orange-50 hover:text-orange-700 transition-colors cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
