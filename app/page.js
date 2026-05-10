import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import AppShowcase from '../src/components/AppShowcase';
import LogoCarousel from '../src/components/LogoCarousel';
import Services from '../src/components/Services';
import TechStack from '../src/components/TechStack';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppShowcase />
      <LogoCarousel />
      <Services />
      <TechStack />
    </>
  );
}
