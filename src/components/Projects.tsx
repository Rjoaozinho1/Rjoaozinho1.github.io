import { ArrowUpRight, Github } from 'lucide-react'

interface ProjectItem {
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
}

const Projects = () => {
  const projects: ProjectItem[] = [
    {
      title: "AI & Legal Tech Platform",
      description: "Led the development of Back-End and AI architecture for a legal sector project. Implemented integration with LLMs, Agents, RAG, and data ingestion/vectorization pipelines.",
      tags: ["Python", "LangChain", "RAG", "Microservices"],
    },
    {
      title: "Enterprise Chatbots & CRM Integrations",
      description: "Built custom chatbots and full-stack services with real-time capabilities via WebSockets. Integrated with Pipedrive, RD Station, and SAP.",
      tags: ["React", "Go", "Node.js", "WebSockets"],
    },
    {
      title: "Financial System Architecture",
      description: "Designed scalable architectures for full-stack services, including secure payment integrations with Stripe and async messaging with RabbitMQ.",
      tags: ["System Design", "Stripe", "RabbitMQ", "Docker"],
    }
  ]

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="flex items-baseline justify-between mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Featured Projects
        </h2>
        <a href="https://github.com/Rjoaozinho1" target="_blank" className="hidden md:flex items-center gap-2 text-gray-500 hover:text-orange-600 transition-colors">
          View all on GitHub <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                <Github size={24} />
              </div>
              {project.link && (
                <a href={project.link} className="text-gray-400 hover:text-gray-900 transition-colors">
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-sm flex-grow">
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
      
      <div className="mt-12 text-center md:hidden">
         <a href="https://github.com/Rjoaozinho1" target="_blank" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-orange-600 transition-colors">
          View all on GitHub <ArrowUpRight size={16} />
        </a>
      </div>
      
       {/* Decorative Divider */}
      <div className="mt-20 border-t border-gray-100"></div>
    </section>
  )
}

export default Projects
