import { motion } from 'framer-motion'
import { Brain, Code2, Database, Globe2 } from 'lucide-react'
import { portfolio } from '../data/portfolio'

const categories = [
  {
    title: 'Languages',
    items: portfolio.technical_skills.languages,
    icon: Code2,
  },
  {
    title: 'AI & Data Science',
    items: portfolio.technical_skills.ai_and_data_science,
    icon: Brain,
  },
  {
    title: 'Web Development',
    items: portfolio.technical_skills.web_development,
    icon: Globe2,
  },
  {
    title: 'Databases & Tools',
    items: portfolio.technical_skills.databases_and_tools,
    icon: Database,
  },
] as const

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-slate-100 bg-slate-50/80 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Skills
          </p>
          <h2 className="mt-2 font-sans text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Technical toolkit
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A balanced mix of AI, full-stack web, and engineering fundamentals.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.li
                key={cat.title}
                variants={item}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl bg-indigo-50 p-2.5 text-indigo-600">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-sans text-lg font-semibold text-slate-900">
                    {cat.title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
