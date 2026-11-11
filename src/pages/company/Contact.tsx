import CompanyLayout from "../../components/company/CompanyLayout";
import { COMPANY_EMAIL, COMPANY_NAME, COMPANY_PHONE } from "../../components/company/config";

const pillClass =
  "inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/3 px-8 py-4 font-display text-lg font-medium text-white transition-all hover:border-white/30 hover:bg-white/6";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "shrink-0 text-white/50",
};

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <CompanyLayout title="Contact" showLastUpdated={false} centerTitle>
      <div className="text-center">
        <p className="text-white/60">
          Questions, feedback, partnerships or support requests for {COMPANY_NAME} &mdash;
          we&rsquo;d love to hear from you.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={`mailto:${COMPANY_EMAIL}`} className={pillClass}>
            <MailIcon />
            <span className="text-gradient">{COMPANY_EMAIL}</span>
          </a>

          <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`} className={pillClass}>
            <PhoneIcon />
            <span className="text-gradient">{COMPANY_PHONE}</span>
          </a>
        </div>

        <p className="mt-6 text-sm text-white/40">We usually reply within a day.</p>
      </div>
    </CompanyLayout>
  );
}
