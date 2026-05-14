import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-dvh bg-slate-50 font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-100 bg-white py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Bouchra Oulmouk — Portfolio</p>
      </footer>
    </div>
  )
}

export default App
