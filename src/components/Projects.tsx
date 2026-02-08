
import { FolderGit2, ExternalLink } from 'lucide-react'

interface ProjectItem {
  title: string
  description: string
  tags: string[]
  link: string
}

const Projects = () => {
  const projects: ProjectItem[] = [
    {
      title: "AI & Legal Tech Platform",
      description: "Led the development of Back-End and AI architecture for a legal sector project. Implemented integration with LLMs, Agents, RAG, and data ingestion pipelines.",
      tags: ["Python", "LangChain", "RAG", "Microservices"],
      link: "#"
    },
    {
      title: "Enterprise Chatbots & CRM Integrations",
      description: "Built custom chatbots and full-stack services with real-time capabilities via WebSockets. Integrated with Pipedrive, RD Station, and SAP.",
      tags: ["React", "Go", "Node.js", "WebSockets"],
      link: "#"
    },
    {
      title: "Financial System Architecture",
      description: "Designed scalable architectures for full-stack services, including secure payment integrations with Stripe and async messaging with RabbitMQ.",
      tags: ["System Design", "Stripe", "RabbitMQ", "Docker"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px bg-gray-200 flex-1"></div>
        <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <FolderGit2 size={24} />
              </div>
              <a href={project.link} className="text-gray-400 hover:text-orange-600 transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
