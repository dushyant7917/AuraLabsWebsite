const links = [
  { href: "#apps", label: "Apps" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <img src="/logos/aura-labs-logo.svg" alt="" width={40} height={40} className="h-10 w-10" />
          Aura Labs
        </a>
        <ul className="hidden items-center gap-8 text-sm text-white/70 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-white/70 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-105"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
