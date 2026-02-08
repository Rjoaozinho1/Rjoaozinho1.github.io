import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="about" className="pt-10 md:pt-20 flex flex-col items-start gap-12 md:gap-20">

      {/* Intro Badge */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/20 text-green-300 text-sm font-medium border border-green-800/30"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Available for new opportunities
      </motion.div>

      <div className="grid md:grid-cols-[1.5fr,1fr] gap-12 items-start w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-100 leading-[1.1]">
            Hello, I am <br />
            <span className="text-zinc-500">João Pedro.</span>
          </h1>

          <p className="text-sm justify-center text-zinc-400 leading-relaxed max-w-2xl font-light">
            AI and Software Engineer with over 3 years of experience in Back-End development and applied Artificial Intelligence. Skilled in
            technologies such as Python, Langchain, Golang, Node.js, Docker, RabbitMQ, Stripe, Postgres, Redis, and Oracle Database. I
            have hands-on experience with cloud solutions (OCI and AWS), including console management and tooling.
            I led the development of the Back-End and AI architecture for a project in the legal sector, implementing integration with LLMs,
            Agents, RAG, and data ingestion/vectorization pipelines. I delivered a robust Back-End featuring secure and efficient APIs for
            connecting with mobile and web platforms. I hold a B.S. in Computer Science and am currently pursuing a graduate degree in
            Artificial Intelligence for Software Engineering.
          </p>

          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <MapPin size={16} />
            <span>Minas Gerais, Brazil</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
