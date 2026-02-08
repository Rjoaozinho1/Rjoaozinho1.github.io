interface SkillCategory {
  title: string
  skills: string[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Frameworks",
      skills: ["Golang", "Python", "FastAPI", "Django", "Node.js", "JavaScript", "TypeScript", "React", "Vite", "TailwindCSS", "PyTorch", "TensorFlow"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["LangChain", "LangSmith", "Agno", "RAG", "Agents", "Embeddings", "Deep Learning", "Machine Learning", "LLMs", "Vector Databases", "Hugging Face"]
    },
    {
      title: "Database & Messaging",
      skills: ["PostgreSQL", "Cassandra", "Oracle Database", "Redis", "SQS", "RabbitMQ", "Kafka", "MongoDB", "DynamoDB"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "OCI (Oracle)", "CI/CD", "Git"]
    }
  ]

  return (
    <section id="skills" className="py-20 scroll-mt-20">

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 tracking-tight">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <div key={i} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>

      {/* Decorative Divider */}
      <div className="mt-20 border-t border-gray-100"></div>
    </section>
  )
}

export default Skills
