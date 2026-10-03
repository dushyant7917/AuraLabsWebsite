import SanskaarLayout, { PolicySection } from "../../components/sanskaar/SanskaarLayout";
import {
  COMPANY_NAME,
  SANSKAAR_PHONE_DISPLAY,
  SANSKAAR_WHATSAPP_NUMBER,
  SANSKAAR_SUPPORT_EMAIL,
} from "../../components/sanskaar/config";

export default function RefundsAndCancellation() {
  return (
    <SanskaarLayout title="Refunds & Cancellation">
      <PolicySection title="1. Cancelling your subscription">
        <p>
          You can cancel your Sanskaar subscription at any time from the payment method you used
          to subscribe, such as UPI autopay or your payment app's subscription section. Once cancelled, you keep access until the end of the current
          billing period, and no further charges will be made.
        </p>
        <p>
          Cancelling does not automatically refund the current period. Please see the refund
          conditions below.
        </p>
      </PolicySection>

      <PolicySection title="2. When you are eligible for a refund">
        <p>A refund may be issued for:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Technical issues that prevent you from using the paid features of Sanskaar, which we cannot resolve within a reasonable time.</li>
          <li>Duplicate charges for the same subscription period.</li>
          <li>Billing errors, such as being charged the wrong amount.</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. Non-refundable items">
        <p>Refunds are not provided for:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Partial billing periods, or unused time after cancellation.</li>
          <li>Services already consumed or used during the billing period.</li>
          <li>Promotional or discounted subscriptions, except where a technical issue applies.</li>
          <li>Charges you made by accident, or that were not cancelled before renewal.</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. How to request a refund">
        <p>
          Message us on WhatsApp at{" "}
          <a
            href={`https://wa.me/${SANSKAAR_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="text-gold-light hover:underline"
          >
            {SANSKAAR_PHONE_DISPLAY}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${SANSKAAR_SUPPORT_EMAIL}`} className="text-gold-light hover:underline">
            {SANSKAAR_SUPPORT_EMAIL}
          </a>
          . Please include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>The registered phone number or email on your Sanskaar account.</li>
          <li>The reason for the refund request.</li>
          <li>The transaction or order reference, if you have it.</li>
        </ul>
        <p>We review requests within 2 to 3 business days and confirm the outcome by email.</p>
      </PolicySection>

      <PolicySection title="5. Refund processing">
        <p>
          Approved refunds are returned to the original payment method within 5 to 7 business
          days. Banks and payment providers may take additional time to reflect the credit.
        </p>
      </PolicySection>

      <PolicySection title="6. Plan changes">
        <p>
          Upgrades or downgrades take effect from the next billing cycle. Pro-rated refunds are
          not available for plan changes.
        </p>
      </PolicySection>

      <PolicySection title="7. Account termination">
        <p>
          If your account is terminated for breaking our Terms & Conditions, no refund will be
          issued, and any outstanding amounts remain payable.
        </p>
      </PolicySection>

      <PolicySection title="8. Questions">
        <p>
          For any question about this policy, contact {COMPANY_NAME} on WhatsApp at{" "}
          {SANSKAAR_PHONE_DISPLAY} or email {SANSKAAR_SUPPORT_EMAIL}.
        </p>
      </PolicySection>
    </SanskaarLayout>
  );
}
