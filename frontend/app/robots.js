/**
 * robots.js – Auto-generated robots.txt
 * Accessible at: https://apnagraphix.com/robots.txt
 */

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://apnagraphix.com/sitemap.xml',
    host: 'https://apnagraphix.com',
  };
}
