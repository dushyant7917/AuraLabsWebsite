import CompanyLayout, { PolicySection } from "../../components/company/CompanyLayout";
import { COMPANY_EMAIL, COMPANY_NAME } from "../../components/company/config";

export default function TermsAndConditions() {
  return (
    <CompanyLayout title="Terms & Conditions">
      <PolicySection title="1. About these terms">
        <p>
          These Terms & Conditions govern your use of the {COMPANY_NAME} website ("we", "us"),
          including all of its pages. By accessing or using the website, you agree to these
          terms. If you do not agree, please do not use it.
        </p>
      </PolicySection>

      <PolicySection title="2. Use of the website">
        <p>
          You may use the website for lawful purposes only. You agree not to misuse it, which
          includes attempting to gain unauthorised access, interfering with its operation,
          introducing harmful code, scraping it in a way that burdens our systems, or using it
          for any unlawful purpose.
        </p>
      </PolicySection>

      <PolicySection title="3. Payments">
        <p>
          Browsing the website is free. If a payment is ever requested through the website,
          the amount and billing period are shown before you pay, as described on our Pricing
          page. Cancellations and refunds are handled as described in our Refunds &
          Cancellations policy.
        </p>
      </PolicySection>

      <PolicySection title="4. Intellectual property">
        <p>
          The content, text, graphics, logos and design of this website belong to {COMPANY_NAME}
          or its licensors. You may view the website for personal use, but you may not copy,
          reproduce, resell or redistribute its content without our written permission.
        </p>
      </PolicySection>

      <PolicySection title="5. Third-party links">
        <p>
          The website may link to third-party websites. We do not control them and are not
          responsible for their content or practices.
        </p>
      </PolicySection>

      <PolicySection title="6. Availability and changes">
        <p>
          We work to keep the website available, but it may be interrupted for maintenance,
          updates or reasons beyond our control. We may change the website and these terms at
          any time. We will show the updated date at the top of this page. Continued use after
          changes means you accept them.
        </p>
      </PolicySection>

      <PolicySection title="7. Disclaimer and liability">
        <p>
          The website is provided "as is". To the extent permitted by law, we are not liable
          for indirect or consequential losses arising from your use of it. Where we have
          received payment from you, our total liability is limited to the amount you paid us
          in the three months before the claim.
        </p>
      </PolicySection>

      <PolicySection title="8. Governing law">
        <p>
          These terms are governed by the laws of India. Courts at the place where{" "}
          {COMPANY_NAME} is registered will have jurisdiction over disputes.
        </p>
      </PolicySection>

      <PolicySection title="9. Contact">
        <p>
          Questions about these terms? Email us at{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-gold-light hover:underline">
            {COMPANY_EMAIL}
          </a>
          .
        </p>
      </PolicySection>
    </CompanyLayout>
  );
}
