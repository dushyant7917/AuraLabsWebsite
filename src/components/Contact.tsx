const CONTACT_EMAIL = "contact@byauralabs.com";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&rsquo;s build something people love
        </h2>
        <p className="mt-4 text-white/60">
          Press, partnerships, feedback, or just want to say hi &mdash;
          we&rsquo;d love to hear from you.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/3 px-8 py-4 font-display text-lg font-medium text-white transition-all hover:border-white/30 hover:bg-white/6"
        >
          <span className="text-gradient">{CONTACT_EMAIL}</span>
          <span aria-hidden="true" className="text-white/40">
            &rarr;
          </span>
        </a>

        <p className="mt-6 text-sm text-white/40">
          We usually reply within a couple of days.
        </p>
      </div>
    </section>
  );
}
