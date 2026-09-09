export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/60">
          A consumer app studio
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          We build apps for
          <br />
          <span className="text-gradient">India's next billion!</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
          Aura Labs ships focused consumer apps, for everyday life.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#apps"
            className="rounded-full bg-linear-to-r from-gold-dark to-gold-light px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_30px_-5px_rgba(255,215,0,0.6)] transition-transform hover:scale-105"
          >
            See our apps
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            Say hello
          </a>
        </div>
      </div>
    </section>
  );
}
