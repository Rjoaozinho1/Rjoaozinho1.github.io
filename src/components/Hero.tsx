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
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-100"
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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-[1.1]">
            Hello, I am <br/>
            <span className="text-gray-400">João Pedro.</span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-light">
            AI and Software Engineer with over 3 years of experience in Back-End development and applied Artificial Intelligence. 
            Skilled in Python, LangChain, Golang, Node.js, and Cloud Solutions.
          </p>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin size={16} />
            <span>Minas Gerais, Brazil</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group w-full max-w-md mx-auto md:ml-auto"
        >
          <div className="aspect-square rounded-3xl overflow-hidden ease-in-out relative z-10">
            <img 
              src="/perfil.jpeg"
              alt="João Pedro Costa Machado"
              className="w-full h-full object-cover object-top grayscale-0" 
            />
          </div>
          <div className="absolute inset-0 bg-orange-100 rounded-3xl rotate-6 scale-[0.9] -z-10 group-hover:rotate-3 transition-transform duration-500"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
