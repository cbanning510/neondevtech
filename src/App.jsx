import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
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
      <LogoStrip />
      {/* Additional sections will go here */}
    </>
  );
}

export default App;
