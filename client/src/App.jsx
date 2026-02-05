import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {FacilitiesSection, FeaturesSection, Footer, HeroSection, Navbar, PricingSection, TestimonialSection} from "./components/Index";

import {DashboardPage, LandingPage, LoginPage} from "./pages/Index.js";



const App = () => {
  return (
    <Router>
      <main className="antialiased font-sans text-white">
        <Routes>
          {/* Rute 1: Landing Page (Halaman Utama) */}
          <Route path="/" element={<LandingPage />} />

          {/* Rute 2: Login Page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Rute 3: Dashboard (Halaman Admin) */}
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </Router>
    // <main className="text-white antialiased font-sans">
    //   <Navbar />
    //   <HeroSection />
    //   <FeaturesSection />
    //   <FacilitiesSection />
    //   <PricingSection />
    //   <TestimonialSection />
    //   <Footer />
    // </main>
  );
};

export default App;
