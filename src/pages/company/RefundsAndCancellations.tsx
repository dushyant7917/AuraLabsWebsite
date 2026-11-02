import CompanyLayout, { PolicySection } from "../../components/company/CompanyLayout";
import { COMPANY_EMAIL, COMPANY_NAME } from "../../components/company/config";

export default function RefundsAndCancellations() {
  return (
    <CompanyLayout title="Refunds & Cancellations">
      <PolicySection title="1. Scope">
        <p>
          This policy applies to any payment made to {COMPANY_NAME} through this website. The
          website itself is free to use.
        </p>
      </PolicySection>

      <PolicySection title="2. Cancellations">
        <p>
          You can cancel an order or recurring payment at any time by emailing us at{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-gold-light hover:underline">
            {COMPANY_EMAIL}
          </a>
          , or through the payment method you used, such as UPI autopay. Once a recurring
          payment is cancelled, no further charges will be made. Cancelling does not
          automatically refund a period that has already been paid for.
        </p>
      </PolicySection>

      <PolicySection title="3. When you are eligible for a refund">
        <p>A refund may be issued for:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Duplicate charges for the same order.</li>
          <li>Billing errors, such as being charged the wrong amount.</li>
          <li>Payments for something we were unable to deliver.</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Non-refundable items">
        <p>Refunds are not provided for:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Services already delivered or used.</li>
          <li>Charges you made by accident, or that were not cancelled before renewal.</li>
          <li>Promotional or discounted purchases, except where we failed to deliver.</li>
        </ul>
      </PolicySection>

      <PolicySection title="5. How to request a refund">
        <p>
          Email{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-gold-light hover:underline">
            {COMPANY_EMAIL}
          </a>
          {" "}and include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>The name and email or phone number used for the payment.</li>
          <li>The reason for the refund request.</li>
          <li>The transaction or order reference, if you have it.</li>
        </ul>
        <p>We review requests within 2 to 3 business days and confirm the outcome by email.</p>
      </PolicySection>

      <PolicySection title="6. Refund processing">
        <p>
          Approved refunds are returned to the original payment method within 5 to 7 business
          days. Banks and payment providers may take additional time to reflect the credit.
        </p>
      </PolicySection>

      <PolicySection title="7. Questions">
        <p>For any question about this policy, email {COMPANY_NAME} at {COMPANY_EMAIL}.</p>
      </PolicySection>
    </CompanyLayout>
  );
}
