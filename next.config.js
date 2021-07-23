const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const generateSitemap = require('./scripts/generate-sitemap');
// const generateFeed = require('./scripts/generate-rss');

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
        }
        return config;
    },
})