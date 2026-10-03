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
import SanskaarContact from "./pages/sanskaar/Contact";

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
      <Route path="/sanskaar/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/sanskaar/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/sanskaar/refunds-and-cancellation" element={<RefundsAndCancellation />} />
      <Route path="/sanskaar/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/sanskaar/contact" element={<SanskaarContact />} />
    </Routes>
  );
}
