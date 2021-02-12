const sitemap = require('nextjs-sitemap-generator');
sitemap({
    baseUrl: 'https://jenntesolin-com-7ny3x.ondigitalocean.app',
    pagesDirectory: __dirname + "/pages",
    targetDirectory: '_static/'
});
module.exports = {
    images: {
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/dkeghqshh/image/upload/v1612975699/',
    },
}