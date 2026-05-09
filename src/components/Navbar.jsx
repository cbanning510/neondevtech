import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
          <button className={styles.contactBtn} onClick={() => setModalOpen(true)}>Contact</button>
        </div>

      </nav>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;
