import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.gradientLine} />

      <div className={styles.body}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          Mobile App Development Studio
        </div>
        <h1 className={styles.headline}>
          Mobile Apps<br />
          Built for<br />
          <em className={styles.accent}>Business Impact</em>
        </h1>
      </div>

      <div className={styles.bottom}>
        <p className={styles.sub}>
          We partner with startups and enterprises to design, build, and scale
          mobile experiences that perform in the real world. From first screen
          to App Store — we deliver.
        </p>
        <div className={styles.actions}>
          <a href="#services" className={styles.btnGhost}>Our Services ↓</a>
          <button className={styles.btnPrimary}>Book a Call</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
