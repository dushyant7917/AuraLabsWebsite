import SanskaarLayout, { PolicySection } from "../../components/sanskaar/SanskaarLayout";
import { COMPANY_NAME, SANSKAAR_SUPPORT_EMAIL } from "../../components/sanskaar/config";

export default function TermsAndConditions() {
  return (
    <SanskaarLayout title="Terms & Conditions">
      <PolicySection title="1. About these terms">
        <p>
          These Terms & Conditions govern your use of Sanskaar, a devotional app operated by
          {" "}{COMPANY_NAME} ("we", "us"). By downloading,
          installing or using Sanskaar, you agree to these terms. If you do not agree,
          please do not use the app.
        </p>
      </PolicySection>

      <PolicySection title="2. Eligibility and accounts">
        <p>
          You must be at least 13 years old to use Sanskaar. If you are under 18, please use
          the app with the involvement of a parent or guardian. You are responsible for keeping your
          login details confidential and for all activity under your account. Tell us
          immediately if you suspect unauthorised use.
        </p>
      </PolicySection>

      <PolicySection title="3. Subscriptions and payments">
        <p>
          Some features of Sanskaar are available through a paid subscription. Prices and
          billing periods are shown in the app before you pay. Subscriptions renew
          automatically at the end of each billing period until cancelled, as described in
          our Refunds & Cancellation policy.
        </p>
      </PolicySection>

      <PolicySection title="4. Content">
        <p>
          Sanskaar provides devotional content for personal and spiritual use, including
          devotional ringtones, alarm tones, mantras, aartis, chalisas, wallpapers and
          statuses. Content is provided for personal use and is not a substitute for guidance
          from a qualified priest, scholar or religious authority. You may not copy, resell or
          redistribute app content without our written permission.
        </p>
      </PolicySection>

      <PolicySection title="5. Acceptable use">
        <p>
          You agree not to misuse Sanskaar. This includes reverse engineering the app,
          attempting to access other users' accounts, interfering with the service, or using
          it for unlawful purposes.
        </p>
      </PolicySection>

      <PolicySection title="6. Intellectual property">
        <p>
          The Sanskaar name, logo, app design and software belong to {COMPANY_NAME} or its
          licensors. These terms give you a limited, non-exclusive, non-transferable right to
          use the app for personal purposes.
        </p>
      </PolicySection>

      <PolicySection title="7. Availability and changes">
        <p>
          We work to keep Sanskaar available, but it may be interrupted for maintenance,
          updates or reasons beyond our control. We may change or discontinue features, and
          we may update these terms. We will show the updated date at the top of this page.
          Continued use after changes means you accept them.
        </p>
      </PolicySection>

      <PolicySection title="8. Termination">
        <p>
          You may stop using Sanskaar at any time. We may suspend or end your access if you
          breach these terms. Clauses on payments, intellectual property, disclaimers and
          liability survive termination.
        </p>
      </PolicySection>

      <PolicySection title="9. Disclaimer and liability">
        <p>
          Sanskaar is provided "as is". To the extent permitted by law, we are not liable
          for indirect or consequential losses arising from your use of the app. Our total
          liability is limited to the amount you paid us in the three months before the
          claim.
        </p>
      </PolicySection>

      <PolicySection title="10. Governing law">
        <p>
          These terms are governed by the laws of India. Courts at the place where {COMPANY_NAME}
          is registered will have jurisdiction over disputes.
        </p>
      </PolicySection>

      <PolicySection title="11. Contact">
        <p>
          Questions about these terms? Email us at{" "}
          <a href={`mailto:${SANSKAAR_SUPPORT_EMAIL}`} className="text-gold-light hover:underline">
            {SANSKAAR_SUPPORT_EMAIL}
          </a>
          .
        </p>
      </PolicySection>
    </SanskaarLayout>
  );
}
