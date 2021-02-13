const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const sitemap = require('nextjs-sitemap-generator');
sitemap({
    baseUrl: 'https://jenntesolin-com-sff2s.ondigitalocean.app',
    pagesDirectory: __dirname + "/pages",
    targetDirectory: '_static/'
});

module.exports = withPWA({
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    images: {
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/dkeghqshh/image/upload/v1612975699/',
    },
})
