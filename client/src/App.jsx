import {FacilitiesSection, FeaturesSection, Footer, HeroSection, Navbar, PricingSection, TestimonialSection, MemberList} from "./components/Index";

const App = () => {
  return (
    <main className="text-white antialiased font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FacilitiesSection />
      <PricingSection />
      <TestimonialSection />
      {/* <section className="bg-white py-10 mt-10">
          <div className="text-center mb-5">
              <h1 className="text-4xl text-black font-bold">ADMIN AREA (TESTING)</h1>
          </div>
          <MemberList />
      </section> */}
      <Footer />
    </main>
  );
};

export default App;