const fs = require('fs');
const path = require('path');

// Base site URL (keep in sync with src/lib/theme.ts)
const siteUrl = 'https://rotaractdistrict9104.org';

// Statically-known routes (derived from src/lib/theme.ts PAGE_METADATA)
const routes = [
  '/',
  '/about/rotary-international',
  '/about/rotaract',
  '/about/district-9104',
  '/about/drr',
  '/about/team',
  '/projects/signature',
  '/projects/club-projects',
  '/projects/professional-dev',
  '/projects/service-notices',
  '/media/blog',
  '/media/gallery',
  '/media/flyers',
  '/media/videos',
  '/events/dlac',
  '/events/calendar',
  '/contact/club-locator',
  '/contact',
  '/donate',
  '/join',
];

const now = new Date().toISOString();

function buildSitemap(urls) {
  const items = urls
    .map((route) => {
      const loc = `${siteUrl.replace(/\/$/, '')}${route}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.5</priority>\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;
}

function writeSitemap(content) {
  const distPath = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distPath)) {
    console.warn('Warning: `dist` folder not found. Are you sure you ran `npm run build`? Writing sitemap to `public/sitemap.xml` instead.');
    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), content, 'utf8');
    console.log('Wrote public/sitemap.xml');
    return;
  }

  const outPath = path.join(distPath, 'sitemap.xml');
  fs.writeFileSync(outPath, content, 'utf8');
  console.log('Wrote', outPath);
}

const sitemap = buildSitemap(routes);
writeSitemap(sitemap);
