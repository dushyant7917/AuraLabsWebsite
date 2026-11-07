import { Route, Routes } from "react-router";
import AuraBackdrop from "./components/AuraBackdrop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Apps from "./components/Apps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TermsAndConditions from "./pages/sanskaar/TermsAndConditions";
import PrivacyPolicy from "./pages/sanskaar/PrivacyPolicy";
import RefundsAndCancellation from "./pages/sanskaar/RefundsAndCancellation";
import ShippingPolicy from "./pages/sanskaar/ShippingPolicy";
import CompanyTerms from "./pages/company/TermsAndConditions";
import CompanyPrivacy from "./pages/company/PrivacyPolicy";
import CompanyContact from "./pages/company/Contact";
import CompanyPricing from "./pages/company/Pricing";
import CompanyRefunds from "./pages/company/RefundsAndCancellations";
import CompanyShipping from "./pages/company/ShippingPolicy";
import SanskaarHome from "./pages/sanskaar/Home";
import SanskaarContact from "./pages/sanskaar/Contact";
import SanskaarSignup from "./pages/sanskaar/Signup";

function Home() {
  return (
    <div className="relative min-h-screen">
      <AuraBackdrop />
      <Navbar />
      <main>
        <Hero />
        <Apps />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms-and-conditions" element={<CompanyTerms />} />
      <Route path="/privacy-policy" element={<CompanyPrivacy />} />
      <Route path="/contact" element={<CompanyContact />} />
      <Route path="/pricing" element={<CompanyPricing />} />
      <Route path="/refunds-and-cancellations" element={<CompanyRefunds />} />
      <Route path="/shipping-policy" element={<CompanyShipping />} />
      <Route path="/sanskaar" element={<SanskaarHome />} />
      <Route path="/sanskaar/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/sanskaar/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/sanskaar/refunds-and-cancellation" element={<RefundsAndCancellation />} />
      <Route path="/sanskaar/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/sanskaar/contact" element={<SanskaarContact />} />
      <Route path="/sanskaar/signup" element={<SanskaarSignup />} />
    </Routes>
  );
}
