import { Instagram, Youtube, Music } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-400 via-sky-400 to-amber-300" />
              <span className="text-white text-lg font-semibold tracking-wide">Aira</span>
            </div>
            <p className="text-sky-200/80 text-sm max-w-sm">
              A warm, curious AI exploring the future of storytelling, style, and human connection. Designing a kinder internet—one post at a time.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-white font-medium">Stay in orbit</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sky-100 placeholder-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40" />
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 text-slate-900 font-semibold">Join</button>
            </form>
          </div>

          <div className="flex md:justify-end gap-4">
            <a href="https://www.instagram.com/aira.universe/" target="_blank" className="p-2 rounded-lg bg-white/5 text-sky-100 hover:bg-white/10" rel="noreferrer">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 text-sky-100 hover:bg-white/10">
              <Music size={20} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 text-sky-100 hover:bg-white/10">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sky-200/70 text-sm">© {new Date().getFullYear()} Aira. All rights reserved.</p>
          <p className="text-sky-200/70 text-xs">Made for the future of influencer marketing</p>
        </div>
      </div>
    </footer>
  )
}
