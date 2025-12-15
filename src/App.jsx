import {FacilitiesSection, FeaturesSection, Footer, HeroSection, Navbar, PricingSection, TestimonialSection} from "./components/Index";

const App = () => {
  return (
    <main className="text-white antialiased font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FacilitiesSection />
      <PricingSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
};

export default App;