import SanskaarLayout from "../../components/sanskaar/SanskaarLayout";
import {
  SANSKAAR_PHONE_DISPLAY,
  SANSKAAR_PHONE_TEL,
  SANSKAAR_WHATSAPP_NUMBER,
} from "../../components/sanskaar/config";

export default function SanskaarContact() {
  return (
    <SanskaarLayout title="Contact" showLastUpdated={false}>
      <div className="text-center">
        <p className="text-white/60">
          Have a question about Sanskaar? Give us a call or message us on WhatsApp.
        </p>

        <p className="mt-10 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          <span className="text-gradient">{SANSKAAR_PHONE_DISPLAY}</span>
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${SANSKAAR_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-linear-to-r from-gold-dark to-gold-light px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_30px_-5px_rgba(255,215,0,0.6)] transition-transform hover:scale-105"
          >
            Message on WhatsApp
          </a>
          <a
            href={`tel:${SANSKAAR_PHONE_TEL}`}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            Call us
          </a>
        </div>
      </div>
    </SanskaarLayout>
  );
}
