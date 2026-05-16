import { motion } from 'framer-motion'
import { ArrowDownRight, Sparkles, Mail, MapPin } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { publicAssetUrl } from '../lib/publicUrl'

export function Hero() {
  const goProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-white px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      {/* Background Decor - Optionnel pour le style moderne */}
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-32" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/40 to-violet-100/40 opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* LEFT CONTENT: Text & CTA */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 text-xs font-semibold text-indigo-600 backdrop-blur-sm"
            >
              <Sparkles className="size-3.5" />
              <span>Open to PFA internship — AI & Web</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl"
              >
                {portfolio.hero_headline.split('—').map((part, i) => (
                  <span key={i} className={part.includes('Seeking') ? "text-indigo-600 block mt-2" : "block"}>
                    {part}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl"
              >
                {portfolio.about_me}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={goProjects}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-indigo-600"
              >
                View my projects
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
              
              <a
                href="#contact"
                className="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition-all hover:border-indigo-600 hover:text-indigo-600"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: Image & Contact Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 space-y-6"
            >
              {/* Profile Image Card */}
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-indigo-100/50">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={publicAssetUrl(portfolio.profile_image)}
                    alt={portfolio.profile_name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-slate-900">{portfolio.profile_name}</h3>
                  <p className="text-sm font-medium text-slate-500 italic">Software Engineering Student</p>
                </div>
              </div>

              {/* Quick Contact Card (Floating Style) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-xl backdrop-blur-md"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Based in</p>
                      <p className="text-sm font-semibold text-slate-900">{portfolio.contact.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email me</p>
                      <a href={`mailto:${portfolio.contact.email}`} className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                        {portfolio.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Decorative background shape */}
            <div className="absolute -right-12 -top-12 -z-10 size-64 rounded-full bg-indigo-50 blur-3xl" />
          </div>
          
        </div>
      </div>
    </section>
  )
}