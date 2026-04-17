const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://jenntesolin.com';
const PAGES_DIR = path.join(__dirname, '../pages');
const NOTES_DIR = path.join(__dirname, '../content/notes');
const OUTPUT_DIR = path.join(__dirname, '../public');

const EXCLUDED_FILES = new Set([
  '_app.js',
  '_document.js',
  '404.js',
  '500.js',
  'template.js'
]);

const EXCLUDED_PAGE_DIRS = new Set([
  'notes',
  'api'
]);

function readMetaFromPageFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const slug = path.basename(filePath, '.js');
  const route = slug === 'index' ? '/' : `/${slug}`;
  const url = SITE_URL + route;

  const titleMatch = raw.match(/const\s+POST_TITLE\s*=\s*['"`](.*?)['"`]/);
  const descMatch = raw.match(/const\s+POST_DESCRIPTION\s*=\s*['"`](.*?)['"`]/);
  const dateMatch = raw.match(/const\s+POST_DATE\s*=\s*['"`](.*?)['"`]/);
  const tagsMatch = raw.match(/const\s+POST_TAGS\s*=\s*\[(.*?)\]/s);

  let tags = [];
  if (tagsMatch) {
    tags = tagsMatch[1]
      .split(',')
      .map(tag => tag.trim().replace(/^['"`]|['"`]$/g, ''))
      .filter(Boolean);
  }

  return {
    route,
    url,
    title: titleMatch ? titleMatch[1] : slug,
    description: descMatch ? descMatch[1] : '',
    date: dateMatch ? new Date(dateMatch[1]).toISOString() : new Date().toISOString(),
    tags
  };
}

function collectPages() {
  const entries = fs.readdirSync(PAGES_DIR, { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    const entryPath = path.join(PAGES_DIR, entry.name);

    if (entry.isFile() && entry.name.endsWith('.js') && !EXCLUDED_FILES.has(entry.name)) {
      pages.push(readMetaFromPageFile(entryPath));
    }

    if (entry.isDirectory() && !EXCLUDED_PAGE_DIRS.has(entry.name)) {
      // skip nested page directories for now unless you want to support them explicitly
      continue;
    }
  }

  return pages;
}

function collectNotes() {
  if (!fs.existsSync(NOTES_DIR)) return [];

  const files = fs.readdirSync(NOTES_DIR).filter(file => file.endsWith('.mdx'));

  return files.map(file => {
    const fullPath = path.join(NOTES_DIR, file);
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(raw);

    const slug = file.replace(/\.mdx$/, '');
    const route = `/notes/${slug}`;
    const url = SITE_URL + route;

    return {
      route,
      url,
      title: data.title || slug,
      description: data.description || '',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      tags: data.tags || [],
      draft: data.draft || false
    };
  }).filter(note => !note.draft);
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

function escapeXml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRSS(posts) {
  const items = posts.map(post => `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${post.url}</link>
    <guid>${post.url}</guid>
    <description>${escapeXml(post.description)}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>`).join('');

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Jenn Tesolin Notes</title>
    <link>${SITE_URL}</link>
    <description>Notes and write-ups from Jenn Tesolin</description>
    <language>en-ca</language>
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
  const pages = collectPages();
  const notes = collectNotes();
  const entries = [...pages, ...notes];

  const seen = new Set();
  const uniqueEntries = entries.filter(entry => {
    if (seen.has(entry.route)) return false;
    seen.add(entry.route);
    return true;
  });

  uniqueEntries.sort((a, b) => new Date(b.date) - new Date(a.date));

  const sitemap = generateSitemap(uniqueEntries);
  const feed = generateRSS(
    uniqueEntries.filter(entry => entry.route.startsWith('/notes/'))
  );

  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemap.trim());
  fs.writeFileSync(path.join(OUTPUT_DIR, 'feed.xml'), feed.trim());
  writeMetaJson(uniqueEntries);

  console.log('✅ sitemap.xml, feed.xml, and meta.json generated.');
}

main();