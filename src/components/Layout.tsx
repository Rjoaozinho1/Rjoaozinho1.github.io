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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter hover:text-orange-600 transition-colors z-50 relative">
            JP<span className="text-orange-600">/</span>CM
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-orange-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-orange-600 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
             <a href="mailto:joaopedrocostamachado2003@gmail.com" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-colors">
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 relative p-2"
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
              className="absolute top-0 left-0 w-full bg-white h-screen flex flex-col items-center justify-center space-y-8 text-xl font-medium md:hidden"
            >
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-32">
        {children}
      </main>

      <footer className="border-t border-gray-200 py-12 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} João Pedro Costa Machado.</p>
      </footer>
    </div>
  )
}

export default Layout
