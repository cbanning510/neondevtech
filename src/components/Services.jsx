'use client';
import React, { useState } from 'react';
import styles from './Services.module.css';
import ContactModal from './ContactModal';

const services = [
  {
    number: '01',
    title: 'Mobile Application Architecture & Development',
    description:
      'High-performance cross-platform iOS and Android applications built with React Native and production-tested engineering practices.',
    bullets: [
      'Cross-platform with one codebase for iOS & Android (React Native)',
      'Offline-first functionality and native device access (camera, GPS, biometrics)',
      'Push notifications, in-app purchases, and real-time updates',
      'Instant over-the-air updates without App Store delays',
      'Enterprise-grade security, scalability, and performance monitoring',
      'Full App Store & Google Play deployment and launch support',
    ],
  },
  {
    number: '02',
    title: 'Web Application Development',
    description:
      'Modern React and TypeScript applications designed for scalability, performance, and rapid iteration — whether you\'re starting from scratch or rebuilding an existing system.',
    bullets: [
      'SEO-optimized React/Next.js apps that rank and convert',
      'Lightning-fast, fully responsive experiences across all devices',
      'Seamless integrations with CRMs, payments, analytics, and existing systems',
      'Enterprise-grade security, authentication, and data protection',
      'Scalable architecture designed for growth without costly rewrites',
      'Real-time capabilities (live updates, chat, dashboards) when needed',
    ],
  },
  {
    number: '03',
    title: 'Embedded Engineering & Staff Augmentation',
    description:
      'Experienced full-stack JavaScript engineers who integrate as an extension of your team, bringing architectural expertise and immediate velocity.',
    bullets: [
      'React, React Native, Node.js & TypeScript engineers ready in 1–2 weeks',
      'Seamless integration with your tools, workflows, and code standards',
      'Architectural guidance and hands-on delivery from day one',
      'Scale up or down instantly — no recruitment cycles or long-term contracts',
      'Knowledge transfer that raises your entire team\'s capabilities',
      'Scale engineering capacity without sacrificing quality or velocity',
    ],
  },
];

const benefits = [
  { label: 'Architecture-First', body: 'We design systems that handle growth without breaking—proven in production apps trusted by enterprise clients.' },
  { label: 'Full-Stack JavaScript', body: 'One unified team across React, React Native, and Node.js means faster development and easier long-term maintenance.' },
  { label: 'Speed & Flexibility', body: 'Augment instantly or get a complete custom platform—whatever your timeline and budget demands.' },
  { label: 'Cost-Effective Excellence', body: 'Access experienced engineering expertise without the overhead of building and maintaining an internal platform team.' },
  { label: 'Seamless Collaboration', body: 'Your vision, our execution. We work as a direct extension of your team inside your tools and processes.' },
  { label: 'Proven at Scale', body: 'Trusted by companies across healthcare, fintech, consumer tech, and enterprise—see our client roster and shipped apps.' },
];

const steps = [
  { n: '1', title: 'Discovery & Architecture', body: 'We map your goals, constraints, and technical landscape—then design a scalable foundation before a single line of code is written.' },
  { n: '2', title: 'Team Alignment', body: 'Vetted principal engineers or a dedicated build team align with your stack, tools, and culture within days.' },
  { n: '3', title: 'Agile Development', body: 'Iterative builds with React, React Native, and Node.js for rapid progress, continuous feedback, and zero surprises.' },
  { n: '4', title: 'Testing & Optimization', body: 'Performance, security, and scalability verification before every release. No technical debt shipped on purpose.' },
  { n: '5', title: 'Launch & Ongoing Support', body: 'Deploy with confidence, monitor in production, and iterate as your platform and user base grow.' },
];

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.overline}>Our Services</p>
          <h2 className={styles.headline}>
            Architecture-First Engineering<br />
            <span className={styles.accent}>for Scalable Digital Products</span>
          </h2>
          <p className={styles.sub}>
            We don't just staff projects—we architect and deliver production-grade mobile &amp; web platforms
            using modern React, React Native, and TypeScript technologies. From custom builds to embedded engineering,
            we partner with teams that need more than code.
          </p>
        </div>

        {/* Who We Work With */}
        <p className={styles.whoWeWork}>
          We partner with <strong>startups</strong>, <strong>enterprise teams</strong>, and <strong>growing technology companies</strong> looking to build and scale digital products.
        </p>

        {/* Service Cards */}
        <div className={styles.cardGrid}>
          {services.map((s) => (
            <div key={s.number} className={styles.card}>
              <span className={styles.cardNumber}>{s.number}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
              <ul className={styles.cardList}>
                {s.bullets.map((b) => (
                  <li key={b} className={styles.cardItem}>
                    <span className={styles.bullet} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className={styles.benefitsBlock}>
          <p className={styles.overline}>Why Partner With Us</p>
          <div className={styles.benefitsGrid}>
            {benefits.map((b) => (
              <div key={b.label} className={styles.benefit}>
                <span className={styles.benefitDash} />
                <div>
                  <p className={styles.benefitLabel}>{b.label}</p>
                  <p className={styles.benefitBody}>{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className={styles.processBlock} id="process">
          <p className={styles.overline}>Our Process</p>
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={s.n} className={styles.step}>
                <div className={styles.stepLeft}>
                  <span className={styles.stepNum}>{s.n}</span>
                  {i < steps.length - 1 && <span className={styles.stepLine} />}
                </div>
                <div className={styles.stepRight}>
                  <p className={styles.stepTitle}>{s.title}</p>
                  <p className={styles.stepBody}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h3 className={styles.ctaHeadline}>Ready to architect your next platform?</h3>
          <p className={styles.ctaSub}>
            Let's talk about your goals, your stack, and how we can help you ship faster.
          </p>
          <button className={styles.ctaBtn} onClick={() => setModalOpen(true)}>
            <span className={styles.ctaBtnGlow} />
            Get a Free Consultation
          </button>
        </div>

      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Services;
