import React from 'react';
import styles from './LogoCarousel.module.css';

const logos = [
  { name: 'Yahoo',       domain: 'yahoo.com',      logo: '/logos/yahoo.svg' },
  { name: 'LVT',         domain: 'lvt.com',       logo: '/logos/lvt.svg' },
  { name: 'Aura',        domain: 'aura.com',       logo: '/Aura-Logo.webp', height: 52, maxWidth: 200, brighter: true },
  { name: 'Gemini',      domain: 'gemini.com',     logo: '/logos/gemini.svg' },
  { name: 'Brightcove',  domain: 'brightcove.com', logo: '/Brightcove_logo.svg.png' },
  { name: 'Papa',        domain: 'papa.com',       logo: '/logos/papa.svg' },
  { name: 'Savant',      domain: 'savant.com',     logo: '/logos/savant.svg' },
  { name: 'Sharecare',   domain: 'sharecare.com',  logo: '/logos/sharecare.png', height: 72, bright: true },
  { name: 'Centene',     domain: 'centene.com',    logo: '/logos/centene.png' },
  { name: 'Anthem',      domain: 'anthem.com',     logo: '/logos/anthem.svg' },
  { name: 'Achieve',     domain: 'achieve.com',    logo: '/logos/achieve.svg' },
  { name: 'PwC',         domain: 'pwc.com',        logo: '/logos/pwc.svg', height: 50, imgStyle: { marginTop: '-10px' } },
  { name: 'Bottomline',    domain: 'bottomline.com',    logo: '/logos/bottomline.svg', height: 40, maxWidth: 200 },
  { name: 'CoreStrengths', domain: 'corestrengths.com', logo: '/corestrengthslogo.png', height: 44, maxWidth: 280, bright: true },
  { name: 'Viking',        domain: 'viking.com',        logo: '/vikinglogo.png', height: 60, maxWidth: 200, max: true },
];

const LogoCarousel = () => {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Trusted By</p>
      <div className={styles.track}>
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className={logo.max ? styles.logoItemMax : logo.brighter ? styles.logoItemBrighter : logo.bright ? styles.logoItemBright : styles.logoItem}>
            {logo.logo
              ? <img src={logo.logo} alt={logo.name} className={styles.logoImg} style={{ ...(logo.height && { height: logo.height }), ...(logo.maxWidth && { maxWidth: logo.maxWidth }), ...(logo.imgStyle || {}) }} />
              : <span className={styles.logoText}>{logo.name}</span>
            }
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCarousel;
