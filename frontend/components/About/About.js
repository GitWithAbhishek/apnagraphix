/**
 * About – Server Component (no interactivity = better SEO + performance)
 */

import styles from './About.module.css';

const VALUES = [
  { icon: '🎯', title: 'Strategic Vision',  desc: 'We start with your goals and build backwards — every pixel, every line of code serves a purpose.' },
  { icon: '⚡', title: 'Lightning Speed',   desc: 'Tight deadlines? We thrive under pressure while never compromising on quality.' },
  { icon: '🤝', title: 'True Partnership',  desc: 'We embed ourselves in your mission. Your wins are our wins, your challenges ours to solve.' },
  { icon: '🌟', title: 'Premium Quality',   desc: 'From concepts to delivery, every asset meets the highest standards of craft and creativity.' },
];

export default function About() {
  return (
    <div className={`${styles.about} section section--alt`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.story}>
            <div className="section-badge">✦ Our Story</div>
            <h2 className={`section-title ${styles.title}`}>
              We're the Creatives<br />Behind <span className="gradient-text">Bold Brands</span>
            </h2>
            <p className={styles.text}>
              Founded in 2016, ApnaGraphix was born from a simple belief: every business deserves
              world-class branding and digital presence — regardless of size. We've grown from a
              2-person studio to a 15+ member powerhouse spanning design, development, and digital strategy.
            </p>
            <p className={styles.text}>
              From Lucknow to the world, we've partnered with startups, SMEs, and enterprise brands
              across 20+ industries, helping them stand out in crowded digital landscapes.
            </p>
            <div className={styles.miniStats}>
              {[['50+','Projects'],['20+','Industries'],['98%','Satisfaction']].map(([v,l]) => (
                <div key={l} className={styles.miniStat}>
                  <span>{v}</span><p>{l}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary">Work With Us →</a>
          </div>

          <div className={styles.values}>
            {VALUES.map((v) => (
              <article key={v.title} className={`${styles.valueCard} card`}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
