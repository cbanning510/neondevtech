import React from 'react';
import styles from './LogoCarousel.module.css';

const logos = [
  { name: 'Yahoo',       domain: 'yahoo.com',      logo: '/logos/yahoo.svg' },
  { name: 'LVT',         domain: 'lvt.com',       logo: '/logos/lvt.svg' },
  { name: 'Aura',        domain: 'aura.com',       logo: '/logos/aura.png' },
  { name: 'Gemini',      domain: 'gemini.com',     logo: '/logos/gemini.svg' },
  { name: 'Brightcove',  domain: 'brightcove.com', logo: '/logos/brightcove.svg' },
  { name: 'Papa',        domain: 'papa.com',       logo: '/logos/papa.svg' },
  { name: 'Savant',      domain: 'savant.com',     logo: '/logos/savant.svg' },
  { name: 'Sharecare',   domain: 'sharecare.com',  logo: '/logos/sharecare.png', height: 56 },
  { name: 'Centene',     domain: 'centene.com',    logo: '/logos/centene.png' },
  { name: 'Anthem',      domain: 'anthem.com',     logo: '/logos/anthem.svg' },
  { name: 'Achieve',     domain: 'achieve.com',    logo: '/logos/achieve.svg' },
  { name: 'PwC',         domain: 'pwc.com',        logo: '/logos/pwc.svg' },
  { name: 'Bottomline',  domain: 'bottomline.com', logo: '/logos/bottomline.svg', height: 40, maxWidth: 200 },
];

const LogoCarousel = () => {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Trusted By</p>
      <div className={styles.track}>
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className={styles.logoItem}>
            {logo.logo
              ? <img src={logo.logo} alt={logo.name} className={styles.logoImg} style={(logo.height || logo.maxWidth) ? { ...(logo.height && { height: logo.height }), ...(logo.maxWidth && { maxWidth: logo.maxWidth }) } : undefined} />
              : <span className={styles.logoText}>{logo.name}</span>
            }
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCarousel;
