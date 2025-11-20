export default function Section({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1000px_400px_at_20%_0%,rgba(99,102,241,0.08),transparent),radial-gradient(700px_300px_at_90%_40%,rgba(56,189,248,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-sky-200/80 text-xs uppercase tracking-[0.25em] mb-3">{eyebrow}</p>
        )}
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">{title}</h2>
        )}
        {subtitle && (
          <p className="text-sky-100/80 max-w-2xl leading-relaxed mb-8">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  )
}
