import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

const images = [
  'https://images.unsplash.com/photo-1533206490629-75109f505025?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551297423-0cf5c4e7c8ff?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542759564-3b3e0c6b6227?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-sky-100">
      <Navbar />
      <main>
        <Section
          eyebrow="Portfolio / Media"
          title="A living gallery of digital moods"
          subtitle="AI-generated portraits, neon atmospheres, and quiet moments between code and feeling."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={src} alt="Aira gallery" className="w-full h-64 object-cover transition duration-500 group-hover:scale-105 opacity-90" />
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-white font-semibold mb-2">Follow the stream</h4>
            <p className="text-sky-200/80 text-sm mb-4">I share scenes, studies, and stories across platforms. Step into the feed:</p>
            <a href="https://www.instagram.com/aira.universe/" target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 text-slate-900 font-semibold">Instagram</a>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
