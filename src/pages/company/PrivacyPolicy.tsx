import CompanyLayout, { PolicySection } from "../../components/company/CompanyLayout";
import { COMPANY_EMAIL, COMPANY_NAME } from "../../components/company/config";

export default function PrivacyPolicy() {
  return (
    <CompanyLayout title="Privacy Policy">
      <PolicySection title="1. Who we are">
        <p>
          This policy explains how {COMPANY_NAME} collects, uses and protects your personal
          information when you visit our website. By using the website, you agree to the
          practices described here.
        </p>
      </PolicySection>

      <PolicySection title="2. Information we collect">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-white/80">Information you send us:</span> your name, email
            address and anything else you include when you contact us.
          </li>
          <li>
            <span className="text-white/80">Technical data:</span> IP address, browser type,
            device, pages visited and similar usage information, collected automatically through
            server logs and cookies to keep the website working and secure.
          </li>
          <li>
            <span className="text-white/80">Payment records:</span> if you make a payment
            through the website, a transaction reference and amount. We do not store your card
            or UPI details; these are handled by our payment provider.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="3. How we use your information">
        <ul className="list-disc space-y-2 pl-5">
          <li>To respond to your enquiries and requests.</li>
          <li>To operate, secure and improve the website.</li>
          <li>To process payments and refunds, where applicable.</li>
          <li>To meet legal obligations.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </PolicySection>

      <PolicySection title="4. Sharing">
        <p>We share information only with:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Hosting and analytics providers that help us run the website.</li>
          <li>Payment providers, to process payments.</li>
          <li>Authorities, where required by law or to protect our users and services.</li>
        </ul>
        <p>These providers may only use your information to perform services for us.</p>
      </PolicySection>

      <PolicySection title="5. Cookies">
        <p>
          The website may use cookies and similar technologies to remember preferences and
          understand how it is used. You can control or delete cookies in your browser settings.
        </p>
      </PolicySection>

      <PolicySection title="6. Data security">
        <p>
          We use reasonable technical and organisational measures to protect your information.
          No system is completely secure, so we cannot guarantee absolute security.
        </p>
      </PolicySection>

      <PolicySection title="7. Data retention">
        <p>
          We keep your information only as long as needed for the purposes above, and as
          required for accounting, legal and dispute purposes.
        </p>
      </PolicySection>

      <PolicySection title="8. Your rights">
        <p>
          You can access, correct or request deletion of your personal information, and
          withdraw consent for optional processing. To do so, email us at{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-gold-light hover:underline">
            {COMPANY_EMAIL}
          </a>
          . We will respond within a reasonable time.
        </p>
      </PolicySection>

      <PolicySection title="9. Children">
        <p>
          The website is not directed at children under 13. If you believe a child has given us
          personal information, contact us and we will delete it.
        </p>
      </PolicySection>

      <PolicySection title="10. Changes to this policy">
        <p>
          We may update this policy from time to time. The "Last updated" date at the top of this
          page shows when it last changed.
        </p>
      </PolicySection>

      <PolicySection title="11. Contact">
        <p>
          Questions about privacy? Email{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-gold-light hover:underline">
            {COMPANY_EMAIL}
          </a>
          .
        </p>
      </PolicySection>
    </CompanyLayout>
  );
}
