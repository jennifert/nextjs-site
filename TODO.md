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
