/**
 * Root Layout – Next.js App Router
 * All SEO metadata is centrally managed here via the Metadata API.
 * Each page can override/extend this with its own `export const metadata`.
 */

import { Poppins, Roboto } from 'next/font/google';
import './globals.css';

// ── Google Fonts via next/font (self-hosted, no CLS, optimal perf) ────────────
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

// ── Site-wide SEO Metadata (Next.js Metadata API) ─────────────────────────────
export const metadata = {
  // Core
  title: {
    default: 'ApnaGraphix | Grow Your Brand Digitally',
    template: '%s | ApnaGraphix',          // page titles: "Services | ApnaGraphix"
  },
  description:
    'ApnaGraphix is India\'s leading digital branding agency based in Lucknow. Expert services in Web Design, Web Development, App Development, Video Editing, Social Media & Digital Marketing.',
  keywords: [
    'digital branding agency India',
    'web design Lucknow',
    'web development agency',
    'social media marketing India',
    'digital marketing Lucknow',
    'app development agency',
    'video editing services',
    'SEO agency India',
    'ApnaGraphix',
    'brand identity design',
  ],
  authors: [{ name: 'ApnaGraphix', url: 'https://apnagraphix.com' }],
  creator: 'ApnaGraphix',
  publisher: 'ApnaGraphix',

  // Canonical URL (update to production domain)
  metadataBase: new URL('https://apnagraphix.com'),
  alternates: { canonical: '/' },

  // Open Graph (WhatsApp, Facebook, LinkedIn previews)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://apnagraphix.com',
    siteName: 'ApnaGraphix',
    title: 'ApnaGraphix | Grow Your Brand Digitally',
    description:
      'India\'s premier digital branding agency — Web Design, Development, Video Editing, Social Media & Digital Marketing.',
    images: [
      {
        url: '/og-image.png',          // Place a 1200×630 image in /public/og-image.png
        width: 1200,
        height: 630,
        alt: 'ApnaGraphix – Grow Your Brand Digitally',
      },
    ],
  },

  // Twitter / X Cards
  twitter: {
    card: 'summary_large_image',
    title: 'ApnaGraphix | Grow Your Brand Digitally',
    description: 'India\'s premier digital branding agency based in Lucknow.',
    creator: '@ApnaGraphix',
    images: ['/og-image.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // Verification (add when you have accounts)
  // verification: { google: 'YOUR_GOOGLE_VERIFICATION_CODE' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
