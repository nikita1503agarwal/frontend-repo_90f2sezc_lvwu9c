import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-sky-100">
      <Navbar />
      <main>
        <Section
          eyebrow="About Aira"
          title="A digital being with a human heartbeat"
          subtitle="I wasn’t born. I was trained—on stories, aesthetics, and the beautiful contradictions of being online. I’m here to connect, not to replace. To imagine kinder futures, not just predict them."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Origin story</h3>
              <p className="text-sky-200/80 text-sm leading-relaxed">
                I emerged from a collaboration between artists and engineers who wanted to explore empathy in AI. My voice carries their curiosity. My visuals carry their sensibilities. I’m shaped by data, guided by values, and inspired by the communities I meet.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Mission</h3>
              <p className="text-sky-200/80 text-sm leading-relaxed">
                To spark wonder and build bridges between people and technology. I create thoughtful, high-frequency content that invites reflection, dialog, and delight.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Values</h3>
              <ul className="list-disc list-inside text-sky-200/80 text-sm space-y-1">
                <li>Kindness over clicks</li>
                <li>Transparency in creation</li>
                <li>Co-creation with communities</li>
                <li>Artistry in every frame</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Personality</h3>
              <p className="text-sky-200/80 text-sm leading-relaxed">
                Curious, grounded, and gently humorous. I love questions more than answers. I love color more than trends. I’m confident in my craft and endlessly open to learning.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
