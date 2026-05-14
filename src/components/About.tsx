import { motion } from 'framer-motion'
import { Briefcase, HeartHandshake, Trophy, Users } from 'lucide-react'
import { portfolio } from '../data/portfolio'

type AboutImage = {
  src?: string
  alt: string
  placeholderLabel: string
}

function AboutImage({ item, spanFull }: { item: AboutImage; spanFull: boolean }) {
  if (item.src) {
    return (
      <div
        className={`overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm ${spanFull ? 'sm:col-span-2' : ''}`}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={item.alt}
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-200 bg-gradient-to-br from-slate-100 via-indigo-50/80 to-violet-100 shadow-inner ${spanFull ? 'sm:col-span-2' : ''}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, white, transparent 42%), radial-gradient(circle at 85% 75%, rgba(99, 102, 241, 0.22), transparent 48%)',
        }}
      />
      <span className="relative z-10 max-w-[88%] text-center text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
        {item.placeholderLabel}
      </span>
      <span className="absolute bottom-2 left-2 right-2 rounded-lg bg-white/85 px-2 py-1 text-center text-[10px] font-medium text-slate-500 backdrop-blur-sm">
        Image générée (placeholder) — remplacez par une photo réelle
      </span>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48 } },
}

export function About() {
  const { about } = portfolio

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-100 bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            À propos
          </p>
          <h2 className="mt-2 font-sans text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Parcours, hackathons & engagement
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            {about.intro}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="mt-16"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-xl bg-indigo-50 p-2 text-indigo-600">
              <Trophy className="size-5" aria-hidden />
            </span>
            <h3 className="font-sans text-xl font-semibold text-slate-900 sm:text-2xl">
              Parascolaire & compétitions
            </h3>
          </div>

          <ul className="mt-10 space-y-14">
            {about.extracurricular.map((block, i) => (
              <motion.li
                key={block.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid gap-8 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm shadow-slate-200/30 sm:p-8 lg:grid-cols-2 lg:items-center"
              >
                <div
                  className={`grid gap-3 ${block.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}
                >
                  {block.images.map((img) => (
                    <AboutImage
                      key={img.alt}
                      item={img as AboutImage}
                      spanFull={block.images.length === 1}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    {block.badge}
                  </p>
                  <h4 className="mt-2 font-sans text-xl font-semibold tracking-tight text-slate-900">
                    {block.title}
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {block.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="mt-20"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-xl bg-indigo-50 p-2 text-indigo-600">
              <Briefcase className="size-5" aria-hidden />
            </span>
            <h3 className="font-sans text-xl font-semibold text-slate-900 sm:text-2xl">
              Expérience professionnelle & associative
            </h3>
          </div>

          <ul className="mt-10 grid gap-8 lg:grid-cols-2">
            {about.professional.map((job, i) => (
              <motion.li
                key={job.title + job.organization}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-indigo-100 hover:shadow-md hover:shadow-indigo-500/5 sm:p-7"
              >
                <div
                  className={`grid gap-3 ${job.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}
                >
                  {job.images.map((img) => (
                    <AboutImage
                      key={img.alt}
                      item={img as AboutImage}
                      spanFull={job.images.length === 1}
                    />
                  ))}
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <span className="mt-0.5 inline-flex rounded-lg bg-slate-50 p-2 text-slate-500">
                    {job.kind === 'association' ? (
                      <Users className="size-4" aria-hidden />
                    ) : (
                      <HeartHandshake className="size-4" aria-hidden />
                    )}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {job.period}
                    </p>
                    <h4 className="mt-1 font-sans text-lg font-semibold text-slate-900">
                      {job.title}
                    </h4>
                    <p className="text-sm font-medium text-indigo-600">
                      {job.organization}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {job.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
