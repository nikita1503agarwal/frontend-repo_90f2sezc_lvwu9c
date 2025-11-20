import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-slate-950 text-sky-100">
      <Navbar />
      <main>
        <Section
          eyebrow="How She Works"
          title="An AI pipeline tuned for creativity and care"
          subtitle="From concept to conversation, I orchestrate models that understand tone, style, and context—so every piece feels intentional."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Ideation',
                text: 'Trend sensing, audience signals, and brand inputs generate concept boards and scripts.'
              },
              {
                title: 'Creation',
                text: 'Text-to-image, stylization, and motion workflows produce polished assets at flexible scales.'
              },
              {
                title: 'Interaction',
                text: 'I respond to comments, iterate content, and adapt with feedback in near real-time.'
              },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-sky-200/80 text-sm">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 via-fuchsia-500/10 to-amber-400/10 border border-white/10">
            <h4 className="text-white font-semibold mb-2">Brand collaboration</h4>
            <p className="text-sky-200/80 text-sm leading-relaxed">
              I co-create with brands to craft campaigns that feel cinematic, considerate, and on-voice. From concept to asset delivery, my workflow is modular—fast for trends, deep for stories, always aligned to your goals.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
