'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

const FILTERS = ['All', 'Web', 'Branding', 'Social', 'Video'];

const PROJECTS = [
  {
    id: 1,
    category: 'Web',
    title: 'The Dream Fitness',
    desc: 'A dynamic fitness website crafted for The Dream Fitness to promote training programs, healthy lifestyles, and member engagement online.',
    image: '/projects/thedreamfitness.jpg',
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#8B5CF6',
  },

    {
    id: 2,
    category: 'Web',
    title: 'Lotus Solar',
    desc: 'Website developed for Lotus Solar to showcase its solar energy solutions and enhance its online presence.',
    image: '/projects/lotussolar.jpg',
    link: 'https://lotussolar.in/',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    color: '#06B6D4',
  },

    {
    id: 3,
    category: 'Web',
    title: 'Rev Plus - Intellgent Automation',
    desc: 'A smart automation platform developed for Rev Plus to streamline sales pipelines, automate workflows, and improve business efficiency.',
    image: '/projects/reveplustech.jpg',
    link: 'https://revplus.tech/',
    tags: ['React', 'D3.js', 'API'],
    color: '#06B6D4',
  },

  {
    id: 4,
    category: 'web',
    title: 'Pulse IQ',
    desc: 'An AI-powered platform developed for Pulse IQ to detect fake news and misinformation impacting stock market decisions.',
    image: '/projects/pulseiq.jpg',
    link: 'https://novaai.sbs/',
    tags: ['Kafka', 'React', 'Node.js', 'Gen AI'],
    color: '#F97316',
  },

  // {
  //   id: 5,
  //   category: 'Social',
  //   title: 'SpiceRoute Campaign',
  //   desc: 'Viral social media campaign generating 2M+ impressions in 30 days.',
  //   image: '/projects/spiceroute.jpg',
  //   link: 'https://your-live-link.com/spiceroute',
  //   tags: ['Meta Ads', 'Content', 'Strategy'],
  //   color: '#EC4899',
  // },

  // {
  //   id: 6,
  //   category: 'Video',
  //   title: 'UrbanFit Promo Reel',
  //   desc: 'High-energy 60-second brand film with motion graphics and color grading.',
  //   image: '/projects/urbanfit.jpg',
  //   link: 'https://your-live-link.com/urbanfit',
  //   tags: ['After Effects', 'Color Grade', 'Motion'],
  //   color: '#10B981',
  // },

  // {
  //   id: 7,
  //   category: 'Web',
  //   title: 'FinTrack Dashboard',
  //   desc: 'Real-time financial analytics dashboard with interactive D3.js charts.',
  //   image: '/projects/fintrack.jpg',
  //   link: 'https://your-live-link.com/fintrack',
  //   tags: ['React', 'D3.js', 'API'],
  //   color: '#06B6D4',
  // },

  // {
  //   id: 8,
  //   category: 'Branding',
  //   title: 'Bloom Florist Rebrand',
  //   desc: 'Fresh modern rebrand that increased in-store footfall by 45%.',
  //   image: '/projects/bloom-florist.jpg',
  //   link: 'https://your-live-link.com/bloom-florist',
  //   tags: ['Logo', 'Packaging', 'Print'],
  //   color: '#F59E0B',
  // },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="section section--alt">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">✦ Our Work</div>
          <h2 className="section-title">
            Projects We're <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of work that showcases the depth and range of
            our capabilities.
          </p>
        </div>

        {/* FILTERS */}
        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filter} ${
                active === f ? styles.filterActive : ''
              }`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className={styles.grid}>
          {filtered.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkWrap}
            >
              <article className={`${styles.card} card`}>
                <div className={styles.imgWrap}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={600}
                    height={375}
                    className={styles.img}
                  />

                  <div className={styles.overlay}>
                    <span className={styles.view}>View Project →</span>
                  </div>
                </div>

                <div className={styles.body}>
                  <span
                    className={styles.category}
                    style={{ color: p.color }}
                  >
                    {p.category}
                  </span>

                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.desc}>{p.desc}</p>

                  <div className={styles.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className="services__tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}