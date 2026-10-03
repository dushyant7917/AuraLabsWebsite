import SanskaarLayout, { PolicySection } from "../../components/sanskaar/SanskaarLayout";
import { COMPANY_NAME, SANSKAAR_SUPPORT_EMAIL } from "../../components/sanskaar/config";

export default function PrivacyPolicy() {
  return (
    <SanskaarLayout title="Privacy Policy">
      <PolicySection title="1. Who we are">
        <p>
          This policy explains how {COMPANY_NAME} collects, uses and protects your personal
          information when you use the Sanskaar app. By using Sanskaar, you agree to the
          practices described here.
        </p>
      </PolicySection>

      <PolicySection title="2. Information we collect">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-white/80">Account details:</span> name, phone number or email,
            and login identifiers you provide when signing up.
          </li>
          <li>
            <span className="text-white/80">Subscription and payment records:</span> plan chosen,
            billing dates, and transaction references.
          </li>
          <li>
            <span className="text-white/80">Usage data:</span> app activity, device type,
            operating system, app version and crash reports, used to keep the app working.
          </li>
          <li>
            <span className="text-white/80">Support messages:</span> anything you send us when
            you contact support.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="3. How we use your information">
        <ul className="list-disc space-y-2 pl-5">
          <li>To create and manage your account and subscription.</li>
          <li>To process payments, renewals, refunds and cancellations.</li>
          <li>To provide, personalise and improve Sanskaar features.</li>
          <li>To send service messages, such as receipts, renewal reminders and security alerts.</li>
          <li>To respond to support requests and to meet legal obligations.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </PolicySection>

      <PolicySection title="4. Sharing">
        <p>We share information only with:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Payment providers, to process your subscription payments.</li>
          <li>Hosting, analytics and crash-reporting providers that help us run the app.</li>
          <li>Authorities, where required by law or to protect our users and services.</li>
        </ul>
        <p>These providers may only use your information to perform services for us.</p>
      </PolicySection>

      <PolicySection title="5. Data security">
        <p>
          We use reasonable technical and organisational measures to protect your information.
          No system is completely secure, so we cannot guarantee absolute security.
        </p>
      </PolicySection>

      <PolicySection title="6. Data retention">
        <p>
          We keep your information while your account is active and for a reasonable period
          afterwards, as needed for accounting, legal and dispute purposes. You can ask us to
          delete your account, and we will delete or anonymise data that we no longer need.
        </p>
      </PolicySection>

      <PolicySection title="7. Your rights">
        <p>
          You can access, correct or request deletion of your personal information, request
          deletion of your Sanskaar account, and withdraw consent for optional processing. To do
          so, email us at{" "}
          <a href={`mailto:${SANSKAAR_SUPPORT_EMAIL}`} className="text-gold-light hover:underline">
            {SANSKAAR_SUPPORT_EMAIL}
          </a>
          . We will respond within a reasonable time.
        </p>
      </PolicySection>

      <PolicySection title="8. Children">
        <p>
          Sanskaar is not directed at children under 13. If you believe a child has given us
          personal information without parental consent, contact us and we will delete it.
        </p>
      </PolicySection>

      <PolicySection title="9. Changes to this policy">
        <p>
          We may update this policy from time to time. The "Last updated" date at the top of this
          page shows when it last changed. Significant changes will be notified in the app.
        </p>
      </PolicySection>

      <PolicySection title="10. Contact">
        <p>
          Questions about privacy? Email{" "}
          <a href={`mailto:${SANSKAAR_SUPPORT_EMAIL}`} className="text-gold-light hover:underline">
            {SANSKAAR_SUPPORT_EMAIL}
          </a>
          .
        </p>
      </PolicySection>
    </SanskaarLayout>
  );
}
