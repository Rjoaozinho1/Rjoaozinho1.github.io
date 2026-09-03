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

      <div className="grid gap-12 items-center w-full">

        {/* Profile Photo - Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-start"
        >
          <img
            src="/perfil.jpeg"
            alt="João Pedro"
            className="w-64 h-64 rounded-2xl object-cover border-2 border-zinc-800 shadow-lg shadow-zinc-900/50"
          />
        </motion.div>

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
            Software Engineer with 4+ years of experience, specially in back-end development, distributed systems, cloud tooling,
            and applied AI across Go, Node.js, Python, AWS and OCI.
            Led back-end systems and architecture for legal-sector projects, payments systems, multi communications, and
            multi processing load/jobs data pipelines — including strong backend core concepts, authorization, managing metrics,
            observability, integration with diverse systems, AI, RAG, and data ingestion/vectorization pipelines.
            Hold a B.S. in Computer Science (Anhanguera, 2024) and a post-graduate degree in
            Artificial Intelligence (FIAP, 2026).
          </p>

          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <MapPin size={16} />
            <span>Uberlândia, MG, Brazil</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
