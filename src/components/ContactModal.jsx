import React, { useEffect, useRef } from 'react';
import styles from './ContactModal.module.css';

const ContactModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
        <h2 className={styles.title}>Get in <span className={styles.accent}>Touch</span></h2>
        <p className={styles.sub}>Tell us about your project and we'll get back to you within 24 hours.</p>

        <form
          action="https://formsubmit.co/neondevtech@gmail.com"
          method="POST"
          className={styles.form}
        >
          <input type="hidden" name="_subject" value="New Inquiry from NeonDevTech Website" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input type="text" name="name" required placeholder="Your name" className={styles.input} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input type="email" name="email" required placeholder="your@email.com" className={styles.input} />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Company <span className={styles.optional}>(optional)</span></label>
            <input type="text" name="company" placeholder="Your company" className={styles.input} />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>What are you building?</label>
            <textarea name="message" required rows={4} placeholder="Briefly describe your project or what you need help with..." className={styles.textarea} />
          </div>

          <button type="submit" className={styles.submit}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
