'use client';
import React, { useState } from 'react';
import styles from './Hero.module.css';
import ContactModal from './ContactModal';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.gradientLine} />

      <div className={styles.body}>
        <div className={styles.logoHeadWrap}>
          <img src="/logohead_trimmed.png" alt="NeonDevTech" className={styles.logoHead} />
        </div>
        <h1 className={styles.headline}>Neon<span className={styles.accent}>Dev</span>Tech</h1>
        <p className={styles.tagline}>Mobile App Development</p>
        <p className={styles.sub}>We build scalable mobile applications and provide embedded full-stack engineers.</p>
        <div className={styles.actions}>
          <a href="#services" className={styles.btnGhost}>Our Services ↓</a>
          <button className={styles.btnCTA} onClick={() => setModalOpen(true)}>
            <span className={styles.btnCTAGlow} />
            Get in Touch
          </button>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Hero;
