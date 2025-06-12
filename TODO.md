# ✅ TODO List for jenntesolin.com Project

## 🔧 Deployment / Hosting
- [ ] Add `.do/app.yaml` for **DigitalOcean App Platform** deployment
  - Set `build_command: npm run export`
  - Set `publish_directory: out`

## 🧠 SEO / Metadata Cleanup
- [ ] Standardize `<meta name="description" content={SITE_DESCRIPTION} />` on all pages
- [ ] Ensure each page has a unique `<title>...</title>` tag
- [ ] Refactor layout/meta component to handle shared tags cleanly

## 🖼️ Image Handling
- [ ] Review all `src="/images/...` or local `public/images/...` references
- [ ] Migrate local images to external CDN or `public/` directory if needed
- [ ] Ensure all `<Image />` components are correctly using `loader` or `domain` settings

## 🎨 Styles
- [ ] Review and organize Tailwind CSS classes and layout styles
- [ ] Extract large blocks of repeated utility classes into custom components or `@apply` in CSS
- [ ] Clean up layout spacing and responsiveness (especially on blog/portfolio grids)

## 📝 Content Maintenance & Metadata
- [ ] Search all blog posts for the word "outdated" or similar flags; review and revise those posts as needed.
- [ ] Implement link validation to detect and log broken or unreachable links across all `.js` blog and page files.

## 🔍 Search for Static Blog
- [ ] Create `search.json` at build time using metadata from `generate-meta.js`
- [ ] Implement a lightweight React search UI using `search.json` as a local data source (no external API needed)
- [ ] Consider filtering by `POST_TITLE`, `POST_DESCRIPTION`, and `slug`

## 🗺️ Sitemap Display
- [ ] Use the output of `public/sitemap.xml` to auto-generate the `pages/sitemap.js` React page
- [ ] Parse and render all routes with their readable titles in a list or grid format

---

## ✨ Enhancements

### 🔍 SEO and Metadata

- [ ] Add JSON-LD structured data to blog posts and pages using `POST_TITLE`, `POST_DESCRIPTION`, and date
  - Use `<script type="application/ld+json">` injected in the `<Head>` tag
  - Improve search engine indexing and eligibility for rich results

### ⚡ Performance

- [ ] Preload PrismJS theme CSS to avoid unstyled flashes on first render
  - Add `<link rel="preload" as="style">` tag in `_document.js` or layout

### 🏷️ Portfolio Features

- [ ] Add a `tags` array to each portfolio entry in `portfolio.json`
- [ ] Create a tag-based filter system in the portfolio section using React state
  - Optional: Use buttons, dropdown, or chips to toggle visible projects
