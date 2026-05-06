import React from 'react';
import styles from './AppShowcase.module.css';

const apps = [
  '/app1.png', '/app2.png', '/app4.png', '/app5.png',
  '/app6.png', '/app7.png', '/app8.png', '/app9.png', '/app10.png',
  '/app11.png', '/app12.png', '/app13.png',
  '/app14.png', '/app15.png', '/app16.png', '/missio.png',
];

const AppShowcase = () => {
  return (
    <section className={styles.section}>
      <div className={styles.track}>
        {[...apps, ...apps].map((src, i) => (
          <div key={i} className={styles.phone}>
            <img src={src} alt={`App screenshot ${i + 1}`} className={styles.img} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppShowcase;
