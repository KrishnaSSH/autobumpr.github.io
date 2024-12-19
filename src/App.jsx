import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './styles/gradients.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1f]">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;