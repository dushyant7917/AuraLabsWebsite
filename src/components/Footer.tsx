import { Link } from "react-router";
import { COMPANY_PAGES } from "./company/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-linear-to-br from-gold-light to-gold-dark" />
          Aura Labs
        </div>
        <p>&copy; {year} Aura Labs. All rights reserved.</p>
        <a href="mailto:contact@byauralabs.com" className="hover:text-white/70">
          contact@byauralabs.com
        </a>
      </div>
      <nav className="mx-auto mt-6 flex max-w-6xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/40">
        {COMPANY_PAGES.map((page) => (
          <Link key={page.to} to={page.to} className="hover:text-white/70">
            {page.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
