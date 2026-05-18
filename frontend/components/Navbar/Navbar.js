'use client';

/**
 * Navbar – Sticky navigation with mobile hamburger
 */

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {

    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  const handleLink = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>

      <div className={`${styles.inner} container`}>

        {/* Logo */}
        <a
          href="#home"
          className={styles.logo}
          onClick={() => handleLink('#home')}
        >
          <img
            src="/Logo.png"
            alt="ApnaGraphix Logo"
            className={styles.logoImage}
          />
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`${styles.link} ${activeLink === l.href ? styles.active : ''}`}
                onClick={() => handleLink(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`btn btn-primary ${styles.cta}`}
        >
          Get Started
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      {/* Mobile drawer */}
      <div className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}>

        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={styles.mobileLink}
            onClick={() => handleLink(l.href)}
          >
            {l.label}
          </a>
        ))}

        <a
          href="#contact"
          className="btn btn-primary"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </a>

      </div>

    </nav>
  );
}