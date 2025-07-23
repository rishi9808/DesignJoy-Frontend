import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import LatestProjects from './components/LatestProjects'
import InfiniteMarquee from './components/InfiniteMarquee'
import FeatureBanner from './components/FeatureBanner'
import TestimonialBanner from './components/TestimonialBanner'
import HowWeWork from './components/HowWeWork'
import MembershipBenefits from './components/MembershipBenefits'
import ServicesSection from './components/ServicesSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LatestProjects />
      <InfiniteMarquee />
      <FeatureBanner />
      {/* <TestimonialBanner /> */}
      <HowWeWork />
      <MembershipBenefits />
      <ServicesSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      offset: 100,
      disable: false
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App