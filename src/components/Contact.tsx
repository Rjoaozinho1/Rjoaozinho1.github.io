import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-32">
       <div className="max-w-4xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] bg-orange-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-[50%] right-[10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's work together.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <a 
              href="mailto:joaopedrocostamachado2003@gmail.com" 
              className="px-8 py-4 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-all hover:scale-105 flex items-center gap-3 shadow-lg shadow-orange-900/20"
            >
              <Mail size={20} />
              Send me an email
            </a>
             <a 
              href="https://www.linkedin.com/in/jo%C3%A3o-pedro-costa-machado-9167b3208" 
              target="_blank"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/10 rounded-full font-medium hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-3"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="pt-16 flex items-center justify-center gap-8 text-gray-500">
             <a href="https://github.com/Rjoaozinho1" target="_blank" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-costa-machado-9167b3208" target="_blank" className="hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:joaopedrocostamachado2003@gmail.com" className="hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
