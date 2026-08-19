import AuraBackdrop from "./components/AuraBackdrop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Apps from "./components/Apps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
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
