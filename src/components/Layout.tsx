import { ReactNode, useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter hover:text-purple-500 transition-colors z-50 relative">
            JP<span className="text-purple-500">/</span>CM
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-purple-500 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-purple-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
             <a href="mailto:joaopedrocostamachado2003@gmail.com" className="px-5 py-2.5 bg-zinc-100 text-zinc-900 text-sm font-medium rounded-full hover:bg-purple-500 hover:text-white transition-colors">
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 relative p-2 text-zinc-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-zinc-950 border-b border-zinc-800 flex flex-col items-center justify-center space-y-8 py-10 text-xl font-medium md:hidden shadow-2xl"
            >
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-500 transition-colors">About</a>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-500 transition-colors">Projects</a>
              <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-500 transition-colors">Experience</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-500 transition-colors">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-32">
        {children}
      </main>

      <footer className="border-t border-zinc-800 py-12 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} João Pedro Costa Machado.</p>
      </footer>
    </div>
  )
}

export default Layout
