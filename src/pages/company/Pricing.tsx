import { Link } from "react-router";
import CompanyLayout, { PolicySection } from "../../components/company/CompanyLayout";
import { COMPANY_EMAIL, COMPANY_NAME } from "../../components/company/config";

export default function Pricing() {
  return (
    <CompanyLayout title="Pricing">
      <PolicySection title="1. Website access">
        <p>
          Browsing the {COMPANY_NAME} website is free. We do not charge for visiting its pages
          or contacting us.
        </p>
      </PolicySection>

      <PolicySection title="2. Paid services">
        <p>
          If a payment is requested through the website, the exact price, currency and billing
          period are shown before you pay. All prices are in Indian Rupees (INR) unless stated
          otherwise, and are inclusive of applicable taxes unless stated otherwise at checkout.
        </p>
      </PolicySection>

      <PolicySection title="3. Cancellations and refunds">
        <p>
          See our{" "}
          <Link to="/refunds-and-cancellations" className="text-gold-light hover:underline">
            Refunds & Cancellations
          </Link>{" "}
          policy for how to cancel and when refunds apply.
        </p>
      </PolicySection>

      <PolicySection title="4. Questions">
        <p>
          Questions about pricing? Email{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-gold-light hover:underline">
            {COMPANY_EMAIL}
          </a>
          .
        </p>
      </PolicySection>
    </CompanyLayout>
  );
}
