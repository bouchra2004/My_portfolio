import { motion } from 'framer-motion'
import { ArrowDownRight, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export function Hero() {
  const goProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section
      id="hero"
      className="scroll-mt-24 px-4 pb-24 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-1.5 text-xs font-medium text-indigo-600 shadow-sm"
          >
            <Sparkles className="size-3.5" aria-hidden />
            Open to PFA internship — AI & Web
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]"
          >
            {portfolio.hero_headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
          >
            {portfolio.about_me}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={goProjects}
              className="group inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-700 hover:shadow-indigo-600/35"
            >
              View my projects
              <ArrowDownRight className="size-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="w-full max-w-sm shrink-0 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Based in
          </p>
          <p className="mt-1 font-medium text-slate-900">
            {portfolio.contact.location}
          </p>
          <div className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-600">
            <p>
              <span className="text-slate-400">Email</span>
              <br />
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="font-medium text-indigo-600 hover:underline"
              >
                {portfolio.contact.email}
              </a>
            </p>
            <p>
              <span className="text-slate-400">Phone</span>
              <br />
              <a
                href={`tel:${portfolio.contact.phone.replace(/\s/g, '')}`}
                className="font-medium text-slate-900 hover:text-indigo-600"
              >
                {portfolio.contact.phone}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
