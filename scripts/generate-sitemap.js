/**
 * Static Sitemap Generator Script
 *
 * This script generates a static sitemap.xml file in the public folder.
 * Run this script when you want to manually update the static sitemap.
 *
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.strategybyte.com';
const today = new Date().toISOString().split('T')[0];

// Define all static routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/book-a-session', priority: '0.9', changefreq: 'monthly' },
  { url: '/career', priority: '0.7', changefreq: 'weekly' },
  { url: '/terms-and-condition', priority: '0.3', changefreq: 'yearly' },

  // Services
  { url: '/our-services/website-development', priority: '0.9', changefreq: 'monthly' },
  { url: '/our-services/brand-management', priority: '0.9', changefreq: 'monthly' },
  { url: '/our-services/digital-marketing', priority: '0.9', changefreq: 'monthly' },
  { url: '/our-services/content-marketing', priority: '0.9', changefreq: 'monthly' },

  // Resources
  { url: '/resources/byte-articles', priority: '0.8', changefreq: 'daily' },
  { url: '/resources/case-studies', priority: '0.8', changefreq: 'weekly' },
];

// Generate XML
const generateSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n';

  routes.forEach((route) => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n\n';
  });

  xml += '</urlset>';

  return xml;
};

// Write to file
const writeSitemap = () => {
  try {
    const sitemap = generateSitemap();
    const publicDir = path.join(__dirname, '..', 'public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');

    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(sitemapPath, sitemap, 'utf8');

    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${sitemapPath}`);
    console.log(`🔗 URL: ${baseUrl}/sitemap.xml`);
    console.log(`📊 Total URLs: ${routes.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
writeSitemap();
