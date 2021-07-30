const fs = require("fs");
const globby = require("globby");
// import { SITE_DOMAIN } from './lib/constants'
const SITE_DOMAIN = 'https://nextjs-jenn-tes-f8e9r.ondigitalocean.app/'
const getDate = new Date().toISOString();

const generateSitemap = async () => {
    const pages = await globby([
        'pages/**/*.js',
        '!pages/_*.js',
        '!pages/**/[id].js',
        '!pages/api',
        'posts/*.mdx'
    ])

    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map(page => {
                const path = page
                    .replace('pages', '')
                    .replace('.js', '')
                    // .replace('.mdx', '')
                const route = path === '/index' ? '' : path
                return `
                    <url>
                        <loc>${SITE_DOMAIN}${route}</loc>
                        <lastmod>${getDate}</lastmod>
                    </url>
                  `
            })
            .join('')}
      </urlset>
  `

    fs.writeFileSync('public/sitemap.xml', sitemap)

}
module.exports = generateSitemap;