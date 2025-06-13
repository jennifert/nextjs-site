# nextjs-site

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![PostCSS](https://img.shields.io/badge/PostCSS-8-dd3a0a?logo=postcss)](https://postcss.org/)
[![PrismJS](https://img.shields.io/badge/PrismJS-1.x-%23734f96?logo=prism)](https://prismjs.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9-purple?logo=eslint)](https://eslint.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Content: CC BY-NC-SA 4.0](https://img.shields.io/badge/Content-CC_BY--NC--SA_4.0-lightgrey)](https://creativecommons.org/licenses/by-nc-sa/4.0/)


The current website for jenntesolin.com — built with Next.js and Tailwind CSS.

This repo is currently being reworked. Images and style improvements are in progress.

---

## 📚 Table of Contents

- [Requirements](#requirements)
- [Version Information](#version-information)
- [🎨 Color Reference](#-color-reference)
- [🚀 Quick Start](#-quick-start)
  - [Lint the Code](#-lint-the-code)
- [🛠 Generate Sitemap, Feed, and Search Metadata](#-generate-sitemap-feed-and-search-metadata)
  - [🧾 Metadata Checklist for Pages and Blog Posts](#-metadata-checklist-for-pages-and-blog-posts)
- [📎 Handling PrismJS Plugin CSS with Next.js](#-handling-prismjs-plugin-css-with-nextjs)
- [Development Tasks](#development-tasks)
- [License](#license)
- [🤖 humans.txt](#-humanstxt)

## Requirements

- Node.js: 20.x
- NPM: 9.x (or compatible with Node 20)

## Version Information

- Tailwind CSS: 4.x
- PostCSS: 8.x
- Next.js: 15.x
- PrismJS: 1.x
- React / React-DOM: 19.x
- ESLint: 9.x

## 🎨 Color Reference

This site uses Tailwind’s built-in palette. Key color usage:

| **Usage**        | **Tailwind Class**     | **Hex Code** |
|------------------|------------------------|--------------|
| Primary Nav BG   | `bg-indigo-500`        | `#6366F1`    |
| Link Focus Ring  | `focus:ring-white`     | `#FFFFFF`    |
| Warning BG       | `bg-yellow-200`        | `#FEF3C7`    |
| Warning Text     | `text-yellow-600`      | `#B45309`    |
| Card Border      | `border-gray-300`      | `#D1D5DB`    |
| Footer Text      | `text-white`           | `#FFFFFF`    |

---

## 🚀 Quick Start

1. Clone the repo:
   ```bash
   git clone https://github.com/jennifert/nextjs-site.git
   cd nextjs-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build and export for static hosting:
   ```bash
   npm run build
   npm run export
   ```

Output will be in the `out/` directory, suitable for DigitalOcean or other static hosts.

### 🧪 Lint the Code

To check for code quality and accessibility issues:

```bash
npm run lint
```

This will run ESLint using your custom configuration and report any warnings or errors.

## 🛠 Generate Sitemap, Feed, and Search Metadata

To automatically generate:

- `public/meta.json` for search and sitemap
- `public/sitemap.xml` for SEO
- `public/feed.xml` for RSS readers

Run the following command:

```bash
npm run generate-meta
```

Make sure all blog/page files are updated with correct `POST_TITLE`, `POST_DESCRIPTION`, and `POST_TAGS` constants. These are used to populate the metadata automatically.

### 🧾 Metadata Checklist for Pages and Blog Posts

Ensure each file in `pages/` or `pages/blog/` contains:

```js
export const POST_TITLE = "My Page or Post Title";
export const POST_DESCRIPTION = "A short, clear description used in meta tags and search.";
export const POST_TAGS = ["tag1", "tag2"]; // Optional but recommended
```

These are used to generate:

| File            | Purpose                    |
|-----------------|----------------------------|
| `meta.json`     | Search index and sitemap   |
| `sitemap.xml`   | SEO                        |
| `feed.xml`      | RSS title + excerpt        |
| `<title>` tag   | Browser tab, SEO, social   |
| `<meta name="description">` | SEO & previews |

⚠ If any fields are missing, the page may be skipped in `meta.json` or show default/fallback metadata.

## 📎 Handling PrismJS Plugin CSS with Next.js

Next.js 15 and Tailwind 4.1 introduce stricter PostCSS rules. PrismJS plugin styles (like toolbar or line numbers) can break if imported directly. Here's the fix:

### ✅ 1. Add a Custom Webpack Rule

In `next.config.js`, add this rule:

```js
webpack: (config) => {
  config.module.rules.push({
    test: /\.prismcss$/,
    use: ['style-loader', 'css-loader'],
  });
  return config;
};
```

This isolates `.prismcss` imports from the PostCSS pipeline.

---

### ✅ 2. Import Prism Styles with `?prismcss` Suffix

In `_app.js` or related components:

```js
import 'prismjs/themes/prism-tomorrow.css?prismcss';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css?prismcss';
import 'prismjs/plugins/toolbar/prism-toolbar.css?prismcss';
```

This ensures only Prism styles are handled by the custom rule.

### ❌ Avoid Raw `.css` Imports

```js
// 🚫 Incorrect:
import 'prismjs/plugins/toolbar/prism-toolbar.css';
```

This causes a build failure in Tailwind/PostCSS 8+ environments.

---

## Development Tasks

See [TODO.md](./TODO.md) for the active task board and enhancements.

---

## License

- 📄 **Code** is licensed under the [MIT License](./LICENSE)
- 📝 **Content** (articles, posts, and media) is licensed under [CC BY-NC-SA 4.0](./LICENSE-CONTENT)

---

## 🤖 humans.txt

For developer credits and site stack details, see [`/humans.txt`](./public/humans.txt)