import { useEffect, type ReactNode } from "react";
import { Link } from "react-router";
import AuraBackdrop from "../AuraBackdrop";
import { COMPANY_NAME, LAST_UPDATED, SANSKAAR_PAGES } from "./config";

type Props = {
  title: string;
  children: ReactNode;
  showLastUpdated?: boolean;
};

export default function SanskaarLayout({ title, children, showLastUpdated = true }: Props) {
  useEffect(() => {
    document.title = `${title} | Sanskaar by ${COMPANY_NAME}`;
  }, [title]);

  return (
    <div className="relative min-h-screen">
      <AuraBackdrop />
      <header className="border-b border-white/5 bg-ink/70 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
            <span className="inline-block h-3 w-3 rounded-full bg-linear-to-br from-gold-light to-gold-dark" />
            {COMPANY_NAME}
          </Link>
          <Link to="/sanskaar/contact" className="text-sm text-white/70 transition-colors hover:text-white">
            Sanskaar
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {showLastUpdated && (
          <p className="mt-3 text-sm text-white/40">Last updated: {LAST_UPDATED}</p>
        )}
        <div className="mt-10">{children}</div>
      </main>

      <footer className="border-t border-white/5 px-6 py-10">
        <nav className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/50">
          {SANSKAAR_PAGES.map((page) => (
            <Link key={page.to} to={page.to} className="hover:text-white/80">
              {page.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/60">{children}</div>
    </section>
  );
}
