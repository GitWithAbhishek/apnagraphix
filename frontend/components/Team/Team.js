import Image from "next/image";
import styles from "./Team.module.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const TEAM = [
  {
    name: "Harshit Jha",
    role: "Founder & CEO",
    img: "/team/harshitj.jpeg",
    skills: ["Brand Strategy", "Business Development", "Leadership"],
    social: {
      linkedin: "https://www.linkedin.com/in/apnagraphixfounderharshit/",
      instagram: "https://www.instagram.com/officialharshitjha",
    },
  },

  {
    name: "Naman Pandey",
    role: "Technical Head & CTO",
    img: "/team/naman.jpeg",
    skills: [
      "System Architecture",
      "Cloud Infrastructure",
      "Technical Leadership",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/namanpandeylko/",
      instagram: "https://www.instagram.com/namanpandey_24",
    },
  },

  {
    name: "Nitin Yadav",
    role: "UI/UX & Full Stack Developer",
    img: "/team/nitin.jpeg",
    skills: ["UI/UX Design", "Responsive Web Design", "Frontend Development"],
    social: {
      linkedin: "",
      instagram: "",
    },
  },

  {
    name: "Abhishek Pandey",
    role: "Full Stack Developer & AI Automation Specialist",
    img: "/team/abhishek.jpeg",
    skills: ["React & Node.js", "AI Automation", "API Integration"],
    social: {
      linkedin: "",
      instagram: "",
    },
  },

  {
    name: "Harshit Verma",
    role: "Co-Founder & Digital Marketing Head",
    img: "/team/harshitv.jpeg",
    skills: ["SEO", "Performance Marketing", "Analytics & Reporting"],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/harshit_official786",
    },
  },

  {
    name: "Shivanshu Yadav",
    role: "Creative Head",
    img: "/team/shivanshu.jpeg",
    skills: ["Creative Direction", "Motion Graphics", "Video Production"],
    social: {
      linkedin: "",
      instagram: "",
    },
  },

  {
    name: "Saurabh Tiwari",
    role: "Social Media Manager & SEO Specialist",
    img: "/team/saurabh.jpeg",
    skills: [
      "Social Media Strategy",
      "Search Engine Optimization",
      "Content Marketing",
    ],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/saurabh.creative_?",
    },
  },

  {
    name: "Aman Srivastava",
    role: "Co-Founder & Video Production Specialist",
    img: "/team/aman.jpeg",
    skills: ["Video Editing", "Cinematography", "Content Production"],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/official.amansrivastava",
    },
  },
];

export default function Team() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">✦ The Team</div>
          <h2 className="section-title">
            Meet the <span className="gradient-text">Brilliant Minds</span>
          </h2>
          <p className="section-subtitle">
            Meet the people behind the ideas, strategy, creativity, and
            technology driving exceptional brand growth.
          </p>
        </div>

        <div className={styles.grid}>
          {TEAM.map((m) => (
            <article key={m.name} className={`${styles.card} card`}>
              <div className={styles.imgWrap}>
                <Image
                  src={m.img}
                  alt={`${m.name} – ${m.role} at ApnaGraphix`}
                  width={260}
                  height={240}
                  className={styles.img}
                />

                {/* SOCIAL ICONS */}
                <div className={styles.social}>
                  {m.social?.linkedin && (
                    <a
                      href={m.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialBtn}
                      aria-label={`${m.name} LinkedIn`}
                    >
                      <FaLinkedin />
                    </a>
                  )}

                  {m.social?.instagram && (
                    <a
                      href={m.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialBtn}
                      aria-label={`${m.name} Instagram`}
                    >
                      <FaInstagram />
                    </a>
                  )}
                </div>
              </div>

              <div className={styles.info}>
                <h3 className={styles.name}>{m.name}</h3>
                <p className={styles.role}>{m.role}</p>

                <div className={styles.skills}>
                  {m.skills.map((s) => (
                    <span key={s} className="services__tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}