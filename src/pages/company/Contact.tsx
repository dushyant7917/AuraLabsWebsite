import CompanyLayout from "../../components/company/CompanyLayout";
import { COMPANY_EMAIL, COMPANY_NAME } from "../../components/company/config";

export default function Contact() {
  return (
    <CompanyLayout title="Contact" showLastUpdated={false} centerTitle>
      <div className="text-center">
        <p className="text-white/60">
          Questions, feedback, partnerships or support requests for {COMPANY_NAME} &mdash;
          we&rsquo;d love to hear from you.
        </p>

        <a
          href={`mailto:${COMPANY_EMAIL}`}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/3 px-8 py-4 font-display text-lg font-medium text-white transition-all hover:border-white/30 hover:bg-white/6"
        >
          <span className="text-gradient">{COMPANY_EMAIL}</span>
          <span aria-hidden="true" className="text-white/40">
            &rarr;
          </span>
        </a>

        <p className="mt-6 text-sm text-white/40">We usually reply within a couple of days.</p>
      </div>
    </CompanyLayout>
  );
}
