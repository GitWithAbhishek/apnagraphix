'use client';

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    name: 'Satya Shukla',
    role: 'Owner, Trainer',
    rating: 5,
    text: 'ApnaGraphix delivered a clean, professional website for our brand that perfectly represents our services online. The design is modern, fast, and easy to navigate, and it has helped us establish a strong digital presence from day one. Truly a great experience working with the team.'
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <div className="section section--alt">
      <div className="container">

        <div className="section-header">
          <div className="section-badge">✦ Client Love</div>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Don&apos;t take our word for it, hear from the brands we&apos;ve helped grow.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className={styles.featured}>
          <div className={styles.quote}>❝</div>

          <div className={styles.stars}>
            {'★'.repeat(t.rating)}
          </div>

          <p className={styles.text}>{t.text}</p>

          <div className={styles.author}>
            <div>
              <strong className={styles.name}>{t.name}</strong>
              <span className={styles.role}>{t.role}</span>
            </div>
          </div>

          <div className={styles.dots}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mini cards */}
        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`${styles.mini} card ${i === active ? styles.miniActive : ''}`}
              onClick={() => setActive(i)}
            >
              <div className={styles.miniStars}>
                {'★'.repeat(t.rating)}
              </div>

              <p className={styles.miniText}>
                "{t.text.slice(0, 80)}…"
              </p>

              <div className={styles.miniAuthor}>
                <span>{t.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}