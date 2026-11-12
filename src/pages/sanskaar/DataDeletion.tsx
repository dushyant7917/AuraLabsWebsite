import SanskaarLayout, { PolicySection } from "../../components/sanskaar/SanskaarLayout";
import { COMPANY_NAME, SANSKAAR_SUPPORT_EMAIL } from "../../components/sanskaar/config";

const DELETION_MAILTO = `mailto:${SANSKAAR_SUPPORT_EMAIL}?subject=${encodeURIComponent(
  "Sanskaar account deletion request",
)}`;

export default function DataDeletion() {
  return (
    <SanskaarLayout title="Data Deletion">
      <PolicySection title="1. Request deletion of your account and data">
        <p>
          You can ask {COMPANY_NAME} to delete your Sanskaar account and the personal information
          linked to it at any time. To do so, follow these steps:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Email us at{" "}
            <a href={DELETION_MAILTO} className="text-gold-light hover:underline">
              {SANSKAAR_SUPPORT_EMAIL}
            </a>{" "}
            with the subject "Sanskaar account deletion request".
          </li>
          <li>
            Send the request from the email address linked to your account, or include the phone
            number you registered with, so we can identify your account.
          </li>
          <li>
            We may reply to confirm that the request is really from you. Your account is deleted
            once this is done.
          </li>
        </ol>
        <div className="pt-2">
          <a
            href={DELETION_MAILTO}
            className="inline-block rounded-full bg-linear-to-r from-gold-dark to-gold-light px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_30px_-5px_rgba(255,215,0,0.6)] transition-transform hover:scale-105"
          >
            Email a deletion request
          </a>
        </div>
      </PolicySection>

      <PolicySection title="2. What gets deleted">
        <ul className="list-disc space-y-2 pl-5">
          <li>Your account profile, including your name, phone number and email.</li>
          <li>Login identifiers, such as your linked Google account details.</li>
          <li>Your app activity and preferences.</li>
          <li>Support messages you have sent us, where we no longer need them.</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. What we may keep">
        <p>
          Some records must be kept for a limited period to meet legal, tax and accounting
          obligations, or to resolve disputes. This includes subscription and payment records
          such as billing dates and transaction references. We keep only what is needed, and
          delete or anonymise it once the period ends.
        </p>
      </PolicySection>

      <PolicySection title="4. How long it takes">
        <p>
          We process deletion requests within 30 days of confirming your identity. Deleting
          your account ends your access to Sanskaar and cannot be undone. If you have an active
          subscription, it will stop with your account; see our{" "}
          <a href="/sanskaar/refunds-and-cancellation" className="text-gold-light hover:underline">
            Refunds & Cancellation
          </a>{" "}
          policy for details.
        </p>
      </PolicySection>

      <PolicySection title="5. Delete only some of your data">
        <p>
          If you want certain information removed but wish to keep your account, tell us in
          your email what you would like deleted and we will let you know what we can do. For
          more on the data we collect, read our{" "}
          <a href="/sanskaar/privacy-policy" className="text-gold-light hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </PolicySection>
    </SanskaarLayout>
  );
}
