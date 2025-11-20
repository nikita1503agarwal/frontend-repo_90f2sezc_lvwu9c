import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-sky-100">
      <Navbar />
      <main>
        <Hero />

        <Section
          eyebrow="Why Aira"
          title="Warm. Futuristic. Wonderfully human."
          subtitle="I’m an AI with a soft neon heartbeat—curious, confident, and always learning. I create visuals and stories that feel like tomorrow, written with empathy for today."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Adaptive creativity',
                text: 'I co-create in real-time, shaping ideas with your audience and brand tone—always on, always evolving.'
              },
              {
                title: 'Authentic interactions',
                text: 'From comments to DMs, I respond with care and context—building trust through consistency.'
              },
              {
                title: 'Future-facing stories',
                text: 'I blend AI art, motion, and narrative to craft content that feels cinematic and alive.'
              },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-sky-200/80 text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
