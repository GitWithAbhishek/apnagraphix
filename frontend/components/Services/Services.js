/**
 * Services – Server Component
 * All 7 services rendered server-side for full SEO crawlability.
 * Google can read every service name, description, and tag.
 */

import styles from './Services.module.css';

const SERVICES = [
  { icon:'🎬', title:'Video Editing',          desc:'Cinematic edits, reels, ads, and brand films that stop the scroll and tell your story compellingly.', tags:['Reels','Ads','Corporate','YouTube'],            color:'#8B5CF6' },
  { icon:'📸', title:'Photo Editing',           desc:'Product retouching, background removal, color grading, and compositing at professional studio quality.', tags:['Retouching','E-Commerce','Color Grading'],     color:'#F97316' },
  { icon:'🎨', title:'Web Design',              desc:'Pixel-perfect UI/UX that converts visitors into customers — beautiful, intuitive, and on-brand.',         tags:['UI/UX','Figma','Wireframes','Prototyping'],    color:'#06B6D4' },
  { icon:'💻', title:'Web Development',         desc:'Full-stack websites built for speed, security, and scalability — from landing pages to complex apps.',    tags:['React','Next.js','Node.js','MERN'],            color:'#10B981' },
  { icon:'📱', title:'App Development',         desc:'Cross-platform mobile apps that users love — from MVP to enterprise-grade with seamless UX.',             tags:['React Native','Flutter','iOS','Android'],      color:'#F59E0B' },
  { icon:'📣', title:'Social Media Marketing',  desc:'Data-driven social strategies, content calendars, and community management to grow your audience.',       tags:['Instagram','Meta Ads','LinkedIn','X'],         color:'#EC4899' },
  { icon:'🚀', title:'Digital Marketing',       desc:'End-to-end digital campaigns — SEO, PPC, email funnels, and analytics that maximise your ROI.',          tags:['SEO','Google Ads','PPC','Analytics'],          color:'#8B5CF6' },
];

export default function Services() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">✦ What We Do</div>
          <h2 className="section-title">Services That <span className="gradient-text">Elevate</span> Your Brand</h2>
          <p className="section-subtitle">From stunning visuals to high-performance digital products — we've got every touchpoint of your brand covered.</p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className={`${styles.card} card`}
              style={{ '--service-color': s.color }}
            >
              <div className={styles.cardTop}>
                <div className={styles.icon}>{s.icon}</div>
                <div className={styles.arrow}>→</div>
              </div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map((t) => <span key={t} className="services__tag">{t}</span>)}
              </div>
              <div className={styles.bar} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
