import { motion } from 'framer-motion'
import { ExternalLink, FolderGit2 } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
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
            Projects
          </p>
          <h2 className="mt-2 font-sans text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Academic and research projects spanning computer vision, graph ML,
            and full-stack applications.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {portfolio.projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/30 transition duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    {project.type}
                  </p>
                  <h3 className="mt-2 font-sans text-xl font-semibold tracking-tight text-slate-900">
                    {project.name}
                  </h3>
                </div>
                <span className="rounded-xl border border-slate-100 bg-slate-50 p-2 text-slate-500 transition group-hover:border-indigo-100 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                  <FolderGit2 className="size-5" aria-hidden />
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <li key={t}>
                    <span className="inline-flex rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-100">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
                <a
                  href={portfolio.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
                >
                  GitHub profile
                  <ExternalLink className="size-3.5 opacity-70" aria-hidden />
                </a>
                <span className="text-sm text-slate-400">
                  Repositories available on request
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
