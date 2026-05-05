import React from "react";
import styles from "./Hero.module.css";

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
          Mobile Apps
          <br />
          That actually work
          <br />
          <em className={styles.accent}>For your business</em>
        </h1>
      </div>
      <h2 className={styles.bridge}> Built to be used, not just launched.</h2>
      <div className={styles.bottom}>
        <p className={styles.sub}>
          We design and build mobile-first products that are reliable, easy to
          use, and built around how your business actually runs.
        </p>
        <div className={styles.actions}>
          <a href='#services' className={styles.btnGhost}>
            Our Services ↓
          </a>
          <button className={styles.btnPrimary}>Book a Call</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
