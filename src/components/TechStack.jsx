import React from 'react';
import styles from './TechStack.module.css';

const technologies = [
  { name: 'AWS',          logo: '/logos/aws.svg' },
  { name: 'Google Cloud', logo: '/logos/google-cloud.svg', size: 100 },
  { name: 'Azure',        logo: '/logos/azure.svg',        size: 100 },
  { name: 'Apple',        logo: '/logos/apple.svg' },
  { name: 'Android',      logo: '/logos/android.svg' },
  { name: 'React',        logo: '/logos/react.svg' },
  { name: 'React Native', logo: '/logos/react.svg' },
  { name: 'Node.js',      logo: '/logos/nodejs.svg' },
];

const TechStack = () => (
  <section className={styles.section}>
    <p className={styles.label}>Technologies We Work With</p>
    <div className={styles.grid}>
      {technologies.map((tech) => (
        <div key={tech.name} className={styles.item}>
          <div className={styles.iconWrap}>
            {tech.logo
              ? <img src={tech.logo} alt={tech.name} className={styles.icon} style={tech.size ? { height: tech.size, maxHeight: tech.size, maxWidth: tech.size } : undefined} />
              : <span className={styles.iconText}>{tech.name}</span>
            }
          </div>
          {tech.logo && <span className={styles.name}>{tech.name}</span>}
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
