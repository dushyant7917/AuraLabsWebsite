type App = {
  name: string;
  tagline: string;
  description: string;
  glyph: string;
  logo?: string;
  status: "Live" | "Coming soon";
  href?: string;
};

const apps: App[] = [
  {
    name: "Daily Story",
    tagline: "News Poster Maker",
    description:
      "Daily news posters with your photo and name.",
    glyph: "◐",
    logo: "/logos/daily-story-logo.webp",
    status: "Live",
    href: "https://www.dailystory.in",
  },
  {
    name: "Janta",
    tagline: "Local news, for your area",
    description:
      "Hyperlocal news for your neighborhood — what's happening nearby, from people who live there.",
    glyph: "?",
    status: "Coming soon",
  },
];

export default function Apps() {
  return (
    <section id="apps" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A small, focused portfolio
          </h2>
          <p className="mt-4 text-white/60">
            Every app we ship does one thing well. No feature bloat, no dark
            patterns &mdash; just tools that respect your attention.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {apps.map((app) => {
            const Card = (
              <div className="glow-card group h-full rounded-3xl border border-white/10 bg-white/3 p-8 transition-colors hover:bg-white/5">
                <div className="flex items-start justify-between">
                  {app.logo ? (
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white p-1">
                      <img
                        src={app.logo}
                        alt={`${app.name} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-gold-light to-gold-dark text-xl font-semibold text-ink">
                      {app.glyph}
                    </div>
                  )}
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      app.status === "Live"
                        ? "bg-gold/15 text-gold-light"
                        : "bg-white/5 text-white/50"
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {app.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-white/40">
                  {app.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {app.description}
                </p>
              </div>
            );

            return app.href ? (
              <a
                key={app.name}
                href={app.href}
                target="_blank"
                rel="noreferrer"
              >
                {Card}
              </a>
            ) : (
              <div key={app.name}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
