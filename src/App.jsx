import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppShowcase from './components/AppShowcase';
import LogoCarousel from './components/LogoCarousel';
// Remaining sections coming soon:
// import Services from './components/Services';
// import WhyUs from './components/WhyUs';
// import Process from './components/Process';
// import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppShowcase />
      <LogoCarousel />
      {/* Additional sections will go here */}
    </>
  );
}

export default App;
