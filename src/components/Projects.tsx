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
      title: "Yapoli",
      description: "Architected and built a multi-tenant, fully serverless platform on AWS powering two AI workloads: computer vision to detect and classify sponsor logos on football jerseys (Amazon Rekognition Custom Labels with bounding-box detection), and automated document analysis to extract information and generate metadata from large media libraries. Owned the end-to-end design — architecture, Lambda development, API, and orchestration via Step Functions and EventBridge, with CloudWatch monitoring. Optimized cost through cold-start mitigation and event-driven patterns.",
      tags: ["Serverless", "Multi-tenant", "AWS", "Lambda", "Step Functions", "EventBridge", "Rekognition Custom Labels", "Computer Vision", "CloudWatch", "Event-Driven", "Cost Optimization", "Python"],
    },
    {
      title: "E-law",
      description: "Built an end-to-end ETL pipeline on AWS (Python, Glue, Lambda) ingesting high-volume legal JSON into a normalized SQL warehouse, then exposed it to natural-language querying through an AI layer — turning raw documents into data non-technical teams could actually ask questions of.",
      tags: ["ETL", "AWS Glue", "Python", "LangChain", "RAG", "Docker", "AWS", "PostgreSQL", "FastAPI", "SQS", "S3", "EC2", "Lambda"],
    },
    {
      title: "Biofy Genomics",
      description: "Owned the complete backend of a genomics platform in Go: event-driven microservices communicating over RabbitMQ, Stripe subscriptions and billing, and clear service boundaries designed for fault isolation and independent scaling.",
      tags: ["System Design", "Microservices", "Event-Driven", "Golang", "Stripe", "Billing", "RabbitMQ", "PostgreSQL", "Docker", "AWS"],
    },
    {
      title: "Kairo",
      description: "Complete Back-End platform for WhatsApp + AI integration, using RabbitMQ for asynchronous messaging and AWS for infrastructure.",
      tags: ["Golang", "Python", "AI", "RabbitMQ", "AWS", "PostgreSQL", "Docker", "APIs"],
    },
    {
      title: "Equipment Management",
      description: "Delivered a multi-tenant SaaS for construction companies to track and manage equipment fleets. TypeScript monorepo (React + Node), PostgreSQL with Prisma, and type-safe contracts shared end-to-end between front and back end.",
      tags: ["SaaS", "Multi-tenant", "TypeScript", "Monorepo", "React", "Node.js", "PostgreSQL", "Prisma"],
    },
    {
      title: "Udimoveis",
      description: "Designed and shipped the full platform for a regional real-estate agency: Go backend and React front end in a TypeScript monorepo, deployed on AWS — running in production and serving the company's listings and leads today.",
      tags: ["Microservices", "React", "Golang", "TypeScript", "Monorepo", "Nginx", "PostgreSQL", "Docker", "Redis", "APIs", "Supabase", "AWS", "EC2", "RDS"],
    },
    {
      title: "Agent for an Auction company",
      description: "Developed and collaborated in the creation of an AI agent for an auction company. The agent analyzes the auction's catalog, generates a description for each lot, and returns the best matching link for the user's interest.",
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
