import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="about" className="pt-10 md:pt-20 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
      <div className="flex-1 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Available for new opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Hello, I am João Pedro 👋
            <span className="block text-gray-500 text-2xl md:text-3xl mt-4 font-normal">
              AI & Software Engineer
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-justify text-gray-600 leading-relaxed max-w-xl"
        >
          AI and Software Engineer with over 3 years of experience in Back-End development and applied Artificial Intelligence. Skilled in
technologies such as Python, Langchain, Golang, Node.js, Docker, RabbitMQ, Stripe, Postgres, Redis, and Oracle Database. I
have hands-on experience with cloud solutions (OCI and AWS), including console management and tooling.
I led the development of the Back-End and AI architecture for a project in the legal sector, implementing integration with LLMs,
Agents, RAG, and data ingestion/vectorization pipelines. I delivered a robust Back-End featuring secure and efficient APIs for
connecting with mobile and web platforms. I hold a B.S. in Computer Science and am currently pursuing a graduate degree in
Artificial Intelligence for Software Engineering.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#experience" className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-medium hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-200 transform hover:-translate-y-1">
            See my work
          </a>
          <a href="/curriculo.pdf" target="_blank" className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-2xl font-medium hover:border-orange-200 hover:text-orange-600 transition-all hover:bg-orange-50">
            Download CV
          </a>
        </motion.div>

        <div className="flex items-center gap-2 text-gray-500 text-sm pt-4">
          <MapPin size={16} />
          <span>Brazil</span>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative group w-64 md:w-80 flex-shrink-0"
      >
        <div className="absolute inset-0 bg-orange-400 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="relative rounded-3xl overflow-hidden aspect-square border-4 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
           <img 
            src="/perfil.jpeg"
            alt="João Pedro"
            className="w-full h-full object-cover" 
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
