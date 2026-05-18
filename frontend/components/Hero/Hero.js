'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '20+', label: 'Happy Clients' },
  { value: '2+',   label: 'Years Experience' },
  { value: '12+',  label: 'Team Members' },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      el.style.setProperty('--px', `${x}px`);
      el.style.setProperty('--py', `${y}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.grid} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            India's Premier Digital Branding Agency
          </div>

          {/* h1 is critical for SEO – contains primary keyword */}
          <h1 className={styles.title}>
            Grow Your Brand<br />
            <span className="gradient-text">Digitally</span> &amp; Beyond
          </h1>

          <p className={styles.subtitle}>
            We craft bold identities, stunning visuals, and high-performance digital
            experiences that turn heads and drive results for ambitious brands.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={`btn btn-primary ${styles.btnPrimary}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Get Started Free
            </a>
            <a href="#portfolio" className="btn btn-outline">View Our Work</a>
          </div>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating card stack */}
        <div className={styles.visual}>
          <div className={`${styles.card} ${styles.cardBack}`}>
            <div className={styles.cardInner}>
              <div className={styles.cardIcon}>🎨</div>
              <p>Brand Identity</p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardMain}`}>
            <div className={styles.cardTop}>
              <span className={styles.cardTag}>Active Campaign</span>
              <span className={styles.cardDot} />
            </div>
            <Image
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80"
              alt="Brand campaign visual by ApnaGraphix"
              width={300} height={160}
              className={styles.cardImg}
              priority
            />
            <div className={styles.cardInfo}>
              <strong>Brand Refresh 2024</strong>
              <p>+340% engagement boost</p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardSide}`}>
            <div className={`${styles.cardInner} ${styles.cardInnerDark}`}>
              <div className={styles.cardIcon}>📈</div>
              <span>ROI Growth</span>
              <strong style={{color:'var(--accent)',fontSize:'24px'}}>3.4×</strong>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollMouse}><div className={styles.scrollWheel} /></div>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
}
