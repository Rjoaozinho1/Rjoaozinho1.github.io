


import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter hover:text-orange-600 transition-colors">JP<span className="text-orange-600">/</span>CM</a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-orange-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-orange-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-orange-600 transition-colors">Skills</a>
            <a href="#education" className="hover:text-orange-600 transition-colors">Education</a>
          </div>
          <a href="#contact" className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors">
            Let's Talk
          </a>
        </div>
      </nav>
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-20 space-y-24">
        {children}
      </main>
      <footer className="border-t border-gray-200 py-12 text-center text-gray-500 text-sm">
        <p>&copy; 2026 João Pedro Costa Machado.</p>
      </footer>
    </div>
  )
}

export default Layout
