import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.logoMain}>
          Neon<span className={styles.logoAccent}>Dev</span>Tech
        </span>
      </div>

      <div className={styles.navLinks}>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  );
};

export default Navbar;
