/**
 * Homepage (/) – Next.js App Router
 *
 * SEO Features:
 *  - Page-level metadata (overrides root layout)
 *  - JSON-LD structured data (Organization + LocalBusiness schema)
 *  - All sections rendered server-side for full crawlability
 */

import Navbar       from '@/components/Navbar/Navbar';
import Hero         from '@/components/Hero/Hero';
import About        from '@/components/About/About';
import Services     from '@/components/Services/Services';
import Portfolio    from '@/components/Portfolio/Portfolio';
import Team         from '@/components/Team/Team';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact      from '@/components/Contact/Contact';
import Footer       from '@/components/Footer/Footer';
import ToastProvider from '@/components/ToastProvider';

// ── Page-level SEO metadata ───────────────────────────────
export const metadata = {
  title: 'ApnaGraphix | Grow Your Brand Digitally – Lucknow Digital Agency',
  description:
    'ApnaGraphix is a full-service digital branding agency in Lucknow, India. We offer Web Design, Web Development, App Development, Video Editing, Photo Editing, Social Media & Digital Marketing.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ApnaGraphix | Grow Your Brand Digitally',
    description: 'Full-service digital branding agency based in Lucknow, India.',
    url: 'https://apnagraphix.com',
  },
};

// ── JSON-LD Structured Data (Organization + LocalBusiness) ─
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://apnagraphix.com/#organization',
      name: 'ApnaGraphix',
      url: 'https://apnagraphix.com',
      logo: 'https://apnagraphix.com/logo.png',
      description: 'India\'s premier digital branding agency based in Lucknow.',
      foundingDate: '2016',
      email: 'hello@apnagraphix.com',
      telephone: '+919876543210',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hazratganj',
        addressLocality: 'Lucknow',
        addressRegion: 'Uttar Pradesh',
        postalCode: '226001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.8467,
        longitude: 80.9462,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
      sameAs: [
        'https://www.instagram.com/apnagraphix',
        'https://www.linkedin.com/company/apnagraphix',
        'https://twitter.com/apnagraphix',
        'https://www.youtube.com/@apnagraphix',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Agency Services',
        itemListElement: [
          'Video Editing','Photo Editing','Web Design','Web Development',
          'App Development','Social Media Marketing','Digital Marketing',
        ].map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://apnagraphix.com/#website',
      url: 'https://apnagraphix.com',
      name: 'ApnaGraphix',
      publisher: { '@id': 'https://apnagraphix.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://apnagraphix.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD injected into <head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ToastProvider />
      <Navbar />

      <main>
        <section id="home">         <Hero />         </section>
        <section id="about">        <About />        </section>
        <section id="services">     <Services />     </section>
        <section id="portfolio">    <Portfolio />    </section>
        <section id="team">         <Team />         </section>
        <section id="testimonials"> <Testimonials /> </section>
        <section id="contact">      <Contact />      </section>
      </main>

      <Footer />
    </>
  );
}
