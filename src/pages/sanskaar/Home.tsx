import { useEffect } from "react";
import { Link } from "react-router";
import AuraBackdrop from "../../components/AuraBackdrop";
import {
  COMPANY_NAME,
  SANSKAAR_PAGES,
} from "../../components/sanskaar/config";

const FEATURES = [
  { icon: "🔔", title: "Devotional Ringtones", text: "Start every call with the divine. Beautiful ringtones inspired by your favourite deities." },
  { icon: "⏰", title: "Alarm Tones", text: "Wake up peacefully to soothing chants, shlokas and temple bells." },
  { icon: "🕉️", title: "Mantras", text: "A rich collection of sacred mantras to chant, listen to and meditate with." },
  { icon: "🪔", title: "Bhajans", text: "Timeless bhajans and aartis to fill your home and heart with devotion." },
  { icon: "🖼️", title: "Wallpapers", text: "Stunning HD wallpapers of Hindu gods and goddesses for your phone." },
  { icon: "📲", title: "Status", text: "Share blessings and festival greetings with ready-made status for every deity." },
] as const;

export default function SanskaarHome() {
  useEffect(() => {
    document.title = `Sanskaar | Devotional App by ${COMPANY_NAME}`;
  }, []);

  return (
    <div className="relative min-h-screen">
      <AuraBackdrop />

      <header className="sticky top-0 z-10 border-b border-white/5 bg-ink/70 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight">
            <img src="/logos/sanskaar-logo.webp" alt="Sanskaar logo" className="h-9 w-9 rounded-xl object-cover" />
            Sanskaar
          </a>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="transition-colors hover:text-white">Features</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
          <img
            src="/logos/sanskaar-logo.webp"
            alt="Sanskaar logo"
            className="mx-auto h-28 w-28 rounded-3xl object-cover shadow-[0_0_60px_-10px_rgba(255,215,0,0.5)]"
          />
          <h1 className="text-gradient mt-8 font-display text-5xl font-semibold tracking-tight sm:text-6xl">Sanskaar</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Sanskaar is a one-stop devotional app for India's Hindu community. Bring the blessings of your
            favourite gods and goddesses into everyday life with sacred sounds, mantras, bhajans and
            beautiful visuals, all in one place.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/sanskaar/signup"
              className="rounded-full bg-linear-to-r from-gold-dark to-gold-light px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_30px_-5px_rgba(255,215,0,0.6)] transition-transform hover:scale-105"
            >
              Sign Up
            </Link>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight">Everything for your devotion</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="glow-card rounded-3xl border border-white/10 bg-white/3 p-8 hover:bg-white/5">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-4 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Have questions?</h2>
          <p className="mt-3 text-white/60">We'd love to hear from you.</p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/sanskaar/contact"
              className="rounded-full bg-linear-to-r from-gold-dark to-gold-light px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_30px_-5px_rgba(255,215,0,0.6)] transition-transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
          <div className="flex items-center gap-3 font-display text-lg font-semibold">
            <img src="/logos/sanskaar-logo.webp" alt="" className="h-8 w-8 rounded-lg object-cover" />
            Sanskaar
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/50">
            {SANSKAAR_PAGES.map((page) => (
              <Link key={page.to} to={page.to} className="hover:text-white/80">
                {page.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
