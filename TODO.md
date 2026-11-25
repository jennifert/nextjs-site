# ✅ TODO List for jenntesolin.com Project

### ✅ Completed Improvements

#### Content Migration

- [x] Complete migration of older notes and posts to MDX

#### Projects Page — November 25, 2026

- [x] Add a more personal introduction to the Projects page
- [x] Add a description for API discoveries and potential projects
- [x] Introduce individual project and API statuses
- [x] Create shared project status configuration
- [x] Create reusable `ProjectStatus` component
- [x] Update `ProjectCard` to display project statuses
- [x] Update `ApiItem` to display statuses and available demo links
- [x] Separate current projects from archived projects
- [x] Preserve earlier projects for historical reference
- [x] Add automatically calculated project and API discovery counts
- [x] Organize API categories into native HTML accordions
- [x] Display the number of API discoveries in each category
- [x] Correct portfolio technology descriptions and terminology

### 📁 Portfolio & Projects

- [ ] Review portfolio entries periodically and update project statuses
- [ ] Add newer hobby projects as appropriate
- [ ] Associate API discoveries with portfolio projects using `portfolioId`
- [ ] Consider separating featured projects from other current projects
- [ ] Verify project source and demo links periodically
- [ ] Test project cards and API accordions on smaller screens
- [ ] Verify keyboard navigation and accessibility of accordions

### 📝 Content Maintenance & Metadata

- [ ] Verify post dates are displayed on the notes index, sitemap, and note pages
- [ ] Verify metadata scripts include both pages and notes
- [ ] Revisit posts marked **Update in progress** and continue updating them
- [ ] Review older technical articles for outdated instructions and dependencies
- [ ] Periodically check internal and external links

### 🗂️ Routing & Structure

- [ ] Review whether search should include only notes or all pages
- [ ] Consider individual project detail pages
- [ ] Consider generating project detail pages from portfolio JSON
- [ ] Associate relevant Notes articles with individual projects

### 🧠 Tag Support

- [ ] Improve tag support for MDX notes and pages
- [ ] Standardize portfolio tags and technology names
- [ ] Allow search/filtering by tags
- [ ] Consider filtering portfolio projects by category, status, or technology
- [ ] Consider a tag archive or tag-based navigation later

### 📷 Photography

- [ ] Investigate Flickr API integration
- [ ] Retrieve only photographs belonging to my Flickr account
- [ ] Consider using a dedicated Flickr portfolio tag to select photographs
- [ ] Investigate build-time generation of photography data
- [ ] Keep API credentials outside the public repository
- [ ] Preserve compatibility with static site deployment

### 🖼️ Social Sharing

- [ ] Add Open Graph meta tags (`og:title`, `og:description`, `og:image`) to notes and pages
- [ ] Use a featured image when available, otherwise fall back to a default site image

### 🧪 Development & Maintenance

- [ ] Review custom CSS periodically and remove unused rules
- [ ] Maintain compatibility with classless Pico CSS
- [ ] Prefer native HTML features over additional JavaScript when appropriate
- [ ] Review dependencies and security advisories periodically
- [ ] Run linting, production builds, and link checks before releases
- [ ] Review documentation when making significant architectural changes
- [ ] Periodically review and repair broken links identified by the link checker.
- [x] Exclude local development URLs from automated link checking.
- [x] Distinguish broken links from external access restrictions.
- [x] Add detailed link-checking reports and summary counts.
- [x] Detect missing static build output before checking links.

### 🧭 Nice-to-have Later

- [ ] Add breadcrumbs to note detail pages if needed
- [ ] Revisit syntax highlighting and potentially restore Prism.js
- [ ] Consider screenshots and development summaries on individual project pages
- [ ] Consider GitHub activity and repository statistics on project pages
- [ ] Investigate Internet Archive integration for website preservation

### 🖥️ Future Infrastructure

- [ ] Plan eventual migration from DigitalOcean to a Canadian OVH VPS
- [ ] Document deployment, HTTPS, backups, and recovery procedures
- [ ] Preserve existing URLs, metadata, RSS feeds, and static site behaviour during migration