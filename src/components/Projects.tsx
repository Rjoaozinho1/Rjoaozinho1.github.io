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
      description: "Led the development of Back-End and AI architecture for a legal sector project. Architected and implemented a high-performance system, ensuring maximum stability and performance. Implemented integration with LLMs, Agents, RAG, and data ingestion/vectorization pipelines.",
      tags: ["Microservices", "Python", "LangChain", "RAG", "Docker", "AWS", "PostgreSQL", "Golang", "FastAPI", "SQS", "S3", "EC2", "Lambda"],
    },
    {
      title: "Enterprise Chatbots & CRM Integrations",
      description: "Built custom chatbots and full-stack services with real-time capabilities via WebSockets. Integrated with Pipedrive, RD Station, and SAPs.",
      tags: ["Microservices", "React", "Golang", "Node.js", "WebSockets", "Nginx", "PostgreSQL", "Docker", "Redis", "APIs"],
    },
    {
      title: "Financial System Architecture",
      description: "Designed scalable architectures for full-stack services, including secure payment integrations with Stripe and async messaging with RabbitMQ.",
      tags: ["System Design", "Stripe", "RabbitMQ", "Docker"],
    },
    {
      title: "Udimoveis",
      description: "A real state plataform e-commerce for a client that sells properties.",
      tags: ["Microservices", "React", "Golang", "Node.js", "Nginx", "PostgreSQL", "Docker", "Redis", "APIs", "Supabase", "AWS", "EC2", "RDS"],
    },
    {
      title: "Agent for an Auction company",
      description: "Developed and colaborated in the creation of an AI agent for an auction company. The agent is able to analyze the auction's catalog and generate a description for each lot and give the best link to the user for its interest.",
      tags: ["Python", "Strands", "GenAI", "LangChain", "RAG", "Microservices", "Docker", "AWS", "PostgreSQL", "FastAPI", "SQS", "S3", "EC2", "Lambda"],
    }
  ]

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="flex items-baseline justify-between mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
          Featured Projects
        </h2>
        <a href="https://github.com/Rjoaozinho1" target="_blank" className="hidden md:flex items-center gap-2 text-zinc-500 hover:text-purple-500 transition-colors">
          View all on GitHub <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-zinc-900/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-900/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <Github size={24} />
              </div>
              {project.link && (
                <a href={project.link} className="text-zinc-500 hover:text-zinc-200 transition-colors">
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>

            <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-zinc-400 mb-8 leading-relaxed text-sm grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-full border border-zinc-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <a href="https://github.com/Rjoaozinho1" target="_blank" className="inline-flex items-center gap-2 text-zinc-100 font-medium hover:text-purple-500 transition-colors">
          View all on GitHub <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Decorative Divider */}
      <div className="mt-20 border-t border-zinc-800"></div>
    </section>
  )
}

export default Projects
