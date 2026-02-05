import {FacilitiesSection, FeaturesSection, Footer, HeroSection, Navbar, PricingSection, TestimonialSection} from "./components/Index";

import {DashboardPage, LandingPage, LoginPage} from "./pages/Index.js";

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
