'use client';

/**
 * Contact – Client Component
 * Form state, validation, and API submission require 'use client'
 */

import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './Contact.module.css';

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

const SERVICES = [
  'Video Editing',
  'Photo Editing',
  'Web Design',
  'Web Development',
  'App Development',
  'Social Media Marketing',
  'Digital Marketing',
  'Other'
];

const INIT = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};

/* ✅ Icons as components (correct way) */
const INFO = [
  {
    icon: FaMapMarkerAlt,
    label: 'Address',
    value: 'Gomti Nagar, Nijampur Malhaur, Lucknow, Uttar Pradesh 226028'
  },
  {
    icon: FaPhoneAlt,
    label: 'Phone',
    value: '+91 6387344096'
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'apnagraphix@gmail.com'
  },
  {
    icon: FaClock,
    label: 'Hours',
    value: 'Mon–Sat, 9 AM – 7 PM'
  }
];

const SOCIAL = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/apnagraphix'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/company/apnagraphix'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://x.com/ApnaGraphix'
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    link: 'https://www.youtube.com/@ApnaGraphix'
  }
];

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.length < 2)
      e.name = 'Name must be at least 2 characters';

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = 'Enter a valid email address';

    if (!form.message.trim() || form.message.length < 10)
      e.message = 'Message must be at least 10 characters';

    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setLoading(true);

    try {
        const res = await axios.post(
  `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
  form
);

      if (res.data.success) {
        toast.success("🎉 Message sent! We'll get back to you shortly.");
        setForm(INIT);
        setErrors({});
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section section--alt">
      <div className="container">

        <div className={styles.grid}>

          {/* Info Panel */}
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Contact Information</h3>

            <div className={styles.details}>
              {INFO.map((i) => (
                <div key={i.label} className={styles.detail}>
                  <span className={styles.detailIcon}>
                    <i.icon />
                  </span>

                  <div>
                    <strong>{i.label}</strong>
                    <p>{i.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className={styles.social}>
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={s.name}
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Form (UNCHANGED) */}
          <form
            className={`${styles.form} card`}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.row}>
              <div className={`${styles.field} ${errors.name ? styles.fieldError : ''}`}>
                <label>Full Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              <div className={`${styles.field} ${errors.email ? styles.fieldError : ''}`}>
                <label>Email *</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label>Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={`${styles.field} ${errors.message ? styles.fieldError : ''}`}>
              <label>Message *</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${styles.submit}`}
              disabled={loading}
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}