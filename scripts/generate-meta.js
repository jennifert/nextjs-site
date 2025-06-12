
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://jenntesolin.com';
const PAGES_DIR = path.join(__dirname, '../pages');
const OUTPUT_DIR = path.join(__dirname, '../public');

const EXCLUDED_FILES = new Set(['_app.js', '_document.js', '404.js', '500.js', 'sitemap.js', 'template.js']);

function readMetaFromFile(filePath, routePrefix = '') {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const slug = path.basename(filePath, '.js');
  const route = slug === 'index' ? '/' : `/${routePrefix}${slug}`;
  const url = SITE_URL + route;

  const titleMatch = raw.match(/const\s+POST_TITLE\s*=\s*['"`](.*?)['"`]/);
  const descMatch = raw.match(/const\s+POST_DESCRIPTION\s*=\s*['"`](.*?)['"`]/);
  const dateMatch = filePath.match(/(\d{4}-\d{2}-\d{2})/);

  return {
    route,
    url,
    title: titleMatch ? titleMatch[1] : slug,
    description: descMatch ? descMatch[1] : '',
    date: dateMatch ? new Date(dateMatch[1]).toISOString() : new Date().toISOString(),
    tags: [] // Placeholder for future support
  };
}

function collectPages() {
  const entries = fs.readdirSync(PAGES_DIR, { withFileTypes: true });
  let pages = [];

  for (const entry of entries) {
    const entryPath = path.join(PAGES_DIR, entry.name);

    if (entry.isFile() && entry.name.endsWith('.js') && !EXCLUDED_FILES.has(entry.name)) {
      pages.push(readMetaFromFile(entryPath));
    }

    if (entry.isDirectory() && entry.name === 'blog') {
      const blogFiles = fs.readdirSync(entryPath).filter(f => f.endsWith('.js'));
      blogFiles.forEach(file => {
        pages.push(readMetaFromFile(path.join(entryPath, file), 'blog/'));
      });
    }
  }

  return pages;
}

function generateSitemap(entries) {
  const urls = entries.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.date}</lastmod>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;
}

function generateRSS(posts) {
  const items = posts.map(post => `
  <item>
    <title>${post.title}</title>
    <link>${post.url}</link>
    <guid>${post.url}</guid>
    <description>${post.description}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>`).join('');

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Jenn Tesolin Blog</title>
    <link>${SITE_URL}</link>
    <description>Articles and tutorials from Jenn Tesolin</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;
}

function writeMetaJson(entries) {
  const meta = entries.map(e => ({
    route: e.route,
    url: e.url,
    title: e.title,
    description: e.description,
    date: e.date,
    tags: e.tags || []
  }));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'meta.json'), JSON.stringify(meta, null, 2));
}

function main() {
  const entries = collectPages();
  const sitemap = generateSitemap(entries);
  const feed = generateRSS(entries.filter(e => e.route.startsWith('/blog')));

  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemap.trim());
  fs.writeFileSync(path.join(OUTPUT_DIR, 'feed.xml'), feed.trim());
  writeMetaJson(entries);

  console.log('✅ sitemap.xml, feed.xml, and meta.json generated.');
}

main();
