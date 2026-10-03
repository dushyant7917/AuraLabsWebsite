import SanskaarLayout, { PolicySection } from "../../components/sanskaar/SanskaarLayout";
import { COMPANY_NAME, SANSKAAR_SUPPORT_EMAIL } from "../../components/sanskaar/config";

export default function ShippingPolicy() {
  return (
    <SanskaarLayout title="Shipping Policy">
      <PolicySection title="1. Digital service">
        <p>
          Sanskaar is a digital app. Subscriptions and in-app content are delivered
          electronically once payment is confirmed. No physical goods are shipped, so no
          postal or courier delivery applies.
        </p>
      </PolicySection>

      <PolicySection title="2. Access after payment">
        <p>
          Paid features are unlocked in your account shortly after the payment is confirmed. If
          your subscription does not show as active within a few minutes of paying, try closing
          and reopening the app, then check that you are signed in with the same account you used
          to pay.
        </p>
      </PolicySection>

      <PolicySection title="3. Delivery issues">
        <p>
          If you paid but cannot access the features you purchased, contact {COMPANY_NAME} with
          your registered phone number or email, and the transaction reference. We will fix the
          access or, where needed, process a refund under our Refunds & Cancellation policy.
        </p>
      </PolicySection>

      <PolicySection title="4. Contact">
        <p>
          Email{" "}
          <a href={`mailto:${SANSKAAR_SUPPORT_EMAIL}`} className="text-gold-light hover:underline">
            {SANSKAAR_SUPPORT_EMAIL}
          </a>{" "}
          for any questions about access to Sanskaar.
        </p>
      </PolicySection>
    </SanskaarLayout>
  );
}
