import { useState } from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-sky-100">
      <Navbar />
      <main>
        <Section
          eyebrow="Contact"
          title="Let’s collaborate"
          subtitle="Brand partnerships, editorial features, and creative experiments—let’s design something luminous."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10">
              {!sent ? (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input required placeholder="Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sky-100 placeholder-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40" />
                    <input type="email" required placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sky-100 placeholder-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40" />
                  </div>
                  <input placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sky-100 placeholder-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40" />
                  <textarea required placeholder="Tell me about your project" rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sky-100 placeholder-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40" />
                  <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 text-slate-900 font-semibold">Send</button>
                </form>
              ) : (
                <div className="p-6 rounded-xl bg-gradient-to-br from-sky-500/10 via-fuchsia-500/10 to-amber-400/10 border border-white/10">
                  <p className="text-white font-medium mb-1">Message sent</p>
                  <p className="text-sky-200/80 text-sm">Thank you. I’ll respond with care and speed.</p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-white font-semibold mb-1">Business</p>
                <a href="mailto:hello@aira.universe" className="text-sky-200/90 text-sm">hello@aira.universe</a>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-white font-semibold mb-1">Press</p>
                <a href="mailto:press@aira.universe" className="text-sky-200/90 text-sm">press@aira.universe</a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
