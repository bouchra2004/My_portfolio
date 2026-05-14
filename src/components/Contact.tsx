import { motion } from 'framer-motion'
import { GitBranch, Globe, Mail, MapPin, Phone, Send } from 'lucide-react'
import type { FormEvent } from 'react'
import { portfolio } from '../data/portfolio'

export function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(
      name ? `Portfolio — message from ${name}` : 'Portfolio contact',
    )
    const body = encodeURIComponent(
      [
        name ? `Name: ${name}` : '',
        email ? `Reply-to: ${email}` : '',
        '',
        message || '(No message body)',
      ]
        .filter(Boolean)
        .join('\n'),
    )
    window.location.href = `mailto:${portfolio.contact.email}?subject=${subject}&body=${body}`
  }

  const { contact } = portfolio

  return (
    <section
      id="contact"
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
            Contact
          </p>
          <h2 className="mt-2 font-sans text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Reach out for internship opportunities, collaborations, or a quick
            chat about AI and web projects.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-slate-400">
                Direct
              </h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-indigo-600" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-medium text-slate-900 hover:text-indigo-600 hover:underline"
                  >
                    {contact.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-indigo-600" />
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="font-medium text-slate-900 hover:text-indigo-600"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-indigo-600" />
                  <span className="text-slate-700">{contact.location}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-slate-400">
                Social
              </h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-indigo-200 hover:bg-white hover:text-indigo-600"
                  >
                    <Globe className="size-4" aria-hidden />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-indigo-200 hover:bg-white hover:text-indigo-600"
                  >
                    <GitBranch className="size-4" aria-hidden />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/40 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Name
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none ring-indigo-500/0 transition placeholder:text-slate-400 focus:border-indigo-200 focus:bg-white focus:ring-4"
                  placeholder="Your name"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none ring-indigo-500/0 transition placeholder:text-slate-400 focus:border-indigo-200 focus:bg-white focus:ring-4"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none ring-indigo-500/0 transition placeholder:text-slate-400 focus:border-indigo-200 focus:bg-white focus:ring-4"
                  placeholder="Tell me about the role, timeline, or anything you'd like to discuss."
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 sm:w-auto"
            >
              <Send className="size-4" aria-hidden />
              Send via email
            </button>
            <p className="mt-3 text-xs text-slate-500">
              Opens your email client with a pre-filled message to{' '}
              {contact.email}.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
