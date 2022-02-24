const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    reactStrictMode: true,
    poweredByHeader: false,
    // i18n: {
    //     locales: ['en-CA'],
    //     defaultLocale: 'en-CA',
    // },
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    images: {
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/dkeghqshh/image/upload/v1612975699/',
    },
    webpack: (config, { isServer }) => {
        return config;
    },
})