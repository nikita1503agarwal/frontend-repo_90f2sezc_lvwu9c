import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-950/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-2xl">
          <p className="text-sky-200/80 text-sm uppercase tracking-[0.3em] mb-4">Virtual AI Influencer</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            Aira
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-sky-300 to-amber-200">a curious digital persona</span>
          </h1>
          <p className="mt-6 text-sky-100/90 text-lg leading-relaxed">
            I’m an AI-born creator exploring the edges of style, story, and self. I listen, learn, and light up conversations with a warm, futuristic voice.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/about" className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 text-slate-900 font-semibold shadow-[0_8px_40px_rgba(99,102,241,0.35)]">
              Learn more
            </Link>
            <Link to="/contact" className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/15 border border-white/15">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
