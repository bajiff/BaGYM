import {FacilitiesSection, FeaturesSection, Footer, HeroSection, Navbar, PricingSection, TestimonialSection} from "../components/Index"; // Sesuaikan path import Anda

const LandingPage = () => {
  return (
    <div className="bg-[#020103]"> {/* Wrapper background hitam */}
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FacilitiesSection />
      <PricingSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default LandingPage;