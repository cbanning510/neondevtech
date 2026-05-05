import React from 'react';
import styles from './LogoStrip.module.css';

/* 
  DROP YOUR LOGO FILES INTO: src/assets/logos/
  Then import them here like:
  import geminiLogo from '../assets/logos/gemini.svg';
  
  Format: { name, src } — src can be imported file or URL
  Leave src as null for wordmark fallback
*/

const CLIENT_LOGOS = [
  { name: 'Gemini',      src: null },
  { name: 'Yahoo',       src: null },
  { name: 'Anthem',      src: null },
  { name: 'Centene',     src: null },
  { name: 'NAF',         src: null },
  { name: 'Achieve',     src: null },
  { name: 'Aura',        src: null },
  { name: 'Papa',        src: null },
  { name: 'Brightcove',  src: null },
  { name: 'LVT',         src: null },
  { name: 'Savant',      src: null },
  { name: 'Sharecare',   src: null },
];

const PLATFORM_LOGOS = [
  { name: 'Microsoft',   src: null },
  { name: 'Google',      src: null },
  { name: 'Amazon',      src: null },
  { name: 'Meta',        src: null },
  { name: 'Apple',       src: null },
  { name: 'Android',     src: null },
];

const LogoItem = ({ name, src }) => (
  <div className={styles.logoItem}>
    {src ? (
      <img src={src} alt={name} />
    ) : (
      <span className={styles.wordmark}>{name}</span>
    )}
  </div>
);

const LogoStrip = () => {
  return (
    <section className={styles.strip} id="clients">
      <div className={styles.row}>
        <span className={styles.label}>Trusted by</span>
        <div className={styles.grid}>
          {CLIENT_LOGOS.map((logo) => (
            <LogoItem key={logo.name} {...logo} />
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.row}>
        <span className={styles.label}>Built on</span>
        <div className={styles.grid}>
          {PLATFORM_LOGOS.map((logo) => (
            <LogoItem key={logo.name} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
