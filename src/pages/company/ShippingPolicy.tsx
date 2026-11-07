import CompanyLayout, { PolicySection } from "../../components/company/CompanyLayout";
import { COMPANY_EMAIL, COMPANY_NAME } from "../../components/company/config";

export default function ShippingPolicy() {
  return (
    <CompanyLayout title="Shipping Policy">
      <PolicySection title="1. Digital services">
        <p>
          {COMPANY_NAME} builds and operates digital apps and online services. Everything we
          provide is delivered electronically. We do not ship physical goods, so no postal or
          courier delivery applies.
        </p>
      </PolicySection>

      <PolicySection title="2. Access after payment">
        <p>
          Paid features and services are made available in your account shortly after payment is
          confirmed. If your purchase does not show as active within a few minutes, try closing
          and reopening the app, then check that you are signed in with the same account you used
          to pay.
        </p>
      </PolicySection>

      <PolicySection title="3. Delivery issues">
        <p>
          If you have paid but cannot access what you purchased, email us with the name and email
          or phone number used for the payment, and the transaction reference if you have it. We
          will restore your access or, where needed, process a refund under our Refunds &
          Cancellations policy.
        </p>
      </PolicySection>

      <PolicySection title="4. Contact">
        <p>
          Email{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-gold-light hover:underline">
            {COMPANY_EMAIL}
          </a>{" "}
          for any question about access to {COMPANY_NAME} services.
        </p>
      </PolicySection>
    </CompanyLayout>
  );
}
