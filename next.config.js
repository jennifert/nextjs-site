const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const generateSitemap = require('./scripts/generate-sitemap');
const generateFeed = require('./scripts/generate-rss');

// const withMDX = require('@next/mdx')({
//     extension: /\.(md|mdx)?$/,
// })

module.exports = withPWA({
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    images: {
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/dkeghqshh/image/upload/v1612975699/',
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            generateSitemap();
            generateFeed();
        }
        return config;
    },
})
    // ,withMDX({
    //     pageExtensions: ['js', 'jsx', 'mdx'],
    // })
