/**
 * Footer – Server Component
 * All links and content are server-rendered for maximum SEO value.
 */

import styles from "./Footer.module.css";

import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaFacebook
} from "react-icons/fa";

const LINKS = {
  Company: ["About Us", "Our Team", "Careers", "Blog", "Press Kit"],
  Services: [
    "Video Editing",
    "Web Design",
    "Web Development",
    "App Development",
    "Digital Marketing",
  ],
  Support: [
    "FAQ",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
    "Sitemap",
  ],
};

const SOCIALS = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/apnagraphix",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/company/apnagraphix",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://x.com/ApnaGraphix",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@ApnaGraphix",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/share/18ZaMuRRX2/",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA Strip */}
      <div className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h3 className={styles.ctaTitle}>Ready to grow your brand?</h3>
            <p className={styles.ctaSub}>
              Let's create something extraordinary together.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <a href="#contact" className="btn btn-accent">
              Start a Project
            </a>
            <a
              href="tel:+919876543210"
              className={`btn btn-outline ${styles.callBtn}`}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className={`container ${styles.grid}`}>
          
          {/* Brand */}
          <div className={styles.brand}>
            <p className={styles.brandDesc}>
              India's creative agency for bold brands, digital experiences, and
              meaningful growth. Based in Lucknow, working globally.
            </p>

            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className={styles.col}>
              <h4 className={styles.colTitle}>{group}</h4>
              <ul className={styles.colLinks}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className={styles.link}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className={`container ${styles.bottom}`}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} ApnaGraphix. All rights reserved. Made
            with ❤️ in Lucknow.
          </p>

          <p className={styles.love}>
            Designed & Developed by <span>ApnaGraphix</span>
          </p>
        </div>
      </div>
    </footer>
  );
}