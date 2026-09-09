type App = {
  name: string;
  description: string;
  glyph: string;
  logo?: string;
  status: "Live" | "Launching soon" | "Coming soon";
  href?: string;
};

const apps: App[] = [
  {
    name: "Daily Story",
    description:
      "Helps news reporters and the owners of news channels, papers and pages market themselves across WhatsApp, Facebook, Instagram and YouTube.",
    glyph: "◐",
    logo: "/logos/daily-story-logo.webp",
    status: "Live",
    href: "https://www.dailystory.in",
  },
  {
    name: "Sanskaar",
    description:
      "A one-stop place for the devotional needs of India's Hindu population.",
    glyph: "ॐ",
    logo: "/logos/sanskaar-logo.webp",
    status: "Launching soon",
  },
  {
    name: "Janta",
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
            Every app we ship does one thing well, without any feature bloat.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => {
            const Card = (
              <div className="glow-card group h-full rounded-3xl border border-white/10 bg-white/3 p-8 transition-colors hover:bg-white/5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {app.logo ? (
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-2xl">
                        <img
                          src={app.logo}
                          alt={`${app.name} logo`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-gold-light to-gold-dark text-xl font-semibold text-ink">
                        {app.glyph}
                      </div>
                    )}
                    <h3 className="font-display text-xl font-semibold">
                      {app.name}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                      app.status === "Live"
                        ? "bg-gold/15 text-gold-light"
                        : "bg-white/5 text-white/50"
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
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
