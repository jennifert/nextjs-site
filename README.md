# nextjs-site

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwindcss&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-8-dd3a0a?logo=postcss&logoColor=white)
![PrismJS](https://img.shields.io/badge/PrismJS-1.x-%23734f96?logo=prism&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-purple?logo=eslint)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Content: CC BY-NC-SA 4.0](https://img.shields.io/badge/Content-License--CC_BY--NC--SA_4.0-lightgrey)


The current website for jenntesolin.com — built with Next.js and Tailwind CSS.

This repo is currently being reworked. Images and style improvements are in progress.

---

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
