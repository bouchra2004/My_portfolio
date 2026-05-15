import { motion } from 'framer-motion'
import { Briefcase, HeartHandshake, Trophy, Users } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { publicAssetUrl } from '../lib/publicUrl'

type AboutImage = {
  src?: string
  alt: string
  placeholderLabel?: string
  /** Pleine largeur (ex. certificat paysage) */
  wide?: boolean
}

type ImageGallery = {
  label: string
  images: AboutImage[]
}

type ExtracurricularBlock = (typeof portfolio.about.extracurricular)[number]

function AboutImageCard({ item }: { item: AboutImage }) {
  if (item.src) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
      >
        <img
          src={publicAssetUrl(item.src)}
          alt={item.alt}
          className={
            item.wide
              ? 'aspect-[16/10] w-full bg-slate-50 object-contain object-center p-2 sm:p-3'
              : 'aspect-[4/3] w-full object-cover object-center'
          }
          loading="lazy"
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      role="img"
      aria-label={item.alt}
      className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-200 bg-gradient-to-br from-slate-100 via-indigo-50/80 to-violet-100 shadow-inner"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, white, transparent 42%), radial-gradient(circle at 85% 75%, rgba(99, 102, 241, 0.22), transparent 48%)',
        }}
      />
      <span className="relative z-10 max-w-[88%] text-center text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
        {item.placeholderLabel ?? 'Photo'}
      </span>
      <span className="absolute bottom-2 left-2 right-2 rounded-lg bg-white/85 px-2 py-1 text-center text-[10px] font-medium text-slate-500 backdrop-blur-sm">
        Placeholder — ajoutez une photo dans portfolio.ts
      </span>
    </motion.div>
  )
}

function ImageGalleryGrid({ gallery }: { gallery: ImageGallery }) {
  const cols =
    gallery.images.length >= 3
      ? 'grid-cols-2 sm:grid-cols-3'
      : gallery.images.length === 2
        ? 'grid-cols-2'
        : 'grid-cols-1'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45 }}
      className="space-y-3"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {gallery.label}
      </p>
      <motion.div
        className={`grid gap-3 ${cols}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.07 },
          },
        }}
      >
        {gallery.images.map((img) => (
          <motion.div
            key={img.alt}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <AboutImageCard item={img} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

function ExtracurricularCard({
  block,
  index,
}: {
  block: ExtracurricularBlock
  index: number
}) {
  const hasGalleries = 'galleries' in block && block.galleries

  if (hasGalleries) {
    return (
      <motion.li
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="space-y-8 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm shadow-slate-200/30 sm:p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
            {block.badge}
          </p>
          <h4 className="mt-2 font-sans text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            {block.title}
          </h4>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {block.description}
          </p>
        </motion.div>
        <div className="space-y-8">
          {block.galleries.map((gallery) => (
            <ImageGalleryGrid key={gallery.label} gallery={gallery} />
          ))}
        </div>
      </motion.li>
    )
  }

  const images = 'images' in block ? block.images : []

  return (
    <motion.li
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="grid gap-8 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm shadow-slate-200/30 sm:p-8 lg:grid-cols-2 lg:items-center"
    >
      <motion.div
        className={`grid gap-3 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.07 },
          },
        }}
      >
        {images.map((img) => {
          const image = img as AboutImage
          return (
            <motion.div
              key={image.alt}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              className={
                images.length === 1 || image.wide ? 'sm:col-span-2' : ''
              }
            >
              <AboutImageCard item={image} />
            </motion.div>
          )
        })}
      </motion.div>
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
      <motion.div className="mx-auto max-w-6xl">
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
          <motion.div className="flex items-center gap-3">
            <span className="inline-flex rounded-xl bg-indigo-50 p-2 text-indigo-600">
              <Trophy className="size-5" aria-hidden />
            </span>
            <h3 className="font-sans text-xl font-semibold text-slate-900 sm:text-2xl">
              Parascolaire & compétitions
            </h3>
          </motion.div>

          <ul className="mt-10 space-y-14">
            {about.extracurricular.map((block, i) => (
              <ExtracurricularCard key={block.title} block={block} index={i} />
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
          <motion.div className="flex items-center gap-3">
            <span className="inline-flex rounded-xl bg-indigo-50 p-2 text-indigo-600">
              <Briefcase className="size-5" aria-hidden />
            </span>
            <h3 className="font-sans text-xl font-semibold text-slate-900 sm:text-2xl">
              Expérience professionnelle & associative
            </h3>
          </motion.div>

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
                    <AboutImageCard key={img.alt} item={img} />
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
                  <motion.div>
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
                  </motion.div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
