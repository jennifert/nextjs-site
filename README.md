# nextjs-site

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Pico CSS](https://img.shields.io/badge/Pico_CSS-v2-0E7490)](https://picocss.com/)
[![MDX](https://img.shields.io/badge/MDX-3.1.1-black)](https://mdxjs.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9-purple?logo=eslint)](https://eslint.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Content: CC BY-NC-SA 4.0](https://img.shields.io/badge/Content-CC_BY--NC--SA_4.0-lightgrey)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Node.js](https://img.shields.io/badge/Node.js-22.16.0-brightgreen?logo=nodedotjs)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-10.9.2-red?logo=npm)](https://www.npmjs.com/)

The current website for **jenntesolin.com** (moving hosts, see under about for temp link) — built with Next.js and React, with older notes being migrated to MDX over time.

🚧 This site has been significantly reworked. Some older content is still being migrated and updated.

---

## Table of Contents

- [Requirements](#requirements)
- [Version Information](#version-information)
- [Current Stack](#current-stack)
- [Quick Start](#quick-start)
- [Linting](#linting)
- [Content Structure](#content-structure)
- [Notes and MDX](#notes-and-mdx)
- [Search, Sitemap, and Metadata](#search-sitemap-and-metadata)
- [Headers and Caching](#headers-and-caching-digitalocean-app-platform)
- [Project Notes](#project-notes)
- [License](#license)
- [humans.txt](#humanstxt)
- [Acknowledgments](#acknowledgments)

## Requirements

- Node.js: 22.16.0
- npm: 10.9.2

## Version Information

- Next.js: 16.x
- React / React DOM: 19.x
- Pico CSS: 2.x
- MDX: 3.x
- ESLint: 9.x

## Current Stack

This site currently uses:

- **Next.js** for routing and page generation
- **React** for components
- **MDX** for notes and older post content
- **Pico CSS (classless)** for base styling
- **Custom CSS** in `styles/style.css` for layout and site-specific tweaks
- **ESLint** for linting

### Styling Notes

The site is being rebuilt with a simple, accessibility-first styling approach.

Base classless styling comes from `styles/pico.classless.min.css`, while most custom styling changes should be made in `styles/style.css`.

In general:

- Use Pico CSS for sensible default HTML styling.
- Use `styles/style.css` for custom layout and component tweaks.
- Avoid overcomplicating page-level styles unless needed.

## Quick Start

1. Clone the repo:

   ```bash
   git clone https://github.com/jennifert/nextjs-site.git
   cd nextjs-site
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build the site:

   ```bash
   npm run build
   ```

5. Start the production server locally:

   ```bash
   npm run start
   ```

## Linting

Run ESLint with:

```bash
npm run lint
```

## Content Structure

This project currently uses a mix of standard Next.js pages and MDX content.

### Main pages

Top-level pages live in `pages/`, for example:

- `pages/index.js`
- `pages/about.js`
- `pages/projects.js`
- `pages/photography.js`
- `pages/notes.js`

### Notes content

Notes are stored in:

```txt
content/notes/*.mdx
```

Supporting note utilities live in:

- `lib/notes.js`
- `pages/notes/[slug].js`

## Notes and MDX

Older post content is being migrated from `.js` page files to `.mdx`.

Each note should include frontmatter similar to:

```md
---
title: "Example Note Title"
description: "A short description for search, metadata, and previews."
date: "2026-04-20"
tags: ["tag1", "tag2"]
---
```

Notes are used by:

- the notes index page
- the site search
- the sitemap
- structured data / page metadata

### Available MDX components

Notes can also use a small set of custom components when needed:

- `Image` — wraps `next/image` for screenshots and note images
- `SafeIframe` — wraps iframe embeds in a reusable container for safer styling and future tweaks

These components are mapped in `pages/notes/[slug].js`.

## Search, Sitemap, and Metadata

Search and sitemap pages currently rely on generated metadata and site content.

Files commonly involved include:

- `public/meta.json`
- `public/sitemap.xml`
- `public/feed.xml`

As the site is updated, metadata generation should account for both:

- standard pages in `pages/`
- MDX notes in `content/notes/`

## Headers and Caching (DigitalOcean App Platform)

To help avoid overly aggressive caching on deployed pages, a `_headers` file can be included in the output.

### Example: `public/_headers`

```txt
/*
  Cache-Control: no-cache, no-store, must-revalidate
  Pragma: no-cache
  Expires: 0
```

This helps ensure static pages are refreshed more consistently after deploys.

## Project Notes

See [TODO.md](./TODO.md) for the current task list and migration notes, and [CHANGELOG.md](./CHANGELOG.md) for recent project updates.

## License

- **Code** is licensed under the [MIT License](./LICENSE)
- **Content** (articles, notes, and media) is licensed under [CC BY-NC-SA 4.0](./LICENSE-CONTENT)

## humans.txt

For developer credits and site stack details, see [`public/humans.txt`](./public/humans.txt)

## Acknowledgments

- [Shields.io](https://shields.io/) for README badges
- [MDX](https://mdxjs.com/) for content authoring
- [Next.js](https://nextjs.org/) for the site framework
- [Awesome README](https://github.com/matiassingers/awesome-readme) — For formatting inspiration
