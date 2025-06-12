# nextjs-site
The current website for jenntesolin.com. Built with NextJS and TailWind CSS.

Will be re-working the code base. Images will be moved here at some point.

## Requirements
- Node: 20.x
- NPM: 19.x

## Version Information:
- Tailwind: 4.x
- PostCSS: 8.x
- Next: 15.x
- PrismJS: 1.x
- React & React-Dom: 19.x
- ESLint: 9.x

---

## 📎 Handling PrismJS Plugin CSS with Next.js

Next.js 15 and TailwindCSS 4.1 introduce stricter PostCSS handling, which can break when importing CSS directly from `node_modules`, especially for PrismJS plugin styles.

To avoid breaking Tailwind and PostCSS handling, we use a `.prismcss` suffix and a custom Webpack rule.

### ✅ 1. Add a Custom Webpack Rule

In `next.config.js`, add the following:

```js
webpack: (config) => {
  config.module.rules.push({
    test: /\.prismcss$/,
    use: ['style-loader', 'css-loader'],
  });
  return config;
};
```

This isolates Prism plugin CSS files and prevents them from being passed through Next.js's PostCSS pipeline.

---

### ✅ 2. Import PrismJS Styles with `?prismcss`

In your `_app.js` or Prism-related components:

```js
import 'prismjs/themes/prism-tomorrow.css?prismcss';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css?prismcss';
import 'prismjs/plugins/toolbar/prism-toolbar.css?prismcss';
```

Using `?prismcss` ensures the Webpack override targets only these files.

---

### ❌ Do NOT import Prism styles without the `?prismcss` suffix

This will break the build because the raw `.css` files will go through the wrong loader:

```js
// 🚫 This will fail:
import 'prismjs/plugins/toolbar/prism-toolbar.css';
```

Always use the `?prismcss` suffix when importing Prism plugin styles.

## Development Tasks
- See [TODO.md](./TODO.md) for detailed ongoing project work.

## License

- 📄 **Code** is licensed under the [MIT License](./LICENSE)
- 📝 **Content** (articles, posts, images) is licensed under [CC BY-NC-SA 4.0](./LICENSE-CONTENT)