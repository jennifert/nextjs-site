# ✅ TODO List for jenntesolin.com Project

## 🔝 Current Top Priorities
- [ ] Finish the Next.js overhaul and move old blog posts to MDX
    - Finish converting old `.js` posts to `.mdx`

### 📝 Content Maintenance & Metadata
- [ ] Standardize and choose only one!  Quick Tip:, Quick tips:, and Quick Tips:.
- [ ] Display post dates on the notes index, sitemap, and note pages
- [ ] Make sure metadata scripts include both pages and notes
- [ ] Review old notes for broken links, outdated references, and wording cleanups
- [ ] Check old PDFs and attachments still resolve correctly
- [ ] Populate the href of all photos in json data.
- [ ] Refactor `scripts/generate-meta.js` for the new site structure
    - include metadata from `pages/*.js`
    - include note metadata from `content/notes/*.mdx`
    - switch routes from `/blog/` to `/notes/`
    - update RSS output to use notes instead of blog posts
    - make sure `meta.json`, `feed.xml`, and `sitemap.xml` all reflect the new structure

### 🗂️ Routing & Structure
- [ ] Add redirects from old `/blog/...` URLs to new `/notes/...` URLs
- [ ] Confirm search, sitemap, and 404 page use updated Notes wording
- [ ] Decide whether search should include only notes or all pages

### 🎨 Notes / MDX
- [ ] Search note content for flagged terms like **"outdated"** and **"Update in progress"**, then fix as needed
  - Update in progress message: `> <small>Update in progress: This post is based on an older setup and is being kept for reference while I work on a fuller update.</small>`
  - Outdated message: `> <small>Outdated: This post is preserved for reference and may no longer reflect current tools or services.</small>`
  - Review older posts and add one of these notices where appropriate

### 🧠 Tag Support
- [ ] Improve tag support for MDX notes and pages
- [ ] Allow search/filtering by tags
- [ ] Consider a tag archive or tag-based navigation later

### 🖼️ Social Sharing
- [ ] Add Open Graph meta tags (`og:title`, `og:description`, `og:image`) to notes and pages
- [ ] Use a featured image when available, otherwise fall back to a default site image

### 🧭 Nice-to-have Later
- [ ] Add breadcrumbs to note detail pages if needed
- [ ] Add Prism.js back in